'use client';
import styles from './styles.module.scss';
import PhotoFrame from '../rightSide/photoFrame';
import Game from './game';

const RightSide = () => {
  return (
    <div className={styles.container}>
      <PhotoFrame>
        <Game />
      </PhotoFrame>
    </div>
  );
};

export default RightSide;
