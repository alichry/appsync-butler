# AppSync Butler

[![Gitter](https://badges.gitter.im/appsync-butler/community.svg)](https://gitter.im/appsync-butler/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Build](https://github.com/alichry/appsync-butler/actions/workflows/node.js.yml/badge.svg)](https://github.com/alichry/appsync-butler/actions/workflows/node.js.yml)

AppSync Butler is a simple AppSync development framework. Focus
on writing resolvers and functions while AppSync Butler provides you
with convenience to define variables, bind data sources, and load
resolvers seamlessly.

## Intuitive directory structure

By default, AppSync Butler assumes an intuitive directory structure to
load on-disk resolvers and functions. The intuitive directory structure is
as follows:

```
vtl
├── functions
│   ├── GetAuthorByAuthorId
│   │   ├── description.txt
│   │   ├── request.vtl
│   │   └── response.vtl
│   └── GetAuthorIdByPostId
│       ├── description.txt
│       ├── request.vtl
│       └── response.vtl
└── resolvers
    ├── Mutation
    │   └── addPost
    │       ├── request.vtl
    │       └── response.vtl
    ├── Post
    │   └── author
    │       ├── after.vtl
    │       ├── before.vtl
    │       └── pipeline.seq
    └── Query
        └── getPost
            ├── request.vtl
            └── response.vtl
```

## Documentation

Explore the documentation of AppSync Butler [here](https://alichry.github.io/appsync-butler). Alternatively, if you prefer to quickly and intuitively discover 
AppSync Butler, head over to the
[Quick start](packages/core/README.md#quick-start) section.