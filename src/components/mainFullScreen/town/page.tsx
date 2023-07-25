import styles from './page.module.scss';
import { shuffle } from '../../../helpers/array-helpers';
import { ReactNode } from 'react';
import { generateRandomNumber } from '../../../helpers/maths-helper';

export default function Town() {
  const generateTown2 = (
    widthRatio = 1,
    heightRatio = 1,
    leftRatio = 0
  ): HTMLElement[] => {
    const scySkrapers = [];
    for (let i = 0; i < 50; i++) {
      const randomLeft = generateRandomNumber(0, 5);
      const randomHeight = generateRandomNumber(10, 50);
      const randomWidth = generateRandomNumber(1, 4);
      scySkrapers.push(
        <div
          style={{
            left: `calc(${randomLeft}% * ${leftRatio})`,
            height: `calc(${randomHeight}% * ${heightRatio})`,
            width: `calc(${randomWidth}px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        >
          <div className={styles.windowsContainer}>
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window} ${styles.windowBlack}`} />
            <div className={`${styles.window}`} />
          </div>
        </div>
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (<>{...scySkrapers}</>).props?.children as HTMLElement[];
  };

  const drawTowns = () => {
    const towns = [
      ...generateTown2(13, 1, 6),

      ...generateTown2(20, 2, 10),
      ...generateTown2(13, 1, 12),
      ...generateTown2(20, 2, 14),
      ...generateTown2(13, 1, 16),
      ...generateTown2(13, 2, 18),
      ...generateTown2(20, 1, 20),
      ...generateTown2(13, 2, 21),
      ...generateTown2(20, 1, 22),
      ...generateTown2(13, 2, 23),
      ...generateTown2(20, 1, 24),
      ...generateTown2(13, 2, 25)
    ] as HTMLElement[];
    const randomSortedBuildings = shuffle<HTMLElement>(towns);

    console.dir(randomSortedBuildings);
    return randomSortedBuildings as unknown as ReactNode;
  };

  return (
    <div className={styles.cityWrap}>
      <div className={styles.city}>{drawTowns()}</div>
    </div>
  );
}
