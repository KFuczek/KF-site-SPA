'use client';
import { ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.scss';

const EndScreen = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.container}>
      Container!
    </div>
  );
});

EndScreen.displayName = 'MiddleScreen';

export default EndScreen;
