import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  pizzas: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
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

    onMinus(state, action) {
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
    removeFromCart(state, action) {
      state.pizzas = state.pizzas.filter(
        (obj) =>
          obj.id !== action.payload.id &&
          obj.types !== action.payload.types &&
          obj.sizes !== action.payload.sizes
      );
    },
    clearCart(state) {
      state.pizzas = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state) => state.cart;

export const { addToCart, onMinus, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
