import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);
      }),
});

const selectRestaurantsSlice = (state) => state[restaurantSlice.name];

export const { selectById } = entityAdapter.getSelectors(
  selectRestaurantsSlice
);

export const {
  selectRestaurantsIds,
  selectRestaurantById,
  selectRequestStatus,
} = restaurantSlice.selectors;
