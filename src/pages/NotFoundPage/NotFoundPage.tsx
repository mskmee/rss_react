import React, { Component } from 'react';
import styles from './NotFoundPage.module.css';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>This page is not found: 404</h1>
      </div>
    );
  }
}
