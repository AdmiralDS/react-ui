"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7262],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/InputIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>InputIconButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  & *[fill^='#'] {\n    fill: var(--admiral-color-Neutral_Neutral50, ",");\n  }\n  cursor: pointer;\n\n  [data-loading] &&& {\n    pointer-events: none;\n  }\n\n  [disabled] &&& {\n    pointer-events: none;\n    & *[fill^='#'] {\n      fill: var(--admiral-color-Neutral_Neutral30, ",");\n    }\n  }\n\n  &:hover *[fill^='#'] {\n    fill: var(--admiral-color-Primary_Primary70, ",");\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function AnyIcon(_param){var icon=_param.icon,props=_object_without_properties(_param,["icon"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(icon,_object_spread({},props))}__webpack_require__("./node_modules/react/index.js");var InputIconButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(AnyIcon)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 70"]});try{AnyIcon.displayName="AnyIcon",AnyIcon.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#AnyIcon"]={docgenInfo:AnyIcon.__docgenInfo,name:"AnyIcon",path:"src/components/InputIconButton.tsx#AnyIcon"})}catch(__react_docgen_typescript_loader_error){}try{InputIconButton.displayName="InputIconButton",InputIconButton.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#InputIconButton"]={docgenInfo:InputIconButton.__docgenInfo,name:"InputIconButton",path:"src/components/InputIconButton.tsx#InputIconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/dom/changeInputData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isInputDataDifferent(data1,data2){return data1.value!==data2.value||data1.selectionStart!==data2.selectionStart||data1.selectionEnd!==data2.selectionEnd}function changeInputData(input,toChangeData){var _toChangeData_value=toChangeData.value,value=void 0===_toChangeData_value?input.value:_toChangeData_value,selectionStart=toChangeData.selectionStart,selectionEnd=toChangeData.selectionEnd;if(isInputDataDifferent(input,{value:value,selectionStart:selectionStart,selectionEnd:selectionEnd})){var _Object_getOwnPropertyDescriptor,event,nativeInputValueSetter=null===(_Object_getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input),"value"))||void 0===_Object_getOwnPropertyDescriptor?void 0:_Object_getOwnPropertyDescriptor.set;null==nativeInputValueSetter||nativeInputValueSetter.call(input,value),"number"==typeof selectionStart&&"number"==typeof selectionEnd&&input.setSelectionRange(selectionStart,selectionEnd),"function"==typeof Event?event=new Event("input",{bubbles:!0}):(event=document.createEvent("Event")).initEvent("input",!0,!0),input.dispatchEvent(event)}}__webpack_require__.d(__webpack_exports__,{B:()=>changeInputData,i:()=>isInputDataDifferent})},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cg:()=>containerHeights,j2:()=>HeightLimitedContainer,mc:()=>Container,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/animation.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  height: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  ","\n  & > * {\n    visibility: hidden;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  border: none;\n  border-radius: ",";\n\n  pointer-events: ",";\n  ",";\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  ",";\n"]);return _templateObject3=function _templateObject(){return data},data}var containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),function(param){switch(param.$dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}}),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__.h),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject2(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__.VM)(p.theme.shape),")")},function(p){return p.$skeleton?"none":"all"},function(param){return param.$skeleton&&skeletonMixin}),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(Container)(_templateObject3(),containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TextArea/stories/TextArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextAreaAsync:()=>TextAreaAsync,TextAreaPlayground:()=>TextAreaPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextArea_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),TextArea=__webpack_require__("./src/components/input/TextArea/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var TextAreaPlaygroundTemplate=function(_param){var _String,_param_value=_param.value,_param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["value","placeholder","themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(null!==(_String=String(void 0===_param_value?"Привет!":_param_value))&&void 0!==_String?_String:""),2),localValue=_React_useState[0],setValue=_React_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TextArea.f,_object_spread_props(_object_spread({},props),{value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null===(_props_onChange=props.onChange)||void 0===_props_onChange||_props_onChange.call(props,e)},placeholder:void 0===_param_placeholder?"Placeholder":_param_placeholder}))})};try{TextAreaPlaygroundTemplate.displayName="TextAreaPlaygroundTemplate",TextAreaPlaygroundTemplate.__docgenInfo={description:"",displayName:"TextAreaPlaygroundTemplate",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/stories/TextAreaPlayground.template.tsx#TextAreaPlaygroundTemplate"]={docgenInfo:TextAreaPlaygroundTemplate.__docgenInfo,name:"TextAreaPlaygroundTemplate",path:"src/components/input/TextArea/stories/TextAreaPlayground.template.tsx#TextAreaPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function TextAreaAsync_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TextAreaAsync_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TextAreaAsync_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TextAreaAsync_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextAreaAsync_template_sliced_to_array(arr,i){return TextAreaAsync_template_array_with_holes(arr)||TextAreaAsync_template_iterable_to_array_limit(arr,i)||TextAreaAsync_template_unsupported_iterable_to_array(arr,i)||TextAreaAsync_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextAreaAsync_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TextAreaAsync_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TextAreaAsync_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]);return _templateObject=function _templateObject(){return data},data}var Form=styled_components_browser_esm.Ay.form(_templateObject()),TextAreaAsyncTemplate=function(){var _useState=TextAreaAsync_template_sliced_to_array((0,react.useState)(""),2),textValue=_useState[0],setTextValue=_useState[1];return(0,react.useLayoutEffect)(function(){var timeout=setTimeout(function(){setTextValue("At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.")},1e3);return function(){clearTimeout(timeout)}},[setTextValue]),(0,jsx_runtime.jsxs)(Form,{children:[(0,jsx_runtime.jsx)(TextArea.f,{"data-container-id":"textField-1",autoHeight:!0,rows:3,maxRows:6,value:textValue,onChange:function(e){setTextValue(e.target.value)}}),(0,jsx_runtime.jsx)(TextArea.f,{"data-testid":"textField-2",autoHeight:!0,rows:3,maxRows:6,required:!0})]})};function TextArea_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TextArea_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function TextArea_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TextArea_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TextArea_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextArea_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TextArea_stories_define_property(target,key,source[key])})}return target}function TextArea_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TextArea_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TextArea_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TextArea_stories_sliced_to_array(arr,i){return TextArea_stories_array_with_holes(arr)||TextArea_stories_iterable_to_array_limit(arr,i)||TextArea_stories_unsupported_iterable_to_array(arr,i)||TextArea_stories_non_iterable_rest()}function TextArea_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TextArea_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TextArea_stories_array_like_to_array(o,minLen)}}let TextArea_stories={title:"Admiral-2.1/Input/TextArea",component:TextArea.f,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61323"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A69875"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A70116"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},disabled:{control:{type:"boolean"}},rows:{type:"number"},maxRows:{type:"number"},maxLength:{type:"number"},readOnly:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},onChange:{action:"onChange"},icons:{control:!1},handleInput:{control:!1},containerRef:{control:!1},autoHeight:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var TextAreaPlayground={render:function(props){var CSSCustomProps=TextArea_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TextAreaPlaygroundTemplate,TextArea_stories_object_spread_props(TextArea_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { TextArea } from '@admiral-ds/react-ui';\nimport type { TextAreaProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const TextAreaPlaygroundTemplate = ({\n  value = 'Привет!',\n  placeholder = 'Placeholder',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: TextAreaProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [localValue, setValue] = React.useState<string>(String(value) ?? '');\n\n  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <TextArea {...props} value={localValue} onChange={handleChange} placeholder={placeholder} />\n    </ThemeProvider>\n  );\n};\n"}}},name:"Базовый textarea компонент"},TextAreaAsync={render:function(props){return(0,jsx_runtime.jsx)(TextAreaAsyncTemplate,TextArea_stories_object_spread({},props))},parameters:{docs:{source:{code:"import { useLayoutEffect, useState } from 'react';\nimport styled from 'styled-components';\n\nimport { TextArea } from '@admiral-ds/react-ui';\n\nconst Form = styled.form`\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n`;\n\nconst TEXT =\n  'At breakpoint boundaries, mini units divide the screen into a fixed master ' +\n  'grid, and multiples of mini units map to fluid grid column widths and row ' +\n  'heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +\n  'master grid, and multiples of mini units map to fluid grid column widths and ' +\n  'row heights.At breakpoint boundaries, mini units divide the screen into a fixed ' +\n  'master grid, and multiples of mini units map to fluid grid column widths and row ' +\n  'heights.At breakpoint boundaries, mini units divide the screen into a fixed master ' +\n  'grid, and multiples of mini units map to fluid grid column widths and row heights.';\n\nexport const TextAreaAsyncTemplate = () => {\n  const [textValue, setTextValue] = useState<string>('' /*TEXT*/);\n\n  useLayoutEffect(() => {\n    const timeout = setTimeout(() => {\n      setTextValue(TEXT);\n    }, 1000);\n    return () => {\n      clearTimeout(timeout);\n    };\n  }, [setTextValue]);\n\n  const handleChangeTextValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {\n    const inputValue = e.target.value;\n    setTextValue(inputValue);\n  };\n\n  return (\n    <Form>\n      <TextArea\n        data-container-id=\"textField-1\"\n        autoHeight\n        rows={3}\n        maxRows={6}\n        value={textValue}\n        onChange={handleChangeTextValue}\n      />\n\n      <TextArea data-testid=\"textField-2\" autoHeight rows={3} maxRows={6} required />\n    </Form>\n  );\n};\n"}}},name:"Асинхронное изменение значения"};TextAreaPlayground.parameters={...TextAreaPlayground.parameters,docs:{...TextAreaPlayground.parameters?.docs,source:{originalSource:"{\n  render: TextAreaPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TextAreaPlaygroundRaw\n      }\n    }\n  },\n  name: 'Базовый textarea компонент'\n}",...TextAreaPlayground.parameters?.docs?.source}}},TextAreaAsync.parameters={...TextAreaAsync.parameters,docs:{...TextAreaAsync.parameters?.docs,source:{originalSource:"{\n  render: (props => <TextAreaAsyncTemplate {...props} />) as StoryFn<typeof TextArea>,\n  parameters: {\n    docs: {\n      source: {\n        code: TextAreaAsyncRaw\n      }\n    }\n  },\n  name: 'Асинхронное изменение значения'\n}",...TextAreaAsync.parameters?.docs?.source}}};let __namedExportsOrder=["TextAreaPlayground","TextAreaAsync"]},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});var INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  0% {\n    background-color: var(--admiral-color-Neutral_Neutral10, ",");\n    border-color: var(--admiral-color-Neutral_Neutral10, ",");\n  }\n  50% {\n    background-color: var(--admiral-color-Neutral_Neutral20, ",");\n    border-color: var(--admiral-color-Neutral_Neutral20, ",");\n  }\n  100% {\n    background-color: var(--admiral-color-Neutral_Neutral10, ",");\n    border-color: var(--admiral-color-Neutral_Neutral10, ",");\n  }\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  animation: "," 2s ease infinite;\n"]);return _templateObject1=function _templateObject(){return data},data}var skeletonAnimation=function(props){return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject(),props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"])},skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),function(props){return skeletonAnimation(props)});try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);