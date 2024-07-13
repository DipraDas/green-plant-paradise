import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/category/CategorySlice";
import productReducer from "./features/product/productSlice";
import cartReducer from './features/cart/cartSlice';
import filterReducer from './features/filter/filterSlice';
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    category: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
    }).concat(baseApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
