import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryTab: 0,
  sortType: {
    name: "популярности (DESC)",
    sortBy: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryTab(state, action) {
      state.categoryTab = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setCategoryTab, setSortType } = filterSlice.actions;

export default filterSlice.reducer;
