'use client';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return isSSR ? null : <div className={styles.navbar} />;
}
