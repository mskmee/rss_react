import React, { useEffect, useRef } from 'react';
import styles from './FormComponent.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { schema } from './formComponentShema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormComponentData } from 'store/formCardsSlice';

interface IFormComponentProps {
  onSubmit: (data: IFormComponentData) => void;
}
interface IFormSubmit {
  date: string;
  file: FileList;
  name: string;
  policy: boolean;
  sex: string;
  car: string;
}
export const FormComponent = ({ onSubmit }: IFormComponentProps) => {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormSubmit>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  useEffect(() => {
    nameInputRef.current?.focus();
  }, [nameInputRef]);

  const submitHandler = handleSubmit((data) => {
    const { date, file, name, sex, car } = data;
    const card: IFormComponentData = {
      id: uuidv4(),
      name,
      date,
      sex,
      img: URL.createObjectURL(file[0]),
      car,
    };
    onSubmit(card);
    reset();
  });
  return (
    <form data-testid="form" onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input {...register('name')} id="name" className={styles.input} type="text" />
      <p className={styles.error}>
        <>{errors.name?.message}</>
      </p>
      <hr></hr>
      <label htmlFor="date">Birth Date</label>
      <input {...register('date')} id="date" className={styles.input} type="date" />
      <p className={styles.error}>
        <>{errors.date?.message}</>
      </p>
      <hr></hr>
      <label htmlFor="cars">Car</label>
      <select {...register('car')} className={styles.input} required id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      <hr></hr>
      <div>
        <p>Private policy:</p>
        <label htmlFor="policy">You would`n read it any way...</label>
        <input {...register('policy')} id="policy" type="checkbox" />
      </div>
      <p className={styles.error}>
        <>{errors.policy?.message}</>
      </p>
      <hr></hr>
      <div>
        <p>Sex: </p>
        <label htmlFor="male">Male</label>
        <input {...register('sex')} name="sex" value="male" type="radio" />
        <label htmlFor="female">Female</label>
        <input {...register('sex')} name="sex" value="female" type="radio" />
      </div>
      <p className={styles.error}>
        <>{errors.sex?.message}</>
      </p>
      <hr></hr>
      <label htmlFor="avatar">Choose photo image to upload</label>
      <input
        {...register('file')}
        id="avatar"
        className={styles.input}
        type="file"
        accept="image/*"
      />
      <p className={styles.error}>
        <>{errors.file?.message}</>
      </p>
      <button type="submit">Send</button>
    </form>
  );
};
