export default {
    UserTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
            // TableName: '${self:provider.environment.USER_TABLE}',
            // DeletionPolicy: 'Retain',
            TableName: 'user-table',
            AttributeDefinitions: [
                { AttributeName: 'id', AttributeType: 'S' }
            ],
            KeySchema: [
                { AttributeName: 'id', KeyType: 'HASH' }
            ],
            ProvisionedThroughput: {
                // ReadCapacityUnits: '${self:custom.TABLE_THROUGHPUT}',
                // WriteCapacityUnits: '${self:custom.TABLE_THROUGHPUT}',
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1
            }
        }
    },
    RoutineTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
            // TableName: '${self:provider.environment.ROUTINE_TABLE}',
            // DeletionPolicy: 'Retain',
            TableName: 'routine-table',
            AttributeDefinitions: [
                { AttributeName: 'id', AttributeType: 'S' }
            ],
            KeySchema: [
                { AttributeName: 'id', KeyType: 'HASH' }
            ],
            ProvisionedThroughput: {
                // ReadCapacityUnits: '${self:custom.TABLE_THROUGHPUT}',
                // WriteCapacityUnits: '${self:custom.TABLE_THROUGHPUT}',
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1
            }
        }
    },
    TasksTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
            // TableName: '${self:provider.environment.TASKS_TABLE}',
            // DeletionPolicy: 'Retain',
            TableName: 'tasks-table',
            AttributeDefinitions: [
                { AttributeName: 'id', AttributeType: 'S' },
                { AttributeName: 'routineId', AttributeType: 'S' }
            ],
            KeySchema: [
                { AttributeName: 'id', KeyType: 'HASH' },
                { AttributeName: 'routineId', KeyType: 'RANGE' }
            ],
            ProvisionedThroughput: {
                // ReadCapacityUnits: '${self:custom.TABLE_THROUGHPUT}',
                // WriteCapacityUnits: '${self:custom.TABLE_THROUGHPUT}',
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1
            },
            /*
            GlobalSecondaryIndexes: [
                {
                    IndexName: 'list_index',
                    KeySchema: [
                        { AttributeName: 'routineId', KeyType: 'HASH' },
                    ],
                    Projection: { // attributes to project into the index
                        ProjectionType: 'ALL' 
                    },
                    ProvisionedThroughput: {
                        ReadCapacityUnits: '${self:custom.table_throughput}',
                        WriteCapacityUnits: '${self:custom.table_throughput}'
                    },
                }
            ]
            */
        }
    }
}
