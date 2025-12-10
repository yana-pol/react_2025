import { restaurants } from "../../constants/constants";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { RestaurantsList } from "../restaurantsList/restaurantsList";
import { ProgressBar } from "../progressBar/progressBar";
import { Cart } from "../cart/cart";

import "./app.css";
import { ToggleThemeButton } from "../toggleThemeButton/toggleThemeButton";
import { UserContextProvider } from "../userContextProvider/userCOntextProvider";
import { ThemeContextProvider } from "../themeContextProvider/themeContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeContextProvider>
          <UserContextProvider>
            <ProgressBar />

            <Header />
            <ToggleThemeButton />
            <Cart />
            <RestaurantsList restaurants={restaurants} />
            <Footer />
          </UserContextProvider>
        </ThemeContextProvider>
      </Provider>
    </>
  );
};
