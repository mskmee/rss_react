import React, { useState } from 'react';
import { PopUp } from '../../components/PopUp';
import { FormComponent } from '../../components/FormComponent';
import { FormCard } from '../../components/FormCard';
import styles from './FormPage.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { pageAnimation } from '../../animates/animates';

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
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <FormComponent onSubmit={onSubmit} />
      <div className={styles.wrapper}>
        {cards.map((data) => (
          <FormCard {...data} key={data.id} />
        ))}
      </div>
      <AnimatePresence mode="wait">
        {isPopUp && (
          <PopUp onClose={onPopUpClose}>
            <h2>Card successful create</h2>
          </PopUp>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
