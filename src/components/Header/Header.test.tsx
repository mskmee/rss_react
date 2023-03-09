import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('When component rendered', () => {
  it('should have home href', () => {
    render(<Header />);
    const result = screen.queryAllByText(/home/i);
    expect(result).toBeTruthy();
  });
  it('should have about us href', () => {
    render(<Header />);
    const result = screen.queryAllByText(/about us/i);
    expect(result).toBeTruthy();
  });
});
