import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    email: "",
    first_name: "",
    last_name: "",
  },
  reducers: {
    setUserSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});
export const { setUserSlice } = user.actions;
export default user.reducer;
