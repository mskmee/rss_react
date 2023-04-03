import { cardsData } from '../../api/cardsData';
import { ProductCard } from '../ProductCard';
import styles from './CardsWrapper.module.css';

export const CardsWrapper = () => {
  return (
    <>
      <h2 className={styles.title}>Cards: </h2>
      <div className={styles.wrapper}>
        {cardsData.products.map((data) => (
          <ProductCard key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};
