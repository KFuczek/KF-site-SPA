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
    const { ideaId } = params;

    const parameters = new URLSearchParams({
      title: ideaId
    }) as unknown as string;

    void getHTTPGetWithLocalStorage(
      ideaId,
      `/api/philosophy/story?${parameters}`,
      3600 * 24
    ).then((data: TextObject) => {
      setTitle(data.ExtendedTitle);
      setText(data.Text);
    });
  }, []);

  return <StoryView text={text} title={title} />;
}
