import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchBar } from './SearchBar';
import { store } from '../../store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const mockHandler = vi.fn();
const mockQuery = 'find';

describe('When component render', () => {
  it('Should change store on submit', async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const testData = 'test value';
    fireEvent.change(input, { target: { value: testData } });
    const submit = screen.getByRole('button');
    fireEvent.click(submit);
    expect(input.value).equal(testData);
  });
});
