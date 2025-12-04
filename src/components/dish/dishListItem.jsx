import { Counter } from "../counter/counter";
import { useState } from "react";

import styles from "./dishListItem.module.css";

export const DishListItem = ({ dish }) => {
  const [count, setCount] = useState(0);
  return (
    <li key={dish.id} className={styles.name}>
      {dish.name}{" "}
      <Counter
        value={count}
        onDecrement={() => setCount(count === 0 ? 0 : count - 1)}
        onIncrement={() => setCount(count >= 5 ? 5 : count + 1)}
      />
    </li>
  );
};
