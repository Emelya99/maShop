import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProductsStatus', async (params) => {
  const { category, sortValue, order, currentPaginationNumber, limitPage, searchValue } = params;
  const { data } = await axios.get(
    `https://62e76c9f93938a545bd1363a.mockapi.io/product?page=${currentPaginationNumber}&limit=${limitPage}&${category}&sortBy=${sortValue}&order=${order}&search=${searchValue}`,
  );
  return data;
});

const initialState = {
  allProduct: [],
  isLoading: 'loading',
  currentProductOnPage: 0,
  limitPage: 12,
  similarLimitPage: 4,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setAllProduct(state, action) {
      state.allProduct = action.payload;
    },
    setCurrentProductOnPage(state, action) {
      state.currentProductOnPage = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = 'loading';
      state.allProduct = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.isLoading = 'success';
      state.allProduct = action.payload.items;
      state.currentProductOnPage = action.payload.count;
    },
    [fetchProducts.rejected]: (state) => {
      state.isLoading = 'error';
      state.allProduct = [];
    },
  },
});

export const productSelector = (state) => state.product;

export const { setAllProduct, setCurrentProductOnPage } = productSlice.actions;

export default productSlice.reducer;
