import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./slice";

export const getDishById = createAsyncThunk(
  "dish/getDishById",
  async (dishId, restaurantId, { dispatch, getState, rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (dishId, { getState, dispatch }) => {
      return !selectDishById(getState(), dishId);
    },
  }
);
