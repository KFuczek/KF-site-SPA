import { NextResponse } from 'next/server';
import { getTitlesFromApi } from '@/src/backend-controllers/getTitles';
import { Titles } from '@/app/api/types';

export async function GET() {
  const titles = await getTitlesFromApi();

  if (!titles) {
    return NextResponse.json([]);
  }

  try {
    const titlesObject: Titles = JSON.parse(titles.Text) as Titles;
    const {
      category: { stories }
    } = titlesObject;

    return NextResponse.json(stories);
  } catch (error) {
    console.error('error', error);

    return NextResponse.json([]);
  }
}
