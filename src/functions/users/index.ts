import { handlerPath } from '@libs/handlerResolver';


export const createUser = {
  handler: `${handlerPath(__dirname)}/createUser.createUserHandler`,
  events: [
    {
      http: {
        method: 'post',
        path: 'user',
      }
    }
  ]
}

export const getAllUsers = {
  handler: `${handlerPath(__dirname)}/getAllUsers.getAllUsersHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user',
      }
    }
  ]
}

export const getUser = {
  handler: `${handlerPath(__dirname)}/getUser.getUserHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'user/{id}',
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

export const updateUser = {
  handler: `${handlerPath(__dirname)}/updateUser.updateUserHandler`,
  events: [
    {
      http: {
        method: 'put',
        path: 'user/{id}',
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

export const deleteUser = {
  handler: `${handlerPath(__dirname)}/deleteUser.deleteUserHandler`,
  events: [
    {
      http: {
        method: 'delete',
        path: 'user/{id}',
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

