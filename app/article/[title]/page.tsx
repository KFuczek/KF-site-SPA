'use client';

import BookView from '@/src/components/articlePage/BookView';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getHTTPGetWithLocalStorage } from '@/src/helpers/url-helpers';
import { TextObject } from '@/src/types/backendTextTypes';

export default function Story() {
  const params = useParams();
  const [text, setText] = useState('');
  const [extendedTitle, setTitle] = useState('');

  const { title } = params;

  useEffect(() => {
    const queryString = window.location.search;

    const type = new URLSearchParams(queryString).get('type') || '';

    const parameters = new URLSearchParams({
      title,
      type
    }) as unknown as string;

    void getHTTPGetWithLocalStorage(
      title,
      `/api/text/story?${parameters}`,
      3600 * 24
    ).then((data: TextObject) => {
      setText(data.Text);
      setTitle(data.ExtendedTitle);
    });
  }, []);

  return <BookView text={text} title={extendedTitle} />;
}
