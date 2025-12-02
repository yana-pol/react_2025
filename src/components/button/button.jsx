import styles from "./button.module.css";

export const Button = ({ value, handler, disabled }) => {
  return (
    <button className={styles.btn} onClick={handler} disabled={disabled}>
      {value}
    </button>
  );
};
