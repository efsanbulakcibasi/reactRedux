import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 5,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeITem: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
    },
    increaseItem: (state, aciton) => {
      const cartItem = state.cartItems.find((x) => x.id === aciton.payload);
      cartItem.quantity += 1;
    },
    reduceITem: (state, aciton) => {
      const cartItem = state.cartItems.find((x) => x.id === aciton.payload);
      console.log(cartItem)
      if (cartItem.quantity === 1) {
        cartItem.quantity = 1
      }
      else{
        cartItem.quantity -= 1;
      }
    },
    totalItems:(state) => {
      // eslint-disable-next-line no-debugger
      debugger
      let total =0;
      let quantity=0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity; 
        quantity += item.quantity;
      });
      state.total= total
      state.quantity=quantity
    }
  },
});

// console.log(cartSlice);

export const { clearCart, removeITem, increaseItem,reduceITem,totalItems } = cartSlice.actions;

export default cartSlice.reducer;
