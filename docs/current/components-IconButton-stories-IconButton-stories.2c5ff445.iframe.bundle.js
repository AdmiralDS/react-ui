"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8699],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/system/StarSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgStarSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgStarSolid=function SvgStarSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"m12.62 3.31 2.47 4.98 5.51.8c.56.08.79.79.39 1.2L17 14.17l.93 5.48c.11.56-.5 1.01-1.02.74L12 17.81 7.08 20.4c-.51.27-1.11-.17-1.02-.74L7 14.17l-3.98-3.88c-.42-.41-.19-1.12.37-1.2l5.52-.8 2.46-4.98a.69.69 0 0 1 1.25 0"})))};__webpack_require__.p},"./src/components/IconButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Spinner_SpinnerIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: `,`;
  background: `,`;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  vertical-align: middle;

  .icon-button-group[data-dimension='xl'] &,
  &[data-dimension='xl'] {
    padding: 0;
    height: 56px;
    width: 56px;
  }

  .icon-button-group[data-dimension='l'] &,
  &[data-dimension='l'] {
    height: 48px;
    width: 48px;
  }

  .icon-button-group[data-dimension='m'] &,
  &[data-dimension='m'] {
    height: 40px;
    width: 40px;
  }

  .icon-button-group[data-dimension='s'] &,
  &[data-dimension='s'] {
    height: 32px;
    width: 32px;
  }

  &:hover {
    cursor: `,`;
    background: var(--admiral-color-Opacity_Hover, `,`);
    & *[fill^='#'] {
      fill: `,`;
    }
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, `,`);
    & *[fill^='#'] {
      fill: `,`;
    }
  }

  &:disabled {
    cursor: `,`;
    background-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  vertical-align: top;
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: `,`px;
  height: `,`px;

  .icon-button-group[data-dimension='m'] &&,
  .icon-button-group[data-dimension='l'] &&,
  .icon-button-group[data-dimension='xl'] && {
    width: 24px;
    height: 24px;
  }
  .icon-button-group[data-dimension='s'] && {
    width: 20px;
    height: 20px;
  }

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }

  & *[fill^='#'] {
    fill: `,`;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  container-type: inline-size;
`]);return _templateObject2=function _templateObject(){return data},data}var StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.VM)(p.theme.shape),")")},function(param){return param.$skeleton?"red":"transparent"},function(param){return param.$skeleton?"default":"pointer"},function(p){return p.theme.color["Opacity/Hover"]},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(p){return p.theme.color["Opacity/Press"]},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(param){return param.$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(param){return param.$skeleton&&_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_4__.h}),IconButtonContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span(_templateObject1(),function(param){return"s"===param.$dimension?20:24},function(param){return"s"===param.$dimension?20:24},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")}),SpinnerContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(IconButtonContent)(_templateObject2()),IconButton=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"secondary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_type=_param.type,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,_param_disabled=_param.disabled,children=_param.children,props=_object_without_properties(_param,["appearance","dimension","type","loading","skeleton","disabled","children"]),disabledOptions=loading||void 0!==_param_disabled&&_param_disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton,_object_spread_props(_object_spread({ref:ref,"data-dimension":dimension,disabled:disabledOptions,type:void 0===_param_type?"button":_param_type,$skeleton:skeleton,$loading:loading,$appearance:appearance},props),{children:loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerContainer,{$dimension:dimension,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Spinner_SpinnerIcon__WEBPACK_IMPORTED_MODULE_5__.N,{})}):skeleton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconButtonContent,{$dimension:dimension}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconButtonContent,{$dimension:dimension,$appearance:appearance,children:children})}))});IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"xl"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButton/stories/IconButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconButtonAppearance:()=>IconButtonAppearance,IconButtonDimension:()=>IconButtonDimension,IconButtonState:()=>IconButtonState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconButton_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),IconButton=__webpack_require__("./src/components/IconButton/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),T=__webpack_require__("./src/components/T/index.tsx"),StarSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/StarSolid.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`]);return _templateObject1=function _templateObject(){return data},data}var WrapperIconButton=styled_components_browser_esm.Ay.div(_templateObject()),WrapperVertical=styled_components_browser_esm.Ay.div(_templateObject1()),IconButtonDimensionTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(WrapperIconButton,{children:[(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - xl"}),(0,jsx_runtime.jsx)(IconButton.K,_object_spread_props(_object_spread({},props),{dimension:"xl",children:(0,jsx_runtime.jsx)(StarSolid.h,{})}))]}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - l"}),(0,jsx_runtime.jsx)(IconButton.K,_object_spread_props(_object_spread({},props),{dimension:"l",children:(0,jsx_runtime.jsx)(StarSolid.h,{})}))]}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - m"}),(0,jsx_runtime.jsx)(IconButton.K,_object_spread_props(_object_spread({},props),{dimension:"m",children:(0,jsx_runtime.jsx)(StarSolid.h,{})}))]}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - s"}),(0,jsx_runtime.jsx)(IconButton.K,_object_spread_props(_object_spread({},props),{dimension:"s",children:(0,jsx_runtime.jsx)(StarSolid.h,{})}))]})]})})};try{IconButtonDimensionTemplate.displayName="IconButtonDimensionTemplate",IconButtonDimensionTemplate.__docgenInfo={description:"",displayName:"IconButtonDimensionTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/stories/IconButtonDimension.template.tsx#IconButtonDimensionTemplate"]={docgenInfo:IconButtonDimensionTemplate.__docgenInfo,name:"IconButtonDimensionTemplate",path:"src/components/IconButton/stories/IconButtonDimension.template.tsx#IconButtonDimensionTemplate"})}catch(__react_docgen_typescript_loader_error){}function IconButtonState_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconButtonState_template_templateObject(){var data=IconButtonState_template_tagged_template_literal([`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
`]);return IconButtonState_template_templateObject=function _templateObject(){return data},data}function IconButtonState_template_templateObject1(){var data=IconButtonState_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`]);return IconButtonState_template_templateObject1=function _templateObject(){return data},data}var IconButtonState_template_WrapperIconButton=styled_components_browser_esm.Ay.div(IconButtonState_template_templateObject()),IconButtonState_template_WrapperVertical=styled_components_browser_esm.Ay.div(IconButtonState_template_templateObject1()),IconButtonStateTemplate=function(props){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(IconButtonState_template_WrapperIconButton,{children:[(0,jsx_runtime.jsxs)(IconButtonState_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Loading"}),(0,jsx_runtime.jsx)(IconButton.K,{loading:!0,dimension:props.dimension})]}),(0,jsx_runtime.jsxs)(IconButtonState_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Disabled"}),(0,jsx_runtime.jsx)(IconButton.K,{disabled:!0,dimension:props.dimension,children:(0,jsx_runtime.jsx)(StarSolid.h,{})})]})]})})};try{IconButtonStateTemplate.displayName="IconButtonStateTemplate",IconButtonStateTemplate.__docgenInfo={description:"",displayName:"IconButtonStateTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/stories/IconButtonState.template.tsx#IconButtonStateTemplate"]={docgenInfo:IconButtonStateTemplate.__docgenInfo,name:"IconButtonStateTemplate",path:"src/components/IconButton/stories/IconButtonState.template.tsx#IconButtonStateTemplate"})}catch(__react_docgen_typescript_loader_error){}function IconButtonAppearance_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconButtonAppearance_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButtonAppearance_template_define_property(target,key,source[key])})}return target}function IconButtonAppearance_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButtonAppearance_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButtonAppearance_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function IconButtonAppearance_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconButtonAppearance_template_templateObject(){var data=IconButtonAppearance_template_tagged_template_literal([`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
`]);return IconButtonAppearance_template_templateObject=function _templateObject(){return data},data}function IconButtonAppearance_template_templateObject1(){var data=IconButtonAppearance_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`]);return IconButtonAppearance_template_templateObject1=function _templateObject(){return data},data}var IconButtonAppearance_template_WrapperIconButton=styled_components_browser_esm.Ay.div(IconButtonAppearance_template_templateObject()),IconButtonAppearance_template_WrapperVertical=styled_components_browser_esm.Ay.div(IconButtonAppearance_template_templateObject1()),IconButtonAppearanceTemplate=function(props){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(IconButtonAppearance_template_WrapperIconButton,{children:[(0,jsx_runtime.jsxs)(IconButtonAppearance_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Primary"}),(0,jsx_runtime.jsx)(IconButton.K,IconButtonAppearance_template_object_spread_props(IconButtonAppearance_template_object_spread({},props),{appearance:"primary",children:(0,jsx_runtime.jsx)(StarSolid.h,{})}))]}),(0,jsx_runtime.jsxs)(IconButtonAppearance_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Secondary"}),(0,jsx_runtime.jsx)(IconButton.K,IconButtonAppearance_template_object_spread_props(IconButtonAppearance_template_object_spread({},props),{appearance:"secondary",children:(0,jsx_runtime.jsx)(StarSolid.h,{})}))]})]})})};try{IconButtonAppearanceTemplate.displayName="IconButtonAppearanceTemplate",IconButtonAppearanceTemplate.__docgenInfo={description:"",displayName:"IconButtonAppearanceTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/stories/IconButtonAppearance.template.tsx#IconButtonAppearanceTemplate"]={docgenInfo:IconButtonAppearanceTemplate.__docgenInfo,name:"IconButtonAppearanceTemplate",path:"src/components/IconButton/stories/IconButtonAppearance.template.tsx#IconButtonAppearanceTemplate"})}catch(__react_docgen_typescript_loader_error){}let IconButtonDimension_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, T } from '@admiral-ds/react-ui';
import type { IconButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const WrapperIconButton = styled.div\`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
\`;

export const IconButtonDimensionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperIconButton>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <IconButton {...props} dimension="xl">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <IconButton {...props} dimension="l">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <IconButton {...props} dimension="m">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <IconButton {...props} dimension="s">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
      </WrapperIconButton>
    </ThemeProvider>
  );
};
`,IconButtonState_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { IconButton, T } from '@admiral-ds/react-ui';
import type { IconButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperIconButton = styled.div\`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
\`;

export const IconButtonStateTemplate = (props: IconButtonProps) => (
  <>
    <WrapperIconButton>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Loading
        </T>
        <IconButton loading dimension={props.dimension} />
      </WrapperVertical>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Disabled
        </T>
        <IconButton disabled dimension={props.dimension}>
          <StarSolid />
        </IconButton>
      </WrapperVertical>
      {/*<div>*/}
      {/*  <T font="Body/Body 1 Long" as="div">*/}
      {/*    Skeleton*/}
      {/*  </T>*/}
      {/*  <IconButton skeleton dimension="xl" />*/}
      {/*</div>*/}
    </WrapperIconButton>
  </>
);
`,IconButtonAppearance_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { IconButton, T } from '@admiral-ds/react-ui';
import type { IconButtonProps } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperIconButton = styled.div\`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
\`;

export const IconButtonAppearanceTemplate = (props: IconButtonProps) => (
  <>
    <WrapperIconButton>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Primary
        </T>
        <IconButton {...props} appearance="primary">
          <StarSolid />
        </IconButton>
      </WrapperVertical>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Secondary
        </T>
        <IconButton {...props} appearance="secondary">
          <StarSolid />
        </IconButton>
      </WrapperVertical>
    </WrapperIconButton>
  </>
);
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function IconButton_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function IconButton_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButton_stories_define_property(target,key,source[key])})}return target}function IconButton_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButton_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButton_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let IconButton_stories={title:"Admiral-2.1/IconButton",decorators:void 0,component:IconButton.K,parameters:{docs:{source:{code:null}},layout:"centered",design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17787"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18110"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18298"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18322"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18345"}]},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var IconButtonDimension={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconButtonDimensionTemplate,IconButton_stories_object_spread_props(IconButton_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconButtonDimension_templateraw_namespaceObject}}},name:"IconButton. Размеры"},IconButtonState={render:function(props){return(0,jsx_runtime.jsx)(IconButtonStateTemplate,IconButton_stories_object_spread({},props))},parameters:{docs:{source:{code:IconButtonState_templateraw_namespaceObject}}},name:"IconButton. Состояния"},IconButtonAppearance={render:function(props){return(0,jsx_runtime.jsx)(IconButtonAppearanceTemplate,IconButton_stories_object_spread({},props))},parameters:{docs:{source:{code:IconButtonAppearance_templateraw_namespaceObject}}},name:"IconButton. Appearance"};IconButtonDimension.parameters={...IconButtonDimension.parameters,docs:{...IconButtonDimension.parameters?.docs,source:{originalSource:`{
  render: IconButtonDimensionStory,
  parameters: {
    docs: {
      source: {
        code: IconButtonDimensionRaw
      }
    }
  },
  name: 'IconButton. Размеры'
}`,...IconButtonDimension.parameters?.docs?.source}}},IconButtonState.parameters={...IconButtonState.parameters,docs:{...IconButtonState.parameters?.docs,source:{originalSource:`{
  render: IconButtonStateStory,
  parameters: {
    docs: {
      source: {
        code: IconButtonStateRaw
      }
    }
  },
  name: 'IconButton. Состояния'
}`,...IconButtonState.parameters?.docs?.source}}},IconButtonAppearance.parameters={...IconButtonAppearance.parameters,docs:{...IconButtonAppearance.parameters?.docs,source:{originalSource:`{
  render: IconButtonAppearanceStory,
  parameters: {
    docs: {
      source: {
        code: IconButtonAppearanceRaw
      }
    }
  },
  name: 'IconButton. Appearance'
}`,...IconButtonAppearance.parameters?.docs?.source}}};let __namedExportsOrder=["IconButtonDimension","IconButtonState","IconButtonAppearance"]},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-IconButton-stories-IconButton-stories.2c5ff445.iframe.bundle.js.map