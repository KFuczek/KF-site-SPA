export interface Titles {
  category: TitlesCategory;
}

interface TitlesCategory {
  philosophy: TitlesParameters[];
  stories: TitlesParameters[];
  road: TitlesParameters[];
}

export type TitlesParameters = [string, string, string];
