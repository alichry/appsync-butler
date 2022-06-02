import type { GraphqlApi, BaseDataSource } from '@aws-cdk/aws-appsync-alpha';
import { ParserOptions } from '../parser/types.js';

export type DataSource = BaseDataSource | string | 'none';

export interface LoaderOptions extends ParserOptions {
    api: GraphqlApi;
    defaultFunctionDataSource?: DataSource;
    defaultUnitResolverDataSource?:  DataSource;
    dataSources?: Record<string, BaseDataSource>;
}
