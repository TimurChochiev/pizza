import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type PizzaType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
};

interface CartSliceState {
  totalPrice: number;
  pizzas: PizzaType[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  pizzas: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<PizzaType>) {
      const findPizza = state.pizzas.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findPizza) {
        findPizza.count++;
      } else {
        state.pizzas.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice += action.payload.price;
    },

    onMinus(state, action: PayloadAction<PizzaType>) {
      const findPizza = state.pizzas.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );
      if (findPizza) {
        findPizza.count--;
      }
      state.totalPrice -= action.payload.price;
    },
    removeFromCart(state, action: PayloadAction<PizzaType>) {
      state.pizzas = state.pizzas.filter(
        (obj) =>
          obj.id !== action.payload.id &&
          obj.type !== action.payload.type &&
          obj.size !== action.payload.size
      );
    },
    clearCart(state) {
      state.pizzas = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;

export const { addToCart, onMinus, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
