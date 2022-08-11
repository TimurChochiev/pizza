import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SortType = {
  id: number;
  name: string;
  sortBy: "rating" | "price" | "title";
  order: "asc" | "desc";
};

interface FilterSliceState {
  searchValue: string;
  categoryTab: number;
  currentPage: number;
  sortType: SortType;
}

const initialState: FilterSliceState = {
  searchValue: "",
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
    setCategoryTab(state, action: PayloadAction<number>) {
      state.categoryTab = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sortType = action.payload.sortType;
      state.categoryTab = Number(action.payload.categoryTab);
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;
export const sortTypeSelector = (state: RootState) => state.filter.sortType;

export const {
  setCategoryTab,
  setSortType,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
