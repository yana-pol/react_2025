import { RestaurantContainer } from "../restaurant/restaurantContainer";
import { useParams } from "react-router";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return <RestaurantContainer id={restaurantId} restaurantId={restaurantId} />;
};
