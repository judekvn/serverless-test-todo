import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { dynamoDb } from '../../resources/dynamodb'
import { v4 as uuidv4 } from 'uuid';

const createUserFuction = async (event, context) => {

  try {
    console.log(context);
    const timestamp = new Date().getTime();
    const data = event.body;

    const params = {
      TableName: 'user-table',
      Item: {
        id: uuidv4(),
        name: data.name,
        email: data.email,
        password: data.password,
        createdAt: timestamp,
        updatedAt: timestamp
      }
    }

    const newUser = await dynamoDb.put(params).promise();

    console.log(newUser);

    return formatJSONResponse({
      message: `New user created successfully`,
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

export const createUserHandler = middyfy(createUserFuction);