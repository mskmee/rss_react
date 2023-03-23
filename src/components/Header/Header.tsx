import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

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
  return (
    <header role="header" className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>Rick and Morty</h1>
      </Link>
      <h2 className={styles.page}>{locationPath[location.pathname]}</h2>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/cards">
            Characters
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">
            About us
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/form">
            Form
          </Link>
        </li>
      </ul>
    </header>
  );
};
