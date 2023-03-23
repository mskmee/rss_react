import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

describe('when rendered', () => {
  it('should have header', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.queryByRole('header')).toBeTruthy();
  });
});
