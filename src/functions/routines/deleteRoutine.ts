import 'source-map-support/register';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
// import { dynamoDb } from '../../resources/dynamodb'

const deleteRoutineFuction = async (event) => {

  try {
    return formatJSONResponse({
      message: `Hello ${event.body.name} from deleteRoutine`,
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

export const deleteRoutineHandler = middyfy(deleteRoutineFuction);