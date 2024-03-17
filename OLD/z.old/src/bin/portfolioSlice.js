import { createSelector, createSlice } from '@reduxjs/toolkit';
import { portfolio } from '../data/portfolio';

const initialState = {
  portfolioItems: portfolio,
  status: 'colapsed', // 'colapsed' | 'expanded'
  currentPortfolioItemId: null,
  currentPortfolioItemCache: null,
  errorMessage: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setCurrentPortfolioItem(state, action) {
      // Expects an ID
      if (state.currentPortfolioItemId !== action.payload) {
        state.currentPortfolioItemId = action.payload;
        state.currentPortfolioItemCache = state.portfolioItems.find(
          (item) => item?.id === action.payload,
        );
        state.status = 'expanded';
      } else {
        portfolioSlice.caseReducers.clearCurrentPortfolioItem(state, action);
      }
    },
    clearCurrentPortfolioItem(state) {
      // No Payload
      state.currentPortfolioItemId = null;
      state.status = 'colapsed';
    },
  },
});

export const { setCurrentPortfolioItem } = portfolioSlice.actions;

export default portfolioSlice.reducer;

export const getPortfolioItems = createSelector(
  (state) => state.portfolio.portfolioItems,
  (portfolioItems) => portfolioItems,
);

export const getPortfolioStatus = createSelector(
  (state) => state.portfolio.status,
  (status) => status,
);

export const getCurrentPortfolioItemId = createSelector(
  (state) => state.portfolio.currentPortfolioItemId,
  (currentPortfolioItemId) => currentPortfolioItemId,
);

export const getCurrentPortfolioItemCache = createSelector(
  (state) => state.portfolio.currentPortfolioItemCache,
  (currentPortfolioItemCache) => currentPortfolioItemCache,
);

export const getPortfolioItemsCount = createSelector(
  getPortfolioItems,
  (portfolioItems) => portfolioItems.length,
);

export const getPortfolioItemBySlug = createSelector(
  // First input selector: all portfolio items
  (state) => state.portfolio.portfolioItems,
  // Second input selector: do nothing (just pass the slug through)
  (_, slug) => slug,
  // Output selector: find the portfolio item with the matching slug
  (portfolioItems, slug) => portfolioItems.find((item) => item.slug === slug),
);

export const isPortfolioSlugValid = createSelector(
  // First input selector: all portfolio items
  (state) => state.portfolio.portfolioItems,
  // Second input selector: do nothing (just pass the slug through)
  (_, slug) => slug,
  // Output selector: find the portfolio item with the matching slug
  (portfolioItems, slug) => portfolioItems.some((item) => item.slug === slug),
);
