import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './features/portfolio/portfolioSlice';

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

export default store;
