import { useReducer } from "react";
import { Counter } from "../counter/counter";

import styles from "./reviewForm.module.css";

const INITIAL_FORM = {
  name: "",
  text: "",
  rating: 0,
};

const UPDATE_NAME_ACTION = "UPDATE_NAME_ACTION";
const UPDATE_TEXT_ACTION = "UPDATE_TEXT_ACTION";
const UPDATE_RATING_ACTION = "UPDATE_RATING_ACTION";
const CLEAR_ACTION = "CLEAR_ACTION";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NAME_ACTION:
      return { ...state, name: payload };
    case UPDATE_TEXT_ACTION:
      return { ...state, text: payload };
    case UPDATE_RATING_ACTION:
      return { ...state, rating: payload };
    case CLEAR_ACTION:
      return INITIAL_FORM;
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);
  const { name, text, rating } = form;

  return (
    <div>
      <h4 className={styles.h4}>Please leave a review</h4>
      <fieldset className={styles.fieldset}>
        <input
          placeholder="Name"
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => {
            dispatch({ payload: e.target.value, type: UPDATE_NAME_ACTION });
          }}
        />
        <textarea
          placeholder="Text"
          className={styles.textarea}
          value={text}
          onChange={(e) =>
            dispatch({ payload: e.target.value, type: UPDATE_TEXT_ACTION })
          }
          rows="4"
        />
        <Counter
          value={form.rating}
          onIncrement={() => {
            if (rating < 5)
              dispatch({
                type: "UPDATE_RATING_ACTION",
                payload: rating + 1,
              });
          }}
          onDecrement={() => {
            if (rating > 0)
              dispatch({
                type: "UPDATE_RATING_ACTION",
                payload: rating - 1,
              });
          }}
        />
        <button
          className={styles.btn}
          onClick={() => dispatch({ type: CLEAR_ACTION })}
        >
          Clear
        </button>
      </fieldset>
    </div>
  );
};
