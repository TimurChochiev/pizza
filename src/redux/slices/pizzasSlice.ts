import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SortType = {
  sortBy: "rating" | "price" | "title";
  order: "asc" | "desc";
};

interface FetchPizzasParams {
  categoryTab: number | string;
  sortType: SortType;
  searchValue: string;
  currentPage: number;
}

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzasStatus",
  async (params: FetchPizzasParams) => {
    const { categoryTab, sortType, searchValue, currentPage } = params;
    const { data } = await axios.get<PizzaState[]>(
      `https://62b9c7c041bf319d22855607.mockapi.io/pizzas?page=${currentPage}&limit=3${
        categoryTab > 0 ? `&category=${categoryTab}` : ``
      }&sortBy=${sortType.sortBy}&search=${searchValue}&order=${
        sortType.order
      } `
    );

    return data as PizzaState[];
  }
);

type PizzaState = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

interface PizzasSliceState {
  status: "loading" | "success" | "error";
  pizzas: PizzaState[];
}

const initialState: PizzasSliceState = {
  pizzas: [],
  status: "loading", // loading | success | error
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<PizzaState[]>) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.pizzas = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = "success";
      state.pizzas = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "error";
      state.pizzas = [];
    });
  },
});

export const pizzaSelector = (state: RootState) => state.pizzas;

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
