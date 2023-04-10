import { fade, pageAnimation, photoAnimation, titleAnimation } from '../../animates/animates';
import { motion } from 'framer-motion';
import styles from './Intro.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/main__photo.png';

export const Intro = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.container}
    >
      <motion.div className={styles.info}>
        <motion.h3 variants={titleAnimation} className={styles.title}>
          Welcome to the Rick and Morty world!
        </motion.h3>
        <motion.div variants={titleAnimation} className={styles.text}>
          You can find characters from their universe and know them better.
          <p>Wanna know what secrets are hide from you?..</p>
        </motion.div>
        <Link className={styles.link} to={'/cards'}>
          <motion.div className={styles.linkWrapper} variants={fade}>
            Know more
          </motion.div>
        </Link>
      </motion.div>
      <div className={styles.imgWrapper}>
        <motion.img variants={photoAnimation} src={logo} className={styles.img} alt="main image" />
      </div>
    </motion.div>
  );
};
