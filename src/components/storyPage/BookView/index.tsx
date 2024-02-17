'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getHTTPGetWithLocalStorage } from '@/src/helpers/url-helpers';
import StoryView from '@/src/customComponents/storyView';
import { TextObject } from '@/src/types/backendTextTypes';

export default function BookView() {
  const params = useParams();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { storyId } = params;
    const parameters = new URLSearchParams({
      title: storyId
    }) as unknown as string;

    void getHTTPGetWithLocalStorage(
      storyId,
      `/api/stories/story?${parameters}`,
      3600 * 24
    ).then((story: TextObject) => {
      setTitle(story.ExtendedTitle);
      setText(story.Text);
    });
  }, []);

  return <StoryView text={text} title={title} />;
}
