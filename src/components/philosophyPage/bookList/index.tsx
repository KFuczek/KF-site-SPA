'use client';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getHTTPGetWithCache } from '../../../helpers/url-helpers';

export default function BookList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    void getHTTPGetWithCache('/api/stories/titles', 3600 * 24).then(
      (data: never[]) => {
        console.log('stories', data);
        setData(data);
      }
    );
  }, []);

  const createStoriesList = (stories: string[]) => {
    return (
      <ul className={styles.list}>
        {stories.map(title => {
          const path = `stories/${title}`;
          return (
            <li key={title} className={styles.crotch}>
              <Link href={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return <div className={styles.container}>{createStoriesList(data)}</div>;
}
