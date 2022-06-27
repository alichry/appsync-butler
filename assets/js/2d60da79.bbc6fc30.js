"use strict";(self.webpackChunkappsync_butler_website=self.webpackChunkappsync_butler_website||[]).push([[917],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,y=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(y,p(p({ref:r},c),{},{components:t})):n.createElement(y,p({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1714:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),p=["components"],l={id:"appsync_butler_core.ResolverTree",title:"Interface: ResolverTree",sidebar_label:"ResolverTree",custom_edit_url:null},i=void 0,s={unversionedId:"api/interfaces/appsync_butler_core.ResolverTree",id:"api/interfaces/appsync_butler_core.ResolverTree",title:"Interface: ResolverTree",description:"@appsync-butler/core.ResolverTree",source:"@site/docs/api/interfaces/appsync_butler_core.ResolverTree.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/appsync_butler_core.ResolverTree",permalink:"/appsync-butler/docs/api/interfaces/appsync_butler_core.ResolverTree",editUrl:null,tags:[],version:"current",frontMatter:{id:"appsync_butler_core.ResolverTree",title:"Interface: ResolverTree",sidebar_label:"ResolverTree",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ReaderOptions",permalink:"/appsync-butler/docs/api/interfaces/appsync_butler_core.ReaderOptions"},next:{title:"UnitDirectoryStructure",permalink:"/appsync-butler/docs/api/interfaces/appsync_butler_core.UnitDirectoryStructure"}},c=[{value:"Indexable",id:"indexable",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"Query",id:"query",children:[],level:3},{value:"Mutation",id:"mutation",children:[],level:3}],level:2}],u={toc:c};function d(e){var r=e.components,t=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/appsync-butler/docs/api/modules/appsync_butler_core"},"@appsync-butler/core"),".ResolverTree"),(0,o.kt)("p",null,"The resolver tree is a two-dimensional object with keys as GraphQL types and\nGraphQL fields for the first and second dimension (respectively).\nValues cover information about parsed resolvers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ResolverType, ResolverTree } from \"@appsync-butler/core\";\nconst tree: ResolverTree = {\n  Query: {\n    getPost: {\n      typeName: 'Query',\n      fieldName: 'getPost',\n      resolverType: ResolverType.Unit,\n      requestMappingTemplate: {\n        path: 'vtl/resolvers/Query/getPost/request.vtl',\n        data: '#returrn({ \"id\": 1, \"title\": \"Good Soup!\" })'\n      },\n      responseMappingTemplate: {\n        path: 'vtl/resolvers/Query/getPost/response.vtl',\n        data: '$util.toJson($ctx.result)'\n      },\n    }\n  },\n  Mutation: {}\n}\n")),(0,o.kt)("h2",{id:"indexable"},"Indexable"),(0,o.kt)("p",null,"\u25aa ","[typeName: ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("a",{parentName:"p",href:"/appsync-butler/docs/api/modules/appsync_butler_core#parsedresolverinfo"},(0,o.kt)("inlineCode",{parentName:"a"},"ParsedResolverInfo")),">"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"query"},"Query"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Query"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("a",{parentName:"p",href:"/appsync-butler/docs/api/modules/appsync_butler_core#parsedresolverinfo"},(0,o.kt)("inlineCode",{parentName:"a"},"ParsedResolverInfo")),">"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"mutation"},"Mutation"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"Mutation"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,o.kt)("a",{parentName:"p",href:"/appsync-butler/docs/api/modules/appsync_butler_core#parsedresolverinfo"},(0,o.kt)("inlineCode",{parentName:"a"},"ParsedResolverInfo")),">"))}d.isMDXComponent=!0}}]);