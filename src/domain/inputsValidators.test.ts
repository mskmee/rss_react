import { describe, it, expect } from 'vitest';
import { checkIsDateValid, checkIsFileValid } from './inputsValidators';

describe('Check date validation', () => {
  it('Should return false if input date smaller then 1900 year', () => {
    expect(checkIsDateValid('1890-01-01')).toBeFalsy();
  });

  it('Should return false if input date more than today', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    expect(checkIsDateValid(tomorrowStr)).toBeFalsy();
  });

  it('Should return true if input date is valid', () => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    expect(checkIsDateValid(todayStr)).toBeTruthy();
  });
});

describe('Check file validation', () => {
  it('Should return false if file extension did`nt compare to types(jpg, jpeg, gif, svg)', () => {
    const fileName = 'test.mp3';
    expect(checkIsFileValid(fileName)).toBeFalsy();
  });
  it('Should return true if file extension is compare to types (jpg, jpeg, gif, svg)', () => {
    const fileName = 'test.svg';
    expect(checkIsFileValid(fileName)).toBeTruthy();
  });
});
