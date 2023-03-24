import { motion } from 'framer-motion';
import { ICardElement } from '../../api/types';
import styles from './DetailedCard.module.css';

export const DetailedCard = ({
  image,
  episode,
  gender,
  type,
  status,
  location,
  name,
  origin,
  species,
}: ICardElement) => {
  return (
    <motion.div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="imgWrapper">
          <img className={styles.img} alt="Main image" src={image} />
        </div>
        <div className={styles.info}>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Name:</span>
            <span className={styles.infoData}>{name}</span>
          </p>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Species:</span>
            <span className={styles.infoData}>{species}</span>
          </p>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Status:</span>
            <span className={styles.infoData}>{status}</span>
          </p>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Type:</span>
            <span className={styles.infoData}>{type}</span>
          </p>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Gender:</span>
            <span className={styles.infoData}>{gender}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
