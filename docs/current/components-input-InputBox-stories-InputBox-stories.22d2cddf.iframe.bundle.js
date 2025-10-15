"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1732],{"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/input/InputBox/stories/InputBox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputBoxDisabled:()=>InputBoxDisabled,InputBoxReadOnly:()=>InputBoxReadOnly,InputBoxSimple:()=>InputBoxSimple,InputBoxSkeleton:()=>InputBoxSkeleton,InputBoxStatus:()=>InputBoxStatus,InputBoxWithMask:()=>InputBoxWithMask,InputBoxWithTmpValue:()=>InputBoxWithTmpValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputBox_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),InputBox=__webpack_require__("./src/components/input/InputBox/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),T=__webpack_require__("./src/components/T/index.tsx"),InputLine=__webpack_require__("./src/components/input/InputLine/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var InputBoxSimpleTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,_param_dataPlaceholder=_param.dataPlaceholder,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder"]),_useState=_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Поле ввода с адаптивным placeholder или с примером значения tmpValue"}),(0,jsx_runtime.jsx)(InputBox.c,{children:(0,jsx_runtime.jsx)(InputLine.n,_object_spread_props(_object_spread({},props),{placeholder:void 0===_param_placeholder?"prefix value suffix":_param_placeholder,prefix:void 0===_param_prefix?"prefix":_param_prefix,suffix:void 0===_param_suffix?"suffix":_param_suffix,dataPlaceholder:void 0===_param_dataPlaceholder?"value":_param_dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue}))})]})};try{InputBoxSimpleTemplate.displayName="InputBoxSimpleTemplate",InputBoxSimpleTemplate.__docgenInfo={description:"",displayName:"InputBoxSimpleTemplate",props:{dataPlaceholder:{defaultValue:{value:"value"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxSimple.template.tsx#InputBoxSimpleTemplate"]={docgenInfo:InputBoxSimpleTemplate.__docgenInfo,name:"InputBoxSimpleTemplate",path:"src/components/input/InputBox/stories/InputBoxSimple.template.tsx#InputBoxSimpleTemplate"})}catch(__react_docgen_typescript_loader_error){}function InputBoxSkeleton_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputBoxSkeleton_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputBoxSkeleton_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputBoxSkeleton_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputBoxSkeleton_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputBoxSkeleton_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputBoxSkeleton_template_define_property(target,key,source[key])})}return target}function InputBoxSkeleton_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputBoxSkeleton_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputBoxSkeleton_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputBoxSkeleton_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputBoxSkeleton_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputBoxSkeleton_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputBoxSkeleton_template_sliced_to_array(arr,i){return InputBoxSkeleton_template_array_with_holes(arr)||InputBoxSkeleton_template_iterable_to_array_limit(arr,i)||InputBoxSkeleton_template_unsupported_iterable_to_array(arr,i)||InputBoxSkeleton_template_non_iterable_rest()}function InputBoxSkeleton_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputBoxSkeleton_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputBoxSkeleton_template_array_like_to_array(o,minLen)}}var InputBoxSkeletonTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,_param_dataPlaceholder=_param.dataPlaceholder,_param_skeleton=_param.skeleton,props=InputBoxSkeleton_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder","skeleton"]),_useState=InputBoxSkeleton_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Поле ввода с параметром skeleton"}),(0,jsx_runtime.jsx)(InputBox.c,{"data-skeleton":void 0===_param_skeleton||_param_skeleton,children:(0,jsx_runtime.jsx)(InputLine.n,InputBoxSkeleton_template_object_spread_props(InputBoxSkeleton_template_object_spread({},props),{placeholder:void 0===_param_placeholder?"prefix value suffix":_param_placeholder,prefix:void 0===_param_prefix?"prefix":_param_prefix,suffix:void 0===_param_suffix?"suffix":_param_suffix,dataPlaceholder:void 0===_param_dataPlaceholder?"value":_param_dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue}))})]})};try{InputBoxSkeletonTemplate.displayName="InputBoxSkeletonTemplate",InputBoxSkeletonTemplate.__docgenInfo={description:"",displayName:"InputBoxSkeletonTemplate",props:{dataPlaceholder:{defaultValue:{value:"value"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"true"},description:"",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxSkeleton.template.tsx#InputBoxSkeletonTemplate"]={docgenInfo:InputBoxSkeletonTemplate.__docgenInfo,name:"InputBoxSkeletonTemplate",path:"src/components/input/InputBox/stories/InputBoxSkeleton.template.tsx#InputBoxSkeletonTemplate"})}catch(__react_docgen_typescript_loader_error){}function InputBoxDisabled_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputBoxDisabled_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputBoxDisabled_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputBoxDisabled_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputBoxDisabled_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputBoxDisabled_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputBoxDisabled_template_define_property(target,key,source[key])})}return target}function InputBoxDisabled_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputBoxDisabled_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputBoxDisabled_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputBoxDisabled_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputBoxDisabled_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputBoxDisabled_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputBoxDisabled_template_sliced_to_array(arr,i){return InputBoxDisabled_template_array_with_holes(arr)||InputBoxDisabled_template_iterable_to_array_limit(arr,i)||InputBoxDisabled_template_unsupported_iterable_to_array(arr,i)||InputBoxDisabled_template_non_iterable_rest()}function InputBoxDisabled_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputBoxDisabled_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputBoxDisabled_template_array_like_to_array(o,minLen)}}var InputBoxDisabledTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,_param_dataPlaceholder=_param.dataPlaceholder,_param_disabled=_param.disabled,disabled=void 0===_param_disabled||_param_disabled,props=InputBoxDisabled_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder","disabled"]),_useState=InputBoxDisabled_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"123":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Поле ввода с параметром disabled"}),(0,jsx_runtime.jsx)(InputBox.c,{disabled:disabled,"data-disabled":disabled,children:(0,jsx_runtime.jsx)(InputLine.n,InputBoxDisabled_template_object_spread_props(InputBoxDisabled_template_object_spread({},props),{disabled:disabled,placeholder:void 0===_param_placeholder?"prefix value suffix":_param_placeholder,prefix:void 0===_param_prefix?"prefix":_param_prefix,suffix:void 0===_param_suffix?"suffix":_param_suffix,dataPlaceholder:void 0===_param_dataPlaceholder?"value":_param_dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue}))})]})};try{InputBoxDisabledTemplate.displayName="InputBoxDisabledTemplate",InputBoxDisabledTemplate.__docgenInfo={description:"",displayName:"InputBoxDisabledTemplate",props:{dataPlaceholder:{defaultValue:{value:"value"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:"123"},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxDisabled.template.tsx#InputBoxDisabledTemplate"]={docgenInfo:InputBoxDisabledTemplate.__docgenInfo,name:"InputBoxDisabledTemplate",path:"src/components/input/InputBox/stories/InputBoxDisabled.template.tsx#InputBoxDisabledTemplate"})}catch(__react_docgen_typescript_loader_error){}function InputBoxReadOnly_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputBoxReadOnly_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputBoxReadOnly_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputBoxReadOnly_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputBoxReadOnly_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputBoxReadOnly_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputBoxReadOnly_template_define_property(target,key,source[key])})}return target}function InputBoxReadOnly_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputBoxReadOnly_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputBoxReadOnly_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputBoxReadOnly_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputBoxReadOnly_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputBoxReadOnly_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputBoxReadOnly_template_sliced_to_array(arr,i){return InputBoxReadOnly_template_array_with_holes(arr)||InputBoxReadOnly_template_iterable_to_array_limit(arr,i)||InputBoxReadOnly_template_unsupported_iterable_to_array(arr,i)||InputBoxReadOnly_template_non_iterable_rest()}function InputBoxReadOnly_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputBoxReadOnly_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputBoxReadOnly_template_array_like_to_array(o,minLen)}}var InputBoxReadOnlyTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,_param_dataPlaceholder=_param.dataPlaceholder,_param_readOnly=_param.readOnly,readOnly=void 0===_param_readOnly||_param_readOnly,props=InputBoxReadOnly_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder","readOnly"]),_useState=InputBoxReadOnly_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"123":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Поле ввода с параметром readOnly"}),(0,jsx_runtime.jsx)(InputBox.c,{readOnly:readOnly,"data-read-only":readOnly,children:(0,jsx_runtime.jsx)(InputLine.n,InputBoxReadOnly_template_object_spread_props(InputBoxReadOnly_template_object_spread({},props),{readOnly:readOnly,placeholder:void 0===_param_placeholder?"prefix value suffix":_param_placeholder,prefix:void 0===_param_prefix?"prefix":_param_prefix,suffix:void 0===_param_suffix?"suffix":_param_suffix,dataPlaceholder:void 0===_param_dataPlaceholder?"value":_param_dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue}))})]})};try{InputBoxReadOnlyTemplate.displayName="InputBoxReadOnlyTemplate",InputBoxReadOnlyTemplate.__docgenInfo={description:"",displayName:"InputBoxReadOnlyTemplate",props:{dataPlaceholder:{defaultValue:{value:"value"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:"123"},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxReadOnly.template.tsx#InputBoxReadOnlyTemplate"]={docgenInfo:InputBoxReadOnlyTemplate.__docgenInfo,name:"InputBoxReadOnlyTemplate",path:"src/components/input/InputBox/stories/InputBoxReadOnly.template.tsx#InputBoxReadOnlyTemplate"})}catch(__react_docgen_typescript_loader_error){}function InputBoxStatus_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputBoxStatus_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputBoxStatus_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputBoxStatus_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputBoxStatus_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputBoxStatus_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputBoxStatus_template_define_property(target,key,source[key])})}return target}function InputBoxStatus_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputBoxStatus_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputBoxStatus_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputBoxStatus_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputBoxStatus_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputBoxStatus_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputBoxStatus_template_sliced_to_array(arr,i){return InputBoxStatus_template_array_with_holes(arr)||InputBoxStatus_template_iterable_to_array_limit(arr,i)||InputBoxStatus_template_unsupported_iterable_to_array(arr,i)||InputBoxStatus_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function InputBoxStatus_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputBoxStatus_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputBoxStatus_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
    height: 20px;
  `]);return _templateObject=function _templateObject(){return data},data}var InputBoxStatusTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,placeholder=void 0===_param_placeholder?"prefix value suffix":_param_placeholder,_param_prefix=_param.prefix,prefix=void 0===_param_prefix?"prefix":_param_prefix,_param_suffix=_param.suffix,suffix=void 0===_param_suffix?"suffix":_param_suffix,_param_dataPlaceholder=_param.dataPlaceholder,dataPlaceholder=void 0===_param_dataPlaceholder?"value":_param_dataPlaceholder,props=InputBoxStatus_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder"]),_useState=InputBoxStatus_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1],Separator=styled_components_browser_esm.I4.div(_templateObject());return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Статусы success и error"}),(0,jsx_runtime.jsx)(InputBox.c,{$status:"success",children:(0,jsx_runtime.jsx)(InputLine.n,InputBoxStatus_template_object_spread_props(InputBoxStatus_template_object_spread({},props),{placeholder:placeholder,prefix:prefix,suffix:suffix,dataPlaceholder:dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue}))}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(InputBox.c,{$status:"error",children:(0,jsx_runtime.jsx)(InputLine.n,InputBoxStatus_template_object_spread_props(InputBoxStatus_template_object_spread({},props),{placeholder:placeholder,prefix:prefix,suffix:suffix,dataPlaceholder:dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue}))})]})};try{InputBoxStatusTemplate.displayName="InputBoxStatusTemplate",InputBoxStatusTemplate.__docgenInfo={description:"",displayName:"InputBoxStatusTemplate",props:{dataPlaceholder:{defaultValue:{value:"value"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxStatus.template.tsx#InputBoxStatusTemplate"]={docgenInfo:InputBoxStatusTemplate.__docgenInfo,name:"InputBoxStatusTemplate",path:"src/components/input/InputBox/stories/InputBoxStatus.template.tsx#InputBoxStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/@maskito/kit/index.esm.js"),react_index_esm=__webpack_require__("./node_modules/@maskito/react/index.esm.js");function InputBoxWithMask_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputBoxWithMask_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputBoxWithMask_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputBoxWithMask_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputBoxWithMask_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputBoxWithMask_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputBoxWithMask_template_define_property(target,key,source[key])})}return target}function InputBoxWithMask_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputBoxWithMask_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputBoxWithMask_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputBoxWithMask_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputBoxWithMask_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputBoxWithMask_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputBoxWithMask_template_sliced_to_array(arr,i){return InputBoxWithMask_template_array_with_holes(arr)||InputBoxWithMask_template_iterable_to_array_limit(arr,i)||InputBoxWithMask_template_unsupported_iterable_to_array(arr,i)||InputBoxWithMask_template_non_iterable_rest()}function InputBoxWithMask_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputBoxWithMask_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputBoxWithMask_template_array_like_to_array(o,minLen)}}var options=(0,index_esm.TK)({decimalSeparator:",",thousandSeparator:" ",precision:2}),InputBoxWithMaskTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,_param_dataPlaceholder=_param.dataPlaceholder,props=InputBoxWithMask_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder"]),_useState=InputBoxWithMask_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1],inputRef=(0,react_index_esm.M)({options:options});return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Пример реализации NumberInput c использованием маски библиотеки Maskito"}),(0,jsx_runtime.jsx)(InputBox.c,{children:(0,jsx_runtime.jsx)(InputLine.n,InputBoxWithMask_template_object_spread_props(InputBoxWithMask_template_object_spread({},props),{placeholder:void 0===_param_placeholder?"От 0 ₽":_param_placeholder,prefix:void 0===_param_prefix?"От":_param_prefix,suffix:void 0===_param_suffix?"₽":_param_suffix,dataPlaceholder:void 0===_param_dataPlaceholder?"12,20":_param_dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue,ref:inputRef}))})]})};try{InputBoxWithMaskTemplate.displayName="InputBoxWithMaskTemplate",InputBoxWithMaskTemplate.__docgenInfo={description:"",displayName:"InputBoxWithMaskTemplate",props:{dataPlaceholder:{defaultValue:{value:"12,20"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"От"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"₽"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxWithMask.template.tsx#InputBoxWithMaskTemplate"]={docgenInfo:InputBoxWithMaskTemplate.__docgenInfo,name:"InputBoxWithMaskTemplate",path:"src/components/input/InputBox/stories/InputBoxWithMask.template.tsx#InputBoxWithMaskTemplate"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.tsx");function InputBoxWithTmpValue_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputBoxWithTmpValue_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputBoxWithTmpValue_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputBoxWithTmpValue_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputBoxWithTmpValue_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputBoxWithTmpValue_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputBoxWithTmpValue_template_define_property(target,key,source[key])})}return target}function InputBoxWithTmpValue_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputBoxWithTmpValue_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputBoxWithTmpValue_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputBoxWithTmpValue_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputBoxWithTmpValue_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputBoxWithTmpValue_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputBoxWithTmpValue_template_sliced_to_array(arr,i){return InputBoxWithTmpValue_template_array_with_holes(arr)||InputBoxWithTmpValue_template_iterable_to_array_limit(arr,i)||InputBoxWithTmpValue_template_unsupported_iterable_to_array(arr,i)||InputBoxWithTmpValue_template_non_iterable_rest()}function InputBoxWithTmpValue_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function InputBoxWithTmpValue_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputBoxWithTmpValue_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputBoxWithTmpValue_template_array_like_to_array(o,minLen)}}function InputBoxWithTmpValue_template_templateObject(){var data=InputBoxWithTmpValue_template_tagged_template_literal([`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`]);return InputBoxWithTmpValue_template_templateObject=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(InputBoxWithTmpValue_template_templateObject()),InputBoxWithTmpValueTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,props=InputBoxWithTmpValue_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix"]),_useState=InputBoxWithTmpValue_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1],_useState1=InputBoxWithTmpValue_template_sliced_to_array((0,react.useState)(),2),tmpValue=_useState1[0],setTmpValue=_useState1[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Поле ввода с адаптивным placeholder"}),(0,jsx_runtime.jsx)(InputBox.c,{children:(0,jsx_runtime.jsx)(InputLine.n,InputBoxWithTmpValue_template_object_spread_props(InputBoxWithTmpValue_template_object_spread({},props),{placeholder:void 0===_param_placeholder?"prefix value suffix":_param_placeholder,prefix:void 0===_param_prefix?"prefix":_param_prefix,suffix:void 0===_param_suffix?"suffix":_param_suffix,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue,tmpValue:tmpValue}))}),(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",onMouseEnter:function(){return setTmpValue("Hello")},onMouseLeave:function(){return setTmpValue(void 0)},onClick:function(){tmpValue&&setLocalValue(tmpValue)},children:'Set "Hello"'}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",onMouseEnter:function(){return setTmpValue("Goodbay")},onMouseLeave:function(){return setTmpValue(void 0)},onClick:function(){tmpValue&&setLocalValue(tmpValue)},children:'Set "Goodbay"'})]})]})};try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxWithTmpValue.template.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"src/components/input/InputBox/stories/InputBoxWithTmpValue.template.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{InputBoxWithTmpValueTemplate.displayName="InputBoxWithTmpValueTemplate",InputBoxWithTmpValueTemplate.__docgenInfo={description:"",displayName:"InputBoxWithTmpValueTemplate",props:{dataPlaceholder:{defaultValue:null,description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/stories/InputBoxWithTmpValue.template.tsx#InputBoxWithTmpValueTemplate"]={docgenInfo:InputBoxWithTmpValueTemplate.__docgenInfo,name:"InputBoxWithTmpValueTemplate",path:"src/components/input/InputBox/stories/InputBoxWithTmpValue.template.tsx#InputBoxWithTmpValueTemplate"})}catch(__react_docgen_typescript_loader_error){}let InputBoxSimple_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const InputBoxSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  dataPlaceholder = 'value',
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с адаптивным placeholder или с примером значения tmpValue
      </T>
      <InputBox>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </InputBox>
    </ThemeProvider>
  );
};
`,InputBoxSkeleton_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const InputBoxSkeletonTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  dataPlaceholder = 'value',
  skeleton = true,
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
  skeleton?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с параметром skeleton
      </T>
      <InputBox data-skeleton={skeleton}>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </InputBox>
    </ThemeProvider>
  );
};
`,InputBoxDisabled_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const InputBoxDisabledTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '123',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  dataPlaceholder = 'value',
  disabled = true,
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с параметром disabled
      </T>
      <InputBox disabled={disabled} data-disabled={disabled}>
        <InputLine
          {...props}
          disabled={disabled}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </InputBox>
    </ThemeProvider>
  );
};
`,InputBoxReadOnly_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const InputBoxReadOnlyTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '123',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  dataPlaceholder = 'value',
  readOnly = true,
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
  readOnly?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с параметром readOnly
      </T>
      <InputBox readOnly={readOnly} data-read-only={readOnly}>
        <InputLine
          {...props}
          readOnly={readOnly}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </InputBox>
    </ThemeProvider>
  );
};
`,InputBoxStatus_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const InputBoxStatusTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  dataPlaceholder = 'value',
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
  status?: 'success' | 'error';
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  const Separator = styled.div\`
    height: 20px;
  \`;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Статусы success и error
      </T>
      <InputBox $status={'success'}>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </InputBox>
      <Separator />
      <InputBox $status={'error'}>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </InputBox>
    </ThemeProvider>
  );
};
`,InputBoxWithMask_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputLine, InputBox, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
});

export const InputBoxWithMaskTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'От 0 ₽',
  prefix = 'От',
  suffix = '₽',
  dataPlaceholder = '12,20',
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');

  const inputRef = useMaskito({ options });

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Пример реализации NumberInput c использованием маски библиотеки Maskito
      </T>

      <InputBox>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
          ref={inputRef}
        />
      </InputBox>
    </ThemeProvider>
  );
};
`,InputBoxWithTmpValue_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InputBox, InputLine, T, Button } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const Wrapper = styled.div\`
  display: flex;
  gap: 16px;
  margin-top: 16px;
\`;

export const InputBoxWithTmpValueTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  value = '',
  placeholder = 'prefix value suffix',
  prefix = 'prefix',
  suffix = 'suffix',
  ...props
}: InputLineProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [localValue, setLocalValue] = useState(String(value) ?? '');
  const [tmpValue, setTmpValue] = useState<string | undefined>();

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '40px' }}>
        Поле ввода с адаптивным placeholder
      </T>

      <InputBox>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
          tmpValue={tmpValue}
        />
      </InputBox>
      <Wrapper>
        <Button
          dimension="m"
          onMouseEnter={() => setTmpValue('Hello')}
          onMouseLeave={() => setTmpValue(undefined)}
          onClick={() => {
            if (tmpValue) setLocalValue(tmpValue);
          }}
        >
          Set "Hello"
        </Button>
        <Button
          dimension="m"
          onMouseEnter={() => setTmpValue('Goodbay')}
          onMouseLeave={() => setTmpValue(undefined)}
          onClick={() => {
            if (tmpValue) setLocalValue(tmpValue);
          }}
        >
          Set "Goodbay"
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
};
`;function InputBox_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputBox_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputBox_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputBox_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputBox_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputBox_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputBox_stories_define_property(target,key,source[key])})}return target}function InputBox_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputBox_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputBox_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputBox_stories_sliced_to_array(arr,i){return InputBox_stories_array_with_holes(arr)||InputBox_stories_iterable_to_array_limit(arr,i)||InputBox_stories_unsupported_iterable_to_array(arr,i)||InputBox_stories_non_iterable_rest()}function InputBox_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputBox_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputBox_stories_array_like_to_array(o,minLen)}}let InputBox_stories={title:"Admiral-2.1/FocusBox/InputBox",component:InputBox.c,parameters:{docs:{source:{code:null}}},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},onChange:{action:"onChange"},icons:{control:!1},containerRef:{control:!1},handleInput:{control:!1},theme:{control:!1},ref:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var InputBoxSimple={render:function(props){var CSSCustomProps=InputBox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputBoxSimpleTemplate,InputBox_stories_object_spread_props(InputBox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputBoxSimple_templateraw_namespaceObject}}},name:"InputBox"},InputBoxSkeleton={render:function(props){var CSSCustomProps=InputBox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputBoxSkeletonTemplate,InputBox_stories_object_spread_props(InputBox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputBoxSkeleton_templateraw_namespaceObject}}},name:"InputBox скелетон"},InputBoxDisabled={render:function(props){var CSSCustomProps=InputBox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputBoxDisabledTemplate,InputBox_stories_object_spread_props(InputBox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputBoxDisabled_templateraw_namespaceObject}}},name:"InputBox disabled"},InputBoxReadOnly={render:function(props){var CSSCustomProps=InputBox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputBoxReadOnlyTemplate,InputBox_stories_object_spread_props(InputBox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputBoxReadOnly_templateraw_namespaceObject}}},name:"InputBox readOnly"},InputBoxStatus={render:function(props){var CSSCustomProps=InputBox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputBoxStatusTemplate,InputBox_stories_object_spread_props(InputBox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputBoxStatus_templateraw_namespaceObject}}},name:"InputBox status"},InputBoxWithMask={render:function(props){var CSSCustomProps=InputBox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputBoxWithMaskTemplate,InputBox_stories_object_spread_props(InputBox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputBoxWithMask_templateraw_namespaceObject}}},name:"InputBox с маской"},InputBoxWithTmpValue={render:function(props){var CSSCustomProps=InputBox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputBoxWithTmpValueTemplate,InputBox_stories_object_spread_props(InputBox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputBoxWithTmpValue_templateraw_namespaceObject}}},name:"InputBox с tmpValue"};InputBoxSimple.parameters={...InputBoxSimple.parameters,docs:{...InputBoxSimple.parameters?.docs,source:{originalSource:`{
  render: InputBoxSimpleStory,
  parameters: {
    docs: {
      source: {
        code: InputBoxSimpleRaw
      }
    }
  },
  name: 'InputBox'
}`,...InputBoxSimple.parameters?.docs?.source}}},InputBoxSkeleton.parameters={...InputBoxSkeleton.parameters,docs:{...InputBoxSkeleton.parameters?.docs,source:{originalSource:`{
  render: InputBoxSkeletonStory,
  parameters: {
    docs: {
      source: {
        code: InputBoxSkeletonRaw
      }
    }
  },
  name: 'InputBox скелетон'
}`,...InputBoxSkeleton.parameters?.docs?.source}}},InputBoxDisabled.parameters={...InputBoxDisabled.parameters,docs:{...InputBoxDisabled.parameters?.docs,source:{originalSource:`{
  render: InputBoxDisabledStory,
  parameters: {
    docs: {
      source: {
        code: InputBoxDisabledRaw
      }
    }
  },
  name: 'InputBox disabled'
}`,...InputBoxDisabled.parameters?.docs?.source}}},InputBoxReadOnly.parameters={...InputBoxReadOnly.parameters,docs:{...InputBoxReadOnly.parameters?.docs,source:{originalSource:`{
  render: InputBoxReadOnlyStory,
  parameters: {
    docs: {
      source: {
        code: InputBoxReadOnlyRaw
      }
    }
  },
  name: 'InputBox readOnly'
}`,...InputBoxReadOnly.parameters?.docs?.source}}},InputBoxStatus.parameters={...InputBoxStatus.parameters,docs:{...InputBoxStatus.parameters?.docs,source:{originalSource:`{
  render: InputBoxStatusStory,
  parameters: {
    docs: {
      source: {
        code: InputBoxStatusRaw
      }
    }
  },
  name: 'InputBox status'
}`,...InputBoxStatus.parameters?.docs?.source}}},InputBoxWithMask.parameters={...InputBoxWithMask.parameters,docs:{...InputBoxWithMask.parameters?.docs,source:{originalSource:`{
  render: InputBoxWithMaskStory,
  parameters: {
    docs: {
      source: {
        code: InputBoxWithMaskRaw
      }
    }
  },
  name: 'InputBox с маской'
}`,...InputBoxWithMask.parameters?.docs?.source}}},InputBoxWithTmpValue.parameters={...InputBoxWithTmpValue.parameters,docs:{...InputBoxWithTmpValue.parameters?.docs,source:{originalSource:`{
  render: InputBoxWithTmpValueStory,
  parameters: {
    docs: {
      source: {
        code: InputBoxWithTmpValueRaw
      }
    }
  },
  name: 'InputBox с tmpValue'
}`,...InputBoxWithTmpValue.parameters?.docs?.source}}};let __namedExportsOrder=["InputBoxSimple","InputBoxSkeleton","InputBoxDisabled","InputBoxReadOnly","InputBoxStatus","InputBoxWithMask","InputBoxWithTmpValue"]},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-input-InputBox-stories-InputBox-stories.22d2cddf.iframe.bundle.js.map