import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { dynamoDb } from '../../resources/dynamodb'

const deleteUserFuction = async (event) => {

  try {
    const id = event.pathParameters.id;

    const params = {
      TableName: 'user-table',
      Key: {
        id
      }
    }

    const deleteUser = await dynamoDb.delete(params).promise();
    console.log(deleteUser);
    
    return formatJSONResponse({
      message: `Success`,
      event,
    }, 200);
  } catch (err) {
    console.log(err)
    return formatJSONResponse({
      message: err,
      event,
    }, 500);
  }
  
}

export const deleteUserHandler = middyfy(deleteUserFuction);