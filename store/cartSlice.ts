import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// Define the shape of a cart item
type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// Define the shape of the cart state
type CartStateType = {
  cart: CartItemType[];
};

const initialState: CartStateType = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action) => {
      let indexOfItem = state.cart.findIndex((e) => e.id === action.payload);
      if (indexOfItem !== -1) {
        state.cart.splice(indexOfItem, 1);
      }
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItemsById = (state: any, id: string) =>
  state.cart.cart.filter((item: { id: string }) => item.id == id);

export const selectCartTotal = (state: any) =>
  state.cart.cart.reduce(
    (total: any, item: { price: any }) => (total = total + item.price),
    0
  );

export default cartSlice.reducer;
