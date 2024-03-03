import styles from "./ParameterBox1.module.css";

const ParameterBox1 = () => {
  return (
    <section className={styles.parameterbox1}>
      <div className={styles.frame} />
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.parameter}>Activation Functions</div>
          </div>
          <div className={styles.lINESEPARATOR}>
            <div className={styles.divider}>
              <div className={styles.line} />
            </div>
          </div>
          <div className={styles.descLoremIpsumContainer}>
            <p className={styles.activationFunctionsIntroduce}>
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
            <p className={styles.exampleNnreluNnrelu}>
              Example: [nn.ReLU, nn.ReLU, nn.SiLU, nn.Sigmoid]
            </p>
          </div>
        </div>
      </div>
      <div className={styles.typeInResponse}>
        <div className={styles.typeInResponseChild} />
        <div className={styles.typeYourAnswer}>Type your value here</div>
      </div>
    </section>
  );
};

export default ParameterBox1;
