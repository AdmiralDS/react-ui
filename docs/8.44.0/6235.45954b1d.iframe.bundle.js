"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6235],{"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,He:()=>SegmentedControlBadge,I3:()=>ButtonBadge,nS:()=>BadgeComponent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject3=function _templateObject(){return data},data}var background=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"grey":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"dark":return"var(--admiral-color-Neutral_Neutral80, ".concat(theme.color["Neutral/Neutral 80"],")");case"whiteBlue":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"white":case"whiteInactive":case"whiteDisable":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");default:return"var(--admiral-color-Opacity_Neutral8, ".concat(theme.color["Opacity/Neutral 8"],")")}}),color=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":case"warning":case"success":case"error":case"grey":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"dark":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");case"whiteBlue":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"lightInactive":case"whiteInactive":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"whiteDisable":case"lightDisable":return"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),BadgeComponent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(param){return"s"===param.$dimension?"0 5px":"0 6px"},function(param){return"s"===param.$dimension?"16px":"20px"},function(param){return"s"===param.$dimension?"8px":"10px"},function(param){return"s"===param.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Caption/Caption 1"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 2 Long"]},background,color),Badge=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,_param_appearance=_param.appearance,locale=_param.locale,props=_object_without_properties(_param,["children","dimension","appearance","locale"]),theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.d,amountText=(null==locale?void 0:locale.amountAriaLabel)||theme.locales[theme.currentLocale].badge.amountAriaLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BadgeComponent,_object_spread_props(_object_spread({ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"light":_param_appearance,"aria-label":"".concat(amountText," ").concat(children)},props),{children:children}))});function getBadgeAppearance(appearance,disabled){switch(appearance){case"secondary":case"ghost":if(disabled)return"lightDisable";return"info";case"tertiary":if(disabled)return"whiteDisable";return"white";default:if(disabled)return"whiteDisable";return"whiteBlue"}}Badge.displayName="Badge";var ButtonBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]),isVisible="primary"===appearance||"secondary"===appearance||"tertiary"===appearance||"ghost"===appearance,badgeAppearance=getBadgeAppearance(appearance,void 0!==_param_disabled&&_param_disabled);return isVisible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:badgeAppearance})):null},SegmentedBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(Badge)(_templateObject3(),function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral00, ".concat(p.theme.color["Neutral/Neutral 00"],")"):"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")")}),SegmentedControlBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"outlined":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SegmentedBadge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:void 0!==_param_disabled&&_param_disabled?"outlined"==appearance?"lightDisable":"whiteDisable":"outlined"==appearance?"info":"white"}))};try{BadgeComponent.displayName="Badge",BadgeComponent.__docgenInfo={description:"",displayName:"Badge",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Chips/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Chips});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Tooltip=__webpack_require__("./src/components/Tooltip/index.tsx"),checkOverflow=__webpack_require__("./src/components/common/utils/checkOverflow.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),Badge=__webpack_require__("./src/components/Badge/index.tsx"),IconPlacement=__webpack_require__("./src/components/IconPlacement/index.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  width: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  height: `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  height: `,`;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  width: `,`;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  padding: `,`;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  padding: `,`;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  &:hover {
    color: `,`;
  }
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  `,`
  color: `,`;

  `,`
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  &:hover {
    `,`;
    `,`
  }
  &:active {
    `,`;
    `,`
  }
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
  background-color: `,`;

  border: `,`;

  border-radius: 16px;

  `,`

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, `,`);
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: `,`;
  }
  cursor: `,`;
  `,`
  `,`
  `,`
  `,`
  `,`
`]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal([`
  display: flex;
  align-items: center;
  justify-content: center;
`]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal([`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  `,`
  `,`
  & svg {
    `,`
    `,`
    & *[fill^='#'] {
      fill: `,`;
    }
  }
`]);return _templateObject14=function _templateObject(){return data},data}function _templateObject15(){var data=_tagged_template_literal([`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`]);return _templateObject15=function _templateObject(){return data},data}function _templateObject16(){var data=_tagged_template_literal([`
  display: inline-block;
  margin-inline-end: 8px;
`]);return _templateObject16=function _templateObject(){return data},data}function _templateObject17(){var data=_tagged_template_literal([`
  display: inline-block;
  margin-inline-start: `,`;
`]);return _templateObject17=function _templateObject(){return data},data}function _templateObject18(){var data=_tagged_template_literal([`
  `,`
  `,`
  `,`
  & > svg {
    `,`
    `,`
  }
`]);return _templateObject18=function _templateObject(){return data},data}function _templateObject19(){var data=_tagged_template_literal([`
  margin-inline-start: `,`;
`]);return _templateObject19=function _templateObject(){return data},data}function _templateObject20(){var data=_tagged_template_literal([`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: `,`;
  `,`;
`]);return _templateObject20=function _templateObject(){return data},data}var heights=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){return"m"===param.$dimension?"32px":"24px"}),widths=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){return"m"===param.$dimension?"32px":"24px"}),heightIcons=(0,styled_components_browser_esm.AH)(_templateObject2(),function(param){return"m"===param.$dimension?"20px":"16px"}),heightText=(0,styled_components_browser_esm.AH)(_templateObject3(),function(param){return"m"===param.$dimension?"20px":"16px"}),widthIcons=(0,styled_components_browser_esm.AH)(_templateObject4(),function(param){return"m"===param.$dimension?"20px":"16px"}),filledPaddings=(0,styled_components_browser_esm.AH)(_templateObject5(),function(param){return"m"===param.$dimension?"6px 12px":"4px 8px"}),outlinedPaddings=(0,styled_components_browser_esm.AH)(_templateObject6(),function(param){return"m"===param.$dimension?"5px 11px":"3px 7px"}),paddings=(0,styled_components_browser_esm.AH)(_templateObject7(),function(param){return"filled"===param.$appearance?filledPaddings:outlinedPaddings}),chipTypographyHover=(0,styled_components_browser_esm.AH)(_templateObject8(),function(param){var theme=param.theme,$appearance=param.$appearance,$selected=param.$selected;return $selected?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"filled"!==$appearance||$selected?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}),chipTypography=(0,styled_components_browser_esm.AH)(_templateObject9(),function(param){return"s"===param.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Long"]},function(param){var theme=param.theme,$appearance=param.$appearance,$disabled=param.$disabled,$selected=param.$selected;return $disabled&&!$selected?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):$selected||$selected&&$disabled?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"filled"===$appearance?"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")},function($disabled){return!$disabled&&chipTypographyHover}),actionsMixin=(0,styled_components_browser_esm.AH)(_templateObject10(),function(param){var theme=param.theme,$appearance=param.$appearance,$selected=param.$selected,$withCloseIcon=param.$withCloseIcon;return $selected?"background-color: var(--admiral-color-Primary_Primary70, ".concat(theme.color["Primary/Primary 70"],");"):"filled"===$appearance?"background-color: var(--admiral-color-Opacity_Neutral12, ".concat(theme.color["Opacity/Neutral 12"],");"):$withCloseIcon?void 0:"background-color: var(--admiral-color-Opacity_Hover, ".concat(theme.color["Opacity/Hover"],");")},function(p){return p.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, `.concat(p.theme.color["Primary/Primary 70"],`);
    `)},function(param){var theme=param.theme,$appearance=param.$appearance,$selected=param.$selected,$withCloseIcon=param.$withCloseIcon;return $selected?"background-color: var(--admiral-color-Primary_Primary80, ".concat(theme.color["Primary/Primary 80"],");"):"filled"===$appearance?"background-color: var(--admiral-color-Opacity_Neutral16, ".concat(theme.color["Opacity/Neutral 16"],");"):$withCloseIcon?void 0:"background-color: var(--admiral-color-Opacity_Press, ".concat(theme.color["Opacity/Press"],");")},function(p){return p.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, `.concat(p.theme.color["Primary/Primary 80"],`);
    `)}),colorsBorderAndBackground=(0,styled_components_browser_esm.AH)(_templateObject11(),function(param){var theme=param.theme,$appearance=param.$appearance,$selected=param.$selected,$disabled=param.$disabled;return $selected&&!$disabled?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")"):$selected&&$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"filled"===$appearance?"var(--admiral-color-Opacity_Neutral8, ".concat(theme.color["Opacity/Neutral 8"],")"):"transparent"},function(param){var theme=param.theme,$appearance=param.$appearance,$disabled=param.$disabled;return"filled"===$appearance?"none":$disabled?"1px solid var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"1px solid var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")},function(p){return p.$clickable&&!p.$disabled&&actionsMixin},function(p){return p.theme.color["Primary/Primary 60 Main"]}),ChipComponentStyled=styled_components_browser_esm.Ay.div(_templateObject12(),function(param){return param.$disabled?"none":"auto"},function(param){var $defaultChip=param.$defaultChip,$disabled=param.$disabled,$withTooltip=param.$withTooltip;return($defaultChip||$withTooltip)&&!$disabled?"pointer":$disabled?"not-allowed":"default"},colorsBorderAndBackground,heights,function(p){return p.$withCloseIcon?"padding-inline-start: ".concat(("s"===p.$dimension?8:12)-("outlined"===p.$appearance),"px;"):paddings},function(p){return p.$withBadge&&!p.$withCloseIcon?"padding-inline-end: ".concat(("s"===p.$dimension?4:6)-("outlined"===p.$appearance),`px;
         padding-inline-start: `).concat(("s"===p.$dimension?8:12)-("outlined"===p.$appearance),"px;"):""},chipTypography),closeIconWrapperStyle=(0,styled_components_browser_esm.AH)(_templateObject13()),ChipContentWrapperStyled=styled_components_browser_esm.Ay.div(_templateObject14(),function(p){return p.$withCloseIcon&&closeIconWrapperStyle},function(p){return p.$withCloseIcon?heights:heightText},heightIcons,widthIcons,function(param){var theme=param.theme,$appearance=param.$appearance,$disabled=param.$disabled;return param.$selected?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"filled"===$appearance?"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}),ChipChildrenWrapperStyled=styled_components_browser_esm.Ay.div(_templateObject15()),IconStartWrapperStyled=styled_components_browser_esm.Ay.div(_templateObject16()),IconEndWrapperStyled=styled_components_browser_esm.Ay.div(_templateObject17(),function(p){return p.$withCloseIcon?"2px":"8px"}),IconWrapperStyled=styled_components_browser_esm.Ay.div(_templateObject18(),function(p){return p.$withCloseIcon&&closeIconWrapperStyle},function(p){return p.$withCloseIcon?heights:heightIcons},function(p){return p.$withCloseIcon?widths:widthIcons},heightIcons,widthIcons),StyledBadge=(0,styled_components_browser_esm.Ay)(Badge.Ex)(_templateObject19(),function(param){return"s"===param.dimension?"6px":"8px"}),CloseIconButton=(0,styled_components_browser_esm.Ay)(IconPlacement.H)(_templateObject20(),function(p){return"s"===p.dimension?"6px":"8px"},function(p){return"primary"===p.appearance?"s"===p.dimension?"margin-inline-end: 3px":"margin-inline-end: 5px":""}),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var defaultRenderContent=function(){return""},Chips=(0,react.forwardRef)(function(_param,ref){var _props_tabIndex,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,disabled=_param.disabled,_param_appearance=_param.appearance,appearance=void 0===_param_appearance?"outlined":_param_appearance,selected=_param.selected,onClose=_param.onClose,children=_param.children,_param_renderContentTooltip=_param.renderContentTooltip,iconBefore=_param.iconBefore,iconAfter=_param.iconAfter,iconStart=_param.iconStart,iconEnd=_param.iconEnd,badge=_param.badge,props=_object_without_properties(_param,["dimension","disabled","appearance","selected","onClose","children","renderContentTooltip","iconBefore","iconAfter","iconStart","iconEnd","badge"]),defaultChip=void 0!==selected,_useState=_sliced_to_array((0,react.useState)(!1),2),overflow=_useState[0],setOverflow=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),tooltipVisible=_useState1[0],setTooltipVisible=_useState1[1],withCloseIcon=!!onClose,badgeAppearance=(0,react.useMemo)(function(){return selected&&!disabled?"whiteBlue":disabled?selected||"filled"===appearance?"whiteDisable":"lightDisable":"filled"===appearance?"white":"info"},[appearance,selected,disabled]),chipRef=(0,react.useRef)(null),refItems=(0,react.useRef)(null);return(0,react.useEffect)(function(){refItems.current&&(0,checkOverflow.p)(refItems.current)!==overflow&&setOverflow((0,checkOverflow.p)(refItems.current))},[tooltipVisible,setOverflow]),(0,react.useLayoutEffect)(function(){var show=function show(){setTooltipVisible(!0)},hide=function hide(){setTooltipVisible(!1)},chip=chipRef.current;if(chip)return chip.addEventListener("mouseenter",show),chip.addEventListener("mouseleave",hide),chip.addEventListener("focus",show),chip.addEventListener("blur",hide),function(){chip.removeEventListener("mouseenter",show),chip.removeEventListener("mouseleave",hide),chip.removeEventListener("focus",show),chip.removeEventListener("blur",hide)}},[setTooltipVisible]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ChipComponentStyled,_object_spread_props(_object_spread({},props),{ref:(0,refSetter.d)(ref,chipRef),$dimension:dimension,$disabled:disabled,$appearance:appearance,$selected:selected,$defaultChip:defaultChip,$withCloseIcon:withCloseIcon,$withTooltip:overflow,$withBadge:!!badge,onKeyDown:function(e){if(!disabled){var _props_onKeyDown,_props_onClick,code=keyboardKey.r.getCode(e);(code===keyboardKey.r.Enter||code===keyboardKey.r[" "])&&(withCloseIcon?null==onClose||onClose():null==(_props_onClick=props.onClick)||_props_onClick.call(props,e)),null==(_props_onKeyDown=props.onKeyDown)||_props_onKeyDown.call(props,e)}},tabIndex:null!=(_props_tabIndex=props.tabIndex)?_props_tabIndex:disabled?-1:0,$clickable:!!props.onClick,children:(0,jsx_runtime.jsxs)(ChipContentWrapperStyled,{$dimension:dimension,$disabled:disabled,$appearance:appearance,$selected:selected,$withCloseIcon:withCloseIcon,children:[(iconStart||iconBefore)&&(0,jsx_runtime.jsx)(IconStartWrapperStyled,{children:(0,jsx_runtime.jsx)(IconWrapperStyled,{$dimension:dimension,$withCloseIcon:withCloseIcon,children:iconStart||iconBefore})}),(0,jsx_runtime.jsx)(ChipChildrenWrapperStyled,{ref:refItems,children:children}),void 0!==badge&&(0,jsx_runtime.jsx)(StyledBadge,{"data-badge":!0,dimension:dimension,appearance:badgeAppearance,children:badge}),!onClose&&(iconEnd||iconAfter)&&(0,jsx_runtime.jsx)(IconEndWrapperStyled,{$dimension:dimension,children:(0,jsx_runtime.jsx)(IconWrapperStyled,{$dimension:dimension,$withCloseIcon:withCloseIcon,children:iconEnd||iconAfter})}),onClose&&(0,jsx_runtime.jsx)(CloseIconButton,{dimension:"m"===dimension?"mBig":"s",highlightFocus:!1,onMouseDown:function(e){e.preventDefault(),null==onClose||onClose(props.id)},disabled:disabled,tabIndex:-1,appearance:"outlined"===appearance?"primary":"secondary"})]})})),tooltipVisible&&overflow&&(0,jsx_runtime.jsx)(Tooltip.m,{targetElement:chipRef.current,renderContent:void 0===_param_renderContentTooltip?defaultRenderContent:_param_renderContentTooltip})]})});Chips.displayName="Chips";try{Chips.displayName="Chips",Chips.__docgenInfo={description:"",displayName:"Chips",props:{dimension:{defaultValue:{value:"m"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:null,description:"Отключение чипса",name:"disabled",required:!1,type:{name:"boolean"}},appearance:{defaultValue:{value:"outlined"},description:"Вид чипсов",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},selected:{defaultValue:null,description:"Выбранная чипса",name:"selected",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Добавляет иконку для удаления чипсов",name:"onClose",required:!1,type:{name:"((id?: string) => void)"}},renderContentTooltip:{defaultValue:{value:"() => ''"},description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContentTooltip",required:!1,type:{name:"(() => ReactNode)"}},iconStart:{defaultValue:null,description:"Иконка перед текстом Chips'a",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:`Иконка после текста Chips'a.
Отображается, если не прокинут метод onClose, иначе отображется иконка закрытия (крест)`,name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconBefore:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 7.9.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка перед текстом Chips'a`,name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 7.9.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка после текста Chips'a.
Отображается, если не прокинут метод onClose, иначе отображется иконка закрытия (крест)`,name:"iconAfter",required:!1,type:{name:"ReactNode"}},badge:{defaultValue:null,description:"Число, которое будет отображено в компоненте Badge справа от content",name:"badge",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chips/index.tsx#Chips"]={docgenInfo:Chips.__docgenInfo,name:"Chips",path:"src/components/Chips/index.tsx#Chips"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=6235.45954b1d.iframe.bundle.js.map