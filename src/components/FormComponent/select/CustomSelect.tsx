import React from 'react';
import styles from './CustomSelect.module.css';
import { IFormSubmit } from '../FormComponent';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface ICustomSelect {
  title: string;
  id: string;
  name: keyof IFormSubmit;
  errors: FieldErrors<IFormSubmit>;
  register: UseFormRegister<IFormSubmit>;
  options: string[];
}
export const CustomSelect = ({ id, title, name, errors, register, options }: ICustomSelect) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {title}
      </label>
      <select defaultValue={''} id={id} className={styles.select} {...register(name)}>
        <option disabled value="">
          -- Choose option --
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <p className={styles.error}>
        <>{errors[name]?.message}</>
      </p>
    </>
  );
};
