import styles from './styles.module.scss';
import Image from 'next/image';

export default function Mountains() {
  return (
    <Image
      src="/only-mountains4.png"
      alt="Vercel Logo"
      className={styles.mountains}
      width={655}
      height={240}
      priority
    />
  );
}
