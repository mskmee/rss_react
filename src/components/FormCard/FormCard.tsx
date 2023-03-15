import React, { Component } from 'react';
import styles from './FormCard.module.css';
import { IFormComponentData } from '../../pages/FormPage/FormPage';

export default class FormCard extends Component<IFormComponentData> {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={this.props.img} alt={this.props.name} />
        </div>
        <div>
          <b>Name: </b> {this.props.name}
        </div>
        <div>
          <b>Car: </b> {this.props.car}
        </div>
        <div>
          <b>Sex: </b> {this.props.sex}
        </div>
        <div>
          <b>Date: </b> {this.props.date}
        </div>
      </div>
    );
  }
}
