import { Dish } from "../dish/dish";

export const MenuList = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <Dish key={item.id} dish={item} />
        ))}
      </ul>
    </div>
  );
};
