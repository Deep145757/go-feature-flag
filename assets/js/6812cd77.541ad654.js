"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[43265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=u(r),m=n,s=g["".concat(p,".").concat(m)]||g[m]||d[m]||a;return r?o.createElement(s,l(l({ref:t},c),{},{components:r})):o.createElement(s,l({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:5},l="Log Exporter",i={unversionedId:"go_module/data_collection/log",id:"go_module/data_collection/log",title:"Log Exporter",description:"The log exporter is here mostly for backward compatibility (originally every variation were logged, but it can be a lot of data for a default configuration).",source:"@site/docs/go_module/data_collection/log.md",sourceDirName:"go_module/data_collection",slug:"/go_module/data_collection/log",permalink:"/docs/next/go_module/data_collection/log",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/go_module/data_collection/log.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Webhook Exporter",permalink:"/docs/next/go_module/data_collection/webhook"},next:{title:"Custom exporter",permalink:"/docs/next/go_module/data_collection/custom"}},p={},u=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],c={toc:u},g="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(g,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"log-exporter"},"Log Exporter"),(0,n.kt)("p",null,"The log exporter is here mostly for backward compatibility ",(0,n.kt)("em",{parentName:"p"},"(originally every variation were logged, but it can be a lot of data for a default configuration)"),".",(0,n.kt)("br",{parentName:"p"}),"\n","It will use your logger ",(0,n.kt)("inlineCode",{parentName:"p"},"ffclient.Config.Logger")," to log every variation changes."),(0,n.kt)("p",null,"You can configure your output log with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Format")," field.",(0,n.kt)("br",{parentName:"p"}),"\n","It uses a ",(0,n.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"go template")," format."),(0,n.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{\n    // ...\n   DataExporter: ffclient.DataExporter{\n        Exporter: &logsexporter.Exporter{\n            LogFormat: "[{{ .FormattedDate}}] user=\\"{{ .UserKey}}\\", flag=\\"{{ .Key}}\\", value=\\"{{ .Value}}\\"",\n        },\n    },\n    // ...\n}\n')),(0,n.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"LogFormat")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(optional)"),(0,n.kt)("br",null),"LogFormat is the ",(0,n.kt)("a",{parentName:"td",href:"https://golang.org/pkg/text/template/"},"template")," configuration of the output format of your log.",(0,n.kt)("br",null),"You can use all the key from the ",(0,n.kt)("inlineCode",{parentName:"td"},"exporter.FeatureEvent")," + a key called ",(0,n.kt)("inlineCode",{parentName:"td"},"FormattedDate")," that represent the date with the ",(0,n.kt)("strong",{parentName:"td"},"RFC 3339")," Format.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default: ",(0,n.kt)("inlineCode",{parentName:"strong"},'[{{ .FormattedDate}}] user="{{ .UserKey}}", flag="{{ .Key}}", value="{{ .Value}}"')))))),(0,n.kt)("p",null,"Check the ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/logsexporter"},"godoc for full details"),"."))}d.isMDXComponent=!0}}]);