'use client';
import styles from './styles.module.scss';
import CatClock from './catClock';

const Clock = () => {
  return (
    <div className={styles.clockContainer}>
      <CatClock />
    </div>
  );
};

export default Clock;
