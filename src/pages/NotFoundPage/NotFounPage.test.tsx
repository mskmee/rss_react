import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('When rendered', () => {
  it('should have title "This page is not found"', () => {
    render(<NotFoundPage />);
    expect(
      screen.getByRole('heading', { name: new RegExp('this page is not found', 'i'), level: 1 })
    );
  });
});
