import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  searchValue: '',
  currentPaginationNumber: 1,
  currentProductOnPage: 0,
  limitProduct: 4,
  sort: {
    name: 'popularity (↓)',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.activeCategory = action.payload;
      state.currentPaginationNumber = 1;
    },
    setSort(state, action) {
      state.sort = action.payload;
      state.currentPaginationNumber = 1;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
      state.currentPaginationNumber = 1;
    },
    setCurrentPaginationNumber(state, action) {
      state.currentPaginationNumber = action.payload;
    },
    setCurrentProductOnPage(state, action) {
      state.currentProductOnPage = action.payload;
    },
  },
});

export const {
  setCategory,
  setSort,
  setSearchValue,
  setCurrentPaginationNumber,
  setCurrentProductOnPage,
} = filterSlice.actions;

export default filterSlice.reducer;
