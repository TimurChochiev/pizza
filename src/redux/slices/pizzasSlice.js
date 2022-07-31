import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params) => {
    const { categoryTab, sortType, searchValue, currentPage } = params;
    const { data } = await axios.get(
      `https://62b9c7c041bf319d22855607.mockapi.io/pizzas?page=${currentPage}&limit=3${
        categoryTab > 0 ? `&category=${categoryTab}` : ``
      }&sortBy=${sortType.sortBy}&search=${searchValue}&order=${
        sortType.order
      } `
    );

    return data;
  }
);

const initialState = {
  pizzas: [],
  status: "loading", // loading | success | error
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.pizzas = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
      state.status = "success";
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.pizzas = [];
    },
  },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
