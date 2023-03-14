import React, { Component } from 'react';
import styles from './FormComponent.module.css';

export interface IFormComponentData {
  name: string | undefined;
  date: string | undefined;
  car: string | undefined;
  sex: string;
  img: string;
}

interface IFromState {
  cards: IFormComponentData[];
}

interface IFormComponentProps {
  props?: React.ReactNode;
}

export default class FormComponent extends Component<IFormComponentProps, IFromState> {
  fileInput: React.RefObject<HTMLInputElement>;
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  carsSelect: React.RefObject<HTMLSelectElement>;
  policyCheck: React.RefObject<HTMLInputElement>;
  femaleInput: React.RefObject<HTMLInputElement>;
  maleInput: React.RefObject<HTMLInputElement>;
  constructor(props: IFormComponentProps) {
    super(props);
    this.fileInput = React.createRef();
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.carsSelect = React.createRef();
    this.policyCheck = React.createRef();
    this.femaleInput = React.createRef();
    this.maleInput = React.createRef();
    this.state = { cards: [] };
  }
  componentDidMount(): void {
    this.nameInput.current?.focus();
  }

  componentDidUpdate(): void {
    console.log(this.state);
  }

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.fileInput.current?.files) {
      const img = URL.createObjectURL(this.fileInput.current.files[0]);
      const sex = this.maleInput.current?.checked ? 'male' : 'female';
      const name = this.nameInput.current?.value;
      const date = this.dateInput.current?.value;
      const car = this.carsSelect.current?.value;
      const card: IFormComponentData = {
        img,
        name,
        sex,
        date,
        car,
      };
      this.setState((prevState) => ({ cards: [...prevState.cards, card] }));
    }
  };
  render() {
    return (
      <form onSubmit={this.submitHandler} className={styles.form}>
        <label htmlFor="name">Name</label>
        <input
          minLength={3}
          maxLength={25}
          ref={this.nameInput}
          id="name"
          className={styles.input}
          required
          type="text"
        />
        <hr></hr>
        <label htmlFor="date">Date</label>
        <input ref={this.dateInput} id="date" className={styles.input} required type="date" />
        <hr></hr>
        <label htmlFor="cars">Cars</label>
        <select ref={this.carsSelect} className={styles.input} required id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <hr></hr>
        <div>
          <p>Private policy:</p>
          <label htmlFor="policy">You would`n read it any way...</label>
          <input ref={this.policyCheck} id="policy" required type="checkbox" />
        </div>
        <hr></hr>
        <div>
          <p>Sex: </p>
          <label htmlFor="male">Male</label>
          <input ref={this.maleInput} name="sex" value="male" required type="radio" />
          <label htmlFor="female">Female</label>
          <input ref={this.femaleInput} name="sex" value="female" required type="radio" />
        </div>
        <hr></hr>
        <label htmlFor="avatar">Choose images to upload</label>
        <input
          id="avatar"
          ref={this.fileInput}
          className={styles.input}
          required
          type="file"
          accept="image/*"
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}
