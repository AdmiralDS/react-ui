"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2525],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cg:()=>containerHeights,j2:()=>HeightLimitedContainer,mc:()=>Container,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
  & > * {
    visibility: hidden;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: `,`;

  pointer-events: `,`;
  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  `,`;
`]);return _templateObject3=function _templateObject(){return data},data}var containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),function(param){switch(param.$dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}}),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject2(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_1__.VM)(p.theme.shape),")")},function(p){return p.$skeleton?"none":"all"},function(param){return param.$skeleton&&skeletonMixin}),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(Container)(_templateObject3(),containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/InputBox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>InputBox});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts"),_TimePickerIcons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/input/TimePickerIcons.tsx"),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/input/Container.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  padding-right: `,`px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  background-color: var(--admiral-color-Neutral_Neutral10, `,`);
  border-color: transparent;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  cursor: text;
  display: inline-flex;
  overflow: hidden;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: stretch;
  width: 280px;
  position: relative;

  height: 40px;
  padding: 0;
  padding-inline-start: 16px;
  padding-inline-end: 16px;

  & * {
    `,`
    line-height: 40px;
  }
  &[data-size='xl'] {
    height: 56px;
    & * {
      line-height: 56px;
    }
  }
  &[data-size='s'] {
    height: 32px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & * {
      `,`
      line-height: 32px;
    }
  }

  box-sizing: border-box;
  border-radius: var(--admiral-border-radius-Medium, `,`);

  background: transparent;
  /* https://stackoverflow.com/questions/69658462/inset-box-shadow-visual-artifacts-in-google-chrome */
  transform: translate3d(0, 0, 0);
  box-shadow: 0px 0px 0px 1px `,` inset;

  &:hover:not(:focus-within):not([data-disabled]):not([data-read-only]):not([data-skeleton]) {
    box-shadow: 0px 0px 0px 1px `,` inset;
  }
  &:focus-within:not([data-disabled]):not([data-read-only]):not([data-skeleton]) {
    box-shadow: 0px 0px 0px 2px `,` inset;
  }

  transition: box-shadow 0.3s ease-in-out;

  `,`
  `,`

  &[data-disabled],
  &[data-read-only] {
    `,`
  }

  &[data-disabled] {
    cursor: not-allowed;
  }

  &[data-loading] {
    cursor: default;
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  &[data-disable-copying] input {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  `,`
  `,`
  
  &[data-skeleton] {
    `,`
    border-radius: 0;
    box-shadow: none;
    cursor: default;
  }

  `,`
  `,`
`]);return _templateObject5=function _templateObject(){return data},data}var extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),function(props){var _props_$iconsAfterCount;return(0,_TimePickerIcons__WEBPACK_IMPORTED_MODULE_2__.f)(props)+((0,_TimePickerIcons__WEBPACK_IMPORTED_MODULE_2__.E)(props)+8)*(null!=(_props_$iconsAfterCount=props.$iconsAfterCount)?_props_$iconsAfterCount:0)}),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 10"]}),getBorderColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject2(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Neutral_Neutral40, ".concat(theme.color["Neutral/Neutral 40"],")");switch($status){case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}}),getHoverBorderColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Neutral_Neutral60, ".concat(theme.color["Neutral/Neutral 60"],")");switch($status){case"error":return"var(--admiral-color-Error_Error70, ".concat(theme.color["Error/Error 70"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}}),getFocusBorderColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject4(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");switch($status){case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}}),dimensionFocusBoxStyles={xl:`
    height: 56px;
    & * {
      line-height: 56px;
    }
  `,s:`
    height: 32px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    & * {
      `.concat(_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Long"],`
      line-height: 32px;
    }
  `),m:""},InputBox=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject5(),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 1 Long"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Long"],function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.VM)(p.theme.shape)},getBorderColor,getHoverBorderColor,getFocusBorderColor,function(p){return(p.disabled||p.readOnly)&&disabledColors},function(p){return p.disabled?"cursor: not-allowed;":p.$isLoading?"cursor: default;":""},disabledColors,function(p){return p.$skeleton&&_src_components_input_Container__WEBPACK_IMPORTED_MODULE_3__.vy},function(p){return p.$skeleton&&"border-radius: 0; box-shadow: none;"},_src_components_input_Container__WEBPACK_IMPORTED_MODULE_3__.vy,function(param){var $dimension=param.$dimension;return $dimension&&dimensionFocusBoxStyles[$dimension]},extraPadding);try{InputBox.displayName="InputBox",InputBox.__docgenInfo={description:"",displayName:"InputBox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputBox/index.tsx#InputBox"]={docgenInfo:InputBox.__docgenInfo,name:"InputBox",path:"src/components/input/InputBox/index.tsx#InputBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/InputLine/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>InputLine});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/refSetter.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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

  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    cursor: not-allowed;
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  [data-disable-copying] & {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    &::selection {
      background-color: transparent;
    }
    &::-moz-selection {
      background-color: transparent;
    }
  }

  ::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, `,`);
  }

  &:disabled::placeholder,
  &:read-only::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
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

  [data-loading] &,
  [data-skeleton] & {
    pointer-events: none;
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
`]);return _templateObject7=function _templateObject(){return data},data}var StyledInputLine=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.input(_templateObject(),function(p){return p.$isTmpValue?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),PlaceholderValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 30"]}),AdditionalText=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(PlaceholderValue)(_templateObject2()),InvisibleInputValue=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject3()),InputLineContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject4(),PlaceholderValue,function(p){return p.theme.color["Neutral/Neutral 50"]}),MaskBox=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject5()),InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject6()),AdditionalTextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject7()),InputLine=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function(_param,ref){var dataPlaceholder=_param.dataPlaceholder,tmpValue=_param.tmpValue,prefix=_param.prefix,suffix=_param.suffix,_param_containerPropsConfig=_param.containerPropsConfig,inputProps=_object_without_properties(_param,["dataPlaceholder","tmpValue","prefix","suffix","containerPropsConfig"]),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),placeholderRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),placeholder=inputProps.placeholder,isTmpValue="string"==typeof tmpValue;(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){var oninput=function oninput(){var len=this.value.length;placeholderNode&&("string"==typeof placeholder&&placeholder.length>0&&0==len?placeholderNode.innerHTML="":placeholderNode.innerHTML=(null==dataPlaceholder?void 0:dataPlaceholder.substring(len))||"")},inputNode=inputRef.current,placeholderNode=placeholderRef.current;if("string"==typeof dataPlaceholder&&inputNode&&placeholderNode)return inputNode.addEventListener("input",oninput),function(){return inputNode.removeEventListener("input",oninput)}},[dataPlaceholder,placeholder,inputProps.value,inputProps.defaultValue,tmpValue]);var containerProps={onFocus:function(e){e.preventDefault(),"input"!==e.target.tagName.toLowerCase()&&inputRef.current&&inputRef.current.focus()},tabIndex:-1};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputLineContainer,_object_spread_props(_object_spread({},containerProps,(void 0===_param_containerPropsConfig?function(){}:_param_containerPropsConfig)(containerProps)),{children:[prefix&&(""!==inputProps.value||tmpValue)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AdditionalTextWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:prefix}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:" "})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MaskBox,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InvisibleInputValue,{children:isTmpValue?tmpValue:inputProps.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PlaceholderValue,{ref:placeholderRef}),suffix&&(""!==inputProps.value||tmpValue)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AdditionalTextWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:" "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AdditionalText,{children:suffix})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledInputLine,_object_spread_props(_object_spread({ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__.d)(ref,inputRef)},inputProps),{$isTmpValue:isTmpValue,value:isTmpValue?tmpValue:inputProps.value}))]})]}))});try{StyledInputLine.displayName="StyledInputLine",StyledInputLine.__docgenInfo={description:"",displayName:"StyledInputLine",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/index.tsx#StyledInputLine"]={docgenInfo:StyledInputLine.__docgenInfo,name:"StyledInputLine",path:"src/components/input/InputLine/index.tsx#StyledInputLine"})}catch(__react_docgen_typescript_loader_error){}try{InputLine.displayName="InputLine",InputLine.__docgenInfo={description:"",displayName:"InputLine",props:{dataPlaceholder:{defaultValue:null,description:"",name:"dataPlaceholder",required:!1,type:{name:"string"}},tmpValue:{defaultValue:null,description:"",name:"tmpValue",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:"((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>) => Partial<...>)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputLine/index.tsx#InputLine"]={docgenInfo:InputLine.__docgenInfo,name:"InputLine",path:"src/components/input/InputLine/index.tsx#InputLine"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TimePickerIcons.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>iconSizeValue,f:()=>horizontalPaddingValue});var iconSizeValue=function(props){switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},horizontalPaddingValue=function(props){switch(props.$dimension){case"xl":default:return 16;case"s":return 12}};try{iconSizeValue.displayName="iconSizeValue",iconSizeValue.__docgenInfo={description:"",displayName:"iconSizeValue",props:{$dimension:{defaultValue:null,description:"",name:"$dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TimePickerIcons.tsx#iconSizeValue"]={docgenInfo:iconSizeValue.__docgenInfo,name:"iconSizeValue",path:"src/components/input/TimePickerIcons.tsx#iconSizeValue"})}catch(__react_docgen_typescript_loader_error){}try{horizontalPaddingValue.displayName="horizontalPaddingValue",horizontalPaddingValue.__docgenInfo={description:"",displayName:"horizontalPaddingValue",props:{$dimension:{defaultValue:null,description:"",name:"$dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TimePickerIcons.tsx#horizontalPaddingValue"]={docgenInfo:horizontalPaddingValue.__docgenInfo,name:"horizontalPaddingValue",path:"src/components/input/TimePickerIcons.tsx#horizontalPaddingValue"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});var INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]}}]);
//# sourceMappingURL=2525.88dda720.iframe.bundle.js.map