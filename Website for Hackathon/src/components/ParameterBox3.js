import styles from "./ParameterBox3.module.css";

const ParameterBox3 = () => {
  return (
    <section className={styles.parameterbox1}>
      <div className={styles.frame} />
      <div className={styles.typeInResponse}>
        <div className={styles.typeInResponseChild} />
        <div className={styles.typeYourAnswer}>Type your value here</div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.parameter}>PPQ vs DQN</div>
        </div>
        <div className={styles.tYPEINPUT}>
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.descLoremIpsum}>
          PPO and DQN are reinforcement learning algorithms tailored for
          different types of environments. PPO is well-suited for continuous
          action spaces, prioritizing stability and ease of implementation,
          making it ideal for tasks like robotic control. DQN, on the other
          hand, excels in discrete action spaces, such as video games, by
          learning the value function to estimate expected rewards for actions
          in specific states.
        </div>
      </div>
    </section>
  );
};

export default ParameterBox3;
