"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[44545],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),f=n,v=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return r?a.createElement(v,i(i({ref:t},p),{},{components:r})):a.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(16550),u=r(91980),s=r(67392),p=r(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=v({queryString:r,groupId:a}),[c,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=u??c;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var g=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:l,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==l&&(c(t),u(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:f,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=m(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},47831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),i=r(85162);const l={sidebar_position:51,description:"How to use the OpenFeature Javascript SDK"},u="Javascript / Typescript SDK usage",s={unversionedId:"openfeature_sdk/server_providers/openfeature_javascript",id:"version-v1.14.0/openfeature_sdk/server_providers/openfeature_javascript",title:"Javascript / Typescript SDK usage",description:"How to use the OpenFeature Javascript SDK",source:"@site/versioned_docs/version-v1.14.0/openfeature_sdk/server_providers/openfeature_javascript.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_javascript",permalink:"/docs/v1.14.0/openfeature_sdk/server_providers/openfeature_javascript",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.0/openfeature_sdk/server_providers/openfeature_javascript.mdx",tags:[],version:"v1.14.0",sidebarPosition:51,frontMatter:{sidebar_position:51,description:"How to use the OpenFeature Javascript SDK"},sidebar:"tutorialSidebar",previous:{title:"JAVA SDK usage",permalink:"/docs/v1.14.0/openfeature_sdk/server_providers/openfeature_java"},next:{title:".Net SDK usage",permalink:"/docs/v1.14.0/openfeature_sdk/server_providers/openfeature_dotnet"}},p={},c=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}],d={toc:c},f="wrapper";function v(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"javascript--typescript-sdk-usage"},"Javascript / Typescript SDK usage"),(0,n.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,n.kt)("p",null,"The first things we will do is install the ",(0,n.kt)("strong",{parentName:"p"},"Open Feature SDK")," and the ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag provider"),"."),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @openfeature/js-sdk @openfeature/go-feature-flag-provider\n"))),(0,n.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @openfeature/js-sdk @openfeature/go-feature-flag-provider\n")))),(0,n.kt)("h2",{id:"initialize-your-open-feature-client"},"Initialize your Open Feature client"),(0,n.kt)("p",null,"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {OpenFeature} = require(\"@openfeature/js-sdk\");\nconst {GoFeatureFlagProvider} = require(\"@openfeature/go-feature-flag-provider\");\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider = new GoFeatureFlagProvider({\n  endpoint: 'http://localhost:1031/' // DNS of your instance of relay proxy\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app')\n"))),(0,n.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {EvaluationContext, OpenFeature} from \"@openfeature/js-sdk\";\nimport {GoFeatureFlagProvider} from  \"@openfeature/go-feature-flag-provider\";\n\n\n// init Open Feature SDK with GO Feature Flag provider\nconst goFeatureFlagProvider: GoFeatureFlagProvider = new GoFeatureFlagProvider({\nendpoint: 'http://localhost:1031/'\n});\nOpenFeature.setProvider(goFeatureFlagProvider);\nconst featureFlagClient = OpenFeature.getClient('my-app');\n")))),(0,n.kt)("h2",{id:"evaluate-your-flag"},"Evaluate your flag"),(0,n.kt)("p",null,"This code block explain how you can create an ",(0,n.kt)("inlineCode",{parentName:"p"},"EvaluationContext")," and use it to evaluate your flag."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In this example we are evaluating a ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," flag, but other types are available."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Refer to the ",(0,n.kt)("a",{parentName:"strong",href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation"},"Open Feature documentation")," to know more about it."))),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier (mandatory)\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n   // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n"))),(0,n.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nconst userContext: EvaluationContext = {\n  targetingKey: '1d1b9238-2591-4a47-94cf-d2bc080892f1', // user unique identifier\n  firstname: 'john',\n  lastname: 'doe',\n  email: 'john.doe@gofeatureflag.org',\n  admin: true, // this field is used in the targeting rule of the flag \"flag-only-for-admin\"\n  // ...\n};\n\nconst adminFlag = await featureFlagClient.getBooleanValue('flag-only-for-admin', false, userContext);\nif (adminFlag) {\n  // flag \"flag-only-for-admin\" is true for the user\n} else {\n  // flag \"flag-only-for-admin\" is false for the user\n}\n")))),(0,n.kt)("h2",{id:"contribute-to-the-provider"},"Contribute to the provider"),(0,n.kt)("p",null,"You can find the source of the provider in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag"},(0,n.kt)("inlineCode",{parentName:"a"},"open-feature/js-sdk-contrib"))," repository."))}v.isMDXComponent=!0}}]);