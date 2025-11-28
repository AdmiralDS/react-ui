"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1387],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 1 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMinusCircleOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgMinusCircleOutline=function SvgMinusCircleOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-7.7a7.7 7.7 0 1 0 0 15.4 7.7 7.7 0 0 0 0-15.4m-4.35 7.05a.65.65 0 1 0 0 1.3h8.7a.65.65 0 1 0 0-1.3z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.226 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.37 5.55-6.41a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.9c-.28.31-.76.31-1.04 0L5.396 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/MoreHorizontalOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMoreHorizontalOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgMoreHorizontalOutline=function SvgMoreHorizontalOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/MoreVerticalOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMoreVerticalOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgMoreVerticalOutline=function SvgMoreVerticalOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M10 19a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0-7a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0-7a2 2 0 1 1 4 0 2 2 0 0 1-4 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.996 16.211c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.494-3.146-3.49-3.018a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.98 3.458c.31.28.31.76 0 1.04l-3.984 3.586c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,He:()=>SegmentedControlBadge,I3:()=>ButtonBadge,nS:()=>BadgeComponent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  background: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: `,`;
  height: `,`;
  border-radius: `,`;
  `,`
  `,`
  `,`
  user-select: none;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:is(input:checked + div *) {
    background: `,`;
    color: `,`;
  }
`]);return _templateObject3=function _templateObject(){return data},data}var background=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"grey":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"dark":return"var(--admiral-color-Neutral_Neutral80, ".concat(theme.color["Neutral/Neutral 80"],")");case"whiteBlue":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"white":case"whiteInactive":case"whiteDisable":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");default:return"var(--admiral-color-Opacity_Neutral8, ".concat(theme.color["Opacity/Neutral 8"],")")}}),color=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":case"warning":case"success":case"error":case"grey":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"dark":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");case"whiteBlue":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"lightInactive":case"whiteInactive":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"whiteDisable":case"lightDisable":return"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),BadgeComponent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(param){return"s"===param.$dimension?"0 5px":"0 6px"},function(param){return"s"===param.$dimension?"16px":"20px"},function(param){return"s"===param.$dimension?"8px":"10px"},function(param){return"s"===param.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Caption/Caption 1"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]},background,color),Badge=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,_param_appearance=_param.appearance,locale=_param.locale,props=_object_without_properties(_param,["children","dimension","appearance","locale"]),theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.d,amountText=(null==locale?void 0:locale.amountAriaLabel)||theme.locales[theme.currentLocale].badge.amountAriaLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BadgeComponent,_object_spread_props(_object_spread({ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"light":_param_appearance,"aria-label":"".concat(amountText," ").concat(children)},props),{children:children}))});function getBadgeAppearance(appearance,disabled){switch(appearance){case"secondary":case"ghost":if(disabled)return"lightDisable";return"info";case"tertiary":if(disabled)return"whiteDisable";return"white";default:if(disabled)return"whiteDisable";return"whiteBlue"}}Badge.displayName="Badge";var ButtonBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]),isVisible="primary"===appearance||"secondary"===appearance||"tertiary"===appearance||"ghost"===appearance,badgeAppearance=getBadgeAppearance(appearance,void 0!==_param_disabled&&_param_disabled);return isVisible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:badgeAppearance})):null},SegmentedBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(Badge)(_templateObject3(),function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral00, ".concat(p.theme.color["Neutral/Neutral 00"],")"):"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")")}),SegmentedControlBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"outlined":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SegmentedBadge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:void 0!==_param_disabled&&_param_disabled?"outlined"==appearance?"lightDisable":"whiteDisable":"outlined"==appearance?"info":"white"}))};try{BadgeComponent.displayName="BadgeComponent",BadgeComponent.__docgenInfo={description:"",displayName:"BadgeComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#BadgeComponent"]={docgenInfo:BadgeComponent.__docgenInfo,name:"BadgeComponent",path:"src/components/Badge/index.tsx#BadgeComponent"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:{value:"outlined"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"grey"'},{value:'"white"'},{value:'"dark"'},{value:'"light"'},{value:'"warning"'},{value:'"info"'},{value:'"lightInactive"'},{value:'"lightDisable"'},{value:'"whiteInactive"'},{value:'"whiteDisable"'},{value:'"whiteBlue"'}]}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{ButtonBadge.displayName="ButtonBadge",ButtonBadge.__docgenInfo={description:"",displayName:"ButtonBadge",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}},appearance:{defaultValue:{value:"outlined"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"white"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#ButtonBadge"]={docgenInfo:ButtonBadge.__docgenInfo,name:"ButtonBadge",path:"src/components/Badge/index.tsx#ButtonBadge"})}catch(__react_docgen_typescript_loader_error){}try{SegmentedControlBadge.displayName="SegmentedControlBadge",SegmentedControlBadge.__docgenInfo={description:"",displayName:"SegmentedControlBadge",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}},appearance:{defaultValue:{value:"outlined"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#SegmentedControlBadge"]={docgenInfo:SegmentedControlBadge.__docgenInfo,name:"SegmentedControlBadge",path:"src/components/Badge/index.tsx#SegmentedControlBadge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenu/stories/TabMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BaseExample:()=>BaseExample,DisabledExample:()=>DisabledExample,DynamicAddExample:()=>DynamicAddExample,OverflowMenuExample:()=>OverflowMenuExample,UnderlineExample:()=>UnderlineExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TabMenu_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),Badge=__webpack_require__("./src/components/Badge/index.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),OverflowMenu=__webpack_require__("./src/components/OverflowMenu/index.tsx"),OVERFLOW_MENU_CONTAINER_SIZE_M="40px",OVERFLOW_MENU_CONTAINER_SIZE_L="48px";function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
  margin-right: 8px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  margin-left: 8px;
  display: flex;
  align-items: center;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: `,`;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -`,` 0 0
    `,`;
  overflow: `,`;

  height: `,`px;
  max-height: `,`px;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  height: `,`;
  transition: all 0.2s ease-out;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: `,`;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: `,`px;
  padding: 0;
  background: transparent;
  appearance: none;
  border: none;
  color: `,`;
  `,`
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus:not(:active) {
    &:before {
      position: absolute;
      content: '';
      border: `,` solid
        var(--admiral-color-Primary_Primary60Main, `,`);
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &:focus,
  & > `,` {
    outline: none;
  }

  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
    width: `,`px;
    height: `,`px;
    margin-right: `,`;
  }
  & [data-badge] {
    margin-left: `,`;
  }

  &:hover:not(:disabled) {
    background: var(--admiral-color-Opacity_Hover, `,`);
  }
  &:active:not(:disabled) {
    background: var(--admiral-color-Opacity_Press, `,`);
  }
  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  display: flex;
  align-items: center;

  margin-left: `,`px;
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  visibility: `,`;
  `,`
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  margin: `,`;
  &:focus-visible {
    outline-offset: `,`;
    border-radius: 0;
  }

  & svg {
    & *[fill^='#'] {
      fill: `,`;
    }
  }
`]);return _templateObject10=function _templateObject(){return data},data}var IconWrapper=styled_components_browser_esm.Ay.div(_templateObject(),function(param){var $dimension=param.$dimension;return`
    width: `.concat("l"===$dimension?24:20,`px;
    height: `).concat("l"===$dimension?24:20,"px;")}),BadgeWrapper=styled_components_browser_esm.Ay.div(_templateObject1()),MenuItemWrapper=styled_components_browser_esm.Ay.div(_templateObject2()),Wrapper=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){return param.$mobile?"nowrap":"wrap"},"2px",function(p){return p.$underline?"var(--admiral-color-Neutral_Neutral20, ".concat(p.theme.color["Neutral/Neutral 20"],")"):"transparent"},function(param){return param.$mobile?"scroll":"hidden"},function(param){return"l"===param.$dimension?48:40},function(param){return"l"===param.$dimension?48:40}),Underline=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return p.theme.color["Primary/Primary 60 Main"]},"2px"),TabContent=styled_components_browser_esm.Ay.div(_templateObject5()),TabContentWrapper=styled_components_browser_esm.Ay.span(_templateObject6(),function(param){return"l"===param.$dimension?"0 16px":"0 12px"}),Tab=styled_components_browser_esm.Ay.button(_templateObject7(),function(param){return"m"===param.$dimension?40:48},function(p){return p.$selected?"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(param){return"m"===param.$dimension?typography.Il["Body/Body 2 Long"]:typography.Il["Body/Body 1 Long"]},"2px",function(p){return p.theme.color["Primary/Primary 60 Main"]},TabContentWrapper,function(p){return p.theme.color["Neutral/Neutral 50"]},function(param){return"m"===param.$dimension?20:24},function(param){return"m"===param.$dimension?20:24},"8px","8px",function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Opacity/Press"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),TabWrapper=styled_components_browser_esm.Ay.div(_templateObject8(),function(param){var $needsOffset=param.$needsOffset,$dimension=param.$dimension;return $needsOffset?"l"===$dimension?-48:-40:0}),OverflowMenuContainer=styled_components_browser_esm.Ay.div(_templateObject9(),function(param){return param.$isHidden?"hidden":"visible"},function(param){var $dimension=param.$dimension;return`
    width: `.concat("l"===$dimension?OVERFLOW_MENU_CONTAINER_SIZE_L:OVERFLOW_MENU_CONTAINER_SIZE_M,`;
    height: `).concat("l"===$dimension?OVERFLOW_MENU_CONTAINER_SIZE_L:OVERFLOW_MENU_CONTAINER_SIZE_M,`;
  `)}),StyledOverflowMenu=(0,styled_components_browser_esm.Ay)(OverflowMenu.o)(_templateObject10(),function(p){return"l"===p.dimension?"12px":"10px"},function(p){return"l"===p.dimension?"10px":"8px"},function(param){var theme=param.theme;return param.$isActive?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")}),debounce=__webpack_require__("./src/components/common/utils/debounce.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var TabMenu=function(_param){var tabs=_param.tabs,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_underline=_param.underline,_param_mobile=_param.mobile,mobile=void 0!==_param_mobile&&_param_mobile,_param_alignSelf=_param.alignSelf,alignSelf=void 0===_param_alignSelf?"flex-end":_param_alignSelf,activeTab=_param.activeTab,onChange=_param.onChange,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,props=_object_without_properties(_param,["tabs","dimension","underline","mobile","alignSelf","activeTab","onChange","dropContainerCssMixin","dropContainerClassName","dropContainerStyle"]),_useState=_sliced_to_array((0,react.useState)(!1),2),openedMenu=_useState[0],setOpenedMenu=_useState[1],_useState1=_sliced_to_array((0,react.useState)({}),2),visibilityMap=_useState1[0],setVisibilityMap=_useState1[1];(0,react.useEffect)(function(){setVisibilityMap(tabs.reduce(function(initialMap,_,index){return initialMap[index]=!0,initialMap},{}))},[tabs]);var tabsWithRef=(0,react.useMemo)(function(){return tabs.map(function(tab){return _object_spread_props(_object_spread({},tab),{ref:(0,react.createRef)()})})},[tabs]),overflowMenuRefs=(0,react.useMemo)(function(){return tabs.slice(0,tabs.length-1).map(function(_,index){return{ref:(0,react.createRef)(),isVisible:visibilityMap[index]&&!visibilityMap[index+1]}})},[tabs,visibilityMap]),currentOverflowMenuRef=(0,react.useMemo)(function(){var visibleMenu=overflowMenuRefs.find(function(item){return item.isVisible});return visibleMenu?visibleMenu.ref:null},[overflowMenuRefs,visibilityMap]),visibleRefsMap=(0,react.useMemo)(function(){var refsMap=[];return mobile?refsMap=tabsWithRef.map(function(item){return item.ref}):(tabsWithRef.forEach(function(item,index){visibilityMap[index]&&refsMap.push(item.ref)}),null!==currentOverflowMenuRef&&refsMap.push(currentOverflowMenuRef)),refsMap},[visibilityMap,tabsWithRef,currentOverflowMenuRef,overflowMenuRefs,mobile]),tablistRef=(0,react.useRef)(null),underlineRef=(0,react.useRef)(null),activeTabIsVisible=(0,react.useMemo)(function(){return visibilityMap[tabsWithRef.findIndex(function(item){return item.id===activeTab})]},[tabsWithRef,activeTab,visibilityMap]),modelAllTabs=(0,react.useMemo)(function(){return tabsWithRef.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({dimension:dimension},options),{key:item.id}),(0,jsx_runtime.jsxs)(MenuItemWrapper,{children:[item.icon&&(0,jsx_runtime.jsx)(IconWrapper,{$dimension:dimension,children:item.icon}),item.content,void 0!==item.badge&&(0,jsx_runtime.jsx)(BadgeWrapper,{children:(0,jsx_runtime.jsx)(Badge.Ex,{"data-badge":!0,dimension:"s",appearance:item.id===activeTab?"info":item.disabled?"lightDisable":"lightInactive",children:item.badge})})]}))},disabled:item.disabled}})},[dimension,tabs,tabsWithRef,activeTab]),containsActiveTab=function(items){return -1!=items.findIndex(function(item){return item.id===activeTab})},getNextElement=function(target){var currentIndex=visibleRefsMap.findIndex(function(item){return target===item.current});return currentIndex<visibleRefsMap.length-1?currentIndex++:currentIndex=0,visibleRefsMap[currentIndex].current},getNextFocus=function(target){for(var nextElement=getNextElement(target);null==nextElement?void 0:nextElement.disabled;)nextElement=getNextElement(nextElement);return nextElement},getPreviousElement=function(target){var currentIndex=visibleRefsMap.findIndex(function(item){return target===item.current});return 0===currentIndex?currentIndex=visibleRefsMap.length-1:currentIndex--,visibleRefsMap[currentIndex].current},getPreviousFocus=function(target){for(var previousElement=getPreviousElement(target);null==previousElement?void 0:previousElement.disabled;)previousElement=getPreviousElement(previousElement);return previousElement},styleUnderline=function(left,width){underlineRef.current&&(underlineRef.current.style.left=left+"px",underlineRef.current.style.width=width+"px",width?underlineRef.current.style.display="flex":underlineRef.current.style.display="none")};(0,react.useLayoutEffect)(function(){if(null==(_tablistRef_current=tablistRef.current)?void 0:_tablistRef_current.firstElementChild){var _tablistRef_current,_tablistRef_current1,resizeObserver=new ResizeObserver((0,debounce.s)(function setUnderline(){var _tabsWithRef_filter_,_tabsWithRef_filter,_underlineRef_current,_underlineRef_current1,activeTabRef=null==(_tabsWithRef_filter=tabsWithRef.filter(function(tab){return tab.id===activeTab}))||null==(_tabsWithRef_filter_=_tabsWithRef_filter[0])?void 0:_tabsWithRef_filter_.ref.current,left=parseFloat((null==(_underlineRef_current=underlineRef.current)?void 0:_underlineRef_current.style.left)||"0"),underlineWidth=parseFloat((null==(_underlineRef_current1=underlineRef.current)?void 0:_underlineRef_current1.style.width)||"0");if(activeTabRef&&tablistRef.current){var activeTabWidth=activeTabRef.getBoundingClientRect().width,activeTabLeft=activeTabRef.getBoundingClientRect().left-tablistRef.current.getBoundingClientRect().left+tablistRef.current.scrollLeft;(activeTabLeft!==left||activeTabWidth!==underlineWidth)&&styleUnderline(activeTabLeft,activeTabWidth)}activeTabRef&&(mobile||activeTabIsVisible)||styleUnderline(0,0)},100));return resizeObserver.observe(null==(_tablistRef_current1=tablistRef.current)?void 0:_tablistRef_current1.firstElementChild),function(){resizeObserver.disconnect()}}},[tabsWithRef,activeTab,dimension,visibilityMap]),(0,react.useLayoutEffect)(function(){var observer=new IntersectionObserver(function(entries){var updatedEntries={};entries.forEach(function(entry){var targetNumber=entry.target.dataset.number;void 0!==targetNumber&&(updatedEntries[targetNumber]=entry.isIntersecting&&entry.intersectionRatio>.99)}),setVisibilityMap(function(prev){return _object_spread({},prev,updatedEntries)})},{root:tablistRef.current,threshold:[0,1]});return tablistRef.current&&!mobile&&Array.from(tablistRef.current.children).forEach(function(item){observer.observe(item)}),function(){return observer.disconnect()}},[tabsWithRef,mobile,visibilityMap]);var handleTabClick=function(event){mobile&&event.currentTarget.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),onChange(event.currentTarget.id),event.currentTarget.blur()},handleTabKeyUp=function(event){var code=keyboardKey.r.getCode(event);(code===keyboardKey.r.Enter||code===keyboardKey.r[" "])&&onChange(event.currentTarget.id)},getTabIndex=function(id){return tabsWithRef.findIndex(function(item){return item.id===id})},renderOverflowMenu=function(id){var tabNumber=getTabIndex(id),tabsForMenu=modelAllTabs.slice(tabNumber+1),overflowMenuHidden=tabNumber===tabsWithRef.length-1||!(visibilityMap[tabNumber]&&!visibilityMap[tabNumber+1]),tabIndex=!overflowMenuHidden&&(null==tabsForMenu?void 0:tabsForMenu.filter(function(item){return item.id===activeTab}).length)?0:-1,overflowRef=overflowMenuRefs[tabNumber]?overflowMenuRefs[tabNumber].ref:null;return(0,jsx_runtime.jsx)(OverflowMenuContainer,{$dimension:dimension,$isHidden:overflowMenuHidden,children:(0,jsx_runtime.jsx)(StyledOverflowMenu,{ref:overflowRef,onOpen:function(){return setOpenedMenu(!0)},onClose:function(){return setOpenedMenu(!1)},alignSelf:alignSelf,items:overflowMenuHidden?[]:tabsForMenu,selected:containsActiveTab(tabsForMenu)?activeTab:void 0,dimension:dimension,$isActive:containsActiveTab(tabsForMenu),disabled:tabsForMenu.every(function(tab){return tab.disabled}),onChange:function(id){onChange(id),styleUnderline(0,0)},tabIndex:tabIndex,dropContainerCssMixin:dropContainerCssMixin,dropContainerClassName:dropContainerClassName,dropContainerStyle:dropContainerStyle})})},renderTab=function(item){var disabled=item.disabled,content=item.content,id=item.id,icon=item.icon,badge=item.badge,ref=item.ref,props=_object_without_properties(item,["disabled","content","id","icon","badge","ref"]);return(0,jsx_runtime.jsx)(Tab,_object_spread_props(_object_spread({ref:ref,id:id,role:"tab",type:"button","aria-selected":id===activeTab,$selected:id===activeTab,tabIndex:id===activeTab?0:-1,$dimension:dimension,disabled:disabled,onClick:handleTabClick,onKeyUp:handleTabKeyUp},props),{children:(0,jsx_runtime.jsxs)(TabContentWrapper,{$dimension:dimension,tabIndex:-1,children:[icon&&icon,(0,jsx_runtime.jsx)(TabContent,{children:content}),void 0!==badge&&(0,jsx_runtime.jsx)(Badge.Ex,{"data-badge":!0,dimension:"s",appearance:id===activeTab?"info":disabled?"lightDisable":"lightInactive",children:badge})]})}),id)};return(0,jsx_runtime.jsxs)(Wrapper,_object_spread_props(_object_spread({role:"tablist",ref:tablistRef,$underline:void 0!==_param_underline&&_param_underline,$mobile:mobile,$dimension:dimension,onKeyDown:function(event){var newFocusTarget,target=event.target;switch(keyboardKey.r.getCode(event)){case keyboardKey.r.Tab:activeTabIsVisible||(newFocusTarget=currentOverflowMenuRef,event.preventDefault());break;case keyboardKey.r.ArrowLeft:newFocusTarget=getPreviousFocus(target),event.preventDefault();break;case keyboardKey.r.ArrowRight:newFocusTarget=getNextFocus(target),event.preventDefault()}!openedMenu&&newFocusTarget&&newFocusTarget.focus()}},props),{children:[tabsWithRef.map(function(item,index){var id=item.id,tabNumber=getTabIndex(id),needsOffset=!mobile&&0!==tabNumber&&visibilityMap[tabNumber-1];return(0,jsx_runtime.jsxs)(TabWrapper,{"data-number":index,$needsOffset:needsOffset,$dimension:dimension,children:[renderTab(item),mobile||tabNumber===tabsWithRef.length-1?null:renderOverflowMenu(id)]},id)}),(0,jsx_runtime.jsx)(Underline,{ref:underlineRef,"aria-hidden":!0})]}))};TabMenu.displayName="TabMenu";try{TabMenu.displayName="TabMenu",TabMenu.__docgenInfo={description:"",displayName:"TabMenu",props:{tabs:{defaultValue:null,description:"Список вкладок",name:"tabs",required:!0,type:{name:"TabProps[]"}},activeTab:{defaultValue:null,description:"Id активной вкладки",name:"activeTab",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Колбек на изменение активной вкладки",name:"onChange",required:!0,type:{name:"(id: string) => void"}},dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},underline:{defaultValue:{value:"false"},description:"Отображение серой полосы снизу",name:"underline",required:!1,type:{name:"boolean"}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:{value:"flex-end"},description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenu/index.tsx#TabMenu"]={docgenInfo:TabMenu.__docgenInfo,name:"TabMenu",path:"src/components/TabMenu/index.tsx#TabMenu"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),MinusCircleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function TabMenuBase_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TabMenuBase_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TabMenuBase_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TabMenuBase_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TabMenuBase_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TabMenuBase_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TabMenuBase_template_define_property(target,key,source[key])})}return target}function TabMenuBase_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TabMenuBase_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TabMenuBase_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TabMenuBase_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TabMenuBase_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TabMenuBase_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TabMenuBase_template_sliced_to_array(arr,i){return TabMenuBase_template_array_with_holes(arr)||TabMenuBase_template_iterable_to_array_limit(arr,i)||TabMenuBase_template_unsupported_iterable_to_array(arr,i)||TabMenuBase_template_non_iterable_rest()}function TabMenuBase_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TabMenuBase_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TabMenuBase_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TabMenuBase_template_array_like_to_array(o,minLen)}}function TabMenuBase_template_templateObject(){var data=TabMenuBase_template_tagged_template_literal([`
  width: 100%;
  height: 200px;
`]);return TabMenuBase_template_templateObject=function _templateObject(){return data},data}var tabs=[{id:"1",content:"Option 1",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{id:"2",content:"Option 22"},{id:"3",content:"Option 333",badge:5},{id:"4",content:"Option 4444"},{id:"5",content:"Option 55555",badge:4,icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{id:"6",content:"Option 666666"},{id:"7",content:"Option 7777777"},{id:"8",content:"Option 88888888"},{id:"9",content:"Option 999999999"}],onChangeTab=function(id){console.log("selected: ".concat(id))},TabMenuBase_template_Wrapper=styled_components_browser_esm.Ay.div(TabMenuBase_template_templateObject()),TabMenuBaseTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TabMenuBase_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=TabMenuBase_template_sliced_to_array(react.useState("3"),2),selected=_React_useState[0],setSelected=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TabMenuBase_template_Wrapper,{children:(0,jsx_runtime.jsx)(TabMenu,TabMenuBase_template_object_spread_props(TabMenuBase_template_object_spread({},props),{activeTab:selected,onChange:function(id){onChangeTab(id),setSelected(id)},tabs:tabs,dropContainerClassName:"dropContainerClass"}))})})};try{TabMenuBaseTemplate.displayName="TabMenuBaseTemplate",TabMenuBaseTemplate.__docgenInfo={description:"",displayName:"TabMenuBaseTemplate",props:{tabs:{defaultValue:null,description:"Список вкладок",name:"tabs",required:!0,type:{name:"TabProps[]"}},activeTab:{defaultValue:null,description:"Id активной вкладки",name:"activeTab",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Колбек на изменение активной вкладки",name:"onChange",required:!0,type:{name:"(id: string) => void"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},underline:{defaultValue:null,description:"Отображение серой полосы снизу",name:"underline",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenu/stories/TabMenuBase.template.tsx#TabMenuBaseTemplate"]={docgenInfo:TabMenuBaseTemplate.__docgenInfo,name:"TabMenuBaseTemplate",path:"src/components/TabMenu/stories/TabMenuBase.template.tsx#TabMenuBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function TabMenuUnderline_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TabMenuUnderline_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TabMenuUnderline_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TabMenuUnderline_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TabMenuUnderline_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TabMenuUnderline_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TabMenuUnderline_template_define_property(target,key,source[key])})}return target}function TabMenuUnderline_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TabMenuUnderline_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TabMenuUnderline_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TabMenuUnderline_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TabMenuUnderline_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TabMenuUnderline_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TabMenuUnderline_template_sliced_to_array(arr,i){return TabMenuUnderline_template_array_with_holes(arr)||TabMenuUnderline_template_iterable_to_array_limit(arr,i)||TabMenuUnderline_template_unsupported_iterable_to_array(arr,i)||TabMenuUnderline_template_non_iterable_rest()}function TabMenuUnderline_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TabMenuUnderline_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TabMenuUnderline_template_array_like_to_array(o,minLen)}}var TabMenuUnderline_template_tabs=[{id:"1",content:"Option 1",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{id:"2",content:"Option 22"},{id:"3",content:"Option 333",badge:5},{id:"4",content:"Option 4444"},{id:"5",content:"Option 55555",badge:4,icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{id:"6",content:"Option 666666"},{id:"7",content:"Option 7777777"},{id:"8",content:"Option 88888888"},{id:"9",content:"Option 999999999"}],TabMenuUnderlineTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TabMenuUnderline_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=TabMenuUnderline_template_sliced_to_array(react.useState("3"),2),selected=_React_useState[0],setSelected=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TabMenu,TabMenuUnderline_template_object_spread_props(TabMenuUnderline_template_object_spread({},props),{activeTab:selected,onChange:function(id){setSelected(id)},tabs:TabMenuUnderline_template_tabs,underline:!0}))})};try{TabMenuUnderlineTemplate.displayName="TabMenuUnderlineTemplate",TabMenuUnderlineTemplate.__docgenInfo={description:"",displayName:"TabMenuUnderlineTemplate",props:{tabs:{defaultValue:null,description:"Список вкладок",name:"tabs",required:!0,type:{name:"TabProps[]"}},activeTab:{defaultValue:null,description:"Id активной вкладки",name:"activeTab",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Колбек на изменение активной вкладки",name:"onChange",required:!0,type:{name:"(id: string) => void"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},underline:{defaultValue:null,description:"Отображение серой полосы снизу",name:"underline",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenu/stories/TabMenuUnderline.template.tsx#TabMenuUnderlineTemplate"]={docgenInfo:TabMenuUnderlineTemplate.__docgenInfo,name:"TabMenuUnderlineTemplate",path:"src/components/TabMenu/stories/TabMenuUnderline.template.tsx#TabMenuUnderlineTemplate"})}catch(__react_docgen_typescript_loader_error){}function TabMenuDisabled_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TabMenuDisabled_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TabMenuDisabled_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TabMenuDisabled_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TabMenuDisabled_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TabMenuDisabled_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TabMenuDisabled_template_define_property(target,key,source[key])})}return target}function TabMenuDisabled_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TabMenuDisabled_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TabMenuDisabled_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TabMenuDisabled_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TabMenuDisabled_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TabMenuDisabled_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TabMenuDisabled_template_sliced_to_array(arr,i){return TabMenuDisabled_template_array_with_holes(arr)||TabMenuDisabled_template_iterable_to_array_limit(arr,i)||TabMenuDisabled_template_unsupported_iterable_to_array(arr,i)||TabMenuDisabled_template_non_iterable_rest()}function TabMenuDisabled_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TabMenuDisabled_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TabMenuDisabled_template_array_like_to_array(o,minLen)}}var disabledTabs=[{id:"1",content:"Option 1"},{id:"2",content:"Option 22"},{id:"3",content:"Option 333",disabled:!0},{id:"4",content:"Option 4444"},{id:"5",content:"Option 55555",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{}),disabled:!0},{id:"6",content:"Option 666666"},{id:"7",content:"Option 77",badge:5,disabled:!0}],TabMenuDisabledTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TabMenuDisabled_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=TabMenuDisabled_template_sliced_to_array(react.useState("2"),2),selected=_React_useState[0],setSelected=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TabMenu,TabMenuDisabled_template_object_spread_props(TabMenuDisabled_template_object_spread({},props),{activeTab:selected,onChange:function(id){setSelected(id)},tabs:disabledTabs}))})};try{TabMenuDisabledTemplate.displayName="TabMenuDisabledTemplate",TabMenuDisabledTemplate.__docgenInfo={description:"",displayName:"TabMenuDisabledTemplate",props:{tabs:{defaultValue:null,description:"Список вкладок",name:"tabs",required:!0,type:{name:"TabProps[]"}},activeTab:{defaultValue:null,description:"Id активной вкладки",name:"activeTab",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Колбек на изменение активной вкладки",name:"onChange",required:!0,type:{name:"(id: string) => void"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},underline:{defaultValue:null,description:"Отображение серой полосы снизу",name:"underline",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenu/stories/TabMenuDisabled.template.tsx#TabMenuDisabledTemplate"]={docgenInfo:TabMenuDisabledTemplate.__docgenInfo,name:"TabMenuDisabledTemplate",path:"src/components/TabMenu/stories/TabMenuDisabled.template.tsx#TabMenuDisabledTemplate"})}catch(__react_docgen_typescript_loader_error){}function TabMenuOverflow_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TabMenuOverflow_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TabMenuOverflow_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TabMenuOverflow_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TabMenuOverflow_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TabMenuOverflow_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TabMenuOverflow_template_define_property(target,key,source[key])})}return target}function TabMenuOverflow_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TabMenuOverflow_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TabMenuOverflow_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TabMenuOverflow_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TabMenuOverflow_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TabMenuOverflow_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TabMenuOverflow_template_sliced_to_array(arr,i){return TabMenuOverflow_template_array_with_holes(arr)||TabMenuOverflow_template_iterable_to_array_limit(arr,i)||TabMenuOverflow_template_unsupported_iterable_to_array(arr,i)||TabMenuOverflow_template_non_iterable_rest()}function TabMenuOverflow_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TabMenuOverflow_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TabMenuOverflow_template_array_like_to_array(o,minLen)}}var overflowTabs=[{id:"1",content:"Option 1",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{id:"2",content:"Option 22"},{id:"3",content:"Option 333",badge:5},{id:"4",content:"Option 4444"},{id:"5",content:"Option 55555",badge:4,icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{id:"6",content:"Option 666666"},{id:"7",content:"Option 7777777"},{id:"8",content:"Option 88888888"},{id:"9",content:"Option 999999999"}],TabMenuOverflowTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TabMenuOverflow_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=TabMenuOverflow_template_sliced_to_array(react.useState("3"),2),selected=_React_useState[0],setSelected=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",width:"500px"},children:(0,jsx_runtime.jsx)(TabMenu,TabMenuOverflow_template_object_spread_props(TabMenuOverflow_template_object_spread({},props),{activeTab:selected,onChange:function(id){setSelected(id)},tabs:overflowTabs}))})})};try{TabMenuOverflowTemplate.displayName="TabMenuOverflowTemplate",TabMenuOverflowTemplate.__docgenInfo={description:"",displayName:"TabMenuOverflowTemplate",props:{tabs:{defaultValue:null,description:"Список вкладок",name:"tabs",required:!0,type:{name:"TabProps[]"}},activeTab:{defaultValue:null,description:"Id активной вкладки",name:"activeTab",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Колбек на изменение активной вкладки",name:"onChange",required:!0,type:{name:"(id: string) => void"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},underline:{defaultValue:null,description:"Отображение серой полосы снизу",name:"underline",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenu/stories/TabMenuOverflow.template.tsx#TabMenuOverflowTemplate"]={docgenInfo:TabMenuOverflowTemplate.__docgenInfo,name:"TabMenuOverflowTemplate",path:"src/components/TabMenu/stories/TabMenuOverflow.template.tsx#TabMenuOverflowTemplate"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.tsx");function TabMenuDynamicAdd_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TabMenuDynamicAdd_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return TabMenuDynamicAdd_template_array_like_to_array(arr)}function TabMenuDynamicAdd_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function TabMenuDynamicAdd_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TabMenuDynamicAdd_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TabMenuDynamicAdd_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TabMenuDynamicAdd_template_define_property(target,key,source[key])})}return target}function TabMenuDynamicAdd_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TabMenuDynamicAdd_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TabMenuDynamicAdd_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TabMenuDynamicAdd_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TabMenuDynamicAdd_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TabMenuDynamicAdd_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TabMenuDynamicAdd_template_sliced_to_array(arr,i){return TabMenuDynamicAdd_template_array_with_holes(arr)||TabMenuDynamicAdd_template_iterable_to_array_limit(arr,i)||TabMenuDynamicAdd_template_unsupported_iterable_to_array(arr,i)||TabMenuDynamicAdd_template_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||TabMenuDynamicAdd_template_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function TabMenuDynamicAdd_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TabMenuDynamicAdd_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TabMenuDynamicAdd_template_array_like_to_array(o,minLen)}}var TabMenuDynamicAddTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TabMenuDynamicAdd_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=TabMenuDynamicAdd_template_sliced_to_array(react.useState([{id:"1",content:"Вкладка 1"},{id:"2",content:"Вкладка 2"},{id:"3",content:"Вкладка 3"}]),2),tabs=_React_useState[0],setTabs=_React_useState[1],_React_useState1=TabMenuDynamicAdd_template_sliced_to_array(react.useState("1"),2),activeTab=_React_useState1[0],setActiveTav=_React_useState1[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(TabMenu,TabMenuDynamicAdd_template_object_spread_props(TabMenuDynamicAdd_template_object_spread({},props),{activeTab:activeTab,onChange:function(id){return setActiveTav(id)},tabs:tabs,underline:!0})),(0,jsx_runtime.jsx)("div",{style:{height:"20px"}}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setTabs(function(prev){var id=(tabs.length+1).toString();return _to_consumable_array(prev).concat([{id:id,content:"Вкладка ".concat(id)}])})},children:"Добавить вкладку"})]})})};try{TabMenuDynamicAddTemplate.displayName="TabMenuDynamicAddTemplate",TabMenuDynamicAddTemplate.__docgenInfo={description:"",displayName:"TabMenuDynamicAddTemplate",props:{tabs:{defaultValue:null,description:"Список вкладок",name:"tabs",required:!0,type:{name:"TabProps[]"}},activeTab:{defaultValue:null,description:"Id активной вкладки",name:"activeTab",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Колбек на изменение активной вкладки",name:"onChange",required:!0,type:{name:"(id: string) => void"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},underline:{defaultValue:null,description:"Отображение серой полосы снизу",name:"underline",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenu/stories/TabMenuDynamicAdd.template.tsx#TabMenuDynamicAddTemplate"]={docgenInfo:TabMenuDynamicAddTemplate.__docgenInfo,name:"TabMenuDynamicAddTemplate",path:"src/components/TabMenu/stories/TabMenuDynamicAdd.template.tsx#TabMenuDynamicAddTemplate"})}catch(__react_docgen_typescript_loader_error){}let TabMenuBase_templateraw_namespaceObject=`import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import type { TabMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const tabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

const onChangeTab = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const Wrapper = styled.div\`
  width: 100%;
  height: 200px;
\`;

export const TabMenuBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string>('3');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TabMenu
          {...props}
          activeTab={selected}
          onChange={(id) => {
            onChangeTab(id);
            setSelected(id);
          }}
          tabs={tabs}
          dropContainerClassName="dropContainerClass"
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,TabMenuUnderline_templateraw_namespaceObject=`import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import type { TabMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const tabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

export const TabMenuUnderlineTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TabMenu
        {...props}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={tabs}
        underline
      />
    </ThemeProvider>
  );
};
`,TabMenuDisabled_templateraw_namespaceObject=`import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import type { TabMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const disabledTabs = [
  {
    id: '1',
    content: 'Option 1',
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    disabled: true,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    icon: <MinusCircleOutline />,
    disabled: true,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 77',
    badge: 5,
    disabled: true,
  },
];

export const TabMenuDisabledTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string>('2');
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TabMenu
        {...props}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={disabledTabs}
      />
    </ThemeProvider>
  );
};
`,TabMenuOverflow_templateraw_namespaceObject=`import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import type { TabMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const overflowTabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

export const TabMenuOverflowTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ display: 'flex', width: '500px' }}>
        <TabMenu
          {...props}
          activeTab={selected}
          onChange={(id) => {
            setSelected(id);
          }}
          tabs={overflowTabs}
        />
      </div>
    </ThemeProvider>
  );
};
`,TabMenuDynamicAdd_templateraw_namespaceObject=`import * as React from 'react';
import { TabMenu, Button } from '@admiral-ds/react-ui';
import type { TabMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TabMenuDynamicAddTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [tabs, setTabs] = React.useState([
    {
      id: '1',
      content: 'Вкладка 1',
    },
    {
      id: '2',
      content: 'Вкладка 2',
    },
    {
      id: '3',
      content: 'Вкладка 3',
    },
  ]);
  const [activeTab, setActiveTav] = React.useState('1');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div>
        <TabMenu {...props} activeTab={activeTab} onChange={(id) => setActiveTav(id)} tabs={tabs} underline />
        <div style={{ height: '20px' }} />
        <Button
          onClick={() =>
            setTabs((prev) => {
              const id = (tabs.length + 1).toString();
              return [...prev, { id, content: \`Вкладка \${id}\` }];
            })
          }
        >
          Добавить вкладку
        </Button>
      </div>
    </ThemeProvider>
  );
};
`;function TabMenu_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TabMenu_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function TabMenu_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TabMenu_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TabMenu_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TabMenu_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TabMenu_stories_define_property(target,key,source[key])})}return target}function TabMenu_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TabMenu_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TabMenu_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TabMenu_stories_sliced_to_array(arr,i){return TabMenu_stories_array_with_holes(arr)||TabMenu_stories_iterable_to_array_limit(arr,i)||TabMenu_stories_unsupported_iterable_to_array(arr,i)||TabMenu_stories_non_iterable_rest()}function TabMenu_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TabMenu_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TabMenu_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TabMenu_stories_array_like_to_array(o,minLen)}}function TabMenu_stories_templateObject(){var data=TabMenu_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return TabMenu_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(TabMenu_stories_templateObject());let TabMenu_stories={title:"Deprecated/TabMenu (Deprecated используйте TabMenuHorizontal или HorizontalTabs)",decorators:void 0,component:TabMenu,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"(Deprecated используйте TabMenuHorizontal или HorizontalTabs)."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31118"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31257"}]},argTypes:{dimension:{options:["l","m"],control:{type:"radio"}},underline:{control:{type:"boolean"}},mobile:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},tabs:{control:!1}}};var BaseExample={render:function(props){var CSSCustomProps=TabMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TabMenuBaseTemplate,TabMenu_stories_object_spread_props(TabMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TabMenuBase_templateraw_namespaceObject}}},name:"TabMenu. Базовый пример."},UnderlineExample={render:function(props){var CSSCustomProps=TabMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TabMenuUnderlineTemplate,TabMenu_stories_object_spread_props(TabMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TabMenuUnderline_templateraw_namespaceObject}}},name:"TabMenu. Пример с нижней серой полосой."},DisabledExample={render:function(props){var CSSCustomProps=TabMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TabMenuDisabledTemplate,TabMenu_stories_object_spread_props(TabMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TabMenuDisabled_templateraw_namespaceObject}}},name:"TabMenu. Пример с задизейбленными табами."},OverflowMenuExample={render:function(props){var CSSCustomProps=TabMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TabMenuOverflowTemplate,TabMenu_stories_object_spread_props(TabMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TabMenuOverflow_templateraw_namespaceObject}}},name:"TabMenu. Пример с OverflowMenu."},DynamicAddExample={render:function(props){var CSSCustomProps=TabMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TabMenuDynamicAddTemplate,TabMenu_stories_object_spread_props(TabMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TabMenuDynamicAdd_templateraw_namespaceObject}}},name:"TabMenu. Динамическое добавление вкладок."};BaseExample.parameters={...BaseExample.parameters,docs:{...BaseExample.parameters?.docs,source:{originalSource:`{
  render: BaseStory,
  parameters: {
    docs: {
      source: {
        code: TabMenuBaseRaw
      }
    }
  },
  name: 'TabMenu. Базовый пример.'
}`,...BaseExample.parameters?.docs?.source}}},UnderlineExample.parameters={...UnderlineExample.parameters,docs:{...UnderlineExample.parameters?.docs,source:{originalSource:`{
  render: UnderlineStory,
  parameters: {
    docs: {
      source: {
        code: TabMenuUnderlineRaw
      }
    }
  },
  name: 'TabMenu. Пример с нижней серой полосой.'
}`,...UnderlineExample.parameters?.docs?.source}}},DisabledExample.parameters={...DisabledExample.parameters,docs:{...DisabledExample.parameters?.docs,source:{originalSource:`{
  render: DisabledStory,
  parameters: {
    docs: {
      source: {
        code: TabMenuDisabledRaw
      }
    }
  },
  name: 'TabMenu. Пример с задизейбленными табами.'
}`,...DisabledExample.parameters?.docs?.source}}},OverflowMenuExample.parameters={...OverflowMenuExample.parameters,docs:{...OverflowMenuExample.parameters?.docs,source:{originalSource:`{
  render: OverflowMenuStory,
  parameters: {
    docs: {
      source: {
        code: TabMenuOverflowRaw
      }
    }
  },
  name: 'TabMenu. Пример с OverflowMenu.'
}`,...OverflowMenuExample.parameters?.docs?.source}}},DynamicAddExample.parameters={...DynamicAddExample.parameters,docs:{...DynamicAddExample.parameters?.docs,source:{originalSource:`{
  render: DynamicAddStory,
  parameters: {
    docs: {
      source: {
        code: TabMenuDynamicAddRaw
      }
    }
  },
  name: 'TabMenu. Динамическое добавление вкладок.'
}`,...DynamicAddExample.parameters?.docs?.source}}};let __namedExportsOrder=["BaseExample","UnderlineExample","DisabledExample","OverflowMenuExample","DynamicAddExample"]},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>debounce});function debounce(f,delay){var timer=setTimeout(function(){});return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout(function(){return f.apply(args)},delay)}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-TabMenu-stories-TabMenu-stories.7efdeadb.iframe.bundle.js.map