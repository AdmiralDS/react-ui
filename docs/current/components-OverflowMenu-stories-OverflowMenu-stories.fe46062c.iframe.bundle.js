"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4315],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMinusCircleOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgMinusCircleOutline=function SvgMinusCircleOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-7.7a7.7 7.7 0 1 0 0 15.4c4.25 0 7.7-3.45 7.7-7.7 0-4.26-3.45-7.7-7.7-7.7M7 12c0-.36.29-.65.64-.65h8.71c.35 0 .65.29.65.65 0 .35-.3.65-.65.65H7.64c-.35 0-.64-.3-.64-.65"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/MoreHorizontalOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMoreHorizontalOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgMoreHorizontalOutline=function SvgMoreHorizontalOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M5 10a2 2 0 1 1-2 2c0-1.11.89-2 2-2m7 0a2 2 0 1 1-2 2c0-1.11.89-2 2-2m7 0a2 2 0 1 1-2 2c0-1.11.89-2 2-2"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/MoreVerticalOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMoreVerticalOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgMoreVerticalOutline=function SvgMoreVerticalOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M10 19c0-1.11.89-2 2-2a2 2 0 1 1-2 2m0-7c0-1.11.89-2 2-2a2 2 0 1 1-2 2m0-7c0-1.11.89-2 2-2a2 2 0 1 1-2 2"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OverflowMenu/stories/OverflowMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OverflowMenuBase:()=>OverflowMenuBase,OverflowMenuOptions:()=>OverflowMenuOptions,OverflowMenuSizesOrientation:()=>OverflowMenuSizesOrientation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OverflowMenu_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),OverflowMenu=__webpack_require__("./src/components/OverflowMenu/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},logSelectedId=function(id){console.log("selected: ".concat(id))},items=[{id:"1",display:"Option one"},{id:"2",display:"Option two"},{id:"3",display:"Option three"},{id:"4",display:"Option four"},{id:"5",display:"Option five"},{id:"6",display:"Option six"},{id:"7",display:"Option seven"}],OverflowMenuBaseTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_useState=_sliced_to_array((0,react.useState)(void 0),2),selected=_useState[0],setSelected=_useState[1],model=(0,react.useMemo)(function(){return items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({dimension:props.dimension},options),{key:item.id}),item.display)},disabled:item.disabled}})},[props.dimension]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(OverflowMenu.o,_object_spread_props(_object_spread({},props),{items:model,selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},onVisibilityChange:handleVisibilityChange,"aria-label":"Overflow Menu component","data-dropdown-container-id":"overflow-menu-with-dropdown",className:"overflow-menu-class",dropContainerClassName:"dropContainerClass"}))})};try{OverflowMenuBaseTemplate.displayName="OverflowMenuBaseTemplate",OverflowMenuBaseTemplate.__docgenInfo={description:"",displayName:"OverflowMenuBaseTemplate",props:{selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте nVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},isVertical:{defaultValue:null,description:"Ориентация компонента",name:"isVertical",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OverflowMenu/stories/OverflowMenuBase.template.tsx#OverflowMenuBaseTemplate"]={docgenInfo:OverflowMenuBaseTemplate.__docgenInfo,name:"OverflowMenuBaseTemplate",path:"src/components/OverflowMenu/stories/OverflowMenuBase.template.tsx#OverflowMenuBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}var MinusCircleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg");function OverflowMenuOptions_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function OverflowMenuOptions_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function OverflowMenuOptions_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function OverflowMenuOptions_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function OverflowMenuOptions_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function OverflowMenuOptions_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){OverflowMenuOptions_template_define_property(target,key,source[key])})}return target}function OverflowMenuOptions_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function OverflowMenuOptions_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):OverflowMenuOptions_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function OverflowMenuOptions_template_sliced_to_array(arr,i){return OverflowMenuOptions_template_array_with_holes(arr)||OverflowMenuOptions_template_iterable_to_array_limit(arr,i)||OverflowMenuOptions_template_unsupported_iterable_to_array(arr,i)||OverflowMenuOptions_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function OverflowMenuOptions_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return OverflowMenuOptions_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return OverflowMenuOptions_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  height: 20px;
  width: 8px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  align-items: flex-start;
`]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject()),DisplayBlock=styled_components_browser_esm.Ay.div(_templateObject1()),OverflowMenuOptions_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},OverflowMenuOptions_template_logSelectedId=function(id){console.log("selected: ".concat(id))},OverflowMenuOptions_template_items=[{id:"1",display:"Option one"},{id:"2",display:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",width:"115px",justifyContent:"space-between",alignItems:"center"},children:[(0,jsx_runtime.jsx)(MinusCircleOutline.h,{width:20,height:20}),"Option two"]})},{id:"3",display:"Option three",disabled:!0},{id:"4",display:"Option four"}],OverflowMenuOptionsTemplate=function(props){var model=(0,react.useMemo)(function(){return OverflowMenuOptions_template_items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,OverflowMenuOptions_template_object_spread_props(OverflowMenuOptions_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.display)},disabled:item.disabled}})},[props.dimension]),_useState=OverflowMenuOptions_template_sliced_to_array((0,react.useState)(void 0),2),selected=_useState[0],setSelected=_useState[1];return(0,jsx_runtime.jsxs)(DisplayBlock,{children:[(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuOptions_template_object_spread_props(OverflowMenuOptions_template_object_spread({},props),{items:model,selected:selected,onSelectItem:function(id){OverflowMenuOptions_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuOptions_template_handleVisibilityChange,"aria-label":"Overflow Menu component"})),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuOptions_template_object_spread_props(OverflowMenuOptions_template_object_spread({},props),{items:model,selected:selected,onSelectItem:function(id){OverflowMenuOptions_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuOptions_template_handleVisibilityChange,"aria-label":"Overflow Menu component",disabled:!0}))]})};try{OverflowMenuOptionsTemplate.displayName="OverflowMenuOptionsTemplate",OverflowMenuOptionsTemplate.__docgenInfo={description:"",displayName:"OverflowMenuOptionsTemplate",props:{selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте nVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},isVertical:{defaultValue:null,description:"Ориентация компонента",name:"isVertical",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OverflowMenu/stories/OverflowMenuOptions.template.tsx#OverflowMenuOptionsTemplate"]={docgenInfo:OverflowMenuOptionsTemplate.__docgenInfo,name:"OverflowMenuOptionsTemplate",path:"src/components/OverflowMenu/stories/OverflowMenuOptions.template.tsx#OverflowMenuOptionsTemplate"})}catch(__react_docgen_typescript_loader_error){}function OverflowMenuSizesOrientation_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function OverflowMenuSizesOrientation_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function OverflowMenuSizesOrientation_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function OverflowMenuSizesOrientation_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function OverflowMenuSizesOrientation_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function OverflowMenuSizesOrientation_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){OverflowMenuSizesOrientation_template_define_property(target,key,source[key])})}return target}function OverflowMenuSizesOrientation_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function OverflowMenuSizesOrientation_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):OverflowMenuSizesOrientation_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function OverflowMenuSizesOrientation_template_sliced_to_array(arr,i){return OverflowMenuSizesOrientation_template_array_with_holes(arr)||OverflowMenuSizesOrientation_template_iterable_to_array_limit(arr,i)||OverflowMenuSizesOrientation_template_unsupported_iterable_to_array(arr,i)||OverflowMenuSizesOrientation_template_non_iterable_rest()}function OverflowMenuSizesOrientation_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function OverflowMenuSizesOrientation_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return OverflowMenuSizesOrientation_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return OverflowMenuSizesOrientation_template_array_like_to_array(o,minLen)}}function OverflowMenuSizesOrientation_template_templateObject(){var data=OverflowMenuSizesOrientation_template_tagged_template_literal([`
  height: 20px;
  width: 8px;
`]);return OverflowMenuSizesOrientation_template_templateObject=function _templateObject(){return data},data}function OverflowMenuSizesOrientation_template_templateObject1(){var data=OverflowMenuSizesOrientation_template_tagged_template_literal([`
  display: flex;
  align-items: flex-start;
`]);return OverflowMenuSizesOrientation_template_templateObject1=function _templateObject(){return data},data}var OverflowMenuSizesOrientation_template_Separator=styled_components_browser_esm.Ay.div(OverflowMenuSizesOrientation_template_templateObject()),OverflowMenuSizesOrientation_template_DisplayBlock=styled_components_browser_esm.Ay.div(OverflowMenuSizesOrientation_template_templateObject1()),OverflowMenuSizesOrientation_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},OverflowMenuSizesOrientation_template_logSelectedId=function(id){console.log("selected: ".concat(id))},OverflowMenuSizesOrientation_template_items=[{id:"1",display:"Option one"},{id:"2",display:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",width:"115px",justifyContent:"space-between",alignItems:"center"},children:[(0,jsx_runtime.jsx)(MinusCircleOutline.h,{width:20,height:20}),"Option two"]})},{id:"3",display:"Option three",disabled:!0},{id:"4",display:"Option four"}],OverflowMenuSizesOrientationTemplate=function(props){var modelL=(0,react.useMemo)(function(){return OverflowMenuSizesOrientation_template_items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({dimension:"l"},options),{key:item.id}),item.display)},disabled:item.disabled}})},[]),modelM=(0,react.useMemo)(function(){return OverflowMenuSizesOrientation_template_items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({dimension:"m"},options),{key:item.id}),item.display)},disabled:"1"===item.id}})},[]),modelS=(0,react.useMemo)(function(){return OverflowMenuSizesOrientation_template_items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({dimension:"s"},options),{key:item.id}),item.display)},disabled:item.disabled}})},[]),_useState=OverflowMenuSizesOrientation_template_sliced_to_array((0,react.useState)(void 0),2),selected=_useState[0],setSelected=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(OverflowMenuSizesOrientation_template_DisplayBlock,{children:[(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({},props),{items:modelL,selected:selected,dimension:"l",onSelectItem:function(id){OverflowMenuSizesOrientation_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuSizesOrientation_template_handleVisibilityChange,"aria-label":"Overflow Menu component L"})),(0,jsx_runtime.jsx)(OverflowMenuSizesOrientation_template_Separator,{}),(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({},props),{items:modelM,dimension:"m",selected:selected,onSelectItem:function(id){OverflowMenuSizesOrientation_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuSizesOrientation_template_handleVisibilityChange,"aria-label":"Overflow Menu component M"})),(0,jsx_runtime.jsx)(OverflowMenuSizesOrientation_template_Separator,{}),(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({},props),{items:modelS,dimension:"s",selected:selected,onSelectItem:function(id){OverflowMenuSizesOrientation_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuSizesOrientation_template_handleVisibilityChange,"aria-label":"Overflow Menu component S"}))]}),(0,jsx_runtime.jsx)(OverflowMenuSizesOrientation_template_Separator,{}),(0,jsx_runtime.jsxs)(OverflowMenuSizesOrientation_template_DisplayBlock,{children:[(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({},props),{alignSelf:"flex-start",items:modelL,dimension:"l",isVertical:!0,selected:selected,onSelectItem:function(id){OverflowMenuSizesOrientation_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuSizesOrientation_template_handleVisibilityChange,"aria-label":"Overflow Menu component vertical L"})),(0,jsx_runtime.jsx)(OverflowMenuSizesOrientation_template_Separator,{}),(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({},props),{items:modelM,dimension:"m",isVertical:!0,selected:selected,onSelectItem:function(id){OverflowMenuSizesOrientation_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuSizesOrientation_template_handleVisibilityChange,"aria-label":"Overflow Menu component vertical M"})),(0,jsx_runtime.jsx)(OverflowMenuSizesOrientation_template_Separator,{}),(0,jsx_runtime.jsx)(OverflowMenu.o,OverflowMenuSizesOrientation_template_object_spread_props(OverflowMenuSizesOrientation_template_object_spread({},props),{items:modelS,dimension:"s",isVertical:!0,selected:selected,onSelectItem:function(id){OverflowMenuSizesOrientation_template_logSelectedId(id),setSelected(id)},onVisibilityChange:OverflowMenuSizesOrientation_template_handleVisibilityChange,"aria-label":"Overflow Menu component vertical S"}))]})]})};try{OverflowMenuSizesOrientationTemplate.displayName="OverflowMenuSizesOrientationTemplate",OverflowMenuSizesOrientationTemplate.__docgenInfo={description:"",displayName:"OverflowMenuSizesOrientationTemplate",props:{selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте nVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},isVertical:{defaultValue:null,description:"Ориентация компонента",name:"isVertical",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/OverflowMenu/stories/OverflowMenuSizesOrientation.template.tsx#OverflowMenuSizesOrientationTemplate"]={docgenInfo:OverflowMenuSizesOrientationTemplate.__docgenInfo,name:"OverflowMenuSizesOrientationTemplate",path:"src/components/OverflowMenu/stories/OverflowMenuSizesOrientation.template.tsx#OverflowMenuSizesOrientationTemplate"})}catch(__react_docgen_typescript_loader_error){}let OverflowMenuBase_templateraw_namespaceObject=`import { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { MenuItem, OverflowMenu } from '@admiral-ds/react-ui';
import type { OverflowMenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import * as React from 'react';

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

interface ItemProps {
  id: string;
  display: React.ReactNode;
  disabled?: boolean;
}
const items: ItemProps[] = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const OverflowMenuBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: OverflowMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <OverflowMenu
        {...props}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
        data-dropdown-container-id="overflow-menu-with-dropdown"
        className="overflow-menu-class"
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
`,OverflowMenuOptions_templateraw_namespaceObject=`import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { MenuItem, OverflowMenu } from '@admiral-ds/react-ui';
import type { RenderOptionProps, OverflowMenuProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const Separator = styled.div\`
  height: 20px;
  width: 8px;
\`;

const DisplayBlock = styled.div\`
  display: flex;
  align-items: flex-start;
\`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

interface ItemProps {
  id: string;
  display: React.ReactNode;
  disabled?: boolean;
}
const items: ItemProps[] = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
  },
  {
    id: '3',
    display: 'Option three',
    disabled: true,
  },
  {
    id: '4',
    display: 'Option four',
  },
];

export const OverflowMenuOptionsTemplate = (props: OverflowMenuProps) => {
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <DisplayBlock>
      <OverflowMenu
        {...props}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
      />
      <Separator />
      <OverflowMenu
        {...props}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
        disabled
      />
    </DisplayBlock>
  );
};
`,OverflowMenuSizesOrientation_templateraw_namespaceObject=`import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { MenuItem, OverflowMenu } from '@admiral-ds/react-ui';
import type { OverflowMenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const Separator = styled.div\`
  height: 20px;
  width: 8px;
\`;

const DisplayBlock = styled.div\`
  display: flex;
  align-items: flex-start;
\`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

interface ItemProps {
  id: string;
  display: React.ReactNode;
  disabled?: boolean;
}
const items: ItemProps[] = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
  },
  {
    id: '3',
    display: 'Option three',
    disabled: true,
  },
  {
    id: '4',
    display: 'Option four',
  },
];

export const OverflowMenuSizesOrientationTemplate = (props: OverflowMenuProps) => {
  const dimensionL = 'l';
  const dimensionM = 'm';
  const dimensionS = 's';
  const modelL = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionL} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionM} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.id === '1',
    }));
  }, []);
  const modelS = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionS} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <>
      <DisplayBlock>
        <OverflowMenu
          {...props}
          items={modelL}
          selected={selected}
          dimension={dimensionL}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component L"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelM}
          dimension={dimensionM}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component M"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelS}
          dimension={dimensionS}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component S"
        />
      </DisplayBlock>
      <Separator />
      <DisplayBlock>
        <OverflowMenu
          {...props}
          alignSelf="flex-start"
          items={modelL}
          dimension={dimensionL}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical L"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelM}
          dimension={dimensionM}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical M"
        />
        <Separator />
        <OverflowMenu
          {...props}
          items={modelS}
          dimension={dimensionS}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical S"
        />
      </DisplayBlock>
    </>
  );
};
`;function OverflowMenu_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function OverflowMenu_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function OverflowMenu_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function OverflowMenu_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function OverflowMenu_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function OverflowMenu_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){OverflowMenu_stories_define_property(target,key,source[key])})}return target}function OverflowMenu_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function OverflowMenu_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):OverflowMenu_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function OverflowMenu_stories_sliced_to_array(arr,i){return OverflowMenu_stories_array_with_holes(arr)||OverflowMenu_stories_iterable_to_array_limit(arr,i)||OverflowMenu_stories_unsupported_iterable_to_array(arr,i)||OverflowMenu_stories_non_iterable_rest()}function OverflowMenu_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return OverflowMenu_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return OverflowMenu_stories_array_like_to_array(o,minLen)}}let OverflowMenu_stories={title:"Admiral-2.1/OverflowMenu",decorators:void 0,component:OverflowMenu.o,parameters:{docs:{source:{code:null}},layout:"centered",design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A25623"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A25674"}]},argTypes:{dimension:{options:["l","m","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},isVertical:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},items:{control:!1},selected:{control:{type:"text"}},active:{control:{type:"text"}},menuWidth:{control:{type:"text"}},menuMaxHeight:{control:{type:"text"}},isVisible:{control:{type:"boolean"}},disableSelectedOptionHighlight:{control:{type:"boolean"}}}};var OverflowMenuBase={render:function(props){var CSSCustomProps=OverflowMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(OverflowMenuBaseTemplate,OverflowMenu_stories_object_spread_props(OverflowMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:OverflowMenuBase_templateraw_namespaceObject}}},name:"OverflowMenu. Базовый пример."},OverflowMenuOptions={render:function(props){return(0,jsx_runtime.jsx)(OverflowMenuOptionsTemplate,OverflowMenu_stories_object_spread({},props))},parameters:{docs:{source:{code:OverflowMenuOptions_templateraw_namespaceObject}}},name:"OverflowMenu. Задизейбленные и кастомизированные опции."},OverflowMenuSizesOrientation={render:function(props){return(0,jsx_runtime.jsx)(OverflowMenuSizesOrientationTemplate,OverflowMenu_stories_object_spread({},props))},parameters:{docs:{source:{code:OverflowMenuSizesOrientation_templateraw_namespaceObject}}},name:"OverflowMenu. Размеры и ориентация."};OverflowMenuBase.parameters={...OverflowMenuBase.parameters,docs:{...OverflowMenuBase.parameters?.docs,source:{originalSource:`{
  render: OverflowMenuBaseStory,
  parameters: {
    docs: {
      source: {
        code: OverflowMenuBaseRaw
      }
    }
  },
  name: 'OverflowMenu. Базовый пример.'
}`,...OverflowMenuBase.parameters?.docs?.source}}},OverflowMenuOptions.parameters={...OverflowMenuOptions.parameters,docs:{...OverflowMenuOptions.parameters?.docs,source:{originalSource:`{
  render: OverflowMenuOptionsStory,
  parameters: {
    docs: {
      source: {
        code: OverflowMenuOptionsRaw
      }
    }
  },
  name: 'OverflowMenu. Задизейбленные и кастомизированные опции.'
}`,...OverflowMenuOptions.parameters?.docs?.source}}},OverflowMenuSizesOrientation.parameters={...OverflowMenuSizesOrientation.parameters,docs:{...OverflowMenuSizesOrientation.parameters?.docs,source:{originalSource:`{
  render: OverflowMenuSizesOrientationStory,
  parameters: {
    docs: {
      source: {
        code: OverflowMenuSizesOrientationRaw
      }
    }
  },
  name: 'OverflowMenu. Размеры и ориентация.'
}`,...OverflowMenuSizesOrientation.parameters?.docs?.source}}};let __namedExportsOrder=["OverflowMenuBase","OverflowMenuOptions","OverflowMenuSizesOrientation"]},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, `,`);
`]);return _templateObject=function _templateObject(){return data},data}var PositionedPortalContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject(),function(param){return param.theme.zIndex.dropdown}),PositionInPortal=function(_param){var targetElement=_param.targetElement,rootRef=_param.rootRef,fullContainerWidth=_param.fullContainerWidth,props=_object_without_properties(_param,["targetElement","rootRef","fullContainerWidth"]),positionedPortalContainerRef=(0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function(){var node=positionedPortalContainerRef.current;if(node&&targetElement){var observer=(0,_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_2__.A)(targetElement,function(rect){if(rect){var x=rect.x,y=rect.y,height=rect.height,width=rect.width,style=node.style;style.top="".concat(y,"px"),style.left=fullContainerWidth?"0px":"".concat(x,"px"),style.height="".concat(height,"px"),style.width=fullContainerWidth?"100%":"".concat(width,"px")}});return observer.observe(),function(){observer.unobserve()}}},[targetElement,fullContainerWidth]),(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PositionedPortalContainer,_object_spread({ref:positionedPortalContainerRef},props)),(null==rootRef?void 0:rootRef.current)||document.body)};try{PositionedPortalContainer.displayName="PositionedPortalContainer",PositionedPortalContainer.__docgenInfo={description:"",displayName:"PositionedPortalContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionedPortalContainer"]={docgenInfo:PositionedPortalContainer.__docgenInfo,name:"PositionedPortalContainer",path:"src/components/PositionInPortal.tsx#PositionedPortalContainer"})}catch(__react_docgen_typescript_loader_error){}try{PositionInPortal.displayName="PositionInPortal",PositionInPortal.__docgenInfo={description:`При фиксированном позиционировании (как у PositionedPortalContainer) элемент позиционируется
всегда относительно исходного содержащего блока (окна браузера).
Исключение, когда один из его предков имеет свойство transform, perspective, или filter,
установленное на что-то иное, кроме none, в этом случае этот предок ведет
себя как содержащий блок. Тогда top, right, bottom и left элемента рассчитываются относительно этого содержащего блока.
Если у такого предка кроме transform задано свойство overflow: hidden, то элемент будет обрезаться по его краям.

В связи с вышеописанным в качестве контейнера для портала рекомендуется выбирать элемент, у предков которого нет свойств
transform, perspective, или filter отличных от none. Также рекомендуется размещать контейнер портала в самом низу dom-дерева,
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-OverflowMenu-stories-OverflowMenu-stories.fe46062c.iframe.bundle.js.map