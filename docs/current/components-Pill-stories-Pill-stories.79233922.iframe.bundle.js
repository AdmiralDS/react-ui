"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[555],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/category/AlertOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgAlertOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgAlertOutline=function SvgAlertOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12.71 1.21V3.1c0 .39-.32.72-.71.72-.4 0-.72-.33-.72-.72V1.21a.715.715 0 0 1 1.43 0M3.86 3.86c.28-.28.74-.28 1.02 0l1.33 1.33a.73.73 0 0 1 0 1.02c-.28.28-.74.28-1.02 0L3.86 4.88a.73.73 0 0 1 0-1.02M17.57 5.7c0-.18.07-.37.21-.51l1.33-1.33c.28-.28.74-.28 1.02 0a.73.73 0 0 1 0 1.02L18.8 6.21c-.28.28-.74.28-1.02 0a.7.7 0 0 1-.21-.51M5 12c0-3.87 3.13-7 7-7 3.86 0 7 3.13 7 7v5.7c0 .38-.32.7-.71.7H5.69a.7.7 0 0 1-.69-.7zm12.69 5.1V12c0-3.15-2.55-5.7-5.69-5.7-3.15 0-5.71 2.55-5.71 5.7v5.1zm-5.05-5.01c0 .36-.29.65-.64.65-.36 0-.65-.29-.65-.65V9.04c0-.36.29-.65.65-.65.35 0 .64.29.64.65zM.49 12c0-.4.33-.72.72-.72h1.88c.4 0 .72.32.72.72 0 .39-.32.72-.72.72H1.21A.73.73 0 0 1 .49 12m20.41-.72h1.88c.39 0 .72.32.72.72 0 .39-.33.72-.72.72H20.9c-.4 0-.72-.33-.72-.72 0-.4.32-.72.72-.72m-8.15 3.57a.749.749 0 1 1-1.5 0c0-.42.33-.75.75-.75.41 0 .75.33.75.75M3.79 19.7H20.2c.36 0 .65.29.65.64 0 .36-.29.66-.65.66H3.79c-.36 0-.65-.3-.65-.66 0-.35.29-.64.65-.64"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/category/BurnSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgBurnSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgBurnSolid=function SvgBurnSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 21c3.86 0 7-3 7-6.89 0-3.22-2.17-4.87-3.7-6.05-.43-.32-.8-.61-1.07-.89-.85-.86-1.32-1.8-1.35-3.1-.01-.68-.83-1.16-1.33-.71C6.25 8.07 5 11.13 5 14.11 5 18 8.13 21 12 21m-2.65-3.87c0 .93.3 1.55.69 1.93.38.39.96.64 1.68.64.6 0 1.27-.31 1.83-.91.55-.59.89-1.37.89-2.13 0-.79-.1-1.4-.53-2.2-.35-.64-.94-1.43-1.96-2.5-.21.58-.53 1.11-.94 1.6l-.06.07c-.84 1.02-1.6 1.93-1.6 3.5"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/DropMenu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DropMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_keyboardKey__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/keyboardKey.js"),_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/OpenStatusButton.tsx"),_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/DropdownContainer/index.tsx"),_src_components_Menu__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Menu/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var StyledMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_6__.W)(_templateObject(),function(param){return param.$width||"auto"}),DropMenuContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_5__.a)(_templateObject1(),function(p){return p.$dropContainerCssMixin||""}),DropMenu=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,menuWidth=_param.menuWidth,_param_disabled=_param.disabled,_param_loading=_param.loading,_param_alignSelf=_param.alignSelf,onClose=_param.onClose,onOpen=_param.onOpen,items=_param.items,selected=_param.selected,active=_param.active,onSelectItem=_param.onSelectItem,onActivateItem=_param.onActivateItem,onChange=_param.onChange,onClick=_param.onClick,onKeyDown=_param.onKeyDown,alignMenuRef=_param.alignMenuRef,targetElement=_param.targetElement,renderContentProp=_param.renderContentProp,menuMaxHeight=_param.menuMaxHeight,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,_param_multiSelection=_param.multiSelection,multiSelection=void 0!==_param_multiSelection&&_param_multiSelection,_param_disableSelectedOptionHighlight=_param.disableSelectedOptionHighlight,disableSelectedOptionHighlight=void 0!==_param_disableSelectedOptionHighlight&&_param_disableSelectedOptionHighlight,isVisible=_param.isVisible,_param_onVisibilityChange=_param.onVisibilityChange,onVisibilityChange=void 0===_param_onVisibilityChange?function(){}:_param_onVisibilityChange,onClickOutside=_param.onClickOutside,renderTopPanel=_param.renderTopPanel,renderBottomPanel=_param.renderBottomPanel,onForwardCycleApprove=_param.onForwardCycleApprove,onBackwardCycleApprove=_param.onBackwardCycleApprove,virtualScroll=_param.virtualScroll,props=_object_without_properties(_param,["dimension","menuWidth","disabled","loading","alignSelf","onClose","onOpen","items","selected","active","onSelectItem","onActivateItem","onChange","onClick","onKeyDown","alignMenuRef","targetElement","renderContentProp","menuMaxHeight","dropContainerCssMixin","dropContainerClassName","dropContainerStyle","multiSelection","disableSelectedOptionHighlight","isVisible","onVisibilityChange","onClickOutside","renderTopPanel","renderBottomPanel","onForwardCycleApprove","onBackwardCycleApprove","virtualScroll"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),isMenuOpenState=_useState[0],setIsMenuOpenState=_useState[1],btnRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),targetNode=targetElement||(null==alignMenuRef?void 0:alignMenuRef.current)||btnRef.current,isMenuOpen=null!=isVisible?isVisible:isMenuOpenState,setIsMenuOpen=function(newMenuOpenState){setIsMenuOpenState(newMenuOpenState),onVisibilityChange(newMenuOpenState)},closeMenu=function(){var _btnRef_current;setIsMenuOpen(!1),null==onClose||onClose(),null==(_btnRef_current=btnRef.current)||_btnRef_current.focus()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[renderContentProp({disabled:void 0!==_param_disabled&&_param_disabled,buttonRef:btnRef,handleKeyDown:function(e){var code=_common_keyboardKey__WEBPACK_IMPORTED_MODULE_3__.r.getCode(e);switch(null==onKeyDown||onKeyDown(e),code){case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_3__.r.Escape:isMenuOpen&&closeMenu();break;case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_3__.r.Enter:case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_3__.r[" "]:isMenuOpen||(e.stopPropagation(),setIsMenuOpen(!0),null==onOpen||onOpen(),e.preventDefault())}},handleClick:function(e){isMenuOpen?null==onClose||onClose():null==onOpen||onOpen(),setIsMenuOpen(!isMenuOpen),null==onClick||onClick(e)},statusIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_4__.$,{$isOpen:isMenuOpen,"aria-hidden":!0}),menuState:isMenuOpen}),isMenuOpen&&!(void 0!==_param_loading&&_param_loading)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DropMenuContainer,_object_spread_props(_object_spread({ref:ref,role:"listbox",alignSelf:void 0===_param_alignSelf?"flex-end":_param_alignSelf,targetElement:targetNode,onClickOutside:function(e){var _btnRef_current;e.target&&(null==(_btnRef_current=btnRef.current)?void 0:_btnRef_current.contains(e.target))||(onClickOutside?onClickOutside(e):(setIsMenuOpen(!1),null==onClose||onClose()))},$dropContainerCssMixin:dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMenu,{maxHeight:menuMaxHeight,$width:menuWidth,virtualScroll:virtualScroll,model:items,selected:selected,onSelectItem:function(id){null==onChange||onChange(id),null==onSelectItem||onSelectItem(id),void 0!==isVisible||multiSelection||disableSelectedOptionHighlight||closeMenu()},dimension:void 0===_param_dimension?"m":_param_dimension,active:active,onActivateItem:onActivateItem,multiSelection:multiSelection,disableSelectedOptionHighlight:disableSelectedOptionHighlight,renderTopPanel:renderTopPanel,renderBottomPanel:renderBottomPanel,onForwardCycleApprove:onForwardCycleApprove,onBackwardCycleApprove:onBackwardCycleApprove})}))]})});DropMenu.displayName="DropMenu";try{DropMenu.displayName="DropMenu",DropMenu.__docgenInfo={description:"",displayName:"DropMenu",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
Взамен используйте isVisible and onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
Взамен используйте isVisible and onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},alignMenuRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Компонент, относительно которого необходимо выравнивать выпадающее меню`,name:"alignMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderContentProp:{defaultValue:null,description:"Компонент, для которого необходимо Menu",name:"renderContentProp",required:!0,type:{name:"(options: RenderContentProps) => ReactNode"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:{value:"() => undefined"},description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:{value:"false"},description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},multiSelection:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:{value:"flex-end"},description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'},{value:'"baseline"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropMenu/index.tsx#DropMenu"]={docgenInfo:DropMenu.__docgenInfo,name:"DropMenu",path:"src/components/DropMenu/index.tsx#DropMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OpenStatusButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>OpenStatusButton});var _admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject=function _templateObject(){return data},data}var OpenStatusButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(_admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__.h)(_templateObject(),function(p){return 180*!!p.$isOpen},function(param){var appearance=param.appearance,theme=param.theme;return"white"===appearance?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")},function(p){return"white"===p.appearance?"":"var(--admiral-color-Primary_Primary70, ".concat(p.theme.color["Primary/Primary 70"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]})},"./src/components/Pill/stories/Pill.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NestedPills:()=>NestedPills,PillWithTooltip:()=>PillWithTooltip,PillsMenu:()=>PillsMenu,SimplePills:()=>SimplePills,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pill_stories});var _path,BonusOutline_path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  border-radius: var(--admiral-border-radius-Small, `,`);
  `,`
  padding: 0 4px;
  height: 16px;
  gap: 4px;
  cursor: pointer;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 4px;
`]);return _templateObject1=function _templateObject(){return data},data}var Pill=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return(0,borderRadius.r2)(p.theme.shape)},typography.Il["Caption/Caption 1"]);Pill.displayName="Pill";var Pills=styled_components_browser_esm.Ay.div(_templateObject1());Pills.displayName="Pills";try{Pill.displayName="Pill",Pill.__docgenInfo={description:"",displayName:"Pill",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pill/index.tsx#Pill"]={docgenInfo:Pill.__docgenInfo,name:"Pill",path:"src/components/Pill/index.tsx#Pill"})}catch(__react_docgen_typescript_loader_error){}try{Pills.displayName="Pills",Pills.__docgenInfo={description:"",displayName:"Pills",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pill/index.tsx#Pills"]={docgenInfo:Pills.__docgenInfo,name:"Pills",path:"src/components/Pill/index.tsx#Pills"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgHeartOutline=function SvgHeartOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"m12 5.87-.79-.59c-.82-.62-1.85-.99-2.96-.99a4.96 4.96 0 0 0-4.96 4.96c0 2.4 1.53 4.58 3.55 6.38 1.95 1.73 4.15 2.93 5.16 3.43 1-.5 3.2-1.7 5.15-3.43 2.02-1.8 3.55-3.98 3.55-6.38 0-2.74-2.22-4.96-4.95-4.96-1.12 0-2.15.37-2.97.99zm0-1.63A6.27 6.27 0 0 0 8.25 3 6.24 6.24 0 0 0 2 9.25c0 5.93 7.45 10 9.49 11 .32.16.69.16 1.01 0 2.04-1 9.5-5.07 9.5-11C22 5.79 19.2 3 15.75 3c-1.41 0-2.71.46-3.75 1.24"})))};__webpack_require__.p;var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function PillSimple_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function PillSimple_template_templateObject(){var data=PillSimple_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return PillSimple_template_templateObject=function _templateObject(){return data},data}function PillSimple_template_templateObject1(){var data=PillSimple_template_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return PillSimple_template_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=PillSimple_template_tagged_template_literal([`
  `,`
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=PillSimple_template_tagged_template_literal([`
  `,`
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=PillSimple_template_tagged_template_literal([`
  display: inline;
  width: 16px;
  height: 16px;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=PillSimple_template_tagged_template_literal([`
  background-color: `,`;
  color: `,`;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=PillSimple_template_tagged_template_literal([`
  `,`

  > `,` *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject6=function _templateObject(){return data},data}var WrapperVertical=styled_components_browser_esm.Ay.div(PillSimple_template_templateObject()),Desc=styled_components_browser_esm.Ay.div(PillSimple_template_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 90"]}),getBackgroundColorByStatus=(0,styled_components_browser_esm.AH)(_templateObject2(),function(param){var $status=param.$status,theme=param.theme;switch($status){case"Error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"Success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"Special":return"var(--admiral-color-Purple_Purple60Main, ".concat(theme.color["Purple/Purple 60 Main"],")");case"Warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"Attention":return"var(--admiral-color-Attention_Attention50Main, ".concat(theme.color["Attention/Attention 50 Main"],")");default:return"var(--admiral-color-Neutral_Neutral10, ".concat(theme.color["Neutral/Neutral 10"],")")}}),getFontColorByStatus=(0,styled_components_browser_esm.AH)(_templateObject3(),function(param){var $status=param.$status,theme=param.theme;switch($status){case"Attention":return"var(--admiral-color-Special_DarkStaticNeutral00, ".concat(theme.color["Special/Dark Static Neutral 00"],")");case"Error":case"Success":case"Special":case"Warning":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),HeartOutlinePillIcon=(0,styled_components_browser_esm.Ay)(SvgHeartOutline)(_templateObject4()),stylesByStatusCssMixin=(0,styled_components_browser_esm.AH)(_templateObject5(),getBackgroundColorByStatus,getFontColorByStatus),StatusPill=(0,styled_components_browser_esm.Ay)(Pill).attrs(function(p){return{"data-status":p.$status}})(_templateObject6(),stylesByStatusCssMixin,HeartOutlinePillIcon,getFontColorByStatus),PillSimpleTemplate=function(param){var themeBorderKind=param.themeBorderKind,CSSCustomProps=param.CSSCustomProps;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(Desc,{children:"Компонент Pills - визуальный индикатор для обозначения статуса какого-либо элемента для быстрой идентификации. Компонент предназначен для максимальной гибкости в дизайне, для остальных случаев используйте компонент Tag."}),(0,jsx_runtime.jsx)(Desc,{children:"Компонент может быть с иконкой или без. Фон компонента и текст с иконками можно окрашивать в произвольные цвета из палитры. Следите за читаемостью текста, не все комбинации цвета обеспечивают достаточный контраст между текстом и фоном. Отдавайте предпочтения контрастным Main-цветам. Всегда думайте как различные цветовые сочетания будут выглядеть в темной теме, назначайте статичные цвета, где это необходимо."}),(0,jsx_runtime.jsx)(Desc,{children:"В данном примере заданы варианты статусов с определенными цветами фона и текста (StatusPill). В даьнейшем они использованы для создания Pill с дропдауном и Nested Pills."}),(0,jsx_runtime.jsxs)(Pills,{children:[(0,jsx_runtime.jsxs)(StatusPill,{$status:"Success",children:[(0,jsx_runtime.jsx)(HeartOutlinePillIcon,{}),(0,jsx_runtime.jsx)("span",{children:"Playground"})]}),(0,jsx_runtime.jsx)(StatusPill,{$status:"Error",children:"Playground"}),(0,jsx_runtime.jsx)(StatusPill,{$status:"Warning",children:"Playground"}),(0,jsx_runtime.jsx)(StatusPill,{$status:"Special",children:"Playground"}),(0,jsx_runtime.jsx)(StatusPill,{$status:"Attention",children:"Playground"}),(0,jsx_runtime.jsx)(StatusPill,{children:"Playground"})]})]})})})};try{PillSimpleTemplate.displayName="PillSimpleTemplate",PillSimpleTemplate.__docgenInfo={description:"",displayName:"PillSimpleTemplate",props:{themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pill/stories/PillSimple.template.tsx#PillSimpleTemplate"]={docgenInfo:PillSimpleTemplate.__docgenInfo,name:"PillSimpleTemplate",path:"src/components/Pill/stories/PillSimple.template.tsx#PillSimpleTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),DropMenu=__webpack_require__("./src/components/DropMenu/index.tsx"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),AlertOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/AlertOutline.svg");function BonusOutline_extends(){return(BonusOutline_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}__webpack_require__.p;var BurnSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/BurnSolid.svg");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function PillMenu_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function PillMenu_template_templateObject(){var data=PillMenu_template_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return PillMenu_template_templateObject=function _templateObject(){return data},data}function PillMenu_template_templateObject1(){var data=PillMenu_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return PillMenu_template_templateObject1=function _templateObject(){return data},data}function PillMenu_template_templateObject2(){var data=PillMenu_template_tagged_template_literal([`
  `,`
`]);return PillMenu_template_templateObject2=function _templateObject(){return data},data}function PillMenu_template_templateObject3(){var data=PillMenu_template_tagged_template_literal([`
  `,`
`]);return PillMenu_template_templateObject3=function _templateObject(){return data},data}function PillMenu_template_templateObject4(){var data=PillMenu_template_tagged_template_literal([`
  display: inline;
  width: 16px;
  height: 16px;
`]);return PillMenu_template_templateObject4=function _templateObject(){return data},data}function PillMenu_template_templateObject5(){var data=PillMenu_template_tagged_template_literal([`
  background-color: `,`;
  color: `,`;
`]);return PillMenu_template_templateObject5=function _templateObject(){return data},data}function PillMenu_template_templateObject6(){var data=PillMenu_template_tagged_template_literal([`
  `,`

  > `,` *[fill^='#'] {
    fill: `,`;
  }
`]);return PillMenu_template_templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=PillMenu_template_tagged_template_literal([`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: `,`;
  }

  &:hover {
    & *[fill^='#'] {
      fill: `,`;
    }
  }
`]);return _templateObject7=function _templateObject(){return data},data}var PillMenu_template_Desc=styled_components_browser_esm.Ay.div(PillMenu_template_templateObject(),function(p){return p.theme.color["Neutral/Neutral 90"]}),PillMenu_template_WrapperVertical=styled_components_browser_esm.Ay.div(PillMenu_template_templateObject1()),PillMenu_template_getBackgroundColorByStatus=(0,styled_components_browser_esm.AH)(PillMenu_template_templateObject2(),function(param){var $status=param.$status,theme=param.theme;switch($status){case"Error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"Success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"Special":return"var(--admiral-color-Purple_Purple60Main, ".concat(theme.color["Purple/Purple 60 Main"],")");case"Warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"Attention":return"var(--admiral-color-Attention_Attention50Main, ".concat(theme.color["Attention/Attention 50 Main"],")");default:return"var(--admiral-color-Neutral_Neutral10, ".concat(theme.color["Neutral/Neutral 10"],")")}}),PillMenu_template_getFontColorByStatus=(0,styled_components_browser_esm.AH)(PillMenu_template_templateObject3(),function(param){var $status=param.$status,theme=param.theme;switch($status){case"Attention":return"var(--admiral-color-Special_DarkStaticNeutral00, ".concat(theme.color["Special/Dark Static Neutral 00"],")");case"Error":case"Success":case"Special":case"Warning":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),PillMenu_template_HeartOutlinePillIcon=(0,styled_components_browser_esm.Ay)(SvgHeartOutline)(PillMenu_template_templateObject4()),PillMenu_template_stylesByStatusCssMixin=(0,styled_components_browser_esm.AH)(PillMenu_template_templateObject5(),PillMenu_template_getBackgroundColorByStatus,PillMenu_template_getFontColorByStatus),PillMenu_template_StatusPill=(0,styled_components_browser_esm.Ay)(Pill).attrs(function(p){return{"data-status":p.$status}})(PillMenu_template_templateObject6(),PillMenu_template_stylesByStatusCssMixin,PillMenu_template_HeartOutlinePillIcon,PillMenu_template_getFontColorByStatus),StyledPillIcon=styled_components_browser_esm.Ay.div(_templateObject7(),PillMenu_template_getFontColorByStatus,PillMenu_template_getFontColorByStatus),PillMenu=(0,react.forwardRef)(function(_param,ref){var options=_param.options,props=_object_without_properties(_param,["options"]),_useState=_sliced_to_array((0,react.useState)(options[0]),2),selectedPill=_useState[0],setSelectedPill=_useState[1],model=(0,react.useMemo)(function(){return options.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({dimension:"s"},options),{key:item.id}),item.label)}}})},[options]);return(0,jsx_runtime.jsx)(DropMenu.f,{items:model,dropContainerClassName:"dropContainerClass",selected:null==selectedPill?void 0:selectedPill.id,onSelectItem:function(id){return setSelectedPill(options.find(function(item){return item.id===id}))},renderContentProp:function(param){var buttonRef=param.buttonRef,handleKeyDown=param.handleKeyDown,handleClick=param.handleClick,statusIcon=param.statusIcon;return(0,jsx_runtime.jsxs)(PillMenu_template_StatusPill,_object_spread_props(_object_spread({},props),{ref:(0,refSetter.d)(ref,buttonRef),$status:null==selectedPill?void 0:selectedPill.status,onKeyDown:handleKeyDown,onClick:handleClick,children:[(null==selectedPill?void 0:selectedPill.icon)&&(0,jsx_runtime.jsx)(StyledPillIcon,{$status:null==selectedPill?void 0:selectedPill.status,children:null==selectedPill?void 0:selectedPill.icon}),null==selectedPill?void 0:selectedPill.label,(0,jsx_runtime.jsx)(StyledPillIcon,{$status:null==selectedPill?void 0:selectedPill.status,children:statusIcon})]}))}})}),items=[{id:"1",label:"Option one",status:"Success",icon:(0,jsx_runtime.jsx)(function SvgBonusOutline(props){return react.createElement("svg",BonusOutline_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),BonusOutline_path||(BonusOutline_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M17.36 4.6c.13.62.02 1.23-.26 1.74 1.61.05 2.9 1.38 2.9 3V17c0 1.65-1.35 3-3 3H7c-1.66 0-3-1.35-3-3V9.34c0-1.62 1.28-2.95 2.89-3-.28-.51-.39-1.12-.26-1.74l.02-.09c.18-.83.78-1.5 1.59-1.76 1.46-.46 2.96.13 3.76 1.3a3.31 3.31 0 0 1 3.75-1.3c.81.26 1.41.93 1.59 1.76zm-6.02 1.73H9.09c-.77 0-1.35-.71-1.19-1.46l.02-.09c.08-.37.35-.67.72-.79 1.19-.38 2.44.41 2.6 1.64zm1.31 0h2.25c.77 0 1.35-.71 1.19-1.46l-.02-.09c-.08-.37-.35-.67-.72-.79-1.19-.38-2.44.41-2.6 1.64zm2.85 1.31H17c.93 0 1.7.76 1.7 1.7v2.64h-3.2zm0 5.64v3.01c0 .57-.65.9-1.11.57L12 15.14l-2.4 1.72c-.46.33-1.1 0-1.1-.57v-3.01H5.29V17c0 .93.77 1.7 1.71 1.7h10c.93 0 1.7-.77 1.7-1.7v-3.72zm-7-1.3H5.29V9.34c0-.94.77-1.7 1.71-1.7h1.5zm5.7 3.14V7.64H9.79v7.48l1.45-1.03c.45-.33 1.06-.33 1.51 0z"})))},{})},{id:"2",label:"Option two",status:"Error",icon:(0,jsx_runtime.jsx)(AlertOutline.h,{})},{id:"3",label:"Option three",status:"Warning",icon:(0,jsx_runtime.jsx)(BurnSolid.h,{})},{id:"4",label:"Option four",status:"Special",icon:(0,jsx_runtime.jsx)(SvgHeartOutline,{})},{id:"5",label:"Option five"}],PillMenuTemplate=function(param){var themeBorderKind=param.themeBorderKind,CSSCustomProps=param.CSSCustomProps;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(PillMenu_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(PillMenu_template_Desc,{children:"Компонент может быть с выпадающим меню. Позволяет выбирать различные статусы (цвета) индикатора."}),(0,jsx_runtime.jsx)(PillMenu_template_Desc,{children:"Для добавления выпадающего меню к кастомному StatusPill используется компонент DropMenu."}),(0,jsx_runtime.jsx)(PillMenu,{options:items})]})})})};try{PillMenuTemplate.displayName="PillMenuTemplate",PillMenuTemplate.__docgenInfo={description:"",displayName:"PillMenuTemplate",props:{themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pill/stories/PillMenu.template.tsx#PillMenuTemplate"]={docgenInfo:PillMenuTemplate.__docgenInfo,name:"PillMenuTemplate",path:"src/components/Pill/stories/PillMenu.template.tsx#PillMenuTemplate"})}catch(__react_docgen_typescript_loader_error){}function PillNested_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function PillNested_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function PillNested_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PillNested_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function PillNested_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function PillNested_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PillNested_template_define_property(target,key,source[key])})}return target}function PillNested_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function PillNested_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):PillNested_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function PillNested_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=PillNested_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function PillNested_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function PillNested_template_sliced_to_array(arr,i){return PillNested_template_array_with_holes(arr)||PillNested_template_iterable_to_array_limit(arr,i)||PillNested_template_unsupported_iterable_to_array(arr,i)||PillNested_template_non_iterable_rest()}function PillNested_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function PillNested_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return PillNested_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return PillNested_template_array_like_to_array(o,minLen)}}function PillNested_template_templateObject(){var data=PillNested_template_tagged_template_literal([`
  `,`
`]);return PillNested_template_templateObject=function _templateObject(){return data},data}function PillNested_template_templateObject1(){var data=PillNested_template_tagged_template_literal([`
  `,`
`]);return PillNested_template_templateObject1=function _templateObject(){return data},data}function PillNested_template_templateObject2(){var data=PillNested_template_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return PillNested_template_templateObject2=function _templateObject(){return data},data}function PillNested_template_templateObject3(){var data=PillNested_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return PillNested_template_templateObject3=function _templateObject(){return data},data}function PillNested_template_templateObject4(){var data=PillNested_template_tagged_template_literal([`
  display: inline;
  width: 16px;
  height: 16px;
`]);return PillNested_template_templateObject4=function _templateObject(){return data},data}function PillNested_template_templateObject5(){var data=PillNested_template_tagged_template_literal([`
  background-color: `,`;
  color: `,`;
`]);return PillNested_template_templateObject5=function _templateObject(){return data},data}function PillNested_template_templateObject6(){var data=PillNested_template_tagged_template_literal([`
  `,`

  > `,` *[fill^='#'] {
    fill: `,`;
  }
`]);return PillNested_template_templateObject6=function _templateObject(){return data},data}function PillNested_template_templateObject7(){var data=PillNested_template_tagged_template_literal([`
  `,`
`]);return PillNested_template_templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=PillNested_template_tagged_template_literal([`
  `,`
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=PillNested_template_tagged_template_literal([`
  display: flex;

  > `,`:first-of-type {
    border-radius: `,`;
  }
  > `,`:last-of-type {
    border-radius: `,`;
  }
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=PillNested_template_tagged_template_literal([`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: `,`;
  }

  &:hover {
    & *[fill^='#'] {
      fill: `,`;
    }
  }
`]);return _templateObject10=function _templateObject(){return data},data}var PillNested_template_getBackgroundColorByStatus=(0,styled_components_browser_esm.AH)(PillNested_template_templateObject(),function(param){var $status=param.$status,theme=param.theme;switch($status){case"Error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"Success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"Special":return"var(--admiral-color-Purple_Purple60Main, ".concat(theme.color["Purple/Purple 60 Main"],")");case"Warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"Attention":return"var(--admiral-color-Attention_Attention50Main, ".concat(theme.color["Attention/Attention 50 Main"],")");default:return"var(--admiral-color-Neutral_Neutral10, ".concat(theme.color["Neutral/Neutral 10"],")")}}),PillNested_template_getFontColorByStatus=(0,styled_components_browser_esm.AH)(PillNested_template_templateObject1(),function(param){var $status=param.$status,theme=param.theme;switch($status){case"Attention":return"var(--admiral-color-Special_DarkStaticNeutral00, ".concat(theme.color["Special/Dark Static Neutral 00"],")");case"Error":case"Success":case"Special":case"Warning":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),PillNested_template_Desc=styled_components_browser_esm.Ay.div(PillNested_template_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 90"]}),PillNested_template_WrapperVertical=styled_components_browser_esm.Ay.div(PillNested_template_templateObject3()),PillNested_template_HeartOutlinePillIcon=(0,styled_components_browser_esm.Ay)(SvgHeartOutline)(PillNested_template_templateObject4()),PillNested_template_stylesByStatusCssMixin=(0,styled_components_browser_esm.AH)(PillNested_template_templateObject5(),PillNested_template_getBackgroundColorByStatus,PillNested_template_getFontColorByStatus),PillNested_template_StatusPill=(0,styled_components_browser_esm.Ay)(Pill).attrs(function(p){return{"data-status":p.$status}})(PillNested_template_templateObject6(),PillNested_template_stylesByStatusCssMixin,PillNested_template_HeartOutlinePillIcon,PillNested_template_getFontColorByStatus),firstNestedPillBorderRadius=(0,styled_components_browser_esm.AH)(PillNested_template_templateObject7(),function(param){var theme=param.theme,radius=(0,borderRadius.r2)(theme.shape);return"var(--admiral-border-radius-Small, ".concat(radius,") 0 0 var(--admiral-border-radius-Small, ").concat(radius,")")}),lastNestedPillBorderRadius=(0,styled_components_browser_esm.AH)(_templateObject8(),function(param){var theme=param.theme,radius=(0,borderRadius.r2)(theme.shape);return"0 var(--admiral-border-radius-Small, ".concat(radius,") var(--admiral-border-radius-Small, ").concat(radius,") 0")}),NestedPill=styled_components_browser_esm.Ay.div(_templateObject9(),PillNested_template_StatusPill,firstNestedPillBorderRadius,PillNested_template_StatusPill,lastNestedPillBorderRadius),PillNested_template_StyledPillIcon=styled_components_browser_esm.Ay.div(_templateObject10(),PillNested_template_getFontColorByStatus,PillNested_template_getFontColorByStatus),leftPillClicked=function(){return console.log("Left nested pill clicked")},rightPillClicked=function(){return console.log("Right nested pill clicked")},itemsLeft=[{id:"1",label:"Option one",status:"Special"},{id:"2",label:"Option two",status:"Success"},{id:"3",label:"Option three",status:"Error"},{id:"4",label:"Option four",status:"Warning"},{id:"5",label:"Option five"}],itemsRight=[{id:"1",label:"Option one",status:"Warning"},{id:"2",label:"Option two",status:"Success"},{id:"3",label:"Option three",status:"Error"},{id:"4",label:"Option four",status:"Special"},{id:"5",label:"Option five"}],PillNested_template_PillMenu=(0,react.forwardRef)(function(_param,ref){var options=_param.options,props=PillNested_template_object_without_properties(_param,["options"]),_useState=PillNested_template_sliced_to_array((0,react.useState)(options[0]),2),selectedPill=_useState[0],setSelectedPill=_useState[1],model=(0,react.useMemo)(function(){return options.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,PillNested_template_object_spread_props(PillNested_template_object_spread({dimension:"s"},options),{key:item.id}),item.label)}}})},[options]);return(0,jsx_runtime.jsx)(DropMenu.f,{items:model,dropContainerClassName:"dropContainerClass",selected:null==selectedPill?void 0:selectedPill.id,onSelectItem:function(id){return setSelectedPill(options.find(function(item){return item.id===id}))},renderContentProp:function(param){var buttonRef=param.buttonRef,handleKeyDown=param.handleKeyDown,handleClick=param.handleClick,statusIcon=param.statusIcon;return(0,jsx_runtime.jsxs)(PillNested_template_StatusPill,PillNested_template_object_spread_props(PillNested_template_object_spread({},props),{ref:(0,refSetter.d)(ref,buttonRef),$status:null==selectedPill?void 0:selectedPill.status,onKeyDown:handleKeyDown,onClick:handleClick,children:[(null==selectedPill?void 0:selectedPill.icon)&&(0,jsx_runtime.jsx)(PillNested_template_StyledPillIcon,{$status:null==selectedPill?void 0:selectedPill.status,children:null==selectedPill?void 0:selectedPill.icon}),null==selectedPill?void 0:selectedPill.label,(0,jsx_runtime.jsx)(PillNested_template_StyledPillIcon,{$status:null==selectedPill?void 0:selectedPill.status,children:statusIcon})]}))}})}),PillNestedTemplate=function(param){var themeBorderKind=param.themeBorderKind,CSSCustomProps=param.CSSCustomProps;return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(PillNested_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(PillNested_template_Desc,{children:"Компонент позволяет объединять два элемента в один, у каждого из которых есть все функции одиночного компонента. Используя иконки, следите, что бы иконки были во всех компонентах группы. Фукцию выпадающего меню, напротив, можно назначать избирательно."}),(0,jsx_runtime.jsx)(PillNested_template_Desc,{children:'Для объединения двух StatusPill используется NestedPill, который стилизует правый и левый края StatusPill так, чтобы они "слились" в единую форму.'}),(0,jsx_runtime.jsxs)(Pills,{children:[(0,jsx_runtime.jsxs)(NestedPill,{children:[(0,jsx_runtime.jsx)(PillNested_template_StatusPill,{$status:"Special",onClick:leftPillClicked,children:"LeftNested"}),(0,jsx_runtime.jsx)(PillNested_template_StatusPill,{$status:"Warning",onClick:rightPillClicked,children:"RightNested"})]}),(0,jsx_runtime.jsxs)(NestedPill,{children:[(0,jsx_runtime.jsxs)(PillNested_template_StatusPill,{$status:"Special",onClick:leftPillClicked,children:[(0,jsx_runtime.jsx)(PillNested_template_StyledPillIcon,{$status:"Special",children:(0,jsx_runtime.jsx)(SvgHeartOutline,{})}),"LeftNested"]}),(0,jsx_runtime.jsxs)(PillNested_template_StatusPill,{$status:"Warning",onClick:rightPillClicked,children:[(0,jsx_runtime.jsx)(PillNested_template_StyledPillIcon,{$status:"Warning",children:(0,jsx_runtime.jsx)(BurnSolid.h,{})}),"RightNested"]})]}),(0,jsx_runtime.jsxs)(NestedPill,{children:[(0,jsx_runtime.jsx)(PillNested_template_PillMenu,{options:itemsLeft}),(0,jsx_runtime.jsx)(PillNested_template_PillMenu,{options:itemsRight})]}),(0,jsx_runtime.jsxs)(NestedPill,{children:[(0,jsx_runtime.jsx)(PillNested_template_StatusPill,{$status:"Special",onClick:leftPillClicked,children:"LeftNested"}),(0,jsx_runtime.jsx)(PillNested_template_PillMenu,{options:itemsRight})]})]})]})})};try{PillNestedTemplate.displayName="PillNestedTemplate",PillNestedTemplate.__docgenInfo={description:"",displayName:"PillNestedTemplate",props:{themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pill/stories/PillNested.template.tsx#PillNestedTemplate"]={docgenInfo:PillNestedTemplate.__docgenInfo,name:"PillNestedTemplate",path:"src/components/Pill/stories/PillNested.template.tsx#PillNestedTemplate"})}catch(__react_docgen_typescript_loader_error){}var TooltipHOC=__webpack_require__("./src/components/TooltipHOC/index.tsx"),checkOverflow=__webpack_require__("./src/components/common/utils/checkOverflow.ts"),Tooltip=__webpack_require__("./src/components/Tooltip/index.tsx");function PillWithTooltip_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function PillWithTooltip_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function PillWithTooltip_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function PillWithTooltip_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function PillWithTooltip_template_sliced_to_array(arr,i){return PillWithTooltip_template_array_with_holes(arr)||PillWithTooltip_template_iterable_to_array_limit(arr,i)||PillWithTooltip_template_unsupported_iterable_to_array(arr,i)||PillWithTooltip_template_non_iterable_rest()}function PillWithTooltip_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function PillWithTooltip_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return PillWithTooltip_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return PillWithTooltip_template_array_like_to_array(o,minLen)}}function PillWithTooltip_template_templateObject(){var data=PillWithTooltip_template_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return PillWithTooltip_template_templateObject=function _templateObject(){return data},data}function PillWithTooltip_template_templateObject1(){var data=PillWithTooltip_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`]);return PillWithTooltip_template_templateObject1=function _templateObject(){return data},data}function PillWithTooltip_template_templateObject2(){var data=PillWithTooltip_template_tagged_template_literal([`
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  color: var(--admiral-color-Special_StaticWhite, `,`);
`]);return PillWithTooltip_template_templateObject2=function _templateObject(){return data},data}function PillWithTooltip_template_templateObject3(){var data=PillWithTooltip_template_tagged_template_literal([`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`]);return PillWithTooltip_template_templateObject3=function _templateObject(){return data},data}var PillWithTooltip_template_Desc=styled_components_browser_esm.Ay.div(PillWithTooltip_template_templateObject(),function(p){return p.theme.color["Neutral/Neutral 90"]}),PillWithTooltip_template_WrapperVertical=styled_components_browser_esm.Ay.div(PillWithTooltip_template_templateObject1()),StyledPill=(0,styled_components_browser_esm.Ay)(Pill)(PillWithTooltip_template_templateObject2(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Special/Static White"]}),StyledPillWithTooltipHoc=(0,TooltipHOC.K)(StyledPill),LabelWrapper=styled_components_browser_esm.Ay.div(PillWithTooltip_template_templateObject3()),PillWithTooltipTemplate=function(param){var themeBorderKind=param.themeBorderKind,CSSCustomProps=param.CSSCustomProps,pillLabel="Я три дня гналась за вами, чтобы сказать, как вы мне безразличны",wrapperRef=(0,react.useRef)(null),textRef=(0,react.useRef)(null),_useState=PillWithTooltip_template_sliced_to_array((0,react.useState)(!1),2),overflow=_useState[0],setOverflow=_useState[1],_useState1=PillWithTooltip_template_sliced_to_array((0,react.useState)(!1),2),tooltipVisible=_useState1[0],setTooltipVisible=_useState1[1];return(0,react.useLayoutEffect)(function(){var element=textRef.current;element&&(0,checkOverflow.p)(element)!==overflow&&setOverflow((0,checkOverflow.p)(element))},[tooltipVisible,setOverflow]),(0,react.useLayoutEffect)(function(){var show=function show(){setTooltipVisible(!0)},hide=function hide(){setTooltipVisible(!1)},wrapper=wrapperRef.current;if(wrapper)return wrapper.addEventListener("mouseenter",show),wrapper.addEventListener("mouseleave",hide),wrapper.addEventListener("focus",show),wrapper.addEventListener("blur",hide),function(){wrapper.removeEventListener("mouseenter",show),wrapper.removeEventListener("mouseleave",hide),wrapper.removeEventListener("focus",show),wrapper.removeEventListener("blur",hide)}},[setTooltipVisible]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(PillWithTooltip_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(PillWithTooltip_template_Desc,{children:"В случаях ограниченного пространства задавайте максимальную ширину компонента, подсвечивая полный текст при наведении."}),(0,jsx_runtime.jsx)(PillWithTooltip_template_Desc,{children:"Вариант Pill ограниченной ширины с использованием Tooltip при переполнении:"}),(0,jsx_runtime.jsx)(StyledPill,{ref:wrapperRef,style:{width:"253px"},children:(0,jsx_runtime.jsx)(LabelWrapper,{ref:textRef,children:pillLabel})}),tooltipVisible&&overflow&&(0,jsx_runtime.jsx)(Tooltip.m,{targetElement:wrapperRef.current,renderContent:function(){return pillLabel}}),(0,jsx_runtime.jsx)(PillWithTooltip_template_Desc,{children:"Вариант Pill с ограничением по количеству символов и с использованием TooltipHoc:"}),(0,jsx_runtime.jsx)(StyledPillWithTooltipHoc,{renderContent:function(){return pillLabel},children:pillLabel.slice(0,40)+"..."})]})})};try{PillWithTooltipTemplate.displayName="PillWithTooltipTemplate",PillWithTooltipTemplate.__docgenInfo={description:"",displayName:"PillWithTooltipTemplate",props:{themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pill/stories/PillWithTooltip.template.tsx#PillWithTooltipTemplate"]={docgenInfo:PillWithTooltipTemplate.__docgenInfo,name:"PillWithTooltipTemplate",path:"src/components/Pill/stories/PillWithTooltip.template.tsx#PillWithTooltipTemplate"})}catch(__react_docgen_typescript_loader_error){}let PillSimple_templateraw_namespaceObject=`import styled, { css, ThemeProvider } from 'styled-components';

import { Pill, Pills } from '@admiral-ds/react-ui';
import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

const Desc = styled.div\`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

const getBackgroundColorByStatus = css<{ $status?: Status }>\`
  \${({ $status, theme }) => {
    switch ($status) {
      case 'Error':
        return \`var(--admiral-color-Error_Error60Main, \${theme.color['Error/Error 60 Main']})\`;
      case 'Success':
        return \`var(--admiral-color-Success_Success50Main, \${theme.color['Success/Success 50 Main']})\`;
      case 'Special':
        return \`var(--admiral-color-Purple_Purple60Main, \${theme.color['Purple/Purple 60 Main']})\`;
      case 'Warning':
        return \`var(--admiral-color-Warning_Warning50Main, \${theme.color['Warning/Warning 50 Main']})\`;
      case 'Attention':
        return \`var(--admiral-color-Attention_Attention50Main, \${theme.color['Attention/Attention 50 Main']})\`;
      default:
        return \`var(--admiral-color-Neutral_Neutral10, \${theme.color['Neutral/Neutral 10']})\`;
    }
  }}
\`;

const getFontColorByStatus = css<{ $status?: Status }>\`
  \${({ $status, theme }) => {
    switch ($status) {
      case 'Attention':
        return \`var(--admiral-color-Special_DarkStaticNeutral00, \${theme.color['Special/Dark Static Neutral 00']})\`;
      case 'Error':
      case 'Success':
      case 'Special':
      case 'Warning':
        return \`var(--admiral-color-Special_StaticWhite, \${theme.color['Special/Static White']})\`;
      default:
        return \`var(--admiral-color-Neutral_Neutral90, \${theme.color['Neutral/Neutral 90']})\`;
    }
  }}
\`;

const HeartOutlinePillIcon = styled(HeartOutline)\`
  display: inline;
  width: 16px;
  height: 16px;
\`;

const stylesByStatusCssMixin = css<{ $status?: Status }>\`
  background-color: \${getBackgroundColorByStatus};
  color: \${getFontColorByStatus};
\`;

const StatusPill = styled(Pill).attrs<{ $status?: Status; 'data-status'?: Status }>((p) => ({
  'data-status': p.$status,
}))<{ $status?: Status }>\`
  \${stylesByStatusCssMixin}

  > \${HeartOutlinePillIcon} *[fill^='#'] {
    fill: \${getFontColorByStatus};
  }
\`;

export const PillSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
        <WrapperVertical>
          <Desc>
            Компонент Pills - визуальный индикатор для обозначения статуса какого-либо элемента для быстрой
            идентификации. Компонент предназначен для максимальной гибкости в дизайне, для остальных случаев используйте
            компонент Tag.
          </Desc>
          <Desc>
            Компонент может быть с иконкой или без. Фон компонента и текст с иконками можно окрашивать в произвольные
            цвета из палитры. Следите за читаемостью текста, не все комбинации цвета обеспечивают достаточный контраст
            между текстом и фоном. Отдавайте предпочтения контрастным Main-цветам. Всегда думайте как различные цветовые
            сочетания будут выглядеть в темной теме, назначайте статичные цвета, где это необходимо.
          </Desc>
          <Desc>
            В данном примере заданы варианты статусов с определенными цветами фона и текста (StatusPill). В даьнейшем
            они использованы для создания Pill с дропдауном и Nested Pills.
          </Desc>
          <Pills>
            <StatusPill $status="Success">
              <HeartOutlinePillIcon />
              <span>Playground</span>
            </StatusPill>
            <StatusPill $status="Error">Playground</StatusPill>
            <StatusPill $status="Warning">Playground</StatusPill>
            <StatusPill $status="Special">Playground</StatusPill>
            <StatusPill $status="Attention">Playground</StatusPill>
            <StatusPill>Playground</StatusPill>
          </Pills>
        </WrapperVertical>
      </ThemeProvider>
    </>
  );
};
`,PillMenu_templateraw_namespaceObject=`import { forwardRef, useMemo, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { DropMenu, MenuItem, Pill, refSetter } from '@admiral-ds/react-ui';
import type { RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { ReactComponent as AlertOutline } from '@admiral-ds/icons/build/category/AlertOutline.svg';
import { ReactComponent as BonusOutline } from '@admiral-ds/icons/build/category/BonusOutline.svg';
import { ReactComponent as BurnSolid } from '@admiral-ds/icons/build/category/BurnSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Desc = styled.div\`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

const getBackgroundColorByStatus = css<{ $status?: Status }>\`
  \${({ $status, theme }) => {
    switch ($status) {
      case 'Error':
        return \`var(--admiral-color-Error_Error60Main, \${theme.color['Error/Error 60 Main']})\`;
      case 'Success':
        return \`var(--admiral-color-Success_Success50Main, \${theme.color['Success/Success 50 Main']})\`;
      case 'Special':
        return \`var(--admiral-color-Purple_Purple60Main, \${theme.color['Purple/Purple 60 Main']})\`;
      case 'Warning':
        return \`var(--admiral-color-Warning_Warning50Main, \${theme.color['Warning/Warning 50 Main']})\`;
      case 'Attention':
        return \`var(--admiral-color-Attention_Attention50Main, \${theme.color['Attention/Attention 50 Main']})\`;
      default:
        return \`var(--admiral-color-Neutral_Neutral10, \${theme.color['Neutral/Neutral 10']})\`;
    }
  }}
\`;

const getFontColorByStatus = css<{ $status?: Status }>\`
  \${({ $status, theme }) => {
    switch ($status) {
      case 'Attention':
        return \`var(--admiral-color-Special_DarkStaticNeutral00, \${theme.color['Special/Dark Static Neutral 00']})\`;
      case 'Error':
      case 'Success':
      case 'Special':
      case 'Warning':
        return \`var(--admiral-color-Special_StaticWhite, \${theme.color['Special/Static White']})\`;
      default:
        return \`var(--admiral-color-Neutral_Neutral90, \${theme.color['Neutral/Neutral 90']})\`;
    }
  }}
\`;

const HeartOutlinePillIcon = styled(HeartOutline)\`
  display: inline;
  width: 16px;
  height: 16px;
\`;

const stylesByStatusCssMixin = css<{ $status?: Status }>\`
  background-color: \${getBackgroundColorByStatus};
  color: \${getFontColorByStatus};
\`;

const StatusPill = styled(Pill).attrs<{ $status?: Status; 'data-status'?: Status }>((p) => ({
  'data-status': p.$status,
}))<{ $status?: Status }>\`
  \${stylesByStatusCssMixin}

  > \${HeartOutlinePillIcon} *[fill^='#'] {
    fill: \${getFontColorByStatus};
  }
\`;

const StyledPillIcon = styled.div<{ $status?: Status }>\`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: \${getFontColorByStatus};
  }

  &:hover {
    & *[fill^='#'] {
      fill: \${getFontColorByStatus};
    }
  }
\`;

type PillOptionProps = {
  id: string;
  label: string;
  status?: Status;
  icon?: React.ReactNode;
};

interface PillMenuProps {
  options: Array<PillOptionProps>;
}

const PillMenu = forwardRef<HTMLDivElement, PillMenuProps>(({ options, ...props }, ref) => {
  const [selectedPill, setSelectedPill] = useState<PillOptionProps | undefined>(options[0]);

  const model = useMemo(() => {
    return options.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="s" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [options]);

  return (
    <DropMenu
      items={model}
      dropContainerClassName="dropContainerClass"
      selected={selectedPill?.id}
      onSelectItem={(id) => setSelectedPill(options.find((item) => item.id === id))}
      renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
        return (
          <StatusPill
            {...props}
            ref={refSetter(ref, buttonRef as React.Ref<HTMLDivElement>)}
            $status={selectedPill?.status}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          >
            {selectedPill?.icon && <StyledPillIcon $status={selectedPill?.status}>{selectedPill?.icon}</StyledPillIcon>}
            {selectedPill?.label}
            <StyledPillIcon $status={selectedPill?.status}>{statusIcon}</StyledPillIcon>
          </StatusPill>
        );
      }}
    />
  );
});

const items: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Success',
    icon: <BonusOutline />,
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Error',
    icon: <AlertOutline />,
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Warning',
    icon: <BurnSolid />,
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Special',
    icon: <HeartOutline />,
  },
  {
    id: '5',
    label: 'Option five',
  },
];

export const PillMenuTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
        <WrapperVertical>
          <Desc>Компонент может быть с выпадающим меню. Позволяет выбирать различные статусы (цвета) индикатора.</Desc>
          <Desc>Для добавления выпадающего меню к кастомному StatusPill используется компонент DropMenu.</Desc>
          <PillMenu options={items} />
        </WrapperVertical>
      </ThemeProvider>
    </>
  );
};
`,PillNested_templateraw_namespaceObject=`import { forwardRef, useMemo, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { DropMenu, MenuItem, Pill, Pills, refSetter, smallGroupBorderRadius } from '@admiral-ds/react-ui';
import type { RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { ReactComponent as BurnSolid } from '@admiral-ds/icons/build/category/BurnSolid.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

type PillOptionProps = {
  id: string;
  label: string;
  status?: Status;
  icon?: React.ReactNode;
};

const getBackgroundColorByStatus = css<{ $status?: Status }>\`
  \${({ $status, theme }) => {
    switch ($status) {
      case 'Error':
        return \`var(--admiral-color-Error_Error60Main, \${theme.color['Error/Error 60 Main']})\`;
      case 'Success':
        return \`var(--admiral-color-Success_Success50Main, \${theme.color['Success/Success 50 Main']})\`;
      case 'Special':
        return \`var(--admiral-color-Purple_Purple60Main, \${theme.color['Purple/Purple 60 Main']})\`;
      case 'Warning':
        return \`var(--admiral-color-Warning_Warning50Main, \${theme.color['Warning/Warning 50 Main']})\`;
      case 'Attention':
        return \`var(--admiral-color-Attention_Attention50Main, \${theme.color['Attention/Attention 50 Main']})\`;
      default:
        return \`var(--admiral-color-Neutral_Neutral10, \${theme.color['Neutral/Neutral 10']})\`;
    }
  }}
\`;

const getFontColorByStatus = css<{ $status?: Status }>\`
  \${({ $status, theme }) => {
    switch ($status) {
      case 'Attention':
        return \`var(--admiral-color-Special_DarkStaticNeutral00, \${theme.color['Special/Dark Static Neutral 00']})\`;
      case 'Error':
      case 'Success':
      case 'Special':
      case 'Warning':
        return \`var(--admiral-color-Special_StaticWhite, \${theme.color['Special/Static White']})\`;
      default:
        return \`var(--admiral-color-Neutral_Neutral90, \${theme.color['Neutral/Neutral 90']})\`;
    }
  }}
\`;

const Desc = styled.div\`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

const HeartOutlinePillIcon = styled(HeartOutline)\`
  display: inline;
  width: 16px;
  height: 16px;
\`;

const stylesByStatusCssMixin = css<{ $status?: Status }>\`
  background-color: \${getBackgroundColorByStatus};
  color: \${getFontColorByStatus};
\`;

const StatusPill = styled(Pill).attrs<{ $status?: Status; 'data-status'?: Status }>((p) => ({
  'data-status': p.$status,
}))<{ $status?: Status }>\`
  \${stylesByStatusCssMixin}

  > \${HeartOutlinePillIcon} *[fill^='#'] {
    fill: \${getFontColorByStatus};
  }
\`;

const firstNestedPillBorderRadius = css\`
  \${({ theme }) => {
    const radius = smallGroupBorderRadius(theme.shape);
    return \`var(--admiral-border-radius-Small, \${radius}) 0 0 var(--admiral-border-radius-Small, \${radius})\`;
  }}
\`;

const lastNestedPillBorderRadius = css\`
  \${({ theme }) => {
    const radius = smallGroupBorderRadius(theme.shape);
    return \`0 var(--admiral-border-radius-Small, \${radius}) var(--admiral-border-radius-Small, \${radius}) 0\`;
  }}
\`;

const NestedPill = styled.div\`
  display: flex;

  > \${StatusPill}:first-of-type {
    border-radius: \${firstNestedPillBorderRadius};
  }
  > \${StatusPill}:last-of-type {
    border-radius: \${lastNestedPillBorderRadius};
  }
\`;

const StyledPillIcon = styled.div<{ $status?: Status }>\`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: \${getFontColorByStatus};
  }

  &:hover {
    & *[fill^='#'] {
      fill: \${getFontColorByStatus};
    }
  }
\`;

// eslint-disable-next-line no-console
const leftPillClicked = () => console.log('Left nested pill clicked');
// eslint-disable-next-line no-console
const rightPillClicked = () => console.log('Right nested pill clicked');
const itemsLeft: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Special',
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Success',
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Error',
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Warning',
  },
  {
    id: '5',
    label: 'Option five',
  },
];
const itemsRight: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Warning',
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Success',
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Error',
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Special',
  },
  {
    id: '5',
    label: 'Option five',
  },
];

interface PillMenuProps {
  options: Array<PillOptionProps>;
}

const PillMenu = forwardRef<HTMLDivElement, PillMenuProps>(({ options, ...props }, ref) => {
  const [selectedPill, setSelectedPill] = useState<PillOptionProps | undefined>(options[0]);

  const model = useMemo(() => {
    return options.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="s" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [options]);

  return (
    <DropMenu
      items={model}
      dropContainerClassName="dropContainerClass"
      selected={selectedPill?.id}
      onSelectItem={(id) => setSelectedPill(options.find((item) => item.id === id))}
      renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
        return (
          <StatusPill
            {...props}
            ref={refSetter(ref, buttonRef as React.Ref<HTMLDivElement>)}
            $status={selectedPill?.status}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          >
            {selectedPill?.icon && <StyledPillIcon $status={selectedPill?.status}>{selectedPill?.icon}</StyledPillIcon>}
            {selectedPill?.label}
            <StyledPillIcon $status={selectedPill?.status}>{statusIcon}</StyledPillIcon>
          </StatusPill>
        );
      }}
    />
  );
});

export const PillNestedTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperVertical>
        <Desc>
          Компонент позволяет объединять два элемента в один, у каждого из которых есть все функции одиночного
          компонента. Используя иконки, следите, что бы иконки были во всех компонентах группы. Фукцию выпадающего меню,
          напротив, можно назначать избирательно.
        </Desc>
        <Desc>
          Для объединения двух StatusPill используется NestedPill, который стилизует правый и левый края StatusPill так,
          чтобы они "слились" в единую форму.
        </Desc>
        <Pills>
          <NestedPill>
            <StatusPill $status="Special" onClick={leftPillClicked}>
              LeftNested
            </StatusPill>
            <StatusPill $status="Warning" onClick={rightPillClicked}>
              RightNested
            </StatusPill>
          </NestedPill>
          <NestedPill>
            <StatusPill $status="Special" onClick={leftPillClicked}>
              <StyledPillIcon $status="Special">
                <HeartOutline />
              </StyledPillIcon>
              LeftNested
            </StatusPill>
            <StatusPill $status="Warning" onClick={rightPillClicked}>
              <StyledPillIcon $status="Warning">
                <BurnSolid />
              </StyledPillIcon>
              RightNested
            </StatusPill>
          </NestedPill>
          <NestedPill>
            <PillMenu options={itemsLeft} />
            <PillMenu options={itemsRight} />
          </NestedPill>
          <NestedPill>
            <StatusPill $status="Special" onClick={leftPillClicked}>
              LeftNested
            </StatusPill>
            <PillMenu options={itemsRight} />
          </NestedPill>
        </Pills>
      </WrapperVertical>
    </ThemeProvider>
  );
};
`,PillWithTooltip_templateraw_namespaceObject=`import { useLayoutEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { checkOverflow, Pill, Tooltip, TooltipHoc } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Desc = styled.div\`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
\`;

const StyledPill = styled(Pill)\`
  background-color: var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']});
  color: var(--admiral-color-Special_StaticWhite, \${(p) => p.theme.color['Special/Static White']});
\`;

const StyledPillWithTooltipHoc = TooltipHoc(StyledPill);

const LabelWrapper = styled.div\`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
\`;

export const PillWithTooltipTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const pillLabel = 'Я три дня гналась за вами, чтобы сказать, как вы мне безразличны';

  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, setOverflow]);

  useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('mouseenter', show);
      wrapper.addEventListener('mouseleave', hide);
      wrapper.addEventListener('focus', show);
      wrapper.addEventListener('blur', hide);
      return () => {
        wrapper.removeEventListener('mouseenter', show);
        wrapper.removeEventListener('mouseleave', hide);
        wrapper.removeEventListener('focus', show);
        wrapper.removeEventListener('blur', hide);
      };
    }
  }, [setTooltipVisible]);
  //debugger;
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <WrapperVertical>
        <Desc>
          В случаях ограниченного пространства задавайте максимальную ширину компонента, подсвечивая полный текст при
          наведении.
        </Desc>
        <Desc>Вариант Pill ограниченной ширины с использованием Tooltip при переполнении:</Desc>
        <StyledPill ref={wrapperRef} style={{ width: '253px' }}>
          <LabelWrapper ref={textRef}>{pillLabel}</LabelWrapper>
        </StyledPill>
        {tooltipVisible && overflow && <Tooltip targetElement={wrapperRef.current} renderContent={() => pillLabel} />}
        <Desc>Вариант Pill с ограничением по количеству символов и с использованием TooltipHoc:</Desc>
        <StyledPillWithTooltipHoc renderContent={() => pillLabel}>
          {pillLabel.slice(0, 40) + '...'}
        </StyledPillWithTooltipHoc>
      </WrapperVertical>
    </ThemeProvider>
  );
};
`;function Pill_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Pill_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Pill_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Pill_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Pill_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Pill_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Pill_stories_define_property(target,key,source[key])})}return target}function Pill_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Pill_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Pill_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Pill_stories_sliced_to_array(arr,i){return Pill_stories_array_with_holes(arr)||Pill_stories_iterable_to_array_limit(arr,i)||Pill_stories_unsupported_iterable_to_array(arr,i)||Pill_stories_non_iterable_rest()}function Pill_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Pill_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pill_stories_array_like_to_array(o,minLen)}}let Pill_stories={title:"Admiral-2.1/Pills",decorators:void 0,component:Pill,parameters:{layout:"centered",design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=109822%3A65203"}]},argTypes:{theme:{control:!1},as:{control:!1},forwardedAs:{control:!1},ref:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var SimplePills={render:function(props){var CSSCustomProps=Pill_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(PillSimpleTemplate,Pill_stories_object_spread_props(Pill_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:PillSimple_templateraw_namespaceObject}}},name:"Pills. Базовый пример."},PillsMenu={render:function(props){var CSSCustomProps=Pill_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(PillMenuTemplate,Pill_stories_object_spread_props(Pill_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:PillMenu_templateraw_namespaceObject}}},name:"PillMenu. Pill с выпадающим списком."},NestedPills={render:function(props){var CSSCustomProps=Pill_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(PillNestedTemplate,Pill_stories_object_spread_props(Pill_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:PillNested_templateraw_namespaceObject}}},name:"NestedPills."},PillWithTooltip={render:function(props){var CSSCustomProps=Pill_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(PillWithTooltipTemplate,Pill_stories_object_spread_props(Pill_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:PillWithTooltip_templateraw_namespaceObject}}},name:"Pill с Tooltip."};SimplePills.parameters={...SimplePills.parameters,docs:{...SimplePills.parameters?.docs,source:{originalSource:`{
  render: SimplePillsStory,
  parameters: {
    docs: {
      source: {
        code: PillSimpleRaw
      }
    }
  },
  name: 'Pills. Базовый пример.'
}`,...SimplePills.parameters?.docs?.source}}},PillsMenu.parameters={...PillsMenu.parameters,docs:{...PillsMenu.parameters?.docs,source:{originalSource:`{
  render: PillMenuStory,
  parameters: {
    docs: {
      source: {
        code: PillMenuRaw
      }
    }
  },
  name: 'PillMenu. Pill с выпадающим списком.'
}`,...PillsMenu.parameters?.docs?.source}}},NestedPills.parameters={...NestedPills.parameters,docs:{...NestedPills.parameters?.docs,source:{originalSource:`{
  render: NestedPillsStory,
  parameters: {
    docs: {
      source: {
        code: PillNestedRaw
      }
    }
  },
  name: 'NestedPills.'
}`,...NestedPills.parameters?.docs?.source}}},PillWithTooltip.parameters={...PillWithTooltip.parameters,docs:{...PillWithTooltip.parameters?.docs,source:{originalSource:`{
  render: PillWithTooltipStory,
  parameters: {
    docs: {
      source: {
        code: PillWithTooltipRaw
      }
    }
  },
  name: 'Pill с Tooltip.'
}`,...PillWithTooltip.parameters?.docs?.source}}};let __namedExportsOrder=["SimplePills","PillsMenu","NestedPills","PillWithTooltip"]},"./src/components/TooltipHOC/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipHoc});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tooltip/index.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function TooltipHoc(Component){return(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(props,ref){var renderContent=props.renderContent,container=props.container,withDelay=props.withDelay,tooltipRef=props.tooltipRef,tooltipPosition=props.tooltipPosition,tooltipDimension=props.tooltipDimension,wrappedCompProps=_object_without_properties(props,["renderContent","container","withDelay","tooltipRef","tooltipPosition","tooltipDimension"]),emptyContent=!renderContent()&&0!==renderContent(),anchorElementRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),visible=_useState[0],setVisible=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),node=_useState1[0],setNode=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),2),timer=_useState2[0],setTimer=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var show=function show(){setTimer(setTimeout(function(){return setVisible(!0)},withDelay?_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__.w:0))},hide=function hide(){clearTimeout(timer),setVisible(!1)};if(node)return node.addEventListener("mouseenter",show),node.addEventListener("focus",show),node.addEventListener("mouseleave",hide),node.addEventListener("blur",hide),function(){timer&&clearTimeout(timer),node.removeEventListener("mouseenter",show),node.removeEventListener("focus",show),node.removeEventListener("mouseleave",hide),node.removeEventListener("blur",hide)}},[node,setTimer,setVisible,timer]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_object_spread_props(_object_spread({},wrappedCompProps),{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_2__.d)(ref,anchorElementRef,setNode)})),visible&&!emptyContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__.m,{targetElement:anchorElementRef.current,renderContent:renderContent,container:container,tooltipPosition:tooltipPosition,dimension:tooltipDimension,ref:tooltipRef})]})})}try{TooltipHoc.displayName="TooltipHoc",TooltipHoc.__docgenInfo={description:"",displayName:"TooltipHoc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipHOC/index.tsx#TooltipHoc"]={docgenInfo:TooltipHoc.__docgenInfo,name:"TooltipHoc",path:"src/components/TooltipHOC/index.tsx#TooltipHoc"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>checkOverflow});var checkOverflow=function(textContainer){return!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)}}}]);
//# sourceMappingURL=components-Pill-stories-Pill-stories.79233922.iframe.bundle.js.map