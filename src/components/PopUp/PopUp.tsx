import React, { Component } from 'react';
import styles from './PopUp.module.css';

interface IPopUpProps {
  textContent: string;
  onClose: () => void;
}
export default class PopUp extends Component<IPopUpProps> {
  constructor(props: IPopUpProps) {
    super(props);
  }
  render() {
    return (
      <div
        className={styles.wrapper}
        onClick={() => {
          this.props.onClose();
        }}
        data-testid="background"
      >
        <h2
          className={styles.content}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {this.props.textContent}
          <button className={styles.button} type="button" onClick={() => this.props.onClose()}>
            Ok
          </button>
        </h2>
      </div>
    );
  }
}
