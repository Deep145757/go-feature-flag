"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),g=n,d=c["".concat(s,".").concat(g)]||c[g]||y[g]||o;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:20,description:"Relay proxy is the component that will evaluate the flags, this page explain how to install it."},l="Install the relay proxy",i={unversionedId:"relay_proxy/install_relay_proxy",id:"version-v1.4.0/relay_proxy/install_relay_proxy",title:"Install the relay proxy",description:"Relay proxy is the component that will evaluate the flags, this page explain how to install it.",source:"@site/versioned_docs/version-v1.4.0/relay_proxy/install_relay_proxy.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/install_relay_proxy",permalink:"/docs/relay_proxy/install_relay_proxy",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.4.0/relay_proxy/install_relay_proxy.md",tags:[],version:"v1.4.0",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"Relay proxy is the component that will evaluate the flags, this page explain how to install it."},sidebar:"tutorialSidebar",previous:{title:"Use the relay proxy",permalink:"/docs/category/use-the-relay-proxy"},next:{title:"Getting started",permalink:"/docs/relay_proxy/getting_started"}},s={},p=[{value:"When should I use the GO Feature Flag Relay Proxy?",id:"when-should-i-use-the-go-feature-flag-relay-proxy",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:2},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:2},{value:"Install using docker",id:"install-using-docker",level:2}],u={toc:p},c="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"install-the-relay-proxy"},"Install the relay proxy"),(0,n.kt)("h2",{id:"when-should-i-use-the-go-feature-flag-relay-proxy"},"When should I use the GO Feature Flag Relay Proxy?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you want to access your feature flag using an API instead of the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/thomaspoignant/go-feature-flag"},(0,n.kt)("inlineCode",{parentName:"a"},"thomaspoignant/go-feature-flag"))," SDK."),(0,n.kt)("li",{parentName:"ul"},"If you are not using GOlang to build your application."),(0,n.kt)("li",{parentName:"ul"},"If you want to reduce the number of accesses to your configuration flag by centralizing them.")),(0,n.kt)("h2",{id:"install-using-homebrew-mac-and-linux"},"Install using Homebrew (mac and linux)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-relay-proxy\n")),(0,n.kt)("h2",{id:"install-using-scoop-windows"},"Install using Scoop (windows)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"scoop bucket add org https://github.com/thomaspoignant/scoop.git\nscoop install go-feature-flag-relay-proxy\n")),(0,n.kt)("h2",{id:"install-using-docker"},"Install using docker"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull thomaspoignant/go-feature-flag-relay-proxy:latest\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"More info in the ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/thomaspoignant/go-feature-flag-relay-proxy"},"dockerhub page"),".")))}y.isMDXComponent=!0}}]);