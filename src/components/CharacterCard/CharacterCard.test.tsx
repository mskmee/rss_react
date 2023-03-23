import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CharacterCard } from './CharacterCard';

describe('when rendered', () => {
  const productStub = { id: 2, name: 'Alex' };

  it.todo('Should have product title', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  it.todo('Should have product brand', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.queryAllByText(brand)).toBeTruthy();
  });

  it.todo('Should have product description', () => {
    render(<CharacterCard {...productStub} />);

    expect(screen.getByText(description)).toBeTruthy();
  });

  it.todo('Should have product price', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.getByText(price.toString(), { exact: false })).toBeTruthy();
  });

  it.todo('Should have product img', () => {
    render(<CharacterCard {...productStub} />);
    const img = screen.getByAltText(title) as HTMLImageElement;
    expect(img.src).toBe(thumbnail);
  });
});
