import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/users/usersSlice";
import productDetail from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    user: userDetail,
    product: productDetail,
  },
});
