import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviews } from "./getReviews";
const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectReviewsIds: (state) => state.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";
        entityAdapter.setAll(state, payload);
      }),
});
const selectReviewSlice = (state) => state[reviewSlice.name];
export const { selectById } = entityAdapter.getSelectors(selectReviewSlice);

export const { selectReviewById, selectReviewsIds, selectRequestStatus } =
  reviewSlice.selectors;
