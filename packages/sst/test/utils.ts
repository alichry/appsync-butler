import { Stack, App, Table, AppSyncApi } from "@serverless-stack/resources";
import SstLoader from '../lib/SstLoader.js';
import { SstLoaderOptions } from '../lib/types.js'

class SstDummyStack extends Stack {}

interface StackCreationResult {
    dummyStack: SstDummyStack;
    api: AppSyncApi;
    dynamoDbTable: Table['cdk']['table'];
    secondaryDynamoDbTable: Table['cdk']['table'];
}

const createSstDummyStackAndAppsyncApi = (): StackCreationResult => {
    const app = new App();
    const dummyStack = new SstDummyStack(app, 'stack');

    const table = new Table(dummyStack, 'table', {
        fields: { pk: 'string', sk: 'string' },
        primaryIndex: { partitionKey: 'pk', sortKey: 'sk' }
    });
    const secondaryTable = new Table(dummyStack, 'table2', {
        fields: { pk: 'string', sk: 'string' },
        primaryIndex: { partitionKey: 'pk', sortKey: 'sk' }
    });

    const api = new AppSyncApi(dummyStack, 'api', {
        dataSources: {
            myTable: { type: 'dynamodb', table },
            test: { type: 'dynamodb', table: secondaryTable }
        }
    });

    return {
        dummyStack,
        api: api,
        dynamoDbTable: table.cdk.table,
        secondaryDynamoDbTable: secondaryTable.cdk.table
    };
}

export const loadSst = (
    opts: Omit<SstLoaderOptions, 'api'>, noDefault = false
): StackCreationResult & { loader: SstLoader } => {
    const { dummyStack, api, dynamoDbTable, secondaryDynamoDbTable } =
        createSstDummyStackAndAppsyncApi();
    
    const loader = new SstLoader(dummyStack, {
        api,
        defaultFunctionDataSource: noDefault ? undefined : 'myTable',
        defaultUnitResolverDataSource: noDefault ? undefined : 'myTable',
        ...opts
    });

    loader.load();
    
    return {
        dummyStack,
        api,
        loader,
        dynamoDbTable,
        secondaryDynamoDbTable
    };
}
