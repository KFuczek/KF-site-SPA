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
  const mainFullscreenRef = useRef<HTMLElement | null>(null);
  const navBarRef = useRef<HTMLElement | null>(null);
  const navBarRefContainer = useRef<HTMLElement | null>(null);
  useEffect(() => {
    setIsSSR(false);
    toggleNavbar(true);
    setTimeout(() => {
      const navBar = document.getElementById('borderMenu');
      navBarRef.current = navBar?.children[0] as HTMLElement;
      navBarRefContainer.current = navBar;
    }, 100);

    return () => {
      toggleNavbar(false);
    };
  }, []);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  const makeMenuSticky = ({ target }: any) => {
    if (!navBarRef.current || !navBarRefContainer.current) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (target?.scrollTop >= navBarRefContainer.current?.offsetTop) {
      navBarRef.current.style.position = 'fixed';
      navBarRef.current.style.height = '100px';
      navBarRef.current.style.top = '0';
    } else {
      navBarRef.current.style.position = 'static';
      navBarRef.current.style.height = '100px';
      navBarRef.current.style.top = 'auto';
    }
  };
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
          // toggleNavbar(!entry.isIntersecting);
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
    <div
      className={styles.sectionContainer}
      onScroll={target => makeMenuSticky(target)}
    >
      <section className={styles.section1}>
        <MainFullScreen ref={setRef} />
      </section>
      <section className={styles.section2}>
        <MainIntersectionAnimations />
      </section>
      <section className={styles.section3}>
        <div className={styles.container}>container</div>
      </section>
    </div>
  );
}
