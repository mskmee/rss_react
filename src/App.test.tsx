import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('when rendered', () => {
  it('should have header', () => {
    render(<App />);
    expect(screen.queryByRole('header')).toBeTruthy();
  });
});
