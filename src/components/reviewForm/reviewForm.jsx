import { useReducer } from "react";
import { Counter } from "../counter/counter";

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
      <div>
        <div>
          <label style={{ display: "block" }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              dispatch({ payload: e.target.value, type: UPDATE_NAME_ACTION });
            }}
          />
        </div>
        <div>
          <label style={{ display: "block" }}>Text:</label>
          <textarea
            value={text}
            onChange={(e) =>
              dispatch({ payload: e.target.value, type: UPDATE_TEXT_ACTION })
            }
            rows="4"
          />
        </div>
        <div>
          <label>Rating:</label>
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
        </div>
        <button onClick={() => dispatch({ type: CLEAR_ACTION })}>clear</button>
      </div>
    </div>
  );
};
