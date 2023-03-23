import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CharacterCard } from './CharacterCard';

describe('when rendered', () => {
  const productStub = { id: 2, name: 'Alex' };

  it('Should have product title', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('Should have product brand', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.queryAllByText(brand)).toBeTruthy();
  });

  it('Should have product description', () => {
    render(<CharacterCard {...productStub} />);

    expect(screen.getByText(description)).toBeTruthy();
  });

  it('Should have product price', () => {
    render(<CharacterCard {...productStub} />);
    expect(screen.getByText(price.toString(), { exact: false })).toBeTruthy();
  });

  it('Should have product img', () => {
    render(<CharacterCard {...productStub} />);
    const img = screen.getByAltText(title) as HTMLImageElement;
    expect(img.src).toBe(thumbnail);
  });
});
