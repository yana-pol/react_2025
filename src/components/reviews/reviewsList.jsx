import { ReviewForm } from "../reviewForm/reviewForm";
import classNames from "classnames";
import styles from "./reviewsList.module.css";

export const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <h3 className={classNames(styles["h3"])}>Reviews</h3>
      <ul className={classNames(styles["ul"])}>
        {reviews.map((item) => (
          <li key={item.id} className={classNames(styles["text"])}>
            <div className={classNames(styles["user"])}>{item.user}</div>
            {item.text}
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
