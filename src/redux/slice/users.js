import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersApi from "../../apis/usersApi";

export const fetchAsyncUsers = createAsyncThunk(
  "users/fetchAsyncUsers",
  async () => {
    const response = await usersApi.get(`/users`);
    return response.data;
  }
);

export const addAsyncUsers = createAsyncThunk(
  "users/addAsyncUsers",
  async (users) => {
    const response = await usersApi.post(`/users`, users);
    return response.data;
  }
);

const users = createSlice({
  name: "users",
  initialState: [
    {
      email: "",
      first_name: "",
      last_name: "",
    },
  ],

  extraReducers: (builder) => {
    builder.addCase(fetchAsyncUsers.fulfilled, (state, { payload }) => {
      return { ...state, ...payload };
    });

    builder.addCase(addAsyncUsers.fulfilled, (state, { payload }) => {
      state.data.push(payload);
      return state;
    });
  },
});

export default users.reducer;
