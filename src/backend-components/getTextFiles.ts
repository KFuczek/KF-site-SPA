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

const getStoryFromApi = async (
  title: string,
  getStoryFunc: (
    title: string,
    fileNames: { fileName: string; url: string }[]
  ) => Promise<any>
): Promise<string> => {
  const decodedTitle = decodeURI(title);

  const blobList = (await list()) as BlobList;
  const fileNames = blobList.blobs.map(({ url, pathname }) => {
    return {
      fileName: pathname,
      url
    };
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const story: any = await getStoryFunc(decodedTitle, fileNames);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  const text = (await story?.text()) as unknown as string;

  return text;
};

export { getStoryFromApi };
