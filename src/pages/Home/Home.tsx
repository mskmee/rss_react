import styles from './Home.module.css';
import logo from '../../assets/main__photo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animates/animates';

export const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.container}
    >
      <div className={styles.info}>
        <h3 className={styles.title}>Welcome to the Rick and Morty world!</h3>
        <div className={styles.text}>
          You can find characters from their universe and know them better.
          <p>Wanna know what secrets are hide from you?..</p>
        </div>
        <Link className={styles.link} to={'/cards'}>
          Know more
        </Link>
      </div>
      <img src={logo} className={styles.img} alt="main image" />
    </motion.div>
  );
};
