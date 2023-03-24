import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ILocations {
  [key: string]: string;
  '/': string;
  '/about': string;
  '/404': string;
  '/form': string;
  '/cards': string;
}
const locationPath: ILocations = {
  '/': 'Home',
  '/about': 'About us',
  '/404': 'Not found Page',
  '/form': 'Form',
  '/cards': 'Cards',
};

export const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <header role="header" className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>Rick and Morty</h1>
      </Link>
      <h2 className={styles.page}>{locationPath[pathName]}</h2>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <motion.div
            className={styles.underline}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathName === '/' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link className={styles.link} to="/cards">
            Characters
          </Link>
          <motion.div
            className={styles.underline}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathName === '/cards' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link className={styles.link} to="/about">
            About us
          </Link>
          <motion.div
            className={styles.underline}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathName === '/about' ? '100%' : '0%' }}
          />
        </li>
        <li>
          <Link className={styles.link} to="/form">
            Form
          </Link>
          <motion.div
            className={styles.underline}
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathName === '/form' ? '100%' : '0%' }}
          />
        </li>
      </ul>
    </header>
  );
};
