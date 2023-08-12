'use client';
import styles from './styles.module.scss';

export default function Bubble() {
  return <div className={`${styles.bubble}`}> {generateSpeechBubble()}</div>;
}

const generateSpeechBubble = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 132 136"
      >
        <path
          fill="white"
          stroke="#000"
          stroke-width="4"
          stroke-linejoin="bevel"
          vector-effect="non-scaling-stroke"
          d="M66.1 1.5C30.4 1.5 1.5 22.9 1.5 46c0 18.1 17.9 33.5 42.8 39.3 1.5 14.8-1.3 39-8.5 48.1 10.8-12.5 22.4-33.6 26.6-45.7 1.2 0 2.5.1 3.7.1 35.7 0 64.6-18.7 64.6-41.8S101.8 1.5 66.1 1.5zM35.8 133.4c-.3.4-.7.8-1 1.1.4-.3.7-.7 1-1.1z"
        />
      </svg>
      <span className={styles.bubbleText}> no witam</span>
    </>
  );
};
