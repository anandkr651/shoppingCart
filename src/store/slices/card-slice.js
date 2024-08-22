import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //  console.log(state,action);
      state.cartItem.push(action.payload);
    },
    removeFromCart: (state, action) => {
      let copyItem = [...state.cartItem];
      copyItem = copyItem.filter((item) => item.id !== action.payload);
      state.cartItem = copyItem;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
