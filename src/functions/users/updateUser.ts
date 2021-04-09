import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { dynamoDb } from '../../resources/dynamodb'

const updateUserFuction = async (event) => {

  try {
    const timestamp = new Date().getTime()
    const data = event.body;
    const id = event.pathParameters.id;

    const params = {
      TableName: 'user-table',
      Key: { id },
      UpdateExpression: `set #userN = :userN, #pwd = :pwd, #em = :em, updatedAt = :ts`,
      ExpressionAttributeNames: {
        '#userN': 'name',
        '#pwd': 'password',
        '#em': 'email'
      },
      ExpressionAttributeValues: {
        ':userN': data.name,
        ':pwd': data.password,
        ':em': data.email,
        ':ts': timestamp
      },
      ReturnValues: 'UPDATED_NEW'
    }

    const updateUser = await dynamoDb.update(params).promise()
    console.log(updateUser);

    return formatJSONResponse({
      message: `Success`,
      event,
      data: updateUser
    }, 200);

  } catch (err) {
    console.log(err)
    return formatJSONResponse({
      message: 'Internal server error',
      event,
    }, 500);
  }
  
}

export const updateUserHandler = middyfy(updateUserFuction);