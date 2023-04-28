"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[30836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},f=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,y=c["".concat(s,".").concat(p)]||c[p]||h[p]||o;return a?r.createElement(y,l(l({ref:t},f),{},{components:a})):r.createElement(y,l({ref:t},f))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:100},l="Frequently Asked Questions",i={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Why using feature flags?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/next/faq",draft:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/docs/faq.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Lint your config",permalink:"/docs/next/linter"}},s={},u=[{value:"Why using feature flags?",id:"why-using-feature-flags",level:3},{value:"What is the lifecycle of a flag?",id:"what-is-the-lifecycle-of-a-flag",level:3},{value:"What happen if my configuration file is not reachable/deleted?",id:"what-happen-if-my-configuration-file-is-not-reachabledeleted",level:3},{value:"What is the best rollout strategy?",id:"what-is-the-best-rollout-strategy",level:3},{value:"How we ensure that users affected by the feature flags are not always the same?",id:"how-we-ensure-that-users-affected-by-the-feature-flags-are-not-always-the-same",level:3}],f={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,n.kt)("h3",{id:"why-using-feature-flags"},"Why using feature flags?"),(0,n.kt)("p",null,"This one of most common question I get.\nFeature flags are a software development technique that turns certain functionality on and off during runtime, without\ndeploying new code."),(0,n.kt)("p",null,"It allows you to decouple ",(0,n.kt)("strong",{parentName:"p"},"deploy")," and ",(0,n.kt)("strong",{parentName:"p"},"release"),", giving you better control and more experimentation over the full\nlifecycle of features."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"what-is-the-lifecycle-of-a-flag"},"What is the lifecycle of a flag?"),(0,n.kt)("p",null,"The lifecycle of your flags is key if you don't want to have un-used things everywhere in your code. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Start by creating the flag in your configuration file ",(0,n.kt)("em",{parentName:"li"},"(with 0% to avoid affecting your users)"),"."),(0,n.kt)("li",{parentName:"ol"},"Evaluate the flag in your code ",(0,n.kt)("em",{parentName:"li"},"(see ",(0,n.kt)("a",{parentName:"em",href:"/docs/next/go_module/target_user#variation"},"variation"),")"),"."),(0,n.kt)("li",{parentName:"ol"},"Deploy your application with the variation check."),(0,n.kt)("li",{parentName:"ol"},"Start rolling out your flag."),(0,n.kt)("li",{parentName:"ol"},"When 100% of your users have access to the new feature, remove the call to the variation from your code base."),(0,n.kt)("li",{parentName:"ol"},"Deploy your application without the variation check."),(0,n.kt)("li",{parentName:"ol"},"Remove the flag from your configuration file.")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"what-happen-if-my-configuration-file-is-not-reachabledeleted"},"What happen if my configuration file is not reachable/deleted?"),(0,n.kt)("p",null,"If while you are on production for some reason your flag file becomes unreachable, we will be able to serve the users\nbased on the last version of the file we were able to read. We will continue to try reading the file based on\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"pollingInterval")," you have configured."),(0,n.kt)("p",null,"If you start a new instance, if the file is not reachable to module will fail to initialize except if you have set the\noption ",(0,n.kt)("inlineCode",{parentName:"p"},"StartWithRetrieverError")," in the config. With this option, we will serve the SDK default value ",(0,n.kt)("em",{parentName:"p"},"(the 3rd param\nin your variation)")," until the flag becomes available again."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"what-is-the-best-rollout-strategy"},"What is the best rollout strategy?"),(0,n.kt)("p",null,"The lib gives you a lot of strategies to rollout your flags, there is no better one, it always depends on the context\nof your release."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If your release is not critical and, you just want an easy cut-off strategy, you can pass your flag from 0% to 100% for\nall your users"),(0,n.kt)("li",{parentName:"ul"},"If you are scared that your infrastructure can be impacted by the new feature, a progressive rollout can help you to\nimpact users over time and to be able to check how your system handle it."),(0,n.kt)("li",{parentName:"ul"},"If you want to impact only a subset of your users, you can put a rule on your flag."),(0,n.kt)("li",{parentName:"ul"},"Etc ...")),(0,n.kt)("p",null,"You have an endless list of rollout strategies depending on what is your feature."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"how-we-ensure-that-users-affected-by-the-feature-flags-are-not-always-the-same"},"How we ensure that users affected by the feature flags are not always the same?"),(0,n.kt)("p",null,"To avoid always have the same users affected by a flag, the hash we compute that allows us to determine if the user is part of the percentage is not computed only based on the user key but a combination of the user key and the flag name."),(0,n.kt)("p",null,"It guarantees that the user will be always in the same group but depending on the flag."),(0,n.kt)("hr",null))}h.isMDXComponent=!0}}]);