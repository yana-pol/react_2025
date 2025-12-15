import { useSelector } from "react-redux";
import { Tab } from "../tab/tab";

import styles from "./restaurantLayout.module.css";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";
import { Outlet } from "react-router";

export const RestaurantLayout = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

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
