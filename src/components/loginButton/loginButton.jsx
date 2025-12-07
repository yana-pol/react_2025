import { Button } from "../button/button";
import styles from "./loginButton.module.css";
import { useContext } from "react";
import { UserContext } from "../userContextProvider";

export const LoginButton = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <span className={styles.name}>{user ? "Hello, " + user : ""}</span>
      <Button
        value={user ? "Log out" : "Log in"}
        handler={() => {
          user ? setUser(null) : setUser("user1");
        }}
        size="big"
        className={styles.logIn}
      />
    </div>
  );
};
