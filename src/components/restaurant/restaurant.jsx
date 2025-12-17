import { Outlet, Navigate } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { useSelector } from "react-redux";
import { Tab } from "../tab/tab";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <Tab
          restaurantId={restaurantId}
          link={`/restaurants/${restaurantId}/menu`}
          title={"Menu"}
        />
        <Tab
          restaurantId={restaurantId}
          link={`/restaurants/${restaurantId}/reviews`}
          title={"Reviews"}
        />
      </div>
      <Outlet />
    </>
  );
};
