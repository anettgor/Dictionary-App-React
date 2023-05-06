import { createSlice } from '@reduxjs/toolkit';
import { fetchWord } from './operations.js';

const wordSlice = createSlice({
  name: 'word',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchWord.pending](state) {
      state.isLoading = true;
    },
    [fetchWord.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [fetchWord.fulfilled](state, action) {
      state.isLoading = false;
      state.items = [...action.payload];
    },
  },
});

export const wordReducer = wordSlice.reducer;
