"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1223],{"./src/components/Scrollbar/stories/Scrollbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CarouselPlayground:()=>CarouselPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Scrollbar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Scrollbar=__webpack_require__("./src/components/Scrollbar/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),Toggle=__webpack_require__("./src/components/Toggle/index.tsx"),react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  height: ","px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  padding-right: 12px;\n  padding-bottom: 12px;\n  ","\n  color: var(--admiral-color-Neutral_Neutral90, ",");\n"]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.height}),NotificationItemContent=(0,styled_components_browser_esm.Ay)(Scrollbar.P)(_templateObject1(),function(p){return p.theme.typography["Body/Body 2 Long"]},function(p){return p.theme.color["Neutral/Neutral 90"]}),ScrollbarTemplate=function(){var _useState=_sliced_to_array((0,react.useState)(!1),2),checked=_useState[0],setChecked=_useState[1];return(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,style:{paddingRight:0,display:"flex",maxWidth:600,maxHeight:400,flexDirection:"column"},children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"ScrollContainer"}),(0,jsx_runtime.jsxs)(NotificationItemContent,{forwardedAs:"section",children:["ScrollContainer – контейнер в котором скроллбары выглядят одинаково на всех платформах.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Скролбары появляется автоматически при переполнении.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Отслеживание состояния контейнера происходит через requestAnimationFrame, по этому синхронизация скролбаров происходит при любых изменениях и позволяет организовать внутри контейнера виртуальный скрол и не трогать поведение нативного скрола.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Использование requestAnimationFrame не нагружает браузер, так как в функции обратного вызова происходит только чтение состояния контейнера и только при появлении изменений управление передается на синхронизацию позиции скрола.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Если необходимо расположить скролы вне контейнера, то можно использовать компонент Scrollbars, предварительно отключив нативные скролы на контейнере с помощью миксина hideNativeScrollbarsCss и передав его нод в параметр contentNode",checked&&(0,jsx_runtime.jsx)("div",{style:{width:700,height:500}})]}),(0,jsx_runtime.jsx)(Toggle.l,{checked:checked,onChange:function(event){return setChecked(event.currentTarget.checked)},children:"еще больше переполнить контейнер"})]})};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}let Scrollbar_stories={title:"Admiral-2.1/ScrollContainer",component:Scrollbar.P,parameters:{docs:{source:{code:null}},layout:"centered"},argTypes:{contentBlockProps:{control:!1},verticalScrollProps:{control:!1},horizontalScrollProps:{control:!1}}};var CarouselPlayground={render:function(props){return(0,jsx_runtime.jsx)(ScrollbarTemplate,_object_spread({},props))},parameters:{docs:{source:{code:"import styled from 'styled-components';\nimport { NotificationItem, NotificationItemTitle, ScrollContainer, Toggle } from '@admiral-ds/react-ui';\nimport { useState } from 'react';\n\nconst Separator = styled.div<{ height: number }>`\n  height: ${(p) => p.height}px;\n`;\n\nconst NotificationItemContent = styled(ScrollContainer)`\n  padding-right: 12px;\n  padding-bottom: 12px;\n  ${(p) => p.theme.typography['Body/Body 2 Long']}\n  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});\n`;\n\nexport const ScrollbarTemplate = () => {\n  const [checked, setChecked] = useState(false);\n\n  return (\n    <NotificationItem\n      displayStatusIcon\n      style={{ paddingRight: 0, display: 'flex', maxWidth: 600, maxHeight: 400, flexDirection: 'column' }}\n    >\n      <NotificationItemTitle>ScrollContainer</NotificationItemTitle>\n      <NotificationItemContent forwardedAs=\"section\">\n        ScrollContainer – контейнер в котором скроллбары выглядят одинаково на всех платформах.\n        <Separator height={8} />\n        Скролбары появляется автоматически при переполнении.\n        <Separator height={8} />\n        Отслеживание состояния контейнера происходит через requestAnimationFrame, по этому синхронизация скролбаров\n        происходит при любых изменениях и позволяет организовать внутри контейнера виртуальный скрол и не трогать\n        поведение нативного скрола.\n        <Separator height={8} />\n        Использование requestAnimationFrame не нагружает браузер, так как в функции обратного вызова происходит только\n        чтение состояния контейнера и только при появлении изменений управление передается на синхронизацию позиции\n        скрола.\n        <Separator height={8} />\n        Если необходимо расположить скролы вне контейнера, то можно использовать компонент Scrollbars, предварительно\n        отключив нативные скролы на контейнере с помощью миксина hideNativeScrollbarsCss и передав его нод в параметр\n        contentNode\n        {checked && <div style={{ width: 700, height: 500 }}></div>}\n      </NotificationItemContent>\n      <Toggle checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)}>\n        еще больше переполнить контейнер\n      </Toggle>\n    </NotificationItem>\n  );\n};\n"}}},name:"ScrollContainer"};CarouselPlayground.parameters={...CarouselPlayground.parameters,docs:{...CarouselPlayground.parameters?.docs,source:{originalSource:"{\n  render: CarouselPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ScrollbarTemplateRaw\n      }\n    }\n  },\n  name: 'ScrollContainer'\n}",...CarouselPlayground.parameters?.docs?.source}}};let __namedExportsOrder=["CarouselPlayground"]},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m7.79 3.28c.27.28.73.27 1-.02l4.42-4.8c.24-.27.22-.68-.03-.92a.66.66 0 0 0-.93.04l-3.98 4.34-2.4-2.4a.67.67 0 0 0-.93 0c-.25.25-.25.67 0 .92z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m13-3.92c.25.25.25.66 0 .92l-3.09 3 3 3.08c.26.25.26.66 0 .92-.25.25-.66.25-.91 0l-3-3.09L9 16c-.26.25-.67.25-.92 0a.64.64 0 0 1 0-.92l3-3.08-3-3a.64.64 0 0 1 0-.92.64.64 0 0 1 .92 0l3 3 3.08-3a.64.64 0 0 1 .92 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3c-4.98 0-9 4.02-9 9 0 4.97 4.02 9 9 9a9 9 0 0 0 9-9c0-4.98-4.03-9-9-9m0 10.69c.35 0 .64-.29.64-.65V7.89c0-.35-.29-.65-.64-.65-.36 0-.65.3-.65.65v5.15c0 .36.29.65.65.65m.85 2.21a.856.856 0 0 1-1.71 0 .856.856 0 0 1 1.71 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-4.75c-.47 0-.86.38-.86.84 0 .47.39.86.86.86.46 0 .85-.39.85-.86 0-.46-.39-.84-.85-.84M14.1 16c0 .41-.34.75-.75.75h-.06c-1.13 0-2.04-.92-2.04-2.05v-3.75c0-.42.33-.75.75-.75.41 0 .75.33.75.75v3.75c0 .3.24.55.54.55h.06c.41 0 .75.33.75.75"})))};__webpack_require__.p},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};b=state.rect||{},Object.keys(newRect).some(function(prop){return newRect[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);