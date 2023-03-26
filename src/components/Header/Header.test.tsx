import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('When component rendered', () => {
  it('should have home href', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const result = screen.getByRole('link', { name: /home/i });
    expect(result).toBeTruthy();
  });
  it('should have about us href', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const result = screen.getByRole('link', { name: /about us/i });
    expect(result).toBeTruthy();
  });
});
