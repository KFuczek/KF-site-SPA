import { NextRequest, NextResponse } from 'next/server';
import { getStory } from '../../../../storiesBase';
import { getStoryFromApi } from '../../../../src/backend-components/getTextFiles';
//import { promises as fs } from 'fs';
import { put } from '@vercel/blob';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title') || '';
  const text = await getStoryFromApi(title, getStory);

  return NextResponse.json({ text, title });
}

// export async function POST(request: NextRequest) {
//   if (String(request.url) !== 'http://localhost:3000/api/stories/story') {
//     return;
//   }
//
//   const fileName = 'philo-1';
//
//   const file = await fs.readFile(
//     process.cwd() + `/philosophyBase/${fileName}.txt`,
//     'utf8'
//   );
//
//   const blob = await put(fileName, file, { access: 'public' });
//
//   return NextResponse.json({ text: 'Blob set', blob });
// }

//
// export async function DELETE(request: NextRequest) {
//   if (String(request.url) == 'localhost:3000') {
//     return;
//   }
//
//   const urlToDelete = request.nextUrl.searchParams.get('url');
//
//    await del(urlToDelete);
//
//   return NextResponse.json({ text: 'Blob removed', urlToDelete });
// }
