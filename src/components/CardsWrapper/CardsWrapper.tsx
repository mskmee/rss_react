import { cardsData } from '../../api/cardsData';
import Card from '../ProductCard/ProductCard';
import React, { Component } from 'react';
import styles from './CardsWrapper.module.css';

export default class CardsWrapper extends Component {
  render() {
    return (
      <>
        <h2 className={styles.title}>Cards: </h2>
        <div className={styles.wrapper}>
          {cardsData.products.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      </>
    );
  }
}
