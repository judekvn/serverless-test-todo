import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
// import { dynamoDb } from '../../resources/dynamodb'

const getTaskFuction = async (event) => {

  try {
      console.log(event)
    return formatJSONResponse({
      message: `Hello ${event.queryStringParameters.name} from getTask`,
      event,
    });
  } catch (err) {
    console.log(err)
    return formatJSONResponse({
      message: err,
      event,
    });
  }
  
}

export const getTaskHandler = middyfy(getTaskFuction);