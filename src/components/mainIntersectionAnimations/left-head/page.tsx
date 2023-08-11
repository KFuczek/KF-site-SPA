'use client';
import styles from './page.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function LeftHead() {
  const [refAvailable, setRefAvailable] = useState(false);
  const leftHeadRef = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback((node: HTMLDivElement) => {
    console.log('sethook', node, leftHeadRef);
    if (!leftHeadRef.current && node) {
      leftHeadRef.current = node;
      setRefAvailable(true);
    }
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          leftHeadRef.current?.classList.toggle(
            styles.show,
            entry.isIntersecting
          );
        });
      },
      { threshold: 0 }
    );

    if (leftHeadRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      intersectionObserver.observe(leftHeadRef.current);
    }
  }, [refAvailable]);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    <div // @ts-ignore
      ref={setRef as HTMLDivElement}
      className={`${styles.leftHeadAnimation}`}
    >
      Head animation
    </div>
  );
}
