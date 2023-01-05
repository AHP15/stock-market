/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getSymbols = createAsyncThunk('rockets/fetchRockets', async () => {
  const url = `${process.env.REACT_APP_BASE_URL}stock-screener?sector=Technology&Country=US&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=${process.env.REACT_APP_API_KEY}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
});

const RocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    loading: false,
    error: null,
    symbols: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSymbols.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSymbols.fulfilled, (state, action) => {
        state.loading = false;
        state.symbols = action.payload;
        state.error = null;
      })
      .addCase(getSymbols.rejected, (state, action) => {
        state.loading = false;
        state.symbols = [];
        state.error = action.error.message;
      });
  },
});

export default RocketSlice.reducer;
