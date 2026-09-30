import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/CartSlice";

const Store = configureStore({
  reducer: {
    products: CartReducer,
  },
});

export default Store;
