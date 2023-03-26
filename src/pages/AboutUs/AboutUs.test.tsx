import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('When rendered', () => {
  it('should have title "About us"', () => {
    render(<AboutUs />);
    expect(screen.getByRole('heading', { name: /about us/i, level: 1 }));
  });
});
