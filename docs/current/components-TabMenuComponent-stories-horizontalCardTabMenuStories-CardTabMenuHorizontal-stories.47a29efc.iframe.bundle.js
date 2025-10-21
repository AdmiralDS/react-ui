"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4374],{"./src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardTabMenuHorizontalAdaptiveFillExample:()=>CardTabMenuHorizontalAdaptiveFillExample,CardTabMenuHorizontalWithoutBorderExample:()=>CardTabMenuHorizontalWithoutBorderExample,HorizontalCardTabMenuExample:()=>HorizontalCardTabMenuExample,HorizontalCardTabMenuLeadingGapExample:()=>HorizontalCardTabMenuLeadingGapExample,HorizontalCardTabMenuWithAddButtonExample:()=>HorizontalCardTabMenuWithAddButtonExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CardTabMenuHorizontal_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),TabMenuHorizontalAdaptiveFill=__webpack_require__("./src/components/TabMenuComponent/tabMenus/TabMenuHorizontalAdaptiveFill.tsx"),TabMenuHorizontalWithOverflowMenu=__webpack_require__("./src/components/TabMenuComponent/tabMenus/TabMenuHorizontalWithOverflowMenu.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var CardTabMenuHorizontal=function(_param){var adaptive=_param.adaptive,renderDropMenuItem=_param.renderDropMenuItem,alignSelf=_param.alignSelf,menuWidth=_param.menuWidth,menuMaxHeight=_param.menuMaxHeight,dropContainerCssMixin=_param.dropContainerCssMixin,dropContainerClassName=_param.dropContainerClassName,dropContainerStyle=_param.dropContainerStyle,isVisible=_param.isVisible,onVisibilityChange=_param.onVisibilityChange,active=_param.active,onActivateItem=_param.onActivateItem,disableSelectedOptionHighlight=_param.disableSelectedOptionHighlight,renderTopPanel=_param.renderTopPanel,renderBottomPanel=_param.renderBottomPanel,onForwardCycleApprove=_param.onForwardCycleApprove,onBackwardCycleApprove=_param.onBackwardCycleApprove,onClickOutside=_param.onClickOutside,dimension=_param.dimension,props=_object_without_properties(_param,["adaptive","renderDropMenuItem","alignSelf","menuWidth","menuMaxHeight","dropContainerCssMixin","dropContainerClassName","dropContainerStyle","isVisible","onVisibilityChange","active","onActivateItem","disableSelectedOptionHighlight","renderTopPanel","renderBottomPanel","onForwardCycleApprove","onBackwardCycleApprove","onClickOutside","dimension"]);return"fill"===adaptive?(0,jsx_runtime.jsx)(TabMenuHorizontalAdaptiveFill.i,_object_spread({},props)):(0,jsx_runtime.jsx)(TabMenuHorizontalWithOverflowMenu.I,_object_spread({},{dimension:dimension,renderDropMenuItem:renderDropMenuItem,alignSelf:alignSelf,menuWidth:menuWidth,menuMaxHeight:menuMaxHeight,dropContainerCssMixin:dropContainerCssMixin,dropContainerClassName:dropContainerClassName,dropContainerStyle:dropContainerStyle,isVisible:isVisible,onVisibilityChange:onVisibilityChange,active:active,onActivateItem:onActivateItem,disableSelectedOptionHighlight:disableSelectedOptionHighlight,renderTopPanel:renderTopPanel,renderBottomPanel:renderBottomPanel,onForwardCycleApprove:onForwardCycleApprove,onBackwardCycleApprove:onBackwardCycleApprove,onClickOutside:onClickOutside},props))};CardTabMenuHorizontal.displayName="CardTabMenuHorizontal";try{CardTabMenuHorizontal.displayName="CardTabMenuHorizontal",CardTabMenuHorizontal.__docgenInfo={description:"",displayName:"CardTabMenuHorizontal",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},showUnderline:{defaultValue:null,description:"Показывать серую полосу снизу",name:"showUnderline",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:"ID выбранной вкладки",name:"selectedTabId",required:!1,type:{name:"string"}},defaultSelectedTabId:{defaultValue:null,description:"ID выбранной по умолчанию вкладки",name:"defaultSelectedTabId",required:!1,type:{name:"string"}},onSelectTab:{defaultValue:null,description:"Коллбэк на изменение выбранной вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},onAddTab:{defaultValue:null,description:"",name:"onAddTab",required:!1,type:{name:"(() => void)"}},tabsId:{defaultValue:null,description:"Массив из уникальных ID вкладок",name:"tabsId",required:!0,type:{name:"string[]"}},renderTab:{defaultValue:null,description:"Рендер-функция для отрисовки вкладки",name:"renderTab",required:!0,type:{name:"(tabId: string, selected: boolean, onSelectTab?: ((tabId: string) => void) | undefined) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(tabId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},tabIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли вкладка disabled",name:"tabIsDisabled",required:!0,type:{name:"(tabId: string) => boolean"}},adaptive:{defaultValue:null,description:"",name:"adaptive",required:!1,type:{name:"enum",value:[{value:'"fill"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/tabMenus/CardTabMenuHorizontal.tsx#CardTabMenuHorizontal"]={docgenInfo:CardTabMenuHorizontal.__docgenInfo,name:"CardTabMenuHorizontal",path:"src/components/TabMenuComponent/tabMenus/CardTabMenuHorizontal.tsx#CardTabMenuHorizontal"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),uid=__webpack_require__("./src/components/common/uid.ts"),BaseTab=__webpack_require__("./src/components/TabMenuComponent/tabs/BaseTab.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function CardTab_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CardTab_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CardTab_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CardTab_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CardTab_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CardTab_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  &:hover:not(:disabled) {
    background: var(--admiral-color-Neutral_Neutral00, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  box-shadow:
    inset -1px 0 0 0 var(--admiral-color-Neutral_Neutral20, `,`),
    inset 1px 0 0 0 var(--admiral-color-Neutral_Neutral20, `,`),
    inset 0 1px 0 0 var(--admiral-color-Neutral_Neutral20, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: flex;
  justify-content: center;
  width: 100%;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-color: `,`;
  border-radius: 4px 4px 0 0;
  `,`
  `,`
  `,`
`]);return _templateObject3=function _templateObject(){return data},data}var selectedTabBorderMixin=(0,styled_components_browser_esm.AH)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 00"]}),showBorderTabMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 20"]},function(p){return p.theme.color["Neutral/Neutral 20"]},function(p){return p.theme.color["Neutral/Neutral 20"]}),adaptiveFillTabMixin=(0,styled_components_browser_esm.AH)(_templateObject2()),StyledBaseTab=(0,styled_components_browser_esm.Ay)(BaseTab.Z)(_templateObject3(),function(p){return p.$selected?"var(--admiral-color-Neutral_Neutral00, ".concat(p.theme.color["Neutral/Neutral 00"],")"):"transparent"},function(p){return p.$selected&&selectedTabBorderMixin},function(p){return p.$selected&&!p.$hideBorder&&showBorderTabMixin},function(p){return p.$adaptive?adaptiveFillTabMixin:"width: fit-content"}),CardTab=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,adaptive=_param.adaptive,hideBorder=_param.hideBorder,children=_param.children,disabled=_param.disabled,selected=_param.selected,onSelectTab=_param.onSelectTab,tabId=_param.tabId,id=_param.id,props=CardTab_object_without_properties(_param,["dimension","adaptive","hideBorder","children","disabled","selected","onSelectTab","tabId","id"]),defaultId=_sliced_to_array((0,react.useState)((0,uid.L)()),1)[0];return(0,jsx_runtime.jsx)(StyledBaseTab,_object_spread_props(CardTab_object_spread({},props),{role:"tab",$adaptive:"fill"===adaptive,type:"button",id:onSelectTab&&id?id:defaultId,ref:ref,"data-tabid":tabId,disabled:disabled,$dimension:void 0===_param_dimension?"l":_param_dimension,$selected:selected,$hideBorder:hideBorder,onClick:function(e){var tabId=e.currentTarget.dataset.tabid||"";null==onSelectTab||onSelectTab(tabId)},children:children}))});CardTab.displayName="CardTab";try{CardTab.displayName="CardTab",CardTab.__docgenInfo={description:"",displayName:"CardTab",props:{hideBorder:{defaultValue:null,description:"Скрыть обводку выбранной вкладки",name:"hideBorder",required:!1,type:{name:"boolean"}},adaptive:{defaultValue:null,description:"",name:"adaptive",required:!1,type:{name:"enum",value:[{value:'"fill"'}]}},tabId:{defaultValue:null,description:"ID вкладки",name:"tabId",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Отключение вкладки",name:"disabled",required:!1,type:{name:"boolean"}},selected:{defaultValue:null,description:"Выбранная вкладка",name:"selected",required:!1,type:{name:"boolean"}},onSelectTab:{defaultValue:null,description:"Коллбэк при выборе вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},dimension:{defaultValue:{value:"l"},description:"Размер вкладки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/tabs/CardTab.tsx#CardTab"]={docgenInfo:CardTab.__docgenInfo,name:"CardTab",path:"src/components/TabMenuComponent/tabs/CardTab.tsx#CardTab"})}catch(__react_docgen_typescript_loader_error){}var TabIcon=__webpack_require__("./src/components/TabMenuComponent/tabElements/TabIcon.tsx"),TabText=__webpack_require__("./src/components/TabMenuComponent/tabElements/TabText.tsx"),TabBadge=__webpack_require__("./src/components/TabMenuComponent/tabElements/TabBadge.tsx"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),MinusCircleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg"),WifiOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/communication/WifiOutline.svg"),PhoneOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/communication/PhoneOutline.svg"),SIMCardOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/communication/SIMCardOutline.svg"),HeadsetOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/communication/HeadsetOutline.svg"),SignalOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/communication/SignalOutline.svg"),TelegrammOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/communication/TelegrammOutline.svg");function CardTabMenuHorizontalTemplate_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CardTabMenuHorizontalTemplate_array_with_holes(arr){if(Array.isArray(arr))return arr}function CardTabMenuHorizontalTemplate_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CardTabMenuHorizontalTemplate_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CardTabMenuHorizontalTemplate_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CardTabMenuHorizontalTemplate_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CardTabMenuHorizontalTemplate_define_property(target,key,source[key])})}return target}function CardTabMenuHorizontalTemplate_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CardTabMenuHorizontalTemplate_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CardTabMenuHorizontalTemplate_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CardTabMenuHorizontalTemplate_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CardTabMenuHorizontalTemplate_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CardTabMenuHorizontalTemplate_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CardTabMenuHorizontalTemplate_sliced_to_array(arr,i){return CardTabMenuHorizontalTemplate_array_with_holes(arr)||CardTabMenuHorizontalTemplate_iterable_to_array_limit(arr,i)||CardTabMenuHorizontalTemplate_unsupported_iterable_to_array(arr,i)||CardTabMenuHorizontalTemplate_non_iterable_rest()}function CardTabMenuHorizontalTemplate_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CardTabMenuHorizontalTemplate_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CardTabMenuHorizontalTemplate_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CardTabMenuHorizontalTemplate_array_like_to_array(o,minLen)}}function CardTabMenuHorizontalTemplate_templateObject(){var data=CardTabMenuHorizontalTemplate_tagged_template_literal([`
  height: `,`px;
`]);return CardTabMenuHorizontalTemplate_templateObject=function _templateObject(){return data},data}function CardTabMenuHorizontalTemplate_templateObject1(){var data=CardTabMenuHorizontalTemplate_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, `,`);
`]);return CardTabMenuHorizontalTemplate_templateObject1=function _templateObject(){return data},data}function CardTabMenuHorizontalTemplate_templateObject2(){var data=CardTabMenuHorizontalTemplate_tagged_template_literal([`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  border: 1px solid var(--admiral-color-Neutral_Neutral20, `,`);
  border-top-width: 0;
  height: 100px;
`]);return CardTabMenuHorizontalTemplate_templateObject2=function _templateObject(){return data},data}function CardTabMenuHorizontalTemplate_templateObject3(){var data=CardTabMenuHorizontalTemplate_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`]);return CardTabMenuHorizontalTemplate_templateObject3=function _templateObject(){return data},data}var CustomHorizontalCardTab=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,disabled=_param.disabled,selected=_param.selected,tabId=_param.tabId,text=_param.text,badge=_param.badge,icon=_param.icon,props=CardTabMenuHorizontalTemplate_object_without_properties(_param,["dimension","disabled","selected","tabId","text","badge","icon"]);return(0,jsx_runtime.jsxs)(CardTab,CardTabMenuHorizontalTemplate_object_spread_props(CardTabMenuHorizontalTemplate_object_spread({},props),{tabId:tabId,ref:ref,dimension:dimension,disabled:disabled,selected:selected,children:[icon&&(0,jsx_runtime.jsx)(TabIcon.$,{$dimension:dimension,$disabled:disabled,children:icon}),(0,jsx_runtime.jsx)(TabText.j,{children:text}),badge&&(0,jsx_runtime.jsx)(TabBadge.RQ,{disabled:disabled,selected:selected,children:badge})]}))}),tabs=[{text:"Wi-Fi",tabId:"1",icon:(0,jsx_runtime.jsx)(WifiOutline.h,{})},{text:"Phone",tabId:"2",icon:(0,jsx_runtime.jsx)(PhoneOutline.h,{}),disabled:!0},{text:"Sim card",tabId:"3",icon:(0,jsx_runtime.jsx)(SIMCardOutline.h,{})},{text:"Viber",tabId:"9",badge:7},{text:"Headset",tabId:"4",icon:(0,jsx_runtime.jsx)(HeadsetOutline.h,{})},{text:"Network signal",tabId:"5",icon:(0,jsx_runtime.jsx)(SignalOutline.h,{})},{text:"TelegrammOutline",tabId:"6",icon:(0,jsx_runtime.jsx)(TelegrammOutline.h,{})},{text:"WhatsApp is very very very very long",tabId:"7"},{text:"ICQ",tabId:"8",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{}),disabled:!0}],Separator=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalTemplate_templateObject(),function(p){return p.height}),Wrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalTemplate_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 05"]}),Content=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalTemplate_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return p.theme.color["Neutral/Neutral 20"]}),MenuItemWrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalTemplate_templateObject3()),CardTabMenuHorizontalTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_showUnderline=_param.showUnderline,_param_defaultSelectedTabId=_param.defaultSelectedTabId,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CardTabMenuHorizontalTemplate_object_without_properties(_param,["dimension","showUnderline","defaultSelectedTabId","themeBorderKind","CSSCustomProps"]),tabsMap=(0,react.useMemo)(function(){return tabs.map(function(tab){return tab.tabId})},[tabs]),_useState=CardTabMenuHorizontalTemplate_sliced_to_array((0,react.useState)(void 0===_param_defaultSelectedTabId?"3":_param_defaultSelectedTabId),2),selectedTab=_useState[0],setSelectedTab=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"CardTabMenu"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Компонент для переключения между группами логически связанного контента. Существует в двух размерах - L 48 и M 40 px по высоте. Опционально может содержать иконки и/или бейджи.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Для большей выразительности рекомендуется применять компонент на сером фоне. Активная вкладка имеет фон белого цвета по умолчанию, так же рекомендуется красить подложку контентной области в белый цвет и добавлять обводку с трех сторон. В таком случае связь контента с закладкой более очевидна. Рекомендации",(0,jsx_runtime.jsx)("li",{children:"При загрузке страницы, одна из вкладок должна быть активной по дефолту"}),(0,jsx_runtime.jsx)("li",{children:"Текст в закладке должен быть коротким, в идеале не более трех слов"}),(0,jsx_runtime.jsx)("li",{children:"Избегайте большого количества закладок — это не удобно для пользователей. В таких случаях можно использовать компонент Tree View"}),(0,jsx_runtime.jsx)("li",{children:"Избегайте помещения компонента Card Tab внутрь контента другого Card Tab"}),(0,jsx_runtime.jsx)("li",{children:"Не заставляйте пользователя переключаться между вкладками для сравнения информации. Отдельная закладка должна содержать в себе всю необходимую информацию для завершения задания."}),(0,jsx_runtime.jsx)(Separator,{height:8}),"Если вкладки не помещаются в отведенную ширину целиком, то включается Overflow Menu. Размеры выпадающего меню соответствуют размерам Tab Menu — L для L размера и M для M размера. В выпадающем меню отображаются вкладки, не поместившиеся в основной ряд. При выборе вкладки из меню, она отображается в основном ряду крайней справа, заменяя собой предыдущую крайнюю вкладку, которая, в свою очередь, «уходит» в меню. Активная вкладка при этом отображается в меню, как выбранная. Если вкладка из меню большая и требует больше места, то она заменяет собой две последние вкладки. В таком случае и вторая с края вкладка уходит в меню."]})]}),(0,jsx_runtime.jsx)(Separator,{height:40}),(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(CardTabMenuHorizontal,CardTabMenuHorizontalTemplate_object_spread_props(CardTabMenuHorizontalTemplate_object_spread({},props),{dimension:dimension,showUnderline:void 0===_param_showUnderline||_param_showUnderline,selectedTabId:selectedTab,defaultSelectedTabId:"3",onSelectTab:function(tabId){return setSelectedTab(tabId)},tabsId:tabsMap,renderDropMenuItem:function(tabId){var currentTab=tabs.find(function(tab){return tab.tabId===tabId});return function(options){return(0,react.createElement)(MenuItem.D,CardTabMenuHorizontalTemplate_object_spread_props(CardTabMenuHorizontalTemplate_object_spread({dimension:dimension},options),{key:tabId}),(0,jsx_runtime.jsx)(MenuItemWrapper,{children:null==currentTab?void 0:currentTab.text}))}},renderTab:function(tabId,selected,onSelectTab){var currentTab=tabs.find(function(tab){return tab.tabId===tabId}),text=(null==currentTab?void 0:currentTab.text)||"",disabled=!!(null==currentTab?void 0:currentTab.disabled),badge=null==currentTab?void 0:currentTab.badge,icon=null==currentTab?void 0:currentTab.icon;return(0,jsx_runtime.jsx)(CustomHorizontalCardTab,{dimension:dimension,tabId:tabId,text:text,badge:badge,icon:icon,selected:selected,disabled:disabled,onSelectTab:onSelectTab},tabId)},tabIsDisabled:function(tabId){var currentTab=tabs.find(function(tab){return tab.tabId===tabId});return!!(null==currentTab?void 0:currentTab.disabled)}})),(0,jsx_runtime.jsx)(Content,{})]})]})};try{CardTabMenuHorizontalTemplate.displayName="CardTabMenuHorizontalTemplate",CardTabMenuHorizontalTemplate.__docgenInfo={description:"",displayName:"CardTabMenuHorizontalTemplate",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},showUnderline:{defaultValue:{value:"true"},description:"Показывать серую полосу снизу",name:"showUnderline",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:"ID выбранной вкладки",name:"selectedTabId",required:!1,type:{name:"string"}},defaultSelectedTabId:{defaultValue:{value:"3"},description:"ID выбранной по умолчанию вкладки",name:"defaultSelectedTabId",required:!1,type:{name:"string"}},onSelectTab:{defaultValue:null,description:"Коллбэк на изменение выбранной вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},onAddTab:{defaultValue:null,description:"",name:"onAddTab",required:!1,type:{name:"(() => void)"}},tabsId:{defaultValue:null,description:"Массив из уникальных ID вкладок",name:"tabsId",required:!0,type:{name:"string[]"}},renderTab:{defaultValue:null,description:"Рендер-функция для отрисовки вкладки",name:"renderTab",required:!0,type:{name:"(tabId: string, selected: boolean, onSelectTab?: ((tabId: string) => void) | undefined) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(tabId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},tabIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли вкладка disabled",name:"tabIsDisabled",required:!0,type:{name:"(tabId: string) => boolean"}},adaptive:{defaultValue:null,description:"",name:"adaptive",required:!1,type:{name:"enum",value:[{value:'"fill"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalTemplate.tsx#CardTabMenuHorizontalTemplate"]={docgenInfo:CardTabMenuHorizontalTemplate.__docgenInfo,name:"CardTabMenuHorizontalTemplate",path:"src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalTemplate.tsx#CardTabMenuHorizontalTemplate"})}catch(__react_docgen_typescript_loader_error){}var TabCloseIconButton=__webpack_require__("./src/components/TabMenuComponent/tabElements/TabCloseIconButton.tsx");function CardTabMenuHorizontalWithAddButtonTemplate_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CardTabMenuHorizontalWithAddButtonTemplate_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return CardTabMenuHorizontalWithAddButtonTemplate_array_like_to_array(arr)}function CardTabMenuHorizontalWithAddButtonTemplate_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function CardTabMenuHorizontalWithAddButtonTemplate_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CardTabMenuHorizontalWithAddButtonTemplate_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CardTabMenuHorizontalWithAddButtonTemplate_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CardTabMenuHorizontalWithAddButtonTemplate_define_property(target,key,source[key])})}return target}function CardTabMenuHorizontalWithAddButtonTemplate_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CardTabMenuHorizontalWithAddButtonTemplate_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CardTabMenuHorizontalWithAddButtonTemplate_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CardTabMenuHorizontalWithAddButtonTemplate_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CardTabMenuHorizontalWithAddButtonTemplate_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CardTabMenuHorizontalWithAddButtonTemplate_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CardTabMenuHorizontalWithAddButtonTemplate_sliced_to_array(arr,i){return CardTabMenuHorizontalWithAddButtonTemplate_array_with_holes(arr)||CardTabMenuHorizontalWithAddButtonTemplate_iterable_to_array_limit(arr,i)||CardTabMenuHorizontalWithAddButtonTemplate_unsupported_iterable_to_array(arr,i)||CardTabMenuHorizontalWithAddButtonTemplate_non_iterable_rest()}function CardTabMenuHorizontalWithAddButtonTemplate_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||CardTabMenuHorizontalWithAddButtonTemplate_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function CardTabMenuHorizontalWithAddButtonTemplate_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CardTabMenuHorizontalWithAddButtonTemplate_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CardTabMenuHorizontalWithAddButtonTemplate_array_like_to_array(o,minLen)}}function CardTabMenuHorizontalWithAddButtonTemplate_templateObject(){var data=CardTabMenuHorizontalWithAddButtonTemplate_tagged_template_literal([`
  height: `,`px;
`]);return CardTabMenuHorizontalWithAddButtonTemplate_templateObject=function _templateObject(){return data},data}function CardTabMenuHorizontalWithAddButtonTemplate_templateObject1(){var data=CardTabMenuHorizontalWithAddButtonTemplate_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, `,`);
`]);return CardTabMenuHorizontalWithAddButtonTemplate_templateObject1=function _templateObject(){return data},data}function CardTabMenuHorizontalWithAddButtonTemplate_templateObject2(){var data=CardTabMenuHorizontalWithAddButtonTemplate_tagged_template_literal([`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  border: 1px solid var(--admiral-color-Neutral_Neutral20, `,`);
  border-top-width: 0;
  height: 100px;
`]);return CardTabMenuHorizontalWithAddButtonTemplate_templateObject2=function _templateObject(){return data},data}function CardTabMenuHorizontalWithAddButtonTemplate_templateObject3(){var data=CardTabMenuHorizontalWithAddButtonTemplate_tagged_template_literal([`
  display: flex;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`]);return CardTabMenuHorizontalWithAddButtonTemplate_templateObject3=function _templateObject(){return data},data}var CardTabMenuHorizontalWithAddButtonTemplate_CustomHorizontalCardTab=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,disabled=_param.disabled,selected=_param.selected,tabId=_param.tabId,text=_param.text,badge=_param.badge,icon=_param.icon,onCloseTab=_param.onCloseTab,props=CardTabMenuHorizontalWithAddButtonTemplate_object_without_properties(_param,["dimension","disabled","selected","tabId","text","badge","icon","onCloseTab"]);return(0,jsx_runtime.jsxs)(CardTab,CardTabMenuHorizontalWithAddButtonTemplate_object_spread_props(CardTabMenuHorizontalWithAddButtonTemplate_object_spread({},props),{tabId:tabId,ref:ref,dimension:dimension,disabled:disabled,selected:selected,children:[icon&&(0,jsx_runtime.jsx)(TabIcon.$,{$dimension:dimension,$disabled:disabled,children:icon}),(0,jsx_runtime.jsx)(TabText.j,{children:text}),badge&&(0,jsx_runtime.jsx)(TabBadge.RQ,{disabled:disabled,selected:selected,children:badge}),(0,jsx_runtime.jsx)(TabCloseIconButton.V,{dimension:dimension,disabled:disabled,onCloseIconButtonClick:function(){tabId&&(null==onCloseTab||onCloseTab(tabId))}})]}))}),tabsBase=[{text:"Text1",tabId:"1"},{text:"Text2",tabId:"2"},{text:"Text3",tabId:"3"},{text:"Text4",tabId:"4"},{text:"Text5",tabId:"5"},{text:"Text6",tabId:"6"},{text:"Text7",tabId:"7"},{text:"Text8",tabId:"8"},{text:"Text9",tabId:"9"}],tabCount=tabsBase.length,CardTabMenuHorizontalWithAddButtonTemplate_Separator=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalWithAddButtonTemplate_templateObject(),function(p){return p.height}),CardTabMenuHorizontalWithAddButtonTemplate_Wrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalWithAddButtonTemplate_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 05"]}),CardTabMenuHorizontalWithAddButtonTemplate_Content=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalWithAddButtonTemplate_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return p.theme.color["Neutral/Neutral 20"]}),CardTabMenuHorizontalWithAddButtonTemplate_MenuItemWrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalWithAddButtonTemplate_templateObject3()),getTabsMap=function(tabs){return tabs.map(function(tab){return tab.tabId||""})},CardTabMenuHorizontalWithAddButtonTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_showUnderline=_param.showUnderline,_param_defaultSelectedTabId=_param.defaultSelectedTabId,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CardTabMenuHorizontalWithAddButtonTemplate_object_without_properties(_param,["dimension","showUnderline","defaultSelectedTabId","themeBorderKind","CSSCustomProps"]),_useState=CardTabMenuHorizontalWithAddButtonTemplate_sliced_to_array((0,react.useState)(tabsBase),2),tabs=_useState[0],setTabs=_useState[1],_useState1=CardTabMenuHorizontalWithAddButtonTemplate_sliced_to_array((0,react.useState)(getTabsMap(tabs)),2),tabsMap=_useState1[0],setTabsMap=_useState1[1],_useState2=CardTabMenuHorizontalWithAddButtonTemplate_sliced_to_array((0,react.useState)(void 0===_param_defaultSelectedTabId?"3":_param_defaultSelectedTabId),2),selectedTab=_useState2[0],setSelectedTab=_useState2[1],tabIsDisabled=function(tabId){var currentTab=tabs.find(function(tab){return tab.tabId===tabId});return!!(null==currentTab?void 0:currentTab.disabled)},handleCloseTab=function(tabId){if(tabs.length>1){var tabIndex=tabs.findIndex(function(tab){return tab.tabId===tabId}),newTabs=_to_consumable_array(tabs);newTabs.splice(tabIndex,1),tabId===selectedTab&&setSelectedTab(newTabs[0].tabId),setTabs(newTabs),setTabsMap(getTabsMap(newTabs))}};return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Удаление, добавление вкладок"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Рекомендации",(0,jsx_runtime.jsx)("li",{children:"При нажатии на иконку закрытия — владка и контент под ней удаляются."}),(0,jsx_runtime.jsx)("li",{children:"Если удалить текущую вкладку, то автоматически включится первая из оставшихся вкладок."}),(0,jsx_runtime.jsx)("li",{children:"При удалении не активной вкладки, вы остаетесь там же, где и были."}),(0,jsx_runtime.jsx)("li",{children:"Удалить все вкладки нельзя, должна остаться хотя бы одна вкладка."}),(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithAddButtonTemplate_Separator,{height:8}),"Можно включать опцию добавления вкладок. Механика добавления вкладки настраивается пользователем. При переполнении вкладок (есть меню) кнопка добавления вкладки видна всегда."]})]}),(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithAddButtonTemplate_Separator,{height:40}),(0,jsx_runtime.jsxs)(CardTabMenuHorizontalWithAddButtonTemplate_Wrapper,{children:[(0,jsx_runtime.jsx)(CardTabMenuHorizontal,CardTabMenuHorizontalWithAddButtonTemplate_object_spread_props(CardTabMenuHorizontalWithAddButtonTemplate_object_spread({},props),{dimension:dimension,showUnderline:void 0===_param_showUnderline||_param_showUnderline,selectedTabId:selectedTab,defaultSelectedTabId:"3",onSelectTab:function(tabId){return setSelectedTab(tabId)},onAddTab:function(){var newId=(tabCount+=1).toString(),newText="Text".concat(newId),newTabs=_to_consumable_array(tabs).concat([{tabId:newId,text:newText}]);setTabs(newTabs),setTabsMap(getTabsMap(newTabs)),setSelectedTab(newId)},tabsId:tabsMap,renderDropMenuItem:function(tabId){var currentTab=tabs.find(function(tab){return tab.tabId===tabId});return function(options){return(0,react.createElement)(MenuItem.D,CardTabMenuHorizontalWithAddButtonTemplate_object_spread_props(CardTabMenuHorizontalWithAddButtonTemplate_object_spread({dimension:dimension},options),{key:tabId}),(0,jsx_runtime.jsxs)(CardTabMenuHorizontalWithAddButtonTemplate_MenuItemWrapper,{children:[(0,jsx_runtime.jsx)("div",{children:null==currentTab?void 0:currentTab.text}),(0,jsx_runtime.jsx)(TabCloseIconButton.V,{dimension:dimension,disabled:tabIsDisabled(tabId),onCloseIconButtonClick:function(){return handleCloseTab(tabId)}})]}))}},renderTab:function(tabId,selected,onSelectTab){var currentTab=tabs.find(function(tab){return tab.tabId===tabId}),text=(null==currentTab?void 0:currentTab.text)||"",disabled=!!(null==currentTab?void 0:currentTab.disabled),badge=null==currentTab?void 0:currentTab.badge,icon=null==currentTab?void 0:currentTab.icon;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithAddButtonTemplate_CustomHorizontalCardTab,{dimension:dimension,tabId:tabId,text:text,badge:badge,icon:icon,selected:selected,disabled:disabled,onSelectTab:onSelectTab,onCloseTab:handleCloseTab},tabId)},tabIsDisabled:tabIsDisabled})),(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithAddButtonTemplate_Content,{})]})]})};try{CardTabMenuHorizontalWithAddButtonTemplate.displayName="CardTabMenuHorizontalWithAddButtonTemplate",CardTabMenuHorizontalWithAddButtonTemplate.__docgenInfo={description:"",displayName:"CardTabMenuHorizontalWithAddButtonTemplate",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},showUnderline:{defaultValue:{value:"true"},description:"Показывать серую полосу снизу",name:"showUnderline",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:"ID выбранной вкладки",name:"selectedTabId",required:!1,type:{name:"string"}},defaultSelectedTabId:{defaultValue:{value:"3"},description:"ID выбранной по умолчанию вкладки",name:"defaultSelectedTabId",required:!1,type:{name:"string"}},onSelectTab:{defaultValue:null,description:"Коллбэк на изменение выбранной вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},onAddTab:{defaultValue:null,description:"",name:"onAddTab",required:!1,type:{name:"(() => void)"}},tabsId:{defaultValue:null,description:"Массив из уникальных ID вкладок",name:"tabsId",required:!0,type:{name:"string[]"}},renderTab:{defaultValue:null,description:"Рендер-функция для отрисовки вкладки",name:"renderTab",required:!0,type:{name:"(tabId: string, selected: boolean, onSelectTab?: ((tabId: string) => void) | undefined) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(tabId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},tabIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли вкладка disabled",name:"tabIsDisabled",required:!0,type:{name:"(tabId: string) => boolean"}},adaptive:{defaultValue:null,description:"",name:"adaptive",required:!1,type:{name:"enum",value:[{value:'"fill"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalWithAddButtonTemplate.tsx#CardTabMenuHorizontalWithAddButtonTemplate"]={docgenInfo:CardTabMenuHorizontalWithAddButtonTemplate.__docgenInfo,name:"CardTabMenuHorizontalWithAddButtonTemplate",path:"src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalWithAddButtonTemplate.tsx#CardTabMenuHorizontalWithAddButtonTemplate"})}catch(__react_docgen_typescript_loader_error){}function HorizontalCardTabMenuContainer_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function HorizontalCardTabMenuContainer_templateObject(){var data=HorizontalCardTabMenuContainer_tagged_template_literal([`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -1px 0 0
    `,`;
  overflow: hidden;
`]);return HorizontalCardTabMenuContainer_templateObject=function _templateObject(){return data},data}function HorizontalCardTabMenuContainer_templateObject1(){var data=HorizontalCardTabMenuContainer_tagged_template_literal([`
  padding: 0 `,`px;
  box-shadow: inset 0 -1px 0 0
    `,`;
`]);return HorizontalCardTabMenuContainer_templateObject1=function _templateObject(){return data},data}var HorizontalCardTabMenuContainer=styled_components_browser_esm.Ay.div(HorizontalCardTabMenuContainer_templateObject(),function(p){return p.$showUnderline?"var(--admiral-color-Neutral_Neutral20, ".concat(p.theme.color["Neutral/Neutral 20"],")"):"transparent"});HorizontalCardTabMenuContainer.displayName="HorizontalCardTabMenuContainer";var CardTabMenuHorizontalLeadingGapWrapper=styled_components_browser_esm.Ay.div(HorizontalCardTabMenuContainer_templateObject1(),function(p){return p.$horizontalPaddingSize},function(p){return"var(--admiral-color-Neutral_Neutral20, ".concat(p.theme.color["Neutral/Neutral 20"],")")});CardTabMenuHorizontalLeadingGapWrapper.displayName="CardTabMenuHorizontalLeadingGapWrapper";try{HorizontalCardTabMenuContainer.displayName="HorizontalCardTabMenuContainer",HorizontalCardTabMenuContainer.__docgenInfo={description:"",displayName:"HorizontalCardTabMenuContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/containers/HorizontalCardTabMenuContainer.tsx#HorizontalCardTabMenuContainer"]={docgenInfo:HorizontalCardTabMenuContainer.__docgenInfo,name:"HorizontalCardTabMenuContainer",path:"src/components/TabMenuComponent/containers/HorizontalCardTabMenuContainer.tsx#HorizontalCardTabMenuContainer"})}catch(__react_docgen_typescript_loader_error){}try{CardTabMenuHorizontalLeadingGapWrapper.displayName="CardTabMenuHorizontalLeadingGapWrapper",CardTabMenuHorizontalLeadingGapWrapper.__docgenInfo={description:"",displayName:"CardTabMenuHorizontalLeadingGapWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/containers/HorizontalCardTabMenuContainer.tsx#CardTabMenuHorizontalLeadingGapWrapper"]={docgenInfo:CardTabMenuHorizontalLeadingGapWrapper.__docgenInfo,name:"CardTabMenuHorizontalLeadingGapWrapper",path:"src/components/TabMenuComponent/containers/HorizontalCardTabMenuContainer.tsx#CardTabMenuHorizontalLeadingGapWrapper"})}catch(__react_docgen_typescript_loader_error){}function CardTabMenuHorizontalLeadingGapTemplate_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CardTabMenuHorizontalLeadingGapTemplate_array_with_holes(arr){if(Array.isArray(arr))return arr}function CardTabMenuHorizontalLeadingGapTemplate_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CardTabMenuHorizontalLeadingGapTemplate_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CardTabMenuHorizontalLeadingGapTemplate_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CardTabMenuHorizontalLeadingGapTemplate_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CardTabMenuHorizontalLeadingGapTemplate_define_property(target,key,source[key])})}return target}function CardTabMenuHorizontalLeadingGapTemplate_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CardTabMenuHorizontalLeadingGapTemplate_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CardTabMenuHorizontalLeadingGapTemplate_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CardTabMenuHorizontalLeadingGapTemplate_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CardTabMenuHorizontalLeadingGapTemplate_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CardTabMenuHorizontalLeadingGapTemplate_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CardTabMenuHorizontalLeadingGapTemplate_sliced_to_array(arr,i){return CardTabMenuHorizontalLeadingGapTemplate_array_with_holes(arr)||CardTabMenuHorizontalLeadingGapTemplate_iterable_to_array_limit(arr,i)||CardTabMenuHorizontalLeadingGapTemplate_unsupported_iterable_to_array(arr,i)||CardTabMenuHorizontalLeadingGapTemplate_non_iterable_rest()}function CardTabMenuHorizontalLeadingGapTemplate_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CardTabMenuHorizontalLeadingGapTemplate_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CardTabMenuHorizontalLeadingGapTemplate_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CardTabMenuHorizontalLeadingGapTemplate_array_like_to_array(o,minLen)}}function CardTabMenuHorizontalLeadingGapTemplate_templateObject(){var data=CardTabMenuHorizontalLeadingGapTemplate_tagged_template_literal([`
  height: `,`px;
`]);return CardTabMenuHorizontalLeadingGapTemplate_templateObject=function _templateObject(){return data},data}function CardTabMenuHorizontalLeadingGapTemplate_templateObject1(){var data=CardTabMenuHorizontalLeadingGapTemplate_tagged_template_literal([`
  width: `,`px;
  padding-top: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: var(--admiral-color-Neutral_Neutral05, `,`);
  border: 1px solid var(--admiral-color-Neutral_Neutral20, `,`);
`]);return CardTabMenuHorizontalLeadingGapTemplate_templateObject1=function _templateObject(){return data},data}function CardTabMenuHorizontalLeadingGapTemplate_templateObject2(){var data=CardTabMenuHorizontalLeadingGapTemplate_tagged_template_literal([`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  height: 100px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`]);return CardTabMenuHorizontalLeadingGapTemplate_templateObject2=function _templateObject(){return data},data}function CardTabMenuHorizontalLeadingGapTemplate_templateObject3(){var data=CardTabMenuHorizontalLeadingGapTemplate_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`]);return CardTabMenuHorizontalLeadingGapTemplate_templateObject3=function _templateObject(){return data},data}var CardTabMenuHorizontalLeadingGapTemplate_CustomHorizontalCardTab=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,disabled=_param.disabled,selected=_param.selected,tabId=_param.tabId,text=_param.text,icon=_param.icon,props=CardTabMenuHorizontalLeadingGapTemplate_object_without_properties(_param,["dimension","disabled","selected","tabId","text","icon"]);return(0,jsx_runtime.jsxs)(CardTab,CardTabMenuHorizontalLeadingGapTemplate_object_spread_props(CardTabMenuHorizontalLeadingGapTemplate_object_spread({},props),{tabId:tabId,ref:ref,dimension:dimension,disabled:disabled,selected:selected,children:[icon&&(0,jsx_runtime.jsx)(TabIcon.$,{$dimension:dimension,$disabled:disabled,children:icon}),(0,jsx_runtime.jsx)(TabText.j,{children:text})]}))}),CardTabMenuHorizontalLeadingGapTemplate_tabs=[{text:"Wi-Fi",tabId:"1",icon:(0,jsx_runtime.jsx)(WifiOutline.h,{})},{text:"Phone",tabId:"2",icon:(0,jsx_runtime.jsx)(PhoneOutline.h,{}),disabled:!0},{text:"Sim card",tabId:"3",icon:(0,jsx_runtime.jsx)(SIMCardOutline.h,{})}],CardTabMenuHorizontalLeadingGapTemplate_Separator=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalLeadingGapTemplate_templateObject(),function(p){return p.height}),CardTabMenuHorizontalLeadingGapTemplate_Wrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalLeadingGapTemplate_templateObject1(),function(p){return"l"===p.$dimension?377:322},function(p){return p.theme.color["Neutral/Neutral 05"]},function(p){return p.theme.color["Neutral/Neutral 20"]}),CardTabMenuHorizontalLeadingGapTemplate_Content=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalLeadingGapTemplate_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 00"]}),CardTabMenuHorizontalLeadingGapTemplate_MenuItemWrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalLeadingGapTemplate_templateObject3()),CardTabMenuHorizontalLeadingGapTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_showUnderline=_param.showUnderline,_param_defaultSelectedTabId=_param.defaultSelectedTabId,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CardTabMenuHorizontalLeadingGapTemplate_object_without_properties(_param,["dimension","showUnderline","defaultSelectedTabId","themeBorderKind","CSSCustomProps"]),tabsMap=(0,react.useMemo)(function(){return CardTabMenuHorizontalLeadingGapTemplate_tabs.map(function(tab){return tab.tabId})},[CardTabMenuHorizontalLeadingGapTemplate_tabs]),_useState=CardTabMenuHorizontalLeadingGapTemplate_sliced_to_array((0,react.useState)(void 0===_param_defaultSelectedTabId?"1":_param_defaultSelectedTabId),2),selectedTab=_useState[0],setSelectedTab=_useState[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"CardTabMenu"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["В некоторых сценариях нужен отступ слева (полоска снизу слева от первой вкладки), что бы вставлять компонент во фреймы с обводкой, например карточки.",(0,jsx_runtime.jsx)(CardTabMenuHorizontalLeadingGapTemplate_Separator,{height:8}),"В таких сценариях добавляйте такой же или больший отступ справа. Значение может быть произвольным и зависит от сценария."]})]}),(0,jsx_runtime.jsx)(CardTabMenuHorizontalLeadingGapTemplate_Separator,{height:40}),(0,jsx_runtime.jsxs)(CardTabMenuHorizontalLeadingGapTemplate_Wrapper,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(CardTabMenuHorizontalLeadingGapWrapper,{$horizontalPaddingSize:16,children:(0,jsx_runtime.jsx)(CardTabMenuHorizontal,CardTabMenuHorizontalLeadingGapTemplate_object_spread_props(CardTabMenuHorizontalLeadingGapTemplate_object_spread({},props),{dimension:dimension,showUnderline:void 0===_param_showUnderline||_param_showUnderline,selectedTabId:selectedTab,defaultSelectedTabId:"3",onSelectTab:function(tabId){return setSelectedTab(tabId)},tabsId:tabsMap,renderDropMenuItem:function(tabId){var currentTab=CardTabMenuHorizontalLeadingGapTemplate_tabs.find(function(tab){return tab.tabId===tabId});return function(options){return(0,react.createElement)(MenuItem.D,CardTabMenuHorizontalLeadingGapTemplate_object_spread_props(CardTabMenuHorizontalLeadingGapTemplate_object_spread({dimension:dimension},options),{key:tabId}),(0,jsx_runtime.jsx)(CardTabMenuHorizontalLeadingGapTemplate_MenuItemWrapper,{children:null==currentTab?void 0:currentTab.text}))}},renderTab:function(tabId,selected,onSelectTab){var currentTab=CardTabMenuHorizontalLeadingGapTemplate_tabs.find(function(tab){return tab.tabId===tabId}),text=(null==currentTab?void 0:currentTab.text)||"",disabled=!!(null==currentTab?void 0:currentTab.disabled),icon=null==currentTab?void 0:currentTab.icon;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalLeadingGapTemplate_CustomHorizontalCardTab,{dimension:dimension,tabId:tabId,text:text,icon:icon,selected:selected,disabled:disabled,onSelectTab:onSelectTab},tabId)},tabIsDisabled:function(tabId){var currentTab=CardTabMenuHorizontalLeadingGapTemplate_tabs.find(function(tab){return tab.tabId===tabId});return!!(null==currentTab?void 0:currentTab.disabled)}}))}),(0,jsx_runtime.jsx)(CardTabMenuHorizontalLeadingGapTemplate_Content,{})]})]})};try{CardTabMenuHorizontalLeadingGapTemplate.displayName="CardTabMenuHorizontalLeadingGapTemplate",CardTabMenuHorizontalLeadingGapTemplate.__docgenInfo={description:"",displayName:"CardTabMenuHorizontalLeadingGapTemplate",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},showUnderline:{defaultValue:{value:"true"},description:"Показывать серую полосу снизу",name:"showUnderline",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:"ID выбранной вкладки",name:"selectedTabId",required:!1,type:{name:"string"}},defaultSelectedTabId:{defaultValue:{value:"1"},description:"ID выбранной по умолчанию вкладки",name:"defaultSelectedTabId",required:!1,type:{name:"string"}},onSelectTab:{defaultValue:null,description:"Коллбэк на изменение выбранной вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},onAddTab:{defaultValue:null,description:"",name:"onAddTab",required:!1,type:{name:"(() => void)"}},tabsId:{defaultValue:null,description:"Массив из уникальных ID вкладок",name:"tabsId",required:!0,type:{name:"string[]"}},renderTab:{defaultValue:null,description:"Рендер-функция для отрисовки вкладки",name:"renderTab",required:!0,type:{name:"(tabId: string, selected: boolean, onSelectTab?: ((tabId: string) => void) | undefined) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(tabId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},tabIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли вкладка disabled",name:"tabIsDisabled",required:!0,type:{name:"(tabId: string) => boolean"}},adaptive:{defaultValue:null,description:"",name:"adaptive",required:!1,type:{name:"enum",value:[{value:'"fill"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalLeadingGapTemplate.tsx#CardTabMenuHorizontalLeadingGapTemplate"]={docgenInfo:CardTabMenuHorizontalLeadingGapTemplate.__docgenInfo,name:"CardTabMenuHorizontalLeadingGapTemplate",path:"src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalLeadingGapTemplate.tsx#CardTabMenuHorizontalLeadingGapTemplate"})}catch(__react_docgen_typescript_loader_error){}function CardTabMenuHorizontalWithoutBorderTemplate_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CardTabMenuHorizontalWithoutBorderTemplate_array_with_holes(arr){if(Array.isArray(arr))return arr}function CardTabMenuHorizontalWithoutBorderTemplate_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CardTabMenuHorizontalWithoutBorderTemplate_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CardTabMenuHorizontalWithoutBorderTemplate_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CardTabMenuHorizontalWithoutBorderTemplate_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CardTabMenuHorizontalWithoutBorderTemplate_define_property(target,key,source[key])})}return target}function CardTabMenuHorizontalWithoutBorderTemplate_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CardTabMenuHorizontalWithoutBorderTemplate_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CardTabMenuHorizontalWithoutBorderTemplate_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CardTabMenuHorizontalWithoutBorderTemplate_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CardTabMenuHorizontalWithoutBorderTemplate_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CardTabMenuHorizontalWithoutBorderTemplate_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CardTabMenuHorizontalWithoutBorderTemplate_sliced_to_array(arr,i){return CardTabMenuHorizontalWithoutBorderTemplate_array_with_holes(arr)||CardTabMenuHorizontalWithoutBorderTemplate_iterable_to_array_limit(arr,i)||CardTabMenuHorizontalWithoutBorderTemplate_unsupported_iterable_to_array(arr,i)||CardTabMenuHorizontalWithoutBorderTemplate_non_iterable_rest()}function CardTabMenuHorizontalWithoutBorderTemplate_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CardTabMenuHorizontalWithoutBorderTemplate_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CardTabMenuHorizontalWithoutBorderTemplate_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CardTabMenuHorizontalWithoutBorderTemplate_array_like_to_array(o,minLen)}}function CardTabMenuHorizontalWithoutBorderTemplate_templateObject(){var data=CardTabMenuHorizontalWithoutBorderTemplate_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, `,`);
`]);return CardTabMenuHorizontalWithoutBorderTemplate_templateObject=function _templateObject(){return data},data}function CardTabMenuHorizontalWithoutBorderTemplate_templateObject1(){var data=CardTabMenuHorizontalWithoutBorderTemplate_tagged_template_literal([`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  border-top-width: 0;
  height: 100px;
`]);return CardTabMenuHorizontalWithoutBorderTemplate_templateObject1=function _templateObject(){return data},data}function CardTabMenuHorizontalWithoutBorderTemplate_templateObject2(){var data=CardTabMenuHorizontalWithoutBorderTemplate_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`]);return CardTabMenuHorizontalWithoutBorderTemplate_templateObject2=function _templateObject(){return data},data}var CardTabMenuHorizontalWithoutBorderTemplate_CustomHorizontalCardTab=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,hideBorder=_param.hideBorder,disabled=_param.disabled,selected=_param.selected,tabId=_param.tabId,text=_param.text,badge=_param.badge,icon=_param.icon,props=CardTabMenuHorizontalWithoutBorderTemplate_object_without_properties(_param,["dimension","hideBorder","disabled","selected","tabId","text","badge","icon"]);return(0,jsx_runtime.jsxs)(CardTab,CardTabMenuHorizontalWithoutBorderTemplate_object_spread_props(CardTabMenuHorizontalWithoutBorderTemplate_object_spread({},props),{hideBorder:hideBorder,tabId:tabId,ref:ref,dimension:dimension,disabled:disabled,selected:selected,children:[icon&&(0,jsx_runtime.jsx)(TabIcon.$,{$dimension:dimension,$disabled:disabled,children:icon}),(0,jsx_runtime.jsx)(TabText.j,{children:text}),badge&&(0,jsx_runtime.jsx)(TabBadge.RQ,{disabled:disabled,selected:selected,children:badge})]}))}),CardTabMenuHorizontalWithoutBorderTemplate_tabs=[{text:"Wi-Fi",tabId:"1",icon:(0,jsx_runtime.jsx)(WifiOutline.h,{})},{text:"Phone",tabId:"2",icon:(0,jsx_runtime.jsx)(PhoneOutline.h,{}),disabled:!0},{text:"Sim card",tabId:"3",icon:(0,jsx_runtime.jsx)(SIMCardOutline.h,{})},{text:"Viber",tabId:"9",badge:7},{text:"Headset",tabId:"4",icon:(0,jsx_runtime.jsx)(HeadsetOutline.h,{})},{text:"Network signal",tabId:"5",icon:(0,jsx_runtime.jsx)(SignalOutline.h,{})},{text:"TelegrammOutline",tabId:"6",icon:(0,jsx_runtime.jsx)(TelegrammOutline.h,{})},{text:"WhatsApp is very very very very long",tabId:"7"},{text:"ICQ",tabId:"8",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{}),disabled:!0}],CardTabMenuHorizontalWithoutBorderTemplate_Wrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalWithoutBorderTemplate_templateObject(),function(p){return p.theme.color["Neutral/Neutral 05"]}),CardTabMenuHorizontalWithoutBorderTemplate_Content=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalWithoutBorderTemplate_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 00"]}),CardTabMenuHorizontalWithoutBorderTemplate_MenuItemWrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalWithoutBorderTemplate_templateObject2()),CardTabMenuHorizontalWithoutBorderTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_showUnderline=_param.showUnderline,_param_hideBorder=_param.hideBorder,hideBorder=void 0===_param_hideBorder||_param_hideBorder,_param_defaultSelectedTabId=_param.defaultSelectedTabId,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CardTabMenuHorizontalWithoutBorderTemplate_object_without_properties(_param,["dimension","showUnderline","hideBorder","defaultSelectedTabId","themeBorderKind","CSSCustomProps"]),tabsMap=(0,react.useMemo)(function(){return CardTabMenuHorizontalWithoutBorderTemplate_tabs.map(function(tab){return tab.tabId})},[CardTabMenuHorizontalWithoutBorderTemplate_tabs]),_useState=CardTabMenuHorizontalWithoutBorderTemplate_sliced_to_array((0,react.useState)(void 0===_param_defaultSelectedTabId?"3":_param_defaultSelectedTabId),2),selectedTab=_useState[0],setSelectedTab=_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(CardTabMenuHorizontalWithoutBorderTemplate_Wrapper,{children:[(0,jsx_runtime.jsx)(CardTabMenuHorizontal,CardTabMenuHorizontalWithoutBorderTemplate_object_spread_props(CardTabMenuHorizontalWithoutBorderTemplate_object_spread({},props),{dimension:dimension,showUnderline:void 0!==_param_showUnderline&&_param_showUnderline,selectedTabId:selectedTab,defaultSelectedTabId:"3",onSelectTab:function(tabId){return setSelectedTab(tabId)},tabsId:tabsMap,renderDropMenuItem:function(tabId){var currentTab=CardTabMenuHorizontalWithoutBorderTemplate_tabs.find(function(tab){return tab.tabId===tabId});return function(options){return(0,react.createElement)(MenuItem.D,CardTabMenuHorizontalWithoutBorderTemplate_object_spread_props(CardTabMenuHorizontalWithoutBorderTemplate_object_spread({dimension:dimension},options),{key:tabId}),(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithoutBorderTemplate_MenuItemWrapper,{children:null==currentTab?void 0:currentTab.text}))}},renderTab:function(tabId,selected,onSelectTab){var currentTab=CardTabMenuHorizontalWithoutBorderTemplate_tabs.find(function(tab){return tab.tabId===tabId}),text=(null==currentTab?void 0:currentTab.text)||"",disabled=!!(null==currentTab?void 0:currentTab.disabled),badge=null==currentTab?void 0:currentTab.badge,icon=null==currentTab?void 0:currentTab.icon;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithoutBorderTemplate_CustomHorizontalCardTab,{dimension:dimension,hideBorder:hideBorder,tabId:tabId,text:text,badge:badge,icon:icon,selected:selected,disabled:disabled,onSelectTab:onSelectTab},tabId)},tabIsDisabled:function(tabId){var currentTab=CardTabMenuHorizontalWithoutBorderTemplate_tabs.find(function(tab){return tab.tabId===tabId});return!!(null==currentTab?void 0:currentTab.disabled)}})),(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithoutBorderTemplate_Content,{})]})})};try{CardTabMenuHorizontalWithoutBorderTemplate.displayName="CardTabMenuHorizontalWithoutBorderTemplate",CardTabMenuHorizontalWithoutBorderTemplate.__docgenInfo={description:"",displayName:"CardTabMenuHorizontalWithoutBorderTemplate",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},showUnderline:{defaultValue:{value:"false"},description:"Показывать серую полосу снизу",name:"showUnderline",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:"ID выбранной вкладки",name:"selectedTabId",required:!1,type:{name:"string"}},defaultSelectedTabId:{defaultValue:{value:"3"},description:"ID выбранной по умолчанию вкладки",name:"defaultSelectedTabId",required:!1,type:{name:"string"}},onSelectTab:{defaultValue:null,description:"Коллбэк на изменение выбранной вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},onAddTab:{defaultValue:null,description:"",name:"onAddTab",required:!1,type:{name:"(() => void)"}},tabsId:{defaultValue:null,description:"Массив из уникальных ID вкладок",name:"tabsId",required:!0,type:{name:"string[]"}},renderTab:{defaultValue:null,description:"Рендер-функция для отрисовки вкладки",name:"renderTab",required:!0,type:{name:"(tabId: string, selected: boolean, onSelectTab?: ((tabId: string) => void) | undefined) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(tabId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},tabIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли вкладка disabled",name:"tabIsDisabled",required:!0,type:{name:"(tabId: string) => boolean"}},adaptive:{defaultValue:null,description:"",name:"adaptive",required:!1,type:{name:"enum",value:[{value:'"fill"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalWithoutBorderTemplate.tsx#CardTabMenuHorizontalWithoutBorderTemplate"]={docgenInfo:CardTabMenuHorizontalWithoutBorderTemplate.__docgenInfo,name:"CardTabMenuHorizontalWithoutBorderTemplate",path:"src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalWithoutBorderTemplate.tsx#CardTabMenuHorizontalWithoutBorderTemplate"})}catch(__react_docgen_typescript_loader_error){}function CardTabMenuHorizontalAdaptiveFillTemplate_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CardTabMenuHorizontalAdaptiveFillTemplate_array_with_holes(arr){if(Array.isArray(arr))return arr}function CardTabMenuHorizontalAdaptiveFillTemplate_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CardTabMenuHorizontalAdaptiveFillTemplate_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CardTabMenuHorizontalAdaptiveFillTemplate_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CardTabMenuHorizontalAdaptiveFillTemplate_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CardTabMenuHorizontalAdaptiveFillTemplate_define_property(target,key,source[key])})}return target}function CardTabMenuHorizontalAdaptiveFillTemplate_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CardTabMenuHorizontalAdaptiveFillTemplate_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CardTabMenuHorizontalAdaptiveFillTemplate_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CardTabMenuHorizontalAdaptiveFillTemplate_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CardTabMenuHorizontalAdaptiveFillTemplate_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CardTabMenuHorizontalAdaptiveFillTemplate_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CardTabMenuHorizontalAdaptiveFillTemplate_sliced_to_array(arr,i){return CardTabMenuHorizontalAdaptiveFillTemplate_array_with_holes(arr)||CardTabMenuHorizontalAdaptiveFillTemplate_iterable_to_array_limit(arr,i)||CardTabMenuHorizontalAdaptiveFillTemplate_unsupported_iterable_to_array(arr,i)||CardTabMenuHorizontalAdaptiveFillTemplate_non_iterable_rest()}function CardTabMenuHorizontalAdaptiveFillTemplate_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CardTabMenuHorizontalAdaptiveFillTemplate_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CardTabMenuHorizontalAdaptiveFillTemplate_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CardTabMenuHorizontalAdaptiveFillTemplate_array_like_to_array(o,minLen)}}function CardTabMenuHorizontalAdaptiveFillTemplate_templateObject(){var data=CardTabMenuHorizontalAdaptiveFillTemplate_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, `,`);
`]);return CardTabMenuHorizontalAdaptiveFillTemplate_templateObject=function _templateObject(){return data},data}function CardTabMenuHorizontalAdaptiveFillTemplate_templateObject1(){var data=CardTabMenuHorizontalAdaptiveFillTemplate_tagged_template_literal([`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  border: 1px solid var(--admiral-color-Neutral_Neutral20, `,`);
  border-top-width: 0;
  height: 100px;
`]);return CardTabMenuHorizontalAdaptiveFillTemplate_templateObject1=function _templateObject(){return data},data}var CardTabMenuHorizontalAdaptiveFillTemplate_CustomHorizontalCardTab=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,adaptive=_param.adaptive,disabled=_param.disabled,selected=_param.selected,tabId=_param.tabId,text=_param.text,badge=_param.badge,icon=_param.icon,props=CardTabMenuHorizontalAdaptiveFillTemplate_object_without_properties(_param,["dimension","adaptive","disabled","selected","tabId","text","badge","icon"]);return(0,jsx_runtime.jsxs)(CardTab,CardTabMenuHorizontalAdaptiveFillTemplate_object_spread_props(CardTabMenuHorizontalAdaptiveFillTemplate_object_spread({},props),{adaptive:adaptive,tabId:tabId,ref:ref,dimension:dimension,disabled:disabled,selected:selected,children:[icon&&(0,jsx_runtime.jsx)(TabIcon.$,{$dimension:dimension,$disabled:disabled,children:icon}),(0,jsx_runtime.jsx)(TabText.j,{children:text}),badge&&(0,jsx_runtime.jsx)(TabBadge.RQ,{disabled:disabled,selected:selected,children:badge})]}))}),CardTabMenuHorizontalAdaptiveFillTemplate_tabs=[{text:"Wi-Fi",tabId:"1",icon:(0,jsx_runtime.jsx)(WifiOutline.h,{})},{text:"Phone",tabId:"2",icon:(0,jsx_runtime.jsx)(PhoneOutline.h,{})},{text:"Sim card",tabId:"3",icon:(0,jsx_runtime.jsx)(SIMCardOutline.h,{})}],CardTabMenuHorizontalAdaptiveFillTemplate_Wrapper=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalAdaptiveFillTemplate_templateObject(),function(p){return p.theme.color["Neutral/Neutral 05"]}),CardTabMenuHorizontalAdaptiveFillTemplate_Content=styled_components_browser_esm.Ay.div(CardTabMenuHorizontalAdaptiveFillTemplate_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return p.theme.color["Neutral/Neutral 20"]}),CardTabMenuHorizontalAdaptiveFillTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_showUnderline=_param.showUnderline,_param_defaultSelectedTabId=_param.defaultSelectedTabId,_param_adaptive=_param.adaptive,adaptive=void 0===_param_adaptive?"fill":_param_adaptive,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CardTabMenuHorizontalAdaptiveFillTemplate_object_without_properties(_param,["dimension","showUnderline","defaultSelectedTabId","adaptive","themeBorderKind","CSSCustomProps"]),tabsMap=(0,react.useMemo)(function(){return CardTabMenuHorizontalAdaptiveFillTemplate_tabs.map(function(tab){return tab.tabId})},[CardTabMenuHorizontalAdaptiveFillTemplate_tabs]),_useState=CardTabMenuHorizontalAdaptiveFillTemplate_sliced_to_array((0,react.useState)(void 0===_param_defaultSelectedTabId?"3":_param_defaultSelectedTabId),2),selectedTab=_useState[0],setSelectedTab=_useState[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(CardTabMenuHorizontalAdaptiveFillTemplate_Wrapper,{children:[(0,jsx_runtime.jsx)(CardTabMenuHorizontal,CardTabMenuHorizontalAdaptiveFillTemplate_object_spread_props(CardTabMenuHorizontalAdaptiveFillTemplate_object_spread({},props),{adaptive:adaptive,showUnderline:void 0===_param_showUnderline||_param_showUnderline,selectedTabId:selectedTab,defaultSelectedTabId:"3",onSelectTab:function(tabId){return setSelectedTab(tabId)},tabsId:tabsMap,renderTab:function(tabId,selected,onSelectTab){var currentTab=CardTabMenuHorizontalAdaptiveFillTemplate_tabs.find(function(tab){return tab.tabId===tabId}),text=(null==currentTab?void 0:currentTab.text)||"",disabled=!!(null==currentTab?void 0:currentTab.disabled),badge=null==currentTab?void 0:currentTab.badge,icon=null==currentTab?void 0:currentTab.icon;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalAdaptiveFillTemplate_CustomHorizontalCardTab,{adaptive:adaptive,dimension:dimension,tabId:tabId,text:text,badge:badge,icon:icon,selected:selected,disabled:disabled,onSelectTab:onSelectTab},tabId)},tabIsDisabled:function(tabId){var currentTab=CardTabMenuHorizontalAdaptiveFillTemplate_tabs.find(function(tab){return tab.tabId===tabId});return!!(null==currentTab?void 0:currentTab.disabled)}})),(0,jsx_runtime.jsx)(CardTabMenuHorizontalAdaptiveFillTemplate_Content,{})]})})};try{CardTabMenuHorizontalAdaptiveFillTemplate.displayName="CardTabMenuHorizontalAdaptiveFillTemplate",CardTabMenuHorizontalAdaptiveFillTemplate.__docgenInfo={description:"",displayName:"CardTabMenuHorizontalAdaptiveFillTemplate",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string | null"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},disableAutoFocus:{defaultValue:{value:"false"},description:`Отключает автоматическую установку фокуса на компонент при его монтировании.
Если \`true\`, компонент не будет автоматически фокусироваться при монтировании.`,name:"disableAutoFocus",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие возникшее при клике вне компонента и его детей, включая другие DropContainer",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},showUnderline:{defaultValue:{value:"true"},description:"Показывать серую полосу снизу",name:"showUnderline",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:"ID выбранной вкладки",name:"selectedTabId",required:!1,type:{name:"string"}},defaultSelectedTabId:{defaultValue:{value:"3"},description:"ID выбранной по умолчанию вкладки",name:"defaultSelectedTabId",required:!1,type:{name:"string"}},onSelectTab:{defaultValue:null,description:"Коллбэк на изменение выбранной вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},onAddTab:{defaultValue:null,description:"",name:"onAddTab",required:!1,type:{name:"(() => void)"}},tabsId:{defaultValue:null,description:"Массив из уникальных ID вкладок",name:"tabsId",required:!0,type:{name:"string[]"}},renderTab:{defaultValue:null,description:"Рендер-функция для отрисовки вкладки",name:"renderTab",required:!0,type:{name:"(tabId: string, selected: boolean, onSelectTab?: ((tabId: string) => void) | undefined) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(tabId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},tabIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли вкладка disabled",name:"tabIsDisabled",required:!0,type:{name:"(tabId: string) => boolean"}},adaptive:{defaultValue:{value:"fill"},description:"",name:"adaptive",required:!1,type:{name:"enum",value:[{value:'"fill"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalAdaptiveFillTemplate.tsx#CardTabMenuHorizontalAdaptiveFillTemplate"]={docgenInfo:CardTabMenuHorizontalAdaptiveFillTemplate.__docgenInfo,name:"CardTabMenuHorizontalAdaptiveFillTemplate",path:"src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalAdaptiveFillTemplate.tsx#CardTabMenuHorizontalAdaptiveFillTemplate"})}catch(__react_docgen_typescript_loader_error){}let CardTabMenuHorizontalTemplateraw_namespaceObject=`import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  CardTabMenuHorizontalProps,
} from '@admiral-ds/react-ui';
import {
  CardTabMenuHorizontal,
  CardTab,
  TabIcon,
  CardTabBadge,
  TabText,
  MenuItem,
  NotificationItem,
  NotificationItemTitle,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ReactComponent as WifiOutline } from '@admiral-ds/icons/build/communication/WifiOutline.svg';
import { ReactComponent as PhoneOutline } from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
import { ReactComponent as SIMCardOutline } from '@admiral-ds/icons/build/communication/SIMCardOutline.svg';
import { ReactComponent as HeadsetOutline } from '@admiral-ds/icons/build/communication/HeadsetOutline.svg';
import { ReactComponent as SignalOutline } from '@admiral-ds/icons/build/communication/SignalOutline.svg';
import { ReactComponent as TelegrammOutline } from '@admiral-ds/icons/build/communication/TelegrammOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <CardTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <CardTabBadge disabled={disabled} selected={selected}>
            {badge}
          </CardTabBadge>
        )}
      </CardTab>
    );
  },
);

const tabs = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline />, disabled: true },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
  { text: 'Viber', tabId: '9', badge: 7 },
  { text: 'Headset', tabId: '4', icon: <HeadsetOutline /> },
  { text: 'Network signal', tabId: '5', icon: <SignalOutline /> },
  { text: 'TelegrammOutline', tabId: '6', icon: <TelegrammOutline /> },
  { text: 'WhatsApp is very very very very long', tabId: '7' },
  { text: 'ICQ', tabId: '8', icon: <MinusCircleOutline />, disabled: true },
];

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;
const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
\`;
const Content = styled.div\`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, \${(p) => p.theme.color['Neutral/Neutral 00']});
  border: 1px solid var(--admiral-color-Neutral_Neutral20, \${(p) => p.theme.color['Neutral/Neutral 20']});
  border-top-width: 0;
  height: 100px;
\`;

const MenuItemWrapper = styled.div\`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
\`;

export const CardTabMenuHorizontalTemplate = ({
  dimension = 'l',
  showUnderline = true,
  defaultSelectedTabId = '3',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CardTabMenuHorizontalProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);
  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };
  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        dimension={dimension}
        tabId={tabId}
        text={text}
        badge={badge}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };
  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension={dimension} {...options} key={tabId}>
          <MenuItemWrapper>{currentTab?.text}</MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>CardTabMenu</NotificationItemTitle>
        <NotificationItemContent>
          Компонент для переключения между группами логически связанного контента. Существует в двух размерах - L 48 и M
          40 px по высоте. Опционально может содержать иконки и/или бейджи.
          <Separator height={8} />
          Для большей выразительности рекомендуется применять компонент на сером фоне. Активная вкладка имеет фон белого
          цвета по умолчанию, так же рекомендуется красить подложку контентной области в белый цвет и добавлять обводку
          с трех сторон. В таком случае связь контента с закладкой более очевидна. Рекомендации
          <li>При загрузке страницы, одна из вкладок должна быть активной по дефолту</li>
          <li>Текст в закладке должен быть коротким, в идеале не более трех слов</li>
          <li>
            Избегайте большого количества закладок — это не удобно для пользователей. В таких случаях можно использовать
            компонент Tree View
          </li>
          <li>Избегайте помещения компонента Card Tab внутрь контента другого Card Tab</li>
          <li>
            Не заставляйте пользователя переключаться между вкладками для сравнения информации. Отдельная закладка
            должна содержать в себе всю необходимую информацию для завершения задания.
          </li>
          <Separator height={8} />
          Если вкладки не помещаются в отведенную ширину целиком, то включается Overflow Menu. Размеры выпадающего меню
          соответствуют размерам Tab Menu — L для L размера и M для M размера. В выпадающем меню отображаются вкладки,
          не поместившиеся в основной ряд. При выборе вкладки из меню, она отображается в основном ряду крайней справа,
          заменяя собой предыдущую крайнюю вкладку, которая, в свою очередь, \xabуходит\xbb в меню. Активная вкладка при этом
          отображается в меню, как выбранная. Если вкладка из меню большая и требует больше места, то она заменяет собой
          две последние вкладки. В таком случае и вторая с края вкладка уходит в меню.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Wrapper>
        <CardTabMenuHorizontal
          {...props}
          dimension={dimension}
          showUnderline={showUnderline}
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderDropMenuItem={renderDropMenuItem}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
`,CardTabMenuHorizontalWithAddButtonTemplateraw_namespaceObject=`import { forwardRef, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  CardTabMenuHorizontalProps,
} from '@admiral-ds/react-ui';
import {
  CardTabMenuHorizontal,
  CardTab,
  TabIcon,
  CardTabBadge,
  TabText,
  TabCloseIconButton,
  MenuItem,
  NotificationItem,
  NotificationItemTitle,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
  onCloseTab?: (tabId: string) => void;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', disabled, selected, tabId, text, badge, icon, onCloseTab, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    const handleCloseTab = () => {
      tabId && onCloseTab?.(tabId);
    };

    return (
      <CardTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <CardTabBadge disabled={disabled} selected={selected}>
            {badge}
          </CardTabBadge>
        )}
        <TabCloseIconButton dimension={dimension} disabled={disabled} onCloseIconButtonClick={handleCloseTab} />
      </CardTab>
    );
  },
);

const tabsBase: TabContentProps[] = [
  { text: 'Text1', tabId: '1' },
  { text: 'Text2', tabId: '2' },
  { text: 'Text3', tabId: '3' },
  { text: 'Text4', tabId: '4' },
  { text: 'Text5', tabId: '5' },
  { text: 'Text6', tabId: '6' },
  { text: 'Text7', tabId: '7' },
  { text: 'Text8', tabId: '8' },
  { text: 'Text9', tabId: '9' },
];
let tabCount = tabsBase.length;

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;
const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
\`;
const Content = styled.div\`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, \${(p) => p.theme.color['Neutral/Neutral 00']});
  border: 1px solid var(--admiral-color-Neutral_Neutral20, \${(p) => p.theme.color['Neutral/Neutral 20']});
  border-top-width: 0;
  height: 100px;
\`;

const MenuItemWrapper = styled.div\`
  display: flex;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
\`;
const getTabsMap = (tabs: TabContentProps[]) => {
  return tabs.map((tab) => tab.tabId || '');
};

export const CardTabMenuHorizontalWithAddButtonTemplate = ({
  dimension = 'l',
  showUnderline = true,
  defaultSelectedTabId = '3',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CardTabMenuHorizontalProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [tabs, setTabs] = useState(tabsBase);
  const [tabsMap, setTabsMap] = useState(getTabsMap(tabs));
  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);

  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const handleCloseTab = (tabId: string) => {
    if (tabs.length > 1) {
      const tabIndex = tabs.findIndex((tab) => tab.tabId === tabId);

      const newTabs = [...tabs];
      newTabs.splice(tabIndex, 1);

      if (tabId === selectedTab) {
        const newSelectedTab = newTabs[0].tabId;
        setSelectedTab(newSelectedTab);
      }

      setTabs(newTabs);
      setTabsMap(getTabsMap(newTabs));
    }
  };

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        dimension={dimension}
        tabId={tabId}
        text={text}
        badge={badge}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
        onCloseTab={handleCloseTab}
      />
    );
  };
  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension={dimension} {...options} key={tabId}>
          <MenuItemWrapper>
            <div>{currentTab?.text}</div>
            <TabCloseIconButton
              dimension={dimension}
              disabled={tabIsDisabled(tabId)}
              onCloseIconButtonClick={() => handleCloseTab(tabId)}
            />
          </MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  const handleAddTab = () => {
    tabCount += 1;
    const newId = tabCount.toString();
    const newText = \`Text\${newId}\`;
    const newTabs = [...tabs, { tabId: newId, text: newText }];
    setTabs(newTabs);
    setTabsMap(getTabsMap(newTabs));
    setSelectedTab(newId);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Удаление, добавление вкладок</NotificationItemTitle>
        <NotificationItemContent>
          Рекомендации
          <li>При нажатии на иконку закрытия — владка и контент под ней удаляются.</li>
          <li>Если удалить текущую вкладку, то автоматически включится первая из оставшихся вкладок.</li>
          <li>При удалении не активной вкладки, вы остаетесь там же, где и были.</li>
          <li>Удалить все вкладки нельзя, должна остаться хотя бы одна вкладка.</li>
          <Separator height={8} />
          Можно включать опцию добавления вкладок. Механика добавления вкладки настраивается пользователем. При
          переполнении вкладок (есть меню) кнопка добавления вкладки видна всегда.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Wrapper>
        <CardTabMenuHorizontal
          {...props}
          dimension={dimension}
          showUnderline={showUnderline}
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          onAddTab={handleAddTab}
          tabsId={tabsMap}
          renderDropMenuItem={renderDropMenuItem}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
`,CardTabMenuHorizontalLeadingGapTemplateraw_namespaceObject=`import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  TabDimension,
  CardTabMenuHorizontalProps,
} from '@admiral-ds/react-ui';
import {
  CardTabMenuHorizontal,
  CardTabMenuHorizontalLeadingGapWrapper,
  CardTab,
  TabIcon,
  TabText,
  MenuItem,
  NotificationItem,
  NotificationItemTitle,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as WifiOutline } from '@admiral-ds/icons/build/communication/WifiOutline.svg';
import { ReactComponent as PhoneOutline } from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
import { ReactComponent as SIMCardOutline } from '@admiral-ds/icons/build/communication/SIMCardOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, tabId, text, icon, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <CardTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
      </CardTab>
    );
  },
);

const tabs = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline />, disabled: true },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
];

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;
const Wrapper = styled.div<{ $dimension: TabDimension }>\`
  width: \${(p) => (p.$dimension === 'l' ? 377 : 322)}px;
  padding-top: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
  border: 1px solid var(--admiral-color-Neutral_Neutral20, \${(p) => p.theme.color['Neutral/Neutral 20']});
\`;
const Content = styled.div\`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, \${(p) => p.theme.color['Neutral/Neutral 00']});
  height: 100px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
\`;

const MenuItemWrapper = styled.div\`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
\`;

export const CardTabMenuHorizontalLeadingGapTemplate = ({
  dimension = 'l',
  showUnderline = true,
  defaultSelectedTabId = '1',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CardTabMenuHorizontalProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);
  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };
  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        dimension={dimension}
        tabId={tabId}
        text={text}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };
  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension={dimension} {...options} key={tabId}>
          <MenuItemWrapper>{currentTab?.text}</MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>CardTabMenu</NotificationItemTitle>
        <NotificationItemContent>
          В некоторых сценариях нужен отступ слева (полоска снизу слева от первой вкладки), что бы вставлять компонент
          во фреймы с обводкой, например карточки.
          <Separator height={8} />В таких сценариях добавляйте такой же или больший отступ справа. Значение может быть
          произвольным и зависит от сценария.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Wrapper $dimension={dimension}>
        <CardTabMenuHorizontalLeadingGapWrapper $horizontalPaddingSize={16}>
          <CardTabMenuHorizontal
            {...props}
            dimension={dimension}
            showUnderline={showUnderline}
            selectedTabId={selectedTab}
            defaultSelectedTabId="3"
            onSelectTab={handleSelectTab}
            tabsId={tabsMap}
            renderDropMenuItem={renderDropMenuItem}
            renderTab={renderTab}
            tabIsDisabled={tabIsDisabled}
          />
        </CardTabMenuHorizontalLeadingGapWrapper>
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
`,CardTabMenuHorizontalWithoutBorderTemplateraw_namespaceObject=`import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  CardTabMenuHorizontalProps,
} from '@admiral-ds/react-ui';
import { CardTabMenuHorizontal, CardTab, TabIcon, CardTabBadge, TabText, MenuItem } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ReactComponent as WifiOutline } from '@admiral-ds/icons/build/communication/WifiOutline.svg';
import { ReactComponent as PhoneOutline } from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
import { ReactComponent as SIMCardOutline } from '@admiral-ds/icons/build/communication/SIMCardOutline.svg';
import { ReactComponent as HeadsetOutline } from '@admiral-ds/icons/build/communication/HeadsetOutline.svg';
import { ReactComponent as SignalOutline } from '@admiral-ds/icons/build/communication/SignalOutline.svg';
import { ReactComponent as TelegrammOutline } from '@admiral-ds/icons/build/communication/TelegrammOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', hideBorder, disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <CardTab
        {...props}
        hideBorder={hideBorder}
        tabId={tabId}
        ref={ref}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
      >
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <CardTabBadge disabled={disabled} selected={selected}>
            {badge}
          </CardTabBadge>
        )}
      </CardTab>
    );
  },
);

const tabs = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline />, disabled: true },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
  { text: 'Viber', tabId: '9', badge: 7 },
  { text: 'Headset', tabId: '4', icon: <HeadsetOutline /> },
  { text: 'Network signal', tabId: '5', icon: <SignalOutline /> },
  { text: 'TelegrammOutline', tabId: '6', icon: <TelegrammOutline /> },
  { text: 'WhatsApp is very very very very long', tabId: '7' },
  { text: 'ICQ', tabId: '8', icon: <MinusCircleOutline />, disabled: true },
];

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
\`;
const Content = styled.div\`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, \${(p) => p.theme.color['Neutral/Neutral 00']});
  border-top-width: 0;
  height: 100px;
\`;

const MenuItemWrapper = styled.div\`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
\`;

export const CardTabMenuHorizontalWithoutBorderTemplate = ({
  dimension = 'l',
  showUnderline = false,
  hideBorder = true,
  defaultSelectedTabId = '3',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CardTabMenuHorizontalProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);
  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };
  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        dimension={dimension}
        hideBorder={hideBorder}
        tabId={tabId}
        text={text}
        badge={badge}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };
  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension={dimension} {...options} key={tabId}>
          <MenuItemWrapper>{currentTab?.text}</MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <CardTabMenuHorizontal
          {...props}
          dimension={dimension}
          showUnderline={showUnderline}
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderDropMenuItem={renderDropMenuItem}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
`,CardTabMenuHorizontalAdaptiveFillTemplateraw_namespaceObject=`import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, HorizontalTabProps, CardTabMenuHorizontalProps } from '@admiral-ds/react-ui';
import { CardTabMenuHorizontal, CardTab, TabIcon, CardTabBadge, TabText } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as WifiOutline } from '@admiral-ds/icons/build/communication/WifiOutline.svg';
import { ReactComponent as PhoneOutline } from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
import { ReactComponent as SIMCardOutline } from '@admiral-ds/icons/build/communication/SIMCardOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text?: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', adaptive, disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <CardTab
        {...props}
        adaptive={adaptive}
        tabId={tabId}
        ref={ref}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
      >
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <CardTabBadge disabled={disabled} selected={selected}>
            {badge}
          </CardTabBadge>
        )}
      </CardTab>
    );
  },
);

interface TabsProps {
  text?: string;
  tabId: string;
  icon?: React.ReactNode;
  badge?: number;
  disabled?: boolean;
}

const tabs: TabsProps[] = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline /> },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
];

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
\`;

const Content = styled.div\`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, \${(p) => p.theme.color['Neutral/Neutral 00']});
  border: 1px solid var(--admiral-color-Neutral_Neutral20, \${(p) => p.theme.color['Neutral/Neutral 20']});
  border-top-width: 0;
  height: 100px;
\`;

export const CardTabMenuHorizontalAdaptiveFillTemplate = ({
  dimension = 'l',
  showUnderline = true,
  defaultSelectedTabId = '3',
  adaptive = 'fill',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CardTabMenuHorizontalProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);
  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };
  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        adaptive={adaptive}
        dimension={dimension}
        tabId={tabId}
        text={text}
        badge={badge}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <CardTabMenuHorizontal
          {...props}
          adaptive={adaptive}
          showUnderline={showUnderline}
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
`;function CardTabMenuHorizontal_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CardTabMenuHorizontal_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function CardTabMenuHorizontal_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CardTabMenuHorizontal_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CardTabMenuHorizontal_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CardTabMenuHorizontal_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CardTabMenuHorizontal_stories_define_property(target,key,source[key])})}return target}function CardTabMenuHorizontal_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CardTabMenuHorizontal_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CardTabMenuHorizontal_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CardTabMenuHorizontal_stories_sliced_to_array(arr,i){return CardTabMenuHorizontal_stories_array_with_holes(arr)||CardTabMenuHorizontal_stories_iterable_to_array_limit(arr,i)||CardTabMenuHorizontal_stories_unsupported_iterable_to_array(arr,i)||CardTabMenuHorizontal_stories_non_iterable_rest()}function CardTabMenuHorizontal_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CardTabMenuHorizontal_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CardTabMenuHorizontal_stories_array_like_to_array(o,minLen)}}let CardTabMenuHorizontal_stories={title:"Admiral-2.1/Tabs/CardTabMenuHorizontal",decorators:void 0,component:CardTabMenuHorizontal,parameters:{docs:{source:{code:null}}},argTypes:{dimension:{options:["l","m"],control:{type:"radio"}},showUnderline:{control:!1},hideBorder:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},defaultSelectedTabId:{control:!1},renderTab:{control:!1},renderDropMenuItem:{control:!1},tabIsDisabled:{control:!1},tabsId:{control:!1},onSelectTab:{control:!1},selectedTabId:{control:!1},isVisible:{control:!1},active:{control:!1},disableSelectedOptionHighlight:{control:!1},menuWidth:{control:!1},menuMaxHeight:{control:!1},alignSelf:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},adaptive:{control:!1}}};var HorizontalCardTabMenuExample={render:function(props){var CSSCustomProps=CardTabMenuHorizontal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalTemplate,CardTabMenuHorizontal_stories_object_spread_props(CardTabMenuHorizontal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CardTabMenuHorizontalTemplateraw_namespaceObject}}},name:"CardTabMenu."},HorizontalCardTabMenuLeadingGapExample={render:function(props){var CSSCustomProps=CardTabMenuHorizontal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalLeadingGapTemplate,CardTabMenuHorizontal_stories_object_spread_props(CardTabMenuHorizontal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CardTabMenuHorizontalLeadingGapTemplateraw_namespaceObject}}},name:"CardTabMenu с отступами."},HorizontalCardTabMenuWithAddButtonExample={render:function(props){var CSSCustomProps=CardTabMenuHorizontal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithAddButtonTemplate,CardTabMenuHorizontal_stories_object_spread_props(CardTabMenuHorizontal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CardTabMenuHorizontalWithAddButtonTemplateraw_namespaceObject}}},name:"CardTabMenu с возможностью добавления вкладок."},CardTabMenuHorizontalWithoutBorderExample={render:function(props){var CSSCustomProps=CardTabMenuHorizontal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalWithoutBorderTemplate,CardTabMenuHorizontal_stories_object_spread_props(CardTabMenuHorizontal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CardTabMenuHorizontalWithoutBorderTemplateraw_namespaceObject}}},name:"CardTabMenu без обводки"},CardTabMenuHorizontalAdaptiveFillExample={render:function(props){var CSSCustomProps=CardTabMenuHorizontal_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CardTabMenuHorizontalAdaptiveFillTemplate,CardTabMenuHorizontal_stories_object_spread_props(CardTabMenuHorizontal_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CardTabMenuHorizontalAdaptiveFillTemplateraw_namespaceObject}}},name:"CardTabMenu adaptive fill"};HorizontalCardTabMenuExample.parameters={...HorizontalCardTabMenuExample.parameters,docs:{...HorizontalCardTabMenuExample.parameters?.docs,source:{originalSource:`{
  render: HorizontalCardTabMenuStory,
  parameters: {
    docs: {
      source: {
        code: HorizontalCardTabMenuRaw
      }
    }
  },
  name: 'CardTabMenu.'
}`,...HorizontalCardTabMenuExample.parameters?.docs?.source}}},HorizontalCardTabMenuLeadingGapExample.parameters={...HorizontalCardTabMenuLeadingGapExample.parameters,docs:{...HorizontalCardTabMenuLeadingGapExample.parameters?.docs,source:{originalSource:`{
  render: HorizontalCardTabMenuLeadingGapStory,
  parameters: {
    docs: {
      source: {
        code: HorizontalCardTabMenuLeadingGapRaw
      }
    }
  },
  name: 'CardTabMenu с отступами.'
}`,...HorizontalCardTabMenuLeadingGapExample.parameters?.docs?.source}}},HorizontalCardTabMenuWithAddButtonExample.parameters={...HorizontalCardTabMenuWithAddButtonExample.parameters,docs:{...HorizontalCardTabMenuWithAddButtonExample.parameters?.docs,source:{originalSource:`{
  render: HorizontalCardTabMenuWithAddButtonStory,
  parameters: {
    docs: {
      source: {
        code: HorizontalCardTabMenuWithAddButtonRaw
      }
    }
  },
  name: 'CardTabMenu с возможностью добавления вкладок.'
}`,...HorizontalCardTabMenuWithAddButtonExample.parameters?.docs?.source}}},CardTabMenuHorizontalWithoutBorderExample.parameters={...CardTabMenuHorizontalWithoutBorderExample.parameters,docs:{...CardTabMenuHorizontalWithoutBorderExample.parameters?.docs,source:{originalSource:`{
  render: CardTabMenuHorizontalWithoutBorderStory,
  parameters: {
    docs: {
      source: {
        code: CardTabMenuHorizontalWithoutBorderRaw
      }
    }
  },
  name: 'CardTabMenu без обводки'
}`,...CardTabMenuHorizontalWithoutBorderExample.parameters?.docs?.source}}},CardTabMenuHorizontalAdaptiveFillExample.parameters={...CardTabMenuHorizontalAdaptiveFillExample.parameters,docs:{...CardTabMenuHorizontalAdaptiveFillExample.parameters?.docs,source:{originalSource:`{
  render: CardTabMenuHorizontalAdaptiveFillStory,
  parameters: {
    docs: {
      source: {
        code: CardTabMenuHorizontalAdaptiveFillRaw
      }
    }
  },
  name: 'CardTabMenu adaptive fill'
}`,...CardTabMenuHorizontalAdaptiveFillExample.parameters?.docs?.source}}};let __namedExportsOrder=["HorizontalCardTabMenuExample","HorizontalCardTabMenuLeadingGapExample","HorizontalCardTabMenuWithAddButtonExample","CardTabMenuHorizontalWithoutBorderExample","CardTabMenuHorizontalAdaptiveFillExample"]}}]);
//# sourceMappingURL=components-TabMenuComponent-stories-horizontalCardTabMenuStories-CardTabMenuHorizontal-stories.47a29efc.iframe.bundle.js.map