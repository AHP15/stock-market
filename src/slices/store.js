import { configureStore } from '@reduxjs/toolkit';

import symbolsReducer from './CompanySymbolSlice';

const Store = configureStore({
  reducer: {
    symbols: symbolsReducer,
  },
});

export default Store;
