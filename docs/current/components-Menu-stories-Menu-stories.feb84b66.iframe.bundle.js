"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[599],{"./src/components/Divider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  background: `,`;
  `,`;
  `,`;
`]);return _templateObject3=function _templateObject(){return data},data}var getBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var theme=param.theme,$appearance=param.$appearance;switch($appearance){case"subtle":return"var(--admiral-color-Neutral_Neutral10, ".concat(theme.color["Neutral/Neutral 10"],")");case"strong":return"var(--admiral-color-Neutral_Neutral40, ".concat(theme.color["Neutral/Neutral 40"],")");case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"staticWhite":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"default":return"var(--admiral-color-Neutral_Neutral20, ".concat(theme.color["Neutral/Neutral 20"],")");default:return $appearance}});function getThicknessSize(dimension){return"s"===dimension?"1px":"2px"}var getThickness=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $dimension=param.$dimension;return"horizontal"===param.$orientation?"height: ".concat(getThicknessSize($dimension)):"width: ".concat(getThicknessSize($dimension))}),getLength=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject2(),function(param){var $length=param.$length;return"horizontal"===param.$orientation?"width: ".concat($length):"height: ".concat($length)}),StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject3(),getBackground,getThickness,getLength),Divider=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,_param_appearance=_param.appearance,_param_orientation=_param.orientation,_param_length=_param.length,props=_object_without_properties(_param,["dimension","appearance","orientation","length"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledDiv,_object_spread_props(_object_spread({},props),{ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"default":_param_appearance,$orientation:void 0===_param_orientation?"horizontal":_param_orientation,$length:void 0===_param_length?"100%":_param_length}))});Divider.displayName="Divider";try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента, определяет толщину разделителя",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:{value:"default"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"Ориентация компонента, по умолчанию горизонтальная",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},length:{defaultValue:{value:"100%"},description:"Длина компонента",name:"length",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/index.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/Divider/index.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/MenuActionsPanel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getHighlightedFilteredOptions,t:()=>MenuActionsPanel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_getTextHighlightMeta__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/getTextHighlightMeta.ts"),_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_common_uid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/uid.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  padding: `,`;

  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  pointer-events: none;

  &&[data-disabled='true'] {
    background-color: var(--admiral-color-Special_ElevatedBG, `,`);
    color: var(--admiral-color-Neutral_Neutral50, `,`);
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}var MenuActionsPanelDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),function(p){return"s"===p.$dimension?"10px 12px":"12px 16px"},function(p){return p.$menuActionsPanelCssMixin}),MenuActionsPanel=function(_param){var dimension=_param.dimension,menuActionsPanelCssMixin=_param.menuActionsPanelCssMixin,props=_object_without_properties(_param,["dimension","menuActionsPanelCssMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuActionsPanelDiv,_object_spread_props(_object_spread({},props),{$dimension:dimension,$menuActionsPanelCssMixin:menuActionsPanelCssMixin}))},HighlightText=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]}),TextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2()),StyledMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D)(_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Special/Elevated BG"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 50"]});function getHighlightedFilteredOptions(options){var searchValue=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",emptyMessage=arguments.length>2?arguments[2]:void 0,dimension=arguments.length>3?arguments[3]:void 0,highlightFunction=arguments.length>4&&void 0!==arguments[4]?arguments[4]:_src_components_common_utils_getTextHighlightMeta__WEBPACK_IMPORTED_MODULE_4__.z,model=[];if(options.forEach(function(option){var _highlightFunction=highlightFunction(option.label,searchValue,"wholly"),shouldHighlight=_highlightFunction.shouldHighlight,parts=_highlightFunction.parts,chunks=_highlightFunction.chunks,itemValue=shouldHighlight?parts.map(function(part,i){return chunks.includes(part.toLowerCase())?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HighlightText,{children:part},i):part}):searchValue?null:option.label;itemValue&&model.push({id:option.id,render:function(options){return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D,_object_spread_props(_object_spread({dimension:dimension},options),{key:option.id}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextWrapper,{children:itemValue}))}})}),0===model.length){var id=(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_5__.L)();model.push({id:id,render:function(options){return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(StyledMenuItem,_object_spread_props(_object_spread({dimension:dimension},options),{key:id}),emptyMessage)},disabled:!0})}return model}try{MenuActionsPanel.displayName="MenuActionsPanel",MenuActionsPanel.__docgenInfo={description:"",displayName:"MenuActionsPanel",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},menuActionsPanelCssMixin:{defaultValue:null,description:"",name:"menuActionsPanelCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuActionsPanel.tsx#MenuActionsPanel"]={docgenInfo:MenuActionsPanel.__docgenInfo,name:"MenuActionsPanel",path:"src/components/Menu/MenuActionsPanel.tsx#MenuActionsPanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/stories/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardGroupsExample:()=>CardGroupsExample,CheckboxMenuExample:()=>CheckboxMenuExample,IconsExample:()=>IconsExample,LargeNumberOfItemsExample:()=>LargeNumberOfItemsExample,MenuActionsAddUserValueExample:()=>MenuActionsAddUserValueExample,MenuActionsTwoButtonsExample:()=>MenuActionsTwoButtonsExample,MenuCheckboxGroupExample:()=>MenuCheckboxGroupExample,MenuWithCustomItemsExample:()=>MenuWithCustomItemsExample,MenuWithLockCycleScrollExample:()=>MenuWithLockCycleScrollExample,MenuWithPreselectExample:()=>MenuWithPreselectExample,MenuWithSeparatorExample:()=>MenuWithSeparatorExample,MultiLevelExample:()=>MultiLevelExample,MultiLineMenuExample:()=>MultiLineMenuExample,RadioButtonMenuExample:()=>RadioButtonMenuExample,SimpleExample:()=>SimpleExample,TooltipMenuExample:()=>TooltipMenuExample,VirtualScrollExample:()=>VirtualScrollExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Menu_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Menu=__webpack_require__("./src/components/Menu/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),T=__webpack_require__("./src/components/T/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return _templateObject=function _templateObject(){return data},data}var ITEMS=Array.from({length:200}).map(function(_option,index){return{label:"".concat(index,"0000"),id:String(index)}}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuLargeNumberOfItemsTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return ITEMS.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}}})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента."}),(0,jsx_runtime.jsx)(Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,_object_spread_props(_object_spread({},props),{defaultIsActive:!1,model:model}))})]})};try{MenuLargeNumberOfItemsTemplate.displayName="MenuLargeNumberOfItemsTemplate",MenuLargeNumberOfItemsTemplate.__docgenInfo={description:"",displayName:"MenuLargeNumberOfItemsTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuLargeNumberOfItems.template.tsx#MenuLargeNumberOfItemsTemplate"]={docgenInfo:MenuLargeNumberOfItemsTemplate.__docgenInfo,name:"MenuLargeNumberOfItemsTemplate",path:"src/components/Menu/stories/MenuLargeNumberOfItems.template.tsx#MenuLargeNumberOfItemsTemplate"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function MenuWithLockCycleScroll_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuWithLockCycleScroll_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuWithLockCycleScroll_template_define_property(target,key,source[key])})}return target}function MenuWithLockCycleScroll_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuWithLockCycleScroll_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuWithLockCycleScroll_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuWithLockCycleScroll_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuWithLockCycleScroll_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuWithLockCycleScroll_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuWithLockCycleScroll_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function MenuWithLockCycleScroll_template_templateObject(){var data=MenuWithLockCycleScroll_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuWithLockCycleScroll_template_templateObject=function _templateObject(){return data},data}var ITEMS_WITH_DISABLED_ITEMS=function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}([{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}]);ITEMS_WITH_DISABLED_ITEMS[0].disabled=!0,ITEMS_WITH_DISABLED_ITEMS[6].disabled=!0;var MenuWithLockCycleScroll_template_Wrapper=styled_components_browser_esm.Ay.div(MenuWithLockCycleScroll_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuWithLockCycleScrollTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuWithLockCycleScroll_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return ITEMS_WITH_DISABLED_ITEMS.map(function(item){return{id:item.id,disabled:item.disabled,render:function(options){return(0,react.createElement)(MenuItem.D,MenuWithLockCycleScroll_template_object_spread_props(MenuWithLockCycleScroll_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}}})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove."}),(0,jsx_runtime.jsx)(MenuWithLockCycleScroll_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuWithLockCycleScroll_template_object_spread_props(MenuWithLockCycleScroll_template_object_spread({},props),{defaultIsActive:!1,model:model,onForwardCycleApprove:function(){return!1},onBackwardCycleApprove:function(){return!1}}))})]})};try{MenuWithLockCycleScrollTemplate.displayName="MenuWithLockCycleScrollTemplate",MenuWithLockCycleScrollTemplate.__docgenInfo={description:"",displayName:"MenuWithLockCycleScrollTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuWithLockCycleScroll.template.tsx#MenuWithLockCycleScrollTemplate"]={docgenInfo:MenuWithLockCycleScrollTemplate.__docgenInfo,name:"MenuWithLockCycleScrollTemplate",path:"src/components/Menu/stories/MenuWithLockCycleScroll.template.tsx#MenuWithLockCycleScrollTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuVirtualScroll_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuVirtualScroll_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuVirtualScroll_template_define_property(target,key,source[key])})}return target}function MenuVirtualScroll_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuVirtualScroll_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuVirtualScroll_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuVirtualScroll_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuVirtualScroll_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuVirtualScroll_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuVirtualScroll_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuVirtualScroll_template_templateObject(){var data=MenuVirtualScroll_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuVirtualScroll_template_templateObject=function _templateObject(){return data},data}var MenuVirtualScroll_template_createItems=function(length){var level=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,title=level>1?"SubItem":"Item";return Array.from({length:length}).map(function(_option,index){return{label:"".concat(title," ").concat(index,"0000"),id:"".concat(level,"-").concat(index)}})},MenuVirtualScroll_template_ITEMS=MenuVirtualScroll_template_createItems(40);MenuVirtualScroll_template_ITEMS.forEach(function(item){Math.random()>.5&&(item.subItems=MenuVirtualScroll_template_createItems(Math.round(40*Math.random()),2))});var MenuVirtualScroll_template_Wrapper=styled_components_browser_esm.Ay.div(MenuVirtualScroll_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuVirtualScrollTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuVirtualScroll_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return MenuVirtualScroll_template_ITEMS.map(function(item){var modelItem={id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuVirtualScroll_template_object_spread_props(MenuVirtualScroll_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}};return item.subItems&&(modelItem.subItems=item.subItems.map(function(subItem){return{id:subItem.id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuVirtualScroll_template_object_spread_props(MenuVirtualScroll_template_object_spread({dimension:props.dimension},options),{key:subItem.id}),subItem.label)}}})),modelItem})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:'Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, содержаний размер 1 элемента меню, для расчета максимальной высоты контейнера меню. Или установить значение "auto". В этом случае максимальная высота будет рассчитана исходя из свойства "dimension".'}),(0,jsx_runtime.jsx)(MenuVirtualScroll_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuVirtualScroll_template_object_spread_props(MenuVirtualScroll_template_object_spread({},props),{defaultIsActive:!1,virtualScroll:{itemHeight:"auto"},model:model}))})]})};try{MenuVirtualScrollTemplate.displayName="MenuVirtualScrollTemplate",MenuVirtualScrollTemplate.__docgenInfo={description:"",displayName:"MenuVirtualScrollTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuVirtualScroll.template.tsx#MenuVirtualScrollTemplate"]={docgenInfo:MenuVirtualScrollTemplate.__docgenInfo,name:"MenuVirtualScrollTemplate",path:"src/components/Menu/stories/MenuVirtualScroll.template.tsx#MenuVirtualScrollTemplate"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./src/components/Typography/typography.ts"),CategoryMenuItem=__webpack_require__("./src/components/Menu/CategoryMenuItem.tsx"),CardSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/finance/CardSolid.svg");function MenuCardGroups_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuCardGroups_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuCardGroups_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuCardGroups_template_define_property(target,key,source[key])})}return target}function MenuCardGroups_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuCardGroups_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuCardGroups_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||MenuCardGroups_template_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function MenuCardGroups_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuCardGroups_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuCardGroups_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuCardGroups_template_array_like_to_array(o,minLen)}}function MenuCardGroups_template_templateObject(){var data=MenuCardGroups_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuCardGroups_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=MenuCardGroups_template_tagged_template_literal([`
  padding: 0;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=MenuCardGroups_template_tagged_template_literal([`
  display: flex;
  width: 100%;
  padding: 6px 8px;
  margin: 0 8px 0 24px;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, `,`);
  flex-direction: column;
  align-items: flex-start;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=MenuCardGroups_template_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  pointer-events: none;
`]);return _templateObject3=function _templateObject(){return data},data}var category=[{name:"Категория 1",id:"1",content:[{id:"2",label:"Номер Карты /****45",value:1},{id:"3",label:"Номер Карты /****75",value:2},{id:"4",label:"Номер Карты /****22",value:3},{id:"5",label:"Номер Карты /****33",value:4}]},{name:"Категория 2",id:"9",content:[{id:"10",label:"Номер Карты /****21",value:5},{id:"11",label:"Номер Карты /****35",value:6},{id:"12",label:"Номер Карты /****39",value:7},{id:"13",label:"Номер Карты /****41",value:8}]}],MenuCardGroups_template_Wrapper=styled_components_browser_esm.Ay.div(MenuCardGroups_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),StyledMenuItem=(0,styled_components_browser_esm.Ay)(MenuItem.D)(_templateObject1()),InnerContainer=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 20"]}),StyledAdditionalText=styled_components_browser_esm.Ay.div(_templateObject3(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 50"]}),MenuCardGroupsTemplate=function(props){var model=(0,react.useMemo)(function(){return category.reduce(function(acc,item){return acc.push({id:item.id,render:function(options){return(0,jsx_runtime.jsx)(CategoryMenuItem.h,MenuCardGroups_template_object_spread_props(MenuCardGroups_template_object_spread({dimension:props.dimension},options),{children:item.name}),item.id)}}),acc.concat(item.content.map(function(subitem){return{id:subitem.id,render:function(options){return(0,jsx_runtime.jsx)(StyledMenuItem,MenuCardGroups_template_object_spread_props(MenuCardGroups_template_object_spread({dimension:props.dimension},options),{children:(0,jsx_runtime.jsxs)(InnerContainer,{children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[subitem.label," ",(0,jsx_runtime.jsx)(CardSolid.h,{width:24,height:24})]}),(0,jsx_runtime.jsx)(StyledAdditionalText,{children:"Дополнительный текст"})]})}),subitem.id)}}}))},[])},[props.dimension]),_useState=_sliced_to_array((0,react.useState)(""),2),selected=_useState[0],setSelected=_useState[1],_useState1=_sliced_to_array((0,react.useState)(""),2),active=_useState1[0],setActive=_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример построения меню с группированием пунктов."}),(0,jsx_runtime.jsx)(MenuCardGroups_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuCardGroups_template_object_spread_props(MenuCardGroups_template_object_spread({},props),{defaultIsActive:!1,model:model,selected:selected,onSelectItem:setSelected,active:active,onActivateItem:setActive}))})]})};try{MenuCardGroupsTemplate.displayName="MenuCardGroupsTemplate",MenuCardGroupsTemplate.__docgenInfo={description:"",displayName:"MenuCardGroupsTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuCardGroups.template.tsx#MenuCardGroupsTemplate"]={docgenInfo:MenuCardGroupsTemplate.__docgenInfo,name:"MenuCardGroupsTemplate",path:"src/components/Menu/stories/MenuCardGroups.template.tsx#MenuCardGroupsTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuSimple_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuSimple_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuSimple_template_define_property(target,key,source[key])})}return target}function MenuSimple_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuSimple_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuSimple_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuSimple_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuSimple_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuSimple_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuSimple_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuSimple_template_templateObject(){var data=MenuSimple_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuSimple_template_templateObject=function _templateObject(){return data},data}function MenuSimple_template_templateObject1(){var data=MenuSimple_template_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
`]);return MenuSimple_template_templateObject1=function _templateObject(){return data},data}var MenuSimple_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}],MenuSimple_template_Wrapper=styled_components_browser_esm.Ay.div(MenuSimple_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),Container=styled_components_browser_esm.Ay.div(MenuSimple_template_templateObject1()),MenuSimpleTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuSimple_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return MenuSimple_template_STORY_ITEMS.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuSimple_template_object_spread_props(MenuSimple_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}}})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Базовый пример построения Menu."}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(MenuSimple_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuSimple_template_object_spread_props(MenuSimple_template_object_spread({},props),{defaultIsActive:!1,model:model}))}),(0,jsx_runtime.jsx)(MenuSimple_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuSimple_template_object_spread_props(MenuSimple_template_object_spread({},props),{defaultIsActive:!1,model:model}))})]})]})};try{MenuSimpleTemplate.displayName="MenuSimpleTemplate",MenuSimpleTemplate.__docgenInfo={description:"",displayName:"MenuSimpleTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuSimple.template.tsx#MenuSimpleTemplate"]={docgenInfo:MenuSimpleTemplate.__docgenInfo,name:"MenuSimpleTemplate",path:"src/components/Menu/stories/MenuSimple.template.tsx#MenuSimpleTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuMultiLevel_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuMultiLevel_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuMultiLevel_template_define_property(target,key,source[key])})}return target}function MenuMultiLevel_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuMultiLevel_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuMultiLevel_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuMultiLevel_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuMultiLevel_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuMultiLevel_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuMultiLevel_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuMultiLevel_template_templateObject(){var data=MenuMultiLevel_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuMultiLevel_template_templateObject=function _templateObject(){return data},data}function MenuMultiLevel_template_templateObject1(){var data=MenuMultiLevel_template_tagged_template_literal([`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`]);return MenuMultiLevel_template_templateObject1=function _templateObject(){return data},data}var MenuMultiLevel_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1,children:[{id:"1-1",label:"SubOption with long text 1-1",value:11},{id:"1-2",label:"SubOption 1-2",value:12},{id:"1-3",label:"SubOption 1-3",value:13}]},{id:"2",label:"Option two",value:2,children:[{id:"2-1",label:"SubOption with long text 2-1",value:21},{id:"2-2",label:"SubOption 2-2",value:22},{id:"2-3",label:"SubOption 2-3",value:23}]},{id:"3",label:"Option three",value:3},{id:"4",label:"four",value:4,children:[{id:"4-1",label:"SubOption with long text 4-1",value:41},{id:"4-2",label:"SubOption 4-2",value:42},{id:"4-3",label:"SubOption 4-3",value:43,children:[{id:"4-3-1",label:"SubOption 4-3-1",value:431},{id:"4-3-2",label:"SubOption 4-3-2",value:432,children:[{id:"5-1-1",label:"SubOption 5-1-1",value:511},{id:"5-1-2",label:"SubOption 5-1-2",value:512}]},{id:"4-3-3",label:"SubOption 4-3-3",value:433},{id:"4-3-4",label:"SubOption 4-3-4",value:434},{id:"4-3-5",label:"SubOption 4-3-5",value:435},{id:"4-3-6",label:"SubOption 4-3-6",value:436},{id:"4-3-7",label:"SubOption 4-3-7",value:437},{id:"4-3-8",label:"SubOption 4-3-8",value:438},{id:"4-3-9",label:"SubOption 4-3-9",value:439}]}]},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6},{id:"8",label:"Option eight",value:8},{id:"9",label:"Option nine",value:9},{id:"10",label:"Option ten",value:10},{id:"11",label:"Option eleven",value:11}],MenuMultiLevel_template_Wrapper=styled_components_browser_esm.Ay.div(MenuMultiLevel_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuMultiLevel_template_Container=styled_components_browser_esm.Ay.div(MenuMultiLevel_template_templateObject1()),MenuMultiLevelTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuMultiLevel_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),convertStoryItem=function(storyItem){var _storyItem_children,item={id:storyItem.id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuMultiLevel_template_object_spread_props(MenuMultiLevel_template_object_spread({dimension:props.dimension},options),{key:storyItem.id}),storyItem.label)}};return storyItem.children&&(item.subItems=null==(_storyItem_children=storyItem.children)?void 0:_storyItem_children.map(function(child){return convertStoryItem(child)})),item},model=react.useMemo(function(){return MenuMultiLevel_template_STORY_ITEMS.map(function(item){return convertStoryItem(item)})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Многоуровневая структура меню задается в модели данных, через указание дочерних элементов в свойстве subItems. Ограничения по количеству уровней вложенности нет, но не следует забывать о комфорте пользователей."}),(0,jsx_runtime.jsxs)(MenuMultiLevel_template_Container,{children:[(0,jsx_runtime.jsx)(MenuMultiLevel_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuMultiLevel_template_object_spread_props(MenuMultiLevel_template_object_spread({tabIndex:1},props),{defaultIsActive:!1,model:model}))}),(0,jsx_runtime.jsx)(MenuMultiLevel_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuMultiLevel_template_object_spread_props(MenuMultiLevel_template_object_spread({tabIndex:2,defaultIsActive:!1,subMenuRenderDirection:"left"},props),{model:model}))})]})]})};try{MenuMultiLevelTemplate.displayName="MenuMultiLevelTemplate",MenuMultiLevelTemplate.__docgenInfo={description:"",displayName:"MenuMultiLevelTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuMultiLevel.template.tsx#MenuMultiLevelTemplate"]={docgenInfo:MenuMultiLevelTemplate.__docgenInfo,name:"MenuMultiLevelTemplate",path:"src/components/Menu/stories/MenuMultiLevel.template.tsx#MenuMultiLevelTemplate"})}catch(__react_docgen_typescript_loader_error){}var VacationSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/VacationSolid.svg"),AlertSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/AlertSolid.svg"),DiamondSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/DiamondSolid.svg"),TrophySolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/TrophySolid.svg"),BurnSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/BurnSolid.svg"),BugSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/BugSolid.svg"),CompareSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/CompareSolid.svg"),ElderlySolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/ElderlySolid.svg"),MartiniOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/MartiniOutline.svg"),PostOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/PostOutline.svg"),ShoppingBagOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/ShoppingBagOutline.svg"),TrophyOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/category/TrophyOutline.svg"),AgreedSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/AgreedSolid.svg");function MenuIconsAndAdditionalText_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuIconsAndAdditionalText_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuIconsAndAdditionalText_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuIconsAndAdditionalText_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuIconsAndAdditionalText_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuIconsAndAdditionalText_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuIconsAndAdditionalText_template_define_property(target,key,source[key])})}return target}function MenuIconsAndAdditionalText_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuIconsAndAdditionalText_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuIconsAndAdditionalText_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuIconsAndAdditionalText_template_sliced_to_array(arr,i){return MenuIconsAndAdditionalText_template_array_with_holes(arr)||MenuIconsAndAdditionalText_template_iterable_to_array_limit(arr,i)||MenuIconsAndAdditionalText_template_unsupported_iterable_to_array(arr,i)||MenuIconsAndAdditionalText_template_non_iterable_rest()}function MenuIconsAndAdditionalText_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuIconsAndAdditionalText_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuIconsAndAdditionalText_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuIconsAndAdditionalText_template_array_like_to_array(o,minLen)}}function MenuIconsAndAdditionalText_template_templateObject(){var data=MenuIconsAndAdditionalText_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  width: fit-content;
  margin: 10px;
  display: inline-block;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuIconsAndAdditionalText_template_templateObject=function _templateObject(){return data},data}function MenuIconsAndAdditionalText_template_templateObject1(){var data=MenuIconsAndAdditionalText_template_tagged_template_literal([`
  `,`
  padding: 6px 16px;
  align-items: flex-start;
  height: `,`;
  width: 320px;
  box-sizing: border-box;
`]);return MenuIconsAndAdditionalText_template_templateObject1=function _templateObject(){return data},data}function MenuIconsAndAdditionalText_template_templateObject2(){var data=MenuIconsAndAdditionalText_template_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  pointer-events: none;
`]);return MenuIconsAndAdditionalText_template_templateObject2=function _templateObject(){return data},data}function MenuIconsAndAdditionalText_template_templateObject3(){var data=MenuIconsAndAdditionalText_template_tagged_template_literal([`
  width: 24px;
  height: 24px;
`]);return MenuIconsAndAdditionalText_template_templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=MenuIconsAndAdditionalText_template_tagged_template_literal([`
  position: absolute;
  top: 4px;
  left: 16px;
  `,`
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=MenuIconsAndAdditionalText_template_tagged_template_literal([`
  position: absolute;
  top: 4px;
  right: 16px;
  `,`
`]);return _templateObject5=function _templateObject(){return data},data}var items=[{id:"1",label:"Option one",value:1,iconBefore:(0,jsx_runtime.jsx)(TrophySolid.h,{}),iconAfter:(0,jsx_runtime.jsx)(BurnSolid.h,{})},{id:"2",label:"Option two",value:2,iconBefore:(0,jsx_runtime.jsx)(VacationSolid.h,{}),iconAfter:(0,jsx_runtime.jsx)(AlertSolid.h,{})},{id:"3",label:"Option three",value:3,iconBefore:(0,jsx_runtime.jsx)(DiamondSolid.h,{}),iconAfter:(0,jsx_runtime.jsx)(BugSolid.h,{})},{id:"4",label:"Option four",value:4,iconBefore:(0,jsx_runtime.jsx)(TrophyOutline.h,{}),iconAfter:(0,jsx_runtime.jsx)(AgreedSolid.h,{})},{id:"5",label:"Option five",value:5,iconBefore:(0,jsx_runtime.jsx)(ShoppingBagOutline.h,{}),iconAfter:(0,jsx_runtime.jsx)(VacationSolid.h,{})},{id:"6",label:"Option six",value:7,iconBefore:(0,jsx_runtime.jsx)(ElderlySolid.h,{}),iconAfter:(0,jsx_runtime.jsx)(PostOutline.h,{})},{id:"7",label:"Option seven",value:6,iconBefore:(0,jsx_runtime.jsx)(MartiniOutline.h,{}),iconAfter:(0,jsx_runtime.jsx)(CompareSolid.h,{})}],MenuIconsAndAdditionalText_template_Wrapper=styled_components_browser_esm.Ay.div(MenuIconsAndAdditionalText_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuIconsAndAdditionalText_template_StyledMenuItem=(0,styled_components_browser_esm.Ay)(MenuItem.D)(MenuIconsAndAdditionalText_template_templateObject1(),typography.Il["Body/Body 1 Short"],(0,Menu.L)("l")),MenuIconsAndAdditionalText_template_StyledAdditionalText=styled_components_browser_esm.Ay.div(MenuIconsAndAdditionalText_template_templateObject2(),typography.Il["Caption/Caption 1"],function(p){return p.theme.color["Neutral/Neutral 50"]}),iconSize=(0,styled_components_browser_esm.AH)(MenuIconsAndAdditionalText_template_templateObject3()),IconBefore=styled_components_browser_esm.Ay.div(_templateObject4(),iconSize),IconAfter=styled_components_browser_esm.Ay.div(_templateObject5(),iconSize),MenuIconsAndAdditionalTextTemplate=function(props){var modelBase=items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuIconsAndAdditionalText_template_StyledMenuItem,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},options),{key:item.id,dimension:"l"}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[item.label,(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_StyledAdditionalText,{children:"Комментарий"})]}))}}}),modelIconBefore=items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuIconsAndAdditionalText_template_StyledMenuItem,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},options),{key:item.id,dimension:"l",children:[(0,jsx_runtime.jsx)(IconBefore,{children:item.iconBefore}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"32px"},children:[item.label,(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_StyledAdditionalText,{children:"Комментарий"})]})]}))}}}),modelIconAfter=items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuIconsAndAdditionalText_template_StyledMenuItem,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},options),{key:item.id,dimension:"l",children:[(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[item.label,(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_StyledAdditionalText,{children:"Комментарий"})]}),(0,jsx_runtime.jsx)(IconAfter,{children:item.iconAfter})]}))}}}),modelTwoIcons=items.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuIconsAndAdditionalText_template_StyledMenuItem,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},options),{key:item.id,dimension:"l",children:[(0,jsx_runtime.jsx)(IconBefore,{children:item.iconBefore}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginLeft:"32px"},children:[item.label,(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_StyledAdditionalText,{children:"Комментарий"})]}),(0,jsx_runtime.jsx)(IconAfter,{children:item.iconAfter})]}))}}}),_React_useState=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),selected1=_React_useState[0],setSelected1=_React_useState[1],_React_useState1=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),selected2=_React_useState1[0],setSelected2=_React_useState1[1],_React_useState2=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),selected3=_React_useState2[0],setSelected3=_React_useState2[1],_React_useState3=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),selected4=_React_useState3[0],setSelected4=_React_useState3[1],_React_useState4=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),active1=_React_useState4[0],setActive1=_React_useState4[1],_React_useState5=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),active2=_React_useState5[0],setActive2=_React_useState5[1],_React_useState6=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),active3=_React_useState6[0],setActive3=_React_useState6[1],_React_useState7=MenuIconsAndAdditionalText_template_sliced_to_array(react.useState(""),2),active4=_React_useState7[0],setActive4=_React_useState7[1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример меню с иконками и дополнительным текстом."}),(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_Wrapper,{children:(0,jsx_runtime.jsx)(Menu.W,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},props),{defaultIsActive:!1,dimension:"l",model:modelBase,selected:selected1,onSelectItem:setSelected1,active:active1,onActivateItem:setActive1}))}),(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_Wrapper,{children:(0,jsx_runtime.jsx)(Menu.W,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},props),{defaultIsActive:!1,dimension:"l",model:modelTwoIcons,selected:selected2,onSelectItem:setSelected2,active:active2,onActivateItem:setActive2}))}),(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_Wrapper,{children:(0,jsx_runtime.jsx)(Menu.W,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},props),{defaultIsActive:!1,dimension:"l",model:modelIconBefore,selected:selected3,onSelectItem:setSelected3,active:active3,onActivateItem:setActive3}))}),(0,jsx_runtime.jsx)(MenuIconsAndAdditionalText_template_Wrapper,{children:(0,jsx_runtime.jsx)(Menu.W,MenuIconsAndAdditionalText_template_object_spread_props(MenuIconsAndAdditionalText_template_object_spread({},props),{defaultIsActive:!1,dimension:"l",model:modelIconAfter,selected:selected4,onSelectItem:setSelected4,active:active4,onActivateItem:setActive4}))})]})};try{MenuIconsAndAdditionalTextTemplate.displayName="MenuIconsAndAdditionalTextTemplate",MenuIconsAndAdditionalTextTemplate.__docgenInfo={description:"",displayName:"MenuIconsAndAdditionalTextTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuIconsAndAdditionalText.template.tsx#MenuIconsAndAdditionalTextTemplate"]={docgenInfo:MenuIconsAndAdditionalTextTemplate.__docgenInfo,name:"MenuIconsAndAdditionalTextTemplate",path:"src/components/Menu/stories/MenuIconsAndAdditionalText.template.tsx#MenuIconsAndAdditionalTextTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuItemWithCheckbox=__webpack_require__("./src/components/Menu/MenuItemWithCheckbox.tsx");function MenuCheckbox_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuCheckbox_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuCheckbox_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuCheckbox_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuCheckbox_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuCheckbox_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuCheckbox_template_define_property(target,key,source[key])})}return target}function MenuCheckbox_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuCheckbox_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuCheckbox_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuCheckbox_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuCheckbox_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuCheckbox_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuCheckbox_template_sliced_to_array(arr,i){return MenuCheckbox_template_array_with_holes(arr)||MenuCheckbox_template_iterable_to_array_limit(arr,i)||MenuCheckbox_template_unsupported_iterable_to_array(arr,i)||MenuCheckbox_template_non_iterable_rest()}function MenuCheckbox_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuCheckbox_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuCheckbox_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuCheckbox_template_array_like_to_array(o,minLen)}}function MenuCheckbox_template_templateObject(){var data=MenuCheckbox_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuCheckbox_template_templateObject=function _templateObject(){return data},data}var storyItems=[{id:"1",label:"Option one",disabled:!0},{id:"2",label:"Option two"},{id:"3",label:"Option three",readOnly:!0},{id:"4",label:"Option four"},{id:"5",label:"Option five"},{id:"6",label:"Option six"},{id:"7",label:"Option seven"}],MenuCheckbox_template_Wrapper=styled_components_browser_esm.Ay.div(MenuCheckbox_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuCheckboxTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuCheckbox_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=MenuCheckbox_template_sliced_to_array(react.useState({}),2),checkedOptions=_React_useState[0],setCheckedOptions=_React_useState[1],_React_useState1=MenuCheckbox_template_sliced_to_array(react.useState(),2),active=_React_useState1[0],setActive=_React_useState1[1],model=react.useMemo(function(){return storyItems.map(function(_param){var id=_param.id,label=_param.label;return MenuCheckbox_template_object_spread_props(MenuCheckbox_template_object_spread({id:id},MenuCheckbox_template_object_without_properties(_param,["id","label"])),{render:function(options){return(0,react.createElement)(MenuItemWithCheckbox.I,MenuCheckbox_template_object_spread_props(MenuCheckbox_template_object_spread({checked:checkedOptions[id],dimension:props.dimension},options),{key:id}),label)}})})},[props.dimension,checkedOptions]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример меню с пунктами, содержащими Checkbox."}),(0,jsx_runtime.jsx)(MenuCheckbox_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuCheckbox_template_object_spread_props(MenuCheckbox_template_object_spread({},props),{active:active,onActivateItem:setActive,defaultIsActive:!1,preselectedModeActive:!1,model:model,onSelectItem:function(id){console.log("Option ".concat(id," clicked")),setCheckedOptions(function(cheked){return cheked[id]=!cheked[id],MenuCheckbox_template_object_spread({},cheked)})},disableSelectedOptionHighlight:!0}))})]})};try{MenuCheckboxTemplate.displayName="MenuCheckboxTemplate",MenuCheckboxTemplate.__docgenInfo={description:"",displayName:"MenuCheckboxTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuCheckbox.template.tsx#MenuCheckboxTemplate"]={docgenInfo:MenuCheckboxTemplate.__docgenInfo,name:"MenuCheckboxTemplate",path:"src/components/Menu/stories/MenuCheckbox.template.tsx#MenuCheckboxTemplate"})}catch(__react_docgen_typescript_loader_error){}var RadioButton=__webpack_require__("./src/components/RadioButton/index.tsx");function MenuRadioButton_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuRadioButton_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuRadioButton_template_define_property(target,key,source[key])})}return target}function MenuRadioButton_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuRadioButton_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuRadioButton_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuRadioButton_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuRadioButton_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuRadioButton_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuRadioButton_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuRadioButton_template_templateObject(){var data=MenuRadioButton_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuRadioButton_template_templateObject=function _templateObject(){return data},data}var MenuRadioButton_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:6},{id:"7",label:"Option seven",value:7}],MenuRadioButton_template_Wrapper=styled_components_browser_esm.Ay.div(MenuRadioButton_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuRadioButtonTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuRadioButton_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return MenuRadioButton_template_STORY_ITEMS.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuRadioButton_template_object_spread_props(MenuRadioButton_template_object_spread({dimension:props.dimension},options),{key:item.id}),(0,jsx_runtime.jsx)(RadioButton.a,{dimension:"s"!==props.dimension?"m":props.dimension,name:"menuListOption",children:item.label},item.id))}}})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример меню с пунктами, содержащими RadioButton."}),(0,jsx_runtime.jsx)(MenuRadioButton_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuRadioButton_template_object_spread_props(MenuRadioButton_template_object_spread({},props),{defaultIsActive:!1,model:model}))})]})};try{MenuRadioButtonTemplate.displayName="MenuRadioButtonTemplate",MenuRadioButtonTemplate.__docgenInfo={description:"",displayName:"MenuRadioButtonTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuRadioButton.template.tsx#MenuRadioButtonTemplate"]={docgenInfo:MenuRadioButtonTemplate.__docgenInfo,name:"MenuRadioButtonTemplate",path:"src/components/Menu/stories/MenuRadioButton.template.tsx#MenuRadioButtonTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuWithCustomItems_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuWithCustomItems_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuWithCustomItems_template_define_property(target,key,source[key])})}return target}function MenuWithCustomItems_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuWithCustomItems_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuWithCustomItems_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuWithCustomItems_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuWithCustomItems_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuWithCustomItems_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuWithCustomItems_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuWithCustomItems_template_templateObject(){var data=MenuWithCustomItems_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuWithCustomItems_template_templateObject=function _templateObject(){return data},data}function MenuWithCustomItems_template_templateObject1(){var data=MenuWithCustomItems_template_tagged_template_literal([`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: wrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  padding: `,`;
  `,`

  background: `,`;

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: `,`;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }

  &&[data-hovered='true'] {
    background-color: var(--admiral-color-Opacity_Hover, `,`);
    color: `,`;
  }

  color: `,`;
`]);return MenuWithCustomItems_template_templateObject1=function _templateObject(){return data},data}var MenuWithCustomItems_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}],MenuWithCustomItems_template_Wrapper=styled_components_browser_esm.Ay.div(MenuWithCustomItems_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MyItem=styled_components_browser_esm.Ay.div(MenuWithCustomItems_template_templateObject1(),function(param){switch(param.$dimension){case"m":return"8px 16px";case"s":return"6px 12px";default:return"12px 16px"}},function(param){return"s"===param.$dimension?typography.Il["Body/Body 2 Long"]:typography.Il["Body/Body 1 Long"]},function(param){var theme=param.theme;return param.selected?"var(--admiral-color-Opacity_Focus, ".concat(theme.color["Opacity/Focus"],")"):"var(--admiral-color-Special_ElevatedBG, ".concat(theme.color["Special/Elevated BG"],")")},function(param){var theme=param.theme;return param.selected?"var(--admiral-color-Opacity_Focus, ".concat(theme.color["Opacity/Focus"],")"):"var(--admiral-color-Special_ElevatedBG, ".concat(theme.color["Special/Elevated BG"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Opacity/Hover"]},function(param){var theme=param.theme;return param.$success?"var(--admiral-color-Success_Success70, ".concat(theme.color["Success/Success 70"],")"):"var(--admiral-color-Magenta_Magenta60Main, ".concat(theme.color["Magenta/Magenta 60 Main"],")")},function(param){var theme=param.theme;return param.$success?"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")"):"var(--admiral-color-Purple_Purple60Main, ".concat(theme.color["Purple/Purple 60 Main"],")")}),MyMenuItem=function(_param){var text=_param.text,onHover=_param.onHover,onClick=_param.onClick,disabled=_param.disabled,hovered=_param.hovered,_param_selected=_param.selected,_param_success=_param.success,dimension=_param.dimension,props=(_param.onLeave,_param.hasSubmenu,MenuWithCustomItems_template_object_without_properties(_param,["text","onHover","onClick","disabled","hovered","selected","success","dimension","onLeave","hasSubmenu"]));return(0,jsx_runtime.jsx)(MyItem,MenuWithCustomItems_template_object_spread_props(MenuWithCustomItems_template_object_spread({selected:void 0!==_param_selected&&_param_selected,"data-disabled":disabled,"data-hovered":hovered,$success:void 0!==_param_success&&_param_success,$dimension:dimension,onMouseMove:function(e){null==onHover||onHover(e)},onClick:function(e){disabled||null==onClick||onClick(e)}},props),{children:text}))},MenuWithCustomItemsTemplate=function(props){var model=(0,react.useMemo)(function(){return MenuWithCustomItems_template_STORY_ITEMS.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MyMenuItem,MenuWithCustomItems_template_object_spread_props(MenuWithCustomItems_template_object_spread({success:"3"===item.id},options),{key:item.id,text:item.label}))},disabled:4===item.value}})},[]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример меню с использованием собственных пунктов."}),(0,jsx_runtime.jsx)(MenuWithCustomItems_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuWithCustomItems_template_object_spread_props(MenuWithCustomItems_template_object_spread({},props),{defaultIsActive:!1,model:model,defaultSelected:"4"}))})]})};try{MenuWithCustomItemsTemplate.displayName="MenuWithCustomItemsTemplate",MenuWithCustomItemsTemplate.__docgenInfo={description:"",displayName:"MenuWithCustomItemsTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuWithCustomItems.template.tsx#MenuWithCustomItemsTemplate"]={docgenInfo:MenuWithCustomItemsTemplate.__docgenInfo,name:"MenuWithCustomItemsTemplate",path:"src/components/Menu/stories/MenuWithCustomItems.template.tsx#MenuWithCustomItemsTemplate"})}catch(__react_docgen_typescript_loader_error){}var TooltipHOC=__webpack_require__("./src/components/TooltipHOC/index.tsx");function MenuTooltip_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuTooltip_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuTooltip_template_define_property(target,key,source[key])})}return target}function MenuTooltip_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuTooltip_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuTooltip_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuTooltip_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuTooltip_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuTooltip_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuTooltip_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuTooltip_template_templateObject(){var data=MenuTooltip_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuTooltip_template_templateObject=function _templateObject(){return data},data}var MenuTooltip_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Привет, пупсик! Хотел тебе сказать, что ты андроид.",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}],MenuTooltip_template_Wrapper=styled_components_browser_esm.Ay.div(MenuTooltip_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuItemWithTooltip=(0,TooltipHOC.K)(MenuItem.D),MenuTooltipTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuTooltip_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return MenuTooltip_template_STORY_ITEMS.map(function(item){var tooltip=item.label.length>20;return{id:item.id,render:function(options){return tooltip?(0,react.createElement)(MenuItemWithTooltip,MenuTooltip_template_object_spread_props(MenuTooltip_template_object_spread({renderContent:function(){return item.label},dimension:props.dimension},options),{key:item.id}),item.label.slice(0,17)+"..."):(0,react.createElement)(MenuItem.D,MenuTooltip_template_object_spread_props(MenuTooltip_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}}})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример меню с пунктами, имеющими tooltip."}),(0,jsx_runtime.jsx)(MenuTooltip_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuTooltip_template_object_spread_props(MenuTooltip_template_object_spread({},props),{defaultIsActive:!1,model:model}))})]})};try{MenuTooltipTemplate.displayName="MenuTooltipTemplate",MenuTooltipTemplate.__docgenInfo={description:"",displayName:"MenuTooltipTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuTooltip.template.tsx#MenuTooltipTemplate"]={docgenInfo:MenuTooltipTemplate.__docgenInfo,name:"MenuTooltipTemplate",path:"src/components/Menu/stories/MenuTooltip.template.tsx#MenuTooltipTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuMultiLine_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuMultiLine_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuMultiLine_template_define_property(target,key,source[key])})}return target}function MenuMultiLine_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuMultiLine_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuMultiLine_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuMultiLine_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuMultiLine_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuMultiLine_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuMultiLine_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuMultiLine_template_templateObject(){var data=MenuMultiLine_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuMultiLine_template_templateObject=function _templateObject(){return data},data}function MenuMultiLine_template_templateObject1(){var data=MenuMultiLine_template_tagged_template_literal([`
  white-space: pre-wrap;
`]);return MenuMultiLine_template_templateObject1=function _templateObject(){return data},data}var MenuMultiLine_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Привет, пупсик! Хотел тебе сказать, что ты андроид.",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}],MenuMultiLine_template_Wrapper=styled_components_browser_esm.Ay.div(MenuMultiLine_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MultiLineMenuItem=(0,styled_components_browser_esm.Ay)(MenuItem.D)(MenuMultiLine_template_templateObject1()),MenuMultiLineTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuMultiLine_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return MenuMultiLine_template_STORY_ITEMS.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MultiLineMenuItem,MenuMultiLine_template_object_spread_props(MenuMultiLine_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}}})},[props.dimension]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с многострочными пунктами."}),(0,jsx_runtime.jsx)(MenuMultiLine_template_Wrapper,{style:{maxWidth:"200px"},children:(0,jsx_runtime.jsx)(Menu.W,MenuMultiLine_template_object_spread_props(MenuMultiLine_template_object_spread({},props),{defaultIsActive:!1,model:model}))})]})};try{MenuMultiLineTemplate.displayName="MenuMultiLineTemplate",MenuMultiLineTemplate.__docgenInfo={description:"",displayName:"MenuMultiLineTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuMultiLine.template.tsx#MenuMultiLineTemplate"]={docgenInfo:MenuMultiLineTemplate.__docgenInfo,name:"MenuMultiLineTemplate",path:"src/components/Menu/stories/MenuMultiLine.template.tsx#MenuMultiLineTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuActionsPanel=__webpack_require__("./src/components/Menu/MenuActionsPanel.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx");function MenuActionsTwoButtons_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuActionsTwoButtons_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuActionsTwoButtons_template_define_property(target,key,source[key])})}return target}function MenuActionsTwoButtons_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuActionsTwoButtons_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuActionsTwoButtons_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuActionsTwoButtons_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuActionsTwoButtons_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuActionsTwoButtons_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuActionsTwoButtons_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuActionsTwoButtons_template_templateObject(){var data=MenuActionsTwoButtons_template_tagged_template_literal([`
  display: flex;
  gap: 8px;
`]);return MenuActionsTwoButtons_template_templateObject=function _templateObject(){return data},data}function MenuActionsTwoButtons_template_templateObject1(){var data=MenuActionsTwoButtons_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuActionsTwoButtons_template_templateObject1=function _templateObject(){return data},data}var MenuActionsTwoButtons_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}],ActionPanelFlex=(0,styled_components_browser_esm.AH)(MenuActionsTwoButtons_template_templateObject()),MenuActionsTwoButtons_template_Wrapper=styled_components_browser_esm.Ay.div(MenuActionsTwoButtons_template_templateObject1(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuActionsTwoButtonsTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuActionsTwoButtons_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return MenuActionsTwoButtons_template_STORY_ITEMS.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuActionsTwoButtons_template_object_spread_props(MenuActionsTwoButtons_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}}})},[props.dimension,MenuActionsTwoButtons_template_STORY_ITEMS]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с Actions с двумя кнопками."}),(0,jsx_runtime.jsx)(MenuActionsTwoButtons_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuActionsTwoButtons_template_object_spread_props(MenuActionsTwoButtons_template_object_spread({},props),{defaultIsActive:!1,model:model,renderBottomPanel:function(param){var dimension=param.dimension,_param_menuActionsPanelCssMixin=param.menuActionsPanelCssMixin;return(0,jsx_runtime.jsxs)(MenuActionsPanel.t,{dimension:dimension,menuActionsPanelCssMixin:void 0===_param_menuActionsPanelCssMixin?ActionPanelFlex:_param_menuActionsPanelCssMixin,children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){console.log("Button 1 clicked")},children:"Action 1"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"secondary",onClick:function(){console.log("Button 2 clicked")},children:"Action 2"})]})}}))})]})};try{MenuActionsTwoButtonsTemplate.displayName="MenuActionsTwoButtonsTemplate",MenuActionsTwoButtonsTemplate.__docgenInfo={description:"",displayName:"MenuActionsTwoButtonsTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuActionsTwoButtons.template.tsx#MenuActionsTwoButtonsTemplate"]={docgenInfo:MenuActionsTwoButtonsTemplate.__docgenInfo,name:"MenuActionsTwoButtonsTemplate",path:"src/components/Menu/stories/MenuActionsTwoButtons.template.tsx#MenuActionsTwoButtonsTemplate"})}catch(__react_docgen_typescript_loader_error){}var light=__webpack_require__("./src/components/themes/light/index.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx"),TextButton=__webpack_require__("./src/components/TextButton/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts"),PlusOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/PlusOutline.svg");function MenuActionsAddUserValue_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuActionsAddUserValue_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuActionsAddUserValue_template_array_without_holes(arr){if(Array.isArray(arr))return MenuActionsAddUserValue_template_array_like_to_array(arr)}function MenuActionsAddUserValue_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuActionsAddUserValue_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function MenuActionsAddUserValue_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuActionsAddUserValue_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuActionsAddUserValue_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuActionsAddUserValue_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuActionsAddUserValue_template_define_property(target,key,source[key])})}return target}function MenuActionsAddUserValue_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuActionsAddUserValue_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuActionsAddUserValue_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuActionsAddUserValue_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuActionsAddUserValue_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuActionsAddUserValue_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuActionsAddUserValue_template_sliced_to_array(arr,i){return MenuActionsAddUserValue_template_array_with_holes(arr)||MenuActionsAddUserValue_template_iterable_to_array_limit(arr,i)||MenuActionsAddUserValue_template_unsupported_iterable_to_array(arr,i)||MenuActionsAddUserValue_template_non_iterable_rest()}function MenuActionsAddUserValue_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuActionsAddUserValue_template_to_consumable_array(arr){return MenuActionsAddUserValue_template_array_without_holes(arr)||MenuActionsAddUserValue_template_iterable_to_array(arr)||MenuActionsAddUserValue_template_unsupported_iterable_to_array(arr)||MenuActionsAddUserValue_template_non_iterable_spread()}function MenuActionsAddUserValue_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuActionsAddUserValue_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuActionsAddUserValue_template_array_like_to_array(o,minLen)}}function MenuActionsAddUserValue_template_templateObject(){var data=MenuActionsAddUserValue_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuActionsAddUserValue_template_templateObject=function _templateObject(){return data},data}var MenuActionsAddUserValue_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}],MenuActionsAddUserValue_template_Wrapper=styled_components_browser_esm.Ay.div(MenuActionsAddUserValue_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuActionsAddUserValueTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuActionsAddUserValue_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),initialButtonText="Добавить",theme=(0,styled_components_browser_esm.DP)()||light.d,_React_useState=MenuActionsAddUserValue_template_sliced_to_array(react.useState(MenuActionsAddUserValue_template_to_consumable_array(MenuActionsAddUserValue_template_STORY_ITEMS)),2),options=_React_useState[0],setOptions=_React_useState[1],_React_useState1=MenuActionsAddUserValue_template_sliced_to_array(react.useState(""),2),inputValue=_React_useState1[0],setInputValue=_React_useState1[1],_React_useState2=MenuActionsAddUserValue_template_sliced_to_array(react.useState(initialButtonText),2),buttonText=_React_useState2[0],setButtonText=_React_useState2[1],_React_useState3=MenuActionsAddUserValue_template_sliced_to_array(react.useState(!0),2),buttonDisabled=_React_useState3[0],setButtonDisabled=_React_useState3[1],_React_useState4=MenuActionsAddUserValue_template_sliced_to_array(react.useState(options[0].id),2),active=_React_useState4[0],setActive=_React_useState4[1],model=react.useMemo(function(){return(0,MenuActionsPanel.L)(options,inputValue,theme.locales[theme.currentLocale].suggestInput.emptyMessage,props.dimension)},[props.dimension,options,inputValue]),handleChange=function(e){setInputValue(e.target.value)},handleKeyDown=function(e){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.stopPropagation()},handleTextButtonClick=function(){var newId=(0,uid.L)();setOptions([{id:newId,label:inputValue,value:Math.floor(Math.random())}].concat(MenuActionsAddUserValue_template_to_consumable_array(options))),setActive(newId)};react.useEffect(function(){""===inputValue?(setButtonText(initialButtonText),setButtonDisabled(!0)):(setButtonText("".concat(initialButtonText," «").concat(inputValue,"»")),setButtonDisabled(!1))},[inputValue]);var menuPanelContentDimension=void 0===props.dimension||"l"===props.dimension?"m":props.dimension;return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с Actions и Search."}),(0,jsx_runtime.jsx)(MenuActionsAddUserValue_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuActionsAddUserValue_template_object_spread_props(MenuActionsAddUserValue_template_object_spread({},props),{defaultIsActive:!1,model:model,active:active,onActivateItem:setActive,onSelectItem:function(id){return console.log("Selected id: ".concat(id))},renderTopPanel:function(param){var _param_dimension=param.dimension,dimension=void 0===_param_dimension?menuPanelContentDimension:_param_dimension;return(0,jsx_runtime.jsx)(MenuActionsPanel.t,{dimension:dimension,children:(0,jsx_runtime.jsx)(TextInput.ks,{dimension:menuPanelContentDimension,value:inputValue,onChange:handleChange,onKeyDown:function(){for(var _props_onKeyDown1,_len=arguments.length,p=Array(_len),_key=0;_key<_len;_key++)p[_key]=arguments[_key];null==(_props_onKeyDown1=props.onKeyDown)||_props_onKeyDown1.call.apply(_props_onKeyDown1,[props].concat(MenuActionsAddUserValue_template_to_consumable_array(p))),handleKeyDown.apply(void 0,MenuActionsAddUserValue_template_to_consumable_array(p))}})})},renderBottomPanel:function(param){var _param_dimension=param.dimension,dimension=void 0===_param_dimension?menuPanelContentDimension:_param_dimension;return(0,jsx_runtime.jsx)(MenuActionsPanel.t,{dimension:dimension,children:(0,jsx_runtime.jsx)(TextButton.Q,{text:buttonText,disabled:buttonDisabled,icon:(0,jsx_runtime.jsx)(PlusOutline.h,{}),dimension:menuPanelContentDimension,onClick:handleTextButtonClick})})}}))})]})};try{MenuActionsAddUserValueTemplate.displayName="MenuActionsAddUserValueTemplate",MenuActionsAddUserValueTemplate.__docgenInfo={description:"",displayName:"MenuActionsAddUserValueTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuActionsAddUserValue.template.tsx#MenuActionsAddUserValueTemplate"]={docgenInfo:MenuActionsAddUserValueTemplate.__docgenInfo,name:"MenuActionsAddUserValueTemplate",path:"src/components/Menu/stories/MenuActionsAddUserValue.template.tsx#MenuActionsAddUserValueTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuCheckboxGroup_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuCheckboxGroup_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuCheckboxGroup_template_array_without_holes(arr){if(Array.isArray(arr))return MenuCheckboxGroup_template_array_like_to_array(arr)}function MenuCheckboxGroup_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuCheckboxGroup_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function MenuCheckboxGroup_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuCheckboxGroup_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuCheckboxGroup_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuCheckboxGroup_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuCheckboxGroup_template_define_property(target,key,source[key])})}return target}function MenuCheckboxGroup_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuCheckboxGroup_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuCheckboxGroup_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuCheckboxGroup_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuCheckboxGroup_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuCheckboxGroup_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuCheckboxGroup_template_sliced_to_array(arr,i){return MenuCheckboxGroup_template_array_with_holes(arr)||MenuCheckboxGroup_template_iterable_to_array_limit(arr,i)||MenuCheckboxGroup_template_unsupported_iterable_to_array(arr,i)||MenuCheckboxGroup_template_non_iterable_rest()}function MenuCheckboxGroup_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuCheckboxGroup_template_to_consumable_array(arr){return MenuCheckboxGroup_template_array_without_holes(arr)||MenuCheckboxGroup_template_iterable_to_array(arr)||MenuCheckboxGroup_template_unsupported_iterable_to_array(arr)||MenuCheckboxGroup_template_non_iterable_spread()}function MenuCheckboxGroup_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuCheckboxGroup_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuCheckboxGroup_template_array_like_to_array(o,minLen)}}function MenuCheckboxGroup_template_templateObject(){var data=MenuCheckboxGroup_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuCheckboxGroup_template_templateObject=function _templateObject(){return data},data}var MenuCheckboxGroup_template_STORY_ITEMS=[{id:"1",label:"Опция 1",checked:!1,children:[{id:"1.1",label:"Опция 1.1",checked:!1},{id:"1.2",label:"Опция 1.2",checked:!1,children:[{id:"1.2.1",label:"Опция 1.2.1",checked:!1},{id:"1.2.2",label:"Опция 1.2.2",checked:!1},{id:"1.2.3",label:"Опция 1.2.3",checked:!1}]},{id:"1.3",label:"Опция 1.3",checked:!1}]},{id:"2",label:"Опция 2",checked:!1},{id:"3",label:"Опция 3",checked:!1}],MenuCheckboxGroup_template_Wrapper=styled_components_browser_esm.Ay.div(MenuCheckboxGroup_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuCheckboxGroupTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuCheckboxGroup_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=MenuCheckboxGroup_template_sliced_to_array(react.useState(MenuCheckboxGroup_template_to_consumable_array(MenuCheckboxGroup_template_STORY_ITEMS)),2),internalModel=_React_useState[0],setInternalModel=_React_useState[1],_React_useState1=MenuCheckboxGroup_template_sliced_to_array(react.useState(),2),activeOption=_React_useState1[0],setActiveOption=_React_useState1[1],map=react.useMemo(function(){return(0,MenuItemWithCheckbox.x)(internalModel)},[internalModel]),setChecked=function(id,value){var _mapItem_dependencies,_mapItem_dependencies1,mapItem=map.get(id);(null==mapItem||!mapItem.node.disabled)&&(mapItem&&(mapItem.node.checked=value),(null==mapItem||null==(_mapItem_dependencies=mapItem.dependencies)?void 0:_mapItem_dependencies.length)&&(null==mapItem||null==(_mapItem_dependencies1=mapItem.dependencies)||_mapItem_dependencies1.forEach(function(depId){return setChecked(depId,value)})))},toggleCheck=function(id){var _item_dependencies,_item_dependencies1,_item_dependencies2,item=map.get(id),hasChildren=!!(null==item?void 0:item.node.children),indeterminate=(null==item||null==(_item_dependencies=item.dependencies)?void 0:_item_dependencies.some(function(depId){var _map_get;return null==(_map_get=map.get(depId))?void 0:_map_get.node.checked}))&&(null==item||null==(_item_dependencies1=item.dependencies)?void 0:_item_dependencies1.some(function(depId){var _map_get;return!(null==(_map_get=map.get(depId))?void 0:_map_get.node.checked)}));setChecked(id,!(hasChildren?!!indeterminate||(null==item||null==(_item_dependencies2=item.dependencies)?void 0:_item_dependencies2.every(function(depId){var _map_get;return null==(_map_get=map.get(depId))?void 0:_map_get.node.checked})):null==item?void 0:item.node.checked)),setInternalModel(MenuCheckboxGroup_template_to_consumable_array(internalModel))},model=react.useMemo(function(){var menuModel=[];return map.forEach(function(item){var _item_dependencies,_item_dependencies1,_item_dependencies2,node=item.node,hasChildren=!!node.children,indeterminate=(null==(_item_dependencies=item.dependencies)?void 0:_item_dependencies.some(function(depId){var _map_get;return null==(_map_get=map.get(depId))?void 0:_map_get.node.checked}))&&(null==(_item_dependencies1=item.dependencies)?void 0:_item_dependencies1.some(function(depId){var _map_get;return!(null==(_map_get=map.get(depId))?void 0:_map_get.node.checked)})),checked=hasChildren?null==(_item_dependencies2=item.dependencies)?void 0:_item_dependencies2.every(function(depId){var _map_get;return null==(_map_get=map.get(depId))?void 0:_map_get.node.checked}):!!node.checked;menuModel.push({id:node.id,render:function(options){return(0,jsx_runtime.jsx)(MenuItemWithCheckbox.I,MenuCheckboxGroup_template_object_spread_props(MenuCheckboxGroup_template_object_spread({id:node.id,dimension:props.dimension,disabled:node.disabled,checked:checked,indeterminate:indeterminate,level:item.level},options),{children:node.label}),node.id)},disabled:node.disabled})}),menuModel},[props.dimension,map,activeOption]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с CheckboxGroup."}),(0,jsx_runtime.jsx)(MenuCheckboxGroup_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuCheckboxGroup_template_object_spread_props(MenuCheckboxGroup_template_object_spread({},props),{defaultIsActive:!1,model:model,onSelectItem:function(id){console.log("Option ".concat(id," selected")),toggleCheck(id)},active:activeOption,onActivateItem:function(id){setActiveOption(id)},disableSelectedOptionHighlight:!0}))})]})};try{MenuCheckboxGroupTemplate.displayName="MenuCheckboxGroupTemplate",MenuCheckboxGroupTemplate.__docgenInfo={description:"",displayName:"MenuCheckboxGroupTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuCheckboxGroup.template.tsx#MenuCheckboxGroupTemplate"]={docgenInfo:MenuCheckboxGroupTemplate.__docgenInfo,name:"MenuCheckboxGroupTemplate",path:"src/components/Menu/stories/MenuCheckboxGroup.template.tsx#MenuCheckboxGroupTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuWithPreselect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuWithPreselect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuWithPreselect_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuWithPreselect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuWithPreselect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuWithPreselect_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuWithPreselect_template_define_property(target,key,source[key])})}return target}function MenuWithPreselect_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuWithPreselect_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuWithPreselect_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuWithPreselect_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuWithPreselect_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuWithPreselect_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuWithPreselect_template_sliced_to_array(arr,i){return MenuWithPreselect_template_array_with_holes(arr)||MenuWithPreselect_template_iterable_to_array_limit(arr,i)||MenuWithPreselect_template_unsupported_iterable_to_array(arr,i)||MenuWithPreselect_template_non_iterable_rest()}function MenuWithPreselect_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuWithPreselect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuWithPreselect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuWithPreselect_template_array_like_to_array(o,minLen)}}function MenuWithPreselect_template_templateObject(){var data=MenuWithPreselect_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuWithPreselect_template_templateObject=function _templateObject(){return data},data}function MenuWithPreselect_template_templateObject1(){var data=MenuWithPreselect_template_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
`]);return MenuWithPreselect_template_templateObject1=function _templateObject(){return data},data}var MenuWithPreselect_template_STORY_ITEMS=[{id:"1",label:"Option one",value:1},{id:"2",label:"Option two",value:2},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Option five",value:5},{id:"6",label:"Option six",value:7},{id:"7",label:"Option seven",value:6}],MenuWithPreselect_template_Wrapper=styled_components_browser_esm.Ay.div(MenuWithPreselect_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuWithPreselect_template_Container=styled_components_browser_esm.Ay.div(MenuWithPreselect_template_templateObject1()),MenuWithPreselectTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuWithPreselect_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=react.useMemo(function(){return MenuWithPreselect_template_STORY_ITEMS.map(function(item){return{id:item.id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuWithPreselect_template_object_spread_props(MenuWithPreselect_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label)}}})},[props.dimension]),_React_useState=MenuWithPreselect_template_sliced_to_array(react.useState(void 0),2),preselected=_React_useState[0],setPreselected=_React_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Для активации работы режима preselected в меню необходимо указать preselectedModeActive. Переключение элементов в состояние preselected может осуществляться в неконтролируемом режиме, а для поиска нужного элемента меню по нажатию на кнопку необходимо перевести компонент в контролируемый режим и написать обработчик. Пример указан в коде."}),(0,jsx_runtime.jsx)(MenuWithPreselect_template_Container,{children:(0,jsx_runtime.jsx)(MenuWithPreselect_template_Wrapper,{style:{width:"fit-content"},children:(0,jsx_runtime.jsx)(Menu.W,MenuWithPreselect_template_object_spread_props(MenuWithPreselect_template_object_spread({},props),{defaultIsActive:!1,model:model,preselectedModeActive:!0,preselected:preselected,onPreselectItem:setPreselected,onMenuKeyDown:function(e){if(e.key.match(/^[A-Za-z0-9]/)){var item=MenuWithPreselect_template_STORY_ITEMS.find(function(item){return item.label.toLowerCase().startsWith("option ".concat(e.key))});item&&(setPreselected(item.id),e.preventDefault(),e.stopPropagation())}}}))})})]})};try{MenuWithPreselectTemplate.displayName="MenuWithPreselectTemplate",MenuWithPreselectTemplate.__docgenInfo={description:"",displayName:"MenuWithPreselectTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuWithPreselect.template.tsx#MenuWithPreselectTemplate"]={docgenInfo:MenuWithPreselectTemplate.__docgenInfo,name:"MenuWithPreselectTemplate",path:"src/components/Menu/stories/MenuWithPreselect.template.tsx#MenuWithPreselectTemplate"})}catch(__react_docgen_typescript_loader_error){}var Divider=__webpack_require__("./src/components/Divider/index.tsx");function MenuWithSeparator_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuWithSeparator_template_array_without_holes(arr){if(Array.isArray(arr))return MenuWithSeparator_template_array_like_to_array(arr)}function MenuWithSeparator_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuWithSeparator_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function MenuWithSeparator_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuWithSeparator_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuWithSeparator_template_define_property(target,key,source[key])})}return target}function MenuWithSeparator_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuWithSeparator_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuWithSeparator_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuWithSeparator_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuWithSeparator_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuWithSeparator_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuWithSeparator_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuWithSeparator_template_to_consumable_array(arr){return MenuWithSeparator_template_array_without_holes(arr)||MenuWithSeparator_template_iterable_to_array(arr)||MenuWithSeparator_template_unsupported_iterable_to_array(arr)||MenuWithSeparator_template_non_iterable_spread()}function MenuWithSeparator_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuWithSeparator_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuWithSeparator_template_array_like_to_array(o,minLen)}}function MenuWithSeparator_template_templateObject(){var data=MenuWithSeparator_template_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, `,`);
`]);return MenuWithSeparator_template_templateObject=function _templateObject(){return data},data}function MenuWithSeparator_template_templateObject1(){var data=MenuWithSeparator_template_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
`]);return MenuWithSeparator_template_templateObject1=function _templateObject(){return data},data}function MenuWithSeparator_template_templateObject2(){var data=MenuWithSeparator_template_tagged_template_literal([`
  padding: `,`;
`]);return MenuWithSeparator_template_templateObject2=function _templateObject(){return data},data}function MenuWithSeparator_template_templateObject3(){var data=MenuWithSeparator_template_tagged_template_literal([`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  `,`;
`]);return MenuWithSeparator_template_templateObject3=function _templateObject(){return data},data}var MenuWithSeparator_template_STORY_ITEMS=[{id:"1",label:"Абабков",value:1},{id:"2",label:"Абакумов",value:2},{id:"3",label:"Абалакин",value:3},{id:"4",label:"Бабаев",value:4},{id:"5",label:"Бабаков",value:5},{id:"6",label:"Бабченко",value:7},{id:"7",label:"Вакуленко",value:6},{id:"8",label:"Валуев",value:8}],MenuWithSeparator_template_Wrapper=styled_components_browser_esm.Ay.div(MenuWithSeparator_template_templateObject(),function(p){return(0,borderRadius.VM)(p.theme.shape)},function(p){return p.theme.shadow["Shadow 08"].replace("box-shadow: ","").replace(";","")}),MenuWithSeparator_template_Container=styled_components_browser_esm.Ay.div(MenuWithSeparator_template_templateObject1()),padding=(0,styled_components_browser_esm.AH)(MenuWithSeparator_template_templateObject2(),function(param){switch(param.$dimension){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}),TStyled=styled_components_browser_esm.Ay.div(MenuWithSeparator_template_templateObject3(),padding),MenuWithSeparatorTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuWithSeparator_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),model=function(hideTitle){var menuModelItems=[],groupModelItems=function(arr){var modelItems=MenuWithSeparator_template_to_consumable_array(arr),groupItems=[];modelItems.forEach(function(item){return modelItems[0].label[0]===item.label[0]?groupItems.push(item):null}),modelItems.splice(0,groupItems.length),menuModelItems=MenuWithSeparator_template_to_consumable_array(menuModelItems).concat(MenuWithSeparator_template_to_consumable_array(renderItems(groupItems,0===modelItems.length,hideTitle))),modelItems.length>0&&groupModelItems(modelItems)};return groupModelItems(MenuWithSeparator_template_STORY_ITEMS),menuModelItems},renderItems=function(modelItems,isLastGroup,hideTitle){return modelItems.map(function(item,id){return{id:item.id,render:function(options){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[0===id&&!hideTitle&&(0,jsx_runtime.jsx)(TStyled,{font:"Subtitle/Subtitle 2",$dimension:props.dimension,dimension:T.T,children:item.label[0]}),(0,react.createElement)(MenuItem.D,MenuWithSeparator_template_object_spread_props(MenuWithSeparator_template_object_spread({dimension:props.dimension},options),{key:item.id}),item.label),modelItems.length===id+1&&!isLastGroup&&(0,jsx_runtime.jsx)(Divider.c,{})]})}}})};return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(MenuWithSeparator_template_Container,{children:[(0,jsx_runtime.jsx)(MenuWithSeparator_template_Wrapper,{style:{width:"300px"},children:(0,jsx_runtime.jsx)(Menu.W,MenuWithSeparator_template_object_spread_props(MenuWithSeparator_template_object_spread({},props),{dimension:props.dimension,defaultIsActive:!1,model:model()}))}),(0,jsx_runtime.jsx)(MenuWithSeparator_template_Wrapper,{style:{width:"300px"},children:(0,jsx_runtime.jsx)(Menu.W,MenuWithSeparator_template_object_spread_props(MenuWithSeparator_template_object_spread({},props),{dimension:props.dimension,defaultIsActive:!1,model:model(!0)}))})]})})};try{MenuWithSeparatorTemplate.displayName="MenuWithSeparatorTemplate",MenuWithSeparatorTemplate.__docgenInfo={description:"",displayName:"MenuWithSeparatorTemplate",props:{dimension:{defaultValue:null,description:"Размер Меню",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"выбранная секция Menu",name:"selected",required:!1,type:{name:"string | string[]"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Menu",name:"defaultSelected",required:!1,type:{name:"string | string[]"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},onDeselectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onDeselectItem",required:!1,type:{name:"((id: string) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},maxHeight:{defaultValue:null,description:"Задает максимальную высоту меню (с учетом наличия/отсутствия верхней/нижней панели)",name:"maxHeight",required:!1,type:{name:"string | number"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},multiSelection:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.9.1, будет удалено в 10.x.x версии.
Взамен используйте disableSelectedOptionHighlight

Возможность множественного выбора (опции с Checkbox)`,name:"multiSelection",required:!1,type:{name:"boolean"}},rowCount:{defaultValue:null,description:"Количество отображаемых пунктов меню",name:"rowCount",required:!1,type:{name:"number"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},disableSelectionOnSpace:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на пробел",name:"disableSelectionOnSpace",required:!1,type:{name:"boolean"}},disableSelectionOnEnter:{defaultValue:null,description:"Отключает функцию выбора опции при нажатии на Enter",name:"disableSelectionOnEnter",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},virtualScroll:{defaultValue:null,description:`Включение виртуального скролла для меню.
Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
высота согласно dimension`,name:"virtualScroll",required:!1,type:{name:'{ itemHeight: number | "auto"; }'}},subMenuRenderDirection:{defaultValue:null,description:"Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места",name:"subMenuRenderDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},parentMenuRef:{defaultValue:null,description:"@internal Ссылка на родительское меню для subMenu",name:"parentMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onCloseQuery:{defaultValue:null,description:"@internal Обработчик события при попытке закрыть subMenu",name:"onCloseQuery",required:!1,type:{name:"(() => void)"}},defaultIsActive:{defaultValue:null,description:"Признак необходимости активировать меню сразу при появлении",name:"defaultIsActive",required:!1,type:{name:"boolean"}},preventFocusSteal:{defaultValue:null,description:"Клик по меню не приводит к перемещению фокуса",name:"preventFocusSteal",required:!1,type:{name:"boolean"}},preselectedModeActive:{defaultValue:null,description:"Признак включения режима с использованием состояния preselected",name:"preselectedModeActive",required:!1,type:{name:"boolean"}},onPreselectItem:{defaultValue:null,description:"Обработчик события preselected",name:"onPreselectItem",required:!1,type:{name:"((id?: string) => void)"}},onMenuKeyDown:{defaultValue:null,description:"Обработчик нажатия клавиши на активном меню",name:"onMenuKeyDown",required:!1,type:{name:"((e: KeyboardEvent) => void)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/stories/MenuWithSeparator.template.tsx#MenuWithSeparatorTemplate"]={docgenInfo:MenuWithSeparatorTemplate.__docgenInfo,name:"MenuWithSeparatorTemplate",path:"src/components/Menu/stories/MenuWithSeparator.template.tsx#MenuWithSeparatorTemplate"})}catch(__react_docgen_typescript_loader_error){}let MenuLargeNumberOfItems_templateraw_namespaceObject=`import * as React from 'react';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createItems } from './utils';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ITEMS = createItems(200);

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuLargeNumberOfItemsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuWithLockCycleScroll_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import { STORY_ITEMS } from './data';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ITEMS_WITH_DISABLED_ITEMS = [...STORY_ITEMS];
ITEMS_WITH_DISABLED_ITEMS[0].disabled = true;
ITEMS_WITH_DISABLED_ITEMS[6].disabled = true;

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuWithLockCycleScrollTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return ITEMS_WITH_DISABLED_ITEMS.map((item) => ({
      id: item.id,
      disabled: item.disabled,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          onForwardCycleApprove={() => false}
          onBackwardCycleApprove={() => false}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuVirtualScroll_templateraw_namespaceObject=`import * as React from 'react';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType, MenuModelItemProps } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const createItems = (length: number, level: number = 1) => {
  const title = level > 1 ? 'SubItem' : 'Item';
  return Array.from({ length }).map((_option, index) => ({ label: \`\${title} \${index}0000\`, id: \`\${level}-\${index}\` }));
};

type ModelItems = { label: string; id: string; subItems?: Array<ModelItems> };

const ITEMS: Array<ModelItems> = createItems(40);
ITEMS.forEach((item) => {
  if (Math.random() > 0.5) {
    item.subItems = createItems(Math.round(40 * Math.random()), 2);
  }
});

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuVirtualScrollTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return ITEMS.map((item) => {
      const modelItem = {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MenuItem dimension={props.dimension} {...options} key={item.id}>
            {item.label}
          </MenuItem>
        ),
      };

      if (item.subItems) {
        (modelItem as MenuModelItemProps).subItems = item.subItems.map((subItem) => {
          return {
            id: subItem.id,
            render: (options: RenderOptionProps) => (
              <MenuItem dimension={props.dimension} {...options} key={subItem.id}>
                {subItem.label}
              </MenuItem>
            ),
          };
        });
      }

      return modelItem;
    });
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, содержаний размер 1
        элемента меню, для расчета максимальной высоты контейнера меню. Или установить значение "auto". В этом случае
        максимальная высота будет рассчитана исходя из свойства "dimension".
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} virtualScroll={{ itemHeight: 'auto' }} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuCardGroups_templateraw_namespaceObject=`import { useMemo, useState } from 'react';
import styled from 'styled-components';

import { Menu, MenuItem, typography, mediumGroupBorderRadius, CategoryMenuItem, T } from '@admiral-ds/react-ui';
import type { MenuModelItemProps, MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as CardSolid } from '@admiral-ds/icons/build/finance/CardSolid.svg';

const category = [
  {
    name: 'Категория 1',
    id: '1',
    content: [
      {
        id: '2',
        label: 'Номер Карты /****45',
        value: 1,
      },
      {
        id: '3',
        label: 'Номер Карты /****75',
        value: 2,
      },
      { id: '4', label: 'Номер Карты /****22', value: 3 },
      {
        id: '5',
        label: 'Номер Карты /****33',
        value: 4,
      },
    ],
  },
  {
    name: 'Категория 2',
    id: '9',
    content: [
      {
        id: '10',
        label: 'Номер Карты /****21',
        value: 5,
      },
      {
        id: '11',
        label: 'Номер Карты /****35',
        value: 6,
      },
      { id: '12', label: 'Номер Карты /****39', value: 7 },
      {
        id: '13',
        label: 'Номер Карты /****41',
        value: 8,
      },
    ],
  },
];
const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const StyledMenuItem = styled(MenuItem)\`
  padding: 0;
\`;

const InnerContainer = styled.div\`
  display: flex;
  width: 100%;
  padding: 6px 8px;
  margin: 0 8px 0 24px;
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, \${(p) => p.theme.color['Neutral/Neutral 20']});
  flex-direction: column;
  align-items: flex-start;
\`;

const StyledAdditionalText = styled.div\`
  \${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
\`;

export const MenuCardGroupsTemplate = (props: MenuProps) => {
  const model = useMemo(() => {
    return category.reduce((acc: MenuModelItemProps[], item) => {
      acc.push({
        id: item.id,
        render: (options: RenderOptionProps) => (
          <CategoryMenuItem dimension={props.dimension} key={item.id} {...options}>
            {item.name}
          </CategoryMenuItem>
        ),
      });
      return acc.concat(
        item.content.map((subitem) => {
          return {
            id: subitem.id,
            render: (options: RenderOptionProps) => (
              <StyledMenuItem dimension={props.dimension} key={subitem.id} {...options}>
                <InnerContainer>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {subitem.label} <CardSolid width={24} height={24} />
                  </div>
                  <StyledAdditionalText>Дополнительный текст</StyledAdditionalText>
                </InnerContainer>
              </StyledMenuItem>
            ),
          };
        }),
      );
    }, []);
  }, [props.dimension]);

  const [selected, setSelected] = useState<string | undefined>('');
  const [active, setActive] = useState<string | undefined>('');

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример построения меню с группированием пунктов.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          selected={selected}
          onSelectItem={setSelected}
          active={active}
          onActivateItem={setActive}
        />
      </Wrapper>
    </>
  );
};
`,MenuSimple_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const Container = styled.div\`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
\`;

export const MenuSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Базовый пример построения Menu.
      </T>
      <Container>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu {...props} defaultIsActive={false} model={model} />
        </Wrapper>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu {...props} defaultIsActive={false} model={model} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
`,MenuMultiLevel_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, MenuModelItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
  children?: Array<StoryItem>;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
    children: [
      {
        id: '1-1',
        label: 'SubOption with long text 1-1',
        value: 11,
      },
      {
        id: '1-2',
        label: 'SubOption 1-2',
        value: 12,
      },
      {
        id: '1-3',
        label: 'SubOption 1-3',
        value: 13,
      },
    ],
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
    children: [
      {
        id: '2-1',
        label: 'SubOption with long text 2-1',
        value: 21,
      },
      {
        id: '2-2',
        label: 'SubOption 2-2',
        value: 22,
      },
      {
        id: '2-3',
        label: 'SubOption 2-3',
        value: 23,
      },
    ],
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'four',
    value: 4,
    children: [
      {
        id: '4-1',
        label: 'SubOption with long text 4-1',
        value: 41,
      },
      {
        id: '4-2',
        label: 'SubOption 4-2',
        value: 42,
      },
      {
        id: '4-3',
        label: 'SubOption 4-3',
        value: 43,
        children: [
          {
            id: '4-3-1',
            label: 'SubOption 4-3-1',
            value: 431,
          },
          {
            id: '4-3-2',
            label: 'SubOption 4-3-2',
            value: 432,
            children: [
              {
                id: '5-1-1',
                label: 'SubOption 5-1-1',
                value: 511,
              },
              {
                id: '5-1-2',
                label: 'SubOption 5-1-2',
                value: 512,
              },
            ],
          },
          {
            id: '4-3-3',
            label: 'SubOption 4-3-3',
            value: 433,
          },
          {
            id: '4-3-4',
            label: 'SubOption 4-3-4',
            value: 434,
          },
          {
            id: '4-3-5',
            label: 'SubOption 4-3-5',
            value: 435,
          },
          {
            id: '4-3-6',
            label: 'SubOption 4-3-6',
            value: 436,
          },
          {
            id: '4-3-7',
            label: 'SubOption 4-3-7',
            value: 437,
          },
          {
            id: '4-3-8',
            label: 'SubOption 4-3-8',
            value: 438,
          },
          {
            id: '4-3-9',
            label: 'SubOption 4-3-9',
            value: 439,
          },
        ],
      },
    ],
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
  {
    id: '8',
    label: 'Option eight',
    value: 8,
  },
  {
    id: '9',
    label: 'Option nine',
    value: 9,
  },
  {
    id: '10',
    label: 'Option ten',
    value: 10,
  },
  {
    id: '11',
    label: 'Option eleven',
    value: 11,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const Container = styled.div\`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
\`;

export const MenuMultiLevelTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const convertStoryItem = (storyItem: StoryItem): MenuModelItemProps => {
    const item: MenuModelItemProps = {
      id: storyItem.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={storyItem.id}>
          {storyItem.label}
        </MenuItem>
      ),
    };

    if (storyItem.children) {
      item.subItems = storyItem.children?.map((child) => convertStoryItem(child));
    }

    return item;
  };

  const model: Array<MenuModelItemProps> = React.useMemo(() => {
    return STORY_ITEMS.map((item) => convertStoryItem(item));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Многоуровневая структура меню задается в модели данных, через указание дочерних элементов в свойстве subItems.
        Ограничения по количеству уровней вложенности нет, но не следует забывать о комфорте пользователей.
      </T>
      <Container>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu tabIndex={1} {...props} defaultIsActive={false} model={model} />
        </Wrapper>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu tabIndex={2} defaultIsActive={false} subMenuRenderDirection={'left'} {...props} model={model} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
`,MenuIconsAndAdditionalText_templateraw_namespaceObject=`import * as React from 'react';

import { ReactComponent as VacationSolid } from '@admiral-ds/icons/build/category/VacationSolid.svg';
import { ReactComponent as AlertSolid } from '@admiral-ds/icons/build/category/AlertSolid.svg';
import { ReactComponent as DiamondSolid } from '@admiral-ds/icons/build/category/DiamondSolid.svg';
import { ReactComponent as TrophyIcon } from '@admiral-ds/icons/build/category/TrophySolid.svg';
import { ReactComponent as BurnIcon } from '@admiral-ds/icons/build/category/BurnSolid.svg';
import { ReactComponent as BugSolid } from '@admiral-ds/icons/build/category/BugSolid.svg';
import { ReactComponent as CompareSolid } from '@admiral-ds/icons/build/category/CompareSolid.svg';
import { ReactComponent as ElderlySolid } from '@admiral-ds/icons/build/category/ElderlySolid.svg';
import { ReactComponent as MartiniOutline } from '@admiral-ds/icons/build/category/MartiniOutline.svg';
import { ReactComponent as PostOutline } from '@admiral-ds/icons/build/category/PostOutline.svg';
import { ReactComponent as ShoppingBagOutline } from '@admiral-ds/icons/build/category/ShoppingBagOutline.svg';
import { ReactComponent as TrophyOutline } from '@admiral-ds/icons/build/category/TrophyOutline.svg';
import { ReactComponent as AgreedSolid } from '@admiral-ds/icons/build/service/AgreedSolid.svg';
import type { MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { getItemHeight, Menu, MenuItem, mediumGroupBorderRadius, typography, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
    iconBefore: <TrophyIcon />,
    iconAfter: <BurnIcon />,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
    iconBefore: <VacationSolid />,
    iconAfter: <AlertSolid />,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
    iconBefore: <DiamondSolid />,
    iconAfter: <BugSolid />,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
    iconBefore: <TrophyOutline />,
    iconAfter: <AgreedSolid />,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
    iconBefore: <ShoppingBagOutline />,
    iconAfter: <VacationSolid />,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
    iconBefore: <ElderlySolid />,
    iconAfter: <PostOutline />,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
    iconBefore: <MartiniOutline />,
    iconAfter: <CompareSolid />,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  width: fit-content;
  margin: 10px;
  display: inline-block;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const StyledMenuItem = styled(MenuItem)\`
  \${typography['Body/Body 1 Short']}
  padding: 6px 16px;
  align-items: flex-start;
  height: \${getItemHeight('l')};
  width: 320px;
  box-sizing: border-box;
\`;

const StyledAdditionalText = styled.div\`
  \${typography['Caption/Caption 1']}
  color: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
  pointer-events: none;
\`;

const iconSize = css\`
  width: 24px;
  height: 24px;
\`;

const IconBefore = styled.div\`
  position: absolute;
  top: 4px;
  left: 16px;
  \${iconSize}
\`;

const IconAfter = styled.div\`
  position: absolute;
  top: 4px;
  right: 16px;
  \${iconSize}
\`;

export const MenuIconsAndAdditionalTextTemplate = (props: MenuProps) => {
  const modelBase = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
      </StyledMenuItem>
    ),
  }));
  const modelIconBefore = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <IconBefore>{item.iconBefore}</IconBefore>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '32px' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
      </StyledMenuItem>
    ),
  }));
  const modelIconAfter = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
        <IconAfter>{item.iconAfter}</IconAfter>
      </StyledMenuItem>
    ),
  }));
  const modelTwoIcons = items.map((item) => ({
    id: item.id,
    render: (options: RenderOptionProps) => (
      <StyledMenuItem {...options} key={item.id} dimension="l">
        <IconBefore>{item.iconBefore}</IconBefore>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '32px' }}>
          {item.label}
          <StyledAdditionalText>Комментарий</StyledAdditionalText>
        </div>
        <IconAfter>{item.iconAfter}</IconAfter>
      </StyledMenuItem>
    ),
  }));

  const [selected1, setSelected1] = React.useState<string | undefined>('');
  const [selected2, setSelected2] = React.useState<string | undefined>('');
  const [selected3, setSelected3] = React.useState<string | undefined>('');
  const [selected4, setSelected4] = React.useState<string | undefined>('');
  const [active1, setActive1] = React.useState<string | undefined>('');
  const [active2, setActive2] = React.useState<string | undefined>('');
  const [active3, setActive3] = React.useState<string | undefined>('');
  const [active4, setActive4] = React.useState<string | undefined>('');

  return (
    <div>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с иконками и дополнительным текстом.
      </T>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelBase}
          selected={selected1}
          onSelectItem={setSelected1}
          active={active1}
          onActivateItem={setActive1}
        />
      </Wrapper>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelTwoIcons}
          selected={selected2}
          onSelectItem={setSelected2}
          active={active2}
          onActivateItem={setActive2}
        />
      </Wrapper>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelIconBefore}
          selected={selected3}
          onSelectItem={setSelected3}
          active={active3}
          onActivateItem={setActive3}
        />
      </Wrapper>
      <Wrapper>
        <Menu
          {...props}
          defaultIsActive={false}
          dimension="l"
          model={modelIconAfter}
          selected={selected4}
          onSelectItem={setSelected4}
          active={active4}
          onActivateItem={setActive4}
        />
      </Wrapper>
    </div>
  );
};
`,MenuCheckbox_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { mediumGroupBorderRadius, Menu, MenuItemWithCheckbox, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, MenuModelItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

interface StoryItem {
  id: string;
  label: string;
  readOnly?: boolean;
  disabled?: boolean;
}

const storyItems: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    disabled: true,
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
    readOnly: true,
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuCheckboxTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [checkedOptions, setCheckedOptions] = React.useState<Record<string, boolean>>({});
  const [active, setActive] = React.useState<string | undefined>();
  const model = React.useMemo<Array<MenuModelItemProps>>(() => {
    return storyItems.map(({ id, label, ...itemProps }) => ({
      id: id,
      ...itemProps,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox checked={checkedOptions[id]} dimension={props.dimension} {...options} key={id}>
          {label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [props.dimension, checkedOptions]);

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(\`Option \${id} clicked\`);
    setCheckedOptions((cheked) => {
      cheked[id] = !cheked[id];
      return { ...cheked };
    });
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с пунктами, содержащими Checkbox.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          active={active}
          onActivateItem={setActive}
          defaultIsActive={false}
          preselectedModeActive={false}
          model={model}
          onSelectItem={handleSelectItem}
          disableSelectedOptionHighlight={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuRadioButton_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, RadioButton, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 6,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 7,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuRadioButtonTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          <RadioButton dimension={props.dimension !== 's' ? 'm' : props.dimension} name="menuListOption" key={item.id}>
            {item.label}
          </RadioButton>
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с пунктами, содержащими RadioButton.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuWithCustomItems_templateraw_namespaceObject=`import styled from 'styled-components';
import { Menu, typography, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuModelItemProps, MenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { useMemo } from 'react';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
] as const;

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

type MyMenuItemProps = React.ComponentPropsWithoutRef<'div'> &
  RenderOptionProps & {
    text: string;
    success?: boolean;
  };

//<editor-fold desc="MyMenuItem">
const MyItem = styled.div<{
  selected?: boolean;
  hovered?: boolean;
  width?: number;
  $success?: boolean;
  $dimension?: RenderOptionProps['dimension'];
}>\`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: wrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  padding: \${({ $dimension }) => {
    switch ($dimension) {
      case 'm':
        return '8px 16px';
      case 's':
        return '6px 12px';
      case 'l':
      default:
        return '12px 16px';
    }
  }};
  \${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  background: \${({ theme, selected }) =>
    selected
      ? \`var(--admiral-color-Opacity_Focus, \${theme.color['Opacity/Focus']})\`
      : \`var(--admiral-color-Special_ElevatedBG, \${theme.color['Special/Elevated BG']})\`};

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: \${({ theme, selected }) =>
      selected
        ? \`var(--admiral-color-Opacity_Focus, \${theme.color['Opacity/Focus']})\`
        : \`var(--admiral-color-Special_ElevatedBG, \${theme.color['Special/Elevated BG']})\`};
    color: var(--admiral-color-Neutral_Neutral30, \${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  &&[data-hovered='true'] {
    background-color: var(--admiral-color-Opacity_Hover, \${(p) => p.theme.color['Opacity/Hover']});
    color: \${({ theme, $success }) =>
      $success
        ? \`var(--admiral-color-Success_Success70, \${theme.color['Success/Success 70']})\`
        : \`var(--admiral-color-Magenta_Magenta60Main, \${theme.color['Magenta/Magenta 60 Main']})\`};
  }

  color: \${({ theme, $success }) =>
    $success
      ? \`var(--admiral-color-Success_Success50Main, \${theme.color['Success/Success 50 Main']})\`
      : \`var(--admiral-color-Purple_Purple60Main, \${theme.color['Purple/Purple 60 Main']})\`};
\`;

const MyMenuItem = ({
  text,
  onHover,
  onClick,
  disabled,
  hovered,
  selected = false,
  success = false,
  dimension,
  onLeave,
  hasSubmenu,
  ...props
}: MyMenuItemProps) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onHover?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) onClick?.(e);
  };

  return (
    <MyItem
      selected={selected}
      data-disabled={disabled}
      data-hovered={hovered}
      $success={success}
      $dimension={dimension}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      {...props}
    >
      {text}
    </MyItem>
  );
};
//</editor-fold>

export const MenuWithCustomItemsTemplate = (props: MenuProps) => {
  const model = useMemo(() => {
    return STORY_ITEMS.map<MenuModelItemProps>((item) => ({
      id: item.id,
      render: (options) => <MyMenuItem success={item.id === '3'} {...options} key={item.id} text={item.label} />,
      disabled: item.value === 4,
    }));
  }, []);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с использованием собственных пунктов.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} defaultSelected={'4'} />
      </Wrapper>
    </>
  );
};
`,MenuTooltip_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, TooltipHoc, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Привет, пупсик! Хотел тебе сказать, что ты андроид.',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const MenuItemWithTooltip = TooltipHoc(MenuItem);

export const MenuTooltipTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => {
      const tooltip = item.label.length > 20;

      return {
        id: item.id,
        render: (options: RenderOptionProps) =>
          tooltip ? (
            <MenuItemWithTooltip
              renderContent={() => item.label}
              dimension={props.dimension}
              {...options}
              key={item.id}
            >
              {item.label.slice(0, 17) + '...'}
            </MenuItemWithTooltip>
          ) : (
            <MenuItem dimension={props.dimension} {...options} key={item.id}>
              {item.label}
            </MenuItem>
          ),
      };
    });
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример меню с пунктами, имеющими tooltip.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu {...props} defaultIsActive={false} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuMultiLine_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Привет, пупсик! Хотел тебе сказать, что ты андроид.',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const MultiLineMenuItem = styled(MenuItem)\`
  white-space: pre-wrap;
\`;

export const MenuMultiLineTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MultiLineMenuItem dimension={props.dimension} {...options} key={item.id}>
            {item.label}
          </MultiLineMenuItem>
        ),
      };
    });
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с многострочными пунктами.
      </T>
      <Wrapper style={{ maxWidth: '200px' }}>
        <Menu {...props} defaultIsActive={false} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuActionsTwoButtons_templateraw_namespaceObject=`import * as React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { Button, MenuActionsPanel, Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const ActionPanelFlex = css\`
  display: flex;
  gap: 8px;
\`;
const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuActionsTwoButtonsTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension, STORY_ITEMS]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с Actions с двумя кнопками.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          renderBottomPanel={({ dimension, menuActionsPanelCssMixin = ActionPanelFlex }) => {
            return (
              <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={menuActionsPanelCssMixin}>
                <Button
                  dimension={'s'}
                  onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('Button 1 clicked');
                  }}
                >
                  Action 1
                </Button>
                <Button
                  dimension={'s'}
                  appearance="secondary"
                  onClick={() => {
                    // eslint-disable-next-line no-console
                    console.log('Button 2 clicked');
                  }}
                >
                  Action 2
                </Button>
              </MenuActionsPanel>
            );
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuActionsAddUserValue_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider, useTheme } from 'styled-components';
import {
  Menu,
  mediumGroupBorderRadius,
  LIGHT_THEME,
  getHighlightedFilteredOptions,
  keyboardKey,
  MenuActionsPanel,
  TextInput,
  TextButton,
  T,
} from '@admiral-ds/react-ui';
import type { MenuProps, BorderRadiusType } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';
import { uid } from '#src/components/common/uid';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];
const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuActionsAddUserValueTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const initialButtonText = 'Добавить';
  const theme = useTheme() || LIGHT_THEME;

  const [options, setOptions] = React.useState([...STORY_ITEMS]);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [buttonText, setButtonText] = React.useState<string>(initialButtonText);
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(true);
  const [active, setActive] = React.useState<string | undefined>(options[0].id);

  const model = React.useMemo(() => {
    return getHighlightedFilteredOptions(
      options,
      inputValue,
      theme.locales[theme.currentLocale].suggestInput.emptyMessage,
      props.dimension,
    );
  }, [props.dimension, options, inputValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    // prevent selecting option on Space press
    if (code === keyboardKey[' ']) {
      e.stopPropagation();
    }
  };

  const handleTextButtonClick = () => {
    const newId = uid();
    const newValue = Math.floor(Math.random());
    const newOption = { id: newId, label: inputValue, value: newValue };
    const newOptions = [newOption, ...options];
    setOptions(newOptions);
    setActive(newId);
  };

  React.useEffect(() => {
    if (inputValue === '') {
      setButtonText(initialButtonText);
      setButtonDisabled(true);
    } else {
      setButtonText(\`\${initialButtonText} \xab\${inputValue}\xbb\`);
      setButtonDisabled(false);
    }
  }, [inputValue]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'l' ? 'm' : props.dimension;

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с Actions и Search.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          active={active}
          onActivateItem={setActive}
          // eslint-disable-next-line no-console
          onSelectItem={(id) => console.log(\`Selected id: \${id}\`)}
          renderTopPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextInput
                  dimension={menuPanelContentDimension}
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={(...p) => {
                    props.onKeyDown?.(...p);
                    handleKeyDown(...p);
                  }}
                />
              </MenuActionsPanel>
            );
          }}
          renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
            return (
              <MenuActionsPanel dimension={dimension}>
                <TextButton
                  text={buttonText}
                  disabled={buttonDisabled}
                  icon={<PlusOutline />}
                  dimension={menuPanelContentDimension}
                  onClick={handleTextButtonClick}
                />
              </MenuActionsPanel>
            );
          }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuCheckboxGroup_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, mediumGroupBorderRadius, checkboxTreeToMap, MenuItemWithCheckbox, T } from '@admiral-ds/react-ui';
import type {
  MenuProps,
  RenderOptionProps,
  CheckboxGroupItemProps,
  MenuModelItemProps,
  BorderRadiusType,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const STORY_ITEMS: Array<CheckboxGroupItemProps> = [
  {
    id: '1',
    label: 'Опция 1',
    checked: false,
    children: [
      {
        id: '1.1',
        label: 'Опция 1.1',
        checked: false,
      },
      {
        id: '1.2',
        label: 'Опция 1.2',
        checked: false,
        children: [
          {
            id: '1.2.1',
            label: 'Опция 1.2.1',
            checked: false,
          },
          {
            id: '1.2.2',
            label: 'Опция 1.2.2',
            checked: false,
          },
          {
            id: '1.2.3',
            label: 'Опция 1.2.3',
            checked: false,
          },
        ],
      },
      {
        id: '1.3',
        label: 'Опция 1.3',
        checked: false,
      },
    ],
  },
  {
    id: '2',
    label: 'Опция 2',
    checked: false,
  },
  {
    id: '3',
    label: 'Опция 3',
    checked: false,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

export const MenuCheckboxGroupTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [internalModel, setInternalModel] = React.useState<Array<CheckboxGroupItemProps>>([...STORY_ITEMS]);
  const [activeOption, setActiveOption] = React.useState<string | undefined>();

  const map = React.useMemo(() => {
    return checkboxTreeToMap(internalModel);
  }, [internalModel]);

  const setChecked = (id: string, value: boolean) => {
    const mapItem = map.get(id);
    if (mapItem?.node.disabled) return;
    if (mapItem) {
      mapItem.node.checked = value;
    }

    if (mapItem?.dependencies?.length) {
      mapItem?.dependencies?.forEach((depId: string) => setChecked(depId, value));
    }
  };

  const toggleCheck = (id: string) => {
    const item = map.get(id);
    const hasChildren = !!item?.node.children;

    const indeterminate =
      item?.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
      item?.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);

    const checked = hasChildren
      ? indeterminate
        ? true
        : item?.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
      : item?.node.checked;

    setChecked(id, !checked);

    setInternalModel([...internalModel]);
  };

  const model = React.useMemo(() => {
    const menuModel: MenuModelItemProps[] = [];
    map.forEach((item) => {
      const node = item.node;
      const hasChildren = !!node.children;
      const indeterminate =
        item.dependencies?.some((depId: string) => map.get(depId)?.node.checked) &&
        item.dependencies?.some((depId: string) => !map.get(depId)?.node.checked);
      const checked = hasChildren
        ? item.dependencies?.every((depId: string) => map.get(depId)?.node.checked)
        : !!node.checked;
      menuModel.push({
        id: node.id,
        render: (options: RenderOptionProps) => (
          <MenuItemWithCheckbox
            key={node.id}
            id={node.id}
            dimension={props.dimension}
            disabled={node.disabled}
            checked={checked}
            indeterminate={indeterminate}
            level={item.level}
            {...options}
          >
            {node.label}
          </MenuItemWithCheckbox>
        ),
        disabled: node.disabled,
      });
    });

    return menuModel;
  }, [props.dimension, map, activeOption]);

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(\`Option \${id} selected\`);
    toggleCheck(id);
  };

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с CheckboxGroup.
      </T>
      <Wrapper style={{ width: 'fit-content' }}>
        <Menu
          {...props}
          defaultIsActive={false}
          model={model}
          onSelectItem={handleSelectItem}
          active={activeOption}
          onActivateItem={handleActivateItem}
          disableSelectedOptionHighlight={true}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,MenuWithPreselect_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const Container = styled.div\`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
\`;

export const MenuWithPreselectTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [props.dimension]);

  const [preselected, setPreselected] = React.useState<string | undefined>(undefined);

  const handleMenuKeyDown = (e: KeyboardEvent) => {
    if (e.key.match(/^[A-Za-z0-9]/)) {
      const item = STORY_ITEMS.find((item) => item.label.toLowerCase().startsWith(\`option \${e.key}\`));
      if (item) {
        setPreselected(item.id);
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для активации работы режима preselected в меню необходимо указать preselectedModeActive. Переключение элементов
        в состояние preselected может осуществляться в неконтролируемом режиме, а для поиска нужного элемента меню по
        нажатию на кнопку необходимо перевести компонент в контролируемый режим и написать обработчик. Пример указан в
        коде.
      </T>
      <Container>
        <Wrapper style={{ width: 'fit-content' }}>
          <Menu
            {...props}
            defaultIsActive={false}
            model={model}
            preselectedModeActive
            preselected={preselected}
            onPreselectItem={setPreselected}
            onMenuKeyDown={handleMenuKeyDown}
          />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
`,MenuWithSeparator_templateraw_namespaceObject=`import styled, { css, ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius, T, Divider } from '@admiral-ds/react-ui';
import type { MenuProps, RenderOptionProps, BorderRadiusType, MenuModelItemProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Абабков',
    value: 1,
  },
  {
    id: '2',
    label: 'Абакумов',
    value: 2,
  },
  {
    id: '3',
    label: 'Абалакин',
    value: 3,
  },
  {
    id: '4',
    label: 'Бабаев',
    value: 4,
  },
  {
    id: '5',
    label: 'Бабаков',
    value: 5,
  },
  {
    id: '6',
    label: 'Бабченко',
    value: 7,
  },
  {
    id: '7',
    label: 'Вакуленко',
    value: 6,
  },
  {
    id: '8',
    label: 'Валуев',
    value: 8,
  },
];

const parseShadow = (token: string) => token.replace('box-shadow: ', '').replace(';', '');

const Wrapper = styled.div\`
  border-radius: var(--admiral-border-radius-Medium, \${(p) => mediumGroupBorderRadius(p.theme.shape)});
  overflow: hidden;
  border-color: transparent;
  box-shadow: var(--admiral-box-shadow-Shadow08, \${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
\`;

const Container = styled.div\`
  display: flex;
  flex-direction: row;
  column-gap: 50px;
\`;

const padding = css<{ $dimension?: MenuProps['dimension'] }>\`
  padding: \${({ $dimension }) => {
    switch ($dimension) {
      case 'l':
        return '12px 16px';
      case 'm':
        return '8px 16px';
      case 's':
        return '6px 12px';
      default:
        return '12px 16px';
    }
  }};
\`;

const TStyled = styled.div<{ $dimension?: MenuProps['dimension'] }>\`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  \${padding};
\`;

export const MenuWithSeparatorTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const model = (hideTitle?: boolean) => {
    let menuModelItems: MenuModelItemProps[] = [];

    const groupModelItems = (arr: StoryItem[]) => {
      const modelItems = [...arr];
      const groupItems: StoryItem[] = [];

      modelItems.forEach((item) => (modelItems[0].label[0] === item.label[0] ? groupItems.push(item) : null));
      modelItems.splice(0, groupItems.length);

      menuModelItems = [...menuModelItems, ...renderItems(groupItems, modelItems.length === 0, hideTitle)];

      if (modelItems.length > 0) groupModelItems(modelItems);
    };

    groupModelItems(STORY_ITEMS);
    return menuModelItems;
  };

  const renderItems = (modelItems: StoryItem[], isLastGroup: boolean, hideTitle?: boolean) =>
    modelItems.map((item, id) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <>
          {id === 0 && !hideTitle && (
            <TStyled font="Subtitle/Subtitle 2" $dimension={props.dimension} as={T}>
              {item.label[0]}
            </TStyled>
          )}
          <MenuItem dimension={props.dimension} {...options} key={item.id}>
            {item.label}
          </MenuItem>
          {modelItems.length === id + 1 && !isLastGroup && <Divider />}
        </>
      ),
    }));

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Container>
        <Wrapper style={{ width: '300px' }}>
          <Menu {...props} dimension={props.dimension} defaultIsActive={false} model={model()} />
        </Wrapper>
        <Wrapper style={{ width: '300px' }}>
          <Menu {...props} dimension={props.dimension} defaultIsActive={false} model={model(true)} />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
`;function Menu_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Menu_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Menu_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Menu_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Menu_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Menu_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Menu_stories_define_property(target,key,source[key])})}return target}function Menu_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Menu_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Menu_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Menu_stories_sliced_to_array(arr,i){return Menu_stories_array_with_holes(arr)||Menu_stories_iterable_to_array_limit(arr,i)||Menu_stories_unsupported_iterable_to_array(arr,i)||Menu_stories_non_iterable_rest()}function Menu_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Menu_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Menu_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Menu_stories_array_like_to_array(o,minLen)}}function Menu_stories_templateObject(){var data=Menu_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Menu_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Menu_stories_templateObject());let Menu_stories={title:"Admiral-2.1/Menu",component:Menu.W,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Компонент Menu имеет три размера и может быть с иконкой или без. Высота строки : l - 48px, m - 40px, s - 32px"})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68931"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68967"}]},args:{dimension:"l"},argTypes:{dimension:{options:["l","m","s"],control:{type:"radio"}},active:{control:{type:"text"}},selected:{control:{type:"text"}},defaultSelected:{control:{type:"text"}},maxHeight:{control:{type:"text"}},multiSelection:{control:{type:"boolean"}},disableSelectedOptionHighlight:{control:{type:"boolean"}},rowCount:{control:{type:"number"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var SimpleExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuSimpleTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuSimple_templateraw_namespaceObject}}},name:"Базовый пример"},IconsExample={render:function(props){return(0,jsx_runtime.jsx)(MenuIconsAndAdditionalTextTemplate,Menu_stories_object_spread({},props))},parameters:{docs:{source:{code:MenuIconsAndAdditionalText_templateraw_namespaceObject}}},name:"Пример с иконками и дополнительным текстом"},CardGroupsExample={render:function(props){return(0,jsx_runtime.jsx)(MenuCardGroupsTemplate,Menu_stories_object_spread({},props))},parameters:{docs:{source:{code:MenuCardGroups_templateraw_namespaceObject}}},name:"Пример с группами карт"},MenuWithCustomItemsExample={render:function(props){return(0,jsx_runtime.jsx)(MenuWithCustomItemsTemplate,Menu_stories_object_spread({},props))},parameters:{docs:{source:{code:MenuWithCustomItems_templateraw_namespaceObject}}},name:"Пример с кастомными пунктами меню"},CheckboxMenuExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuCheckboxTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuCheckbox_templateraw_namespaceObject}}},name:"Меню с checkbox"},RadioButtonMenuExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuRadioButtonTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuRadioButton_templateraw_namespaceObject}}},name:"Меню с RadioButton"},TooltipMenuExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuTooltipTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuTooltip_templateraw_namespaceObject}}},name:"Пример с Tooltip"},MultiLineMenuExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuMultiLineTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuMultiLine_templateraw_namespaceObject}}},name:"Пример с многострочными пунктами"},MenuActionsTwoButtonsExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuActionsTwoButtonsTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuActionsTwoButtons_templateraw_namespaceObject}}},name:"Пример с Actions с двумя кнопками"},MenuActionsAddUserValueExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuActionsAddUserValueTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuActionsAddUserValue_templateraw_namespaceObject}}},name:"Пример с Actions и Search"},MenuCheckboxGroupExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuCheckboxGroupTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuCheckboxGroup_templateraw_namespaceObject}}},name:"Пример с CheckboxGroup"},LargeNumberOfItemsExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuLargeNumberOfItemsTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuLargeNumberOfItems_templateraw_namespaceObject}}},name:"Пример с большим количеством item"},MenuWithLockCycleScrollExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuWithLockCycleScrollTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuWithLockCycleScroll_templateraw_namespaceObject}}},name:"Пример без цикла обхода пунктов"},VirtualScrollExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuVirtualScrollTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuVirtualScroll_templateraw_namespaceObject}}},name:"Виртуальный скролл"},MultiLevelExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuMultiLevelTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuMultiLevel_templateraw_namespaceObject}}},name:"Многоуровневое меню"},MenuWithPreselectExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuWithPreselectTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuWithPreselect_templateraw_namespaceObject}}},name:"Меню c состоянием preselect"},MenuWithSeparatorExample={render:function(props){var CSSCustomProps=Menu_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuWithSeparatorTemplate,Menu_stories_object_spread_props(Menu_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuWithSeparator_templateraw_namespaceObject}}},name:"Пример с разделителями"};SimpleExample.parameters={...SimpleExample.parameters,docs:{...SimpleExample.parameters?.docs,source:{originalSource:`{
  render: SimpleStory,
  parameters: {
    docs: {
      source: {
        code: MenuSimpleRaw
      }
    }
  },
  name: 'Базовый пример'
}`,...SimpleExample.parameters?.docs?.source}}},IconsExample.parameters={...IconsExample.parameters,docs:{...IconsExample.parameters?.docs,source:{originalSource:`{
  render: IconsStory,
  parameters: {
    docs: {
      source: {
        code: MenuIconsAndAdditionalTextRaw
      }
    }
  },
  name: 'Пример с иконками и дополнительным текстом'
}`,...IconsExample.parameters?.docs?.source}}},CardGroupsExample.parameters={...CardGroupsExample.parameters,docs:{...CardGroupsExample.parameters?.docs,source:{originalSource:`{
  render: CardGroupsStory,
  parameters: {
    docs: {
      source: {
        code: MenuCardGroupsRaw
      }
    }
  },
  name: 'Пример с группами карт'
}`,...CardGroupsExample.parameters?.docs?.source}}},MenuWithCustomItemsExample.parameters={...MenuWithCustomItemsExample.parameters,docs:{...MenuWithCustomItemsExample.parameters?.docs,source:{originalSource:`{
  render: MenuWithCustomItemsStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithCustomItemsRaw
      }
    }
  },
  name: 'Пример с кастомными пунктами меню'
}`,...MenuWithCustomItemsExample.parameters?.docs?.source}}},CheckboxMenuExample.parameters={...CheckboxMenuExample.parameters,docs:{...CheckboxMenuExample.parameters?.docs,source:{originalSource:`{
  render: CheckboxMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuCheckboxRaw
      }
    }
  },
  name: 'Меню с checkbox'
}`,...CheckboxMenuExample.parameters?.docs?.source}}},RadioButtonMenuExample.parameters={...RadioButtonMenuExample.parameters,docs:{...RadioButtonMenuExample.parameters?.docs,source:{originalSource:`{
  render: RadioButtonMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuRadioButtonRaw
      }
    }
  },
  name: 'Меню с RadioButton'
}`,...RadioButtonMenuExample.parameters?.docs?.source}}},TooltipMenuExample.parameters={...TooltipMenuExample.parameters,docs:{...TooltipMenuExample.parameters?.docs,source:{originalSource:`{
  render: TooltipMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuTooltipRaw
      }
    }
  },
  name: 'Пример с Tooltip'
}`,...TooltipMenuExample.parameters?.docs?.source}}},MultiLineMenuExample.parameters={...MultiLineMenuExample.parameters,docs:{...MultiLineMenuExample.parameters?.docs,source:{originalSource:`{
  render: MultiLineMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuMultiLineRaw
      }
    }
  },
  name: 'Пример с многострочными пунктами'
}`,...MultiLineMenuExample.parameters?.docs?.source}}},MenuActionsTwoButtonsExample.parameters={...MenuActionsTwoButtonsExample.parameters,docs:{...MenuActionsTwoButtonsExample.parameters?.docs,source:{originalSource:`{
  render: MenuActionsTwoButtonsStory,
  parameters: {
    docs: {
      source: {
        code: MenuActionsTwoButtonsRaw
      }
    }
  },
  name: 'Пример с Actions с двумя кнопками'
}`,...MenuActionsTwoButtonsExample.parameters?.docs?.source}}},MenuActionsAddUserValueExample.parameters={...MenuActionsAddUserValueExample.parameters,docs:{...MenuActionsAddUserValueExample.parameters?.docs,source:{originalSource:`{
  render: MenuActionsAddUserValueStory,
  parameters: {
    docs: {
      source: {
        code: MenuActionsAddUserValueRaw
      }
    }
  },
  name: 'Пример с Actions и Search'
}`,...MenuActionsAddUserValueExample.parameters?.docs?.source}}},MenuCheckboxGroupExample.parameters={...MenuCheckboxGroupExample.parameters,docs:{...MenuCheckboxGroupExample.parameters?.docs,source:{originalSource:`{
  render: MenuCheckboxGroupStory,
  parameters: {
    docs: {
      source: {
        code: MenuCheckboxGroupRaw
      }
    }
  },
  name: 'Пример с CheckboxGroup'
}`,...MenuCheckboxGroupExample.parameters?.docs?.source}}},LargeNumberOfItemsExample.parameters={...LargeNumberOfItemsExample.parameters,docs:{...LargeNumberOfItemsExample.parameters?.docs,source:{originalSource:`{
  render: LargeNumberOfItemsStory,
  parameters: {
    docs: {
      source: {
        code: MenuLargeNumberOfItemsRaw
      }
    }
  },
  name: 'Пример с большим количеством item'
}`,...LargeNumberOfItemsExample.parameters?.docs?.source}}},MenuWithLockCycleScrollExample.parameters={...MenuWithLockCycleScrollExample.parameters,docs:{...MenuWithLockCycleScrollExample.parameters?.docs,source:{originalSource:`{
  render: MenuWithLockCycleScrollStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithLockCycleScrollRaw
      }
    }
  },
  name: 'Пример без цикла обхода пунктов'
}`,...MenuWithLockCycleScrollExample.parameters?.docs?.source}}},VirtualScrollExample.parameters={...VirtualScrollExample.parameters,docs:{...VirtualScrollExample.parameters?.docs,source:{originalSource:`{
  render: VirtualScrollStory,
  parameters: {
    docs: {
      source: {
        code: MenuVirtualScrollRaw
      }
    }
  },
  name: 'Виртуальный скролл'
}`,...VirtualScrollExample.parameters?.docs?.source}}},MultiLevelExample.parameters={...MultiLevelExample.parameters,docs:{...MultiLevelExample.parameters?.docs,source:{originalSource:`{
  render: MultiLevelStory,
  parameters: {
    docs: {
      source: {
        code: MenuMultiLevelRaw
      }
    }
  },
  name: 'Многоуровневое меню'
}`,...MultiLevelExample.parameters?.docs?.source}}},MenuWithPreselectExample.parameters={...MenuWithPreselectExample.parameters,docs:{...MenuWithPreselectExample.parameters?.docs,source:{originalSource:`{
  render: MenuWithPreselectStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithPreselectRaw
      }
    }
  },
  name: 'Меню c состоянием preselect'
}`,...MenuWithPreselectExample.parameters?.docs?.source}}},MenuWithSeparatorExample.parameters={...MenuWithSeparatorExample.parameters,docs:{...MenuWithSeparatorExample.parameters?.docs,source:{originalSource:`{
  render: MenuWithSeparatorStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithSeparatorRaw
      }
    }
  },
  name: 'Пример с разделителями'
}`,...MenuWithSeparatorExample.parameters?.docs?.source}}};let __namedExportsOrder=["SimpleExample","IconsExample","CardGroupsExample","MenuWithCustomItemsExample","CheckboxMenuExample","RadioButtonMenuExample","TooltipMenuExample","MultiLineMenuExample","MenuActionsTwoButtonsExample","MenuActionsAddUserValueExample","MenuCheckboxGroupExample","LargeNumberOfItemsExample","MenuWithLockCycleScrollExample","VirtualScrollExample","MultiLevelExample","MenuWithPreselectExample","MenuWithSeparatorExample"]},"./src/components/TextButton/commonMixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ef:()=>ButtonContainer,Tu:()=>IconContainer,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([""]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([""]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-image:
    linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
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

Позиционирование иконки. По умолчанию - слева`,name:"displayRight",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/index.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/TextButton/index.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/getTextHighlightMeta.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>getTextHighlightMeta});var getTextHighlightMeta=function(){var text=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",highlight=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",highlightFormat=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"word",chunks=("word"===highlightFormat?highlight.split(" "):[highlight]).filter(Boolean).map(function(chunk){return chunk.toLowerCase()}),specialCharacters=[".","?","*","+","-","^","$","[","]","\\","(",")","{","}","|"],pattern=chunks.map(function(chunk){var chunkForRegExp=chunk.split("").map(function(letter){return specialCharacters.includes(letter)?"\\".concat(letter):letter}).join("");return"(".concat(chunkForRegExp,")?")}).join(""),parts=text.split(RegExp(pattern,"gi")).filter(Boolean);return{shouldHighlight:!highlight||parts.some(function(part){return chunks.includes(part.toLowerCase())}),parts:parts,chunks:chunks}}}}]);
//# sourceMappingURL=components-Menu-stories-Menu-stories.feb84b66.iframe.bundle.js.map