"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[93539],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var g=r.createContext({}),u=function(e){var t=r.useContext(g),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,g=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,m=p["".concat(g,".").concat(d)]||p[d]||s[d]||a;return o?r.createElement(m,l(l({ref:t},c),{},{components:o})):r.createElement(m,l({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},51767:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:5},l="Google Cloud Storage",i={unversionedId:"go_module/store_file/google_cloud_storage",id:"version-v1.13.0/go_module/store_file/google_cloud_storage",title:"Google Cloud Storage",description:"The Google Cloud Storage Retriever",source:"@site/versioned_docs/version-v1.13.0/go_module/store_file/google_cloud_storage.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/google_cloud_storage",permalink:"/docs/v1.13.0/go_module/store_file/google_cloud_storage",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.13.0/go_module/store_file/google_cloud_storage.md",tags:[],version:"v1.13.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kubernetes configmaps",permalink:"/docs/v1.13.0/go_module/store_file/kubernetes_configmaps"},next:{title:"Github",permalink:"/docs/v1.13.0/go_module/store_file/github"}},g={},u=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],c={toc:u},p="wrapper";function s(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/gcstorageretriever/#Retriever"},(0,n.kt)("strong",{parentName:"a"},"Google Cloud Storage Retriever")),"\nwill use the ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cloud.google.com/go/storage"},"google-cloud-storage package"),"\nand ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/google.golang.org/api/option"},"google-api-options package")," to access your flag in Google Cloud\nStorage."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &gcstorageretriever.Retriever{\n        Options: []option.ClientOption{option.WithoutAuthentication()},\n        Bucket: "2093u4pkasjc3",\n        Object: "flags.yaml",\n    }\n})\ndefer ffclient.Close()\n')),(0,n.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,n.kt)("p",null,"To configure your Google Cloud Storage file location:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"Bucket"))),(0,n.kt)("td",{parentName:"tr",align:null},"The name of your bucket.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"Object"))),(0,n.kt)("td",{parentName:"tr",align:null},"The name of your object in your bucket.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"Option"))),(0,n.kt)("td",{parentName:"tr",align:null},"An instance of ",(0,n.kt)("inlineCode",{parentName:"td"},"option.ClientOption")," that configures your access to Google Cloud. ",(0,n.kt)("br",null)," Check ",(0,n.kt)("a",{parentName:"td",href:"https://cloud.google.com/docs/authentication"},"this documentation for more info"),".")))))}s.isMDXComponent=!0}}]);