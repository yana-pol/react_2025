import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { NavLink } from "react-router";
import classNames from "classnames";
import styles from "./tab.module.css";
import { ThemeContext } from "../themeContextProvider";
import { useContext } from "react";

export const Tab = ({ restaurantId, link, title }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const { theme } = useContext(ThemeContext);
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        classNames(styles.root, {
          [styles.active]: isActive,
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })
      }
    >
      {title ? title : restaurant.name}
    </NavLink>
  );
};
