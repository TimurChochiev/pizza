import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryTab: 0,
  currentPage: 1,
  sortType: {
    id: 0,
    name: "популярности (по убыванию)",
    sortBy: "rating",
    order: "desc",
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
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryTab, setSortType, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
