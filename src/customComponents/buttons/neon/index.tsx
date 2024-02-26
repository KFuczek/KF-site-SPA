'use client';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';

export default function NeonButton({
  url,
  name
}: {
  url?: string;
  name: string;
}) {
  const { push, back } = useRouter();

  const onClick = () => {
    if (url) {
      push(url);
      return;
    }

    back();
  };

  const start = name.slice(0, 2);
  const middle = name.slice(2, 3);
  const end = name.slice(3);

  return (
    <button className={styles.container} onClick={onClick}>
      <div className={styles.neonSign}>
        <span className={styles.glowingText}>
          {start}
          <span className={styles.faultyLetter}>{middle}</span>
          {end}
        </span>
      </div>
    </button>
  );
}
