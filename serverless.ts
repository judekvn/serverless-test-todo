import type { AWS } from '@serverless/typescript';

import dynamoDbTables from './src/resources/dynamodb-tables';
// import hello from '@functions/hello';
// import { createRoutine, getAllRoutines, getRoutine, updateRoutine, deleteRoutine } from '@functions/routines'
// import { createTask, getAllTasks, getTask, updateTask, deleteTask } from '@functions/tasks'
// import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '@functions/users'
import lambdaFunctions from '@functions/index'

const serverlessConfiguration: AWS = {
  
  service: 'test',
  frameworkVersion: '2',

  /*----------------- CUSTOM ------------------ */
  custom: {

    //---DynamoDB
    region: '${opt:region, self:provider.region}',
    stage: '${opt:stage, self:provider.stage}',
    user_table: '${self:service}-user-table-${opt:stage, self:provider.stage}',
    routine_table: '${self:service}-routine-table-${opt:stage, self:provider.stage}',
    tasks_table: '${self:service}-tasks-table-${opt:stage, self:provider.stage}',
    table_throughputs: {
      prod: 5,
      default: 1,
    },
    table_throughput: '${self:custom.TABLE_THROUGHPUTS.${self:custom.stage}, self:custom.table_throughputs.default}',
    dynamodb: {
      stages: ['dev'],
      start: {
        port: 8008,
        inMemory: true,
        heapInitial: '200m',
        heapMax: '1g',
        migrate: true,
        seed: true,
        convertEmptyValues: true,
        // Uncomment only if you already have a DynamoDB running locally
        // noStart: true
      }
    },

    //---webpack
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },

  /*----------------- PLUGINS ------------------ */
  plugins: [
    'serverless-webpack',
    'serverless-dotenv-plugin',
    'serverless-dynamodb-local',
    'serverless-offline',
  ],

  /*----------------- PROVIDER ------------------ */
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'ap-south-1',
    
    //---apiGateway
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },

    //---environment
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      REGION: '${self:custom.region}',
      STAGE: '${self:custom.stage}',
      USER_TABLE: '${self:custom.user_table}',
      ROUTINE_TABLE: '${self:custom.routine_table}',
      TASKS_TABLE: '${self:custom.tasks_table}',
    },

    lambdaHashingVersion: '20201221',

    //---iamRoleStatements
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:DescribeTable',
          'dynamodb:Query',
          'dynamodb:Scan',
          'dynamodb:GetItem',
          'dynamodb:PutItem',
          'dynamodb:UpdateItem',
          'dynamodb:DeleteItem'
        ],
        Resource: [
          { "Fn::GetAtt": ['RoutineTable', 'Arn'] },
          { "Fn::GetAtt": ['TasksTable', 'Arn'] }
        ]
      }
    ]
  },
  
  /*----------------- FUNCTIONS ------------------ */
  functions: {
    ...lambdaFunctions
    // hello,
    // createRoutine, getAllRoutines, getRoutine, updateRoutine, deleteRoutine,
    // createTask, getAllTasks, getTask, updateTask, deleteTask,
    // createUser, getAllUsers, getUser, updateUser, deleteUser,
  },

  /*----------------- RESOURCES ------------------ */
  resources: {
    Resources: dynamoDbTables
  }
};

module.exports = serverlessConfiguration;
