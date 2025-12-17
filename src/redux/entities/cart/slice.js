import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, name, amount } = payload;
      state[id] = { name, amount };
    },
    deleteFromCart: (state, { payload }) => {
      const { id, amount } = payload;
      if (!state[id]) {
        return state;
      }

      state[id] = { ...state[id], amount };

      if (state[id].amount === 0) {
        delete state[id];
      }
    },
  },

  selectors: {
    selectAmountById: (state, id) => state[id]?.amount ?? 0,
  },
});

const selectCartSlice = (state) => state[cartSlice.name];
export const selectCartItems = createSelector([selectCartSlice], (cartSlice) =>
  Object.keys(cartSlice).reduce((acc, id) => {
    acc.push({
      id,
      amount: cartSlice[id].amount,
      name: cartSlice[id].name,
    });

    return acc;
  }, [])
);
export const { selectAmountById } = cartSlice.selectors;

export const { addToCart, deleteFromCart } = cartSlice.actions; // action creator
