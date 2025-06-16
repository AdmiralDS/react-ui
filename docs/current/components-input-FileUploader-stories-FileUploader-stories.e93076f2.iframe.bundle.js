"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2682],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/documents/DocsSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgDocsSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgDocsSolid=function SvgDocsSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M20.64 6.35c0-1.66-1.34-3-3-3h-8c-1.65 0-3 1.34-3 3v10c0 1.65 1.35 3 3 3h8c1.66 0 3-1.35 3-3zm-7.27 2.19c.36 0 .65-.29.65-.65s-.29-.65-.65-.65h-2.7c-.36 0-.65.29-.65.65s.29.65.65.65zm-8.73.16c-.35 0-.64.29-.64.65v9.4A3.25 3.25 0 0 0 7.25 22h8.39c.36 0 .65-.3.65-.65 0-.36-.29-.65-.65-.65H7.25c-1.08 0-1.95-.88-1.95-1.95v-9.4c0-.36-.3-.65-.66-.65m12.63 2.7c0 .36-.29.65-.65.65h-5.95c-.36 0-.65-.29-.65-.65s.29-.65.65-.65h5.95c.36 0 .65.29.65.65m-.65 4.16c.36 0 .65-.29.65-.65s-.29-.65-.65-.65h-5.95c-.36 0-.65.29-.65.65s.29.65.65.65z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/documents/FileWordSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgFileWordSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgFileWordSolid=function SvgFileWordSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M17.64 3.35c1.66 0 3 1.34 3 3v10c0 1.65-1.34 3-3 3h-8c-1.65 0-3-1.35-3-3v-10c0-1.66 1.35-3 3-3zm-.93 5.15c.34.1.53.47.43.81l-1.37 4.45c-.08.27-.33.46-.61.46a.645.645 0 0 1-.63-.44l-.89-2.67-.96 2.68a.652.652 0 0 1-1.24-.04L10.16 9.3c-.1-.35.1-.71.45-.8.34-.1.7.1.8.44l.72 2.51.91-2.55a.65.65 0 0 1 .62-.43c.28 0 .52.18.61.44l.85 2.54.77-2.52c.11-.34.47-.54.82-.43M4 9.35c0-.36.29-.65.64-.65.36 0 .66.29.66.65v9.4c0 1.07.87 1.95 1.95 1.95h8.39c.36 0 .65.29.65.65 0 .35-.29.65-.65.65H7.25A3.25 3.25 0 0 1 4 18.75z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/documents/JpgSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgJpgSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgJpgSolid=function SvgJpgSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M17.64 3.35c1.66 0 3 1.34 3 3v10c0 1.65-1.34 3-3 3h-8c-1.65 0-3-1.35-3-3v-10c0-1.66 1.35-3 3-3zM11.3 10a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4M4 9.35c0-.36.29-.65.64-.65.36 0 .66.29.66.65v9.4c0 1.07.87 1.95 1.95 1.95h8.39c.36 0 .65.29.65.65 0 .35-.29.65-.65.65H7.25A3.25 3.25 0 0 1 4 18.75zm15.35 5.02v1.98c0 .94-.76 1.7-1.7 1.7h-6.97l3.9-6.38c.64-1.05 2.15-1.1 2.84-.09z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/AttachFileOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgAttachFileOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgAttachFileOutline=function SvgAttachFileOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M15.85 5.21c-.92-.92-2.4-.92-3.32 0l-6.15 6.15a3.64 3.64 0 0 0 0 5.16l1.34 1.34a3.64 3.64 0 0 0 5.16 0l5.8-5.79a.64.64 0 0 1 .92 0c.25.25.25.66 0 .92l-5.8 5.79a4.937 4.937 0 0 1-7 0l-1.34-1.34a4.937 4.937 0 0 1 0-7l6.15-6.15a3.64 3.64 0 0 1 5.16 0l.71.7a3.67 3.67 0 0 1 0 5.17l-5.8 5.79c-.76.77-2 .77-2.76 0l-.63-.63c-.77-.76-.77-2 0-2.76l5.44-5.44a.64.64 0 0 1 .92 0c.25.25.25.66 0 .92L9.2 13.48c-.25.25-.25.67 0 .92l.64.64c.25.25.67.25.92 0l5.8-5.8c.92-.92.92-2.41 0-3.33z"})))};__webpack_require__.p},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 1s linear infinite;
  path {
    fill: `,`;
  }
  width: 100%;
  height: 100%;
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  container-type: inline-size;
  `,`;

  & svg {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}var sizes=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}},function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1(),sizes,function(p){return p.$svgMixin||""}),Spinner=function(_param){var _param_dimension=_param.dimension,_param_inverse=_param.inverse,svgMixin=_param.svgMixin,props=_object_without_properties(_param,["dimension","inverse","svgMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerWrapper,_object_spread_props(_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__.N,{$inverse:void 0!==_param_inverse&&_param_inverse})}))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextButton/commonMixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ef:()=>ButtonContainer,Tu:()=>IconContainer,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([""]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([""]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-image:
    linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size:
    315px 250px,
    315px 180px,
    100px 100px,
    225px 30px;
  background-position:
    -315px 0,
    0 0,
    0 190px,
    50px 195px;
  animation: `,` 1.5s infinite;
`]);return _templateObject3=function _templateObject(){return data},data}var IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject()),ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject1()),loadingKeyframes=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject2()),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3(),loadingKeyframes)},"./src/components/TextButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>TextButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),commonMixin=__webpack_require__("./src/components/TextButton/commonMixin.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,` {
    `,`;
    border-radius: `,`;
    svg {
      visibility: `,`;
    }
  }

  border-radius: `,`;

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:hover {
    cursor: pointer;
    color: var(--admiral-color-Primary_Primary70, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary70, `,`);
        }
      }
    }
  }

  &:active {
    color: var(--admiral-color-Primary_Primary80, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary80, `,`);
        }
      }
    }
  }

  &:disabled {
    cursor: `,`;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Neutral_Neutral30, `,`);
        }
      }
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Primary_Primary60Main, `,`);
      }
    }
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral50, `,`);
      }
    }
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &[data-appearance='primary'] {
    `,`
  }
  &[data-appearance='secondary'] {
    `,`
  }

  `,`
`]);return _templateObject3=function _templateObject(){return data},data}var defaultAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject(),commonMixin.Tu,function(param){return param.$skeleton&&commonMixin.vy},function(param){return param.$skeleton?"50%":""},function(p){return p.$skeleton||p.$loading?"hidden":"visible"},function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,borderRadius.VM)(p.theme.shape),")")},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 70"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 80"]},function(param){var $skeleton=param.$skeleton,$loading=param.$loading;return $skeleton||$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 30"]}),primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 60 Main"]}),secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 90"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 50"]}),appearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),primaryAppearanceMixin,secondaryAppearanceMixin,defaultAppearanceMixin),typography=__webpack_require__("./src/components/Typography/typography.ts");function dimensionMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function dimensionMixin_templateObject(){var data=dimensionMixin_tagged_template_literal([`
  &[data-dimension='m'] {
    `,` {
      width: 24px;
      height: 24px;
    }
    `,`;
  }

  &[data-dimension='s'] {
    `,` {
      width: 20px;
      height: 20px;
    }
    `,`;
  }
`]);return dimensionMixin_templateObject=function _templateObject(){return data},data}var dimensionMixin=(0,styled_components_browser_esm.AH)(dimensionMixin_templateObject(),commonMixin.Tu,typography.Il["Button/Button 1"],commonMixin.Tu,typography.Il["Button/Button 2"]),animation=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TextButton_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextButton_templateObject(){var data=TextButton_tagged_template_literal([`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return TextButton_templateObject=function _templateObject(){return data},data}function TextButton_templateObject1(){var data=TextButton_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  vertical-align: middle;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  white-space: nowrap;
  `,`;

  `,` {
    visibility: `,`;
  }

  `,` {
    visibility: `,`;
  }

  `,`;

  `,`;
`]);return TextButton_templateObject1=function _templateObject(){return data},data}var StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y)(TextButton_templateObject()),StyledButton=styled_components_browser_esm.Ay.button(TextButton_templateObject1(),function(p){return p.$skeleton&&animation.h},commonMixin.Ef,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},commonMixin.Tu,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},appearanceMixin,dimensionMixin),TextButton=react.forwardRef(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,icon=_param.icon,iconStart=_param.iconStart,iconEnd=_param.iconEnd,_param_type=_param.type,text=_param.text,_param_displayRight=_param.displayRight,displayRight=void 0!==_param_displayRight&&_param_displayRight,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,props=_object_without_properties(_param,["appearance","dimension","icon","iconStart","iconEnd","type","text","displayRight","loading","skeleton"]),disabled=props.disabled||loading||skeleton;return(0,jsx_runtime.jsxs)(StyledButton,_object_spread_props(_object_spread({},props),{"data-dimension":dimension,"data-appearance":appearance,ref:ref,$appearance:appearance,$dimension:dimension,type:void 0===_param_type?"button":_param_type,disabled:disabled,$loading:loading,$skeleton:skeleton,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:"s"===dimension?"ms":"m"}),iconStart?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconStart}):icon&&!displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null,(0,jsx_runtime.jsx)(commonMixin.Ef,{children:(0,jsx_runtime.jsx)("span",{children:text})}),iconEnd?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconEnd}):icon&&displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null]}))});TextButton.displayName="TextButton";try{TextButton.displayName="TextButton",TextButton.__docgenInfo={description:"",displayName:"TextButton",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},displayRight:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Позиционирование иконки. По умолчанию - слева`,name:"displayRight",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/index.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/TextButton/index.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>checkOverflow});var checkOverflow=function(textContainer){return!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)}},"./src/components/input/FileUploader/stories/FileUploader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FileUploaderCustom:()=>FileUploaderCustom,FileUploaderCustomFiles:()=>FileUploaderCustomFiles,FileUploaderM:()=>FileUploaderM,FileUploaderWithStatus:()=>FileUploaderWithStatus,FileUploaderXL:()=>FileUploaderXL,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileUploader_stories});var _path,FilePPTSolid_path,FileXLSSolid_path,UploadOutline_path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  margin-top: `,`;
  color: var(--admiral-color-Error_Error60Main, `,`);
`]);return _templateObject=function _templateObject(){return data},data}var ErrorBlock=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return"Error"===p.$status?"8px":"20px"},function(p){return p.theme.color["Error/Error 60 Main"]});try{ErrorBlock.displayName="ErrorBlock",ErrorBlock.__docgenInfo={description:"",displayName:"ErrorBlock",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/ErrorBlock.tsx#ErrorBlock"]={docgenInfo:ErrorBlock.__docgenInfo,name:"ErrorBlock",path:"src/components/input/FileUploader/ErrorBlock.tsx#ErrorBlock"})}catch(__react_docgen_typescript_loader_error){}var Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),Tooltip=__webpack_require__("./src/components/Tooltip/index.tsx"),formatBytes=function(bytes){var decimals=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number((bytes/1048576).toFixed(decimals))},dataTransferConstructorSupported=function(){var dataTransferConstructorSupported;try{new DataTransfer,dataTransferConstructorSupported=!0}catch(e){dataTransferConstructorSupported=!1}return dataTransferConstructorSupported};function acceptFile(file,acceptedFiles){if(file&&acceptedFiles){var acceptedFilesArray=Array.isArray(acceptedFiles)?acceptedFiles:acceptedFiles.split(","),fileName=file.name||"",mimeType=(file.type||"").toLowerCase(),baseMimeType=mimeType.replace(/\/.*$/,"");return acceptedFilesArray.some(function(type){var validType=type.trim().toLowerCase();return"."===validType.charAt(0)?fileName.toLowerCase().endsWith(validType):validType.endsWith("/*")?baseMimeType===validType.replace(/\/.*$/,""):mimeType===validType})}return!0}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgFilePdfSolid=function SvgFilePdfSolid(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M19 11c1.65 0 3 1.34 3 3v4c0 1.65-1.35 3-3 3H5c-1.66 0-3-1.35-3-3v-4c0-1.66 1.34-3 3-3V6c0-1.66 1.34-3 3-3h5.04c.83 0 1.63.34 2.19.95l2.96 3.18c.52.56.81 1.29.81 2.04zm-5.96-6.71H8c-.94 0-1.7.77-1.7 1.71v5h11.4V9.17c0-.06-.01-.12-.01-.18h-2.4c-1.07 0-1.95-.87-1.95-1.95V4.32q-.15-.03-.3-.03m1.6.94 2.3 2.46h-1.65c-.35 0-.65-.29-.65-.65zM6.08 18.4c.36 0 .65-.29.65-.65v-.57h.67c1 0 1.8-.8 1.8-1.8 0-.99-.8-1.79-1.8-1.79H6.08c-.35 0-.65.29-.65.65v3.51c0 .36.3.65.65.65m4.97 0a.62.62 0 0 1-.46-.19.64.64 0 0 1-.19-.46v-3.51c0-.18.07-.34.19-.46a.62.62 0 0 1 .46-.19h1.17c1.07 0 1.95.87 1.95 1.95v.91c0 1.08-.88 1.95-1.95 1.95zm5.14 0c.36 0 .65-.29.65-.65v-.56h.48c.36 0 .65-.29.65-.65s-.29-.65-.65-.65h-.48v-1h1.07c.35 0 .65-.29.65-.65s-.3-.65-.65-.65h-1.72c-.36 0-.65.29-.65.65v3.51c0 .36.29.65.65.65m-9.46-3.51v.99h.67a.495.495 0 1 0 0-.99zm4.97 2.21v-2.21h.52c.36 0 .65.29.65.65v.91c0 .36-.29.65-.65.65z"})))};function FilePPTSolid_extends(){return(FilePPTSolid_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}__webpack_require__.p;var SvgFilePptSolid=function SvgFilePptSolid(props){return react.createElement("svg",FilePPTSolid_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),FilePPTSolid_path||(FilePPTSolid_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M19 11c1.65 0 3 1.34 3 3v4c0 1.65-1.35 3-3 3H5c-1.66 0-3-1.35-3-3v-4c0-1.66 1.34-3 3-3V6c0-1.66 1.34-3 3-3h5.04c.83 0 1.63.34 2.19.95l2.96 3.18c.52.56.81 1.29.81 2.04zm-5.96-6.71H8c-.94 0-1.7.77-1.7 1.71v5h11.4V9.17c0-.06-.01-.12-.01-.18h-2.4c-1.07 0-1.95-.87-1.95-1.95V4.32q-.15-.03-.3-.03m1.6.94 2.3 2.46h-1.65c-.35 0-.65-.29-.65-.65zM6.68 17.75c0 .36-.29.65-.65.65s-.65-.29-.65-.65v-3.51c0-.36.29-.65.65-.65h1.32c.99 0 1.79.8 1.79 1.79 0 1-.8 1.8-1.79 1.8h-.67zm4.31.65c.36 0 .65-.29.65-.65v-.57h.67c.99 0 1.8-.8 1.8-1.8 0-.99-.81-1.79-1.8-1.79h-1.32c-.36 0-.65.29-.65.65v3.51c0 .36.29.65.65.65m6.97-3.51c.36 0 .65-.29.65-.65s-.29-.65-.65-.65h-2.42c-.36 0-.65.29-.65.65s.29.65.65.65h.56v2.87c0 .36.29.65.65.65s.65-.29.65-.65v-2.87zm-11.28.99v-.99h.67c.27 0 .49.22.49.49 0 .28-.22.5-.49.5zm5.63-.99h-.67v.99h.67a.495.495 0 1 0 0-.99"})))};__webpack_require__.p;var FileWordSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/FileWordSolid.svg");function FileXLSSolid_extends(){return(FileXLSSolid_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgFileXlsSolid=function SvgFileXlsSolid(props){return react.createElement("svg",FileXLSSolid_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),FileXLSSolid_path||(FileXLSSolid_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M22 14c0-1.66-1.35-3-3-3V9.17c0-.75-.29-1.48-.81-2.04l-2.96-3.18c-.56-.61-1.36-.95-2.19-.95H8C6.34 3 5 4.34 5 6v5c-1.66 0-3 1.34-3 3v4c0 1.65 1.34 3 3 3h14c1.65 0 3-1.35 3-3zM8 4.29h5.04q.15 0 .3.03v2.72c0 1.08.88 1.95 1.95 1.95h2.4c0 .06.01.12.01.18V11H6.3V6c0-.94.76-1.71 1.7-1.71m8.94 3.4-2.3-2.46v1.81c0 .36.3.65.65.65zm-5.18 5.89c.36 0 .65.29.65.65v2.89h1.07c.36 0 .65.29.65.65s-.29.65-.65.65h-1.72c-.36 0-.65-.29-.65-.65v-3.54c0-.36.29-.65.65-.65m5.68 0c.36 0 .65.29.65.65s-.29.65-.65.65h-.86c-.11 0-.21.09-.21.21 0 .08.06.16.14.19l.75.28c.58.22.96.77.96 1.38 0 .82-.66 1.48-1.47 1.48h-1.03c-.36 0-.65-.29-.65-.65s.29-.65.65-.65h1.03c.1 0 .17-.08.17-.18 0-.07-.04-.13-.11-.16l-.75-.28c-.59-.22-.99-.78-.99-1.41 0-.84.68-1.51 1.51-1.51zm-11.4.11c.29-.2.7-.14.91.16l.73 1.03.74-1.03a.645.645 0 1 1 1.05.75L8.48 16l.99 1.39c.21.29.15.7-.15.91-.29.21-.69.14-.9-.16l-.74-1.03-.73 1.03a.648.648 0 1 1-1.06-.75L6.88 16l-.99-1.4c-.21-.29-.14-.7.15-.91"})))};__webpack_require__.p;var DocsSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/DocsSolid.svg"),JpgSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/JpgSolid.svg"),CloseOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),checkOverflow=__webpack_require__("./src/components/common/utils/checkOverflow.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function FileInfo_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function FileInfo_templateObject(){var data=FileInfo_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  flex: `,`;
  margin-top: 16px;
  overflow: hidden;

  &:nth-of-type(even) {
    margin-left: `,`;
  }
`]);return FileInfo_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=FileInfo_tagged_template_literal([`
  border-color: `,`;
  color: `,`;
  background: var(--admiral-color-Special_StaticWhite, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=FileInfo_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--admiral-border-radius-Medium, `,`);
  border-width: 1px;
  border-style: solid;
  padding: `,`;
  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=FileInfo_tagged_template_literal([`
  display: `,`;
  align-items: center;
  overflow: hidden;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=FileInfo_tagged_template_literal([`
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 8px;
  overflow: hidden;

  > img {
    height: 100%;
    width: 100%;
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=FileInfo_tagged_template_literal([`
  margin-right: 8px;
  border-radius: 4px;

  & svg {
    width: 40px;
    height: 40px;
    fill: `,`;
  }
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=FileInfo_tagged_template_literal([`
  align-items: center;
  justify-content: space-between;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=FileInfo_tagged_template_literal([`
  `,`;
  display: flex;
  flex-direction: `,`;
  min-width: 0;
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=FileInfo_tagged_template_literal([`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=FileInfo_tagged_template_literal([`
  color: `,`;
  margin-left: `,`;
  white-space: nowrap;
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=FileInfo_tagged_template_literal([`
  display: flex;
  flex: 0 0 auto;
  margin-left: 8px;
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=FileInfo_tagged_template_literal([`
  margin-right: 8px;
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=FileInfo_tagged_template_literal([`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  &:hover {
    border-radius: 50%;
    background-color: var(--admiral-color-Opacity_Hover, `,`);
  }
  & svg {
    width: 24px;
    height: 24px;
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
`]);return _templateObject12=function _templateObject(){return data},data}var getIcon=function(type){switch(type){case"image/jpeg":case"image/png":case"image/tiff":return JpgSolid.h;case"application/pdf":return SvgFilePdfSolid;case"application/vnd.ms-powerpoint":case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return SvgFilePptSolid;case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return SvgFileXlsSolid;case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return FileWordSolid.h;default:return DocsSolid.h}},getFormat=function(type){switch(type){case"image/jpeg":return"JPEG";case"image/png":return"PNG";case"image/tiff":return"TIFF";case"application/pdf":return"PDF";case"application/vnd.ms-powerpoint":case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PPT";case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"XLS";case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";default:return"Docs"}},Container=styled_components_browser_esm.Ay.div(FileInfo_templateObject(),function(p){return"xl"===p.$dimension?"1 1 36%":"1 1 auto"},function(p){return"xl"===p.$dimension?"16px":"0"}),statusMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return"Error"===p.$status?"var(--admiral-color-Error_Error60Main, ".concat(p.theme.color["Error/Error 60 Main"],")"):"var(--admiral-color-Neutral_Neutral40, ".concat(p.theme.color["Neutral/Neutral 40"],")")},function(p){return"Queue"===p.$status?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},function(p){return p.theme.color["Special/Static White"]}),PreviewWrapper=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return"xl"===p.$fileDimension?"7px 3px 7px 8px":"7px 15px"},statusMixin),InfoBlock=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return"m"===p.$dimension?"block":"flex"}),ImagePreview=styled_components_browser_esm.Ay.div(_templateObject4()),IconWrapper=styled_components_browser_esm.Ay.div(_templateObject5(),function(p){return"Queue"===p.$status?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")}),sizeMixin=(0,styled_components_browser_esm.AH)(_templateObject6()),Content=styled_components_browser_esm.Ay.div(_templateObject7(),function(p){return"m"===p.$fileDimension&&sizeMixin},function(p){return"m"===p.$fileDimension?"row":"column"}),Title=styled_components_browser_esm.Ay.div(_templateObject8()),Size=styled_components_browser_esm.Ay.span(_templateObject9(),function(p){return"Queue"===p.$status?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(p){return"xl"===p.$fileDimension?"0":"4px"}),FunctionalWrapper=styled_components_browser_esm.Ay.div(_templateObject10()),StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y)(_templateObject11()),Close=styled_components_browser_esm.Ay.div(_templateObject12(),function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Neutral/Neutral 50"]}),FileInfo=function(_param){var file=_param.file,_param_onCloseClick=_param.onCloseClick,dimension=_param.dimension,fileDimension=_param.fileDimension,children=_param.children,props=_object_without_properties(_param,["file","onCloseClick","dimension","fileDimension","children"]),_file_file=file.file,type=_file_file.type,name=_file_file.name,size=_file_file.size,status=file.status,error=file.error,showPreview=file.showPreview,PreviewIcon=getIcon(type),fileFormat=getFormat(type),fileSize=formatBytes(size),fileName=name.substring(0,name.lastIndexOf(".")),_React_useState=_sliced_to_array(react.useState(""),2),imageSrc=_React_useState[0],setImageSrc=_React_useState[1],imageFile=showPreview&&type.startsWith("image"),fileInfo="".concat(fileFormat,"・").concat(fileSize," Mb"),titleRef=react.useRef(null),_React_useState1=_sliced_to_array(react.useState(!1),2),tooltipVisible=_React_useState1[0],setTooltipVisible=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(!1),2),titleOverflow=_React_useState2[0],setTitleOverflow=_React_useState2[1],getImageUrl=function(file){var reader=new FileReader;reader.onloadend=function getImageUrl(){"string"==typeof reader.result&&setImageSrc(reader.result)},file?reader.readAsDataURL(file.file):setImageSrc("")};return(0,react.useEffect)(function(){var element=titleRef.current;element&&(0,checkOverflow.p)(element)!==titleOverflow&&setTitleOverflow((0,checkOverflow.p)(element))},[tooltipVisible,setTitleOverflow]),(0,react.useEffect)(function(){var show=function show(){setTooltipVisible(!0)},hide=function hide(){setTooltipVisible(!1)},title=titleRef.current;if(title)return title.addEventListener("mouseenter",show),title.addEventListener("mouseleave",hide),function(){title.removeEventListener("mouseenter",show),title.removeEventListener("mouseleave",hide)}},[setTooltipVisible]),(0,react.useEffect)(function(){file&&imageFile&&!children&&getImageUrl(file)},[file]),(0,jsx_runtime.jsxs)(Container,{$dimension:dimension,children:[(0,jsx_runtime.jsxs)(PreviewWrapper,_object_spread_props(_object_spread({},props),{$dimension:dimension,$fileDimension:fileDimension,$status:status,children:[children||(0,jsx_runtime.jsxs)(InfoBlock,{$dimension:dimension,children:["xl"===fileDimension&&(imageFile?(0,jsx_runtime.jsx)(ImagePreview,{children:(0,jsx_runtime.jsx)("img",{src:imageSrc,alt:""})}):(0,jsx_runtime.jsx)(IconWrapper,{$status:status,children:(0,jsx_runtime.jsx)(PreviewIcon,{})})),(0,jsx_runtime.jsxs)(Content,{$fileDimension:fileDimension,children:[(0,jsx_runtime.jsx)(Title,{ref:titleRef,children:fileName}),tooltipVisible&&titleOverflow&&(0,jsx_runtime.jsx)(Tooltip.m,{targetElement:titleRef.current,renderContent:function(){return"".concat(fileName)}}),(0,jsx_runtime.jsx)(Size,{$fileDimension:fileDimension,$status:status,children:fileInfo})]})]}),(0,jsx_runtime.jsxs)(FunctionalWrapper,{children:["Loading"===status&&(0,jsx_runtime.jsx)(StyledSpinner,{}),dataTransferConstructorSupported()&&(0,jsx_runtime.jsx)(Close,{onClick:void 0===_param_onCloseClick?function(){}:_param_onCloseClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})})]})]})),error&&"Error"===status&&(0,jsx_runtime.jsx)(ErrorBlock,{$status:status,children:error})]})};try{FileInfo.displayName="FileInfo",FileInfo.__docgenInfo={description:"",displayName:"FileInfo",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"FileProps"}},dimension:{defaultValue:null,description:"Размер инпута",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},fileDimension:{defaultValue:null,description:"Размер файлового компонента",name:"fileDimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},onCloseClick:{defaultValue:{value:"() => undefined"},description:"",name:"onCloseClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/FileInfo.tsx#FileInfo"]={docgenInfo:FileInfo.__docgenInfo,name:"FileInfo",path:"src/components/input/FileUploader/FileInfo.tsx#FileInfo"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./src/components/Typography/typography.ts"),AttachFileOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/AttachFileOutline.svg");function FileUploader_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileUploader_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileUploader_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileUploader_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileUploader_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileUploader_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUploader_define_property(target,key,source[key])})}return target}function FileUploader_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUploader_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUploader_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileUploader_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FileUploader_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FileUploader_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function FileUploader_sliced_to_array(arr,i){return FileUploader_array_with_holes(arr)||FileUploader_iterable_to_array_limit(arr,i)||FileUploader_unsupported_iterable_to_array(arr,i)||FileUploader_non_iterable_rest()}function FileUploader_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function FileUploader_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileUploader_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileUploader_array_like_to_array(o,minLen)}}function FileUploader_templateObject(){var data=FileUploader_tagged_template_literal([`
  height: `,`;
  width: `,`;
  margin-right: `,`;
  margin-bottom: `,`;

  > * {
    fill: var(--admiral-color-Primary_Primary60Main, `,`);
  }
`]);return FileUploader_templateObject=function _templateObject(){return data},data}function FileUploader_templateObject1(){var data=FileUploader_tagged_template_literal([`
  border: 1px dashed var(--admiral-color-Neutral_Neutral30, `,`);
  color: var(--admiral-color-Neutral_Neutral30, `,`);

  & svg {
    > * {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }

  cursor: not-allowed;
  & > * {
    pointer-events: none;
  }
`]);return FileUploader_templateObject1=function _templateObject(){return data},data}function FileUploader_templateObject2(){var data=FileUploader_tagged_template_literal([`
  &:hover {
    cursor: pointer;
    background: var(--admiral-color-Opacity_Hover, `,`);
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, `,`);
  }
`]);return FileUploader_templateObject2=function _templateObject(){return data},data}function FileUploader_templateObject3(){var data=FileUploader_tagged_template_literal([`
  position: relative;
`]);return FileUploader_templateObject3=function _templateObject(){return data},data}function FileUploader_templateObject4(){var data=FileUploader_tagged_template_literal([`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  padding: 24px 0;
  border: 1px dashed var(--admiral-color-Neutral_Neutral40, `,`);
  border-radius: var(--admiral-border-radius-Medium, `,`);
  `,`;
`]);return FileUploader_templateObject4=function _templateObject(){return data},data}function FileUploader_templateObject5(){var data=FileUploader_tagged_template_literal([`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 8px 0;
  border: 1px dashed var(--admiral-color-Neutral_Neutral40, `,`);
  border-radius: var(--admiral-border-radius-Medium, `,`);
  `,`;
`]);return FileUploader_templateObject5=function _templateObject(){return data},data}function FileUploader_templateObject6(){var data=FileUploader_tagged_template_literal([`
  text-align: `,`;
  margin: 0 `,`;
  margin-bottom: `,`;
  max-width: 100%;
  color: `,`;
  `,`;
`]);return FileUploader_templateObject6=function _templateObject(){return data},data}function FileUploader_templateObject7(){var data=FileUploader_tagged_template_literal([`
  color: `,`;
  `,`;
`]);return FileUploader_templateObject7=function _templateObject(){return data},data}function FileUploader_templateObject8(){var data=FileUploader_tagged_template_literal([`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`]);return FileUploader_templateObject8=function _templateObject(){return data},data}function FileUploader_templateObject9(){var data=FileUploader_tagged_template_literal([`
  `,`;
`]);return FileUploader_templateObject9=function _templateObject(){return data},data}function FileUploader_templateObject10(){var data=FileUploader_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`]);return FileUploader_templateObject10=function _templateObject(){return data},data}var Icon=(0,styled_components_browser_esm.Ay)(AttachFileOutline.h)(FileUploader_templateObject(),function(p){return"xl"===p.$dimension?"40px":"24px"},function(p){return"xl"===p.$dimension?"40px":"24px"},function(p){return"m"===p.$dimension?"14px":""},function(p){return"xl"===p.$dimension?"14px":""},function(p){return p.theme.color["Primary/Primary 60 Main"]}),disabledStyles=(0,styled_components_browser_esm.AH)(FileUploader_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),hoverStyles=(0,styled_components_browser_esm.AH)(FileUploader_templateObject2(),function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Opacity/Press"]}),CustomWrapper=styled_components_browser_esm.Ay.div(FileUploader_templateObject3()),UploaderWrapperXL=styled_components_browser_esm.Ay.div(FileUploader_templateObject4(),function(p){return p.theme.color["Neutral/Neutral 40"]},function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.disabled?disabledStyles:hoverStyles}),UploaderWrapperM=styled_components_browser_esm.Ay.div(FileUploader_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 40"]},function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.disabled?disabledStyles:hoverStyles}),TitleText=styled_components_browser_esm.Ay.div(FileUploader_templateObject6(),function(p){return"xl"===p.$dimension?"center":"start"},function(p){return"xl"===p.$dimension?"24px":""},function(p){return"m"===p.$dimension?"16px":"0px"},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},typography.Il["Body/Body 2 Long"]),Desc=styled_components_browser_esm.Ay.div(FileUploader_templateObject7(),function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},typography.Il["Body/Body 1 Long"]),FileInput=styled_components_browser_esm.Ay.input(FileUploader_templateObject8()),Wrapper=styled_components_browser_esm.Ay.div(FileUploader_templateObject9(),typography.Il["Body/Body 2 Long"]),FileWrapper=styled_components_browser_esm.Ay.div(FileUploader_templateObject10()),FileUploader=react.forwardRef(function(_param,ref){var _param_multiple=_param.multiple,multiple=void 0===_param_multiple||_param_multiple,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_fileDimension=_param.fileDimension,r=_param.renderFileInfoList,disabled=_param.disabled,title=_param.title,description=_param.description,children=_param.children,uploadedFiles=_param.uploadedFiles,style=_param.style,className=_param.className,onRemoveFile=_param.onRemoveFile,props=FileUploader_object_without_properties(_param,["multiple","dimension","fileDimension","renderFileInfoList","disabled","title","description","children","uploadedFiles","style","className","onRemoveFile"]),wrapperRef=react.useRef(null),inputRef=react.useRef(null),_React_useState=FileUploader_sliced_to_array(react.useState(uploadedFiles),2),files=_React_useState[0],setFiles=_React_useState[1],previewProps={dimension:dimension,fileDimension:void 0===_param_fileDimension?"xl":_param_fileDimension};react.useEffect(function(){void 0!==uploadedFiles&&setFiles(uploadedFiles)},[uploadedFiles]),react.useEffect(function(){var onChangeEventHandler=function onChangeEventHandler(){var filesToAdd=Array.from(this.files||[]).filter(function(file){return!props.accept||acceptFile(file,props.accept)}).map(function(file){return{file:file}}),dt=new DataTransfer;filesToAdd.forEach(function(param){var file=param.file;return dt.items.add(file)}),this.files=dt.files,setFiles(filesToAdd)},input=inputRef.current;if(input)return input.addEventListener("change",onChangeEventHandler,!0),function(){return input.removeEventListener("change",onChangeEventHandler,!0)}},[inputRef.current,files,props.accept]);var handleRemoveFile=function(index){if(inputRef.current&&inputRef.current.files){for(var event,files=inputRef.current.files,dt=new DataTransfer,i=0;i<files.length;i++){var file=files.item(i);index!==i&&file&&dt.items.add(file)}inputRef.current.files=dt.files,"function"==typeof Event?event=new Event("change",{bubbles:!0}):(event=document.createEvent("Event")).initEvent("change",!0,!0),inputRef.current.dispatchEvent(event)}null==onRemoveFile||onRemoveFile(index)},renderFileInfoList=null!=r?r:function(param){var files=param.files,onRemoveFile=param.onRemoveFile;return files.map(function(file,index){return(0,react.createElement)(FileInfo,FileUploader_object_spread_props(FileUploader_object_spread({},previewProps),{key:index,file:file,onCloseClick:function(){return onRemoveFile(index)}}))})};return(0,jsx_runtime.jsx)(Wrapper,{ref:wrapperRef,style:style,className:className,children:"xl"===dimension?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[react.Children.count(children)?(0,jsx_runtime.jsxs)(CustomWrapper,{children:[children,(0,jsx_runtime.jsx)(FileInput,FileUploader_object_spread_props(FileUploader_object_spread({},props),{ref:(0,refSetter.d)(ref,inputRef),type:"file",multiple:multiple,disabled:disabled}))]}):(0,jsx_runtime.jsxs)(UploaderWrapperXL,{disabled:disabled,children:[(0,jsx_runtime.jsx)(Icon,{$dimension:dimension}),title&&(0,jsx_runtime.jsx)(TitleText,{$dimension:dimension,disabled:disabled,children:title}),(0,jsx_runtime.jsx)(FileInput,FileUploader_object_spread_props(FileUploader_object_spread({},props),{ref:(0,refSetter.d)(ref,inputRef),type:"file",multiple:multiple,disabled:disabled}))]}),files&&(0,jsx_runtime.jsx)(FileWrapper,{children:renderFileInfoList({files:files,onRemoveFile:handleRemoveFile})})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[react.Children.count(children)?(0,jsx_runtime.jsxs)(CustomWrapper,{children:[children,(0,jsx_runtime.jsx)(FileInput,FileUploader_object_spread_props(FileUploader_object_spread({},props),{ref:(0,refSetter.d)(ref,inputRef),type:"file",multiple:multiple,disabled:disabled}))]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[title&&(0,jsx_runtime.jsx)(TitleText,{$dimension:dimension,disabled:disabled,children:title}),(0,jsx_runtime.jsxs)(UploaderWrapperM,{disabled:disabled,children:[(0,jsx_runtime.jsx)(Icon,{$dimension:dimension}),description&&(0,jsx_runtime.jsx)(Desc,{disabled:disabled,children:description}),(0,jsx_runtime.jsx)(FileInput,FileUploader_object_spread_props(FileUploader_object_spread({},props),{ref:(0,refSetter.d)(ref,inputRef),type:"file",multiple:multiple,disabled:disabled}))]})]}),files&&(0,jsx_runtime.jsx)(FileWrapper,{children:renderFileInfoList({files:files,onRemoveFile:handleRemoveFile})})]})})});FileUploader.displayName="FileUploader";try{FileUploader.displayName="FileUploader",FileUploader.__docgenInfo={description:"",displayName:"FileUploader",props:{dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},fileDimension:{defaultValue:{value:"xl"},description:"Размер компонента загруженного файла",name:"fileDimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"Текст для лейбла компонента",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст для кнопки",name:"description",required:!1,type:{name:"ReactNode"}},accept:{defaultValue:null,description:`Строка принимаемых типов файлов разделенных запятой.
Например ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}`,name:"accept",required:!1,type:{name:"string"}},uploadedFiles:{defaultValue:null,description:"Список файлов",name:"uploadedFiles",required:!1,type:{name:"FileProps[]"}},onRemoveFile:{defaultValue:null,description:"Обработчик удаления файла",name:"onRemoveFile",required:!1,type:{name:"((index: number) => void)"}},renderFileInfoList:{defaultValue:null,description:"Функция, возвращающая компонент с кастомным списком файлов",name:"renderFileInfoList",required:!1,type:{name:"((renderProps: { files: FileProps[]; onRemoveFile: (index: number) => void; }) => ReactNode)"}},children:{defaultValue:null,description:"Кастомные элементы содержимого компонента",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/index.tsx#FileUploader"]={docgenInfo:FileUploader.__docgenInfo,name:"FileUploader",path:"src/components/input/FileUploader/index.tsx#FileUploader"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),TextButton=__webpack_require__("./src/components/TextButton/index.tsx");function UploadOutline_extends(){return(UploadOutline_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgUploadOutline=function SvgUploadOutline(props){return react.createElement("svg",UploadOutline_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),UploadOutline_path||(UploadOutline_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M6.42 10.09a.65.65 0 0 1-.21-.48c0-.16.05-.31.17-.44l5.1-4.94c.28-.31.76-.31 1.04 0l4.73 5.02c.24.27.22.68-.04.92a.65.65 0 0 1-.92-.04l-3.64-3.85v9.93c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65V6.22l-4.01 3.83c-.24.26-.65.28-.92.04M4.35 19.5c0-.36.29-.65.65-.65h14c.35 0 .64.29.64.65 0 .35-.29.65-.64.65H5c-.36 0-.65-.3-.65-.65"})))};function FileUploaderCustom_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileUploaderCustom_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUploaderCustom_template_define_property(target,key,source[key])})}return target}function FileUploaderCustom_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUploaderCustom_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUploaderCustom_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileUploaderCustom_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function FileUploaderCustom_template_templateObject(){var data=FileUploaderCustom_template_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return FileUploaderCustom_template_templateObject=function _templateObject(){return data},data}__webpack_require__.p;var StyledP=styled_components_browser_esm.Ay.p(FileUploaderCustom_template_templateObject(),function(p){return p.theme.color["Neutral/Neutral 90"]}),FileUploaderCustomTemplate=function(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"В случае, если необходимо добавить функционал загрузчика к другому компоненту, данный компонент нужно вложить в компонент FileUploader."}),(0,jsx_runtime.jsxs)(FileUploader,FileUploaderCustom_template_object_spread_props(FileUploaderCustom_template_object_spread({},props),{style:{maxWidth:"288px"},dimension:"xl",fileDimension:"m",children:[(0,jsx_runtime.jsx)(StyledP,{children:"Загрузите не более 3-х файлов до 5 MB каждый, в формате JPG"}),(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"m",icon:(0,jsx_runtime.jsx)(SvgUploadOutline,{}),text:"Загрузить документы"})]}))]})};try{FileUploaderCustomTemplate.displayName="FileUploaderCustomTemplate",FileUploaderCustomTemplate.__docgenInfo={description:"",displayName:"FileUploaderCustomTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},fileDimension:{defaultValue:null,description:"Размер компонента загруженного файла",name:"fileDimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"Текст для лейбла компонента",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст для кнопки",name:"description",required:!1,type:{name:"ReactNode"}},accept:{defaultValue:null,description:`Строка принимаемых типов файлов разделенных запятой.
Например ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}`,name:"accept",required:!1,type:{name:"string"}},uploadedFiles:{defaultValue:null,description:"Список файлов",name:"uploadedFiles",required:!1,type:{name:"FileProps[]"}},onRemoveFile:{defaultValue:null,description:"Обработчик удаления файла",name:"onRemoveFile",required:!1,type:{name:"((index: number) => void)"}},renderFileInfoList:{defaultValue:null,description:"Функция, возвращающая компонент с кастомным списком файлов",name:"renderFileInfoList",required:!1,type:{name:"((renderProps: { files: FileProps[]; onRemoveFile: (index: number) => void; }) => ReactNode)"}},children:{defaultValue:null,description:"Кастомные элементы содержимого компонента",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/stories/FileUploaderCustom.template.tsx#FileUploaderCustomTemplate"]={docgenInfo:FileUploaderCustomTemplate.__docgenInfo,name:"FileUploaderCustomTemplate",path:"src/components/input/FileUploader/stories/FileUploaderCustom.template.tsx#FileUploaderCustomTemplate"})}catch(__react_docgen_typescript_loader_error){}var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function FileUploaderXL_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileUploaderXL_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUploaderXL_template_define_property(target,key,source[key])})}return target}function FileUploaderXL_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUploaderXL_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUploaderXL_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileUploaderXL_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FileUploaderXL_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FileUploaderXL_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var FileUploaderXLTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=FileUploaderXL_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),accept=["image/*",".pdf","application/json"];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(FileUploader,FileUploaderXL_template_object_spread_props(FileUploaderXL_template_object_spread({},props),{accept:accept.join(", "),style:{maxWidth:"480px"},dimension:"xl",fileDimension:"xl",title:"Загрузите не более 3-х файлов типа ".concat(accept.join(", ")," до 5 MB каждый"),onChange:function(e){return console.log("files change event: ".concat(JSON.stringify(Array.from(e.target.files||[]).map(function(param){return{name:param.name,type:param.type,size:param.size}}))))}}))})};try{FileUploaderXLTemplate.displayName="FileUploaderXLTemplate",FileUploaderXLTemplate.__docgenInfo={description:"",displayName:"FileUploaderXLTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},fileDimension:{defaultValue:null,description:"Размер компонента загруженного файла",name:"fileDimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"Текст для лейбла компонента",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст для кнопки",name:"description",required:!1,type:{name:"ReactNode"}},accept:{defaultValue:null,description:`Строка принимаемых типов файлов разделенных запятой.
Например ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}`,name:"accept",required:!1,type:{name:"string"}},uploadedFiles:{defaultValue:null,description:"Список файлов",name:"uploadedFiles",required:!1,type:{name:"FileProps[]"}},onRemoveFile:{defaultValue:null,description:"Обработчик удаления файла",name:"onRemoveFile",required:!1,type:{name:"((index: number) => void)"}},renderFileInfoList:{defaultValue:null,description:"Функция, возвращающая компонент с кастомным списком файлов",name:"renderFileInfoList",required:!1,type:{name:"((renderProps: { files: FileProps[]; onRemoveFile: (index: number) => void; }) => ReactNode)"}},children:{defaultValue:null,description:"Кастомные элементы содержимого компонента",name:"children",required:!1,type:{name:"ReactNode"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/stories/FileUploaderXL.template.tsx#FileUploaderXLTemplate"]={docgenInfo:FileUploaderXLTemplate.__docgenInfo,name:"FileUploaderXLTemplate",path:"src/components/input/FileUploader/stories/FileUploaderXL.template.tsx#FileUploaderXLTemplate"})}catch(__react_docgen_typescript_loader_error){}function FileUploaderCustomFiles_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileUploaderCustomFiles_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return FileUploaderCustomFiles_template_array_like_to_array(arr)}function FileUploaderCustomFiles_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function FileUploaderCustomFiles_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileUploaderCustomFiles_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileUploaderCustomFiles_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUploaderCustomFiles_template_define_property(target,key,source[key])})}return target}function FileUploaderCustomFiles_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUploaderCustomFiles_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUploaderCustomFiles_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileUploaderCustomFiles_template_sliced_to_array(arr,i){return FileUploaderCustomFiles_template_array_with_holes(arr)||FileUploaderCustomFiles_template_iterable_to_array_limit(arr,i)||FileUploaderCustomFiles_template_unsupported_iterable_to_array(arr,i)||FileUploaderCustomFiles_template_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||FileUploaderCustomFiles_template_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function FileUploaderCustomFiles_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileUploaderCustomFiles_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileUploaderCustomFiles_template_array_like_to_array(o,minLen)}}var FileUploaderCustomFilesTemplate=function(props){var _React_useState=FileUploaderCustomFiles_template_sliced_to_array(react.useState([]),2),files=_React_useState[0],setFiles=_React_useState[1],handleRemove=function(index){var _props_onRemoveFile;files.splice(index,1),setFiles(_to_consumable_array(files)),null==(_props_onRemoveFile=props.onRemoveFile)||_props_onRemoveFile.call(props,index)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"В случае, если необходима кастомизация компонента выбранного файла, нужно воспользоваться методом renderFileInfoList для отрисовки реакт-компонента."}),(0,jsx_runtime.jsx)(FileUploader,FileUploaderCustomFiles_template_object_spread_props(FileUploaderCustomFiles_template_object_spread({},props),{uploadedFiles:files,accept:".jpg,.jpeg",style:{maxWidth:"480px"},renderFileInfoList:function(param){var files=param.files,onRemoveFile=param.onRemoveFile;return files.map(function(file,index){return(0,jsx_runtime.jsx)(FileInfo,{dimension:"xl",fileDimension:"xl",file:file,onCloseClick:function(){onRemoveFile(index),handleRemove(index)},children:(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 2 Long",as:"p",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:file.file.name})},index)})},dimension:"xl",fileDimension:"xl",title:"Загрузите не более 5-х файлов до 5 MB каждый, в формате JPG",onChange:function(e){if(e.target.files){var _props_onChange;setFiles(Array.from(e.target.files).map(function(file){return{file:file}})),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)}}}))]})};try{FileUploaderCustomFilesTemplate.displayName="FileUploaderCustomFilesTemplate",FileUploaderCustomFilesTemplate.__docgenInfo={description:"",displayName:"FileUploaderCustomFilesTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},fileDimension:{defaultValue:null,description:"Размер компонента загруженного файла",name:"fileDimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"Текст для лейбла компонента",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст для кнопки",name:"description",required:!1,type:{name:"ReactNode"}},accept:{defaultValue:null,description:`Строка принимаемых типов файлов разделенных запятой.
Например ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}`,name:"accept",required:!1,type:{name:"string"}},uploadedFiles:{defaultValue:null,description:"Список файлов",name:"uploadedFiles",required:!1,type:{name:"FileProps[]"}},onRemoveFile:{defaultValue:null,description:"Обработчик удаления файла",name:"onRemoveFile",required:!1,type:{name:"((index: number) => void)"}},renderFileInfoList:{defaultValue:null,description:"Функция, возвращающая компонент с кастомным списком файлов",name:"renderFileInfoList",required:!1,type:{name:"((renderProps: { files: FileProps[]; onRemoveFile: (index: number) => void; }) => ReactNode)"}},children:{defaultValue:null,description:"Кастомные элементы содержимого компонента",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/stories/FileUploaderCustomFiles.template.tsx#FileUploaderCustomFilesTemplate"]={docgenInfo:FileUploaderCustomFilesTemplate.__docgenInfo,name:"FileUploaderCustomFilesTemplate",path:"src/components/input/FileUploader/stories/FileUploaderCustomFiles.template.tsx#FileUploaderCustomFilesTemplate"})}catch(__react_docgen_typescript_loader_error){}function FileUploaderM_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileUploaderM_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUploaderM_template_define_property(target,key,source[key])})}return target}function FileUploaderM_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUploaderM_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUploaderM_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var FileUploaderMTemplate=function(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Компонент M-размера используется на мобильных устройствах или как альтернатива большому компоненту. Не имеет функцию Drag and Drop. Поведение выбранных файлов такое же, как в компоненте XL-размера. Текстовое описание к полю носит произвольный характер, но должно точно описывать количество, размер и тип выбранных файлов."}),(0,jsx_runtime.jsx)(FileUploader,FileUploaderM_template_object_spread_props(FileUploaderM_template_object_spread({},props),{style:{maxWidth:"288px"},dimension:"m",fileDimension:"m",title:"Загрузите не более 3-х файлов до 5 MB каждый",description:"Добавьте файлы"}))]})};try{FileUploaderMTemplate.displayName="FileUploaderMTemplate",FileUploaderMTemplate.__docgenInfo={description:"",displayName:"FileUploaderMTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},fileDimension:{defaultValue:null,description:"Размер компонента загруженного файла",name:"fileDimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"Текст для лейбла компонента",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст для кнопки",name:"description",required:!1,type:{name:"ReactNode"}},accept:{defaultValue:null,description:`Строка принимаемых типов файлов разделенных запятой.
Например ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}`,name:"accept",required:!1,type:{name:"string"}},uploadedFiles:{defaultValue:null,description:"Список файлов",name:"uploadedFiles",required:!1,type:{name:"FileProps[]"}},onRemoveFile:{defaultValue:null,description:"Обработчик удаления файла",name:"onRemoveFile",required:!1,type:{name:"((index: number) => void)"}},renderFileInfoList:{defaultValue:null,description:"Функция, возвращающая компонент с кастомным списком файлов",name:"renderFileInfoList",required:!1,type:{name:"((renderProps: { files: FileProps[]; onRemoveFile: (index: number) => void; }) => ReactNode)"}},children:{defaultValue:null,description:"Кастомные элементы содержимого компонента",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/stories/FileUploaderM.template.tsx#FileUploaderMTemplate"]={docgenInfo:FileUploaderMTemplate.__docgenInfo,name:"FileUploaderMTemplate",path:"src/components/input/FileUploader/stories/FileUploaderM.template.tsx#FileUploaderMTemplate"})}catch(__react_docgen_typescript_loader_error){}function FileUploaderWithStatus_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileUploaderWithStatus_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileUploaderWithStatus_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileUploaderWithStatus_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileUploaderWithStatus_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileUploaderWithStatus_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUploaderWithStatus_template_define_property(target,key,source[key])})}return target}function FileUploaderWithStatus_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUploaderWithStatus_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUploaderWithStatus_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileUploaderWithStatus_template_sliced_to_array(arr,i){return FileUploaderWithStatus_template_array_with_holes(arr)||FileUploaderWithStatus_template_iterable_to_array_limit(arr,i)||FileUploaderWithStatus_template_unsupported_iterable_to_array(arr,i)||FileUploaderWithStatus_template_non_iterable_rest()}function FileUploaderWithStatus_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileUploaderWithStatus_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileUploaderWithStatus_template_array_like_to_array(o,minLen)}}var FileUploaderWithStatusTemplate=function(props){var _React_useState=FileUploaderWithStatus_template_sliced_to_array(react.useState([]),2),files=_React_useState[0],setFiles=_React_useState[1],_React_useState1=FileUploaderWithStatus_template_sliced_to_array(react.useState(!1),2),isLoading=_React_useState1[0],setIsLoading=_React_useState1[1],statusOptions=["Loading","Queue","Uploaded","Error"],previewOptions=[!0,!1];return react.useEffect(function(){if(isLoading&&files){var timeout=setTimeout(function(){setIsLoading(!1),setFiles(files.map(function(file){return FileUploaderWithStatus_template_object_spread_props(FileUploaderWithStatus_template_object_spread({},file),{status:statusOptions[Math.floor(2*Math.random())+2],error:"Error"===file.status?"Ошибка загрузки":""})}))},3e3);return function(){clearTimeout(timeout)}}},[isLoading,files]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки."}),(0,jsx_runtime.jsx)(FileUploader,FileUploaderWithStatus_template_object_spread_props(FileUploaderWithStatus_template_object_spread({},props),{uploadedFiles:files,style:{maxWidth:"480px"},dimension:"xl",fileDimension:"xl",onChange:function(e){if(e.target.files){var _props_onChange;setFiles(Array.from(e.target.files).map(function(file,i){return{file:file,status:0===i?statusOptions[0]:statusOptions[1],showPreview:0===i?previewOptions[0]:previewOptions[1]}})),setIsLoading(!0),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)}},title:"Загрузите не более 3-х файлов до 5 MB каждый"}))]})};try{FileUploaderWithStatusTemplate.displayName="FileUploaderWithStatusTemplate",FileUploaderWithStatusTemplate.__docgenInfo={description:"",displayName:"FileUploaderWithStatusTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},fileDimension:{defaultValue:null,description:"Размер компонента загруженного файла",name:"fileDimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},title:{defaultValue:null,description:"Текст для лейбла компонента",name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Текст для кнопки",name:"description",required:!1,type:{name:"ReactNode"}},accept:{defaultValue:null,description:`Строка принимаемых типов файлов разделенных запятой.
Например ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept}`,name:"accept",required:!1,type:{name:"string"}},uploadedFiles:{defaultValue:null,description:"Список файлов",name:"uploadedFiles",required:!1,type:{name:"FileProps[]"}},onRemoveFile:{defaultValue:null,description:"Обработчик удаления файла",name:"onRemoveFile",required:!1,type:{name:"((index: number) => void)"}},renderFileInfoList:{defaultValue:null,description:"Функция, возвращающая компонент с кастомным списком файлов",name:"renderFileInfoList",required:!1,type:{name:"((renderProps: { files: FileProps[]; onRemoveFile: (index: number) => void; }) => ReactNode)"}},children:{defaultValue:null,description:"Кастомные элементы содержимого компонента",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileUploader/stories/FileUploaderWithStatus.template.tsx#FileUploaderWithStatusTemplate"]={docgenInfo:FileUploaderWithStatusTemplate.__docgenInfo,name:"FileUploaderWithStatusTemplate",path:"src/components/input/FileUploader/stories/FileUploaderWithStatus.template.tsx#FileUploaderWithStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}let FileUploaderCustom_templateraw_namespaceObject=`import styled from 'styled-components';

import { FileUploader, TextButton, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps } from '@admiral-ds/react-ui';
import { ReactComponent as UploadSVG } from '@admiral-ds/icons/build/system/UploadOutline.svg';

const StyledP = styled.p\`
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

export const FileUploaderCustomTemplate = (props: FileUploaderProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В случае, если необходимо добавить функционал загрузчика к другому компоненту, данный компонент нужно вложить в
        компонент FileUploader.
      </T>
      <FileUploader {...props} style={{ maxWidth: '288px' }} dimension="xl" fileDimension="m">
        <StyledP>Загрузите не более 3-х файлов до 5 MB каждый, в формате JPG</StyledP>
        <TextButton dimension="m" icon={<UploadSVG />} text="Загрузить документы" />
      </FileUploader>
    </>
  );
};
`,FileUploaderXL_templateraw_namespaceObject=`import { ThemeProvider } from 'styled-components';
import { FileUploader } from '@admiral-ds/react-ui';
import type { BorderRadiusType, FileUploaderProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const FileUploaderXLTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileUploaderProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const accept = ['image/*', '.pdf', 'application/json'];

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <FileUploader
        {...props}
        accept={accept.join(', ')}
        style={{ maxWidth: '480px' }}
        dimension="xl"
        fileDimension="xl"
        title={\`Загрузите не более 3-х файлов типа \${accept.join(', ')} до 5 MB каждый\`}
        onChange={(e) =>
          // eslint-disable-next-line no-console
          console.log(
            \`files change event: \${JSON.stringify(
              Array.from(e.target.files || []).map(({ name, type, size }) => ({ name, type, size })),
            )}\`,
          )
        }
      />
    </ThemeProvider>
  );
};
`,FileUploaderCustomFiles_templateraw_namespaceObject=`import * as React from 'react';

import { FileInfo, FileUploader, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps, FileProps } from '@admiral-ds/react-ui';

export const FileUploaderCustomFilesTemplate = (props: FileUploaderProps) => {
  const [files, setFiles] = React.useState<FileProps[]>([]);
  const accept = ['.jpg', '.jpeg'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesToAdd = Array.from(e.target.files).map((file) => ({ file }));
      setFiles(filesToAdd);
      props.onChange?.(e);
    }
  };

  const handleRemove = (index: number) => {
    files.splice(index, 1);
    setFiles([...files]);
    props.onRemoveFile?.(index);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В случае, если необходима кастомизация компонента выбранного файла, нужно воспользоваться методом
        renderFileInfoList для отрисовки реакт-компонента.
      </T>
      <FileUploader
        {...props}
        uploadedFiles={files}
        accept={accept.join(',')}
        style={{ maxWidth: '480px' }}
        renderFileInfoList={({ files, onRemoveFile }) => {
          return files.map((file, index) => {
            return (
              <FileInfo
                key={index}
                dimension="xl"
                fileDimension="xl"
                file={file}
                onCloseClick={() => {
                  onRemoveFile(index);
                  handleRemove(index);
                }}
              >
                <T
                  font="Body/Body 2 Long"
                  as="p"
                  style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  {file.file.name}
                </T>
              </FileInfo>
            );
          });
        }}
        dimension="xl"
        fileDimension="xl"
        title="Загрузите не более 5-х файлов до 5 MB каждый, в формате JPG"
        onChange={handleChange}
      />
    </>
  );
};
`,FileUploaderM_templateraw_namespaceObject=`import * as React from 'react';

import { FileUploader, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps } from '@admiral-ds/react-ui';

export const FileUploaderMTemplate = (props: FileUploaderProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент M-размера используется на мобильных устройствах или как альтернатива большому компоненту. Не имеет
        функцию Drag and Drop. Поведение выбранных файлов такое же, как в компоненте XL-размера. Текстовое описание к
        полю носит произвольный характер, но должно точно описывать количество, размер и тип выбранных файлов.
      </T>
      <FileUploader
        {...props}
        style={{ maxWidth: '288px' }}
        dimension="m"
        fileDimension="m"
        title="Загрузите не более 3-х файлов до 5 MB каждый"
        description="Добавьте файлы"
      />
    </>
  );
};
`,FileUploaderWithStatus_templateraw_namespaceObject=`import * as React from 'react';

import { FileUploader, T } from '@admiral-ds/react-ui';
import type { FileUploaderProps, FileProps } from '@admiral-ds/react-ui';

import type { FileUploadStatus } from '#src/components/input/FileUploader/utils';

export const FileUploaderWithStatusTemplate = (props: FileUploaderProps) => {
  const [files, setFiles] = React.useState<FileProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const statusOptions: FileUploadStatus[] = ['Loading', 'Queue', 'Uploaded', 'Error'];
  const previewOptions = [true, false];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesToAdd = Array.from(e.target.files).map((file, i) => ({
        file,
        status: i === 0 ? statusOptions[0] : statusOptions[1],
        showPreview: i === 0 ? previewOptions[0] : previewOptions[1],
      }));
      setFiles(filesToAdd);
      setIsLoading(true);
      props.onChange?.(e);
    }
  };

  /** Для имитации загрузки файлов */
  React.useEffect(() => {
    if (isLoading && files) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        const updatedFiles = files.map((file) => ({
          ...file,
          status: statusOptions[Math.floor(Math.random() * (3 - 2 + 1)) + 2],
          error: file.status === 'Error' ? 'Ошибка загрузки' : '',
        }));
        setFiles(updatedFiles);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, files]);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает
        состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.
      </T>
      <FileUploader
        {...props}
        uploadedFiles={files}
        style={{ maxWidth: '480px' }}
        dimension="xl"
        fileDimension="xl"
        onChange={handleChange}
        title="Загрузите не более 3-х файлов до 5 MB каждый"
      />
    </>
  );
};
`;function FileUploader_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileUploader_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileUploader_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileUploader_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileUploader_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileUploader_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileUploader_stories_define_property(target,key,source[key])})}return target}function FileUploader_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileUploader_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileUploader_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileUploader_stories_sliced_to_array(arr,i){return FileUploader_stories_array_with_holes(arr)||FileUploader_stories_iterable_to_array_limit(arr,i)||FileUploader_stories_unsupported_iterable_to_array(arr,i)||FileUploader_stories_non_iterable_rest()}function FileUploader_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function FileUploader_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileUploader_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileUploader_stories_array_like_to_array(o,minLen)}}function FileUploader_stories_templateObject(){var data=FileUploader_stories_tagged_template_literal([`
  height: 40px;
`]);return FileUploader_stories_templateObject=function _templateObject(){return data},data}function FileUploader_stories_templateObject1(){var data=FileUploader_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return FileUploader_stories_templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(FileUploader_stories_templateObject()),FileUploader_stories_Desc=styled_components_browser_esm.Ay.div(FileUploader_stories_templateObject1());let FileUploader_stories={title:"Deprecated/FileUploader (Deprecated используйте FileInput)",decorators:void 0,component:FileUploader,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27281"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27389"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27519"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27563"}],componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(FileUploader_stories_Desc,{children:["Компонент позволяет выбирать локальные файлы пользователя для последующей загрузки их на сервер. Выбирать файлы можно как через нажатие на компонент, так и через Drag and Drop (в XL-размере) на компонент. Компонент имеет две разновидности отображения — размер XL с превью изображения или иконкой формата файла и размер M без превью, передается параметром fileDimension.",(0,jsx_runtime.jsx)(Separator,{}),"Выбранные пользователем файлы передаются списком через параметр uploadedFiles, где каждый файл это объект с обязательным ключом file и двумя необязательными ключами status и error.",(0,jsx_runtime.jsx)(Separator,{}),"Примечание: в IE11 нет функционала перетаскивания и удаления файлов по причине отсутствия поддержки Drag and Drop и конструктора DataTransfer в данном браузере."]})},{}),layout:"centered"},argTypes:{dimension:{options:["xl","m"],control:{type:"radio"}},title:{control:!1},description:{control:!1},accept:{control:!1},uploadedFiles:{control:!1},children:{control:!1},disabled:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var FileUploaderXL={render:function(props){var CSSCustomProps=FileUploader_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(FileUploaderXLTemplate,FileUploader_stories_object_spread_props(FileUploader_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:FileUploaderXL_templateraw_namespaceObject}}},name:"File Uploader. XL"},FileUploaderM={render:function(props){return(0,jsx_runtime.jsx)(FileUploaderMTemplate,FileUploader_stories_object_spread({},props))},name:"File Uploader. M",parameters:{docs:{source:{code:FileUploaderM_templateraw_namespaceObject}}}},FileUploaderWithStatus={render:function(props){return(0,jsx_runtime.jsx)(FileUploaderWithStatusTemplate,FileUploader_stories_object_spread({},props))},name:"File Uploader со статусом загрузки",parameters:{docs:{source:{code:FileUploaderWithStatus_templateraw_namespaceObject}}}},FileUploaderCustomFiles={render:function(props){return(0,jsx_runtime.jsx)(FileUploaderCustomFilesTemplate,FileUploader_stories_object_spread({},props))},name:"File Uploader. Кастомизированный список файлов",parameters:{docs:{source:{code:FileUploaderCustomFiles_templateraw_namespaceObject}}}},FileUploaderCustom={render:function(props){return(0,jsx_runtime.jsx)(FileUploaderCustomTemplate,FileUploader_stories_object_spread({},props))},name:"Другой визуальный компонент с функционалом FileUploader",parameters:{docs:{source:{code:FileUploaderCustom_templateraw_namespaceObject}}}};FileUploaderXL.parameters={...FileUploaderXL.parameters,docs:{...FileUploaderXL.parameters?.docs,source:{originalSource:`{
  render: FileUploaderXLStory,
  parameters: {
    docs: {
      source: {
        code: FileUploaderXLRaw
      }
    }
  },
  name: 'File Uploader. XL'
}`,...FileUploaderXL.parameters?.docs?.source}}},FileUploaderM.parameters={...FileUploaderM.parameters,docs:{...FileUploaderM.parameters?.docs,source:{originalSource:`{
  render: FileUploaderMStory,
  name: 'File Uploader. M',
  parameters: {
    docs: {
      source: {
        code: FileUploaderMRaw
      }
    }
  }
}`,...FileUploaderM.parameters?.docs?.source}}},FileUploaderWithStatus.parameters={...FileUploaderWithStatus.parameters,docs:{...FileUploaderWithStatus.parameters?.docs,source:{originalSource:`{
  render: FileUploaderWithStatusStory,
  name: 'File Uploader со статусом загрузки',
  parameters: {
    docs: {
      source: {
        code: FileUploaderWithStatusRaw
      }
    }
  }
}`,...FileUploaderWithStatus.parameters?.docs?.source}}},FileUploaderCustomFiles.parameters={...FileUploaderCustomFiles.parameters,docs:{...FileUploaderCustomFiles.parameters?.docs,source:{originalSource:`{
  render: FileUploaderCustomFilesStory,
  name: 'File Uploader. Кастомизированный список файлов',
  parameters: {
    docs: {
      source: {
        code: FileUploaderCustomFilesRaw
      }
    }
  }
}`,...FileUploaderCustomFiles.parameters?.docs?.source}}},FileUploaderCustom.parameters={...FileUploaderCustom.parameters,docs:{...FileUploaderCustom.parameters?.docs,source:{originalSource:`{
  render: FileUploaderCustomStory,
  name: 'Другой визуальный компонент с функционалом FileUploader',
  parameters: {
    docs: {
      source: {
        code: FileUploaderCustomRaw
      }
    }
  }
}`,...FileUploaderCustom.parameters?.docs?.source}}};let __namedExportsOrder=["FileUploaderXL","FileUploaderM","FileUploaderWithStatus","FileUploaderCustomFiles","FileUploaderCustom"]},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, `,`);
    border-color: var(--admiral-color-Neutral_Neutral20, `,`);
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 2s ease infinite;
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonAnimation=function(props){return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject(),props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"])},skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),function(props){return skeletonAnimation(props)});try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:`Dynamically adjust the rendered component or HTML tag, e.g.
\`\`\`
const StyledButton = styled.button\`\`

<StyledButton as="a" href="/foo">
  I'm an anchor now
</StyledButton>
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-input-FileUploader-stories-FileUploader-stories.e93076f2.iframe.bundle.js.map