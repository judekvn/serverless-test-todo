import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { dynamoDb } from '../../resources/dynamodb'

const getAllUsersFuction = async (event) => {

  try {
    console.log(event)
    const params = {
      TableName: 'user-table'
    }

    const users = await dynamoDb.scan(params).promise();

    return formatJSONResponse({
      message: `Success`,
      event,
      data: users
    }, 200);

  } catch (err) {
    console.log(err)
    return formatJSONResponse({
      message: 'Internal server error',
      event,
    }, 500);
  }
  
}

export const getAllUsersHandler = middyfy(getAllUsersFuction);