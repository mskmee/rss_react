import { motion } from 'framer-motion';
import { ICardElement } from '../../api/types';
import styles from './DetailedCard.module.css';

export const DetailedCard = ({
  origin,
  location,
  image,
  gender,
  type,
  status,
  name,
  species,
}: ICardElement) => {
  return (
    <motion.div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} alt={name} src={image} />
        </div>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.bioWrapper}>
          <span className={styles.bio}>{gender}</span>
          <span className={styles.bio}>{status}</span>
          <span className={styles.bio}>{species}</span>
          {type && <span className={styles.bio}>{type}</span>}
        </div>
        <div className={styles.info}>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Gender:</span>
            <span className={styles.infoData}>{gender}</span>
          </p>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Status:</span>
            <span className={styles.infoData}>{status}</span>
          </p>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Species:</span>
            <span className={styles.infoData}>{species}</span>
          </p>
          {type && (
            <p className={styles.infoRow}>
              <span className={styles.infoName}>Type:</span>
              <span className={styles.infoData}>{type}</span>
            </p>
          )}
        </div>
        <hr></hr>
        <div className={styles.subInfo}>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Origin:</span>
            <span className={styles.infoData}>{origin.name}</span>
          </p>
          <p className={styles.infoRow}>
            <span className={styles.infoName}>Location:</span>
            <span className={styles.infoData}>{location.name}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
