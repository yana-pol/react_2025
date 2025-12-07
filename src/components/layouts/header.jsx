import { LoginButton } from "../loginButton/loginButton";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>Restaurants Guide</header>
      <LoginButton />
    </div>
  );
};
