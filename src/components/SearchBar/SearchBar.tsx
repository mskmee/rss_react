import { useEvent } from '../../hooks/useEvent';
import React, { useState } from 'react';
import { getDataFromLocalStorage } from '../../domain/localStorageWorker';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>(getDataFromLocalStorage() || '');
  useEvent(searchValue);

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
