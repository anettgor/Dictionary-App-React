import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const fetchWord = createAsyncThunk(
  'word/fetchWord',
  async (word, thunkApi) => {
    try {
      const response = await axios.get(word);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
