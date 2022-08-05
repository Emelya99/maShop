import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProduct: [],
  //   countProductOnPage: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setAllProduct(state, action) {
      state.allProduct = action.payload;
    },
    // setCountProductOnPage(state, action) {
    //   state.countProductOnPage = action.payload;
    // },
  },
});

export const { setAllProduct, setCountProductOnPage } = productSlice.actions;

export default productSlice.reducer;
