interface DataWithTime {
  time: Date;
  data: string;
}

export const addToLocalStorage = (key: string, data: never): void => {
  const dateWithTime = {
    data,
    time: new Date().getTime()
  };
  localStorage.setItem(key, JSON.stringify(dateWithTime));
};

export const getFromLocalStorage = (key: string): DataWithTime | null => {
  const data = localStorage.getItem(key) as string;

  if (!data) {
    return null;
  }

  return JSON.parse(data) as DataWithTime;
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const checkDataIsExpired = (
  date: Date,
  expireTime = 60 * 60 * 24
): boolean => {
  const expireTimeInMs = expireTime * 1000;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  return new Date().getTime() - date < expireTimeInMs;
};

export const getFromLocalStorageWithExpireTime = (
  key: string,
  expireTime: number
): string | null => {
  const localStorageData = getFromLocalStorage(key);
  if (!localStorageData) {
    return null;
  }

  const { data, time } = localStorageData;
  const isExpired = checkDataIsExpired(time, expireTime);

  if (isExpired) {
    return null;
  }

  return data;
};
