'use client';
import styles from './styles.module.scss';
import LeftHeadAnimation from './left-head';
import Envelope from './envelope';

export default function IntersectionAnimations() {
  return (
    <div className={styles.intersectionMainAnimationsContainer}>
      <div className={styles.leftSide}>
        <LeftHeadAnimation />
      </div>
      <div id="section2-right-side" className={styles.rightSide}>
        <Envelope />
      </div>
    </div>
  );
}
