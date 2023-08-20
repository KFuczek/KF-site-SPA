import { getObject, getLength } from '../../../dataBase';

export function GET(request: any) {
  const defaultQuote = {
    text: 'This is your daily quote enjoy :)',
    author: 'fuczkins'
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  const { searchParams } = new URL(request.url);
  const index = Number(searchParams.get('number'));

  const allQuotesLength = getLength('quotes') || 0;
  const currentIndex =
    index >= allQuotesLength ? index % allQuotesLength : index;
  const newQuote = getObject('quotes', currentIndex) || defaultQuote;

  return new Response(JSON.stringify(newQuote));
}
