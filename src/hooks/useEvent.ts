import { setDataToLocalStorage } from '../domain/localStorageWorker';
import { useEffect, useRef } from 'react';

export const useEvent = (value: string) => {
  const inputValue = useRef(value);

  useEffect(() => {
    const saveOnReload = () => {
      setDataToLocalStorage(inputValue.current);
    };
    window.addEventListener('beforeunload', saveOnReload);
    return () => {
      setDataToLocalStorage(inputValue.current);
      window.removeEventListener('beforeunload', saveOnReload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);
};
