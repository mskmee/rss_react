import { pageAnimation } from '../../animates/animates';
import { motion } from 'framer-motion';
import { CardsWrapper } from '../../components/CardsWrapper';
import { SearchBar } from '../../components/SearchBar';
import { useEffect, useState } from 'react';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../domain/localStorageWorker';

export const Cards = () => {
  const [searchValue, setSearchValue] = useState<string>(getDataFromLocalStorage() || '');
  const [querySearchValue, setQuerySearchValue] = useState(getDataFromLocalStorage() || '');

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

  const submitHandler = () => {
    setQuerySearchValue(searchValue);
  };

  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <SearchBar query={searchValue} submitHandler={submitHandler} setQuery={setSearchValue} />
      <CardsWrapper query={querySearchValue} />
    </motion.div>
  );
};
