import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import classNames from 'classnames';
import { fade, photoAnimation } from '../../animates/animates';

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
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;
  const toggleBurger = () => {
    setIsBurgerOpen((prevValue) => !prevValue);
  };
  const closeBurgerMenu = () => {
    if (isBurgerOpen) {
      setIsBurgerOpen(false);
    }
  };
  return (
    <motion.header role="header" className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>Rick and Morty</h1>
      </Link>
      <h2 className={styles.page}>{locationPath[pathName]}</h2>
      <motion.ul
        variants={fade}
        onClick={closeBurgerMenu}
        className={classNames(styles.links, { [styles.active]: isBurgerOpen })}
      >
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
      </motion.ul>
      <div
        onClick={toggleBurger}
        className={classNames(styles.burger, { [styles.active]: isBurgerOpen })}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.header>
  );
};
