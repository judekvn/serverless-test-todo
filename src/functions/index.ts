// export { default as hello } from './hello';
// export { createRoutine, getRoutine, updateRoutine, deleteRoutine, getAllRoutines } from './routines'
// export { createTask, getTask, updateTask, deleteTask, getAllTasks } from './tasks'
// export { createUser, getUser, updateUser, deleteUser, getAllUsers } from './users'

import hello from './hello'
import { createTask, getTask, updateTask, deleteTask, getAllTasks } from './tasks'
import {createRoutine, getRoutine, updateRoutine, deleteRoutine, getAllRoutines, } from './routines'
import {createUser, getUser, updateUser, deleteUser, getAllUsers } from './users'

const lambdaFunctions = {
    hello,
    createRoutine, getRoutine, updateRoutine, deleteRoutine, getAllRoutines,
    createTask, getTask, updateTask, deleteTask, getAllTasks,
    createUser, getUser, updateUser, deleteUser, getAllUsers
}

export default lambdaFunctions;