import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { DB_object } from '@/src/backend-controllers/types';
import { DB_config_query } from '@/dataBase/types';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const queryItem = async (config: DB_config_query): Promise<DB_object<any>> => {
  const command = new GetCommand(config);
  const response = (await docClient.send(command)) as DB_object<any>;

  return response;
};

export { queryItem };
