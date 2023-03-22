import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImg}>
        <div className={styles.space}></div>
        <div className={styles.wrapper}>
          <div className={styles.imgWrapper}>
            <span className={styles.logo}>44</span>
          </div>
          <h3 className={styles.text}>
            The page you are trying to search has been moved to another universe
          </h3>
          <Link to={'/'}>
            <button className={styles.button} type="button">
              GET ME HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
