'use client';
import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.scss';
import Card from './card';
import RightSide from './rightSide';

const EndScreen = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.container}>
      <Card />
      <RightSide />
    </div>
  );
});

EndScreen.displayName = 'EndScreen';

export default EndScreen;
