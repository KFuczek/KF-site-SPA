'use client';
import styles from './styles.module.scss';
import Image from 'next/image';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarBackground}>
        <Image
          src={'/atelier.png'}
          alt="atelier"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className={styles.avatarFoto}>
        <Image src={'/ja.jpeg'} alt="avatar" width={100} height={100}></Image>
      </div>
      <div className={styles.name}>Pan Fuczkowiecki</div>
      <div className={styles.description}>[pseudo]~pisarz</div>
      <div className={styles.description}>[pseudo]~filozof</div>
      <div className={styles.description}>[pseudo]~polityk</div>
    </div>
  );
};

export default Card;
