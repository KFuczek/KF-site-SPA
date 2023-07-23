import styles from './page.module.scss';
import { shuffle } from '../../../helpers/array-helpers';
import { ReactNode } from 'react';

export default function Town() {
  const generateTown = (
    widthRatio = 1,
    heightRatio = 1,
    leftRatio = 0
  ): HTMLElement[] => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (
      <>
        <div
          style={{
            left: `calc(1.0% * ${leftRatio})`,
            height: `calc(20% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(2.0% * ${leftRatio})`,
            height: `calc(50% * ${heightRatio})`,
            width: `calc(7px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(3.0% * ${leftRatio})`,
            height: `calc(25% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(4.0% * ${leftRatio})`,
            height: `calc(30% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(5.0% * ${leftRatio})`,
            height: `calc(55% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(6.0% * ${leftRatio})`,
            height: `calc(20% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(7.5% * ${leftRatio})`,
            height: `calc(70% * ${heightRatio})`,
            width: `calc(7.5px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(8.0% * ${leftRatio})`,
            height: `calc(30% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(9.5% * ${leftRatio})`,
            height: `calc(80% * ${heightRatio})`,
            width: `calc(8.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(10.0% * ${leftRatio})`,
            height: `calc(60% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(11.0% * ${leftRatio})`,
            height: `calc(40% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(12.0% * ${leftRatio})`,
            height: `calc(70% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(13.0% * ${leftRatio})`,
            height: `calc(65% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(14.0% * ${leftRatio})`,
            height: `calc(40% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(15.0% * ${leftRatio})`,
            height: `calc(60% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(16.0% * ${leftRatio})`,
            height: `calc(85% * ${heightRatio})`,
            width: `calc(9.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(17.0% * ${leftRatio})`,
            height: `calc(40% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(18.0% * ${leftRatio})`,
            height: `calc(25% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(19.0% * ${leftRatio})`,
            height: `calc(80% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(20.0% * ${leftRatio})`,
            height: `calc(32% * ${heightRatio})`,
            width: `calc(5.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(21.0% * ${leftRatio})`,
            height: `calc(55% * ${heightRatio})`,
            width: `calc(3.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(22.0% * ${leftRatio})`,
            height: `calc(45% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(23.0% * ${leftRatio})`,
            height: `calc(90% * ${heightRatio})`,
            width: `calc(9.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(24.0% * ${leftRatio})`,
            height: `calc(99% * ${heightRatio})`,
            width: `calc(9.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(25.0% * ${leftRatio})`,
            height: `calc(30% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(26% * ${leftRatio})`,
            height: `calc(90% * ${heightRatio})`,
            width: `calc(9.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(27.0% * ${leftRatio})`,
            height: `calc(70% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(28.0% * ${leftRatio})`,
            height: `calc(60% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(29.0% * ${leftRatio})`,
            height: `calc(40% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(30.0% * ${leftRatio})`,
            height: `calc(70% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(31.0% * ${leftRatio})`,
            height: `calc(60% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={`${styles.retroBuilding}`}
        />
        <div
          style={{
            left: `calc(32.0% * ${leftRatio})`,
            height: `calc(50% * ${heightRatio})`,
            width: `calc(6.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(33.0% * ${leftRatio})`,
            height: `calc(30% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(34.0% * ${leftRatio})`,
            height: `calc(20% * ${heightRatio})`,
            width: `calc(3.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
        <div
          style={{
            left: `calc(35.0% * ${leftRatio})`,
            height: `calc(35% * ${heightRatio})`,
            width: `calc(4.0px * ${widthRatio})`
          }}
          className={styles.retroBuilding}
        />
      </>
    ).props?.children as HTMLElement[];
  };

  const drawTowns = () => {
    const towns = [
      ...generateTown(1, 0.7, 1),
      ...generateTown(2.5, 0.8, 2),
      ...generateTown(3, 0.6, 3),
      ...generateTown(5, 0.7, 1.5),
      ...generateTown(6, 0.8, 2.5),
      ...generateTown(7, 0.6, 3.2),
      ...generateTown(10, 0.6, 3.5)
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
