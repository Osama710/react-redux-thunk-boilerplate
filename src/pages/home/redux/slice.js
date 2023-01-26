import {
  createSlice,
  current,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

import { getUsers, getUserSingle } from "./thunk";

const thunks = [getUsers, getUserSingle];
const initialState = {
  status: "idle",
  Users:{},
  User:{},
};

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.Users = action.payload
      })
      .addCase(getUserSingle.fulfilled, (state, action) => {
        state.status = "idle";
        state.User = action.payload
      })
      .addMatcher(isPending(...thunks), (state) => {})
      .addMatcher(isFulfilled(getUsers), (state) => {})
      .addMatcher(isFulfilled(getUserSingle), (state) => {})
      .addMatcher(isRejected(...thunks), (state, action) => {});
  },
});

export const selectUsers = (state) => state.test.Users;
export const selectUserSingle = (state) => state.test.User;

export default slice.reducer;
