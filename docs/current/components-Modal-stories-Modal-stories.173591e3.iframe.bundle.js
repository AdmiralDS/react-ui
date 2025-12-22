"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5435],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M21.7 10.046c.3.198.381.601.182.9-.5.754-1.141 1.573-1.913 2.359l1.835 1.835a.65.65 0 1 1-.919.92l-1.867-1.868c-.935.8-2.015 1.516-3.226 2.023l1.034 2.49a.65.65 0 1 1-1.2.498l-1.064-2.56a9.6 9.6 0 0 1-2.562.349 9.8 9.8 0 0 1-2.566-.338l-1.06 2.55a.65.65 0 0 1-1.2-.5l1.027-2.47c-1.244-.517-2.316-1.25-3.221-2.04L3.115 16.06a.65.65 0 0 1-.92-.919l1.844-1.843a19 19 0 0 1-1.903-2.338.65.65 0 1 1 1.066-.744c1.463 2.097 4.34 5.477 8.798 5.477 4.034 0 7.15-2.979 8.8-5.465a.65.65 0 0 1 .9-.181"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.437 10.683C3.867 8.654 7.119 5 12 5c4.88 0 8.134 3.655 9.563 5.682a2.27 2.27 0 0 1 0 2.636C20.133 15.345 16.881 19 12 19c-4.88 0-8.134-3.655-9.563-5.682a2.27 2.27 0 0 1 0-2.636M6.3 12a5.7 5.7 0 1 0 11.4 0 5.7 5.7 0 0 0-11.4 0m14.2-.569a15 15 0 0 0-2.209-2.504c.454.928.709 1.97.709 3.073a7 7 0 0 1-.709 3.073 15 15 0 0 0 2.21-2.504.97.97 0 0 0 0-1.138m-17 0a15 15 0 0 1 2.209-2.504A7 7 0 0 0 5 12c0 1.102.255 2.145.709 3.073a15 15 0 0 1-2.21-2.504.97.97 0 0 1 0-1.138m7.806-2.35c.376-.09.694.232.694.619v1a1.3 1.3 0 0 0 1.3 1.3h1c.387 0 .708.318.62.694a3.001 3.001 0 1 1-3.614-3.613"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.226 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.37 5.55-6.41a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.9c-.28.31-.76.31-1.04 0L5.396 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.996 16.211c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.494-3.146-3.49-3.018a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.98 3.458c.31.28.31.76 0 1.04l-3.984 3.586c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/Modal/stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalCustomContentExample:()=>ModalCustomContentExample,ModalCustomOverlayExample:()=>ModalCustomOverlayExample,ModalOneButtonExample:()=>ModalOneButtonExample,ModalScrollExample:()=>ModalScrollExample,ModalStatusIconExample:()=>ModalStatusIconExample,ModalTwoButtonsExample:()=>ModalTwoButtonsExample,ModalWithoutButtonsExample:()=>ModalWithoutButtonsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Modal=__webpack_require__("./src/components/Modal/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),SelectField=__webpack_require__("./src/components/form/SelectField/index.tsx"),Option=__webpack_require__("./src/components/input/Select/Option/index.tsx"),InputField=__webpack_require__("./src/components/form/InputField/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx"),useId=__webpack_require__("./src/components/common/hooks/useId.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  height: 20px;
`]);return _templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject()),OPTIONS_SIMPLE=["teeext 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","texttt 6"],ModalForm=function(param){var onYesClick=param.onYesClick,onNoClick=param.onNoClick,_React_useState=_sliced_to_array(react.useState(""),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(""),2),inputValue=_React_useState1[0],setInputValue=_React_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Modal.$m,{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?",(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(SelectField.z,{label:"label",className:"Search",value:selected,onChange:function(e){setSelected(e.target.value)},placeholder:"Placeholder",children:OPTIONS_SIMPLE.map(function(option,ind){return(0,jsx_runtime.jsx)(Option.c,{value:option,disabled:4===ind,children:option},option)})}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(InputField.F,{label:"введите значение",value:inputValue,onChange:function(e){setInputValue(e.target.value)}})]}),(0,jsx_runtime.jsxs)(Modal.me,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return onYesClick({selected:selected,inputValue:inputValue})},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:onNoClick,children:"No button"})]})]})},ModalTwoButtonsTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1],closeButtonProps={"data-testid":(0,useId.B)()};return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open modal with 2 buttons"}),opened&&(0,jsx_runtime.jsxs)(Modal.aF,_object_spread_props(_object_spread({},props),{onClose:function(){setOpened(!1)},"aria-labelledby":"modal-title",closeButtonPropsConfig:function(){return closeButtonProps},children:[(0,jsx_runtime.jsx)(Modal.wt,{id:"modal-title",children:"Modal title"}),(0,jsx_runtime.jsx)(ModalForm,{onYesClick:function(p){console.log("value ".concat(p.inputValue)),setOpened(!1)},onNoClick:function(){return setOpened(!1)}})]}))]})};try{ModalTwoButtonsTemplate.displayName="ModalTwoButtonsTemplate",ModalTwoButtonsTemplate.__docgenInfo={description:"",displayName:"ModalTwoButtonsTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение модального окна (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:"Закрытие на нажатие клавиши Escape",name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnOutsideClick:{defaultValue:null,description:"Закрытие на клик извне",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике извне и closeOnOutsideClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayStyledCss:{defaultValue:null,description:`Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayStyledCss",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку модального окна",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку модального окна",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/stories/ModalTwoButtons.template.tsx#ModalTwoButtonsTemplate"]={docgenInfo:ModalTwoButtonsTemplate.__docgenInfo,name:"ModalTwoButtonsTemplate",path:"src/components/Modal/stories/ModalTwoButtons.template.tsx#ModalTwoButtonsTemplate"})}catch(__react_docgen_typescript_loader_error){}function ModalOneButton_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ModalOneButton_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ModalOneButton_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ModalOneButton_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ModalOneButton_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ModalOneButton_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ModalOneButton_template_define_property(target,key,source[key])})}return target}function ModalOneButton_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ModalOneButton_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ModalOneButton_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ModalOneButton_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ModalOneButton_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ModalOneButton_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ModalOneButton_template_sliced_to_array(arr,i){return ModalOneButton_template_array_with_holes(arr)||ModalOneButton_template_iterable_to_array_limit(arr,i)||ModalOneButton_template_unsupported_iterable_to_array(arr,i)||ModalOneButton_template_non_iterable_rest()}function ModalOneButton_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ModalOneButton_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ModalOneButton_template_array_like_to_array(o,minLen)}}var ModalOneButtonTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ModalOneButton_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=ModalOneButton_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open modal with 1 button"}),opened&&(0,jsx_runtime.jsxs)(Modal.aF,ModalOneButton_template_object_spread_props(ModalOneButton_template_object_spread({},props),{onClose:function(){setOpened(!1)},"aria-labelledby":"modal-title",children:[(0,jsx_runtime.jsx)(Modal.wt,{id:"modal-title",children:"Modal title"}),(0,jsx_runtime.jsx)(Modal.$m,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsx)(Modal.me,{children:(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"Yes button"})})]}))]})};try{ModalOneButtonTemplate.displayName="ModalOneButtonTemplate",ModalOneButtonTemplate.__docgenInfo={description:"",displayName:"ModalOneButtonTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение модального окна (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:"Закрытие на нажатие клавиши Escape",name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnOutsideClick:{defaultValue:null,description:"Закрытие на клик извне",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике извне и closeOnOutsideClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayStyledCss:{defaultValue:null,description:`Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayStyledCss",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку модального окна",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку модального окна",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/stories/ModalOneButton.template.tsx#ModalOneButtonTemplate"]={docgenInfo:ModalOneButtonTemplate.__docgenInfo,name:"ModalOneButtonTemplate",path:"src/components/Modal/stories/ModalOneButton.template.tsx#ModalOneButtonTemplate"})}catch(__react_docgen_typescript_loader_error){}function ModalWithoutButtons_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ModalWithoutButtons_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ModalWithoutButtons_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ModalWithoutButtons_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ModalWithoutButtons_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ModalWithoutButtons_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ModalWithoutButtons_template_define_property(target,key,source[key])})}return target}function ModalWithoutButtons_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ModalWithoutButtons_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ModalWithoutButtons_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ModalWithoutButtons_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ModalWithoutButtons_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ModalWithoutButtons_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ModalWithoutButtons_template_sliced_to_array(arr,i){return ModalWithoutButtons_template_array_with_holes(arr)||ModalWithoutButtons_template_iterable_to_array_limit(arr,i)||ModalWithoutButtons_template_unsupported_iterable_to_array(arr,i)||ModalWithoutButtons_template_non_iterable_rest()}function ModalWithoutButtons_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ModalWithoutButtons_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ModalWithoutButtons_template_array_like_to_array(o,minLen)}}var ModalWithoutButtonsTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ModalWithoutButtons_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=ModalWithoutButtons_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open modal without buttons"}),opened&&(0,jsx_runtime.jsxs)(Modal.aF,ModalWithoutButtons_template_object_spread_props(ModalWithoutButtons_template_object_spread({},props),{onClose:function(){setOpened(!1)},"aria-labelledby":"modal-title",children:[(0,jsx_runtime.jsx)(Modal.wt,{id:"modal-title",children:"Modal title"}),(0,jsx_runtime.jsx)(Modal.$m,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"})]}))]})};try{ModalWithoutButtonsTemplate.displayName="ModalWithoutButtonsTemplate",ModalWithoutButtonsTemplate.__docgenInfo={description:"",displayName:"ModalWithoutButtonsTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение модального окна (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:"Закрытие на нажатие клавиши Escape",name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnOutsideClick:{defaultValue:null,description:"Закрытие на клик извне",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике извне и closeOnOutsideClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayStyledCss:{defaultValue:null,description:`Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayStyledCss",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку модального окна",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку модального окна",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/stories/ModalWithoutButtons.template.tsx#ModalWithoutButtonsTemplate"]={docgenInfo:ModalWithoutButtonsTemplate.__docgenInfo,name:"ModalWithoutButtonsTemplate",path:"src/components/Modal/stories/ModalWithoutButtons.template.tsx#ModalWithoutButtonsTemplate"})}catch(__react_docgen_typescript_loader_error){}var CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),TextArea=__webpack_require__("./src/components/input/TextArea/index.tsx");function ModalScroll_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ModalScroll_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ModalScroll_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ModalScroll_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ModalScroll_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ModalScroll_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ModalScroll_template_define_property(target,key,source[key])})}return target}function ModalScroll_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ModalScroll_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ModalScroll_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ModalScroll_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ModalScroll_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ModalScroll_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ModalScroll_template_sliced_to_array(arr,i){return ModalScroll_template_array_with_holes(arr)||ModalScroll_template_iterable_to_array_limit(arr,i)||ModalScroll_template_unsupported_iterable_to_array(arr,i)||ModalScroll_template_non_iterable_rest()}function ModalScroll_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ModalScroll_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ModalScroll_template_array_like_to_array(o,minLen)}}var ModalScrollTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ModalScroll_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=ModalScroll_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open modal with scrollable content"}),opened&&(0,jsx_runtime.jsxs)(Modal.aF,ModalScroll_template_object_spread_props(ModalScroll_template_object_spread({},props),{onClose:function(){setOpened(!1)},"aria-labelledby":"modal-title",style:{maxHeight:"90vh"},children:[(0,jsx_runtime.jsx)(Modal.wt,{id:"modal-title",children:"Modal title"}),(0,jsx_runtime.jsxs)(Modal.$m,{children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{children:"Lorem ipsum dolor"}),(0,jsx_runtime.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur",(0,jsx_runtime.jsx)(TextArea.f,{defaultValue:TEXT}),"adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"]}),(0,jsx_runtime.jsxs)(Modal.me,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:function(){return setOpened(!1)},children:"No button"})]})]}))]})},TEXT=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
<TextArea></TextArea>
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis?`;try{ModalScrollTemplate.displayName="ModalScrollTemplate",ModalScrollTemplate.__docgenInfo={description:"",displayName:"ModalScrollTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение модального окна (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:"Закрытие на нажатие клавиши Escape",name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnOutsideClick:{defaultValue:null,description:"Закрытие на клик извне",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике извне и closeOnOutsideClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayStyledCss:{defaultValue:null,description:`Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayStyledCss",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку модального окна",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку модального окна",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/stories/ModalScroll.template.tsx#ModalScrollTemplate"]={docgenInfo:ModalScrollTemplate.__docgenInfo,name:"ModalScrollTemplate",path:"src/components/Modal/stories/ModalScroll.template.tsx#ModalScrollTemplate"})}catch(__react_docgen_typescript_loader_error){}function ModalCustomContent_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ModalCustomContent_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ModalCustomContent_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ModalCustomContent_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ModalCustomContent_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ModalCustomContent_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ModalCustomContent_template_define_property(target,key,source[key])})}return target}function ModalCustomContent_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ModalCustomContent_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ModalCustomContent_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ModalCustomContent_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ModalCustomContent_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ModalCustomContent_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ModalCustomContent_template_sliced_to_array(arr,i){return ModalCustomContent_template_array_with_holes(arr)||ModalCustomContent_template_iterable_to_array_limit(arr,i)||ModalCustomContent_template_unsupported_iterable_to_array(arr,i)||ModalCustomContent_template_non_iterable_rest()}function ModalCustomContent_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ModalCustomContent_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ModalCustomContent_template_array_like_to_array(o,minLen)}}var ModalCustomContentTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ModalCustomContent_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=ModalCustomContent_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open modal with custom content"}),opened&&(0,jsx_runtime.jsxs)(Modal.aF,ModalCustomContent_template_object_spread_props(ModalCustomContent_template_object_spread({},props),{dimension:"l",onClose:function(){setOpened(!1)},"aria-labelledby":"modal-title",children:[(0,jsx_runtime.jsx)("h1",{id:"modal-title",style:{paddingLeft:"24px"},children:(0,jsx_runtime.jsx)("strong",{children:"Modal title"})}),(0,jsx_runtime.jsx)("i",{style:{paddingLeft:"24px"},children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"}),(0,jsx_runtime.jsxs)("div",{style:{marginTop:"40px",width:"80%",display:"flex",justifyContent:"space-between",paddingLeft:"24px"},children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"First button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"Second button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){return setOpened(!1)},children:"Third button"})]})]}))]})};try{ModalCustomContentTemplate.displayName="ModalCustomContentTemplate",ModalCustomContentTemplate.__docgenInfo={description:"",displayName:"ModalCustomContentTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение модального окна (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:"Закрытие на нажатие клавиши Escape",name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnOutsideClick:{defaultValue:null,description:"Закрытие на клик извне",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике извне и closeOnOutsideClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayStyledCss:{defaultValue:null,description:`Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayStyledCss",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку модального окна",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку модального окна",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/stories/ModalCustomContent.template.tsx#ModalCustomContentTemplate"]={docgenInfo:ModalCustomContentTemplate.__docgenInfo,name:"ModalCustomContentTemplate",path:"src/components/Modal/stories/ModalCustomContent.template.tsx#ModalCustomContentTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx");function ModalCustomOverlay_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ModalCustomOverlay_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ModalCustomOverlay_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ModalCustomOverlay_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ModalCustomOverlay_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ModalCustomOverlay_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ModalCustomOverlay_template_define_property(target,key,source[key])})}return target}function ModalCustomOverlay_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ModalCustomOverlay_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ModalCustomOverlay_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ModalCustomOverlay_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ModalCustomOverlay_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ModalCustomOverlay_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ModalCustomOverlay_template_sliced_to_array(arr,i){return ModalCustomOverlay_template_array_with_holes(arr)||ModalCustomOverlay_template_iterable_to_array_limit(arr,i)||ModalCustomOverlay_template_unsupported_iterable_to_array(arr,i)||ModalCustomOverlay_template_non_iterable_rest()}function ModalCustomOverlay_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ModalCustomOverlay_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ModalCustomOverlay_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ModalCustomOverlay_template_array_like_to_array(o,minLen)}}function ModalCustomOverlay_template_templateObject(){var data=ModalCustomOverlay_template_tagged_template_literal([`
  background-color: #ffdddd66;
`]);return ModalCustomOverlay_template_templateObject=function _templateObject(){return data},data}var overlayStyles=(0,styled_components_browser_esm.AH)(ModalCustomOverlay_template_templateObject()),ModalCustomOverlayTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ModalCustomOverlay_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=ModalCustomOverlay_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"У пользователя есть возможность кастомизировать внешний вид подложки модального окна. Для этого можно воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки. Либо можно воспользоваться параметрами overlayClassName, overlayStyle."}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setOpened(!0)},children:"Open modal with custom overlay"}),opened&&(0,jsx_runtime.jsxs)(Modal.aF,ModalCustomOverlay_template_object_spread_props(ModalCustomOverlay_template_object_spread({},props),{onClose:function(){setOpened(!1)},"aria-labelledby":"modal-title",overlayStyledCss:overlayStyles,children:[(0,jsx_runtime.jsx)(Modal.wt,{id:"modal-title",children:"Modal title"}),(0,jsx_runtime.jsx)(Modal.$m,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis?"})]}))]})};try{ModalCustomOverlayTemplate.displayName="ModalCustomOverlayTemplate",ModalCustomOverlayTemplate.__docgenInfo={description:"",displayName:"ModalCustomOverlayTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение модального окна (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:"Закрытие на нажатие клавиши Escape",name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnOutsideClick:{defaultValue:null,description:"Закрытие на клик извне",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике извне и closeOnOutsideClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayStyledCss:{defaultValue:null,description:`Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayStyledCss",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку модального окна",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку модального окна",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/stories/ModalCustomOverlay.template.tsx#ModalCustomOverlayTemplate"]={docgenInfo:ModalCustomOverlayTemplate.__docgenInfo,name:"ModalCustomOverlayTemplate",path:"src/components/Modal/stories/ModalCustomOverlay.template.tsx#ModalCustomOverlayTemplate"})}catch(__react_docgen_typescript_loader_error){}var TooltipHOC=__webpack_require__("./src/components/TooltipHOC/index.tsx"),InfoOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoOutline.svg"),CheckOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CheckOutline.svg"),CloseCircleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseCircleOutline.svg"),ErrorOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/ErrorOutline.svg");function ModalStatusIcon_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ModalStatusIcon_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ModalStatusIcon_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ModalStatusIcon_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ModalStatusIcon_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ModalStatusIcon_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ModalStatusIcon_template_define_property(target,key,source[key])})}return target}function ModalStatusIcon_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ModalStatusIcon_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ModalStatusIcon_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ModalStatusIcon_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ModalStatusIcon_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ModalStatusIcon_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ModalStatusIcon_template_sliced_to_array(arr,i){return ModalStatusIcon_template_array_with_holes(arr)||ModalStatusIcon_template_iterable_to_array_limit(arr,i)||ModalStatusIcon_template_unsupported_iterable_to_array(arr,i)||ModalStatusIcon_template_non_iterable_rest()}function ModalStatusIcon_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ModalStatusIcon_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ModalStatusIcon_template_array_like_to_array(o,minLen)}}var TooltipedButton=(0,TooltipHOC.K)(Button.$n),ModalStatusIconTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ModalStatusIcon_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=ModalStatusIcon_template_sliced_to_array(react.useState(!1),2),opened=_React_useState[0],setOpened=_React_useState[1],_React_useState1=ModalStatusIcon_template_sliced_to_array(react.useState("information"),2),iconStatus=_React_useState1[0],setIconStatus=_React_useState1[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Используются в простых текстовых модальных окнах для оповещений пользователя о важных событиях. Статус модального окна может быть четырех типов: Success, Information, Danger, Warning."}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"5px"},children:[(0,jsx_runtime.jsx)(TooltipedButton,{onClick:function(){setIconStatus("information"),setOpened(!0)},iconStart:(0,jsx_runtime.jsx)(InfoOutline.h,{}),displayAsSquare:!0,renderContent:function(){return"Open modal with information status icon"},tooltipPosition:"bottom"}),(0,jsx_runtime.jsx)(TooltipedButton,{onClick:function(){setIconStatus("success"),setOpened(!0)},iconStart:(0,jsx_runtime.jsx)(CheckOutline.h,{}),displayAsSquare:!0,renderContent:function(){return"Open modal with success status icon"},tooltipPosition:"bottom"}),(0,jsx_runtime.jsx)(TooltipedButton,{onClick:function(){setIconStatus("warning"),setOpened(!0)},iconStart:(0,jsx_runtime.jsx)(ErrorOutline.h,{}),displayAsSquare:!0,renderContent:function(){return"Open modal with warning status icon"},tooltipPosition:"bottom"}),(0,jsx_runtime.jsx)(TooltipedButton,{onClick:function(){setIconStatus("danger"),setOpened(!0)},iconStart:(0,jsx_runtime.jsx)(CloseCircleOutline.h,{}),displayAsSquare:!0,renderContent:function(){return"Open modal with danger status icon"},tooltipPosition:"bottom"})]}),opened&&(0,jsx_runtime.jsxs)(Modal.aF,ModalStatusIcon_template_object_spread_props(ModalStatusIcon_template_object_spread({},props),{closeOnEscapeKeyDown:!0,closeOnOutsideClick:!0,onClose:function(){setOpened(!1)},"aria-labelledby":"modal-title",children:[(0,jsx_runtime.jsx)(Modal.Z4,{status:iconStatus}),(0,jsx_runtime.jsx)(Modal.wt,{id:"modal-title",children:"Modal title"}),(0,jsx_runtime.jsx)(Modal.$m,{children:"Экстраполяция расширения Вселенной назад во времени приводит к точке космической сингулярности, вблизи которой ныне известные законы физики перестают работать. Время же расширения из этой космической сингулярности до современного состояния называют возрастом Вселенной; по различным данным, оно составляет приблизительно 14 млрд лет."}),(0,jsx_runtime.jsxs)(Modal.me,{children:[(0,jsx_runtime.jsx)(Button.$n,{appearance:"primary",dimension:"m",onClick:function(){setOpened(!1)},children:"Yes button"}),(0,jsx_runtime.jsx)(Button.$n,{appearance:"secondary",dimension:"m",onClick:function(){return setOpened(!1)},children:"No button"})]})]}))]})};try{ModalStatusIconTemplate.displayName="ModalStatusIconTemplate",ModalStatusIconTemplate.__docgenInfo={description:"",displayName:"ModalStatusIconTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},container:{defaultValue:null,description:"Контейнер, в котором происходит размещение модального окна (BODY по умолчанию)",name:"container",required:!1,type:{name:"Element"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},closeOnEscapeKeyDown:{defaultValue:null,description:"Закрытие на нажатие клавиши Escape",name:"closeOnEscapeKeyDown",required:!1,type:{name:"boolean"}},closeOnOutsideClick:{defaultValue:null,description:"Закрытие на клик извне",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},displayCloseIcon:{defaultValue:null,description:"Отображение иконки крестика в верхнем правом углу",name:"displayCloseIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:`Обработчик закрытия компонента. Срабатывает:
1) при клике на крестик в верхнем правому углу
2) при нажатии Escape и closeOnEscapeKeyDown равным true
3) при клике извне и closeOnOutsideClick равным true`,name:"onClose",required:!1,type:{name:"(() => void)"}},overlayStyledCss:{defaultValue:null,description:`Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
Например цвет фона в зависимости от темы:
 const overlayStyles = css\\\`background-color: \${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\\\``,name:"overlayStyledCss",required:!1,type:{name:"RuleSet<object>"}},overlayClassName:{defaultValue:null,description:"Позволяет добавлять класс на подложку модального окна",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"Позволяет добавлять стили на подложку модального окна",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, "$mobile"> & { ...; }) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/stories/ModalStatusIcon.template.tsx#ModalStatusIconTemplate"]={docgenInfo:ModalStatusIconTemplate.__docgenInfo,name:"ModalStatusIconTemplate",path:"src/components/Modal/stories/ModalStatusIcon.template.tsx#ModalStatusIconTemplate"})}catch(__react_docgen_typescript_loader_error){}let ModalTwoButtons_templateraw_namespaceObject=`import * as React from 'react';
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalButtonPanel,
  Button,
  SelectField,
  InputField,
  Option,
  useId,
} from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 20px;
\`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

type Props = {
  onYesClick: (p: { selected: number | string | null; inputValue: string }) => void;
  onNoClick: () => void;
};

const ModalForm = ({ onYesClick, onNoClick }: Props) => {
  const [selected, setSelected] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <SelectField
          label="label"
          className="Search"
          value={selected}
          onChange={handleSelectChange}
          placeholder="Placeholder"
        >
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </SelectField>
        <Separator />
        <InputField
          label="введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </ModalContent>
      <ModalButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ selected, inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </ModalButtonPanel>
    </>
  );
};

export const ModalTwoButtonsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);
  const closeButtonProps = { 'data-testid': useId() };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button onClick={() => setOpened(true)}>Open modal with 2 buttons</Button>
      {opened && (
        <Modal
          {...props}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          closeButtonPropsConfig={() => closeButtonProps}
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalForm
            onYesClick={(p) => {
              // eslint-disable-next-line no-console
              console.log(\`value \${p.inputValue}\`);
              setOpened(false);
            }}
            onNoClick={() => setOpened(false)}
          />
        </Modal>
      )}
    </ThemeProvider>
  );
};
`,ModalOneButton_templateraw_namespaceObject=`import * as React from 'react';
import { Modal, ModalTitle, ModalContent, ModalButtonPanel, Button } from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const ModalOneButtonTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button onClick={() => setOpened(true)}>Open modal with 1 button</Button>
      {opened && (
        <Modal
          {...props}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ThemeProvider>
  );
};
`,ModalWithoutButtons_templateraw_namespaceObject=`import * as React from 'react';
import { Modal, ModalTitle, ModalContent, Button } from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const ModalWithoutButtonsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button onClick={() => setOpened(true)}>Open modal without buttons</Button>
      {opened && (
        <Modal
          {...props}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
        </Modal>
      )}
    </ThemeProvider>
  );
};
`,ModalScroll_templateraw_namespaceObject=`import * as React from 'react';
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalButtonPanel,
  Button,
  CheckboxField,
  TextArea,
} from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const ModalScrollTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button onClick={() => setOpened(true)}>Open modal with scrollable content</Button>
      {opened && (
        <Modal
          {...props}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          style={{ maxHeight: '90vh' }} // IE bug https://github.com/philipwalton/flexbugs#flexbug-3
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            <CheckboxField>Lorem ipsum dolor</CheckboxField>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
            ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            <TextArea defaultValue={TEXT} />
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis?
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
            <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
              No button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ThemeProvider>
  );
};

const TEXT = \`Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
<TextArea></TextArea>
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
quasi quod ut veritatis?\`;
`,ModalCustomContent_templateraw_namespaceObject=`import * as React from 'react';
import { Modal, Button } from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const ModalCustomContentTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button onClick={() => setOpened(true)}>Open modal with custom content</Button>
      {opened && (
        <Modal
          {...props}
          dimension="l"
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <h1 id="modal-title" style={{ paddingLeft: '24px' }}>
            <strong>Modal title</strong>
          </h1>
          <i style={{ paddingLeft: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <div
            style={{
              marginTop: '40px',
              width: '80%',
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '24px',
            }}
          >
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              First button
            </Button>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Second button
            </Button>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Third button
            </Button>
          </div>
        </Modal>
      )}
    </ThemeProvider>
  );
};
`,ModalCustomOverlay_templateraw_namespaceObject=`import * as React from 'react';
import { Modal, ModalTitle, ModalContent, Button, T } from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider, css } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const overlayStyles = css\`
  background-color: #ffdddd66;
\`;

export const ModalCustomOverlayTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        У пользователя есть возможность кастомизировать внешний вид подложки модального окна. Для этого можно
        воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки. Либо можно
        воспользоваться параметрами overlayClassName, overlayStyle.
      </T>
      <Button onClick={() => setOpened(true)}>Open modal with custom overlay</Button>
      {opened && (
        <Modal
          {...props}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          overlayStyledCss={overlayStyles}
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
        </Modal>
      )}
    </ThemeProvider>
  );
};
`,ModalStatusIcon_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalButtonPanel,
  Button,
  ModalStatusIcon,
  TooltipHoc,
  T,
} from '@admiral-ds/react-ui';
import type { ModalProps, BorderRadiusType, ModalStatusIconType } from '@admiral-ds/react-ui';
import { ReactComponent as InfoOutline } from '@admiral-ds/icons/build/service/InfoOutline.svg';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ReactComponent as CloseCircleOutline } from '@admiral-ds/icons/build/service/CloseCircleOutline.svg';
import { ReactComponent as ErrorOutline } from '@admiral-ds/icons/build/service/ErrorOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const TooltipedButton = TooltipHoc(Button);

export const ModalStatusIconTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ModalProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [opened, setOpened] = React.useState(false);
  const [iconStatus, setIconStatus] = React.useState<ModalStatusIconType>('information');

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Используются в простых текстовых модальных окнах для оповещений пользователя о важных событиях. Статус
        модального окна может быть четырех типов: Success, Information, Danger, Warning.
      </T>
      <div style={{ display: 'flex', gap: '5px' }}>
        <TooltipedButton
          onClick={() => {
            setIconStatus('information');
            setOpened(true);
          }}
          iconStart={<InfoOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with information status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('success');
            setOpened(true);
          }}
          iconStart={<CheckOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with success status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('warning');
            setOpened(true);
          }}
          iconStart={<ErrorOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with warning status icon'}
          tooltipPosition={'bottom'}
        />
        <TooltipedButton
          onClick={() => {
            setIconStatus('danger');
            setOpened(true);
          }}
          iconStart={<CloseCircleOutline />}
          displayAsSquare
          renderContent={() => 'Open modal with danger status icon'}
          tooltipPosition={'bottom'}
        />
      </div>
      {opened && (
        <Modal
          {...props}
          closeOnEscapeKeyDown
          closeOnOutsideClick
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalStatusIcon status={iconStatus} />
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Экстраполяция расширения Вселенной назад во времени приводит к точке космической сингулярности, вблизи
            которой ныне известные законы физики перестают работать. Время же расширения из этой космической
            сингулярности до современного состояния называют возрастом Вселенной; по различным данным, оно составляет
            приблизительно 14 млрд лет.
          </ModalContent>
          <ModalButtonPanel>
            <Button
              appearance="primary"
              dimension="m"
              onClick={() => {
                setOpened(false);
              }}
            >
              Yes button
            </Button>
            <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
              No button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ThemeProvider>
  );
};
`;function Modal_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Modal_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Modal_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Modal_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Modal_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Modal_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Modal_stories_define_property(target,key,source[key])})}return target}function Modal_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Modal_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Modal_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Modal_stories_sliced_to_array(arr,i){return Modal_stories_array_with_holes(arr)||Modal_stories_iterable_to_array_limit(arr,i)||Modal_stories_unsupported_iterable_to_array(arr,i)||Modal_stories_non_iterable_rest()}function Modal_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Modal_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Modal_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Modal_stories_array_like_to_array(o,minLen)}}function Modal_stories_templateObject(){var data=Modal_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Modal_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Modal_stories_templateObject());let Modal_stories={title:"Admiral-2.1/Modal",decorators:void 0,component:Modal.aF,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Модальное окно используется для ситуаций, когда требуется акцентировать внимание пользователя на подтверждении какого-либо действия. Всплывает по центру страницы и блокирует содержимое страницы, которое расположено под модальным окном."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49046"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49211"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49265"}]},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},mobile:{control:{type:"boolean"}},closeOnEscapeKeyDown:{control:{type:"boolean"}},closeOnOutsideClick:{control:{type:"boolean"}},displayCloseIcon:{control:{type:"boolean"}},overlayClassName:{control:{type:"text"}},container:{control:!1},overlayStyledCss:{control:!1},locale:{control:!1},overlayStyle:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var ModalTwoButtonsExample={render:function(props){var CSSCustomProps=Modal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ModalTwoButtonsTemplate,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ModalTwoButtons_templateraw_namespaceObject}}},name:"Modal. Пример c двумя кнопками."},ModalOneButtonExample={render:function(props){var CSSCustomProps=Modal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ModalOneButtonTemplate,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ModalOneButton_templateraw_namespaceObject}}},name:"Modal. Пример c одной кнопкой."},ModalWithoutButtonsExample={render:function(props){var CSSCustomProps=Modal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ModalWithoutButtonsTemplate,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ModalWithoutButtons_templateraw_namespaceObject}}},name:"Modal. Пример без кнопок."},ModalScrollExample={render:function(props){var CSSCustomProps=Modal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ModalScrollTemplate,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ModalScroll_templateraw_namespaceObject}}},name:"Modal. Пример со скроллом."},ModalCustomContentExample={render:function(props){var CSSCustomProps=Modal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ModalCustomContentTemplate,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ModalCustomContent_templateraw_namespaceObject}}},name:"Modal. Свободное (кастомизированное) наполнение."},ModalCustomOverlayExample={render:function(props){var CSSCustomProps=Modal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ModalCustomOverlayTemplate,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ModalCustomOverlay_templateraw_namespaceObject}}},name:"Modal. Кастомизация подложки модального окна."},ModalStatusIconExample={render:function(props){var CSSCustomProps=Modal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ModalStatusIconTemplate,Modal_stories_object_spread_props(Modal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ModalStatusIcon_templateraw_namespaceObject}}},name:"Modal. Статусные иконки."};ModalTwoButtonsExample.parameters={...ModalTwoButtonsExample.parameters,docs:{...ModalTwoButtonsExample.parameters?.docs,source:{originalSource:`{
  render: ModalTwoButtonsStory,
  parameters: {
    docs: {
      source: {
        code: ModalTwoButtonsRaw
      }
    }
  },
  name: 'Modal. Пример c двумя кнопками.'
}`,...ModalTwoButtonsExample.parameters?.docs?.source}}},ModalOneButtonExample.parameters={...ModalOneButtonExample.parameters,docs:{...ModalOneButtonExample.parameters?.docs,source:{originalSource:`{
  render: ModalOneButtonStory,
  parameters: {
    docs: {
      source: {
        code: ModalOneButtonRaw
      }
    }
  },
  name: 'Modal. Пример c одной кнопкой.'
}`,...ModalOneButtonExample.parameters?.docs?.source}}},ModalWithoutButtonsExample.parameters={...ModalWithoutButtonsExample.parameters,docs:{...ModalWithoutButtonsExample.parameters?.docs,source:{originalSource:`{
  render: ModalWithoutButtonsStory,
  parameters: {
    docs: {
      source: {
        code: ModalWithoutButtonsRaw
      }
    }
  },
  name: 'Modal. Пример без кнопок.'
}`,...ModalWithoutButtonsExample.parameters?.docs?.source}}},ModalScrollExample.parameters={...ModalScrollExample.parameters,docs:{...ModalScrollExample.parameters?.docs,source:{originalSource:`{
  render: ModalScrollStory,
  parameters: {
    docs: {
      source: {
        code: ModalScrollRaw
      }
    }
  },
  name: 'Modal. Пример со скроллом.'
}`,...ModalScrollExample.parameters?.docs?.source}}},ModalCustomContentExample.parameters={...ModalCustomContentExample.parameters,docs:{...ModalCustomContentExample.parameters?.docs,source:{originalSource:`{
  render: ModalCustomContentStory,
  parameters: {
    docs: {
      source: {
        code: ModalCustomContentRaw
      }
    }
  },
  name: 'Modal. Свободное (кастомизированное) наполнение.'
}`,...ModalCustomContentExample.parameters?.docs?.source}}},ModalCustomOverlayExample.parameters={...ModalCustomOverlayExample.parameters,docs:{...ModalCustomOverlayExample.parameters?.docs,source:{originalSource:`{
  render: ModalCustomOverlayStory,
  parameters: {
    docs: {
      source: {
        code: ModalCustomOverlayRaw
      }
    }
  },
  name: 'Modal. Кастомизация подложки модального окна.'
}`,...ModalCustomOverlayExample.parameters?.docs?.source}}},ModalStatusIconExample.parameters={...ModalStatusIconExample.parameters,docs:{...ModalStatusIconExample.parameters?.docs,source:{originalSource:`{
  render: ModalStatusIconStory,
  parameters: {
    docs: {
      source: {
        code: ModalStatusIconRaw
      }
    }
  },
  name: 'Modal. Статусные иконки.'
}`,...ModalStatusIconExample.parameters?.docs?.source}}};let __namedExportsOrder=["ModalTwoButtonsExample","ModalOneButtonExample","ModalWithoutButtonsExample","ModalScrollExample","ModalCustomContentExample","ModalCustomOverlayExample","ModalStatusIconExample"]},"./src/components/form/InputField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>InputField});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src_components_common_uid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/uid.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Field__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/input/TextInput/index.tsx"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var InputField=react__WEBPACK_IMPORTED_MODULE_5__.forwardRef(function(props,ref){var inputRef=react__WEBPACK_IMPORTED_MODULE_5__.useRef(null),className=props.className,maxLength=props.maxLength,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,additionalLabel=props.additionalLabel,_props_id=props.id,id=void 0===_props_id?(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_1__.L)():_props_id,disabled=props.disabled,displayCharacterCounter=props.displayCharacterCounter,characterCounterVisibilityThreshold=props.characterCounterVisibilityThreshold,skeleton=props.skeleton,labelCssMixins=props.labelCssMixins,visibleLabelTooltips=props.visibleLabelTooltips,restProps=_object_without_properties(props,["className","maxLength","displayInline","status","required","extraText","label","additionalLabel","id","disabled","displayCharacterCounter","characterCounterVisibilityThreshold","skeleton","labelCssMixins","visibleLabelTooltips"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,additionalLabel:additionalLabel,id:id,displayInline:displayInline,disabled:disabled,maxLength:maxLength,inputRef:inputRef,displayCharacterCounter:displayCharacterCounter,characterCounterVisibilityThreshold:characterCounterVisibilityThreshold,skeleton:skeleton,labelCssMixins:labelCssMixins,visibleLabelTooltips:visibleLabelTooltips,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_6__.$e)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_6__.G)(restProps,fieldContainerProps);var inputProps=_object_spread({ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_2__.d)(ref,inputRef),id:id,"aria-required":required,status:status,disabled:disabled,maxLength:maxLength,skeleton:skeleton},restProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_3__.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input__WEBPACK_IMPORTED_MODULE_4__.ks,_object_spread({},inputProps))}))});InputField.displayName="InputField";try{InputField.displayName="InputField",InputField.__docgenInfo={description:"",displayName:"InputField",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},containerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера в котором находится input. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:'((props: FastOmit<FastOmit<Omit<FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$skeleton"> & { ...; }, "ref"> & { ...; }, "$dimension"> & { ...; }, "disabled" | ... 3 more ... | "$status"> & { ...; } & DataAttributes) => Partial<...> & DataAttributes)'}},clearInputIconButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки поля. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearInputIconButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...> & DataAttributes)'}},visiblePasswordInputIconButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки показать/скрыть значение при type="password". На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"visiblePasswordInputIconButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...> & DataAttributes)'}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},visibleLabelTooltips:{defaultValue:null,description:`Включает показ tooltip для лейблов при переполнении текста.
По умолчанию все тултипы отключены (все значения = false)`,name:"visibleLabelTooltips",required:!1,type:{name:"{ label?: boolean; additionalLabel?: boolean; extraText?: boolean | undefined; } | undefined"}},labelCssMixins:{defaultValue:null,description:"CSS миксины для переопределения стилей лейблов",name:"labelCssMixins",required:!1,type:{name:"{ label?: RuleSet<object>; additionalLabel?: RuleSet<object>; extraText?: RuleSet<object> | undefined; } | undefined"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputField/index.tsx#InputField"]={docgenInfo:InputField.__docgenInfo,name:"InputField",path:"src/components/form/InputField/index.tsx#InputField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/SelectField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>SelectField});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_input_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/input/Select/index.tsx"),_src_components_Field__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),_src_components_common_hooks_useId__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/hooks/useId.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  [data-status='error'] & {
    border-color: var(--admiral-color-Error_Error60Main, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}var Select=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_input_Select__WEBPACK_IMPORTED_MODULE_3__.l6)(_templateObject(),function(p){return p.theme.color["Error/Error 60 Main"]}),SelectField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(props,ref){var className=props.className,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,additionalLabel=props.additionalLabel,_props_id=props.id,id=void 0===_props_id?(0,_src_components_common_hooks_useId__WEBPACK_IMPORTED_MODULE_6__.B)():_props_id,disabled=props.disabled,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","displayInline","status","required","extraText","label","additionalLabel","id","disabled","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,additionalLabel:additionalLabel,id:id,displayInline:displayInline,disabled:disabled,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__.$e)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__.G)(restProps,fieldContainerProps);var selectProps=_object_spread({ref:ref,id:id,"aria-required":required,status:status,disabled:disabled,skeleton:skeleton},restProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_4__.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Select,_object_spread({},selectProps))}))});SelectField.displayName="SelectField";try{SelectField.displayName="SelectField",SelectField.__docgenInfo={description:"",displayName:"SelectField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"baseline"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"baseline"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},visibleLabelTooltips:{defaultValue:null,description:`Включает показ tooltip для лейблов при переполнении текста.
По умолчанию все тултипы отключены (все значения = false)`,name:"visibleLabelTooltips",required:!1,type:{name:"{ label?: boolean; additionalLabel?: boolean; extraText?: boolean | undefined; } | undefined"}},labelCssMixins:{defaultValue:null,description:"CSS миксины для переопределения стилей лейблов",name:"labelCssMixins",required:!1,type:{name:"{ label?: RuleSet<object>; additionalLabel?: RuleSet<object>; extraText?: RuleSet<object> | undefined; } | undefined"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/index.tsx#SelectField"]={docgenInfo:SelectField.__docgenInfo,name:"SelectField",path:"src/components/form/SelectField/index.tsx#SelectField"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Modal-stories-Modal-stories.173591e3.iframe.bundle.js.map