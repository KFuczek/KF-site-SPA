'use client';
import styles from './page.module.scss';
import { generateRandomInteger } from '../../../helpers/maths-helper';

export default function Stars() {
  const amountOfStars = generateRandomInteger(100, 200);
  const stars = createStars(amountOfStars);

  return (
    <div className={styles.sky}>
      <div className={styles.shootingStar} />
      <div className={styles.shootingStar} />
      <div className={styles.shootingStar} />
      <div className={styles.shootingStar} />
      <div className={styles.shootingStar} />
      <div className={styles.shootingStar} />
      {...stars}
    </div>
  );
}

const createStars = (amountOfStars: number): JSX.Element[] => {
  const starColours = ['yellow', 'lightblue', 'white', '#f7ea8a'];
  const starsArray = [];
  for (let i = 0; i < amountOfStars; i++) {
    const topPosition = generateRandomInteger(1, 70);
    const randomNum = generateRandomInteger(0, 10);
    const leftPosition = generateRandomInteger(1, 90) + randomNum;
    const scale = generateRandomInteger(1, 10) / 50;
    const rColour = generateRandomInteger(0, 3);
    const star = createRandomStars(
      starColours[rColour],
      topPosition,
      leftPosition,
      scale
    );
    starsArray.push(star);
  }
  return starsArray;
};

function createRandomStars(
  starColor: string,
  topPosition: number,
  leftPosition: number,
  scale: number
): JSX.Element {
  const type1 = !(topPosition % 6) && 4;
  const type2 = !(topPosition % 5) && 2;
  const type3 = !(topPosition % 4) && 6;
  const type4 = !(topPosition % 3) && 8;
  // const delay = type1 || type2 || type3 || type4;
  // const blinkingPeriod = generateRandomInteger(1, 3);

  const generatedStyle = {
    backgroundColor: starColor,
    top: `${topPosition}%`,
    left: `${leftPosition}%`,
    transform: `scale(${scale})`
  };

  return <div className={styles.normalStar} style={generatedStyle} />;

  // drawnStar.style.animation= type4 && `twinkle ${blinkingPeriod}s linear ${delay}s infinite`;
}
