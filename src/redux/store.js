import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import product from './slices/productSlice';
import cart from './slices/cartSlice';
import single from './slices/singleSlice';
import similar from './slices/similarSlice';

export const store = configureStore({
  reducer: {
    filter,
    product,
    cart,
    single,
    similar,
  },
});
