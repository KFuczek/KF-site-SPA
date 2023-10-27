'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getHTTPGet } from '../../src/helpers/url-helpers';

export default function StoriesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    void getHTTPGet('/api/stories/titles').then((data: never[]) => {
      setData(data);
    });
  }, []);

  const createStoriesList = (stories: string[]) => {
    return (
      <ul>
        {stories.map(title => {
          const path = `stories/${title}`;
          return (
            <li key={title}>
              <Link href={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return <div>{createStoriesList(data)}</div>;
}
