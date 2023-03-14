import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import categoryReducer from "./categorySlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    authState: authReducer,
    categoryState: categoryReducer,
    cartState: cartReducer,
  },
});
