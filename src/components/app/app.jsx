import { restaurants } from "../../constants/constants";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { RestaurantsList } from "../restaurantsList.jsx/restaurantsList";

export const App = () => {
  return (
    <>
      <Header />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  );
};
