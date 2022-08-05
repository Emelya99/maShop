import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProduct: [],
  isLoading: true,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setAllProduct(state, action) {
      state.allProduct = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setAllProduct, setIsLoading } = productSlice.actions;

export default productSlice.reducer;
