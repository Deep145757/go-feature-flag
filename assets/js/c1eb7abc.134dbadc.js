"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},y=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=a,m=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return r?n.createElement(m,o(o({ref:t},y),{},{components:r})):n.createElement(m,o({ref:t},y))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:70,description:"Deploy the relay proxy."},o="Deploy the relay proxy",i={unversionedId:"relay_proxy/deploy_relay_proxy",id:"version-v1.4.0/relay_proxy/deploy_relay_proxy",title:"Deploy the relay proxy",description:"Deploy the relay proxy.",source:"@site/versioned_docs/version-v1.4.0/relay_proxy/deploy_relay_proxy.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/deploy_relay_proxy",permalink:"/docs/v1.4.0/relay_proxy/deploy_relay_proxy",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.4.0/relay_proxy/deploy_relay_proxy.md",tags:[],version:"v1.4.0",sidebarPosition:70,frontMatter:{sidebar_position:70,description:"Deploy the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Relay proxy endpoints",permalink:"/docs/v1.4.0/relay_proxy/relay_proxy_endpoints"},next:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/v1.4.0/migrate_v0_v1"}},p={},s=[{value:"Deploy in Kubernetes using Helm",id:"deploy-in-kubernetes-using-helm",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Prepare and Configure the Repository",id:"step-1-prepare-and-configure-the-repository",level:3},{value:"Step 2: Install the Chart",id:"step-2-install-the-chart",level:3},{value:"Step 3: Verify The Chart Installation",id:"step-3-verify-the-chart-installation",level:3}],y={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-the-relay-proxy"},"Deploy the relay proxy"),(0,a.kt)("h2",{id:"deploy-in-kubernetes-using-helm"},"Deploy in Kubernetes using Helm"),(0,a.kt)("p",null,"The relay proxy can be deployed in Kubernetes using a helm chart.",(0,a.kt)("br",{parentName:"p"}),"\n","Helm is an invaluable tool for configuring and deploying applications to a Kubernetes environment."),(0,a.kt)("p",null,"Below are the steps for installing a Helm Chart from a ",(0,a.kt)("strong",{parentName:"p"},"GO Feature Flag")," Helm repository."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access to a Kubernetes cluster"),(0,a.kt)("li",{parentName:"ul"},"Helm CLI installed on the client machine")),(0,a.kt)("h3",{id:"step-1-prepare-and-configure-the-repository"},"Step 1: Prepare and Configure the Repository"),(0,a.kt)("p",null,"Add the repository to Helm with the Helm repository add command and provide a name and the repository URL. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add go-feature-flag https://charts.gofeatureflag.org/\n")),(0,a.kt)("h3",{id:"step-2-install-the-chart"},"Step 2: Install the Chart"),(0,a.kt)("p",null,"Install the Helm Chart with the Helm install command and provide the custom repository name, the chart name and any necessary values files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm install go-feature-flag/relay-proxy -f values.yaml\n")),(0,a.kt)("h3",{id:"step-3-verify-the-chart-installation"},"Step 3: Verify The Chart Installation"),(0,a.kt)("p",null,"Verify the Helm Chart installation with the Helm list command. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm list\n")))}u.isMDXComponent=!0}}]);