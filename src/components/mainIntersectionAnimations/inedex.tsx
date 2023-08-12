'use client';
import styles from './styles.module.scss';
import LeftHeadAnimation from './left-head';

export default function IntersectionAnimations() {
  return (
    <div className={styles.intersectionMainAnimationsContainer}>
      <LeftHeadAnimation />
    </div>
  );
}

// toDo: quotes in local store
