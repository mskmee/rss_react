import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ErrorComponent } from './ErrorComponent';

describe('When rendered', () => {
  it('Should have error heading', () => {
    const testText = 'test';
    render(<ErrorComponent errorText={testText} />);
    const errorText = screen.getByRole('heading', {
      name: testText,
    });
    expect(errorText).toBeTruthy();
  });
});
