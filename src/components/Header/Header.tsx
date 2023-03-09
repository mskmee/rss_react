import React, { Component } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

export default class Header extends Component {
  render() {
    return (
      <header role="header" className={styles.header}>
        <a href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        <ul className={styles.links}>
          <li>
            <a className={styles.link} href="/">
              Home
              <div className={styles.underline}></div>
              <div aria-hidden className={styles.filled}>
                Home
              </div>
            </a>
          </li>
          <li>
            <a className={styles.link} href="/about">
              About us
              <div className={styles.underline}></div>
              <div aria-hidden className={styles.filled}>
                About us
              </div>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
