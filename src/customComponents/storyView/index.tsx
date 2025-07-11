import styles from './styles.module.scss';
import { useRef, useEffect, useState } from 'react';
import ScrollIndicator from '@/src/customComponents/scroll-indicator';

type SvgInHtml = HTMLElement & SVGElement;
const StoryView = ({ text, title }: { text: string; title: string }) => {
  const container = useRef<HTMLElement>();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    container.current?.addEventListener('scroll', handleScroll);

    return () => container.current?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (!container.current) {
      return;
    }

    const { scrollTop, scrollHeight, clientHeight } = container.current;
    const scrollPercentage = Math.floor(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPercent(scrollPercentage);
  };

  return (
    // @ts-ignore
    <div className={styles.container} ref={container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title} </div>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <div className={styles.scrollLine}>
        <ScrollIndicator scrollPercentage={scrollPercent} />
      </div>
    </div>
  );
};

export default StoryView;
