import { ICardElement as ICardProps } from '../../api/types';
import styles from './CharacterCard.module.css';

export const CharacterCard = ({ id, image, name }: ICardProps) => {
  return (
    <div className={styles.card} onClick={() => console.log(id)}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={image} alt={name} />
      </div>
      <div className={styles.title}>{name}</div>
    </div>
  );
};
