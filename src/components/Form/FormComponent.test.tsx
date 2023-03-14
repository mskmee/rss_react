import React from 'react';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import FormComponent from './FormComponent';
import userEvent from '@testing-library/user-event';

describe('When component rendered', () => {
  it('Check name input', async () => {
    render(<FormComponent />);
    const user = userEvent.setup();
    const input = screen.getByLabelText(new RegExp('name', 'i')) as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '42');
    expect(input.value).toBe('42');
  });

  it('Check date input', async () => {
    render(<FormComponent />);
    const user = userEvent.setup();
    const input = screen.getByLabelText(new RegExp('date', 'i')) as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '2018-07-22');
    expect(input.value).toBe('2018-07-22');
  });

  it('Check select input', async () => {
    render(<FormComponent />);
    const user = userEvent.setup();
    const select = screen.getByLabelText(new RegExp('cars', 'i')) as HTMLSelectElement;
    await user.selectOptions(select, 'saab');
    expect(select.value).toBe('saab');
  });

  it('Check checkbox input', async () => {
    render(<FormComponent />);
    const user = userEvent.setup();
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    await user.click(input);
    expect(input.checked).toBeTruthy();
  });

  it('Check file input', async () => {
    render(<FormComponent />);
    const user = userEvent.setup();
    const input = screen.getByLabelText('Choose images to upload') as HTMLInputElement;
    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    await user.upload(input, fakeFile);
    expect(input.files).toHaveLength(1);
    expect(input.files?.[0] ?? null).toStrictEqual(fakeFile);
  });
});

describe('Check form after submit', () => {
  it('Should have valid form', () => {
    it('submitHandler adds a new card to state when form is submitted with valid inputs', () => {
      const { getByLabelText, getByRole, getByText } = render(<FormComponent />);
      const nameInput = getByLabelText(/name/i);
      const dateInput = getByLabelText(/date/i);
      const carsSelect = getByLabelText(/cars/i);
      const policyCheck = getByLabelText(/policy/i);
      const maleRadio = getByLabelText(/male/i);
      const fileInput = getByLabelText(/choose images to upload/i) as HTMLIN;
      const submitButton = getByRole('button', { name: /send/i });
      const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(dateInput, { target: { value: '2022-03-14' } });
      fireEvent.change(carsSelect, { target: { value: 'volvo' } });
      fireEvent.click(maleRadio);
      fireEvent.change(fileInput, {
        target: {
          files: [fakeFile],
        },
      });
      fireEvent.click(policyCheck);
      expect(getByText(/john doe/i)).toBeTruthy();
      expect(getByText(/2022-03-14/i)).toBeTruthy();
      expect(getByText(/volvo/i)).toBeTruthy();
      expect(getByText(/male/i)).toBeTruthy();
      expect(getByLabelText(/policy/i)).toBeTruthy();
      expect(fileInput.files?.[0] ?? null).toStrictEqual(fakeFile);
      fireEvent.click(submitButton);
    });
  });
});
