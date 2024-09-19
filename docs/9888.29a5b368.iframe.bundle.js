"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9888],{"./src/components/TabMenuComponent/containerElements/HorizontalAddTabButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>HorizontalAddTabButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/TabMenuComponent/constants.ts"),_src_components_IconPlacement__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/IconPlacement/index.tsx"),_src_components_TooltipHOC__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/TooltipHOC/index.tsx"),_admiral_ds_icons_build_service_PlusOutline_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/PlusOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  box-sizing: border-box;\n  padding: ","px;\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  &:focus-visible:not(:disabled) {\n    outline-offset: ","px;\n    border-radius: 0;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}var AddTabButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),function(p){return"l"===p.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.s9:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.lv},function(p){return"\n    width: ".concat("l"===p.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.Ou:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.HS,"px;\n    height: ").concat("l"===p.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.Ou:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.HS,"px;\n  ")}),StyledIconPlacement=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_IconPlacement__WEBPACK_IMPORTED_MODULE_4__._)(_templateObject1(),function(p){return"l"===p.dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.nS:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_3__.gz}),TooltipedIconPlacement=(0,_src_components_TooltipHOC__WEBPACK_IMPORTED_MODULE_5__.K)(StyledIconPlacement),HorizontalAddTabButton=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,props=_object_without_properties(_param,["dimension"]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AddTabButtonContainer,{$dimension:dimension,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TooltipedIconPlacement,_object_spread_props(_object_spread({},props),{dimension:dimension,highlightFocus:!1,renderContent:function(){return"Создать вкладку"},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_PlusOutline_svg__WEBPACK_IMPORTED_MODULE_1__.h,{})}))})};HorizontalAddTabButton.displayName="HorizontalAddTabButton";try{HorizontalAddTabButton.displayName="HorizontalAddTabButton",HorizontalAddTabButton.__docgenInfo={description:"",displayName:"HorizontalAddTabButton",props:{disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}},highlightFocus:{defaultValue:null,description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"l"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/containerElements/HorizontalAddTabButton.tsx#HorizontalAddTabButton"]={docgenInfo:HorizontalAddTabButton.__docgenInfo,name:"HorizontalAddTabButton",path:"src/components/TabMenuComponent/containerElements/HorizontalAddTabButton.tsx#HorizontalAddTabButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenuComponent/containerElements/HorizontalTabOverflowMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>HorizontalTabOverflowMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_OverflowMenu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/OverflowMenu/index.tsx"),_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TabMenuComponent/constants.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  box-sizing: border-box;\n  visibility: ",";\n  padding: ","px;\n  ","\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  &:focus-visible:not(:disabled) {\n    outline-offset: ","px;\n    border-radius: 0;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}var OverflowMenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject(),function(p){return p.$isHidden?"hidden":"visible"},function(p){return"l"===p.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.yj:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.FC},function(p){return"\n    width: ".concat("l"===p.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.kC:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.rV,"px;\n    height: ").concat("l"===p.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.kC:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.rV,"px;\n  ")}),StyledOverflowMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_src_components_OverflowMenu__WEBPACK_IMPORTED_MODULE_3__.o)(_templateObject1(),function(p){return"l"===p.dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.nS:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_2__.gz}),HorizontalTabOverflowMenu=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_isHidden=_param.isHidden,props=_object_without_properties(_param,["dimension","isHidden"]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OverflowMenuContainer,{$dimension:dimension,$isHidden:void 0!==_param_isHidden&&_param_isHidden,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledOverflowMenu,_object_spread_props(_object_spread({},props),{dimension:dimension}))})};HorizontalTabOverflowMenu.displayName="TabOverflowMenu";try{HorizontalTabOverflowMenu.displayName="TabOverflowMenu",HorizontalTabOverflowMenu.__docgenInfo={description:"",displayName:"TabOverflowMenu",props:{onChange:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.\nВзамен используйте onSelectItem\n\nКолбек на изменение выбранной опции",name:"onChange",required:!1,type:{name:"((id: string) => void)"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:"Возможность отключить подсветку выбранной опции\n(например, при множественном выборе, когда у каждой опции есть Checkbox)",name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},onOpen:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.\nВзамен используйте onVisibilityChange\n\nКолбек на открытие меню",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.\nВзамен используйте nVisibilityChange\n\nКолбек на закрытие меню",name:"onClose",required:!1,type:{name:"(() => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},isVertical:{defaultValue:null,description:"Ориентация компонента",name:"isVertical",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"l"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},isHidden:{defaultValue:{value:"false"},description:"",name:"isHidden",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/containerElements/HorizontalTabOverflowMenu.tsx#TabOverflowMenu"]={docgenInfo:TabOverflowMenu.__docgenInfo,name:"TabOverflowMenu",path:"src/components/TabMenuComponent/containerElements/HorizontalTabOverflowMenu.tsx#TabOverflowMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenuComponent/tabElements/TabCloseIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>TabCloseIconButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/TabMenuComponent/constants.ts"),_admiral_ds_icons_build_service_SmallCloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/SmallCloseOutline.svg"),_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/keyboardKey.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  position: relative;\n  padding: 0;\n  margin: 0;\n  width: ","px;\n  height: ","px;\n  box-sizing: border-box;\n  border: none;\n  background-color: transparent;\n  appearance: none;\n  flex: 0 0 auto;\n  overflow: visible;\n\n  cursor: pointer;\n  > * {\n    pointer-events: none;\n  }\n  &:hover {\n    & *[fill^='#'] {\n      fill: var(--admiral-color-Primary_Primary70, ",");\n    }\n  }\n  &:active {\n    & *[fill^='#'] {\n      fill: var(--admiral-color-Primary_Primary80, ",");\n    }\n  }\n\n  &:focus-visible {\n    border-radius: 0;\n    outline: var(--admiral-color-Primary_Primary60Main, ",") solid 2px;\n    outline-offset: -2px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject(),function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_4__.Fu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_4__.M8},function(param){return"m"===param.$dimension?_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_4__.Fu:_src_components_TabMenuComponent_constants__WEBPACK_IMPORTED_MODULE_4__.M8},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Primary/Primary 60 Main"]}),TabCloseIconButton=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,disabled=_param.disabled,onCloseIconButtonClick=_param.onCloseIconButtonClick,props=_object_without_properties(_param,["dimension","disabled","onCloseIconButtonClick"]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper,_object_spread_props(_object_spread({},props),{role:"button",tabIndex:0,ref:ref,$dimension:void 0===_param_dimension?"l":_param_dimension,$disabled:disabled,onClick:function(e){e.stopPropagation(),null==onCloseIconButtonClick||onCloseIconButtonClick()},onKeyDown:function(e){e.stopPropagation();var code=_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.getCode(e);code===_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Enter&&e.preventDefault(),(code===_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Enter||code===_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r[" "])&&(null==onCloseIconButtonClick||onCloseIconButtonClick())},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_SmallCloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,{})}))});TabCloseIconButton.displayName="TabCloseIconButton";try{TabCloseIconButton.displayName="TabCloseIconButton",TabCloseIconButton.__docgenInfo={description:"",displayName:"TabCloseIconButton",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Состояние disabled",name:"disabled",required:!1,type:{name:"boolean"}},onCloseIconButtonClick:{defaultValue:null,description:"Коллбэк для обработки закрытия вкладки",name:"onCloseIconButtonClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/tabElements/TabCloseIconButton.tsx#TabCloseIconButton"]={docgenInfo:TabCloseIconButton.__docgenInfo,name:"TabCloseIconButton",path:"src/components/TabMenuComponent/tabElements/TabCloseIconButton.tsx#TabCloseIconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TabMenuComponent/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y0:()=>getUnderlinePosition,ag:()=>getActiveTabWidth,qc:()=>getTabWidthMap});var getActiveTabWidth=function(tabWidthMap,selectedTabId){var _tabWidthMap_find;return(null===(_tabWidthMap_find=tabWidthMap.find(function(tab){return tab.tabId===selectedTabId}))||void 0===_tabWidthMap_find?void 0:_tabWidthMap_find.width)||0},getActiveTabLeft=function(tabWidthMap,selectedTabId){for(var left=0,i=0;tabWidthMap[i].tabId!==selectedTabId&&i<tabWidthMap.length;)left+=tabWidthMap[i].width,i++;return left},getUnderlinePosition=function(tabWidthMap,selectedTabId){if(!selectedTabId||!tabWidthMap||0===tabWidthMap.length)return{left:0,width:0};var width=getActiveTabWidth(tabWidthMap,selectedTabId);return{left:getActiveTabLeft(tabWidthMap,selectedTabId),width:width}},getTabWidthMap=function(tabsId,renderedTabs){var tabWidth=[];if(renderedTabs)for(var i=0;i<renderedTabs.length;i++){var width=renderedTabs[i].getBoundingClientRect().width;tabWidth.push({tabId:tabsId[i],width:width})}return tabWidth}},"./src/components/TooltipHOC/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipHoc});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tooltip/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function TooltipHoc(Component){var WrappedComponent=function(props){var forwardedRef=props.forwardedRef,renderContent=props.renderContent,container=props.container,withDelay=props.withDelay,tooltipRef=props.tooltipRef,tooltipPosition=props.tooltipPosition,wrappedCompProps=_object_without_properties(props,["forwardedRef","renderContent","container","withDelay","tooltipRef","tooltipPosition"]),emptyContent=!renderContent()&&0!==renderContent(),anchorElementRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_1__.useState(!1),2),visible=_React_useState[0],setVisible=_React_useState[1],_React_useState1=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_1__.useState(null),2),node=_React_useState1[0],setNode=_React_useState1[1],_React_useState2=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_1__.useState(),2),timer=_React_useState2[0],setTimer=_React_useState2[1];return react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function(){var show=function show(){setTimer(window.setTimeout(function(){return setVisible(!0)},withDelay?_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.w:0))},hide=function hide(){clearTimeout(timer),setVisible(!1)};if(node)return node.addEventListener("mouseenter",show),node.addEventListener("focus",show),node.addEventListener("mouseleave",hide),node.addEventListener("blur",hide),function(){timer&&clearTimeout(timer),node.removeEventListener("mouseenter",show),node.removeEventListener("focus",show),node.removeEventListener("mouseleave",hide),node.removeEventListener("blur",hide)}},[node,setTimer,setVisible,timer]),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_object_spread_props(_object_spread({},wrappedCompProps),{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__.d)(forwardedRef,anchorElementRef,setNode)})),visible&&!emptyContent&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.m,{targetElement:anchorElementRef.current,renderContent:renderContent,container:container,tooltipPosition:tooltipPosition,ref:tooltipRef})]})};return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(props,ref){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent,_object_spread({forwardedRef:ref},props))})}try{TooltipHoc.displayName="TooltipHoc",TooltipHoc.__docgenInfo={description:"",displayName:"TooltipHoc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipHOC/index.tsx#TooltipHoc"]={docgenInfo:TooltipHoc.__docgenInfo,name:"TooltipHoc",path:"src/components/TooltipHOC/index.tsx#TooltipHoc"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>checkOverflow});var checkOverflow=function(textContainer){return!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)}},"./src/components/common/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>debounce});function debounce(f,delay){var timer=setTimeout(function(){});return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout(function(){return f.apply(args)},delay)}}}}]);