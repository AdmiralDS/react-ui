"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5535],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m7.79 3.28c.27.28.73.27 1-.02l4.42-4.8c.24-.27.22-.68-.03-.92a.66.66 0 0 0-.93.04l-3.98 4.34-2.4-2.4a.67.67 0 0 0-.93 0c-.25.25-.25.67 0 .92z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m13-3.92c.25.25.25.66 0 .92l-3.09 3 3 3.08c.26.25.26.66 0 .92-.25.25-.66.25-.91 0l-3-3.09L9 16c-.26.25-.67.25-.92 0a.64.64 0 0 1 0-.92l3-3.08-3-3a.64.64 0 0 1 0-.92.64.64 0 0 1 .92 0l3 3 3.08-3a.64.64 0 0 1 .92 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 3c-4.98 0-9 4.02-9 9 0 4.97 4.02 9 9 9a9 9 0 0 0 9-9c0-4.98-4.03-9-9-9m0 10.69c.35 0 .64-.29.64-.65V7.89c0-.35-.29-.65-.64-.65-.36 0-.65.3-.65.65v5.15c0 .36.29.65.65.65m.85 2.21a.856.856 0 0 1-1.71 0 .856.856 0 0 1 1.71 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-4.75c-.47 0-.86.38-.86.84 0 .47.39.86.86.86.46 0 .85-.39.85-.86 0-.46-.39-.84-.85-.84M14.1 16c0 .41-.34.75-.75.75h-.06c-1.13 0-2.04-.92-2.04-2.05v-3.75c0-.42.33-.75.75-.75.41 0 .75.33.75.75v3.75c0 .3.24.55.54.55h.06c.41 0 .75.33.75.75"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/DeleteOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgDeleteOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgDeleteOutline=function SvgDeleteOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12.65 2.66c0-.35-.3-.65-.65-.65-.36 0-.65.3-.65.65v1.99H4.33c-.36 0-.65.29-.65.65 0 .35.29.65.65.65h.69l.76 11.49c.1 1.58 1.4 2.81 2.99 2.81h6.36c1.57 0 2.9-1.23 2.99-2.81l.77-11.49h.79c.35 0 .65-.3.65-.65 0-.36-.3-.65-.65-.65h-7.03zM7.08 17.35l-.71-11.4h11.17l-.7 11.41c-.06.89-.8 1.59-1.7 1.59H8.78c-.9 0-1.64-.7-1.7-1.6m3.1-8.88c.35 0 .65.29.65.65v6.35c0 .35-.3.65-.65.65-.36 0-.65-.3-.65-.65V9.12c0-.36.29-.65.65-.65m4.3.65c0-.36-.3-.65-.65-.65-.36 0-.65.29-.65.65v6.35c0 .35.29.65.65.65.35 0 .65-.3.65-.65z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/PrintOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgPrintOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgPrintOutline=function SvgPrintOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M8.79 3c-1.07 0-1.94.87-1.94 1.95v1.1c0 .36.29.65.65.65.35 0 .64-.29.64-.65v-1.1c0-.36.3-.65.65-.65h6.41c.35 0 .65.29.65.65v1.1c0 .36.29.65.65.65.35 0 .64-.29.64-.65v-1.1c0-1.08-.87-1.95-1.94-1.95zm6.91 18c.71 0 1.3-.59 1.3-1.3V18h1c1.65 0 3-1.35 3-3v-4a3.01 3.01 0 0 0-3-3.01H6c-1.66 0-3 1.35-3 3.01v4c0 1.65 1.34 3 3 3h1v1.7c0 .71.58 1.3 1.29 1.3zm2.3-4.3h-1v-3c0-.39-.32-.7-.71-.7H7.7c-.39 0-.7.31-.7.7v3H6c-.94 0-1.71-.77-1.71-1.7v-4c0-.94.77-1.71 1.71-1.71h12c.93 0 1.7.77 1.7 1.71v4c0 .93-.77 1.7-1.7 1.7m.69-5.22c0 .55-.45 1-1 1s-1-.45-1-1c0-.56.45-1 1-1s1 .44 1 1M8.29 19.7h7.41v-5.4H8.29z"})))};__webpack_require__.p},"./src/components/IconButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Spinner_SpinnerIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject2=function _templateObject(){return data},data}var StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.VM)(p.theme.shape),")")},function(param){return param.$skeleton?"red":"transparent"},function(param){return param.$skeleton?"default":"pointer"},function(p){return p.theme.color["Opacity/Hover"]},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(p){return p.theme.color["Opacity/Press"]},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(param){return param.$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(param){return param.$skeleton&&_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_5__.h}),IconButtonContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span(_templateObject1(),function(param){return"s"===param.$dimension?20:24},function(param){return"s"===param.$dimension?20:24},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")}),SpinnerContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(IconButtonContent)(_templateObject2()),IconButton=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"secondary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_type=_param.type,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,_param_disabled=_param.disabled,children=_param.children,props=_object_without_properties(_param,["appearance","dimension","type","loading","skeleton","disabled","children"]),disabledOptions=loading||void 0!==_param_disabled&&_param_disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton,_object_spread_props(_object_spread({ref:ref,"data-dimension":dimension,disabled:disabledOptions,type:void 0===_param_type?"button":_param_type,$skeleton:skeleton,$loading:loading,$appearance:appearance},props),{children:loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerContainer,{$dimension:dimension,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Spinner_SpinnerIcon__WEBPACK_IMPORTED_MODULE_3__.N,{})}):skeleton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconButtonContent,{$dimension:dimension}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconButtonContent,{$dimension:dimension,$appearance:appearance,children:children})}))});IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"xl"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconButtonGroup/stories/IconButtonGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconButtonGroupDimension:()=>IconButtonGroupDimension,IconButtonGroupPlayground:()=>IconButtonGroupPlayground,IconButtonGroupState:()=>IconButtonGroupState,IconButtonGroupTooltip:()=>IconButtonGroupTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconButtonGroup_stories});var _path,EditOutline_path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: inline-flex;
  white-space: nowrap;
  & > button {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, `,`);
    flex: 1 0 auto;
  }
  & > button:not(:first-child) {
    margin-left: -1px;
  }
  & > button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  // обводка элемента при фокусе с клавиатуры должна отображаться поверх соседних кнопок
  & > button:focus-visible {
    z-index: 1;
  }
`]);return _templateObject=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 20"]}),IconButtonGroup=function(_param){var children=_param.children,_param_dimension=_param.dimension,_param_className=_param.className,props=_object_without_properties(_param,["children","dimension","className"]);return(0,jsx_runtime.jsx)(Wrapper,_object_spread_props(_object_spread({role:"group","data-dimension":void 0===_param_dimension?"xl":_param_dimension,className:"icon-button-group "+(void 0===_param_className?"":_param_className)},props),{children:children}))};IconButtonGroup.displayName="IconButtonGroup";try{IconButtonGroup.displayName="IconButtonGroup",IconButtonGroup.__docgenInfo={description:"",displayName:"IconButtonGroup",props:{dimension:{defaultValue:{value:"xl"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButtonGroup/index.tsx#IconButtonGroup"]={docgenInfo:IconButtonGroup.__docgenInfo,name:"IconButtonGroup",path:"src/components/IconButtonGroup/index.tsx#IconButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),IconButton=__webpack_require__("./src/components/IconButton/index.tsx"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),PrintOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PrintOutline.svg");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgShareOutline=function SvgShareOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M21 5.99c0 1.66-1.35 3-3 3-.99 0-1.87-.48-2.42-1.21L8.94 11.4c.03.19.06.39.06.59 0 .21-.03.41-.06.6l6.64 3.63C16.12 15.48 17 15 18 15c1.65 0 3 1.34 3 3 0 1.65-1.35 3-3 3-1.66 0-3-1.35-3-3 0-.2.01-.4.05-.58l-6.64-3.64c-.55.73-1.43 1.21-2.41 1.21-1.66 0-3-1.34-3-3 0-1.65 1.34-3 3-3 .98 0 1.86.48 2.41 1.22l6.64-3.62c-.03-.2-.05-.39-.05-.6C15 4.34 16.34 3 18 3a3 3 0 0 1 3 2.99m-1.3 0a1.705 1.705 0 0 1-3.41 0c0-.93.77-1.7 1.71-1.7.93 0 1.7.77 1.7 1.7m0 12.01c0 .93-.77 1.7-1.7 1.7-.94 0-1.71-.77-1.71-1.7a1.705 1.705 0 0 1 3.41 0M6 13.69c.93 0 1.7-.76 1.7-1.7a1.705 1.705 0 0 0-3.41 0c0 .94.77 1.7 1.71 1.7"})))};function EditOutline_extends(){return(EditOutline_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}__webpack_require__.p;var SvgEditOutline=function SvgEditOutline(props){return react.createElement("svg",EditOutline_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),EditOutline_path||(EditOutline_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M16.04 3.88c.51-.51 1.33-.51 1.84 0l1.7 1.7c.5.5.5 1.33 0 1.83L9.1 17.89c-.39.39-.9.67-1.44.8l-1.73.4c-.94.21-1.78-.63-1.56-1.56l.4-1.73c.12-.55.4-1.05.8-1.45zm.92.92 1.7 1.7-1.62 1.62-1.7-1.7zm-2.54 2.54-7.93 7.93c-.23.23-.39.51-.46.82l-.4 1.73 1.73-.4c.32-.07.6-.23.82-.45l7.94-7.93z"})))};__webpack_require__.p;var DeleteOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/DeleteOutline.svg");function IconButtonGroupPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconButtonGroupPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButtonGroupPlayground_template_define_property(target,key,source[key])})}return target}function IconButtonGroupPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButtonGroupPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButtonGroupPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function IconButtonGroupPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=IconButtonGroupPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function IconButtonGroupPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function IconButtonGroupPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconButtonGroupPlayground_template_templateObject(){var data=IconButtonGroupPlayground_template_tagged_template_literal([`
  height: `,`px;
`]);return IconButtonGroupPlayground_template_templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(IconButtonGroupPlayground_template_templateObject(),function(p){return p.height}),IconButtonGroupPlaygroundTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=IconButtonGroupPlayground_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupPlayground_template_object_spread_props(IconButtonGroupPlayground_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]})),(0,jsx_runtime.jsx)(Separator,{height:40}),(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Рекомендации"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:[(0,jsx_runtime.jsx)("li",{children:"Используйте компонент только для организации схожих функций. Не группируйте кнопки только потому, что они стоят рядом."}),(0,jsx_runtime.jsx)(Separator,{height:8}),(0,jsx_runtime.jsx)("li",{children:"Не группируйте слишком много кнопок — это создает излишнюю когнитивную нагрузку на пользователя."}),(0,jsx_runtime.jsx)(Separator,{height:8}),(0,jsx_runtime.jsx)("li",{children:"Не используйте компонент для навигации по вкладкам, для этого есть специализированные компоненты."})]})]})]})};try{IconButtonGroupPlaygroundTemplate.displayName="IconButtonGroupPlaygroundTemplate",IconButtonGroupPlaygroundTemplate.__docgenInfo={description:"",displayName:"IconButtonGroupPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButtonGroup/stories/IconButtonGroupPlayground.template.tsx#IconButtonGroupPlaygroundTemplate"]={docgenInfo:IconButtonGroupPlaygroundTemplate.__docgenInfo,name:"IconButtonGroupPlaygroundTemplate",path:"src/components/IconButtonGroup/stories/IconButtonGroupPlayground.template.tsx#IconButtonGroupPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function IconButtonGroupTooltip_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconButtonGroupTooltip_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButtonGroupTooltip_template_define_property(target,key,source[key])})}return target}function IconButtonGroupTooltip_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButtonGroupTooltip_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButtonGroupTooltip_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function IconButtonGroupTooltip_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=IconButtonGroupTooltip_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function IconButtonGroupTooltip_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var IconButtonWithTooltip=(0,__webpack_require__("./src/components/TooltipHOC/index.tsx").K)(IconButton.K),IconButtonGroupTooltipTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=IconButtonGroupTooltip_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupTooltip_template_object_spread_props(IconButtonGroupTooltip_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(IconButtonWithTooltip,{renderContent:function(){return"Print"},children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButtonWithTooltip,{renderContent:function(){return"Share"},children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButtonWithTooltip,{renderContent:function(){return"Edit"},children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButtonWithTooltip,{renderContent:function(){return"Delete"},children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]}))})};try{IconButtonGroupTooltipTemplate.displayName="IconButtonGroupTooltipTemplate",IconButtonGroupTooltipTemplate.__docgenInfo={description:"",displayName:"IconButtonGroupTooltipTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButtonGroup/stories/IconButtonGroupTooltip.template.tsx#IconButtonGroupTooltipTemplate"]={docgenInfo:IconButtonGroupTooltipTemplate.__docgenInfo,name:"IconButtonGroupTooltipTemplate",path:"src/components/IconButtonGroup/stories/IconButtonGroupTooltip.template.tsx#IconButtonGroupTooltipTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx");function IconButtonGroupDimension_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconButtonGroupDimension_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButtonGroupDimension_template_define_property(target,key,source[key])})}return target}function IconButtonGroupDimension_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButtonGroupDimension_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButtonGroupDimension_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function IconButtonGroupDimension_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=IconButtonGroupDimension_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function IconButtonGroupDimension_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function IconButtonGroupDimension_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconButtonGroupDimension_template_templateObject(){var data=IconButtonGroupDimension_template_tagged_template_literal([`
  height: `,`px;
`]);return IconButtonGroupDimension_template_templateObject=function _templateObject(){return data},data}var IconButtonGroupDimension_template_Separator=styled_components_browser_esm.Ay.div(IconButtonGroupDimension_template_templateObject(),function(p){return p.height||20}),IconButtonGroupDimensionTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=IconButtonGroupDimension_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension XL"}),(0,jsx_runtime.jsx)(IconButtonGroupDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupDimension_template_object_spread_props(IconButtonGroupDimension_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]})),(0,jsx_runtime.jsx)(IconButtonGroupDimension_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension L"}),(0,jsx_runtime.jsx)(IconButtonGroupDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupDimension_template_object_spread_props(IconButtonGroupDimension_template_object_spread({},props),{dimension:"l",children:[(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]})),(0,jsx_runtime.jsx)(IconButtonGroupDimension_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension M"}),(0,jsx_runtime.jsx)(IconButtonGroupDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupDimension_template_object_spread_props(IconButtonGroupDimension_template_object_spread({},props),{dimension:"m",children:[(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]})),(0,jsx_runtime.jsx)(IconButtonGroupDimension_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Dimension S"}),(0,jsx_runtime.jsx)(IconButtonGroupDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupDimension_template_object_spread_props(IconButtonGroupDimension_template_object_spread({},props),{dimension:"s",children:[(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]}))]})};try{IconButtonGroupDimensionTemplate.displayName="IconButtonGroupDimensionTemplate",IconButtonGroupDimensionTemplate.__docgenInfo={description:"",displayName:"IconButtonGroupDimensionTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButtonGroup/stories/IconButtonGroupDimension.template.tsx#IconButtonGroupDimensionTemplate"]={docgenInfo:IconButtonGroupDimensionTemplate.__docgenInfo,name:"IconButtonGroupDimensionTemplate",path:"src/components/IconButtonGroup/stories/IconButtonGroupDimension.template.tsx#IconButtonGroupDimensionTemplate"})}catch(__react_docgen_typescript_loader_error){}function IconButtonGroupState_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconButtonGroupState_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButtonGroupState_template_define_property(target,key,source[key])})}return target}function IconButtonGroupState_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButtonGroupState_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButtonGroupState_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function IconButtonGroupState_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=IconButtonGroupState_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function IconButtonGroupState_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function IconButtonGroupState_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconButtonGroupState_template_templateObject(){var data=IconButtonGroupState_template_tagged_template_literal([`
  height: `,`px;
`]);return IconButtonGroupState_template_templateObject=function _templateObject(){return data},data}var IconButtonGroupState_template_Separator=styled_components_browser_esm.Ay.div(IconButtonGroupState_template_templateObject(),function(p){return p.height||20}),IconButtonGroupStateTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=IconButtonGroupState_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Disable (третья иконка)"}),(0,jsx_runtime.jsx)(IconButtonGroupState_template_Separator,{}),(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupState_template_object_spread_props(IconButtonGroupState_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{disabled:!0,children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]})),(0,jsx_runtime.jsx)(IconButtonGroupState_template_Separator,{height:40}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",children:"Loading (третья иконка)"}),(0,jsx_runtime.jsx)(IconButtonGroupState_template_Separator,{}),(0,jsx_runtime.jsxs)(IconButtonGroup,IconButtonGroupState_template_object_spread_props(IconButtonGroupState_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(PrintOutline.h,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(SvgShareOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{loading:!0,children:(0,jsx_runtime.jsx)(SvgEditOutline,{})}),(0,jsx_runtime.jsx)(IconButton.K,{children:(0,jsx_runtime.jsx)(DeleteOutline.h,{})})]}))]})};try{IconButtonGroupStateTemplate.displayName="IconButtonGroupStateTemplate",IconButtonGroupStateTemplate.__docgenInfo={description:"",displayName:"IconButtonGroupStateTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButtonGroup/stories/IconButtonGroupState.template.tsx#IconButtonGroupStateTemplate"]={docgenInfo:IconButtonGroupStateTemplate.__docgenInfo,name:"IconButtonGroupStateTemplate",path:"src/components/IconButtonGroup/stories/IconButtonGroupState.template.tsx#IconButtonGroupStateTemplate"})}catch(__react_docgen_typescript_loader_error){}let IconButtonGroupPlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  IconButton,
  IconButtonGroup,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import type { IconButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;

export const IconButtonGroupPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <IconButtonGroup {...props}>
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
    <Separator height={40} />
    <NotificationItem displayStatusIcon>
      <NotificationItemTitle>Рекомендации</NotificationItemTitle>
      <NotificationItemContent>
        <li>
          Используйте компонент только для организации схожих функций. Не группируйте кнопки только потому, что они
          стоят рядом.
        </li>
        <Separator height={8} />
        <li>Не группируйте слишком много кнопок — это создает излишнюю когнитивную нагрузку на пользователя.</li>
        <Separator height={8} />
        <li>Не используйте компонент для навигации по вкладкам, для этого есть специализированные компоненты.</li>
      </NotificationItemContent>
    </NotificationItem>
  </ThemeProvider>
);
`,IconButtonGroupTooltip_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { IconButton, IconButtonGroup, TooltipHoc } from '@admiral-ds/react-ui';
import type { IconButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const IconButtonWithTooltip = TooltipHoc(IconButton);

export const IconButtonGroupTooltipTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <IconButtonGroup {...props}>
      <IconButtonWithTooltip renderContent={() => 'Print'}>
        <PrintOutline />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip renderContent={() => 'Share'}>
        <ShareOutline />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip renderContent={() => 'Edit'}>
        <EditOutline />
      </IconButtonWithTooltip>
      <IconButtonWithTooltip renderContent={() => 'Delete'}>
        <DeleteOutline />
      </IconButtonWithTooltip>
    </IconButtonGroup>
  </ThemeProvider>
);
`,IconButtonGroupDimension_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, IconButtonGroup, T } from '@admiral-ds/react-ui';
import type { IconButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const Separator = styled.div<{ height?: number }>\`
  height: \${(p) => p.height || 20}px;
\`;

export const IconButtonGroupDimensionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Dimension XL</T>
    <Separator />
    <IconButtonGroup {...props}>
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension L</T>
    <Separator />
    <IconButtonGroup {...props} dimension="l">
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension M</T>
    <Separator />
    <IconButtonGroup {...props} dimension="m">
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Dimension S</T>
    <Separator />
    <IconButtonGroup {...props} dimension="s">
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
  </ThemeProvider>
);
`,IconButtonGroupState_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, IconButtonGroup, T } from '@admiral-ds/react-ui';
import type { IconButtonGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

import { ReactComponent as PrintOutline } from '@admiral-ds/icons/build/system/PrintOutline.svg';
import { ReactComponent as ShareOutline } from '@admiral-ds/icons/build/service/ShareOutline.svg';
import { ReactComponent as EditOutline } from '@admiral-ds/icons/build/system/EditOutline.svg';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const Separator = styled.div<{ height?: number }>\`
  height: \${(p) => p.height || 20}px;
\`;

export const IconButtonGroupStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconButtonGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => (
  <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
    <T font="Body/Body 1 Long">Disable (третья иконка)</T>
    <Separator />
    <IconButtonGroup {...props}>
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton disabled>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
    <Separator height={40} />
    <T font="Body/Body 1 Long">Loading (третья иконка)</T>
    <Separator />
    <IconButtonGroup {...props}>
      <IconButton>
        <PrintOutline />
      </IconButton>
      <IconButton>
        <ShareOutline />
      </IconButton>
      <IconButton loading>
        <EditOutline />
      </IconButton>
      <IconButton>
        <DeleteOutline />
      </IconButton>
    </IconButtonGroup>
  </ThemeProvider>
);
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function IconButtonGroup_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function IconButtonGroup_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconButtonGroup_stories_define_property(target,key,source[key])})}return target}function IconButtonGroup_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconButtonGroup_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconButtonGroup_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function IconButtonGroup_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function IconButtonGroup_stories_templateObject(){var data=IconButtonGroup_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return IconButtonGroup_stories_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=IconButtonGroup_stories_tagged_template_literal([`
  height: 20px;
`]);return _templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(IconButtonGroup_stories_templateObject()),IconButtonGroup_stories_Separator=styled_components_browser_esm.Ay.div(_templateObject1());let IconButtonGroup_stories={title:"Admiral-2.1/IconButtonGroup",component:IconButtonGroup,parameters:{docs:{source:{code:null}},layout:"centered",componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент IconButtonGroup — это группа кнопок-иконок со связанными по смыслу действиями или действиями, лежащими в одном контексте.",(0,jsx_runtime.jsx)(IconButtonGroup_stories_Separator,{}),"Компонент используется только в сочетании с IconButton c appearance = 'secondary' (серые иконки и обводка). Если нужна вариация синего цвета, то используйте компонент ButtonGroup.",(0,jsx_runtime.jsx)(IconButtonGroup_stories_Separator,{}),"Есть 4 размера по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32)."]})},{})},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var IconButtonGroupPlayground={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconButtonGroupPlaygroundTemplate,IconButtonGroup_stories_object_spread_props(IconButtonGroup_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconButtonGroupPlayground_templateraw_namespaceObject}}},name:"IconButtonGroup. Playground"},IconButtonGroupTooltip={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconButtonGroupTooltipTemplate,IconButtonGroup_stories_object_spread_props(IconButtonGroup_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconButtonGroupTooltip_templateraw_namespaceObject}}},name:"IconButtonGroup. Tooltip"},IconButtonGroupDimension={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconButtonGroupDimensionTemplate,IconButtonGroup_stories_object_spread_props(IconButtonGroup_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconButtonGroupDimension_templateraw_namespaceObject}}},name:"IconButtonGroup. Размеры"},IconButtonGroupState={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconButtonGroupStateTemplate,IconButtonGroup_stories_object_spread_props(IconButtonGroup_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconButtonGroupState_templateraw_namespaceObject}}},name:"IconButtonGroup. Состояния"};IconButtonGroupPlayground.parameters={...IconButtonGroupPlayground.parameters,docs:{...IconButtonGroupPlayground.parameters?.docs,source:{originalSource:`{
  render: IconButtonGroupPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: IconButtonGroupPlaygroundRaw
      }
    }
  },
  name: 'IconButtonGroup. Playground'
}`,...IconButtonGroupPlayground.parameters?.docs?.source}}},IconButtonGroupTooltip.parameters={...IconButtonGroupTooltip.parameters,docs:{...IconButtonGroupTooltip.parameters?.docs,source:{originalSource:`{
  render: IconButtonGroupTooltipStory,
  parameters: {
    docs: {
      source: {
        code: IconButtonGroupTooltipRaw
      }
    }
  },
  name: 'IconButtonGroup. Tooltip'
}`,...IconButtonGroupTooltip.parameters?.docs?.source}}},IconButtonGroupDimension.parameters={...IconButtonGroupDimension.parameters,docs:{...IconButtonGroupDimension.parameters?.docs,source:{originalSource:`{
  render: IconButtonGroupDimensionStory,
  parameters: {
    docs: {
      source: {
        code: IconButtonGroupDimensionRaw
      }
    }
  },
  name: 'IconButtonGroup. Размеры'
}`,...IconButtonGroupDimension.parameters?.docs?.source}}},IconButtonGroupState.parameters={...IconButtonGroupState.parameters,docs:{...IconButtonGroupState.parameters?.docs,source:{originalSource:`{
  render: IconButtonGroupStateStory,
  parameters: {
    docs: {
      source: {
        code: IconButtonGroupStateRaw
      }
    }
  },
  name: 'IconButtonGroup. Состояния'
}`,...IconButtonGroupState.parameters?.docs?.source}}};let __namedExportsOrder=["IconButtonGroupPlayground","IconButtonGroupTooltip","IconButtonGroupDimension","IconButtonGroupState"]},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TooltipHOC/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipHoc});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tooltip/index.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function TooltipHoc(Component){return(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(props,ref){var renderContent=props.renderContent,container=props.container,withDelay=props.withDelay,tooltipRef=props.tooltipRef,tooltipPosition=props.tooltipPosition,tooltipDimension=props.tooltipDimension,wrappedCompProps=_object_without_properties(props,["renderContent","container","withDelay","tooltipRef","tooltipPosition","tooltipDimension"]),emptyContent=!renderContent()&&0!==renderContent(),anchorElementRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),visible=_useState[0],setVisible=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),node=_useState1[0],setNode=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),2),timer=_useState2[0],setTimer=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var show=function show(){setTimer(setTimeout(function(){return setVisible(!0)},withDelay?_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__.w:0))},hide=function hide(){clearTimeout(timer),setVisible(!1)};if(node)return node.addEventListener("mouseenter",show),node.addEventListener("focus",show),node.addEventListener("mouseleave",hide),node.addEventListener("blur",hide),function(){timer&&clearTimeout(timer),node.removeEventListener("mouseenter",show),node.removeEventListener("focus",show),node.removeEventListener("mouseleave",hide),node.removeEventListener("blur",hide)}},[node,setTimer,setVisible,timer]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_object_spread_props(_object_spread({},wrappedCompProps),{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_2__.d)(ref,anchorElementRef,setNode)})),visible&&!emptyContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__.m,{targetElement:anchorElementRef.current,renderContent:renderContent,container:container,tooltipPosition:tooltipPosition,dimension:tooltipDimension,ref:tooltipRef})]})})}try{TooltipHoc.displayName="TooltipHoc",TooltipHoc.__docgenInfo={description:"",displayName:"TooltipHoc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipHOC/index.tsx#TooltipHoc"]={docgenInfo:TooltipHoc.__docgenInfo,name:"TooltipHoc",path:"src/components/TooltipHOC/index.tsx#TooltipHoc"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-IconButtonGroup-stories-IconButtonGroup-stories.06de9fe5.iframe.bundle.js.map