import React, { Component } from 'react';
import { IProduct as ICardProps } from '../../api/types';
import styles from './ProductCard.module.css';

export default class Card extends Component<ICardProps> {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={this.props.thumbnail} alt={this.props.title} />
        </div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.description}>{this.props.description}</div>
        <div className={styles.brand}>
          <b>Brand: </b> {this.props.brand}
        </div>
        <div className={styles.rating}>
          <b>Rating: </b>
          {this.props.rating}
        </div>
        <div className={styles.price}>
          <b>Price:</b> {this.props.price}$
        </div>
      </div>
    );
  }
}
