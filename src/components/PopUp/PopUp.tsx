import { fade } from '../../animates/animates';
import { motion } from 'framer-motion';
import styles from './PopUp.module.css';

interface IPopUpProps {
  onClose: () => void;
  textContent?: string;
  children?: React.ReactNode;
}

export const PopUp = ({ textContent, onClose, children }: IPopUpProps) => {
  return (
    <motion.div
      variants={fade}
      exit="exit"
      className={styles.wrapper}
      onClick={() => {
        onClose();
      }}
      data-testid="background"
    >
      <div
        className={styles.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children ? (
          children
        ) : (
          <>
            <h2>{textContent}</h2>
            <button className={styles.button} type="button" onClick={() => onClose()}>
              Ok
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};
