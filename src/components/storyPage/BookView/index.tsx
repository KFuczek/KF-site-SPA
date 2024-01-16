'use client';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getHTTPGetWithLocalStorage } from '../../../helpers/url-helpers';
import { TextObject } from '../../../types/backendTextTypes';

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

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title} </div>
        <div className={styles.text}> {text}</div>
      </div>
    </div>
  );
}
