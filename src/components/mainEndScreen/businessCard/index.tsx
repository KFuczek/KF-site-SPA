'use client';
import styles from './styles.module.scss';
import LeftPanel from '../leftPanel';

const BusinessCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanelWrapper}>
        <LeftPanel />
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.constructionSite}> Work in progress...</div>
      </div>
    </div>
  );
};

export default BusinessCard;
