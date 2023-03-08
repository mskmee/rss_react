import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('Renders hello world', () => {
    render(<App />);
    const result = screen.getByText(/Hello world/i);
    expect(result).toBeTruthy();
  });
});
