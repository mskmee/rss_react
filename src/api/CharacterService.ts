import axios from 'axios';
import { ICardElement, ICharacterResponse } from './types';

export class CharacterService {
  static getByPage = async (page = 1) => {
    const response = await axios.get<ICharacterResponse>(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    return response;
  };
  static getByCharacter = async (id: number) => {
    const response = await axios.get<ICardElement>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    return response;
  };
  static getByName = async (searchQuery: string) => {
    const response = await axios.get<ICharacterResponse>(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    return response;
  };
}
