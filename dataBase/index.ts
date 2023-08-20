import quotes from './quotes';

const getObject = (dataBaseName: string, objectNumber: number) => {
  if (dataBaseName === 'quotes' && objectNumber < quotes.length) {
    return quotes[objectNumber];
  }
};

const getLength = (dataBaseName: string) => {
  if (dataBaseName === 'quotes') return quotes.length;
};

export { getObject, getLength };
