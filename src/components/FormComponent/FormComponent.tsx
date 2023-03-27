import React, { useEffect, useRef, useState } from 'react';
import styles from './FormComponent.module.css';
import { v4 as uuidv4 } from 'uuid';
import { IFormComponentData } from '../../pages/FormPage';
import {
  checkIsDateValid,
  checkIsFileValid,
  checkIsNameValid,
} from '../../domain/inputsValidators';

interface IFormComponentProps {
  onSubmit: (data: IFormComponentData) => void;
}

export const FormComponent = ({ onSubmit }: IFormComponentProps) => {
  const [name, setName] = useState('');
  const nameInput = useRef<null | HTMLInputElement>(null);
  const dateInput = useRef<null | HTMLInputElement>(null);
  const maleInput = useRef<null | HTMLInputElement>(null);
  const femaleInput = useRef<null | HTMLInputElement>(null);
  const fileInput = useRef<null | HTMLInputElement>(null);
  const carsSelect = useRef<null | HTMLSelectElement>(null);
  const policyCheck = useRef<null | HTMLInputElement>(null);
  const form = useRef<null | HTMLFormElement>(null);
  const [isDateValid, setIsDateValid] = useState(true);
  const [isFileValid, setIsFileValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  useEffect(() => {
    nameInput.current?.focus();
  }, []);

  const checkInputValues = (date: string, fileName: string, name: string) => {
    const isDate = checkIsDateValid(date);
    const isFile = checkIsFileValid(fileName);
    const isNameValid = checkIsNameValid(name);
    setIsDateValid(isDate);
    setIsFileValid(isFile);
    setIsNameValid(isNameValid);
    return isDate && isFile && isNameValid;
  };

  const resetForm = (card: IFormComponentData) => {
    onSubmit(card);
    setIsFileValid(true);
    setIsDateValid(true);
    setIsNameValid(true);
    form.current?.reset();
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rowDate = dateInput.current!.value;
    const img = URL.createObjectURL(fileInput.current!.files![0]);
    const name = nameInput.current!.value;
    const isValid = checkInputValues(rowDate, fileInput.current!.files![0].name, name);
    if (!isValid) return;
    const sex = maleInput.current!.checked ? 'male' : 'female';
    const car = carsSelect.current!.value;
    const date = rowDate.split('-').reverse().join('-');
    const card: IFormComponentData = {
      id: uuidv4(),
      img,
      name,
      sex,
      date,
      car,
    };
    resetForm(card);
  };
  return (
    <form ref={form} data-testid="form" onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={nameInput}
        id="name"
        className={styles.input}
        type="text"
      />
      {!isNameValid && (
        <p className={styles.error}>
          Name must start from upper char and has length from 3 chars to 15 chars. Use only a-z
          chars.
        </p>
      )}
      <hr></hr>
      <label htmlFor="date">Birth Date</label>
      <input ref={dateInput} id="date" className={styles.input} required type="date" />
      {!isDateValid && (
        <p className={styles.error}>Date should be more than 1900 year and less than tomorrow</p>
      )}
      <hr></hr>
      <label htmlFor="cars">Car</label>
      <select ref={carsSelect} className={styles.input} required id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <hr></hr>
      <div>
        <p>Private policy:</p>
        <label htmlFor="policy">You would`n read it any way...</label>
        <input ref={policyCheck} id="policy" required type="checkbox" />
      </div>
      <hr></hr>
      <div>
        <p>Sex: </p>
        <label htmlFor="male">Male</label>
        <input ref={maleInput} name="sex" value="male" required type="radio" />
        <label htmlFor="female">Female</label>
        <input ref={femaleInput} name="sex" value="female" required type="radio" />
      </div>
      <hr></hr>
      <label htmlFor="avatar">Choose photo image to upload</label>
      <input
        id="avatar"
        ref={fileInput}
        className={styles.input}
        required
        type="file"
        accept="image/*"
      />
      {!isFileValid && (
        <p className={styles.error}>
          Check file extension. We support only jpg, jpeg, gif and svg img files
        </p>
      )}
      <button className={styles.button} type="submit">
        Send
      </button>
    </form>
  );
};
