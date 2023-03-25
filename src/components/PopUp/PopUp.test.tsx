import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PopUp } from './PopUp';

const mockedFunc = vi.fn();

beforeEach(() => {
  render(
    <PopUp onClose={mockedFunc}>
      <h1>Success</h1>
    </PopUp>
  );
});

describe('When mounted', () => {
  it('Should have data from props', () => {
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  });

  it('Should call onClose func when click out of content div', () => {
    const backgroundDiv = screen.getByTestId('background');
    fireEvent.click(backgroundDiv);
    expect(mockedFunc).toBeCalled();
  });

  it('Should call onClose func when click on ok btn', () => {
    const btn = screen.getByRole('button', {
      name: /close/i,
    });
    fireEvent.click(btn);
    expect(mockedFunc).toBeCalled();
  });
});
