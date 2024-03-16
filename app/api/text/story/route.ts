import { NextRequest, NextResponse } from 'next/server';
import { getTextFilesFromApi } from '@/src/backend-controllers/getTextFiles';

export const dynamic = 'force-dynamic';

const getDatabaseName = (type: string): string => {
  switch (type) {
    case 'philosophy':
      return 'Philosophy';
    case 'stories':
      return 'Stories';
    case 'road':
      return 'Road';
    case 'religion':
      return 'Religion';
    default:
      return '';
  }
};

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title') || '';
  const type = request.nextUrl.searchParams.get('type') || '';

  const tableName = getDatabaseName(type);

  const text = await getTextFilesFromApi(tableName, title);

  return NextResponse.json(text);
}
