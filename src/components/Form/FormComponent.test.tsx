import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormComponent from './FormComponent';

describe('When component rendered', () => {
  it.todo('should have home href', () => {
    render(<FormComponent />);
    const result = screen.getByRole('link', { name: /home/i });
    expect(result).toBeTruthy();
  });
});
