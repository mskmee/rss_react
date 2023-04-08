import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CharacterCard } from './CharacterCard';

describe('when rendered', () => {
  const productStub = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
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

  it('Should have card name', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.getByText(productStub.name)).toBeTruthy();
  });

  it('Should have card gender', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.queryAllByText(productStub.gender)).toBeTruthy();
  });

  it.todo('Should have card status', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.getByText(productStub.status)).toBeTruthy();
  });

  it.todo('Should have card species', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.getByText(productStub.species)).toBeTruthy();
  });

  it.todo('Should have product img', () => {
    render(<CharacterCard {...productStub} />);
    const img = screen.getByAltText(productStub.name) as HTMLImageElement;
    expect(img.src).toBe(productStub.image);
  });
});
