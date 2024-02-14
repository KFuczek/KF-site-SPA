'use client';
import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.scss';
import BusinessCard from './businessCard';

const EndScreen = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.container}>
      <BusinessCard />
    </div>
  );
});

EndScreen.displayName = 'EndScreen';

export default EndScreen;
