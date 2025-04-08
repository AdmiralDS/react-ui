"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3035],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ArrowLeftOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgArrowLeftOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgArrowLeftOutline=function SvgArrowLeftOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M11.54 18.14c-.13.14-.3.21-.48.21-.16 0-.31-.05-.44-.17l-6.04-5.49a.7.7 0 0 1 0-1.04l6.04-5.49c.27-.24.68-.22.92.04.24.27.23.68-.04.92l-4.84 4.4h10.9c.36 0 .65.29.65.65s-.29.65-.65.65H6.66l4.84 4.4c.26.24.28.65.04.92"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgArrowRightOutline=function SvgArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M11.02 18.14c.12.14.3.21.48.21.16 0 .31-.05.43-.17l6.05-5.49c.31-.28.31-.76 0-1.04l-6.05-5.49a.646.646 0 0 0-.91.04.65.65 0 0 0 .04.92l4.83 4.4H5c-.36 0-.65.29-.65.65s.29.65.65.65h10.89l-4.83 4.4c-.26.24-.28.65-.04.92"})))};__webpack_require__.p},"./src/components/Drawer/stories/Drawer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DrawerCustomContentExample:()=>DrawerCustomContentExample,DrawerMobileExample:()=>DrawerMobileExample,DrawerNonClosableExample:()=>DrawerNonClosableExample,DrawerPositionExample:()=>DrawerPositionExample,DrawerWidthExample:()=>DrawerWidthExample,DrawerWithBackdropExample:()=>DrawerWithBackdropExample,DrawerWithoutBackdropExample:()=>DrawerWithoutBackdropExample,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Drawer_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),getKeyboardFocusableElements=__webpack_require__("./src/components/common/utils/getKeyboardFocusableElements.ts"),parseShadowFromTheme=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),light=__webpack_require__("./src/components/themes/light/index.ts"),manager=__webpack_require__("./src/components/Modal/manager.ts"),IconPlacement=__webpack_require__("./src/components/IconPlacement/index.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),debounce=__webpack_require__("./src/components/common/utils/debounce.ts");function getComputedStyleProperty(node,propertyName){var _node_computedStyleMap_get;return node.computedStyleMap?null==(_node_computedStyleMap_get=node.computedStyleMap().get(propertyName))?void 0:_node_computedStyleMap_get.value:parseInt(getComputedStyle(node).getPropertyValue(propertyName),10)}function resizePaddings(node){var _getComputedStyleProperty,paddingValue=(null!=(_getComputedStyleProperty=getComputedStyleProperty(node,"padding-inline-start"))?_getComputedStyleProperty:0)-(node.offsetWidth-node.clientWidth);node.style.paddingRight="".concat(paddingValue>4?paddingValue:4,"px")}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  margin: 0;
  padding: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  overflow-y: auto;
  outline: none;
  scrollbar-gutter: stable;
  padding-block: 8px;
  padding-inline: `,`;
  height: 100%;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: `,`;
  padding: `,`;

  & > button {
    margin: `,`;
    `,`
  }

  & > button:first-child {
    margin: 0;
  }
`]);return _templateObject2=function _templateObject(){return data},data}var Title=styled_components_browser_esm.Ay.h5(_templateObject(),function(param){return param.$mobile?typography.Il["Header/H6"]:typography.Il["Header/H5"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(param){var $mobile=param.$mobile,$displayCloseIcon=param.$displayCloseIcon;return $mobile?$displayCloseIcon?"0 48px 8px 16px":"0 16px 8px":$displayCloseIcon?"0 56px 8px 24px":"0 24px 8px"}),Content=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){var $mobile=param.$mobile;return"".concat($mobile?16:24,"px")}),ButtonPanel=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){return param.$mobile?"column-reverse":"row-reverse"},function(param){return param.$mobile?"16px 16px 0":"16px 24px 0"},function(param){return param.$mobile?"0 0 16px 0":"0 16px 0 0"},function(param){return param.$mobile&&"width: 100%;"}),DrawerContext=(0,react.createContext)({mobile:!1,displayCloseIcon:!0}),DrawerTitle=function(_param){var children=_param.children,props=_object_without_properties(_param,["children"]),_useContext=(0,react.useContext)(DrawerContext),mobile=_useContext.mobile,displayCloseIcon=_useContext.displayCloseIcon;return(0,jsx_runtime.jsx)(Title,_object_spread_props(_object_spread({$mobile:mobile,$displayCloseIcon:displayCloseIcon,as:mobile?"h6":"h5"},props),{children:children}))},DrawerContent=function(_param){var children=_param.children,props=_object_without_properties(_param,["children"]),contentRef=(0,react.useRef)(null),mobile=(0,react.useContext)(DrawerContext).mobile;return(0,react.useLayoutEffect)(function(){var node=contentRef.current;if(node){resizePaddings(node);var resizeObserver=new ResizeObserver((0,debounce.s)(function(){return resizePaddings(node)},250));return resizeObserver.observe(node),function(){resizeObserver.unobserve(node)}}},[]),(0,jsx_runtime.jsx)(Content,_object_spread_props(_object_spread({tabIndex:-1,ref:contentRef,$mobile:mobile},props),{children:children}))},DrawerButtonPanel=function(_param){var children=_param.children,props=_object_without_properties(_param,["children"]),mobile=(0,react.useContext)(DrawerContext).mobile;return(0,jsx_runtime.jsx)(ButtonPanel,_object_spread_props(_object_spread({$mobile:mobile},props),{children:children}))};try{DrawerTitle.displayName="DrawerTitle",DrawerTitle.__docgenInfo={description:"",displayName:"DrawerTitle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/components.tsx#DrawerTitle"]={docgenInfo:DrawerTitle.__docgenInfo,name:"DrawerTitle",path:"src/components/Drawer/components.tsx#DrawerTitle"})}catch(__react_docgen_typescript_loader_error){}try{DrawerContent.displayName="DrawerContent",DrawerContent.__docgenInfo={description:"",displayName:"DrawerContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/components.tsx#DrawerContent"]={docgenInfo:DrawerContent.__docgenInfo,name:"DrawerContent",path:"src/components/Drawer/components.tsx#DrawerContent"})}catch(__react_docgen_typescript_loader_error){}try{DrawerButtonPanel.displayName="DrawerButtonPanel",DrawerButtonPanel.__docgenInfo={description:"",displayName:"DrawerButtonPanel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/components.tsx#DrawerButtonPanel"]={docgenInfo:DrawerButtonPanel.__docgenInfo,name:"DrawerButtonPanel",path:"src/components/Drawer/components.tsx#DrawerButtonPanel"})}catch(__react_docgen_typescript_loader_error){}function Drawer_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Drawer_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Drawer_define_property(target,key,source[key])})}return target}function Drawer_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Drawer_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Drawer_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Drawer_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=Drawer_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Drawer_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Drawer_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Drawer_templateObject(){var data=Drawer_tagged_template_literal([`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`]);return Drawer_templateObject=function _templateObject(){return data},data}function Drawer_templateObject1(){var data=Drawer_tagged_template_literal([`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`]);return Drawer_templateObject1=function _templateObject(){return data},data}function Drawer_templateObject2(){var data=Drawer_tagged_template_literal([`
  animation-name: `,`;
  animation-duration: `,`;
  animation-timing-function: `,`;
`]);return Drawer_templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=Drawer_tagged_template_literal([`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: var(--admiral-z-index-drawer, `,`);
  `,`
  outline: none;
  pointer-events: none;
  background-color: transparent;
  transition: background-color `,`;

  &[data-visible='true'] {
    `,`
    `,`

    & > div {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 0ms linear 0ms;
      `,`
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=Drawer_tagged_template_literal([`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  `,`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0 24px;
  `,`
  max-width: calc(100% - 16px);
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  box-shadow: var(--admiral-box-shadow-Shadow16, `,`);
  outline: none;
  transform: `,`;
  transition:
    transform `,`,
    opacity 0ms linear 0.3s;
  pointer-events: auto;
  opacity: 0;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=Drawer_tagged_template_literal([`
  position: absolute;
  top: 20px;
  right: `,`px;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=Drawer_tagged_template_literal([""]);return _templateObject6=function _templateObject(){return data},data}var transitionTimingFunc="cubic-bezier(0, 0, 0.2, 1)",transitionDuration="0.3s",transitionMixin=`
  `.concat(transitionDuration," ").concat(transitionTimingFunc,` 0ms
`),fadeInRight=(0,styled_components_browser_esm.i7)(Drawer_templateObject()),fadeInLeft=(0,styled_components_browser_esm.i7)(Drawer_templateObject1()),fadeInMixin=(0,styled_components_browser_esm.AH)(Drawer_templateObject2(),function(param){return"right"===param.$position?fadeInRight:fadeInLeft},transitionDuration,transitionTimingFunc),Overlay=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){return param.theme.zIndex.drawer},function(p){return p.$overlayCssMixin},transitionMixin,function(param){var theme=param.theme;return param.$backdrop&&"background-color: var(--admiral-color-Opacity_Modal, ".concat(theme.color["Opacity/Modal"],");")},function(param){return param.$backdrop&&"pointer-events: auto;"},fadeInMixin),DrawerComponent=styled_components_browser_esm.Ay.div(_templateObject4(),function(param){return"right"===param.$position?"right: 0;":"left: 0;"},function(param){return param.$mobile&&"min-width: calc(100% - 16px);"},function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return(0,parseShadowFromTheme.C)(p.theme.shadow["Shadow 16"])},function(param){return"right"===param.$position?"translateX(100%)":"translateX(-100%)"},transitionMixin),CloseButton=(0,styled_components_browser_esm.Ay)(IconPlacement.H)(_templateObject5(),function(param){return param.$mobile?16:24}),nothing=function(){},Drawer=(0,react.forwardRef)(function(_param,ref){var _param_isOpen=_param.isOpen,isOpen=void 0!==_param_isOpen&&_param_isOpen,tmp=_param.position,_param_backdrop=_param.backdrop,backdrop=void 0===_param_backdrop||_param_backdrop,_param_overlayCssMixin=_param.overlayCssMixin,overlayCssMixin=void 0===_param_overlayCssMixin?(0,styled_components_browser_esm.AH)(_templateObject6()):_param_overlayCssMixin,overlayClassName=_param.overlayClassName,overlayStyle=_param.overlayStyle,container=_param.container,_param_mobile=_param.mobile,mobile=void 0!==_param_mobile&&_param_mobile,onClose=_param.onClose,_param_closeOnEscapeKeyDown=_param.closeOnEscapeKeyDown,closeOnEscapeKeyDown=void 0!==_param_closeOnEscapeKeyDown&&_param_closeOnEscapeKeyDown,_param_closeOnBackdropClick=_param.closeOnBackdropClick,closeOnBackdropClick=void 0!==_param_closeOnBackdropClick&&_param_closeOnBackdropClick,_param_displayCloseIcon=_param.displayCloseIcon,displayCloseIcon=void 0===_param_displayCloseIcon||_param_displayCloseIcon,children=_param.children,locale=_param.locale,_param_closeButtonPropsConfig=_param.closeButtonPropsConfig,props=Drawer_object_without_properties(_param,["isOpen","position","backdrop","overlayCssMixin","overlayClassName","overlayStyle","container","mobile","onClose","closeOnEscapeKeyDown","closeOnBackdropClick","displayCloseIcon","children","locale","closeButtonPropsConfig"]),position=mobile||void 0===tmp?"right":tmp,theme=(0,styled_components_browser_esm.DP)()||light.d,closeBtnAriaLabel=(null==locale?void 0:locale.closeButtonAriaLabel)||theme.locales[theme.currentLocale].modal.closeButtonAriaLabel,drawer=(0,react.useRef)({}),drawerRef=(0,react.useRef)(null),overlayRef=(0,react.useRef)(null),previousFocusedElement=(0,react.useRef)(null);(0,react.useEffect)(function(){overlayRef.current&&(isOpen?overlayRef.current.dataset.visible="true":overlayRef.current.dataset.visible="false")},[isOpen]);var getDrawer=function(){return drawer.current.modalEl=drawerRef.current,drawer.current.containerEl=container||document.body,drawer.current};(0,react.useLayoutEffect)(function(){if(backdrop&&isOpen)return manager.m.add(getDrawer(),container||document.body),drawerRef.current&&manager.m.mount(getDrawer()),function(){manager.m.remove(getDrawer())}},[backdrop,isOpen,container]),(0,react.useLayoutEffect)(function(){if(isOpen){var _drawerRef_current;return previousFocusedElement.current=document.activeElement,null==(_drawerRef_current=drawerRef.current)||_drawerRef_current.focus(),function(){var _previousFocusedElement_current;null==(_previousFocusedElement_current=previousFocusedElement.current)||_previousFocusedElement_current.focus()}}},[isOpen]);var closeButtonProps={dimension:"lSmall","aria-label":closeBtnAriaLabel,$mobile:mobile,onClick:function(event){event.stopPropagation(),null==onClose||onClose()}};return(0,react_dom.createPortal)((0,jsx_runtime.jsx)(Overlay,{ref:overlayRef,tabIndex:-1,onMouseDown:function(event){closeOnBackdropClick&&event.target===overlayRef.current&&(null==onClose||onClose())},onKeyDown:function(event){if("Escape"===event.key&&closeOnEscapeKeyDown)event.preventDefault(),event.stopPropagation(),null==onClose||onClose();else if("Tab"===event.key){var focusableEls=(0,getKeyboardFocusableElements.$)(drawerRef.current);event.shiftKey?(document.activeElement===focusableEls[0]||document.activeElement===drawerRef.current)&&(focusableEls[focusableEls.length-1].focus(),event.preventDefault()):document.activeElement===focusableEls[focusableEls.length-1]&&(focusableEls[0].focus(),event.preventDefault())}},$overlayCssMixin:overlayCssMixin,className:overlayClassName,style:overlayStyle,$backdrop:backdrop,"data-visible":!1,$position:position,children:(0,jsx_runtime.jsxs)(DrawerComponent,Drawer_object_spread_props(Drawer_object_spread({ref:(0,refSetter.d)(ref,drawerRef),tabIndex:-1,role:"dialog","aria-modal":!0,$position:position,$mobile:mobile},props),{children:[(0,jsx_runtime.jsx)(DrawerContext.Provider,{value:{mobile:mobile,displayCloseIcon:displayCloseIcon},children:children}),displayCloseIcon&&(0,jsx_runtime.jsx)(CloseButton,Drawer_object_spread({},closeButtonProps,(void 0===_param_closeButtonPropsConfig?nothing:_param_closeButtonPropsConfig)(closeButtonProps)))]}))}),container||document.body)});Drawer.displayName="Drawer";try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{isOpen:{defaultValue:{value:"false"},description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:{value:"true"},description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:{value:"false"},description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:{value:"false"},description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:{value:"true"},description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:{value:"css``"},description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/index.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"src/components/Drawer/index.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),InputField=__webpack_require__("./src/components/form/InputField/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx"),useId=__webpack_require__("./src/components/common/hooks/useId.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerPlayground_template_define_property(target,key,source[key])})}return target}function DrawerPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function DrawerPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function DrawerPlayground_template_templateObject(){var data=DrawerPlayground_template_tagged_template_literal([`
  height: 20px;
`]);return DrawerPlayground_template_templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(DrawerPlayground_template_templateObject()),DrawerForm=function(param){var onYesClick=param.onYesClick,onNoClick=param.onNoClick,_React_useState=_sliced_to_array(react.useState(""),2),inputValue=_React_useState[0],setInputValue=_React_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(DrawerContent,{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?",(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(InputField.F,{label:"Введите значение",value:inputValue,onChange:function(e){setInputValue(e.target.value)}})]}),(0,jsx_runtime.jsxs)(DrawerButtonPanel,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return onYesClick({inputValue:inputValue})},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:onNoClick,children:"No button"})]})]})},DrawerPlaygroundTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerPlayground_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1],closeButtonProps={"data-testid":(0,useId.B)()};return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open drawer with 2 buttons"}),(0,jsx_runtime.jsxs)(Drawer,DrawerPlayground_template_object_spread_props(DrawerPlayground_template_object_spread({},props),{isOpen:opened,onClose:function(){return setOpened(!1)},style:{width:"480px"},"aria-labelledby":"drawer-title",closeButtonPropsConfig:function(){return closeButtonProps},children:[(0,jsx_runtime.jsx)(DrawerTitle,{id:"drawer-title",children:"Drawer title"}),(0,jsx_runtime.jsx)(DrawerForm,{onYesClick:function(p){console.log("value ".concat(p.inputValue)),setOpened(!1)},onNoClick:function(){return setOpened(!1)}})]}))]})};try{DrawerPlaygroundTemplate.displayName="DrawerPlaygroundTemplate",DrawerPlaygroundTemplate.__docgenInfo={description:"",displayName:"DrawerPlaygroundTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerPlayground.template.tsx#DrawerPlaygroundTemplate"]={docgenInfo:DrawerPlaygroundTemplate.__docgenInfo,name:"DrawerPlaygroundTemplate",path:"src/components/Drawer/stories/DrawerPlayground.template.tsx#DrawerPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx");function DrawerWithBackdrop_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DrawerWithBackdrop_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerWithBackdrop_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DrawerWithBackdrop_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DrawerWithBackdrop_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerWithBackdrop_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerWithBackdrop_template_define_property(target,key,source[key])})}return target}function DrawerWithBackdrop_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerWithBackdrop_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerWithBackdrop_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerWithBackdrop_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerWithBackdrop_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerWithBackdrop_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DrawerWithBackdrop_template_sliced_to_array(arr,i){return DrawerWithBackdrop_template_array_with_holes(arr)||DrawerWithBackdrop_template_iterable_to_array_limit(arr,i)||DrawerWithBackdrop_template_unsupported_iterable_to_array(arr,i)||DrawerWithBackdrop_template_non_iterable_rest()}function DrawerWithBackdrop_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DrawerWithBackdrop_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DrawerWithBackdrop_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DrawerWithBackdrop_template_array_like_to_array(o,minLen)}}function DrawerWithBackdrop_template_templateObject(){var data=DrawerWithBackdrop_template_tagged_template_literal([`
  height: 20px;
`]);return DrawerWithBackdrop_template_templateObject=function _templateObject(){return data},data}var DrawerWithBackdrop_template_Separator=styled_components_browser_esm.Ay.div(DrawerWithBackdrop_template_templateObject()),DrawerWithBackdrop_template_DrawerForm=function(param){var onYesClick=param.onYesClick,onNoClick=param.onNoClick,_React_useState=DrawerWithBackdrop_template_sliced_to_array(react.useState(""),2),inputValue=_React_useState[0],setInputValue=_React_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(DrawerContent,{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?",(0,jsx_runtime.jsx)(DrawerWithBackdrop_template_Separator,{}),(0,jsx_runtime.jsx)(InputField.F,{label:"Введите значение",value:inputValue,onChange:function(e){setInputValue(e.target.value)}})]}),(0,jsx_runtime.jsxs)(DrawerButtonPanel,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return onYesClick({inputValue:inputValue})},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:onNoClick,children:"No button"})]})]})},DrawerWithBackdropTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerWithBackdrop_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=DrawerWithBackdrop_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"По умолчанию Drawer блокирует контент страницы, за это отвечает параметр backdrop, равный по умолчанию true. В этом случае страница затемняется, поверх экрана накладывается цвет Opacity/Modal. Взаимодействовать с контентом страницы при открытой панели нельзя. Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, по нажатию на затемненную область (при closeOnBackdropClick = true), по нажатию на клавишу Escape (при closeOnEscapeKeyDown = true)."}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open drawer with backdrop"}),(0,jsx_runtime.jsxs)(Drawer,DrawerWithBackdrop_template_object_spread_props(DrawerWithBackdrop_template_object_spread({},props),{isOpen:opened,onClose:function(){setOpened(!1)},closeOnBackdropClick:!0,closeOnEscapeKeyDown:!0,style:{width:"480px"},"aria-labelledby":"drawer-title",children:[(0,jsx_runtime.jsx)(DrawerTitle,{id:"drawer-title",children:"Drawer title"}),(0,jsx_runtime.jsx)(DrawerWithBackdrop_template_DrawerForm,{onYesClick:function(p){console.log("value ".concat(p.inputValue)),setOpened(!1)},onNoClick:function(){return setOpened(!1)}})]}))]})};try{DrawerWithBackdropTemplate.displayName="DrawerWithBackdropTemplate",DrawerWithBackdropTemplate.__docgenInfo={description:"",displayName:"DrawerWithBackdropTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerWithBackdrop.template.tsx#DrawerWithBackdropTemplate"]={docgenInfo:DrawerWithBackdropTemplate.__docgenInfo,name:"DrawerWithBackdropTemplate",path:"src/components/Drawer/stories/DrawerWithBackdrop.template.tsx#DrawerWithBackdropTemplate"})}catch(__react_docgen_typescript_loader_error){}function DrawerWithoutBackdrop_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DrawerWithoutBackdrop_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerWithoutBackdrop_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DrawerWithoutBackdrop_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DrawerWithoutBackdrop_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerWithoutBackdrop_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerWithoutBackdrop_template_define_property(target,key,source[key])})}return target}function DrawerWithoutBackdrop_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerWithoutBackdrop_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerWithoutBackdrop_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerWithoutBackdrop_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerWithoutBackdrop_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerWithoutBackdrop_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DrawerWithoutBackdrop_template_sliced_to_array(arr,i){return DrawerWithoutBackdrop_template_array_with_holes(arr)||DrawerWithoutBackdrop_template_iterable_to_array_limit(arr,i)||DrawerWithoutBackdrop_template_unsupported_iterable_to_array(arr,i)||DrawerWithoutBackdrop_template_non_iterable_rest()}function DrawerWithoutBackdrop_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DrawerWithoutBackdrop_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DrawerWithoutBackdrop_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DrawerWithoutBackdrop_template_array_like_to_array(o,minLen)}}function DrawerWithoutBackdrop_template_templateObject(){var data=DrawerWithoutBackdrop_template_tagged_template_literal([`
  height: 20px;
`]);return DrawerWithoutBackdrop_template_templateObject=function _templateObject(){return data},data}var DrawerWithoutBackdrop_template_Separator=styled_components_browser_esm.Ay.div(DrawerWithoutBackdrop_template_templateObject()),DrawerWithoutBackdrop_template_DrawerForm=function(param){var onYesClick=param.onYesClick,onNoClick=param.onNoClick,_React_useState=DrawerWithoutBackdrop_template_sliced_to_array(react.useState(""),2),inputValue=_React_useState[0],setInputValue=_React_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(DrawerContent,{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?",(0,jsx_runtime.jsx)(DrawerWithoutBackdrop_template_Separator,{}),(0,jsx_runtime.jsx)(InputField.F,{label:"Введите значение",value:inputValue,onChange:function(e){setInputValue(e.target.value)}})]}),(0,jsx_runtime.jsxs)(DrawerButtonPanel,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return onYesClick({inputValue:inputValue})},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:onNoClick,children:"No button"})]})]})},DrawerWithoutBackdropTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerWithoutBackdrop_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=DrawerWithoutBackdrop_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Если необходим Drawer без блокировки контента страницы, то необходимо использовать параметр backdrop равный false. В этом случае пользователь сможет одновременно взаимодействовать и с Drawer, и с содержимым страницы. Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, по нажатию на клавишу Escape (при closeOnEscapeKeyDown = true)."}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open drawer without backdrop"}),(0,jsx_runtime.jsxs)(Drawer,DrawerWithoutBackdrop_template_object_spread_props(DrawerWithoutBackdrop_template_object_spread({},props),{isOpen:opened,onClose:function(){setOpened(!1)},backdrop:!1,closeOnEscapeKeyDown:!0,style:{width:"480px"},"aria-labelledby":"drawer-title",children:[(0,jsx_runtime.jsx)(DrawerTitle,{id:"drawer-title",children:"Drawer title"}),(0,jsx_runtime.jsx)(DrawerWithoutBackdrop_template_DrawerForm,{onYesClick:function(p){console.log("value ".concat(p.inputValue)),setOpened(!1)},onNoClick:function(){return setOpened(!1)}})]}))]})};try{DrawerWithoutBackdropTemplate.displayName="DrawerWithoutBackdropTemplate",DrawerWithoutBackdropTemplate.__docgenInfo={description:"",displayName:"DrawerWithoutBackdropTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerWithoutBackdrop.template.tsx#DrawerWithoutBackdropTemplate"]={docgenInfo:DrawerWithoutBackdropTemplate.__docgenInfo,name:"DrawerWithoutBackdropTemplate",path:"src/components/Drawer/stories/DrawerWithoutBackdrop.template.tsx#DrawerWithoutBackdropTemplate"})}catch(__react_docgen_typescript_loader_error){}function DrawerNonClosable_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DrawerNonClosable_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerNonClosable_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DrawerNonClosable_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DrawerNonClosable_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerNonClosable_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerNonClosable_template_define_property(target,key,source[key])})}return target}function DrawerNonClosable_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerNonClosable_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerNonClosable_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerNonClosable_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerNonClosable_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerNonClosable_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DrawerNonClosable_template_sliced_to_array(arr,i){return DrawerNonClosable_template_array_with_holes(arr)||DrawerNonClosable_template_iterable_to_array_limit(arr,i)||DrawerNonClosable_template_unsupported_iterable_to_array(arr,i)||DrawerNonClosable_template_non_iterable_rest()}function DrawerNonClosable_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DrawerNonClosable_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DrawerNonClosable_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DrawerNonClosable_template_array_like_to_array(o,minLen)}}function DrawerNonClosable_template_templateObject(){var data=DrawerNonClosable_template_tagged_template_literal([`
  height: 20px;
`]);return DrawerNonClosable_template_templateObject=function _templateObject(){return data},data}var DrawerNonClosable_template_Separator=styled_components_browser_esm.Ay.div(DrawerNonClosable_template_templateObject()),DrawerNonClosable_template_DrawerForm=function(param){var onYesClick=param.onYesClick,onNoClick=param.onNoClick,_React_useState=DrawerNonClosable_template_sliced_to_array(react.useState(""),2),inputValue=_React_useState[0],setInputValue=_React_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(DrawerContent,{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?",(0,jsx_runtime.jsx)(DrawerNonClosable_template_Separator,{}),(0,jsx_runtime.jsx)(InputField.F,{label:"Введите значение",value:inputValue,onChange:function(e){setInputValue(e.target.value)}})]}),(0,jsx_runtime.jsxs)(DrawerButtonPanel,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return onYesClick({inputValue:inputValue})},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:onNoClick,children:"No button"})]})]})},DrawerNonClosableTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerNonClosable_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=DrawerNonClosable_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"В некоторых случаях применим Drawer с обязательным условием (non-closable Drawer), то есть такая панель, которую можно закрыть только нажав одну из кнопок в футере. Крестик закрытия отсутствует, нажатие на затемненную область ни к чему не приводит. Для того чтобы крестик закрытия отсутствовал используйте параметр displayCloseIcon равный false."}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open non-closable drawer"}),(0,jsx_runtime.jsxs)(Drawer,DrawerNonClosable_template_object_spread_props(DrawerNonClosable_template_object_spread({},props),{isOpen:opened,displayCloseIcon:!1,style:{width:"480px"},"aria-labelledby":"drawer-title",children:[(0,jsx_runtime.jsx)(DrawerTitle,{id:"drawer-title",children:"Drawer title"}),(0,jsx_runtime.jsx)(DrawerNonClosable_template_DrawerForm,{onYesClick:function(p){console.log("value ".concat(p.inputValue)),setOpened(!1)},onNoClick:function(){return setOpened(!1)}})]}))]})};try{DrawerNonClosableTemplate.displayName="DrawerNonClosableTemplate",DrawerNonClosableTemplate.__docgenInfo={description:"",displayName:"DrawerNonClosableTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerNonClosable.template.tsx#DrawerNonClosableTemplate"]={docgenInfo:DrawerNonClosableTemplate.__docgenInfo,name:"DrawerNonClosableTemplate",path:"src/components/Drawer/stories/DrawerNonClosable.template.tsx#DrawerNonClosableTemplate"})}catch(__react_docgen_typescript_loader_error){}var ArrowLeftOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ArrowLeftOutline.svg"),ArrowRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ArrowRightOutline.svg");function DrawerPosition_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DrawerPosition_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerPosition_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DrawerPosition_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DrawerPosition_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerPosition_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerPosition_template_define_property(target,key,source[key])})}return target}function DrawerPosition_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerPosition_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerPosition_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerPosition_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerPosition_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerPosition_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DrawerPosition_template_sliced_to_array(arr,i){return DrawerPosition_template_array_with_holes(arr)||DrawerPosition_template_iterable_to_array_limit(arr,i)||DrawerPosition_template_unsupported_iterable_to_array(arr,i)||DrawerPosition_template_non_iterable_rest()}function DrawerPosition_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DrawerPosition_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DrawerPosition_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DrawerPosition_template_array_like_to_array(o,minLen)}}function DrawerPosition_template_templateObject(){var data=DrawerPosition_template_tagged_template_literal([`
  display: flex;
  justify-content: space-between;
`]);return DrawerPosition_template_templateObject=function _templateObject(){return data},data}function DrawerPosition_template_templateObject1(){var data=DrawerPosition_template_tagged_template_literal([`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, `,`);
`]);return DrawerPosition_template_templateObject1=function _templateObject(){return data},data}var ButtonWrapper=styled_components_browser_esm.Ay.div(DrawerPosition_template_templateObject()),ContentArea=styled_components_browser_esm.Ay.div(DrawerPosition_template_templateObject1(),function(p){return p.theme.color["Success/Success 20"]}),DrawerPositionTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerPosition_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=DrawerPosition_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1],_React_useState1=DrawerPosition_template_sliced_to_array(react.useState("right"),2),position=_React_useState1[0],setPosition=_React_useState1[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Drawer может располагаться как справа (по умолчанию), так и слева. Расположение Drawerа определяется параметром position. При этом, компоновка элементов внутри панели не изменяется в зависимости от расположения."}),(0,jsx_runtime.jsxs)(ButtonWrapper,{children:[(0,jsx_runtime.jsxs)(Button.$n,{onClick:function(){setPosition("left"),setOpened(!0)},children:[(0,jsx_runtime.jsx)(ArrowLeftOutline.h,{}),"Open drawer with 'left' position"]}),(0,jsx_runtime.jsxs)(Button.$n,{onClick:function(){setPosition("right"),setOpened(!0)},children:["Open drawer with 'right' position",(0,jsx_runtime.jsx)(ArrowRightOutline.h,{})]})]}),(0,jsx_runtime.jsxs)(Drawer,DrawerPosition_template_object_spread_props(DrawerPosition_template_object_spread({},props),{isOpen:opened,onClose:function(){setOpened(!1)},position:position,closeOnBackdropClick:!0,closeOnEscapeKeyDown:!0,style:{width:"480px"},"aria-labelledby":"drawer-title",children:[(0,jsx_runtime.jsx)(DrawerTitle,{id:"drawer-title",children:"Drawer title"}),(0,jsx_runtime.jsx)(DrawerContent,{children:(0,jsx_runtime.jsx)(ContentArea,{})})]}))]})};try{DrawerPositionTemplate.displayName="DrawerPositionTemplate",DrawerPositionTemplate.__docgenInfo={description:"",displayName:"DrawerPositionTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerPosition.template.tsx#DrawerPositionTemplate"]={docgenInfo:DrawerPositionTemplate.__docgenInfo,name:"DrawerPositionTemplate",path:"src/components/Drawer/stories/DrawerPosition.template.tsx#DrawerPositionTemplate"})}catch(__react_docgen_typescript_loader_error){}function DrawerMobile_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DrawerMobile_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerMobile_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DrawerMobile_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DrawerMobile_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerMobile_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerMobile_template_define_property(target,key,source[key])})}return target}function DrawerMobile_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerMobile_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerMobile_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerMobile_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerMobile_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerMobile_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DrawerMobile_template_sliced_to_array(arr,i){return DrawerMobile_template_array_with_holes(arr)||DrawerMobile_template_iterable_to_array_limit(arr,i)||DrawerMobile_template_unsupported_iterable_to_array(arr,i)||DrawerMobile_template_non_iterable_rest()}function DrawerMobile_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DrawerMobile_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DrawerMobile_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DrawerMobile_template_array_like_to_array(o,minLen)}}function DrawerMobile_template_templateObject(){var data=DrawerMobile_template_tagged_template_literal([`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, `,`);
`]);return DrawerMobile_template_templateObject=function _templateObject(){return data},data}function DrawerMobile_template_templateObject1(){var data=DrawerMobile_template_tagged_template_literal([`
  height: 8px;
`]);return DrawerMobile_template_templateObject1=function _templateObject(){return data},data}var DrawerMobile_template_ContentArea=styled_components_browser_esm.Ay.div(DrawerMobile_template_templateObject(),function(p){return p.theme.color["Success/Success 20"]}),DrawerMobile_template_Separator=styled_components_browser_esm.Ay.div(DrawerMobile_template_templateObject1()),DrawerMobileTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerMobile_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=DrawerMobile_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:["Адаптируясь на мобильных устройствах, компонент имеет несколько иную структуру, отступы и размеры. На мобильных устройствах компонент всегда появляется с правой стороны экрана. Заполняет весь экран по ширине, кроме стандартного отступа для контента с левой стороны.",(0,jsx_runtime.jsx)(DrawerMobile_template_Separator,{}),"Для того чтобы перевести компонент в адаптивный режим, используйте параметр mobile."]}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open mobile drawer"}),(0,jsx_runtime.jsxs)(Drawer,DrawerMobile_template_object_spread_props(DrawerMobile_template_object_spread({},props),{isOpen:opened,onClose:function(){return setOpened(!1)},mobile:!0,closeOnEscapeKeyDown:!0,"aria-labelledby":"drawer-title",children:[(0,jsx_runtime.jsx)(DrawerTitle,{id:"drawer-title",children:"Drawer title"}),(0,jsx_runtime.jsx)(DrawerContent,{children:(0,jsx_runtime.jsx)(DrawerMobile_template_ContentArea,{})}),(0,jsx_runtime.jsxs)(DrawerButtonPanel,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:function(){return setOpened(!1)},children:"No button"})]})]}))]})};try{DrawerMobileTemplate.displayName="DrawerMobileTemplate",DrawerMobileTemplate.__docgenInfo={description:"",displayName:"DrawerMobileTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerMobile.template.tsx#DrawerMobileTemplate"]={docgenInfo:DrawerMobileTemplate.__docgenInfo,name:"DrawerMobileTemplate",path:"src/components/Drawer/stories/DrawerMobile.template.tsx#DrawerMobileTemplate"})}catch(__react_docgen_typescript_loader_error){}function DrawerWidth_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DrawerWidth_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerWidth_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DrawerWidth_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DrawerWidth_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerWidth_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerWidth_template_define_property(target,key,source[key])})}return target}function DrawerWidth_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerWidth_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerWidth_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerWidth_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerWidth_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerWidth_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DrawerWidth_template_sliced_to_array(arr,i){return DrawerWidth_template_array_with_holes(arr)||DrawerWidth_template_iterable_to_array_limit(arr,i)||DrawerWidth_template_unsupported_iterable_to_array(arr,i)||DrawerWidth_template_non_iterable_rest()}function DrawerWidth_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DrawerWidth_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DrawerWidth_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DrawerWidth_template_array_like_to_array(o,minLen)}}function DrawerWidth_template_templateObject(){var data=DrawerWidth_template_tagged_template_literal([`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, `,`);
`]);return DrawerWidth_template_templateObject=function _templateObject(){return data},data}var DrawerWidth_template_ContentArea=styled_components_browser_esm.Ay.div(DrawerWidth_template_templateObject(),function(p){return p.theme.color["Success/Success 20"]}),DrawerWidthTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerWidth_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=DrawerWidth_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Ширина компонента задается пользователем. Drawer подстраивает свою ширину под ширину контента, либо пользователь может задать ширину компонента напрямую через параметры style или используя classname."}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open drawer"}),(0,jsx_runtime.jsxs)(Drawer,DrawerWidth_template_object_spread_props(DrawerWidth_template_object_spread({},props),{isOpen:opened,onClose:function(){return setOpened(!1)},closeOnBackdropClick:!0,closeOnEscapeKeyDown:!0,"aria-labelledby":"drawer-title",children:[(0,jsx_runtime.jsx)(DrawerTitle,{id:"drawer-title",children:"Drawer title"}),(0,jsx_runtime.jsx)(DrawerContent,{style:{width:"500px"},children:(0,jsx_runtime.jsx)(DrawerWidth_template_ContentArea,{})})]}))]})};try{DrawerWidthTemplate.displayName="DrawerWidthTemplate",DrawerWidthTemplate.__docgenInfo={description:"",displayName:"DrawerWidthTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerWidth.template.tsx#DrawerWidthTemplate"]={docgenInfo:DrawerWidthTemplate.__docgenInfo,name:"DrawerWidthTemplate",path:"src/components/Drawer/stories/DrawerWidth.template.tsx#DrawerWidthTemplate"})}catch(__react_docgen_typescript_loader_error){}var CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx");function DrawerCustomContent_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DrawerCustomContent_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DrawerCustomContent_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DrawerCustomContent_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DrawerCustomContent_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DrawerCustomContent_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DrawerCustomContent_template_define_property(target,key,source[key])})}return target}function DrawerCustomContent_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DrawerCustomContent_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DrawerCustomContent_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DrawerCustomContent_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DrawerCustomContent_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DrawerCustomContent_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DrawerCustomContent_template_sliced_to_array(arr,i){return DrawerCustomContent_template_array_with_holes(arr)||DrawerCustomContent_template_iterable_to_array_limit(arr,i)||DrawerCustomContent_template_unsupported_iterable_to_array(arr,i)||DrawerCustomContent_template_non_iterable_rest()}function DrawerCustomContent_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DrawerCustomContent_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DrawerCustomContent_template_array_like_to_array(o,minLen)}}var DrawerCustomContentTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DrawerCustomContent_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=DrawerCustomContent_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Наполнение Drawer контентом полностью контролируется пользователем. Пользователь может разместить внутри Drawer любые свои компоненты, а также может воспользоваться вспомогательными компонентами DrawerTitle, DrawerContent, DrawerButtonPanel, экспортируемыми из библиотеки @admiral-ds/react-ui."}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open drawer with custom content"}),(0,jsx_runtime.jsxs)(Drawer,DrawerCustomContent_template_object_spread_props(DrawerCustomContent_template_object_spread({},props),{isOpen:opened,onClose:function(){return setOpened(!1)},"aria-labelledby":"drawer-title",children:[(0,jsx_runtime.jsx)("h1",{id:"drawer-title",style:{paddingLeft:"24px"},children:(0,jsx_runtime.jsx)("strong",{children:"Drawer title"})}),(0,jsx_runtime.jsxs)(DrawerContent,{style:{maxWidth:550},children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{children:"Lorem ipsum dolor"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)("i",{style:{padding:"0 24px",height:"100%"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"})]}),(0,jsx_runtime.jsxs)("div",{style:{marginTop:"8px",display:"flex",justifyContent:"center",width:"100%",gap:24,alignSelf:"flex-end"},children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"First button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"Second button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"Third button"})]})]}))]})};try{DrawerCustomContentTemplate.displayName="DrawerCustomContentTemplate",DrawerCustomContentTemplate.__docgenInfo={description:"",displayName:"DrawerCustomContentTemplate",props:{isOpen:{defaultValue:null,description:"Состояние компонента: открыт/закрыт",name:"isOpen",required:!1,type:{name:"boolean"}},position:{defaultValue:null,description:"С какой части экрана будет выдвигаться компонент (right по умолчанию)",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},backdrop:{defaultValue:null,description:"Наличие затемненного фона, блокирующего контент страницы",name:"backdrop",required:!1,type:{name:"boolean"}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение компонента (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:`Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
По умолчанию при открытии компонента фокус проставляется внутри него.
Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
в этом случае нажатие на клавишу Escape обработано не будет.`,name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnBackdropClick:{defaultValue:null,description:"Закрытие на клик по затемненному фону (если backdrop = true)",name:"closeOnBackdropClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике по затемненному фону и closeOnBackdropClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayCssMixin:{defaultValue:null,description:`Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayCssMixin",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку drawerа",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку drawerа",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/stories/DrawerCustomContent.template.tsx#DrawerCustomContentTemplate"]={docgenInfo:DrawerCustomContentTemplate.__docgenInfo,name:"DrawerCustomContentTemplate",path:"src/components/Drawer/stories/DrawerCustomContent.template.tsx#DrawerCustomContentTemplate"})}catch(__react_docgen_typescript_loader_error){}let DrawerPlayground_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField, useId } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 20px;
\`;

type Props = {
  onYesClick: (p: { inputValue: string }) => void;
  onNoClick: () => void;
};

const DrawerForm = ({ onYesClick, onNoClick }: Props) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <DrawerContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <InputField
          label="Введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </DrawerContent>
      <DrawerButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </DrawerButtonPanel>
    </>
  );
};

export const DrawerPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);
  const closeButtonProps = { 'data-testid': useId() };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button onClick={() => setOpened(true)}>Open drawer with 2 buttons</Button>
      <Drawer
        {...props}
        isOpen={opened}
        onClose={() => setOpened(false)}
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
        closeButtonPropsConfig={() => closeButtonProps}
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            // eslint-disable-next-line no-console
            console.log(\`value \${p.inputValue}\`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};
`,DrawerWithBackdrop_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 20px;
\`;

type Props = {
  onYesClick: (p: { inputValue: string }) => void;
  onNoClick: () => void;
};

const DrawerForm = ({ onYesClick, onNoClick }: Props) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <DrawerContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <InputField
          label="Введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </DrawerContent>
      <DrawerButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </DrawerButtonPanel>
    </>
  );
};

export const DrawerWithBackdropTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        По умолчанию Drawer блокирует контент страницы, за это отвечает параметр backdrop, равный по умолчанию true. В
        этом случае страница затемняется, поверх экрана накладывается цвет Opacity/Modal. Взаимодействовать с контентом
        страницы при открытой панели нельзя. Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в
        футере панели, по нажатию на затемненную область (при closeOnBackdropClick = true), по нажатию на клавишу Escape
        (при closeOnEscapeKeyDown = true).
      </T>
      <Button onClick={() => setOpened(true)}>Open drawer with backdrop</Button>
      <Drawer
        {...props}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            // eslint-disable-next-line no-console
            console.log(\`value \${p.inputValue}\`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};
`,DrawerWithoutBackdrop_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 20px;
\`;

type Props = {
  onYesClick: (p: { inputValue: string }) => void;
  onNoClick: () => void;
};

const DrawerForm = ({ onYesClick, onNoClick }: Props) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <DrawerContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <InputField
          label="Введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </DrawerContent>
      <DrawerButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </DrawerButtonPanel>
    </>
  );
};

export const DrawerWithoutBackdropTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Если необходим Drawer без блокировки контента страницы, то необходимо использовать параметр backdrop равный
        false. В этом случае пользователь сможет одновременно взаимодействовать и с Drawer, и с содержимым страницы.
        Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, по нажатию на клавишу
        Escape (при closeOnEscapeKeyDown = true).
      </T>
      <Button onClick={() => setOpened(true)}>Open drawer without backdrop</Button>
      <Drawer
        {...props}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        backdrop={false}
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            // eslint-disable-next-line no-console
            console.log(\`value \${p.inputValue}\`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};
`,DrawerNonClosable_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, InputField, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 20px;
\`;

type Props = {
  onYesClick: (p: { inputValue: string }) => void;
  onNoClick: () => void;
};

const DrawerForm = ({ onYesClick, onNoClick }: Props) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      <DrawerContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <InputField
          label="Введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </DrawerContent>
      <DrawerButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </DrawerButtonPanel>
    </>
  );
};

export const DrawerNonClosableTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В некоторых случаях применим Drawer с обязательным условием (non-closable Drawer), то есть такая панель, которую
        можно закрыть только нажав одну из кнопок в футере. Крестик закрытия отсутствует, нажатие на затемненную область
        ни к чему не приводит. Для того чтобы крестик закрытия отсутствовал используйте параметр displayCloseIcon равный
        false.
      </T>
      <Button onClick={() => setOpened(true)}>Open non-closable drawer</Button>
      <Drawer
        {...props}
        isOpen={opened}
        displayCloseIcon={false}
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            // eslint-disable-next-line no-console
            console.log(\`value \${p.inputValue}\`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};
`,DrawerPosition_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, Button, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ButtonWrapper = styled.div\`
  display: flex;
  justify-content: space-between;
\`;
const ContentArea = styled.div\`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, \${(p) => p.theme.color['Success/Success 20']});
\`;

export const DrawerPositionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);
  const [position, setPosition] = React.useState<DrawerProps['position']>('right');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Drawer может располагаться как справа (по умолчанию), так и слева. Расположение Drawerа определяется параметром
        position. При этом, компоновка элементов внутри панели не изменяется в зависимости от расположения.
      </T>
      <ButtonWrapper>
        <Button
          onClick={() => {
            setPosition('left');
            setOpened(true);
          }}
        >
          <ArrowLeftOutline />
          Open drawer with 'left' position
        </Button>
        <Button
          onClick={() => {
            setPosition('right');
            setOpened(true);
          }}
        >
          Open drawer with 'right' position
          <ArrowRightOutline />
        </Button>
      </ButtonWrapper>
      <Drawer
        {...props}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        position={position}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <ContentArea />
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
};
`,DrawerMobile_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, DrawerButtonPanel, Button, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ContentArea = styled.div\`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, \${(p) => p.theme.color['Success/Success 20']});
\`;
const Separator = styled.div\`
  height: 8px;
\`;

export const DrawerMobileTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Адаптируясь на мобильных устройствах, компонент имеет несколько иную структуру, отступы и размеры. На мобильных
        устройствах компонент всегда появляется с правой стороны экрана. Заполняет весь экран по ширине, кроме
        стандартного отступа для контента с левой стороны.
        <Separator />
        Для того чтобы перевести компонент в адаптивный режим, используйте параметр mobile.
      </T>
      <Button onClick={() => setOpened(true)}>Open mobile drawer</Button>
      <Drawer
        {...props}
        isOpen={opened}
        onClose={() => setOpened(false)}
        mobile
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <ContentArea />
        </DrawerContent>
        <DrawerButtonPanel>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Yes button
          </Button>
          <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
            No button
          </Button>
        </DrawerButtonPanel>
      </Drawer>
    </ThemeProvider>
  );
};
`,DrawerWidth_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, DrawerTitle, DrawerContent, Button, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ContentArea = styled.div\`
  display: flex;
  height: 100%;
  background: var(--admiral-color-Success_Success20, \${(p) => p.theme.color['Success/Success 20']});
\`;

export const DrawerWidthTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Ширина компонента задается пользователем. Drawer подстраивает свою ширину под ширину контента, либо пользователь
        может задать ширину компонента напрямую через параметры style или используя classname.
      </T>
      <Button onClick={() => setOpened(true)}>Open drawer</Button>
      <Drawer
        {...props}
        isOpen={opened}
        onClose={() => setOpened(false)}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent style={{ width: '500px' }}>
          <ContentArea />
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
};
`,DrawerCustomContent_templateraw_namespaceObject=`import * as React from 'react';
import { Drawer, Button, CheckboxField, DrawerContent, T } from '@admiral-ds/react-ui';
import type { DrawerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const DrawerCustomContentTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DrawerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Наполнение Drawer контентом полностью контролируется пользователем. Пользователь может разместить внутри Drawer
        любые свои компоненты, а также может воспользоваться вспомогательными компонентами DrawerTitle, DrawerContent,
        DrawerButtonPanel, экспортируемыми из библиотеки @admiral-ds/react-ui.
      </T>
      <Button onClick={() => setOpened(true)}>Open drawer with custom content</Button>
      <Drawer {...props} isOpen={opened} onClose={() => setOpened(false)} aria-labelledby="drawer-title">
        <h1 id="drawer-title" style={{ paddingLeft: '24px' }}>
          <strong>Drawer title</strong>
        </h1>
        <DrawerContent style={{ maxWidth: 550 }}>
          <CheckboxField>Lorem ipsum dolor</CheckboxField>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <i style={{ padding: '0 24px', height: '100%' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
        </DrawerContent>
        <div
          style={{
            marginTop: '8px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: 24,
            alignSelf: 'flex-end',
          }}
        >
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            First button
          </Button>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Second button
          </Button>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Third button
          </Button>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};
`;function Drawer_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Drawer_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Drawer_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Drawer_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Drawer_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Drawer_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Drawer_stories_define_property(target,key,source[key])})}return target}function Drawer_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Drawer_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Drawer_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Drawer_stories_sliced_to_array(arr,i){return Drawer_stories_array_with_holes(arr)||Drawer_stories_iterable_to_array_limit(arr,i)||Drawer_stories_unsupported_iterable_to_array(arr,i)||Drawer_stories_non_iterable_rest()}function Drawer_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Drawer_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Drawer_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Drawer_stories_array_like_to_array(o,minLen)}}function Drawer_stories_templateObject(){var data=Drawer_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Drawer_stories_templateObject=function _templateObject(){return data},data}function Drawer_stories_templateObject1(){var data=Drawer_stories_tagged_template_literal([`
  height: 20px;
`]);return Drawer_stories_templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Drawer_stories_templateObject()),Drawer_stories_Separator=styled_components_browser_esm.Ay.div(Drawer_stories_templateObject1());let Drawer_stories={title:"Admiral-2.1/Drawer",decorators:void 0,component:Drawer,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент Drawer — это панель, которая накладывается поверх страницы, выдвигаясь c правой или левой части экрана. Он содержит набор информации или действий. Поскольку пользователь может взаимодействовать с Drawer, не покидая текущую страницу, задачи могут выполняться более эффективно в том же контексте. Используется для детализации, создания или редактирования информации.",(0,jsx_runtime.jsx)(Drawer_stories_Separator,{}),"Drawer может быть как с блокировкой контента под ним, в таком случае страница затемняется, либо без блокировки, тогда пользователь может одновременно взаимодействовать и с Drawer, и с содержимым страницы.",(0,jsx_runtime.jsx)(Drawer_stories_Separator,{}),"Ширина компонента задается пользователем. Примыкает вплотную к трем сторонам рабочей области браузера. Не адаптируется по ширине, но изменяет высоту, адаптируясь под высоту окна браузера."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=156590-123731&t=Yf2eZgLCEQLDBxVT-4"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=156738-124020&t=Yf2eZgLCEQLDBxVT-4"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=165565-157419&t=Yf2eZgLCEQLDBxVT-4"}]},argTypes:{isOpen:{control:{type:"boolean"}},position:{options:["right","left"],control:{type:"radio"}},backdrop:{control:{type:"boolean"}},mobile:{control:{type:"boolean"}},closeOnEscapeKeyDown:{control:{type:"boolean"}},closeOnBackdropClick:{control:{type:"boolean"}},displayCloseIcon:{control:{type:"boolean"}},overlayClassName:{control:{type:"text"}},container:{control:!1},overlayCssMixin:{control:!1},overlayStyle:{control:!1},locale:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var Playground={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerPlaygroundTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerPlayground_templateraw_namespaceObject}}}},DrawerWithBackdropExample={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerWithBackdropTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerWithBackdrop_templateraw_namespaceObject}}},name:"Drawer с блокировкой контента страницы (Backdrop = True)"},DrawerWithoutBackdropExample={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerWithoutBackdropTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerWithoutBackdrop_templateraw_namespaceObject}}},name:"Drawer без блокировки контента страницы (Backdrop = False)"},DrawerNonClosableExample={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerNonClosableTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerNonClosable_templateraw_namespaceObject}}},name:"Drawer с обязательным условием (non-closable Drawer)"},DrawerPositionExample={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerPositionTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerPosition_templateraw_namespaceObject}}},name:"Drawer. Расположение компонента"},DrawerMobileExample={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerMobileTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerMobile_templateraw_namespaceObject}}},name:"Drawer. Адаптив (mobile)"},DrawerWidthExample={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerWidthTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerWidth_templateraw_namespaceObject}}},name:"Drawer. Ширина компонента"},DrawerCustomContentExample={render:function(props){var CSSCustomProps=Drawer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DrawerCustomContentTemplate,Drawer_stories_object_spread_props(Drawer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DrawerCustomContent_templateraw_namespaceObject}}},name:"Drawer. Свободное (кастомизированное) наполнение"};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: DrawerPlaygroundRaw
      }
    }
  }
}`,...Playground.parameters?.docs?.source}}},DrawerWithBackdropExample.parameters={...DrawerWithBackdropExample.parameters,docs:{...DrawerWithBackdropExample.parameters?.docs,source:{originalSource:`{
  render: DrawerWithBackdropStory,
  parameters: {
    docs: {
      source: {
        code: DrawerWithBackdropRaw
      }
    }
  },
  name: 'Drawer с блокировкой контента страницы (Backdrop = True)'
}`,...DrawerWithBackdropExample.parameters?.docs?.source}}},DrawerWithoutBackdropExample.parameters={...DrawerWithoutBackdropExample.parameters,docs:{...DrawerWithoutBackdropExample.parameters?.docs,source:{originalSource:`{
  render: DrawerWithoutBackdropStory,
  parameters: {
    docs: {
      source: {
        code: DrawerWithoutBackdropRaw
      }
    }
  },
  name: 'Drawer без блокировки контента страницы (Backdrop = False)'
}`,...DrawerWithoutBackdropExample.parameters?.docs?.source}}},DrawerNonClosableExample.parameters={...DrawerNonClosableExample.parameters,docs:{...DrawerNonClosableExample.parameters?.docs,source:{originalSource:`{
  render: DrawerNonClosableStory,
  parameters: {
    docs: {
      source: {
        code: DrawerNonClosableRaw
      }
    }
  },
  name: 'Drawer с обязательным условием (non-closable Drawer)'
}`,...DrawerNonClosableExample.parameters?.docs?.source}}},DrawerPositionExample.parameters={...DrawerPositionExample.parameters,docs:{...DrawerPositionExample.parameters?.docs,source:{originalSource:`{
  render: DrawerPositionStory,
  parameters: {
    docs: {
      source: {
        code: DrawerPositionRaw
      }
    }
  },
  name: 'Drawer. Расположение компонента'
}`,...DrawerPositionExample.parameters?.docs?.source}}},DrawerMobileExample.parameters={...DrawerMobileExample.parameters,docs:{...DrawerMobileExample.parameters?.docs,source:{originalSource:`{
  render: DrawerMobileStory,
  parameters: {
    docs: {
      source: {
        code: DrawerMobileRaw
      }
    }
  },
  name: 'Drawer. Адаптив (mobile)'
}`,...DrawerMobileExample.parameters?.docs?.source}}},DrawerWidthExample.parameters={...DrawerWidthExample.parameters,docs:{...DrawerWidthExample.parameters?.docs,source:{originalSource:`{
  render: DrawerWidthStory,
  parameters: {
    docs: {
      source: {
        code: DrawerWidthRaw
      }
    }
  },
  name: 'Drawer. Ширина компонента'
}`,...DrawerWidthExample.parameters?.docs?.source}}},DrawerCustomContentExample.parameters={...DrawerCustomContentExample.parameters,docs:{...DrawerCustomContentExample.parameters?.docs,source:{originalSource:`{
  render: DrawerCustomContentStory,
  parameters: {
    docs: {
      source: {
        code: DrawerCustomContentRaw
      }
    }
  },
  name: 'Drawer. Свободное (кастомизированное) наполнение'
}`,...DrawerCustomContentExample.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","DrawerWithBackdropExample","DrawerWithoutBackdropExample","DrawerNonClosableExample","DrawerPositionExample","DrawerMobileExample","DrawerWidthExample","DrawerCustomContentExample"]},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
  & *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  `,`

  & > svg {
    height: `,`px;
    width: `,`px;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: `,`px;
  height: `,`px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:focus {
    > `,` {
      background-color: `,`;
    }
  }
  &:hover {
    > `,` {
      background-color: var(--admiral-color-Opacity_Hover, `,`);
    }
  }
  &:active {
    > `,` {
      background-color: var(--admiral-color-Opacity_Press, `,`);
    }
  }
  &:focus-visible {
    > `,` {
      background-color: transparent;
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: relative;
  padding: 0;
  margin: `,`px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: `,`px;
  width: `,`px;
  border-radius: var(--admiral-border-radius-Small, `,`);
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
  &:not(:disabled) {
    `,`
  }
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/manager.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>manager});var scrollbarUtil=__webpack_require__("./src/components/common/dom/scrollbarUtil.ts"),ownerDocument=function(node){return node&&node.ownerDocument||document},ownerWindow=function(node){return ownerDocument(node).defaultView||window},getPaddingRight=function(element){return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight,10)||0},isOverflow=function(container){var doc=ownerDocument(container);return doc.body===container?ownerWindow(container).innerWidth>doc.documentElement.clientWidth:container.scrollHeight>container.clientHeight},restoreContainer=function(wrapper){var initialStyle=[];if(isOverflow(wrapper)){initialStyle.push({value:wrapper.style.paddingRight,property:"padding-right",el:wrapper}),wrapper.style.paddingRight="".concat(getPaddingRight(wrapper)+(0,scrollbarUtil.M)(),"px");var fixedElements=ownerDocument(wrapper).querySelectorAll('*[style="position:fixed"]');[].forEach.call(fixedElements,function(element){initialStyle.push({value:element.style.paddingRight,property:"padding-right",el:element}),element.style.paddingRight="".concat(getPaddingRight(element)+(0,scrollbarUtil.M)(),"px")})}var parent=wrapper.parentElement,containerWindow=ownerWindow(wrapper),scrollContainer=(null==parent?void 0:parent.nodeName)==="HTML"&&"scroll"===containerWindow.getComputedStyle(parent).overflowY?parent:wrapper;return initialStyle.push({value:scrollContainer.style.overflow,property:"overflow",el:scrollContainer},{value:scrollContainer.style.overflowX,property:"overflow-x",el:scrollContainer},{value:scrollContainer.style.overflowY,property:"overflow-y",el:scrollContainer}),scrollContainer.style.overflow="hidden",function(){initialStyle.forEach(function(param){var value=param.value,el=param.el,property=param.property;value?el.style.setProperty(property,value):el.style.removeProperty(property)})}};function findIndexOf(items,callback){var idx=-1;return items.some(function(item,index){return!!callback(item)&&(idx=index,!0)}),idx}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var manager=new(function(){function ModalManager(){_class_call_check(this,ModalManager),_define_property(this,"containers",void 0),_define_property(this,"modals",void 0),this.modals=[],this.containers=[]}return _create_class(ModalManager,[{key:"add",value:function add(modal,container){var modalIndex=this.modals.indexOf(modal);if(-1!==modalIndex)return modalIndex;modalIndex=this.modals.length,this.modals.push(modal);var containerIndex=findIndexOf(this.containers,function(item){return item.container===container});return -1!==containerIndex?this.containers[containerIndex].modals.push(modal):this.containers.push({modals:[modal],container:container,restore:null}),modalIndex}},{key:"mount",value:function mount(modal){var containerIndex=findIndexOf(this.containers,function(item){return -1!==item.modals.indexOf(modal)}),containerInfo=this.containers[containerIndex];containerInfo.restore||(containerInfo.restore=restoreContainer(containerInfo.container))}},{key:"remove",value:function remove(modal){var modalIndex=this.modals.indexOf(modal);if(-1===modalIndex)return modalIndex;var containerIndex=findIndexOf(this.containers,function(item){return -1!==item.modals.indexOf(modal)}),containerInfo=this.containers[containerIndex];return containerInfo.modals.splice(containerInfo.modals.indexOf(modal),1),this.modals.splice(modalIndex,1),0===containerInfo.modals.length&&(containerInfo.restore&&containerInfo.restore(),this.containers.splice(containerIndex,1)),modalIndex}}]),ModalManager}())},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/hooks/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_uid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/uid.ts"),useId=react__WEBPACK_IMPORTED_MODULE_0__.useId||function(){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(_uid__WEBPACK_IMPORTED_MODULE_1__.L,[])}},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function isObject(val){return null!==val&&!Array.isArray(val)&&(void 0===val?"undefined":_type_of(val))==="object"}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});for(var codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"},i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(var j=0;j<26;j+=1){var n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}var keyboardKey={codes:codes,getCode:function getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey:function getKey(eventOrCode){var isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;var name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[+!!eventOrCode.shiftKey]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey["0"],keyboardKey.Digit1=keyboardKey["1"],keyboardKey.Digit2=keyboardKey["2"],keyboardKey.Digit3=keyboardKey["3"],keyboardKey.Digit4=keyboardKey["4"],keyboardKey.Digit5=keyboardKey["5"],keyboardKey.Digit6=keyboardKey["6"],keyboardKey.Digit7=keyboardKey["7"],keyboardKey.Digit8=keyboardKey["8"],keyboardKey.Digit9=keyboardKey["9"],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/common/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>debounce});function debounce(f,delay){var timer=setTimeout(function(){});return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout(function(){return f.apply(args)},delay)}}},"./src/components/common/utils/getKeyboardFocusableElements.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function getKeyboardFocusableElements(element){return _to_consumable_array((null!=element?element:document).querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')).filter(function(el){return!el.hasAttribute("disabled")})}__webpack_require__.d(__webpack_exports__,{$:()=>getKeyboardFocusableElements})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});var FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,"data-field",!1)}function passDropdownDataAttributes(initialProps){var dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,"data-dropdown-container",!0),dropMenuProps}function passMenuDataAttributes(initialProps){var menuProps={};return passDataAttributes(initialProps,menuProps,"data-menu",!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach(function(key){"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])})}},"./src/components/form/InputField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>InputField});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/uid.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_input__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/input/TextInput/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var InputField=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(props,ref){var inputRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),className=props.className,maxLength=props.maxLength,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__.L)():_props_id,disabled=props.disabled,displayCharacterCounter=props.displayCharacterCounter,characterCounterVisibilityThreshold=props.characterCounterVisibilityThreshold,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","maxLength","displayInline","status","required","extraText","label","id","disabled","displayCharacterCounter","characterCounterVisibilityThreshold","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,maxLength:maxLength,inputRef:inputRef,displayCharacterCounter:displayCharacterCounter,characterCounterVisibilityThreshold:characterCounterVisibilityThreshold,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.$e)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G)(restProps,fieldContainerProps);var inputProps=_object_spread({ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__.d)(ref,inputRef),id:id,"aria-required":required,status:status,disabled:disabled,maxLength:maxLength,skeleton:skeleton},restProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_5__.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input__WEBPACK_IMPORTED_MODULE_6__.ks,_object_spread({},inputProps))}))});InputField.displayName="InputField";try{InputField.displayName="InputField",InputField.__docgenInfo={description:"",displayName:"InputField",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputField/index.tsx#InputField"]={docgenInfo:InputField.__docgenInfo,name:"InputField",path:"src/components/form/InputField/index.tsx#InputField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Drawer-stories-Drawer-stories.64abf8fd.iframe.bundle.js.map