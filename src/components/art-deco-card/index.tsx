'use client';
import styles from './styles.module.scss';
import { useCallback, useEffect, useRef, useState, memo } from 'react';
import { useMachineTypedText } from '../../hooks/machineTypedText';
import { poiretOne } from '../../fonts';

const ArtDecoCard = memo(function ArtDecoCard({
  text,
  author
}: {
  text: string;
  author: string;
}) {
  const [refAvailable, setRefAvailable] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);

  const { word: typedAuthor } = useMachineTypedText(
    // toDo: fix
    author.split(' '),
    350,
    10,
    startTyping
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
        const fontSize = Math.max(offsetWidth * 0.05, 15);
        target.style.fontSize = fontSize + 'px';
      }
    });

    if (cardRef.current) {
      resizeObserver.observe(cardRef.current as HTMLDivElement);
    }
  }, [refAvailable]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStartTyping(true);
          }, 2000);
        }
      });
    });

    if (cardRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      intersectionObserver.observe(cardRef.current);
    }
  }, [refAvailable]);

  return (
    <div
      ref={node => setRef(node, cardRef)}
      className={`${styles.card} ${poiretOne.className}`}
    >
      <div ref={node => setRef(node, quoteRef)} className={styles.quote}>
        <p>{text}</p>
      </div>
      <footer className={styles.footer}>{typedAuthor}</footer>
    </div>
  );
});

export default ArtDecoCard;
