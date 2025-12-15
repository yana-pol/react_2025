import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { Restaurant } from "../restaurant/restaurant";
import { useParams } from "react-router";

export const RestaurantContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const param = useParams();
  const { restaurantId } = param ? param : restaurantsIds[0];

  return (
    <>
      <Restaurant restaurantId={restaurantId} />
    </>
  );
};
