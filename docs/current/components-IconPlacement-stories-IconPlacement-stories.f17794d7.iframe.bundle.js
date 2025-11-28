"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8383],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 1 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconPlacement/stories/IconPlacement.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconPlacementAppearance:()=>IconPlacementAppearance,IconPlacementPlayground:()=>IconPlacementPlayground,IconPlacementSizes:()=>IconPlacementSizes,IconPlacementVariants:()=>IconPlacementVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>IconPlacement_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),IconPlacement=__webpack_require__("./src/components/IconPlacement/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),T=__webpack_require__("./src/components/T/index.tsx"),CloseOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return _templateObject=function _templateObject(){return data},data}var WrapperVertical=styled_components_browser_esm.Ay.div(_templateObject()),IconPlacementPlaygroundTemplate=function(_param){var _param_dimension=_param.dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["dimension","disabled","highlightFocus","themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Short",as:"div",children:"Icon Placement - вспомогательный компонент, обычно используется в составе других компонентов или организмов. По сути это любая иконка с заранее заданными состояниями Default, Hover, Press, Focus, Disable."}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Short",as:"div",children:"Рекомендуется в качестве отдельно стоящих иконок использовать компонент Icon Button, а Icon Placement применять только в случаях, когда это действительно необходимо, как правило, это ограниченное пространство внутри компонентов."}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Short",as:"div",children:"У компонента есть три размера иконки: L 24, M 20 и S 16. У размеров L и M два размера Hover-круга для различных ситуаций, чтобы вписываться внутрь небольших компонентов. БОльшие размеры круга обозначены в названии вариантов компонента как Big, малые — Small."}),(0,jsx_runtime.jsx)(IconPlacement._,_object_spread_props(_object_spread({},props),{dimension:void 0===_param_dimension?"lBig":_param_dimension,disabled:void 0!==_param_disabled&&_param_disabled,highlightFocus:void 0!==_param_highlightFocus&&_param_highlightFocus,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}))]})})};try{IconPlacementPlaygroundTemplate.displayName="IconPlacementPlaygroundTemplate",IconPlacementPlaygroundTemplate.__docgenInfo={description:"",displayName:"IconPlacementPlaygroundTemplate",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"false"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/stories/IconPlacementPlayground.template.tsx#IconPlacementPlaygroundTemplate"]={docgenInfo:IconPlacementPlaygroundTemplate.__docgenInfo,name:"IconPlacementPlaygroundTemplate",path:"src/components/IconPlacement/stories/IconPlacementPlayground.template.tsx#IconPlacementPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function IconPlacementVariants_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconPlacementVariants_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconPlacementVariants_template_define_property(target,key,source[key])})}return target}function IconPlacementVariants_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=IconPlacementVariants_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function IconPlacementVariants_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function IconPlacementVariants_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconPlacementVariants_template_templateObject(){var data=IconPlacementVariants_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return IconPlacementVariants_template_templateObject=function _templateObject(){return data},data}var IconPlacementVariants_template_WrapperVertical=styled_components_browser_esm.Ay.div(IconPlacementVariants_template_templateObject()),IconPlacementVariantsTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=IconPlacementVariants_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(IconPlacementVariants_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Примеры использования:"}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"иконка Close в компонентах Modal, Toast, Hint и др."}),(0,jsx_runtime.jsx)(IconPlacement.H,IconPlacementVariants_template_object_spread({},props))]})})};try{IconPlacementVariantsTemplate.displayName="IconPlacementVariantsTemplate",IconPlacementVariantsTemplate.__docgenInfo={description:"",displayName:"IconPlacementVariantsTemplate",props:{dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:null,description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/stories/IconPlacementVariants.template.tsx#IconPlacementVariantsTemplate"]={docgenInfo:IconPlacementVariantsTemplate.__docgenInfo,name:"IconPlacementVariantsTemplate",path:"src/components/IconPlacement/stories/IconPlacementVariants.template.tsx#IconPlacementVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}function IconPlacementAppearance_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function IconPlacementAppearance_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconPlacementAppearance_template_define_property(target,key,source[key])})}return target}function IconPlacementAppearance_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconPlacementAppearance_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconPlacementAppearance_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function IconPlacementAppearance_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=IconPlacementAppearance_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function IconPlacementAppearance_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function IconPlacementAppearance_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconPlacementAppearance_template_templateObject(){var data=IconPlacementAppearance_template_tagged_template_literal([`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`]);return IconPlacementAppearance_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=IconPlacementAppearance_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return _templateObject1=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(IconPlacementAppearance_template_templateObject()),IconPlacementAppearance_template_WrapperVertical=styled_components_browser_esm.Ay.div(_templateObject1()),handleClick=function(){return console.log("IconPlacement clicked")},IconPlacementAppearanceTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=IconPlacementAppearance_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(IconPlacementAppearance_template_WrapperVertical,{children:(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsxs)(IconPlacementAppearance_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Appearance - Primary"}),(0,jsx_runtime.jsx)(IconPlacement._,IconPlacementAppearance_template_object_spread_props(IconPlacementAppearance_template_object_spread({onClick:handleClick},props),{appearance:"primary",children:(0,jsx_runtime.jsx)(CloseOutline.h,{})})),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Appearance - Secondary"}),(0,jsx_runtime.jsx)(IconPlacement._,IconPlacementAppearance_template_object_spread_props(IconPlacementAppearance_template_object_spread({onClick:handleClick},props),{appearance:"secondary",children:(0,jsx_runtime.jsx)(CloseOutline.h,{})})),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Appearance - Custom icon color"}),(0,jsx_runtime.jsx)(IconPlacement._,IconPlacementAppearance_template_object_spread_props(IconPlacementAppearance_template_object_spread({onClick:handleClick},props),{appearance:{iconColor:"#E052BD"},children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}))]})})})})};try{IconPlacementAppearanceTemplate.displayName="IconPlacementAppearanceTemplate",IconPlacementAppearanceTemplate.__docgenInfo={description:"",displayName:"IconPlacementAppearanceTemplate",props:{dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:null,description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/stories/IconPlacementAppearance.template.tsx#IconPlacementAppearanceTemplate"]={docgenInfo:IconPlacementAppearanceTemplate.__docgenInfo,name:"IconPlacementAppearanceTemplate",path:"src/components/IconPlacement/stories/IconPlacementAppearance.template.tsx#IconPlacementAppearanceTemplate"})}catch(__react_docgen_typescript_loader_error){}function IconPlacementSizes_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function IconPlacementSizes_template_templateObject(){var data=IconPlacementSizes_template_tagged_template_literal([`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`]);return IconPlacementSizes_template_templateObject=function _templateObject(){return data},data}function IconPlacementSizes_template_templateObject1(){var data=IconPlacementSizes_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return IconPlacementSizes_template_templateObject1=function _templateObject(){return data},data}var IconPlacementSizes_template_Wrapper=styled_components_browser_esm.Ay.div(IconPlacementSizes_template_templateObject()),IconPlacementSizes_template_WrapperVertical=styled_components_browser_esm.Ay.div(IconPlacementSizes_template_templateObject1()),IconPlacementSizes_template_handleClick=function(){return console.log("IconPlacement clicked")},IconPlacementSizesTemplate=function(props){return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(props.themeBorderKind,props.CSSCustomProps),children:(0,jsx_runtime.jsx)(IconPlacementSizes_template_WrapperVertical,{children:(0,jsx_runtime.jsxs)(IconPlacementSizes_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(IconPlacementSizes_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - L Small"}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"lSmall",onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"lSmall",onClick:IconPlacementSizes_template_handleClick,disabled:!0,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - L Big"}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"lBig",onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"lBig",disabled:!0,onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})})]}),(0,jsx_runtime.jsxs)(IconPlacementSizes_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - M Small"}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"mSmall",onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"mSmall",onClick:IconPlacementSizes_template_handleClick,disabled:!0,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - M Big"}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"mBig",onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"mBig",disabled:!0,onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})})]}),(0,jsx_runtime.jsxs)(IconPlacementSizes_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - S"}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"s",onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})}),(0,jsx_runtime.jsx)(IconPlacement._,{dimension:"s",disabled:!0,onClick:IconPlacementSizes_template_handleClick,children:(0,jsx_runtime.jsx)(CloseOutline.h,{})})]})]})})})};try{IconPlacementSizesTemplate.displayName="IconPlacementSizesTemplate",IconPlacementSizesTemplate.__docgenInfo={description:"",displayName:"IconPlacementSizesTemplate",props:{dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:null,description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/stories/IconPlacementSizes.template.tsx#IconPlacementSizesTemplate"]={docgenInfo:IconPlacementSizesTemplate.__docgenInfo,name:"IconPlacementSizesTemplate",path:"src/components/IconPlacement/stories/IconPlacementSizes.template.tsx#IconPlacementSizesTemplate"})}catch(__react_docgen_typescript_loader_error){}let IconPlacementPlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconPlacement, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

export const IconPlacementPlaygroundTemplate = ({
  dimension = 'lBig',
  disabled = false,
  highlightFocus = false,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconPlacementProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperVertical>
        <T font="Body/Body 1 Short" as="div">
          Icon Placement - вспомогательный компонент, обычно используется в составе других компонентов или организмов.
          По сути это любая иконка с заранее заданными состояниями Default, Hover, Press, Focus, Disable.
        </T>
        <T font="Body/Body 1 Short" as="div">
          Рекомендуется в качестве отдельно стоящих иконок использовать компонент Icon Button, а Icon Placement
          применять только в случаях, когда это действительно необходимо, как правило, это ограниченное пространство
          внутри компонентов.
        </T>
        <T font="Body/Body 1 Short" as="div">
          У компонента есть три размера иконки: L 24, M 20 и S 16. У размеров L и M два размера Hover-круга для
          различных ситуаций, чтобы вписываться внутрь небольших компонентов. БОльшие размеры круга обозначены в
          названии вариантов компонента как Big, малые — Small.
        </T>
        <IconPlacement {...props} dimension={dimension} disabled={disabled} highlightFocus={highlightFocus}>
          <CloseOutline />
        </IconPlacement>
      </WrapperVertical>
    </ThemeProvider>
  );
};
`,IconPlacementVariants_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CloseIconPlacementButton, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

export const IconPlacementVariantsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconPlacementProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperVertical>
        <T font="Body/Body 1 Long" as="div">
          Примеры использования:
        </T>
        <T font="Body/Body 1 Long" as="div">
          иконка Close в компонентах Modal, Toast, Hint и др.
        </T>
        <CloseIconPlacementButton {...props} />
      </WrapperVertical>
    </ThemeProvider>
  );
};
`,IconPlacementAppearance_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconPlacement, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div\`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

// eslint-disable-next-line no-console
const handleClick = () => console.log('IconPlacement clicked');

export const IconPlacementAppearanceTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: IconPlacementProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperVertical>
        <Wrapper>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Appearance - Primary
            </T>
            <IconPlacement onClick={handleClick} {...props} appearance={'primary'}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Appearance - Secondary
            </T>
            <IconPlacement onClick={handleClick} {...props} appearance={'secondary'}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Appearance - Custom icon color
            </T>
            <IconPlacement onClick={handleClick} {...props} appearance={{ iconColor: '#E052BD' }}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
        </Wrapper>
      </WrapperVertical>
    </ThemeProvider>
  );
};
`,IconPlacementSizes_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconPlacement, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div\`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

// eslint-disable-next-line no-console
const handleClick = () => console.log('IconPlacement clicked');

export const IconPlacementSizesTemplate = (
  props: IconPlacementProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean },
) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(props.themeBorderKind, props.CSSCustomProps)}>
      <WrapperVertical>
        <Wrapper>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - L Small
            </T>
            <IconPlacement dimension="lSmall" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="lSmall" onClick={handleClick} disabled={true}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Dimension - L Big
            </T>
            <IconPlacement dimension="lBig" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="lBig" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - M Small
            </T>
            <IconPlacement dimension="mSmall" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="mSmall" onClick={handleClick} disabled={true}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Dimension - M Big
            </T>
            <IconPlacement dimension="mBig" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="mBig" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - S
            </T>
            <IconPlacement dimension="s" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="s" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
        </Wrapper>
      </WrapperVertical>
    </ThemeProvider>
  );
};
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function IconPlacement_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function IconPlacement_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){IconPlacement_stories_define_property(target,key,source[key])})}return target}function IconPlacement_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function IconPlacement_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):IconPlacement_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let IconPlacement_stories={title:"Admiral-2.1/IconPlacement",decorators:void 0,component:IconPlacement._,parameters:{docs:{source:{code:null}},layout:"centered",design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133774%3A104360"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133774%3A104658"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133799%3A104398"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133799%3A104512"}]},argTypes:{dimension:{options:["lBig","lSmall","mBig","mSmall","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},highlightFocus:{control:{type:"boolean"}},appearance:{options:["primary","secondary"],control:{type:"radio"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var IconPlacementPlayground={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconPlacementPlaygroundTemplate,IconPlacement_stories_object_spread_props(IconPlacement_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconPlacementPlayground_templateraw_namespaceObject}}},name:"IconPlacement. Playground"},IconPlacementSizes={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconPlacementSizesTemplate,IconPlacement_stories_object_spread_props(IconPlacement_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconPlacementSizes_templateraw_namespaceObject}}},name:"IconPlacement. Размеры"},IconPlacementAppearance={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconPlacementAppearanceTemplate,IconPlacement_stories_object_spread_props(IconPlacement_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconPlacementAppearance_templateraw_namespaceObject}}},name:"IconPlacement. Appearance"},IconPlacementVariants={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(IconPlacementVariantsTemplate,IconPlacement_stories_object_spread_props(IconPlacement_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:IconPlacementVariants_templateraw_namespaceObject}}},name:"IconPlacement. Варианты использования"};IconPlacementPlayground.parameters={...IconPlacementPlayground.parameters,docs:{...IconPlacementPlayground.parameters?.docs,source:{originalSource:`{
  render: IconPlacementPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: IconPlacementPlaygroundRaw
      }
    }
  },
  name: 'IconPlacement. Playground'
}`,...IconPlacementPlayground.parameters?.docs?.source}}},IconPlacementSizes.parameters={...IconPlacementSizes.parameters,docs:{...IconPlacementSizes.parameters?.docs,source:{originalSource:`{
  render: IconPlacementSizesStory,
  parameters: {
    docs: {
      source: {
        code: IconPlacementSizesRaw
      }
    }
  },
  name: 'IconPlacement. Размеры'
}`,...IconPlacementSizes.parameters?.docs?.source}}},IconPlacementAppearance.parameters={...IconPlacementAppearance.parameters,docs:{...IconPlacementAppearance.parameters?.docs,source:{originalSource:`{
  render: IconPlacementAppearanceStory,
  parameters: {
    docs: {
      source: {
        code: IconPlacementAppearanceRaw
      }
    }
  },
  name: 'IconPlacement. Appearance'
}`,...IconPlacementAppearance.parameters?.docs?.source}}},IconPlacementVariants.parameters={...IconPlacementVariants.parameters,docs:{...IconPlacementVariants.parameters?.docs,source:{originalSource:`{
  render: IconPlacementVariantsStory,
  parameters: {
    docs: {
      source: {
        code: IconPlacementVariantsRaw
      }
    }
  },
  name: 'IconPlacement. Варианты использования'
}`,...IconPlacementVariants.parameters?.docs?.source}}};let __namedExportsOrder=["IconPlacementPlayground","IconPlacementSizes","IconPlacementAppearance","IconPlacementVariants"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-IconPlacement-stories-IconPlacement-stories.f17794d7.iframe.bundle.js.map