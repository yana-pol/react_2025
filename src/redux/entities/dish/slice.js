import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectDishById: (state, id) => {
      return state.entities[id];
    },
    selectDishIds: (state) => state.ids,
    selectDishes: (state) => state.entities,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";
        entityAdapter.setAll(state, payload);
      }),
});

const selectDishSlice = (state) => state[dishSlice.name];
export const { selectById } = entityAdapter.getSelectors(selectDishSlice);

export const {
  selectDishById,
  selectDishIds,
  selectDishes,
  selectRequestStatus,
} = dishSlice.selectors;
