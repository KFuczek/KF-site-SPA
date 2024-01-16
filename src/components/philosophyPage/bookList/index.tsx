'use client';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { getHTTPGetWithLocalStorage } from '../../../helpers/url-helpers';
import { TitlesPair } from '../../../types/backendTextTypes';
import BioPunkTable from '@/src/customComponents/biopunkTable';

export default function BookList() {
  const [data, setData] = useState<TitlesPair[]>([]);

  useEffect(() => {
    void getHTTPGetWithLocalStorage(
      'philosophyList',
      '/api/philosophy/titles',
      3600 * 24
    ).then((allTitles: TitlesPair[]) => {
      setData(allTitles);
    });
  }, []);

  return (
    <div className={styles.page}>
      <BioPunkTable data={data} />
    </div>
  );
}
