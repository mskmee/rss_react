import { render, screen, fireEvent } from '@testing-library/react';
import { Cards } from './Cards';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../domain/localStorageWorker';
import { vi, describe, afterEach, it, expect } from 'vitest';

vi.mock('../../domain/localStorageWorker');

describe('Cards', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the SearchBar and CardsWrapper components', () => {
    render(<Cards />);
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        name: /cards:/i,
      })
    ).toBeTruthy();
  });

  it('updates the searchValue state variable correctly', () => {
    render(<Cards />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('updates the local storage on before unload  correctly', () => {
    render(<Cards />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
    window.dispatchEvent(new Event('beforeunload'));
    expect(setDataToLocalStorage).toHaveBeenCalledWith('test');
  });

  it('saves and loads data to and from local storage correctly', () => {
    render(<Cards />);
    expect(getDataFromLocalStorage).toHaveBeenCalled();
    expect(setDataToLocalStorage).not.toHaveBeenCalled();
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const submitButton = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'new test' } });
    fireEvent.click(submitButton);
    expect(setDataToLocalStorage).toHaveBeenCalledWith('new test');
  });
});
