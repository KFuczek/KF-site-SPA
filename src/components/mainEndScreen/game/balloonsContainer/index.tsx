'use client';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import { getHSLColorObject } from '../../../../helpers/color-helpers';

let BALLOONS_NUMBER = 20;

const createNewBalloon = (index: number, maxYCord: number) => {
  const getRandomXCord = Math.floor(5 + Math.random() * 100);
  const getRandomYCord = Math.floor(Math.random() * maxYCord);

  const animationRandom = Math.floor(Math.random() * 25);
  const animationRandomShuttle = Math.floor(3 + Math.random() * 7);

  const balloonNode = document.createElement('div');
  const balloonChild = document.createElement('div');
  balloonNode.className = styles.balloonNode;
  balloonChild.className = styles.balloon;
  balloonNode.style.left = `${getRandomXCord}%`;
  balloonNode.dataset.positionY = `${-getRandomYCord}`;
  balloonNode.dataset.isBalloon = '1';

  const { hue, saturation, lightness } = getHSLColorObject();
  const color = `hsl(${hue},${saturation}%,${lightness}%`;
  const shadowColor = `hsl(${hue},${saturation + 20}%,${lightness - 20}%`;

  balloonChild.style.setProperty('--rColor', color);
  balloonChild.style.setProperty('--rShadowColor', shadowColor);
  balloonChild.style.setProperty('--animationRand', `-${animationRandom}px`);
  balloonChild.style.setProperty(
    '--animationRandShuttle',
    `-${animationRandomShuttle}deg`
  );

  balloonNode.appendChild(balloonChild);

  return balloonNode;
};

export const updateBalloons = (balloonsContainer: HTMLElement) => {
  const balloonsNodes = [...balloonsContainer.children];
  const containerHeight = balloonsContainer.clientHeight;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  balloonsNodes.forEach((balloonNode: HTMLElement) => {
    const balloonPosition = Number(balloonNode.dataset.positionY);
    balloonNode.style.transform = `translateY(-${balloonPosition + 1}px)`;
    balloonNode.dataset.positionY = String(balloonPosition + 1);
    if (balloonPosition - balloonNode.clientHeight > containerHeight) {
      balloonsContainer.removeChild(balloonNode);
      balloonsContainer.appendChild(createNewBalloon(BALLOONS_NUMBER++, 100));
    }
  });
};

const createBalloons = () => {
  const balloonsContainer = document.getElementById('balloons-container');
  if (!balloonsContainer) {
    return;
  }

  balloonsContainer.appendChild(createNewBalloon(0, -500));
  balloonsContainer.appendChild(createNewBalloon(1, -500));
  balloonsContainer.appendChild(createNewBalloon(2, -500));
  balloonsContainer.appendChild(createNewBalloon(3, -500));
  balloonsContainer.appendChild(createNewBalloon(4, -500));

  Array(BALLOONS_NUMBER - 5)
    .fill(null)
    .forEach((balloon, index) => {
      balloonsContainer.appendChild(createNewBalloon(index + 5, 300));
    });
};

const BalloonsContainer = () => {
  useEffect(() => {
    createBalloons();
  }, []);

  const balloonClicked = ({ target }: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const balloonNode = target.parentElement as HTMLElement;
    if (balloonNode.dataset.isBalloon !== '1') {
      return;
    }

    const balloonsContainer = balloonNode.parentElement;

    if (!balloonsContainer) {
      return;
    }

    const balloon = balloonNode.firstChild as HTMLElement;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    balloon.classList?.add(styles.popped);

    setTimeout(() => {
      balloonsContainer.removeChild(balloonNode);
    }, 1000);
    balloonsContainer.appendChild(createNewBalloon(BALLOONS_NUMBER++, 100));
  };

  return (
    <div
      id="balloons-container"
      className={styles.balloonsContainer}
      onClick={balloonClicked}
    />
  );
};

export default BalloonsContainer;
