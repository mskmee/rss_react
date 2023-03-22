import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

describe('When rendered', () => {
  it('should have title "This page is not found"', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(
      screen.getByRole('heading', {
        name: /The page you are trying to search has been moved to another universe/i,
        level: 3,
      })
    );
  });
});
