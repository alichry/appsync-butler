# AppSync Butler (SST)

This package is concerned with loading on-disk resolvers into 
SST AppSync API constructs. This is not necessarily required 
when using SST, you can still load on-disk resolvers and functions 
using [`@appsync-butler/core`](../core/README.md) only:

```ts  title="stacks/MyStack.ts"
import { Loader } from '@appsync-butler/core';
import { StackContext, AppSyncApi } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
    const api = new AppSyncApi(stack, 'api');
    const loader = new Loader(stack, { api: api.cdk.graphqlApi });
    loader.load();
}
```

This package introduces [`SstLoader`](lib/SstLoader.ts) to load resolvers with SST compatibility. This might be useful for specific use cases.

```ts  title="stacks/MyStack.ts"
import { SstLoader } from '@appsync-butler/sst';
import { StackContext, AppSyncApi } from '@serverless-stack/resources';
import { Resolver } from "@aws-cdk/aws-appsync-alpha";

export function MyStack({ stack }: StackContext) {
    const api = new AppSyncApi(stack, 'api');
    const loader = new SstLoader(stack, { api });
    loader.load();

    // Suppose we have the following on-disk resolver:
    // vtl/resolvers/Query/posts

    const r = api.getResolver('Query posts');
    r instanceof Resolver // => true
}
```

## Documentation

Explore the documentation of AppSync Butler [here](https://alichry.github.io/appsync-butler). 
