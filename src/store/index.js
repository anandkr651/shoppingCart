import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slices/card-slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
