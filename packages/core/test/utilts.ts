import * as cdk from 'aws-cdk-lib';
import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { GraphqlApi } from '@aws-cdk/aws-appsync-alpha';
import { Loader } from '../lib/loader/index.js';
import { LoaderOptions } from '../lib/loader/types.js';

class CdkDummyStack extends cdk.Stack {}

export const loadCdk = (opts: Omit<LoaderOptions, 'api' | 'dataSources'>, noDefault = false) => {
    const dummyStack = new CdkDummyStack();
    const table = new Table(dummyStack, "dummyTable", {
        partitionKey: { name: "pk", type: AttributeType.STRING }
    });
    const secondaryTable = new Table(dummyStack, "dummyTable2", {
        partitionKey: { name: "pk", type: AttributeType.STRING }
    });
    const api = new GraphqlApi(dummyStack, "appsync", {
        name: "dummyApi"
    });
    const ds = api.addDynamoDbDataSource("myTable", table);
    const secondaryDs = api.addDynamoDbDataSource("test", secondaryTable);
    const loader = new Loader(dummyStack, {
        api,
        defaultFunctionDataSource: noDefault ? undefined : ds,
        defaultUnitResolverDataSource: noDefault ? undefined : ds,
        dataSources: {
            test: secondaryDs
        },
        ...opts
    });
    loader.load();
    return { dummyStack, api, loader, dynamoDbTable: table, secondaryDynamoDbTable: secondaryTable };
}