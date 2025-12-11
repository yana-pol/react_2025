import { Button } from "../button/button";
import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RestaurantTab } from "../restaurantTab/restaurantTab";

import styles from "./restaurantList.module.css";
import { RestaurantContainer } from "../restaurant/restaurantContainer";
import { selectRestaurantsIds } from "../../redux/entities/restaurant/slice";

export const RestaurantsList = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <>
      <ul className={styles.ul}>
        {restaurantsIds.map((id) => (
          <li key={id}>
            <RestaurantTab
              restaurantId={id}
              handler={() => handleSetActiveRestaurantId(id)}
              disabled={activeRestaurantId === id}
            />
          </li>
        ))}
      </ul>

      <RestaurantContainer
        id={activeRestaurantId}
        restaurantId={activeRestaurantId}
      />
    </>
  );
};
