import { Button } from "../button/button";
import { Restaurant } from "../Restaurant/restaurant";
import { useState } from "react";

import styles from "./restaurantList.module.css";

export const RestaurantsList = ({ restaurants = [] }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );
  return (
    <>
      <ul className={styles.ul}>
        {restaurants.map((rest) => (
          <li key={rest.id}>
            <Button
              value={rest.name}
              handler={() => setActiveRestaurantId(rest.id)}
              disabled={activeRestaurantId === rest.id}
            />
          </li>
        ))}
      </ul>
      <Restaurant
        rest={restaurants.find((item) => activeRestaurantId === item.id)}
      />
    </>
  );
};
