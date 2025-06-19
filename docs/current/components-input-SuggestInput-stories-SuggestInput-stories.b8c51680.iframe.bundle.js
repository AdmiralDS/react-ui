"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7522],{"./src/components/input/SuggestInput/stories/SuggestInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SuggestInputCustomIcon:()=>SuggestInputCustomIcon,SuggestInputFilter:()=>SuggestInputFilter,SuggestInputNoMatch:()=>SuggestInputNoMatch,SuggestInputPlayground:()=>SuggestInputPlayground,SuggestInputUncontrolled:()=>SuggestInputUncontrolled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SuggestInput_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),SuggestInput=__webpack_require__("./src/components/input/SuggestInput/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSearchSolid=function SvgSearchSolid(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 3c-4.98 0-9 4.02-9 9 0 4.97 4.02 9 9 9a9 9 0 0 0 9-9c0-4.98-4.03-9-9-9m-.5 4a4.5 4.5 0 0 0 0 9c1 0 1.93-.34 2.68-.9l1.86 1.85c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-1.85-1.85c.56-.75.9-1.69.9-2.69A4.5 4.5 0 0 0 11.5 7m-3.21 4.5a3.205 3.205 0 1 1 6.41-.01 3.205 3.205 0 0 1-6.41.01"})))};__webpack_require__.p;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var OPTIONS=["text 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","text 6","text 7","text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 9","text 10","text 11","text 12"],SuggestInputPlaygroundTemplate=function(_param){var _param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(props.value?String(props.value):""),2),localValue=_React_useState[0],setValue=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(!0),2),isLoading=_React_useState1[0],setIsLoading=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(),2),options=_React_useState2[0],setOptions=_React_useState2[1];return react.useEffect(function(){if(isLoading){var timeout=setTimeout(function(){setIsLoading(!1),setOptions(_to_consumable_array(OPTIONS))},3e3);return function(){clearTimeout(timeout)}}},[isLoading]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(SuggestInput.Z,_object_spread_props(_object_spread({className:"suggest"},props),{value:localValue,onChange:function(e){var _props_onChange,inputValue=e.currentTarget.value;(null==localValue?void 0:localValue.length)<3&&(null==inputValue?void 0:inputValue.length)>2&&(setIsLoading(!0),setOptions([])),setValue(inputValue),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},onOptionSelect:function(option){setValue(option),console.log("Selected option - ".concat(option))},options:options,isLoading:isLoading,onSearchButtonClick:function(){console.log("search button click")},displayClearIcon:!0,dropContainerClassName:"dropContainerClass",placeholder:void 0===_param_placeholder?"Начните набирать text":_param_placeholder}))})};try{SuggestInputPlaygroundTemplate.displayName="SuggestInputPlaygroundTemplate",SuggestInputPlaygroundTemplate.__docgenInfo={description:"",displayName:"SuggestInputPlaygroundTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры pageSizeDropContainerStyle.menuMaxHeight и
pageNumberDropContainerStyle.menuMaxHeight.

Задает максимальную высоту контейнера с опциями`,name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputPlayground.template.tsx#SuggestInputPlaygroundTemplate"]={docgenInfo:SuggestInputPlaygroundTemplate.__docgenInfo,name:"SuggestInputPlaygroundTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputPlayground.template.tsx#SuggestInputPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var options=["one","two","three"],SuggestInputUncontrolledTemplate=function(props){return(0,jsx_runtime.jsx)(SuggestInput.Z,{options:options,placeholder:"numbers",dimension:props.dimension,onChange:function(e){console.log(e.target.value)}})};try{SuggestInputUncontrolledTemplate.displayName="SuggestInputUncontrolledTemplate",SuggestInputUncontrolledTemplate.__docgenInfo={description:"",displayName:"SuggestInputUncontrolledTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры pageSizeDropContainerStyle.menuMaxHeight и
pageNumberDropContainerStyle.menuMaxHeight.

Задает максимальную высоту контейнера с опциями`,name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputUncontrolled.template.tsx#SuggestInputUncontrolledTemplate"]={docgenInfo:SuggestInputUncontrolledTemplate.__docgenInfo,name:"SuggestInputUncontrolledTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputUncontrolled.template.tsx#SuggestInputUncontrolledTemplate"})}catch(__react_docgen_typescript_loader_error){}var getTextHighlightMeta=__webpack_require__("./src/components/common/utils/getTextHighlightMeta.ts");function SuggestInputFilter_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SuggestInputFilter_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SuggestInputFilter_template_array_without_holes(arr){if(Array.isArray(arr))return SuggestInputFilter_template_array_like_to_array(arr)}function SuggestInputFilter_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SuggestInputFilter_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function SuggestInputFilter_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SuggestInputFilter_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SuggestInputFilter_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SuggestInputFilter_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SuggestInputFilter_template_define_property(target,key,source[key])})}return target}function SuggestInputFilter_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SuggestInputFilter_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SuggestInputFilter_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SuggestInputFilter_template_sliced_to_array(arr,i){return SuggestInputFilter_template_array_with_holes(arr)||SuggestInputFilter_template_iterable_to_array_limit(arr,i)||SuggestInputFilter_template_unsupported_iterable_to_array(arr,i)||SuggestInputFilter_template_non_iterable_rest()}function SuggestInputFilter_template_to_consumable_array(arr){return SuggestInputFilter_template_array_without_holes(arr)||SuggestInputFilter_template_iterable_to_array(arr)||SuggestInputFilter_template_unsupported_iterable_to_array(arr)||SuggestInputFilter_template_non_iterable_spread()}function SuggestInputFilter_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SuggestInputFilter_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SuggestInputFilter_template_array_like_to_array(o,minLen)}}var SuggestInputFilter_template_OPTIONS=["text 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","text 6","text 7","text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 9","text 10","text 11","text 12"],SuggestInputFilterTemplate=function(props){var _React_useState=SuggestInputFilter_template_sliced_to_array(react.useState(props.value?String(props.value):""),2),localValue=_React_useState[0],setValue=_React_useState[1],_React_useState1=SuggestInputFilter_template_sliced_to_array(react.useState(SuggestInputFilter_template_to_consumable_array(SuggestInputFilter_template_OPTIONS)),2),options=_React_useState1[0],setOptions=_React_useState1[1];return react.useEffect(function(){setOptions(SuggestInputFilter_template_OPTIONS.filter(function(option){return(0,getTextHighlightMeta.z)(option,localValue,"wholly").shouldHighlight}))},[localValue]),(0,jsx_runtime.jsx)(SuggestInput.Z,SuggestInputFilter_template_object_spread_props(SuggestInputFilter_template_object_spread({className:"suggest"},props),{value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},onOptionSelect:function(option){setValue(option),console.log("Selected option - ".concat(option))},options:options,onSearchButtonClick:function(){console.log("search button click")},displayClearIcon:!0}))};try{SuggestInputFilterTemplate.displayName="SuggestInputFilterTemplate",SuggestInputFilterTemplate.__docgenInfo={description:"",displayName:"SuggestInputFilterTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры pageSizeDropContainerStyle.menuMaxHeight и
pageNumberDropContainerStyle.menuMaxHeight.

Задает максимальную высоту контейнера с опциями`,name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputFilter.template.tsx#SuggestInputFilterTemplate"]={docgenInfo:SuggestInputFilterTemplate.__docgenInfo,name:"SuggestInputFilterTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputFilter.template.tsx#SuggestInputFilterTemplate"})}catch(__react_docgen_typescript_loader_error){}var optionsNoMatch=[],SuggestInputNoMatchTemplate=function(props){return(0,jsx_runtime.jsx)(SuggestInput.Z,{options:optionsNoMatch,placeholder:"numbers",dimension:props.dimension})};try{SuggestInputNoMatchTemplate.displayName="SuggestInputNoMatchTemplate",SuggestInputNoMatchTemplate.__docgenInfo={description:"",displayName:"SuggestInputNoMatchTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры pageSizeDropContainerStyle.menuMaxHeight и
pageNumberDropContainerStyle.menuMaxHeight.

Задает максимальную высоту контейнера с опциями`,name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputNoMatch.template.tsx#SuggestInputNoMatchTemplate"]={docgenInfo:SuggestInputNoMatchTemplate.__docgenInfo,name:"SuggestInputNoMatchTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputNoMatch.template.tsx#SuggestInputNoMatchTemplate"})}catch(__react_docgen_typescript_loader_error){}let SuggestInputPlayground_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
  'text 7',
  'text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 9',
  'text 10',
  'text 11',
  'text 12',
];

export const SuggestInputPlaygroundTemplate = ({
  placeholder = 'Начните набирать text',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SuggestInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [isLoading, setIsLoading] = React.useState(true);
  const [options, setOptions] = React.useState<string[] | undefined>();

  const handleSelectOption = (option: string) => {
    setValue(option);
    // eslint-disable-next-line no-console
    console.log(\`Selected option - \${option}\`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }
    setValue(inputValue);
    props.onChange?.(e);
  };

  // Имитация запросов на бакэнд
  React.useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        setOptions([...OPTIONS]);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <SuggestInput
        className="suggest"
        {...props}
        value={localValue}
        onChange={handleChange}
        onOptionSelect={handleSelectOption}
        options={options}
        isLoading={isLoading}
        onSearchButtonClick={() => {
          // eslint-disable-next-line no-console
          console.log('search button click');
        }}
        displayClearIcon
        dropContainerClassName="dropContainerClass"
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
`,SuggestInputUncontrolled_templateraw_namespaceObject=`import * as React from 'react';

import { SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps } from '@admiral-ds/react-ui';

const options = ['one', 'two', 'three'];

export const SuggestInputUncontrolledTemplate = (props: SuggestInputProps) => {
  return (
    <SuggestInput
      options={options}
      placeholder="numbers"
      dimension={props.dimension}
      onChange={(e) => {
        // eslint-disable-next-line no-console
        console.log(e.target.value);
      }}
    />
  );
};
`,SuggestInputFilter_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';

import { getTextHighlightMeta, SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps } from '@admiral-ds/react-ui';

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
  'text 7',
  'text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 9',
  'text 10',
  'text 11',
  'text 12',
];

export const SuggestInputFilterTemplate = (props: SuggestInputProps) => {
  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [options, setOptions] = React.useState<string[] | undefined>([...OPTIONS]);

  const handleSelectOption = (option: string) => {
    setValue(option);
    // eslint-disable-next-line no-console
    console.log(\`Selected option - \${option}\`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    setValue(inputValue);
    props.onChange?.(e);
  };

  React.useEffect(() => {
    const filteredOptions: string[] = OPTIONS.filter(
      (option) => getTextHighlightMeta(option, localValue, 'wholly').shouldHighlight,
    );
    setOptions(filteredOptions);
  }, [localValue]);

  return (
    <SuggestInput
      className="suggest"
      {...props}
      value={localValue}
      onChange={handleChange}
      onOptionSelect={handleSelectOption}
      options={options}
      onSearchButtonClick={() => {
        // eslint-disable-next-line no-console
        console.log('search button click');
      }}
      displayClearIcon
    />
  );
};
`,SuggestInputNoMatch_templateraw_namespaceObject=`import * as React from 'react';

import { SuggestInput } from '@admiral-ds/react-ui';
import type { SuggestInputProps } from '@admiral-ds/react-ui';

const optionsNoMatch: string[] = [];

export const SuggestInputNoMatchTemplate = (props: SuggestInputProps) => {
  return <SuggestInput options={optionsNoMatch} placeholder="numbers" dimension={props.dimension} />;
};
`;function SuggestInput_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SuggestInput_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function SuggestInput_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SuggestInput_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SuggestInput_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SuggestInput_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SuggestInput_stories_define_property(target,key,source[key])})}return target}function SuggestInput_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SuggestInput_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SuggestInput_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SuggestInput_stories_sliced_to_array(arr,i){return SuggestInput_stories_array_with_holes(arr)||SuggestInput_stories_iterable_to_array_limit(arr,i)||SuggestInput_stories_unsupported_iterable_to_array(arr,i)||SuggestInput_stories_non_iterable_rest()}function SuggestInput_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SuggestInput_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SuggestInput_stories_array_like_to_array(o,minLen)}}let SuggestInput_stories={title:"Admiral-2.1/Input/SuggestInput",component:SuggestInput.Z,decorators:void 0,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{options:types.j,control:{type:"radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},alignDropdown:{options:["auto","flex-start","flex-end","center","baseline","stretch"],control:{type:"radio"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},onChange:{action:"onChange"},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},options:{control:!1},portalTargetRef:{control:!1},targetElement:{control:!1},onSearchButtonClick:{control:!1},dropMaxHeight:{control:!1},icon:{control:!1},icons:{control:!1},locale:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},containerRef:{control:!1},handleInput:{control:!1}}};var SuggestInputPlayground={render:function(props){var CSSCustomProps=SuggestInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SuggestInputPlaygroundTemplate,SuggestInput_stories_object_spread_props(SuggestInput_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SuggestInputPlayground_templateraw_namespaceObject}}},name:"Suggest Input компонент"},SuggestInputCustomIcon={render:function(props){return(0,jsx_runtime.jsx)(SuggestInputPlaygroundTemplate,SuggestInput_stories_object_spread_props(SuggestInput_stories_object_spread({},props),{icon:SvgSearchSolid}))},parameters:{docs:{source:{code:SuggestInputPlayground_templateraw_namespaceObject}}},name:"Suggest Input альтернативная иконка"},SuggestInputUncontrolled={render:function(props){return(0,jsx_runtime.jsx)(SuggestInputUncontrolledTemplate,SuggestInput_stories_object_spread({},props))},parameters:{docs:{source:{code:SuggestInputUncontrolled_templateraw_namespaceObject}}},name:"Suggest Input неконтроллируемый"},SuggestInputNoMatch={render:function(props){return(0,jsx_runtime.jsx)(SuggestInputNoMatchTemplate,SuggestInput_stories_object_spread({},props))},parameters:{docs:{source:{code:SuggestInputNoMatch_templateraw_namespaceObject}}},name:'Suggest Input "Нет совпадений"'},SuggestInputFilter={render:function(props){return(0,jsx_runtime.jsx)(SuggestInputFilterTemplate,SuggestInput_stories_object_spread({},props))},parameters:{docs:{source:{code:SuggestInputFilter_templateraw_namespaceObject}}},name:"Suggest Input с фильтрацией"};SuggestInputPlayground.parameters={...SuggestInputPlayground.parameters,docs:{...SuggestInputPlayground.parameters?.docs,source:{originalSource:`{
  render: SuggestInputPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: SuggestInputPlaygroundRaw
      }
    }
  },
  name: 'Suggest Input компонент'
}`,...SuggestInputPlayground.parameters?.docs?.source}}},SuggestInputCustomIcon.parameters={...SuggestInputCustomIcon.parameters,docs:{...SuggestInputCustomIcon.parameters?.docs,source:{originalSource:`{
  render: SuggestInputCustomIconStory,
  parameters: {
    docs: {
      source: {
        code: SuggestInputPlaygroundRaw
      }
    }
  },
  name: 'Suggest Input альтернативная иконка'
}`,...SuggestInputCustomIcon.parameters?.docs?.source}}},SuggestInputUncontrolled.parameters={...SuggestInputUncontrolled.parameters,docs:{...SuggestInputUncontrolled.parameters?.docs,source:{originalSource:`{
  render: SuggestInputUncontrolledStory,
  parameters: {
    docs: {
      source: {
        code: SuggestInputUncontrolledRaw
      }
    }
  },
  name: 'Suggest Input неконтроллируемый'
}`,...SuggestInputUncontrolled.parameters?.docs?.source}}},SuggestInputNoMatch.parameters={...SuggestInputNoMatch.parameters,docs:{...SuggestInputNoMatch.parameters?.docs,source:{originalSource:`{
  render: SuggestInputNoMatchStory,
  parameters: {
    docs: {
      source: {
        code: SuggestInputNoMatchRaw
      }
    }
  },
  name: 'Suggest Input "Нет совпадений"'
}`,...SuggestInputNoMatch.parameters?.docs?.source}}},SuggestInputFilter.parameters={...SuggestInputFilter.parameters,docs:{...SuggestInputFilter.parameters?.docs,source:{originalSource:`{
  render: SuggestInputFilterStory,
  parameters: {
    docs: {
      source: {
        code: SuggestInputFilterRaw
      }
    }
  },
  name: 'Suggest Input с фильтрацией'
}`,...SuggestInputFilter.parameters?.docs?.source}}};let __namedExportsOrder=["SuggestInputPlayground","SuggestInputCustomIcon","SuggestInputUncontrolled","SuggestInputNoMatch","SuggestInputFilter"]}}]);
//# sourceMappingURL=components-input-SuggestInput-stories-SuggestInput-stories.b8c51680.iframe.bundle.js.map