import { queryItem } from '@/dataBase';
import { DB_object, StandardTextItem } from '@/src/backend-controllers/types';

const getTitlesFromApi = async (
  menuName: string
): Promise<StandardTextItem | null> => {
  let titles: DB_object<StandardTextItem> | null = null;
  const config = {
    TableName: 'Various',
    Key: {
      Title: menuName
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
