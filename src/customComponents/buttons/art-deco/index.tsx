'use client';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import { limeLight } from '../../../fonts';

export default function ArtDecoButton({
  url,
  text
}: {
  url: string;
  text: string;
}) {
  const { push } = useRouter();
  return (
    <button
      className={styles.buttonContainer}
      onClick={() => {
        push(url);
      }}
    >
      <div className={styles.button}>
        <div className={`${styles.buttonContent} ${limeLight.className}`}>
          {text}
        </div>
        <div className={styles.inner} />
        <div className={styles.leftTop} />
        <div className={styles.leftBottom} />
        <div className={styles.rightTop} />
        <div className={styles.rightBottom} />
        <div className={styles.tall} />
        <div className={styles.wide} />
      </div>
    </button>
  );
}
