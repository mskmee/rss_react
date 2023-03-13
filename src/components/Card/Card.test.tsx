import React from 'react';
import { cardsData } from '../../api/cardsData';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Card from './Card';

describe('when rendered', () => {
  const productStab = cardsData.products[0];
  const { title, thumbnail, price, description, rating, brand, id } = productStab;
  it('Should have product title', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
      />
    );
    expect(screen.getByText(new RegExp(title, 'i'))).toBeTruthy();
  });

  it('Should have product brand', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
      />
    );
    expect(screen.queryAllByText(new RegExp(brand, 'i'))).toBeTruthy();
  });

  it('Should have product description', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
      />
    );
    expect(screen.getByText(new RegExp(description, 'i'))).toBeTruthy();
  });

  it('Should have product price', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
      />
    );
    expect(screen.getByText(new RegExp(price.toString(), 'i'))).toBeTruthy();
  });

  it('Should have product img', () => {
    render(
      <Card
        id={id}
        title={title}
        brand={brand}
        description={description}
        price={price}
        rating={rating}
        thumbnail={thumbnail}
      />
    );
    const img = screen.getByAltText(new RegExp(title, 'i')) as HTMLImageElement;
    expect(img.src).toBe(thumbnail);
  });
});
