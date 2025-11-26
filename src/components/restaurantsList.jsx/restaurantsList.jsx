import { Restaurant } from "../Restaurant/restaurant";
import { useState } from "react";

export const RestaurantsList = ({ restaurants = [] }) => {
  const [activeRest, setActiveRest] = useState(0);

  return (
    <>
      <ul style={{ display: "flex", gap: "5px" }}>
        {restaurants.map((rest) => (
          <li key={rest.id} style={{ listStyle: "none" }}>
            <button onClick={() => setActiveRest(index)}>{rest.name}</button>
          </li>
        ))}
      </ul>
      <Restaurant rest={restaurants[activeRest]} />
    </>
  );
};
