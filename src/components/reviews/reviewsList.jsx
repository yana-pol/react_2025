import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviewsList.module.css";
import { useContext } from "react";
import { UserContext } from "../userContextProvider/index.js";

export const ReviewsList = ({ reviews }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h3 className={styles.h3}>Reviews</h3>
      <ul className={styles.ul}>
        {reviews.map((item) => (
          <li key={item.id} className={styles.text}>
            <div className={styles.user}>{item.user}</div>
            {item.text}
          </li>
        ))}
      </ul>
      {user ? <ReviewForm /> : null}
    </div>
  );
};
