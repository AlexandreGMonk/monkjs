"use strict";(self.webpackChunkmonk_website=self.webpackChunkmonk_website||[]).push([[856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=i,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96263:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>m});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"sight",title:"Sight",slug:"/js/api/sight"},c=void 0,l={unversionedId:"js/api/sight",id:"js/api/sight",isDocsHomePage:!1,title:"Sight",description:"A capture scheme is a list of sights Sight] with a unique string id and [cylindrical coordinates.",source:"@site/docs/js/api/Sight.md",sourceDirName:"js/api",slug:"/js/api/sight",permalink:"/monkjs/docs/js/api/sight",tags:[],version:"current",frontMatter:{id:"sight",title:"Sight",slug:"/js/api/sight"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd13 Authenticate",permalink:"/monkjs/docs/js/guides/authenticating"},next:{title:"CaptureDamage",permalink:"/monkjs/docs/js/api/components/capture-damage"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A capture scheme is a list of sights ",(0,a.kt)("inlineCode",{parentName:"p"},"[Sight]")," with a unique string ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cylindrical_coordinate_system"},"cylindrical coordinates"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If our AI can work without this metadata, it analyzes much more easily with it. The Camera view then embeds a list of default sights that you can customize in the near future.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"const sight = new Sight('abstractFront', [null, 0, null], 'Front', ['exterior']);")),(0,a.kt)("p",null,"This scheme will enable a wheel indicator displaying the angle we need to take the picture.\nPlus an overlay is completing the view helping to take position before taking the picture."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'/* pictures */\n{\n  // ...\n  "abstractFront": {\n    "sight": Sight,\n    "source": { "uri":"data:image/png;base64", "width":640, "height":480, "exif":{...} }\n  }\n}\n')))}m.isMDXComponent=!0}}]);