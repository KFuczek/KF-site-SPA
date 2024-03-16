import { NextRequest, NextResponse } from 'next/server';
import { getTitlesFromApi } from '@/src/backend-controllers/getTitles';
import { Titles } from '../../types';

export const dynamic = 'force-dynamic';

const getMenuName = (type: string): string => {
  switch (type) {
    case 'philosophy':
      return 'philosophy_menu';
    case 'stories':
      return 'stories_menu';
    case 'road':
      return 'road_menu';
    case 'religion':
      return 'religion_menu';
    default:
      return '';
  }
};

export async function GET(request: NextRequest) {
  const menuType = request.nextUrl.searchParams.get('type') || '';

  const menuName = getMenuName(menuType);

  const titles = await getTitlesFromApi(menuName);

  if (!titles) {
    return NextResponse.json([]);
  }

  try {
    const titlesObject: Titles = JSON.parse(titles.Text) as Titles;
    const { items } = titlesObject;

    return NextResponse.json(items);
  } catch (error) {
    console.error('error', error);

    return NextResponse.json([]);
  }
}
