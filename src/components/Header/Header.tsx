import React, { Component } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header role="header" className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <SearchBar />
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
        </ul>
      </header>
    );
  }
}
