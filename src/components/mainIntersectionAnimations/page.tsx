'use client';
import styles from './page.module.scss';
import LeftHeadAnimation from './left-head/page';

export default function IntersectionAnimations() {
  return (
    <div className={styles.intersectionMainAnimationsContainer}>
      <LeftHeadAnimation />
    </div>
  );
}
