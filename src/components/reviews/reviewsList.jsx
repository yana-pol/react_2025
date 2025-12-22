import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviewsList.module.css";
import { useContext } from "react";
import { UserContext } from "../userContextProvider/index.js";
import { ReviewContainer } from "./reviewContainer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReviews } from "../../redux/entities/review/getReviews";
import { selectReviewsIds } from "../../redux/entities/review/slice";
import { useRequest } from "../../redux/hooks/useRequest";
import { getUsers } from "../../redux/entities/user/getUsers.js";
import { useParams } from "react-router";

export const ReviewsList = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [dispatch, restaurantId]);

  useRequest(getUsers);

  const reviews = useSelector(selectReviewsIds);

  const user = useContext(UserContext);

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
