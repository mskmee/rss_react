import React, { useState } from 'react';
import { PopUp } from '../../components/PopUp';
import { FormComponent } from '../../components/FormComponent';
import { FormCard } from '../../components/FormCard';
import styles from './FormPage.module.css';

export interface IFormComponentData {
  id: string;
  name: string;
  date: string;
  car: string;
  sex: string;
  img: string;
}

export const FormPage = () => {
  const [cards, setCards] = useState<IFormComponentData[]>([]);
  const [isPopUp, setIsPopUp] = useState(false);
  const onSubmit = (data: IFormComponentData) => {
    setCards((prevState) => [...prevState, data]);
    setIsPopUp(true);
  };
  const onPopUpClose = () => {
    setIsPopUp(false);
  };
  return (
    <div>
      <FormComponent onSubmit={onSubmit} />
      <div className={styles.wrapper}>
        {cards.map((data) => (
          <FormCard {...data} key={data.id} />
        ))}
      </div>
      {isPopUp && <PopUp textContent="Card successful create" onClose={onPopUpClose} />}
    </div>
  );
};
