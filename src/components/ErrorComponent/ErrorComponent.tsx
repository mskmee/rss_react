import React from 'react';
import styles from './ErrorComponent.module.css';
import logo from '../../assets/error.png';
import { motion } from 'framer-motion';
import { fade } from '../../animates/animates';

interface IErrorComponentProps {
  errorText: string;
}
export const ErrorComponent = ({ errorText }: IErrorComponentProps) => {
  return (
    <motion.div
      variants={fade}
      exit="exit"
      initial="hidden"
      animate="show"
      className={styles.wrapper}
    >
      <h2 className={styles.error}> {errorText}</h2>
      <div className={styles.imgWrapper}>
        <img className={styles.img} alt="error image" src={logo} />
      </div>
    </motion.div>
  );
};
