import { PopUp } from '../../components/PopUp';
import { useState } from 'react';
import { ICardElement as ICardProps } from '../../api/types';
import { DetailedCard } from '../../components/DetailedCard';
import styles from './CharacterCard.module.css';
import { AnimatePresence, motion } from 'framer-motion';

export const CharacterCard = ({
  id,
  image,
  name,
  created,
  episode,
  gender,
  location,
  origin,
  species,
  status,
  type,
  url,
}: ICardProps) => {
  const cardData = {
    id,
    image,
    name,
    created,
    episode,
    gender,
    location,
    origin,
    species,
    status,
    type,
    url,
  };
  const [isPopUp, setIsPopUp] = useState(false);
  const onPopUpClose = () => {
    setIsPopUp(false);
  };
  return (
    <motion.div className={styles.container}>
      <div className={styles.card} onClick={() => setIsPopUp(true)}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={image} alt={name} />
        </div>
        <div className={styles.title}>{name}</div>
      </div>
      <AnimatePresence mode="wait">
        {isPopUp && (
          <PopUp onClose={onPopUpClose}>
            <DetailedCard {...cardData} />
          </PopUp>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
