import { 
    GraphqlApi,
    BaseDataSource,
    MappingTemplate,
    AppsyncFunction,
    BaseResolverProps,
} from '@aws-cdk/aws-appsync-alpha';
import type { Construct } from "constructs";
import Builder from "../builder/Builder.js";
import type { DataSource, LoaderOptions } from "./types.js";
import { ResolverType } from "../reader/types.js";
import { ParsedFunctionInfo, ParsedResolverInfo, ParsedUnitResolverInfo } from '../parser/types.js';
import { DataSourceNotFoundError, FunctionNotFoundError } from "./errors.js";

/**
 * Load resolvers into an AppSync GraphQL API construct.
 * 
 * ```ts
 * import { Loader } from '@appsync-butler/core';
 * import { GraphqlApi } from '@aws-cdk/aws-appsync-alpha';
 * import { Table } from '@aws-cdk/aws-dynamodb';
 * 
 * const graphqlApi = new GraphqlApi(...);
 * const userTable = new Table(...);
 * const orderTable = new Table(...);
 * const userDs = graphqlApi.addDynamoDbDataSource('userDs', table);
 * const orderDs = graphqlApi.addDynamoDbDataSource('orderDs', table);
 * 
 * const loader = new Loader(appStack, {
 *   api: graphqlApi,
 *   defaultUnitResolverDataSource: tableDs,
 *   defaultFunctionDataSource: 'none',
 *   dataSources: {
 *     orders: orderDs
 *   },
 *   variables: {
 *     tableName: table.tableName
 *   }
 * });
 * loader.load();
 * ```
 */
export default class Loader {
    
    /**
     * The underlying builder instance that is responsible for building the resolver
     * tree and function dictionary.
     */
    public readonly builder: Builder;

    /**
     * The created Appsync Functions. Only populated after loading.
     */
    public readonly functions: Record<string, AppsyncFunction> = {};

    /**
     * The passed scope. Used when creating Appsync Functions
     */
    protected readonly scope: Construct;

    /**
     * The passed API instance.
     */
    protected readonly api: GraphqlApi;

    /**
     * The passed default function data source.
     */
    public readonly defaultFunctionDs?: DataSource;

    /**
     * The passed default unit resolver data source.
     */
    public readonly defaultUnitResolverDs?: DataSource;

    /**
     * Data source dictionary
     */
    protected readonly dataSources?: Record<string, BaseDataSource>;

    /**
     * None data source object. Created and reused when necessary.
     */
    protected noneDs?: BaseDataSource;

    private loaded = false;

    /**
     * 
     * @param scope A CDK construct. Usually, it is the stack instance.
     * @param options Loading, parsing, or reading directives.
     */
    constructor(scope: Construct, options: LoaderOptions) {
        this.api = options.api;
        this.defaultFunctionDs = options.defaultFunctionDataSource;
        this.defaultUnitResolverDs = options.defaultUnitResolverDataSource;
        this.dataSources = options.dataSources;
        this.builder = new Builder(options);
        this.scope = scope;
    }

    /**
     * Load on-disk resolvers and functions into AppSync.
     */
    public load(): void {
        if (this.loaded) {
            return;
        }
        this.builder.build();
        this.loadFunctions();
        this.loadResolvers();
        this.loaded = true;
    }

    protected loadResolvers(): void {
        Object.values(this.builder.resolvers).forEach(fields => {
            Object.values(fields).forEach(resolver => this.addResolver(resolver))
        });
    }

    protected loadFunctions() {
        Object.values(this.builder.functions)
            .forEach((func) => this.addFunction(func));
    }

    protected addResolver(resolver: ParsedResolverInfo): void {
        let dataSource: BaseDataSource | undefined;
        if (resolver.resolverType === ResolverType.Unit) {
            dataSource = this.resolveDataSource(this.getUnitResolverDataSource(resolver));
        }
        this.api.createResolver({
            typeName: resolver.typeName,
            fieldName: resolver.fieldName,
            dataSource,
            ...this.getResolverProps(resolver)
        });
    }

    protected addFunction(func: ParsedFunctionInfo): void {
        this.functions[func.name] = new AppsyncFunction(
            this.scope,
            `appsync-func-${func.name}`,
            {
                api: this.api,
                dataSource: this.resolveDataSource(this.getFunctionDataSource(func)),
                name: func.name,
                description: func.description?.data,
                requestMappingTemplate: MappingTemplate.fromString(func.requestMappingTemplate.data),
                responseMappingTemplate: MappingTemplate.fromString(func.responseMappingTemplate.data)
            }
        );
    }

    protected getResolverProps(
        resolver: ParsedResolverInfo
    ): Omit<BaseResolverProps, "fieldName" | "typeName"> {
        if (resolver.resolverType === ResolverType.Unit) {
            return {
                requestMappingTemplate: MappingTemplate.fromString(resolver.requestMappingTemplate.data),
                responseMappingTemplate: MappingTemplate.fromString(resolver.responseMappingTemplate.data)
            };
        }
        const before = this.getMappingTemplate(resolver.beforeMappingTemplate?.data);
        const appsyncFunctions = resolver.functionSequence.map(
            name => this.getAppSyncFunction(name)
        );
        const after = this.getMappingTemplate(resolver.afterMappingTemplate?.data);
        return {
            pipelineConfig: appsyncFunctions,
            requestMappingTemplate: before,
            responseMappingTemplate: after
        };
    }

    protected getUnitResolverDataSource(resolver: ParsedUnitResolverInfo): string | NonNullable<this['defaultUnitResolverDs']> {
        if (resolver.dataSource) {
            return resolver.dataSource;
        }
        if (! this.defaultUnitResolverDs) {
            this.throwNoDefaultUnitDataSourceFound(resolver);
        }
        return this.defaultUnitResolverDs as NonNullable<this['defaultUnitResolverDs']>;
    }

    protected getFunctionDataSource(func: ParsedFunctionInfo): string | NonNullable<this['defaultFunctionDs']> {
        if (func.dataSource) {
            return func.dataSource;
        }
        if (! this.defaultFunctionDs) {
            this.throwNoDefaultFunctionDataSourceFound(func);
        }
        return this.defaultFunctionDs as NonNullable<this['defaultFunctionDs']>;
    }

    protected getAppSyncFunction(name: string): AppsyncFunction {
        const res = this.functions[name];
        if (! res) {
            throw new FunctionNotFoundError(`Unable to find AppSync function '${name}'`, name);
        }
        return res;
    }

    protected getMappingTemplate(data: string): MappingTemplate;
    protected getMappingTemplate(data: undefined): undefined;
    protected getMappingTemplate(data: string | undefined): MappingTemplate | undefined;
    protected getMappingTemplate(data: string | undefined): MappingTemplate | undefined {
        if (! data) {
            return;
        }
        return MappingTemplate.fromString(data);
    }

    protected resolveDataSource(ds: DataSource): BaseDataSource {
        if (ds instanceof BaseDataSource) {
            return ds;
        }
        return this.resolveStringDataSource(ds);
    }

    protected resolveStringDataSource(ds: string): BaseDataSource {
        if (ds === 'none') {
            return this.getNoneDs();
        }
        const res = this.dataSources && this.dataSources[ds];
        if (! res) {
            throw new DataSourceNotFoundError(
                `Data source '${ds}' was not found! Make sure to pass a ` +
                'key-value object of dataSources during instantialization.',
                ds
            );
        }
        return res;
    }

    protected getNoneDs(): BaseDataSource {
        if (this.noneDs) {
            return this.noneDs;
        }
        this.noneDs = this.api.addNoneDataSource('none');
        return this.noneDs;
    }

    protected throwNoDefaultUnitDataSourceFound(
        noDataSourceResolver: ParsedUnitResolverInfo
    ): never {
        const { typeName, fieldName, requestMappingTemplate } = noDataSourceResolver;
        throw new DataSourceNotFoundError(
            'No default unit resolver data source was provided. This occurs when ' +
            'a unit resolver does not have an explicitly associated data source. ' +
            'Check your resolvers for any missing data source association, or ' +
            'provide a default unit resolver data source. ' +
            `Check the request mapping template of the ${typeName}.${fieldName} resolver ` +
            `(path: ${requestMappingTemplate.path})`,
            '@unit-resolver-default-ds'
        );
    }

    protected throwNoDefaultFunctionDataSourceFound(
        noDataSourceFunction: ParsedFunctionInfo
    ): never {
        const { name, requestMappingTemplate } = noDataSourceFunction;
        throw new DataSourceNotFoundError(
            'No default function data source was provided. This occurs when ' +
            'a function does not have an explicitly associated data source. ' +
            'Check your functions for any missing data source association, or ' +
            'provide a default function data source.' + 
            `Check the request mapping template of the ${name} function ` +
            `(path: ${requestMappingTemplate.path})`,
            '@function-default-ds'
        );
    }
}