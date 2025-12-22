import { useSelector } from "react-redux";
import { Tab } from "../tab/tab";
import { useRequest } from "../../redux/hooks/useRequest";

import styles from "./restaurantLayout.module.css";

import { Outlet } from "react-router";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { getRestaurants } from "../../redux/entities/restaurant/getRestaurants";

export const RestaurantLayout = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const { requestStatus } = useRequest(getRestaurants);

  if (requestStatus === "pending" || requestStatus === "idle") {
    return "loading...";
  }

  if (requestStatus === "rejected" || !restaurantsIds.length) {
    return "error";
  }

  return (
    <>
      <ul className={styles.ul}>
        {restaurantsIds.map((id) => (
          <li key={id}>
            <Tab restaurantId={id} link={`/restaurants/${id}`} />
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
