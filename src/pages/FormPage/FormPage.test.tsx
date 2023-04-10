import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { describe, it, expect } from 'vitest';
import { FormPage } from './FormPage';

describe('FormPage', () => {
  it('renders form fields', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = getByLabelText(/name/i);
    const dateInput = getByLabelText(/date/i);
    expect(nameInput).toBeTruthy();
    expect(dateInput).toBeTruthy();
  });
});
