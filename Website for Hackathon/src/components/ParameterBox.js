import styles from "./ParameterBox.module.css";

const ParameterBox = () => {
  return (
    <section className={styles.parameterbox1}>
      <div className={styles.frame} />
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.parameter}>Storage</div>
        </div>
        <div className={styles.dividerWrapper}>
          <div className={styles.divider}>
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.descLoremIpsumContainer}>
          <p
            className={styles.circularStorageStructures}
          >{`Circular storage structures, such as circular buffers, optimize memory usage by reusing space efficiently, while deques (double-ended queues) offer versatility with fast insertion and deletion operations at both ends, making them suitable for a wide range of dynamic data storage needs. `}</p>
          <p className={styles.choicesAreCircularBuffer}>
            Choices are circular_buffer or deque_memory
          </p>
        </div>
      </div>
      <div className={styles.typeInResponse}>
        <div className={styles.typeInResponseChild} />
        <div className={styles.typeYourAnswer}>Type your value here</div>
      </div>
    </section>
  );
};

export default ParameterBox;
