import styles from './styles.module.scss';
import { useRef, useEffect } from 'react';

type SvgInHtml = HTMLElement & SVGElement;
const StoryView = ({ text, title }: { text: string; title: string }) => {
  const lineRef = useRef<SvgInHtml>();
  const container = useRef<HTMLElement>();

  useEffect(() => {
    drawLine();
  }, []);
  const drawLine = () => {
    if (!lineRef.current || !container.current) return;

    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const pathLength: string = lineRef.current.getTotalLength() as string;

    lineRef.current.style.strokeDasharray = pathLength + ' ' + pathLength;

    lineRef.current.style.strokeDashoffset = pathLength;

    const onScroll = () => {
      if (!container.current || !lineRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = container.current;
      const scrollPercentage =
        (scrollTop + scrollTop) / (scrollHeight - clientHeight);

      const drawLength = Number(pathLength) * scrollPercentage;
      console.log(drawLength, pathLength, scrollPercentage);
      lineRef.current.style.strokeDashoffset = String(
        Number(pathLength) - drawLength * 20
      );
    };

    container.current.addEventListener('scroll', onScroll);
  };

  return (
    // @ts-ignore
    <div className={styles.container} ref={container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title} </div>
        <div className={styles.text}> {text}</div>
      </div>
      <div className={styles.scrollLine}>
        <svg
          //pathLength="1"
          className={styles.svgLine}
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 88.7 455"
        >
          <title>line</title>
          <path // @ts-ignore
            ref={lineRef}
            d="M102,185c4.2-7.8,33.2-60.8,57-56,22.3,4.5,38.3,59.1,25,103-17.1,56.4-75.1,70.9-69,100,5.8,27.4,59.5,26,65,57,1.4,7.9-1.4,12-25,55-27.2,49.5-30,56-31,65-1.9,16.4,2.2,40.7,31,73"
            transform="translate(-101.1 -127.7)"
            fill="none"
            stroke="#42210b"
            stroke-miterlimit="10"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default StoryView;
