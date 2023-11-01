'use client';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getHTTPGetWithLocalStorage } from '../../../helpers/url-helpers';
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

    void getHTTPGetWithLocalStorage(
      storyId,
      `/api/stories/story?${parameters}`,
      3600 * 24
    ).then((data: any) => {
      const story = data as Story;
      setTitle(story.title);
      setText(story.text);
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
