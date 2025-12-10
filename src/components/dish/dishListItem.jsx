import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import {
  addToCart,
  deleteFromCart,
  selectAmountById,
} from "../../redux/entities/cart/slice";

import styles from "./dishListItem.module.css";
import { UserContext } from "../userContextProvider";

export const DishListItem = ({ dish }) => {
  const dispatch = useDispatch();

  const id = dish.id;
  const name = dish.name;
  let amount = useSelector((state) => selectAmountById(state, id));

  const increment = () => {
    amount = amount >= 5 ? 5 : amount + 1;
    dispatch(addToCart({ id, name, amount }));
  };
  const decrement = () => {
    amount = amount === 0 ? 0 : amount - 1;
    dispatch(deleteFromCart({ id, amount }));
  };

  const { user } = useContext(UserContext);

  return (
    <li key={id} className={styles.name}>
      {dish.name}
      {user ? (
        <Counter
          value={amount || 0}
          onDecrement={decrement}
          onIncrement={increment}
        />
      ) : null}
    </li>
  );
};
