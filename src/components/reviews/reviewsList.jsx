import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviewsList.module.css";
import { useContext } from "react";
import { UserContext } from "../userContextProvider/index.js";
import { ReviewContainer } from "./reviewContainer.jsx";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../redux/entities/restaurant/slice";
import { useSelector } from "react-redux";

export const ReviewsList = () => {
  const restaurantId = useParams();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId.restaurantId)
  );

  const { reviews } = restaurant;

  const { user } = useContext(UserContext);

  return (
    <div>
      <ul className={styles.ul}>
        {reviews.map((reviewId) => (
          <ReviewContainer key={reviewId} reviewId={reviewId} />
        ))}
      </ul>
      {user ? <ReviewForm /> : null}
    </div>
  );
};
