"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7506],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(a),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>O});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),u=a(16550),i=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=i??p;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==u&&(p(t),i(n))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":u===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function O(e){const t=(0,b.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},2883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const u={sidebar_position:52,description:"How to use the OpenFeature .Net SDK"},i=".Net SDK usage",s={unversionedId:"openfeature_sdk/openfeature_dotnet",id:"version-v1.11.0/openfeature_sdk/openfeature_dotnet",title:".Net SDK usage",description:"How to use the OpenFeature .Net SDK",source:"@site/versioned_docs/version-v1.11.0/openfeature_sdk/openfeature_dotnet.mdx",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/openfeature_dotnet",permalink:"/docs/v1.11.0/openfeature_sdk/openfeature_dotnet",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.11.0/openfeature_sdk/openfeature_dotnet.mdx",tags:[],version:"v1.11.0",sidebarPosition:52,frontMatter:{sidebar_position:52,description:"How to use the OpenFeature .Net SDK"},sidebar:"tutorialSidebar",previous:{title:"Javascript / Typescript SDK usage",permalink:"/docs/v1.11.0/openfeature_sdk/openfeature_javascript"},next:{title:"Use the relay proxy",permalink:"/docs/v1.11.0/category/use-the-relay-proxy"}},c={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize your Open Feature client",id:"initialize-your-open-feature-client",level:2},{value:"Evaluate your flag",id:"evaluate-your-flag",level:2},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}],d={toc:p},f="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"net-sdk-usage"},".Net SDK usage"),(0,r.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"The first things we will do is install the ",(0,r.kt)("strong",{parentName:"p"},"Open Feature SDK")," and the ",(0,r.kt)("strong",{parentName:"p"},"GO Feature Flag provider"),"."),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"netcli",label:".NET CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet add package OpenFeature.Contrib.GOFeatureFlag\n"))),(0,r.kt)(l.Z,{value:"pm",label:"Package Manager",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"NuGet\\Install-Package OpenFeature.Contrib.GOFeatureFlag\n"))),(0,r.kt)(l.Z,{value:"pr",label:"Package Reference",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="OpenFeature.Contrib.GOFeatureFlag" />\n'))),(0,r.kt)(l.Z,{value:"pc",label:"Packet cli",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"paket add OpenFeature.Contrib.GOFeatureFlag\n"))),(0,r.kt)(l.Z,{value:"cake",label:"Cake",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"// Install OpenFeature.Contrib.GOFeatureFlag as a Cake Addin\n#addin nuget:?package=OpenFeature.Contrib.GOFeatureFlag\n\n// Install OpenFeature.Contrib.GOFeatureFlag as a Cake Tool\n#tool nuget:?package=OpenFeature.Contrib.GOFeatureFlag\n")))),(0,r.kt)("h2",{id:"initialize-your-open-feature-client"},"Initialize your Open Feature client"),(0,r.kt)("p",null,"To evaluate the flags you need to have an Open Feature configured in you app.\nThis code block shows you how you can create a client that you can use in your application."),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using OpenFeature;\nusing OpenFeature.Contrib.GOFeatureFlag;\n\n// ...\n\nvar goFeatureFlagProvider = new GoFeatureFlagProvider(new GoFeatureFlagProviderOptions\n{\n    Endpoint = "http://localhost:1031/",\n    Timeout = new TimeSpan(1000 * TimeSpan.TicksPerMillisecond)\n});\nApi.Instance.SetProvider(goFeatureFlagProvider);\nvar client = Api.Instance.GetClient("my-app");\n')))),(0,r.kt)("h2",{id:"evaluate-your-flag"},"Evaluate your flag"),(0,r.kt)("p",null,"This code block explain how you can create an ",(0,r.kt)("inlineCode",{parentName:"p"},"EvaluationContext")," and use it to evaluate your flag."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this example we are evaluating a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," flag, but other types are available."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Refer to the ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.openfeature.dev/docs/reference/concepts/evaluation-api#basic-evaluation"},"Open Feature documentation")," to know more about it."))),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Context of your flag evaluation.\n// With GO Feature Flag you MUST have a targetingKey that is a unique identifier of the user.\nvar userContext = EvaluationContext.Builder()\n    .Set("targetingKey", "1d1b9238-2591-4a47-94cf-d2bc080892f1") // user unique identifier (mandatory)\n    .Set("firstname", "john")\n    .Set("lastname", "doe")\n    .Set("email", "john.doe@gofeatureflag.org")\n    .Set("admin", true) // this field is used in the targeting rule of the flag "flag-only-for-admin"\n    .Set("anonymous", false)\n    .Build();\n\nvar adminFlag = await client.GetBooleanValue("flag-only-for-admin", false, userContext);\nif (adminFlag) {\n   // flag "flag-only-for-admin" is true for the user\n} else {\n  // flag "flag-only-for-admin" is false for the user\n}\n')))),(0,r.kt)("h2",{id:"contribute-to-the-provider"},"Contribute to the provider"),(0,r.kt)("p",null,"You can find the source of the provider in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-feature/dotnet-sdk-contrib/tree/main/src/OpenFeature.Contrib.Providers.GOFeatureFlag"},(0,r.kt)("inlineCode",{parentName:"a"},"open-feature/dotnet-sdk-contrib"))," repository."))}m.isMDXComponent=!0}}]);