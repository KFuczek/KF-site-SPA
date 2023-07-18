'use client';
import { useEffect, useState } from 'react';

async function getData(url: string) {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
    //body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default function Testurl() {
  const [data, setData] = useState('');

  useEffect(() => {
    void getData('/api/testApi').then((data: string) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      {' '}
      test url{'->'} {data} {'<-'}
    </div>
  );
}
