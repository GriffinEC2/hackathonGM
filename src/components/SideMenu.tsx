import { FunctionComponent } from "react";
import styles from "./SideMenu.module.css";

const SideMenu: FunctionComponent = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.glow} />
      <div className={styles.outline} />
      <div className={styles.questionFrame}>
        <div className={styles.dividerLine}>
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>
        </div>
      </div>
      <div className={styles.buttonMenusWrapper}>
        <div className={styles.buttonMenus}>
          <div className={styles.buttonMenu}>
            <img
              className={styles.settings2Icon}
              loading="lazy"
              alt=""
              src="/settings-2.svg"
            />
            <div className={styles.accountFrame}>
              <div className={styles.account}>Settings</div>
            </div>
            <img
              className={styles.settings2Icon1}
              alt=""
              src="/settings-2.svg"
            />
            <div className={styles.glow1} />
          </div>
        </div>
      </div>
      <div className={styles.sideMenuInner}>
        <div className={styles.buttonMenuWrapper}>
          <div className={styles.buttonMenu1}>
            <img
              className={styles.helpIcon}
              loading="lazy"
              alt=""
              src="/help.svg"
            />
            <div className={styles.account1}>Help center</div>
            <img className={styles.helpIcon1} alt="" src="/help.svg" />
            <div className={styles.glow2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
