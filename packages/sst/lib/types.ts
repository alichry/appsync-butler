import type { AppSyncApi as SstAppSyncApi } from '@serverless-stack/resources';
import { ParserOptions } from '@appsync-butler/core';

export interface SstLoaderOptions extends ParserOptions {
    sstApi: SstAppSyncApi;
    api?: never;
    defaultFunctionDataSource?: string | 'none';
    defaultUnitResolverDataSource?:  string | 'none';
    dataSources?: never;
}