"use strict";(self.webpackChunkmonk_website=self.webpackChunkmonk_website||[]).push([[628],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2048:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>s,toc:()=>l,default:()=>u});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"damage-library",title:"DamageLibrary",slug:"/js/api/components/damage-library"},p=void 0,s={unversionedId:"js/api/components/damage-library",id:"js/api/components/damage-library",isDocsHomePage:!1,title:"DamageLibrary",description:"Interface to display damages in three SVG views of a vehicle (front, back, interior) and one list of damages computed by vehicle parts.",source:"@site/docs/js/api/components/DamageLibrary.md",sourceDirName:"js/api/components",slug:"/js/api/components/damage-library",permalink:"/monkjs/docs/js/api/components/damage-library",tags:[],version:"current",frontMatter:{id:"damage-library",title:"DamageLibrary",slug:"/js/api/components/damage-library"},sidebar:"docsSidebar",previous:{title:"DamageHighlight",permalink:"/monkjs/docs/js/api/components/damage-highlight"},next:{title:"InspectedVehicle",permalink:"/monkjs/docs/js/api/components/inspected-vehicle"}},l=[],m={toc:l};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Interface to display damages in three SVG views of a vehicle")," (front, back, interior) and one list of damages computed by vehicle parts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { DamageLibrary } from '@monkvision/react-native-views';\n")))}u.isMDXComponent=!0}}]);