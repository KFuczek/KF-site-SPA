import { getQuoteByIdFromApi } from '@/src/backend-controllers/getQuotes';

export async function GET(request: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
  const { searchParams } = new URL(request.url);
  const index = Number(searchParams.get('number'));
  const quote = await getQuoteByIdFromApi(index);

  return new Response(JSON.stringify(quote));
}
