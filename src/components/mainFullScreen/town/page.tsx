import styles from './page.module.scss';
import Image from 'next/image';

export default function Town() {
  return (
    <Image
      src="/only-city.png"
      alt="Vercel Logo"
      className={styles.town}
      width={655}
      height={240}
      priority
    />
  );
}
