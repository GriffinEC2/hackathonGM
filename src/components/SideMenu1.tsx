import { FunctionComponent } from "react";
import styles from "./SideMenu1.module.css";

const SideMenu1: FunctionComponent = () => {
  return (
    <nav className={styles.sideMenu}>
      <div className={styles.glow} />
      <div className={styles.outline} />
      <div className={styles.subMenuFrame}>
        <div className={styles.buttonMenuGroup}>
          <div className={styles.buttonMenu}>
            <img
              className={styles.menuNineCircles}
              loading="lazy"
              alt=""
              src="/menu-nine-circles.svg"
            />
            <div className={styles.accountSettings}>
              <div className={styles.account}>Dashboard</div>
            </div>
            <img
              className={styles.menuNineCircles1}
              alt=""
              src="/menu-nine-circles.svg"
            />
            <div className={styles.glow1} />
          </div>
        </div>
      </div>
      <div className={styles.subMenuFrame1}>
        <div className={styles.buttonMenuWrapper}>
          <div className={styles.buttonMenu1}>
            <img
              className={styles.handPointFinger}
              loading="lazy"
              alt=""
              src="/hand-point-finger.svg"
            />
            <div className={styles.account1}>Learn</div>
            <img
              className={styles.handPointFinger1}
              alt=""
              src="/hand-point-finger.svg"
            />
            <div className={styles.glow2} />
          </div>
        </div>
      </div>
      <div className={styles.subMenuFrame2}>
        <div className={styles.buttonMenuContainer}>
          <div className={styles.buttonMenu2}>
            <img
              className={styles.menuSquareIcon}
              loading="lazy"
              alt=""
              src="/menu-square.svg"
            />
            <div className={styles.account2}>Puzzles</div>
            <img
              className={styles.menuSquareIcon1}
              alt=""
              src="/menu-square.svg"
            />
            <div className={styles.glow3} />
          </div>
        </div>
      </div>
      <div className={styles.subMenuFrame3}>
        <div className={styles.buttonMenuFrame}>
          <div className={styles.buttonMenu3}>
            <img
              className={styles.patternLockIcon}
              loading="lazy"
              alt=""
              src="/pattern-lock.svg"
            />
            <div className={styles.account3}>Games</div>
            <img
              className={styles.patternLockIcon1}
              alt=""
              src="/pattern-lock.svg"
            />
            <div className={styles.glow4} />
          </div>
        </div>
      </div>
      <div className={styles.subMenuFrame4}>
        <div className={styles.frameDiv}>
          <div className={styles.buttonMenu4}>
            <img
              className={styles.creditCardDoubleLeft}
              loading="lazy"
              alt=""
              src="/credit-card-double-left.svg"
            />
            <div className={styles.accountWrapper}>
              <div className={styles.account4}>Progress</div>
            </div>
            <img
              className={styles.creditCardDoubleLeft1}
              alt=""
              src="/credit-card-double-left.svg"
            />
            <div className={styles.glow5} />
          </div>
        </div>
      </div>
      <div className={styles.subMenuFrame5}>
        <div className={styles.buttonMenuWrapper1}>
          <div className={styles.buttonMenu5}>
            <img
              className={styles.mediaCirclesPlayCircles}
              loading="lazy"
              alt=""
              src="/media-circles-play-circles.svg"
            />
            <div className={styles.account5}>Socratic Tutor</div>
            <img
              className={styles.mediaCirclesPlayCircles1}
              alt=""
              src="/media-circles-play-circles.svg"
            />
            <div className={styles.glow6} />
          </div>
        </div>
      </div>
      <div className={styles.subMenuFrame6}>
        <div className={styles.buttonMenuWrapper2}>
          <div className={styles.buttonMenu6}>
            <img className={styles.imageIcon} alt="" src="/image.svg" />
            <div className={styles.account6}>Early Access</div>
            <img className={styles.imageIcon1} alt="" src="/image.svg" />
            <div className={styles.glow7} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideMenu1;
