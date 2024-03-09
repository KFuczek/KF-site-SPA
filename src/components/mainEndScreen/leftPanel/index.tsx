'use client';
import styles from './styles.module.scss';
import Image from 'next/image';
import { luminari } from '../../../fonts';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarBackground}>
        <Image
          src={'/atelier.png'}
          alt="atelier"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className={styles.avatarFoto}>
        <Image src={'/ja.jpeg'} alt="avatar" width={300} height={300}></Image>
      </div>
      <div className={styles.avatarFotoBackground}>
        <Image src={'/logo.png'} alt="logo" width={100} height={100}></Image>
        <Image src={'/logo.png'} alt="logo" width={100} height={100}></Image>
      </div>
      <div className={`${styles.name} ${luminari.className}`}>
        <span style={{ marginRight: '5px' }}>Pan</span>
        <Image src={'/logo.png'} alt="logo" width={100} height={100}></Image>
        <span>Fuczkowiecki</span>
      </div>
      <div className={`${styles.description} ${luminari.className}`}>
        <a href="/stories">[pseudo]~pisarz</a>
      </div>
      <div className={`${styles.description} ${luminari.className}`}>
        <a href="/philosophy">[pseudo]~filozof</a>
      </div>
      <div className={`${styles.description} ${luminari.className}`}>
        <a href="/road">[pseudo]~polityk</a>
      </div>
      <div className={`${styles.socialMediaLink} ${luminari.className}`}>
        <a
          href="https://www.youtube.com/@Pan_Fuczkowiecki_drugi"
          target="_blank"
        >
          <span> YouTube - </span>
          <Image
            src={'/youtube.jpg'}
            alt="logo"
            width={100}
            height={100}
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Card;
