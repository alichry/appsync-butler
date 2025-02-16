# AppSync Butler (SST)

> AppSync Butler is an AppSync (GraphQL) API development framework, compatible with
> AWS Cloud Development Kit and Serverless Stack Toolkit. Visit the
> [homepage](https://github.com/alichry/appsync-butler#readme) for more
> information.

This package is concerned with loading on-disk resolvers into 
SST AppSync API constructs. This is not necessarily required 
when using SST, you can still load on-disk resolvers and functions 
using [`@appsync-butler/core`](../core/README.md) only:

```ts  title="stacks/MyStack.ts"
import { Loader } from '@appsync-butler/core';
import { StackContext, AppSyncApi, Table } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
	const table = new Table(stack, 'table', {
		fields: { pk: "string" },
		primaryIndex: { partitionKey: "pk" }
	});
	const api = new AppSyncApi(stack, 'api', {
		schema: 'graphql/index.graphql',
		dataSources: {
			sstTableDs: { type: "dynamodb", table }
		}
	});
    
	const loader = new Loader(stack, {
		api: api.cdk.graphqlApi,
		dataSources: {
			tableDs: getDataSource(api, 'sstTableDs')!
		},
		defaultUnitResolverDataSource: 'tableDs',
		defaultFunctionDataSource: 'tableDs'
	});
	loader.load();
}

function getDataSource(api: AppSyncApi, key: string) {
	const ds = api.getDataSource(key);
	if (! ds) {
		throw new Error(
			`Expecting '${key}' datasource key to be set, ` +
			'found otherwise.'
		)
	}
	return ds;
}
```

This package introduces [`SstLoader`](lib/SstLoader.ts) to load resolvers with SST compatibility. This might be useful for specific use cases.

```ts  title="stacks/MyStack.ts"
import { StackContext, AppSyncApi, Table } from '@serverless-stack/resources';
import { SstLoader } from '@appsync-butler/sst';
import { Resolver } from '@aws-cdk/aws-appsync-alpha';

export function MyStack({ stack }: StackContext) {
    const table = new Table(stack, 'table', { ... });
    const api = new AppSyncApi(stack, 'api', {
        schema: 'graphql/index.graphql',
        dataSources: {
            tableDs: { type: "dynamodb", table }
        }
    });

    const loader = new SstLoader(stack, {
        api,
        defaultUnitResolverDataSource: 'tableDs',
        defaultFunctionDataSource: 'tableDs'
    });
    loader.load();

    // Suppose we have the following on-disk resolver:
    // vtl/resolvers/Query/posts

    const r = api.getResolver('Query posts');
    r instanceof Resolver // => true
}
```

## Documentation

Explore the documentation of AppSync Butler [here](https://alichry.github.io/appsync-butler). 
