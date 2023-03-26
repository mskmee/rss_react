import React, { Component } from 'react';
import styles from './FormComponent.module.css';
import { v4 as uuidv4 } from 'uuid';
import { IFormComponentData } from '../../pages/FormPage/FormPage';
import {
  checkIsDateValid,
  checkIsFileValid,
  checkIsNameValid,
} from '../../domain/inputsValidators';

interface IFormComponentProps {
  onSubmit: (data: IFormComponentData) => void;
}

interface IFormComponentState {
  isDateValid: boolean;
  isFileValid: boolean;
  isNameValid: boolean;
}

export default class FormComponent extends Component<IFormComponentProps, IFormComponentState> {
  fileInput: React.RefObject<HTMLInputElement>;
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  carsSelect: React.RefObject<HTMLSelectElement>;
  policyCheck: React.RefObject<HTMLInputElement>;
  femaleInput: React.RefObject<HTMLInputElement>;
  maleInput: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;

  constructor(props: IFormComponentProps) {
    super(props);
    this.fileInput = React.createRef();
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.carsSelect = React.createRef();
    this.policyCheck = React.createRef();
    this.femaleInput = React.createRef();
    this.maleInput = React.createRef();
    this.form = React.createRef();
    this.state = { isDateValid: true, isFileValid: true, isNameValid: true };
  }
  componentDidMount(): void {
    this.nameInput.current?.focus();
  }

  checkInputValues(date: string, fileName: string, name: string) {
    const isDateValid = checkIsDateValid(date);
    const isFileValid = checkIsFileValid(fileName);
    const isNameValid = checkIsNameValid(name);
    this.setState({ isDateValid, isFileValid, isNameValid });
    return isDateValid && isFileValid && isNameValid;
  }

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rowDate = this.dateInput.current!.value;
    const img = URL.createObjectURL(this.fileInput.current!.files![0]);
    const name = this.nameInput.current!.value;
    const isValid = this.checkInputValues(rowDate, this.fileInput.current!.files![0].name, name);
    if (!isValid) return;
    const sex = this.maleInput.current!.checked ? 'male' : 'female';
    const car = this.carsSelect.current!.value;
    const date = rowDate.split('-').reverse().join('-');
    const card: IFormComponentData = {
      id: uuidv4(),
      img,
      name,
      sex,
      date,
      car,
    };
    this.props.onSubmit(card);
    this.form.current?.reset();
  };

  render() {
    return (
      <form
        data-testid="form"
        ref={this.form}
        onSubmit={this.submitHandler}
        className={styles.form}
      >
        <label htmlFor="name">Name</label>
        <input ref={this.nameInput} id="name" className={styles.input} required type="text" />
        {!this.state.isNameValid && (
          <p className={styles.error}>
            Name must start from upper char and has length from 3 to 15 chars. Use only a-z chars.
          </p>
        )}
        <hr></hr>
        <label htmlFor="date">Birth Date</label>
        <input ref={this.dateInput} id="date" className={styles.input} required type="date" />
        {!this.state.isDateValid && (
          <p className={styles.error}>Date should be more than 1900 year and less than tomorrow</p>
        )}
        <hr></hr>
        <label htmlFor="cars">Car</label>
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
        <label htmlFor="avatar">Choose photo image to upload</label>
        <input
          id="avatar"
          ref={this.fileInput}
          className={styles.input}
          required
          type="file"
          accept="image/*"
        />
        {!this.state.isFileValid && (
          <p className={styles.error}>
            Check file extension. We support only jpg, jpeg, gif and svg img files
          </p>
        )}
        <button type="submit">Send</button>
      </form>
    );
  }
}
