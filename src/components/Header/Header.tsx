import React, { Component } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import SearchBar from '../SearchBar/SearchBar';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header role="header" className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <h1 className={styles.page}>
          <Routes>
            <Route path="/" element={'Home'}></Route>
            <Route path="/about" element={'About us'}></Route>
            <Route path="/404" element={'404 page'}></Route>
            <Route path="/form" element={'Form page'}></Route>
            <Route path="*" element={<Navigate to="/404" />}></Route>
          </Routes>
        </h1>
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
  }
}
