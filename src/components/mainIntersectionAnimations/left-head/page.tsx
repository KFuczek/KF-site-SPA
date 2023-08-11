'use client';
import styles from './page.module.scss';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

export default function LeftHead() {
  const [refAvailable, setRefAvailable] = useState(false);
  const leftHeadRef: RefObject<HTMLElement> = useRef(null);

  const setRef = useCallback((node: HTMLElement) => {
    console.log('sethook', node, leftHeadRef);
    if (!leftHeadRef.current && node) {
      leftHeadRef.current = node;
      setRefAvailable(true);
    }
  }, []);

  useEffect(() => {
    console.log('moj efekt');
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          console.log('entry', entry);
          leftHeadRef.current.classList.toggle(
            styles.show,
            entry.isIntersecting
          );
        });
      },
      { threshold: 0 }
    );

    if (leftHeadRef.current) {
      intersectionObserver.observe(leftHeadRef.current);
    }
  }, [refAvailable]);

  return (
    <div ref={setRef} className={`${styles.leftHeadAnimation}`}>
      Head animation
    </div>
  );
}
