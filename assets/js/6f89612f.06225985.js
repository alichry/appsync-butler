"use strict";(self.webpackChunkappsync_butler_website=self.webpackChunkappsync_butler_website||[]).push([[8956],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),s=n(9443);var l=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(3616),c=n(6010),p="tabItem_vU9c";function u(e){var t,n,r,o=e.lazy,s=e.block,u=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),k=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,a.useState)(b),S=N[0],x=N[1],O=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==S&&h.some((function(e){return e.value===E}))&&x(E)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==S&&(T(t),x(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},f)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":S===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:C,onClick:C},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function d(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},8881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=n(6396),l=n(8215),i=["components"],c={sidebar_position:6},p="Load resolvers",u={unversionedId:"getting-started/load-resolvers",id:"getting-started/load-resolvers",title:"Load resolvers",description:"Up until now, we have not interacted with AppSync Butler. We have",source:"@site/docs/getting-started/load-resolvers.mdx",sourceDirName:"getting-started",slug:"/getting-started/load-resolvers",permalink:"/appsync-butler/docs/getting-started/load-resolvers",editUrl:"https://github.com/alichry/appsync-butler/edit/master/website/docs/getting-started/load-resolvers.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Instantialize AppSync",permalink:"/appsync-butler/docs/getting-started/instantialize-appsync"},next:{title:"Deploy stack",permalink:"/appsync-butler/docs/getting-started/deploy-stack"}},d=[],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"load-resolvers"},"Load resolvers"),(0,o.kt)("p",null,"Up until now, we have not interacted with AppSync Butler. We have"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Defined a GraphQL schema."),(0,o.kt)("li",{parentName:"ol"},"Setup the resolvers."),(0,o.kt)("li",{parentName:"ol"},"Instantialized the AppSync API construct.")),(0,o.kt)("p",null,"The AppSync construct is not ",(0,o.kt)("em",{parentName:"p"},"yet")," aware of the on-disk resolvers.\nAppSync Butler handles this process seamlessly. To load on-disk\nresolvers and functions, use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/appsync_butler_core.Loader"},(0,o.kt)("inlineCode",{parentName:"a"},"Loader"))," or\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/appsync_butler_sst.SstLoader"},(0,o.kt)("inlineCode",{parentName:"a"},"SstLoader"))," for CDK and SST applications respectively"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Serverless Stack Toolkit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="stacks/MyStack.ts" {2,12,13}',title:'"stacks/MyStack.ts"',"{2,12,13}":!0},"import * as sst from \"@serverless-stack/resources\";\nimport { SstLoader as Loader } from '@appsync-butler/sst';\n\nexport default class MyStack extends sst.Stack {\n  constructor(scope: sst.App, id: string, props: sst.StackProps) {\n    super(scope, id, props);\n\n    const api = new sst.AppSyncApi(this, \"api\", {\n      schema: 'graphql/index.graphql',\n    });\n\n    const loader = new Loader(this, { api });\n    loader.load();\n  }\n}\n"))),(0,o.kt)(l.Z,{value:"AWS Cloud Development Kit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="lib/app-stack.ts" {4,14,15}',title:'"lib/app-stack.ts"',"{4,14,15}":!0},"import { Stack, StackProps } from 'aws-cdk-lib';\nimport { Construct } from 'constructs';\nimport { GraphqlApi, Schema } from '@aws-cdk/aws-appsync-alpha';\nimport { Loader } from '@appsync-butler/core';\n\nexport class AppStack extends Stack {\n  constructor(scope: Construct, id: string, props?: StackProps) {\n    super(scope, id, props);\n\n    const api = new GraphqlApi(this, \"api\", {\n      name: \"time-pingpong-api\",\n      schema: Schema.fromAsset(\"graphql/index.graphql\")\n    });\n\n    const loader = new Loader(this, { api });\n    loader.load();\n  }\n}\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Instead of explicitly associating resolvers with data sources in request mapping templates,\nyou can specify a default data source when creating the loader. "),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const loader = new Loader(this, { api, defaultUnitResolverDataSource: 'none' });\n")),(0,o.kt)("p",{parentName:"div"},"For other options that you may pass, check ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/#loaderoptions"},"LoaderOptions"),"."))))}f.isMDXComponent=!0}}]);