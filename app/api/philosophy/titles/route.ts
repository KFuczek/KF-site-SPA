import { NextResponse } from 'next/server';
import { getTitlesFromApi } from '@/src/backend-controllers/getTitles';
import { Titles } from '../../types';

export const dynamic = 'force-dynamic';

export async function GET() {
  const titles = await getTitlesFromApi();

  if (!titles) {
    return NextResponse.json([]);
  }

  try {
    const titlesObject: Titles = JSON.parse(titles.Text) as Titles;
    const {
      category: { philosophy }
    } = titlesObject;
    return NextResponse.json(philosophy);
  } catch (error) {
    console.error('error', error);

    return NextResponse.json([]);
  }
}
