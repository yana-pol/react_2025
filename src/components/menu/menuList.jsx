import { DishListItem } from "../dish/dishListItem";

export const MenuList = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <DishListItem key={item.id} dish={item} />
        ))}
      </ul>
    </div>
  );
};
