"use strict";(self.webpackChunkappsync_butler_website=self.webpackChunkappsync_butler_website||[]).push([[7868],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),u=n(6010),p="tabItem_vU9c";function c(e){var t,n,a,l=e.lazy,o=e.block,c=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),k=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,r.useState)(y),N=T[0],S=T[1],C=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=k[m];null!=O&&O!==N&&h.some((function(e){return e.value===O}))&&S(O)}var E=function(e){var t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==N&&(x(t),S(a),null!=m&&w(m,a))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:E,onClick:E},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},2424:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return v}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(6396),i=n(8215),s=["components"],u={sidebar_position:1},p="Installation",c={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"AppSync Butler should be installed in your CDK or SST application.",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/appsync-butler/docs/getting-started/installation",editUrl:"https://github.com/alichry/appsync-butler/edit/master/website/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/appsync-butler/docs/intro"},next:{title:"Setup the VTL directory",permalink:"/appsync-butler/docs/getting-started/setup-vtl-directory"}},d=[{value:"Create a new CDK or SST application",id:"create-a-new-cdk-or-sst-application",children:[],level:2},{value:"Manual setup",id:"manual-setup",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"AppSync Butler should be installed in your CDK or SST application.\nIf you are new to CDK/SST, please consult the relevant documentation:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Getting started with ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html"},"AWS Cloud Development Kit")),(0,l.kt)("li",{parentName:"ul"},"Getting started with ",(0,l.kt)("a",{parentName:"li",href:"https://docs.serverless-stack.com/installation"},"Serverless Stack Toolkit"))),(0,l.kt)("h2",{id:"create-a-new-cdk-or-sst-application"},"Create a new CDK or SST application"),(0,l.kt)("p",null,"We provide a convenient CLI ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/appsync-butler"},"appsync-butler")," to bootstrap a CDK or SST\napplication with AppSync Butler installed. If you have an\nexisting CDK or SST application, skip to the ",(0,l.kt)("a",{parentName:"p",href:"#manual-setup"},"Manual setup")," section.\nTo create a new project, run the following:"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Serverless Stack Toolkit",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx appsync-butler -t sst\n"))),(0,l.kt)(i.Z,{value:"AWS Cloud Development Kit",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx appsync-butler -t cdk -- --language typescript\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--language typescript")," option is passed to the ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-cdk")," CLI.\nTo view other other possible values, run ",(0,l.kt)("inlineCode",{parentName:"p"},"npx aws-cdk init app --help"),"\n(or ",(0,l.kt)("inlineCode",{parentName:"p"},"npx appsync-butler -t cdk -- --help"),")."))))),(0,l.kt)("p",null,"This will take care of ",(0,l.kt)("strong",{parentName:"p"},"invoking the ",(0,l.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/create-sst"},"sst"),"\nor the ",(0,l.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/aws-cdk"},"cdk")," CLI along with installing\nAppSync Butler and setting up the directory tree"),"."),(0,l.kt)("h2",{id:"manual-setup"},"Manual setup"),(0,l.kt)("p",null,"Open a terminal in your CDK or SST project and install the required dependencies."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"Serverless Stack Toolkit",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Using npm:\nnpm install @appsync-butler/core @appsync-butler/sst\n# Using Yarn:\nyarn add @appsync-butler/core @appsync-butler/sst\n"))),(0,l.kt)(i.Z,{value:"AWS Cloud Development Kit",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Using npm:\nnpm install @aws-cdk/aws-appsync-alpha @appsync-butler/core\n# Using Yarn:\nyarn add @aws-cdk/aws-appsync-alpha @appsync-butler/core\n")))))}v.isMDXComponent=!0}}]);