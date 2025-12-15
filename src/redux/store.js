import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant/slice";
import { cartSlice } from "./entities/cart/slice";
import { dishSlice } from "./entities/dish/slice";
import { reviewSlice } from "./entities/review/slice";
import { userSlice } from "./entities/user/slice";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
