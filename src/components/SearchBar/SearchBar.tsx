import React, { useEffect, useState } from 'react';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../domain/localStorageWorker';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>(getDataFromLocalStorage() || '');

  useEffect(() => {
    const saveOnReload = () => {
      setDataToLocalStorage(searchValue);
    };
    window.addEventListener('beforeunload', saveOnReload);
    return () => {
      setDataToLocalStorage(searchValue);
      window.removeEventListener('beforeunload', saveOnReload);
    };
  }, [searchValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" value={searchValue} onChange={handleChange} />
      <div className={styles.icon}></div>
    </div>
  );
};
