'use client';
import './globals.css';
import styles from './page.module.scss';
import MainFullScreen from '../src/components/mainFullScreen/page';

export default function Home() {
  return (
    <div className={styles.frontPage}>
      <MainFullScreen />
      <div className={styles.container}>container</div>
    </div>
  );
}
