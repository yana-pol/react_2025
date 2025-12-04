import { DishListItem } from "../dish/dishListItem";
import styles from "./menuList.module.css";

export const MenuList = ({ menu }) => {
  return (
    <div>
      <h3 className={styles.h3}>Menu</h3>
      <ul className={styles.ul}>
        {menu.map((item) => (
          <DishListItem key={item.id} dish={item} />
        ))}
      </ul>
    </div>
  );
};
