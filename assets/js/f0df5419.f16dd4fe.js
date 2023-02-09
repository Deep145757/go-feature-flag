"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[2854],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(a),p=l,g=f["".concat(i,".").concat(p)]||f[p]||d[p]||r;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[f]="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),l=a(67294),r=a(86010),o=a(12466),u=a(16550),i=a(91980),s=a(67392),c=a(50012);function f(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??f(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,u]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,s]=g({queryString:a,groupId:n}),[f,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=i??f;return p({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),m(e)}),[s,m,r]),tabValues:r}}var k=a(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==u&&(f(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},o,{className:(0,r.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=m(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(b,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},61219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>u,metadata:()=>s,toc:()=>f});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),o=a(85162);const u={sidebar_position:20,description:"What is a flag and how you can create them."},i="How to configure a flag",s={unversionedId:"configure_flag/flag_format",id:"version-v1.0.1/configure_flag/flag_format",title:"How to configure a flag",description:"What is a flag and how you can create them.",source:"@site/versioned_docs/version-v1.0.1/configure_flag/flag_format.mdx",sourceDirName:"configure_flag",slug:"/configure_flag/flag_format",permalink:"/docs/v1.0.1/configure_flag/flag_format",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v1.0.1/configure_flag/flag_format.mdx",tags:[],version:"v1.0.1",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"What is a flag and how you can create them."},sidebar:"tutorialSidebar",previous:{title:"Where to store your configuration flag",permalink:"/docs/v1.0.1/configure_flag/store_your_flags"},next:{title:"How to target specific users",permalink:"/docs/v1.0.1/configure_flag/rule_format"}},c={},f=[{value:"Editor",id:"editor",level:2},{value:"Example",id:"example",level:2},{value:"Format details",id:"format-details",level:2},{value:"Advanced configurations",id:"advanced-configurations",level:2}],d={toc:f},p="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-configure-a-flag"},"How to configure a flag"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"GO Feature Flag")," core feature is to centralize all your feature flags in a source file, and to avoid hosting and maintaining a backend server to manage them."),(0,l.kt)("p",null,"Your file must be a valid ",(0,l.kt)("inlineCode",{parentName:"p"},"YAML"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"TOML")," file with a list of flags\n",(0,l.kt)("em",{parentName:"p"},"(examples: ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"YAML")),",\n",(0,l.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.json"},(0,l.kt)("inlineCode",{parentName:"a"},"JSON")),",\n",(0,l.kt)("a",{parentName:"em",href:"https://github.com/thomaspoignant/go-feature-flag/tree/main/testdata/flag-config.toml"},(0,l.kt)("inlineCode",{parentName:"a"},"TOML")),")"),"."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The easiest way to create your configuration file is to used\n[",(0,l.kt)("strong",{parentName:"p"},"GO Feature Flag Editor")," available at ",(0,l.kt)("a",{parentName:"p",href:"https://editor.gofeatureflag.org"},"https://editor.gofeatureflag.org"),"."),(0,l.kt)("p",{parentName:"admonition"},"If you prefer to do it manually please follow instruction bellow.")),(0,l.kt)("h2",{id:"editor"},"Editor"),(0,l.kt)("p",null,"Creating the first version of the flag is not always pleasant, that's why we have created\n",(0,l.kt)("a",{parentName:"p",href:"https://editor.gofeatureflag.org"},(0,l.kt)("strong",{parentName:"a"},"GO Feature Flag Editor"))," a simple editor to create your files."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"A flag configuration looks like:"),(0,l.kt)(r.Z,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# This is your configuration for your first flag\nfirst-flag:\n  variations: # All possible return value for your feature flag\n    A: false\n    B: true\n  targeting: # If you want to target a subset of your users in particular\n    - query: key eq "random-key"\n      percentage:\n        A: 0\n        B: 100\n  defaultRule: # When no targeting match we use the defaultRule\n    variation: A\n\n# A second example of a flag configuration\nsecond-flag:\n  variations:\n    A: "valueA"\n    B: "valueB"\n    defaultValue: "a default value"\n  targeting:\n    - name: legacyRuleV0\n      query: key eq "not-a-key"\n      percentage:\n        A: 10\n        B: 90\n  defaultRule:\n    name: legacyDefaultRule\n    variation: defaultValue\n  version: "12"\n  experimentation:\n    start: 2021-03-20T00:00:00.1-05:00\n    end: 2021-03-21T00:00:00.1-05:00\n'))),(0,l.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "first-flag": {\n    "variations": {\n      "A": false,\n      "B": true\n    },\n    "targeting": [\n      {\n        "query": "key eq \\"random-key\\"",\n        "percentage": {\n          "A": 0,\n          "B": 100\n        }\n      }\n    ],\n    "defaultRule": {\n      "variation": "A"\n    }\n  },\n\n  "second-flag": {\n    "variations": {\n      "A": "valueA",\n      "B": "valueB",\n      "defaultValue": "a default value"\n    },\n    "targeting": [\n      {\n        "name": "legacyRuleV0",\n        "query": "key eq \\"not-a-key\\"",\n        "percentage": {\n          "A": 10,\n          "B": 90\n        }\n      }\n    ],\n    "defaultRule": {\n      "name": "legacyDefaultRule",\n      "variation": "defaultValue"\n    },\n    "version": "12",\n    "experimentation": {\n      "start": "2021-03-20T05:00:00.100Z",\n      "end": "2021-03-21T05:00:00.100Z"\n    }\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"toml",label:"TOML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'[first-flag.variations]\nA = false\nB = true\n\n[[first-flag.targeting]]\nquery = \'key eq "random-key"\'\n\n  [first-flag.targeting.percentage]\n  A = 0\n  B = 100\n\n[first-flag.defaultRule]\nvariation = "A"\n\n[second-flag]\nversion = "12"\n\n  [second-flag.variations]\n  A = "valueA"\n  B = "valueB"\n  defaultValue = "a default value"\n\n  [[second-flag.targeting]]\n  name = "legacyRuleV0"\n  query = \'key eq "not-a-key"\'\n\n    [second-flag.targeting.percentage]\n    A = 10\n    B = 90\n\n  [second-flag.defaultRule]\n  name = "legacyDefaultRule"\n  variation = "defaultValue"\n\n  [second-flag.experimentation]\n  start = 2021-03-20T05:00:00.100Z\n  end = 2021-03-21T05:00:00.100Z\n')))),(0,l.kt)("h2",{id:"format-details"},"Format details"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Field"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"20%"},(0,l.kt)("strong",null,"flag-key")),(0,l.kt)("td",null,"Name of your flag.",(0,l.kt)("br",null),(0,l.kt)("i",null,"It must be unique.",(0,l.kt)("br",null),"On the example the flag keys are ",(0,l.kt)("code",null,"test-flag")," and ",(0,l.kt)("code",null,"test-flag2"),"."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"variations")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Variations are all the variations available for this flag."),(0,l.kt)("p",null,"It is represented as a key/value element. The key is the name of the variation and the value could be any types available (",(0,l.kt)("code",null,"string"),", ",(0,l.kt)("code",null,"float"),", ",(0,l.kt)("code",null,"int"),", ",(0,l.kt)("code",null,"map"),", ",(0,l.kt)("code",null,"array"),", ",(0,l.kt)("code",null,"bool"),")."),(0,l.kt)("p",null,"You can have as many variation as needed."),(0,l.kt)("pre",null,"# Some examples",(0,l.kt)("br",null),"variationString: test",(0,l.kt)("br",null),"variationBool: true",(0,l.kt)("br",null),"variationInt: 1000",(0,l.kt)("br",null),"variationFloat: 1000.23",(0,l.kt)("br",null),"variationArray: ",(0,l.kt)("br",null),"  - item1",(0,l.kt)("br",null),"  - item2",(0,l.kt)("br",null),"variationObj:",(0,l.kt)("br",null),"  item1: 123",(0,l.kt)("br",null),"  item2: this is a string",(0,l.kt)("br",null),"  item3: false",(0,l.kt)("br",null)))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"targeting"),(0,l.kt)("br",null),(0,l.kt)("i",null,"(optional)")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Targeting contains the list of rules you have to target a subset of your users.",(0,l.kt)("br",null),"You can have as many target as needed."),(0,l.kt)("p",null,"This field is an ",(0,l.kt)("code",null,"array")," and contains a list of rules."),(0,l.kt)("p",null,(0,l.kt)("i",null,"See ",(0,l.kt)("a",{href:"./rule_format"},"rules format")," to have more info on how to write a rule.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"defaultRule")),(0,l.kt)("td",null,(0,l.kt)("p",null,"DefaultRule is the rule that is applied if the user does not match in any targeting."),(0,l.kt)("p",null,(0,l.kt)("i",null,"See ",(0,l.kt)("a",{href:"./rule_format"},"rules format")," to have more info on how to write a rule.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"trackEvents"),(0,l.kt)("br",null),(0,l.kt)("i",null,"(optional)")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"false")," if you don't want to export the data in your data exporter."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Default:")," ",(0,l.kt)("code",null,"true")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"disable"),(0,l.kt)("br",null),(0,l.kt)("i",null,"(optional)")),(0,l.kt)("td",null,(0,l.kt)("p",null,(0,l.kt)("code",null,"true")," if the flag is disabled."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Default:")," ",(0,l.kt)("code",null,"false")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"version"),(0,l.kt)("br",null),(0,l.kt)("i",null,"(optional)")),(0,l.kt)("td",null,(0,l.kt)("p",null,"The version is the version of your flag.",(0,l.kt)("br",null),"This string is used to display the information in the notifiers and data collection, you have to update it your self."),(0,l.kt)("p",null,(0,l.kt)("b",null,"Default:")," ",(0,l.kt)("code",null,'""')))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"scheduledRollout"),(0,l.kt)("br",null),(0,l.kt)("i",null,"(optional)")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Scheduled allow to patch your flag over time."),(0,l.kt)("p",null,"You can add several steps that updates the flag, this is typically used if you want to gradually add more user in your flag."),(0,l.kt)("p",null,(0,l.kt)("i",null,"See ",(0,l.kt)("a",{href:"./rollout/scheduled/"},"Scheduled rollout")," to have more info on how to use it.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"experimentation"),(0,l.kt)("br",null),(0,l.kt)("i",null,"(optional)")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Experimentation allow you to configure a start date and an end date for your flag. When the experimentation is not running, the flag will serve the default value."),(0,l.kt)("p",null,(0,l.kt)("i",null,"See ",(0,l.kt)("a",{href:"./rollout/experimentation/"},"Experimentation rollout")," to have more info on how to use it.")))))),(0,l.kt)("h2",{id:"advanced-configurations"},"Advanced configurations"),(0,l.kt)("p",null,"You can have advanced configurations for your flag to have specific behavior for them, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../category/rollout-strategies/"},"Specific rollout strategies")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/v1.0.1/go_module/data_collection/#dont-track-a-flag"},"Don't track a flag"))))}g.isMDXComponent=!0}}]);