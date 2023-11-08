'use client';
import './globals.css';
import styles from './page.module.scss';
import MainFullScreen from '../src/components/mainFullScreen';
import MainMiddleScreen from '../src/components/mainMiddleScreen';
import MainEndScreen from '../src/components/mainEndScreen';
import { useEffect, useState, useRef, useCallback } from 'react';
import { toggleNavbar } from '../src/components/Navbar';
import {
  hideMenuBorder,
  stickyMenuBorder
} from '../src/components/mainMiddleScreen/top-border';

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  const [refAvailable, setRefAvailable] = useState(false);
  const mainFullscreenRef = useRef<HTMLElement | null>(null);
  const middleScreenRef = useRef<HTMLElement | null>(null);
  const endScreenRef = useRef<HTMLElement | null>(null);
  const navBarRefContainer = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsSSR(false);
    toggleNavbar(true);
    setTimeout(() => {
      navBarRefContainer.current = document.getElementById('borderMenu');
    }, 500);

    return () => {
      toggleNavbar(false);
    };
  }, []);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  const makeMenuSticky = (event: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const target = event.target as HTMLElement;
    if (!navBarRefContainer.current) {
      return;
    }

    const isScreenLowerThanBorderMenu =
      target?.scrollTop >= navBarRefContainer.current?.offsetTop;
    stickyMenuBorder(isScreenLowerThanBorderMenu);
  };
  const setRef = useCallback((node: HTMLDivElement, part: string) => {
    switch (part) {
      case 'main': {
        if (!mainFullscreenRef.current && node) {
          mainFullscreenRef.current = node;
        }
        break;
      }
      case 'middle': {
        if (!middleScreenRef.current && node) {
          middleScreenRef.current = node;
        }
        break;
      }
      case 'end': {
        if (!endScreenRef.current && node) {
          endScreenRef.current = node;
        }
        break;
      }
    }
    setRefAvailable(true);
  }, []);

  useEffect(() => {
    intersectionMainFullscreen();
    intersectionMiddleScreen();
  }, [refAvailable]);

  const intersectionMainFullscreen = () => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // (!entry.isIntersecting);
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
  };

  const intersectionMiddleScreen = () => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          console.log(entry, entry.isIntersecting);
          hideMenuBorder(!entry.isIntersecting);
        });
      },
      {
        rootMargin: '-80px'
      }
    );

    if (middleScreenRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      intersectionObserver.observe(middleScreenRef.current);
    }
  };

  return isSSR ? null : (
    <div
      className={styles.sectionContainer}
      onScroll={target => makeMenuSticky(target)}
    >
      <section className={styles.section1}>
        <MainFullScreen ref={(node: HTMLDivElement) => setRef(node, 'main')} />
      </section>
      <section className={styles.section2}>
        <MainMiddleScreen
          ref={(node: HTMLDivElement) => setRef(node, 'middle')}
        />
      </section>
      <section className={styles.section3}>
        <MainEndScreen ref={(node: HTMLDivElement) => setRef(node, 'end')} />
      </section>
    </div>
  );
}
