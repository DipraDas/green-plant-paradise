import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
    filterByCategory: any;
}

const initialState: FilterState = {
    filterByCategory: ''
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterByCategory: (state, action: PayloadAction<{ category: string }>) => {
            state.filterByCategory = action.payload;
        }
    },
});

export const { filterByCategory } = filterSlice.actions;
export default filterSlice.reducer;
