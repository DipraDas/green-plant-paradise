import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/category/CategorySlice";
import productReducer from "./features/product/productSlice";
import cartReducer from './features/cart/cartSlice';
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    category: categoryReducer,
    products: productReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
    }).concat(baseApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
