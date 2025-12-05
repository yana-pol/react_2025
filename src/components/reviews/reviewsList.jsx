import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviewsList.module.css";

export const ReviewsList = ({ reviews }) => {
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
      <ReviewForm />
    </div>
  );
};
