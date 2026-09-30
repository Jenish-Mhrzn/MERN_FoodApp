import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItems = state.cartItems.find(
        (cartitem) => cartitem.id == item.id,
      );

      if (existingItems) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartitem) =>
            cartitem.id == item.id
              ? { ...cartitem, quantity: cartitem.quantity + 1 }
              : cartitem,
          ),
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id != id),
      };
    },

    Increment: (state, action) => {
      const id = action.payload;

      const item = state.cartItems.find((item) => item.id == id);
      if (item) {
        item.quantity +=1;
      }
    },

    Decrement: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id == id);
      if (item) {
        item.quantity -=1;
      }
      state.cartItems = state.cartItems.filter((item) => item.quantity > 0);
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, Increment, Decrement } =
  CartSlice.actions;
