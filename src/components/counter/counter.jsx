import styles from "./counter.module.css";
import { Button } from "../button/button";

export const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.div}>
      <Button
        value={"-"}
        handler={onDecrement}
        disabled={false}
        className={"btnCounter"}
      />
      <input
        className={styles.input}
        type="text"
        value={value}
        readOnly={true}
      ></input>
      <Button
        value={"+"}
        handler={onIncrement}
        disabled={false}
        className={"btnCounter"}
      />
    </div>
  );
};
