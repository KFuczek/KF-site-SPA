export const isOdd = (num: number): boolean => {
  return !!(num % 2); // for test
};

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const generateRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
