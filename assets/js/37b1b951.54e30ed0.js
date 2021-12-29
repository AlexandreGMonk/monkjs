"use strict";(self.webpackChunkmonk_website=self.webpackChunkmonk_website||[]).push([[732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92351:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>m});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],p={id:"picturing",title:"\ud83d\udcf7 Taking pictures",slug:"/js/guides/picturing"},u=void 0,c={unversionedId:"js/guides/picturing",id:"js/guides/picturing",isDocsHomePage:!1,title:"\ud83d\udcf7 Taking pictures",description:"Open a React based project with our favorite IDE, then import the Camera view called `CaptureTour`.",source:"@site/docs/js/guides/picturing.md",sourceDirName:"js/guides",slug:"/js/guides/picturing",permalink:"/monkjs/docs/js/guides/picturing",tags:[],version:"current",frontMatter:{id:"picturing",title:"\ud83d\udcf7 Taking pictures",slug:"/js/guides/picturing"},sidebar:"docsSidebar",previous:{title:"\u2699\ufe0f Setting up",permalink:"/monkjs/docs/js/guides/setting-up"},next:{title:"\ud83d\udd13 Authenticate",permalink:"/monkjs/docs/js/guides/authenticating"}},s=[{value:"What&#39;s next?",id:"whats-next",children:[]}],l={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Open a React based project with our favorite IDE, then import the Camera view called ",(0,o.kt)("inlineCode",{parentName:"p"},"CaptureTour"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/* App.jsx */\n\nimport React from 'react';\nimport { useIcons } from '@monkvision/react-native';\nimport { CaptureTour, theme } from '@monkvision/react-native-views';\nimport { Provider as PaperProvider } from 'react-native-paper';\n\nexport default function App() {\n  useIcons();\n\n  return (\n    <PaperProvider theme={theme}>\n      <CaptureTour />\n    </PaperProvider>\n  );\n}\n")),(0,o.kt)("p",null,"This will create a tunnel view for taking pictures. ",(0,o.kt)("inlineCode",{parentName:"p"},"<CaptureTour />")," takes callbacks and compose with your own logic."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See the ",(0,o.kt)("a",{parentName:"strong",href:"/docs/js/api/components/capture-tour"},"CaptureTour API")," to more details.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"You surely want to analyze and manipulate photos via Monk's predictions,\nbut first we will see how to authenticate before executing a request to our API."))}m.isMDXComponent=!0}}]);