import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CardsWrapper from './CardsWrapper';

describe('When rendered', () => {
  it('should have cards wrapper', () => {
    render(<CardsWrapper />);
    expect(screen.getByText(new RegExp('cards', 'i'))).toBeTruthy();
  });
});
