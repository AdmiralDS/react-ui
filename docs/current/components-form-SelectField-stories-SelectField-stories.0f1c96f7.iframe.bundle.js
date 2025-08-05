"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4490],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/form/SelectField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>SelectField});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_input_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/input/Select/index.tsx"),_src_components_Field__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),_src_components_common_hooks_useId__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/hooks/useId.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  [data-status='error'] & {
    border-color: var(--admiral-color-Error_Error60Main, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}var Select=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_input_Select__WEBPACK_IMPORTED_MODULE_3__.l6)(_templateObject(),function(p){return p.theme.color["Error/Error 60 Main"]}),SelectField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(props,ref){var className=props.className,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,additionalLabel=props.additionalLabel,_props_id=props.id,id=void 0===_props_id?(0,_src_components_common_hooks_useId__WEBPACK_IMPORTED_MODULE_4__.B)():_props_id,disabled=props.disabled,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","displayInline","status","required","extraText","label","additionalLabel","id","disabled","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,additionalLabel:additionalLabel,id:id,displayInline:displayInline,disabled:disabled,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__.$e)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__.G)(restProps,fieldContainerProps);var selectProps=_object_spread({ref:ref,id:id,"aria-required":required,status:status,disabled:disabled,skeleton:skeleton},restProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_6__.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Select,_object_spread({},selectProps))}))});SelectField.displayName="SelectField";try{SelectField.displayName="SelectField",SelectField.__docgenInfo={description:"",displayName:"SelectField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/index.tsx#SelectField"]={docgenInfo:SelectField.__docgenInfo,name:"SelectField",path:"src/components/form/SelectField/index.tsx#SelectField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/SelectField/stories/SelectField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AsyncSearchSelect:()=>AsyncSearchSelect,CustomOptionMultiSearchSelect:()=>CustomOptionMultiSearchSelect,CustomOptionSearchSelectStory:()=>CustomOptionSearchSelectStory,ExpandedHeightMultiSearchSelect:()=>ExpandedHeightMultiSearchSelect,MultiSearchSelectWithCounter:()=>MultiSearchSelectWithCounter,OptionGroupSearchSelect:()=>OptionGroupSearchSelect,RenderPropsSearchSelect:()=>RenderPropsSearchSelect,SimpleMultiSearchSelect:()=>SimpleMultiSearchSelect,SimpleSearchSelectStory:()=>SimpleSearchSelectStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),SelectField=__webpack_require__("./src/components/form/SelectField/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Option=__webpack_require__("./src/components/input/Select/Option/index.tsx"),T=__webpack_require__("./src/components/T/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`px;
`]);return _templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.$height||8}),OPTIONS=["teeext 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","texttt 6","text 7","Ответ на «Главный вопрос жизни, вселенной и всего такого»","text 69"],SelectFieldSimpleTemplate=function(_param){var _param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(""),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Селект с возможностью контекстного поиска среди вариантов.",(0,jsx_runtime.jsx)(Separator,{}),"Используется при большом количестве элементов в списке.",(0,jsx_runtime.jsx)(Separator,{$height:16})," При клике на любом месте поля (кроме иконки крестика) открывается меню выбора и активируется поле ввода текста. Меню закрывается при повторном клике в поле, либо при клике вне компонента, либо при выборе опции в меню."]}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsx)(SelectField.z,_object_spread_props(_object_spread({"data-container-id":"selectFieldIdOne"},props),{mode:"searchSelect",label:"Label",className:"Search",value:selectValue,onChange:function(e){var _props_onChange;setSelectValue(e.target.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:void 0===_param_placeholder?"Placeholder":_param_placeholder,children:OPTIONS.map(function(option,ind){return(0,jsx_runtime.jsx)(Option.c,{value:option,disabled:4===ind,children:option},option)})}))]})};try{SelectFieldSimpleTemplate.displayName="SelectFieldSimpleTemplate",SelectFieldSimpleTemplate.__docgenInfo={description:"",displayName:"SelectFieldSimpleTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldSimple.template.tsx#SelectFieldSimpleTemplate"]={docgenInfo:SelectFieldSimpleTemplate.__docgenInfo,name:"SelectFieldSimpleTemplate",path:"src/components/form/SelectField/stories/SelectFieldSimple.template.tsx#SelectFieldSimpleTemplate"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./src/components/Typography/typography.ts");function SelectFieldCustomOptions_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldCustomOptions_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectFieldCustomOptions_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldCustomOptions_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldCustomOptions_template_sliced_to_array(arr,i){return SelectFieldCustomOptions_template_array_with_holes(arr)||SelectFieldCustomOptions_template_iterable_to_array_limit(arr,i)||SelectFieldCustomOptions_template_unsupported_iterable_to_array(arr,i)||SelectFieldCustomOptions_template_non_iterable_rest()}function SelectFieldCustomOptions_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SelectFieldCustomOptions_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldCustomOptions_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldCustomOptions_template_array_like_to_array(o,minLen)}}function SelectFieldCustomOptions_template_templateObject(){var data=SelectFieldCustomOptions_template_tagged_template_literal([`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`]);return SelectFieldCustomOptions_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=SelectFieldCustomOptions_template_tagged_template_literal([`
  animation: `,` 0.35s ease-in-out;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=SelectFieldCustomOptions_template_tagged_template_literal([`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  `,`
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=SelectFieldCustomOptions_template_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=SelectFieldCustomOptions_template_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral30, `,`);
  `,`
`]);return _templateObject4=function _templateObject(){return data},data}var jump=(0,styled_components_browser_esm.i7)(SelectFieldCustomOptions_template_templateObject()),animation=(0,styled_components_browser_esm.AH)(_templateObject1(),jump),Icon=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){return param.shouldAnimate?animation:""}),TextWrapper=styled_components_browser_esm.Ay.div(_templateObject3()),ExtraText=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return p.theme.color["Neutral/Neutral 30"]},typography.Il["Body/Body 2 Short"]),SelectFieldCustomOptions_template_OPTIONS=[{value:"val1",text:"Текст 1",extraText:"Доооп Текст 1"},{value:"val2",text:"Текст 2",extraText:"Доп Теttкст 2"},{value:"val3",text:"Текст 3",extraText:"дддопТекст 3"},{value:"val4",text:"Текст 444",extraText:"Доооп Тексттт 41232"}],SelectFieldCustomOptionsTemplate=function(props){var _React_useState=SelectFieldCustomOptions_template_sliced_to_array(react.useState(props.value?String(props.value):SelectFieldCustomOptions_template_OPTIONS[2].value),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример отображения кастомных опций с использованием компонента Option"}),(0,jsx_runtime.jsx)(SelectField.z,{mode:"searchSelect",label:"label",value:selectValue,onChange:function(e){var _props_onChange;setSelectValue(e.target.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},children:SelectFieldCustomOptions_template_OPTIONS.map(function(option,index){return(0,jsx_runtime.jsxs)(Option.c,{value:option.value,children:[(0,jsx_runtime.jsx)(Icon,{}),(0,jsx_runtime.jsxs)(TextWrapper,{children:[option.text,(0,jsx_runtime.jsx)(ExtraText,{children:option.extraText})]})]},"".concat(option.value,"-").concat(index))})})]})};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldCustomOptions.template.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/form/SelectField/stories/SelectFieldCustomOptions.template.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{SelectFieldCustomOptionsTemplate.displayName="SelectFieldCustomOptionsTemplate",SelectFieldCustomOptionsTemplate.__docgenInfo={description:"",displayName:"SelectFieldCustomOptionsTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldCustomOptions.template.tsx#SelectFieldCustomOptionsTemplate"]={docgenInfo:SelectFieldCustomOptionsTemplate.__docgenInfo,name:"SelectFieldCustomOptionsTemplate",path:"src/components/form/SelectField/stories/SelectFieldCustomOptions.template.tsx#SelectFieldCustomOptionsTemplate"})}catch(__react_docgen_typescript_loader_error){}function SelectFieldAsyncSearchSelect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldAsyncSearchSelect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){reject(error);return}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _async_to_generator(fn){return function(){var self1=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self1,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)})}}function SelectFieldAsyncSearchSelect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldAsyncSearchSelect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldAsyncSearchSelect_template_sliced_to_array(arr,i){return SelectFieldAsyncSearchSelect_template_array_with_holes(arr)||SelectFieldAsyncSearchSelect_template_iterable_to_array_limit(arr,i)||SelectFieldAsyncSearchSelect_template_unsupported_iterable_to_array(arr,i)||SelectFieldAsyncSearchSelect_template_non_iterable_rest()}function SelectFieldAsyncSearchSelect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldAsyncSearchSelect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldAsyncSearchSelect_template_array_like_to_array(o,minLen)}}function _ts_generator(thisArg,body){var f,y,t,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]},g=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return g.next=verb(0),g.throw=verb(1),g.return=verb(2),"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return step([n,v])}}function step(op){if(f)throw TypeError("Generator is already executing.");for(;g&&(g=0,op[0]&&(_=0)),_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}}var SelectFieldAsyncSearchSelect_template_OPTIONS=[{value:"val1",text:"Текст 1",extraText:"Доооп Текст 1"},{value:"val2",text:"Текст 2",extraText:"Доп Теttкст 2"},{value:"val3",text:"Текст 3",extraText:"дддопТекст 3"},{value:"val4",text:"Текст 444",extraText:"Доооп Тексттт 41232"}];function wait(ms){return _async_to_generator(function(){return _ts_generator(this,function(_state){return[2,new Promise(function(resolve){setTimeout(resolve,ms)})]})})()}var SelectFieldAsyncSearchSelectTemplate=function(props){var _React_useState=SelectFieldAsyncSearchSelect_template_sliced_to_array(react.useState(props.value?String(props.value):SelectFieldAsyncSearchSelect_template_OPTIONS[2].value),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1],_React_useState1=SelectFieldAsyncSearchSelect_template_sliced_to_array(react.useState([]),2),options=_React_useState1[0],setOptions=_React_useState1[1],_React_useState2=SelectFieldAsyncSearchSelect_template_sliced_to_array(react.useState(""),2),searchValue=_React_useState2[0],setSearchValue=_React_useState2[1],_React_useState3=SelectFieldAsyncSearchSelect_template_sliced_to_array(react.useState(!0),2),isLoading=_React_useState3[0],setIsLoading=_React_useState3[1];react.useEffect(function(){_async_to_generator(function(){return _ts_generator(this,function(_state){switch(_state.label){case 0:return setIsLoading(!0),[4,wait(2e3)];case 1:return _state.sent(),setOptions(SelectFieldAsyncSearchSelect_template_OPTIONS.map(function(param){return{value:param.value,text:param.text}})),setIsLoading(!1),[2]}})})()},[searchValue]);var inputRef=react.useRef(null);return react.useEffect(function(){var keyboardEventListener=function keyboardEventListener(e){console.log("Нативное событие ".concat(e))},inputNode=inputRef.current;if(inputNode)return inputNode.addEventListener("keydown",keyboardEventListener),function(){return inputNode.removeEventListener("keydown",keyboardEventListener)}},[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectField.z,{mode:"searchSelect",label:"label",value:selectValue,isLoading:isLoading,onChange:function(e){var _props_onChange;setSelectValue(e.target.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},onInputChange:function(e){setSearchValue(e.target.value)},onInputKeyDown:function(e){return console.log(e.key)},inputTargetRef:inputRef,children:options.map(function(option){return(0,jsx_runtime.jsx)(Option.c,{value:option.value,children:option.text},option.value)})})})};try{SelectFieldAsyncSearchSelectTemplate.displayName="SelectFieldAsyncSearchSelectTemplate",SelectFieldAsyncSearchSelectTemplate.__docgenInfo={description:"",displayName:"SelectFieldAsyncSearchSelectTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldAsyncSearchSelect.template.tsx#SelectFieldAsyncSearchSelectTemplate"]={docgenInfo:SelectFieldAsyncSearchSelectTemplate.__docgenInfo,name:"SelectFieldAsyncSearchSelectTemplate",path:"src/components/form/SelectField/stories/SelectFieldAsyncSearchSelect.template.tsx#SelectFieldAsyncSearchSelectTemplate"})}catch(__react_docgen_typescript_loader_error){}function SelectFieldCustomOptionMultiSearchSelect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldCustomOptionMultiSearchSelect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectFieldCustomOptionMultiSearchSelect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldCustomOptionMultiSearchSelect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldCustomOptionMultiSearchSelect_template_sliced_to_array(arr,i){return SelectFieldCustomOptionMultiSearchSelect_template_array_with_holes(arr)||SelectFieldCustomOptionMultiSearchSelect_template_iterable_to_array_limit(arr,i)||SelectFieldCustomOptionMultiSearchSelect_template_unsupported_iterable_to_array(arr,i)||SelectFieldCustomOptionMultiSearchSelect_template_non_iterable_rest()}function SelectFieldCustomOptionMultiSearchSelect_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SelectFieldCustomOptionMultiSearchSelect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldCustomOptionMultiSearchSelect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldCustomOptionMultiSearchSelect_template_array_like_to_array(o,minLen)}}function SelectFieldCustomOptionMultiSearchSelect_template_templateObject(){var data=SelectFieldCustomOptionMultiSearchSelect_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
`]);return SelectFieldCustomOptionMultiSearchSelect_template_templateObject=function _templateObject(){return data},data}function SelectFieldCustomOptionMultiSearchSelect_template_templateObject1(){var data=SelectFieldCustomOptionMultiSearchSelect_template_tagged_template_literal([`
  color: #626f84;
`]);return SelectFieldCustomOptionMultiSearchSelect_template_templateObject1=function _templateObject(){return data},data}var SelectFieldCustomOptionMultiSearchSelect_template_TextWrapper=styled_components_browser_esm.Ay.div(SelectFieldCustomOptionMultiSearchSelect_template_templateObject()),SelectFieldCustomOptionMultiSearchSelect_template_ExtraText=styled_components_browser_esm.Ay.div(SelectFieldCustomOptionMultiSearchSelect_template_templateObject1()),SelectFieldCustomOptionMultiSearchSelectTemplate=function(){var _React_useState=SelectFieldCustomOptionMultiSearchSelect_template_sliced_to_array(react.useState(Array.from({length:15}).map(function(_,ind){return String(ind)})),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectField.z,{mode:"searchSelect",label:"MultiSearchSelect с кастомными опциями",value:selectValue,multiple:!0,onChange:function(e){setSelectValue(Array.from(e.target.selectedOptions).map(function(option){return option.value}))},children:Array.from({length:20}).map(function(_option,ind){return(0,jsx_runtime.jsx)(Option.c,{value:"".concat(ind,"0000"),renderChip:function(){return"".concat(ind,"0000")},children:(0,jsx_runtime.jsxs)(SelectFieldCustomOptionMultiSearchSelect_template_TextWrapper,{children:["".concat(ind,"0000"),(0,jsx_runtime.jsx)(SelectFieldCustomOptionMultiSearchSelect_template_ExtraText,{children:"Доп ".concat(ind)})]})},ind)})})})};function SelectFieldExpandedHeightMultiSearchSelect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldExpandedHeightMultiSearchSelect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectFieldExpandedHeightMultiSearchSelect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldExpandedHeightMultiSearchSelect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldExpandedHeightMultiSearchSelect_template_sliced_to_array(arr,i){return SelectFieldExpandedHeightMultiSearchSelect_template_array_with_holes(arr)||SelectFieldExpandedHeightMultiSearchSelect_template_iterable_to_array_limit(arr,i)||SelectFieldExpandedHeightMultiSearchSelect_template_unsupported_iterable_to_array(arr,i)||SelectFieldExpandedHeightMultiSearchSelect_template_non_iterable_rest()}function SelectFieldExpandedHeightMultiSearchSelect_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SelectFieldExpandedHeightMultiSearchSelect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldExpandedHeightMultiSearchSelect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldExpandedHeightMultiSearchSelect_template_array_like_to_array(o,minLen)}}function SelectFieldExpandedHeightMultiSearchSelect_template_templateObject(){var data=SelectFieldExpandedHeightMultiSearchSelect_template_tagged_template_literal([`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, `,`);
`]);return SelectFieldExpandedHeightMultiSearchSelect_template_templateObject=function _templateObject(){return data},data}var containerContrastBorder=(0,styled_components_browser_esm.AH)(SelectFieldExpandedHeightMultiSearchSelect_template_templateObject(),function(p){return p.theme.color["Neutral/Neutral 90"]}),SelectFieldExpandedHeightMultiSearchSelectTemplate=function(props){var _React_useState=SelectFieldExpandedHeightMultiSearchSelect_template_sliced_to_array(react.useState(Array.from({length:20}).map(function(_,ind){return String(ind)})),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectField.z,{mode:"searchSelect",label:"label",value:selectValue,multiple:!0,onChange:function(e){var _props_onChange;setSelectValue(Array.from(e.target.selectedOptions).map(function(option){return option.value})),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},maxRowCount:3,dropContainerCssMixin:containerContrastBorder,dropContainerClassName:"dropContainerClass",children:Array.from({length:20}).map(function(_option,ind){return(0,jsx_runtime.jsx)(Option.c,{value:"".concat(ind,"0000"),children:"".concat(ind,"0000")},ind)})})})};try{SelectFieldExpandedHeightMultiSearchSelectTemplate.displayName="SelectFieldExpandedHeightMultiSearchSelectTemplate",SelectFieldExpandedHeightMultiSearchSelectTemplate.__docgenInfo={description:"",displayName:"SelectFieldExpandedHeightMultiSearchSelectTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldExpandedHeightMultiSearchSelect.template.tsx#SelectFieldExpandedHeightMultiSearchSelectTemplate"]={docgenInfo:SelectFieldExpandedHeightMultiSearchSelectTemplate.__docgenInfo,name:"SelectFieldExpandedHeightMultiSearchSelectTemplate",path:"src/components/form/SelectField/stories/SelectFieldExpandedHeightMultiSearchSelect.template.tsx#SelectFieldExpandedHeightMultiSearchSelectTemplate"})}catch(__react_docgen_typescript_loader_error){}var OptionGroup=__webpack_require__("./src/components/input/Select/OptionGroup.tsx");function SelectFieldOptionGroupSearchSelect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldOptionGroupSearchSelect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectFieldOptionGroupSearchSelect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldOptionGroupSearchSelect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldOptionGroupSearchSelect_template_sliced_to_array(arr,i){return SelectFieldOptionGroupSearchSelect_template_array_with_holes(arr)||SelectFieldOptionGroupSearchSelect_template_iterable_to_array_limit(arr,i)||SelectFieldOptionGroupSearchSelect_template_unsupported_iterable_to_array(arr,i)||SelectFieldOptionGroupSearchSelect_template_non_iterable_rest()}function SelectFieldOptionGroupSearchSelect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldOptionGroupSearchSelect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldOptionGroupSearchSelect_template_array_like_to_array(o,minLen)}}var SelectFieldOptionGroupSearchSelectTemplate=function(){var _React_useState=SelectFieldOptionGroupSearchSelect_template_sliced_to_array(react.useState("Похо Торо Моронго"),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SelectField.z,{mode:"searchSelect",label:"SearchSelect с группами",value:selectValue,onChange:function(e){return setSelectValue(e.target.value)},dimension:"xl",children:[(0,jsx_runtime.jsxs)(OptionGroup.z,{label:"Сегодня выступают",children:[(0,jsx_runtime.jsx)(Option.c,{value:"Анигиляторная пушка",children:"Анигиляторная пушка"}),(0,jsx_runtime.jsx)(Option.c,{value:"Похо Торо Моронго",children:"Похо Торо Моронго"})]}),(0,jsx_runtime.jsxs)(OptionGroup.z,{label:"Группа фрукты",disabled:!0,children:[(0,jsx_runtime.jsx)(Option.c,{value:"Саша Даль",children:"Саша Даль"}),(0,jsx_runtime.jsx)(Option.c,{value:"Алексей Елесин",children:"Алексей Елесин"}),(0,jsx_runtime.jsx)(Option.c,{value:"Константин Ионочкин",children:"Константин Ионочкин"}),(0,jsx_runtime.jsx)(Option.c,{value:"Анна Корженко",children:"Анна Корженко"}),(0,jsx_runtime.jsx)(Option.c,{value:"Фидель",children:"Фидель"}),(0,jsx_runtime.jsx)(Option.c,{value:"Константин Колешонок",children:"Константин Колешонок"}),(0,jsx_runtime.jsx)(Option.c,{value:"Алексей Орлов",children:"Алексей Орлов"})]})]})})},MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx");function SelectFieldRenderPropsSearchSelect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldRenderPropsSearchSelect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectFieldRenderPropsSearchSelect_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SelectFieldRenderPropsSearchSelect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldRenderPropsSearchSelect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldRenderPropsSearchSelect_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SelectFieldRenderPropsSearchSelect_template_define_property(target,key,source[key])})}return target}function SelectFieldRenderPropsSearchSelect_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SelectFieldRenderPropsSearchSelect_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SelectFieldRenderPropsSearchSelect_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SelectFieldRenderPropsSearchSelect_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SelectFieldRenderPropsSearchSelect_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SelectFieldRenderPropsSearchSelect_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SelectFieldRenderPropsSearchSelect_template_sliced_to_array(arr,i){return SelectFieldRenderPropsSearchSelect_template_array_with_holes(arr)||SelectFieldRenderPropsSearchSelect_template_iterable_to_array_limit(arr,i)||SelectFieldRenderPropsSearchSelect_template_unsupported_iterable_to_array(arr,i)||SelectFieldRenderPropsSearchSelect_template_non_iterable_rest()}function SelectFieldRenderPropsSearchSelect_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SelectFieldRenderPropsSearchSelect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldRenderPropsSearchSelect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldRenderPropsSearchSelect_template_array_like_to_array(o,minLen)}}function SelectFieldRenderPropsSearchSelect_template_templateObject(){var data=SelectFieldRenderPropsSearchSelect_template_tagged_template_literal([`
  50% {
    transform: translate3d(0, -7px, 0);
  }
`]);return SelectFieldRenderPropsSearchSelect_template_templateObject=function _templateObject(){return data},data}function SelectFieldRenderPropsSearchSelect_template_templateObject1(){var data=SelectFieldRenderPropsSearchSelect_template_tagged_template_literal([`
  animation: `,` 0.35s ease-in-out;
`]);return SelectFieldRenderPropsSearchSelect_template_templateObject1=function _templateObject(){return data},data}function SelectFieldRenderPropsSearchSelect_template_templateObject2(){var data=SelectFieldRenderPropsSearchSelect_template_tagged_template_literal([`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
`]);return SelectFieldRenderPropsSearchSelect_template_templateObject2=function _templateObject(){return data},data}function SelectFieldRenderPropsSearchSelect_template_templateObject3(){var data=SelectFieldRenderPropsSearchSelect_template_tagged_template_literal([`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  `,`
`]);return SelectFieldRenderPropsSearchSelect_template_templateObject3=function _templateObject(){return data},data}function SelectFieldRenderPropsSearchSelect_template_templateObject4(){var data=SelectFieldRenderPropsSearchSelect_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
`]);return SelectFieldRenderPropsSearchSelect_template_templateObject4=function _templateObject(){return data},data}var SelectFieldRenderPropsSearchSelect_template_jump=(0,styled_components_browser_esm.i7)(SelectFieldRenderPropsSearchSelect_template_templateObject()),SelectFieldRenderPropsSearchSelect_template_animation=(0,styled_components_browser_esm.AH)(SelectFieldRenderPropsSearchSelect_template_templateObject1(),SelectFieldRenderPropsSearchSelect_template_jump),CustomOptionWrapper=(0,styled_components_browser_esm.Ay)(MenuItem.D)(SelectFieldRenderPropsSearchSelect_template_templateObject2()),SelectFieldRenderPropsSearchSelect_template_Icon=styled_components_browser_esm.Ay.div(SelectFieldRenderPropsSearchSelect_template_templateObject3(),function(param){return param.$shouldAnimate?SelectFieldRenderPropsSearchSelect_template_animation:""}),SelectFieldRenderPropsSearchSelect_template_TextWrapper=styled_components_browser_esm.Ay.div(SelectFieldRenderPropsSearchSelect_template_templateObject4()),SelectFieldRenderPropsSearchSelect_template_OPTIONS=[{value:"val1",text:"Текст 1",extraText:"Доооп Текст 1"},{value:"val2",text:"Текст 2",extraText:"Доп Теttкст 2"},{value:"val3",text:"Текст 3",extraText:"дддопТекст 3"},{value:"val4",text:"Текст 444",extraText:"Доооп Тексттт 41232"}],MyIncredibleOption=function(_param){var text=_param.text,shouldAnimate=_param.shouldAnimate,props=SelectFieldRenderPropsSearchSelect_template_object_without_properties(_param,["text","shouldAnimate"]);return(0,jsx_runtime.jsxs)(CustomOptionWrapper,SelectFieldRenderPropsSearchSelect_template_object_spread_props(SelectFieldRenderPropsSearchSelect_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(SelectFieldRenderPropsSearchSelect_template_Icon,{$shouldAnimate:shouldAnimate}),(0,jsx_runtime.jsx)(SelectFieldRenderPropsSearchSelect_template_TextWrapper,{children:text})]}))},SelectFieldRenderPropsSearchSelectTemplate=function(props){var _React_useState=SelectFieldRenderPropsSearchSelect_template_sliced_to_array(react.useState(props.value?String(props.value):SelectFieldRenderPropsSearchSelect_template_OPTIONS[2].value),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectField.z,{mode:"searchSelect",label:"SelectField с кастомными опциями",value:selectValue,onChange:function(e){var _props_onChange;setSelectValue(e.target.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},children:SelectFieldRenderPropsSearchSelect_template_OPTIONS.map(function(param,index){var text=param.text,value=param.value;return(0,jsx_runtime.jsx)(Option.c,{value:value,renderOption:function(options){return(0,react.createElement)(MyIncredibleOption,SelectFieldRenderPropsSearchSelect_template_object_spread_props(SelectFieldRenderPropsSearchSelect_template_object_spread({},options),{text:text,shouldAnimate:options.hovered&&value!==selectValue,key:"".concat(value,"-").concat(index)}))}},"".concat(value,"-").concat(index))})})})};try{SelectFieldRenderPropsSearchSelectTemplate.displayName="SelectFieldRenderPropsSearchSelectTemplate",SelectFieldRenderPropsSearchSelectTemplate.__docgenInfo={description:"",displayName:"SelectFieldRenderPropsSearchSelectTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldRenderPropsSearchSelect.template.tsx#SelectFieldRenderPropsSearchSelectTemplate"]={docgenInfo:SelectFieldRenderPropsSearchSelectTemplate.__docgenInfo,name:"SelectFieldRenderPropsSearchSelectTemplate",path:"src/components/form/SelectField/stories/SelectFieldRenderPropsSearchSelect.template.tsx#SelectFieldRenderPropsSearchSelectTemplate"})}catch(__react_docgen_typescript_loader_error){}function SelectFieldSimpleMultiSearchSelect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldSimpleMultiSearchSelect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectFieldSimpleMultiSearchSelect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldSimpleMultiSearchSelect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldSimpleMultiSearchSelect_template_sliced_to_array(arr,i){return SelectFieldSimpleMultiSearchSelect_template_array_with_holes(arr)||SelectFieldSimpleMultiSearchSelect_template_iterable_to_array_limit(arr,i)||SelectFieldSimpleMultiSearchSelect_template_unsupported_iterable_to_array(arr,i)||SelectFieldSimpleMultiSearchSelect_template_non_iterable_rest()}function SelectFieldSimpleMultiSearchSelect_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SelectFieldSimpleMultiSearchSelect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldSimpleMultiSearchSelect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldSimpleMultiSearchSelect_template_array_like_to_array(o,minLen)}}function SelectFieldSimpleMultiSearchSelect_template_templateObject(){var data=SelectFieldSimpleMultiSearchSelect_template_tagged_template_literal([`
  height: `,`px;
`]);return SelectFieldSimpleMultiSearchSelect_template_templateObject=function _templateObject(){return data},data}var SelectFieldSimpleMultiSearchSelect_template_Separator=styled_components_browser_esm.Ay.div(SelectFieldSimpleMultiSearchSelect_template_templateObject(),function(p){return p.$height||24}),createOptions=function(length){return Array.from({length:length}).map(function(_,index){return String(index)})},shouldRender=function(){var text=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",searchValue=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",searchFormat=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"wholly",chunks=("word"===searchFormat?searchValue.split(" "):[searchValue]).filter(Boolean).map(function(chunk){return chunk.toLowerCase()}),specialCharacters=["[","]","\\","^","$",".","|","?","*","+","(",")"],pattern=chunks.map(function(chunk){var chunkForRegExp=chunk.split("").map(function(letter){return specialCharacters.includes(letter)?"\\".concat(letter):letter}).join("");return"(".concat(chunkForRegExp,")?")}).join(""),parts=text.split(RegExp(pattern,"gi")).filter(Boolean);return!searchValue||parts.some(function(part){return chunks.includes(part.toLowerCase())})},SelectFieldSimpleMultiSearchSelectTemplate=function(props){var _React_useState=SelectFieldSimpleMultiSearchSelect_template_sliced_to_array(react.useState(createOptions(4)),2),selectValue=_React_useState[0],setSelectValue=_React_useState[1],_React_useState1=SelectFieldSimpleMultiSearchSelect_template_sliced_to_array(react.useState(""),2),searchValue=_React_useState1[0],setSearchValue=_React_useState1[1],options=SelectFieldSimpleMultiSearchSelect_template_sliced_to_array(react.useState(createOptions(20)),1)[0];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Фильтрация элементов списка осуществляется вызывающим кодом.",(0,jsx_runtime.jsx)(SelectFieldSimpleMultiSearchSelect_template_Separator,{$height:8}),"В данном примере показан один из возможных способов."]}),(0,jsx_runtime.jsx)(SelectFieldSimpleMultiSearchSelect_template_Separator,{}),(0,jsx_runtime.jsx)(SelectField.z,{mode:"searchSelect",label:"label",value:selectValue,multiple:!0,onChange:function(e){var _props_onChange;setSelectValue(Array.from(e.target.selectedOptions).map(function(option){return option.value})),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},dimension:"xl",displayClearIcon:!0,onInputChange:function(e){setSearchValue(e.target.value)},children:options.map(function(option){return(selectValue.includes(option)||shouldRender(option,searchValue))&&(0,jsx_runtime.jsx)(Option.c,{value:"".concat(option,"0000"),children:"".concat(option,"0000")},option)}).filter(function(item){return!!item})})]})};try{SelectFieldSimpleMultiSearchSelectTemplate.displayName="SelectFieldSimpleMultiSearchSelectTemplate",SelectFieldSimpleMultiSearchSelectTemplate.__docgenInfo={description:"",displayName:"SelectFieldSimpleMultiSearchSelectTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldSimpleMultiSearchSelect.template.tsx#SelectFieldSimpleMultiSearchSelectTemplate"]={docgenInfo:SelectFieldSimpleMultiSearchSelectTemplate.__docgenInfo,name:"SelectFieldSimpleMultiSearchSelectTemplate",path:"src/components/form/SelectField/stories/SelectFieldSimpleMultiSearchSelect.template.tsx#SelectFieldSimpleMultiSearchSelectTemplate"})}catch(__react_docgen_typescript_loader_error){}function SelectFieldMultiSearchSelectWithCounter_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectFieldMultiSearchSelectWithCounter_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectFieldMultiSearchSelectWithCounter_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectFieldMultiSearchSelectWithCounter_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectFieldMultiSearchSelectWithCounter_template_sliced_to_array(arr,i){return SelectFieldMultiSearchSelectWithCounter_template_array_with_holes(arr)||SelectFieldMultiSearchSelectWithCounter_template_iterable_to_array_limit(arr,i)||SelectFieldMultiSearchSelectWithCounter_template_unsupported_iterable_to_array(arr,i)||SelectFieldMultiSearchSelectWithCounter_template_non_iterable_rest()}function SelectFieldMultiSearchSelectWithCounter_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SelectFieldMultiSearchSelectWithCounter_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectFieldMultiSearchSelectWithCounter_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectFieldMultiSearchSelectWithCounter_template_array_like_to_array(o,minLen)}}function SelectFieldMultiSearchSelectWithCounter_template_templateObject(){var data=SelectFieldMultiSearchSelectWithCounter_template_tagged_template_literal([`
  height: `,`px;
`]);return SelectFieldMultiSearchSelectWithCounter_template_templateObject=function _templateObject(){return data},data}var SelectFieldMultiSearchSelectWithCounter_template_Separator=styled_components_browser_esm.Ay.div(SelectFieldMultiSearchSelectWithCounter_template_templateObject(),function(p){return p.$height||24}),SelectFieldMultiSearchSelectWithCounterTemplate=function(props){var _useState=SelectFieldMultiSearchSelectWithCounter_template_sliced_to_array((0,react.useState)([]),2),selectValue=_useState[0],setSelectValue=_useState[1],options=SelectFieldMultiSearchSelectWithCounter_template_sliced_to_array((0,react.useState)(Array.from({length:20}).map(function(_,index){return String(index)})),1)[0],_useState2=SelectFieldMultiSearchSelectWithCounter_template_sliced_to_array((0,react.useState)(0),2),optionsCounter=_useState2[0],setOptionsCounter=_useState2[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["В компонент Multiselect можно добавить опцию лимитированного выбора, чтобы задавать максимальное количество выбираемых опций.",(0,jsx_runtime.jsx)(SelectFieldMultiSearchSelectWithCounter_template_Separator,{$height:8}),"В данном примере показан способ реализации через проп additionalLabel."]}),(0,jsx_runtime.jsx)(SelectFieldMultiSearchSelectWithCounter_template_Separator,{}),(0,jsx_runtime.jsx)(SelectField.z,{label:"label",additionalLabel:"".concat(optionsCounter,"/").concat(5),value:selectValue,multiple:!0,onChange:function(e){var _props_onChange,newValues=Array.from(e.target.selectedOptions).map(function(option){return option.value});newValues.length>5||(setSelectValue(newValues),setOptionsCounter(newValues.length),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e))},dimension:"xl",children:options.map(function(option){return(0,jsx_runtime.jsx)(Option.c,{value:option,children:option},option)})})]})};try{SelectFieldMultiSearchSelectWithCounterTemplate.displayName="SelectFieldMultiSearchSelectWithCounterTemplate",SelectFieldMultiSearchSelectWithCounterTemplate.__docgenInfo={description:"",displayName:"SelectFieldMultiSearchSelectWithCounterTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
Взамен используйте maxRowCount`,name:"idleHeight",required:!1,type:{name:"enum",value:[{value:'"fixed"'},{value:'"full"'}]}},minRowCount:{defaultValue:null,description:"Минимальное количество строк поля в режиме multiple",name:"minRowCount",required:!1,type:{name:'number | "none"'}},maxRowCount:{defaultValue:null,description:"Максимальное количество строк поля в режиме multiple",name:"maxRowCount",required:!1,type:{name:'number | "none"'}},portalTargetRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Референс на контейнер для правильного позиционирования выпадающего списка`,name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},inputTargetRef:{defaultValue:null,description:"Ref внутреннего input компонента",name:"inputTargetRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},renderSelectValue:{defaultValue:null,description:"",name:"renderSelectValue",required:!1,type:{name:"((value: string | string[], searchText: string) => ReactNode)"}},inputValue:{defaultValue:null,description:"Значение введенное пользователем для поиска",name:"inputValue",required:!1,type:{name:"string"}},defaultInputValue:{defaultValue:null,description:"первоначальное значение в строке поиска без переведения строки в контролируемый компонент",name:"defaultInputValue",required:!1,type:{name:"string"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((evt: FocusEvent<HTMLDivElement, Element>) => void)"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

ППринудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch'`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},renderDropDownBottomPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderBottomPanel

Позволяет добавить панель внизу под выпадающим списком`,name:"renderDropDownBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderDropDownTopPanel:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте renderTopPanel

Позволяет добавить панель сверху над выпадающим списком`,name:"renderDropDownTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},forcedOpen:{defaultValue:null,description:"Состояние принудительного открытия выпадающего списка опций",name:"forcedOpen",required:!1,type:{name:"boolean"}},onChangeDropDownState:{defaultValue:null,description:"Событие закрытия выпадающего списка опций",name:"onChangeDropDownState",required:!1,type:{name:"((opened: boolean) => void)"}},onInputKeyDown:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUp:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUp",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyUpCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyUpCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onInputKeyDownCapture:{defaultValue:null,description:"Inner input keyboard event handler",name:"onInputKeyDownCapture",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},searchFormat:{defaultValue:null,description:"Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам",name:"searchFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},onFilterItem:{defaultValue:null,description:"Позволяет фильтровать отображаемые опции",name:"onFilterItem",required:!1,type:{name:"((value: string, searchValue: string, searchFormat: SearchFormat) => boolean)"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},forceHideOverflowTooltip:{defaultValue:null,description:"Признак принудительного скрытия тултипа, показываемого при переполнении",name:"forceHideOverflowTooltip",required:!1,type:{name:"boolean"}},onSelectedChange:{defaultValue:null,description:"Событие, которое вызывается при изменении выбранных опций/опции",name:"onSelectedChange",required:!1,type:{name:"((value: string | string[]) => void)"}},moveSelectedOnTop:{defaultValue:null,description:"Признак поднятия выбранных опций вверх списка",name:"moveSelectedOnTop",required:!1,type:{name:"boolean"}},clearInputValueAfterSelect:{defaultValue:null,description:'Признак очищения введенного значения после выбора элемента в режиме "searchSelect"',name:"clearInputValueAfterSelect",required:!1,type:{name:"boolean"}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},additionalLabel:{defaultValue:null,description:"Дополнительное имя поля формы",name:"additionalLabel",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/stories/SelectFieldMultiSearchSelectWithCounter.template.tsx#SelectFieldMultiSearchSelectWithCounterTemplate"]={docgenInfo:SelectFieldMultiSearchSelectWithCounterTemplate.__docgenInfo,name:"SelectFieldMultiSearchSelectWithCounterTemplate",path:"src/components/form/SelectField/stories/SelectFieldMultiSearchSelectWithCounter.template.tsx#SelectFieldMultiSearchSelectWithCounterTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");let SelectFieldSimple_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SelectField, Option, T } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

const OPTIONS = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
  'text 7',
  'Ответ на \xabГлавный вопрос жизни, вселенной и всего такого\xbb',
  'text 69',
];
export const SelectFieldSimpleTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SearchSelectFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selectValue, setSelectValue] = React.useState('');

  const renderOptions = () => {
    return OPTIONS.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 4}>
        {option}
      </Option>
    ));
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        Селект с возможностью контекстного поиска среди вариантов.
        <Separator />
        Используется при большом количестве элементов в списке.
        <Separator $height={16} /> При клике на любом месте поля (кроме иконки крестика) открывается меню выбора и
        активируется поле ввода текста. Меню закрывается при повторном клике в поле, либо при клике вне компонента, либо
        при выборе опции в меню.
      </T>
      <Separator $height={24} />
      <SelectField
        data-container-id="selectFieldIdOne"
        {...props}
        mode="searchSelect"
        label="Label"
        className="Search"
        value={selectValue}
        onChange={onChange}
        placeholder={placeholder}
      >
        {renderOptions()}
      </SelectField>
    </ThemeProvider>
  );
};
`,SelectFieldCustomOptions_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { css, keyframes } from 'styled-components';

import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';
import { SelectField, Option, typography, T } from '@admiral-ds/react-ui';

const jump = keyframes\`
  50% {
    transform: translate3d(0, -7px, 0);
  }
\`;

const animation = css\`
  animation: \${jump} 0.35s ease-in-out;
\`;

export const Icon = styled.div<{ shouldAnimate?: boolean }>\`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  \${({ shouldAnimate }) => (shouldAnimate ? animation : '')}
\`;

const TextWrapper = styled.div\`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
\`;

const ExtraText = styled.div\`
  color: var(--admiral-color-Neutral_Neutral30, \${(p) => p.theme.color['Neutral/Neutral 30']});
  \${typography['Body/Body 2 Short']}
\`;

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

export const SelectFieldCustomOptionsTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример отображения кастомных опций с использованием компонента Option
      </T>
      <SelectField mode="searchSelect" label="label" value={selectValue} onChange={onChange}>
        {OPTIONS.map((option, index) => (
          <Option key={\`\${option.value}-\${index}\`} value={option.value}>
            <Icon />
            <TextWrapper>
              {option.text}
              <ExtraText>{option.extraText}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </SelectField>
    </>
  );
};
`,SelectFieldAsyncSearchSelect_templateraw_namespaceObject=`import * as React from 'react';

import { Option, SelectField } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const SelectFieldAsyncSearchSelectTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await wait(2000);
      setOptions(OPTIONS.map(({ value, text }) => ({ value, text })));
      setIsLoading(false);
    })();
  }, [searchValue]);

  // Пример работы с нативным событием клавиатуры на внутреннем input
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    function keyboardEventListener(e: KeyboardEvent) {
      // eslint-disable-next-line no-console
      console.log(\`Нативное событие \${e}\`);
    }
    const inputNode = inputRef.current;
    if (inputNode) {
      inputNode.addEventListener('keydown', keyboardEventListener);
      return () => inputNode.removeEventListener('keydown', keyboardEventListener);
    }
  }, []);

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={onInputChange}
        // eslint-disable-next-line no-console
        onInputKeyDown={(e) => console.log(e.key)}
        inputTargetRef={inputRef}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </SelectField>
    </>
  );
};
`,SelectFieldCustomOptionMultiSearchSelect_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Option, SelectField } from '@admiral-ds/react-ui';

const TextWrapper = styled.div\`
  display: flex;
  flex-direction: column;
\`;

const ExtraText = styled.div\`
  color: #626f84;
\`;

export const SelectFieldCustomOptionMultiSearchSelectTemplate = () => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="MultiSearchSelect с кастомными опциями"
        value={selectValue}
        multiple={true}
        onChange={onChange}
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={\`\${ind}0000\`} renderChip={() => \`\${ind}0000\`}>
            <TextWrapper>
              {\`\${ind}0000\`}
              <ExtraText>{\`Доп \${ind}\`}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </SelectField>
    </>
  );
};
`,SelectFieldExpandedHeightMultiSearchSelect_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';
import { css } from 'styled-components';

import { Option, SelectField } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const containerContrastBorder = css\`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

export const SelectFieldExpandedHeightMultiSearchSelectTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        multiple={true}
        onChange={onChange}
        maxRowCount={3}
        dropContainerCssMixin={containerContrastBorder}
        dropContainerClassName="dropContainerClass"
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={\`\${ind}0000\`}>
            {\`\${ind}0000\`}
          </Option>
        ))}
      </SelectField>
    </>
  );
};
`,SelectFieldOptionGroupSearchSelect_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';

import { Option, OptionGroup, SelectField } from '@admiral-ds/react-ui';

export const SelectFieldOptionGroupSearchSelectTemplate = () => {
  const [selectValue, setSelectValue] = React.useState('Похо Торо Моронго');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="SearchSelect с группами"
        value={selectValue}
        onChange={onChange}
        dimension="xl"
      >
        <OptionGroup label="Сегодня выступают">
          <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
          <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        </OptionGroup>
        <OptionGroup label="Группа фрукты" disabled>
          <Option value="Саша Даль">Саша Даль</Option>
          <Option value="Алексей Елесин">Алексей Елесин</Option>
          <Option value="Константин Ионочкин">Константин Ионочкин</Option>
          <Option value="Анна Корженко">Анна Корженко</Option>
          <Option value="Фидель">Фидель</Option>
          <Option value="Константин Колешонок">Константин Колешонок</Option>
          <Option value="Алексей Орлов">Алексей Орлов</Option>
        </OptionGroup>
      </SelectField>
    </>
  );
};
`,SelectFieldRenderPropsSearchSelect_templateraw_namespaceObject=`import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { MenuItem, Option, SelectField } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps, RenderOptionProps } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';

const jump = keyframes\`
  50% {
    transform: translate3d(0, -7px, 0);
  }
\`;

const animation = css\`
  animation: \${jump} 0.35s ease-in-out;
\`;

const CustomOptionWrapper = styled(MenuItem)\`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
\`;

const Icon = styled.div<{ $shouldAnimate?: boolean }>\`
  width: 20px;
  height: 20px;
  border: 1px solid #8a96a8;
  border-radius: 50%;
  box-sizing: border-box;
  margin-right: 10px;
  transform-origin: bottom center;
  \${({ $shouldAnimate }) => ($shouldAnimate ? animation : '')}
\`;

const TextWrapper = styled.div\`
  display: flex;
  flex-direction: column;
\`;

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
];

interface MyIncredibleOptionProps extends RenderOptionProps {
  shouldAnimate?: boolean;
  text: string;
}

const MyIncredibleOption = ({ text, shouldAnimate, ...props }: MyIncredibleOptionProps) => (
  <CustomOptionWrapper {...props}>
    <Icon $shouldAnimate={shouldAnimate} />
    <TextWrapper>{text}</TextWrapper>
  </CustomOptionWrapper>
);

export const SelectFieldRenderPropsSearchSelectTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <SelectField mode="searchSelect" label="SelectField с кастомными опциями" value={selectValue} onChange={onChange}>
        {OPTIONS.map(({ text, value }, index) => (
          <Option
            key={\`\${value}-\${index}\`}
            value={value}
            renderOption={(options) => (
              <MyIncredibleOption
                {...options}
                text={text}
                shouldAnimate={options.hovered && value !== selectValue}
                key={\`\${value}-\${index}\`}
              />
            )}
          />
        ))}
      </SelectField>
    </>
  );
};
`,SelectFieldSimpleMultiSearchSelect_templateraw_namespaceObject=`import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Option, SelectField, T } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 24}px;
\`;

type SearchFormat = 'word' | 'wholly';

const createOptions = (length: number) => Array.from({ length }).map((_, index) => String(index));

const shouldRender = (text = '', searchValue = '', searchFormat: SearchFormat = 'wholly') => {
  const strings = searchFormat === 'word' ? searchValue.split(' ') : [searchValue];
  const chunks = strings.filter(Boolean).map((chunk) => chunk.toLowerCase());

  const specialCharacters = ['[', ']', '\\\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

  const pattern = chunks
    .map((chunk) => {
      const chunkForRegExp = chunk
        .split('')
        .map((letter) => (specialCharacters.includes(letter) ? \`\\\\\${letter}\` : letter))
        .join('');
      return \`(\${chunkForRegExp})?\`;
    })
    .join('');

  const parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);

  return !searchValue ? true : parts.some((part) => chunks.includes(part.toLowerCase()));
};

export const SelectFieldSimpleMultiSearchSelectTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(createOptions(4));
  const [searchValue, setSearchValue] = React.useState('');
  const [options] = React.useState(createOptions(20));

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const renderOptions = () => {
    return options
      .map(
        (option) =>
          (selectValue.includes(option) || shouldRender(option, searchValue)) && (
            <Option key={option} value={\`\${option}0000\`}>
              {\`\${option}0000\`}
            </Option>
          ),
      )
      .filter((item) => !!item);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Фильтрация элементов списка осуществляется вызывающим кодом.
        <Separator $height={8} />В данном примере показан один из возможных способов.
      </T>
      <Separator />
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
        displayClearIcon={true}
        onInputChange={handleInputChange}
      >
        {renderOptions()}
      </SelectField>
    </>
  );
};
`,SelectFieldMultiSearchSelectWithCounter_templateraw_namespaceObject=`import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Option, SelectField, T } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 24}px;
\`;

const createOptions = (length: number) => Array.from({ length }).map((_, index) => String(index));

const maxOptionsNumber = 5;

export const SelectFieldMultiSearchSelectWithCounterTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [options] = useState(createOptions(20));
  const [optionsCounter, setOptionsCounter] = useState(0);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    if (newValues.length > maxOptionsNumber) return;
    setSelectValue(newValues);
    setOptionsCounter(newValues.length);
    props.onChange?.(e);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        В компонент Multiselect можно добавить опцию лимитированного выбора, чтобы задавать максимальное количество
        выбираемых опций.
        <Separator $height={8} />В данном примере показан способ реализации через проп additionalLabel.
      </T>
      <Separator />
      <SelectField
        label="label"
        additionalLabel={\`\${optionsCounter}/\${maxOptionsNumber}\`}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
      >
        {renderOptions()}
      </SelectField>
    </>
  );
};
`;function SelectField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SelectField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SelectField_stories_define_property(target,key,source[key])})}return target}function SelectField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SelectField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SelectField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SelectField_stories_sliced_to_array(arr,i){return SelectField_stories_array_with_holes(arr)||SelectField_stories_iterable_to_array_limit(arr,i)||SelectField_stories_unsupported_iterable_to_array(arr,i)||SelectField_stories_non_iterable_rest()}function SelectField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectField_stories_array_like_to_array(o,minLen)}}let SelectField_stories={title:"Admiral-2.1/Form Field/SelectField",component:SelectField.z,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A72429"}},argTypes:{dimension:{options:types.o,control:{type:"radio"}},disabled:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},multiple:{control:!1},mode:{control:!1},readOnly:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},onChange:{action:"onChange"},defaultHighlighted:{control:{type:"boolean"}},showCheckbox:{control:{type:"boolean"}},forceHideOverflowTooltip:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},required:{control:{type:"boolean"}},forcedOpen:{control:{type:"boolean"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},portalTargetRef:{control:!1},targetElement:{control:!1},inputTargetRef:{control:!1},icons:{control:!1},onInputChange:{control:!1},onInputKeyDown:{control:!1},onInputKeyUp:{control:!1},onInputKeyDownCapture:{control:!1},onInputKeyUpCapture:{control:!1},locale:{control:!1},virtualScroll:{control:!1},value:{control:!1},inputValue:{control:!1},defaultValue:{control:!1},defaultInputValue:{control:!1},label:{control:{type:"text"}},additionalLabel:{control:{type:"text"}},extraText:{control:{type:"text"}},minRowCount:{control:{type:"number"}},maxRowCount:{control:{type:"number"}}}};var SimpleSearchSelectStory={render:function(props){var CSSCustomProps=SelectField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SelectFieldSimpleTemplate,SelectField_stories_object_spread_props(SelectField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SelectFieldSimple_templateraw_namespaceObject}}},name:"Простой SearchSelect"},CustomOptionSearchSelectStory={render:function(props){return(0,jsx_runtime.jsx)(SelectFieldCustomOptionsTemplate,SelectField_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectFieldCustomOptions_templateraw_namespaceObject}}},name:"SearchSelect с кастомными опциями"},RenderPropsSearchSelect={render:function(props){return(0,jsx_runtime.jsx)(SelectFieldRenderPropsSearchSelectTemplate,SelectField_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectFieldRenderPropsSearchSelect_templateraw_namespaceObject}}},name:"SearchSelect с кастомными опциями через renderProps"},OptionGroupSearchSelect={render:function(){return(0,jsx_runtime.jsx)(SelectFieldOptionGroupSearchSelectTemplate,{})},parameters:{docs:{source:{code:SelectFieldOptionGroupSearchSelect_templateraw_namespaceObject}}},name:"SearchSelect с группами"},AsyncSearchSelect={render:function(props){return(0,jsx_runtime.jsx)(SelectFieldAsyncSearchSelectTemplate,SelectField_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectFieldAsyncSearchSelect_templateraw_namespaceObject}}},name:"Асинхронный SearchSelect"},SimpleMultiSearchSelect={render:function(props){return(0,jsx_runtime.jsx)(SelectFieldSimpleMultiSearchSelectTemplate,SelectField_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectFieldSimpleMultiSearchSelect_templateraw_namespaceObject}}},name:"Простой MultiSearchSelect"},ExpandedHeightMultiSearchSelect={render:function(props){return(0,jsx_runtime.jsx)(SelectFieldExpandedHeightMultiSearchSelectTemplate,SelectField_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectFieldExpandedHeightMultiSearchSelect_templateraw_namespaceObject}}},name:"MultiSearchSelect с увеличенной по умолчанию высотой"},CustomOptionMultiSearchSelect={render:function(){return(0,jsx_runtime.jsx)(SelectFieldCustomOptionMultiSearchSelectTemplate,{})},parameters:{docs:{source:{code:SelectFieldCustomOptionMultiSearchSelect_templateraw_namespaceObject}}},name:"MultiSearchSelect с кастомными опциями"},MultiSearchSelectWithCounter={render:function(props){return(0,jsx_runtime.jsx)(SelectFieldMultiSearchSelectWithCounterTemplate,SelectField_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectFieldMultiSearchSelectWithCounter_templateraw_namespaceObject}}},name:"MultiSearchSelect с опцией лимитированного выбора"};SimpleSearchSelectStory.parameters={...SimpleSearchSelectStory.parameters,docs:{...SimpleSearchSelectStory.parameters?.docs,source:{originalSource:`{
  render: SimpleStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldSimpleRaw
      }
    }
  },
  name: 'Простой SearchSelect'
}`,...SimpleSearchSelectStory.parameters?.docs?.source}}},CustomOptionSearchSelectStory.parameters={...CustomOptionSearchSelectStory.parameters,docs:{...CustomOptionSearchSelectStory.parameters?.docs,source:{originalSource:`{
  render: CustomOptionStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldCustomOptionsRaw
      }
    }
  },
  name: 'SearchSelect с кастомными опциями'
}`,...CustomOptionSearchSelectStory.parameters?.docs?.source}}},RenderPropsSearchSelect.parameters={...RenderPropsSearchSelect.parameters,docs:{...RenderPropsSearchSelect.parameters?.docs,source:{originalSource:`{
  render: RenderPropsSearchSelectStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldRenderPropsSearchSelectRaw
      }
    }
  },
  name: 'SearchSelect с кастомными опциями через renderProps'
}`,...RenderPropsSearchSelect.parameters?.docs?.source}}},OptionGroupSearchSelect.parameters={...OptionGroupSearchSelect.parameters,docs:{...OptionGroupSearchSelect.parameters?.docs,source:{originalSource:`{
  render: OptionGroupSearchSelectStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldOptionGroupSearchSelectRaw
      }
    }
  },
  name: 'SearchSelect с группами'
}`,...OptionGroupSearchSelect.parameters?.docs?.source}}},AsyncSearchSelect.parameters={...AsyncSearchSelect.parameters,docs:{...AsyncSearchSelect.parameters?.docs,source:{originalSource:`{
  render: AsyncSearchSelectStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldAsyncSearchSelectRaw
      }
    }
  },
  name: 'Асинхронный SearchSelect'
}`,...AsyncSearchSelect.parameters?.docs?.source}}},SimpleMultiSearchSelect.parameters={...SimpleMultiSearchSelect.parameters,docs:{...SimpleMultiSearchSelect.parameters?.docs,source:{originalSource:`{
  render: SimpleMultiSearchSelectStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldSimpleMultiSearchSelectRaw
      }
    }
  },
  name: 'Простой MultiSearchSelect'
}`,...SimpleMultiSearchSelect.parameters?.docs?.source}}},ExpandedHeightMultiSearchSelect.parameters={...ExpandedHeightMultiSearchSelect.parameters,docs:{...ExpandedHeightMultiSearchSelect.parameters?.docs,source:{originalSource:`{
  render: ExpandedHeightMultiSearchSelectStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldExpandedHeightMultiSearchSelectRaw
      }
    }
  },
  name: 'MultiSearchSelect с увеличенной по умолчанию высотой'
}`,...ExpandedHeightMultiSearchSelect.parameters?.docs?.source}}},CustomOptionMultiSearchSelect.parameters={...CustomOptionMultiSearchSelect.parameters,docs:{...CustomOptionMultiSearchSelect.parameters?.docs,source:{originalSource:`{
  render: CustomOptionMultiSearchSelectStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldCustomOptionMultiSearchSelectRaw
      }
    }
  },
  name: 'MultiSearchSelect с кастомными опциями'
}`,...CustomOptionMultiSearchSelect.parameters?.docs?.source}}},MultiSearchSelectWithCounter.parameters={...MultiSearchSelectWithCounter.parameters,docs:{...MultiSearchSelectWithCounter.parameters?.docs,source:{originalSource:`{
  render: MultiSearchSelectWithCounterStory,
  parameters: {
    docs: {
      source: {
        code: SelectFieldMultiSearchSelectWithCounterRaw
      }
    }
  },
  name: 'MultiSearchSelect с опцией лимитированного выбора'
}`,...MultiSearchSelectWithCounter.parameters?.docs?.source}}};let __namedExportsOrder=["SimpleSearchSelectStory","CustomOptionSearchSelectStory","RenderPropsSearchSelect","OptionGroupSearchSelect","AsyncSearchSelect","SimpleMultiSearchSelect","ExpandedHeightMultiSearchSelect","CustomOptionMultiSearchSelect","MultiSearchSelectWithCounter"]},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);
//# sourceMappingURL=components-form-SelectField-stories-SelectField-stories.0f1c96f7.iframe.bundle.js.map