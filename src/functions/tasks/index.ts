import { handlerPath } from '@libs/handlerResolver';


export const createTask = {
  handler: `${handlerPath(__dirname)}/createTask.createTaskHandler`,
  events: [
    {
      http: {
        method: 'post',
        path: 'task',
      }
    }
  ]
}

export const getAllTasks = {
  handler: `${handlerPath(__dirname)}/getAllTasks.getAllTasksHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'task',
      }
    }
  ]
}

export const getTask = {
  handler: `${handlerPath(__dirname)}/getTask.getTaskHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'task/{id}',
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

export const updateTask = {
  handler: `${handlerPath(__dirname)}/updateTask.updateTaskHandler`,
  events: [
    {
      http: {
        method: 'put',
        path: 'task',
      }
    }
  ]
}

export const deleteTask = {
  handler: `${handlerPath(__dirname)}/deleteTask.deleteTaskHandler`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'task',
      }
    }
  ]
}

