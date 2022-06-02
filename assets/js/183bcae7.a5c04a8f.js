"use strict";(self.webpackChunkappsync_butler_website=self.webpackChunkappsync_butler_website||[]).push([[5465],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),i=n(9443);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3616),c=n(6010),u="tabItem_vU9c";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,l.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=s(),k=h.tabGroupChoices,w=h.setTabGroupChoices,S=(0,a.useState)(g),O=S[0],T=S[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=k[f];null!=P&&P!==O&&y.some((function(e){return e.value===P}))&&T(P)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==O&&(E(t),T(r),null!=f&&w(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":i},m)},y.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},6672:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(6396),s=n(8215),l=["components"],c={sidebar_position:5},u="Instantialize AppSync",p={unversionedId:"getting-started/instantialize-appsync",id:"getting-started/instantialize-appsync",title:"Instantialize AppSync",description:"It's time to create an AppSync CDK/SST construct, if not yet created.",source:"@site/docs/getting-started/instantialize-appsync.mdx",sourceDirName:"getting-started",slug:"/getting-started/instantialize-appsync",permalink:"/appsync-butler/docs/getting-started/instantialize-appsync",editUrl:"https://github.com/alichry/appsync-butler/edit/master/website/docs/getting-started/instantialize-appsync.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Write resolvers",permalink:"/appsync-butler/docs/getting-started/write-resolvers"},next:{title:"Load resolvers",permalink:"/appsync-butler/docs/getting-started/load-resolvers"}},d=[],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instantialize-appsync"},"Instantialize AppSync"),(0,o.kt)("p",null,"It's time to create an AppSync CDK/SST construct, if not yet created."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Serverless Stack Toolkit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="stacks/MyStack.ts"',title:'"stacks/MyStack.ts"'},'import * as sst from "@serverless-stack/resources";\n\nexport default class MyStack extends sst.Stack {\n  constructor(scope: sst.App, id: string, props: sst.StackProps) {\n    super(scope, id, props);\n\n    const api = new sst.AppSyncApi(this, "api", {\n      graphqlApi: { schema: "graphql/index.graphql" }\n    });\n  }\n}\n'))),(0,o.kt)(s.Z,{value:"AWS Cloud Development Kit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="lib/app-stack.ts"',title:'"lib/app-stack.ts"'},"import { Stack, StackProps } from 'aws-cdk-lib';\nimport { Construct } from 'constructs';\nimport { GraphqlApi } from '@aws-cdk/aws-appsync-alpha';\n\nexport class AppStack extends Stack {\n  constructor(scope: Construct, id: string, props?: StackProps) {\n    super(scope, id, props);\n\n    // The code that defines your stack goes here\n\n    const api = new GraphqlApi(this, \"api\", {\n      name: \"time-pingpong-api\"\n    });\n  }\n}\n")))))}m.isMDXComponent=!0}}]);