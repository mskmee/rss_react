import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormPage } from './FormPage';

describe('FormPage', () => {
  it('renders form fields', () => {
    const { getByLabelText } = render(<FormPage />);
    const nameInput = getByLabelText(/name/i);
    const dateInput = getByLabelText(/date/i);
    expect(nameInput).toBeTruthy();
    expect(dateInput).toBeTruthy();
  });
});
