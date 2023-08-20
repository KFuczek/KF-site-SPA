import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [state, setState] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value: any) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
      const valueToStore = value instanceof Function ? value(state) : value;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue] as const;
};

export default useLocalStorage;
