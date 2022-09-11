import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSimilarProducts = createAsyncThunk(
  'similar/fetchSimilarProductsStatus',
  async (params) => {
    const { category } = params;
    const { data } = await axios.get(
      `https://62e76c9f93938a545bd1363a.mockapi.io/product?category=${category}`,
    );
    return data.items;
  },
);

const initialState = {
  similarProducts: [],
  isLoading: 'loading',
  similarLimitPage: 4,
};

export const similarSlice = createSlice({
  name: 'similar',
  initialState,
  reducers: {
    setSimilarProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [fetchSimilarProducts.pending]: (state) => {
      state.isLoading = 'loading';
      state.similarProducts = [];
    },
    [fetchSimilarProducts.fulfilled]: (state, action) => {
      state.isLoading = 'success';
      state.similarProducts = action.payload;
    },
    [fetchSimilarProducts.rejected]: (state) => {
      state.isLoading = 'error';
      state.similarProducts = [];
    },
  },
});

export const similarSelector = (state) => state.similar;

export const { setSimilarProducts } = similarSlice.actions;

export default similarSlice.reducer;
