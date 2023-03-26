import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CardsWrapper from './CardsWrapper';

describe('When rendered', () => {
  it('should have cards wrapper', () => {
    render(<CardsWrapper />);
    expect(screen.getByRole('heading', { name: /cards/i, level: 2 }));
  });
});
