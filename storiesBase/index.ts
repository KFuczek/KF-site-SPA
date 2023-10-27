import { promises as fs } from 'fs';

const TITLES = new Map([
  ['Pierścień doktora Leukmatzena', 'story-1'],
  ['Zwyczajne życie Pana Arkdiusza I', 'story-2']
]);

const getStory = async (storyTitle: string) => {
  if (!TITLES.has(storyTitle)) {
    return null;
  }

  const fileName = TITLES.get(storyTitle) as string;
  const file = await fs.readFile(
    process.cwd() + `/storiesBase/${fileName}.JSON`,
    'utf8'
  );
  return file;
};

const getTitles = (): string[] => {
  const keys = [...TITLES.keys()] as string[];

  return keys;
};

export { getStory, getTitles };
