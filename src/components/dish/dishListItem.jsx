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

  const { id, name } = dish;
  const amount = useSelector((state) => selectAmountById(state, id));

  const increment = () => {
    if (amount < 5) dispatch(addToCart({ id, name, amount: amount + 1 }));
  };
  const decrement = () => {
    if (amount > 0) dispatch(deleteFromCart({ id, amount: amount - 1 }));
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
