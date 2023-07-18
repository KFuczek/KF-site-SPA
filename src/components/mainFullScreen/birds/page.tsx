'use client';
import styles from './page.module.scss';

export default function Birds() {
  return (
    <div className={styles.container}>
      <div className={`${styles.bird} ${styles.bird1}`}></div>
      <div className={`${styles.bird} ${styles.bird2}`}></div>
      <div className={`${styles.bird} ${styles.bird3}`}></div>
    </div>
  );
}
