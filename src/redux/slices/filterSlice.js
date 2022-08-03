import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  searchValue: '',
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
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
