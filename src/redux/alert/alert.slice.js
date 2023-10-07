import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: [],
  reducers: {
    setAlert: (state, action) => {
      const { msg, alertType, id } = action.payload;
      state.push({ msg, alertType, id });
    },
    removeAlert: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((alert) => alert.id !== idToRemove);
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
