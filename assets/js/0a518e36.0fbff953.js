"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[55715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),l=r(16550),u=r(91980),s=r(67392),p=r(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:r,groupId:n}),[c,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=u??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),v(e)}),[s,v,o]),tabValues:o}}var h=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=s[r].value;n!==l&&(c(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},19050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162);const o={sidebar_position:51,title:"Javascript / Typescript",description:"How to use the OpenFeature Javascript web SDK for your client application"},i="Javascript / Typescript SDK usage",l={unversionedId:"openfeature_sdk/client_providers/openfeature_javascript",id:"version-v1.14.1/openfeature_sdk/client_providers/openfeature_javascript",title:"Javascript / Typescript",description:"How to use the OpenFeature Javascript web SDK for your client application",source:"@site/versioned_docs/version-v1.14.1/openfeature_sdk/client_providers/openfeature_javascript.mdx",sourceDirName:"openfeature_sdk/client_providers",slug:"/openfeature_sdk/client_providers/openfeature_javascript",permalink:"/docs/openfeature_sdk/client_providers/openfeature_javascript",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.1/openfeature_sdk/client_providers/openfeature_javascript.mdx",tags:[],version:"v1.14.1",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"Javascript / Typescript",description:"How to use the OpenFeature Javascript web SDK for your client application"},sidebar:"tutorialSidebar",previous:{title:".NET",permalink:"/docs/openfeature_sdk/server_providers/openfeature_dotnet"},next:{title:"Use the relay proxy",permalink:"/docs/relay_proxy/"}},u={},s=[{value:"About this provider",id:"about-this-provider",level:2},{value:"Install the provider",id:"install-the-provider",level:2},{value:"How to use the provider?",id:"how-to-use-the-provider",level:2},{value:"Available options",id:"available-options",level:3},{value:"Reconnection",id:"reconnection",level:3},{value:"Event streaming",id:"event-streaming",level:3},{value:"Contribute to the provider",id:"contribute-to-the-provider",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript--typescript-sdk-usage"},"Javascript / Typescript SDK usage"),(0,a.kt)("p",null,"This page describe how to use the OpenFeature Javascript web SDK for your client application."),(0,a.kt)("h2",{id:"about-this-provider"},"About this provider"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gofeatureflag.org"},"GO Feature Flag")," provider allows you to connect to your GO Feature Flag instance with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@openfeature/web-sdk"),"."),(0,a.kt)("p",null,"The main difference between this provider and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfeature/go-feature-flag-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"@openfeature/go-feature-flag-provider"))," is that it uses a ",(0,a.kt)("strong",{parentName:"p"},"static evaluation context"),".\nThis provider is more sustainable for client-side implementation."),(0,a.kt)("p",null,"If you want to know more about this pattern, I encourage you to read this ",(0,a.kt)("a",{parentName:"p",href:"https://openfeature.dev/blog/catering-to-the-client-side/"},"blog post"),"."),(0,a.kt)("h2",{id:"install-the-provider"},"Install the provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @openfeature/go-feature-flag-web-provider @openfeature/web-sdk\n")),(0,a.kt)("h2",{id:"how-to-use-the-provider"},"How to use the provider?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const evaluationCtx: EvaluationContext = {\n  targetingKey: 'user-key',\n  email: 'john.doe@gofeatureflag.org',\n  name: 'John Doe',\n};\n\nconst goFeatureFlagWebProvider = new GoFeatureFlagWebProvider({\n  endpoint: endpoint,\n  // ...\n}, logger);\n\nawait OpenFeature.setContext(evaluationCtx); // Set the static context for OpenFeature\nOpenFeature.setProvider(goFeatureFlagWebProvider); // Attach the provider to OpenFeature\nconst client = await OpenFeature.getClient();\n\n// You can now use the client to use your flags\nif(client.getBooleanValue('my-new-feature', false)){\n    //...\n}\n\n// You can add handlers to know what happen in the provider\nclient.addHandler(ProviderEvents.Ready, () => { ... });\nclient.addHandler(ProviderEvents.Error, () => { //... });\nclient.addHandler(ProviderEvents.Stale, () => { //... });\nclient.addHandler(ProviderEvents.ConfigurationChanged, () => { //... });\n")),(0,a.kt)("h3",{id:"available-options"},"Available options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"endpoint is the URL where your GO Feature Flag server is located.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"0 = no timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"(optional) timeout is the time in millisecond we wait for an answer from the server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apiKey"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"(optional) If GO Feature Flag is configured to authenticate the requests, you should provide an API Key to the provider. Please ask the administrator of the relay proxy to provide an API Key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"websocketRetryInitialDelay"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"(optional) initial delay in millisecond to wait before retrying to connect the websocket")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"websocketRetryDelayMultiplier"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"(optional) multiplier of websocketRetryInitialDelay after each failure ",(0,a.kt)("em",{parentName:"td"},"(example: 1st connection retry will be after 100ms, second after 200ms, third after 400ms ...)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"websocketMaxRetries"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"(optional) maximum number of retries before considering the websocket unreachable")))),(0,a.kt)("h3",{id:"reconnection"},"Reconnection"),(0,a.kt)("p",null,"If the connection to the GO Feature Flag instance fails, the provider will attempt to reconnect with an exponential back-off.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"websocketMaxRetries")," can be specified to customize reconnect behavior."),(0,a.kt)("h3",{id:"event-streaming"},"Event streaming"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GoFeatureFlagWebProvider")," receives events from GO Feature Flag with changes.\nCombined with the event API in the web SDK, this allows for subscription to flag value changes in clients."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"client.addHandler(ProviderEvents.ConfigurationChanged, (ctx: EventDetails) => {\n  // do something when the configuration has changed.\n  // ctx.flagsChanged contains the list of changed flags.\n});\n")),(0,a.kt)("h2",{id:"contribute-to-the-provider"},"Contribute to the provider"),(0,a.kt)("p",null,"You can find the source of the provider in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-feature/js-sdk-contrib/tree/main/libs/providers/go-feature-flag-web"},(0,a.kt)("inlineCode",{parentName:"a"},"open-feature/js-sdk-contrib"))," repository."))}d.isMDXComponent=!0}}]);