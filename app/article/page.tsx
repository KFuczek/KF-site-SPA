'use client';
import BookList from '@/src/components/articlePage/bookList';
import { useEffect, useState } from 'react';
import { TitlesPair } from '@/src/types/backendTextTypes';
import { getHTTPGetWithLocalStorage } from '@/src/helpers/url-helpers';

export default function StoriesList() {
  const [data, setData] = useState<TitlesPair[]>([]);
  const [type, setType] = useState<string>('');

  useEffect(() => {
    const queryString = window.location.search;
    const type = new URLSearchParams(queryString).get('type') || '';
    const parameters = new URLSearchParams({
      type
    }) as unknown as string;

    void getHTTPGetWithLocalStorage(
      type,
      `/api/text/titles?${parameters}`,
      3600 * 24
    ).then((allTitles: TitlesPair[]) => {
      setData(allTitles);
      setType(type);
    });
  }, []);

  return <BookList data={data} type={type} />;
}
