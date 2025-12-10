import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/slice";
import styles from "./reviewsList.module.css";
import { User } from "../user/user";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => {
    return selectReviewById(state, reviewId);
  });

  return (
    <li key={review.id} className={styles.text}>
      <div className={styles.user}>
        <User userId={review.userId} />
      </div>
      {review.text}
    </li>
  );
};
