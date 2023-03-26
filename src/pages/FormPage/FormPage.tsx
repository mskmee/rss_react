import React, { Component } from 'react';
import PopUp from '../../components/PopUp/PopUp';
import FormComponent from '../../components/Form/FormComponent';
import FormCard from '../../components/FormCard/FormCard';
import styles from './FormPage.module.css';

export interface IFormComponentData {
  id: string;
  name: string;
  date: string;
  car: string;
  sex: string;
  img: string;
}

type Props = {
  [key: string]: never;
};

interface IFormPageState {
  cards: IFormComponentData[];
  isPopUp: boolean;
}
export default class FormPage extends Component<Props, IFormPageState> {
  constructor(props: Props) {
    super(props);
    this.state = { cards: [], isPopUp: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.onPopUpClose = this.onPopUpClose.bind(this);
  }

  onPopUpClose() {
    this.setState((prevState) => ({ ...prevState, isPopUp: false }));
  }

  onSubmit(data: IFormComponentData) {
    this.setState((prevState) => ({ ...prevState, cards: [...prevState.cards, data] }));
    this.setState((prevState) => ({ ...prevState, isPopUp: true }));
  }
  render() {
    return (
      <div>
        <FormComponent onSubmit={this.onSubmit} />
        <div className={styles.wrapper}>
          {this.state.cards.map((data) => (
            <FormCard key={data.id} {...data} />
          ))}
        </div>
        {this.state.isPopUp && (
          <PopUp textContent="Card successful create" onClose={this.onPopUpClose} />
        )}
      </div>
    );
  }
}
