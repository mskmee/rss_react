import { describe, it, expect } from 'vitest';
import { getDataFromLocalStorage, setDataToLocalStorage } from './localstorageWorker';

describe('Save data', () =>
  it('should save data to local storage', () => {
    const key = 'searchValue';
    const value = 'bar';
    setDataToLocalStorage(value);
    expect(localStorage.getItem(key)).toBe(value);
  }));

describe('Get data', () => {
  it('Should get data from local storage', () => {
    const key = 'searchValue';
    const value = 'bar';
    localStorage.setItem(key, value);
    expect(getDataFromLocalStorage()).toBe(value);
  });
});
