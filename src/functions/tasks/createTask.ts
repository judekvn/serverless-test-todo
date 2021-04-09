import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
// import { dynamoDb } from '../../resources/dynamodb'

const createTaskFuction = async (event) => {

  try {
    return formatJSONResponse({
      message: `Hello ${event.body.name} from createTask`,
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

export const createTaskHandler = middyfy(createTaskFuction);