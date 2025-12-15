import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { UserContext } from "../userContextProvider";
import { useContext } from "react";
import styles from "./cart.module.css";

export const Cart = () => {
  const { user } = useContext(UserContext);

  const items = useSelector(selectCartItems);
  if (!user) {
    return null;
  }

  if (!items.length) {
    return <h4 className={styles.h4}> Корзина пуста </h4>;
  }
  return (
    <ul className={styles.ul}>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.amount}
        </li>
      ))}
    </ul>
  );
};
