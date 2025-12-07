import { restaurants } from "../../constants/constants";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { RestaurantsList } from "../restaurantsList/restaurantsList";
import { ProgressBar } from "../progressBar/progressBar";

import "./app.css";
import { ToggleThemeButton } from "../toggleThemeButton/toggleThemeButton";
import { UserContextProvider } from "../userContextProvider/userCOntextProvider";
import { ThemeContextProvider } from "../themeContextProvider/themeContextProvider";

export const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
          <ProgressBar />

          <Header />
          <ToggleThemeButton />
          <RestaurantsList restaurants={restaurants} />
          <Footer />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
};
