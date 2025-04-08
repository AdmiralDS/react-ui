"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6501],{"./src/components/InputIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>InputIconButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function AnyIcon(_param){var icon=_param.icon,props=_object_without_properties(_param,["icon"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(icon,_object_spread({},props))}__webpack_require__("./node_modules/react/index.js");var InputIconButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(AnyIcon)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 70"]});try{AnyIcon.displayName="AnyIcon",AnyIcon.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#AnyIcon"]={docgenInfo:AnyIcon.__docgenInfo,name:"AnyIcon",path:"src/components/InputIconButton.tsx#AnyIcon"})}catch(__react_docgen_typescript_loader_error){}try{InputIconButton.displayName="InputIconButton",InputIconButton.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#InputIconButton"]={docgenInfo:InputIconButton.__docgenInfo,name:"InputIconButton",path:"src/components/InputIconButton.tsx#InputIconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  container-type: inline-size;
  `,`;

  & svg {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}var sizes=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}},function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1(),sizes,function(p){return p.$svgMixin||""}),Spinner=function(_param){var _param_dimension=_param.dimension,_param_inverse=_param.inverse,svgMixin=_param.svgMixin,props=_object_without_properties(_param,["dimension","inverse","svgMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerWrapper,_object_spread_props(_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__.N,{$inverse:void 0!==_param_inverse&&_param_inverse})}))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/dom/changeInputData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isInputDataDifferent(data1,data2){return data1.value!==data2.value||data1.selectionStart!==data2.selectionStart||data1.selectionEnd!==data2.selectionEnd}function changeInputData(input,toChangeData){var _toChangeData_value=toChangeData.value,value=void 0===_toChangeData_value?input.value:_toChangeData_value,selectionStart=toChangeData.selectionStart,selectionEnd=toChangeData.selectionEnd;if(isInputDataDifferent(input,{value:value,selectionStart:selectionStart,selectionEnd:selectionEnd})){var _Object_getOwnPropertyDescriptor,event,nativeInputValueSetter=null==(_Object_getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input),"value"))?void 0:_Object_getOwnPropertyDescriptor.set;null==nativeInputValueSetter||nativeInputValueSetter.call(input,value),"number"==typeof selectionStart&&"number"==typeof selectionEnd&&input.setSelectionRange(selectionStart,selectionEnd),"function"==typeof Event?event=new Event("input",{bubbles:!0}):(event=document.createEvent("Event")).initEvent("input",!0,!0),input.dispatchEvent(event)}}__webpack_require__.d(__webpack_exports__,{B:()=>changeInputData,i:()=>isInputDataDifferent})},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>checkOverflow});var checkOverflow=function(textContainer){return!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)}},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cg:()=>containerHeights,j2:()=>HeightLimitedContainer,mc:()=>Container,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/animation.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject3=function _templateObject(){return data},data}var containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),function(param){switch(param.$dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}}),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__.h),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject2(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__.VM)(p.theme.shape),")")},function(p){return p.$skeleton?"none":"all"},function(param){return param.$skeleton&&skeletonMixin}),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(Container)(_templateObject3(),containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TextInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R$:()=>InputBorderedDiv,fw:()=>BorderedDivStyles,ks:()=>TextInput});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/input/Container.tsx"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Typography/typography.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),_admiral_ds_icons_build_service_EyeCloseOutline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg"),_admiral_ds_icons_build_service_EyeOutline_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/InputIconButton.tsx"),_src_components_Spinner__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Spinner/index.tsx"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/Tooltip/index.tsx"),_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/utils/checkOverflow.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  padding-right: `,`px;
  padding-left: `,`px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  background-color: var(--admiral-color-Neutral_Neutral10, `,`);
  border-color: transparent;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-radius: inherit;

  border: 1px solid `,`;
  `,`;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  border-color: `,`;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  border: 2px solid
    `,`;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  &:focus-within:not(:disabled) > `,` {
    `,`
  }

  &:hover:not(:focus-within) > `,` {
    `,`;
  }
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 `,`px;

  `,`

  color: var(--admiral-color-Neutral_Neutral90, `,`);

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, `,`);
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }

  [data-disable-copying] & {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  background-color: var(--admiral-color-Neutral_Neutral00, `,`);

  &&&:user-invalid + `,` {
    border: 1px solid var(--admiral-color-Error_Error60Main, `,`);
  }

  &&&:user-invalid:hover:not(:disabled) + `,` {
    border: 1px solid var(--admiral-color-Error_Error70, `,`);
  }

  &&&:user-invalid:focus:not(:disabled) + `,` {
    border: 2px solid var(--admiral-color-Error_Error60Main, `,`);
  }

  [data-read-only] &&&,
  &&&:disabled {
    `,`
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  `,`
  `,`
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, `,`);
    display: block;
    width: `,`px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
    }
  }
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  left: 0;

  padding-left: `,`px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
  right: 0;

  padding-right: `,`px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  `,`
  `,`
`]);return _templateObject12=function _templateObject(){return data},data}var iconSizeValue=function(props){switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},horizontalPaddingValue=function(props){switch(props.$dimension){case"xl":default:return 16;case"s":return 12}},extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(_templateObject(),function(props){var _props_$iconsAfterCount;return horizontalPaddingValue(props)+(iconSizeValue(props)+8)*(null!=(_props_$iconsAfterCount=props.$iconsAfterCount)?_props_$iconsAfterCount:0)},function(props){var _props_$iconsBeforeCount;return horizontalPaddingValue(props)+(iconSizeValue(props)+8)*(null!=(_props_$iconsBeforeCount=props.$iconsBeforeCount)?_props_$iconsBeforeCount:0)}),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 10"]}),getBorderColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(_templateObject2(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Neutral_Neutral40, ".concat(theme.color["Neutral/Neutral 40"],")");switch($status){case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}}),InputBorderedDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(_templateObject3(),getBorderColor,function(p){return p.disabled&&"border-color: transparent;"}),getHoverBorderColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(_templateObject4(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Neutral_Neutral60, ".concat(theme.color["Neutral/Neutral 60"],")");switch($status){case"error":return"var(--admiral-color-Error_Error70, ".concat(theme.color["Error/Error 70"],")");case"success":return"var(--admiral-color-Success_Success60, ".concat(theme.color["Success/Success 60"],")")}}),getFocusBorder=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(_templateObject5(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");switch($status){case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}}),BorderedDivStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(_templateObject6(),InputBorderedDiv,function(p){return p.disabled||p.readOnly?"border-color: transparent":p.$isLoading?"":getFocusBorder},InputBorderedDiv,function(p){return p.$isLoading?"":p.disabled||p.readOnly?"transparent":getHoverBorderColor}),ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(_templateObject7()),Input=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.input(_templateObject8(),horizontalPaddingValue,function(props){return"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__.Il["Body/Body 1 Long"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 00"]},InputBorderedDiv,function(p){return p.theme.color["Error/Error 60 Main"]},InputBorderedDiv,function(p){return p.theme.color["Error/Error 70"]},InputBorderedDiv,function(p){return p.theme.color["Error/Error 60 Main"]},disabledColors,extraPadding,ieFixes),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div(_templateObject9(),function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__.VM)(p.theme.shape)},iconSizeValue,function(p){return p.theme.color["Primary/Primary 60 Main"]}),IconPanelBefore=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(IconPanel)(_templateObject10(),horizontalPaddingValue),IconPanelAfter=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(IconPanel)(_templateObject11(),horizontalPaddingValue),StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(_src_components_input_Container__WEBPACK_IMPORTED_MODULE_8__.j2)(_templateObject12(),BorderedDivStyles,function(p){return p.disabled?"cursor: not-allowed;":p.$isLoading?"cursor: default;":""});function defaultHandleInput(newInputData){return newInputData||{}}var TextInput=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _props_defaultValue,_props_value,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,type=_param.type,displayClearIcon=_param.displayClearIcon,isLoading=_param.isLoading,status=_param.status,_param_handleInput=_param.handleInput,handleInput=void 0===_param_handleInput?defaultHandleInput:_param_handleInput,containerRef=_param.containerRef,icons=_param.icons,iconsBefore=_param.iconsBefore,iconsAfter=_param.iconsAfter,children=_param.children,className=_param.className,style=_param.style,placeholder=_param.placeholder,_param_skeleton=_param.skeleton,_param_showTooltip=_param.showTooltip,disableCopying=_param.disableCopying,props=_object_without_properties(_param,["dimension","type","displayClearIcon","isLoading","status","handleInput","containerRef","icons","iconsBefore","iconsAfter","children","className","style","placeholder","skeleton","showTooltip","disableCopying"]),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),wrapperRef=containerRef||(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),iconAfterArray=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(iconsAfter||icons),iconBeforeArray=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(iconsBefore),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),overflowActive=_useState[0],setOverflowActive=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),tooltipVisible=_useState1[0],setTooltipVisible=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null!=(_props_defaultValue=props.defaultValue)?_props_defaultValue:void 0),2),innerValueState=_useState2[0],setInnerValueState=_useState2[1],innerValue=null!=(_props_value=props.value)?_props_value:innerValueState;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){if((0,_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__.p)(inputRef.current))return void setOverflowActive(!0);setOverflowActive(!1)},[tooltipVisible,setOverflowActive]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){var show=function show(){document.activeElement!==inputRef.current&&setTooltipVisible(!0)},hide=function hide(){setTooltipVisible(!1)},wrapper=wrapperRef.current;if(wrapper)return wrapper.addEventListener("mouseenter",show),wrapper.addEventListener("mouseleave",hide),wrapper.addEventListener("mousedown",hide),function(){wrapper.removeEventListener("mouseenter",show),wrapper.removeEventListener("mouseleave",hide),wrapper.removeEventListener("mousedown",hide)}},[setTooltipVisible]);var _useState3=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isPasswordVisible=_useState3[0],setPasswordVisible=_useState3[1];if(!props.readOnly&&"password"===type){var Icon=isPasswordVisible?_admiral_ds_icons_build_service_EyeOutline_svg__WEBPACK_IMPORTED_MODULE_4__.h:_admiral_ds_icons_build_service_EyeCloseOutline_svg__WEBPACK_IMPORTED_MODULE_3__.h;iconAfterArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__.G,{icon:Icon,onClick:function(){setPasswordVisible(!isPasswordVisible)},"aria-hidden":!0},"eye-icon"))}!props.readOnly&&displayClearIcon&&innerValue&&iconAfterArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__.G,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,onMouseDown:function(e){e.preventDefault()},onClick:function(){inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon")),isLoading&&iconAfterArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Spinner__WEBPACK_IMPORTED_MODULE_12__.y,{dimension:"s"===dimension?"ms":"m"},"loading-icon"));var iconsBeforeCount=iconBeforeArray.length,iconsAfterCount=iconAfterArray.length;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){var oninput=function oninput(e){var inputData=handleInput({value:this.value,selectionStart:this.selectionStart,selectionEnd:this.selectionEnd},e);placeholder&&!(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.i)(nullHandledValue,inputData)?(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(this,_object_spread_props(_object_spread({},inputData),{value:""})):(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(this,inputData)},nullHandledValue=handleInput(null);if("date"!==type&&inputRef.current){var node=inputRef.current;node.addEventListener("input",oninput);var inputData=handleInput({value:node.value,selectionStart:node.selectionStart,selectionEnd:node.selectionEnd});return placeholder&&!(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.i)(nullHandledValue,inputData)?(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(node,_object_spread_props(_object_spread({},inputData),{value:""})):(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(node,inputData),function(){node.removeEventListener("input",oninput)}}},[handleInput,placeholder]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var select=function select(){this.selectionEnd=this.selectionStart};if(disableCopying&&inputRef.current){var node=inputRef.current;return node.addEventListener("select",select,!0),function(){return node.removeEventListener("select",select,!0)}}},[disableCopying]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledContainer,{className:className,style:style,$dimension:dimension,ref:wrapperRef,disabled:props.disabled,readOnly:props.readOnly,$isLoading:isLoading,$status:status,"data-disabled":!!props.disabled||void 0,"data-read-only":!!props.readOnly||void 0,"data-loading":!!isLoading||void 0,"data-status":status,$skeleton:void 0!==_param_skeleton&&_param_skeleton,"data-disable-copying":!!disableCopying||void 0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Input,_object_spread_props(_object_spread({ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_13__.d)(ref,inputRef)},props),{onChange:function(e){var _props_onChange;setInnerValueState(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:placeholder,$dimension:dimension,$iconsAfterCount:iconsAfterCount,$iconsBeforeCount:iconsBeforeCount,type:"password"===type&&isPasswordVisible?"text":type})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputBorderedDiv,{$status:status,disabled:props.disabled||props.readOnly}),iconsBeforeCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPanelBefore,{disabled:props.disabled,$dimension:dimension,children:iconBeforeArray}),iconsAfterCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPanelAfter,{disabled:props.disabled,$dimension:dimension,children:iconAfterArray}),children]}),(void 0===_param_showTooltip||_param_showTooltip)&&tooltipVisible&&overflowActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_14__.m,{renderContent:function(){var _inputRef_current;return(null==inputRef||null==(_inputRef_current=inputRef.current)?void 0:_inputRef_current.value)||""},targetElement:wrapperRef.current})]})});TextInput.displayName="TextInput";try{InputBorderedDiv.displayName="TextInput",InputBorderedDiv.__docgenInfo={description:"",displayName:"TextInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextInput/index.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/input/TextInput/index.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}}}]);