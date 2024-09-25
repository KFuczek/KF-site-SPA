'use client';
import styles from './styles.module.scss';
import LeftPanel from '../leftPanel';

import MiddlePanel from '../middlePanel';

const BusinessCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanelWrapper}>
        <LeftPanel />
      </div>
      <div className={styles.bodyWrapper}>
        <MiddlePanel />
      </div>
    </div>
  );
};

export default BusinessCard;
