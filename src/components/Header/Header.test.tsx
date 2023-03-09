import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('When component rendered', () => {
  it.todo('should have home href', () => {
    render(<Header />);
    const result = screen.getByText(/home/i);
    expect(result).toBeTruthy();
  });
  it.todo('should have about us href', () => {
    render(<Header />);
    const result = screen.getByText(/about us/i);
    expect(result).toBeTruthy();
  });
});
