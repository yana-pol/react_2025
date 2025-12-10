import { createSlice } from "@reduxjs/toolkit";

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
    selectCartItems: (state) =>
      Object.keys(state).reduce((acc, id) => {
        acc.push({
          id,
          amount: state[id].amount,
          name: state[id].name,
        });

        return acc;
      }, []),

    selectAmountById: (state, id) => state[id]?.amount ?? 0,
  },
});

export const { selectCartItems, selectAmountById } = cartSlice.selectors;

export const { addToCart, deleteFromCart } = cartSlice.actions; // action creator
