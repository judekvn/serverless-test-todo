import { handlerPath } from '@libs/handlerResolver';


export const createRoutine = {
  handler: `${handlerPath(__dirname)}/createRoutine.createRoutineHandler`,
  events: [
    {
      http: {
        method: 'post',
        path: 'routine',
      }
    }
  ] 
}


export const getAllRoutines = {
  handler: `${handlerPath(__dirname)}/getAllRoutines.getAllRoutinesHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'routine',
      }
    }
  ] 
}

export const getRoutine = {
  handler: `${handlerPath(__dirname)}/getRoutine.getRoutineHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'routine/{id}',
        request: {
          parameters: {
            paths: {
              id: true
            }
          }
        }
      }
    }
  ] 
}

export const updateRoutine = {
  handler: `${handlerPath(__dirname)}/updateRoutine.updateRoutineHandler`,
  events: [
    {
      http: {
        method: 'put',
        path: 'routine',
      }
    }
  ] 
}

export const deleteRoutine = {
  handler: `${handlerPath(__dirname)}/deleteRoutine.deleteRoutineHandler`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'routine',
      }
    }
  ] 
}
