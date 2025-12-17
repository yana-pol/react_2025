import styles from "./menuPage.module.css";
import { DishContainer } from "../dish/dishContainer";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { useSelector } from "react-redux";

export const MenuPage = () => {
  const restaurantId = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId.restaurantId)
  );

  const { menu } = restaurant;

  return (
    <div className={styles.ul}>
      {menu.map((item) => (
        <DishContainer key={item} dishId={item} />
      ))}
    </div>
  );
};
