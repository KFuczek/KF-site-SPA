'use client';
import styles from './styles.module.scss';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArtDecoCard from '../../art-deco-card';
import { getHTTPGet } from '../../../helpers/url-helpers';
import useLocalStorage from '../../../hooks/localStorage';

import { createPortal } from 'react-dom';

export default function Envelope() {
  const [refAvailable, setRefAvailable] = useState(false);
  const [quote, setQuote] = useState({ text: '', author: '' });
  const envelopeContainerRef = useRef<HTMLDivElement>();
  const envelopeRef = useRef<HTMLDivElement>();
  const envelopeButtonRef = useRef<HTMLDivElement>();
  const [cardComponentRendered, setCardComponentRendered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [quoteIndex, setQuoteIndex] = useLocalStorage('quoteIndex', 0);

  useEffect(() => {
    const path = '/api/quote';
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const params = `number=${quoteIndex}`;
    const url = `${path}?${params}`;
    void getHTTPGet(url).then(quote => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setQuote(quote);
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      setQuoteIndex(quoteIndex + 1);
    });
  }, []);

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
          if (entry.isIntersecting) {
            setTimeout(() => {
              setCardComponentRendered(true);
            }, 6000);
            envelopeContainerRef.current?.classList.toggle(
              styles.envelopeContainerRemove,
              true
            );
            envelopeRef.current?.classList.toggle(styles.flap, true);
            envelopeButtonRef.current?.classList.toggle(
              styles.buttonOpen,
              true
            );
          }
        });
      },
      { threshold: 1 }
    );

    if (envelopeContainerRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      intersectionObserver.observe(envelopeContainerRef.current);
    }
  }, [refAvailable]);

  const letterNotReady = useMemo(() => {
    return (
      <div className={styles.letter}>
        <ArtDecoCard text={quote.text} author={''} />;
      </div>
    );
  }, [quote.text]);

  const getLetter = useCallback(() => {
    if (cardComponentRendered) {
      const section2Node = document.getElementById(
        'section2-right-side'
      ) as HTMLDivElement;
      const LetterWrapper = (
        <div className={styles.letterOnPlace}>
          <ArtDecoCard text={quote.text} author={quote.author} />
        </div>
      );
      return createPortal(LetterWrapper, section2Node);
    }

    return null;
  }, [cardComponentRendered, quote.text]);

  return (
    <div
      ref={node => setRef(node, envelopeContainerRef)}
      className={styles.envelopeContainer}
    >
      <div className={styles.envelopeWrapper}>
        <div
          ref={node => setRef(node, envelopeRef)}
          className={styles.envelope}
        >
          {getLetter()}
          {letterNotReady}
          <div
            ref={node => setRef(node, envelopeButtonRef)}
            className={styles.button}
          />
        </div>
      </div>
    </div>
  );
}
