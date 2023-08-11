'use client';
import './globals.css';
import styles from './page.module.scss';
import MainFullScreen from '../src/components/mainFullScreen/page';
import MainIntersectionAnimations from '../src/components/mainIntersectionAnimations/page';
import { useEffect, useState, useRef, useCallback } from 'react';
import { toggleNavbar } from '../src/components/Navbar';

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  const [refAvailable, setRefAvailable] = useState(false);
  const mainFullscreenRef = useRef<Element | null>(null);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  const setRef = useCallback((node: HTMLElement) => {
    if (!mainFullscreenRef.current && node) {
      mainFullscreenRef.current = node;
      setRefAvailable(true);
    }
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          toggleNavbar(!entry.isIntersecting);
        });
      },
      {
        threshold: 0.9
      }
    );

    if (mainFullscreenRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      intersectionObserver.observe(mainFullscreenRef.current);
    }
  }, [refAvailable]);

  return isSSR ? null : (
    <div className={styles.frontPage}>
      <MainFullScreen ref={setRef} />
      <MainIntersectionAnimations />
      <div className={styles.container}>container</div>
    </div>
  );
}
