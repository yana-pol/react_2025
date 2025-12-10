import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviewsList.module.css";
import { useContext } from "react";
import { UserContext } from "../userContextProvider/index.js";
import { ReviewContainer } from "./reviewContainer.jsx";

export const ReviewsList = ({ reviews }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3 className={styles.h3}>Reviews</h3>
      <ul className={styles.ul}>
        {reviews.map((item) => (
          <ReviewContainer key={item} reviewId={item} />
        ))}
      </ul>
      {user ? <ReviewForm /> : null}
    </div>
  );
};
