import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: JSON.parse(localStorage.getItem('cart')) || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getTotalPrice(state) {
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    addItem(state, action) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.size === action.payload.size,
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    onMinusCount(state, action) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload.id && obj.size === action.payload.size,
      );

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      const index = state.items.findIndex(
        (obj) => obj.id === action.payload.id && obj.size === action.payload.size,
      );
      state.items.splice(index, 1);

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state) => state.cart;

export const { addItem, removeItem, clearItems, onMinusCount, getTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
