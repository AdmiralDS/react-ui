"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7518],{"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/DateTimeField/stories/DateTimeField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DateTimeFieldBase:()=>DateTimeFieldBase,DateTimeFieldDisabled:()=>DateTimeFieldDisabled,DateTimeFieldReadOnly:()=>DateTimeFieldReadOnly,DateTimeFieldStatus:()=>DateTimeFieldStatus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateTimeField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Field=__webpack_require__("./src/components/Field/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),DateInput=__webpack_require__("./src/components/input/DateInput/index.tsx"),TimeInput=__webpack_require__("./src/components/input/TimeInput/index.tsx"),TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
        border-right: 1px solid `,`;
      `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  flex: 1 1 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  & `,"","",` {
    border-right: none;
  }

  &:focus-within `,"","",` {
    `,`;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
        border-left: 1px solid `,`;
      `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  flex: 0 0 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  & `,"","",` {
    border-left: none;
  }

  &:focus-within `,"","",` {
    `,`;
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  border-left-color: `,`;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  border-left-color: `,`;
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  border-left: 1px solid `,`;
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  display: flex;
  min-width: 288px;

  &:hover `,` {
    `,`;
  }
  &:focus-within `,` {
    `,`;
  }
`]);return _templateObject9=function _templateObject(){return data},data}var getFocusBorderColor=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){var status=param.status,theme=param.theme;if(!status)return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");switch(status){case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}}),DateTimeDateInput=(0,styled_components_browser_esm.Ay)(DateInput.J3)(_templateObject2(),TextInput.R$,TextInput.R$,TextInput.R$,TextInput.R$,TextInput.R$,TextInput.R$,function(p){return!p.disabled&&!p.readOnly&&(0,styled_components_browser_esm.AH)(_templateObject1(),getFocusBorderColor)});DateTimeDateInput.displayName="DateTimeDateInput";var DateTimeTimeInput=(0,styled_components_browser_esm.Ay)(TimeInput.c)(_templateObject4(),TextInput.R$,TextInput.R$,TextInput.R$,TextInput.R$,TextInput.R$,TextInput.R$,function(p){return!p.disabled&&!p.readOnly&&(0,styled_components_browser_esm.AH)(_templateObject3(),getFocusBorderColor)});DateTimeTimeInput.displayName="DateTimeTimeInput";var getSeparatorColor=(0,styled_components_browser_esm.AH)(_templateObject5(),function(param){var disabled=param.disabled,readOnly=param.readOnly,$status=param.$status,theme=param.theme;if(disabled)return"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")");if(readOnly||!$status)return"var(--admiral-color-Neutral_Neutral40, ".concat(theme.color["Neutral/Neutral 40"],")");switch($status){case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}return"var(--admiral-color-Neutral_Neutral40, ".concat(theme.color["Neutral/Neutral 40"],")")}),getHoverSeparatorColor=(0,styled_components_browser_esm.AH)(_templateObject6(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Neutral_Neutral60, ".concat(theme.color["Neutral/Neutral 60"],")");switch($status){case"error":return"var(--admiral-color-Error_Error70, ".concat(theme.color["Error/Error 70"],")");case"success":return"var(--admiral-color-Success_Success60, ".concat(theme.color["Success/Success 60"],")")}}),getFocusSeparatorColor=(0,styled_components_browser_esm.AH)(_templateObject7(),function(param){var $status=param.$status,theme=param.theme;if(!$status)return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");switch($status){case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")")}}),DateTimeSeparatorDiv=styled_components_browser_esm.Ay.div(_templateObject8(),getSeparatorColor),DateTimeSeparator=(0,react.forwardRef)(function(_param,ref){var status=_param.status,props=_object_without_properties(_param,["status"]);return(0,jsx_runtime.jsx)(DateTimeSeparatorDiv,_object_spread({ref:ref,$status:status},props))});DateTimeSeparator.displayName="DateTimeSeparator";var DateTimeContainerDiv=styled_components_browser_esm.Ay.div(_templateObject9(),DateTimeSeparatorDiv,function(p){return!p.disabled&&!p.readOnly&&getHoverSeparatorColor},DateTimeSeparatorDiv,function(p){return!p.disabled&&!p.readOnly&&getFocusSeparatorColor}),DateTimeContainer=(0,react.forwardRef)(function(_param,ref){var status=_param.status,props=_object_without_properties(_param,["status"]);return(0,jsx_runtime.jsx)(DateTimeContainerDiv,_object_spread({ref:ref,$status:status},props))});DateTimeContainer.displayName="DateTimeContainer";try{DateTimeDateInput.displayName="DateTimeDateInput",DateTimeDateInput.__docgenInfo={description:"",displayName:"DateTimeDateInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateTime/index.tsx#DateTimeDateInput"]={docgenInfo:DateTimeDateInput.__docgenInfo,name:"DateTimeDateInput",path:"src/components/input/DateTime/index.tsx#DateTimeDateInput"})}catch(__react_docgen_typescript_loader_error){}try{DateTimeTimeInput.displayName="DateTimeTimeInput",DateTimeTimeInput.__docgenInfo={description:"",displayName:"DateTimeTimeInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateTime/index.tsx#DateTimeTimeInput"]={docgenInfo:DateTimeTimeInput.__docgenInfo,name:"DateTimeTimeInput",path:"src/components/input/DateTime/index.tsx#DateTimeTimeInput"})}catch(__react_docgen_typescript_loader_error){}try{DateTimeSeparator.displayName="DateTimeSeparator",DateTimeSeparator.__docgenInfo={description:"",displayName:"DateTimeSeparator",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateTime/index.tsx#DateTimeSeparator"]={docgenInfo:DateTimeSeparator.__docgenInfo,name:"DateTimeSeparator",path:"src/components/input/DateTime/index.tsx#DateTimeSeparator"})}catch(__react_docgen_typescript_loader_error){}try{DateTimeContainer.displayName="DateTimeContainer",DateTimeContainer.__docgenInfo={description:"",displayName:"DateTimeContainer",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateTime/index.tsx#DateTimeContainer"]={docgenInfo:DateTimeContainer.__docgenInfo,name:"DateTimeContainer",path:"src/components/input/DateTime/index.tsx#DateTimeContainer"})}catch(__react_docgen_typescript_loader_error){}var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function DateTimeFieldBase_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateTimeFieldBase_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateTimeFieldBase_template_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateTimeFieldBase_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateTimeFieldBase_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateTimeFieldBase_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateTimeFieldBase_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DateTimeFieldBase_template_templateObject(){var data=DateTimeFieldBase_template_tagged_template_literal([`
  > * {
    margin-bottom: 24px;
  }
`]);return DateTimeFieldBase_template_templateObject=function _templateObject(){return data},data}var DisplayContainer=styled_components_browser_esm.Ay.div(DateTimeFieldBase_template_templateObject()),DateTimeFieldBaseTemplate=function(_param){var additionalLabel=_param.additionalLabel,_param_label=_param.label,dimension=_param.dimension,status=_param.status,disabled=_param.disabled,readOnly=_param.readOnly,skeleton=_param.skeleton,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,fieldProps=DateTimeFieldBase_template_object_spread({label:void 0===_param_label?"Введите дату":_param_label,additionalLabel:additionalLabel,disabled:disabled,readOnly:readOnly,skeleton:skeleton},DateTimeFieldBase_template_object_without_properties(_param,["additionalLabel","label","dimension","status","disabled","readOnly","skeleton","themeBorderKind","CSSCustomProps"])),baseDateTimeProps={status:status,disabled:disabled,readOnly:readOnly},dateTimeProps=DateTimeFieldBase_template_object_spread({dimension:dimension,skeleton:skeleton},baseDateTimeProps);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DisplayContainer,{children:(0,jsx_runtime.jsx)(Field.D0,_object_spread_props(DateTimeFieldBase_template_object_spread({},fieldProps),{children:(0,jsx_runtime.jsxs)(DateTimeContainer,_object_spread_props(DateTimeFieldBase_template_object_spread({},baseDateTimeProps),{disabled:disabled||skeleton,children:[(0,jsx_runtime.jsx)(DateTimeDateInput,_object_spread_props(DateTimeFieldBase_template_object_spread({},dateTimeProps),{dropContainerClassName:"dateDropContainerClass"})),(0,jsx_runtime.jsx)(DateTimeSeparator,_object_spread_props(DateTimeFieldBase_template_object_spread({},baseDateTimeProps),{disabled:disabled||skeleton})),(0,jsx_runtime.jsx)(DateTimeTimeInput,_object_spread_props(DateTimeFieldBase_template_object_spread({},dateTimeProps),{dropContainerClassName:"timeDropContainerClass"}))]}))}))})})};try{DateTimeFieldBaseTemplate.displayName="DateTimeFieldBaseTemplate",DateTimeFieldBaseTemplate.__docgenInfo={description:"",displayName:"DateTimeFieldBaseTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Установка статуса disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Введите дату"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeField/stories/DateTimeFieldBase.template.tsx#DateTimeFieldBaseTemplate"]={docgenInfo:DateTimeFieldBaseTemplate.__docgenInfo,name:"DateTimeFieldBaseTemplate",path:"src/components/form/DateTimeField/stories/DateTimeFieldBase.template.tsx#DateTimeFieldBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function DateTimeFieldDisabled_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateTimeFieldDisabled_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateTimeFieldDisabled_template_define_property(target,key,source[key])})}return target}function DateTimeFieldDisabled_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateTimeFieldDisabled_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateTimeFieldDisabled_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateTimeFieldDisabled_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateTimeFieldDisabled_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateTimeFieldDisabled_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateTimeFieldDisabled_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DateTimeFieldDisabled_template_templateObject(){var data=DateTimeFieldDisabled_template_tagged_template_literal([`
  > * {
    margin-bottom: 24px;
  }
`]);return DateTimeFieldDisabled_template_templateObject=function _templateObject(){return data},data}var DateTimeFieldDisabled_template_DisplayContainer=styled_components_browser_esm.Ay.div(DateTimeFieldDisabled_template_templateObject()),DateTimeFieldDisabledTemplate=function(_param){var _param_label=_param.label,additionalLabel=_param.additionalLabel,dimension=_param.dimension,status=_param.status,_param_disabled=_param.disabled,disabled=void 0===_param_disabled||_param_disabled,readOnly=_param.readOnly,skeleton=_param.skeleton,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,fieldProps=DateTimeFieldDisabled_template_object_spread({label:void 0===_param_label?"Disabled control":_param_label,additionalLabel:additionalLabel,status:status,disabled:disabled,readOnly:readOnly,skeleton:skeleton},DateTimeFieldDisabled_template_object_without_properties(_param,["label","additionalLabel","dimension","status","disabled","readOnly","skeleton","themeBorderKind","CSSCustomProps"])),baseDateTimeProps={status:status,disabled:disabled,readOnly:readOnly},dateTimeProps=DateTimeFieldDisabled_template_object_spread({dimension:dimension,skeleton:skeleton},baseDateTimeProps);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateTimeFieldDisabled_template_DisplayContainer,{children:(0,jsx_runtime.jsx)(Field.D0,DateTimeFieldDisabled_template_object_spread_props(DateTimeFieldDisabled_template_object_spread({},fieldProps),{children:(0,jsx_runtime.jsxs)(DateTimeContainer,DateTimeFieldDisabled_template_object_spread_props(DateTimeFieldDisabled_template_object_spread({},baseDateTimeProps),{disabled:disabled||skeleton,children:[(0,jsx_runtime.jsx)(DateTimeDateInput,DateTimeFieldDisabled_template_object_spread({},dateTimeProps)),(0,jsx_runtime.jsx)(DateTimeSeparator,DateTimeFieldDisabled_template_object_spread_props(DateTimeFieldDisabled_template_object_spread({},baseDateTimeProps),{disabled:disabled||skeleton})),(0,jsx_runtime.jsx)(DateTimeTimeInput,DateTimeFieldDisabled_template_object_spread({},dateTimeProps))]}))}))})})};try{DateTimeFieldDisabledTemplate.displayName="DateTimeFieldDisabledTemplate",DateTimeFieldDisabledTemplate.__docgenInfo={description:"",displayName:"DateTimeFieldDisabledTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"true"},description:"Установка статуса disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Disabled control"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeField/stories/DateTimeFieldDisabled.template.tsx#DateTimeFieldDisabledTemplate"]={docgenInfo:DateTimeFieldDisabledTemplate.__docgenInfo,name:"DateTimeFieldDisabledTemplate",path:"src/components/form/DateTimeField/stories/DateTimeFieldDisabled.template.tsx#DateTimeFieldDisabledTemplate"})}catch(__react_docgen_typescript_loader_error){}function DateTimeFieldReadOnly_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateTimeFieldReadOnly_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateTimeFieldReadOnly_template_define_property(target,key,source[key])})}return target}function DateTimeFieldReadOnly_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateTimeFieldReadOnly_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateTimeFieldReadOnly_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateTimeFieldReadOnly_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateTimeFieldReadOnly_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateTimeFieldReadOnly_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateTimeFieldReadOnly_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DateTimeFieldReadOnly_template_templateObject(){var data=DateTimeFieldReadOnly_template_tagged_template_literal([`
  > * {
    margin-bottom: 24px;
  }
`]);return DateTimeFieldReadOnly_template_templateObject=function _templateObject(){return data},data}var DateTimeFieldReadOnly_template_DisplayContainer=styled_components_browser_esm.Ay.div(DateTimeFieldReadOnly_template_templateObject()),DateTimeFieldReadOnlyTemplate=function(_param){var _param_label=_param.label,additionalLabel=_param.additionalLabel,dimension=_param.dimension,status=_param.status,disabled=_param.disabled,_param_readOnly=_param.readOnly,readOnly=void 0===_param_readOnly||_param_readOnly,skeleton=_param.skeleton,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,fieldProps=DateTimeFieldReadOnly_template_object_spread({label:void 0===_param_label?"Read only control":_param_label,additionalLabel:additionalLabel,status:status,disabled:disabled,readOnly:readOnly,skeleton:skeleton},DateTimeFieldReadOnly_template_object_without_properties(_param,["label","additionalLabel","dimension","status","disabled","readOnly","skeleton","themeBorderKind","CSSCustomProps"])),baseDateTimeProps={status:status,disabled:disabled,readOnly:readOnly},dateTimeProps=DateTimeFieldReadOnly_template_object_spread({dimension:dimension,skeleton:skeleton},baseDateTimeProps);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateTimeFieldReadOnly_template_DisplayContainer,{children:(0,jsx_runtime.jsx)(Field.D0,DateTimeFieldReadOnly_template_object_spread_props(DateTimeFieldReadOnly_template_object_spread({},fieldProps),{children:(0,jsx_runtime.jsxs)(DateTimeContainer,DateTimeFieldReadOnly_template_object_spread_props(DateTimeFieldReadOnly_template_object_spread({},baseDateTimeProps),{disabled:disabled||skeleton,children:[(0,jsx_runtime.jsx)(DateTimeDateInput,DateTimeFieldReadOnly_template_object_spread_props(DateTimeFieldReadOnly_template_object_spread({},dateTimeProps),{defaultValue:"12.10.2022"})),(0,jsx_runtime.jsx)(DateTimeSeparator,DateTimeFieldReadOnly_template_object_spread_props(DateTimeFieldReadOnly_template_object_spread({},baseDateTimeProps),{disabled:disabled||skeleton})),(0,jsx_runtime.jsx)(DateTimeTimeInput,DateTimeFieldReadOnly_template_object_spread_props(DateTimeFieldReadOnly_template_object_spread({},dateTimeProps),{defaultValue:"12:10"}))]}))}))})})};try{DateTimeFieldReadOnlyTemplate.displayName="DateTimeFieldReadOnlyTemplate",DateTimeFieldReadOnlyTemplate.__docgenInfo={description:"",displayName:"DateTimeFieldReadOnlyTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Установка статуса disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"true"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Read only control"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeField/stories/DateTimeFieldReadOnly.template.tsx#DateTimeFieldReadOnlyTemplate"]={docgenInfo:DateTimeFieldReadOnlyTemplate.__docgenInfo,name:"DateTimeFieldReadOnlyTemplate",path:"src/components/form/DateTimeField/stories/DateTimeFieldReadOnly.template.tsx#DateTimeFieldReadOnlyTemplate"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function DateTimeFieldStatus_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateTimeFieldStatus_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateTimeFieldStatus_template_define_property(target,key,source[key])})}return target}function DateTimeFieldStatus_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateTimeFieldStatus_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateTimeFieldStatus_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateTimeFieldStatus_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateTimeFieldStatus_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateTimeFieldStatus_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function DateTimeFieldStatus_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function DateTimeFieldStatus_template_templateObject(){var data=DateTimeFieldStatus_template_tagged_template_literal([`
  > * {
    margin-bottom: 24px;
  }
`]);return DateTimeFieldStatus_template_templateObject=function _templateObject(){return data},data}var DateTimeFieldStatus_template_DisplayContainer=styled_components_browser_esm.Ay.div(DateTimeFieldStatus_template_templateObject()),DateTimeFieldStatusTemplate=function(_param){var _param_label=_param.label,additionalLabel=_param.additionalLabel,dimension=_param.dimension,disabled=_param.disabled,readOnly=_param.readOnly,skeleton=_param.skeleton,_param_status=_param.status,status=void 0===_param_status?"success":_param_status,extraText=_param.extraText,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,fieldProps=DateTimeFieldStatus_template_object_spread({label:void 0===_param_label?"Status control":_param_label,additionalLabel:additionalLabel,disabled:disabled,readOnly:readOnly,skeleton:skeleton},DateTimeFieldStatus_template_object_without_properties(_param,["label","additionalLabel","dimension","disabled","readOnly","skeleton","status","extraText","themeBorderKind","CSSCustomProps"])),baseDateTimeProps={disabled:disabled,readOnly:readOnly},dateTimeProps=DateTimeFieldStatus_template_object_spread({dimension:dimension,skeleton:skeleton},baseDateTimeProps),_React_useState=_sliced_to_array(react.useState(status),2),dateTimeStatus=_React_useState[0],setDateTimeStatus=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(""),2),additionalText=_React_useState1[0],setAdditionalText=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(""),2),addLabel=_React_useState2[0],setAddLabel=_React_useState2[1];return react.useEffect(function(){return disabled||readOnly?void setAdditionalText(""):extraText?void setAdditionalText(String(extraText)):void setAdditionalText("Additional text")},[disabled,readOnly,extraText]),react.useEffect(function(){return disabled||readOnly?void setAddLabel(""):additionalLabel?void setAddLabel(String(extraText)):void setAddLabel("Add label")},[disabled,readOnly,additionalLabel]),react.useEffect(function(){if(!disabled&&!readOnly){switch(status){case"success":setDateTimeStatus("success");break;case"error":setDateTimeStatus("error")}if(extraText||additionalLabel){extraText&&setAdditionalText(String(extraText)),additionalLabel&&setAddLabel(String(additionalLabel));return}setAdditionalText("Additional text"),setAddLabel("Add label")}},[status]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateTimeFieldStatus_template_DisplayContainer,{children:(0,jsx_runtime.jsx)(Field.D0,DateTimeFieldStatus_template_object_spread_props(DateTimeFieldStatus_template_object_spread({},fieldProps),{status:dateTimeStatus,extraText:additionalText,additionalLabel:addLabel,children:(0,jsx_runtime.jsxs)(DateTimeContainer,DateTimeFieldStatus_template_object_spread_props(DateTimeFieldStatus_template_object_spread({},baseDateTimeProps),{status:dateTimeStatus,disabled:disabled||skeleton,children:[(0,jsx_runtime.jsx)(DateTimeDateInput,DateTimeFieldStatus_template_object_spread_props(DateTimeFieldStatus_template_object_spread({},dateTimeProps),{defaultValue:"12.10.2022",status:dateTimeStatus})),(0,jsx_runtime.jsx)(DateTimeSeparator,DateTimeFieldStatus_template_object_spread_props(DateTimeFieldStatus_template_object_spread({},baseDateTimeProps),{status:dateTimeStatus,disabled:disabled||skeleton})),(0,jsx_runtime.jsx)(DateTimeTimeInput,DateTimeFieldStatus_template_object_spread_props(DateTimeFieldStatus_template_object_spread({},dateTimeProps),{defaultValue:"12:10",status:dateTimeStatus}))]}))}))})})};try{DateTimeFieldStatusTemplate.displayName="DateTimeFieldStatusTemplate",DateTimeFieldStatusTemplate.__docgenInfo={description:"",displayName:"DateTimeFieldStatusTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:{value:"success"},description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Установка статуса disabled",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Status control"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/DateTimeField/stories/DateTimeFieldStatus.template.tsx#DateTimeFieldStatusTemplate"]={docgenInfo:DateTimeFieldStatusTemplate.__docgenInfo,name:"DateTimeFieldStatusTemplate",path:"src/components/form/DateTimeField/stories/DateTimeFieldStatus.template.tsx#DateTimeFieldStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");let DateTimeFieldBase_templateraw_namespaceObject=`import styled, { ThemeProvider } from 'styled-components';
import type { BorderRadiusType, FieldProps, ComponentDimension } from '@admiral-ds/react-ui';
import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div\`
  > * {
    margin-bottom: 24px;
  }
\`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldBaseTemplate = ({
  additionalLabel,
  label = 'Введите дату',
  dimension,
  status,
  disabled,
  readOnly,
  skeleton,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateTimeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const fieldProps = {
    label,
    additionalLabel,
    disabled,
    readOnly,
    skeleton,
    ...props,
  } as Record<string, any>;
  const baseDateTimeProps = {
    status,
    disabled,
    readOnly,
  } as Record<string, any>;
  const dateTimeProps = {
    dimension,
    skeleton,
    ...baseDateTimeProps,
  } as Record<string, any>;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Field {...fieldProps}>
          <DateTimeContainer {...baseDateTimeProps} disabled={disabled || skeleton}>
            <DateTimeDateInput {...dateTimeProps} dropContainerClassName="dateDropContainerClass" />
            <DateTimeSeparator {...baseDateTimeProps} disabled={disabled || skeleton} />
            <DateTimeTimeInput {...dateTimeProps} dropContainerClassName="timeDropContainerClass" />
          </DateTimeContainer>
        </Field>
      </DisplayContainer>
    </ThemeProvider>
  );
};
`,DateTimeFieldDisabled_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, ComponentDimension, FieldProps } from '@admiral-ds/react-ui';
import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div\`
  > * {
    margin-bottom: 24px;
  }
\`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldDisabledTemplate = ({
  label = 'Disabled control',
  additionalLabel,
  dimension,
  status,
  disabled = true,
  readOnly,
  skeleton,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateTimeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const fieldProps = {
    label,
    additionalLabel,
    status,
    disabled,
    readOnly,
    skeleton,
    ...props,
  } as Record<string, any>;
  const baseDateTimeProps = {
    status,
    disabled,
    readOnly,
  } as Record<string, any>;
  const dateTimeProps = {
    dimension,
    skeleton,
    ...baseDateTimeProps,
  } as Record<string, any>;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Field {...fieldProps}>
          <DateTimeContainer {...baseDateTimeProps} disabled={disabled || skeleton}>
            <DateTimeDateInput {...dateTimeProps} />
            <DateTimeSeparator {...baseDateTimeProps} disabled={disabled || skeleton} />
            <DateTimeTimeInput {...dateTimeProps} />
          </DateTimeContainer>
        </Field>
      </DisplayContainer>
    </ThemeProvider>
  );
};
`,DateTimeFieldReadOnly_templateraw_namespaceObject=`import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, ComponentDimension, FieldProps } from '@admiral-ds/react-ui';
import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div\`
  > * {
    margin-bottom: 24px;
  }
\`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldReadOnlyTemplate = ({
  label = 'Read only control',
  additionalLabel,
  dimension,
  status,
  disabled,
  readOnly = true,
  skeleton,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateTimeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const fieldProps = {
    label,
    additionalLabel,
    status,
    disabled,
    readOnly,
    skeleton,
    ...props,
  } as Record<string, any>;
  const baseDateTimeProps = {
    status,
    disabled,
    readOnly,
  } as Record<string, any>;
  const dateTimeProps = {
    dimension,
    skeleton,
    ...baseDateTimeProps,
  } as Record<string, any>;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Field {...fieldProps}>
          <DateTimeContainer {...baseDateTimeProps} disabled={disabled || skeleton}>
            <DateTimeDateInput {...dateTimeProps} defaultValue="12.10.2022" />
            <DateTimeSeparator {...baseDateTimeProps} disabled={disabled || skeleton} />
            <DateTimeTimeInput {...dateTimeProps} defaultValue="12:10" />
          </DateTimeContainer>
        </Field>
      </DisplayContainer>
    </ThemeProvider>
  );
};
`,DateTimeFieldStatus_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  DateTimeContainer,
  DateTimeDateInput,
  DateTimeSeparator,
  DateTimeTimeInput,
  Field,
} from '@admiral-ds/react-ui';
import type { ComponentDimension, FieldProps, InputStatus, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div\`
  > * {
    margin-bottom: 24px;
  }
\`;

interface DateTimeFieldProps extends FieldProps {
  dimension?: ComponentDimension;
}

export const DateTimeFieldStatusTemplate = ({
  label = 'Status control',
  additionalLabel,
  dimension,
  disabled,
  readOnly,
  skeleton,
  status = 'success',
  extraText,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateTimeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const fieldProps = {
    label,
    additionalLabel,
    disabled,
    readOnly,
    skeleton,
    ...props,
  } as Record<string, any>;
  const baseDateTimeProps = {
    disabled,
    readOnly,
  } as Record<string, any>;
  const dateTimeProps = {
    dimension,
    skeleton,
    ...baseDateTimeProps,
  } as Record<string, any>;

  const [dateTimeStatus, setDateTimeStatus] = React.useState<InputStatus | undefined>(status);
  const [additionalText, setAdditionalText] = React.useState<string>('');
  const [addLabel, setAddLabel] = React.useState<string>('');

  React.useEffect(() => {
    if (disabled || readOnly) {
      setAdditionalText('');
      return;
    }
    if (extraText) {
      setAdditionalText(String(extraText));
      return;
    }
    setAdditionalText('Additional text');
  }, [disabled, readOnly, extraText]);
  React.useEffect(() => {
    if (disabled || readOnly) {
      setAddLabel('');
      return;
    }
    if (additionalLabel) {
      setAddLabel(String(extraText));
      return;
    }
    setAddLabel('Add label');
  }, [disabled, readOnly, additionalLabel]);

  React.useEffect(() => {
    if (disabled || readOnly) {
      return;
    }
    switch (status) {
      case 'success':
        setDateTimeStatus('success');
        break;
      case 'error':
        setDateTimeStatus('error');
        break;
    }
    if (extraText || additionalLabel) {
      if (extraText) setAdditionalText(String(extraText));
      if (additionalLabel) setAddLabel(String(additionalLabel));
      return;
    }
    setAdditionalText('Additional text');
    setAddLabel('Add label');
  }, [status]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Field {...fieldProps} status={dateTimeStatus} extraText={additionalText} additionalLabel={addLabel}>
          <DateTimeContainer {...baseDateTimeProps} status={dateTimeStatus} disabled={disabled || skeleton}>
            <DateTimeDateInput {...dateTimeProps} defaultValue="12.10.2022" status={dateTimeStatus} />
            <DateTimeSeparator {...baseDateTimeProps} status={dateTimeStatus} disabled={disabled || skeleton} />
            <DateTimeTimeInput {...dateTimeProps} defaultValue="12:10" status={dateTimeStatus} />
          </DateTimeContainer>
        </Field>
      </DisplayContainer>
    </ThemeProvider>
  );
};
`;function DateTimeField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DateTimeField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function DateTimeField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateTimeField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DateTimeField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateTimeField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateTimeField_stories_define_property(target,key,source[key])})}return target}function DateTimeField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateTimeField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateTimeField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateTimeField_stories_sliced_to_array(arr,i){return DateTimeField_stories_array_with_holes(arr)||DateTimeField_stories_iterable_to_array_limit(arr,i)||DateTimeField_stories_unsupported_iterable_to_array(arr,i)||DateTimeField_stories_non_iterable_rest()}function DateTimeField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DateTimeField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DateTimeField_stories_array_like_to_array(o,minLen)}}let DateTimeField_stories={title:"Admiral-2.1/Form Field/DateTimeField",component:Field.D0,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=112005%3A67969"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},extraText:{control:{type:"text"}},label:{control:{type:"text"}},additionalLabel:{control:{type:"text"}},displayInline:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},status:{options:types.j,control:{type:"radio"}}}};var DateTimeFieldBase={render:function(props){var CSSCustomProps=DateTimeField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateTimeFieldBaseTemplate,DateTimeField_stories_object_spread_props(DateTimeField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateTimeFieldBase_templateraw_namespaceObject}}},name:"DateTimeField example"},DateTimeFieldDisabled={render:function(props){var CSSCustomProps=DateTimeField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateTimeFieldDisabledTemplate,DateTimeField_stories_object_spread_props(DateTimeField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateTimeFieldDisabled_templateraw_namespaceObject}}},name:"DateTimeField disabled example"},DateTimeFieldReadOnly={render:function(props){var CSSCustomProps=DateTimeField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateTimeFieldReadOnlyTemplate,DateTimeField_stories_object_spread_props(DateTimeField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateTimeFieldReadOnly_templateraw_namespaceObject}}},name:"DateTimeField read only example"},DateTimeFieldStatus={render:function(props){var CSSCustomProps=DateTimeField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateTimeFieldStatusTemplate,DateTimeField_stories_object_spread_props(DateTimeField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateTimeFieldStatus_templateraw_namespaceObject}}},name:"DateTimeField status example"};DateTimeFieldBase.parameters={...DateTimeFieldBase.parameters,docs:{...DateTimeFieldBase.parameters?.docs,source:{originalSource:`{
  render: DateTimeFieldBaseStory,
  parameters: {
    docs: {
      source: {
        code: DateTimeFieldBaseRaw
      }
    }
  },
  name: 'DateTimeField example'
}`,...DateTimeFieldBase.parameters?.docs?.source}}},DateTimeFieldDisabled.parameters={...DateTimeFieldDisabled.parameters,docs:{...DateTimeFieldDisabled.parameters?.docs,source:{originalSource:`{
  render: DateTimeFieldDisabledStory,
  parameters: {
    docs: {
      source: {
        code: DateTimeFieldDisabledRaw
      }
    }
  },
  name: 'DateTimeField disabled example'
}`,...DateTimeFieldDisabled.parameters?.docs?.source}}},DateTimeFieldReadOnly.parameters={...DateTimeFieldReadOnly.parameters,docs:{...DateTimeFieldReadOnly.parameters?.docs,source:{originalSource:`{
  render: DateTimeFieldReadOnlyStory,
  parameters: {
    docs: {
      source: {
        code: DateTimeFieldReadOnlyRaw
      }
    }
  },
  name: 'DateTimeField read only example'
}`,...DateTimeFieldReadOnly.parameters?.docs?.source}}},DateTimeFieldStatus.parameters={...DateTimeFieldStatus.parameters,docs:{...DateTimeFieldStatus.parameters?.docs,source:{originalSource:`{
  render: DateTimeFieldStatusStory,
  parameters: {
    docs: {
      source: {
        code: DateTimeFieldStatusRaw
      }
    }
  },
  name: 'DateTimeField status example'
}`,...DateTimeFieldStatus.parameters?.docs?.source}}};let __namedExportsOrder=["DateTimeFieldBase","DateTimeFieldDisabled","DateTimeFieldReadOnly","DateTimeFieldStatus"]},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);
//# sourceMappingURL=components-form-DateTimeField-stories-DateTimeField-stories.db3260fe.iframe.bundle.js.map