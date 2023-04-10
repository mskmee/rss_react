import { pageAnimation } from '../../animates/animates';
import { motion } from 'framer-motion';
import styles from './AboutUsIntro.module.css';

export const AboutUsIntro = () => {
  return (
    <motion.div
      className={styles.wrapper}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h2 className={styles.title}>About Us</h2>
      <p className={styles.text}>
        Welcome to Rick and Morty Characters, a website dedicated to providing information about the
        popular animated TV show, Rick and Morty.
      </p>
      <p className={styles.text}>
        Our website features a comprehensive list of characters from the show, along with their
        descriptions and images.
      </p>
      <h2 className={styles.title}>Our Mission</h2>
      <p className={styles.text}>
        Our mission is to create a central hub for all things Rick and Morty, where fans of the show
        can come to learn more about their favorite characters and discover new ones.
      </p>
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.text}>
        If you have any questions, comments, or suggestions about our website, please feel free to
        contact{' '}
        <a
          className={styles.link}
          rel="noreferrer"
          href="https://github.com/mskmee"
          target="_blank"
        >
          me.
        </a>
      </p>
    </motion.div>
  );
};
