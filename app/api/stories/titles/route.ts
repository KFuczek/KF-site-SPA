import { NextResponse } from 'next/server';
import { list } from '@vercel/blob';
import { getTitles } from '../../../../storiesBase';

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

export async function GET() {
  const blobList = (await list()) as BlobList;
  console.log(blobList);
  const fileNames = blobList.blobs.map(({ pathname }) => pathname);

  const titles = getTitles(fileNames);
  return NextResponse.json(titles);
}
