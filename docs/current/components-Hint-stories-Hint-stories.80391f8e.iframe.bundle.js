"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7659],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/HelpOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgHelpOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgHelpOutline=function SvgHelpOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-7.71c-4.26 0-7.71 3.45-7.71 7.71 0 4.25 3.45 7.7 7.71 7.7 4.25 0 7.7-3.45 7.7-7.7 0-4.26-3.45-7.71-7.7-7.71m-.68 9.34a.65.65 0 1 0 1.3-.01c0-.3.04-.5.15-.78.14-.33.42-.63.72-.94v-.01c.49-.51 1.04-1.08 1.18-1.99.13-.87-.23-1.77-.95-2.34-.74-.59-1.72-.72-2.62-.37-1.18.47-1.85 1.49-1.79 2.75.01.36.33.63.68.62a.65.65 0 0 0 .62-.68c-.03-.49.13-1.15.97-1.48.47-.18.95-.12 1.33.18.36.28.54.71.48 1.13-.08.5-.42.86-.81 1.27l-.02.02c-.36.37-.76.79-.99 1.36-.18.43-.25.8-.25 1.27m1.53 2.72c0 .46-.39.85-.85.85-.47 0-.86-.39-.86-.85a.856.856 0 0 1 1.71 0"})))};__webpack_require__.p},"./src/components/Hint/stories/Hint.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HintAnchorCssExample:()=>HintAnchorCssExample,HintBaseExample:()=>HintBaseExample,HintClassNameExample:()=>HintClassNameExample,HintClickExample:()=>HintClickExample,HintDimensionExample:()=>HintDimensionExample,HintPositionExample:()=>HintPositionExample,HintTargetExample:()=>HintTargetExample,HintTextButtonExample:()=>HintTextButtonExample,HintWithHeaderExample:()=>HintWithHeaderExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Hint_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Hint=__webpack_require__("./src/components/Hint/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),HelpOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/HelpOutline.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var HintBase_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,HintBaseTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(Hint.C,_object_spread_props(_object_spread({},props),{renderContent:function(){return HintBase_template_text},anchorId:"hint_base",visible:visible,onVisibilityChange:function(visible){return setVisible(visible)},children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(HelpOutline.h,{"aria-hidden":!0}),"aria-label":"Additional information","aria-describedby":"hint_base"})}))})};try{HintBaseTemplate.displayName="HintBaseTemplate",HintBaseTemplate.__docgenInfo={description:"",displayName:"HintBaseTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintBase.template.tsx#HintBaseTemplate"]={docgenInfo:HintBaseTemplate.__docgenInfo,name:"HintBaseTemplate",path:"src/components/Hint/stories/HintBase.template.tsx#HintBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx");function HintClassName_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintClassName_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintClassName_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintClassName_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintClassName_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintClassName_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintClassName_template_define_property(target,key,source[key])})}return target}function HintClassName_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintClassName_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintClassName_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintClassName_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintClassName_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintClassName_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintClassName_template_sliced_to_array(arr,i){return HintClassName_template_array_with_holes(arr)||HintClassName_template_iterable_to_array_limit(arr,i)||HintClassName_template_unsupported_iterable_to_array(arr,i)||HintClassName_template_non_iterable_rest()}function HintClassName_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintClassName_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintClassName_template_array_like_to_array(o,minLen)}}var HintClassName_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,HintClassNameTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintClassName_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=HintClassName_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"На Hint, созданный через портал, добавляется класс через пропс className."}),(0,jsx_runtime.jsx)(Hint.C,HintClassName_template_object_spread_props(HintClassName_template_object_spread({},props),{className:"custom-hint-class",renderContent:function(){return HintClassName_template_text},anchorId:"hint-class1",visibilityTrigger:"click",visible:visible,onVisibilityChange:function(visible){return setVisible(visible)},children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(HelpOutline.h,{"aria-hidden":!0}),"aria-label":"Additional information","aria-describedby":"hint-class1"})}))]})};try{HintClassNameTemplate.displayName="HintClassNameTemplate",HintClassNameTemplate.__docgenInfo={description:"",displayName:"HintClassNameTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintClassName.template.tsx#HintClassNameTemplate"]={docgenInfo:HintClassNameTemplate.__docgenInfo,name:"HintClassNameTemplate",path:"src/components/Hint/stories/HintClassName.template.tsx#HintClassNameTemplate"})}catch(__react_docgen_typescript_loader_error){}function HintClick_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintClick_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintClick_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintClick_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintClick_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintClick_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintClick_template_define_property(target,key,source[key])})}return target}function HintClick_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintClick_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintClick_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintClick_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintClick_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintClick_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintClick_template_sliced_to_array(arr,i){return HintClick_template_array_with_holes(arr)||HintClick_template_iterable_to_array_limit(arr,i)||HintClick_template_unsupported_iterable_to_array(arr,i)||HintClick_template_non_iterable_rest()}function HintClick_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintClick_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintClick_template_array_like_to_array(o,minLen)}}var HintClick_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,HintClickTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintClick_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=HintClick_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(Hint.C,HintClick_template_object_spread_props(HintClick_template_object_spread({},props),{renderContent:function(){return HintClick_template_text},anchorId:"hint_click",visibilityTrigger:"click",visible:visible,onVisibilityChange:function(visible){return setVisible(visible)},children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(HelpOutline.h,{"aria-hidden":!0}),"aria-label":"Additional information","aria-describedby":"hint_click",onClick:function(e){visible&&(setVisible(!1),e.preventDefault(),e.stopPropagation())}})}))})};try{HintClickTemplate.displayName="HintClickTemplate",HintClickTemplate.__docgenInfo={description:"",displayName:"HintClickTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintClick.template.tsx#HintClickTemplate"]={docgenInfo:HintClickTemplate.__docgenInfo,name:"HintClickTemplate",path:"src/components/Hint/stories/HintClick.template.tsx#HintClickTemplate"})}catch(__react_docgen_typescript_loader_error){}var UnorderedList1=__webpack_require__("./src/components/List/UnorderedList.tsx"),List=__webpack_require__("./src/components/List/index.tsx");function HintPosition_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintPosition_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintPosition_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintPosition_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintPosition_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintPosition_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintPosition_template_define_property(target,key,source[key])})}return target}function HintPosition_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintPosition_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintPosition_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintPosition_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintPosition_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintPosition_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintPosition_template_sliced_to_array(arr,i){return HintPosition_template_array_with_holes(arr)||HintPosition_template_iterable_to_array_limit(arr,i)||HintPosition_template_unsupported_iterable_to_array(arr,i)||HintPosition_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function HintPosition_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintPosition_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintPosition_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  padding: 4px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  height: 8px;
`]);return _templateObject1=function _templateObject(){return data},data}var HintPosition_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,StyledButton=(0,styled_components_browser_esm.Ay)(Button.$n)(_templateObject()),Separator=styled_components_browser_esm.Ay.div(_templateObject1()),HintPositionTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintPosition_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=HintPosition_template_sliced_to_array(react.useState(!1),2),visible1=_React_useState[0],setVisible1=_React_useState[1],_React_useState1=HintPosition_template_sliced_to_array(react.useState(!1),2),visible2=_React_useState1[0],setVisible2=_React_useState1[1],_React_useState2=HintPosition_template_sliced_to_array(react.useState(!1),2),visible3=_React_useState2[0],setVisible3=_React_useState2[1],_React_useState3=HintPosition_template_sliced_to_array(react.useState(!1),2),visible4=_React_useState3[0],setVisible4=_React_useState3[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:["Компонент имеет 8 основных вариантов позиционирования: снизу справа, снизу слева, сверху справа, сверху слева, слева внизу, слева вверху, справа внизу и справа вверху. Позиции перечислены в порядке приоритета. По умолчанию компонент сам рассчитывает свою позицию, исходя из приоритета позиций и свободного места на экране. Если хинт не помещается ни в один из перечисленных 8 вариантов позиционирования, то происходит проверка того, можно ли разместить хинт снизу/сверху/слева/справа относительно центра target-элемента или снизу/сверху по центру страницы.",(0,jsx_runtime.jsx)(Separator,{}),"Также пользователь может сам с помощью параметра hintPosition задать, с какой стороны от target-элемента должен появляться Hint. Параметр hintPosition может принимать следующие значения - bottom|top|left|right. ",(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(UnorderedList1.X,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"При hintPosition='bottom' хинт рендерится снизу от target-элемента с возможным сдвигом по горизонтальной оси, т.е. происходит выбор из 4 вариантов позиционирования: снизу справа, снизу слева, снизу по центру target-элемента и снизу по центру страницы (позиции расположены в порядке приоритета);"}),(0,jsx_runtime.jsx)(List.ck,{children:"При hintPosition='top' хинт рендерится сверху от target-элемента с возможным сдвигом по горизонтальной оси, т.е. происходит выбор из 4 вариантов позиционирования: сверху справа, сверху слева, сверху по центру target-элемента и сверху по центру страницы (позиции расположены в порядке приоритета);"}),(0,jsx_runtime.jsx)(List.ck,{children:"При hintPosition='left' хинт рендерится слева от target-элемента с возможным сдвигом по вертикальной оси, т.е. происходит выбор из 3 вариантов позиционирования: слева снизу, слева сверху и слева по центру target-элемента (позиции расположены в порядке приоритета);"}),(0,jsx_runtime.jsx)(List.ck,{children:"При hintPosition='right' хинт рендерится справа от target-элемента с возможным сдвигом по вертикальной оси, т.е. происходит выбор из 3 вариантов позиционирования: справа снизу, справа сверху и справа по центру target-элемента (позиции расположены в порядке приоритета)."})]}),(0,jsx_runtime.jsx)(Separator,{}),"На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства, то есть занимает всю ширину экрана и позиционируется только снизу или сверху от target-элемента.",(0,jsx_runtime.jsx)(Separator,{}),"Ниже приведен пример с использованием параметра hintPosition."]}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,jsx_runtime.jsx)(Hint.C,HintPosition_template_object_spread_props(HintPosition_template_object_spread({},props),{visible:visible1,onVisibilityChange:function(visible){return setVisible1(visible)},renderContent:function(){return HintPosition_template_text},anchorId:"right_pos",hintPosition:"right",children:(0,jsx_runtime.jsx)(StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"right_pos",children:"Right"})})),(0,jsx_runtime.jsx)(Hint.C,HintPosition_template_object_spread_props(HintPosition_template_object_spread({},props),{visible:visible2,onVisibilityChange:function(visible){return setVisible2(visible)},renderContent:function(){return HintPosition_template_text},id:"top_pos",hintPosition:"top",children:(0,jsx_runtime.jsx)(StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"top_pos",children:"Top"})})),(0,jsx_runtime.jsx)(Hint.C,HintPosition_template_object_spread_props(HintPosition_template_object_spread({},props),{visible:visible3,onVisibilityChange:function(visible){return setVisible3(visible)},renderContent:function(){return HintPosition_template_text},anchorId:"bottom_pos",hintPosition:"bottom",children:(0,jsx_runtime.jsx)(StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"bottom_pos",children:"Bottom"})})),(0,jsx_runtime.jsx)(Hint.C,HintPosition_template_object_spread_props(HintPosition_template_object_spread({},props),{visible:visible4,onVisibilityChange:function(visible){return setVisible4(visible)},renderContent:function(){return HintPosition_template_text},id:"left-pos",hintPosition:"left",children:(0,jsx_runtime.jsx)(StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"left-pos",children:"Left"})}))]})]})};try{HintPositionTemplate.displayName="HintPositionTemplate",HintPositionTemplate.__docgenInfo={description:"",displayName:"HintPositionTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintPosition.template.tsx#HintPositionTemplate"]={docgenInfo:HintPositionTemplate.__docgenInfo,name:"HintPositionTemplate",path:"src/components/Hint/stories/HintPosition.template.tsx#HintPositionTemplate"})}catch(__react_docgen_typescript_loader_error){}var TextButton=__webpack_require__("./src/components/TextButton/index.tsx");function HintTextButton_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintTextButton_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintTextButton_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintTextButton_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintTextButton_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintTextButton_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintTextButton_template_define_property(target,key,source[key])})}return target}function HintTextButton_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintTextButton_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintTextButton_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintTextButton_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintTextButton_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintTextButton_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintTextButton_template_sliced_to_array(arr,i){return HintTextButton_template_array_with_holes(arr)||HintTextButton_template_iterable_to_array_limit(arr,i)||HintTextButton_template_unsupported_iterable_to_array(arr,i)||HintTextButton_template_non_iterable_rest()}function HintTextButton_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function HintTextButton_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintTextButton_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintTextButton_template_array_like_to_array(o,minLen)}}function HintTextButton_template_templateObject(){var data=HintTextButton_template_tagged_template_literal([`
  height: `,`px;
`]);return HintTextButton_template_templateObject=function _templateObject(){return data},data}var HintTextButton_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,HintTextButton_template_Separator=styled_components_browser_esm.Ay.div(HintTextButton_template_templateObject(),function(param){return param.height||20}),HintTextButtonTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintTextButton_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=HintTextButton_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"В качества контента хинта может выступать любой ReactNode, например допускается использование TextButton внутри хинта. В случае если хинт содержит в себе TextButton, триггером его появления должен быть click."}),(0,jsx_runtime.jsx)(HintTextButton_template_Separator,{height:24}),(0,jsx_runtime.jsx)(Hint.C,HintTextButton_template_object_spread_props(HintTextButton_template_object_spread({},props),{visible:visible,onVisibilityChange:function(visible){return setVisible(visible)},visibilityTrigger:"click",renderContent:function(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[HintTextButton_template_text,(0,jsx_runtime.jsx)(HintTextButton_template_Separator,{height:4}),(0,jsx_runtime.jsx)(TextButton.Q,{appearance:"primary",dimension:"s",text:"Text Button"})]})},anchorId:"hint_textbutton",children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(HelpOutline.h,{"aria-hidden":!0}),"aria-label":"Additional information","aria-describedby":"hint_textbutton"})}))]})};try{HintTextButtonTemplate.displayName="HintTextButtonTemplate",HintTextButtonTemplate.__docgenInfo={description:"",displayName:"HintTextButtonTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintTextButton.template.tsx#HintTextButtonTemplate"]={docgenInfo:HintTextButtonTemplate.__docgenInfo,name:"HintTextButtonTemplate",path:"src/components/Hint/stories/HintTextButton.template.tsx#HintTextButtonTemplate"})}catch(__react_docgen_typescript_loader_error){}function HintTarget_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintTarget_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintTarget_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintTarget_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintTarget_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintTarget_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintTarget_template_define_property(target,key,source[key])})}return target}function HintTarget_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintTarget_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintTarget_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintTarget_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintTarget_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintTarget_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintTarget_template_sliced_to_array(arr,i){return HintTarget_template_array_with_holes(arr)||HintTarget_template_iterable_to_array_limit(arr,i)||HintTarget_template_unsupported_iterable_to_array(arr,i)||HintTarget_template_non_iterable_rest()}function HintTarget_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintTarget_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintTarget_template_array_like_to_array(o,minLen)}}var HintTarget_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,HintTargetTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintTarget_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),btnRef=react.useRef(null),_React_useState=HintTarget_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(Button.$n,{ref:btnRef,dimension:"xl",appearance:"primary",iconEnd:(0,jsx_runtime.jsx)(Hint.C,HintTarget_template_object_spread_props(HintTarget_template_object_spread({},props),{visible:visible,onVisibilityChange:function(visible){return setVisible(visible)},renderContent:function(){return HintTarget_template_text},targetElement:btnRef.current,anchorId:"hint_target",children:(0,jsx_runtime.jsx)(HelpOutline.h,{tabIndex:0,height:24,width:24,"aria-label":"Help Icon","aria-describedby":"hint_target"})})),children:"Hover on icon"})})};try{HintTargetTemplate.displayName="HintTargetTemplate",HintTargetTemplate.__docgenInfo={description:"",displayName:"HintTargetTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintTarget.template.tsx#HintTargetTemplate"]={docgenInfo:HintTargetTemplate.__docgenInfo,name:"HintTargetTemplate",path:"src/components/Hint/stories/HintTarget.template.tsx#HintTargetTemplate"})}catch(__react_docgen_typescript_loader_error){}function HintAnchorCss_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintAnchorCss_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintAnchorCss_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintAnchorCss_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintAnchorCss_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintAnchorCss_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintAnchorCss_template_define_property(target,key,source[key])})}return target}function HintAnchorCss_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintAnchorCss_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintAnchorCss_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintAnchorCss_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintAnchorCss_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintAnchorCss_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintAnchorCss_template_sliced_to_array(arr,i){return HintAnchorCss_template_array_with_holes(arr)||HintAnchorCss_template_iterable_to_array_limit(arr,i)||HintAnchorCss_template_unsupported_iterable_to_array(arr,i)||HintAnchorCss_template_non_iterable_rest()}function HintAnchorCss_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function HintAnchorCss_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintAnchorCss_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintAnchorCss_template_array_like_to_array(o,minLen)}}function HintAnchorCss_template_templateObject(){var data=HintAnchorCss_template_tagged_template_literal([`
  padding: 10px;
  border: 2px dotted red;
`]);return HintAnchorCss_template_templateObject=function _templateObject(){return data},data}var HintAnchorCss_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,anchorCss=(0,styled_components_browser_esm.AH)(HintAnchorCss_template_templateObject()),HintAnchorCssTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintAnchorCss_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=HintAnchorCss_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(Hint.C,HintAnchorCss_template_object_spread_props(HintAnchorCss_template_object_spread({},props),{visible:visible,onVisibilityChange:function(visible){return setVisible(visible)},renderContent:function(){return HintAnchorCss_template_text},anchorId:"hint_css",anchorCssMixin:anchorCss,children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(HelpOutline.h,{"aria-hidden":!0}),"aria-label":"Additional information","aria-describedby":"hint_css"})}))})};try{HintAnchorCssTemplate.displayName="HintAnchorCssTemplate",HintAnchorCssTemplate.__docgenInfo={description:"",displayName:"HintAnchorCssTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintAnchorCss.template.tsx#HintAnchorCssTemplate"]={docgenInfo:HintAnchorCssTemplate.__docgenInfo,name:"HintAnchorCssTemplate",path:"src/components/Hint/stories/HintAnchorCss.template.tsx#HintAnchorCssTemplate"})}catch(__react_docgen_typescript_loader_error){}function HintWithHeader_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintWithHeader_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintWithHeader_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintWithHeader_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintWithHeader_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintWithHeader_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintWithHeader_template_define_property(target,key,source[key])})}return target}function HintWithHeader_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintWithHeader_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintWithHeader_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintWithHeader_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintWithHeader_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintWithHeader_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintWithHeader_template_sliced_to_array(arr,i){return HintWithHeader_template_array_with_holes(arr)||HintWithHeader_template_iterable_to_array_limit(arr,i)||HintWithHeader_template_unsupported_iterable_to_array(arr,i)||HintWithHeader_template_non_iterable_rest()}function HintWithHeader_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintWithHeader_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintWithHeader_template_array_like_to_array(o,minLen)}}var HintWithHeader_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,renderHintContent=function(){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Subtitle/Subtitle 3",as:"div",style:{marginBottom:"4px"},children:"Hint header"}),HintWithHeader_template_text]})},HintWithHeaderTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintWithHeader_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=HintWithHeader_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"В качества контента хинта может выступать любой ReactNode, можно добавить, например, заголовок."}),(0,jsx_runtime.jsx)(Hint.C,HintWithHeader_template_object_spread_props(HintWithHeader_template_object_spread({},props),{renderContent:renderHintContent,anchorId:"hint_click",visibilityTrigger:"click",visible:visible,onVisibilityChange:function(visible){return setVisible(visible)},children:(0,jsx_runtime.jsx)(Button.$n,{dimension:"xl",appearance:"primary",displayAsSquare:!0,iconStart:(0,jsx_runtime.jsx)(HelpOutline.h,{"aria-hidden":!0}),"aria-label":"Additional information","aria-describedby":"hint_click"})}))]})};try{HintWithHeaderTemplate.displayName="HintWithHeaderTemplate",HintWithHeaderTemplate.__docgenInfo={description:"",displayName:"HintWithHeaderTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintWithHeader.template.tsx#HintWithHeaderTemplate"]={docgenInfo:HintWithHeaderTemplate.__docgenInfo,name:"HintWithHeaderTemplate",path:"src/components/Hint/stories/HintWithHeader.template.tsx#HintWithHeaderTemplate"})}catch(__react_docgen_typescript_loader_error){}function HintDimension_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function HintDimension_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function HintDimension_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function HintDimension_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function HintDimension_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function HintDimension_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){HintDimension_template_define_property(target,key,source[key])})}return target}function HintDimension_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function HintDimension_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):HintDimension_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function HintDimension_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=HintDimension_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HintDimension_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function HintDimension_template_sliced_to_array(arr,i){return HintDimension_template_array_with_holes(arr)||HintDimension_template_iterable_to_array_limit(arr,i)||HintDimension_template_unsupported_iterable_to_array(arr,i)||HintDimension_template_non_iterable_rest()}function HintDimension_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function HintDimension_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return HintDimension_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HintDimension_template_array_like_to_array(o,minLen)}}function HintDimension_template_templateObject(){var data=HintDimension_template_tagged_template_literal([`
  padding: 4px;
`]);return HintDimension_template_templateObject=function _templateObject(){return data},data}function HintDimension_template_templateObject1(){var data=HintDimension_template_tagged_template_literal([`
  height: 8px;
`]);return HintDimension_template_templateObject1=function _templateObject(){return data},data}var HintDimension_template_text=`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`,HintDimension_template_StyledButton=(0,styled_components_browser_esm.Ay)(Button.$n)(HintDimension_template_templateObject()),HintDimension_template_Separator=styled_components_browser_esm.Ay.div(HintDimension_template_templateObject1()),HintDimensionTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=HintDimension_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=HintDimension_template_sliced_to_array(react.useState(!1),2),visible1=_React_useState[0],setVisible1=_React_useState[1],_React_useState1=HintDimension_template_sliced_to_array(react.useState(!1),2),visible2=_React_useState1[0],setVisible2=_React_useState1[1],_React_useState2=HintDimension_template_sliced_to_array(react.useState(!1),2),visible3=_React_useState2[0],setVisible3=_React_useState2[1],_React_useState3=HintDimension_template_sliced_to_array(react.useState(!1),2),visible4=_React_useState3[0],setVisible4=_React_useState3[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:["Hint имеет три фиксированных по ширине размера: S - 280px, M - 384px и L - 488px (по умолчанию), которые используются в зависимости от предполагаемого объема текста. Пользователь также может задавать кастомную ширину компонента напрямую через параметр style или используя classname.",(0,jsx_runtime.jsx)(HintDimension_template_Separator,{}),"На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства с учетом стандартных отступов по бокам.",(0,jsx_runtime.jsx)(HintDimension_template_Separator,{}),"Высота компонента настраивается автоматически при задании контента. Максимальная высота компонента – 320px, после чего у контента появляется вертикальный скролл."]}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[(0,jsx_runtime.jsx)(Hint.C,HintDimension_template_object_spread_props(HintDimension_template_object_spread({},props),{visible:visible1,onVisibilityChange:function(visible){return setVisible1(visible)},renderContent:function(){return HintDimension_template_text},anchorId:"dim_l",children:(0,jsx_runtime.jsx)(HintDimension_template_StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"dim_l",children:"Open Hint L"})})),(0,jsx_runtime.jsx)(Hint.C,HintDimension_template_object_spread_props(HintDimension_template_object_spread({},props),{visible:visible2,onVisibilityChange:function(visible){return setVisible2(visible)},renderContent:function(){return HintDimension_template_text},id:"dim_m",dimension:"m",children:(0,jsx_runtime.jsx)(HintDimension_template_StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"dim_m",children:"Open Hint M"})})),(0,jsx_runtime.jsx)(Hint.C,HintDimension_template_object_spread_props(HintDimension_template_object_spread({},props),{visible:visible3,onVisibilityChange:function(visible){return setVisible3(visible)},renderContent:function(){return HintDimension_template_text},anchorId:"dim_s",dimension:"s",children:(0,jsx_runtime.jsx)(HintDimension_template_StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"dim_s",children:"Open Hint S"})})),(0,jsx_runtime.jsx)(Hint.C,HintDimension_template_object_spread_props(HintDimension_template_object_spread({},props),{visible:visible4,onVisibilityChange:function(visible){return setVisible4(visible)},renderContent:function(){return HintDimension_template_text},id:"width_custom",style:{width:"500px"},children:(0,jsx_runtime.jsx)(HintDimension_template_StyledButton,{dimension:"s","aria-label":"Additional information","aria-describedby":"width_custom-pos",children:"Open Hint with custom width"})}))]})]})};try{HintDimensionTemplate.displayName="HintDimensionTemplate",HintDimensionTemplate.__docgenInfo={description:"",displayName:"HintDimensionTemplate",props:{visible:{defaultValue:null,description:"Видимость компонента",name:"visible",required:!0,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:`Колбек на изменение видимости хинта

Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе колбек вызовется со значением visible=true,
при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.

Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
target элементе колбек вызовется со значением visible=true,
при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
колбек вызовется со значением visible=false.`,name:"onVisibilityChange",required:!1,type:{name:"((visible: boolean) => void)"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},hintPosition:{defaultValue:null,description:"Расположение хинта",name:"hintPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит",name:"targetElement",required:!1,type:{name:"Element | null"}},visibilityTrigger:{defaultValue:null,description:"Триггер появления компонента (событие, которое вызывает появление хинта)",name:"visibilityTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},hintRef:{defaultValue:null,description:"Ссылка на тултип",name:"hintRef",required:!1,type:{name:"RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null"}},anchorClassName:{defaultValue:null,description:"ClassName для внешнего контейнера (AnchorWrapper)",name:"anchorClassName",required:!1,type:{name:"string"}},anchorId:{defaultValue:null,description:"Id для внешнего контейнера (AnchorWrapper)",name:"anchorId",required:!1,type:{name:"string"}},anchorCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper)",name:"anchorCssMixin",required:!1,type:{name:"RuleSet<object>"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ closeButtonAriaLabel?: string; }"}},preventFocusSteal:{defaultValue:null,description:"Появление хинта не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hint/stories/HintDimension.template.tsx#HintDimensionTemplate"]={docgenInfo:HintDimensionTemplate.__docgenInfo,name:"HintDimensionTemplate",path:"src/components/Hint/stories/HintDimension.template.tsx#HintDimensionTemplate"})}catch(__react_docgen_typescript_loader_error){}let HintBase_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

export const HintBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Hint
        {...props}
        renderContent={() => text}
        anchorId="hint_base"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_base"
        />
      </Hint>
    </ThemeProvider>
  );
};
`,HintClassName_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

export const HintClassNameTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        На Hint, созданный через портал, добавляется класс через пропс className.
      </T>
      <Hint
        {...props}
        className="custom-hint-class"
        renderContent={() => text}
        anchorId="hint-class1"
        visibilityTrigger="click"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint-class1"
        />
      </Hint>
    </ThemeProvider>
  );
};
`,HintClick_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

export const HintClickTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (visible) {
      setVisible(false);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Hint
        {...props}
        renderContent={() => text}
        anchorId="hint_click"
        visibilityTrigger="click"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_click"
          onClick={handleButtonClick}
        />
      </Hint>
    </ThemeProvider>
  );
};
`,HintPosition_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

const StyledButton = styled(Button)\`
  padding: 4px;
\`;
const Separator = styled.div\`
  height: 8px;
\`;

export const HintPositionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент имеет 8 основных вариантов позиционирования: снизу справа, снизу слева, сверху справа, сверху слева,
        слева внизу, слева вверху, справа внизу и справа вверху. Позиции перечислены в порядке приоритета. По умолчанию
        компонент сам рассчитывает свою позицию, исходя из приоритета позиций и свободного места на экране. Если хинт не
        помещается ни в один из перечисленных 8 вариантов позиционирования, то происходит проверка того, можно ли
        разместить хинт снизу/сверху/слева/справа относительно центра target-элемента или снизу/сверху по центру
        страницы.
        <Separator />
        Также пользователь может сам с помощью параметра hintPosition задать, с какой стороны от target-элемента должен
        появляться Hint. Параметр hintPosition может принимать следующие значения - bottom|top|left|right. <Separator />
        <UnorderedList>
          <ListItem>
            При hintPosition='bottom' хинт рендерится снизу от target-элемента с возможным сдвигом по горизонтальной
            оси, т.е. происходит выбор из 4 вариантов позиционирования: снизу справа, снизу слева, снизу по центру
            target-элемента и снизу по центру страницы (позиции расположены в порядке приоритета);
          </ListItem>
          <ListItem>
            При hintPosition='top' хинт рендерится сверху от target-элемента с возможным сдвигом по горизонтальной оси,
            т.е. происходит выбор из 4 вариантов позиционирования: сверху справа, сверху слева, сверху по центру
            target-элемента и сверху по центру страницы (позиции расположены в порядке приоритета);
          </ListItem>
          <ListItem>
            При hintPosition='left' хинт рендерится слева от target-элемента с возможным сдвигом по вертикальной оси,
            т.е. происходит выбор из 3 вариантов позиционирования: слева снизу, слева сверху и слева по центру
            target-элемента (позиции расположены в порядке приоритета);
          </ListItem>
          <ListItem>
            При hintPosition='right' хинт рендерится справа от target-элемента с возможным сдвигом по вертикальной оси,
            т.е. происходит выбор из 3 вариантов позиционирования: справа снизу, справа сверху и справа по центру
            target-элемента (позиции расположены в порядке приоритета).
          </ListItem>
        </UnorderedList>
        <Separator />
        На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства, то
        есть занимает всю ширину экрана и позиционируется только снизу или сверху от target-элемента.
        <Separator />
        Ниже приведен пример с использованием параметра hintPosition.
      </T>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Hint
          {...props}
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
          renderContent={() => text}
          anchorId="right_pos"
          hintPosition="right"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="right_pos">
            Right
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          renderContent={() => text}
          id="top_pos"
          hintPosition="top"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="top_pos">
            Top
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
          renderContent={() => text}
          anchorId="bottom_pos"
          hintPosition="bottom"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="bottom_pos">
            Bottom
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
          renderContent={() => text}
          id="left-pos"
          hintPosition="left"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="left-pos">
            Left
          </StyledButton>
        </Hint>
      </div>
    </ThemeProvider>
  );
};
`,HintTextButton_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button, TextButton, T } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

const Separator = styled.div<{ height?: number }>\`
  height: \${({ height }) => (height ? height : 20)}px;
\`;

export const HintTextButtonTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        В качества контента хинта может выступать любой ReactNode, например допускается использование TextButton внутри
        хинта. В случае если хинт содержит в себе TextButton, триггером его появления должен быть click.
      </T>
      <Separator height={24} />
      <Hint
        {...props}
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
        visibilityTrigger="click"
        renderContent={() => (
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {text}
            <Separator height={4} />
            <TextButton appearance="primary" dimension="s" text="Text Button" />
          </div>
        )}
        anchorId="hint_textbutton"
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_textbutton"
        />
      </Hint>
    </ThemeProvider>
  );
};
`,HintTarget_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

export const HintTargetTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button
        ref={btnRef}
        dimension="xl"
        appearance="primary"
        iconEnd={
          <Hint
            {...props}
            visible={visible}
            onVisibilityChange={handleVisibilityChange}
            renderContent={() => text}
            targetElement={btnRef.current}
            anchorId="hint_target"
          >
            <HelpOutline tabIndex={0} height={24} width={24} aria-label="Help Icon" aria-describedby="hint_target" />
          </Hint>
        }
      >
        Hover on icon
      </Button>
    </ThemeProvider>
  );
};
`,HintAnchorCss_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider, css } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

const anchorCss = css\`
  padding: 10px;
  border: 2px dotted red;
\`;

export const HintAnchorCssTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Hint
        {...props}
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
        renderContent={() => text}
        anchorId="hint_css"
        anchorCssMixin={anchorCss}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_css"
        />
      </Hint>
    </ThemeProvider>
  );
};
`,HintWithHeader_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

const renderHintContent = () => {
  return (
    <div>
      <T font="Subtitle/Subtitle 3" as="div" style={{ marginBottom: '4px' }}>
        Hint header
      </T>
      {text}
    </div>
  );
};

export const HintWithHeaderTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible, setVisible] = React.useState(false);
  const handleVisibilityChange = (visible: boolean) => setVisible(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В качества контента хинта может выступать любой ReactNode, можно добавить, например, заголовок.
      </T>
      <Hint
        {...props}
        renderContent={renderHintContent}
        anchorId="hint_click"
        visibilityTrigger="click"
        visible={visible}
        onVisibilityChange={handleVisibilityChange}
      >
        <Button
          dimension="xl"
          appearance="primary"
          displayAsSquare
          iconStart={<HelpOutline aria-hidden />}
          aria-label="Additional information"
          aria-describedby="hint_click"
        />
      </Hint>
    </ThemeProvider>
  );
};
`,HintDimension_templateraw_namespaceObject=`import * as React from 'react';
import { Hint, Button, T } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = \`At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.\`;

const StyledButton = styled(Button)\`
  padding: 4px;
\`;
const Separator = styled.div\`
  height: 8px;
\`;

export const HintDimensionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Hint имеет три фиксированных по ширине размера: S - 280px, M - 384px и L - 488px (по умолчанию), которые
        используются в зависимости от предполагаемого объема текста. Пользователь также может задавать кастомную ширину
        компонента напрямую через параметр style или используя classname.
        <Separator />
        На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства с
        учетом стандартных отступов по бокам.
        <Separator />
        Высота компонента настраивается автоматически при задании контента. Максимальная высота компонента – 320px,
        после чего у контента появляется вертикальный скролл.
      </T>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Hint
          {...props}
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
          renderContent={() => text}
          anchorId="dim_l"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="dim_l">
            Open Hint L
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          renderContent={() => text}
          id="dim_m"
          dimension="m"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="dim_m">
            Open Hint M
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
          renderContent={() => text}
          anchorId="dim_s"
          dimension="s"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="dim_s">
            Open Hint S
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
          renderContent={() => text}
          id="width_custom"
          style={{ width: '500px' }}
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="width_custom-pos">
            Open Hint with custom width
          </StyledButton>
        </Hint>
      </div>
    </ThemeProvider>
  );
};
`;function Hint_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Hint_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Hint_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Hint_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Hint_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Hint_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Hint_stories_define_property(target,key,source[key])})}return target}function Hint_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Hint_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Hint_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Hint_stories_sliced_to_array(arr,i){return Hint_stories_array_with_holes(arr)||Hint_stories_iterable_to_array_limit(arr,i)||Hint_stories_unsupported_iterable_to_array(arr,i)||Hint_stories_non_iterable_rest()}function Hint_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Hint_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Hint_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hint_stories_array_like_to_array(o,minLen)}}function Hint_stories_templateObject(){var data=Hint_stories_tagged_template_literal([`
  height: `,`px;
`]);return Hint_stories_templateObject=function _templateObject(){return data},data}function Hint_stories_templateObject1(){var data=Hint_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Hint_stories_templateObject1=function _templateObject(){return data},data}var Hint_stories_Separator=styled_components_browser_esm.Ay.div(Hint_stories_templateObject(),function(param){return param.height||20}),Desc=styled_components_browser_esm.Ay.div(Hint_stories_templateObject1());let Hint_stories={title:"Admiral-2.1/Hint",decorators:void 0,component:Hint.C,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Всплывающая подсказка используется для ситуаций, когда требуется пояснить или раскрыть информацию более детально. Вызывается либо по клику, например на иконку Question, либо по ховеру на любом элементе, когда недостаточно Tooltip-а.",(0,jsx_runtime.jsx)(Hint_stories_Separator,{}),"В случае, когда Hint вызывается по клику, у нас есть возможность его закрыть кликом вне Hint-а, либо нажатием на крестик.",(0,jsx_runtime.jsx)(Hint_stories_Separator,{}),"В сценарии, когда Hint вызывается по ховеру, иконки закрытия на компоненте нет и он скрывается, когда мы уводим курсор с объекта, к которому он привязан.",(0,jsx_runtime.jsx)(Hint_stories_Separator,{}),"По умолчанию Hint появляется по ховеру."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31273"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31388"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31455"}],actions:{argTypesRegex:"^on.*"}},argTypes:{dimension:{options:["l","m","s"],control:{type:"radio"}},visibilityTrigger:{options:["hover","click"],control:{type:"radio"}},hintPosition:{options:["bottom","top","left","right"],control:{type:"radio"}},container:{control:!1},target:{control:!1},locale:{control:!1},hintRef:{control:!1},anchorClassName:{control:!1},anchorId:{control:!1},anchorCssMixin:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var HintBaseExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintBaseTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintBase_templateraw_namespaceObject}}},name:"Hint. Базовый пример."},HintDimensionExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintDimensionTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintDimension_templateraw_namespaceObject}}},name:"Hint. Размеры."},HintPositionExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintPositionTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintPosition_templateraw_namespaceObject}}},name:"Hint. Позиционирование."},HintClickExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintClickTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintClick_templateraw_namespaceObject}}},name:"Hint. Появление по клику."},HintTextButtonExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintTextButtonTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintTextButton_templateraw_namespaceObject}}},name:"Hint. Пример с кнопкой."},HintTargetExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintTargetTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintTarget_templateraw_namespaceObject}}},name:"Hint. Позиционирование относительно targetElement."},HintClassNameExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintClassNameTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintClassName_templateraw_namespaceObject}}},name:"Hint. ClassName."},HintAnchorCssExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintAnchorCssTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintAnchorCss_templateraw_namespaceObject}}},name:"Hint. Стилизация внешнего контейнера (AnchorWrapper) с помощью anchorCssMixin."},HintWithHeaderExample={render:function(props){var CSSCustomProps=Hint_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(HintWithHeaderTemplate,Hint_stories_object_spread_props(Hint_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:HintWithHeader_templateraw_namespaceObject}}},name:"Hint с заголовком."};HintBaseExample.parameters={...HintBaseExample.parameters,docs:{...HintBaseExample.parameters?.docs,source:{originalSource:`{
  render: HintBaseStory,
  parameters: {
    docs: {
      source: {
        code: HintBaseRaw
      }
    }
  },
  name: 'Hint. Базовый пример.'
}`,...HintBaseExample.parameters?.docs?.source}}},HintDimensionExample.parameters={...HintDimensionExample.parameters,docs:{...HintDimensionExample.parameters?.docs,source:{originalSource:`{
  render: HintDimensionStory,
  parameters: {
    docs: {
      source: {
        code: HintDimensionRaw
      }
    }
  },
  name: 'Hint. Размеры.'
}`,...HintDimensionExample.parameters?.docs?.source}}},HintPositionExample.parameters={...HintPositionExample.parameters,docs:{...HintPositionExample.parameters?.docs,source:{originalSource:`{
  render: HintPositionStory,
  parameters: {
    docs: {
      source: {
        code: HintPositionRaw
      }
    }
  },
  name: 'Hint. Позиционирование.'
}`,...HintPositionExample.parameters?.docs?.source}}},HintClickExample.parameters={...HintClickExample.parameters,docs:{...HintClickExample.parameters?.docs,source:{originalSource:`{
  render: HintClickStory,
  parameters: {
    docs: {
      source: {
        code: HintClickRaw
      }
    }
  },
  name: 'Hint. Появление по клику.'
}`,...HintClickExample.parameters?.docs?.source}}},HintTextButtonExample.parameters={...HintTextButtonExample.parameters,docs:{...HintTextButtonExample.parameters?.docs,source:{originalSource:`{
  render: HintTextButtonStory,
  parameters: {
    docs: {
      source: {
        code: HintTextButtonRaw
      }
    }
  },
  name: 'Hint. Пример с кнопкой.'
}`,...HintTextButtonExample.parameters?.docs?.source}}},HintTargetExample.parameters={...HintTargetExample.parameters,docs:{...HintTargetExample.parameters?.docs,source:{originalSource:`{
  render: HintTargetStory,
  parameters: {
    docs: {
      source: {
        code: HintTargetRaw
      }
    }
  },
  name: 'Hint. Позиционирование относительно targetElement.'
}`,...HintTargetExample.parameters?.docs?.source}}},HintClassNameExample.parameters={...HintClassNameExample.parameters,docs:{...HintClassNameExample.parameters?.docs,source:{originalSource:`{
  render: HintClassNameStory,
  parameters: {
    docs: {
      source: {
        code: HintClassNameRaw
      }
    }
  },
  name: 'Hint. ClassName.'
}`,...HintClassNameExample.parameters?.docs?.source}}},HintAnchorCssExample.parameters={...HintAnchorCssExample.parameters,docs:{...HintAnchorCssExample.parameters?.docs,source:{originalSource:`{
  render: HintAnchorCssStory,
  parameters: {
    docs: {
      source: {
        code: HintAnchorCssRaw
      }
    }
  },
  name: 'Hint. Стилизация внешнего контейнера (AnchorWrapper) с помощью anchorCssMixin.'
}`,...HintAnchorCssExample.parameters?.docs?.source}}},HintWithHeaderExample.parameters={...HintWithHeaderExample.parameters,docs:{...HintWithHeaderExample.parameters?.docs,source:{originalSource:`{
  render: HintWithHeaderStory,
  parameters: {
    docs: {
      source: {
        code: HintWithHeaderRaw
      }
    }
  },
  name: 'Hint с заголовком.'
}`,...HintWithHeaderExample.parameters?.docs?.source}}};let __namedExportsOrder=["HintBaseExample","HintDimensionExample","HintPositionExample","HintClickExample","HintTextButtonExample","HintTargetExample","HintClassNameExample","HintAnchorCssExample","HintWithHeaderExample"]},"./src/components/List/UnorderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>UnorderedList1});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/style.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var UnorderedList1=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_styleType=_param.styleType,_param_gap=_param.gap,markerCssMixin=_param.markerCssMixin,props=_object_without_properties(_param,["children","dimension","styleType","gap","markerCssMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.E2,_object_spread_props(_object_spread({ref:ref,"data-dimension":dimension,$dimension:dimension,$styleType:void 0===_param_styleType?"bullet":_param_styleType,$gap:void 0===_param_gap?"8px":_param_gap,$markerCssMixin:markerCssMixin},props),{children:children}))});UnorderedList1.displayName="UnorderedList";try{UnorderedList1.displayName="UnorderedList",UnorderedList1.__docgenInfo={description:"",displayName:"UnorderedList",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"bullet"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"bullet"'},{value:'"virgule"'}]}},gap:{defaultValue:{value:"8px"},description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/UnorderedList.tsx#UnorderedList"]={docgenInfo:UnorderedList1.__docgenInfo,name:"UnorderedList",path:"src/components/List/UnorderedList.tsx#UnorderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/List/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ck:()=>ListItem,kp:()=>ListIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/style.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ListItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var children=_param.children,props=_object_without_properties(_param,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.Pt,_object_spread_props(_object_spread({ref:ref},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.be,{children:children})}))});ListItem.displayName="ListItem";var ListIcon=function(_param){var as=_param.as,color=_param.color,props=_object_without_properties(_param,["as","color"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.In,_object_spread({role:"presentation",as:as,color:color},props))};ListIcon.displayName="ListIcon";try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/index.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/components/List/index.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}try{ListIcon.displayName="ListIcon",ListIcon.__docgenInfo={description:"",displayName:"ListIcon",props:{as:{defaultValue:null,description:"Элемент, который будет отрисован в качестве иконки",name:"as",required:!0,type:{name:"ElementType<any, keyof IntrinsicElements>"}},color:{defaultValue:null,description:"Цвет иконки",name:"color",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/index.tsx#ListIcon"]={docgenInfo:ListIcon.__docgenInfo,name:"ListIcon",path:"src/components/List/index.tsx#ListIcon"})}catch(__react_docgen_typescript_loader_error){}try{OrderedList.displayName="OrderedList",OrderedList.__docgenInfo={description:"",displayName:"OrderedList",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"numbers"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"numbers"'},{value:'"lower-letters"'},{value:'"upper-letters"'}]}},gap:{defaultValue:{value:"8px"},description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/index.tsx#OrderedList"]={docgenInfo:OrderedList.__docgenInfo,name:"OrderedList",path:"src/components/List/index.tsx#OrderedList"})}catch(__react_docgen_typescript_loader_error){}try{UnorderedList.displayName="UnorderedList",UnorderedList.__docgenInfo={description:"",displayName:"UnorderedList",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"bullet"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"bullet"'},{value:'"virgule"'}]}},gap:{defaultValue:{value:"8px"},description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/index.tsx#UnorderedList"]={docgenInfo:UnorderedList.__docgenInfo,name:"UnorderedList",path:"src/components/List/index.tsx#UnorderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/List/style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E2:()=>UnorderedListComponent,In:()=>Icon,Pt:()=>ListItemComponent,be:()=>ListItemContent,ti:()=>OrderedListComponent});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  @counter-style lower-cyrillic {
    system: fixed;
    symbols: а б в г д е ж з и к л м н о п р с т у ф х ц ч ш щ ы э ю я;
  }
  @counter-style upper-cyrillic {
    system: fixed;
    symbols: А Б В Г Д Е Ж З И К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ы Э Ю Я;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
        `,`
        content: counter(admiral-list-counter, lower-cyrillic) ')';
      `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
        `,`
        content: counter(admiral-list-counter, upper-cyrillic) ')';
      `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
        content: '—';
      `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
        content: counters(admiral-list-counter, '.') '.';
      `]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
        content: '•';
        /** Размер шрифта, при котором достигается необходимый размер точки */
        font-size: 18px;
        color: var(--admiral-color-Neutral_Neutral50, `,`);
      `]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: `,`;
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: admiral-list-counter 0;

  & > li ul,
  & > li ol {
    margin-top: `,`;
  }
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  display: inline-flex;
  flex-shrink: 0;
  margin-inline-end: 8px;
  `,`
  height: `,`px;
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  `,`
  & > li::before {
    `,`
    justify-content: flex-start;
    min-width: `,`;
    `,`
  }
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  `,`
  & > li::before {
    `,`
    justify-content: center;
    width: `,`px;
    `,`
  }
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  counter-increment: admiral-list-counter 1;
  display: inline-flex;

  ol[data-dimension='m'] &,
  ul[data-dimension='m'] & {
    `,`
  }
  ol[data-dimension='s'] &,
  ul[data-dimension='s'] & {
    `,`
  }
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
  display: block;
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  ul[data-dimension='m'] & {
    width: 24px;
    height: 24px;
  }
  ul[data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
  vertical-align: bottom;
  margin-inline-end: 8px;
  *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject12=function _templateObject(){return data},data}var cyrillicStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject());function getContent($styleType){switch($styleType){case"lower-letters":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),cyrillicStyle);case"upper-letters":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject2(),cyrillicStyle);case"virgule":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3());case"numbers":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject4());case"bullet":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 50"]});default:return"content: none;"}}var listMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject6(),function(p){return p.$gap},function(p){return p.$gap}),listMarkerMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject7(),function(p){return getContent(p.$styleType)},function(p){return"m"==p.$dimension?24:20}),OrderedListComponent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.ol(_templateObject8(),listMixin,listMarkerMixin,function(p){return"numbers"==p.$styleType?"auto":"".concat("m"==p.$dimension?24:20,"px")},function(p){return p.$markerCssMixin}),UnorderedListComponent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.ul(_templateObject9(),listMixin,listMarkerMixin,function(p){return"m"==p.$dimension?24:20},function(p){return p.$markerCssMixin}),ListItemComponent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.li(_templateObject10(),function(p){return p.theme.color["Neutral/Neutral 90"]},_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 1 Long"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Long"]),ListItemContent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject11()),Icon=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.svg(_templateObject12(),function(p){return p.color?p.color:"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")})},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  container-type: inline-size;
  `,`;

  & svg {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}var sizes=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}},function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1(),sizes,function(p){return p.$svgMixin||""}),Spinner=function(_param){var _param_dimension=_param.dimension,_param_inverse=_param.inverse,svgMixin=_param.svgMixin,props=_object_without_properties(_param,["dimension","inverse","svgMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerWrapper,_object_spread_props(_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__.N,{$inverse:void 0!==_param_inverse&&_param_inverse})}))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xl"'},{value:'"m"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextButton/commonMixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ef:()=>ButtonContainer,Tu:()=>IconContainer,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([""]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([""]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-image: linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size:
    315px 250px,
    315px 180px,
    100px 100px,
    225px 30px;
  background-position:
    -315px 0,
    0 0,
    0 190px,
    50px 195px;
  animation: `,` 1.5s infinite;
`]);return _templateObject3=function _templateObject(){return data},data}var IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject()),ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject1()),loadingKeyframes=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject2()),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3(),loadingKeyframes)},"./src/components/TextButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>TextButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),commonMixin=__webpack_require__("./src/components/TextButton/commonMixin.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,` {
    `,`;
    border-radius: `,`;
    svg {
      visibility: `,`;
    }
  }

  border-radius: `,`;

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:hover {
    cursor: pointer;
    color: var(--admiral-color-Primary_Primary70, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary70, `,`);
        }
      }
    }
  }

  &:active {
    color: var(--admiral-color-Primary_Primary80, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary80, `,`);
        }
      }
    }
  }

  &:disabled {
    cursor: `,`;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Neutral_Neutral30, `,`);
        }
      }
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Primary_Primary60Main, `,`);
      }
    }
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral50, `,`);
      }
    }
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &[data-appearance='primary'] {
    `,`
  }
  &[data-appearance='secondary'] {
    `,`
  }

  `,`
`]);return _templateObject3=function _templateObject(){return data},data}var defaultAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject(),commonMixin.Tu,function(param){return param.$skeleton&&commonMixin.vy},function(param){return param.$skeleton?"50%":""},function(p){return p.$skeleton||p.$loading?"hidden":"visible"},function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,borderRadius.VM)(p.theme.shape),")")},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 70"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 80"]},function(param){var $skeleton=param.$skeleton,$loading=param.$loading;return $skeleton||$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 30"]}),primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 60 Main"]}),secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 90"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 50"]}),appearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),primaryAppearanceMixin,secondaryAppearanceMixin,defaultAppearanceMixin),typography=__webpack_require__("./src/components/Typography/typography.ts");function dimensionMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function dimensionMixin_templateObject(){var data=dimensionMixin_tagged_template_literal([`
  &[data-dimension='m'] {
    `,` {
      width: 24px;
      height: 24px;
    }
    `,`;
  }

  &[data-dimension='s'] {
    `,` {
      width: 20px;
      height: 20px;
    }
    `,`;
  }
`]);return dimensionMixin_templateObject=function _templateObject(){return data},data}var dimensionMixin=(0,styled_components_browser_esm.AH)(dimensionMixin_templateObject(),commonMixin.Tu,typography.Il["Button/Button 1"],commonMixin.Tu,typography.Il["Button/Button 2"]),animation=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TextButton_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextButton_templateObject(){var data=TextButton_tagged_template_literal([`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return TextButton_templateObject=function _templateObject(){return data},data}function TextButton_templateObject1(){var data=TextButton_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  vertical-align: middle;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  white-space: nowrap;
  `,`;

  `,` {
    visibility: `,`;
  }

  `,` {
    visibility: `,`;
  }

  `,`;

  `,`;
`]);return TextButton_templateObject1=function _templateObject(){return data},data}var StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y)(TextButton_templateObject()),StyledButton=styled_components_browser_esm.Ay.button(TextButton_templateObject1(),function(p){return p.$skeleton&&animation.h},commonMixin.Ef,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},commonMixin.Tu,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},appearanceMixin,dimensionMixin),TextButton=react.forwardRef(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,icon=_param.icon,iconStart=_param.iconStart,iconEnd=_param.iconEnd,_param_type=_param.type,text=_param.text,_param_displayRight=_param.displayRight,displayRight=void 0!==_param_displayRight&&_param_displayRight,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,props=_object_without_properties(_param,["appearance","dimension","icon","iconStart","iconEnd","type","text","displayRight","loading","skeleton"]),disabled=props.disabled||loading||skeleton;return(0,jsx_runtime.jsxs)(StyledButton,_object_spread_props(_object_spread({},props),{"data-dimension":dimension,"data-appearance":appearance,ref:ref,$appearance:appearance,$dimension:dimension,type:void 0===_param_type?"button":_param_type,disabled:disabled,$loading:loading,$skeleton:skeleton,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:"s"===dimension?"ms":"m"}),iconStart?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconStart}):icon&&!displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null,(0,jsx_runtime.jsx)(commonMixin.Ef,{children:(0,jsx_runtime.jsx)("span",{children:text})}),iconEnd?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconEnd}):icon&&displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null]}))});TextButton.displayName="TextButton";try{TextButton.displayName="TextButton",TextButton.__docgenInfo={description:"",displayName:"TextButton",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},displayRight:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Позиционирование иконки. По умолчанию - слева`,name:"displayRight",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/index.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/TextButton/index.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>uid});function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Hint-stories-Hint-stories.80391f8e.iframe.bundle.js.map