'use client';
import { forwardRef } from 'react';
import styles from './styles.module.scss';
import Sun from './sun/page';
import Grid from './grid';
import Bar from './bar';
import Stars from './stars';
import Birds from './birds';
import Town from './town/page';
import Mountains from './mountains';
import SkyText from './skyText';

const mainFullScreen = forwardRef((props: any, ref: any) => (
  <>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
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
          <SkyText />
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
));

mainFullScreen.displayName = 'Main_Full_Screen';

export default mainFullScreen;
