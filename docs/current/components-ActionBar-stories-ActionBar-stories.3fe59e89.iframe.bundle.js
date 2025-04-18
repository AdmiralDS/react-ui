"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7683],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/ActionBar/stories/ActionBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionBarPlayground:()=>ActionBarPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ActionBar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),IconButton=__webpack_require__("./src/components/IconButton/index.tsx"),TooltipHOC=__webpack_require__("./src/components/TooltipHOC/index.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  width: 1px;
  height: `,`px;
  background-color: var(--admiral-color-Neutral_Neutral20, `,`);
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  width: `,`px;
  height: `,`px;
  display: flex;
  align-items: center;
  justify-content: center;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: `,`px;
  height: `,`px;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  gap: 8px;

  & > svg {
    `,`
  }
`]);return _templateObject3=function _templateObject(){return data},data}var Divider=styled_components_browser_esm.Ay.div(_templateObject(),function(param){return"s"===param.$dimension?16:20},function(p){return p.theme.color["Neutral/Neutral 20"]}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){return"s"===param.$dimension?16:20},function(param){return"s"===param.$dimension?16:20}),ActionBarItems_ActionBarDivider=function(_param){var dimension=_param.dimension,props=_object_without_properties(_param,["dimension"]);return(0,jsx_runtime.jsx)(Wrapper,_object_spread_props(_object_spread({},props),{$dimension:dimension,children:(0,jsx_runtime.jsx)(Divider,{$dimension:dimension})}))},ActionBarItems_ActionBarItem=(0,react.forwardRef)(function(props,ref){return(0,jsx_runtime.jsx)(IconButton.K,_object_spread_props(_object_spread({},props),{ref:ref}))}),ActionBarItems_ActionBarItemWithTooltip=(0,TooltipHOC.K)(ActionBarItems_ActionBarItem),actionBarDropMenuItemIconSize=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return"s"===p.$dimension?20:24},function(p){return"s"===p.$dimension?20:24}),ActionBarItems_ActionBarDropMenuItemWrapper=styled_components_browser_esm.Ay.div(_templateObject3(),actionBarDropMenuItemIconSize),ActionBarItems_ActionBarDropMenuItem=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,children=_param.children,props=_object_without_properties(_param,["dimension","children"]);return(0,jsx_runtime.jsx)(MenuItem.D,_object_spread_props(_object_spread({},props),{ref:ref,dimension:"xl"===dimension?"l":dimension,children:(0,jsx_runtime.jsx)(ActionBarItems_ActionBarDropMenuItemWrapper,{$dimension:dimension,children:children})}))});try{ActionBarItems_ActionBarDivider.displayName="ActionBarDivider",ActionBarItems_ActionBarDivider.__docgenInfo={description:"",displayName:"ActionBarDivider",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/ActionBarItems.tsx#ActionBarDivider"]={docgenInfo:ActionBarItems_ActionBarDivider.__docgenInfo,name:"ActionBarDivider",path:"src/components/ActionBar/ActionBarItems.tsx#ActionBarDivider"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarItems_ActionBarItem.displayName="ActionBarItem",ActionBarItems_ActionBarItem.__docgenInfo={description:"",displayName:"ActionBarItem",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"l"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/ActionBarItems.tsx#ActionBarItem"]={docgenInfo:ActionBarItems_ActionBarItem.__docgenInfo,name:"ActionBarItem",path:"src/components/ActionBar/ActionBarItems.tsx#ActionBarItem"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarItems_ActionBarItemWithTooltip.displayName="ActionBarItemWithTooltip",ActionBarItems_ActionBarItemWithTooltip.__docgenInfo={description:"",displayName:"ActionBarItemWithTooltip",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"l"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},withDelay:{defaultValue:null,description:"Отобразить тултип с задержкой в 1.5 секунды",name:"withDelay",required:!1,type:{name:"boolean"}},tooltipRef:{defaultValue:null,description:"Ссылка на тултип",name:"tooltipRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},tooltipDimension:{defaultValue:null,description:"Размер тултипа",name:"tooltipDimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/ActionBarItems.tsx#ActionBarItemWithTooltip"]={docgenInfo:ActionBarItems_ActionBarItemWithTooltip.__docgenInfo,name:"ActionBarItemWithTooltip",path:"src/components/ActionBar/ActionBarItems.tsx#ActionBarItemWithTooltip"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarItems_ActionBarDropMenuItemWrapper.displayName="ActionBarDropMenuItemWrapper",ActionBarItems_ActionBarDropMenuItemWrapper.__docgenInfo={description:"",displayName:"ActionBarDropMenuItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/ActionBarItems.tsx#ActionBarDropMenuItemWrapper"]={docgenInfo:ActionBarItems_ActionBarDropMenuItemWrapper.__docgenInfo,name:"ActionBarDropMenuItemWrapper",path:"src/components/ActionBar/ActionBarItems.tsx#ActionBarDropMenuItemWrapper"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarItems_ActionBarDropMenuItem.displayName="ActionBarDropMenuItem",ActionBarItems_ActionBarDropMenuItem.__docgenInfo={description:"",displayName:"ActionBarDropMenuItem",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},selected:{defaultValue:null,description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.17.0, будет удалено в 10.x.x версии.

ссылка на элемент, при работе через renderProp`,name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/ActionBarItems.tsx#ActionBarDropMenuItem"]={docgenInfo:ActionBarItems_ActionBarDropMenuItem.__docgenInfo,name:"ActionBarDropMenuItem",path:"src/components/ActionBar/ActionBarItems.tsx#ActionBarDropMenuItem"})}catch(__react_docgen_typescript_loader_error){}var NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),OverflowMenu=__webpack_require__("./src/components/OverflowMenu/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function ActionBar_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ActionBar_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ActionBar_define_property(target,key,source[key])})}return target}function ActionBar_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ActionBar_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ActionBar_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ActionBar_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ActionBar_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ActionBar_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function ActionBar_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function ActionBar_templateObject(){var data=ActionBar_tagged_template_literal([`
  box-sizing: border-box;
  height: `,`px;

  display: flex;
  align-items: center;
`]);return ActionBar_templateObject=function _templateObject(){return data},data}function ActionBar_templateObject1(){var data=ActionBar_tagged_template_literal([`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: `,`px;
  height: `,`px;
`]);return ActionBar_templateObject1=function _templateObject(){return data},data}function ActionBar_templateObject2(){var data=ActionBar_tagged_template_literal([`
  &:focus-visible:not(:disabled) {
    outline: none;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, `,`);
      border-radius: `,`;
      content: '';
      display: block;
      position: absolute;
      width: `,`px;
      height: `,`px;
      top: -`,`px;
      left: -`,`px;
      right: -`,`px;
      bottom: -`,`px;
      pointer-events: none;
    }
  }
`]);return ActionBar_templateObject2=function _templateObject(){return data},data}var getActionBarHeight=function(dimension){switch(dimension){case"s":return 32;case"m":return 40;case"l":return 48;default:return 56}},ActionBar_Wrapper=styled_components_browser_esm.Ay.div(ActionBar_templateObject(),function(param){return getActionBarHeight(param.$dimension)}),ActionBarOverflowMenuItem=styled_components_browser_esm.Ay.div(ActionBar_templateObject1(),function(param){return getActionBarHeight(param.$dimension)},function(param){return getActionBarHeight(param.$dimension)}),getFocusBorderOffset=function($dimension){switch($dimension){case"s":return 8;case"m":return 10;case"l":return 12;default:return 20}};function getFocusBorderRadius(componentBorderRadius){switch(componentBorderRadius){case"0":return"0";case"2px":return"6px";case"6px":return"10px";case"8px":return"12px";case"10px":return"14px";default:return"8px"}}var StyledOverflowMenu=(0,styled_components_browser_esm.Ay)(OverflowMenu.o)(ActionBar_templateObject2(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return getFocusBorderRadius((0,borderRadius.VM)(p.theme.shape))},function(param){return getActionBarHeight(param.$dimension)+4},function(param){return getActionBarHeight(param.$dimension)+4},function(p){return getFocusBorderOffset(p.$dimension)},function(p){return getFocusBorderOffset(p.$dimension)},function(p){return getFocusBorderOffset(p.$dimension)},function(p){return getFocusBorderOffset(p.$dimension)}),ActionBar=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,renderActionBarItem=_param.renderActionBarItem,renderDropMenuItem=_param.renderDropMenuItem,items=_param.items,itemIsDisabled=_param.itemIsDisabled,props=ActionBar_object_without_properties(_param,["dimension","renderActionBarItem","renderDropMenuItem","items","itemIsDisabled"]),renderItem=function(param){var itemId=param.itemId,withDivider=param.withDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[renderActionBarItem(itemId),withDivider&&(0,jsx_runtime.jsx)(ActionBarItems_ActionBarDivider,{dimension:dimension},"divider".concat(itemId))]},itemId)},_useState=_sliced_to_array((0,react.useState)(0),2),containerWidth=_useState[0],setContainerWidth=_useState[1],containerRef=(0,react.useRef)(null);(0,react.useLayoutEffect)(function(){if(containerRef.current){var resizeObserver=new ResizeObserver(function(entries){entries.forEach(function(entry){return setContainerWidth(entry.contentRect.width||0)})});return resizeObserver.observe(containerRef.current),function(){resizeObserver.disconnect()}}},[]);var _useState1=_sliced_to_array((0,react.useState)([]),2),visibleItems=_useState1[0],setVisibleItems=_useState1[1],_useState2=_sliced_to_array((0,react.useState)([]),2),hiddenItems=_useState2[0],setHiddenItems=_useState2[1];(0,react.useLayoutEffect)(function(){if(containerRef.current){var buttonWidth=getActionBarHeight(dimension),dividerWidth="s"===dimension?16:20,overflow=items.reduce(function(acc,item){return acc+buttonWidth+(item.withDivider?dividerWidth:0)},0)>containerWidth,availableWidth=containerWidth-(overflow?buttonWidth:0),newVisibleItems=[],newHiddenItems=[];items.forEach(function(item){var itemWidth=buttonWidth+(item.withDivider?dividerWidth:0);availableWidth>=itemWidth?(newVisibleItems.push(item),availableWidth-=itemWidth):(newHiddenItems.push(item),availableWidth=0)}),setVisibleItems(newVisibleItems),setHiddenItems(newHiddenItems)}},[items,containerWidth,dimension]);var overflowMenuItems=(0,react.useMemo)(function(){return 0===hiddenItems.length?[]:hiddenItems.map(function(param){var itemId=param.itemId;return{id:itemId,render:renderDropMenuItem(itemId),disabled:itemIsDisabled(itemId)}})},[hiddenItems,dimension]);return(0,jsx_runtime.jsxs)(ActionBar_Wrapper,ActionBar_object_spread_props(ActionBar_object_spread({},props),{ref:containerRef,$dimension:dimension,children:[visibleItems.map(function(item){return renderItem(item)}),hiddenItems.length>0&&(0,jsx_runtime.jsx)(ActionBarOverflowMenuItem,{$dimension:dimension,children:(0,jsx_runtime.jsx)(StyledOverflowMenu,{$dimension:dimension,items:overflowMenuItems,dimension:"xl"===dimension?"l":dimension})})]}))};try{ActionBar.displayName="ActionBar",ActionBar.__docgenInfo={description:"",displayName:"ActionBar",props:{dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},renderActionBarItem:{defaultValue:null,description:"Рендер-функция для отрисовки кнопки",name:"renderActionBarItem",required:!0,type:{name:"(itemId: string) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(itemId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},items:{defaultValue:null,description:"Массив элементов",name:"items",required:!0,type:{name:"ActionBarItemProps[]"}},itemIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли элемент disabled",name:"itemIsDisabled",required:!0,type:{name:"(itemId: string) => boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/index.tsx#ActionBar"]={docgenInfo:ActionBar.__docgenInfo,name:"ActionBar",path:"src/components/ActionBar/index.tsx#ActionBar"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarDivider.displayName="ActionBarDivider",ActionBarDivider.__docgenInfo={description:"",displayName:"ActionBarDivider",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/index.tsx#ActionBarDivider"]={docgenInfo:ActionBarDivider.__docgenInfo,name:"ActionBarDivider",path:"src/components/ActionBar/index.tsx#ActionBarDivider"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarItem.displayName="ActionBarItem",ActionBarItem.__docgenInfo={description:"",displayName:"ActionBarItem",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"l"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/index.tsx#ActionBarItem"]={docgenInfo:ActionBarItem.__docgenInfo,name:"ActionBarItem",path:"src/components/ActionBar/index.tsx#ActionBarItem"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarItemWithTooltip.displayName="ActionBarItemWithTooltip",ActionBarItemWithTooltip.__docgenInfo={description:"",displayName:"ActionBarItemWithTooltip",props:{appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"l"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},withDelay:{defaultValue:null,description:"Отобразить тултип с задержкой в 1.5 секунды",name:"withDelay",required:!1,type:{name:"boolean"}},tooltipRef:{defaultValue:null,description:"Ссылка на тултип",name:"tooltipRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},tooltipDimension:{defaultValue:null,description:"Размер тултипа",name:"tooltipDimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/index.tsx#ActionBarItemWithTooltip"]={docgenInfo:ActionBarItemWithTooltip.__docgenInfo,name:"ActionBarItemWithTooltip",path:"src/components/ActionBar/index.tsx#ActionBarItemWithTooltip"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarDropMenuItemWrapper.displayName="ActionBarDropMenuItemWrapper",ActionBarDropMenuItemWrapper.__docgenInfo={description:"",displayName:"ActionBarDropMenuItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/index.tsx#ActionBarDropMenuItemWrapper"]={docgenInfo:ActionBarDropMenuItemWrapper.__docgenInfo,name:"ActionBarDropMenuItemWrapper",path:"src/components/ActionBar/index.tsx#ActionBarDropMenuItemWrapper"})}catch(__react_docgen_typescript_loader_error){}try{ActionBarDropMenuItem.displayName="ActionBarDropMenuItem",ActionBarDropMenuItem.__docgenInfo={description:"",displayName:"ActionBarDropMenuItem",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},selected:{defaultValue:null,description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.17.0, будет удалено в 10.x.x версии.

ссылка на элемент, при работе через renderProp`,name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/index.tsx#ActionBarDropMenuItem"]={docgenInfo:ActionBarDropMenuItem.__docgenInfo,name:"ActionBarDropMenuItem",path:"src/components/ActionBar/index.tsx#ActionBarDropMenuItem"})}catch(__react_docgen_typescript_loader_error){}var index_es=__webpack_require__("./node_modules/@admiral-ds/icons/dist/index.es.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function ActionBar_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ActionBar_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ActionBar_template_define_property(target,key,source[key])})}return target}function ActionBar_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ActionBar_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ActionBar_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ActionBar_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ActionBar_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ActionBar_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ActionBar_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ActionBar_template_templateObject(){var data=ActionBar_template_tagged_template_literal([`
  height: `,`px;
`]);return ActionBar_template_templateObject=function _templateObject(){return data},data}function ActionBar_template_templateObject1(){var data=ActionBar_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 10px;
`]);return ActionBar_template_templateObject1=function _templateObject(){return data},data}var items=[{itemId:"1",withDivider:!1,name:"Search",icon:(0,jsx_runtime.jsx)(index_es.YGL,{}),disabled:!1},{itemId:"2",withDivider:!1,name:"Edit",icon:(0,jsx_runtime.jsx)(index_es.AWx,{}),disabled:!1},{itemId:"3",withDivider:!0,name:"Archive",icon:(0,jsx_runtime.jsx)(index_es.gbV,{}),disabled:!1},{itemId:"4",withDivider:!1,name:"Heart",icon:(0,jsx_runtime.jsx)(index_es.zi0,{}),disabled:!1},{itemId:"5",withDivider:!1,name:"Pin",icon:(0,jsx_runtime.jsx)(index_es.mPd,{}),disabled:!1},{itemId:"6",withDivider:!0,name:"Email",icon:(0,jsx_runtime.jsx)(index_es.cEz,{}),disabled:!0},{itemId:"7",withDivider:!1,name:"Attach file",icon:(0,jsx_runtime.jsx)(index_es.DQ2,{}),disabled:!1},{itemId:"8",withDivider:!1,name:"Attach link",icon:(0,jsx_runtime.jsx)(index_es.kMn,{}),disabled:!1},{itemId:"9",withDivider:!1,name:"Export",icon:(0,jsx_runtime.jsx)(index_es.UT8,{}),disabled:!1},{itemId:"10",withDivider:!1,name:"Delete",icon:(0,jsx_runtime.jsx)(index_es.D6i,{}),disabled:!1}],Separator=styled_components_browser_esm.Ay.div(ActionBar_template_templateObject(),function(p){return p.height}),ActionBar_template_Wrapper=styled_components_browser_esm.Ay.div(ActionBar_template_templateObject1()),ActionBarTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ActionBar_template_object_without_properties(_param,["dimension","themeBorderKind","CSSCustomProps"]),itemsMap=(0,react.useMemo)(function(){return items.map(function(item){return{itemId:item.itemId,withDivider:item.withDivider}})},[items]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(ActionBar_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Action Bar"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Action Bar — это панель действий с возможностью деления на логические группы с помощью разделителя.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Опционально или при нехватке места добавляется Overflow Menu. Над каждой кнопкой, входящей в состав компонента, при ховере, появляется Tooltip с подсказкой функции кнопки.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Компонент Action Bar представлен в 4х размерах по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32).",(0,jsx_runtime.jsx)(Separator,{height:8}),"По дефолту тултип появляется снизу от кнопки при ховере. Можно настроить появление тултипа справа, слева, сверху, в зависимости от расположения Action Bar. В случае, когда это действительно необходимо и смысл кнопки очевиден, опционально можно отключать тултип.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Если кнопки не помещаются в доступное горизонтальное пространство, они перемещаются в Dropdown Menu. Размеры выпадающего меню для Action Bar — L для XL и L размера Action Bar, M для M размера и S для размера S. При изменении ширины компонента, кнопки не помещающиеся в ширину Action Bar, перемещаются в Overflow Menu, добавляясь по порядку. Это означает, что последняя кнопка на панели действий также будет последней кнопкой внутри меню."]})]}),(0,jsx_runtime.jsx)(ActionBar,ActionBar_template_object_spread_props(ActionBar_template_object_spread({},props),{items:itemsMap,renderActionBarItem:function(itemId){var item=items.find(function(item){return item.itemId===itemId})||items[0];return(0,jsx_runtime.jsx)(ActionBarItems_ActionBarItemWithTooltip,{dimension:dimension,id:item.itemId,renderContent:function(){return item.name},onClick:function(){return console.log("".concat(item.name," clicked"))},disabled:item.disabled,children:item.icon},item.itemId)},renderDropMenuItem:function(itemId){var item=items.find(function(item){return item.itemId===itemId})||items[0],handleClick=function(){return console.log("".concat(item.name," clicked"))};return function(options){return(0,react.createElement)(ActionBarItems_ActionBarDropMenuItem,ActionBar_template_object_spread_props(ActionBar_template_object_spread({dimension:dimension},options),{key:itemId,onClick:handleClick,children:[item.icon,item.name]}))}},itemIsDisabled:function(itemId){var currentTab=items.find(function(item){return item.itemId===itemId});return!!(null==currentTab?void 0:currentTab.disabled)},dimension:dimension}))]})})};try{ActionBarTemplate.displayName="ActionBarTemplate",ActionBarTemplate.__docgenInfo={description:"",displayName:"ActionBarTemplate",props:{dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},renderActionBarItem:{defaultValue:null,description:"Рендер-функция для отрисовки кнопки",name:"renderActionBarItem",required:!0,type:{name:"(itemId: string) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(itemId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},items:{defaultValue:null,description:"Массив элементов",name:"items",required:!0,type:{name:"ActionBarItemProps[]"}},itemIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли элемент disabled",name:"itemIsDisabled",required:!0,type:{name:"(itemId: string) => boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/stories/ActionBar.template.tsx#ActionBarTemplate"]={docgenInfo:ActionBarTemplate.__docgenInfo,name:"ActionBarTemplate",path:"src/components/ActionBar/stories/ActionBar.template.tsx#ActionBarTemplate"})}catch(__react_docgen_typescript_loader_error){}let ActionBar_templateraw_namespaceObject=`import { useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { ActionBarProps, BorderRadiusType, RenderOptionProps } from '@admiral-ds/react-ui';
import {
  ActionBar,
  ActionBarItemWithTooltip,
  ActionBarDropMenuItem,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';

import {
  SystemSearchOutline,
  SystemEditOutline,
  ServiceArchiveOutline,
  CategoryHeartOutline,
  CategoryPinOutline,
  SystemEmailOutline,
  SystemAttachFileOutline,
  SystemLinkOutline,
  SystemExportOutline,
  SystemDeleteOutline,
} from '@admiral-ds/icons';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const items = [
  { itemId: '1', withDivider: false, name: 'Search', icon: <SystemSearchOutline />, disabled: false },
  { itemId: '2', withDivider: false, name: 'Edit', icon: <SystemEditOutline />, disabled: false },
  { itemId: '3', withDivider: true, name: 'Archive', icon: <ServiceArchiveOutline />, disabled: false },
  { itemId: '4', withDivider: false, name: 'Heart', icon: <CategoryHeartOutline />, disabled: false },
  { itemId: '5', withDivider: false, name: 'Pin', icon: <CategoryPinOutline />, disabled: false },
  { itemId: '6', withDivider: true, name: 'Email', icon: <SystemEmailOutline />, disabled: true },
  { itemId: '7', withDivider: false, name: 'Attach file', icon: <SystemAttachFileOutline />, disabled: false },
  { itemId: '8', withDivider: false, name: 'Attach link', icon: <SystemLinkOutline />, disabled: false },
  { itemId: '9', withDivider: false, name: 'Export', icon: <SystemExportOutline />, disabled: false },
  { itemId: '10', withDivider: false, name: 'Delete', icon: <SystemDeleteOutline />, disabled: false },
];

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;
const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 10px;
\`;

export const ActionBarTemplate = ({
  dimension = 'xl',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ActionBarProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const itemsMap = useMemo(() => {
    return items.map((item) => ({
      itemId: item.itemId,
      withDivider: item.withDivider,
    }));
  }, [items]);

  const renderActionBarItem = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId) || items[0];
    // eslint-disable-next-line no-console
    const handleClick = () => console.log(\`\${item.name} clicked\`);
    return (
      <ActionBarItemWithTooltip
        dimension={dimension}
        id={item.itemId}
        key={item.itemId}
        renderContent={() => item.name}
        onClick={handleClick}
        disabled={item.disabled}
      >
        {item.icon}
      </ActionBarItemWithTooltip>
    );
  };
  const renderDropMenuItem = (itemId: string) => {
    const item = items.find((item) => item.itemId === itemId) || items[0];
    // eslint-disable-next-line no-console
    const handleClick = () => console.log(\`\${item.name} clicked\`);
    return (options: RenderOptionProps) => {
      return (
        <ActionBarDropMenuItem dimension={dimension} {...options} key={itemId} onClick={handleClick}>
          {item.icon}
          {item.name}
        </ActionBarDropMenuItem>
      );
    };
  };
  const itemIsDisabled = (itemId: string) => {
    const currentTab = items.find((item) => item.itemId === itemId);
    return !!currentTab?.disabled;
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Action Bar</NotificationItemTitle>
          <NotificationItemContent>
            Action Bar — это панель действий с возможностью деления на логические группы с помощью разделителя.
            <Separator height={8} />
            Опционально или при нехватке места добавляется Overflow Menu. Над каждой кнопкой, входящей в состав
            компонента, при ховере, появляется Tooltip с подсказкой функции кнопки.
            <Separator height={8} />
            Компонент Action Bar представлен в 4х размерах по аналогии с обычными кнопками: XL (56), L (48), M (40), S
            (32).
            <Separator height={8} />
            По дефолту тултип появляется снизу от кнопки при ховере. Можно настроить появление тултипа справа, слева,
            сверху, в зависимости от расположения Action Bar. В случае, когда это действительно необходимо и смысл
            кнопки очевиден, опционально можно отключать тултип.
            <Separator height={8} />
            Если кнопки не помещаются в доступное горизонтальное пространство, они перемещаются в Dropdown Menu. Размеры
            выпадающего меню для Action Bar — L для XL и L размера Action Bar, M для M размера и S для размера S. При
            изменении ширины компонента, кнопки не помещающиеся в ширину Action Bar, перемещаются в Overflow Menu,
            добавляясь по порядку. Это означает, что последняя кнопка на панели действий также будет последней кнопкой
            внутри меню.
          </NotificationItemContent>
        </NotificationItem>
        <ActionBar
          {...props}
          items={itemsMap}
          renderActionBarItem={renderActionBarItem}
          renderDropMenuItem={renderDropMenuItem}
          itemIsDisabled={itemIsDisabled}
          dimension={dimension}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`;function ActionBar_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ActionBar_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ActionBar_stories_define_property(target,key,source[key])})}return target}let ActionBar_stories={title:"Admiral-2.1/ActionBar",decorators:void 0,component:ActionBar,parameters:{docs:{source:{code:null}}},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var ActionBarPlayground={render:function(props){return(0,jsx_runtime.jsx)(ActionBarTemplate,ActionBar_stories_object_spread({},props))},parameters:{docs:{source:{code:ActionBar_templateraw_namespaceObject}}},name:"ActionBar Playground"};ActionBarPlayground.parameters={...ActionBarPlayground.parameters,docs:{...ActionBarPlayground.parameters?.docs,source:{originalSource:`{
  render: ActionBarStory,
  parameters: {
    docs: {
      source: {
        code: ActionBarTemplateRaw
      }
    }
  },
  name: 'ActionBar Playground'
}`,...ActionBarPlayground.parameters?.docs?.source}}};let __namedExportsOrder=["ActionBarPlayground"]},"./src/components/IconButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Spinner_SpinnerIcon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: `,`;
  background: `,`;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  vertical-align: middle;

  .icon-button-group[data-dimension='xl'] &,
  &[data-dimension='xl'] {
    padding: 0;
    height: 56px;
    width: 56px;
  }

  .icon-button-group[data-dimension='l'] &,
  &[data-dimension='l'] {
    height: 48px;
    width: 48px;
  }

  .icon-button-group[data-dimension='m'] &,
  &[data-dimension='m'] {
    height: 40px;
    width: 40px;
  }

  .icon-button-group[data-dimension='s'] &,
  &[data-dimension='s'] {
    height: 32px;
    width: 32px;
  }

  &:hover {
    cursor: `,`;
    background: var(--admiral-color-Opacity_Hover, `,`);
    & *[fill^='#'] {
      fill: `,`;
    }
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, `,`);
    & *[fill^='#'] {
      fill: `,`;
    }
  }

  &:disabled {
    cursor: `,`;
    background-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  vertical-align: top;
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: `,`px;
  height: `,`px;

  .icon-button-group[data-dimension='m'] &&,
  .icon-button-group[data-dimension='l'] &&,
  .icon-button-group[data-dimension='xl'] && {
    width: 24px;
    height: 24px;
  }
  .icon-button-group[data-dimension='s'] && {
    width: 20px;
    height: 20px;
  }

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }

  & *[fill^='#'] {
    fill: `,`;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  container-type: inline-size;
`]);return _templateObject2=function _templateObject(){return data},data}var StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.VM)(p.theme.shape),")")},function(param){return param.$skeleton?"red":"transparent"},function(param){return param.$skeleton?"default":"pointer"},function(p){return p.theme.color["Opacity/Hover"]},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(p){return p.theme.color["Opacity/Press"]},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(param){return param.$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(param){return param.$skeleton&&_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_4__.h}),IconButtonContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span(_templateObject1(),function(param){return"s"===param.$dimension?20:24},function(param){return"s"===param.$dimension?20:24},function(p){return"primary"===p.$appearance?"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")}),SpinnerContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(IconButtonContent)(_templateObject2()),IconButton=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"secondary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_type=_param.type,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,_param_disabled=_param.disabled,children=_param.children,props=_object_without_properties(_param,["appearance","dimension","type","loading","skeleton","disabled","children"]),disabledOptions=loading||void 0!==_param_disabled&&_param_disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton,_object_spread_props(_object_spread({ref:ref,"data-dimension":dimension,disabled:disabledOptions,type:void 0===_param_type?"button":_param_type,$skeleton:skeleton,$loading:loading,$appearance:appearance},props),{children:loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerContainer,{$dimension:dimension,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Spinner_SpinnerIcon__WEBPACK_IMPORTED_MODULE_5__.N,{})}):skeleton?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconButtonContent,{$dimension:dimension}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconButtonContent,{$dimension:dimension,$appearance:appearance,children:children})}))});IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"xl"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/index.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/index.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/TooltipHOC/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipHoc});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Tooltip/index.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function TooltipHoc(Component){return(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_2__.B)(function(props,ref){var renderContent=props.renderContent,container=props.container,withDelay=props.withDelay,tooltipRef=props.tooltipRef,tooltipPosition=props.tooltipPosition,tooltipDimension=props.tooltipDimension,wrappedCompProps=_object_without_properties(props,["renderContent","container","withDelay","tooltipRef","tooltipPosition","tooltipDimension"]),emptyContent=!renderContent()&&0!==renderContent(),anchorElementRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),2),visible=_useState[0],setVisible=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),node=_useState1[0],setNode=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),2),timer=_useState2[0],setTimer=_useState2[1];return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var show=function show(){setTimer(setTimeout(function(){return setVisible(!0)},withDelay?_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__.w:0))},hide=function hide(){clearTimeout(timer),setVisible(!1)};if(node)return node.addEventListener("mouseenter",show),node.addEventListener("focus",show),node.addEventListener("mouseleave",hide),node.addEventListener("blur",hide),function(){timer&&clearTimeout(timer),node.removeEventListener("mouseenter",show),node.removeEventListener("focus",show),node.removeEventListener("mouseleave",hide),node.removeEventListener("blur",hide)}},[node,setTimer,setVisible,timer]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,_object_spread_props(_object_spread({},wrappedCompProps),{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__.d)(ref,anchorElementRef,setNode)})),visible&&!emptyContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__.m,{targetElement:anchorElementRef.current,renderContent:renderContent,container:container,tooltipPosition:tooltipPosition,dimension:tooltipDimension,ref:tooltipRef})]})})}try{TooltipHoc.displayName="TooltipHoc",TooltipHoc.__docgenInfo={description:"",displayName:"TooltipHoc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipHOC/index.tsx#TooltipHoc"]={docgenInfo:TooltipHoc.__docgenInfo,name:"TooltipHoc",path:"src/components/TooltipHOC/index.tsx#TooltipHoc"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ActionBar-stories-ActionBar-stories.3fe59e89.iframe.bundle.js.map