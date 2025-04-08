"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9426],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-4.75c-.47 0-.86.38-.86.84 0 .47.39.86.86.86.46 0 .85-.39.85-.86 0-.46-.39-.84-.85-.84M14.1 16c0 .41-.34.75-.75.75h-.06c-1.13 0-2.04-.92-2.04-2.05v-3.75c0-.42.33-.75.75-.75.41 0 .75.33.75.75v3.75c0 .3.24.55.54.55h.06c.41 0 .75.33.75.75"})))};__webpack_require__.p},"./src/components/Checkbox/CheckboxDimension.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ALL_DIMENSIONS_VALUES});var ALL_DIMENSIONS_VALUES=["m","s"]},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, `,`);
`]);return _templateObject=function _templateObject(){return data},data}var PositionedPortalContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject(),function(param){return param.theme.zIndex.dropdown}),PositionInPortal=function(_param){var targetElement=_param.targetElement,rootRef=_param.rootRef,fullContainerWidth=_param.fullContainerWidth,props=_object_without_properties(_param,["targetElement","rootRef","fullContainerWidth"]),positionedPortalContainerRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){var node=positionedPortalContainerRef.current;if(node&&targetElement){var observer=(0,_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__.A)(targetElement,function(rect){if(rect){var x=rect.x,y=rect.y,height=rect.height,width=rect.width,style=node.style;style.top="".concat(y,"px"),style.left=fullContainerWidth?"0px":"".concat(x,"px"),style.height="".concat(height,"px"),style.width=fullContainerWidth?"100%":"".concat(width,"px")}});return observer.observe(),function(){observer.unobserve()}}},[targetElement,fullContainerWidth]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PositionedPortalContainer,_object_spread({ref:positionedPortalContainerRef},props)),(null==rootRef?void 0:rootRef.current)||document.body)};try{PositionedPortalContainer.displayName="PositionedPortalContainer",PositionedPortalContainer.__docgenInfo={description:"",displayName:"PositionedPortalContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionedPortalContainer"]={docgenInfo:PositionedPortalContainer.__docgenInfo,name:"PositionedPortalContainer",path:"src/components/PositionInPortal.tsx#PositionedPortalContainer"})}catch(__react_docgen_typescript_loader_error){}try{PositionInPortal.displayName="PositionInPortal",PositionInPortal.__docgenInfo={description:`При фиксированном позиционировании (как у PositionedPortalContainer) элемент позиционируется
всегда относительно исходного содержащего блока (окна браузера).
Исключение, когда один из его предков имеет свойство transform, perspective, или filter,
установленное на что-то иное, кроме none, в этом случае этот предок ведет
себя как содержащий блок. Тогда top, right, bottom и left элемента рассчитываются относительно этого содержащего блока.
Если у такого предка кроме transform задано свойство overflow: hidden, то элемент будет обрезаться по его краям.

В связи с вышеописанным в качестве контейнера для портала рекомендуется выбирать элемент, у предков которого нет свойств
transform, perspective, или filter отличных от none. Также рекомендуется размещать контейнер портала в самом низу dom-дерева,
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>uid});function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});var FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,"data-field",!1)}function passDropdownDataAttributes(initialProps){var dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,"data-dropdown-container",!0),dropMenuProps}function passMenuDataAttributes(initialProps){var menuProps={};return passDataAttributes(initialProps,menuProps,"data-menu",!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach(function(key){"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])})}},"./src/components/form/CheckboxField/stories/CheckboxField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxFieldBase:()=>CheckboxFieldBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),CheckboxDimension=__webpack_require__("./src/components/Checkbox/CheckboxDimension.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Hint=__webpack_require__("./src/components/Hint/index.tsx"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    margin-top: 16px;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  margin-left: 5px;
  width: `,`;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  [data-focus-within] & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, `,`);
  }
  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, `,`);
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: flex;
  align-items: flex-start;
`]);return _templateObject2=function _templateObject(){return data},data}var Container=styled_components_browser_esm.Ay.div(_templateObject()),CheckboxFieldBase_template_InfoSolid=(0,styled_components_browser_esm.Ay)(InfoSolid.h)(_templateObject1(),function(props){return"m"===props.$dimension?"24px":"20px"},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]}),CheckboxWithInformer=styled_components_browser_esm.Ay.div(_templateObject2()),CheckboxFieldBaseTemplate=function(_param){var _props_checked,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(null!=(_props_checked=props.checked)&&_props_checked),2),checked=_React_useState[0],setChecked=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(!1),2),visible1=_React_useState1[0],setVisible1=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(!1),2),visible2=_React_useState2[0],setVisible2=_React_useState2[1];return react.useEffect(function(){setChecked(!!props.checked)},[props.checked]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(CheckboxField.Y,_object_spread_props(_object_spread({},props),{checked:checked,onChange:function(e){setChecked(e.target.checked)},"data-container-id":"checkboxFieldIdOne",id:"checkboxFieldId",name:"checkboxFieldName",children:"Управляемый чекбокс"})),(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"s","data-container-id":"checkboxFieldIdTwo",children:"Не управляемый маленький чекбокс"}),(0,jsx_runtime.jsxs)(CheckboxField.Y,{dimension:"m","data-container-id":"checkboxFieldIdThree",children:["Двойная",(0,jsx_runtime.jsx)("br",{}),"строка"]}),(0,jsx_runtime.jsx)(CheckboxField.Y,{disabled:!0,defaultChecked:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdFour",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{disabled:!0,"data-container-id":"checkboxFieldIdFive",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{readOnly:!0,defaultChecked:!0,"data-container-id":"checkboxFieldIdSix",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{readOnly:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdSeven",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{error:!0,extraText:(0,jsx_runtime.jsxs)("span",{children:["Вариация с ",(0,jsx_runtime.jsx)("i",{children:"дополнительно"})," декорированным ",(0,jsx_runtime.jsx)("b",{children:"текстом"})]}),"data-container-id":"checkboxFieldIdEight",children:"Error не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"s",indeterminate:!0,extraText:"Вариация с дополнительным текстом","data-container-id":"checkboxFieldIdNine",children:"Не управляемый маленький чекбокс indeterminate"}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"m",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdTen",children:"Чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.C,_object_spread_props(_object_spread({},props),{visible:visible1,onVisibilityChange:function(visible){return setVisible1(visible)},renderContent:function(){return"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights."},children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{$dimension:"m","aria-hidden":!0})}))]}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"s",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdEleven",children:"Маленький чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.C,_object_spread_props(_object_spread({},props),{visible:visible2,onVisibilityChange:function(visible){return setVisible2(visible)},renderContent:function(){return"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights."},children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{$dimension:"s","aria-hidden":!0})}))]})]})})};try{CheckboxFieldBaseTemplate.displayName="CheckboxFieldBaseTemplate",CheckboxFieldBaseTemplate.__docgenInfo={description:"",displayName:"CheckboxFieldBaseTemplate",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:null,description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"]={docgenInfo:CheckboxFieldBaseTemplate.__docgenInfo,name:"CheckboxFieldBaseTemplate",path:"src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}let CheckboxFieldBase_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CheckboxField, Hint } from '@admiral-ds/react-ui';
import type { CheckboxFieldProps, CheckboxDimension, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as InfoSolidSVG } from '@admiral-ds/icons/build/service/InfoSolid.svg';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > * {
    margin-top: 16px;
  }
\`;

const InfoSolid = styled(InfoSolidSVG)<{ $dimension: CheckboxDimension }>\`
  margin-left: 5px;
  width: \${(props) => (props.$dimension === 'm' ? '24px' : '20px')};

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  [data-focus-within] & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, \${(p) => p.theme.color['Primary/Primary 70']});
  }
  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, \${(p) => p.theme.color['Primary/Primary 70']});
  }
\`;

const CheckboxWithInformer = styled.div\`
  display: flex;
  align-items: flex-start;
\`;

export const CheckboxFieldBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CheckboxFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);

  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);

  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Container>
        <CheckboxField
          {...props}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
          data-container-id="checkboxFieldIdOne"
          id="checkboxFieldId"
          name="checkboxFieldName"
        >
          Управляемый чекбокс
        </CheckboxField>
        <CheckboxField dimension="s" data-container-id="checkboxFieldIdTwo">
          Не управляемый маленький чекбокс
        </CheckboxField>
        <CheckboxField dimension="m" data-container-id="checkboxFieldIdThree">
          Двойная
          <br />
          строка
        </CheckboxField>
        <CheckboxField
          disabled
          defaultChecked
          extraText="Дополнительный текст. Additional text"
          data-container-id="checkboxFieldIdFour"
        >
          Disabled не управляемый чекбокс
        </CheckboxField>
        <CheckboxField disabled data-container-id="checkboxFieldIdFive">
          Disabled не управляемый чекбокс
        </CheckboxField>
        <CheckboxField readOnly defaultChecked data-container-id="checkboxFieldIdSix">
          Readonly не управляемый чекбокс
        </CheckboxField>
        <CheckboxField
          readOnly
          extraText="Дополнительный текст. Additional text"
          data-container-id="checkboxFieldIdSeven"
        >
          Readonly не управляемый чекбокс
        </CheckboxField>
        <CheckboxField
          error
          extraText={
            <span>
              Вариация с <i>дополнительно</i> декорированным <b>текстом</b>
            </span>
          }
          data-container-id="checkboxFieldIdEight"
        >
          Error не управляемый чекбокс
        </CheckboxField>
        <CheckboxField
          dimension="s"
          indeterminate
          extraText="Вариация с дополнительным текстом"
          data-container-id="checkboxFieldIdNine"
        >
          Не управляемый маленький чекбокс indeterminate
        </CheckboxField>
        <CheckboxWithInformer>
          <CheckboxField dimension="m" extraText="Вариация с информером" data-container-id="checkboxFieldIdTen">
            Чекбокс с информером
          </CheckboxField>
          <Hint
            {...props}
            visible={visible1}
            onVisibilityChange={handleHintChange1}
            renderContent={() =>
              'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
            }
          >
            <InfoSolid $dimension="m" aria-hidden />
          </Hint>
        </CheckboxWithInformer>
        <CheckboxWithInformer>
          <CheckboxField dimension="s" extraText="Вариация с информером" data-container-id="checkboxFieldIdEleven">
            Маленький чекбокс с информером
          </CheckboxField>
          <Hint
            {...props}
            visible={visible2}
            onVisibilityChange={handleHintChange2}
            renderContent={() =>
              'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
            }
          >
            <InfoSolid $dimension="s" aria-hidden />
          </Hint>
        </CheckboxWithInformer>
      </Container>
    </ThemeProvider>
  );
};
`;function CheckboxField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CheckboxField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function CheckboxField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CheckboxField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CheckboxField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CheckboxField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CheckboxField_stories_define_property(target,key,source[key])})}return target}function CheckboxField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CheckboxField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CheckboxField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CheckboxField_stories_sliced_to_array(arr,i){return CheckboxField_stories_array_with_holes(arr)||CheckboxField_stories_iterable_to_array_limit(arr,i)||CheckboxField_stories_unsupported_iterable_to_array(arr,i)||CheckboxField_stories_non_iterable_rest()}function CheckboxField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CheckboxField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CheckboxField_stories_array_like_to_array(o,minLen)}}let CheckboxField_stories={title:"Admiral-2.1/Form Field/CheckboxField",decorators:void 0,component:CheckboxField.Y,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21143"}]},argTypes:{dimension:{options:CheckboxDimension.n,control:{type:"radio"}},indeterminate:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hovered:{control:{type:"boolean"}},extraText:{control:{type:"text"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},children:{control:!1}}};var CheckboxFieldBase={render:function(props){var CSSCustomProps=CheckboxField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CheckboxFieldBaseTemplate,CheckboxField_stories_object_spread_props(CheckboxField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CheckboxFieldBase_templateraw_namespaceObject}}},name:"CheckboxField example"};CheckboxFieldBase.parameters={...CheckboxFieldBase.parameters,docs:{...CheckboxFieldBase.parameters?.docs,source:{originalSource:`{
  render: CheckboxFieldBaseStory,
  parameters: {
    docs: {
      source: {
        code: CheckboxFieldBaseRaw
      }
    }
  },
  name: 'CheckboxField example'
}`,...CheckboxFieldBase.parameters?.docs?.source}}};let __namedExportsOrder=["CheckboxFieldBase"]},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-form-CheckboxField-stories-CheckboxField-stories.91379fa8.iframe.bundle.js.map