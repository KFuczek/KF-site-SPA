import { NextRequest, NextResponse } from 'next/server';
import { list } from '@vercel/blob';
//import { put, del, list } from '@vercel/blob';
//import { promises as fs } from 'fs';
import { getStory } from '../../../../storiesBase';

interface Story {
  text: string;
  title: string;
}

interface Blob {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

interface BlobList {
  hasMore: boolean;
  blobs: Blob[];
}

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title') || '';
  const decodedTitle = decodeURI(title);

  const blobList = (await list()) as BlobList;
  const fileNames = blobList.blobs.map(({ url, pathname }) => {
    return {
      fileName: pathname,
      url
    };
  });

  const story = await getStory(decodedTitle, fileNames);
  const text = (await story?.text()) as string;

  return NextResponse.json({ text, title });
}

// export async function POST(request: NextRequest) {
//   if (String(request.url) == 'localhost:3000') {
//     return;
//   }
//
//   const fileName = 'story-2';
//
//   const file = await fs.readFile(
//     process.cwd() + `/storiesBase/${fileName}.txt`,
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
