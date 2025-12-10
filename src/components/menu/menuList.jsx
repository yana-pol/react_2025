import styles from "./menuList.module.css";
import { DishContainer } from "../dish/dishContainer";

export const MenuList = ({ menuIds }) => {
  return (
    <div>
      <h3 className={styles.h3}>Menu</h3>
      <ul className={styles.ul}>
        {menuIds.map((item) => (
          <DishContainer key={item} dishId={item} />
        ))}
      </ul>
    </div>
  );
};
