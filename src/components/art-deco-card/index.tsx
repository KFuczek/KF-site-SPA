'use client';
import styles from './styles.module.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMachineTypedText } from '../../hooks/machineTypedText';

export default function ArtDecoCard({
  text,
  author
}: {
  text: string;
  author: string;
}) {
  const [refAvailable, setRefAvailable] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const { word: typedAuthor } = useMachineTypedText(
    // toDo: fix
    author.split(' '),
    100,
    10
  );

  const setRef = useCallback((node: HTMLDivElement | null, ref: any) => {
    /* eslint-disable */
    if (!ref.current && node) {
      /* eslint-disable */
      ref.current = node;
      setRefAvailable(true);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const target: HTMLDivElement = entry.target as HTMLDivElement;
        const { offsetWidth } = target;
        const fontSize = Math.max(offsetWidth * 0.05, 25);
        target.style.fontSize = fontSize + 'px';
      }
    });

    if (quoteRef.current) {
      resizeObserver.observe(quoteRef.current as HTMLDivElement);
    }
  }, [refAvailable]);

  return (
    <div ref={node => setRef(node, cardRef)} className={styles.card}>
      <div ref={node => setRef(node, quoteRef)} className={styles.quote}>
        <p>{text}</p>
      </div>
      <footer className={styles.footer}>{typedAuthor}</footer>
    </div>
  );
}
