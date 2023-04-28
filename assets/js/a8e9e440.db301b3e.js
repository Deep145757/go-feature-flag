"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[62036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,g=d["".concat(i,".").concat(p)]||d[p]||f[p]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),u=n(16550),i=n(91980),s=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=f(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,s]=g({queryString:n,groupId:a}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=i??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),f=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(d(t),i(a))},p=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:f},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=m(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},72169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162);const u={},i="Scheduled rollout",s={unversionedId:"configure_flag/rollout/scheduled",id:"version-v1.8.0/configure_flag/rollout/scheduled",title:"Scheduled rollout",description:"Scheduling introduces the ability for users to changes their flags for future points in time.",source:"@site/versioned_docs/version-v1.8.0/configure_flag/rollout/scheduled.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/scheduled",permalink:"/docs/v1.8.0/configure_flag/rollout/scheduled",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.8.0/configure_flag/rollout/scheduled.mdx",tags:[],version:"v1.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Progressive rollout",permalink:"/docs/v1.8.0/configure_flag/rollout/progressive"},next:{title:"Use as a GO module",permalink:"/docs/v1.8.0/category/use-as-a-go-module"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}],f={toc:d},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scheduled-rollout"},"Scheduled rollout"),(0,r.kt)("p",null,"Scheduling introduces the ability for users to changes their flags for future points in time.\nWhile this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance."),(0,r.kt)("p",null,"For example, you may want to turn a feature ON for internal testing tomorrow and then enable it for your \u2018beta\u2019 user segment four days later."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'scheduled-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n    name: legacyDefaultRule\n    percentage:\n      variationA: 100\n      variationB: 0\n# highlight-start\n  scheduledRollout:\n    - date: 2020-04-10T00:00:00.1+02:00\n      targeting:\n        - name: legacyRuleV0\n          query: beta eq "true"\n          percentage:\n            variationA: 0\n            variationB: 100\n\n    - date: 2022-05-12T15:36:00.1+02:00\n      targeting:\n        - name: legacyRuleV0\n          query: beta eq "false"\n# highlight-end\n'))),(0,r.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scheduled-flag": {\n    "variations": {\n    "variationA": "A",\n    "variationB": "B"\n  },\n    "defaultRule": {\n    "name": "legacyDefaultRule",\n    "percentage": {\n    "variationA": 100,\n    "variationB": 0\n  }\n  },\n    # highlight-start\n    "scheduledRollout": [\n  {\n    "date": "2020-04-09T22:00:00.100Z",\n    "targeting": [\n  {\n    "name": "legacyRuleV0",\n    "query": "beta eq \\"true\\"",\n    "percentage": {\n    "variationA": 0,\n    "variationB": 100\n  }\n  }\n    ]\n  },\n  {\n    "date": "2022-05-12T13:36:00.100Z",\n    "targeting": [\n  {\n    "name": "legacyRuleV0",\n    "query": "beta eq \\"false\\""\n  }\n    ]\n  }\n    ],\n    # highlight-end\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"toml",label:"TOML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[scheduled-flag.variations]\nvariationA = "A"\nvariationB = "B"\n\n[scheduled-flag.defaultRule]\nname = "legacyDefaultRule"\n\n[scheduled-flag.defaultRule.percentage]\nvariationA = 100\nvariationB = 0\n\n# highlight-start\n[[scheduled-flag.scheduledRollout]]\ndate = 2020-04-09T22:00:00.100Z\n\n[[scheduled-flag.scheduledRollout.targeting]]\nname = "legacyRuleV0"\nquery = \'beta eq "true"\'\n\n[scheduled-flag.scheduledRollout.targeting.percentage]\nvariationA = 0\nvariationB = 100\n\n[[scheduled-flag.scheduledRollout]]\ndate = 2022-05-12T13:36:00.100Z\n\n[[scheduled-flag.scheduledRollout.targeting]]\nname = "legacyRuleV0"\nquery = \'beta eq "false"\'\n# highlight-end\n')))),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can change any fields that are available on your flag.\nSince your configuration has not been changed manually, it does not trigger any notifier.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"steps"))),(0,r.kt)("td",{parentName:"tr",align:null},"The only mandatory field in a ",(0,r.kt)("strong",{parentName:"td"},"step")," is the ",(0,r.kt)("inlineCode",{parentName:"td"},"date"),".",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"If no date is provided the step will be skipped."),(0,r.kt)("br",null),(0,r.kt)("br",null),"The other attributes of your ",(0,r.kt)("inlineCode",{parentName:"td"},"step")," are what you want to update your flag, so every field available in the ",(0,r.kt)("a",{parentName:"td",href:"../flag_format"},"flag format")," can be updated.",(0,r.kt)("br",null),"The new value in a field will override the existing one.")))))}g.isMDXComponent=!0}}]);