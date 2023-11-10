'use client';
import styles from './index.module.scss';
import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import NeonButton from '../../customComponents/buttons/neon';
import NeonButton2 from '../../customComponents/buttons/neon2';

export default function Navbar() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return isSSR ? null : (
    <div id={'main-navbar'} className={`${styles.navbar}`}>
      <NeonButton2 url={'/'} name={'HOME'} />
      {/*<NeonButton url={'stories'} name={'OPOWIADANIA'} />*/}
      {/*<NeonButton url={'philosophy'} name={'FILOZOFIA'} />*/}
      {/*<NeonButton url={'politics'} name={'DROGA'} />*/}
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
