'use client';
import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.scss';
import LeftHeadAnimation from './left-head';
import Envelope from './envelope';
import TopBorder from './top-border';
import Clock from '../../customComponents/clock';

const MiddleScreen = forwardRef(
  ({ middleScreenRef }: any, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={styles.intersectionMainAnimationsContainer}>
        <div id="borderMenu" className={styles.borderMenu}>
          <TopBorder />
        </div>
        <div className={styles.leftSide}>
          <LeftHeadAnimation />
        </div>
        <div id="section2-right-side" className={styles.rightSide}>
          <Envelope />
        </div>
        <div className={styles.clockMoveField}>
          <Clock />
        </div>
      </div>
    );
  }
);

MiddleScreen.displayName = 'MiddleScreen';

export default MiddleScreen;
