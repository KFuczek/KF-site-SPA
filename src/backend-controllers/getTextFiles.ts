import { queryItem } from '../../dataBase';
import { DB_object, StandardTextItem } from '@/src/backend-controllers/types';

const getTextFilesFromApi = async (
  tableName: string,
  title: string
): Promise<StandardTextItem | null> => {
  let text: DB_object<StandardTextItem> | null = null;
  const config = {
    TableName: tableName,
    Key: {
      Title: title
    }
  };
  try {
    text = (await queryItem(config)) as DB_object<StandardTextItem>;
  } catch (err) {
    console.error(err);

    return null;
  }

  return text.Item;
};

export { getTextFilesFromApi };
