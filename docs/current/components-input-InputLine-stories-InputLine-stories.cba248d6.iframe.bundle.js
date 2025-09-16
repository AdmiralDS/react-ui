"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4756],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 2 Long"'},{value:'"Body/Body 1 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/input/InputLine/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>InputLine});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/refSetter.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  border: none;
  outline: none;
  appearance: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  color: `,`;

  ::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral30, `,`);
  transition: color 0.3s ease-in-out;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  visibility: hidden;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  text-align: start;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;

  &:focus-within `,` {
    color: var(--admiral-color-Neutral_Neutral50, `,`);
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  cursor: pointer;
  position: absolute;
  pointer-events: none;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  position: relative;
  width: 100%;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  white-space: pre;
`]);return _templateObject7=function _templateObject(){return data},data}var StyledInputLine=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input(_templateObject(),function(p){return p.$isTmpValue?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},function(p){return p.theme.color["Neutral/Neutral 50"]}),PlaceholderValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 30"]}),AdditionalText=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(PlaceholderValue)(_templateObject2()),InvisibleInputValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject3()),InputLineContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject4(),PlaceholderValue,function(p){return p.theme.color["Neutral/Neutral 50"]}),MaskBox=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject5()),InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject6()),AdditionalTextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject7()),InputLine=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function(_param,ref){var dataPlaceholder=_param.dataPlaceholder,tmpValue=_param.tmpValue,prefix=_param.prefix,suffix=_param.suffix,_param_containerPropsConfig=_param.containerPropsConfig,inputProps=_object_without_properties(_param,["dataPlaceholder","tmpValue","prefix","suffix","containerPropsConfig"]),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),placeholderRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),placeholder=inputProps.placeholder,isTmpValue="string"==typeof tmpValue;(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){var oninput=function oninput(){var len=this.value.length;placeholderNode&&("string"==typeof placeholder&&placeholder.length>0&&0==len?placeholderNode.innerHTML="":placeholderNode.innerHTML=(null==dataPlaceholder?void 0:dataPlaceholder.substring(len))||"")},inputNode=inputRef.current,placeholderNode=placeholderRef.current;if("string"==typeof dataPlaceholder&&inputNode&&placeholderNode)return inputNode.addEventListener("input",oninput),function(){return inputNode.removeEventListener("input",oninput)}},[dataPlaceholder,placeholder,inputProps.value,inputProps.defaultValue,tmpValue]);var containerProps={onFocus:function(e){e.preventDefault(),"input"!==e.target.tagName.toLowerCase()&&inputRef.current&&inputRef.current.focus()},tabIndex:-1};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputLineContainer,_object_spread_props(_object_spread({},containerProps,(void 0===_param_containerPropsConfig?function(){}:_param_containerPropsConfig)(containerProps)),{children:[prefix&&(""!==inputProps.value||tmpValue)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AdditionalTextWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:prefix}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:" "})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MaskBox,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InvisibleInputValue,{children:isTmpValue?tmpValue:inputProps.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PlaceholderValue,{ref:placeholderRef}),suffix&&(""!==inputProps.value||tmpValue)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AdditionalTextWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:" "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:suffix})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledInputLine,_object_spread_props(_object_spread({ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__.d)(ref,inputRef)},inputProps),{$isTmpValue:isTmpValue,value:isTmpValue?tmpValue:inputProps.value}))]})]}))});try{StyledInputLine.displayName="StyledInputLine",StyledInputLine.__docgenInfo={description:"",displayName:"StyledInputLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/index.tsx#StyledInputLine"]={docgenInfo:StyledInputLine.__docgenInfo,name:"StyledInputLine",path:"src/components/input/InputLine/index.tsx#StyledInputLine"})}catch(__react_docgen_typescript_loader_error){}try{InputLine.displayName="InputLine",InputLine.__docgenInfo={description:"",displayName:"InputLine",props:{dataPlaceholder:{defaultValue:null,description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/index.tsx#InputLine"]={docgenInfo:InputLine.__docgenInfo,name:"InputLine",path:"src/components/input/InputLine/index.tsx#InputLine"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/InputLine/stories/InputLine.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputLinePlayground:()=>InputLinePlayground,InputLineWithMask:()=>InputLineWithMask,InputLineWithTmpValue:()=>InputLineWithTmpValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputLine_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),InputLine=__webpack_require__("./src/components/input/InputLine/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),T=__webpack_require__("./src/components/T/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, `,`)
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, `,`)
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, `,`) inset;
  }

  & * {
    `,`
    line-height: 40px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var FocusBox=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 40"]},function(p){return p.theme.color["Neutral/Neutral 60"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},typography.Il["Body/Body 1 Long"]),InputLinePlaygroundTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,_param_dataPlaceholder=_param.dataPlaceholder,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder"]),_useState=_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Поле ввода с адаптивным placeholder или с временным значением(tmpValue)"}),(0,jsx_runtime.jsx)(FocusBox,{children:(0,jsx_runtime.jsx)(InputLine.n,_object_spread_props(_object_spread({},props),{placeholder:void 0===_param_placeholder?"prefix value suffix":_param_placeholder,prefix:void 0===_param_prefix?"prefix":_param_prefix,suffix:void 0===_param_suffix?"suffix":_param_suffix,dataPlaceholder:void 0===_param_dataPlaceholder?"value":_param_dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue}))})]})};try{FocusBox.displayName="FocusBox",FocusBox.__docgenInfo={description:"",displayName:"FocusBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/stories/InputLinePlayground.template.tsx#FocusBox"]={docgenInfo:FocusBox.__docgenInfo,name:"FocusBox",path:"src/components/input/InputLine/stories/InputLinePlayground.template.tsx#FocusBox"})}catch(__react_docgen_typescript_loader_error){}try{InputLinePlaygroundTemplate.displayName="InputLinePlaygroundTemplate",InputLinePlaygroundTemplate.__docgenInfo={description:"",displayName:"InputLinePlaygroundTemplate",props:{dataPlaceholder:{defaultValue:{value:"value"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/stories/InputLinePlayground.template.tsx#InputLinePlaygroundTemplate"]={docgenInfo:InputLinePlaygroundTemplate.__docgenInfo,name:"InputLinePlaygroundTemplate",path:"src/components/input/InputLine/stories/InputLinePlayground.template.tsx#InputLinePlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/@maskito/kit/index.esm.js"),react_index_esm=__webpack_require__("./node_modules/@maskito/react/index.esm.js");function InputLineWithMask_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputLineWithMask_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputLineWithMask_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputLineWithMask_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputLineWithMask_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputLineWithMask_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputLineWithMask_template_define_property(target,key,source[key])})}return target}function InputLineWithMask_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputLineWithMask_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputLineWithMask_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputLineWithMask_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputLineWithMask_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputLineWithMask_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputLineWithMask_template_sliced_to_array(arr,i){return InputLineWithMask_template_array_with_holes(arr)||InputLineWithMask_template_iterable_to_array_limit(arr,i)||InputLineWithMask_template_unsupported_iterable_to_array(arr,i)||InputLineWithMask_template_non_iterable_rest()}function InputLineWithMask_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function InputLineWithMask_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputLineWithMask_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputLineWithMask_template_array_like_to_array(o,minLen)}}function InputLineWithMask_template_templateObject(){var data=InputLineWithMask_template_tagged_template_literal([`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, `,`)
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, `,`)
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, `,`) inset;
  }

  & * {
    `,`
    line-height: 40px;
  }
`]);return InputLineWithMask_template_templateObject=function _templateObject(){return data},data}var InputLineWithMask_template_FocusBox=styled_components_browser_esm.Ay.div(InputLineWithMask_template_templateObject(),function(p){return p.theme.color["Neutral/Neutral 40"]},function(p){return p.theme.color["Neutral/Neutral 60"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},typography.Il["Body/Body 1 Long"]),options=(0,index_esm.TK)({decimalSeparator:",",thousandSeparator:" ",precision:2}),InputLineWithMaskTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,_param_dataPlaceholder=_param.dataPlaceholder,props=InputLineWithMask_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix","dataPlaceholder"]),_useState=InputLineWithMask_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1],inputRef=(0,react_index_esm.M)({options:options});return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Пример реализации NumberInput c использованием маски библиотеки Maskito"}),(0,jsx_runtime.jsx)(InputLineWithMask_template_FocusBox,{children:(0,jsx_runtime.jsx)(InputLine.n,InputLineWithMask_template_object_spread_props(InputLineWithMask_template_object_spread({},props),{placeholder:void 0===_param_placeholder?"От 0 ₽":_param_placeholder,prefix:void 0===_param_prefix?"От":_param_prefix,suffix:void 0===_param_suffix?"₽":_param_suffix,dataPlaceholder:void 0===_param_dataPlaceholder?"12,20":_param_dataPlaceholder,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue,ref:inputRef}))})]})};try{InputLineWithMask_template_FocusBox.displayName="FocusBox",InputLineWithMask_template_FocusBox.__docgenInfo={description:"",displayName:"FocusBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/stories/InputLineWithMask.template.tsx#FocusBox"]={docgenInfo:InputLineWithMask_template_FocusBox.__docgenInfo,name:"FocusBox",path:"src/components/input/InputLine/stories/InputLineWithMask.template.tsx#FocusBox"})}catch(__react_docgen_typescript_loader_error){}try{InputLineWithMaskTemplate.displayName="InputLineWithMaskTemplate",InputLineWithMaskTemplate.__docgenInfo={description:"",displayName:"InputLineWithMaskTemplate",props:{dataPlaceholder:{defaultValue:{value:"12,20"},description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"От"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"₽"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/stories/InputLineWithMask.template.tsx#InputLineWithMaskTemplate"]={docgenInfo:InputLineWithMaskTemplate.__docgenInfo,name:"InputLineWithMaskTemplate",path:"src/components/input/InputLine/stories/InputLineWithMask.template.tsx#InputLineWithMaskTemplate"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.tsx");function InputLineWithTmpValue_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputLineWithTmpValue_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputLineWithTmpValue_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputLineWithTmpValue_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputLineWithTmpValue_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputLineWithTmpValue_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputLineWithTmpValue_template_define_property(target,key,source[key])})}return target}function InputLineWithTmpValue_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputLineWithTmpValue_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputLineWithTmpValue_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputLineWithTmpValue_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputLineWithTmpValue_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputLineWithTmpValue_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputLineWithTmpValue_template_sliced_to_array(arr,i){return InputLineWithTmpValue_template_array_with_holes(arr)||InputLineWithTmpValue_template_iterable_to_array_limit(arr,i)||InputLineWithTmpValue_template_unsupported_iterable_to_array(arr,i)||InputLineWithTmpValue_template_non_iterable_rest()}function InputLineWithTmpValue_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function InputLineWithTmpValue_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputLineWithTmpValue_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputLineWithTmpValue_template_array_like_to_array(o,minLen)}}function InputLineWithTmpValue_template_templateObject(){var data=InputLineWithTmpValue_template_tagged_template_literal([`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`]);return InputLineWithTmpValue_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=InputLineWithTmpValue_template_tagged_template_literal([`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, `,`)
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, `,`)
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, `,`) inset;
  }

  & * {
    `,`
    line-height: 40px;
  }
`]);return _templateObject1=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(InputLineWithTmpValue_template_templateObject()),InputLineWithTmpValue_template_FocusBox=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 40"]},function(p){return p.theme.color["Neutral/Neutral 60"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},typography.Il["Body/Body 1 Long"]),InputLineWithTmpValueTemplate=function(_param){var _String,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,_param_value=_param.value,_param_placeholder=_param.placeholder,_param_prefix=_param.prefix,_param_suffix=_param.suffix,props=InputLineWithTmpValue_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps","value","placeholder","prefix","suffix"]),_useState=InputLineWithTmpValue_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"":_param_value))?_String:""),2),localValue=_useState[0],setLocalValue=_useState[1],_useState1=InputLineWithTmpValue_template_sliced_to_array((0,react.useState)(),2),tmpValue=_useState1[0],setTmpValue=_useState1[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"40px"},children:"Поле ввода с адаптивным placeholder"}),(0,jsx_runtime.jsx)(InputLineWithTmpValue_template_FocusBox,{children:(0,jsx_runtime.jsx)(InputLine.n,InputLineWithTmpValue_template_object_spread_props(InputLineWithTmpValue_template_object_spread({},props),{placeholder:void 0===_param_placeholder?"prefix value suffix":_param_placeholder,prefix:void 0===_param_prefix?"prefix":_param_prefix,suffix:void 0===_param_suffix?"suffix":_param_suffix,onInput:function(e){return setLocalValue(e.currentTarget.value)},value:localValue,tmpValue:tmpValue}))}),(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",onMouseEnter:function(){return setTmpValue("Hello")},onMouseLeave:function(){return setTmpValue(void 0)},onClick:function(){tmpValue&&setLocalValue(tmpValue)},children:'Set "Hello"'}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",onMouseEnter:function(){return setTmpValue("Goodbay")},onMouseLeave:function(){return setTmpValue(void 0)},onClick:function(){tmpValue&&setLocalValue(tmpValue)},children:'Set "Goodbay"'})]})]})};try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/stories/InputLineWithTmpValue.template.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"src/components/input/InputLine/stories/InputLineWithTmpValue.template.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}try{InputLineWithTmpValue_template_FocusBox.displayName="FocusBox",InputLineWithTmpValue_template_FocusBox.__docgenInfo={description:"",displayName:"FocusBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/stories/InputLineWithTmpValue.template.tsx#FocusBox"]={docgenInfo:InputLineWithTmpValue_template_FocusBox.__docgenInfo,name:"FocusBox",path:"src/components/input/InputLine/stories/InputLineWithTmpValue.template.tsx#FocusBox"})}catch(__react_docgen_typescript_loader_error){}try{InputLineWithTmpValueTemplate.displayName="InputLineWithTmpValueTemplate",InputLineWithTmpValueTemplate.__docgenInfo={description:"",displayName:"InputLineWithTmpValueTemplate",props:{dataPlaceholder:{defaultValue:null,description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"prefix"},description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:{value:"suffix"},description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/stories/InputLineWithTmpValue.template.tsx#InputLineWithTmpValueTemplate"]={docgenInfo:InputLineWithTmpValueTemplate.__docgenInfo,name:"InputLineWithTmpValueTemplate",path:"src/components/input/InputLine/stories/InputLineWithTmpValue.template.tsx#InputLineWithTmpValueTemplate"})}catch(__react_docgen_typescript_loader_error){}let InputLinePlayground_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { typography, InputLine, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const FocusBox = styled.div\`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, \${(p) => p.theme.color['Neutral/Neutral 40']})
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, \${(p) => p.theme.color['Neutral/Neutral 60']})
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']}) inset;
  }

  & * {
    \${typography['Body/Body 1 Long']}
    line-height: 40px;
  }
\`;

export const InputLinePlaygroundTemplate = ({
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
        Поле ввода с адаптивным placeholder или с временным значением(tmpValue)
      </T>
      <FocusBox>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataPlaceholder={dataPlaceholder}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
        />
      </FocusBox>
    </ThemeProvider>
  );
};
`,InputLineWithMask_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { typography, InputLine, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const FocusBox = styled.div\`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, \${(p) => p.theme.color['Neutral/Neutral 40']})
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, \${(p) => p.theme.color['Neutral/Neutral 60']})
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']}) inset;
  }

  & * {
    \${typography['Body/Body 1 Long']}
    line-height: 40px;
  }
\`;

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
});

export const InputLineWithMaskTemplate = ({
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

      <FocusBox>
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
      </FocusBox>
    </ThemeProvider>
  );
};
`,InputLineWithTmpValue_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { typography, InputLine, T, Button } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputLineProps } from '@admiral-ds/react-ui';

import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const Wrapper = styled.div\`
  display: flex;
  gap: 16px;
  margin-top: 16px;
\`;

export const FocusBox = styled.div\`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  transition: box-shadow 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 4px;
  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral40, \${(p) => p.theme.color['Neutral/Neutral 40']})
    inset;

  &:hover:not(:focus-within) {
    box-shadow: 0px 0px 0px 1px var(--admiral-color-Neutral_Neutral60, \${(p) => p.theme.color['Neutral/Neutral 60']})
      inset;
  }
  &:focus-within {
    box-shadow: 0px 0px 0px 2px
      var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']}) inset;
  }

  & * {
    \${typography['Body/Body 1 Long']}
    line-height: 40px;
  }
\`;

export const InputLineWithTmpValueTemplate = ({
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

      <FocusBox>
        <InputLine
          {...props}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          onInput={(e) => setLocalValue(e.currentTarget.value)}
          value={localValue}
          tmpValue={tmpValue}
        />
      </FocusBox>
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
`;function InputLine_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputLine_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputLine_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputLine_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputLine_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputLine_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputLine_stories_define_property(target,key,source[key])})}return target}function InputLine_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputLine_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputLine_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputLine_stories_sliced_to_array(arr,i){return InputLine_stories_array_with_holes(arr)||InputLine_stories_iterable_to_array_limit(arr,i)||InputLine_stories_unsupported_iterable_to_array(arr,i)||InputLine_stories_non_iterable_rest()}function InputLine_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputLine_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputLine_stories_array_like_to_array(o,minLen)}}let InputLine_stories={title:"Admiral-2.1/FocusBox/InputLine",component:InputLine.n,parameters:{docs:{source:{code:null}}},argTypes:{themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},value:{control:{type:"text"}},prefix:{control:{type:"text"}}}};var InputLinePlayground={render:function(props){var CSSCustomProps=InputLine_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputLinePlaygroundTemplate,InputLine_stories_object_spread_props(InputLine_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputLinePlayground_templateraw_namespaceObject}}},name:"InputLine"},InputLineWithMask={render:function(props){var CSSCustomProps=InputLine_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputLineWithMaskTemplate,InputLine_stories_object_spread_props(InputLine_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputLineWithMask_templateraw_namespaceObject}}},name:"InputLine с маской"},InputLineWithTmpValue={render:function(props){var CSSCustomProps=InputLine_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputLineWithTmpValueTemplate,InputLine_stories_object_spread_props(InputLine_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputLineWithTmpValue_templateraw_namespaceObject}}},name:"InputLine с tmpValue"};InputLinePlayground.parameters={...InputLinePlayground.parameters,docs:{...InputLinePlayground.parameters?.docs,source:{originalSource:`{
  render: InputLinePlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: InputLinePlaygroundRaw
      }
    }
  },
  name: 'InputLine'
}`,...InputLinePlayground.parameters?.docs?.source}}},InputLineWithMask.parameters={...InputLineWithMask.parameters,docs:{...InputLineWithMask.parameters?.docs,source:{originalSource:`{
  render: InputLineWithMaskStory,
  parameters: {
    docs: {
      source: {
        code: InputLineWithMaskRaw
      }
    }
  },
  name: 'InputLine с маской'
}`,...InputLineWithMask.parameters?.docs?.source}}},InputLineWithTmpValue.parameters={...InputLineWithTmpValue.parameters,docs:{...InputLineWithTmpValue.parameters?.docs,source:{originalSource:`{
  render: InputLineWithTmpValueStory,
  parameters: {
    docs: {
      source: {
        code: InputLineWithTmpValueRaw
      }
    }
  },
  name: 'InputLine с tmpValue'
}`,...InputLineWithTmpValue.parameters?.docs?.source}}};let __namedExportsOrder=["InputLinePlayground","InputLineWithMask","InputLineWithTmpValue"]},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-input-InputLine-stories-InputLine-stories.cba248d6.iframe.bundle.js.map