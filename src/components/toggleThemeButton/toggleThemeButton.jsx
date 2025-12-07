import { useContext } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../themeContextProvider";

export const ToggleThemeButton = () => {
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
