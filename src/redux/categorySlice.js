import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    set_categories: (state, action) => {
      state.categories = action.payload.categories;
    },
  },
});

export const { set_categories } = categorySlice.actions;
export default categorySlice.reducer;
