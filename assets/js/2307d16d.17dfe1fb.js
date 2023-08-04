"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[61954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,v=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.createElement(v,l(l({ref:t},c),{},{components:r})):a.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:n,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),u=r(16550),i=r(91980),s=r(67392),c=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:r}=e;const a=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,s]=v({queryString:r,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=i??p;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var g=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=s[r].value;a!==u&&(p(t),i(a))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=m(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},31742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162);const u={sidebar_position:40,title:"Java",description:"How to use the OpenFeature JAVA SDK"},i="JAVA SDK usage",s={unversionedId:"openfeature_sdk/server_providers/openfeature_java",id:"openfeature_sdk/server_providers/openfeature_java",title:"Java",description:"How to use the OpenFeature JAVA SDK",source:"@site/docs/openfeature_sdk/server_providers/openfeature_java.mdx",sourceDirName:"openfeature_sdk/server_providers",slug:"/openfeature_sdk/server_providers/openfeature_java",permalink:"/docs/next/openfeature_sdk/server_providers/openfeature_java",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/openfeature_sdk/server_providers/openfeature_java.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Java",description:"How to use the OpenFeature JAVA SDK"},sidebar:"tutorialSidebar",previous:{title:"GO",permalink:"/docs/next/openfeature_sdk/server_providers/openfeature_go"},next:{title:"Javascript / Typescript",permalink:"/docs/next/openfeature_sdk/server_providers/openfeature_javascript"}},c={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}],d={toc:p},f="wrapper";function v(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"java-sdk-usage"},"JAVA SDK usage"),(0,n.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,n.kt)("p",null,"The first things we will do is install the ",(0,n.kt)("strong",{parentName:"p"},"Open Feature SDK")," and the ",(0,n.kt)("strong",{parentName:"p"},"GO Feature Flag provider"),"."),(0,n.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"maven",label:"maven",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>dev.openfeature</groupId>\n    <artifactId>javasdk</artifactId>\n    <version>[0,)</version>\n</dependency>\n<dependency>\n    <groupId>dev.openfeature.contrib.providers</groupId>\n    <artifactId>go-feature-flag</artifactId>\n    <version>[0,)</version>\n</dependency>\n"))),(0,n.kt)(l.Z,{value:"gradle",label:"gradle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-gradle"},"implementation group: 'dev.openfeature', name: 'javasdk', version: '0.+'\nimplementation group: 'dev.openfeature.contrib.providers', name: 'go-feature-flag', version: '0.+'\n")))),(0,n.kt)("h2",{id:"initialize-your-open-feature-client"},"Initialize your Open Feature client"),(0,n.kt)("p",null,"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import dev.openfeature.contrib.providers.gofeatureflag.*;\nimport dev.openfeature.contrib.providers.gofeatureflag.exception.*;\nimport dev.openfeature.sdk.*;\n\n// ...\n\nGoFeatureFlagProviderOptions options = GoFeatureFlagProviderOptions.builder().endpoint("http://localhost:1031/").build();\nGoFeatureFlagProvider provider = new GoFeatureFlagProvider(options);\n\nOpenFeatureAPI.getInstance().setProvider(provider);\nOpenFeatureAPI api = OpenFeatureAPI.getInstance();\nClient featureFlagClient = api.getClient();\n')),(0,n.kt)("h2",{id:"evaluate-your-flag"},"Evaluate your flag"),(0,n.kt)("p",null,"This code block explain how you can create an ",(0,n.kt)("inlineCode",{parentName:"p"},"EvaluationContext")," and use it to evaluate your flag."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In this example we are evaluating a ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," flag, but other types are available."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Refer to the ",(0,n.kt)("a",{parentName:"strong",href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation"},"Open Feature documentation")," to know more about it."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'// Context of your flag evaluation.\nEvaluationContext userContext = new MutableContext()\n        .add("firstname", "john")\n        .add("lastname", "doe")\n        .add("email","john.doe@gofeatureflag.org")\n        .add("admin", true)\n        .add("anonymous", false);\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nuserContext.setTargetingKey("1d1b9238-2591-4a47-94cf-d2bc080892f1");\n\n\n\nBoolean adminFlag = featureFlagClient.getBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n    // flag "flag-only-for-admin" is true for the user\n} else {\n    // flag "flag-only-for-admin" is false for the user\n}\n')),(0,n.kt)("h2",{id:"contribute-to-the-provider"},"Contribute to the provider"),(0,n.kt)("p",null,"You can find the source of the provider in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-feature/java-sdk-contrib/tree/main/providers/go-feature-flag"},(0,n.kt)("inlineCode",{parentName:"a"},"open-feature/java-sdk-contrib"))," repository."))}v.isMDXComponent=!0}}]);