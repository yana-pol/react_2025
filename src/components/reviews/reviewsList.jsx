import { ReviewForm } from "../reviewForm/reviewForm";

export const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
