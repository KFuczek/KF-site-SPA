import { queryItem } from '../../dataBase';
import { DB_object, StandardTextItem } from '@/src/backend-controllers/types';

const getTitlesFromApi = async (): Promise<StandardTextItem | null> => {
  let titles: DB_object<StandardTextItem> | null = null;
  const config = {
    TableName: 'KF-texts',
    Key: {
      Title: 'menu'
    }
  };
  try {
    titles = (await queryItem(config)) as DB_object<StandardTextItem>;
  } catch (err) {
    console.error(err);

    return null;
  }

  return titles.Item;
};

export { getTitlesFromApi };
