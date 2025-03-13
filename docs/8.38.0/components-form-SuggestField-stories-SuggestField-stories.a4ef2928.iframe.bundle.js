"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7132],{"./src/components/form/SuggestField/stories/SuggestField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SuggestFieldExample:()=>SuggestFieldExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SuggestField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),SuggestInput=__webpack_require__("./src/components/input/SuggestInput/index.tsx"),Field=__webpack_require__("./src/components/Field/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SuggestField=react.forwardRef(function(props,ref){var fieldRef=react.useRef(null),inputRef=react.useRef(null),className=props.className,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,uid.L)():_props_id,disabled=props.disabled,displayCharacterCounter=props.displayCharacterCounter,characterCounterVisibilityThreshold=props.characterCounterVisibilityThreshold,maxLength=props.maxLength,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","displayInline","status","required","extraText","label","id","disabled","displayCharacterCounter","characterCounterVisibilityThreshold","maxLength","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,displayCharacterCounter:displayCharacterCounter,characterCounterVisibilityThreshold:characterCounterVisibilityThreshold,maxLength:maxLength,ref:fieldRef,inputRef:inputRef,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);var suggestProps=_object_spread_props(_object_spread({ref:(0,refSetter.d)(ref,inputRef),id:id,"aria-required":required,status:status,maxLength:maxLength,disabled:disabled,skeleton:skeleton},restProps),{portalTargetRef:fieldRef});return(0,jsx_runtime.jsx)(Field.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,jsx_runtime.jsx)(SuggestInput.Z,_object_spread({},suggestProps))}))});SuggestField.displayName="SuggestField";try{SuggestField.displayName="SuggestField",SuggestField.__docgenInfo={description:"",displayName:"SuggestField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.\nВзамен используйте параметр targetElement.\n\nРеференс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.\nВзамен используйте alignSelf\n\nПозволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.\nВзамен используйте параметры pageSizeDropContainerStyle.menuMaxHeight и\npageNumberDropContainerStyle.menuMaxHeight.\n\nЗадает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SuggestField/index.tsx#SuggestField"]={docgenInfo:SuggestField.__docgenInfo,name:"SuggestField",path:"src/components/form/SuggestField/index.tsx#SuggestField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function SuggestFieldExample_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SuggestFieldExample_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SuggestFieldExample_template_define_property(target,key,source[key])})}return target}function SuggestFieldExample_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SuggestFieldExample_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SuggestFieldExample_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SuggestFieldExample_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SuggestFieldExample_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SuggestFieldExample_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  > * {\n    margin-bottom: 24px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var DisplayContainer=styled_components_browser_esm.Ay.div(_templateObject()),OPTIONS=["text 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","text 6"],SuggestFieldExampleTemplate=function(_param){var _param_placeholder=_param.placeholder,_param_label=_param.label,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=SuggestFieldExample_template_object_without_properties(_param,["placeholder","label","themeBorderKind","CSSCustomProps"]),cleanProps=Object.keys(props).reduce(function(acc,key){return void 0!==props[key]&&(acc[key]=props[key]),acc},{}),_React_useState=_sliced_to_array(react.useState(props.value?String(props.value):""),2),localValue=_React_useState[0],setValue=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(!1),2),isLoading=_React_useState1[0],setIsLoading=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(),2),options=_React_useState2[0],setOptions=_React_useState2[1];return react.useEffect(function(){if(isLoading){var timeout=setTimeout(function(){setIsLoading(!1),setOptions(_to_consumable_array(OPTIONS))},3e3);return function(){clearTimeout(timeout)}}},[isLoading]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DisplayContainer,{children:(0,jsx_runtime.jsx)(SuggestField,SuggestFieldExample_template_object_spread_props(SuggestFieldExample_template_object_spread({"data-container-id":"suggestFieldIdOne"},cleanProps),{defaultValue:"text",onChange:function(e){var inputValue=e.target.value;(null==localValue?void 0:localValue.length)<3&&(null==inputValue?void 0:inputValue.length)>2&&(setIsLoading(!0),setOptions([])),console.log(">>> onChange: ".concat(inputValue)),setValue(inputValue)},onOptionSelect:function(value){console.log(">>> onOptionSelect: ".concat(value))},options:options,isLoading:isLoading,placeholder:void 0===_param_placeholder?"Наберите несколько символов...":_param_placeholder,label:void 0===_param_label?"Поле ввода с вариантами подстановки значений":_param_label}))})})};try{SuggestFieldExampleTemplate.displayName="SuggestFieldExampleTemplate",SuggestFieldExampleTemplate.__docgenInfo={description:"",displayName:"SuggestFieldExampleTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.\nВзамен используйте параметр targetElement.\n\nРеференс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.\nВзамен используйте alignSelf\n\nПозволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.\nВзамен используйте параметры pageSizeDropContainerStyle.menuMaxHeight и\npageNumberDropContainerStyle.menuMaxHeight.\n\nЗадает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},label:{defaultValue:{value:"Поле ввода с вариантами подстановки значений"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SuggestField/stories/SuggestFieldExample.template.tsx#SuggestFieldExampleTemplate"]={docgenInfo:SuggestFieldExampleTemplate.__docgenInfo,name:"SuggestFieldExampleTemplate",path:"src/components/form/SuggestField/stories/SuggestFieldExample.template.tsx#SuggestFieldExampleTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");function SuggestField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SuggestField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function SuggestField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SuggestField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SuggestField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SuggestField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SuggestField_stories_define_property(target,key,source[key])})}return target}function SuggestField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SuggestField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SuggestField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SuggestField_stories_sliced_to_array(arr,i){return SuggestField_stories_array_with_holes(arr)||SuggestField_stories_iterable_to_array_limit(arr,i)||SuggestField_stories_unsupported_iterable_to_array(arr,i)||SuggestField_stories_non_iterable_rest()}function SuggestField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SuggestField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SuggestField_stories_array_like_to_array(o,minLen)}}let SuggestField_stories={title:"Admiral-2.1/Form Field/SuggestField",component:SuggestField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},isLoading:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},maxLength:{control:{type:"number"}},displayInline:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},extraText:{control:{type:"text"}},value:{control:{type:"text"}},label:{control:{type:"text"}},handleInput:{control:!1},containerRef:{control:!1},options:{control:!1},portalTargetRef:{control:!1},targetElement:{control:!1},onSearchButtonClick:{control:!1},dropMaxHeight:{control:{type:"text"}},icon:{control:!1},icons:{control:!1},locale:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var SuggestFieldExample={render:function(props){var CSSCustomProps=SuggestField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SuggestFieldExampleTemplate,SuggestField_stories_object_spread_props(SuggestField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport styled, { ThemeProvider } from 'styled-components';\n\nimport { SuggestField } from '@admiral-ds/react-ui';\nimport type { SuggestFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nconst DisplayContainer = styled.div`\n  > * {\n    margin-bottom: 24px;\n  }\n`;\n\nconst OPTIONS = [\n  'text 1',\n  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',\n  'text 3',\n  'text 4',\n  'text 5',\n  'text 6',\n];\n\nexport const SuggestFieldExampleTemplate = ({\n  placeholder = 'Наберите несколько символов...',\n  label = 'Поле ввода с вариантами подстановки значений',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SuggestFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce(\n    (acc, key) => {\n      if (props[key] !== undefined) acc[key] = props[key];\n\n      return acc;\n    },\n    {} as Record<any, any>,\n  );\n\n  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const [options, setOptions] = React.useState<string[] | undefined>();\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.target.value;\n\n    // Если в инпуте больше 3х символов производим запрос на поиск совпадений\n    if (localValue?.length < 3 && inputValue?.length > 2) {\n      setIsLoading(true);\n      setOptions([]);\n    }\n\n    // eslint-disable-next-line no-console\n    console.log(`>>> onChange: ${inputValue}`);\n    setValue(inputValue);\n  };\n\n  const handleOptionSelect = (value: string) => {\n    // eslint-disable-next-line no-console\n    console.log(`>>> onOptionSelect: ${value}`);\n  };\n\n  // Имитация запросов на бакэнд\n  React.useEffect(() => {\n    if (isLoading) {\n      const timeout = setTimeout(() => {\n        setIsLoading(false);\n        setOptions([...OPTIONS]);\n      }, 3000);\n      return () => {\n        clearTimeout(timeout);\n      };\n    }\n  }, [isLoading]);\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <DisplayContainer>\n        <SuggestField\n          data-container-id=\"suggestFieldIdOne\"\n          {...cleanProps}\n          defaultValue=\"text\"\n          onChange={handleChange}\n          onOptionSelect={handleOptionSelect}\n          options={options}\n          isLoading={isLoading}\n          placeholder={placeholder}\n          label={label}\n        />\n      </DisplayContainer>\n    </ThemeProvider>\n  );\n};\n"}}},name:"SuggestField example"};SuggestFieldExample.parameters={...SuggestFieldExample.parameters,docs:{...SuggestFieldExample.parameters?.docs,source:{originalSource:"{\n  render: SuggestFieldExampleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SuggestFieldExampleRaw\n      }\n    }\n  },\n  name: 'SuggestField example'\n}",...SuggestFieldExample.parameters?.docs?.source}}};let __namedExportsOrder=["SuggestFieldExample"]},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);