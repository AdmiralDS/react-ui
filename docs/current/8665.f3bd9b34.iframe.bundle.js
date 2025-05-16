"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8665],{"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/NotificationItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Tf:()=>NotificationItemTitle,Yg:()=>NotificationItemContent,rn:()=>NotificationItem,se:()=>StyledNotificationItem,xs:()=>NotificationItemButtonPanel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_admiral_ds_icons_build_service_InfoSolid_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg"),_admiral_ds_icons_build_service_ErrorSolid_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg"),_admiral_ds_icons_build_service_CheckSolid_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg"),_admiral_ds_icons_build_service_CloseSolid_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg"),_src_components_themes__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Typography/typography.ts"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_IconPlacement__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/IconPlacement/index.tsx"),_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  background-color: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  border-color: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border-radius: var(--admiral-border-radius-Medium, `,`);
  padding: 13px 47px 13px 51px;
  `,`
  `,`
  border-width: 1px;
  border-style: solid;
  `,`;
  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  margin-bottom: 4px;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  display: flex;
  margin-top: 4px;
  gap: 16px;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  position: absolute;
  top: 10px;
  right: 12px;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  position: absolute;
  top: 12px;
  left: 16px;
  width: 24px;
  height: 24px;
  & svg {
    width: 24px;
    height: 24px;
    & *[fill^='#'] {
      fill: `,`;
    }
  }
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return _templateObject8=function _templateObject(){return data},data}var getIcon=function(status){switch(status){case"info":return _admiral_ds_icons_build_service_InfoSolid_svg__WEBPACK_IMPORTED_MODULE_2__.h;case"error":return _admiral_ds_icons_build_service_CloseSolid_svg__WEBPACK_IMPORTED_MODULE_5__.h;case"success":return _admiral_ds_icons_build_service_CheckSolid_svg__WEBPACK_IMPORTED_MODULE_4__.h;default:return _admiral_ds_icons_build_service_ErrorSolid_svg__WEBPACK_IMPORTED_MODULE_3__.h}},backGroundColorMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.AH)(_templateObject(),function(param){var theme=param.theme;switch(param.$status){case"warning":return"var(--admiral-color-Warning_Warning10, ".concat(theme.color["Warning/Warning 10"],")");case"error":return"var(--admiral-color-Error_Error10, ".concat(theme.color["Error/Error 10"],")");case"success":return"var(--admiral-color-Success_Success10, ".concat(theme.color["Success/Success 10"],")");default:return"var(--admiral-color-Primary_Primary10, ".concat(theme.color["Primary/Primary 10"],")")}}),borderColorMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.AH)(_templateObject1(),function(param){var theme=param.theme,$status=param.$status;if(param.$hideBorder)return"transparent";switch($status){case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");default:return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}}),NotificationItemWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject2(),function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__.VM)(p.theme.shape)},function(p){return p.$displayStatusIcon?"":"padding-left: 15px;"},function(p){return p.$isClosable?"":"padding-right: 15px;"},borderColorMixin,backGroundColorMixin),Title=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject3(),_src_components_Typography__WEBPACK_IMPORTED_MODULE_8__.Il["Subtitle/Subtitle 3"],function(p){return p.theme.color["Neutral/Neutral 90"]}),CustomBody=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject4(),_src_components_Typography__WEBPACK_IMPORTED_MODULE_8__.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),ButtonPanel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject5()),CloseButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay)(_src_components_IconPlacement__WEBPACK_IMPORTED_MODULE_9__.H)(_templateObject6()),IconWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject7(),function(param){var theme=param.theme;switch(param.$status){case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");default:return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}}),nothing=function(){};NotificationItemWrapper.defaultProps={theme:_src_components_themes__WEBPACK_IMPORTED_MODULE_10__.d};var NotificationItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_status=_param.status,status=void 0===_param_status?"info":_param_status,_param_isBorderHidden=_param.isBorderHidden,_param_displayStatusIcon=_param.displayStatusIcon,displayStatusIcon=void 0!==_param_displayStatusIcon&&_param_displayStatusIcon,_param_isClosable=_param.isClosable,isClosable=void 0!==_param_isClosable&&_param_isClosable,onClose=_param.onClose,_param_closeButtonPropsConfig=_param.closeButtonPropsConfig,children=_param.children,props=_object_without_properties(_param,["status","isBorderHidden","displayStatusIcon","isClosable","onClose","closeButtonPropsConfig","children"]),NotificationIcon=getIcon(status),isAlert="info"!==status,closeButtonProps={dimension:"mSmall",highlightFocus:!1,onClick:onClose};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NotificationItemWrapper,_object_spread_props(_object_spread({},props),{ref:ref,role:isAlert?"alert":"status","aria-live":isAlert?"assertive":"polite",$status:status,$hideBorder:void 0!==_param_isBorderHidden&&_param_isBorderHidden,$displayStatusIcon:displayStatusIcon,$isClosable:isClosable,children:[displayStatusIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconWrapper,{$status:status,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NotificationIcon,{})}),children,isClosable&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloseButton,_object_spread({},closeButtonProps,(void 0===_param_closeButtonPropsConfig?nothing:_param_closeButtonPropsConfig)(closeButtonProps)))]}))}),NotificationItemTitle=function(_param){var children=_param.children,props=_object_without_properties(_param,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title,_object_spread_props(_object_spread({},props),{children:children}))},NotificationItemContent=function(_param){var children=_param.children,props=_object_without_properties(_param,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomBody,_object_spread_props(_object_spread({},props),{children:children}))},NotificationItemButtonPanel=function(_param){var children=_param.children,props=_object_without_properties(_param,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonPanel,_object_spread_props(_object_spread({},props),{children:children}))};NotificationItem.displayName="NotificationItem";var StyledNotificationItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay)(NotificationItem)(_templateObject8(),function(p){return(0,_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_11__.C)(p.theme.shadow["Shadow 08"])});try{NotificationItem.displayName="NotificationItem",NotificationItem.__docgenInfo={description:"",displayName:"NotificationItem",props:{status:{defaultValue:{value:"info"},description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},isBorderHidden:{defaultValue:{value:"false"},description:"Скрыть обводку notification",name:"isBorderHidden",required:!1,type:{name:"boolean"}},isClosable:{defaultValue:{value:"false"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"false"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}},closeButtonPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для кнопки закрытия уведомления. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, never>) => Partial<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NotificationItem/index.tsx#NotificationItem"]={docgenInfo:NotificationItem.__docgenInfo,name:"NotificationItem",path:"src/components/NotificationItem/index.tsx#NotificationItem"})}catch(__react_docgen_typescript_loader_error){}}}]);