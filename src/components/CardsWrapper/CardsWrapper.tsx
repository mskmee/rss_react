import { cardsData } from '../../api/cardsData';
import Card from '../Card/Card';
import React, { Component } from 'react';
import styles from './CardsWrapper.module.css';

export default class CardsWrapper extends Component {
  render() {
    return (
      <>
        <h2 className={styles.title}>Cards: </h2>
        <div className={styles.wrapper}>
          {cardsData.products.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              price={data.price}
              brand={data.brand}
              rating={data.rating}
              description={data.description}
              id={data.id}
              thumbnail={data.thumbnail}
            />
          ))}
        </div>
      </>
    );
  }
}
