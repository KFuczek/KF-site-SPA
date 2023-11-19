'use client';
import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';

const CatClock = () => {
  const hourRef = useRef<HTMLDivElement | null>(null);
  const minRef = useRef<HTMLDivElement | null>(null);
  const secRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();

      const hourDegree = hour * (360 / 12);
      const minuteDegree = minute * (360 / 60);
      const secondDegree = second * (360 / 60);

      if (hourRef.current?.style) {
        hourRef.current.style.transform = `rotate(${hourDegree}deg)`;
      }

      if (minRef.current?.style) {
        minRef.current.style.transform = `rotate(${minuteDegree}deg)`;
      }
      if (secRef.current?.style) {
        secRef.current.style.transform = `rotate(${secondDegree}deg)`;
      }
    };

    setInterval(updateTime, 1000);
  }, []);

  const getClockNumbers = () => {
    return new Array(12).fill(null).map((a, index) => {
      const transformContainer = `rotate(calc((${
        index + 1
      } * (360deg / 12)) - 10deg))`;
      const transformNumber = `rotate(calc((${
        index + 1
      } * (-360deg / 12)) + 10deg))`;
      return (
        <span
          key={`number${index}`}
          style={{ transform: transformContainer }}
          className={styles.clockNumberContainer}
        >
          <span
            style={{ transform: transformNumber }}
            className={styles.clockNumber}
          >
            {index + 1}
          </span>
        </span>
      );
    });
  };

  return (
    <div className={styles.catContainer}>
      <div className={styles.head}>
        <div className={styles.leftEar} />
        <div className={styles.rightEar} />
        <div className={styles.eyes} />
        <div className={styles.eyes} />
        <div className={styles.nose} />
        <div className={styles.mouth}>
          <div className={`${styles.leftWhiskers}`} />
          <div className={`${styles.rightWhiskers}`} />
        </div>
        <div className={styles.bowtie} />
      </div>
      <div className={styles.catBody}>
        <div className={styles.analogClock}>
          <div
            id="hours"
            className={`${styles.hours} ${styles.hands}`}
            ref={hourRef}
          />
          <div
            id="minutes"
            className={`${styles.minutes} ${styles.hands}`}
            ref={minRef}
          />
          <div
            id="seconds"
            className={`${styles.seconds} ${styles.hands}`}
            ref={secRef}
          />
          <div id="numbers">{getClockNumbers()}</div>
        </div>
        <div className={styles.leftPaw}>
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
        </div>
        <div className={styles.rightPaw}>
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
        </div>
        <div className={styles.leftFoot}>
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
        </div>
        <div className={styles.rightFoot}>
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
          <div className={styles.claws} />
        </div>
      </div>
      <div id="tail" className={styles.tail}>
        <div className={styles.curve} />
      </div>
    </div>
  );
};

export default CatClock;
