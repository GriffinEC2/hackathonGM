# networks.py
# by christophermao (copied over)
# 11/13/23

import numpy as np
import time

import gymnasium as gym
import math
import random
from collections import namedtuple, deque
from itertools import count

from collections import namedtuple, deque
from itertools import count

import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F

import copy

global verbose
verbose = False

# if GPU is to be used
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


Transition = namedtuple('Transition',
                        ('state', 'action', 'next_state', 'reward'))


class DequeMemory(object):

    def __init__(self, capacity):

        self.memory = deque([], maxlen=capacity)

    def push(self, *args):
        """Save a transition"""
        self.memory.append(Transition(*args))

    def sample(self, batch_size):
        return random.sample(self.memory, batch_size)

    def __len__(self):
        return len(self.memory)


class CircularBuffer(object):
    def __init__(self, buffer_size):
        self.index = -1
        self.buffer_size = buffer_size
        self.data = [0 for _ in range(buffer_size)]
        self.is_full_buffer = False

    def push(self, *args):
        self.index += 1
        if self.index >= self.buffer_size:
            self.index = 0
            self.is_full_buffer = True
        self.data[self.index] = Transition(*args)

    def sample(self, batch_size):
        # print(self.data)
        if self.is_full_buffer:
            return random.sample(self.data, batch_size)
        else:
            return random.sample(self.data[:self.index], batch_size)

    def __len__(self):
        if self.is_full_buffer:
            return self.buffer_size
        else:
            if self.index >= 0:
                return self.index
            else:
                return 0


class FeedForwardNN(nn.Module):
    def __init__(self, sizes, activations):
        super(FeedForwardNN, self).__init__()

        layers = []
        for i in range(len(sizes) - 2):
            layers.append(nn.Linear(sizes[i], sizes[i+1]))
            layers.append(activations[i])
        # Add the output layer without activation
        layers.append(nn.Linear(sizes[-2], sizes[-1]))

        self.net = nn.Sequential(*layers)

    def forward(self, x):

        return self.net(x)



class DQN():
    def __init__(self, network_size, activations, batch_size=100, mem_capacity=1_000, EPS_START=1, EPS_END=.1, EPS_DECAY=50_000, LR=1e-2, GAMMA=0.99, TAU=0.001, Storage="circular_buffer"):
        self.BATCH_SIZE = batch_size * 10   # BATCH_SIZE is the number of transitions sampled from the replay buffer
        self.GAMMA = GAMMA                       # GAMMA is the discount factor as mentioned in the previous section
        self.EPS_START = EPS_START                    # EPS_START is the starting value of epsilon
        self.EPS_END = EPS_END                     # EPS_END is the final value of epsilon
        self.EPS_DECAY = EPS_DECAY                 # EPS_DECAY controls the rate of exponential decay of epsilon, higher means a slower decay
        self.TAU = TAU                        # TAU is the update rate of the target network
        self.LR = LR                          # LR is the learning rate of the ``AdamW`` optimizer


        self.episode_durations = []

        # Declare policy and target nets
        self.policy_net = FeedForwardNN(network_size, activations).to(device)
        self.target_net = FeedForwardNN(network_size, activations).to(device)
        self.target_net.load_state_dict(self.policy_net.state_dict())

        self.optimizer = optim.AdamW(self.policy_net.parameters(), lr=self.LR, amsgrad=True)
        if Storage == "circular_buffer":
            self.memory = CircularBuffer(mem_capacity)

        elif Storage == "deque_memoery":
            self.memory = DequeMemory(mem_capacity)
        
        else:
            print("Memory storage not found using Circular Buffer")
            self.memory = CircularBuffer(mem_capacity)

        self.steps_done = 0


    def select_action(self, state):
        global steps_done
        sample = random.random()
        eps_threshold = self.EPS_END + (self.EPS_START - self.EPS_END) * \
            math.exp(-1. * steps_done / self.EPS_DECAY)
        steps_done += 1
        if sample > eps_threshold:
            with torch.no_grad():
                # t.max(1) will return the largest column value of each row.
                # second column on max result is index of where max element was
                # found, so we pick action with the larger expected reward.
                return self.policy_net(state).max(1).indices.view(1, 1)
        else:
            return torch.tensor([[env.action_space.sample()]], device=device, dtype=torch.long)


    def optimize_model(self):
        if len(self.memory) < self.BATCH_SIZE:
            return
        transitions = self.memory.sample(self.BATCH_SIZE)
        # Transpose the batch (see https://stackoverflow.com/a/19343/3343043 for
        # detailed explanation). This converts batch-array of Transitions
        # to Transition of batch-arrays.
        batch = Transition(*zip(*transitions))

        # Compute a mask of non-final states and concatenate the batch elements
        # (a final state would've been the one after which simulation ended)
        non_final_mask = torch.tensor(tuple(map(lambda s: s is not None,
                                            batch.next_state)), device=device, dtype=torch.bool)
        non_final_next_states = torch.cat([s for s in batch.next_state
                                                    if s is not None])
        state_batch = torch.cat(batch.state)
        action_batch = torch.cat(batch.action)
        reward_batch = torch.cat(batch.reward)

        # Compute Q(s_t, a) - the model computes Q(s_t), then we select the
        # columns of actions taken. These are the actions which would've been taken
        # for each batch state according to policy_net
        state_action_values = self.policy_net(state_batch).gather(1, action_batch)

        # Compute V(s_{t+1}) for all next states.
        # Expected values of actions for non_final_next_states are computed based
        # on the "older" target_net; selecting their best reward with max(1).values
        # This is merged based on the mask, such that we'll have either the expected
        # state value or 0 in case the state was final.
        next_state_values = torch.zeros(self.BATCH_SIZE, device=device)
        with torch.no_grad():
            next_state_values[non_final_mask] = self.target_net(non_final_next_states).max(1).values
        # Compute the expected Q values
        expected_state_action_values = (next_state_values * self.GAMMA) + reward_batch

        # Compute Huber loss
        criterion = nn.SmoothL1Loss()
        loss = criterion(state_action_values, expected_state_action_values.unsqueeze(1))

        # Optimize the model
        self.optimizer.zero_grad()
        loss.backward()
        # In-place gradient clipping
        torch.nn.utils.clip_grad_value_(self.policy_net.parameters(), 100)
        self.optimizer.step()
        return loss

def train(self, env):
    if torch.cuda.is_available():
        num_episodes = 600
    else:
        num_episodes = 50
    total_loss = []
    for i_episode in range(num_episodes):
        # Initialize the environment and get its state
        state, info = self.env.reset()
        state = torch.tensor(state, dtype=torch.float32, device=device).unsqueeze(0)
        for t in count():
            action = self.select_action(state)
            observation, reward, terminated, truncated, _ = env.step(action.item())
            reward = torch.tensor([reward], device=device)
            done = terminated or truncated

            if terminated:
                next_state = None
            else:
                next_state = torch.tensor(observation, dtype=torch.float32, device=device).unsqueeze(0)

            # Store the transition in memory
            self.memory.push(state, action, next_state, reward)

            # Move to the next state
            state = next_state

            # Perform one step of the optimization (on the policy network)
            loss = self.optimize_model()
            total_loss.append(loss)

            # Soft update of the target network's weights
            # θ′ ← τ θ + (1 −τ )θ′
            target_net_state_dict = self.target_net.state_dict()
            policy_net_state_dict = self.policy_net.state_dict()
            for key in policy_net_state_dict:
                target_net_state_dict[key] = policy_net_state_dict[key]*self.TAU + target_net_state_dict[key]*(1-self.TAU)
            self.target_net.load_state_dict(target_net_state_dict)

            if done:
                break
    return total_loss


def get_network(sizes, activations, normal_para_extract=False):
    layers = []
    for i in range(len(sizes) - 2):
        layers.append(nn.Linear(sizes[i], sizes[i+1]))
        layers.append(activations[i])
    # Add the output layer without activation
    layers.append(nn.Linear(sizes[-2], sizes[-1]))
    if normal_para_extract:
        layers.append(NormalParamExtractor())

    return nn.Sequential(*layers)

# from tensordict.nn import TensorDictModule
# from tensordict.nn.distributions import NormalParamExtractor
# from torch import nn

# from torchrl.collectors import SyncDataCollector
# from torchrl.data.replay_buffers import ReplayBuffer
# from torchrl.data.replay_buffers.samplers import SamplerWithoutReplacement
# from torchrl.data.replay_buffers.storages import LazyTensorStorage
# from torchrl.envs import (
#     Compose,
#     DoubleToFloat,
#     ObservationNorm,
#     StepCounter,
#     TransformedEnv,
# )
# from torchrl.envs.libs.gym import GymEnv
# from torchrl.envs.utils import check_env_specs, ExplorationType, set_exploration_type
# from torchrl.modules import ProbabilisticActor, TanhNormal, ValueOperator
# from torchrl.objectives import ClipPPOLoss
# from torchrl.objectives.value import GAE
# from tqdm import tqdm


# # sizes, activations, storage, lr, max_grad_norm, frames_per_batch, total_frams, sub_batch_size = 64, 
# #       num_epochs = 10, clip_epsilon = 0.2, gamma = 0.99, lmbda = 0.95, entropy_eps = 1e-4

# # network_size, activations, Storage, LR, max_grad_norm, frames_per_batch, total_frams, 
# #       gamma = 0.99, tau = 0.01, EPS_START=1, EPS_END=0.1, EPS_DECAY=100_000

# def PPO_train(sizes, activations, storage, lr, max_grad_norm, frames_per_batch, total_frams, sub_batch_size = 64, 
#         num_epochs = 10, clip_epsilon = 0.2, gamma = 0.99, lmbda = 0.95, entropy_eps = 1e-4):
    
#     is_fork = multiprocessing.get_start_method() == "fork"
#     device = (
#         torch.device(0)
#         if torch.cuda.is_available() and not is_fork
#         else torch.device("cpu")
#     )


    
    
#     base_env = GymEnv("InvertedDoublePendulum-v4", device=device)


#     env = TransformedEnv(
#     base_env,
#     Compose(
#         # normalize observations
#         ObservationNorm(in_keys=["observation"]),
#         DoubleToFloat(),
#         StepCounter(),
#     ),
#     )
#     env.transform[0].init_stats(num_iter=1000, reduce_dim=0, cat_dim=0)
#     check_env_specs(env)

#     rollout = env.rollout(3)
#     print("rollout of three steps:", rollout)
#     print("Shape of the rollout TensorDict:", rollout.batch_size)

#     actor_net = get_network(sizes, activations, normal_para_extract=True)

#     policy_module = TensorDictModule(
#     actor_net, in_keys=["observation"], out_keys=["loc", "scale"]
#     )

#     policy_module = ProbabilisticActor(
#     module=policy_module,
#     spec=env.action_spec,
#     in_keys=["loc", "scale"],
#     distribution_class=TanhNormal,
#     distribution_kwargs={
#         "min": env.action_spec.space.low,
#         "max": env.action_spec.space.high,
#     },
#     return_log_prob=True,
#     # we'll need the log-prob for the numerator of the importance weights
#     )

#     activations.append(1)
#     value_net = get_network(sizes, activations, normal_para_extract=True)

#     value_module = ValueOperator(
#         module=value_net,
#         in_keys=["observation"],
#     )

#     print("Running policy:", policy_module(env.reset()))
#     print("Running value:", value_module(env.reset()))

#     collector = SyncDataCollector(
#         env,
#         policy_module,
#         frames_per_batch=frames_per_batch,
#         total_frames=total_frames,
#         split_trajs=False,
#         device=device,
#     )
#     if storage == "circular_buffer":
#         replay_buffer = ReplayBuffer(
#             storage=CircularBuffer(frames_per_batch),
#             sampler=SamplerWithoutReplacement
#         )
#     elif storage == "deque_memory":
#         replay_buffer = ReplayBuffer(
#             storage=DequeMemory(frames_per_batch),
#             sampler=SamplerWithoutReplacement
#         )
#     else: 
#         replay_buffer = ReplayBuffer(
#             storage=LazyTensorStorage(max_size=frames_per_batch),
#             sampler=SamplerWithoutReplacement(),
#         )


#     advantage_module = GAE(
#     gamma=gamma, lmbda=lmbda, value_network=value_module, average_gae=True
#     )

#     loss_module = ClipPPOLoss(
#         actor_network=policy_module,
#         critic_network=value_module,
#         clip_epsilon=clip_epsilon,
#         entropy_bonus=bool(entropy_eps),
#         entropy_coef=entropy_eps,
#         # these keys match by default but we set this for completeness
#         critic_coef=1.0,
#         loss_critic_type="smooth_l1",
#     )

#     optim = torch.optim.Adam(loss_module.parameters(), lr)
#     scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(
#         optim, total_frames // frames_per_batch, 0.0
#     )

#     logs = defaultdict(list)
#     pbar = tqdm(total=total_frames)
#     eval_str = ""

#     # We iterate over the collector until it reaches the total number of frames it was
#     # designed to collect:
#     for i, tensordict_data in enumerate(collector):
#         # we now have a batch of data to work with. Let's learn something from it.
#         for _ in range(num_epochs):
#             # We'll need an "advantage" signal to make PPO work.
#             # We re-compute it at each epoch as its value depends on the value
#             # network which is updated in the inner loop.
#             advantage_module(tensordict_data)
#             data_view = tensordict_data.reshape(-1)
#             replay_buffer.extend(data_view.cpu())
#             for _ in range(frames_per_batch // sub_batch_size):
#                 subdata = replay_buffer.sample(sub_batch_size)
#                 loss_vals = loss_module(subdata.to(device))
#                 loss_value = (
#                     loss_vals["loss_objective"]
#                     + loss_vals["loss_critic"]
#                     + loss_vals["loss_entropy"]
#                 )

#                 # Optimization: backward, grad clipping and optimization step
#                 loss_value.backward()
#                 # this is not strictly mandatory but it's good practice to keep
#                 # your gradient norm bounded
#                 torch.nn.utils.clip_grad_norm_(loss_module.parameters(), max_grad_norm)
#                 optim.step()
#                 optim.zero_grad()

#         logs["reward"].append(tensordict_data["next", "reward"].mean().item())
#         pbar.update(tensordict_data.numel())
#         cum_reward_str = (
#             f"average reward={logs['reward'][-1]: 4.4f} (init={logs['reward'][0]: 4.4f})"
#         )
#         logs["step_count"].append(tensordict_data["step_count"].max().item())
#         stepcount_str = f"step count (max): {logs['step_count'][-1]}"
#         logs["lr"].append(optim.param_groups[0]["lr"])
#         lr_str = f"lr policy: {logs['lr'][-1]: 4.4f}"
#         if i % 10 == 0:
#             # We evaluate the policy once every 10 batches of data.
#             # Evaluation is rather simple: execute the policy without exploration
#             # (take the expected value of the action distribution) for a given
#             # number of steps (1000, which is our ``env`` horizon).
#             # The ``rollout`` method of the ``env`` can take a policy as argument:
#             # it will then execute this policy at each step.
#             with set_exploration_type(ExplorationType.MEAN), torch.no_grad():
#                 # execute a rollout with the trained policy
#                 eval_rollout = env.rollout(1000, policy_module)
#                 logs["eval reward"].append(eval_rollout["next", "reward"].mean().item())
#                 logs["eval reward (sum)"].append(
#                     eval_rollout["next", "reward"].sum().item()
#                 )
#                 logs["eval step_count"].append(eval_rollout["step_count"].max().item())
#                 eval_str = (
#                     f"eval cumulative reward: {logs['eval reward (sum)'][-1]: 4.4f} "
#                     f"(init: {logs['eval reward (sum)'][0]: 4.4f}), "
#                     f"eval step-count: {logs['eval step_count'][-1]}"
#                 )
#                 del eval_rollout
#         pbar.set_description(", ".join([eval_str, cum_reward_str, stepcount_str, lr_str]))

#         # We're also using a learning rate scheduler. Like the gradient clipping,
#         # this is a nice-to-have but nothing necessary for PPO to work.
#         scheduler.step()

#     # plt.figure(figsize=(10, 10))
#     # plt.subplot(2, 2, 1)
#     # plt.plot(logs["reward"])
#     # plt.title("training rewards (average)")
#     # plt.subplot(2, 2, 2)
#     # plt.plot(logs["step_count"])
#     # plt.title("Max step count (training)")
#     # plt.subplot(2, 2, 3)
#     # plt.plot(logs["eval reward (sum)"])
#     # plt.title("Return (test)")
#     # plt.subplot(2, 2, 4)
#     # plt.plot(logs["eval step_count"])
#     # plt.title("Max step count (test)")
#     # plt.show()

def PPO_train(env, sizes, activations, storage, lr, frames_per_batch, total_frames):
    epochs = total_frames // frames_per_batch
    agent = PPO(sizes, activations, storage, lr, gamma, epochs, eps=0.2)
    for i in epochs:
        if torch.cuda.is_available():
            num_episodes = 600
        else:
            num_episodes = 50
        total_loss = []
        for i_episode in range(num_episodes):
            # Initialize the environment and get its state
            state, info = self.env.reset()
            state = torch.tensor(state, dtype=torch.float32, device=device).unsqueeze(0)
            for t in count():
                action = self.select_action(state)
                observation, reward, terminated, truncated, _ = env.step(action.item())
                reward = torch.tensor([reward], device=device)
                done = terminated or truncated

                if terminated:
                    next_state = None
                else:
                    next_state = torch.tensor(observation, dtype=torch.float32, device=device).unsqueeze(0)

                # Store the transition in memory
                self.memory.push(state, action, next_state, reward)

                # Move to the next state
                state = next_state

                # Perform one step of the optimization (on the policy network)
                loss = self.optimize_model()
                total_loss.append(loss)

                # Soft update of the target network's weights
                # θ′ ← τ θ + (1 −τ )θ′
                target_net_state_dict = self.target_net.state_dict()
                policy_net_state_dict = self.policy_net.state_dict()
                for key in policy_net_state_dict:
                    target_net_state_dict[key] = policy_net_state_dict[key]*self.TAU + target_net_state_dict[key]*(1-self.TAU)
                self.target_net.load_state_dict(target_net_state_dict)

                if done:
                    break
        

class PPO:
    def __init__(self, network_size, activations, lr, gamma, ppo_epochs, eps):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        self.actor = FeedForwardNN().to(self.device)
        self.critic = FeedForwardNN(state_dim).to(self.device)

        self.actor_optimizer = optim.Adam(self.actor.parameters(), lr=lr)
        self.critic_optimizer = optim.Adam(self.critic.parameters(), lr=lr)

        self.gamma = gamma
        self.ppo_epochs = ppo_epochs
        self.eps = eps

    def act(self, state):
        state = torch.tensor(state).float().to(self.device)
        probs = self.actor(state)
        action = torch.distributions.Categorical(probs).sample().item()
        return action

    def learn(self, experiences):
        states, actions, rewards, next_states, dones = zip(*experiences)
        states = torch.tensor(states).float().to(self.device)
        actions = torch.tensor(actions).to(self.device)
        rewards = torch.tensor(rewards).float().to(self.device)
        next_states = torch.tensor(next_states).float().to(self.device)
        dones = torch.tensor(dones).float().to(self.device)

        # Calculate returns and advantages
        R = 0
        returns = []
        advantages = []
        for r, _ in reversed(experiences):
            R = r + self.gamma * R
            returns.insert(0, R)
        returns = torch.tensor(returns, dtype=torch.float32).to(self.device)
        for (s, a, r, n_s, d) in experiences:
            v = self.critic(torch.tensor(s).float().to(self.device))
            A = r + self.gamma * self.critic(torch.tensor(n_s).float().to(self.device)) - v.detach()
            advantages.append(A)
        advantages = torch.tensor(advantages, dtype=torch.float32).to(self.device)

        # PPO Updates (actor and critic)
        for _ in range(self.ppo_epochs):
            # Actor update
            actor_probs = self.actor(states)
            ratios = torch.exp(actor_probs - torch.gather(actor_probs, 1, actions.unsqueeze(1)).squeeze(1))
            clipped_ratios = torch.clamp(ratios, 1 - self.eps, 1 + self.eps)
            actor_loss = -torch.min(ratios * advantages, clipped_ratios * advantages).mean()


def DQN_train(network_size, activations, Storage, LR, frames_per_batch, total_frams, 
            gamma = 0.99, tau = 0.01, EPS_START=1, EPS_END=0.1, EPS_DECAY=100_000):
    from graphs import plot_lines, plot_mov_avg_lines


    env = gym.make("CartPole-v1")


    n_actions = env.action_space.n
    # Get the number of state observations
    state, info = env.reset()
    n_observations = len(state)
    # set up matplotlib


    # Activation Functions: https://pytorch.org/docs/stable/nn.functional.html

    activations = [nn.Relu, nn.Relu, nn.Relu, nn.Relu, nn.Sigmoid]
    agent = DQN(network_size, activations, batch_size=frames_per_batch, mem_capacity=total_frams, EPS_START=EPS_START, EPS_END=EPS_END, 
                EPS_DECAY=EPS_DECAY, LR=LR, GAMMA=gamma, TAU=tau, Storage=Storage)
    loss = agent.train(env)
    
    return loss


def organize(response):
    if response[0] == 0:
        PPO_train(response[1:])
    elif response[0] == 1:
        DQN_train(response[1:])

    # response = [PPO or DQN (0 or 1), network_size, storage, lr, max_grad_norm, frames_per_batch, total_frames]

    # it's going to be a list
    # The first element will be 0 or 1 depending on ppo or dqn
    # the second elemt will be a list of ints that decides the network size which you can just pass to DQN_train or PPO_train




