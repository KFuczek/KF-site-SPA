'use client';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';

export default function NeonButton({ url }: { url: string }) {
  const { push } = useRouter();
  return (
    <button
      className={styles.container}
      onClick={() => {
        push(url);
      }}
    >
      <div className={styles.neonSign}>
        <span className={styles.glowingText}>
          LI<span className={styles.faultyLetter}>B</span>RARY
        </span>
      </div>
    </button>
  );
}
