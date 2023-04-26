import React, { HTMLInputTypeAttribute } from 'react';
import styles from './CustomInput.module.css';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormSubmit } from '../FormComponent';

interface ICustomInput {
  title: string;
  id: string;
  name: keyof IFormSubmit;
  type: HTMLInputTypeAttribute;
  errors: FieldErrors<IFormSubmit>;
  register: UseFormRegister<IFormSubmit>;
  accept?: string;
}

export const CustomInput = ({ id, title, name, register, type, errors, accept }: ICustomInput) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <input accept={accept} {...register(name)} id={id} className={styles.input} type={type} />
      <p className={styles.error}>
        <>{errors[name]?.message}</>
      </p>
    </>
  );
};
