import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/slice";
import { DishListItem } from "./dishListItem";

export const DishContainer = ({ dishId }) => {
  const dish = useSelector((state) => {
    return selectDishById(state, dishId);
  });

  return <DishListItem dish={dish} />;
};
