'use client';
import styles from './styles.module.scss';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarBackground}>
        <img src={'/atelier.png'}></img>
      </div>
      <div className={styles.avatarFoto}>
        <img src={'/ja.jpeg'}></img>
      </div>
      <div className={styles.name}>Pan Fuczkowiecki</div>
      <div className={styles.description}>[pseudo]~pisarz</div>
      <div className={styles.description}>[pseudo]~filozof</div>
      <div className={styles.description}>[pseudo]~polityk</div>
    </div>
  );
};

export default Card;
