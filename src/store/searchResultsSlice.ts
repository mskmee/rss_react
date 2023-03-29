import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICardElement, ICharacterResponse } from 'api/types';
import axios from 'axios';

export interface ISearchResultState {
  cards: ICardElement[];
  page: number;
  totalPageCount: number;
  isLoading: boolean;
  error: null | string;
}
const initialState: ISearchResultState = {
  cards: [],
  page: 1,
  totalPageCount: 1,
  isLoading: false,
  error: null,
};
interface IFetchCharactersProps {
  query: string;
  page: number;
}

export const fetchCharacters = createAsyncThunk<
  ICharacterResponse,
  IFetchCharactersProps,
  { rejectValue: string }
>('/searchResult/fetchCharacters', async ({ page, query }, { rejectWithValue }) => {
  try {
    const response = await axios.get<ICharacterResponse>(
      `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    return rejectWithValue('Error fetching characters');
  }
});

export const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<ICardElement[]>) => {
      state.cards = action.payload;
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.totalPageCount = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.cards = action.payload.results;
        state.totalPageCount = action.payload.info.count;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setResults, setTotalPage, setPage } = searchResultSlice.actions;
