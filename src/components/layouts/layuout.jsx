import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";

import { ProgressBar } from "../progressBar/progressBar";
import { Cart } from "../cart/cart";
import { ToggleThemeButton } from "../toggleThemeButton/toggleThemeButton";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main>
        <ToggleThemeButton />
        <Cart />
        {children}
      </main>

      {/* <RestaurantPage restaurants={restaurants} /> */}
      <Footer />
    </>
  );
};
