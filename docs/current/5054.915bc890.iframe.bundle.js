"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5054],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};__webpack_require__.p},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/EditMode/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>EditMode});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Tooltip/index.tsx"),_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/checkOverflow.ts"),_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/input/EditMode/style.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var stopEvent=function(e){return e.preventDefault()},nothing=function(){},EditMode=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_bold=_param.bold,containerCssMixin=_param.containerCssMixin,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,onEdit=_param.onEdit,onConfirm=_param.onConfirm,onCancel=_param.onCancel,onClear=_param.onClear,value=_param.value,_param_showTooltip=_param.showTooltip,_param_multilineView=_param.multilineView,multilineView=void 0!==_param_multilineView&&_param_multilineView,_param_confirmButtonPropsConfig=_param.confirmButtonPropsConfig,_param_cancelButtonPropsConfig=_param.cancelButtonPropsConfig,_param_editButtonPropsConfig=_param.editButtonPropsConfig,props=_object_without_properties(_param,["dimension","bold","containerCssMixin","disabled","onEdit","onConfirm","onCancel","onClear","value","showTooltip","multilineView","confirmButtonPropsConfig","cancelButtonPropsConfig","editButtonPropsConfig"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),edit=_useState[0],setEdit=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value),2),valueBeforeEdit=_useState1[0],setValueBeforeEdit=_useState1[1],iconSize="s"===dimension?20:24,inputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),wrapperRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),overflowActive=_useState2[0],setOverflowActive=_useState2[1],_useState3=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),tooltipVisible=_useState3[0],setTooltipVisible=_useState3[1],_useState4=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),node=_useState4[0],setNode=_useState4[1],textRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){var show=function show(){setTooltipVisible(!0)},hide=function hide(){setTooltipVisible(!1)};if(node)return node.addEventListener("mouseenter",show),node.addEventListener("mouseleave",hide),function(){node.removeEventListener("mouseenter",show),node.removeEventListener("mouseleave",hide)}},[setTooltipVisible,node]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){textRef.current&&(0,_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_2__.p)(textRef.current)!==overflowActive&&setOverflowActive((0,_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_2__.p)(textRef.current))},[tooltipVisible,textRef.current,setOverflowActive]);var enableEdit=function(){setEdit(!0),setValueBeforeEdit(value),null==onEdit||onEdit(value)},editDimension="xxl"===dimension?"xl":dimension,confirmButtonProps={appearance:"secondary",dimension:editDimension,displayAsSquare:!0,disabled:"error"===props.status,onClick:function(){if(setEdit(!1),inputRef.current){var inputValue=inputRef.current.value;null==onConfirm||onConfirm(inputValue)}},iconStart:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.Mw,{height:iconSize,width:iconSize}),$multiline:!1},cancelButtonProps={appearance:"secondary",dimension:editDimension,displayAsSquare:!0,disabled:"error"===props.status,onClick:function(){setEdit(!1),inputRef.current&&((0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_3__.B)(inputRef.current,{value:valueBeforeEdit.toString()}),null==onCancel||onCancel(valueBeforeEdit),null==onClear||onClear())},iconStart:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.EO,{height:iconSize,width:iconSize}),$multiline:!1},editButtonProps={$multiline:multilineView,height:iconSize,width:iconSize,onClick:disabled?void 0:enableEdit};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.mO,_object_spread_props(_object_spread({"data-dimension":"".concat(dimension).concat(void 0!==_param_bold&&_param_bold&&"xl"!==editDimension?"-bold":""),"data-disabled":disabled,$cssMixin:containerCssMixin,ref:wrapperRef,"data-disable-copying":!!props.disableCopying||void 0},props.disableCopying&&{onMouseDown:stopEvent}),{children:edit?!disabled&&!props.readOnly&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.HE,_object_spread({ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_5__.d)(ref,inputRef),autoFocus:!0,disabled:disabled,dimension:editDimension,value:value,containerRef:wrapperRef},props)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.lg,_object_spread({},confirmButtonProps,(void 0===_param_confirmButtonPropsConfig?nothing:_param_confirmButtonPropsConfig)(confirmButtonProps))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.lg,_object_spread({},cancelButtonProps,(void 0===_param_cancelButtonPropsConfig?nothing:_param_cancelButtonPropsConfig)(cancelButtonProps)))]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.EY,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_5__.d)(textRef,setNode),$multiline:multilineView,onClick:props.readOnly?void 0:enableEdit,children:value}),(void 0===_param_showTooltip||_param_showTooltip)&&tooltipVisible&&overflowActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_6__.m,{renderContent:function(){return value},targetElement:textRef.current}),!props.readOnly&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_EditMode_style__WEBPACK_IMPORTED_MODULE_4__.qU,_object_spread({},editButtonProps,(void 0===_param_editButtonPropsConfig?nothing:_param_editButtonPropsConfig)(editButtonProps)))]})}))});EditMode.displayName="EditMode";try{EditMode.displayName="EditMode",EditMode.__docgenInfo={description:"",displayName:"EditMode",props:{onChange:{defaultValue:null,description:"Колбек на изменение значения компонента",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onClear:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 6.0.0, будет удалено в 9.x.x версии.
Взамен используйте onCancel

Колбек на нажатие кнопки очистки инпута`,name:"onClear",required:!1,type:{name:"(() => void)"}},showTooltip:{defaultValue:{value:"true"},description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},multilineView:{defaultValue:{value:"false"},description:"Многострочное отображение текста в режиме просмотра значения, по умолчанию false",name:"multilineView",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Значение компонента",name:"value",required:!0,type:{name:"string | number"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"xxl"'}]}},bold:{defaultValue:{value:"false"},description:"Жирное начертание текста. В размерах xl и xxl текст всегда жирный",name:"bold",required:!1,type:{name:"boolean"}},containerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин на контейнер компонента, созданный с помощью styled css.",name:"containerCssMixin",required:!1,type:{name:"RuleSet<object>"}},onEdit:{defaultValue:null,description:`Функция обработчика события нажатия кнопки начала редактирования
@param value - значение поля ввода для редактирования`,name:"onEdit",required:!1,type:{name:"((value: string | number) => void)"}},onConfirm:{defaultValue:null,description:`Функция обработчика события нажатия кнопки подтверждения введенного значения
@param value - отредактированное значение поля ввода`,name:"onConfirm",required:!1,type:{name:"((value: string | number) => void)"}},onCancel:{defaultValue:null,description:`Функция обработчика события нажатия кнопки отмены
@param value - значение поля ввода до нажатия кнопки редактирования`,name:"onCancel",required:!1,type:{name:"((value: string | number) => void)"}},confirmButtonPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для кнопки подтверждения редактирования. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"confirmButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<ButtonProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$multiline"> & { ...; }) => Partial<...>)'}},cancelButtonPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для кнопки отмены редактирования. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"cancelButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<ButtonProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$multiline"> & { ...; }) => Partial<...>)'}},editButtonPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для кнопки начала редактирования. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"editButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/EditMode/index.tsx#EditMode"]={docgenInfo:EditMode.__docgenInfo,name:"EditMode",path:"src/components/input/EditMode/index.tsx#EditMode"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/EditMode/style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EO:()=>CancelIcon,Mw:()=>ConfirmIcon,m6:()=>EditArea,lg:()=>EditButton,qU:()=>EditIcon,HE:()=>EditInput,EY:()=>Text,mO:()=>Wrapper});var _path,SentOutline_path,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx"),TextArea=__webpack_require__("./src/components/input/TextArea/index.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function SentOutline_extends(){return(SentOutline_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}__webpack_require__.p,__webpack_require__.p;var CloseOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  [data-dimension='s'] & {
    `,`
  }

  [data-dimension='s-bold'] & {
    `,`
  }

  [data-dimension='m'] & {
    `,`
  }

  [data-dimension='m-bold'] & {
    `,`
  }

  [data-dimension='xl'] & {
    `,`
  }

  [data-dimension='xxl'] & {
    `,`
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  flex: 1 1 auto;
  & input {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  flex: 1 1 auto;
  & textarea,
  & :first-child {
    `,`
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  margin-left: 4px;
  flex-shrink: 0;
  `,`
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  align-self: flex-start;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    margin-top: 6px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    margin-top: 8px;
  }

  [data-dimension='xl'] &&& {
    margin-top: 14px;
  }

  [data-dimension='xxl'] &&& {
    margin-top: 16px;
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  display: flex;
  flex-shrink: 0;
  user-select: none;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  `,`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  cursor: pointer;

  [data-disabled='true'] & {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
  [data-disabled='false'] & {
    &:hover {
      & *[fill^='#'] {
        fill: var(--admiral-color-Primary_Primary70, `,`);
      }
    }
  }

  `,`
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  display: flex;
  align-items: center;
  `,`;
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  overflow-wrap: anywhere;
  height: auto;
  white-space: normal;

  [data-dimension='s-bold'] &&&,
  [data-dimension='s'] &&& {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  [data-dimension='m'] &&&,
  [data-dimension='m-bold'] &&& {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  [data-dimension='xl'] &&& {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  [data-dimension='xxl'] &&& {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  [data-dimension='s'] &&& {
    height: 32px;
    line-height: 32px;
  }

  [data-dimension='s-bold'] &&& {
    height: 32px;
    line-height: 32px;
  }

  [data-dimension='m'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='m-bold'] &&& {
    height: 40px;
    line-height: 40px;
  }

  [data-dimension='xl'] &&& {
    height: 56px;
    line-height: 56px;
  }

  [data-dimension='xxl'] &&& {
    height: 56px;
    line-height: 56px;
  }
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  display: block;

  align-items: center;
  cursor: text;
  margin-right: 12px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);

  `,`;
  `,`

  [data-disabled='true'] & {
    cursor: default;
    pointer-events: none;
  }

  [data-disabled='false'] & {
    &:hover {
      & + `,` *[fill^='#'] {
        fill: var(--admiral-color-Primary_Primary70, `,`);
      }
    }
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }
`]);return _templateObject12=function _templateObject(){return data},data}var TypographyMixin=(0,styled_components_browser_esm.AH)(_templateObject(),typography.Il["Body/Body 2 Long"],typography.Il["Subtitle/Subtitle 3"],typography.Il["Body/Body 1 Long"],typography.Il["Subtitle/Subtitle 2"],typography.Il["Header/H5"],typography.Il["Header/H4"]),EditInput=(0,styled_components_browser_esm.Ay)(TextInput.ks)(_templateObject1(),TypographyMixin),EditArea=(0,styled_components_browser_esm.Ay)(TextArea.f)(_templateObject2(),TypographyMixin),EditButton=(0,styled_components_browser_esm.Ay)(Button.$n)(_templateObject3(),function(p){return p.$multiline&&"align-self: flex-start;"}),multilineIcon=(0,styled_components_browser_esm.AH)(_templateObject4()),iconStyle=(0,styled_components_browser_esm.AH)(_templateObject5()),EditIcon=(0,styled_components_browser_esm.Ay)(function SvgEditSolid(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M16.04 3.88c.51-.51 1.33-.51 1.84 0l1.16 1.24c.5.5.5 1.33 0 1.83l-1.12 1.12a.7.7 0 0 1-1 0L14.9 5.99a.694.694 0 0 1 .01-.98zM14 6.93 16.01 9c.27.27.27.71 0 .98l-7.45 7.45c-.39.39-.9.67-1.44.8l-1.73.4c-.94.21-1.24-.17-1.02-1.1l.4-1.73c.12-.55.4-1.05.8-1.45L13 6.92c.27-.28.72-.27 1 .01"})))})(_templateObject6(),iconStyle,function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.$multiline&&multilineIcon}),ConfirmIcon=(0,styled_components_browser_esm.Ay)(function SvgSentOutline(props){return react.createElement("svg",SentOutline_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),SentOutline_path||(SentOutline_path=react.createElement("path",{fill:"#74767B",d:"M10.5 16.54c.28.28.74.27 1.01-.02l6.48-6.98c.24-.27.22-.68-.04-.92a.65.65 0 0 0-.92.04l-6.05 6.52-3.85-3.79a.66.66 0 0 0-.92 0c-.25.25-.25.67 0 .92z"})))})(_templateObject7(),iconStyle),CancelIcon=(0,styled_components_browser_esm.Ay)(CloseOutline.h)(_templateObject8(),iconStyle),Wrapper=styled_components_browser_esm.Ay.div(_templateObject9(),function(param){return param.$cssMixin||""}),MultilineMixin=(0,styled_components_browser_esm.AH)(_templateObject10()),SinglelineMixin=(0,styled_components_browser_esm.AH)(_templateObject11()),Text=styled_components_browser_esm.Ay.div(_templateObject12(),function(p){return p.theme.color["Neutral/Neutral 90"]},TypographyMixin,function(p){return p.$multiline?MultilineMixin:SinglelineMixin},EditIcon,function(p){return p.theme.color["Primary/Primary 70"]})},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});var INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);