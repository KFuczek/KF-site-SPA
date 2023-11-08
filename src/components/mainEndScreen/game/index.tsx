'use client';
import styles from './styles.module.scss';
import BalloonsContainer, { updateBalloons } from '../game/balloonsContainer';
import { useEffect, useRef } from 'react';

const Game = () => {
  const balloonsContainer = useRef();
  const requestRef = useRef(Function);
  const previousTimeRef = useRef(1);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    requestRef.current = requestAnimationFrame(animate);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    balloonsContainer.current = document.getElementById(
      'balloons-container'
    ) as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const animate = (time: number) => {
    if (!previousTimeRef.current) {
      return;
    }
    const deltaTime = time - previousTimeRef.current;

    if (deltaTime < 35) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    previousTimeRef.current = time;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    updateBalloons(balloonsContainer.current as HTMLElement);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    requestRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className={styles.container}>
      <BalloonsContainer />
    </div>
  );
};
export default Game;
