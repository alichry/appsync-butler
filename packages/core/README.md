# AppSync Butler

> AppSync Butler is an AppSync (GraphQL) API development framework, compatible with
> AWS Cloud Development Kit and Serverless Stack Toolkit. Visit the
> [homepage](https://github.com/alichry/appsync-butler#readme) for more
> information.

This package does the heavy-lifting to parse and load on-disk resolvers and functions.

## Quick start

Begin your journey in your existing CDK/SST project ✨

### 1. Install the required dependencies

```sh
# Do not install @aws-cdk/aws-appsync-alpha when using SST.
npm install @aws-cdk/aws-appsync-alpha @appsync-butler/core
```

### 2. Setup the directory structure

```sh
mkdir -p vtl/{resolvers,functions} \
    vtl/resolvers/{Query,Mutation} \
    graphql
echo '# TODO: Write GraphQL schema' >> graphql/index.graphql
```

### 3. Create a simple date resolver

```sh
cat <<EOF >> graphql/index.graphql
schema {
  query: Query
}

type Query {
  getDateTime: String!
}
EOF

mkdir vtl/resolvers/Query/getDateTime

cat <<EOF > vtl/resolvers/Query/getDateTime/request.vtl
##@butler.dataSource('none')
{
    "version": "2018-05-29"
}
EOF

echo '$util.toJson($util.time.nowFormatted("yyyy-MM-dd HH:mm:ssZ"))' \
    >  vtl/resolvers/Query/getDateTime/response.vtl
```

### 4. Instantialize the loader and call `Loader#load`

```ts title="lib/app-stack.ts" {11,12}
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GraphqlApi } from '@aws-cdk/aws-appsync-alpha';
import { Loader } from '@appsync-butler/core';

export class AppStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const api = new GraphqlApi(this, 'api', { name: "test" });
        const loader = new Loader(this, { api });
        loader.load();
    }
}
```

Congratulations! You have wrote your first AppSync Butler application 🎉
Deploy the stack to interact with your newly created GraphQL API.
Alternatively, you can use `npx appsync-butler` to run steps 1 and 2.

## Documentation

Explore the documentation of AppSync Butler [here](https://alichry.github.io/appsync-butler). 

