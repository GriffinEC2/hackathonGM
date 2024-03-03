import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ParametersPge.module.css";
import { useState } from "react";


const ParametersPge = () => {
  const navigate = useNavigate();

  const onLogoFooterContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonMenuClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonMenu1Click = useCallback(() => {
    navigate("/carbon-footprint-calculator-page");
  }, [navigate]);

  const onButtonMenu2Click = useCallback(() => {
    navigate("/learn");
  }, [navigate]);

  const onButtonMenu3Click = useCallback(() => {
    navigate("/what-can-i-do-page");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/graph-page");
  }, [navigate]);


  const [accuracy, setAccuracy] = useState(2)
  const [inputValue, setInputValue] = useState("");

  const submitToApi = (e) => {
    // e.preventDefault();
    
    fetch(`http://127.0.0.1:5000/api?data=${inputValue}`)
    .then(res => res.json())
    .then(data => {
      setAccuracy(data.accuracy);
    })
  }

  return (
    <div className={styles.parametersPge}>
      <div className={styles.parametersPage}>
        <div className={styles.sidebar}>
          <div className={styles.logoFooterParent}>
            <div
              className={styles.logoFooter}
              onClick={onLogoFooterContainerClick}
            >
              <img className={styles.glowIcon} alt="" src="/glow.svg" />
              <div className={styles.logoDesigncode}>
                <img
                  className={styles.appBlocksIcon}
                  alt=""
                  src="/app-blocks.svg"
                />
              </div>
              <b className={styles.company}> Hackathon</b>
            </div>
            <div className={styles.sideMenu}>
              <div className={styles.glow} />
              <div className={styles.outline} />
              <button className={styles.buttonMenu} onClick={onButtonMenuClick}>
                <img
                  className={styles.mediaCirclesPlayCircles}
                  alt=""
                  src="/media-circles-play-circles.svg"
                />
                <div className={styles.account}>Home</div>
                <img
                  className={styles.mediaCirclesPlayCircles1}
                  alt=""
                  src="/media-circles-play-circles.svg"
                />
                <div className={styles.glow1} />
              </button>
              <button
                className={styles.buttonMenu1}
                onClick={onButtonMenu1Click}
              >
                <img
                  className={styles.mediaCirclesPlayCircles}
                  alt=""
                  src="/hand-point-finger.svg"
                />
                <div className={styles.account}>Choose Eviroment</div>
                <img
                  className={styles.handPointFinger1}
                  alt=""
                  src="/hand-point-finger.svg"
                />
                <div className={styles.glow1} />
              </button>
              <button
                className={styles.buttonMenu2}
                onClick={onButtonMenu2Click}
              >
                <img
                  className={styles.menuSquareIcon}
                  alt=""
                  src="/menu-square.svg"
                />
                <div className={styles.account2}>Change Hyper-Parameters</div>
                <img
                  className={styles.mediaCirclesPlayCircles1}
                  alt=""
                  src="/menu-square.svg"
                />
                <div className={styles.glow3} />
              </button>
              <button
                className={styles.buttonMenu3}
                onClick={onButtonMenu3Click}
              >
                <img
                  className={styles.mediaCirclesPlayCircles}
                  alt=""
                  src="/image.svg"
                />
                <div className={styles.account}>Results</div>
                <img
                  className={styles.handPointFinger1}
                  alt=""
                  src="/image.svg"
                />
                <div className={styles.glow1} />
              </button>
            </div>
          </div>
          <div className={styles.sideMenu1}>
            <div className={styles.glow5} />
            <div className={styles.outline1} />
            <div className={styles.divider}>
              <div className={styles.line} />
            </div>
            <button className={styles.buttonMenu4}>
              <img
                className={styles.mediaCirclesPlayCircles}
                alt=""
                src="/settings-2.svg"
              />
              <div className={styles.account}>Settings</div>
              <img
                className={styles.handPointFinger1}
                alt=""
                src="/settings-2.svg"
              />
              <div className={styles.glow1} />
            </button>
            <button className={styles.buttonMenu5}>
              <img
                className={styles.mediaCirclesPlayCircles}
                alt=""
                src="/help.svg"
              />
              <div className={styles.account}>Help center</div>
              <img className={styles.handPointFinger1} alt="" src="/help.svg" />
              <div className={styles.glow1} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.questions}>
        <div className={styles.questionsInner}>
          <button
            className={styles.seeHowItTrainsWrapper}
            onClick={onFrameButtonClick}
          >
            <b className={styles.seeHowIt}>See how it trains!</b>
          </button>
        </div>
        <div className={styles.totalFrames}>
          <div className={styles.frame} />
          <form onSubmit={submitToApi}>
            <input
              className={styles.typeInResponse}
              placeholder="0 Type your value here"
              type="text"
              onChange={(e) => setInputValue([0, e.target.value])}
            />
          </form>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.parameter}>Frames Per Batch</div>
            </div>
            <div className={styles.divider1}>
              <div className={styles.line1} />
            </div>
            <div className={styles.descLoremIpsum}>
              Frames per batch determines how many observations from the
              environment are grouped together for training a neural network at
              one time. It impacts both the efficiency and stability of
              learning, as it allows the network to process multiple pieces of
              data simultaneously, improving learning speed while preventing
              instability.
            </div>
          </div>
        </div>
        <div className={styles.framesPerBatch}>
          <div className={styles.frame} />
          <form onSubmit={submitToApi}>
            <input
              className={styles.typeInResponse}
              placeholder="1 Type your value here"
              type="text"
              onChange={(e) => setInputValue([1, e.target.value]) }
            />
          </form>
          <div className={styles.content}>
            <div className={styles.title}>
              <div className={styles.parameter}>Total Frames</div>
            </div>
            <div className={styles.divider1}>
              <div className={styles.line1} />
            </div>
            <div className={styles.descLoremIpsum}>
              Total frames refers to the total number of observations or frames
              collected from the environment during the entire training process
              of a reinforcement learning algorithm. It represents the amount of
              experience the algorithm accumulates over time, influencing its
              learning capabilities and eventual performance.
            </div>
          </div>
        </div>
        <div className={styles.learningRate}>
          <div className={styles.frame} />
          <form onSubmit={submitToApi}>
            <input
              className={styles.typeInResponse}
              placeholder="2 Type your value here"
              type="text"
              onChange={(e) => setInputValue([2, e.target.value])}
            />
          </form>
          <div className={styles.content2}>
            <div className={styles.title}>
              <div className={styles.parameter}>Learning Rate</div>
            </div>
            <div className={styles.divider1}>
              <div className={styles.line1} />
            </div>
            <div className={styles.descLoremIpsum}>
              <p className={styles.theLearningRate}>
                The learning rate in machine learning determines the step size
                at which a model adjusts its parameters during training,
                affecting the speed and stability of convergence. It's a crucial
                hyper-parameter that balances the trade-off between rapid
                learning and overshooting optimal solutions.
              </p>
              <p className={styles.theLearningRate}>&nbsp;</p>
              <p className={styles.theLearningRate}>
                Recommended range is between 0.00001 and 0.1
              </p>
            </div>
          </div>
        </div>
        <div className={styles.storage}>
          <div className={styles.parameterbox1}>
            <div className={styles.frame} />
            <div className={styles.typeInResponse3}>
              <div className={styles.typeInResponseChild} />
              <div className={styles.typeYourAnswer}>Type your value here</div>
            </div>
            <div className={styles.content2}>
              <div className={styles.title}>
                <div className={styles.parameter}>Storage</div>
              </div>
              <div className={styles.divider1}>
                <div className={styles.line1} />
              </div>
              <div className={styles.descLoremIpsum}>
                <p
                  className={styles.theLearningRate}
                >{`Circular storage structures, such as circular buffers, optimize memory usage by reusing space efficiently, while deques (double-ended queues) offer versatility with fast insertion and deletion operations at both ends, making them suitable for a wide range of dynamic data storage needs. `}</p>
                <p className={styles.theLearningRate}>&nbsp;</p>
                <p className={styles.theLearningRate}>
                  Choices are Circular Buffer or Deque Memory
                </p>
              </div>
            </div>
          </div>
          <button className={styles.choice} onClick={(e) => {
              setInputValue([6, 1]);
              submitToApi([e]);
            }}>
            <div className={styles.choiceChild} />
            <div className={styles.choice1}>Deque Memory</div>
          </button>
          <button className={styles.choice2} onClick={(e) => {
              setInputValue([6, 0]);
              submitToApi(e);
            }}>
            <div className={styles.choiceChild} />
            <div className={styles.choice1}>Circular Buffer</div>
          </button>
        </div>
        <div className={styles.activationFunctions}>
          <div className={styles.frame} />
          <form onSubmit={submitToApi}>
            <input
              className={styles.typeInResponse}
              placeholder="3 Type your value here"
              type="text"
              onChange={(e) => setInputValue([3, e.target.value])}
            />
          </form>
          <div className={styles.content2}>
            <div className={styles.title}>
              <div className={styles.parameter}>Activation Functions</div>
            </div>
            <div className={styles.divider1}>
              <div className={styles.line1} />
            </div>
            <div className={styles.descLoremIpsum}>
              <p className={styles.theLearningRate}>
                {`Activation functions introduce non-linearity to neural networks. They enable neural networks to model complex relationships and capture nonlinear patterns within data, enhancing the network's ability to learn and make predictions. Find a comprehensive list `}
                <a
                  className={styles.here}
                  href="https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity"
                  target="_blank"
                >
                  <span className={styles.here1}>here</span>
                </a>
                . You need the umber of activation functions to be the number of
                layers plus one.
              </p>
              <p className={styles.theLearningRate}>
                Example: [nn.ReLU, nn.ReLU, nn.SiLU, nn.Sigmoid]
              </p>
            </div>
          </div>
        </div>
        <div className={styles.nueronsPerLayer}>
          <div className={styles.frame} />
          <form onSubmit={submitToApi}>
            <input
              className={styles.typeInResponse}
              placeholder="4 Type your value here"
              type="text"
              onChange={(e) => setInputValue([4, e.target.value])}
            />
          </form>
          <div className={styles.content2}>
            <div className={styles.title}>
              <div className={styles.parameter}>Neurons Per Layer</div>
            </div>
            <div className={styles.divider1}>
              <div className={styles.line1} />
            </div>
            <div
              className={styles.descLoremIpsum}
            >{`Typically, smaller networks with fewer neurons per layer are preferred to reduce computational overhead. As the complexity of the task grows, larger networks with more neurons per layer may be necessary to better represent the structure of the problem. You can input any number of neurons and layers. An example of two layers of 128 and a final layer of 64 would look like: [128, 128, 64] `}</div>
          </div>
        </div>
        <div className={styles.ppqVsDqn}>
          <div className={styles.parameterbox1}>
            <div className={styles.frame} />
            <div className={styles.typeInResponse3}>
              <div className={styles.typeInResponseChild} />
              <div className={styles.typeYourAnswer}>Type your value here</div>
            </div>
            <div className={styles.content2}>
              <div className={styles.title}>
                <div className={styles.parameter}>PPQ vs DQN</div>
              </div>
              <div className={styles.divider1}>
                <div className={styles.line1} />
              </div>
              <div className={styles.descLoremIpsum}>
                PPO and DQN are reinforcement learning algorithms tailored for
                different types of environments. PPO is well-suited for
                continuous action spaces, prioritizing stability and ease of
                implementation, making it ideal for tasks like robotic control.
                DQN, on the other hand, excels in discrete action spaces, such
                as video games, by learning the value function to estimate
                expected rewards for actions in specific states.
              </div>
            </div>
          </div>
          <button className={styles.choice} onClick={(e) => {
              setInputValue([5, 1]);
              submitToApi([e]);
            }}>
            <div className={styles.choiceChild} />
            <div className={styles.choice1}>DQN</div>
          </button>
          <button className={styles.choice2} onClick={(e) => {
              setInputValue([5, 0]);
              submitToApi(e);
            }}>
            <div className={styles.choiceChild} />
            <div className={styles.choice1}>PPO</div>
          </button>
        </div>
      </div>
      <div className={styles.changeHyperParameters}>
        Change Hyper-Parameters
      </div>
    </div>
  );
};

export default ParametersPge;
