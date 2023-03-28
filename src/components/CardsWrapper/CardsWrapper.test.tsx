import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CardsWrapper } from './CardsWrapper';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('When rendered', () => {
  it('should have cards wrapper', () => {
    render(
      <Provider store={store}>
        <CardsWrapper />
      </Provider>
    );
    expect(screen.getByRole('heading', { name: /cards/i, level: 2 }));
  });
});
