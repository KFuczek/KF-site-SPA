import { NextRequest, NextResponse } from 'next/server';
import { getTextFilesFromApi } from '@/src/backend-controllers/getTextFiles';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title') || '';
  const text = await getTextFilesFromApi(title);

  return NextResponse.json(text);
}
