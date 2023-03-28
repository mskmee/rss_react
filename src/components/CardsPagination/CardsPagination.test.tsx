import React from 'react';
import { describe, expect, it } from 'vitest';
import { CardsPagination } from './CardsPagination';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('After render', () => {
  it('Should have pagination text', () => {
    render(
      <Provider store={store}>
        <CardsPagination />
      </Provider>
    );
    const test = 'The page';
    const result = screen.findByText(test);
    expect(result).toBeTruthy();
  });
});
