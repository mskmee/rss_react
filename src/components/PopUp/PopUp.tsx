import styles from './PopUp.module.css';

interface IPopUpProps {
  textContent: string;
  onClose: () => void;
}

export const PopUp = ({ textContent, onClose }: IPopUpProps) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        onClose();
      }}
      data-testid="background"
    >
      <h2
        className={styles.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {textContent}
        <button className={styles.button} type="button" onClick={() => onClose()}>
          Ok
        </button>
      </h2>
    </div>
  );
};
