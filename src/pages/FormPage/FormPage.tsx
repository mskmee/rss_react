import React, { useState } from 'react';
import { PopUp } from '../../components/PopUp';
import { FormComponent } from '../../components/FormComponent';
import { FormCard } from '../../components/FormCard';
import { AnimatePresence, motion } from 'framer-motion';
import { pageAnimation } from '../../animates/animates';
import { IFormComponentData, setFormCards } from '../../store/formCardsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import styles from './FormPage.module.css';

export const FormPage = () => {
  const cards = useSelector((state: RootState) => state.formCards.cards);
  const dispatch = useDispatch();
  const [isPopUp, setIsPopUp] = useState(false);
  const onSubmit = (data: IFormComponentData) => {
    dispatch(setFormCards(data));
    setIsPopUp(true);
  };
  const onPopUpClose = () => {
    setIsPopUp(false);
  };
  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <h3 className={styles.title}>
        This is a form, which checks input and create card on the form page
      </h3>
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
