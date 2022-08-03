import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  searchValue: '',
  currentPaginationNumber: 1,
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
    setCountProductOnPage(state, action) {
      state.countProductOnPage = action.payload;
    },
  },
});

export const {
  setCategory,
  setSort,
  setSearchValue,
  setCurrentPaginationNumber,
  setCountProductOnPage,
} = filterSlice.actions;

export default filterSlice.reducer;
