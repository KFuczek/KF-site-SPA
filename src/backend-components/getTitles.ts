import { list } from '@vercel/blob';

interface Blob {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: Date;
}

interface BlobList {
  hasMore: boolean;
  blobs: Blob[];
}

const getTitlesFromApi = async (
  getTitlesFunc: (filenames: string[]) => string[]
) => {
  const blobList = (await list()) as BlobList;
  const fileNames = blobList.blobs.map(({ pathname }) => pathname);
  const titles = getTitlesFunc(fileNames);
  return titles;
};

export { getTitlesFromApi };
