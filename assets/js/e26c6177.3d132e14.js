"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),l=n(86010),o=n(12466),i=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=d(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=m({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),v=(()=>{const e=u??p;return g({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var v=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(p(t),u(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},31741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),l=n(74866),o=n(85162);const i={},u="Progressive rollout",s={unversionedId:"configure_flag/rollout/progressive",id:"version-v1.12.0/configure_flag/rollout/progressive",title:"Progressive rollout",description:"A progressive rollout allows you to increase the percentage of your flag over time.",source:"@site/versioned_docs/version-v1.12.0/configure_flag/rollout/progressive.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/progressive",permalink:"/docs/configure_flag/rollout/progressive",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.12.0/configure_flag/rollout/progressive.mdx",tags:[],version:"v1.12.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/configure_flag/rollout/experimentation"},next:{title:"Scheduled rollout",permalink:"/docs/configure_flag/rollout/scheduled"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],d={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"progressive-rollout"},"Progressive rollout"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"progressive rollout")," allows you to increase the percentage of your flag over time."),(0,a.kt)("p",null,"You can select a ",(0,a.kt)("strong",{parentName:"p"},"release ramp")," where the percentage of your flag will increase progressively between the start date\nand the end date."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"progressive-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n# highlight-start\n    progressiveRollout:\n      initial:\n        variation: variationB\n        percentage: 0\n        date: 2021-03-20T00:00:00.1-05:00\n      end:\n        variation: variationB\n        percentage: 100\n        date: 2021-03-21T00:00:00.1-05:00\n# highlight-end\n"))),(0,a.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "progressive-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n# highlight-start\n      "progressiveRollout": {\n        "initial": {\n          "variation": "variationB",\n          "percentage": 0,\n          "date": "2021-03-20T05:00:00.100Z"\n        },\n        "end": {\n          "variation": "variationB",\n          "percentage": 100,\n          "date": "2021-03-21T05:00:00.100Z"\n        }\n      },\n# highlight-end\n    }\n  }\n}\n'))),(0,a.kt)(o.Z,{value:"toml",label:"TOML",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[progressive-flag.variations]\nvariationA = "A"\nvariationB = "B"\n# highlight-start\n[progressive-flag.defaultRule.progressiveRollout.initial]\nvariation = "variationB"\npercentage = 0\ndate = 2021-03-20T05:00:00.100Z\n\n[progressive-flag.defaultRule.progressiveRollout.end]\nvariation = "variationB"\npercentage = 100\ndate = 2021-03-21T05:00:00.100Z\n# highlight-end\n')))),(0,a.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The dates are in the format supported natively by your flag file format.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"releaseRamp"))),(0,a.kt)("td",{parentName:"tr",align:null},"It contains the time slot where we will progressively increase the percentage of the flag.",(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("strong",{parentName:"td"},"Before")," the ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," date we will serve the ",(0,a.kt)("inlineCode",{parentName:"td"},"percentage.initial")," percentage of the flag."),(0,a.kt)("li",null,(0,a.kt)("strong",{parentName:"td"},"Between")," ",(0,a.kt)("inlineCode",{parentName:"td"},"start")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," we will serve a percentage of the flag corresponding of the actual time."),(0,a.kt)("li",null,(0,a.kt)("strong",{parentName:"td"},"After")," the ",(0,a.kt)("inlineCode",{parentName:"td"},"end")," date we will serve the ",(0,a.kt)("inlineCode",{parentName:"td"},"percentage.end")," percentage of the flag.")),(0,a.kt)("p",null,"If you have no date in your ",(0,a.kt)("inlineCode",{parentName:"td"},"releaseRamp")," we will not do any progressive rollout and use the top level percentage you have configured ",(0,a.kt)("em",{parentName:"td"},"(0% in our example)"),"."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"percentage"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(optional)"),(0,a.kt)("br",null),"It represents the ramp of progress, at which level the flag starts (",(0,a.kt)("inlineCode",{parentName:"td"},"initial"),") and at which level it ends (",(0,a.kt)("inlineCode",{parentName:"td"},"end"),").",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Default: ",(0,a.kt)("inlineCode",{parentName:"strong"},"initial")," = ",(0,a.kt)("inlineCode",{parentName:"strong"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"strong"},"end")," = ",(0,a.kt)("inlineCode",{parentName:"strong"},"100")))))))}m.isMDXComponent=!0}}]);