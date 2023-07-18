import Image from 'next/image';
import styles from './page.module.scss';
import Sun from './sun/page';
import Grid from './grid/page';
import Bar from './bar/page';
import Stars from './stars/page';
import Birds from './birds/page';

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.sunSet}>
          <div className={styles.backgroundSky}></div>
          <div className={styles.starsContainer}>
            <Stars />
          </div>
          <div className={styles.birdsContainer}>
            <Birds />
          </div>
          <div className={styles.sunContainer}>
            <Sun />
          </div>
          <Image
            src="/only-mountains4.png"
            alt="Vercel Logo"
            className={styles.mountains}
            width={655}
            height={240}
            priority
          />
          <Image
            src="/only-city.png"
            alt="Vercel Logo"
            className={styles.town}
            width={655}
            height={240}
            priority
          />
          <div className={styles.barContainer}>{<Bar />}</div>
          <div className={styles.gridContainer}>
            <Grid />
          </div>
        </div>
      </div>
    </>
  );
}
