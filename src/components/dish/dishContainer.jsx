import { Dish } from "../dish/dish";
import { useDispatch, useSelector } from "react-redux";
import { getDishes } from "../../redux/entities/dish/getDishes";
import { selectDishIds } from "../../redux/entities/dish/slice";
import { useEffect } from "react";

export const DishContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);

  const dishes = useSelector(selectDishIds);

  return (
    <div>
      <ul>
        {dishes.map((id) => (
          <Dish key={id} id={id} />
        ))}
      </ul>
    </div>
  );
};
