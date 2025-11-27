import { Restaurant } from "../Restaurant/restaurant";
import { useState } from "react";

export const RestaurantsList = ({ restaurants = [] }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );
  return (
    <>
      <ul style={{ display: "flex", gap: "5px" }}>
        {restaurants.map((rest) => (
          <li key={rest.id} style={{ listStyle: "none" }}>
            <button onClick={() => setActiveRestaurantId(rest.id)}>
              {rest.name}
            </button>
          </li>
        ))}
      </ul>
      <Restaurant
        rest={restaurants.find((item) => activeRestaurantId === item.id)}
      />
    </>
  );
};
