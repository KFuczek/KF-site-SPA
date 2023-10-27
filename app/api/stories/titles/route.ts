import { NextResponse } from 'next/server';
import { getTitles } from '../../../../storiesBase';

export function GET() {
  const titles = getTitles();
  return NextResponse.json(titles);
}
