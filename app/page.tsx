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

  const implementCustomScrollLogic = () => {
    const onWheel = (e: any) => {
      const { scrollTop, clientHeight, scrollHeight } =
        mainFullscreenRef.current as HTMLDivElement;
      const reachEndOfContainer =
        clientHeight + scrollTop >= scrollHeight - 1 ||
        clientHeight + scrollTop > 3000;

      const scrollUp = () =>
        mainFullscreenRef.current?.scrollTo(0, scrollTop - 20);
      const scrollDown = () =>
        mainFullscreenRef.current?.scrollTo(0, scrollTop + 20);

      if (reachEndOfContainer) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (e.deltaY <= 0) {
          scrollUp();
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        e.stopPropagation();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (e.deltaY > 0) {
          scrollDown();
        } else {
          scrollUp();
        }
      }
    };

    mainFullscreenRef?.current?.addEventListener('wheel', onWheel, {
      passive: false
    });
  };

  useEffect(() => {
    if (!refAvailable) {
      return;
    }
    implementCustomScrollLogic();
    shouldScroll();
  }, [refAvailable]);

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

  const shouldScroll = () => {
    const MIDDLE_SECTION = '#middle';
    if (window.location.hash === MIDDLE_SECTION) {
      middleScreenRef.current?.scrollIntoView();
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
