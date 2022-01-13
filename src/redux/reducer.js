import { createSlice } from "@reduxjs/toolkit";

const initalState = [];

const userReducer = createSlice({
  name: "user",
  initalState,
  reducers: {
    //Adding user
    addUser: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //Remove user
    removeUser: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userReducer.actions;
export const reducer = userReducer.reducer;
