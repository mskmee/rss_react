import { render, screen, fireEvent } from '@testing-library/react';
import { Cards } from './Cards';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../domain/localStorageWorker';
import { vi, describe, afterEach, it, expect, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../../store';

vi.mock('../../domain/localStorageWorker');

beforeEach(() => {
  render(
    <Provider store={store}>
      <Cards />
    </Provider>
  );
});

describe('Cards', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the SearchBar and CardsWrapper components', () => {
    expect(screen.getByRole('textbox')).toBeTruthy();
    expect(
      screen.getByRole('heading', {
        name: /cards:/i,
      })
    ).toBeTruthy();
  });

  it('updates the searchValue state variable correctly', () => {
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
