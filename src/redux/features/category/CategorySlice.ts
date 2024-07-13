import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single category
export interface Category {
  id: string;
  name: string;
}

// Define the type for the category state
interface TCategory {
  categories: Category[];
}

// Initial state
const initialState: TCategory = {
  categories: [],
};

// Create the slice
const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    // Action to add a category
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
    // Action to remove a category by id
    removeCategory: (state, action: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    },
    // Action to update a category
    updateCategory: (state, action: PayloadAction<Category>) => {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
  },
});

// Export the actions and reducer
export const { addCategory, removeCategory, updateCategory } =
  CategorySlice.actions;
export default CategorySlice.reducer;
