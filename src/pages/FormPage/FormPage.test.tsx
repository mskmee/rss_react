import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormPage from './FormPage';

describe('FormPage', () => {
  it('renders form fields', () => {
    const { getByLabelText } = render(<FormPage />);
    const nameInput = getByLabelText('Name:');
    const emailInput = getByLabelText('Email:');
    const messageInput = getByLabelText('Message:');
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(messageInput).toBeTruthy();
  });
});
