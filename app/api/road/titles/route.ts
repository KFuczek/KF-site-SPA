import { NextResponse } from 'next/server';
import { getTitles } from '../../../../roadBase';
import { getTitlesFromApi } from '../../../../src/backend-components/getTitles';

export async function GET() {
  const titles = await getTitlesFromApi(getTitles);
  return NextResponse.json(titles);
}
