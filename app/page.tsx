'use client';
import './globals.css';
import styles from './page.module.scss';
import MainFullScreen from '../src/components/mainFullScreen/page';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR ? (
    <div className={styles.frontPage}>
      <MainFullScreen />
      <div className={styles.container}>container</div>
    </div>
  ) : null;
}
