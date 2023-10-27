'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getHTTPGet } from '../../../src/helpers/url-helpers';
import { Story } from '../../../src/types/story';

export default function Story() {
  const params = useParams();
  const [data, setData] = useState({ title: '', text: '' });

  useEffect(() => {
    const { storyId } = params;
    const parameters = new URLSearchParams({
      title: storyId
    });

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void getHTTPGet(`/api/stories/story?${parameters}`).then((data: string) => {
      console.log('from server', data);
      const parsed = JSON.parse(data) as Story;
      setData(parsed);
    });
  }, []);

  return (
    <div>
      <div>{data.title} </div>
      <div> {data.text}</div>
    </div>
  );
}
