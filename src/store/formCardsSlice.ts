import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFormComponentData {
  id: string;
  name: string;
  date: string;
  car: string;
  sex: string;
  img: string;
}

export interface IFormCardsState {
  cards: IFormComponentData[];
}

const initialState: IFormCardsState = {
  cards: [],
};

export const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setFormCards: (state, action: PayloadAction<IFormComponentData>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { setFormCards } = formCardsSlice.actions;
