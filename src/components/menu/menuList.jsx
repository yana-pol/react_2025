import { Counter } from "../counter/counter";

export const MenuList = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} <Counter />
          </li>
        ))}
      </ul>
    </div>
  );
};
