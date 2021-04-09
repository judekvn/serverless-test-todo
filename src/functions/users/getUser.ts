import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { dynamoDb } from '../../resources/dynamodb'

const getUserFuction = async (event) => {

  try {
    console.log(event);
    const id = event.pathParameters.id;

    const params = {
      TableName: 'user-table',
      Key: {
        id
      }
    }

    const user = await dynamoDb.get(params).promise()
    console.log(user);

    return formatJSONResponse({
      message: `Success`,
      event,
      data: user
    }, 200);
  } catch (err) {
    console.log(err)

    return formatJSONResponse({
      message: 'Internal server error',
      event
    }, 500);
  }
  
}

export const getUserHandler = middyfy(getUserFuction);