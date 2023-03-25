import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchBar } from './SearchBar';

const mockHandler = vi.fn();
const mockQuery = 'find';
const mockSetQuery = vi.fn();

describe('When component render', () => {
  it('Check user input', () => {
    render(<SearchBar query={mockQuery} setQuery={mockSetQuery} submitHandler={mockHandler} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(mockQuery);
  });
  it('setDataToLocalStorage is called on beforeunload', async () => {
    render(<SearchBar query={mockQuery} setQuery={mockSetQuery} submitHandler={mockHandler} />);
    const submit = screen.getByRole('button');
    fireEvent.click(submit);
    expect(mockHandler).toBeCalled();
  });
});
