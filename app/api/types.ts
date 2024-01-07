export interface Titles {
  category: TitlesCategory;
}

interface TitlesCategory {
  philosophy: TitlesPair[];
  stories: TitlesPair[];
  road: TitlesPair[];
}

type TitlesPair = [string, string];
