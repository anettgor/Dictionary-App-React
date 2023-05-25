import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setStatusSearch(_, action) {
      return action.payload.toLowerCase();
    },
  },
});

export const { setStatusSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
