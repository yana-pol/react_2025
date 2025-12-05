import { restaurants } from "../../constants/constants";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { RestaurantsList } from "../restaurantsList/restaurantsList";
import { ProgressBar } from "../progressBar/progressBar";

import "./app.css";
import { createContext, useState } from "react";
import { ToggleThemeButton } from "../toggleThemeButton/toggleThemeButton";

export const ThemeContext = createContext();

export const theme = "light";
export const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext value={{ theme, setTheme }}>
        <ProgressBar />

        <Header />
        <ToggleThemeButton />
        <RestaurantsList restaurants={restaurants} />
        <Footer />
      </ThemeContext>
    </>
  );
};
