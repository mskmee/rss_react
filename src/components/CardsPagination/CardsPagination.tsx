import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setPage } from '../../store/searchResultsSlice';
import { RootState } from 'store/store';
import styles from './CardsPagination.module.css';

export const CardsPagination = () => {
  const page = useSelector((state: RootState) => state.searchResults.page);
  const pageCount = useSelector((state: RootState) => state.searchResults.totalPageCount);
  const dispatch = useDispatch();
  const prevBtnClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(setPage(page - 1));
  };
  const nextBtnClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(setPage(page + 1));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>
          The page #{page} from {pageCount}
        </p>
      </div>
      <div className={styles.btnsWrapper}>
        {page !== 1 && (
          <button className={styles.btn} onClick={prevBtnClickHandler} type="button">
            Previous Page
          </button>
        )}
        {page !== pageCount && (
          <button className={styles.btn} onClick={nextBtnClickHandler} type="button">
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};
