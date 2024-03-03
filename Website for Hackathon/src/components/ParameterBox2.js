import styles from "./ParameterBox2.module.css";

const ParameterBox2 = () => {
  return (
    <section className={styles.parameterbox1}>
      <div className={styles.frame} />
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.parameter}>Neurons Per Layer</div>
        </div>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>
        </div>
        <div
          className={styles.descLoremIpsum}
        >{`Typically, smaller networks with fewer neurons per layer are preferred to reduce computational overhead. As the complexity of the task grows, larger networks with more neurons per layer may be necessary to better represent the structure of the problem. You can input any number of neurons and layers. An example of two layers of 128 and a final layer of 64 would look like: [128, 128, 64] `}</div>
      </div>
      <div className={styles.typeInResponse}>
        <div className={styles.accountBox} />
        <div className={styles.typeYourAnswer}>Type your value here</div>
      </div>
    </section>
  );
};

export default ParameterBox2;
