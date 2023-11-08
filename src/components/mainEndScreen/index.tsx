'use client';
import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.scss';
import Card from './card';
import Game from './game';

const EndScreen = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.container}>
      <Card />
      <Game />
    </div>
  );
});

EndScreen.displayName = 'EndScreen';

export default EndScreen;
