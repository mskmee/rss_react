import styles from './LoadingComponent.module.css';
import { motion } from 'framer-motion';
import { rotate } from '../../animates/animates';

export const LoadingComponent = () => {
  return (
    <motion.div
      data-testid="loading"
      variants={rotate}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.loading}
    />
  );
};
