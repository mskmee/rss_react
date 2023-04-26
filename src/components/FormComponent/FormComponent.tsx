import React, { useEffect } from 'react';
import styles from './FormComponent.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { schema } from '../../helpers/formComponentShema';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormComponentData } from 'store/formCardsSlice';
import { CustomInput } from './input/CustomInput';
import { CustomSelect } from './select/CustomSelect';

interface IFormComponentProps {
  onSubmit: (data: IFormComponentData) => void;
}
export interface IFormSubmit {
  date: string;
  file: FileList;
  name: string;
  policy: boolean;
  sex: string;
  species: string;
}
export const FormComponent = ({ onSubmit }: IFormComponentProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    setFocus,
  } = useForm<IFormSubmit>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const submitHandler = handleSubmit((data) => {
    const { date, file, name, sex, species } = data;
    const card: IFormComponentData = {
      id: uuidv4(),
      name,
      date,
      sex,
      img: URL.createObjectURL(file[0]),
      species,
    };
    onSubmit(card);
    reset();
  });
  const selectOptions = ['human', 'alien'];
  return (
    <form data-testid="form" onSubmit={submitHandler} className={styles.form}>
      <CustomInput
        name="name"
        errors={errors}
        register={register}
        id="name"
        title="Character name"
        type="text"
      />
      <hr></hr>
      <CustomInput
        name="date"
        errors={errors}
        register={register}
        id="date"
        title="Birth Date"
        type="date"
      />
      <hr></hr>
      <CustomSelect
        errors={errors}
        id="species"
        name="species"
        register={register}
        title="Species"
        options={selectOptions}
      />
      <hr></hr>
      <div className={styles.policy}>
        <p className={styles.title}>Private policy:</p>
        <CustomInput
          errors={errors}
          id="policy"
          name="policy"
          type="checkbox"
          title="You would`n read it any way..."
          register={register}
        />
      </div>
      <hr></hr>
      <div className={styles.sex}>
        <p className={styles.title}>Sex: </p>
        <CustomInput
          errors={errors}
          id="male"
          name="sex"
          type="radio"
          register={register}
          title="Male"
        />
        <CustomInput
          errors={errors}
          id="female"
          name="sex"
          type="radio"
          register={register}
          title="Female"
        />
      </div>
      <p className={styles.error}>
        <>{errors.sex?.message}</>
      </p>
      <hr></hr>
      <CustomInput
        id="avatar"
        errors={errors}
        register={register}
        type="file"
        title="Choose photo image to upload"
        name="file"
        accept="image/*"
      />
      <button className={styles.button} disabled={!isValid} type="submit">
        Send
      </button>
    </form>
  );
};
