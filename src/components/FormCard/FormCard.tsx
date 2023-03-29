import styles from './FormCard.module.css';
import { IFormComponentData as IFormCardProps } from '../../store/formCardsSlice';

export const FormCard = ({ img, name, car, sex, date }: IFormCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={img} alt={name} />
      </div>
      <div>
        <b>Name: </b> {name}
      </div>
      <div>
        <b>Car: </b> {car}
      </div>
      <div>
        <b>Sex: </b> {sex}
      </div>
      <div>
        <b>Date: </b> {date}
      </div>
    </div>
  );
};
