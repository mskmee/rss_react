import React from 'react';
import { render, screen } from '@testing-library/react';
import { DetailedCard } from './DetailedCard';
import { describe, it, expect } from 'vitest';

const mockCardData = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: 'Type',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('DetailedCard', () => {
  it('renders card data correctly', () => {
    render(<DetailedCard {...mockCardData} />);
    expect(screen.getByAltText(mockCardData.name)).toBeTruthy();
    expect(screen.getByText(mockCardData.name)).toBeTruthy();
    expect(screen.getAllByText(mockCardData.gender).length).toEqual(2);
    expect(screen.getAllByText(mockCardData.species).length).toEqual(2);
    expect(screen.getAllByText(mockCardData.status).length).toEqual(2);
    expect(screen.getAllByText(mockCardData.type).length).toEqual(2);
    expect(screen.getByText(mockCardData.origin.name)).toBeTruthy();
    expect(screen.getByText(mockCardData.location.name)).toBeTruthy();
  });
});
