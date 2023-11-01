'use client';
import styles from './index.module.scss';
import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import NeonButton from '../buttons/neon';

export default function Navbar() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return isSSR ? null : (
    <div id={'main-navbar'} className={`${styles.navbar}`}>
      <Link href={'/politics'}>politics</Link>
      <Link href={'/philosophy'}>philosophy</Link>
      <NeonButton url={'stories'} />
    </div>
  );
}

export const toggleNavbar = (hide: boolean) => {
  const navbar: ReactElement | HTMLElement | null =
    document.getElementById('main-navbar');
  if (!navbar) {
    return;
  }
  navbar.classList.toggle(styles.hide, hide);
};
