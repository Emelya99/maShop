import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleProduct = createAsyncThunk(
  'single/fetchSingleProductStatus',
  async (params) => {
    const { id } = params;
    const { data } = await axios.get(`https://62e76c9f93938a545bd1363a.mockapi.io/product/${id}`);

    return data;
  },
);

const initialState = {
  singleProduct: {},
  isLoading: 'loading',
};

export const singleSlice = createSlice({
  name: 'single',
  initialState,
  reducers: {
    setSingleProduct(state, action) {
      state.products = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchSingleProduct.pending]: (state) => {
      state.isLoading = 'loading';
      state.singleProduct = {};
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.isLoading = 'success';
      state.singleProduct = action.payload;
    },
    [fetchSingleProduct.rejected]: (state) => {
      state.isLoading = 'error';
    },
  },
});

export const { setSingleProduct, setIsLoading } = singleSlice.actions;

export default singleSlice.reducer;
