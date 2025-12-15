import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { Link } from "react-router";
import styles from "./dishContainer.module.css";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => {
    return selectDishById(state, dishId);
  });

  return (
    <Link className={styles.link} to={`/dish/${dishId}`}>
      {dish.name}
    </Link>
  );
};
