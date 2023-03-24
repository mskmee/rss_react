import React, { useEffect, useState } from 'react';
import styles from './CardsWrapper.module.css';
import { useFetching } from '../../hooks/useFetching';
import { CharacterService } from '../../api/CharacterService';
import { ICardElement } from 'api/types';
import { CharacterCard } from '../../components/CharacterCard';
import { LoadingComponent } from '../../components/LoadingComponent';
import { ErrorComponent } from '../../components/ErrorComponent';

interface ICardsWrapperProps {
  query: string;
}
export const CardsWrapper = ({ query }: ICardsWrapperProps) => {
  // const [page, setpage] = useState<number>(1);
  // const [totalPageCount, setTotalPageCount] = useState(1);
  const [responseData, setResponseData] = useState<ICardElement[]>([]);
  const [fetchCharacters, isLoading, isError] = useFetching(async () => {
    const response = await CharacterService.getByName(query);
    // setTotalPageCount(response.data.info.pages);
    setResponseData(response.data.results);
  });

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <h2 className={styles.title}>Cards: </h2>
      {isError && !isLoading && <ErrorComponent errorText={isError} />}
      {isLoading && <LoadingComponent />}
      {!isError && !isLoading && (
        <div className={styles.wrapper}>
          {responseData.map((card) => (
            <CharacterCard {...card} key={card.id} />
          ))}
        </div>
      )}
    </>
  );
};
