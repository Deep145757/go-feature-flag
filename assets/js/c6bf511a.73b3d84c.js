"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,s=d["".concat(p,".").concat(f)]||d[f]||g[f]||o;return r?a.createElement(s,l(l({ref:t},u),{},{components:r})):a.createElement(s,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l="Log Exporter",i={unversionedId:"data_collection/log",id:"data_collection/log",title:"Log Exporter",description:"The log exporter is here mostly for backward compatibility (originally every variation were logged, but it can be a lot of data for a default configuration).",source:"@site/docs/data_collection/log.md",sourceDirName:"data_collection",slug:"/data_collection/log",permalink:"/docs/next/data_collection/log",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/docs/data_collection/log.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage Exporter",permalink:"/docs/next/data_collection/google_cloud_storage"},next:{title:"S3 Exporter",permalink:"/docs/next/data_collection/s3"}},p={},c=[{value:"Configuration example",id:"configuration-example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],u={toc:c};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"log-exporter"},"Log Exporter"),(0,n.kt)("p",null,"The log exporter is here mostly for backward compatibility ",(0,n.kt)("em",{parentName:"p"},"(originally every variation were logged, but it can be a lot of data for a default configuration)"),".",(0,n.kt)("br",{parentName:"p"}),"\n","It will use your logger ",(0,n.kt)("inlineCode",{parentName:"p"},"ffclient.Config.Logger")," to log every variation changes."),(0,n.kt)("p",null,"You can configure your output log with the ",(0,n.kt)("inlineCode",{parentName:"p"},"Format")," field.",(0,n.kt)("br",{parentName:"p"}),"\n","It uses a ",(0,n.kt)("a",{parentName:"p",href:"https://golang.org/pkg/text/template/"},"go template")," format."),(0,n.kt)("h2",{id:"configuration-example"},"Configuration example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go",metastring:'linenums="1"',linenums:'"1"'},'ffclient.Config{\n    // ...\n   DataExporter: ffclient.DataExporter{\n        Exporter: &logsexporter.Exporter{\n            LogFormat: "[{{ .FormattedDate}}] user=\\"{{ .UserKey}}\\", flag=\\"{{ .Key}}\\", value=\\"{{ .Value}}\\"",\n        },\n    },\n    // ...\n}\n')),(0,n.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"LogFormat")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(optional)"),(0,n.kt)("br",null),"LogFormat is the ",(0,n.kt)("a",{parentName:"td",href:"https://golang.org/pkg/text/template/"},"template")," configuration of the output format of your log.",(0,n.kt)("br",null),"You can use all the key from the ",(0,n.kt)("inlineCode",{parentName:"td"},"exporter.FeatureEvent")," + a key called ",(0,n.kt)("inlineCode",{parentName:"td"},"FormattedDate")," that represent the date with the ",(0,n.kt)("strong",{parentName:"td"},"RFC 3339")," Format.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Default: ",(0,n.kt)("inlineCode",{parentName:"strong"},'[{{ .FormattedDate}}] user="{{ .UserKey}}", flag="{{ .Key}}", value="{{ .Value}}"')))))),(0,n.kt)("p",null,"Check the ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/exporter/logsexporter"},"godoc for full details"),"."))}g.isMDXComponent=!0}}]);