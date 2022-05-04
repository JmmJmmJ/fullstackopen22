import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNote(state, action) {
      return action.payload;
    },
  },
});

export const { setNote } = notificationSlice.actions;
export default notificationSlice.reducer;
