"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8025],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/system/AttachFileOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgAttachFileOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgAttachFileOutline=function SvgAttachFileOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M15.85 5.21c-.92-.92-2.4-.92-3.32 0l-6.15 6.15a3.64 3.64 0 0 0 0 5.16l1.34 1.34a3.64 3.64 0 0 0 5.16 0l5.8-5.79a.64.64 0 0 1 .92 0c.25.25.25.66 0 .92l-5.8 5.79a4.937 4.937 0 0 1-7 0l-1.34-1.34a4.937 4.937 0 0 1 0-7l6.15-6.15a3.64 3.64 0 0 1 5.16 0l.71.7a3.67 3.67 0 0 1 0 5.17l-5.8 5.79c-.76.77-2 .77-2.76 0l-.63-.63c-.77-.76-.77-2 0-2.76l5.44-5.44a.64.64 0 0 1 .92 0c.25.25.25.66 0 .92L9.2 13.48c-.25.25-.25.67 0 .92l.64.64c.25.25.67.25.92 0l5.8-5.8c.92-.92.92-2.41 0-3.33z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/DropMenu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DropMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/keyboardKey.js"),_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/OpenStatusButton.tsx"),_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownContainer/index.tsx"),_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
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

Компонент, относительно которого необходимо выравнивать выпадающее меню`,name:"alignMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderContentProp:{defaultValue:null,description:"Компонент, для которого необходимо Menu",name:"renderContentProp",required:!0,type:{name:"(options: RenderContentProps) => ReactNode"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:{value:"() => undefined"},description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:{value:"false"},description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},multiSelection:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:{value:"flex-end"},description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropMenu/index.tsx#DropMenu"]={docgenInfo:DropMenu.__docgenInfo,name:"DropMenu",path:"src/components/DropMenu/index.tsx#DropMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OpenStatusButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>OpenStatusButton});var _admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  container-type: inline-size;
  `,`;

  & svg {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}var sizes=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}},function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1(),sizes,function(p){return p.$svgMixin||""}),Spinner=function(_param){var _param_dimension=_param.dimension,_param_inverse=_param.inverse,svgMixin=_param.svgMixin,props=_object_without_properties(_param,["dimension","inverse","svgMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerWrapper,_object_spread_props(_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__.N,{$inverse:void 0!==_param_inverse&&_param_inverse})}))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextButton/commonMixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ef:()=>ButtonContainer,Tu:()=>IconContainer,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([""]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([""]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
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

Позиционирование иконки. По умолчанию - слева`,name:"displayRight",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/index.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/TextButton/index.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextButtonMenu/stories/TextButtonMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextButtonMenuDimension:()=>TextButtonMenuDimension,TextButtonMenuPlayground:()=>TextButtonMenuPlayground,TextButtonMenuWithIcon:()=>TextButtonMenuWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextButtonMenu_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TextButton=__webpack_require__("./src/components/TextButton/index.tsx"),commonMixin=__webpack_require__("./src/components/TextButton/commonMixin.ts"),DropMenu=__webpack_require__("./src/components/DropMenu/index.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  &:focus {
    color: `,`;
    `,` {
      & *[fill^='#'] {
        fill: `,`;
      }
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}var StyledTextButton=(0,styled_components_browser_esm.Ay)(TextButton.Q)(_templateObject(),function(param){var theme=param.theme,appearance=param.appearance;return param.$menuOpened?"primary"===appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")"):"inherited"},commonMixin.Tu,function(param){var theme=param.theme,appearance=param.appearance;return param.$menuOpened?"primary"===appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")"):"inherited"}),TextButtonMenu=(0,react.forwardRef)(function(_param,ref){var text=_param.text,iconStart=_param.iconStart,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,items=_param.items,disableSelectedOptionHighlight=_param.disableSelectedOptionHighlight,selected=_param.selected,onSelectItem=_param.onSelectItem,active=_param.active,onActivateItem=_param.onActivateItem,isVisible=_param.isVisible,onVisibilityChange=_param.onVisibilityChange,onClickOutside=_param.onClickOutside,renderTopPanel=_param.renderTopPanel,renderBottomPanel=_param.renderBottomPanel,onForwardCycleApprove=_param.onForwardCycleApprove,onBackwardCycleApprove=_param.onBackwardCycleApprove,onChange=_param.onChange,onOpen=_param.onOpen,onClose=_param.onClose,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,_param_className=_param.className,className=void 0===_param_className?"":_param_className,menuWidth=_param.menuWidth,menuMaxHeight=_param.menuMaxHeight,alignSelf=_param.alignSelf,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,props=_object_without_properties(_param,["text","iconStart","dimension","appearance","disabled","loading","items","disableSelectedOptionHighlight","selected","onSelectItem","active","onActivateItem","isVisible","onVisibilityChange","onClickOutside","renderTopPanel","renderBottomPanel","onForwardCycleApprove","onBackwardCycleApprove","onChange","onOpen","onClose","skeleton","className","menuWidth","menuMaxHeight","alignSelf","dropContainerCssMixin","dropContainerClassName","dropContainerStyle"]),dropMenuProps=_object_spread_props(_object_spread({},(0,splitDataAttributes.c$)(props)),{isVisible:isVisible,onVisibilityChange:onVisibilityChange,onSelectItem:onSelectItem,active:active,onActivateItem:onActivateItem,onChange:onChange,onOpen:onOpen,onClose:onClose,disableSelectedOptionHighlight:disableSelectedOptionHighlight,renderTopPanel:renderTopPanel,renderBottomPanel:renderBottomPanel,onForwardCycleApprove:onForwardCycleApprove,onBackwardCycleApprove:onBackwardCycleApprove,onClickOutside:onClickOutside,menuWidth:menuWidth,menuMaxHeight:menuMaxHeight,dropContainerCssMixin:dropContainerCssMixin,dropContainerClassName:dropContainerClassName,dropContainerStyle:dropContainerStyle,alignSelf:alignSelf});return(0,jsx_runtime.jsx)(DropMenu.f,_object_spread_props(_object_spread({},dropMenuProps),{dimension:dimension,loading:loading,items:items,selected:selected,disabled:disabled,renderContentProp:function(param){var buttonRef=param.buttonRef,handleKeyDown=param.handleKeyDown,handleClick=param.handleClick,statusIcon=param.statusIcon,menuState=param.menuState;return(0,jsx_runtime.jsx)(StyledTextButton,_object_spread_props(_object_spread({},props),{text:text,iconStart:iconStart,iconEnd:statusIcon,skeleton:skeleton,ref:(0,refSetter.d)(ref,buttonRef),dimension:dimension,appearance:"primary"===appearance?"primary":"secondary",displayRight:!0,disabled:disabled,loading:loading,onKeyDown:handleKeyDown,onClick:handleClick,"aria-expanded":menuState,$menuOpened:menuState,className:className+" text-button-with-dropdown"}))}}))});TextButtonMenu.displayName="TextButtonMenu";try{TextButtonMenu.displayName="TextButtonMenu",TextButtonMenu.__docgenInfo={description:"",displayName:"TextButtonMenu",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},text:{defaultValue:null,description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметр onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButtonMenu/index.tsx#TextButtonMenu"]={docgenInfo:TextButtonMenu.__docgenInfo,name:"TextButtonMenu",path:"src/components/TextButtonMenu/index.tsx#TextButtonMenu"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function TextButtonMenuPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextButtonMenuPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TextButtonMenuPlayground_template_define_property(target,key,source[key])})}return target}function TextButtonMenuPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TextButtonMenuPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TextButtonMenuPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TextButtonMenuPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TextButtonMenuPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TextButtonMenuPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function TextButtonMenuPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function TextButtonMenuPlayground_template_templateObject(){var data=TextButtonMenuPlayground_template_tagged_template_literal([`
  display: flex;
  justify-content: center;
`]);return TextButtonMenuPlayground_template_templateObject=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(TextButtonMenuPlayground_template_templateObject()),handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},logSelectedId=function(id){console.log("selected: ".concat(id))},items=[{id:"1",display:"Option one"},{id:"2",display:"Option two"},{id:"3",display:"Option three"},{id:"4",display:"Option four"},{id:"5",display:"Option five",disabled:!0},{id:"6",display:"Option six"},{id:"7",display:"Option seven"}],TextButtonMenuPlaygroundTemplate=function(_param){var _param_text=_param.text,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TextButtonMenuPlayground_template_object_without_properties(_param,["text","themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],model=react.useMemo(function(){return items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,TextButtonMenuPlayground_template_object_spread_props(TextButtonMenuPlayground_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.display)},disabled:item.disabled}})},[props.dimension]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsx)(TextButtonMenu,TextButtonMenuPlayground_template_object_spread_props(TextButtonMenuPlayground_template_object_spread({},props),{text:void 0===_param_text?"Text Button":_param_text,selected:selected,dimension:props.dimension,loading:props.loading,disabled:props.disabled,appearance:props.appearance,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:model,onVisibilityChange:handleVisibilityChange,"data-dropdown-container-id":"text-button-menu-with-dropdown",className:"text-button-menu-class",dropContainerClassName:"dropContainerClass"}))})})};try{TextButtonMenuPlaygroundTemplate.displayName="TextButtonMenuPlaygroundTemplate",TextButtonMenuPlaygroundTemplate.__docgenInfo={description:"",displayName:"TextButtonMenuPlaygroundTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},text:{defaultValue:{value:"Text Button"},description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметр onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButtonMenu/stories/TextButtonMenuPlayground.template.tsx#TextButtonMenuPlaygroundTemplate"]={docgenInfo:TextButtonMenuPlaygroundTemplate.__docgenInfo,name:"TextButtonMenuPlaygroundTemplate",path:"src/components/TextButtonMenu/stories/TextButtonMenuPlayground.template.tsx#TextButtonMenuPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),AttachFileOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/AttachFileOutline.svg");function TextButtonMenuDimension_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TextButtonMenuDimension_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TextButtonMenuDimension_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TextButtonMenuDimension_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TextButtonMenuDimension_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextButtonMenuDimension_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TextButtonMenuDimension_template_define_property(target,key,source[key])})}return target}function TextButtonMenuDimension_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TextButtonMenuDimension_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TextButtonMenuDimension_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TextButtonMenuDimension_template_sliced_to_array(arr,i){return TextButtonMenuDimension_template_array_with_holes(arr)||TextButtonMenuDimension_template_iterable_to_array_limit(arr,i)||TextButtonMenuDimension_template_unsupported_iterable_to_array(arr,i)||TextButtonMenuDimension_template_non_iterable_rest()}function TextButtonMenuDimension_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextButtonMenuDimension_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TextButtonMenuDimension_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TextButtonMenuDimension_template_array_like_to_array(o,minLen)}}function TextButtonMenuDimension_template_templateObject(){var data=TextButtonMenuDimension_template_tagged_template_literal([`
  margin: 10px 0;
`]);return TextButtonMenuDimension_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=TextButtonMenuDimension_template_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1 0 200px;
    max-width: 300px;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=TextButtonMenuDimension_template_tagged_template_literal([`
  height: 20px;
  width: 20px;
`]);return _templateObject2=function _templateObject(){return data},data}var StyledText=(0,styled_components_browser_esm.Ay)(T.T)(TextButtonMenuDimension_template_templateObject()),WrapperButton=styled_components_browser_esm.Ay.div(_templateObject1()),Separator=styled_components_browser_esm.Ay.div(_templateObject2()),TextButtonMenuDimension_template_logSelectedId=function(id){console.log("selected: ".concat(id))},TextButtonMenuDimension_template_items=[{id:"1",display:"Option one"},{id:"2",display:"Option two"},{id:"3",display:"Option three"},{id:"4",display:"Option four"},{id:"5",display:"Option five",disabled:!0},{id:"6",display:"Option six"},{id:"7",display:"Option seven"}],TextButtonMenuDimensionTemplate=function(props){var _React_useState=TextButtonMenuDimension_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],model=react.useMemo(function(){return TextButtonMenuDimension_template_items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,TextButtonMenuDimension_template_object_spread_props(TextButtonMenuDimension_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.display)},disabled:item.disabled}})},[props.dimension]),handleSelectItem=function(id){TextButtonMenuDimension_template_logSelectedId(id),setSelected(id)};return(0,jsx_runtime.jsxs)(WrapperButton,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(StyledText,{font:"Header/H6",forwardedAs:"div",children:"Dimension - M"}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"primary",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{})}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",disabled:!0,onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{})}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{}),loading:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"primary",onSelectItem:handleSelectItem}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",disabled:!0,onSelectItem:handleSelectItem}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",onSelectItem:handleSelectItem,loading:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(StyledText,{font:"Header/H6",forwardedAs:"div",children:"Dimension - S"}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{})}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{}),disabled:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{}),loading:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",onSelectItem:handleSelectItem}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",onSelectItem:handleSelectItem,disabled:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",onSelectItem:handleSelectItem,loading:!0})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(StyledText,{font:"Header/H6",forwardedAs:"div",children:"Dimension - M"}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{})}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"secondary",disabled:!0,onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{})}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{}),loading:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"secondary",disabled:!0,onSelectItem:handleSelectItem}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"m",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,loading:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(StyledText,{font:"Header/H6",forwardedAs:"div",children:"Dimension - S"}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{})}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{}),disabled:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{}),loading:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,disabled:!0}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(TextButtonMenu,{items:model,selected:selected,dimension:"s",text:"Text Button",appearance:"secondary",onSelectItem:handleSelectItem,loading:!0})]})]})};try{TextButtonMenuDimensionTemplate.displayName="TextButtonMenuDimensionTemplate",TextButtonMenuDimensionTemplate.__docgenInfo={description:"",displayName:"TextButtonMenuDimensionTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},text:{defaultValue:null,description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметр onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButtonMenu/stories/TextButtonMenuDimension.template.tsx#TextButtonMenuDimensionTemplate"]={docgenInfo:TextButtonMenuDimensionTemplate.__docgenInfo,name:"TextButtonMenuDimensionTemplate",path:"src/components/TextButtonMenu/stories/TextButtonMenuDimension.template.tsx#TextButtonMenuDimensionTemplate"})}catch(__react_docgen_typescript_loader_error){}function TextButtonMenuWithIcon_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TextButtonMenuWithIcon_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TextButtonMenuWithIcon_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TextButtonMenuWithIcon_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TextButtonMenuWithIcon_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextButtonMenuWithIcon_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TextButtonMenuWithIcon_template_define_property(target,key,source[key])})}return target}function TextButtonMenuWithIcon_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TextButtonMenuWithIcon_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TextButtonMenuWithIcon_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TextButtonMenuWithIcon_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TextButtonMenuWithIcon_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TextButtonMenuWithIcon_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TextButtonMenuWithIcon_template_sliced_to_array(arr,i){return TextButtonMenuWithIcon_template_array_with_holes(arr)||TextButtonMenuWithIcon_template_iterable_to_array_limit(arr,i)||TextButtonMenuWithIcon_template_unsupported_iterable_to_array(arr,i)||TextButtonMenuWithIcon_template_non_iterable_rest()}function TextButtonMenuWithIcon_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextButtonMenuWithIcon_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TextButtonMenuWithIcon_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TextButtonMenuWithIcon_template_array_like_to_array(o,minLen)}}function TextButtonMenuWithIcon_template_templateObject(){var data=TextButtonMenuWithIcon_template_tagged_template_literal([`
  display: flex;
  justify-content: center;
`]);return TextButtonMenuWithIcon_template_templateObject=function _templateObject(){return data},data}var TextButtonMenuWithIcon_template_Wrapper=styled_components_browser_esm.Ay.div(TextButtonMenuWithIcon_template_templateObject()),TextButtonMenuWithIcon_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},TextButtonMenuWithIcon_template_logSelectedId=function(id){console.log("selected: ".concat(id))},TextButtonMenuWithIcon_template_items=[{id:"1",display:"Option one"},{id:"2",display:"Option two"},{id:"3",display:"Option three"},{id:"4",display:"Option four"},{id:"5",display:"Option five",disabled:!0},{id:"6",display:"Option six"},{id:"7",display:"Option seven"}],TextButtonMenuWithIconTemplate=function(_param){var _param_text=_param.text,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TextButtonMenuWithIcon_template_object_without_properties(_param,["text","themeBorderKind","CSSCustomProps"]),_React_useState=TextButtonMenuWithIcon_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],model=react.useMemo(function(){return TextButtonMenuWithIcon_template_items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,TextButtonMenuWithIcon_template_object_spread_props(TextButtonMenuWithIcon_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.display)},disabled:item.disabled}})},[props.dimension]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TextButtonMenuWithIcon_template_Wrapper,{children:(0,jsx_runtime.jsx)(TextButtonMenu,TextButtonMenuWithIcon_template_object_spread_props(TextButtonMenuWithIcon_template_object_spread({},props),{text:void 0===_param_text?"Text Button":_param_text,selected:selected,dimension:props.dimension,loading:props.loading,disabled:props.disabled,appearance:props.appearance,onSelectItem:function(id){TextButtonMenuWithIcon_template_logSelectedId(id),setSelected(id)},items:model,onVisibilityChange:TextButtonMenuWithIcon_template_handleVisibilityChange,"data-dropdown-container-id":"text-button-menu-with-dropdown",className:"text-button-menu-class",dropContainerClassName:"dropContainerClass",iconStart:(0,jsx_runtime.jsx)(AttachFileOutline.h,{})}))})})};try{TextButtonMenuWithIconTemplate.displayName="TextButtonMenuWithIconTemplate",TextButtonMenuWithIconTemplate.__docgenInfo={description:"",displayName:"TextButtonMenuWithIconTemplate",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:null,description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},text:{defaultValue:{value:"Text Button"},description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметр onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в версии 9.х.х.
Взамен используйте параметры isVisible и onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButtonMenu/stories/TextButtonMenuWithIcon.template.tsx#TextButtonMenuWithIconTemplate"]={docgenInfo:TextButtonMenuWithIconTemplate.__docgenInfo,name:"TextButtonMenuWithIconTemplate",path:"src/components/TextButtonMenu/stories/TextButtonMenuWithIcon.template.tsx#TextButtonMenuWithIconTemplate"})}catch(__react_docgen_typescript_loader_error){}let TextButtonMenuPlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MenuItem, TextButtonMenu } from '@admiral-ds/react-ui';
import type { TextButtonMenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
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

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const TextButtonMenuPlaygroundTemplate = ({
  text = 'Text Button',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextButtonMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TextButtonMenu
          {...props}
          text={text}
          selected={selected}
          dimension={props.dimension}
          loading={props.loading}
          disabled={props.disabled}
          appearance={props.appearance}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="text-button-menu-with-dropdown"
          className="text-button-menu-class"
          dropContainerClassName="dropContainerClass"
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,TextButtonMenuDimension_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { MenuItem, TextButtonMenu, T } from '@admiral-ds/react-ui';
import type { TextButtonMenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';

const StyledText = styled(T)\`
  margin: 10px 0;
\`;

const WrapperButton = styled.div\`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1 0 200px;
    max-width: 300px;
  }
\`;

const Separator = styled.div\`
  height: 20px;
  width: 20px;
\`;
const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const TextButtonMenuDimensionTemplate = (props: TextButtonMenuProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  const handleSelectItem = (id: string) => {
    logSelectedId(id);
    setSelected(id);
  };
  return (
    <WrapperButton>
      <div>
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - M
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="primary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          disabled
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="primary"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          disabled
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          onSelectItem={handleSelectItem}
          loading
        />
        <Separator />
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - S
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          onSelectItem={handleSelectItem}
          loading
        />
      </div>
      <div>
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - M
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          disabled
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          disabled
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="m"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          loading
        />
        <Separator />
        <StyledText font="Header/H6" forwardedAs="div">
          Dimension - S
        </StyledText>
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          iconStart={<AttachFileOutline />}
          loading
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          disabled
        />
        <Separator />
        <TextButtonMenu
          items={model}
          selected={selected}
          dimension="s"
          text="Text Button"
          appearance="secondary"
          onSelectItem={handleSelectItem}
          loading
        />
      </div>
    </WrapperButton>
  );
};
`,TextButtonMenuWithIcon_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MenuItem, TextButtonMenu } from '@admiral-ds/react-ui';
import type { RenderOptionProps, TextButtonMenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
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

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const TextButtonMenuWithIconTemplate = ({
  text = 'Text Button',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextButtonMenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TextButtonMenu
          {...props}
          text={text}
          selected={selected}
          dimension={props.dimension}
          loading={props.loading}
          disabled={props.disabled}
          appearance={props.appearance}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="text-button-menu-with-dropdown"
          className="text-button-menu-class"
          dropContainerClassName="dropContainerClass"
          iconStart={<AttachFileOutline />}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`;function TextButtonMenu_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TextButtonMenu_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function TextButtonMenu_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TextButtonMenu_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TextButtonMenu_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TextButtonMenu_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TextButtonMenu_stories_define_property(target,key,source[key])})}return target}function TextButtonMenu_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TextButtonMenu_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TextButtonMenu_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TextButtonMenu_stories_sliced_to_array(arr,i){return TextButtonMenu_stories_array_with_holes(arr)||TextButtonMenu_stories_iterable_to_array_limit(arr,i)||TextButtonMenu_stories_unsupported_iterable_to_array(arr,i)||TextButtonMenu_stories_non_iterable_rest()}function TextButtonMenu_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TextButtonMenu_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TextButtonMenu_stories_array_like_to_array(o,minLen)}}let TextButtonMenu_stories={title:"Admiral-2.1/TextButtonMenu",decorators:void 0,component:TextButtonMenu,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17830"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18134"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18216"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18175"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18257"}]},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},text:{control:{type:"text"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},iconStart:{control:!1},items:{control:!1},selected:{control:!1},menuMaxHeight:{control:{type:"text"}},menuWidth:{control:{type:"text"}},disableSelectedOptionHighlight:{control:{type:"boolean"}},isVisible:{control:{type:"boolean"}},active:{control:{type:"text"}}}};var TextButtonMenuPlayground={render:function(props){var CSSCustomProps=TextButtonMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TextButtonMenuPlaygroundTemplate,TextButtonMenu_stories_object_spread_props(TextButtonMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TextButtonMenuPlayground_templateraw_namespaceObject}}},name:"TextButtonMenu. Playground"},TextButtonMenuDimension={render:function(props){return(0,jsx_runtime.jsx)(TextButtonMenuDimensionTemplate,TextButtonMenu_stories_object_spread({},props))},parameters:{docs:{source:{code:TextButtonMenuDimension_templateraw_namespaceObject}}},name:"TextButtonMenu. Размеры и стили."},TextButtonMenuWithIcon={render:function(props){var CSSCustomProps=TextButtonMenu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TextButtonMenuWithIconTemplate,TextButtonMenu_stories_object_spread_props(TextButtonMenu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TextButtonMenuWithIcon_templateraw_namespaceObject}}},name:"TextButtonMenu. С иконкой."};TextButtonMenuPlayground.parameters={...TextButtonMenuPlayground.parameters,docs:{...TextButtonMenuPlayground.parameters?.docs,source:{originalSource:`{
  render: TextButtonMenuPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: TextButtonMenuPlaygroundRaw
      }
    }
  },
  name: 'TextButtonMenu. Playground'
}`,...TextButtonMenuPlayground.parameters?.docs?.source}}},TextButtonMenuDimension.parameters={...TextButtonMenuDimension.parameters,docs:{...TextButtonMenuDimension.parameters?.docs,source:{originalSource:`{
  render: TextButtonMenuDimensionStory,
  parameters: {
    docs: {
      source: {
        code: TextButtonMenuDimensionRaw
      }
    }
  },
  name: 'TextButtonMenu. Размеры и стили.'
}`,...TextButtonMenuDimension.parameters?.docs?.source}}},TextButtonMenuWithIcon.parameters={...TextButtonMenuWithIcon.parameters,docs:{...TextButtonMenuWithIcon.parameters?.docs,source:{originalSource:`{
  render: TextButtonMenuWithIconStory,
  parameters: {
    docs: {
      source: {
        code: TextButtonMenuWithIconRaw
      }
    }
  },
  name: 'TextButtonMenu. С иконкой.'
}`,...TextButtonMenuWithIcon.parameters?.docs?.source}}};let __namedExportsOrder=["TextButtonMenuPlayground","TextButtonMenuDimension","TextButtonMenuWithIcon"]},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-TextButtonMenu-stories-TextButtonMenu-stories.b38a3620.iframe.bundle.js.map