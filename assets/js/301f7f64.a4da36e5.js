"use strict";(self.webpackChunkmonk_website=self.webpackChunkmonk_website||[]).push([[840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6624:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>l,default:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"damages",title:"Damages",slug:"/js/api/damages"},p=void 0,c={unversionedId:"js/api/damages",id:"js/api/damages",title:"Damages",description:"npm latest package",source:"@site/docs/js/api/damages.md",sourceDirName:"js/api",slug:"/js/api/damages",permalink:"/monkjs/docs/js/api/damages",tags:[],version:"current",frontMatter:{id:"damages",title:"Damages",slug:"/js/api/damages"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd13 Authenticate",permalink:"/monkjs/docs/js/guides/authenticating"},next:{title:"Images",permalink:"/monkjs/docs/js/api/images"}},l=[{value:"createOneDamage",id:"createonedamage",children:[],level:2},{value:"deleteOneDamage",id:"deleteonedamage",children:[],level:2}],m={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@monkvision/corejs/latest.svg",alt:"npm latest package"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yarn"},"yarn add @monkvision/corejs\n")),(0,o.kt)("h2",{id:"createonedamage"},"createOneDamage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /inspections/${inspectionId}/damages")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { monkApi } from '@monkvision/corejs';\n\nconst handleRequest = async () => {\n  await monkApi.damages.createOne({ inspectionId, data });\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.monk.ai/v1/apidocs/#/Damage/post_damage"},"Try it on api.monk.ai documentation")),(0,o.kt)("h2",{id:"deleteonedamage"},"deleteOneDamage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /inspections/${inspectionId}/damages/${id}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { monkApi } from '@monkvision/corejs';\n\nconst handleRequest = async () => {\n  await monkApi.damages.deleteOne({ id, inspectionId });\n}\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.monk.ai/v1/apidocs/#/Damage/delete_damage"},"Try it on api.monk.ai documentation")))}d.isMDXComponent=!0}}]);