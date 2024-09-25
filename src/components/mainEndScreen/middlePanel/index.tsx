'use client';
import styles from './styles.module.scss';
import YoutubePlayer from '@/src/customComponents/youtube-player';
const MiddlePanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.videoTitle}>
        Fragment trzynastozgłoskowa opowiadajacego o niezwykle ładnej asystentce
        na stażu, małym koniobijcy i dobrym lekarzu
      </div>
      <div className={styles.video}>
        <YoutubePlayer
          url={
            'https://www.youtube.com/embed/OrWZ3VP7zdg?si=J00IBhA70zXDU7Gk&amp;start=896'
          }
          height={'315'}
          width={'560'}
        />
      </div>
    </div>
  );
};

export default MiddlePanel;
