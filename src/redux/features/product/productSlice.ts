import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TProduct = {
  _id?: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
  description: string;
  briefDescription: string;
  category: string[];
  featuredProduct: boolean;
};

type TProductInitial = {
  products: TProduct[];
};

const initialState: TProductInitial = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload });
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
