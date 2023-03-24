import React, { useEffect, useState } from 'react';
import styles from './CardsWrapper.module.css';
import { useFetching } from '../../hooks/useFetching';
import { CharacterService } from '../../api/CharacterService';
import { ICardElement } from 'api/types';
import { CharacterCard } from '../../components/CharacterCard';
import { AnimatePresence, motion } from 'framer-motion';
import { fade } from '../../animates/animates';

interface ICardsWrapperProps {
  query: string;
}
export const CardsWrapper = ({ query }: ICardsWrapperProps) => {
  const [page, setpage] = useState<number>(1);
  const [responseData, setResponseData] = useState<ICardElement[]>([]);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [fetchCharacters, isLoading, isError] = useFetching(async () => {
    const response = await CharacterService.getByName(query);
    setTotalPageCount(response.data.info.pages);
    setResponseData(response.data.results);
  });

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  return (
    <>
      <h2 className={styles.title}>Cards: </h2>
      {isError && !isLoading && <h2 className={styles.error}>{isError}</h2>}
      {isLoading && <h2>Content is loading</h2>}
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
