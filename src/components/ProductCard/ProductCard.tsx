import { IProduct as ICardProps } from '../../api/types';
import styles from './ProductCard.module.css';

export const ProductCard = ({
  brand,
  description,
  price,
  rating,
  thumbnail,
  title,
}: ICardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={thumbnail} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.brand}>
        <b>Brand: </b> {brand}
      </div>
      <div className={styles.rating}>
        <b>Rating: </b>
        {rating}
      </div>
      <div className={styles.price}>
        <b>Price:</b> {price}$
      </div>
    </div>
  );
};
