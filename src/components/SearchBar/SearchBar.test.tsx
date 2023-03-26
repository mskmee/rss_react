import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import { setDataToLocalStorage } from '../../domain/localStorageWorker';

vi.mock('../../domain/localStorageWorker');
describe('When component render', () => {
  it('Check user input', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '42');
    expect(input.value).toBe('42');
  });
  it('setDataToLocalStorage is called on beforeunload', async () => {
    render(<SearchBar />);
    window.dispatchEvent(new Event('beforeunload'));
    expect(setDataToLocalStorage).toBeCalled();
  });
});
