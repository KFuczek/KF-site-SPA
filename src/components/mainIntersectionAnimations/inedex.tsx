'use client';
import styles from './styles.module.scss';
import LeftHeadAnimation from './left-head';
import Envelope from './envelope';

export default function IntersectionAnimations() {
  return (
    <div className={styles.intersectionMainAnimationsContainer}>
      <LeftHeadAnimation />
      <div className={styles.placeholder}>
        <Envelope />
      </div>
    </div>
  );
}

// toDo: quotes in local store
