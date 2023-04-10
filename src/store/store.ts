import { configureStore } from '@reduxjs/toolkit';
import { formCardsSlice } from './formCardsSlice';
import { searchResultSlice } from './searchResultsSlice';
import { searchSlice } from './searchSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    searchResults: searchResultSlice.reducer,
    formCards: formCardsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
