import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => {
    return selectRestaurantById(state, restaurantId);
  });

  const { menu, reviews } = restaurant;
  return <Restaurant menu={menu} reviews={reviews} />;
};
