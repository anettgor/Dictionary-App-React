import { configureStore } from '@reduxjs/toolkit';
import { wordReducer } from './wordSlice';
import { searchReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    word: wordReducer,
    search: searchReducer,
  },
});
