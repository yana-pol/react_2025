export const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <span>{" " + value + " "}</span>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
