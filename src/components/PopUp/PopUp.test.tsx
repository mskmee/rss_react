import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import PopUp from './PopUp';

const mockedData = 'Success';
const mockedFunc = vi.fn();

beforeEach(() => {
  render(<PopUp textContent={mockedData} onClose={mockedFunc} />);
});

describe('When mounted', () => {
  it('Should have data from props', () => {
    expect(screen.getByText(mockedData)).toBeTruthy();
  });

  it('Should call onClose func when click out of content div', () => {
    const backgroundDiv = screen.getByTestId('background');
    fireEvent.click(backgroundDiv);
    expect(mockedFunc).toBeCalled();
  });

  it('Should call onClose func when click on ok btn', () => {
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(mockedFunc).toBeCalled();
  });
});
