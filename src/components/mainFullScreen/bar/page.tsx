'use client';
import styles from './page.module.scss';

export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={styles.neon}>
        <span className={styles.neonWord}>Synth</span>
        <span className={styles.neonWord}>Wave</span>
      </div>
    </div>
  );
}
