'use client';
import './globals.css';
import styles from './page.module.scss';
import MainFullScreen from '../src/components/mainFullScreen';
import MainIntersectionAnimations from '../src/components/mainIntersectionAnimations/inedex';
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
        threshold: 0.8
      }
    );

    if (mainFullscreenRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      intersectionObserver.observe(mainFullscreenRef.current);
    }
  }, [refAvailable]);

  return isSSR ? null : (
    <>
      <section className={styles.section1}>
        <MainFullScreen ref={setRef} />
      </section>
      <section className={styles.section2}>
        <MainIntersectionAnimations />
      </section>
      <section className={styles.section3}>
        <div className={styles.container}>container</div>
      </section>
    </>
  );
}
