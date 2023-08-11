'use client';
import { forwardRef } from 'react';
import styles from './page.module.scss';
import Sun from './sun/page';
import Grid from './grid/page';
import Bar from './bar/page';
import Stars from './stars/page';
import Birds from './birds/page';
import Town from './town/page';
import Mountains from './mountains/page';
import ScyText from './scyText/page';

const mainFullScreen = forwardRef(
  (props: any, ref: React.Ref<HTMLDivElement>) => (
    <>
      <div ref={ref} className={styles.wrapper}>
        <div className={styles.sunSet}>
          <div className={styles.backgroundSky} />
          <div className={styles.starsContainer}>
            <Stars />
          </div>
          <div className={styles.birdsContainer}>
            <Birds />
          </div>
          <div className={styles.textContainer}>
            <ScyText />
          </div>
          <div className={styles.sunContainer}>
            <Sun />
          </div>
          <div className={styles.mountainsWrapper}>
            <Mountains />
          </div>
          <div className={styles.cityWrapper}>
            <Town />
          </div>
          <div className={styles.barContainer}>{<Bar />}</div>
          <div className={styles.gridContainer}>
            <Grid />
          </div>
        </div>
      </div>
    </>
  )
);

mainFullScreen.displayName = 'Main_Full_Screen';

export default mainFullScreen;
