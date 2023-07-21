'use client';
import styles from './page.module.scss';

export default function Grid() {
  return (
    <div className={styles.gridComponent}>
      <div className={styles.bottom}>
        <div className={styles.grid}></div>
      </div>
    </div>
  );
}
