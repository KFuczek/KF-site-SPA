'use client';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getHTTPGetWithCache } from '../../../helpers/url-helpers';
import { Story } from '../../../types/story';

export default function BookView() {
  const params = useParams();
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const { storyId } = params;
    const parameters = new URLSearchParams({
      title: storyId
    }) as unknown as string;

    void getHTTPGetWithCache(
      `/api/stories/story?${parameters}`,
      3600 * 24
    ).then((data: Story) => {
      console.log('from server', data);
      setTitle(data.title);
      setText(data.text);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{decodeURI(title)} </div>
        <div className={styles.text}> {text}</div>
      </div>
    </div>
  );
}
