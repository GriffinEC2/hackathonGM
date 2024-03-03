import styles from "./Ghdhretxc.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Ghdhretxc = () => {
  const navigate = useNavigate();
  const handleChangeParameters = useCallback(() => {
    navigate("/parameters-pge");
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
    <div className={styles.ghdhretxc}>
      <div className={styles.mything}>
        <button className={styles.rectImage} onClick={(e) => {
              setInputValue([7, 0]);
              submitToApi([e]);
            }} />
        <img
          className={styles.img38851Icon}
          loading="lazy"
          alt=""
          src="/img-3885-1@2x.png"
        />
        <div className={styles.thisIsEnviromentAndStuffCWrapper}>
          <div className={styles.thisIsEnviromentContainer}>
            <p className={styles.cartPole}>Cart Pole</p>
            <p
              className={styles.theCartpoleEnvironment}
            >{`The CartPole environment, part of the OpenAI Gym toolkit, is a classic reinforcement learning benchmark designed to test and develop algorithms for balancing an inverted pendulum. In this simulated environment, a pole is attached to a movable cart, and the goal is to keep the pole upright by controlling the cart's lateral movements. `}</p>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <button className={styles.instanceChild} onClick={(e) => {
              setInputValue([7, 1]);
              submitToApi([e]);
            }}/>
        <img
          className={styles.img38851Icon1}
          loading="lazy"
          alt=""
          src="/img-3885-1@2x.png"
        />
        <div className={styles.thisIsEnviromentAndStuffCContainer}>
          <div className={styles.thisIsEnviromentContainer1}>
            <p className={styles.lunarLander}>Lunar Lander</p>
            <p
              className={styles.theLunarLander}
            >{`The Lunar Lander environment in the OpenAI Gym is a simulation designed to emulate the challenge of landing a spacecraft on the lunar surface. In this scenario, the agent controls a lunar lander module with thrusters to navigate and safely land on a predefined landing pad. `}</p>
          </div>
        </div>
      </div>
      <div className={styles.mything1}>
        <button className={styles.rectEnvInfo} onClick={(e) => {
              setInputValue([7, 2]);
              submitToApi([e]);
            }}/>
        <img
          className={styles.img38851Icon2}
          loading="lazy"
          alt=""
          src="/img-3885-1-2@2x.png"
        />
        <div className={styles.thisIsEnviromentAndStuffCFrame}>
          <div className={styles.thisIsEnviromentContainer2}>
            <p className={styles.pacMan}>Pac-Man</p>
            <p className={styles.thePacManEnvironment}>
              The Pac-Man environment in OpenAI Gym, known as "gym[atari]:
              atari_py," is a classic and iconic simulation of the renowned
              arcade game. In this environment, the agent controls the legendary
              Pac-Man character navigating through a maze filled with pellets,
              power-ups, and ghosts. The state of the environment is represented
              by the pixel values of the screen, providing a visual input to the
              agent.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mything2}>
        <button className={styles.mythingChild} onClick={(e) => {
              setInputValue([7, 3]);
              submitToApi([e]);
            }}/>
        <img
          className={styles.img38851Icon3}
          loading="lazy"
          alt=""
          src="/img-3885-1-3@2x.png"
        />
        <div className={styles.frameDiv}>
          <div className={styles.thisIsEnviromentContainer3}>
            <p className={styles.pusher}>Pusher</p>
            <p className={styles.thePusherEnvironment}>
              The Pusher environment in OpenAI Gym is a robotics simulation
              designed to challenge reinforcement learning agents in the context
              of robotic control and manipulation. In this environment, the
              agent controls a robotic arm with the goal of pushing an object to
              a specified target location. The state of the environment includes
              information about the position, velocity, and orientation of the
              robotic arm, as well as the position of the object.
            </p>
          </div>
        </div>
      </div>
      <button className={styles.textParams} onClick={ handleChangeParameters }>
        <h1 className={styles.changeParameters}>Change Parameters</h1>
      </button>
    </div>
  );
};

export default Ghdhretxc;
