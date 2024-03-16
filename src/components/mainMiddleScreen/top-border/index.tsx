'use client';
import styles from './styles.module.scss';
import Button from '../../../customComponents/buttons/art-deco';
import { ReactElement } from 'react';

export const hideMenuBorder = (hide: boolean) => {
  const borderMenu: ReactElement | HTMLElement | null =
    document.getElementById('border-menu');
  if (!borderMenu) {
    return;
  }
  borderMenu.classList.toggle(styles.hide, hide);
};

export const stickyMenuBorder = (sticky: boolean) => {
  const borderMenu: ReactElement | HTMLElement | null =
    document.getElementById('border-menu');
  if (!borderMenu) {
    return;
  }
  borderMenu.classList.toggle(styles.sticky, sticky);
};

export default function TopBorder() {
  return (
    <div id="border-menu" className={styles.container}>
      <div className={`${styles.circles} ${styles.left}`}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
      <div className={styles.buttons}>
        <Button url={'article?type=stories'} text={'Opowiadania'} />
        <Button url={'article?type=philosophy'} text={'Filozofia'} />
        <Button url={'article?type=road'} text={'Droga'} />
      </div>
      <div className={`${styles.circles} ${styles.right}`}>
        <div className={styles.circle} />
        <div className={styles.circle} />
        <div className={styles.circle} />
      </div>
    </div>
  );
}
