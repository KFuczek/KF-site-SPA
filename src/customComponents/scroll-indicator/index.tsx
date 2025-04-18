'use client';
import styles from './styles.module.scss';
import { useRef } from 'react';

const ScrollIndicator = ({
  scrollPercentage
}: {
  scrollPercentage: number;
}) => {
  const textWindow = useRef<HTMLDivElement>(null);
  const classNames = `${styles.scrollIndicator} ${
    scrollPercentage > 1 ? styles.visible : ''
  }`;

  return (
    <div ref={textWindow} className={classNames} id="scrollIndicator">
      <span id="scrollPercent">{scrollPercentage}%</span>
    </div>
  );
};

export default ScrollIndicator;
