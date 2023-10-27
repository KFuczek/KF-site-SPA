import { NextRequest, NextResponse } from 'next/server';
import { getStory } from '../../../../storiesBase';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title') || '';
  const decodedTitle = decodeURI(title);
  const story = await getStory(decodedTitle);
  return NextResponse.json(story);
}
