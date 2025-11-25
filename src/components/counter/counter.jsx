import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count >= 5 ? 5 : count + 1)}>+</button>
      <span>{count}</span>{" "}
      <button onClick={() => setCount(count === 0 ? 0 : count - 1)}>-</button>
    </div>
  );
};
