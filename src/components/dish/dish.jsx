import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import styles from "./dish.module.css";
import { Link } from "react-router";

export const Dish = ({ id }) => {
  const dish = useSelector((state) => {
    return selectDishById(state, id);
  });

  return (
    <Link className={styles.link} to={`/dish/${id}`}>
      {dish.name}
    </Link>
  );
};
