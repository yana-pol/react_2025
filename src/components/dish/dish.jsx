import { Counter } from "../counter/counter";
import { useState } from "react";

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);
  return (
    <li key={dish.id}>
      {dish.name}{" "}
      <Counter
        value={count}
        onDecrement={() => setCount(count === 0 ? 0 : count - 1)}
        onIncrement={() => setCount(count >= 5 ? 5 : count + 1)}
      />
    </li>
  );
};
