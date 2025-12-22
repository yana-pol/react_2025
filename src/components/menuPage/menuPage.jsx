import styles from "./menuPage.module.css";
import { DishContainer } from "../dish/dishContainer";
import { useParams } from "react-router";

export const MenuPage = () => {
  const restaurantId = useParams().restaurantId;

  return (
    <div className={styles.ul}>
      <DishContainer restaurantId={restaurantId} />
    </div>
  );
};
