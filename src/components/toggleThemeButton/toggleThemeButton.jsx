import { useContext } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../app/app";

export const ToggleThemeButton = (props) => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <Button
      value="Change theme"
      handler={() =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
      }
      className={"btnTheme"}
    />
  );
};
