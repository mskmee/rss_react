import React from 'react';
import { cardsData } from '../../api/cardsData';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';

describe('when rendered', () => {
  const productStub = cardsData.products[0];
  const { title, thumbnail, price, description, rating, brand, id } = productStub;
  it('Should have product title', () => {
    render(<Card {...productStub} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  it('Should have product brand', () => {
    render(<Card {...productStub} />);
    expect(screen.queryAllByText(brand)).toBeTruthy();
  });

  it('Should have product description', () => {
    render(<Card {...productStub} />);

    expect(screen.getByText(description)).toBeTruthy();
  });

  it('Should have product price', () => {
    render(<Card {...productStub} />);
    expect(screen.getByText(price.toString(), { exact: false })).toBeTruthy();
  });

  it('Should have product img', () => {
    render(<Card {...productStub} />);
    const img = screen.getByAltText(title) as HTMLImageElement;
    expect(img.src).toBe(thumbnail);
  });
});
