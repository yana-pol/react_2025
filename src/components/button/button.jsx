import { useContext } from "react";
import styles from "./button.module.css";
import classNames from "classnames";
import { ThemeContext } from "../themeContextProvider";

export const Button = ({
  value,
  handler,
  disabled,
  size = "big",
  className,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(styles.root, className, {
        [styles.sizeBig]: size === "big",
        [styles.sizeSmall]: size === "small",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={handler}
      disabled={disabled}
    >
      {value}
    </button>
  );
};
