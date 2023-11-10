'use client';
import styles from './styles.module.scss';
import { neon } from '../../../fonts';
import { useRouter } from 'next/navigation';

export default function NeonButton({
  url,
  name
}: {
  url: string;
  name: string;
}) {
  const { push } = useRouter();
  return (
    <button
      className={styles.container}
      onClick={() => {
        push(url);
      }}
    >
      <div className={`${styles.flux} ${neon.className}`}>{name}</div>
    </button>
  );
}
