import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
  },
});

export const { selectRestaurantById, selectRestaurantsIds } =
  restaurantSlice.selectors;
