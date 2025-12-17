import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import {
  addToCart,
  deleteFromCart,
  selectAmountById,
} from "../../redux/entities/cart/slice";
import { Button } from "../button/button";
import styles from "./dishListItem.module.css";
import { UserContext } from "../userContextProvider";
import { useParams, useNavigate } from "react-router";
import { selectDishById } from "../../redux/entities/dish/slice";

export const DishListItem = () => {
  const { dishId } = useParams();
  const dispatch = useDispatch();

  const dish = useSelector((state) => {
    return selectDishById(state, dishId);
  });

  const navigate = useNavigate();

  const { id, name, ingredients, price } = dish;

  const amount = useSelector((state) => selectAmountById(state, id));

  const increment = () => {
    if (amount < 5) dispatch(addToCart({ id, name, amount: amount + 1 }));
  };
  const decrement = () => {
    if (amount > 0) dispatch(deleteFromCart({ id, amount: amount - 1 }));
  };

  const { user } = useContext(UserContext);

  if (user) {
    return (
      <>
        <div className={styles.name}>{dish.name}</div>
        <div className={styles.ingredients}>{ingredients.join(", ")}</div>
        <div className={styles.counter}>
          <Counter
            value={amount || 0}
            onDecrement={decrement}
            onIncrement={increment}
          />
          <span>{price + "$"}</span>
        </div>
        <Button value={"Go back"} handler={() => navigate(-1)} size="big" />
      </>
    );
  } else {
    return (
      <>
        <div className={styles.name}>{dish.name}</div>
        <Button value={"Go back"} handler={() => navigate(-1)} size="big" />
      </>
    );
  }
};
