'use client';
import { useEffect, useRef } from 'react';
import styles from './not-found.module.scss';

export default function PageNotFound() {
  const eyeballRef = useRef<HTMLDivElement>(null);
  const torchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    follow();
  }, []);
  const follow = () => {
    document.onmousemove = event => {
      const x = `${(event.clientX * 100) / window.innerWidth}%`;
      const y = `${(event.clientY * 100) / window.innerHeight}%`;

      updateTouch(event.clientX, event.clientY);
    };

    document.ontouchmove = event => {
      updateTouch(event.touches[0].clientX, event.touches[0].clientY);
    };
  };

  const updateTouch = (clientX: number, clientY: number) => {
    const x = `${(clientX * 100) / window.innerWidth}%`;
    const y = `${(clientY * 100) / window.innerHeight}%`;

    if (eyeballRef.current === null || torchRef.current === null) {
      return;
    }

    torchRef.current.style.left = `${clientX}px`;
    torchRef.current.style.top = `${clientY}px`;

    eyeballRef.current.style.left = x;
    eyeballRef.current.style.top = y;
    eyeballRef.current.style.transform = 'translate(-' + x + ', -' + y + ')';
  };

  return (
    <div className={styles.page}>
      <div className={styles.wallLetters}>
        <p>
          HTTP: <span>404</span>
        </p>
      </div>
      <div className={styles.eyeWrapper}>
        <div className={styles.eye}>
          <div className={styles.shut}>
            <span></span>
          </div>
          <div className={styles.ball} ref={eyeballRef} />
        </div>
      </div>
      <div className={styles.torch} ref={torchRef}></div>
    </div>
  );
}
