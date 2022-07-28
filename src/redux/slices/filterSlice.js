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
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
      state.categoryTab = Number(action.payload.categoryTab);
    },
  },
});

export const { setCategoryTab, setSortType, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
