import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
// import { dynamoDb } from '../../resources/dynamodb'

const getAllTasksFuction = async (event) => {

  try {
    console.log(event)
    return formatJSONResponse({
      message: `Hello ${event.queryStringParameters.name} from getAllTaskss`,
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

export const getAllTasksHandler = middyfy(getAllTasksFuction);