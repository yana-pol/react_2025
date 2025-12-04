import styles from "./counter.module.css";

export const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.div}>
      <button className={styles.btn} onClick={onDecrement}>
        -
      </button>
      <input
        className={styles.input}
        type="text"
        value={value}
        readOnly={true}
      ></input>
      <button className={styles.btn} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
