"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8132],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,He:()=>SegmentedControlBadge,I3:()=>ButtonBadge,nS:()=>BadgeComponent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  background: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  color: ",";\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  position: relative;\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: ",";\n  height: ",";\n  border-radius: ",";\n  ","\n  ","\n  ","\n  user-select: none;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  &:is(input:checked + div *) {\n    background: ",";\n    color: ",";\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}var background=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"grey":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"dark":return"var(--admiral-color-Neutral_Neutral80, ".concat(theme.color["Neutral/Neutral 80"],")");case"whiteBlue":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"white":case"whiteInactive":case"whiteDisable":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");default:return"var(--admiral-color-Opacity_Neutral8, ".concat(theme.color["Opacity/Neutral 8"],")")}}),color=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":case"warning":case"success":case"error":case"grey":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"dark":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");case"whiteBlue":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"lightInactive":case"whiteInactive":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"whiteDisable":case"lightDisable":return"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),BadgeComponent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(param){return"s"===param.$dimension?"0 5px":"0 6px"},function(param){return"s"===param.$dimension?"16px":"20px"},function(param){return"s"===param.$dimension?"8px":"10px"},function(param){return"s"===param.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Caption/Caption 1"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 2 Long"]},background,color),Badge=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,_param_appearance=_param.appearance,locale=_param.locale,props=_object_without_properties(_param,["children","dimension","appearance","locale"]),theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.d,amountText=(null==locale?void 0:locale.amountAriaLabel)||theme.locales[theme.currentLocale].badge.amountAriaLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BadgeComponent,_object_spread_props(_object_spread({ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"light":_param_appearance,"aria-label":"".concat(amountText," ").concat(children)},props),{children:children}))});function getBadgeAppearance(appearance,disabled){switch(appearance){case"secondary":case"ghost":if(disabled)return"lightDisable";return"info";case"tertiary":if(disabled)return"whiteDisable";return"white";default:if(disabled)return"whiteDisable";return"whiteBlue"}}Badge.displayName="Badge";var ButtonBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]),isVisible="primary"===appearance||"secondary"===appearance||"tertiary"===appearance||"ghost"===appearance,badgeAppearance=getBadgeAppearance(appearance,void 0!==_param_disabled&&_param_disabled);return isVisible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:badgeAppearance})):null},SegmentedBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(Badge)(_templateObject3(),function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral00, ".concat(p.theme.color["Neutral/Neutral 00"],")"):"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")")}),SegmentedControlBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"outlined":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SegmentedBadge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:void 0!==_param_disabled&&_param_disabled?"outlined"==appearance?"lightDisable":"whiteDisable":"outlined"==appearance?"info":"white"}))};try{BadgeComponent.displayName="Badge",BadgeComponent.__docgenInfo={description:"",displayName:"Badge",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenuComponent/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$2:()=>FILTER_TAB_SIZE_S,CC:()=>SLIDE_ARROW_ICON_SIZE,CH:()=>ICON_TAB_HEIGHT,FC:()=>OVERFLOW_MENU_CONTAINER_PADDING_M,Fu:()=>HORIZONTAL_TAB_ICON_SIZE_M,G3:()=>VERTICAL_OVERFLOW_MENU_CONTAINER_PADDING,HS:()=>ADD_TAB_BUTTON_CONTAINER_SIZE_M,Hu:()=>FILTER_TAB_ICON_SIZE_M,Hy:()=>HORIZONTAL_TAB_PADDING_M,M8:()=>HORIZONTAL_TAB_ICON_SIZE_L,NW:()=>FILTER_TAB_SIZE_M,O:()=>HORIZONTAL_TAB_PADDING_L,Ou:()=>ADD_TAB_BUTTON_CONTAINER_SIZE_L,P8:()=>SLIDE_ARROW_BUTTON_PADDING,PU:()=>VERTICAL_TABS_GAP,Rr:()=>VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_L,Sv:()=>FOCUS_VERTICAL_OVERFLOW_MENU_BORDER_OFFSET,TW:()=>FILTER_TAB_PADDING_S,Y5:()=>VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_M,_F:()=>BASE_TAB_HEIGHT_M,dD:()=>SLIDE_ARROW_BUTTON_SIZE,f:()=>VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_L,fL:()=>FILTER_TAB_PADDING_M,fZ:()=>BASE_TAB_HEIGHT_L,gz:()=>FOCUS_BORDER_OFFSET_M,if:()=>VERTICAL_ADD_TAB_BUTTON_CONTAINER_PADDING,kC:()=>OVERFLOW_MENU_CONTAINER_SIZE_L,lv:()=>ADD_TAB_BUTTON_CONTAINER_PADDING_M,mO:()=>VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_M,nS:()=>FOCUS_BORDER_OFFSET_L,oY:()=>SELECTOR_HEIGHT,rV:()=>OVERFLOW_MENU_CONTAINER_SIZE_M,s9:()=>ADD_TAB_BUTTON_CONTAINER_PADDING_L,to:()=>FILTER_TAB_ICON_SIZE_S,y:()=>TAB_ICON_ICON_SIZE,yj:()=>OVERFLOW_MENU_CONTAINER_PADDING_L});var ICON_TAB_HEIGHT=68,TAB_ICON_ICON_SIZE=40,SELECTOR_HEIGHT=2,SLIDE_ARROW_BUTTON_SIZE=32,SLIDE_ARROW_ICON_SIZE=20,SLIDE_ARROW_BUTTON_PADDING=6,BASE_TAB_HEIGHT_L=48,BASE_TAB_HEIGHT_M=40,HORIZONTAL_TAB_ICON_SIZE_M=20,HORIZONTAL_TAB_ICON_SIZE_L=24,HORIZONTAL_TAB_PADDING_M="10px 12px",HORIZONTAL_TAB_PADDING_L="12px 16px",VERTICAL_TABS_GAP=8,ADD_TAB_BUTTON_CONTAINER_SIZE_M=40,ADD_TAB_BUTTON_CONTAINER_SIZE_L=48,ADD_TAB_BUTTON_CONTAINER_PADDING_M=4,ADD_TAB_BUTTON_CONTAINER_PADDING_L=6,VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_M=36,VERTICAL_ADD_TAB_BUTTON_CONTAINER_SIZE_L=40,VERTICAL_ADD_TAB_BUTTON_CONTAINER_PADDING="2px 0",OVERFLOW_MENU_CONTAINER_SIZE_M=40,OVERFLOW_MENU_CONTAINER_SIZE_L=48,OVERFLOW_MENU_CONTAINER_PADDING_L=6,OVERFLOW_MENU_CONTAINER_PADDING_M=4,VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_M=36,VERTICAL_OVERFLOW_MENU_CONTAINER_SIZE_L=40,VERTICAL_OVERFLOW_MENU_CONTAINER_PADDING="2px 0",FOCUS_BORDER_OFFSET_M=8,FOCUS_BORDER_OFFSET_L=10,FOCUS_VERTICAL_OVERFLOW_MENU_BORDER_OFFSET="6",FILTER_TAB_SIZE_M=40,FILTER_TAB_SIZE_S=32,FILTER_TAB_PADDING_M="8px 16px",FILTER_TAB_PADDING_S="6px 12px",FILTER_TAB_ICON_SIZE_M=20,FILTER_TAB_ICON_SIZE_S=16},"./src/components/TabMenuComponent/tabElements/TabBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LV:()=>FilterTabBadge,RQ:()=>CardTabBadge,js:()=>TabBadge,r$:()=>VerticalTabBadge});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Badge/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  margin-left: auto;\n"]);return _templateObject=function _templateObject(){return data},data}var TabBadge=function(_param){var selected,_param_disabled=_param.disabled,_param_selected=_param.selected,props=_object_without_properties(_param,["disabled","selected"]),appearance=(selected=void 0!==_param_selected&&_param_selected,void 0!==_param_disabled&&_param_disabled?"lightDisable":selected?"info":"lightInactive");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Badge__WEBPACK_IMPORTED_MODULE_1__.Ex,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:appearance}))},CardTabBadge=function(_param){var selected,_param_disabled=_param.disabled,_param_selected=_param.selected,props=_object_without_properties(_param,["disabled","selected"]),appearance=(selected=void 0!==_param_selected&&_param_selected,void 0!==_param_disabled&&_param_disabled?"lightDisable":selected?"grey":"lightInactive");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Badge__WEBPACK_IMPORTED_MODULE_1__.Ex,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:appearance}))},VerticalTabBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(TabBadge)(_templateObject());TabBadge.displayName="TabBadge";var FilterTabBadge=function(_param){var selected,_param_disabled=_param.disabled,_param_selected=_param.selected,props=_object_without_properties(_param,["disabled","selected"]),appearance=(selected=void 0!==_param_selected&&_param_selected,void 0!==_param_disabled&&_param_disabled?"lightDisable":selected?"white":"lightInactive");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Badge__WEBPACK_IMPORTED_MODULE_1__.Ex,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:appearance}))};try{TabBadge.displayName="TabBadge",TabBadge.__docgenInfo={description:"",displayName:"TabBadge",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"white"'},{value:'"grey"'},{value:'"dark"'},{value:'"light"'},{value:'"warning"'},{value:'"info"'},{value:'"lightInactive"'},{value:'"lightDisable"'},{value:'"whiteInactive"'},{value:'"whiteDisable"'},{value:'"whiteBlue"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/tabElements/TabBadge.tsx#TabBadge"]={docgenInfo:TabBadge.__docgenInfo,name:"TabBadge",path:"src/components/TabMenuComponent/tabElements/TabBadge.tsx#TabBadge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenuComponent/tabElements/TabIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>TabIcon,F:()=>FilterTabIcon});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TabMenuComponent/constants.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  padding: 0;\n  margin: 0;\n  width: ","px;\n  height: ","px;\n  & svg {\n    display: inline-block;\n    flex: 1 0 auto;\n    & *[fill^='#'] {\n      fill: ",";\n    }\n    width: ","px;\n    height: ","px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: ","px;\n  height: ","px;\n  & svg {\n    width: ","px;\n    height: ","px;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}var TabIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject(),function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Fu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.M8},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Fu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.M8},function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Fu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.M8},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Fu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.M8});TabIcon.displayName="TabIcon";var FilterTabIcon=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(TabIcon)(_templateObject1(),function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Hu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.to},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Hu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.to},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Hu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.to},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Hu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.to});FilterTabIcon.displayName="FilterTabIcon";try{TabIcon.displayName="TabIcon",TabIcon.__docgenInfo={description:"",displayName:"TabIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/tabElements/TabIcon.tsx#TabIcon"]={docgenInfo:TabIcon.__docgenInfo,name:"TabIcon",path:"src/components/TabMenuComponent/tabElements/TabIcon.tsx#TabIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenuComponent/tabElements/TabText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-grow: 4;\n  text-align: left;\n"]);return _templateObject=function _templateObject(){return data},data}__webpack_require__.d(__webpack_exports__,{j:()=>TabText});var TabText=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject());TabText.displayName="TabText";try{TabText.displayName="TabText",TabText.__docgenInfo={description:"",displayName:"TabText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/tabElements/TabText.tsx#TabText"]={docgenInfo:TabText.__docgenInfo,name:"TabText",path:"src/components/TabMenuComponent/tabElements/TabText.tsx#TabText"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenuComponent/tabs/BaseTab.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>BaseTab});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/typography.ts"),_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TabMenuComponent/constants.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  box-sizing: border-box;\n  appearance: none;\n  border: none;\n  position: relative;\n  display: inline-flex;\n  gap: 8px;\n  align-items: center;\n  width: ",";\n  height: ","px;\n  padding: ",";\n  background: transparent;\n  color: ",";\n  ","\n  user-select: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n\n  &:hover:not(:disabled) {\n    background: var(--admiral-color-Opacity_Hover, ",");\n  }\n  &:active:not(:disabled) {\n    background: var(--admiral-color-Opacity_Press, ",");\n  }\n  &:disabled {\n    color: var(--admiral-color-Neutral_Neutral30, ",");\n    cursor: not-allowed;\n  }\n\n  &:focus-visible {\n    border-radius: 0;\n    outline: var(--admiral-color-Primary_Primary60Main, ",") solid 2px;\n    outline-offset: -2px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var BaseTab=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.button(_templateObject(),function(p){return p.$width},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__._F:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.fZ},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.Hy:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_1__.O},function(p){return p.$selected?"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(param){return"m"===param.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_2__.Il["Body/Body 1 Long"]},function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Opacity/Press"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 60 Main"]});BaseTab.displayName="BaseTab";try{BaseTab.displayName="BaseTab",BaseTab.__docgenInfo={description:"",displayName:"BaseTab",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/tabs/BaseTab.tsx#BaseTab"]={docgenInfo:BaseTab.__docgenInfo,name:"BaseTab",path:"src/components/TabMenuComponent/tabs/BaseTab.tsx#BaseTab"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>uid});function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}}}]);