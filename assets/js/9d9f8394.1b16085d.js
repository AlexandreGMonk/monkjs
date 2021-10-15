"use strict";(self.webpackChunkmonk_website=self.webpackChunkmonk_website||[]).push([[360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99222:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>m});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"troubleshooting",title:"\ud83e\uddef Troubleshooting",slug:"/troubleshooting"},s=void 0,c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"\ud83e\uddef Troubleshooting",description:"Failed to construct transformer",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/monkjs/docs/troubleshooting",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"\ud83e\uddef Troubleshooting",slug:"/troubleshooting"},sidebar:"docsSidebar",previous:{title:"\ud83d\ude80 react-native-views",permalink:"/monkjs/docs/js/api/react-native-views"}},u=[{value:"<code>Failed to construct transformer</code>",id:"failed-to-construct-transformer",children:[]}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"failed-to-construct-transformer"},(0,a.kt)("inlineCode",{parentName:"h2"},"Failed to construct transformer")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Failed to construct transformer: TypeError: Transformer is not a constructor at getTransformCacheKey\n")),(0,a.kt)("p",null,"This is a ",(0,a.kt)("em",{parentName:"p"},"Metro")," failure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Verify you have ",(0,a.kt)("inlineCode",{parentName:"li"},"metro/src/JSTransformer/worker.js'")," file in your ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"metro.config.js")),(0,a.kt)("li",{parentName:"ol"},"Specify the ",(0,a.kt)("inlineCode",{parentName:"li"},"transformerPath"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* metro.config.js */\n\nconst getConfig = async () => ({\n  transformerPath: require.resolve('metro/src/JSTransformer/worker.js'),\n});\n\nmodule.exports = getConfig();\n")))}m.isMDXComponent=!0}}]);