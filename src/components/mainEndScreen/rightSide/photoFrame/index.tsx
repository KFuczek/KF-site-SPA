'use client';
import styles from './styles.module.scss';

const PhotoFrame = ({ children }: { children: any }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.border}>
          <div className={styles.content}>{children}</div>
          <div id="frame-text" className={styles.text}>
            Balony
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoFrame;
