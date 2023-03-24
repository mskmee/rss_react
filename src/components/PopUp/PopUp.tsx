import { fade, pageAnimation, photoAnimation } from '../../animates/animates';
import { motion } from 'framer-motion';
import styles from './PopUp.module.css';

interface IPopUpProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const PopUp = ({ onClose, children }: IPopUpProps) => {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      exit="exit"
      className={styles.wrapper}
      onClick={() => onClose()}
      data-testid="background"
    >
      <motion.div
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => onClose()} className={styles.close}>
          X
        </button>
        {children}
        <button className={styles.button} type="button" onClick={() => onClose()}>
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};
