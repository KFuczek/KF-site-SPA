'use client';
import styles from './styles.module.scss';

export default function TopBorder() {
  return (
    <div className={styles.container}>
      <div className={`${styles.circles} ${styles.left}`}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
      <div className={`${styles.circles} ${styles.right}`}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
    </div>
  );
}
