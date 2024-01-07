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
    const { roadId } = params;
    const parameters = new URLSearchParams({
      title: roadId
    }) as unknown as string;

    void getHTTPGetWithLocalStorage(
      roadId,
      `/api/road/story?${parameters}`,
      3600 * 24
    ).then((data: TextObject) => {
      setTitle(data.Title);
      setText(data.Text);
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
