import { createSlice } from "@reduxjs/toolkit";

const cartItems = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, clearCart } = cartItems.actions;

export default cartItems.reducer;
