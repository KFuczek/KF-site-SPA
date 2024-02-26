'use client';
import styles from './styles.module.scss';
import { neon } from '../../../fonts';
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

  return (
    <button className={styles.container} onClick={onClick}>
      <div className={`${styles.flux} ${neon.className}`}>{name}</div>
    </button>
  );
}
