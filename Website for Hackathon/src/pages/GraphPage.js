import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GraphPage.module.css";

const GraphPage = () => {
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
    navigate("/parameters-pge");
  }, [navigate]);

  return (
    <div className={styles.graphPage}>
      <div className={styles.pageComponentDoNotEdit}>
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
                  className={styles.mediaCirclesPlayCircles}
                  alt=""
                  src="/menu-square.svg"
                />
                <div className={styles.account}>Change Hyper-Parameters</div>
                <img
                  className={styles.handPointFinger1}
                  alt=""
                  src="/menu-square.svg"
                />
                <div className={styles.glow1} />
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
      <b className={styles.lossFromTraining}>Loss from Training</b>
      <div className={styles.loss}>
        <div className={styles.lossChild} />
        <div className={styles.div}>4.51</div>
        <div className={styles.inReinforcementLearningContainer}>
          <p className={styles.inReinforcementLearning}>
            In reinforcement learning (RL), "loss" refers to the discrepancy
            between the predicted outcomes by the agent and the actual outcomes
            in the environment. It quantifies the error in the agent's
            predictions and serves as a crucial measure for adjusting the
            model's parameters during training. Minimizing the loss is the key
            objective in RL, as it implies improving the agent's decision-making
            ability and optimizing its policy to achieve better performance in
            the given task.
          </p>
        </div>
      </div>
      <button
        className={styles.changeParametersWrapper}
        onClick={onFrameButtonClick}
      >
        <b className={styles.changeParameters}>Change Parameters</b>
      </button>
    </div>
  );
};

export default GraphPage;
