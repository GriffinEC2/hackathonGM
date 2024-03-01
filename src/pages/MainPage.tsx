import { FunctionComponent } from "react";
import SideMenu1 from "../components/SideMenu1";
import SideMenu from "../components/SideMenu";
import QuestionTypeInAnswer from "../components/QuestionTypeInAnswer";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.sidebar}>
        <div className={styles.rootFrame}>
          <div className={styles.logoFooter}>
            <img className={styles.glowIcon} alt="" src="/glow.svg" />
            <img
              className={styles.logoDesigncodeIcon}
              loading="lazy"
              alt=""
              src="/logo-designcode.svg"
            />
            <b className={styles.company}>Hackathon</b>
          </div>
          <SideMenu1 />
        </div>
        <div className={styles.questionFrame}>
          <SideMenu />
        </div>
      </div>
      <main className={styles.mainContentFrame}>
        <QuestionTypeInAnswer />
      </main>
    </div>
  );
};

export default MainPage;
