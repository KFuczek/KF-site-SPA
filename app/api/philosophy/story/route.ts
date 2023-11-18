import { NextRequest, NextResponse } from 'next/server';
import { getStory } from '../../../../philosophyBase';
import { getStoryFromApi } from '../../../../src/backend-components/getTextFiles';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title') || '';
  const text = await getStoryFromApi(title, getStory);

  return NextResponse.json({ text, title });
}
