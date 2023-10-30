'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getHTTPGet } from '../../../src/helpers/url-helpers';
import { Story } from '../../../src/types/story';

export default function Story() {
  const params = useParams();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { storyId } = params;
    const parameters = new URLSearchParams({
      title: storyId
    }) as unknown as string;

    void getHTTPGet(`/api/stories/story?${parameters}`).then((data: Story) => {
      console.log('from server', data);
      setTitle(data.title);
      setText(data.text);
    });
  }, []);

  return (
    <div>
      <div>{decodeURI(title)} </div>
      <div style={{ whiteSpace: 'pre-line' }}> {text}</div>
    </div>
  );
}
