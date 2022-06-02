"use strict";(self.webpackChunkappsync_butler_website=self.webpackChunkappsync_butler_website||[]).push([[3206],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),i=n(2389),l=n(9443);var o=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),p=n(6010),u="tabItem_vU9c";function c(e){var t,n,a,i=e.lazy,l=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),N=y.tabGroupChoices,b=y.setTabGroupChoices,w=(0,r.useState)(g),S=w[0],A=w[1],C=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=N[m];null!=P&&P!==S&&f.some((function(e){return e.value===P}))&&A(P)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==S&&(T(t),A(a),null!=m&&b(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":l},v)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,p.Z)("tabs__item",u,{"tabs__item--active":S===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:x,onClick:x},null!=n?n:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9568:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},Row:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=(n(6396),n(8215),["components"]),o={sidebar_position:1},s="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:");",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/appsync-butler/docs/intro",editUrl:"https://github.com/alichry/appsync-butler/edit/master/website/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/appsync-butler/docs/getting-started/installation"}},u=[{value:"\ud83d\ude80\xa0 Features",id:"-features",children:[],level:2},{value:"\ud83e\udd14\xa0 How it works",id:"-how-it-works",children:[{value:"\u2728\xa0 Tabular representation",id:"-tabular-representation",children:[],level:3},{value:"\ud83e\udd16\xa0 Functions",id:"-functions",children:[],level:3},{value:"\ud83e\udde0\xa0 Resolvers",id:"-resolvers",children:[{value:"Unit resolver files",id:"unit-resolver-files",children:[],level:4},{value:"Pipeline resolver files",id:"pipeline-resolver-files",children:[],level:4}],level:3},{value:"\u1d61\xa0 Variables",id:"\u1d61-variables",children:[],level:3},{value:"\ud83d\udd2e\xa0 Data Sources",id:"-data-sources",children:[],level:3}],level:2},{value:"\ud83c\udfaf\xa0 Who&#39;s this for",id:"-whos-this-for",children:[],level:2},{value:"\ud83d\ude98\xa0 Forthcoming features",id:"-forthcoming-features",children:[],level:2}],c=function(e){var t=e.children;return(0,i.kt)("div",{className:"container"},(0,i.kt)("div",{className:"row"},t))},d={toc:u,Row:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"With the power of Apache Velocity, ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/appsync/"},"AWS AppSync")," allows for quick deployment of ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," APIs. Stored AppSync VTL resolvers require manual instructions\nto associate it with a GraphQL field. For this, AppSync Butler offers a simple development framework to parse and load VTL resolvers into CDK or SST AppSync constructs by leveraging an intuitive directory structure.  "),(0,i.kt)("h2",{id:"-features"},"\ud83d\ude80\xa0 Features"),(0,i.kt)("p",null,"\u2728\xa0 Simple and intuitive. AppSync Butler is an open and humble framework.   "),(0,i.kt)("p",null,"\ud83d\udc89\xa0 Variable injection. Define global variables for replacement in AppSync mapping templates."),(0,i.kt)("p",null,"\ud83e\udd84\xa0 Bind resolvers to data sources from within request mapping templates.  "),(0,i.kt)("p",null,"\ud83e\udd5e\xa0 Comaptible with AWS ",(0,i.kt)("strong",{parentName:"p"},"Cloud Development Kit")," and ",(0,i.kt)("strong",{parentName:"p"},"Serverless Stack Toolkit"),".  "),(0,i.kt)("h2",{id:"-how-it-works"},"\ud83e\udd14\xa0 How it works"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're unfamiliar with AWS AppSync, head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html"},"AWS AppSync Docs"),"."))),(0,i.kt)("p",null,"With the below GraphQL schema and directory structure, AppSync Butler maps each AppSync Resolver to its corresponding GraphQL field."),(0,i.kt)(c,{mdxType:"Row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n    query: Query\n    mutation: Mutation\n}\n\ntype Query {\n    getPost(id: ID!): Post\n}\n\ntype Mutation {\n    addPost(post: PostInput!): Post!\n}\n\ntype Post {\n    id: ID!\n    author: Author!\n    title: String!\n    content: String!\n}\n\ntype Author {\n    id: ID!\n    username: String!\n}\n"))),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tree"},"vtl\n\u251c\u2500\u2500 functions\n\u2502\xa0\xa0 \u251c\u2500\u2500 GetAuthorByAuthorId\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 description.txt\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 request.vtl\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 response.vtl\n\u2502\xa0\xa0 \u2514\u2500\u2500 GetAuthorIdByPostId\n\u2502\xa0\xa0     \u251c\u2500\u2500 description.txt\n\u2502\xa0\xa0     \u251c\u2500\u2500 request.vtl\n\u2502\xa0\xa0     \u2514\u2500\u2500 response.vtl\n\u2514\u2500\u2500 resolvers\n    \u251c\u2500\u2500 Mutation\n    \u2502\xa0\xa0 \u2514\u2500\u2500 addPost\n    \u2502\xa0\xa0     \u251c\u2500\u2500 request.vtl\n    \u2502\xa0\xa0     \u2514\u2500\u2500 response.vtl\n    \u251c\u2500\u2500 Post\n    \u2502\xa0\xa0 \u2514\u2500\u2500 author\n    \u2502\xa0\xa0     \u251c\u2500\u2500 after.vtl\n    \u2502\xa0\xa0     \u251c\u2500\u2500 before.vtl\n    \u2502\xa0\xa0     \u2514\u2500\u2500 pipeline.seq\n    \u2514\u2500\u2500 Query\n        \u2514\u2500\u2500 getPost\n            \u251c\u2500\u2500 request.vtl\n            \u2514\u2500\u2500 response.vtl\n")))),(0,i.kt)("h3",{id:"-tabular-representation"},"\u2728\xa0 Tabular representation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Resolver"),(0,i.kt)("th",{parentName:"tr",align:null},"Resolver Type"),(0,i.kt)("th",{parentName:"tr",align:null},"GraphQL Type"),(0,i.kt)("th",{parentName:"tr",align:null},"GraphQL Field"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vtl/resolvers/Query/getPost"),(0,i.kt)("td",{parentName:"tr",align:null},"Unit"),(0,i.kt)("td",{parentName:"tr",align:null},"Query"),(0,i.kt)("td",{parentName:"tr",align:null},"getPost")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vtl/resolvers/Mutation/addPost"),(0,i.kt)("td",{parentName:"tr",align:null},"Unit"),(0,i.kt)("td",{parentName:"tr",align:null},"Mutation"),(0,i.kt)("td",{parentName:"tr",align:null},"addPost")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"vtl/resolvers/Post/author"),(0,i.kt)("td",{parentName:"tr",align:null},"Pipeline"),(0,i.kt)("td",{parentName:"tr",align:null},"Post"),(0,i.kt)("td",{parentName:"tr",align:null},"author")))),(0,i.kt)("h3",{id:"-functions"},"\ud83e\udd16\xa0 Functions"),(0,i.kt)("p",null,"Each subdirectory under ",(0,i.kt)("inlineCode",{parentName:"p"},"vtl/functions/")," should contain the necessary files to build an AppSync VTL function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request Mapping Template: ",(0,i.kt)("inlineCode",{parentName:"li"},"request.vtl")," "),(0,i.kt)("li",{parentName:"ul"},"Response Mapping Template: ",(0,i.kt)("inlineCode",{parentName:"li"},"response.vtl")),(0,i.kt)("li",{parentName:"ul"},"Description (optional): ",(0,i.kt)("inlineCode",{parentName:"li"},"description.txt"))),(0,i.kt)("p",null,"When loading functions, AppSync Butler iterates over each function and adds it to the supplied CDK or SST AppSync construct."),(0,i.kt)("h3",{id:"-resolvers"},"\ud83e\udde0\xa0 Resolvers"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"AppSync Butler supports both ",(0,i.kt)("strong",{parentName:"p"},"unit")," and ",(0,i.kt)("strong",{parentName:"p"},"pipeline")," resolvers."))),(0,i.kt)("p",null,"Each subdirectory under ",(0,i.kt)("inlineCode",{parentName:"p"},"vtl/resolvers/")," should represent a valid GraphQL type (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"vtl/resolvers/Query"),") and contains zero-or-more subdirectories as field-level resolvers (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"vtl/resolver/Query/getPost"),"). AppSync Butler reads the VTL files in ",(0,i.kt)("inlineCode",{parentName:"p"},"vtl/resolver/Query/getPost")," and adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"Query.getPost")," resolver to the GraphQL API construct.    "),(0,i.kt)("h4",{id:"unit-resolver-files"},"Unit resolver files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request Mapping Template: ",(0,i.kt)("inlineCode",{parentName:"li"},"request.vtl")),(0,i.kt)("li",{parentName:"ul"},"Response Mapping Template: ",(0,i.kt)("inlineCode",{parentName:"li"},"response.vtl"))),(0,i.kt)("h4",{id:"pipeline-resolver-files"},"Pipeline resolver files"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before Mapping Template (optional): ",(0,i.kt)("inlineCode",{parentName:"li"},"before.vtl")),(0,i.kt)("li",{parentName:"ul"},"Pipeline sequence definition file: ",(0,i.kt)("inlineCode",{parentName:"li"},"pipeline.seq")),(0,i.kt)("li",{parentName:"ul"},"After Mapping Template (optional): ",(0,i.kt)("inlineCode",{parentName:"li"},"after.vtl")," ")),(0,i.kt)("p",null,"The pipeline sequence defintion file denotes the ordered AppSync VTL functions to execute sequentially using newline-delimitted function names. To execute ",(0,i.kt)("inlineCode",{parentName:"p"},"vtl/functions/GetUserId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vtl/functions/GetUser"),", we can define the pipeline sequence defintion file in the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GetUserId\nGetUser\n")),(0,i.kt)("p",null,"AppSync Butler handles the necessary steps to load this pipeline resolver into AppSync."),(0,i.kt)("h3",{id:"\u1d61-variables"},"\u1d61\xa0 Variables"),(0,i.kt)("p",null,"AppSync Butler parses mapping templates (request, response, before, after) and\nreplaces references of a user-defined variable to its specified value.\nVariables are denoted as ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ var }}"),". Variables are defined during the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/appsync_butler_core.Loader"},"instantialization of a loader")," or set using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/appsync_butler_core.Parser#setvariable"},(0,i.kt)("inlineCode",{parentName:"a"},"loader.builder.parser.setVariable(key, value)"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"AppSync Butler throws an ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/appsync_butler_core.UndefinedVariableError"},(0,i.kt)("inlineCode",{parentName:"a"},"UndefinedVariableError"))," if an unrecognized\nvariable is encountered in a mapping template."))),(0,i.kt)("h3",{id:"-data-sources"},"\ud83d\udd2e\xa0 Data Sources"),(0,i.kt)("p",null,"Data sources are provided during instantialization and specified directly from\nwith-in request mapping templates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/vtl/resolvers/Query/getPost/request.vtl" {1}',title:'"/vtl/resolvers/Query/getPost/request.vtl"',"{1}":!0},'##@butler.dataSource(\'myDynamoDbDataSource\')\n\n{\n    "version": "...",\n    "operation": "GetItem",\n    "key": { ... }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Alternatively, the default data source can be provided during instantialization.\nThis is highly suitable for Single Table design applications where setting the\ndata source is not necessary."))),(0,i.kt)("h2",{id:"-whos-this-for"},"\ud83c\udfaf\xa0 Who's this for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Developers utilizing AWS CDK or SST to deploy a GraphQL API."),(0,i.kt)("li",{parentName:"ul"},"Entrepreneurs leveraging AWS AppSync to define their business logic\nand require a simplistic AppSync development framework with a\nsmooth learning curve.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As an entrepreneur that is heavily relying on AWS AppSync, it is highly cruicial\nto employ Infrastructure-as-Code tools such as AWS Cloud Development Kit or Serverless\nStack Toolkit to define your stack as it boosts your product value."))),(0,i.kt)("h2",{id:"-forthcoming-features"},"\ud83d\ude98\xa0 Forthcoming features"),(0,i.kt)("p",null,"To support us, give this project a star on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alichry/appsync-butler"},"GitHub"),". Here's a list of future objectives that are still under consideration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide a, programmable, resolver testing mechanism through deploying a test stack and executing GraphQL\noperations against it. Alternatively, simulating VTL templates yields a zero-cost test suite."),(0,i.kt)("li",{parentName:"ul"},"VTL validation prior deployment. This would cut-down time spent in errorus deployments."),(0,i.kt)("li",{parentName:"ul"},"Access properties of other data sources (e.g. a DynamoDB's table name) instead of relying\non defined variables."),(0,i.kt)("li",{parentName:"ul"},"Possibly warn users of any missing resolvers for any GraphQL fields.")))}m.isMDXComponent=!0}}]);