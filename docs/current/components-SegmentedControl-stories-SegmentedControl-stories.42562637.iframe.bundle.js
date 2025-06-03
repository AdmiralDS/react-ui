"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6331],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/system/StarSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgStarSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgStarSolid=function SvgStarSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"m12.62 3.31 2.47 4.98 5.51.8c.56.08.79.79.39 1.2L17 14.17l.93 5.48c.11.56-.5 1.01-1.02.74L12 17.81 7.08 20.4c-.51.27-1.11-.17-1.02-.74L7 14.17l-3.98-3.88c-.42-.41-.19-1.12.37-1.2l5.52-.8 2.46-4.98a.69.69 0 0 1 1.25 0"})))};__webpack_require__.p},"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,He:()=>SegmentedControlBadge,I3:()=>ButtonBadge,nS:()=>BadgeComponent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject3=function _templateObject(){return data},data}var background=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"grey":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"dark":return"var(--admiral-color-Neutral_Neutral80, ".concat(theme.color["Neutral/Neutral 80"],")");case"whiteBlue":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"white":case"whiteInactive":case"whiteDisable":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");default:return"var(--admiral-color-Opacity_Neutral8, ".concat(theme.color["Opacity/Neutral 8"],")")}}),color=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":case"warning":case"success":case"error":case"grey":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"dark":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");case"whiteBlue":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"lightInactive":case"whiteInactive":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"whiteDisable":case"lightDisable":return"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),BadgeComponent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(param){return"s"===param.$dimension?"0 5px":"0 6px"},function(param){return"s"===param.$dimension?"16px":"20px"},function(param){return"s"===param.$dimension?"8px":"10px"},function(param){return"s"===param.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Caption/Caption 1"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 2 Long"]},background,color),Badge=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,_param_appearance=_param.appearance,locale=_param.locale,props=_object_without_properties(_param,["children","dimension","appearance","locale"]),theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.d,amountText=(null==locale?void 0:locale.amountAriaLabel)||theme.locales[theme.currentLocale].badge.amountAriaLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BadgeComponent,_object_spread_props(_object_spread({ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"light":_param_appearance,"aria-label":"".concat(amountText," ").concat(children)},props),{children:children}))});function getBadgeAppearance(appearance,disabled){switch(appearance){case"secondary":case"ghost":if(disabled)return"lightDisable";return"info";case"tertiary":if(disabled)return"whiteDisable";return"white";default:if(disabled)return"whiteDisable";return"whiteBlue"}}Badge.displayName="Badge";var ButtonBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]),isVisible="primary"===appearance||"secondary"===appearance||"tertiary"===appearance||"ghost"===appearance,badgeAppearance=getBadgeAppearance(appearance,void 0!==_param_disabled&&_param_disabled);return isVisible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:badgeAppearance})):null},SegmentedBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(Badge)(_templateObject3(),function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral00, ".concat(p.theme.color["Neutral/Neutral 00"],")"):"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")")}),SegmentedControlBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"outlined":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SegmentedBadge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:void 0!==_param_disabled&&_param_disabled?"outlined"==appearance?"lightDisable":"whiteDisable":"outlined"==appearance?"info":"white"}))};try{BadgeComponent.displayName="Badge",BadgeComponent.__docgenInfo={description:"",displayName:"Badge",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SegmentedControl/stories/SegmentedControl.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonGroupPlayground:()=>ButtonGroupPlayground,SegmentedControlAppearance:()=>SegmentedControlAppearance,SegmentedControlCheckbox:()=>SegmentedControlCheckbox,SegmentedControlDimension:()=>SegmentedControlDimension,SegmentedControlRadio:()=>SegmentedControlRadio,SegmentedControlState:()=>SegmentedControlState,SegmentedControlVariants:()=>SegmentedControlVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SegmentedControl_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: inline-flex;
  flex-wrap: nowrap;
  border: none;
  padding: 0;

  &[data-appearance='outlined'] {
    & > label:not(:first-child) {
      margin-left: -1px;
    }
    label:has(input:checked) + label:has(input:checked) {
      box-shadow: -1px 0 var(--admiral-color-Neutral_Neutral00, `,`);
    }
  }
  &[data-appearance='filled'] {
    gap: 1px;
  }
  & > label:first-child > div {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > label:last-child > div {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > label:not(:first-child):not(:last-child) > div {
    border-radius: 0;
  }
`]);return _templateObject=function _templateObject(){return data},data}var FieldSetContainer=styled_components_browser_esm.Ay.fieldset(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 00"]}),SegmentedControl=function(_param){var children=_param.children,_param_dimension=_param.dimension,_param_appearance=_param.appearance,props=_object_without_properties(_param,["children","dimension","appearance"]);return(0,jsx_runtime.jsx)(FieldSetContainer,_object_spread_props(_object_spread({role:"group","data-appearance":void 0===_param_appearance?"outlined":_param_appearance,"data-dimension":void 0===_param_dimension?"xl":_param_dimension},props),{children:children}))};SegmentedControl.displayName="SegmentedControl";try{SegmentedControl.displayName="SegmentedControl",SegmentedControl.__docgenInfo={description:"",displayName:"SegmentedControl",props:{dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:{value:"outlined"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/index.tsx#SegmentedControl"]={docgenInfo:SegmentedControl.__docgenInfo,name:"SegmentedControl",path:"src/components/SegmentedControl/index.tsx#SegmentedControl"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),T=__webpack_require__("./src/components/T/index.tsx"),SpinnerIcon=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts");function mixins_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function mixins_templateObject(){var data=mixins_tagged_template_literal([""]);return mixins_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=mixins_tagged_template_literal([`
  padding: 0;
  height: 56px;
  `,`
  `,` {
    width: 24px;
    height: 24px;
  }

  `,`
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=mixins_tagged_template_literal([`
  `,`

  fieldset[data-dimension='xl'] & {
    `,`
  }

  fieldset[data-dimension='l'] & {
    height: 48px;
    `,`
  }

  fieldset[data-dimension='m'] & {
    height: 40px;
    `,`
  }

  fieldset[data-dimension='s'] & {
    height: 32px;
    `,`
    `,` {
      width: 20px;
      height: 20px;
    }
    `,`
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=mixins_tagged_template_literal([`
  & + div {
    background-color: transparent;
    color: var(--admiral-color-Primary_Primary60Main, `,`);
    border: 1px solid var(--admiral-color-Primary_Primary60Main, `,`);

    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }
  &:hover + div {
    background-color: var(--admiral-color-Opacity_Hover, `,`);
    color: var(--admiral-color-Primary_Primary60Main, `,`);
    border-color: var(--admiral-color-Primary_Primary60Main, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }
  &:active + div {
    background-color: var(--admiral-color-Opacity_Press, `,`);
    color: var(--admiral-color-Primary_Primary60Main, `,`);
    border-color: var(--admiral-color-Primary_Primary60Main, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=mixins_tagged_template_literal([`
  & + div {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    border: 1px solid var(--admiral-color-Primary_Primary60Main, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=mixins_tagged_template_literal([`
  & + div {
    background-color: var(--admiral-color-Opacity_Neutral8, `,`);
    color: var(--admiral-color-Neutral_Neutral90, `,`);
    border: 1px solid transparent;

    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
  }
  &:hover + div {
    background-color: var(--admiral-color-Opacity_Neutral12, `,`);
    color: var(--admiral-color-Neutral_Neutral90, `,`);
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
  }
  &:active + div {
    background-color: var(--admiral-color-Opacity_Neutral16, `,`);
    color: var(--admiral-color-Neutral_Neutral90, `,`);
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
  }
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=mixins_tagged_template_literal([`
  & + div {
    background-color: var(--admiral-color-Opacity_Neutral8, `,`);
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    border: 1px solid transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=mixins_tagged_template_literal([`
  & + div {
    background-color: var(--admiral-color-Primary_Primary60Main, `,`);
    color: var(--admiral-color-Special_StaticWhite, `,`);
    border: 1px solid var(--admiral-color-Primary_Primary60Main, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, `,`);
    }
  }
  &:hover + div {
    background-color: var(--admiral-color-Primary_Primary70, `,`);
    border-color: var(--admiral-color-Primary_Primary70, `,`);
  }
  &:active + div {
    background-color: var(--admiral-color-Primary_Primary80, `,`);
    border-color: var(--admiral-color-Primary_Primary80, `,`);
  }
`]);return _templateObject7=function _templateObject(){return data},data}var ButtonIconContainer=styled_components_browser_esm.Ay.div(mixins_templateObject()),defaultDimensionMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.$displayAsSquare?"width: 56px;":"padding: 0 29px;"},ButtonIconContainer,typography.Il["Button/Button 1"]),dimensionMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),defaultDimensionMixin,defaultDimensionMixin,function(p){return p.$displayAsSquare?"width: 48px;":"padding: 0 21px;"},function(p){return p.$displayAsSquare?"width: 40px;":"padding: 0 17px;"},function(p){return p.$displayAsSquare?"width: 32px;":"padding: 0 13px;"},ButtonIconContainer,typography.Il["Button/Button 2"]),outlinedMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Opacity/Press"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]}),outlineDisabledMixin=(0,styled_components_browser_esm.AH)(_templateObject4(),function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),filledMixin=(0,styled_components_browser_esm.AH)(_templateObject5(),function(p){return p.theme.color["Opacity/Neutral 8"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Opacity/Neutral 12"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Opacity/Neutral 16"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 50"]}),filledDisabledMixin=(0,styled_components_browser_esm.AH)(_templateObject6(),function(p){return p.theme.color["Opacity/Neutral 8"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),checkedMixin=(0,styled_components_browser_esm.AH)(_templateObject7(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Primary/Primary 80"]});function style_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function style_templateObject(){var data=style_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
`]);return style_templateObject=function _templateObject(){return data},data}function style_templateObject1(){var data=style_tagged_template_literal([`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - `,`px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > `,` {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  fieldset[data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`]);return style_templateObject1=function _templateObject(){return data},data}function style_templateObject2(){var data=style_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: none;
  border-radius: `,`;
  vertical-align: middle;
  pointer-events: none;

  `,`;
  `,`;

  `,` {
    `,`
  }
`]);return style_templateObject2=function _templateObject(){return data},data}function style_templateObject3(){var data=style_tagged_template_literal([`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
`]);return style_templateObject3=function _templateObject(){return data},data}function style_templateObject4(){var data=style_tagged_template_literal([`
  display: inline-block;
  width: 2px;
`]);return style_templateObject4=function _templateObject(){return data},data}function style_templateObject5(){var data=style_tagged_template_literal([`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  opacity: 0;
  box-sizing: border-box;

  fieldset[data-appearance='outlined'] &:disabled {
    cursor: not-allowed;
    `,`
  }

  fieldset[data-appearance='filled'] &:disabled {
    cursor: not-allowed;
    `,`
  }

  &:checked:not(:disabled) {
    `,`
    & + div > `,` {
      & path {
        fill: `,`;
      }
    }
  }

  fieldset[data-appearance='outlined'] &:not(:checked):not(:disabled) {
    `,`
  }
  fieldset[data-appearance='filled'] &:not(:checked):not(:disabled) {
    `,`
  }

  &:not(:active):focus-visible + div {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }
`]);return style_templateObject5=function _templateObject(){return data},data}var Label=styled_components_browser_esm.Ay.label(style_templateObject()),ButtonContent=styled_components_browser_esm.Ay.div(style_templateObject1(),function(p){return p.$addPadding},ButtonIconContainer),Button=styled_components_browser_esm.Ay.div(style_templateObject2(),function(p){return"var(--admiral-border-radius-Medium, ".concat((0,borderRadius.VM)(p.theme.shape),")")},dimensionMixin,function(p){return p.$buttonCssMixin},ButtonContent,function(p){return p.$loading?"visibility: hidden;":""}),SpinnerContainer=(0,styled_components_browser_esm.Ay)(ButtonIconContainer)(style_templateObject3()),AdditionalPadding=styled_components_browser_esm.Ay.div(style_templateObject4()),Input=styled_components_browser_esm.Ay.input(style_templateObject5(),outlineDisabledMixin,filledDisabledMixin,checkedMixin,SpinnerContainer,function(p){return"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},outlinedMixin,filledMixin,function(p){return p.theme.color["Primary/Primary 60 Main"]});function SegmentedControlItem_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControlItem_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlItem_define_property(target,key,source[key])})}return target}function SegmentedControlItem_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlItem_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlItem_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlItem_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlItem_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlItem_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SegmentedControlItem=(0,react.forwardRef)(function(_param,ref){var _param_type=_param.type,checked=_param.checked,defaultChecked=_param.defaultChecked,value=_param.value,name=_param.name,onChange=_param.onChange,disabled=_param.disabled,_param_displayAsSquare=_param.displayAsSquare,displayAsSquare=void 0!==_param_displayAsSquare&&_param_displayAsSquare,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,iconStart=_param.iconStart,iconEnd=_param.iconEnd,buttonCssMixin=_param.buttonCssMixin,children=_param.children,props=SegmentedControlItem_object_without_properties(_param,["type","checked","defaultChecked","value","name","onChange","disabled","displayAsSquare","loading","iconStart","iconEnd","buttonCssMixin","children"]),hasIconStart=!!iconStart,hasIconEnd=!!iconEnd;return(0,jsx_runtime.jsxs)(Label,SegmentedControlItem_object_spread_props(SegmentedControlItem_object_spread({},props),{children:[(0,jsx_runtime.jsx)(Input,{ref:ref,type:void 0===_param_type?"radio":_param_type,checked:checked,defaultChecked:defaultChecked,value:value,name:name,onChange:onChange,disabled:disabled||loading}),(0,jsx_runtime.jsxs)(Button,{$loading:loading,$displayAsSquare:displayAsSquare,$buttonCssMixin:buttonCssMixin,children:[loading&&(0,jsx_runtime.jsx)(SpinnerContainer,{children:(0,jsx_runtime.jsx)(SpinnerIcon.N,{})}),!displayAsSquare&&!hasIconStart&&(0,jsx_runtime.jsx)(AdditionalPadding,{}),(0,jsx_runtime.jsxs)(ButtonContent,{$addPadding:2*(!displayAsSquare&&!hasIconStart)+2*(!displayAsSquare&&!hasIconEnd),children:[hasIconStart?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconStart}):null,react.Children.toArray(children).map(function(child,index){return"string"==typeof child?(0,jsx_runtime.jsx)("div",{children:child},child+index):child}),hasIconEnd?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconEnd}):null]}),!displayAsSquare&&!hasIconEnd&&(0,jsx_runtime.jsx)(AdditionalPadding,{})]})]}))});SegmentedControlItem.displayName="SegmentedControlItem";try{SegmentedControlItem.displayName="SegmentedControlItem",SegmentedControlItem.__docgenInfo={description:"",displayName:"SegmentedControlItem",props:{type:{defaultValue:{value:"radio"},description:"Тип кнопки",name:"type",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},checked:{defaultValue:null,description:"Состояние кнопки, выбрана или нет",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"Состояние кнопки, выбрана или нет по умолчанию",name:"defaultChecked",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Значение кнопки",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},name:{defaultValue:null,description:"Атрибут name кнопки",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Колбек на изменение состояния кнопки (выбрана или нет)",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},disabled:{defaultValue:null,description:"Кнопка в состоянии disabled",name:"disabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:{value:"false"},description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/SegmentedControlItem.tsx#SegmentedControlItem"]={docgenInfo:SegmentedControlItem.__docgenInfo,name:"SegmentedControlItem",path:"src/components/SegmentedControl/SegmentedControlItem.tsx#SegmentedControlItem"})}catch(__react_docgen_typescript_loader_error){}var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function SegmentedControlPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControlPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlPlayground_template_define_property(target,key,source[key])})}return target}function SegmentedControlPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SegmentedControlPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SegmentedControlPlayground_template_templateObject(){var data=SegmentedControlPlayground_template_tagged_template_literal([`
  height: `,`px;
`]);return SegmentedControlPlayground_template_templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(SegmentedControlPlayground_template_templateObject(),function(p){return p.height||20}),SegmentedControlPlaygroundTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SegmentedControlPlayground_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Режим radio button"}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlPlayground_template_object_spread_props(SegmentedControlPlayground_template_object_spread({onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"1",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"2",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"3",children:"Button 3"})]})),(0,jsx_runtime.jsx)(Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Режим checkbox"}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlPlayground_template_object_spread_props(SegmentedControlPlayground_template_object_spread({onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{type:"checkbox",name:"second",value:"4",children:"Button 4"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{type:"checkbox",name:"second",value:"5",children:"Button 5"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{type:"checkbox",name:"second",value:"6",children:"Button 6"})]}))]})};try{SegmentedControlPlaygroundTemplate.displayName="SegmentedControlPlaygroundTemplate",SegmentedControlPlaygroundTemplate.__docgenInfo={description:"",displayName:"SegmentedControlPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/stories/SegmentedControlPlayground.template.tsx#SegmentedControlPlaygroundTemplate"]={docgenInfo:SegmentedControlPlaygroundTemplate.__docgenInfo,name:"SegmentedControlPlaygroundTemplate",path:"src/components/SegmentedControl/stories/SegmentedControlPlayground.template.tsx#SegmentedControlPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function SegmentedControlAppearance_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControlAppearance_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlAppearance_template_define_property(target,key,source[key])})}return target}function SegmentedControlAppearance_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlAppearance_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlAppearance_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlAppearance_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlAppearance_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlAppearance_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SegmentedControlAppearance_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SegmentedControlAppearance_template_templateObject(){var data=SegmentedControlAppearance_template_tagged_template_literal([`
  height: `,`px;
`]);return SegmentedControlAppearance_template_templateObject=function _templateObject(){return data},data}var SegmentedControlAppearance_template_Separator=styled_components_browser_esm.Ay.div(SegmentedControlAppearance_template_templateObject(),function(p){return p.height||20}),SegmentedControlAppearanceTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SegmentedControlAppearance_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Outlined"}),(0,jsx_runtime.jsx)(SegmentedControlAppearance_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlAppearance_template_object_spread_props(SegmentedControlAppearance_template_object_spread({onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"2 Outlined",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"2 Outlined",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"3 Outlined",children:"Button 3"})]})),(0,jsx_runtime.jsx)(SegmentedControlAppearance_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Filled"}),(0,jsx_runtime.jsx)(SegmentedControlAppearance_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlAppearance_template_object_spread_props(SegmentedControlAppearance_template_object_spread({appearance:"filled",onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"1 Filled",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"2 Filled",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"3 Filled",children:"Button 3"})]}))]})};try{SegmentedControlAppearanceTemplate.displayName="SegmentedControlAppearanceTemplate",SegmentedControlAppearanceTemplate.__docgenInfo={description:"",displayName:"SegmentedControlAppearanceTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/stories/SegmentedControlAppearance.template.tsx#SegmentedControlAppearanceTemplate"]={docgenInfo:SegmentedControlAppearanceTemplate.__docgenInfo,name:"SegmentedControlAppearanceTemplate",path:"src/components/SegmentedControl/stories/SegmentedControlAppearance.template.tsx#SegmentedControlAppearanceTemplate"})}catch(__react_docgen_typescript_loader_error){}function SegmentedControlDimension_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControlDimension_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlDimension_template_define_property(target,key,source[key])})}return target}function SegmentedControlDimension_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlDimension_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlDimension_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlDimension_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlDimension_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlDimension_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SegmentedControlDimension_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SegmentedControlDimension_template_templateObject(){var data=SegmentedControlDimension_template_tagged_template_literal([`
  height: `,`px;
`]);return SegmentedControlDimension_template_templateObject=function _templateObject(){return data},data}var SegmentedControlDimension_template_Separator=styled_components_browser_esm.Ay.div(SegmentedControlDimension_template_templateObject(),function(p){return p.height||20}),SegmentedControlDimensionTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SegmentedControlDimension_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension XL"}),(0,jsx_runtime.jsx)(SegmentedControlDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlDimension_template_object_spread_props(SegmentedControlDimension_template_object_spread({onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"xl",value:"1 XL",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"xl",value:"2 XL",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"xl",value:"3 XL",children:"Button 3"})]})),(0,jsx_runtime.jsx)(SegmentedControlDimension_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension L"}),(0,jsx_runtime.jsx)(SegmentedControlDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlDimension_template_object_spread_props(SegmentedControlDimension_template_object_spread({dimension:"l",onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"l",value:"1 L",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"l",value:"2 L",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"l",value:"3 L",children:"Button 3"})]})),(0,jsx_runtime.jsx)(SegmentedControlDimension_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension M"}),(0,jsx_runtime.jsx)(SegmentedControlDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlDimension_template_object_spread_props(SegmentedControlDimension_template_object_spread({dimension:"m",onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"m",value:"1 M",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"m",value:"2 M",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"m",value:"3 M",children:"Button 3"})]})),(0,jsx_runtime.jsx)(SegmentedControlDimension_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension S"}),(0,jsx_runtime.jsx)(SegmentedControlDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlDimension_template_object_spread_props(SegmentedControlDimension_template_object_spread({dimension:"s",onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"s",value:"1 S",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"s",value:"2 S",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"s",value:"3 S",children:"Button 3"})]}))]})};try{SegmentedControlDimensionTemplate.displayName="SegmentedControlDimensionTemplate",SegmentedControlDimensionTemplate.__docgenInfo={description:"",displayName:"SegmentedControlDimensionTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/stories/SegmentedControlDimension.template.tsx#SegmentedControlDimensionTemplate"]={docgenInfo:SegmentedControlDimensionTemplate.__docgenInfo,name:"SegmentedControlDimensionTemplate",path:"src/components/SegmentedControl/stories/SegmentedControlDimension.template.tsx#SegmentedControlDimensionTemplate"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function SegmentedControlCheckbox_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SegmentedControlCheckbox_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlCheckbox_template_define_property(target,key,source[key])})}return target}function SegmentedControlCheckbox_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlCheckbox_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlCheckbox_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlCheckbox_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlCheckbox_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlCheckbox_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function SegmentedControlCheckbox_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function SegmentedControlCheckbox_template_templateObject(){var data=SegmentedControlCheckbox_template_tagged_template_literal([`
  height: `,`px;
`]);return SegmentedControlCheckbox_template_templateObject=function _templateObject(){return data},data}var SegmentedControlCheckbox_template_Separator=styled_components_browser_esm.Ay.div(SegmentedControlCheckbox_template_templateObject(),function(p){return p.height||20}),SegmentedControlCheckboxTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SegmentedControlCheckbox_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_useState=_sliced_to_array((0,react.useState)(new Map([["7",!1],["8",!1],["9",!1]])),2),selected=_useState[0],setSelected=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Неуправляемая группа чекбокс кнопок"}),(0,jsx_runtime.jsx)(SegmentedControlCheckbox_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlCheckbox_template_object_spread_props(SegmentedControlCheckbox_template_object_spread({onChange:function(e){return console.log("Button"+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"1",type:"checkbox",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"2",type:"checkbox",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"3",type:"checkbox",children:"Button 3"})]})),(0,jsx_runtime.jsx)(SegmentedControlCheckbox_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Неуправляемая группа чекбокс кнопок, где 1я и 2я кнопки выбраны по умолчанию"}),(0,jsx_runtime.jsx)(SegmentedControlCheckbox_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlCheckbox_template_object_spread_props(SegmentedControlCheckbox_template_object_spread({onChange:function(e){return console.log("Button"+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"4",type:"checkbox",defaultChecked:!0,children:"Button 4"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"5",type:"checkbox",defaultChecked:!0,children:"Button 5"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"6",type:"checkbox",children:"Button 6"})]})),(0,jsx_runtime.jsx)(SegmentedControlCheckbox_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Управляемая группа чекбокс кнопок"}),(0,jsx_runtime.jsx)(SegmentedControlCheckbox_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlCheckbox_template_object_spread_props(SegmentedControlCheckbox_template_object_spread({onChange:function(e){setSelected(new Map(selected.set(e.target.value,e.target.checked)))}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{type:"checkbox",name:"third",value:"7",checked:selected.get("7"),onChange:function(e){return console.log("Button"+e.target.value+" selected")},children:"Button 7"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{type:"checkbox",name:"third",value:"8",checked:selected.get("8"),onChange:function(e){return console.log("Button"+e.target.value+" selected")},children:"Button 8"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{type:"checkbox",name:"third",value:"9",checked:selected.get("9"),onChange:function(e){return console.log("Button"+e.target.value+" selected")},children:"Button 9"})]}))]})};try{SegmentedControlCheckboxTemplate.displayName="SegmentedControlCheckboxTemplate",SegmentedControlCheckboxTemplate.__docgenInfo={description:"",displayName:"SegmentedControlCheckboxTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/stories/SegmentedControlCheckbox.template.tsx#SegmentedControlCheckboxTemplate"]={docgenInfo:SegmentedControlCheckboxTemplate.__docgenInfo,name:"SegmentedControlCheckboxTemplate",path:"src/components/SegmentedControl/stories/SegmentedControlCheckbox.template.tsx#SegmentedControlCheckboxTemplate"})}catch(__react_docgen_typescript_loader_error){}function SegmentedControlRadio_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SegmentedControlRadio_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SegmentedControlRadio_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControlRadio_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SegmentedControlRadio_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SegmentedControlRadio_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlRadio_template_define_property(target,key,source[key])})}return target}function SegmentedControlRadio_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlRadio_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlRadio_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlRadio_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlRadio_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlRadio_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SegmentedControlRadio_template_sliced_to_array(arr,i){return SegmentedControlRadio_template_array_with_holes(arr)||SegmentedControlRadio_template_iterable_to_array_limit(arr,i)||SegmentedControlRadio_template_unsupported_iterable_to_array(arr,i)||SegmentedControlRadio_template_non_iterable_rest()}function SegmentedControlRadio_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SegmentedControlRadio_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SegmentedControlRadio_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SegmentedControlRadio_template_array_like_to_array(o,minLen)}}function SegmentedControlRadio_template_templateObject(){var data=SegmentedControlRadio_template_tagged_template_literal([`
  height: `,`px;
`]);return SegmentedControlRadio_template_templateObject=function _templateObject(){return data},data}var SegmentedControlRadio_template_Separator=styled_components_browser_esm.Ay.div(SegmentedControlRadio_template_templateObject(),function(p){return p.height||20}),SegmentedControlRadioTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SegmentedControlRadio_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_useState=SegmentedControlRadio_template_sliced_to_array((0,react.useState)(""),2),selected=_useState[0],setSelected=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Неуправляемая группа радио кнопок"}),(0,jsx_runtime.jsx)(SegmentedControlRadio_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlRadio_template_object_spread_props(SegmentedControlRadio_template_object_spread({onChange:function(e){return console.log("Button"+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"1",children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"2",children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first",value:"3",children:"Button 3"})]})),(0,jsx_runtime.jsx)(SegmentedControlRadio_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Неуправляемая группа радио кнопок, где 1я кнопка выбрана по умолчанию"}),(0,jsx_runtime.jsx)(SegmentedControlRadio_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlRadio_template_object_spread_props(SegmentedControlRadio_template_object_spread({onChange:function(e){return console.log("Button"+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"4",defaultChecked:!0,children:"Button 4"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"5",children:"Button 5"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second",value:"6",children:"Button 6"})]})),(0,jsx_runtime.jsx)(SegmentedControlRadio_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Управляемая группа радио кнопок"}),(0,jsx_runtime.jsx)(SegmentedControlRadio_template_Separator,{}),(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlRadio_template_object_spread_props(SegmentedControlRadio_template_object_spread({onChange:function(e){return setSelected(e.target.value)}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"third",value:"7",checked:"7"==selected,onChange:function(e){return console.log("Button"+e.target.value+" selected")},children:"Button 7"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"third",value:"8",checked:"8"==selected,onChange:function(e){return console.log("Button"+e.target.value+" selected")},children:"Button 8"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"third",value:"9",checked:"9"==selected,onChange:function(e){return console.log("Button"+e.target.value+" selected")},children:"Button 9"})]}))]})};try{SegmentedControlRadioTemplate.displayName="SegmentedControlRadioTemplate",SegmentedControlRadioTemplate.__docgenInfo={description:"",displayName:"SegmentedControlRadioTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/stories/SegmentedControlRadio.template.tsx#SegmentedControlRadioTemplate"]={docgenInfo:SegmentedControlRadioTemplate.__docgenInfo,name:"SegmentedControlRadioTemplate",path:"src/components/SegmentedControl/stories/SegmentedControlRadio.template.tsx#SegmentedControlRadioTemplate"})}catch(__react_docgen_typescript_loader_error){}var Badge=__webpack_require__("./src/components/Badge/index.tsx"),StarSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/StarSolid.svg");function SegmentedControlVariants_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControlVariants_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlVariants_template_define_property(target,key,source[key])})}return target}function SegmentedControlVariants_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlVariants_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlVariants_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlVariants_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlVariants_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlVariants_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SegmentedControlVariants_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SegmentedControlVariants_template_templateObject(){var data=SegmentedControlVariants_template_tagged_template_literal([`
  height: 40px;
`]);return SegmentedControlVariants_template_templateObject=function _templateObject(){return data},data}function SegmentedControlVariants_template_templateObject1(){var data=SegmentedControlVariants_template_tagged_template_literal([`
  margin-top: 20px;
`]);return SegmentedControlVariants_template_templateObject1=function _templateObject(){return data},data}var SegmentedControlVariants_template_Separator=styled_components_browser_esm.Ay.div(SegmentedControlVariants_template_templateObject()),GroupWrapper=styled_components_browser_esm.Ay.div(SegmentedControlVariants_template_templateObject1()),appearanceMap=["outlined","filled"],SegmentedControlVariantsTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SegmentedControlVariants_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"С включенной иконкой слева"}),appearanceMap.map(function(appearance,index){return(0,jsx_runtime.jsx)(GroupWrapper,{children:(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlVariants_template_object_spread_props(SegmentedControlVariants_template_object_spread({appearance:appearance,onChange:function(e){return console.log("Button "+e.target.value+" with iconStart selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first".concat(index),value:"1",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first".concat(index),value:"2",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first".concat(index),value:"3",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 3"})]}))},"iconStart_"+index)}),(0,jsx_runtime.jsx)(SegmentedControlVariants_template_Separator,{}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"С включенной иконкой справа"}),appearanceMap.map(function(appearance,index){return(0,jsx_runtime.jsx)(GroupWrapper,{children:(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlVariants_template_object_spread_props(SegmentedControlVariants_template_object_spread({appearance:appearance,onChange:function(e){return console.log("Button "+e.target.value+" with iconEnd selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second".concat(index),value:"1",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second".concat(index),value:"2",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second".concat(index),value:"3",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 3"})]}))},"iconEnd_"+index)}),(0,jsx_runtime.jsx)(SegmentedControlVariants_template_Separator,{}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"С бейджами"}),appearanceMap.map(function(appearance,index){return(0,jsx_runtime.jsx)(GroupWrapper,{children:(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlVariants_template_object_spread_props(SegmentedControlVariants_template_object_spread({appearance:appearance,onChange:function(e){return console.log("Button "+e.target.value+" with badge selected")}},props),{children:[(0,jsx_runtime.jsxs)(SegmentedControlItem,{name:"third".concat(index),value:"1",children:["Button",(0,jsx_runtime.jsx)(Badge.He,{appearance:appearance,children:"5"})]}),(0,jsx_runtime.jsxs)(SegmentedControlItem,{name:"third".concat(index),value:"2",children:["Button",(0,jsx_runtime.jsx)(Badge.He,{appearance:appearance,children:"5"})]}),(0,jsx_runtime.jsxs)(SegmentedControlItem,{name:"third".concat(index),value:"3",children:["Button",(0,jsx_runtime.jsx)(Badge.He,{appearance:appearance,children:"5"})]})]}))},"badge_"+index)}),(0,jsx_runtime.jsx)(SegmentedControlVariants_template_Separator,{}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Icon Only"}),appearanceMap.map(function(appearance,index){return(0,jsx_runtime.jsx)(GroupWrapper,{children:(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlVariants_template_object_spread_props(SegmentedControlVariants_template_object_spread({appearance:appearance,onChange:function(e){return console.log("Button "+e.target.value+" with icon only selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"forth".concat(index),value:"1",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),displayAsSquare:!0}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"forth".concat(index),value:"2",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),displayAsSquare:!0}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"forth".concat(index),value:"3",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),displayAsSquare:!0})]}))},"iconOnly_"+index)})]})};try{SegmentedControlVariantsTemplate.displayName="SegmentedControlVariantsTemplate",SegmentedControlVariantsTemplate.__docgenInfo={description:"",displayName:"SegmentedControlVariantsTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/stories/SegmentedControlVariants.template.tsx#SegmentedControlVariantsTemplate"]={docgenInfo:SegmentedControlVariantsTemplate.__docgenInfo,name:"SegmentedControlVariantsTemplate",path:"src/components/SegmentedControl/stories/SegmentedControlVariants.template.tsx#SegmentedControlVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}function SegmentedControlState_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControlState_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControlState_template_define_property(target,key,source[key])})}return target}function SegmentedControlState_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControlState_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControlState_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControlState_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SegmentedControlState_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SegmentedControlState_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SegmentedControlState_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SegmentedControlState_template_templateObject(){var data=SegmentedControlState_template_tagged_template_literal([`
  height: 40px;
`]);return SegmentedControlState_template_templateObject=function _templateObject(){return data},data}function SegmentedControlState_template_templateObject1(){var data=SegmentedControlState_template_tagged_template_literal([`
  margin-top: 20px;
`]);return SegmentedControlState_template_templateObject1=function _templateObject(){return data},data}var SegmentedControlState_template_Separator=styled_components_browser_esm.Ay.div(SegmentedControlState_template_templateObject()),SegmentedControlState_template_GroupWrapper=styled_components_browser_esm.Ay.div(SegmentedControlState_template_templateObject1()),SegmentedControlState_template_appearanceMap=["outlined","filled"],SegmentedControlStateTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SegmentedControlState_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Disable (вторая внопка)"}),SegmentedControlState_template_appearanceMap.map(function(appearance,index){return(0,jsx_runtime.jsx)(SegmentedControlState_template_GroupWrapper,{children:(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlState_template_object_spread_props(SegmentedControlState_template_object_spread({appearance:appearance,onChange:function(e){return console.log("Button "+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first".concat(index),value:1,children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first".concat(index),value:2,disabled:!0,children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"first".concat(index),value:3,children:"Button 3"})]}))},"disable_"+index)}),(0,jsx_runtime.jsx)(SegmentedControlState_template_Separator,{}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Loading (третья кнопка)"}),SegmentedControlState_template_appearanceMap.map(function(appearance,index){return(0,jsx_runtime.jsx)(SegmentedControlState_template_GroupWrapper,{children:(0,jsx_runtime.jsxs)(SegmentedControl,SegmentedControlState_template_object_spread_props(SegmentedControlState_template_object_spread({appearance:appearance,onChange:function(e){return console.log("Button"+e.target.value+" selected")}},props),{children:[(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second".concat(index),value:1,children:"Button 1"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second".concat(index),value:2,children:"Button 2"}),(0,jsx_runtime.jsx)(SegmentedControlItem,{name:"second".concat(index),value:3,loading:!0,children:"Button 3"})]}))},"loading"+index)})]})};try{SegmentedControlStateTemplate.displayName="SegmentedControlStateTemplate",SegmentedControlStateTemplate.__docgenInfo={description:"",displayName:"SegmentedControlStateTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentedControl/stories/SegmentedControlState.template.tsx#SegmentedControlStateTemplate"]={docgenInfo:SegmentedControlStateTemplate.__docgenInfo,name:"SegmentedControlStateTemplate",path:"src/components/SegmentedControl/stories/SegmentedControlState.template.tsx#SegmentedControlStateTemplate"})}catch(__react_docgen_typescript_loader_error){}let SegmentedControlPlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>\`
  height: \${(p) => p.height || 20}px;
\`;

export const SegmentedControlPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Режим radio button</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="first" value="1">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="2">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="3">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Режим checkbox</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem type="checkbox" name="second" value="4">
        Button 4
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="second" value="5">
        Button 5
      </SegmentedControlItem>
      <SegmentedControlItem type="checkbox" name="second" value="6">
        Button 6
      </SegmentedControlItem>
    </SegmentedControl>
  </ThemeProvider>
);
`,SegmentedControlAppearance_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>\`
  height: \${(p) => p.height || 20}px;
\`;

export const SegmentedControlAppearanceTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Outlined</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="first" value="2 Outlined">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="2 Outlined">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="first" value="3 Outlined">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Filled</T>
    <Separator />
    <SegmentedControl
      appearance="filled"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="second" value="1 Filled">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="second" value="2 Filled">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="second" value="3 Filled">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
  </ThemeProvider>
);
`,SegmentedControlDimension_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>\`
  height: \${(p) => p.height || 20}px;
\`;

export const SegmentedControlDimensionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Dimension XL</T>
    <Separator />
    <SegmentedControl
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="xl" value="1 XL">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="xl" value="2 XL">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="xl" value="3 XL">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension L</T>
    <Separator />
    <SegmentedControl
      dimension="l"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="l" value="1 L">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="l" value="2 L">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="l" value="3 L">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension M</T>
    <Separator />
    <SegmentedControl
      dimension="m"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="m" value="1 M">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="m" value="2 M">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="m" value="3 M">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension S</T>
    <Separator />
    <SegmentedControl
      dimension="s"
      // eslint-disable-next-line no-console
      onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
      {...props}
    >
      <SegmentedControlItem name="s" value="1 S">
        Button 1
      </SegmentedControlItem>
      <SegmentedControlItem name="s" value="2 S">
        Button 2
      </SegmentedControlItem>
      <SegmentedControlItem name="s" value="3 S">
        Button 3
      </SegmentedControlItem>
    </SegmentedControl>
  </ThemeProvider>
);
`,SegmentedControlCheckbox_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>\`
  height: \${(p) => p.height || 20}px;
\`;

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const SegmentedControlCheckboxTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = useState(
    new Map([
      [values[6], false],
      [values[7], false],
      [values[8], false],
    ]),
  );
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long">Неуправляемая группа чекбокс кнопок</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="first" value={values[0]} type="checkbox">
          Button 1
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[1]} type="checkbox">
          Button 2
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[2]} type="checkbox">
          Button 3
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Неуправляемая группа чекбокс кнопок, где 1я и 2я кнопки выбраны по умолчанию</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="second" value={values[3]} type="checkbox" defaultChecked>
          Button 4
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[4]} type="checkbox" defaultChecked>
          Button 5
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[5]} type="checkbox">
          Button 6
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Управляемая группа чекбокс кнопок</T>
      <Separator />
      <SegmentedControl
        onChange={(e) => {
          setSelected(
            new Map(selected.set((e.target as HTMLInputElement).value, (e.target as HTMLInputElement).checked)),
          );
        }}
        {...props}
      >
        <SegmentedControlItem
          type="checkbox"
          name="third"
          value={values[6]}
          checked={selected.get(values[6])}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 7
        </SegmentedControlItem>
        <SegmentedControlItem
          type="checkbox"
          name="third"
          value={values[7]}
          checked={selected.get(values[7])}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 8
        </SegmentedControlItem>
        <SegmentedControlItem
          type="checkbox"
          name="third"
          value={values[8]}
          checked={selected.get(values[8])}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 9
        </SegmentedControlItem>
      </SegmentedControl>
    </ThemeProvider>
  );
};
`,SegmentedControlRadio_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ height?: number }>\`
  height: \${(p) => p.height || 20}px;
\`;

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const SegmentedControlRadioTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = useState('');
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long">Неуправляемая группа радио кнопок</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="first" value={values[0]}>
          Button 1
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[1]}>
          Button 2
        </SegmentedControlItem>
        <SegmentedControlItem name="first" value={values[2]}>
          Button 3
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Неуправляемая группа радио кнопок, где 1я кнопка выбрана по умолчанию</T>
      <Separator />
      <SegmentedControl
        // eslint-disable-next-line no-console
        onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
        {...props}
      >
        <SegmentedControlItem name="second" value={values[3]} defaultChecked>
          Button 4
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[4]}>
          Button 5
        </SegmentedControlItem>
        <SegmentedControlItem name="second" value={values[5]}>
          Button 6
        </SegmentedControlItem>
      </SegmentedControl>
      <Separator height={40} />
      <T font="Body/Body 1 Long">Управляемая группа радио кнопок</T>
      <Separator />
      <SegmentedControl onChange={(e) => setSelected((e.target as HTMLInputElement).value)} {...props}>
        <SegmentedControlItem
          name="third"
          value={values[6]}
          checked={values[6] == selected}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 7
        </SegmentedControlItem>
        <SegmentedControlItem
          name="third"
          value={values[7]}
          checked={values[7] == selected}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 8
        </SegmentedControlItem>
        <SegmentedControlItem
          name="third"
          value={values[8]}
          checked={values[8] == selected}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + e.target.value + ' selected')}
        >
          Button 9
        </SegmentedControlItem>
      </SegmentedControl>
    </ThemeProvider>
  );
};
`,SegmentedControlVariants_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T, SegmentedControlBadge } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const Separator = styled.div\`
  height: 40px;
\`;
const GroupWrapper = styled.div\`
  margin-top: 20px;
\`;

const appearanceMap: Array<SegmentedControlProps['appearance']> = ['outlined', 'filled'];

export const SegmentedControlVariantsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">С включенной иконкой слева</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconStart_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with iconStart selected')}
          {...props}
        >
          <SegmentedControlItem name={\`first\${index}\`} value="1" iconStart={<StarSolid />}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={\`first\${index}\`} value="2" iconStart={<StarSolid />}>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={\`first\${index}\`} value="3" iconStart={<StarSolid />}>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">С включенной иконкой справа</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconEnd_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with iconEnd selected')}
          {...props}
        >
          <SegmentedControlItem name={\`second\${index}\`} value="1" iconEnd={<StarSolid />}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={\`second\${index}\`} value="2" iconEnd={<StarSolid />}>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={\`second\${index}\`} value="3" iconEnd={<StarSolid />}>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">С бейджами</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'badge_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with badge selected')}
          {...props}
        >
          <SegmentedControlItem name={\`third\${index}\`} value="1">
            Button
            <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
          </SegmentedControlItem>
          <SegmentedControlItem name={\`third\${index}\`} value="2">
            Button
            <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
          </SegmentedControlItem>
          <SegmentedControlItem name={\`third\${index}\`} value="3">
            Button
            <SegmentedControlBadge appearance={appearance}>5</SegmentedControlBadge>
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">Icon Only</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'iconOnly_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' with icon only selected')}
          {...props}
        >
          <SegmentedControlItem name={\`forth\${index}\`} value="1" iconStart={<StarSolid />} displayAsSquare />
          <SegmentedControlItem name={\`forth\${index}\`} value="2" iconStart={<StarSolid />} displayAsSquare />
          <SegmentedControlItem name={\`forth\${index}\`} value="3" iconStart={<StarSolid />} displayAsSquare />
        </SegmentedControl>
      </GroupWrapper>
    ))}
  </ThemeProvider>
);
`,SegmentedControlState_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SegmentedControlItem, SegmentedControl, T } from '@admiral-ds/react-ui';
import type { SegmentedControlProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 40px;
\`;
const GroupWrapper = styled.div\`
  margin-top: 20px;
\`;

const appearanceMap: Array<SegmentedControlProps['appearance']> = ['outlined', 'filled'];

export const SegmentedControlStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SegmentedControlProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Disable (вторая внопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'disable_' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button ' + (e.target as HTMLInputElement).value + ' selected')}
          {...props}
        >
          <SegmentedControlItem name={\`first\${index}\`} value={1}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={\`first\${index}\`} value={2} disabled>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={\`first\${index}\`} value={3}>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
    <Separator />
    <T font="Body/Body 1 Long">Loading (третья кнопка)</T>
    {appearanceMap.map((appearance, index) => (
      <GroupWrapper key={'loading' + index}>
        <SegmentedControl
          appearance={appearance}
          // eslint-disable-next-line no-console
          onChange={(e) => console.log('Button' + (e.target as HTMLInputElement).value + ' selected')}
          {...props}
        >
          <SegmentedControlItem name={\`second\${index}\`} value={1}>
            Button 1
          </SegmentedControlItem>
          <SegmentedControlItem name={\`second\${index}\`} value={2}>
            Button 2
          </SegmentedControlItem>
          <SegmentedControlItem name={\`second\${index}\`} value={3} loading>
            Button 3
          </SegmentedControlItem>
        </SegmentedControl>
      </GroupWrapper>
    ))}
  </ThemeProvider>
);
`;function SegmentedControl_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SegmentedControl_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function SegmentedControl_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentedControl_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SegmentedControl_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SegmentedControl_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SegmentedControl_stories_define_property(target,key,source[key])})}return target}function SegmentedControl_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SegmentedControl_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SegmentedControl_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SegmentedControl_stories_sliced_to_array(arr,i){return SegmentedControl_stories_array_with_holes(arr)||SegmentedControl_stories_iterable_to_array_limit(arr,i)||SegmentedControl_stories_unsupported_iterable_to_array(arr,i)||SegmentedControl_stories_non_iterable_rest()}function SegmentedControl_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SegmentedControl_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SegmentedControl_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SegmentedControl_stories_array_like_to_array(o,minLen)}}function SegmentedControl_stories_templateObject(){var data=SegmentedControl_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return SegmentedControl_stories_templateObject=function _templateObject(){return data},data}function SegmentedControl_stories_templateObject1(){var data=SegmentedControl_stories_tagged_template_literal([`
  height: 20px;
`]);return SegmentedControl_stories_templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(SegmentedControl_stories_templateObject()),SegmentedControl_stories_Separator=styled_components_browser_esm.Ay.div(SegmentedControl_stories_templateObject1());let SegmentedControl_stories={title:"Admiral-2.1/SegmentedControl",component:SegmentedControl,parameters:{docs:{source:{code:null}},layout:"centered",componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["SegmentedControl — компонент для переключения контента, параметров или выбора свойств. Является самым низкоуровневым по отношению к TabMenu, ContentSwitcher и CardTabMenu. Аналог Сhoice Chips. ",(0,jsx_runtime.jsx)(SegmentedControl_stories_Separator,{})," Компонент представлен в вариантах Outlined и Filled и размерах: XL - высота 56 px, L - высота 48 px, M - высота 40 px и S - высота 32 px.",(0,jsx_runtime.jsx)(SegmentedControl_stories_Separator,{}),"Компонент может работать в двух режимах:",(0,jsx_runtime.jsx)("li",{children:"Одиночный выбор — режим Radio Button"}),(0,jsx_runtime.jsx)("li",{children:"Множественный выбор — режим Checkbox"})]})},{})},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},appearance:{options:["outlined","filled"],control:{type:"select"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var ButtonGroupPlayground={render:function(props){var CSSCustomProps=SegmentedControl_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SegmentedControlPlaygroundTemplate,SegmentedControl_stories_object_spread_props(SegmentedControl_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SegmentedControlPlayground_templateraw_namespaceObject}}},name:"SegmentedControl. Playground"},SegmentedControlAppearance={render:function(props){var CSSCustomProps=SegmentedControl_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SegmentedControlAppearanceTemplate,SegmentedControl_stories_object_spread_props(SegmentedControl_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SegmentedControlAppearance_templateraw_namespaceObject}}},name:"SegmentedControl. Стили"},SegmentedControlDimension={render:function(props){var CSSCustomProps=SegmentedControl_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SegmentedControlDimensionTemplate,SegmentedControl_stories_object_spread_props(SegmentedControl_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SegmentedControlDimension_templateraw_namespaceObject}}},name:"SegmentedControl. Размеры"},SegmentedControlRadio={render:function(props){var CSSCustomProps=SegmentedControl_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SegmentedControlRadioTemplate,SegmentedControl_stories_object_spread_props(SegmentedControl_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SegmentedControlRadio_templateraw_namespaceObject}}},name:"SegmentedControl. Режим radio button"},SegmentedControlCheckbox={render:function(props){var CSSCustomProps=SegmentedControl_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SegmentedControlCheckboxTemplate,SegmentedControl_stories_object_spread_props(SegmentedControl_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SegmentedControlCheckbox_templateraw_namespaceObject}}},name:"SegmentedControl. Режим checkbox"},SegmentedControlVariants={render:function(props){var CSSCustomProps=SegmentedControl_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SegmentedControlVariantsTemplate,SegmentedControl_stories_object_spread_props(SegmentedControl_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SegmentedControlVariants_templateraw_namespaceObject}}},name:"SegmentedControl. Варианты"},SegmentedControlState={render:function(props){var CSSCustomProps=SegmentedControl_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SegmentedControlStateTemplate,SegmentedControl_stories_object_spread_props(SegmentedControl_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SegmentedControlState_templateraw_namespaceObject}}},name:"SegmentedControl. Состояния"};ButtonGroupPlayground.parameters={...ButtonGroupPlayground.parameters,docs:{...ButtonGroupPlayground.parameters?.docs,source:{originalSource:`{
  render: ButtonGroupPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: SegmentedControlPlaygroundRaw
      }
    }
  },
  name: 'SegmentedControl. Playground'
}`,...ButtonGroupPlayground.parameters?.docs?.source}}},SegmentedControlAppearance.parameters={...SegmentedControlAppearance.parameters,docs:{...SegmentedControlAppearance.parameters?.docs,source:{originalSource:`{
  render: SegmentedControlAppearanceStory,
  parameters: {
    docs: {
      source: {
        code: SegmentedControlAppearanceRaw
      }
    }
  },
  name: 'SegmentedControl. Стили'
}`,...SegmentedControlAppearance.parameters?.docs?.source}}},SegmentedControlDimension.parameters={...SegmentedControlDimension.parameters,docs:{...SegmentedControlDimension.parameters?.docs,source:{originalSource:`{
  render: SegmentedControlDimensionStory,
  parameters: {
    docs: {
      source: {
        code: SegmentedControlDimensionRaw
      }
    }
  },
  name: 'SegmentedControl. Размеры'
}`,...SegmentedControlDimension.parameters?.docs?.source}}},SegmentedControlRadio.parameters={...SegmentedControlRadio.parameters,docs:{...SegmentedControlRadio.parameters?.docs,source:{originalSource:`{
  render: SegmentedControlRadioStory,
  parameters: {
    docs: {
      source: {
        code: SegmentedControlRadioRaw
      }
    }
  },
  name: 'SegmentedControl. Режим radio button'
}`,...SegmentedControlRadio.parameters?.docs?.source}}},SegmentedControlCheckbox.parameters={...SegmentedControlCheckbox.parameters,docs:{...SegmentedControlCheckbox.parameters?.docs,source:{originalSource:`{
  render: SegmentedControlCheckboxStory,
  parameters: {
    docs: {
      source: {
        code: SegmentedControlCheckboxRaw
      }
    }
  },
  name: 'SegmentedControl. Режим checkbox'
}`,...SegmentedControlCheckbox.parameters?.docs?.source}}},SegmentedControlVariants.parameters={...SegmentedControlVariants.parameters,docs:{...SegmentedControlVariants.parameters?.docs,source:{originalSource:`{
  render: SegmentedControlVariantsStory,
  parameters: {
    docs: {
      source: {
        code: SegmentedControlVariantsRaw
      }
    }
  },
  name: 'SegmentedControl. Варианты'
}`,...SegmentedControlVariants.parameters?.docs?.source}}},SegmentedControlState.parameters={...SegmentedControlState.parameters,docs:{...SegmentedControlState.parameters?.docs,source:{originalSource:`{
  render: SegmentedControlStateStory,
  parameters: {
    docs: {
      source: {
        code: SegmentedControlStateRaw
      }
    }
  },
  name: 'SegmentedControl. Состояния'
}`,...SegmentedControlState.parameters?.docs?.source}}};let __namedExportsOrder=["ButtonGroupPlayground","SegmentedControlAppearance","SegmentedControlDimension","SegmentedControlRadio","SegmentedControlCheckbox","SegmentedControlVariants","SegmentedControlState"]},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 1s linear infinite;
  path {
    fill: `,`;
  }
  width: 100%;
  height: 100%;
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, `,`);
    border-color: var(--admiral-color-Neutral_Neutral20, `,`);
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 2s ease infinite;
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonAnimation=function(props){return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject(),props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"])},skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),function(props){return skeletonAnimation(props)});try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:`Dynamically adjust the rendered component or HTML tag, e.g.
\`\`\`
const StyledButton = styled.button\`\`

<StyledButton as="a" href="/foo">
  I'm an anchor now
</StyledButton>
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-SegmentedControl-stories-SegmentedControl-stories.42562637.iframe.bundle.js.map