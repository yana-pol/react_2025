import { Counter } from "../counter/counter";
import { useContext, useState } from "react";

import styles from "./dishListItem.module.css";
import { UserContext } from "../userContextProvider";

export const DishListItem = ({ dish }) => {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);
  return (
    <li key={dish.id} className={styles.name}>
      {dish.name}
      {user ? (
        <Counter
          value={count}
          onDecrement={() => setCount(count === 0 ? 0 : count - 1)}
          onIncrement={() => setCount(count >= 5 ? 5 : count + 1)}
        />
      ) : null}
    </li>
  );
};
