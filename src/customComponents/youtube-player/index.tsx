import styles from './styles.module.scss';
import { YouTubePlayer } from './types';

const YoutubePlayer: React.FC<YouTubePlayer> = ({
  url,
  height,
  width
}: YouTubePlayer): JSX.Element => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

YoutubePlayer.displayName = 'youtubePlayer';

export default YoutubePlayer;
