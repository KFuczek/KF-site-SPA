'use client';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getHTTPGetWithLocalStorage } from '../../../helpers/url-helpers';
import { TitlesPair } from '../../../types/backendTextTypes';

export default function BookList() {
  const [data, setData] = useState<TitlesPair[]>([]);

  useEffect(() => {
    void getHTTPGetWithLocalStorage(
      'roadList',
      '/api/road/titles',
      3600 * 24
    ).then((allTitles: TitlesPair[]) => {
      setData(allTitles);
    });
  }, []);

  const createStoriesList = (stories: TitlesPair[]) => {
    return (
      <ul className={styles.list}>
        {stories.map(titleArr => {
          const [extendedtitle, title] = titleArr;
          const path = `road/${title}`;
          return (
            <li key={title} className={styles.crotch}>
              <Link href={path}>{extendedtitle}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return <div className={styles.container}>{createStoriesList(data)}</div>;
}
