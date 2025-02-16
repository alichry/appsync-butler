import type { AppSyncApi as SstAppSyncApi } from '@serverless-stack/resources';
import { Loader,
    ResolverType,
    ParsedResolverInfo,
    DataSourceNotFoundError
} from "@appsync-butler/core";
import type { SstLoaderOptions } from './types.js';

/**
 * Load resolvers into an SST AppSyncAPI construct.
 * 
 * ```ts
 * import { SstLoader } from '@appsync-butler/sst';
 * import { Table, AppSyncApi } from '@serverless-stack/resources';
 * 
 * const table = new Table(...);
 * 
 * const api = new AppSyncApi(myStack, "api", {
 *   dataSources: { myTable: { table } }
 * });
 * 
 * const loader = new SstLoader(myStack, {
 *   api,
 *   defaultUnitResolverDataSource: 'myTable',
 *   defaultFunctionDataSource: 'none',
 *   variables: {
 *     tableName: table.dynamodbTable.tableName
 *   }
 * })
 * ```
 */
export default class SstLoader extends Loader {

    /**
     * @inheritdoc
     */
    protected sstApi: SstAppSyncApi;

    /** 
     * @inheritdoc
     */
    public readonly defaultUnitResolverDs?: string | 'none';

    /**
     * @inheritdoc
     */
    public readonly defaultFunctionDs?: string | 'none';

    constructor(scope: Loader['scope'], options: SstLoaderOptions) {
        super(scope, { ...options, api: options.api.cdk.graphqlApi });
        this.sstApi = options.api;
    }

    protected resolveStringDataSource(
        ds: string
    ): ReturnType<Loader['resolveStringDataSource']> {
        if (ds === 'none') {
            return this.getNoneDs();
        }
        const res = this.sstApi.getDataSource(ds);
        if (! res) {
            this.throwDataSourceKeyNotFound(ds);
        }
        return res;
    }

    /**
     * {@link http://github.com/serverless-stack/serverless-stack/issues/1115}
     * @param resolver
     */
    protected addResolver(resolver: ParsedResolverInfo): void {
        let dataSource = "";
        if (resolver.resolverType === ResolverType.Unit) {
            dataSource = this.getUnitResolverDataSource(resolver);
            if (dataSource === 'none') {
                super.addResolver(resolver);
                return;
            }
            if (! this.sstApi.getDataSource(dataSource)) {
                this.throwDataSourceKeyNotFound(dataSource);
            }
        }
        const resolverProps = this.getResolverProps(resolver);
        this.sstApi.addResolvers(this.scope, {
            [`${resolver.typeName} ${resolver.fieldName}`]: {
                dataSource,
                cdk: { resolver: resolverProps }
            }
        });
    }

    protected throwDataSourceKeyNotFound(ds: string): never {
        throw new DataSourceNotFoundError(
            `Data source '${ds}' was not found! Make sure data ` + 
            'sources are added to the passed SST AppSync API.',
            ds
        );
    }
}