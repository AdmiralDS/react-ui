"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3703],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/finance/CardSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCardSolid});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCardSolid=function SvgCardSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M6 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12q.156 0 .307.015A3 3 0 0 1 21 8v8a3 3 0 0 1-3 3zm.019-10.104c0-.426.351-.771.785-.771h1.932c.433 0 .785.345.785.77v1.961c0 .426-.352.771-.785.771H6.804a.78.78 0 0 1-.785-.77zm.65 5.935a.65.65 0 1 0 0 1.3h1.693a.65.65 0 1 0 0-1.3zm8.346.65a.65.65 0 0 1 .65-.65h1.693a.65.65 0 1 1 0 1.3h-1.693a.65.65 0 0 1-.65-.65m-3.861-.65a.65.65 0 1 0 0 1.3h1.693a.65.65 0 1 0 0-1.3z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.996 16.211c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.494-3.146-3.49-3.018a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.98 3.458c.31.28.31.76 0 1.04l-3.984 3.586c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/DropdownContainer/stories/DropDownContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuContainer:()=>MenuContainer,SimpleContainer:()=>SimpleContainer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropDownContainer_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),DropdownContainer=__webpack_require__("./src/components/DropdownContainer/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),Button=__webpack_require__("./src/components/Button/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  padding: 8px;
  background-color: var(--admiral-color-Special_ElevatedBG, `,`);
  border-radius: var(--admiral-border-radius-Medium, `,`);
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
  overflow: auto;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  justify-content: center;
`]);return _templateObject1=function _templateObject(){return data},data}var StyledText=styled_components_browser_esm.Ay.div(_templateObject(),typography.Il["Body/Body 1 Short"],function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Special/Elevated BG"]},function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject1()),SimpleContainerTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(!1),2),open=_React_useState[0],setOpen=_React_useState[1],buttonRef=react.useRef(null),targetElement=props.targetElement,other=_object_without_properties(props,["targetElement"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Button.$n,{ref:buttonRef,onClick:function(){return setOpen(!open)},children:"Текст"}),open&&(0,jsx_runtime.jsx)(DropdownContainer.R,_object_spread_props(_object_spread({alignSelf:"flex-end",targetElement:targetElement||buttonRef.current,onClickOutside:function(e){var _buttonRef_current;e.target&&(null==(_buttonRef_current=buttonRef.current)?void 0:_buttonRef_current.contains(e.target))||setOpen(!open)},className:"dropContainerClass"},other),{children:(0,jsx_runtime.jsx)(StyledText,{children:"Это просто контейнер, в который можно поместить все что угодно. Он просто умеет позиционироваться"})}))]})})};try{SimpleContainerTemplate.displayName="SimpleContainerTemplate",SimpleContainerTemplate.__docgenInfo={description:"",displayName:"SimpleContainerTemplate",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!0,type:{name:"Element | null"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"baseline"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/stories/SimpleContainer.template.tsx#SimpleContainerTemplate"]={docgenInfo:SimpleContainerTemplate.__docgenInfo,name:"SimpleContainerTemplate",path:"src/components/DropdownContainer/stories/SimpleContainer.template.tsx#SimpleContainerTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),Menu=__webpack_require__("./src/components/Menu/index.tsx"),CardSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/finance/CardSolid.svg");function MenuContainer_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuContainer_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuContainer_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuContainer_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuContainer_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuContainer_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuContainer_template_define_property(target,key,source[key])})}return target}function MenuContainer_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuContainer_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuContainer_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuContainer_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuContainer_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuContainer_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuContainer_template_sliced_to_array(arr,i){return MenuContainer_template_array_with_holes(arr)||MenuContainer_template_iterable_to_array_limit(arr,i)||MenuContainer_template_unsupported_iterable_to_array(arr,i)||MenuContainer_template_non_iterable_rest()}function MenuContainer_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuContainer_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuContainer_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuContainer_template_array_like_to_array(o,minLen)}}function MenuContainer_template_templateObject(){var data=MenuContainer_template_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  pointer-events: none;
`]);return MenuContainer_template_templateObject=function _templateObject(){return data},data}function MenuContainer_template_templateObject1(){var data=MenuContainer_template_tagged_template_literal([`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, `,`);
`]);return MenuContainer_template_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=MenuContainer_template_tagged_template_literal([`
  display: flex;
  justify-content: center;
`]);return _templateObject2=function _templateObject(){return data},data}var StyledAdditionalText=styled_components_browser_esm.Ay.div(MenuContainer_template_templateObject(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 50"]}),containerContrastBorder=(0,styled_components_browser_esm.AH)(MenuContainer_template_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 90"]}),MenuContainer_template_Wrapper=styled_components_browser_esm.Ay.div(_templateObject2()),cards=[{id:"1",label:"Номер Карты /****45",value:1},{id:"2",label:"Номер Карты /****75",value:2},{id:"3",label:"Номер Карты /****22",value:3},{id:"4",label:"Номер Карты /****33",value:4},{id:"5",label:"Номер Карты /****21",value:5},{id:"6",label:"Номер Карты /****35",value:6},{id:"7",label:"Номер Карты /****39",value:7},{id:"8",label:"Номер Карты /****41",value:8}],MenuContainerTemplate=function(props){var model=react.useMemo(function(){return cards.map(function(item){return{id:item.id,render:function(options){return(0,jsx_runtime.jsxs)(MenuItem.D,MenuContainer_template_object_spread_props(MenuContainer_template_object_spread({},options),{children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[item.label," ",(0,jsx_runtime.jsx)(CardSolid.h,{width:24,height:24})]}),(0,jsx_runtime.jsx)(StyledAdditionalText,{children:"Дополнительный текст"})]}),item.id)}}},[])},[]),_React_useState=MenuContainer_template_sliced_to_array(react.useState(!1),2),open=_React_useState[0],setOpen=_React_useState[1],_React_useState1=MenuContainer_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState1[0],setSelected=_React_useState1[1],_React_useState2=MenuContainer_template_sliced_to_array(react.useState(void 0),2),active=_React_useState2[0],setActive=_React_useState2[1],buttonRef=react.useRef(null),targetElement=props.targetElement,other=MenuContainer_template_object_without_properties(props,["targetElement"]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(MenuContainer_template_Wrapper,{children:[(0,jsx_runtime.jsx)(Button.$n,{ref:buttonRef,onClick:function(){return setOpen(!open)},children:"Карты"}),open&&(0,jsx_runtime.jsx)(DropdownContainer.R,MenuContainer_template_object_spread_props(MenuContainer_template_object_spread({alignSelf:"flex-start",targetElement:targetElement||buttonRef.current,onClickOutside:function(e){var _buttonRef_current;e.target&&(null==(_buttonRef_current=buttonRef.current)?void 0:_buttonRef_current.contains(e.target))||setOpen(!open)}},other),{dropContainerCssMixin:containerContrastBorder,className:"dropContainerClass",children:(0,jsx_runtime.jsx)(Menu.W,{model:model,selected:selected,active:active,onActivateItem:setActive,onSelectItem:function(value){setSelected(value),setOpen(!1)}})}))]})})};try{MenuContainerTemplate.displayName="MenuContainerTemplate",MenuContainerTemplate.__docgenInfo={description:"",displayName:"MenuContainerTemplate",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!0,type:{name:"Element | null"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"baseline"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/stories/MenuContainer.template.tsx#MenuContainerTemplate"]={docgenInfo:MenuContainerTemplate.__docgenInfo,name:"MenuContainerTemplate",path:"src/components/DropdownContainer/stories/MenuContainer.template.tsx#MenuContainerTemplate"})}catch(__react_docgen_typescript_loader_error){}let SimpleContainer_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Button, DropdownContainer, mediumGroupBorderRadius, typography } from '@admiral-ds/react-ui';
import type { DropdownContainerProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const StyledText = styled.div\`
  \${typography['Body/Body 1 Short']}
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
  padding: 8px;
  background-color: var(--admiral-color-Special_ElevatedBG, \${(p) => p.theme.color['Special/Elevated BG']});
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  overflow: auto;
\`;

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
\`;

export const SimpleContainerTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DropdownContainerProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { targetElement, ...other } = props;

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Текст
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-end"
            targetElement={targetElement || buttonRef.current}
            onClickOutside={clickOutside}
            className="dropContainerClass"
            {...other}
          >
            <StyledText>
              Это просто контейнер, в который можно поместить все что угодно. Он просто умеет позиционироваться
            </StyledText>
          </DropdownContainer>
        )}
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuContainer_templateraw_namespaceObject=`import * as React from 'react';
import styled, { css } from 'styled-components';

import { Button, DropdownContainer, Menu, MenuItem, typography } from '@admiral-ds/react-ui';
import type { DropdownContainerProps, RenderOptionProps } from '@admiral-ds/react-ui';

import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';

const StyledAdditionalText = styled.div\`
  \${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
\`;

const containerContrastBorder = css\`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
\`;

const cards = [
  {
    id: '1',
    label: 'Номер Карты /****45',
    value: 1,
  },
  {
    id: '2',
    label: 'Номер Карты /****75',
    value: 2,
  },
  { id: '3', label: 'Номер Карты /****22', value: 3 },
  {
    id: '4',
    label: 'Номер Карты /****33',
    value: 4,
  },
  {
    id: '5',
    label: 'Номер Карты /****21',
    value: 5,
  },
  {
    id: '6',
    label: 'Номер Карты /****35',
    value: 6,
  },
  { id: '7', label: 'Номер Карты /****39', value: 7 },
  {
    id: '8',
    label: 'Номер Карты /****41',
    value: 8,
  },
];

export const MenuContainerTemplate = (props: DropdownContainerProps) => {
  const model = React.useMemo(() => {
    return cards.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem key={item.id} {...options}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {item.label} <CardSolid width={24} height={24} />
            </div>
            <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
          </MenuItem>
        ),
      };
    }, []);
  }, []);

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [active, setActive] = React.useState<string | undefined>(undefined);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const { targetElement, ...other } = props;

  const handleSelectItem = (value?: string) => {
    setSelected(value);
    setOpen(false);
  };

  const clickOutside = (e: Event) => {
    if (e.target && buttonRef.current?.contains(e.target as Node)) {
      return;
    }
    setOpen(!open);
  };

  return (
    <>
      <Wrapper>
        <Button ref={buttonRef} onClick={() => setOpen(!open)}>
          Карты
        </Button>
        {open && (
          <DropdownContainer
            alignSelf="flex-start"
            targetElement={targetElement || buttonRef.current}
            onClickOutside={clickOutside}
            {...other}
            dropContainerCssMixin={containerContrastBorder}
            className="dropContainerClass"
          >
            <Menu
              model={model}
              selected={selected}
              active={active}
              onActivateItem={setActive}
              onSelectItem={handleSelectItem}
            />
          </DropdownContainer>
        )}
      </Wrapper>
    </>
  );
};
`;function DropDownContainer_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DropDownContainer_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function DropDownContainer_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DropDownContainer_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DropDownContainer_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DropDownContainer_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DropDownContainer_stories_define_property(target,key,source[key])})}return target}function DropDownContainer_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DropDownContainer_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DropDownContainer_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DropDownContainer_stories_sliced_to_array(arr,i){return DropDownContainer_stories_array_with_holes(arr)||DropDownContainer_stories_iterable_to_array_limit(arr,i)||DropDownContainer_stories_unsupported_iterable_to_array(arr,i)||DropDownContainer_stories_non_iterable_rest()}function DropDownContainer_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DropDownContainer_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DropDownContainer_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DropDownContainer_stories_array_like_to_array(o,minLen)}}function DropDownContainer_stories_templateObject(){var data=DropDownContainer_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return DropDownContainer_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(DropDownContainer_stories_templateObject());let DropDownContainer_stories={title:"Admiral-2.1/DropDownContainer",decorators:void 0,component:DropdownContainer.R,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : xl - 48px, m - 40px, s - 32px"})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68931"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68967"}]},argTypes:{themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},dropContainerCssMixin:{control:!1},targetRef:{control:!1},targetElement:{control:!1}}};var SimpleContainer={render:function(props){var CSSCustomProps=DropDownContainer_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SimpleContainerTemplate,DropDownContainer_stories_object_spread_props(DropDownContainer_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SimpleContainer_templateraw_namespaceObject}}},name:"Простой контейнер"},MenuContainer={render:function(props){return(0,jsx_runtime.jsx)(MenuContainerTemplate,DropDownContainer_stories_object_spread({},props))},parameters:{docs:{source:{code:MenuContainer_templateraw_namespaceObject}}},name:"Контейнер с меню"};SimpleContainer.parameters={...SimpleContainer.parameters,docs:{...SimpleContainer.parameters?.docs,source:{originalSource:`{
  render: SimpleContainerStory,
  parameters: {
    docs: {
      source: {
        code: SimpleContainerRaw
      }
    }
  },
  name: 'Простой контейнер'
}`,...SimpleContainer.parameters?.docs?.source}}},MenuContainer.parameters={...MenuContainer.parameters,docs:{...MenuContainer.parameters?.docs,source:{originalSource:`{
  render: MenuContainerStory,
  parameters: {
    docs: {
      source: {
        code: MenuContainerRaw
      }
    }
  },
  name: 'Контейнер с меню'
}`,...MenuContainer.parameters?.docs?.source}}};let __namedExportsOrder=["SimpleContainer","MenuContainer"]},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-DropdownContainer-stories-DropDownContainer-stories.c74a8eef.iframe.bundle.js.map