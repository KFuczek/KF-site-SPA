'use client';
import BookList from '@/src/components/articlePage/bookList';
import { useEffect, useState } from 'react';
import { TitlesPair } from '@/src/types/backendTextTypes';
import { getHTTPGetWithLocalStorage } from '@/src/helpers/url-helpers';
import { useParams } from 'next/navigation';

export default function StoriesList() {
  const [data, setData] = useState<TitlesPair[]>([]);
  const { type } = useParams();

  useEffect(() => {
    const parameters = new URLSearchParams({
      type
    }) as unknown as string;

    void getHTTPGetWithLocalStorage(
      type,
      `/api/text/titles?${parameters}`,
      3600 * 24
    ).then((allTitles: TitlesPair[]) => {
      setData(allTitles);
    });
  }, []);

  return <BookList data={data} type={type} />;
}
