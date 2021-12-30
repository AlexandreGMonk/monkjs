"use strict";(self.webpackChunkmonk_website=self.webpackChunkmonk_website||[]).push([[225],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,v=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(v,o(o({ref:n},l),{},{components:t})):r.createElement(v,o({ref:n},l))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3825:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>l,default:()=>m});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],s={id:"views",title:"Views",slug:"/js/api/views"},p=void 0,c={unversionedId:"js/api/views",id:"js/api/views",isDocsHomePage:!1,title:"Views",description:"npm latest package",source:"@site/docs/js/api/views.md",sourceDirName:"js/api",slug:"/js/api/views",permalink:"/monkjs/docs/js/api/views",tags:[],version:"current",frontMatter:{id:"views",title:"Views",slug:"/js/api/views"},sidebar:"docsSidebar",previous:{title:"Tasks",permalink:"/monkjs/docs/js/api/tasks"},next:{title:"CaptureDamage",permalink:"/monkjs/docs/js/api/components/capture-damage"}},l=[{value:"addOneViewToInspection",id:"addoneviewtoinspection",children:[]},{value:"deleteOneView",id:"deleteoneview",children:[]}],d={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/@monkvision/corejs/latest.svg",alt:"npm latest package"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yarn"},"yarn add @monkvision/corejs\n")),(0,a.kt)("h2",{id:"addoneviewtoinspection"},"addOneViewToInspection"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /inspections/${inspectionId}/views")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { monkApi } from '@monkvision/corejs';\n\nconst handleRequest = async () => {\n  await monkapi.views.addOne({ inspectionId, data });\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.monk.ai/v1/apidocs/#/View/post_view"},"Try it on api.monk.ai")),(0,a.kt)("h2",{id:"deleteoneview"},"deleteOneView"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /inspections/${inspectionId}/views/${id}")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { monkApi } from '@monkvision/corejs';\n\nconst handleRequest = async () => {\n  await monkapi.views.deleteOne({ inspectionId, id });\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.monk.ai/v1/apidocs/#/View/delete_view"},"Try it on api.monk.ai")))}m.isMDXComponent=!0}}]);