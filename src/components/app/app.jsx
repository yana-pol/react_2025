import { restaurants } from "../../constants/constants";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { RestaurantsList } from "../restaurantsList/restaurantsList";
import { ProgressBar } from "../progressBar/progressBar";

import "./app.css";

export const App = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  );
};
