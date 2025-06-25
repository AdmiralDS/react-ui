"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[377],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/system/StarSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgStarSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgStarSolid=function SvgStarSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"m12.62 3.31 2.47 4.98 5.51.8c.56.08.79.79.39 1.2L17 14.17l.93 5.48c.11.56-.5 1.01-1.02.74L12 17.81 7.08 20.4c-.51.27-1.11-.17-1.02-.74L7 14.17l-3.98-3.88c-.42-.41-.19-1.12.37-1.2l5.52-.8 2.46-4.98a.69.69 0 0 1 1.25 0"})))};__webpack_require__.p},"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,He:()=>SegmentedControlBadge,I3:()=>ButtonBadge,nS:()=>BadgeComponent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject3=function _templateObject(){return data},data}var background=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"grey":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"dark":return"var(--admiral-color-Neutral_Neutral80, ".concat(theme.color["Neutral/Neutral 80"],")");case"whiteBlue":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"white":case"whiteInactive":case"whiteDisable":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");default:return"var(--admiral-color-Opacity_Neutral8, ".concat(theme.color["Opacity/Neutral 8"],")")}}),color=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":case"warning":case"success":case"error":case"grey":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"dark":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");case"whiteBlue":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"lightInactive":case"whiteInactive":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"whiteDisable":case"lightDisable":return"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),BadgeComponent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(param){return"s"===param.$dimension?"0 5px":"0 6px"},function(param){return"s"===param.$dimension?"16px":"20px"},function(param){return"s"===param.$dimension?"8px":"10px"},function(param){return"s"===param.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Caption/Caption 1"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 2 Long"]},background,color),Badge=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,_param_appearance=_param.appearance,locale=_param.locale,props=_object_without_properties(_param,["children","dimension","appearance","locale"]),theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.d,amountText=(null==locale?void 0:locale.amountAriaLabel)||theme.locales[theme.currentLocale].badge.amountAriaLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BadgeComponent,_object_spread_props(_object_spread({ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"light":_param_appearance,"aria-label":"".concat(amountText," ").concat(children)},props),{children:children}))});function getBadgeAppearance(appearance,disabled){switch(appearance){case"secondary":case"ghost":if(disabled)return"lightDisable";return"info";case"tertiary":if(disabled)return"whiteDisable";return"white";default:if(disabled)return"whiteDisable";return"whiteBlue"}}Badge.displayName="Badge";var ButtonBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]),isVisible="primary"===appearance||"secondary"===appearance||"tertiary"===appearance||"ghost"===appearance,badgeAppearance=getBadgeAppearance(appearance,void 0!==_param_disabled&&_param_disabled);return isVisible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:badgeAppearance})):null},SegmentedBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(Badge)(_templateObject3(),function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral00, ".concat(p.theme.color["Neutral/Neutral 00"],")"):"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")")}),SegmentedControlBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"outlined":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SegmentedBadge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:void 0!==_param_disabled&&_param_disabled?"outlined"==appearance?"lightDisable":"whiteDisable":"outlined"==appearance?"info":"white"}))};try{BadgeComponent.displayName="BadgeComponent",BadgeComponent.__docgenInfo={description:"",displayName:"BadgeComponent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#BadgeComponent"]={docgenInfo:BadgeComponent.__docgenInfo,name:"BadgeComponent",path:"src/components/Badge/index.tsx#BadgeComponent"})}catch(__react_docgen_typescript_loader_error){}try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:{value:"outlined"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"white"'},{value:'"grey"'},{value:'"dark"'},{value:'"light"'},{value:'"warning"'},{value:'"info"'},{value:'"lightInactive"'},{value:'"lightDisable"'},{value:'"whiteInactive"'},{value:'"whiteDisable"'},{value:'"whiteBlue"'}]}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}try{ButtonBadge.displayName="ButtonBadge",ButtonBadge.__docgenInfo={description:"",displayName:"ButtonBadge",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}},appearance:{defaultValue:{value:"outlined"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"white"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#ButtonBadge"]={docgenInfo:ButtonBadge.__docgenInfo,name:"ButtonBadge",path:"src/components/Badge/index.tsx#ButtonBadge"})}catch(__react_docgen_typescript_loader_error){}try{SegmentedControlBadge.displayName="SegmentedControlBadge",SegmentedControlBadge.__docgenInfo={description:"",displayName:"SegmentedControlBadge",props:{disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}},appearance:{defaultValue:{value:"outlined"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#SegmentedControlBadge"]={docgenInfo:SegmentedControlBadge.__docgenInfo,name:"SegmentedControlBadge",path:"src/components/Badge/index.tsx#SegmentedControlBadge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonLoader:()=>ButtonLoader,ButtonPlayground:()=>ButtonPlayground,ButtonStyles:()=>ButtonStyles,ButtonWithBadge:()=>ButtonWithBadge,ButtonWithIcon:()=>ButtonWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Button=__webpack_require__("./src/components/Button/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),T=__webpack_require__("./src/components/T/index.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: 20px;
  width: 20px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    `,`
  );
  padding: 2px;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  display: flex;
`]);return _templateObject3=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject()),DarkDiv=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Special/Dark Static Neutral 00"]}),WrapperVertical=styled_components_browser_esm.Ay.div(_templateObject2()),Wrapper=styled_components_browser_esm.Ay.div(_templateObject3()),handleClick=function(){console.log("clicked")},ButtonLoaderTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size XL"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",onClick:handleClick,children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",loading:!0,onClick:handleClick,children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"secondary",loading:!0,onClick:handleClick,children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"tertiary",loading:!0,onClick:handleClick,children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"ghost",loading:!0,children:"Button 56"}),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"white",loading:!0,children:"Button 56"})}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"danger",loading:!0,children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"success",loading:!0,children:"Button 56"})]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size L"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",children:"Button 48"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"primary",loading:!0,children:"Button 48"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"secondary",loading:!0,children:"Button 48"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"tertiary",loading:!0,children:"Button 48"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"ghost",loading:!0,children:"Button 48"}),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"white",loading:!0,children:"Button 48"})}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"danger",loading:!0,children:"Button 48"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"success",loading:!0,children:"Button 48"})]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size M"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",children:"Button 40"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"primary",loading:!0,children:"Button 40"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"secondary",loading:!0,children:"Button 40"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"tertiary",loading:!0,children:"Button 40"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"ghost",loading:!0,children:"Button 40"}),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"white",loading:!0,children:"Button 40"})}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"danger",loading:!0,children:"Button 40"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"success",loading:!0,children:"Button 40"})]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size S"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",children:"Button 32"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"primary",loading:!0,children:"Button 32"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"secondary",loading:!0,children:"Button 32"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"tertiary",loading:!0,children:"Button 32"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"ghost",loading:!0,children:"Button 32"}),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"white",loading:!0,children:"Button 32"})}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"danger",loading:!0,children:"Button 32"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"success",loading:!0,children:"Button 32"})]})]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Button with loader stretch"}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Button.$n,{disabled:!0,loading:!0,style:{width:"100%"}})]})]})},StarSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/StarSolid.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function ButtonWithIcon_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ButtonWithIcon_template_templateObject(){var data=ButtonWithIcon_template_tagged_template_literal([`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px;
    flex-basis: 170px;
  }

  justify-content: space-between;
  align-items: center;
`]);return ButtonWithIcon_template_templateObject=function _templateObject(){return data},data}function ButtonWithIcon_template_templateObject1(){var data=ButtonWithIcon_template_tagged_template_literal([`
  height: 20px;
  width: 20px;
`]);return ButtonWithIcon_template_templateObject1=function _templateObject(){return data},data}function ButtonWithIcon_template_templateObject2(){var data=ButtonWithIcon_template_tagged_template_literal([`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    `,`
  );
  padding: 2px;
`]);return ButtonWithIcon_template_templateObject2=function _templateObject(){return data},data}var WrapperButton=styled_components_browser_esm.Ay.div(ButtonWithIcon_template_templateObject()),ButtonWithIcon_template_Separator=styled_components_browser_esm.Ay.div(ButtonWithIcon_template_templateObject1()),ButtonWithIcon_template_DarkDiv=styled_components_browser_esm.Ay.div(ButtonWithIcon_template_templateObject2(),function(p){return p.theme.color["Special/Dark Static Neutral 00"]}),ButtonWithIconTemplate=function(props){return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(props.themeBorderKind,props.CSSCustomProps),children:[(0,jsx_runtime.jsxs)(WrapperButton,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - xl"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - l"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"secondary",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 48"})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - m"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"m",appearance:"danger",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 40"})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Ghost - xl"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"ghost",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})]}),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(ButtonWithIcon_template_DarkDiv,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{color:"white"},children:"White - l"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"white",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 48"})]})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - s"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"success",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 32"})]})]}),(0,jsx_runtime.jsx)(ButtonWithIcon_template_Separator,{}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Button with icon stretch"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"l",appearance:"tertiary",style:{width:"100%"},iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button"})]})]})};try{ButtonWithIconTemplate.displayName="ButtonWithIconTemplate",ButtonWithIconTemplate.__docgenInfo={description:"",displayName:"ButtonWithIconTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"white"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/stories/ButtonWithIcon.template.tsx#ButtonWithIconTemplate"]={docgenInfo:ButtonWithIconTemplate.__docgenInfo,name:"ButtonWithIconTemplate",path:"src/components/Button/stories/ButtonWithIcon.template.tsx#ButtonWithIconTemplate"})}catch(__react_docgen_typescript_loader_error){}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ButtonStyles_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ButtonStyles_template_templateObject(){var data=ButtonStyles_template_tagged_template_literal([`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  `,`;
`]);return ButtonStyles_template_templateObject=function _templateObject(){return data},data}var ButtonContainer=styled_components_browser_esm.Ay.div(ButtonStyles_template_templateObject(),function(p){return"white"===p.$appearance&&"background-color: #2B313B;"}),ButtonStylesTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(ButtonContainer,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{})})]}),(0,jsx_runtime.jsxs)(ButtonContainer,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"secondary",children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"secondary",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"secondary",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"secondary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{})})]}),(0,jsx_runtime.jsxs)(ButtonContainer,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"tertiary",children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"tertiary",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"tertiary",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"tertiary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{})})]}),(0,jsx_runtime.jsxs)(ButtonContainer,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"ghost",children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"ghost",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"ghost",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"ghost",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{})})]}),(0,jsx_runtime.jsxs)(ButtonContainer,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"danger",children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"danger",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"danger",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"danger",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{})})]}),(0,jsx_runtime.jsxs)(ButtonContainer,{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"success",children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"success",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"success",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"success",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{})})]}),(0,jsx_runtime.jsxs)(ButtonContainer,{$appearance:"white",children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"white",children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"white",iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"white",iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:props.dimension,appearance:"white",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{})})]})]})};try{ButtonStylesTemplate.displayName="ButtonStylesTemplate",ButtonStylesTemplate.__docgenInfo={description:"",displayName:"ButtonStylesTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"white"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/stories/ButtonStyles.template.tsx#ButtonStylesTemplate"]={docgenInfo:ButtonStylesTemplate.__docgenInfo,name:"ButtonStylesTemplate",path:"src/components/Button/stories/ButtonStyles.template.tsx#ButtonStylesTemplate"})}catch(__react_docgen_typescript_loader_error){}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ButtonPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ButtonPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ButtonPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ButtonPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ButtonPlayground_template_templateObject(){var data=ButtonPlayground_template_tagged_template_literal([`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  `,`;
`]);return ButtonPlayground_template_templateObject=function _templateObject(){return data},data}var ButtonPlayground_template_ButtonContainer=styled_components_browser_esm.Ay.div(ButtonPlayground_template_templateObject(),function(p){return"white"===p.$appearance&&"background-color: #2B313B;"}),ButtonPlaygroundTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ButtonPlayground_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Кнопки представлены в четырех размерностях XL, L, M и S. Для дополнительных акцентов и более прозрачных действий могут применяться кнопки с иконками и текстом. Иконка может быть как перед надписью, так и после (iconStart/iconEnd). В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это иконки, значения которых общепонятны и не вызывают сомнений."}),(0,jsx_runtime.jsxs)(ButtonPlayground_template_ButtonContainer,{$appearance:props.appearance,children:[(0,jsx_runtime.jsx)(Button.$n,_object_spread_props(_object_spread({},props),{children:"Button 56"})),(0,jsx_runtime.jsx)(Button.$n,_object_spread_props(_object_spread({},props),{iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(Button.$n,_object_spread_props(_object_spread({},props),{iconEnd:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(Button.$n,_object_spread_props(_object_spread({},props),{iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),displayAsSquare:!0}))]})]})};try{ButtonPlaygroundTemplate.displayName="ButtonPlaygroundTemplate",ButtonPlaygroundTemplate.__docgenInfo={description:"",displayName:"ButtonPlaygroundTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"white"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/stories/ButtonPlayground.template.tsx#ButtonPlaygroundTemplate"]={docgenInfo:ButtonPlaygroundTemplate.__docgenInfo,name:"ButtonPlaygroundTemplate",path:"src/components/Button/stories/ButtonPlayground.template.tsx#ButtonPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var Badge=__webpack_require__("./src/components/Badge/index.tsx");function ButtonWithBadge_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ButtonWithBadge_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ButtonWithBadge_template_define_property(target,key,source[key])})}return target}function ButtonWithBadge_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ButtonWithBadge_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ButtonWithBadge_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ButtonWithBadge_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ButtonWithBadge_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ButtonWithBadge_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ButtonWithBadge_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ButtonWithBadge_template_templateObject(){var data=ButtonWithBadge_template_tagged_template_literal([`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  `,`;
`]);return ButtonWithBadge_template_templateObject=function _templateObject(){return data},data}var ButtonWithBadge_template_ButtonContainer=styled_components_browser_esm.Ay.div(ButtonWithBadge_template_templateObject(),function(p){return"white"===p.$appearance&&"background-color: #2B313B;"}),ButtonWithBadgeTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ButtonWithBadge_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"В кнопки Primary, Secondary и Ghost можно добавлять компонент Badge"}),(0,jsx_runtime.jsxs)(ButtonWithBadge_template_ButtonContainer,{$appearance:props.appearance,children:[(0,jsx_runtime.jsxs)(Button.$n,ButtonWithBadge_template_object_spread_props(ButtonWithBadge_template_object_spread({},props),{appearance:"primary",displayAsSquare:!1,children:["Button",(0,jsx_runtime.jsx)(Badge.I3,{appearance:"primary",disabled:props.disabled||props.displayAsDisabled,children:"5"})]})),(0,jsx_runtime.jsxs)(Button.$n,ButtonWithBadge_template_object_spread_props(ButtonWithBadge_template_object_spread({},props),{appearance:"secondary",displayAsSquare:!1,children:["Button",(0,jsx_runtime.jsx)(Badge.I3,{appearance:"secondary",disabled:props.disabled||props.displayAsDisabled,children:"5"})]})),(0,jsx_runtime.jsxs)(Button.$n,ButtonWithBadge_template_object_spread_props(ButtonWithBadge_template_object_spread({},props),{appearance:"tertiary",displayAsSquare:!1,children:["Button",(0,jsx_runtime.jsx)(Badge.I3,{appearance:"tertiary",disabled:props.disabled||props.displayAsDisabled,children:"5"})]})),(0,jsx_runtime.jsxs)(Button.$n,ButtonWithBadge_template_object_spread_props(ButtonWithBadge_template_object_spread({},props),{appearance:"ghost",displayAsSquare:!1,children:["Button",(0,jsx_runtime.jsx)(Badge.I3,{appearance:"ghost",disabled:props.disabled||props.displayAsDisabled,children:"5"})]}))]})]})};try{ButtonWithBadgeTemplate.displayName="ButtonWithBadgeTemplate",ButtonWithBadgeTemplate.__docgenInfo={description:"",displayName:"ButtonWithBadgeTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"white"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/stories/ButtonWithBadge.template.tsx#ButtonWithBadgeTemplate"]={docgenInfo:ButtonWithBadgeTemplate.__docgenInfo,name:"ButtonWithBadgeTemplate",path:"src/components/Button/stories/ButtonWithBadge.template.tsx#ButtonWithBadgeTemplate"})}catch(__react_docgen_typescript_loader_error){}let ButtonLoader_templateraw_namespaceObject=`import styled from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 20px;
\`;

const DarkDiv = styled.div\`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    \${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
\`;

const Wrapper = styled.div\`
  display: flex;
\`;

const handleClick = () => {
  // eslint-disable-next-line no-console
  console.log('clicked');
};

export const ButtonLoaderTemplate = () => {
  return (
    <>
      <Wrapper>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size XL
          </T>
          <Button dimension="xl" onClick={handleClick}>
            Button 56
          </Button>
          <Button dimension="xl" appearance="primary" loading onClick={handleClick}>
            Button 56
          </Button>
          <Button dimension="xl" appearance="secondary" loading onClick={handleClick}>
            Button 56
          </Button>
          <Button dimension="xl" appearance="tertiary" loading onClick={handleClick}>
            Button 56
          </Button>
          <Button dimension="xl" appearance="ghost" loading>
            Button 56
          </Button>
          <DarkDiv>
            <Button dimension="xl" appearance="white" loading>
              Button 56
            </Button>
          </DarkDiv>
          <Button dimension="xl" appearance="danger" loading>
            Button 56
          </Button>
          <Button dimension="xl" appearance="success" loading>
            Button 56
          </Button>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size L
          </T>
          <Button dimension="l">Button 48</Button>
          <Button dimension="l" appearance="primary" loading>
            Button 48
          </Button>
          <Button dimension="l" appearance="secondary" loading>
            Button 48
          </Button>
          <Button dimension="l" appearance="tertiary" loading>
            Button 48
          </Button>
          <Button dimension="l" appearance="ghost" loading>
            Button 48
          </Button>
          <DarkDiv>
            <Button dimension="l" appearance="white" loading>
              Button 48
            </Button>
          </DarkDiv>
          <Button dimension="l" appearance="danger" loading>
            Button 48
          </Button>
          <Button dimension="l" appearance="success" loading>
            Button 48
          </Button>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size M
          </T>
          <Button dimension="m">Button 40</Button>
          <Button dimension="m" appearance="primary" loading>
            Button 40
          </Button>
          <Button dimension="m" appearance="secondary" loading>
            Button 40
          </Button>
          <Button dimension="m" appearance="tertiary" loading>
            Button 40
          </Button>
          <Button dimension="m" appearance="ghost" loading>
            Button 40
          </Button>
          <DarkDiv>
            <Button dimension="m" appearance="white" loading>
              Button 40
            </Button>
          </DarkDiv>
          <Button dimension="m" appearance="danger" loading>
            Button 40
          </Button>
          <Button dimension="m" appearance="success" loading>
            Button 40
          </Button>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size S
          </T>
          <Button dimension="s">Button 32</Button>
          <Button dimension="s" appearance="primary" loading>
            Button 32
          </Button>
          <Button dimension="s" appearance="secondary" loading>
            Button 32
          </Button>
          <Button dimension="s" appearance="tertiary" loading>
            Button 32
          </Button>
          <Button dimension="s" appearance="ghost" loading>
            Button 32
          </Button>
          <DarkDiv>
            <Button dimension="s" appearance="white" loading>
              Button 32
            </Button>
          </DarkDiv>
          <Button dimension="s" appearance="danger" loading>
            Button 32
          </Button>
          <Button dimension="s" appearance="success" loading>
            Button 32
          </Button>
        </WrapperVertical>
      </Wrapper>
      <Separator />
      <div>
        <T font="Body/Body 1 Long" as="div">
          Button with loader stretch
        </T>
        <Separator />
        <Button disabled loading style={{ width: '100%' }}></Button>
      </div>
    </>
  );
};
`,ButtonWithIcon_templateraw_namespaceObject=`import styled, { ThemeProvider } from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';
import type { ButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const WrapperButton = styled.div\`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin: 8px;
    flex-basis: 170px;
  }

  justify-content: space-between;
  align-items: center;
\`;

const Separator = styled.div\`
  height: 20px;
  width: 20px;
\`;

const DarkDiv = styled.div\`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    \${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
\`;

export const ButtonWithIconTemplate = (
  props: ButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean },
) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(props.themeBorderKind, props.CSSCustomProps)}>
      <WrapperButton>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <Button dimension="xl" appearance="primary" iconEnd={<StarSolid />}>
            Button 56
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <Button dimension="l" appearance="secondary" iconStart={<StarSolid />}>
            Button 48
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <Button dimension="m" appearance="danger" iconEnd={<StarSolid />}>
            Button 40
          </Button>
        </div>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Ghost - xl
          </T>
          <Button dimension="xl" appearance="ghost" iconEnd={<StarSolid />}>
            Button 56
          </Button>
        </div>
        <>
          <DarkDiv>
            <T font="Body/Body 1 Long" as="div" style={{ color: 'white' }}>
              White - l
            </T>
            <Button dimension="l" appearance="white" iconEnd={<StarSolid />}>
              Button 48
            </Button>
          </DarkDiv>
        </>
        <div>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <Button dimension="s" appearance="success" iconStart={<StarSolid />}>
            Button 32
          </Button>
        </div>
      </WrapperButton>
      <Separator />
      <div>
        <T font="Body/Body 1 Long" as="div">
          Button with icon stretch
        </T>
        <Button dimension="l" appearance="tertiary" style={{ width: '100%' }} iconStart={<StarSolid />}>
          Button
        </Button>
      </div>
    </ThemeProvider>
  );
};
`,ButtonStyles_templateraw_namespaceObject=`import styled, { ThemeProvider } from 'styled-components';

import { Button } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>\`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  \${(p) => p.$appearance === 'white' && 'background-color: #2B313B;'};
\`;

export const ButtonStylesTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ButtonContainer>
        <Button dimension={props.dimension}>Button 56</Button>

        <Button dimension={props.dimension} iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="secondary">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="secondary" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="tertiary">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="tertiary" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="tertiary" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="tertiary" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="ghost">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="ghost" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="danger">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="danger" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer>
        <Button dimension={props.dimension} appearance="success">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="success" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
      <ButtonContainer $appearance="white">
        <Button dimension={props.dimension} appearance="white">
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button dimension={props.dimension} appearance="white" displayAsSquare iconStart={<StarSolid />} />
      </ButtonContainer>
    </ThemeProvider>
  );
};
`,ButtonPlayground_templateraw_namespaceObject=`import styled, { ThemeProvider } from 'styled-components';

import { Button, T } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>\`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  \${(p) => p.$appearance === 'white' && 'background-color: #2B313B;'};
\`;

export const ButtonPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        Кнопки представлены в четырех размерностях XL, L, M и S. Для дополнительных акцентов и более прозрачных действий
        могут применяться кнопки с иконками и текстом. Иконка может быть как перед надписью, так и после
        (iconStart/iconEnd). В некоторых случаях могут использоваться кнопки только с иконками. Как правило, это иконки,
        значения которых общепонятны и не вызывают сомнений.
      </T>
      <ButtonContainer $appearance={props.appearance}>
        <Button {...props}>Button 56</Button>

        <Button {...props} iconStart={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} iconEnd={<StarSolid />}>
          Button 56
        </Button>

        <Button {...props} iconStart={<StarSolid />} displayAsSquare />
      </ButtonContainer>
    </ThemeProvider>
  );
};
`,ButtonWithBadge_templateraw_namespaceObject=`import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonBadge, T } from '@admiral-ds/react-ui';
import type { ButtonProps, ButtonAppearance, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ButtonContainer = styled.div<{ $appearance?: ButtonAppearance }>\`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }

  \${(p) => p.$appearance === 'white' && 'background-color: #2B313B;'};
\`;

export const ButtonWithBadgeTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        В кнопки Primary, Secondary и Ghost можно добавлять компонент Badge
      </T>
      <ButtonContainer $appearance={props.appearance}>
        <Button {...props} appearance="primary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="primary" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>

        <Button {...props} appearance="secondary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="secondary" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>

        <Button {...props} appearance="tertiary" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="tertiary" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>

        <Button {...props} appearance="ghost" displayAsSquare={false}>
          Button
          <ButtonBadge appearance="ghost" disabled={props.disabled || props.displayAsDisabled}>
            5
          </ButtonBadge>
        </Button>
      </ButtonContainer>
    </ThemeProvider>
  );
};
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function Button_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Button_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Button_stories_define_property(target,key,source[key])})}return target}function Button_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Button_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Button_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let Button_stories={title:"Admiral-2.1/Button",component:Button.$n,decorators:void 0,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19734"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A16209"}]},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},skeleton:{control:"boolean"},appearance:{options:["primary","secondary","tertiary","danger","success","ghost","white"],control:{type:"select"}},onClick:{action:"clicked"},type:{options:["button","submit","reset"],control:{type:"radio"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},disabled:{control:{type:"boolean"}},displayAsSquare:{control:{type:"boolean"}},displayAsDisabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},icon:{control:!1},iconPlace:{control:!1},iconStart:{control:!1},iconEnd:{control:!1},buttonCssMixin:{control:!1}}};var ButtonPlayground={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ButtonPlaygroundTemplate,Button_stories_object_spread_props(Button_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ButtonPlayground_templateraw_namespaceObject}}},name:"Button. Playground"},ButtonStyles={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ButtonStylesTemplate,Button_stories_object_spread_props(Button_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ButtonStyles_templateraw_namespaceObject}}},name:"Button. Стили"},ButtonWithIcon={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ButtonWithIconTemplate,Button_stories_object_spread_props(Button_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ButtonWithIcon_templateraw_namespaceObject}}},name:"Button с иконкой"},ButtonLoader={render:function(props){return(0,jsx_runtime.jsx)(ButtonLoaderTemplate,Button_stories_object_spread({},props))},parameters:{docs:{source:{code:ButtonLoader_templateraw_namespaceObject}}},name:"Button. Загрузка"},ButtonWithBadge={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ButtonWithBadgeTemplate,Button_stories_object_spread_props(Button_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ButtonWithBadge_templateraw_namespaceObject}}},name:"Button с Badge"};ButtonPlayground.parameters={...ButtonPlayground.parameters,docs:{...ButtonPlayground.parameters?.docs,source:{originalSource:`{
  render: ButtonPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: ButtonPlaygroundRaw
      }
    }
  },
  name: 'Button. Playground'
}`,...ButtonPlayground.parameters?.docs?.source}}},ButtonStyles.parameters={...ButtonStyles.parameters,docs:{...ButtonStyles.parameters?.docs,source:{originalSource:`{
  render: ButtonStylesStory,
  parameters: {
    docs: {
      source: {
        code: ButtonStylesRaw
      }
    }
  },
  name: 'Button. Стили'
}`,...ButtonStyles.parameters?.docs?.source}}},ButtonWithIcon.parameters={...ButtonWithIcon.parameters,docs:{...ButtonWithIcon.parameters?.docs,source:{originalSource:`{
  render: ButtonWithIconStory,
  parameters: {
    docs: {
      source: {
        code: ButtonWithIconRaw
      }
    }
  },
  name: 'Button с иконкой'
}`,...ButtonWithIcon.parameters?.docs?.source}}},ButtonLoader.parameters={...ButtonLoader.parameters,docs:{...ButtonLoader.parameters?.docs,source:{originalSource:`{
  render: ButtonLoaderStory,
  parameters: {
    docs: {
      source: {
        code: ButtonLoaderRaw
      }
    }
  },
  name: 'Button. Загрузка'
}`,...ButtonLoader.parameters?.docs?.source}}},ButtonWithBadge.parameters={...ButtonWithBadge.parameters,docs:{...ButtonWithBadge.parameters?.docs,source:{originalSource:`{
  render: ButtonWithBadgeStory,
  parameters: {
    docs: {
      source: {
        code: ButtonWithBadgeRaw
      }
    }
  },
  name: 'Button с Badge'
}`,...ButtonWithBadge.parameters?.docs?.source}}};let __namedExportsOrder=["ButtonPlayground","ButtonStyles","ButtonWithIcon","ButtonLoader","ButtonWithBadge"]},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-Button-stories-Button-stories.49f0b89b.iframe.bundle.js.map