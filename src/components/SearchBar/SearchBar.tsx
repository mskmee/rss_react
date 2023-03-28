import { useRef } from 'react';
import styles from './SearchBar.module.css';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../../store/searchSlice';
import { setPage } from '../../store/searchResultsSlice';

export const SearchBar = () => {
  const query = useSelector((state: RootState) => state.search.searchQuery);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(setQuery(inputRef.current!.value));
        dispatch(setPage(1));
      }}
    >
      <input className={styles.input} type="text" defaultValue={query} ref={inputRef} />
      <button type="submit" className={styles.icon} />
    </form>
  );
};
