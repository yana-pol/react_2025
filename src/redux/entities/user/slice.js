import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsersIds: (state) => state.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";
        entityAdapter.setAll(state, payload);
      }),
});
const selectUsersSlice = (state) => state[userSlice.name];
export const { selectById } = entityAdapter.getSelectors(selectUsersSlice);

export const { selectUserById, selectUsersIds, selectRequestStatus } =
  userSlice.selectors;
