import type { AppSyncApi as SstAppSyncApi } from '@serverless-stack/resources';
import { ParserOptions } from '@appsync-butler/core';

export interface SstLoaderOptions extends ParserOptions {
    api: SstAppSyncApi;
    defaultFunctionDataSource?: string | 'none';
    defaultUnitResolverDataSource?:  string | 'none';
    dataSources?: never;
}