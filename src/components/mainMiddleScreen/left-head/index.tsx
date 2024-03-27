'use client';
import styles from './styles.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Bubble from './bubble';
import { useRouter } from 'next/navigation';

export default function LeftHeadContainer() {
  const [refAvailable, setRefAvailable] = useState(false);
  const leftHeadContainerRef = useRef<HTMLDivElement | null>(null);
  const leftHeadRef = useRef<HTMLDivElement | null>(null);
  const { push } = useRouter();

  const setRef = useCallback((node: HTMLDivElement | null, ref: any) => {
    /* eslint-disable */
    if (!ref.current && node) {
      /* eslint-disable */
      ref.current = node;
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
      { threshold: 0.1 }
    );

    if (leftHeadContainerRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      intersectionObserver.observe(leftHeadContainerRef.current);
    }
  }, [refAvailable]);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    <div // @ts-ignore
      ref={node => setRef(node, leftHeadContainerRef) as HTMLDivElement}
      className={`${styles.leftHeadAnimationContainer}`}
    >
      <div
        ref={node => setRef(node, leftHeadRef)}
        className={`${styles.leftHeadAnimation}`}
        onClick={() => push('/xd')}
      >
        <Image
          src="/head.png"
          alt="head"
          className={styles.head}
          width={400}
          height={600}
          priority
        />
        <Bubble />
      </div>
    </div>
  );
}
