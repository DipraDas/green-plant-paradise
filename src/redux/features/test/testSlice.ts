import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

export default testSlice.reducer;
