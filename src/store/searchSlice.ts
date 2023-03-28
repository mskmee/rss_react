import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getDataFromLocalStorage } from '../domain/localStorageWorker';

export interface ISearchState {
  searchQuery: string;
}

const initialState: ISearchState = {
  searchQuery: getDataFromLocalStorage() || '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
