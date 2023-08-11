'use client';
import styles from './index.module.scss';
import { ReactElement, useEffect, useState } from 'react';

export default function Navbar() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return isSSR ? null : (
    <div id={'main-navbar'} className={`${styles.navbar}`} />
  );
}

export const toggleNavbar = (show: boolean) => {
  const navbar: ReactElement | HTMLElement | null =
    document.getElementById('main-navbar');
  console.dir(navbar);
  if (!navbar) {
    return;
  }
  navbar.classList.toggle(styles.show, show);
};
