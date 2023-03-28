import React, { useEffect } from 'react';
import styles from './CardsWrapper.module.css';
import { CharacterCard } from '../../components/CharacterCard';
import { LoadingComponent } from '../../components/LoadingComponent';
import { ErrorComponent } from '../../components/ErrorComponent';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchCharacters } from '../../store/searchResultsSlice';
import { CardsPagination } from '../../components/CardsPagination';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

export const CardsWrapper = () => {
  const query = useSelector((state: RootState) => state.search.searchQuery);
  const cardsData = useSelector((state: RootState) => state.searchResults.cards);
  const page = useSelector((state: RootState) => state.searchResults.page);
  const isLoading = useSelector((state: RootState) => state.searchResults.isLoading);
  const error = useSelector((state: RootState) => state.searchResults.error);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters({ page, query }));
  }, [query, page, dispatch]);

  return (
    <>
      <h2 className={styles.title}>Cards: </h2>
      {error && !isLoading && <ErrorComponent errorText={error} />}
      {isLoading && <LoadingComponent />}
      {!error && !isLoading && (
        <>
          <div className={styles.wrapper}>
            {cardsData.map((card) => (
              <CharacterCard {...card} key={card.id} />
            ))}
          </div>
          <CardsPagination />
        </>
      )}
    </>
  );
};
