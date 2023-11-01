import {
  addToLocalStorage,
  getFromLocalStorageWithExpireTime,
  removeFromLocalStorage
} from '../../localStorage';

export const getHTTPGet = async (url: string) => {
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
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const getHTTPGetWithCache = async (url: string, revalidate = 3600) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'force-cache',
    // revalidate,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const getHTTPGetWithLocalStorage = async (
  key: string,
  url: string,
  revalidate = 3600
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
): Promise<any> => {
  const data = getFromLocalStorageWithExpireTime(key, revalidate);
  if (data) {
    console.log('from storage');
    return data;
  }
  console.log('from api');
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
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const parsedResponse = (await response.json()) as never;

  removeFromLocalStorage(key);
  addToLocalStorage(key, parsedResponse);

  return parsedResponse;
};

export const getHTTPGetBlob = async (url: string) => {
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
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response;
};
