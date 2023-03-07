import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // TODO: token bilsi alınacak
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    set_token: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
    },
    remove_token: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
});

export const { set_token, remove_token } = authSlice.actions;
export default authSlice.reducer;
