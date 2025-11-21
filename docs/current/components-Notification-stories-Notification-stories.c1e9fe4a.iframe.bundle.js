"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4147],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckSolid});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m7.79 3.29c.28.28.74.27 1.01-.02l4.42-4.8c.24-.27.22-.68-.04-.92a.65.65 0 0 0-.92.04l-3.99 4.34-2.4-2.4a.66.66 0 0 0-.92 0c-.25.25-.25.67 0 .92z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 1 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseSolid});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m13-3.92A.65.65 0 0 1 16 9l-3.08 3 3 3.08A.65.65 0 1 1 15 16l-3-3.08L9 16a.65.65 0 1 1-.92-.92l3-3.08-3-3A.65.65 0 0 1 9 8.08l3 3 3.08-3a.65.65 0 0 1 .92 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 10.695a.65.65 0 0 0 .65-.65V7.9a.65.65 0 1 0-1.3 0v5.146c0 .36.291.65.65.65m.85 2.206a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-4.75a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7M14.1 16a.75.75 0 0 1-.75.75h-.05a2.05 2.05 0 0 1-2.05-2.05v-3.75a.75.75 0 0 1 1.5 0v3.75c0 .304.246.55.55.55h.05a.75.75 0 0 1 .75.75"})))};__webpack_require__.p},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link/LinkComponent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>LinkComponent,u:()=>LinkComponentCssMixin});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral30, `,`);
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral30, `,`);
  }
  user-select: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  & *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:hover {
    color: var(--admiral-color-Primary_Primary70, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, `,`);
    }
  }
  &:focus {
    color: var(--admiral-color-Primary_Primary70, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, `,`);
    }
    outline-color: var(--admiral-color-Primary_Primary70, `,`);
  }
  &:active {
    color: var(--admiral-color-Primary_Primary80, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary80, `,`);
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject4=function _templateObject(){return data},data}var styleDisabledMixin=(0,styled_components_browser_esm.AH)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),styleColorMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){var theme=param.theme;return"secondary"===param.$appearance?"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")},function(param){var theme=param.theme;return"secondary"===param.$appearance?"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}),styleMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return(0,borderRadius.VM)(p.theme.shape)}),styleEventMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Primary/Primary 60 Main"]}),styleTextMixin=(0,styled_components_browser_esm.AH)(_templateObject4(),function(param){return"s"===param.$dimension?typography.Il["Body/Body 2 Long"]:typography.Il["Body/Body 1 Long"]});function LinkComponent_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LinkComponent_templateObject(){var data=LinkComponent_tagged_template_literal([`
  cursor: `,`;
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  position: relative;
  `,`;
  `,`;
  `,`;
  `,`
`]);return LinkComponent_templateObject=function _templateObject(){return data},data}function LinkComponent_templateObject1(){var data=LinkComponent_tagged_template_literal([`
  `,`
`]);return LinkComponent_templateObject1=function _templateObject(){return data},data}var LinkComponentCssMixin=(0,styled_components_browser_esm.AH)(LinkComponent_templateObject(),function(props){return props.disabled?"not-allowed":"pointer"},styleMixin,styleColorMixin,styleTextMixin,function(props){return props.disabled?styleDisabledMixin:styleEventMixin}),LinkComponent=styled_components_browser_esm.Ay.a(LinkComponent_templateObject1(),LinkComponentCssMixin)},"./src/components/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_LinkComponent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Link/LinkComponent.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Link=(0,__webpack_require__("./src/components/common/fixedForwardRef.ts").B)(function(_param,ref){var _param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_appearance=_param.appearance,_param_dimension=_param.dimension,as=_param.as,props=_object_without_properties(_param,["disabled","appearance","dimension","as"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LinkComponent__WEBPACK_IMPORTED_MODULE_1__.g,_object_spread_props(_object_spread({},props),{$dimension:void 0===_param_dimension?"m":_param_dimension,ref:ref,tabIndex:disabled?-1:props.tabIndex,as:disabled?"span":as,disabled:disabled,$appearance:void 0===_param_appearance?"primary":_param_appearance}))});Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{children:{defaultValue:null,description:"Текст ссылки",name:"children",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид ссылки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:null,description:"Отключение ссылки",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Размер ссылки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Notification/stories/Notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StaticNotificationBase:()=>StaticNotificationBase,StaticNotificationBaseStatus:()=>StaticNotificationBaseStatus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notification_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg"),ErrorSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg"),CheckSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg"),CloseSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg"),light=__webpack_require__("./src/components/themes/light/index.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),Link=__webpack_require__("./src/components/Link/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),IconPlacement=__webpack_require__("./src/components/IconPlacement/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  background-color: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  border-color: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  border-radius: var(--admiral-border-radius-Medium, `,`);
  padding: 12px 44px 12px 52px;
  `,`
  `,`
  border-width: 1px;
  border-style: solid;
  `,`;
  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 2px 0;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  margin-bottom: 4px;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  position: absolute;
  top: 10px;
  right: 8px;
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
  margin-top: 4px;
  `,`
`]);return _templateObject8=function _templateObject(){return data},data}var getIcon=function(status){switch(status){case"info":return InfoSolid.h;case"error":return CloseSolid.h;case"success":return CheckSolid.h;default:return ErrorSolid.h}},backGroundColorMixin=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){var theme=param.theme;switch(param.$status){case"warning":return"var(--admiral-color-Warning_Warning10, ".concat(theme.color["Warning/Warning 10"],")");case"error":return"var(--admiral-color-Error_Error10, ".concat(theme.color["Error/Error 10"],")");case"success":return"var(--admiral-color-Success_Success10, ".concat(theme.color["Success/Success 10"],")");default:return"var(--admiral-color-Primary_Primary10, ".concat(theme.color["Primary/Primary 10"],")")}}),borderColorMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){var theme=param.theme;switch(param.$status){case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");default:return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}}),NotificationWrapper=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.$displayStatusIcon?"":"padding-left: 16px;"},function(p){return p.$isClosable?"":"padding-right: 16px;"},borderColorMixin,backGroundColorMixin),Content=styled_components_browser_esm.Ay.div(_templateObject3()),Title=styled_components_browser_esm.Ay.div(_templateObject4(),typography.Il["Subtitle/Subtitle 3"],function(p){return p.theme.color["Neutral/Neutral 90"]}),CustomBody=styled_components_browser_esm.Ay.div(_templateObject5(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),CloseButton=(0,styled_components_browser_esm.Ay)(IconPlacement.H)(_templateObject6()),IconWrapper=styled_components_browser_esm.Ay.div(_templateObject7(),function(param){var theme=param.theme;switch(param.$status){case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");default:return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}}),LinkWrapper=(0,styled_components_browser_esm.Ay)(Link.N)(_templateObject8(),typography.Il["Button/Button 2"]);NotificationWrapper.defaultProps={theme:light.d};var Notification=function(_param){var _param_status=_param.status,status=void 0===_param_status?"info":_param_status,title=_param.title,_param_linkText=_param.linkText,linkText=void 0===_param_linkText?"":_param_linkText,_param_href=_param.href,href=void 0===_param_href?"":_param_href,_param_displayStatusIcon=_param.displayStatusIcon,displayStatusIcon=void 0!==_param_displayStatusIcon&&_param_displayStatusIcon,_param_isClosable=_param.isClosable,isClosable=void 0!==_param_isClosable&&_param_isClosable,onClose=_param.onClose,children=_param.children,props=_object_without_properties(_param,["status","title","linkText","href","displayStatusIcon","isClosable","onClose","children"]),NotificationIcon=getIcon(status),isAlert="info"!==status;return(0,jsx_runtime.jsxs)(NotificationWrapper,_object_spread_props(_object_spread({role:isAlert?"alert":"status","aria-live":isAlert?"assertive":"polite",$status:status,$displayStatusIcon:displayStatusIcon,$isClosable:isClosable},props),{children:[displayStatusIcon&&(0,jsx_runtime.jsx)(IconWrapper,{$status:status,children:(0,jsx_runtime.jsx)(NotificationIcon,{})}),(0,jsx_runtime.jsxs)(Content,{children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CustomBody,{children:children}),linkText&&(0,jsx_runtime.jsx)(LinkWrapper,{href:href,children:linkText||href})]}),isClosable&&(0,jsx_runtime.jsx)(CloseButton,{dimension:"mSmall",highlightFocus:!1,onClick:onClose})]}))};Notification.displayName="Notification";try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{status:{defaultValue:{value:"info"},description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:null,description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:""},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:{value:"false"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"false"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notification/index.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/Notification/index.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function StaticNotificationBase_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StaticNotificationBase_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StaticNotificationBase_template_define_property(target,key,source[key])})}return target}function StaticNotificationBase_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StaticNotificationBase_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StaticNotificationBase_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StaticNotificationBase_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StaticNotificationBase_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StaticNotificationBase_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var StaticNotificationBaseTemplate=function(_param){var _param_status=_param.status,_param_title=_param.title,_param_linkText=_param.linkText,_param_href=_param.href,_param_displayStatusIcon=_param.displayStatusIcon,_param_isClosable=_param.isClosable,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=StaticNotificationBase_template_object_without_properties(_param,["status","title","linkText","href","displayStatusIcon","isClosable","themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(Notification,StaticNotificationBase_template_object_spread_props(StaticNotificationBase_template_object_spread({},props),{status:void 0===_param_status?"info":_param_status,title:void 0===_param_title?"Заголовок оповещения":_param_title,linkText:void 0===_param_linkText?"Link":_param_linkText,href:void 0===_param_href?"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531":_param_href,displayStatusIcon:void 0===_param_displayStatusIcon||_param_displayStatusIcon,isClosable:void 0===_param_isClosable||_param_isClosable,children:"Тут находится текст короткого оповещения"}))})};try{StaticNotificationBaseTemplate.displayName="StaticNotificationBaseTemplate",StaticNotificationBaseTemplate.__docgenInfo={description:"",displayName:"StaticNotificationBaseTemplate",props:{status:{defaultValue:{value:"info"},description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:{value:"Заголовок оповещения"},description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:"Link"},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531"},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:{value:"true"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"true"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notification/stories/StaticNotificationBase.template.tsx#StaticNotificationBaseTemplate"]={docgenInfo:StaticNotificationBaseTemplate.__docgenInfo,name:"StaticNotificationBaseTemplate",path:"src/components/Notification/stories/StaticNotificationBase.template.tsx#StaticNotificationBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function StaticNotificationBaseStatus_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StaticNotificationBaseStatus_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StaticNotificationBaseStatus_template_define_property(target,key,source[key])})}return target}function StaticNotificationBaseStatus_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StaticNotificationBaseStatus_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StaticNotificationBaseStatus_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StaticNotificationBaseStatus_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StaticNotificationBaseStatus_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StaticNotificationBaseStatus_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function StaticNotificationBaseStatus_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StaticNotificationBaseStatus_template_templateObject(){var data=StaticNotificationBaseStatus_template_tagged_template_literal([`
  margin: 20px;
`]);return StaticNotificationBaseStatus_template_templateObject=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(StaticNotificationBaseStatus_template_templateObject()),StaticNotificationBaseStatus_template_bodyDefault="Тут находится текст короткого оповещения",StaticNotificationBaseStatusTemplate=function(_param){var _param_title=_param.title,title=void 0===_param_title?"Заголовок оповещения":_param_title,_param_linkText=_param.linkText,linkText=void 0===_param_linkText?"Link":_param_linkText,_param_href=_param.href,href=void 0===_param_href?"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531":_param_href,_param_displayStatusIcon=_param.displayStatusIcon,displayStatusIcon=void 0===_param_displayStatusIcon||_param_displayStatusIcon,_param_isClosable=_param.isClosable,isClosable=void 0===_param_isClosable||_param_isClosable,props=StaticNotificationBaseStatus_template_object_without_properties(_param,["title","linkText","href","displayStatusIcon","isClosable"]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,StaticNotificationBaseStatus_template_object_spread_props(StaticNotificationBaseStatus_template_object_spread({},props),{status:"info",title:title,linkText:linkText,href:href,displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:StaticNotificationBaseStatus_template_bodyDefault}))}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,StaticNotificationBaseStatus_template_object_spread_props(StaticNotificationBaseStatus_template_object_spread({},props),{status:"warning",title:title,linkText:linkText,href:href,displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:StaticNotificationBaseStatus_template_bodyDefault}))}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,StaticNotificationBaseStatus_template_object_spread_props(StaticNotificationBaseStatus_template_object_spread({},props),{status:"error",title:title,linkText:linkText,href:href,displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:StaticNotificationBaseStatus_template_bodyDefault}))}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,StaticNotificationBaseStatus_template_object_spread_props(StaticNotificationBaseStatus_template_object_spread({},props),{status:"success",title:title,linkText:linkText,href:href,displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:StaticNotificationBaseStatus_template_bodyDefault}))})]})};try{StaticNotificationBaseStatusTemplate.displayName="StaticNotificationBaseStatusTemplate",StaticNotificationBaseStatusTemplate.__docgenInfo={description:"",displayName:"StaticNotificationBaseStatusTemplate",props:{status:{defaultValue:null,description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:{value:"Заголовок оповещения"},description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:"Link"},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531"},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:{value:"true"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"true"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notification/stories/StaticNotificationBaseStatus.template.tsx#StaticNotificationBaseStatusTemplate"]={docgenInfo:StaticNotificationBaseStatusTemplate.__docgenInfo,name:"StaticNotificationBaseStatusTemplate",path:"src/components/Notification/stories/StaticNotificationBaseStatus.template.tsx#StaticNotificationBaseStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}let StaticNotificationBase_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { Notification } from '@admiral-ds/react-ui';
import type { NotificationProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const bodyDefault = 'Тут находится текст короткого оповещения';
const titleDefault = 'Заголовок оповещения';
const linkTextDefault = 'Link';
const hrefDefault = 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531';

export const StaticNotificationBaseTemplate = ({
  status = 'info',
  title = titleDefault,
  linkText = linkTextDefault,
  href = hrefDefault,
  displayStatusIcon = true,
  isClosable = true,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NotificationProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Notification
        {...props}
        status={status}
        title={title}
        linkText={linkText}
        href={href}
        displayStatusIcon={displayStatusIcon}
        isClosable={isClosable}
      >
        {bodyDefault}
      </Notification>
    </ThemeProvider>
  );
};
`,StaticNotificationBaseStatus_templateraw_namespaceObject=`import styled from 'styled-components';
import { Notification } from '@admiral-ds/react-ui';
import type { NotificationProps } from '@admiral-ds/react-ui';

const Layout = styled.div\`
  margin: 20px;
\`;

const bodyDefault = 'Тут находится текст короткого оповещения';
const titleDefault = 'Заголовок оповещения';
const linkTextDefault = 'Link';
const hrefDefault = 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531';

export const StaticNotificationBaseStatusTemplate = ({
  title = titleDefault,
  linkText = linkTextDefault,
  href = hrefDefault,
  displayStatusIcon = true,
  isClosable = true,
  ...props
}: NotificationProps) => {
  return (
    <>
      <Layout>
        <Notification
          {...props}
          status="info"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
      <Layout>
        <Notification
          {...props}
          status="warning"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
      <Layout>
        <Notification
          {...props}
          status="error"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
      <Layout>
        <Notification
          {...props}
          status="success"
          title={title}
          linkText={linkText}
          href={href}
          displayStatusIcon={displayStatusIcon}
          isClosable={isClosable}
        >
          {bodyDefault}
        </Notification>
      </Layout>
    </>
  );
};
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function Notification_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Notification_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Notification_stories_define_property(target,key,source[key])})}return target}function Notification_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Notification_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Notification_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function Notification_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function Notification_stories_templateObject(){var data=Notification_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Notification_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Notification_stories_templateObject());let Notification_stories={title:"Deprecated/Notification (Deprecated используйте NotificationItem компонент)",decorators:void 0,component:Notification,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Компонент служит для демонстрации статических нотификаций. Существует в четырех типа нотификаций: Информационное сообщение, предупреждение, ошибка и положительные действия. Применяется как самостоятельный элемент."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27484"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27651"}]},argTypes:{title:{control:{type:"text"}},linkText:{control:{type:"text"}},href:{control:{type:"text"}},displayStatusIcon:{type:"boolean"},isClosable:{type:"boolean"},onClose:{action:"clicked"},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var StaticNotificationBase={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(StaticNotificationBaseTemplate,Notification_stories_object_spread_props(Notification_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:StaticNotificationBase_templateraw_namespaceObject}}},name:"Статическая нотификация. Базовый пример."},StaticNotificationBaseStatus={render:function(props){return(0,jsx_runtime.jsx)(StaticNotificationBaseStatusTemplate,Notification_stories_object_spread({},props))},parameters:{docs:{source:{code:StaticNotificationBaseStatus_templateraw_namespaceObject}}},name:"Статусы статических нотификаций"};StaticNotificationBase.parameters={...StaticNotificationBase.parameters,docs:{...StaticNotificationBase.parameters?.docs,source:{originalSource:`{
  render: StaticNotificationBaseStory,
  parameters: {
    docs: {
      source: {
        code: StaticNotificationBaseRaw
      }
    }
  },
  name: 'Статическая нотификация. Базовый пример.'
}`,...StaticNotificationBase.parameters?.docs?.source}}},StaticNotificationBaseStatus.parameters={...StaticNotificationBaseStatus.parameters,docs:{...StaticNotificationBaseStatus.parameters?.docs,source:{originalSource:`{
  render: StaticNotificationBaseStatusStory,
  parameters: {
    docs: {
      source: {
        code: StaticNotificationBaseStatusRaw
      }
    }
  },
  name: 'Статусы статических нотификаций'
}`,...StaticNotificationBaseStatus.parameters?.docs?.source}}};let __namedExportsOrder=["StaticNotificationBase","StaticNotificationBaseStatus"]},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-Notification-stories-Notification-stories.c1e9fe4a.iframe.bundle.js.map