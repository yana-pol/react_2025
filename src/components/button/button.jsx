import styles from "./button.module.css";

export const Button = ({ value, handler, disabled, className }) => {
  return (
    <button className={styles[className]} onClick={handler} disabled={disabled}>
      {value}
    </button>
  );
};
