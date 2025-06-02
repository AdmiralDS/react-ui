"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3883],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/DropMenu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DropMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/keyboardKey.js"),_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/OpenStatusButton.tsx"),_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownContainer/index.tsx"),_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var StyledMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__.W)(_templateObject(),function(param){return param.$width||"auto"}),DropMenuContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_4__.a)(_templateObject1(),function(p){return p.$dropContainerCssMixin||""}),DropMenu=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,menuWidth=_param.menuWidth,_param_disabled=_param.disabled,_param_loading=_param.loading,_param_alignSelf=_param.alignSelf,onClose=_param.onClose,onOpen=_param.onOpen,items=_param.items,selected=_param.selected,active=_param.active,onSelectItem=_param.onSelectItem,onActivateItem=_param.onActivateItem,onChange=_param.onChange,onClick=_param.onClick,onKeyDown=_param.onKeyDown,alignMenuRef=_param.alignMenuRef,targetElement=_param.targetElement,renderContentProp=_param.renderContentProp,menuMaxHeight=_param.menuMaxHeight,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,_param_multiSelection=_param.multiSelection,multiSelection=void 0!==_param_multiSelection&&_param_multiSelection,_param_disableSelectedOptionHighlight=_param.disableSelectedOptionHighlight,disableSelectedOptionHighlight=void 0!==_param_disableSelectedOptionHighlight&&_param_disableSelectedOptionHighlight,isVisible=_param.isVisible,_param_onVisibilityChange=_param.onVisibilityChange,onVisibilityChange=void 0===_param_onVisibilityChange?function(){}:_param_onVisibilityChange,onClickOutside=_param.onClickOutside,renderTopPanel=_param.renderTopPanel,renderBottomPanel=_param.renderBottomPanel,onForwardCycleApprove=_param.onForwardCycleApprove,onBackwardCycleApprove=_param.onBackwardCycleApprove,virtualScroll=_param.virtualScroll,props=_object_without_properties(_param,["dimension","menuWidth","disabled","loading","alignSelf","onClose","onOpen","items","selected","active","onSelectItem","onActivateItem","onChange","onClick","onKeyDown","alignMenuRef","targetElement","renderContentProp","menuMaxHeight","dropContainerCssMixin","dropContainerClassName","dropContainerStyle","multiSelection","disableSelectedOptionHighlight","isVisible","onVisibilityChange","onClickOutside","renderTopPanel","renderBottomPanel","onForwardCycleApprove","onBackwardCycleApprove","virtualScroll"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isMenuOpenState=_useState[0],setIsMenuOpenState=_useState[1],btnRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),targetNode=targetElement||(null==alignMenuRef?void 0:alignMenuRef.current)||btnRef.current,isMenuOpen=null!=isVisible?isVisible:isMenuOpenState,setIsMenuOpen=function(newMenuOpenState){setIsMenuOpenState(newMenuOpenState),onVisibilityChange(newMenuOpenState)},closeMenu=function(){var _btnRef_current;setIsMenuOpen(!1),null==onClose||onClose(),null==(_btnRef_current=btnRef.current)||_btnRef_current.focus()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[renderContentProp({disabled:void 0!==_param_disabled&&_param_disabled,buttonRef:btnRef,handleKeyDown:function(e){var code=_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.getCode(e);switch(null==onKeyDown||onKeyDown(e),code){case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Escape:isMenuOpen&&closeMenu();break;case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Enter:case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r[" "]:isMenuOpen||(e.stopPropagation(),setIsMenuOpen(!0),null==onOpen||onOpen(),e.preventDefault())}},handleClick:function(e){isMenuOpen?null==onClose||onClose():null==onOpen||onOpen(),setIsMenuOpen(!isMenuOpen),null==onClick||onClick(e)},statusIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_6__.$,{$isOpen:isMenuOpen,"aria-hidden":!0}),menuState:isMenuOpen}),isMenuOpen&&!(void 0!==_param_loading&&_param_loading)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DropMenuContainer,_object_spread_props(_object_spread({ref:ref,role:"listbox",alignSelf:void 0===_param_alignSelf?"flex-end":_param_alignSelf,targetElement:targetNode,onClickOutside:function(e){var _btnRef_current;e.target&&(null==(_btnRef_current=btnRef.current)?void 0:_btnRef_current.contains(e.target))||(onClickOutside?onClickOutside(e):(setIsMenuOpen(!1),null==onClose||onClose()))},$dropContainerCssMixin:dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMenu,{maxHeight:menuMaxHeight,$width:menuWidth,virtualScroll:virtualScroll,model:items,selected:selected,onSelectItem:function(id){null==onChange||onChange(id),null==onSelectItem||onSelectItem(id),void 0!==isVisible||multiSelection||disableSelectedOptionHighlight||closeMenu()},dimension:void 0===_param_dimension?"m":_param_dimension,active:active,onActivateItem:onActivateItem,multiSelection:multiSelection,disableSelectedOptionHighlight:disableSelectedOptionHighlight,renderTopPanel:renderTopPanel,renderBottomPanel:renderBottomPanel,onForwardCycleApprove:onForwardCycleApprove,onBackwardCycleApprove:onBackwardCycleApprove})}))]})});DropMenu.displayName="DropMenu";try{DropMenu.displayName="DropMenu",DropMenu.__docgenInfo={description:"",displayName:"DropMenu",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
Взамен используйте isVisible and onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
Взамен используйте isVisible and onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},alignMenuRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Компонент, относительно которого необходимо выравнивать выпадающее меню`,name:"alignMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderContentProp:{defaultValue:null,description:"Компонент, для которого необходимо Menu",name:"renderContentProp",required:!0,type:{name:"(options: RenderContentProps) => ReactNode"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:{value:"() => undefined"},description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:{value:"false"},description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},multiSelection:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:{value:"flex-end"},description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropMenu/index.tsx#DropMenu"]={docgenInfo:DropMenu.__docgenInfo,name:"DropMenu",path:"src/components/DropMenu/index.tsx#DropMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MultiButton/stories/MultiButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiButtonAppearance:()=>MultiButtonAppearance,MultiButtonDisabled:()=>MultiButtonDisabled,MultiButtonIcon:()=>MultiButtonIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MultiButton_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/components/Button/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),DropMenu=__webpack_require__("./src/components/DropMenu/index.tsx"),animation=__webpack_require__("./src/components/skeleton/animation.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  &:focus-visible {
    outline-offset: -4px;
    &[data-appearance~='primary'] {
      outline: var(--admiral-color-Neutral_Neutral00, `,`) solid 2px;
    }
    &[data-appearance~='secondary'] {
      outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
    }
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &[data-appearance~='primary'] {
    border-radius: `,`;
  }
  &[data-appearance~='tertiary'] {
    border-radius: `,`;
  }
  // повышаем специфичность, чтобы перебить изначальные стили border у Button
  &&&[data-appearance~='secondary'] {
    border-right: none;
    border-radius: `,`;
  }
  `,`
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  &[data-appearance~='primary'] {
    border-radius: `,`;
  }
  &[data-appearance~='tertiary'] {
    border-radius: `,`;
  }
  // повышаем специфичность, чтобы перебить изначальные стили border у Button
  &&&[data-appearance~='secondary'] {
    border-left: none;
    border-radius: `,`;
  }
  `,`
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  width: 1px;
  &[data-appearance~='primary'] {
    background-color: transparent;
  }
  &[data-appearance~='tertiary'] {
    background-color: transparent;
  }

  &[data-appearance~='secondary'] {
    background-color: `,`;
  }

  `,`;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  display: inline-flex;
`]);return _templateObject6=function _templateObject(){return data},data}var mainButtonBorderRadius=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){var theme=param.theme,radius=(0,borderRadius.VM)(theme.shape);return"var(--admiral-border-radius-Medium, ".concat(radius,") 0 0 var(--admiral-border-radius-Medium, ").concat(radius,")")}),menuButtonBorderRadius=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){var theme=param.theme,radius=(0,borderRadius.VM)(theme.shape);return"0 var(--admiral-border-radius-Medium, ".concat(radius,") var(--admiral-border-radius-Medium, ").concat(radius,") 0")}),focusStyle=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return p.theme.color["Primary/Primary 60 Main"]}),MainButton=(0,styled_components_browser_esm.Ay)(Button.$n)(_templateObject3(),function(p){return p.skeleton?0:mainButtonBorderRadius},function(p){return p.skeleton?0:mainButtonBorderRadius},function(p){return p.skeleton?0:mainButtonBorderRadius},focusStyle),MenuButton=(0,styled_components_browser_esm.Ay)(Button.$n)(_templateObject4(),function(p){return p.skeleton?0:menuButtonBorderRadius},function(p){return p.skeleton?0:menuButtonBorderRadius},function(p){return p.skeleton?0:menuButtonBorderRadius},focusStyle),Separator=styled_components_browser_esm.Ay.div(_templateObject5(),function(param){var theme=param.theme;return param.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")},function(param){return param.$skeleton&&animation.h}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject6()),MultiButton=react.forwardRef(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,disabled=_param.disabled,disabledMainButton=_param.disabledMainButton,_param_items=_param.items,onMainButtonClick=_param.onMainButtonClick,disableSelectedOptionHighlight=_param.disableSelectedOptionHighlight,selected=_param.selected,onSelectItem=_param.onSelectItem,active=_param.active,onActivateItem=_param.onActivateItem,isVisible=_param.isVisible,onVisibilityChange=_param.onVisibilityChange,onClickOutside=_param.onClickOutside,onChange=_param.onChange,onClose=_param.onClose,onOpen=_param.onOpen,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,_param_alignSelf=_param.alignSelf,menuMaxHeight=_param.menuMaxHeight,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,renderTopPanel=_param.renderTopPanel,renderBottomPanel=_param.renderBottomPanel,onForwardCycleApprove=_param.onForwardCycleApprove,onBackwardCycleApprove=_param.onBackwardCycleApprove,children=_param.children,props=_object_without_properties(_param,["dimension","appearance","disabled","disabledMainButton","items","onMainButtonClick","disableSelectedOptionHighlight","selected","onSelectItem","active","onActivateItem","isVisible","onVisibilityChange","onClickOutside","onChange","onClose","onOpen","skeleton","alignSelf","menuMaxHeight","dropContainerCssMixin","dropContainerClassName","dropContainerStyle","renderTopPanel","renderBottomPanel","onForwardCycleApprove","onBackwardCycleApprove","children"]),wrapperRef=react.useRef(null),menuDimension="xl"===dimension?"l":dimension,menuWidth="s"===dimension?"240px":"280px",handleWrapperFocus=function(){var _wrapperRef_current;null==(_wrapperRef_current=wrapperRef.current)||_wrapperRef_current.setAttribute("data-focused","true")},handleWrapperBlur=function(){var _wrapperRef_current;null==(_wrapperRef_current=wrapperRef.current)||_wrapperRef_current.setAttribute("data-focused","false")},dropMenuProps=_object_spread_props(_object_spread({},(0,splitDataAttributes.c$)(props)),{renderTopPanel:renderTopPanel,renderBottomPanel:renderBottomPanel,items:void 0===_param_items?[]:_param_items,onChange:onChange,onOpen:onOpen,onClose:onClose,isVisible:isVisible,onVisibilityChange:onVisibilityChange,onClickOutside:onClickOutside,disableSelectedOptionHighlight:disableSelectedOptionHighlight,selected:selected,onSelectItem:onSelectItem,active:active,onActivateItem:onActivateItem,menuMaxHeight:menuMaxHeight,menuWidth:menuWidth,dropContainerCssMixin:dropContainerCssMixin,dropContainerClassName:dropContainerClassName,dropContainerStyle:dropContainerStyle,alignSelf:void 0===_param_alignSelf?"auto":_param_alignSelf,onForwardCycleApprove:onForwardCycleApprove,onBackwardCycleApprove:onBackwardCycleApprove});return(0,jsx_runtime.jsx)(DropMenu.f,_object_spread_props(_object_spread({},dropMenuProps),{dimension:menuDimension,disabled:disabled,renderContentProp:function(param){var buttonRef=param.buttonRef,handleKeyDown=param.handleKeyDown,handleClick=param.handleClick,statusIcon=param.statusIcon,menuState=param.menuState;return(0,jsx_runtime.jsxs)(Wrapper,_object_spread_props(_object_spread({ref:wrapperRef,"data-focused":"false",onFocus:handleWrapperFocus,onBlur:handleWrapperBlur},props),{children:[(0,jsx_runtime.jsx)(MainButton,{ref:ref,skeleton:skeleton,dimension:dimension,appearance:appearance,disabled:disabled||disabledMainButton,onClick:onMainButtonClick,children:react.Children.toArray(children).map(function(child,index){return"string"==typeof child?(0,jsx_runtime.jsx)("span",{children:child},"".concat(child,"-").concat(index)):child})}),(0,jsx_runtime.jsx)(Separator,{disabled:disabled,$skeleton:skeleton,"data-appearance":appearance,"aria-hidden":!0}),(0,jsx_runtime.jsx)(MenuButton,{ref:buttonRef,skeleton:skeleton,dimension:dimension,appearance:appearance,disabled:disabled,displayAsSquare:!0,onKeyDown:handleKeyDown,onClick:handleClick,"aria-expanded":menuState,className:"multi-button-menu-button-with-dropdown",children:statusIcon})]}))}}))});MultiButton.displayName="MultiButton";try{MultiButton.displayName="MultiButton",MultiButton.__docgenInfo={description:"",displayName:"MultiButton",props:{items:{defaultValue:{value:"[]"},description:"Опции выпадающего списка",name:"items",required:!1,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Id выбранной опции списка",name:"selected",required:!1,type:{name:"string"}},onMainButtonClick:{defaultValue:null,description:"Колбек на нажатие основной кнопки",name:"onMainButtonClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте nVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:{value:"primary"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},disabledMainButton:{defaultValue:null,description:"Отключение только главной кнопки, без отключения выпадающего меню.",name:"disabledMainButton",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:{value:"auto"},description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiButton/index.tsx#MultiButton"]={docgenInfo:MultiButton.__docgenInfo,name:"MultiButton",path:"src/components/MultiButton/index.tsx#MultiButton"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgBonusSolid=function SvgBonusSolid(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 4.05a3.31 3.31 0 0 1 3.75-1.3c.81.26 1.41.93 1.59 1.76l.02.09c.13.62.02 1.23-.26 1.74 1.61.05 2.9 1.38 2.9 3v1.94c0 .38-.32.7-.71.7h-2.88c-.36 0-.65.29-.65.65s.29.65.65.65h2.88c.39 0 .71.31.71.7V17c0 1.65-1.35 3-3 3H7c-1.66 0-3-1.35-3-3v-3.02c0-.39.31-.7.7-.7h2.88c.36 0 .65-.29.65-.65s-.29-.65-.65-.65H4.7c-.39 0-.7-.32-.7-.7V9.34c0-1.62 1.28-2.95 2.89-3-.28-.51-.39-1.12-.26-1.74l.02-.09c.18-.83.78-1.5 1.59-1.76 1.46-.46 2.96.13 3.76 1.3m-1.91 3.58c-.31.07-.54.35-.54.68v6.94c0 .6.69.92 1.15.54l1.29-.96 1.36.96c.45.38 1.15.06 1.15-.54V8.31c0-.33-.23-.61-.54-.68zm2.56-1.3h2.25c.77 0 1.35-.71 1.19-1.46l-.02-.09c-.08-.37-.35-.67-.72-.79-1.19-.38-2.44.41-2.6 1.64zm-1.31 0-.1-.7c-.16-1.23-1.41-2.02-2.6-1.64-.37.12-.64.42-.72.79l-.02.09c-.16.75.42 1.46 1.19 1.46z"})))};__webpack_require__.p;var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function MultiButtonIcon_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MultiButtonIcon_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MultiButtonIcon_template_define_property(target,key,source[key])})}return target}function MultiButtonIcon_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MultiButtonIcon_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MultiButtonIcon_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MultiButtonIcon_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MultiButtonIcon_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MultiButtonIcon_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function MultiButtonIcon_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function MultiButtonIcon_template_templateObject(){var data=MultiButtonIcon_template_tagged_template_literal([`
  width: 20px;
  height: 20px;
`]);return MultiButtonIcon_template_templateObject=function _templateObject(){return data},data}var MultiButtonIcon_template_Separator=styled_components_browser_esm.Ay.div(MultiButtonIcon_template_templateObject()),handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},logSelectedId=function(id){console.log("selected: ".concat(id))},handleMainButtonClick=function(){console.log("Main button clicked")},itemsDemo=[{id:"1",render:"Option one"},{id:"2",render:"Option two"},{id:"3",render:"Option three"},{id:"4",render:"Option four"},{id:"5",render:"Option five"},{id:"6",render:"Option six"},{id:"7",render:"Option seven"}],MultiButtonIconTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MultiButtonIcon_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(void 0),2),selected2=_React_useState1[0],setSelected2=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(void 0),2),selected3=_React_useState2[0],setSelected3=_React_useState2[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsxs)(MultiButton,MultiButtonIcon_template_object_spread_props(MultiButtonIcon_template_object_spread({},props),{appearance:"primary",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:itemsDemo,onVisibilityChange:handleVisibilityChange,"data-dropdown-container-id":"first-multi-button-with-dropdown",className:"multi-button-class",onMainButtonClick:handleMainButtonClick,children:[(0,jsx_runtime.jsx)(SvgBonusSolid,{}),"MultiButton"]})),(0,jsx_runtime.jsx)(MultiButtonIcon_template_Separator,{}),(0,jsx_runtime.jsxs)(MultiButton,MultiButtonIcon_template_object_spread_props(MultiButtonIcon_template_object_spread({},props),{appearance:"secondary",selected:selected2,onSelectItem:function(id){logSelectedId(id),setSelected2(id)},items:itemsDemo,onVisibilityChange:handleVisibilityChange,"data-dropdown-container-id":"second-multi-button-with-dropdown",onMainButtonClick:handleMainButtonClick,children:[(0,jsx_runtime.jsx)(SvgBonusSolid,{}),"MultiButton"]})),(0,jsx_runtime.jsx)(MultiButtonIcon_template_Separator,{}),(0,jsx_runtime.jsxs)(MultiButton,MultiButtonIcon_template_object_spread_props(MultiButtonIcon_template_object_spread({},props),{appearance:"tertiary",selected:selected3,onSelectItem:function(id){logSelectedId(id),setSelected3(id)},items:itemsDemo,onVisibilityChange:handleVisibilityChange,"data-dropdown-container-id":"third-multi-button-with-dropdown",onMainButtonClick:handleMainButtonClick,children:[(0,jsx_runtime.jsx)(SvgBonusSolid,{}),"MultiButton"]}))]}),(0,jsx_runtime.jsx)(MultiButtonIcon_template_Separator,{}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsxs)(MultiButton,MultiButtonIcon_template_object_spread_props(MultiButtonIcon_template_object_spread({},props),{disabled:!0,appearance:"primary",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:itemsDemo,onVisibilityChange:handleVisibilityChange,"data-dropdown-container-id":"first-multi-button-with-dropdown-disabled",className:"multi-button-class",onMainButtonClick:handleMainButtonClick,children:[(0,jsx_runtime.jsx)(SvgBonusSolid,{}),"MultiButton"]})),(0,jsx_runtime.jsx)(MultiButtonIcon_template_Separator,{}),(0,jsx_runtime.jsxs)(MultiButton,MultiButtonIcon_template_object_spread_props(MultiButtonIcon_template_object_spread({},props),{disabled:!0,appearance:"secondary",selected:selected2,onSelectItem:function(id){logSelectedId(id),setSelected2(id)},items:itemsDemo,onVisibilityChange:handleVisibilityChange,"data-dropdown-container-id":"second-multi-button-with-dropdown-disabled",onMainButtonClick:handleMainButtonClick,children:[(0,jsx_runtime.jsx)(SvgBonusSolid,{}),"MultiButton"]})),(0,jsx_runtime.jsx)(MultiButtonIcon_template_Separator,{}),(0,jsx_runtime.jsxs)(MultiButton,MultiButtonIcon_template_object_spread_props(MultiButtonIcon_template_object_spread({},props),{disabled:!0,appearance:"tertiary",selected:selected3,onSelectItem:function(id){logSelectedId(id),setSelected3(id)},items:itemsDemo,onVisibilityChange:handleVisibilityChange,"data-dropdown-container-id":"third-multi-button-with-dropdown-disabled",onMainButtonClick:handleMainButtonClick,children:[(0,jsx_runtime.jsx)(SvgBonusSolid,{}),"MultiButton"]}))]})]})};try{MultiButtonIconTemplate.displayName="MultiButtonIconTemplate",MultiButtonIconTemplate.__docgenInfo={description:"",displayName:"MultiButtonIconTemplate",props:{items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!1,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Id выбранной опции списка",name:"selected",required:!1,type:{name:"string"}},onMainButtonClick:{defaultValue:null,description:"Колбек на нажатие основной кнопки",name:"onMainButtonClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте nVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},disabledMainButton:{defaultValue:null,description:"Отключение только главной кнопки, без отключения выпадающего меню.",name:"disabledMainButton",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiButton/stories/MultiButtonIcon.template.tsx#MultiButtonIconTemplate"]={docgenInfo:MultiButtonIconTemplate.__docgenInfo,name:"MultiButtonIconTemplate",path:"src/components/MultiButton/stories/MultiButtonIcon.template.tsx#MultiButtonIconTemplate"})}catch(__react_docgen_typescript_loader_error){}function MultiButtonDisabled_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MultiButtonDisabled_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MultiButtonDisabled_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MultiButtonDisabled_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MultiButtonDisabled_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MultiButtonDisabled_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MultiButtonDisabled_template_define_property(target,key,source[key])})}return target}function MultiButtonDisabled_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MultiButtonDisabled_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MultiButtonDisabled_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MultiButtonDisabled_template_sliced_to_array(arr,i){return MultiButtonDisabled_template_array_with_holes(arr)||MultiButtonDisabled_template_iterable_to_array_limit(arr,i)||MultiButtonDisabled_template_unsupported_iterable_to_array(arr,i)||MultiButtonDisabled_template_non_iterable_rest()}function MultiButtonDisabled_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MultiButtonDisabled_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MultiButtonDisabled_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MultiButtonDisabled_template_array_like_to_array(o,minLen)}}function MultiButtonDisabled_template_templateObject(){var data=MultiButtonDisabled_template_tagged_template_literal([`
  width: 20px;
  height: 20px;
`]);return MultiButtonDisabled_template_templateObject=function _templateObject(){return data},data}var MultiButtonDisabled_template_Separator=styled_components_browser_esm.Ay.div(MultiButtonDisabled_template_templateObject()),MultiButtonDisabled_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},MultiButtonDisabled_template_logSelectedId=function(id){console.log("selected: ".concat(id))},MultiButtonDisabled_template_handleMainButtonClick=function(){console.log("Main button clicked")},MultiButtonDisabled_template_itemsDemo=[{id:"1",render:"Option one"},{id:"2",render:"Option two"},{id:"3",render:"Option three"},{id:"4",render:"Option four"},{id:"5",render:"Option five"},{id:"6",render:"Option six"},{id:"7",render:"Option seven"}],itemsDisabled=[{id:"1",render:"Option one"},{id:"2",render:"Option two"},{id:"3",render:"Option three",disabled:!0},{id:"4",render:"Option four"},{id:"5",render:"Option five",disabled:!0},{id:"6",render:"Option six"},{id:"7",render:"Option seven"}],MultiButtonDisabledTemplate=function(props){var _React_useState=MultiButtonDisabled_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=MultiButtonDisabled_template_sliced_to_array(react.useState(void 0),2),selected2=_React_useState1[0],setSelected2=_React_useState1[1],_React_useState2=MultiButtonDisabled_template_sliced_to_array(react.useState(void 0),2),selected3=_React_useState2[0],setSelected3=_React_useState2[1],model=react.useMemo(function(){return itemsDisabled.slice(1,itemsDisabled.length)},[props.dimension,itemsDisabled]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,jsx_runtime.jsx)(MultiButton,MultiButtonDisabled_template_object_spread_props(MultiButtonDisabled_template_object_spread({},props),{appearance:"primary",disabled:!0,selected:selected,onSelectItem:function(id){MultiButtonDisabled_template_logSelectedId(id),setSelected(id)},items:model,onVisibilityChange:MultiButtonDisabled_template_handleVisibilityChange,onMainButtonClick:MultiButtonDisabled_template_handleMainButtonClick,children:MultiButtonDisabled_template_itemsDemo[0].render})),(0,jsx_runtime.jsx)(MultiButtonDisabled_template_Separator,{}),(0,jsx_runtime.jsx)(MultiButton,MultiButtonDisabled_template_object_spread_props(MultiButtonDisabled_template_object_spread({},props),{appearance:"secondary",disabled:!0,selected:selected2,onSelectItem:function(id){MultiButtonDisabled_template_logSelectedId(id),setSelected2(id)},items:model,onVisibilityChange:MultiButtonDisabled_template_handleVisibilityChange,onMainButtonClick:MultiButtonDisabled_template_handleMainButtonClick,children:MultiButtonDisabled_template_itemsDemo[0].render})),(0,jsx_runtime.jsx)(MultiButtonDisabled_template_Separator,{}),(0,jsx_runtime.jsx)(MultiButton,MultiButtonDisabled_template_object_spread_props(MultiButtonDisabled_template_object_spread({},props),{appearance:"tertiary",disabled:!0,selected:selected3,onSelectItem:function(id){MultiButtonDisabled_template_logSelectedId(id),setSelected3(id)},items:model,onVisibilityChange:MultiButtonDisabled_template_handleVisibilityChange,onMainButtonClick:MultiButtonDisabled_template_handleMainButtonClick,children:MultiButtonDisabled_template_itemsDemo[0].render})),(0,jsx_runtime.jsx)(MultiButtonDisabled_template_Separator,{}),(0,jsx_runtime.jsx)(MultiButton,MultiButtonDisabled_template_object_spread_props(MultiButtonDisabled_template_object_spread({},props),{appearance:"primary",disabledMainButton:!0,selected:selected3,onSelectItem:function(id){MultiButtonDisabled_template_logSelectedId(id),setSelected3(id)},items:model,onVisibilityChange:MultiButtonDisabled_template_handleVisibilityChange,onMainButtonClick:MultiButtonDisabled_template_handleMainButtonClick,children:MultiButtonDisabled_template_itemsDemo[0].render}))]})})};try{MultiButtonDisabledTemplate.displayName="MultiButtonDisabledTemplate",MultiButtonDisabledTemplate.__docgenInfo={description:"",displayName:"MultiButtonDisabledTemplate",props:{items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!1,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Id выбранной опции списка",name:"selected",required:!1,type:{name:"string"}},onMainButtonClick:{defaultValue:null,description:"Колбек на нажатие основной кнопки",name:"onMainButtonClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте nVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},disabledMainButton:{defaultValue:null,description:"Отключение только главной кнопки, без отключения выпадающего меню.",name:"disabledMainButton",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiButton/stories/MultiButtonDisabled.template.tsx#MultiButtonDisabledTemplate"]={docgenInfo:MultiButtonDisabledTemplate.__docgenInfo,name:"MultiButtonDisabledTemplate",path:"src/components/MultiButton/stories/MultiButtonDisabled.template.tsx#MultiButtonDisabledTemplate"})}catch(__react_docgen_typescript_loader_error){}function MultiButtonAppearance_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MultiButtonAppearance_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MultiButtonAppearance_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MultiButtonAppearance_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MultiButtonAppearance_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MultiButtonAppearance_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MultiButtonAppearance_template_define_property(target,key,source[key])})}return target}function MultiButtonAppearance_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MultiButtonAppearance_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MultiButtonAppearance_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MultiButtonAppearance_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MultiButtonAppearance_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MultiButtonAppearance_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MultiButtonAppearance_template_sliced_to_array(arr,i){return MultiButtonAppearance_template_array_with_holes(arr)||MultiButtonAppearance_template_iterable_to_array_limit(arr,i)||MultiButtonAppearance_template_unsupported_iterable_to_array(arr,i)||MultiButtonAppearance_template_non_iterable_rest()}function MultiButtonAppearance_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MultiButtonAppearance_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MultiButtonAppearance_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MultiButtonAppearance_template_array_like_to_array(o,minLen)}}function MultiButtonAppearance_template_templateObject(){var data=MultiButtonAppearance_template_tagged_template_literal([`
  width: 20px;
  height: 20px;
`]);return MultiButtonAppearance_template_templateObject=function _templateObject(){return data},data}var MultiButtonAppearance_template_Separator=styled_components_browser_esm.Ay.div(MultiButtonAppearance_template_templateObject()),MultiButtonAppearance_template_handleMainButtonClick=function(){console.log("Main button clicked")},MultiButtonAppearance_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},MultiButtonAppearance_template_logSelectedId=function(id){console.log("selected: ".concat(id))},MultiButtonAppearance_template_itemsDemo=[{id:"1",render:"Option one"},{id:"2",render:"Option two"},{id:"3",render:"Option three"},{id:"4",render:"Option four"},{id:"5",render:"Option five"},{id:"6",render:"Option six"},{id:"7",render:"Option seven"}],MultiButtonAppearanceTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MultiButtonAppearance_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=MultiButtonAppearance_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=MultiButtonAppearance_template_sliced_to_array(react.useState(void 0),2),selected2=_React_useState1[0],setSelected2=_React_useState1[1],_React_useState2=MultiButtonAppearance_template_sliced_to_array(react.useState(void 0),2),selected3=_React_useState2[0],setSelected3=_React_useState2[1],model=react.useMemo(function(){return MultiButtonAppearance_template_itemsDemo.slice(1,MultiButtonAppearance_template_itemsDemo.length)},[props.dimension,MultiButtonAppearance_template_itemsDemo]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,jsx_runtime.jsx)(MultiButton,MultiButtonAppearance_template_object_spread_props(MultiButtonAppearance_template_object_spread({},props),{appearance:"primary",selected:selected,onSelectItem:function(id){MultiButtonAppearance_template_logSelectedId(id),setSelected(id)},items:MultiButtonAppearance_template_itemsDemo.slice(1,MultiButtonAppearance_template_itemsDemo.length),onVisibilityChange:MultiButtonAppearance_template_handleVisibilityChange,"data-dropdown-container-id":"first-multi-button-with-dropdown",className:"multi-button-class",onMainButtonClick:MultiButtonAppearance_template_handleMainButtonClick,dropContainerClassName:"dropContainerClass",children:MultiButtonAppearance_template_itemsDemo[0].render})),(0,jsx_runtime.jsx)(MultiButtonAppearance_template_Separator,{}),(0,jsx_runtime.jsx)(MultiButton,MultiButtonAppearance_template_object_spread_props(MultiButtonAppearance_template_object_spread({},props),{appearance:"secondary",selected:selected2,onSelectItem:function(id){MultiButtonAppearance_template_logSelectedId(id),setSelected2(id)},items:model,onVisibilityChange:MultiButtonAppearance_template_handleVisibilityChange,"data-dropdown-container-id":"second-multi-button-with-dropdown",onMainButtonClick:MultiButtonAppearance_template_handleMainButtonClick,dropContainerClassName:"dropContainerClass",children:MultiButtonAppearance_template_itemsDemo[0].render})),(0,jsx_runtime.jsx)(MultiButtonAppearance_template_Separator,{}),(0,jsx_runtime.jsx)(MultiButton,MultiButtonAppearance_template_object_spread_props(MultiButtonAppearance_template_object_spread({},props),{appearance:"tertiary",selected:selected3,onSelectItem:function(id){MultiButtonAppearance_template_logSelectedId(id),setSelected3(id)},items:model,onVisibilityChange:MultiButtonAppearance_template_handleVisibilityChange,"data-dropdown-container-id":"third-multi-button-with-dropdown",onMainButtonClick:MultiButtonAppearance_template_handleMainButtonClick,dropContainerClassName:"dropContainerClass",children:MultiButtonAppearance_template_itemsDemo[0].render}))]})})};try{MultiButtonAppearanceTemplate.displayName="MultiButtonAppearanceTemplate",MultiButtonAppearanceTemplate.__docgenInfo={description:"",displayName:"MultiButtonAppearanceTemplate",props:{items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!1,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Id выбранной опции списка",name:"selected",required:!1,type:{name:"string"}},onMainButtonClick:{defaultValue:null,description:"Колбек на нажатие основной кнопки",name:"onMainButtonClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте nVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},disabledMainButton:{defaultValue:null,description:"Отключение только главной кнопки, без отключения выпадающего меню.",name:"disabledMainButton",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MultiButton/stories/MultiButtonAppearance.template.tsx#MultiButtonAppearanceTemplate"]={docgenInfo:MultiButtonAppearanceTemplate.__docgenInfo,name:"MultiButtonAppearanceTemplate",path:"src/components/MultiButton/stories/MultiButtonAppearance.template.tsx#MultiButtonAppearanceTemplate"})}catch(__react_docgen_typescript_loader_error){}let MultiButtonIcon_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MultiButton } from '@admiral-ds/react-ui';
import type { MultiButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as BonusSolid } from '@admiral-ds/icons/build/category/BonusSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  width: 20px;
  height: 20px;
\`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const handleMainButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('Main button clicked');
};

const itemsDemo = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

export const MultiButtonIconTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MultiButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);
  const [selected3, setSelected3] = React.useState<string | undefined>(undefined);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ display: 'flex' }}>
        <MultiButton
          {...props}
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="tertiary"
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="third-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
      </div>
      <Separator />
      <div style={{ display: 'flex' }}>
        <MultiButton
          {...props}
          disabled
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown-disabled"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          disabled
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown-disabled"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          disabled
          appearance="tertiary"
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={itemsDemo}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="third-multi-button-with-dropdown-disabled"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
      </div>
    </ThemeProvider>
  );
};
`,MultiButtonDisabled_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { MultiButton } from '@admiral-ds/react-ui';
import type { MultiButtonProps } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  width: 20px;
  height: 20px;
\`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const handleMainButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('Main button clicked');
};

const itemsDemo = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

const itemsDisabled = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
    disabled: true,
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

export const MultiButtonDisabledTemplate = (props: MultiButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);
  const [selected3, setSelected3] = React.useState<string | undefined>(undefined);

  const model = React.useMemo(() => {
    return itemsDisabled.slice(1, itemsDisabled.length);
  }, [props.dimension, itemsDisabled]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...props}
          appearance="primary"
          disabled
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="secondary"
          disabled
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="tertiary"
          disabled
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="primary"
          disabledMainButton
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].render}
        </MultiButton>
      </div>
    </>
  );
};
`,MultiButtonAppearance_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MultiButton } from '@admiral-ds/react-ui';
import type { MultiButtonProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  width: 20px;
  height: 20px;
\`;

const handleMainButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('Main button clicked');
};

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const itemsDemo = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

export const MultiButtonAppearanceTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MultiButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);
  const [selected3, setSelected3] = React.useState<string | undefined>(undefined);

  const model = React.useMemo(() => {
    return itemsDemo.slice(1, itemsDemo.length);
  }, [props.dimension, itemsDemo]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...props}
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={itemsDemo.slice(1, itemsDemo.length)}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
          dropContainerClassName="dropContainerClass"
        >
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
          dropContainerClassName="dropContainerClass"
        >
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="tertiary"
          selected={selected3}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected3(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="third-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
          dropContainerClassName="dropContainerClass"
        >
          {itemsDemo[0].render}
        </MultiButton>
      </div>
    </ThemeProvider>
  );
};
`;function MultiButton_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MultiButton_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function MultiButton_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MultiButton_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MultiButton_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MultiButton_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MultiButton_stories_define_property(target,key,source[key])})}return target}function MultiButton_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MultiButton_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MultiButton_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MultiButton_stories_sliced_to_array(arr,i){return MultiButton_stories_array_with_holes(arr)||MultiButton_stories_iterable_to_array_limit(arr,i)||MultiButton_stories_unsupported_iterable_to_array(arr,i)||MultiButton_stories_non_iterable_rest()}function MultiButton_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MultiButton_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MultiButton_stories_array_like_to_array(o,minLen)}}let MultiButton_stories={title:"Admiral-2.1/MultiButton",decorators:void 0,component:MultiButton,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17173"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19496"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19544"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19592"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19640"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19520"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19568"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19616"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19664"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19900"}]},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},appearance:{options:["primary","secondary","tertiary"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},disabledMainButton:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},alignSelf:{options:[void 0,"auto","flex-start","flex-end","center","baseline","stretch"],control:{type:"select"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},options:{control:!1},items:{control:!1},selected:{control:{type:"text"}},active:{control:{type:"text"}},menuMaxHeight:{control:{type:"text"}},isVisible:{control:{type:"boolean"}},disableSelectedOptionHighlight:{control:{type:"boolean"}}}};var MultiButtonAppearance={render:function(props){var CSSCustomProps=MultiButton_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MultiButtonAppearanceTemplate,MultiButton_stories_object_spread_props(MultiButton_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MultiButtonAppearance_templateraw_namespaceObject}}},name:"MultiButton. Внешний вид."},MultiButtonDisabled={render:function(props){return(0,jsx_runtime.jsx)(MultiButtonDisabledTemplate,MultiButton_stories_object_spread({},props))},parameters:{docs:{source:{code:MultiButtonDisabled_templateraw_namespaceObject}}},name:"MultiButton. Задизейбленность."},MultiButtonIcon={render:function(props){var CSSCustomProps=MultiButton_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MultiButtonIconTemplate,MultiButton_stories_object_spread_props(MultiButton_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MultiButtonIcon_templateraw_namespaceObject}}},name:"MultiButton с иконкой."};MultiButtonAppearance.parameters={...MultiButtonAppearance.parameters,docs:{...MultiButtonAppearance.parameters?.docs,source:{originalSource:`{
  render: MultiButtonAppearanceStory,
  parameters: {
    docs: {
      source: {
        code: MultiButtonAppearanceRaw
      }
    }
  },
  name: 'MultiButton. Внешний вид.'
}`,...MultiButtonAppearance.parameters?.docs?.source}}},MultiButtonDisabled.parameters={...MultiButtonDisabled.parameters,docs:{...MultiButtonDisabled.parameters?.docs,source:{originalSource:`{
  render: MultiButtonDisabledStory,
  parameters: {
    docs: {
      source: {
        code: MultiButtonDisabledRaw
      }
    }
  },
  name: 'MultiButton. Задизейбленность.'
}`,...MultiButtonDisabled.parameters?.docs?.source}}},MultiButtonIcon.parameters={...MultiButtonIcon.parameters,docs:{...MultiButtonIcon.parameters?.docs,source:{originalSource:`{
  render: MultiButtonIconStory,
  parameters: {
    docs: {
      source: {
        code: MultiButtonIconRaw
      }
    }
  },
  name: 'MultiButton с иконкой.'
}`,...MultiButtonIcon.parameters?.docs?.source}}};let __namedExportsOrder=["MultiButtonAppearance","MultiButtonDisabled","MultiButtonIcon"]},"./src/components/OpenStatusButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>OpenStatusButton});var _admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  transition: transform 0.3s ease-in-out;
  transform: rotate(`,`deg);
  & *[fill^='#'] {
    fill: `,`;
  }

  &:hover *[fill^='#'] {
    fill: `,`;
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}var OpenStatusButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(_admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__.h)(_templateObject(),function(p){return 180*!!p.$isOpen},function(param){var appearance=param.appearance,theme=param.theme;return"white"===appearance?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")},function(p){return"white"===p.appearance?"":"var(--admiral-color-Primary_Primary70, ".concat(p.theme.color["Primary/Primary 70"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]})},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 1s linear infinite;
  path {
    fill: `,`;
  }
  width: 100%;
  height: 100%;
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-MultiButton-stories-MultiButton-stories.9cb23b95.iframe.bundle.js.map