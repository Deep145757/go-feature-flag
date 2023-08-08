"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[16668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=c(r),d=n,f=y["".concat(p,".").concat(d)]||y[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[y]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:80,title:"Monitoring",description:"Monitor the relay proxy."},i="Monitor the relay proxy",l={unversionedId:"relay_proxy/monitor_relay_proxy",id:"version-v1.14.1/relay_proxy/monitor_relay_proxy",title:"Monitoring",description:"Monitor the relay proxy.",source:"@site/versioned_docs/version-v1.14.1/relay_proxy/monitor_relay_proxy.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/monitor_relay_proxy",permalink:"/docs/relay_proxy/monitor_relay_proxy",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.14.1/relay_proxy/monitor_relay_proxy.md",tags:[],version:"v1.14.1",sidebarPosition:80,frontMatter:{sidebar_position:80,title:"Monitoring",description:"Monitor the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/relay_proxy/deploy_relay_proxy"},next:{title:"Use as a GO module",permalink:"/docs/category/use-as-a-go-module"}},p={},c=[{value:"<code>/health</code>",id:"health",level:2},{value:"<code>/info</code>",id:"info",level:2},{value:"<code>/metrics</code>",id:"metrics",level:2}],s={toc:c},y="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(y,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"monitor-the-relay-proxy"},"Monitor the relay proxy"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"relay proxy")," offer some endpoints for you to be able to see how it behaves."),(0,n.kt)("h2",{id:"health"},(0,n.kt)("inlineCode",{parentName:"h2"},"/health")),(0,n.kt)("p",null,"Making a ",(0,n.kt)("strong",{parentName:"p"},"GET")," request to the URL path ",(0,n.kt)("inlineCode",{parentName:"p"},"/health")," will tell you if the relay proxy is ready to\nserve traffic."),(0,n.kt)("p",null,"This is useful especially for loadbalancer to know that they can send traffic to the service."),(0,n.kt)("h2",{id:"info"},(0,n.kt)("inlineCode",{parentName:"h2"},"/info")),(0,n.kt)("p",null,"Making a ",(0,n.kt)("strong",{parentName:"p"},"GET")," request to the URL path ",(0,n.kt)("inlineCode",{parentName:"p"},"/info")," will give you information about the actual state\nof the relay proxy."),(0,n.kt)("h2",{id:"metrics"},(0,n.kt)("inlineCode",{parentName:"h2"},"/metrics")),(0,n.kt)("p",null,"This endpoint is providing metrics about the relay proxy in the prometheus format."))}u.isMDXComponent=!0}}]);