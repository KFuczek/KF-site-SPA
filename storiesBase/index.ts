import { promises as fs } from 'fs';

const TITLES = new Map([
  ['Pierścień doktora Leukmatzena', 'story-1'],
  ['Zwyczajne życie Pana Arkdiusza I', 'story-2'],
  ['test', 'test']
]);

const getStory = async (storyTitle: string) => {
  if (!TITLES.has(storyTitle)) {
    return null;
  }

  const fileName = TITLES.get(storyTitle) as string;
  try {
    const path = process.cwd();
    const file = await fs.readFile(
      process.cwd() + `/storiesBase/${fileName}.JSON`,
      'utf8'
    );
    console.log('file', file);
    return file;
  } catch (error) {
    const path = process.cwd();
    return { title: path, text: error };
  }
};

const getTitles = (): string[] => {
  const keys = [...TITLES.keys()] as string[];

  return keys;
};

export { getStory, getTitles };
