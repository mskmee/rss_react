interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

interface ICharacterInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICardElement {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterResponse {
  info: ICharacterInfo;
  results: ICardElement[];
}
