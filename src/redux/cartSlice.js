import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenValue: localStorage.getItem("cartTokenValue"),
  items: [],
  id: null,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setTokenValue: (state, action) => {
      localStorage.setItem("cartTokenValue", action.payload.tokenValue);
      state.tokenValue = action.payload.tokenValue;
      state.cartState = action.payload.cartState;
    },
    updatedFullCart: (state, action) => {
      return state.items = action.payload;
    }
  },
});

export const { setTokenValue, updatedFullCart } = cartSlice.actions;
export default cartSlice.reducer;
