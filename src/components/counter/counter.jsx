import styles from "./counter.module.css";
import { Button } from "../button/button";

export const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.div}>
      <Button value={"-"} handler={onDecrement} size="small" />
      <input
        className={styles.input}
        type="text"
        value={value}
        readOnly={true}
      />
      <Button value={"+"} handler={onIncrement} size="small" />
    </div>
  );
};
