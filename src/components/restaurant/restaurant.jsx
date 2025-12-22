import { Outlet } from "react-router";
import { Tab } from "../tab/tab";
import styles from "./restaurant.module.css";
import { useEffect } from "react";
import { getRestaurantById } from "../../redux/entities/restaurant/getRestaurantById";
import { useDispatch } from "react-redux";
export const Restaurant = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantById(restaurantId));
  }, [dispatch, restaurantId]);

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
