import { queryItem } from '@/dataBase';
import {
  DB_object,
  StandardTextItem,
  Quote
} from '@/src/backend-controllers/types';

const getQuotesFromApi = async (): Promise<StandardTextItem | null> => {
  let quotes: DB_object<StandardTextItem> | null = null;
  const config = {
    TableName: 'Various',
    Key: {
      Title: 'quotes'
    }
  };

  try {
    quotes = (await queryItem(config)) as DB_object<StandardTextItem>;
  } catch (err) {
    console.error(err);

    return null;
  }

  return quotes.Item;
};

const getQuoteByIdFromApi = async (index: number): Promise<Quote> => {
  const defaultQuote = {
    Text: 'This is your daily quote enjoy :)',
    Author: 'Fuczkins'
  };

  const allQuotes = (await getQuotesFromApi()) || defaultQuote;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const quotesArray: Quote[] = JSON.parse(allQuotes.Text);

  const allQuotesLength = quotesArray.length || 0;
  const currentIndex =
    index >= allQuotesLength ? index % allQuotesLength : index;
  return quotesArray[currentIndex] || defaultQuote;
};

export { getQuoteByIdFromApi };
