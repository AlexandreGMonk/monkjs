"use strict";(self.webpackChunkmonk_website=self.webpackChunkmonk_website||[]).push([[732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||l[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2351:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"picturing",title:"\ud83d\udcf7 Taking pictures",slug:"/js/guides/picturing"},c=void 0,u={unversionedId:"js/guides/picturing",id:"js/guides/picturing",title:"\ud83d\udcf7 Taking pictures",description:"Open a React based project with our favorite IDE, then import the Camera view called `Capture`.",source:"@site/docs/js/guides/picturing.md",sourceDirName:"js/guides",slug:"/js/guides/picturing",permalink:"/monkjs/docs/js/guides/picturing",tags:[],version:"current",frontMatter:{id:"picturing",title:"\ud83d\udcf7 Taking pictures",slug:"/js/guides/picturing"},sidebar:"docsSidebar",previous:{title:"\u2699\ufe0f Setting up",permalink:"/monkjs/docs/js/guides/setting-up"},next:{title:"\ud83d\udd13 Authenticate",permalink:"/monkjs/docs/js/guides/authenticating"}},p=[{value:"What&#39;s next?",id:"whats-next",children:[],level:2}],l={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Open a React based project with our favorite IDE, then import the Camera view called ",(0,o.kt)("inlineCode",{parentName:"p"},"Capture"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/* App.jsx */\n\nimport React, { useCallback, useState } from 'react';\nimport { Capture, Controls } from '@monkvision/camera';\nimport { SafeAreaView, StatusBar } from 'react-native';\n\nexport default function App() {\n  const [loading, setLoading] = useState();\n\n  const handleCapture = useCallback(async (state, api, event) => {\n    event.preventDefault();\n    const { takePictureAsync, startUploadAsync, goNextSight } = api;\n\n    setTimeout(async () => {\n      setLoading(true);\n      const { picture } = await takePictureAsync();\n      console.log('Picture has been taken!')\n      setLoading(false);\n\n      goNextSight();\n\n      const uploadResult = await startUploadAsync(picture);\n      console.log('Upload has succeed!')\n    }, 150);\n  }, []);\n\n  const controls = [{\n    disabled: loading,\n    onPress: handleCapture,\n    ...Controls.CaptureButtonProps,\n  }];\n\n  return (\n    <SafeAreaView>\n      <StatusBar hidden />\n      <Capture\n        inspectionId=\"999999999-0000-0000-9999-999999999999\"\n        controls={controls}\n        loading={loading}\n      />\n    </SafeAreaView>\n  );\n}\n")),(0,o.kt)("p",null,"This will create a tunnel view for taking pictures. ",(0,o.kt)("inlineCode",{parentName:"p"},"<Capture />")," takes callbacks and compose with your own logic."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See the ",(0,o.kt)("a",{parentName:"strong",href:"/docs/js/api/components/capture"},"Capture API")," to more details.")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"You surely want to analyze and manipulate photos via Monk's predictions,\nbut first we will see how to authenticate before executing a request to our API."))}d.isMDXComponent=!0}}]);