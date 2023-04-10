import React from 'react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormComponent } from './FormComponent';
import userEvent from '@testing-library/user-event';
import { IFormComponentData } from '../../store/formCardsSlice';

let onSubmitMock: (data: IFormComponentData) => void;

beforeEach(() => {
  onSubmitMock = vi.fn();
  render(<FormComponent onSubmit={onSubmitMock} />);
});

describe('When component rendered', () => {
  it('Check name input', async () => {
    const user = userEvent.setup();
    const input = screen.getByLabelText(/name/i) as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '42');
    expect(input.value).toBe('42');
  });

  it('Check date input', async () => {
    const user = userEvent.setup();
    const input = screen.getByLabelText(/date/i) as HTMLInputElement;
    await user.clear(input);
    await user.type(input, '2018-07-22');
    expect(input.value).toBe('2018-07-22');
  });

  it('Check select input', async () => {
    const user = userEvent.setup();
    const select = screen.getByLabelText(/car/i) as HTMLSelectElement;
    await user.selectOptions(select, 'saab');
    expect(select.value).toBe('saab');
  });

  it('Check checkbox input', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    await user.click(input);
    expect(input.checked).toBeTruthy();
  });

  it('Check file input', async () => {
    const user = userEvent.setup();
    const input = screen.getByLabelText('Choose photo image to upload') as HTMLInputElement;
    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    await user.upload(input, fakeFile);
    const inputFile = input.files?.[0];
    expect(input.files).toHaveLength(1);
    expect(inputFile).toStrictEqual(fakeFile);
  });
});

describe('Check form after submit', () => {
  it('Should have valid form', () => {
    it('submitHandler adds a new card to state when form is submitted with valid inputs', () => {
      const { getByLabelText, getByRole, getByText } = render(
        <FormComponent onSubmit={onSubmitMock} />
      );
      const nameInput = getByLabelText(/name/i);
      const dateInput = getByLabelText(/date/i);
      const carsSelect = getByLabelText(/cars/i);
      const policyCheck = getByLabelText(/policy/i);
      const maleRadio = getByLabelText(/male/i);
      const fileInput = getByLabelText(/choose images to upload/i) as HTMLInputElement;
      const submitButton = getByRole('button', { name: /send/i });
      const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
      const inputFile = fileInput.files?.[0];

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
      expect(inputFile).toStrictEqual(fakeFile);
      fireEvent.click(submitButton);
      expect(onSubmitMock).toHaveBeenCalledWith(
        expect.objectContaining({
          preventDefault: expect.any(Function),
        })
      );
    });
  });
});
