import { FunctionComponent } from "react";
import styles from "./QuestionTypeInAnswer.module.css";

const QuestionTypeInAnswer: FunctionComponent = () => {
  return (
    <section className={styles.questionTypeInAnswer}>
      <div className={styles.inputText} />
      <div className={styles.hoursCarUsage}>
        <h1 className={styles.howManyHours}>
          How many hours per day do you use a car?
        </h1>
        <img
          className={styles.hoursCarUsageChild}
          loading="lazy"
          alt=""
          src="/rectangle-9.svg"
        />
      </div>
      <div className={styles.responseInstance}>
        <div className={styles.typeInResponse}>
          <div className={styles.rectangleInstance} />
          <input
            className={styles.typeYourAnswer}
            placeholder="Type your answer here"
            type="text"
          />
        </div>
        <div className={styles.submitnextButtons}>
          <div className={styles.backButton}>
            <div className={styles.rectangleRectangle} />
            <b className={styles.back}>Back</b>
          </div>
          <div className={styles.next}>
            <div className={styles.nextChild} />
            <b className={styles.next1}>Next</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionTypeInAnswer;
