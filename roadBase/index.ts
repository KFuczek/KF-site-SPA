import { getHTTPGetBlob } from '../src/helpers/url-helpers';

interface StoryURL {
  url: string;
  fileName: string;
}

const TITLES_FILE_NAMES = new Map([['road-1', 'małżeństwo']]);

const getStory = async (storyTitle: string, storyURLS: StoryURL[]) => {
  const requiredFileName = [...TITLES_FILE_NAMES].find(
    ([, value]) => storyTitle === value
  )?.[0];

  const requiredUrl = storyURLS.find(
    storyUrl => storyUrl.fileName === requiredFileName
  );

  try {
    const file = getHTTPGetBlob(requiredUrl?.url || '');

    return file;
  } catch (error) {
    return { text: error };
  }
};

const getTitles = (fileNames: string[]): string[] => {
  const titles = fileNames.map(
    fileName => TITLES_FILE_NAMES.get(fileName) || ''
  );

  return titles.filter(titles => titles);
};

export { getStory, getTitles };
