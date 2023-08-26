'use client';
import styles from './styles.module.scss';

import { streamster } from '../../../fonts';

export default function Bar() {
  return (
    <div className={styles.bar}>
      <div className={`${styles.neon} ${streamster.className}`}>
        <span className={styles.neonWord}>Synth</span>
        <span className={styles.neonWord}>Wave</span>
      </div>
    </div>
  );
}
