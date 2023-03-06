"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var h=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},3585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={},u="Experimentation rollout / A/B Testing",s={unversionedId:"configure_flag/rollout/experimentation",id:"version-v1.2.2/configure_flag/rollout/experimentation",title:"Experimentation rollout / A/B Testing",description:"An experimentation rollout is when your flag is configured to be served only for a determined time.",source:"@site/versioned_docs/version-v1.2.2/configure_flag/rollout/experimentation.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/experimentation",permalink:"/docs/v1.2.2/configure_flag/rollout/experimentation",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.2.2/configure_flag/rollout/experimentation.mdx",tags:[],version:"v1.2.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Canary Release",permalink:"/docs/v1.2.2/configure_flag/rollout/canary"},next:{title:"Progressive rollout",permalink:"/docs/v1.2.2/configure_flag/rollout/progressive"}},c={},p=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2},{value:"A/B testing",id:"ab-testing",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"experimentation-rollout--ab-testing"},"Experimentation rollout / A/B Testing"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"experimentation rollout")," is when your flag is configured to be served only for a determined time."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It means that before the rollout start date, the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," value is served to all users."),(0,r.kt)("li",{parentName:"ol"},"Between the dates the flag is evaluated."),(0,r.kt)("li",{parentName:"ol"},"After the end date the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," value is served to all users.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(o.Z,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"experimentation-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n    percentage:\n      variationA: 50\n      variationB: 50\n  # highlight-start\n  experimentation:\n    start: 2021-03-20T00:00:00.1-05:00\n    end: 2021-03-21T00:00:00.1-05:00\n  # highlight-end\n"))),(0,r.kt)(l.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "experimentation-flag": {\n    "variations": {\n      "variationA": "A",\n      "variationB": "B"\n    },\n    "defaultRule": {\n      "percentage": {\n        "variationA": 50,\n        "variationB": 50\n      }\n    },\n# highlight-start\n    "experimentation": {\n      "start": "2021-03-20T05:00:00.100Z",\n      "end": "2021-03-21T05:00:00.100Z"\n    },\n# highlight-end\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"toml",label:"TOML",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[experimentation-flag.variations]\nvariationA = "A"\nvariationB = "B"\n\n[experimentation-flag.defaultRule.percentage]\nvariationA = 50\nvariationB = 50\n\n# highlight-start\n[experimentation-flag.experimentation]\nstart = 2021-03-20T05:00:00.100Z\nend = 2021-03-21T05:00:00.100Z\n# highlight-end\n')))),(0,r.kt)("p",null,"Check this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/examples/rollout_experimentation"},"example")," to see how it works."),(0,r.kt)("h2",{id:"configuration-fields"},"Configuration fields"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The dates are in the format supported natively by your flag file format.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"start"))),(0,r.kt)("td",{parentName:"tr",align:null},"The date the flag will be started to be served.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"end"))),(0,r.kt)("td",{parentName:"tr",align:null},"The date the flag will be stopped to be served.")))),(0,r.kt)("h2",{id:"ab-testing"},"A/B testing"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A/B test is the shorthand for a simple controlled experiment.\nAs the name implies, two versions (A and B) of a single variable are compared, which are identical except for one variation that might affect a user's behavior.\nA/B tests are widely considered the simplest form of controlled experiment."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"(source wikipedia)")))),(0,r.kt)("p",null,"To have a proper A/B testing solution with the module you should use the experimentation rollout combined with the ",(0,r.kt)("a",{parentName:"p",href:"../../go_module/data_collection/"},"export of your data"),"."),(0,r.kt)("p",null,"This combination will allow to have your experimentation running for a dedicated time, and you will have the data to knows exactly which user was on which version of the flag."),(0,r.kt)("p",null,"To setup the duration of your A/B test you can use a tool ",(0,r.kt)("a",{parentName:"p",href:"https://vwo.com/tools/ab-test-duration-calculator/"},"ab-test-duration-calculator")," from vwo, that will help you to set up the test duration correctly."))}f.isMDXComponent=!0}}]);