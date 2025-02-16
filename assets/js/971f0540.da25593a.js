"use strict";(self.webpackChunkappsync_butler_website=self.webpackChunkappsync_butler_website||[]).push([[9943],{7594:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>t});const n=JSON.parse('{"id":"api/@appsync-butler/core/classes/Builder","title":"Class: Builder","description":"Build a resolver tree from a VTL directory.","source":"@site/docs/api/@appsync-butler/core/classes/Builder.md","sourceDirName":"api/@appsync-butler/core/classes","slug":"/api/@appsync-butler/core/classes/Builder","permalink":"/appsync-butler/docs/api/@appsync-butler/core/classes/Builder","draft":false,"unlisted":false,"editUrl":"https://github.com/alichry/appsync-butler/edit/master/website/docs/api/@appsync-butler/core/classes/Builder.md","tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"ResolverType","permalink":"/appsync-butler/docs/api/@appsync-butler/core/enumerations/ResolverType"},"next":{"title":"Loader","permalink":"/appsync-butler/docs/api/@appsync-butler/core/classes/Loader"}}');var l=s(4848),i=s(8453);const c={},d="Class: Builder",o={},t=[{value:"Constructors",id:"constructors",level:2},{value:"new Builder()",id:"new-builder",level:3},{value:"Parameters",id:"parameters",level:4},{value:"optionsOrRoot?",id:"optionsorroot",level:5},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"functions",id:"functions",level:3},{value:"parser",id:"parser",level:3},{value:"resolvers",id:"resolvers",level:3},{value:"Methods",id:"methods",level:2},{value:"build()",id:"build",level:3},{value:"Returns",id:"returns-1",level:4},{value:"buildFunctions()",id:"buildfunctions",level:3},{value:"Returns",id:"returns-2",level:4},{value:"buildResolvers()",id:"buildresolvers",level:3},{value:"Returns",id:"returns-3",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"class-builder",children:"Class: Builder"})}),"\n",(0,l.jsx)(r.p,{children:"Build a resolver tree from a VTL directory."}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-ts",children:"import { Builder } from '@appsync-butler/core';\nconst builder = new Builder();\nbuilder.build();\nconst { getPost } = builder.resolvers.Query;\nconst { getUserById } = builder.functions;\n"})}),"\n",(0,l.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,l.jsx)(r.h3,{id:"new-builder",children:"new Builder()"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:"new Builder"}),"(",(0,l.jsx)(r.code,{children:"optionsOrRoot"}),"?): ",(0,l.jsx)(r.a,{href:"/appsync-butler/docs/api/@appsync-butler/core/classes/Builder",children:(0,l.jsx)(r.code,{children:"Builder"})})]}),"\n"]}),"\n",(0,l.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsx)(r.h5,{id:"optionsorroot",children:"optionsOrRoot?"}),"\n",(0,l.jsx)(r.p,{children:"Path to VTL directory or parsing instructions"}),"\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"string"})," | ",(0,l.jsx)(r.a,{href:"/appsync-butler/docs/api/@appsync-butler/core/interfaces/ParserOptions",children:(0,l.jsx)(r.code,{children:"ParserOptions"})})]}),"\n",(0,l.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"/appsync-butler/docs/api/@appsync-butler/core/classes/Builder",children:(0,l.jsx)(r.code,{children:"Builder"})})}),"\n",(0,l.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,l.jsx)(r.h3,{id:"functions",children:"functions"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"readonly"})," ",(0,l.jsx)(r.strong,{children:"functions"}),": ",(0,l.jsx)(r.code,{children:"Record"}),"<",(0,l.jsx)(r.code,{children:"string"}),", ",(0,l.jsx)(r.a,{href:"/appsync-butler/docs/api/@appsync-butler/core/interfaces/ParsedFunctionInfo",children:(0,l.jsx)(r.code,{children:"ParsedFunctionInfo"})}),">"]}),"\n"]}),"\n",(0,l.jsxs)(r.p,{children:["The function dictionary object, only populated after calling ",(0,l.jsx)(r.code,{children:"build()"}),"\nKeys are function names and values are parsed function information."]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h3,{id:"parser",children:"parser"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"readonly"})," ",(0,l.jsx)(r.strong,{children:"parser"}),": ",(0,l.jsx)(r.a,{href:"/appsync-butler/docs/api/@appsync-butler/core/classes/Parser",children:(0,l.jsx)(r.code,{children:"Parser"})})]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"The underlying parser instance that is responsible for parsing\nresolvers and functions."}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h3,{id:"resolvers",children:"resolvers"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"readonly"})," ",(0,l.jsx)(r.strong,{children:"resolvers"}),": ",(0,l.jsx)(r.a,{href:"/appsync-butler/docs/api/@appsync-butler/core/interfaces/ResolverTree",children:(0,l.jsx)(r.code,{children:"ResolverTree"})})]}),"\n"]}),"\n",(0,l.jsxs)(r.p,{children:["The resolver tree object, only populated after calling ",(0,l.jsx)(r.code,{children:"build()"})]}),"\n",(0,l.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(r.h3,{id:"build",children:"build()"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.strong,{children:"build"}),"(): ",(0,l.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(r.p,{children:"Traverse all the stored resolvers and functions to\nbuild the resolver tree and function dictionary."}),"\n",(0,l.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.code,{children:"void"})}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h3,{id:"buildfunctions",children:"buildFunctions()"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"protected"})," ",(0,l.jsx)(r.strong,{children:"buildFunctions"}),"(): ",(0,l.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.code,{children:"void"})}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h3,{id:"buildresolvers",children:"buildResolvers()"}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsxs)(r.p,{children:[(0,l.jsx)(r.code,{children:"protected"})," ",(0,l.jsx)(r.strong,{children:"buildResolvers"}),"(): ",(0,l.jsx)(r.code,{children:"void"})]}),"\n"]}),"\n",(0,l.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.code,{children:"void"})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>d});var n=s(6540);const l={},i=n.createContext(l);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);