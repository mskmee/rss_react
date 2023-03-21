import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

interface ILocations {
  [key: string]: string;
  '/': string;
  '/about': string;
  '/404': string;
  '/form': string;
}
const locationPath: ILocations = {
  '/': 'Home',
  '/about': 'About us',
  '/404': 'Not found Page',
  '/form': 'Form',
};

export const Header = () => {
  const location = useLocation();
  return (
    <header role="header" className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <h1 className={styles.page}>{locationPath[location.pathname]}</h1>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            Home
            <div className={styles.underline}></div>
            <div aria-hidden className={styles.filled}>
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/about">
            About us
            <div className={styles.underline}></div>
            <div aria-hidden className={styles.filled}>
              About us
            </div>
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/form">
            Form
            <div className={styles.underline}></div>
            <div aria-hidden className={styles.filled}>
              Form
            </div>
          </Link>
        </li>
      </ul>
    </header>
  );
};
