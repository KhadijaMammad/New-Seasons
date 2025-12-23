import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      localStorage.setItem("basket", JSON.stringify(state.items));
      const product = action.payload;
      const existProduct = state.items.find((item) => item.id === product.id);
      if (existProduct) {
        existProduct.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalPrice += product.price;
      state.totalQuantity += 1;
    },

    removeBasket: (state, action) => {
      const id = action.payload;
      const existProduct = state.items.find((item) => item.id === id);

      if (existProduct) {
        state.totalPrice -= existProduct.price * existProduct.quantity;
        state.totalQuantity -= existProduct.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.items.find((product) => product.id === id);
      if (!product) return;

      product.quantity += 1;
      state.totalPrice += product.price;
      state.totalQuantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const product = state.items.find((product) => product.id === id);
     if (!product || product.quantity <= 0) return;

      product.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalPrice -= product.price;

      if (product.quantity === 0) {
        state.items = state.items.filter(i => i.id !== id);
      }
    },
  },
});

export const { addToBasket, removeBasket, increaseQuantity, decreaseQuantity } = BasketSlice.actions;
export default BasketSlice.reducer;
