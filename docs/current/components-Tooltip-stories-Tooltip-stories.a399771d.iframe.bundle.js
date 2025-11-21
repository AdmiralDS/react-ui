"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4927],{"./node_modules/@admiral-ds/icons/build/system/DeleteOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgDeleteOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgDeleteOutline=function SvgDeleteOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12.65 2.67a.65.65 0 1 0-1.3 0v1.98H4.33a.65.65 0 0 0 0 1.3h.693l.757 11.49c.1 1.58 1.41 2.81 2.99 2.81h6.36c1.58 0 2.9-1.23 2.99-2.81l.776-11.49h.784a.65.65 0 1 0 0-1.3h-7.03zM7.08 17.35l-.702-11.4h11.165l-.703 11.41c-.06.89-.8 1.59-1.7 1.59H8.78c-.9 0-1.64-.7-1.7-1.6m3.1-8.88a.65.65 0 0 1 .65.65v6.35a.65.65 0 0 1-1.3 0V9.12a.65.65 0 0 1 .65-.65m4.3.65a.65.65 0 1 0-1.3 0v6.35a.65.65 0 0 0 1.3 0z"})))};__webpack_require__.p},"./src/components/Tooltip/stories/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TooltipBaseExample:()=>TooltipBaseExample,TooltipCustomExample:()=>TooltipCustomExample,TooltipDelayExample:()=>TooltipDelayExample,TooltipMenuButtonExample:()=>TooltipMenuButtonExample,TooltipRefExample:()=>TooltipRefExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var _path,_path2,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Tooltip=__webpack_require__("./src/components/Tooltip/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),Button=__webpack_require__("./src/components/Button/index.tsx"),DeleteOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/DeleteOutline.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var TooltipBaseTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),btnRef=react.useRef(null),_React_useState=_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return react.useEffect(function(){var show=function show(){setVisible(!0)},hide=function hide(){setVisible(!1)},button=btnRef.current;if(button)return button.addEventListener("mouseenter",show),button.addEventListener("focus",show),button.addEventListener("mouseleave",hide),button.addEventListener("blur",hide),function(){button.removeEventListener("mouseenter",show),button.removeEventListener("focus",show),button.removeEventListener("mouseleave",hide),button.removeEventListener("blur",hide)}},[setVisible]),(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{ref:btnRef,dimension:"m",displayAsSquare:!0,"aria-label":"Delete","aria-describedby":"test1",children:(0,jsx_runtime.jsx)(DeleteOutline.h,{"aria-hidden":!0})}),visible&&(0,jsx_runtime.jsx)(Tooltip.m,{dimension:props.dimension,targetElement:btnRef.current,renderContent:function(){return`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'`},style:{minWidth:"200px",maxWidth:"300px"},tooltipPosition:props.tooltipPosition,id:"test1"})]})};try{TooltipBaseTemplate.displayName="TooltipBaseTemplate",TooltipBaseTemplate.__docgenInfo={description:"",displayName:"TooltipBaseTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/stories/TooltipBase.template.tsx#TooltipBaseTemplate"]={docgenInfo:TooltipBaseTemplate.__docgenInfo,name:"TooltipBaseTemplate",path:"src/components/Tooltip/stories/TooltipBase.template.tsx#TooltipBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function TooltipDelay_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TooltipDelay_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TooltipDelay_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TooltipDelay_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TooltipDelay_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TooltipDelay_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TooltipDelay_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TooltipDelay_template_sliced_to_array(arr,i){return TooltipDelay_template_array_with_holes(arr)||TooltipDelay_template_iterable_to_array_limit(arr,i)||TooltipDelay_template_unsupported_iterable_to_array(arr,i)||TooltipDelay_template_non_iterable_rest()}function TooltipDelay_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TooltipDelay_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TooltipDelay_template_array_like_to_array(o,minLen)}}var TooltipDelayTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TooltipDelay_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),btnRef=react.useRef(null),_React_useState=TooltipDelay_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1],_React_useState1=TooltipDelay_template_sliced_to_array(react.useState(),2),timer=_React_useState1[0],setTimer=_React_useState1[1];return react.useEffect(function(){var show=function show(){setTimer(setTimeout(function(){return setVisible(!0)},Tooltip.w))},hide=function hide(){clearTimeout(timer),setVisible(!1)},button=btnRef.current;if(button)return button.addEventListener("mouseenter",show),button.addEventListener("focus",show),button.addEventListener("mouseleave",hide),button.addEventListener("blur",hide),function(){timer&&clearTimeout(timer),button.removeEventListener("mouseenter",show),button.removeEventListener("focus",show),button.removeEventListener("mouseleave",hide),button.removeEventListener("blur",hide)}},[setTimer,setVisible,timer]),(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{ref:btnRef,dimension:"m",displayAsSquare:!0,"aria-label":"Delete","aria-describedby":"test1",children:(0,jsx_runtime.jsx)(DeleteOutline.h,{"aria-hidden":!0})}),visible&&(0,jsx_runtime.jsx)(Tooltip.m,{dimension:props.dimension,targetElement:btnRef.current,renderContent:function(){return`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'`},tooltipPosition:props.tooltipPosition,style:{minWidth:"200px",maxWidth:"300px"},id:"test1"})]})};try{TooltipDelayTemplate.displayName="TooltipDelayTemplate",TooltipDelayTemplate.__docgenInfo={description:"",displayName:"TooltipDelayTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/stories/TooltipDelay.template.tsx#TooltipDelayTemplate"]={docgenInfo:TooltipDelayTemplate.__docgenInfo,name:"TooltipDelayTemplate",path:"src/components/Tooltip/stories/TooltipDelay.template.tsx#TooltipDelayTemplate"})}catch(__react_docgen_typescript_loader_error){}function TooltipRef_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TooltipRef_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TooltipRef_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TooltipRef_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TooltipRef_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TooltipRef_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TooltipRef_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TooltipRef_template_sliced_to_array(arr,i){return TooltipRef_template_array_with_holes(arr)||TooltipRef_template_iterable_to_array_limit(arr,i)||TooltipRef_template_unsupported_iterable_to_array(arr,i)||TooltipRef_template_non_iterable_rest()}function TooltipRef_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TooltipRef_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TooltipRef_template_array_like_to_array(o,minLen)}}var TooltipRefTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TooltipRef_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),tooltipRef=react.useRef(null),btnRef=react.useRef(null),_React_useState=TooltipRef_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return react.useEffect(function(){var show=function show(){setVisible(!0)},hide=function hide(){setVisible(!1)},button=btnRef.current;if(button)return button.addEventListener("mouseenter",show),button.addEventListener("focus",show),button.addEventListener("mouseleave",hide),button.addEventListener("blur",hide),function(){button.removeEventListener("mouseenter",show),button.removeEventListener("focus",show),button.removeEventListener("mouseleave",hide),button.removeEventListener("blur",hide)}},[setVisible]),(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{ref:btnRef,dimension:"m",displayAsSquare:!0,"aria-label":"Delete","aria-describedby":"test3",children:(0,jsx_runtime.jsx)(DeleteOutline.h,{height:24,width:24})}),visible&&(0,jsx_runtime.jsx)(Tooltip.m,{dimension:props.dimension,targetElement:btnRef.current,renderContent:function(){return"Delete file"},ref:tooltipRef,tooltipPosition:props.tooltipPosition,id:"test3"})]})};try{TooltipRefTemplate.displayName="TooltipRefTemplate",TooltipRefTemplate.__docgenInfo={description:"",displayName:"TooltipRefTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/stories/TooltipRef.template.tsx#TooltipRefTemplate"]={docgenInfo:TooltipRefTemplate.__docgenInfo,name:"TooltipRefTemplate",path:"src/components/Tooltip/stories/TooltipRef.template.tsx#TooltipRefTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),MenuButton=__webpack_require__("./src/components/MenuButton/index.tsx");function TooltipMenuButton_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TooltipMenuButton_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TooltipMenuButton_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TooltipMenuButton_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TooltipMenuButton_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TooltipMenuButton_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TooltipMenuButton_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TooltipMenuButton_template_sliced_to_array(arr,i){return TooltipMenuButton_template_array_with_holes(arr)||TooltipMenuButton_template_iterable_to_array_limit(arr,i)||TooltipMenuButton_template_unsupported_iterable_to_array(arr,i)||TooltipMenuButton_template_non_iterable_rest()}function TooltipMenuButton_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TooltipMenuButton_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TooltipMenuButton_template_array_like_to_array(o,minLen)}}var menuItems=[{id:1,label:"item-1"},{id:2,label:"item-2"},{id:3,label:"item-3"}],TooltipMenuButtonTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TooltipMenuButton_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),menuModel=react.useMemo(function(){return menuItems.map(function(item){return{id:String(item.id),render:function(props){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({},props),{key:item.id}),item.label)}}})},[]),btnRef=react.useRef(null),_React_useState=TooltipMenuButton_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];react.useEffect(function(){var show=function show(){setVisible(!0)},hide=function hide(){setVisible(!1)},button=btnRef.current;if(button)return button.addEventListener("mouseenter",show),button.addEventListener("focus",show),button.addEventListener("mouseleave",hide),button.addEventListener("blur",hide),function(){button.removeEventListener("mouseenter",show),button.removeEventListener("focus",show),button.removeEventListener("mouseleave",hide),button.removeEventListener("blur",hide)}},[visible,setVisible]);var renderTooltipContent=react.useMemo(function(){return function(){return`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
    and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
    Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'`}},[]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(MenuButton.I,{dimension:"m",items:menuModel,style:{marginRight:20},children:"TEST"}),(0,jsx_runtime.jsx)(MenuButton.I,{ref:btnRef,dimension:"m",items:menuModel,children:"TEST WITH TOOLTIP"}),visible&&(0,jsx_runtime.jsx)(Tooltip.m,{dimension:props.dimension,targetElement:btnRef.current,renderContent:renderTooltipContent,tooltipPosition:props.tooltipPosition,style:{minWidth:"200px",maxWidth:"300px"},id:"test1"})]})};try{TooltipMenuButtonTemplate.displayName="TooltipMenuButtonTemplate",TooltipMenuButtonTemplate.__docgenInfo={description:"",displayName:"TooltipMenuButtonTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/stories/TooltipMenuButton.template.tsx#TooltipMenuButtonTemplate"]={docgenInfo:TooltipMenuButtonTemplate.__docgenInfo,name:"TooltipMenuButtonTemplate",path:"src/components/Tooltip/stories/TooltipMenuButton.template.tsx#TooltipMenuButtonTemplate"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./src/components/Typography/typography.ts"),T=__webpack_require__("./src/components/T/index.tsx");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgVipOutline=function SvgVipOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{d:"M0 0h24v24H0z"})),_path2||(_path2=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M14 5.998a2 2 0 0 1-1.266 1.862l.031.035 1.886 2.212a1.3 1.3 0 0 0 1.726.227l1.906-1.31a2 2 0 1 1 1.837.971l-.95 6.212a1.3 1.3 0 0 1-1.286 1.104H6.117a1.3 1.3 0 0 1-1.285-1.104l-.95-6.212a2 2 0 1 1 1.84-.98l1.933 1.321a1.3 1.3 0 0 0 1.727-.235L11.24 7.9l.033-.037A2 2 0 1 1 14 5.998m-2 .7a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4m-7.3 1.3a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0m15.3.7a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4m-1.238 1.574-1.648 1.133a2.6 2.6 0 0 1-3.452-.455l-1.656-1.942-1.63 1.932a2.6 2.6 0 0 1-3.454.47l-1.684-1.15.88 5.75h11.766zm.238 9.08a.65.65 0 0 1-.65.65H5.65a.65.65 0 1 1 0-1.3h12.7a.65.65 0 0 1 .65.65"})))};function TooltipCustom_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TooltipCustom_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TooltipCustom_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TooltipCustom_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TooltipCustom_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TooltipCustom_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TooltipCustom_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TooltipCustom_template_sliced_to_array(arr,i){return TooltipCustom_template_array_with_holes(arr)||TooltipCustom_template_iterable_to_array_limit(arr,i)||TooltipCustom_template_unsupported_iterable_to_array(arr,i)||TooltipCustom_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TooltipCustom_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TooltipCustom_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TooltipCustom_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  padding: 0;
  margin: 0;
  color: var(--admiral-color-Neutral_Neutral00, `,`);
  `,`;
  `,`;
`]);return _templateObject=function _templateObject(){return data},data}__webpack_require__.p;var CustomP=styled_components_browser_esm.Ay.p(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return"m"===p.$dimension?typography.Il["Subtitle/Subtitle 3"]:typography.Il["Caption/Caption 1"]},function(p){return"s"===p.$dimension?"font-weight: bold;":""}),TooltipCustomTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TooltipCustom_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),btnRef=react.useRef(null),_React_useState=TooltipCustom_template_sliced_to_array(react.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1];return react.useEffect(function(){var show=function show(){setVisible(!0)},hide=function hide(){setVisible(!1)},button=btnRef.current;if(button)return button.addEventListener("mouseenter",show),button.addEventListener("focus",show),button.addEventListener("mouseleave",hide),button.addEventListener("blur",hide),function(){button.removeEventListener("mouseenter",show),button.removeEventListener("focus",show),button.removeEventListener("mouseleave",hide),button.removeEventListener("blur",hide)}},[setVisible]),(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Button.$n,{ref:btnRef,dimension:"m",displayAsSquare:!0,"aria-label":"Delete","aria-describedby":"test1",children:(0,jsx_runtime.jsx)(SvgVipOutline,{"aria-hidden":!0})}),visible&&(0,jsx_runtime.jsx)(Tooltip.m,{dimension:props.dimension,targetElement:btnRef.current,renderContent:function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CustomP,{$dimension:props.dimension,children:"Фамилия Имя Отчество"}),(0,jsx_runtime.jsx)(T.T,{font:"m"===props.dimension?"Body/Body 2 Short":"Caption/Caption 1",color:"Neutral/Neutral 00",children:"Старший дизайнер"})]})},tooltipPosition:props.tooltipPosition,id:"test1"})]})};try{TooltipCustomTemplate.displayName="TooltipCustomTemplate",TooltipCustomTemplate.__docgenInfo={description:"",displayName:"TooltipCustomTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/stories/TooltipCustom.template.tsx#TooltipCustomTemplate"]={docgenInfo:TooltipCustomTemplate.__docgenInfo,name:"TooltipCustomTemplate",path:"src/components/Tooltip/stories/TooltipCustom.template.tsx#TooltipCustomTemplate"})}catch(__react_docgen_typescript_loader_error){}let TooltipBase_templateraw_namespaceObject=`import * as React from 'react';
import { Tooltip, Button } from '@admiral-ds/react-ui';
import type { ITooltipProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TooltipBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test1">
        <DeleteOutline aria-hidden />
      </Button>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={() =>
            \`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
              literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'\`
          }
          style={{ minWidth: '200px', maxWidth: '300px' }}
          tooltipPosition={props.tooltipPosition}
          id="test1"
        />
      )}
    </ThemeProvider>
  );
};
`,TooltipDelay_templateraw_namespaceObject=`import * as React from 'react';
import { Tooltip, TOOLTIP_DELAY, Button } from '@admiral-ds/react-ui';
import type { ITooltipProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TooltipDelayTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  const [timer, setTimer] = React.useState<NodeJS.Timeout>();

  React.useEffect(() => {
    function show() {
      setTimer(setTimeout(() => setVisible(true), TOOLTIP_DELAY));
    }
    function hide() {
      clearTimeout(timer);
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        if (timer) clearTimeout(timer);
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setTimer, setVisible, timer]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test1">
        <DeleteOutline aria-hidden />
      </Button>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={() =>
            \`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'\`
          }
          tooltipPosition={props.tooltipPosition}
          style={{ minWidth: '200px', maxWidth: '300px' }}
          id="test1"
        />
      )}
    </ThemeProvider>
  );
};
`,TooltipRef_templateraw_namespaceObject=`import * as React from 'react';
import { Tooltip, Button } from '@admiral-ds/react-ui';
import type { ITooltipProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TooltipRefTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const tooltipRef = React.useRef(null);
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test3">
        <DeleteOutline height={24} width={24} />
      </Button>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={() => 'Delete file'}
          ref={tooltipRef}
          tooltipPosition={props.tooltipPosition}
          id="test3"
        />
      )}
    </ThemeProvider>
  );
};
`,TooltipMenuButton_templateraw_namespaceObject=`import * as React from 'react';
import { Tooltip, MenuButton, MenuItem } from '@admiral-ds/react-ui';
import type { BorderRadiusType, ITooltipProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const menuItems = [
  { id: 1, label: 'item-1' },
  { id: 2, label: 'item-2' },
  { id: 3, label: 'item-3' },
];

export const TooltipMenuButtonTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const menuModel = React.useMemo(() => {
    return menuItems.map((item) => ({
      id: String(item.id),
      render: (props: RenderOptionProps) => (
        <MenuItem {...props} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, []);

  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [visible, setVisible]);

  const renderTooltipContent = React.useMemo(
    () => () =>
      \`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
    literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
    College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
    and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
    Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum'\`,
    [],
  );
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <MenuButton dimension="m" items={menuModel} style={{ marginRight: 20 }}>
        TEST
      </MenuButton>
      <MenuButton ref={btnRef} dimension="m" items={menuModel}>
        TEST WITH TOOLTIP
      </MenuButton>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={renderTooltipContent}
          tooltipPosition={props.tooltipPosition}
          style={{ minWidth: '200px', maxWidth: '300px' }}
          id="test1"
        />
      )}
    </ThemeProvider>
  );
};
`,TooltipCustom_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Tooltip, Button, T, typography } from '@admiral-ds/react-ui';
import type { ITooltipProps, BorderRadiusType, TooltipDimension } from '@admiral-ds/react-ui';
import { ReactComponent as VIPOutline } from '@admiral-ds/icons/build/category/VIPOutline.svg';

import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const CustomP = styled.p<{ $dimension?: TooltipDimension }>\`
  padding: 0;
  margin: 0;
  color: var(--admiral-color-Neutral_Neutral00, \${(p) => p.theme.color['Neutral/Neutral 00']});
  \${(p) => (p.$dimension === 'm' ? typography['Subtitle/Subtitle 3'] : typography['Caption/Caption 1'])};
  \${(p) => (p.$dimension === 's' ? 'font-weight: bold;' : '')};
\`;

export const TooltipCustomTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ITooltipProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    const button = btnRef.current;
    if (button) {
      /** Рекомендуется использовать именно addEventListener, так как React SyntheticEvent onMouseEnter
       * отрабатывает некорректно в случае, если мышь была наведена на задизейбленный элемент,
       * а затем была наведена на target элемент
       * https://github.com/facebook/react/issues/19419 */
      button.addEventListener('mouseenter', show);
      button.addEventListener('focus', show);
      button.addEventListener('mouseleave', hide);
      button.addEventListener('blur', hide);
      return () => {
        button.removeEventListener('mouseenter', show);
        button.removeEventListener('focus', show);
        button.removeEventListener('mouseleave', hide);
        button.removeEventListener('blur', hide);
      };
    }
  }, [setVisible]);

  const renderTooltipContent = () => {
    return (
      <>
        <CustomP $dimension={props.dimension}>Фамилия Имя Отчество</CustomP>
        <T font={props.dimension === 'm' ? 'Body/Body 2 Short' : 'Caption/Caption 1'} color="Neutral/Neutral 00">
          Старший дизайнер
        </T>
      </>
    );
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Button ref={btnRef} dimension="m" displayAsSquare aria-label="Delete" aria-describedby="test1">
        <VIPOutline aria-hidden />
      </Button>
      {visible && (
        <Tooltip
          dimension={props.dimension}
          targetElement={btnRef.current}
          renderContent={renderTooltipContent}
          tooltipPosition={props.tooltipPosition}
          id="test1"
        />
      )}
    </ThemeProvider>
  );
};
`;function Tooltip_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Tooltip_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Tooltip_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tooltip_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Tooltip_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Tooltip_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Tooltip_stories_define_property(target,key,source[key])})}return target}function Tooltip_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Tooltip_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tooltip_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Tooltip_stories_sliced_to_array(arr,i){return Tooltip_stories_array_with_holes(arr)||Tooltip_stories_iterable_to_array_limit(arr,i)||Tooltip_stories_unsupported_iterable_to_array(arr,i)||Tooltip_stories_non_iterable_rest()}function Tooltip_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Tooltip_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Tooltip_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tooltip_stories_array_like_to_array(o,minLen)}}function Tooltip_stories_templateObject(){var data=Tooltip_stories_tagged_template_literal([`
  height: `,`px;
`]);return Tooltip_stories_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=Tooltip_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(Tooltip_stories_templateObject(),function(param){return param.height||20}),Desc=styled_components_browser_esm.Ay.div(_templateObject1());let Tooltip_stories={title:"Admiral-2.1/Tooltip",decorators:void 0,component:Tooltip.m,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31354"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A31490"}],componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Тултип — компонент, отвечающий за подсказки, детализацию информации или пояснения. Появляется при наведении на элемент, к которому он привязан, сразу, либо с задержкой в 1.5 секунды (опционально). Позиционируется по центру объекта, сверху, снизу, слева или справа с отступом 8px.",(0,jsx_runtime.jsx)(Separator,{}),"Существует в двух размерах: S 20px и M 24px по высоте. Рекомендуется максимальная ширина 488px. При большем объеме используйте компонент Hint.",(0,jsx_runtime.jsx)(Separator,{}),"Приоритетным является расположение тултипа снизу объекта. Далее по приоритетности идут расположения сверху, слева и справа.",(0,jsx_runtime.jsx)(Separator,{}),"Задать для компонента тултип можно двумя способами:",(0,jsx_runtime.jsx)(Separator,{}),"1) Использовать компонент Tooltip. Данный компонент является полностью контролируемым пользователем, то есть пользователь определяет в какой момент и при каких событиях отображать тултип, отображать его с задержкой в появлении или нет. Кроме того, компоненту Tooltip требуются обязательные параметры: targetElement - для указания элемента, относительно которого тултип будет позиционироваться, renderContent - рендер-функция для рендеринга содержимого тултипа.",(0,jsx_runtime.jsx)(Separator,{}),"2) Использовать компонент высшего порядка TooltipHoc. TooltipHoc стоит использовать в том случае, если пользователю нужен неконтролируемый тултип (тултип с внутренним state и механизмом отображения/скрытия). Подробное описание и примеры использования данного компонента можно найти в соответствующем разделе документации.",(0,jsx_runtime.jsx)(Separator,{}),"Далее приведены примеры использования компонента Tooltip."]})},{}),layout:"centered"},argTypes:{tooltipPosition:{options:["bottom","top","left","right"],control:{type:"radio"}},targetRef:{control:!1},targetElement:{control:!1},container:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var TooltipBaseExample={render:function(props){var CSSCustomProps=Tooltip_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TooltipBaseTemplate,Tooltip_stories_object_spread_props(Tooltip_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TooltipBase_templateraw_namespaceObject}}},name:"Tooltip. Базовый пример."},TooltipMenuButtonExample={render:function(props){var CSSCustomProps=Tooltip_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TooltipMenuButtonTemplate,Tooltip_stories_object_spread_props(Tooltip_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TooltipMenuButton_templateraw_namespaceObject}}},name:"Tooltip. Базовый пример с MenuButton."},TooltipDelayExample={render:function(props){var CSSCustomProps=Tooltip_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TooltipDelayTemplate,Tooltip_stories_object_spread_props(Tooltip_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TooltipDelay_templateraw_namespaceObject}}},name:"Tooltip. Пример с задержкой в появлении."},TooltipRefExample={render:function(props){var CSSCustomProps=Tooltip_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TooltipRefTemplate,Tooltip_stories_object_spread_props(Tooltip_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TooltipRef_templateraw_namespaceObject}}},name:"Tooltip. Пример с получением ref тултипа."},TooltipCustomExample={render:function(props){var CSSCustomProps=Tooltip_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TooltipCustomTemplate,Tooltip_stories_object_spread_props(Tooltip_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TooltipCustom_templateraw_namespaceObject}}},name:"Tooltip. Пример с кастомным наполнением тултипа."};TooltipBaseExample.parameters={...TooltipBaseExample.parameters,docs:{...TooltipBaseExample.parameters?.docs,source:{originalSource:`{
  render: TooltipBaseStory,
  parameters: {
    docs: {
      source: {
        code: TooltipBaseRaw
      }
    }
  },
  name: 'Tooltip. Базовый пример.'
}`,...TooltipBaseExample.parameters?.docs?.source}}},TooltipMenuButtonExample.parameters={...TooltipMenuButtonExample.parameters,docs:{...TooltipMenuButtonExample.parameters?.docs,source:{originalSource:`{
  render: TooltipMenuButtonStory,
  parameters: {
    docs: {
      source: {
        code: TooltipMenuButtonRaw
      }
    }
  },
  name: 'Tooltip. Базовый пример с MenuButton.'
}`,...TooltipMenuButtonExample.parameters?.docs?.source}}},TooltipDelayExample.parameters={...TooltipDelayExample.parameters,docs:{...TooltipDelayExample.parameters?.docs,source:{originalSource:`{
  render: TooltipDelayStory,
  parameters: {
    docs: {
      source: {
        code: TooltipDelayRaw
      }
    }
  },
  name: 'Tooltip. Пример с задержкой в появлении.'
}`,...TooltipDelayExample.parameters?.docs?.source}}},TooltipRefExample.parameters={...TooltipRefExample.parameters,docs:{...TooltipRefExample.parameters?.docs,source:{originalSource:`{
  render: TooltipRefStory,
  parameters: {
    docs: {
      source: {
        code: TooltipRefRaw
      }
    }
  },
  name: 'Tooltip. Пример с получением ref тултипа.'
}`,...TooltipRefExample.parameters?.docs?.source}}},TooltipCustomExample.parameters={...TooltipCustomExample.parameters,docs:{...TooltipCustomExample.parameters?.docs,source:{originalSource:`{
  render: TooltipCustomStory,
  parameters: {
    docs: {
      source: {
        code: TooltipCustomRaw
      }
    }
  },
  name: 'Tooltip. Пример с кастомным наполнением тултипа.'
}`,...TooltipCustomExample.parameters?.docs?.source}}};let __namedExportsOrder=["TooltipBaseExample","TooltipMenuButtonExample","TooltipDelayExample","TooltipRefExample","TooltipCustomExample"]}}]);
//# sourceMappingURL=components-Tooltip-stories-Tooltip-stories.a399771d.iframe.bundle.js.map