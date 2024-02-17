'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getHTTPGetWithLocalStorage } from '../../../helpers/url-helpers';
import { TextObject } from '../../../types/backendTextTypes';
import StoryView from '@/src/customComponents/storyView';

export default function BookView() {
  const params = useParams();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { roadId } = params;
    const parameters = new URLSearchParams({
      title: roadId
    }) as unknown as string;

    void getHTTPGetWithLocalStorage(
      roadId,
      `/api/road/story?${parameters}`,
      3600 * 24
    ).then((data: TextObject) => {
      setTitle(data.ExtendedTitle);
      setText(data.Text);
    });
  }, []);

  return <StoryView text={text} title={title} />;
}
