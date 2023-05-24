"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[30866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,g=u["".concat(p,".").concat(f)]||u[f]||y[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:21,description:"Getting started with the relay proxy."},i="Getting started",l={unversionedId:"relay_proxy/getting_started",id:"version-v1.10.4/relay_proxy/getting_started",title:"Getting started",description:"Getting started with the relay proxy.",source:"@site/versioned_docs/version-v1.10.4/relay_proxy/getting_started.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/getting_started",permalink:"/docs/relay_proxy/getting_started",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.10.4/relay_proxy/getting_started.md",tags:[],version:"v1.10.4",sidebarPosition:21,frontMatter:{sidebar_position:21,description:"Getting started with the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Install the relay proxy",permalink:"/docs/relay_proxy/install_relay_proxy"},next:{title:"Configure the relay proxy",permalink:"/docs/relay_proxy/configure_relay_proxy"}},p={},s=[{value:"Deployment options",id:"deployment-options",level:2},{value:"Specifying a configuration",id:"specifying-a-configuration",level:2},{value:"Exporting metrics and traces",id:"exporting-metrics-and-traces",level:2},{value:"Service endpoints",id:"service-endpoints",level:2}],c={toc:s},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Before starting your ",(0,a.kt)("strong",{parentName:"p"},"relay proxy")," you will need to create a minimal configuration file.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# this is a minimal config containing only where your flag file is located \nretriever:\n  kind: http\n  url: https://raw.githubusercontent.com/thomaspoignant/go-feature-flag/main/examples/retriever_file/flags.yaml\n")),(0,a.kt)("p",null,"After that you can launch the ",(0,a.kt)("strong",{parentName:"p"},"relay proxy")," by using this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go-feature-flag-relay-proxy --config=/path/to/your/configfile\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"relay proxy")," will read the configuration file and retrieve all the flags.",(0,a.kt)("br",{parentName:"p"}),"\n","After that you can use all the available endpoints ",(0,a.kt)("em",{parentName:"p"},"(see ",(0,a.kt)("strong",{parentName:"em"},"Service endpoints")," section)")," and get the variations for your users."),(0,a.kt)("h2",{id:"deployment-options"},"Deployment options"),(0,a.kt)("p",null,"A common way to run ",(0,a.kt)("strong",{parentName:"p"},"go-feature-flag relay proxy")," is to use the Docker Container.",(0,a.kt)("br",{parentName:"p"}),"\n","An image is available on docker Hub ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/thomaspoignant/go-feature-flag-relay-proxy"},(0,a.kt)("inlineCode",{parentName:"a"},"thomaspoignant/go-feature-flag-relay-proxy")),"."),(0,a.kt)("p",null,"You can also run it as a service in your application following the ",(0,a.kt)("strong",{parentName:"p"},"Installation")," section."),(0,a.kt)("h2",{id:"specifying-a-configuration"},"Specifying a configuration"),(0,a.kt)("p",null,"To configure the relay proxy you should provide a configuration file when launching the instance."),(0,a.kt)("p",null,"The easiest way to provide the file is to use the option ",(0,a.kt)("inlineCode",{parentName:"p"},"--config=/path_to_your_file.yaml"),".",(0,a.kt)("br",{parentName:"p"}),"\n","But if you don't provide this option, the relay proxy will look in these folders if a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"goff-proxy.yaml")," is available."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"current folder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/goff/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/etc/opt/goff/"))),(0,a.kt)("p",null,"To learn how to configure the relay proxy, read ",(0,a.kt)("a",{parentName:"p",href:"./configure_relay_proxy"},"Configuration"),"."),(0,a.kt)("h2",{id:"exporting-metrics-and-traces"},"Exporting metrics and traces"),(0,a.kt)("p",null,"To export the data you can use all the capabilities of ",(0,a.kt)("inlineCode",{parentName:"p"},"go-feature-flag")," SDK.",(0,a.kt)("br",{parentName:"p"}),"\n","To configure it please refer to the ",(0,a.kt)("a",{parentName:"p",href:"./configure_relay_proxy#exporter"},"type ",(0,a.kt)("inlineCode",{parentName:"a"},"exporter")," section")," of the configuration."),(0,a.kt)("h2",{id:"service-endpoints"},"Service endpoints"),(0,a.kt)("p",null,"The Relay Proxy defines many HTTP/HTTPS endpoints.\nMost of these are proxies for GO Feature Flag services, to be used by SDKs that connect to the Relay Proxy.",(0,a.kt)("br",{parentName:"p"}),"\n","Others are specific to the Relay Proxy, such as for monitoring its status."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"./relay_proxy_endpoints"},"endpoints documentation")," to get the full details of what exists in our REST API."))}y.isMDXComponent=!0}}]);