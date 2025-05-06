"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8187],{"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./src/components/Accordion/stories/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccordionDimension:()=>AccordionDimension,AccordionDivider:()=>AccordionDivider,AccordionIcon:()=>AccordionIcon,AccordionModes:()=>AccordionModes,AccordionPlayground:()=>AccordionPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),moveFocus=function(parent,currentFocus,calcNextFocus,stop){for(var wrappedOnce=!1,nextFocus=calcNextFocus(parent,currentFocus,stop);nextFocus;){if(nextFocus===(null==parent?void 0:parent.firstChild)){if(wrappedOnce)return;wrappedOnce=!0}if(!nextFocus.hasAttribute("disabled"))return void nextFocus.focus();nextFocus=calcNextFocus(parent,nextFocus,stop)}},nextItem=function(parent,child,stop){var _parent_firstChild;return(null==child?void 0:child.nextElementSibling)?child.nextElementSibling.firstElementChild:stop?null:null==parent||null==(_parent_firstChild=parent.firstChild)?void 0:_parent_firstChild.firstChild},previousItem=function(parent,child,stop){var _parent_lastChild;return(null==child?void 0:child.previousElementSibling)?child.previousElementSibling.firstElementChild:stop?null:null==parent||null==(_parent_lastChild=parent.lastChild)?void 0:_parent_lastChild.firstChild},ChevronDownOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg"),typography=__webpack_require__("./src/components/Typography/typography.ts"),common=__webpack_require__("./src/components/themes/common/index.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
  [data-dimension='m'] & {
    width: 20px;
    height: 20px;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;

  padding: 16px 16px 15px 16px;
  [data-dimension='m'] && {
    padding: 10px 16px 9px 16px;
  }

  [data-icon='left'] & {
    flex-direction: row-reverse;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: inline-flex;
  flex: 1 1 auto;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:hover {
    cursor: pointer;
    background: var(--admiral-color-Opacity_Hover, `,`);
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, `,`);
  }
  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid var(--admiral-color-Primary_Primary60Main, `,`);
      top: -1px;
      left: 0;
      bottom: -1px;
      right: 0;
    }
  }
  &:focus,
  & > `,` {
    outline: none;
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  width: 100%;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  `,`

  &:not(:disabled) {
    `,`
  }

  &:disabled {
    cursor: not-allowed;
  }

  [data-dimension='m'] & {
    min-height: 38px;
    `,`
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, `,`);
  & > `," ",` {
    transform: `,`;
  }
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  overflow-y: auto;
  max-height: `,`;
  padding: 4px 16px 16px 16px;
  `,`
  [data-dimension='m'] & {
    padding: 4px 16px 10px 16px;
    `,`
  }
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  position: relative;

  & > `,`:first-child {
    & `,` {
      padding: `,`;
    }
    border-top: 1px solid
      `,`;
  }
  & > `,`:last-child {
    border-bottom: 1px solid
      `,`;
  }
`]);return _templateObject7=function _templateObject(){return data},data}var Chevron=(0,styled_components_browser_esm.Ay)(ChevronDownOutline.h)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),ItemTitleContent=styled_components_browser_esm.Ay.span(_templateObject1()),TitleContent=styled_components_browser_esm.Ay.span(_templateObject2()),eventsMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Opacity/Press"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},ItemTitleContent),ItemTitle=styled_components_browser_esm.Ay.button(_templateObject4(),function(p){return p.theme.color[common.jn]},typography.Il["Subtitle/Subtitle 2"],eventsMixin,typography.Il["Subtitle/Subtitle 3"]),ItemWrapper=styled_components_browser_esm.Ay.div(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 20"]},ItemTitle,Chevron,function(p){return p.$opened?"rotate(180deg)":"rotate(0deg)"}),ItemContent=styled_components_browser_esm.Ay.div(_templateObject6(),function(p){return p.theme.color[common.jn]},function(p){return p.$contentMaxHeight},typography.Il["Body/Body 1 Long"],typography.Il["Body/Body 2 Long"]),AccordionWrapper=styled_components_browser_esm.Ay.div(_templateObject7(),ItemWrapper,ItemTitleContent,function(param){return"l"===param.$dimension?"15px 16px":"9px 16px"},function(param){var theme=param.theme;return param.$hideTopDivider?"transparent":"var(--admiral-color-Neutral_Neutral20, ".concat(theme.color["Neutral/Neutral 20"],")")},ItemWrapper,function(param){var theme=param.theme;return param.$hideBottomDivider?"transparent":"var(--admiral-color-Neutral_Neutral20, ".concat(theme.color["Neutral/Neutral 20"],")")});function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Accordion=function(_param){var children=_param.children,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,_param_iconPosition=_param.iconPosition,_param_hideTopDivider=_param.hideTopDivider,_param_hideBottomDivider=_param.hideBottomDivider,onKeyDown=_param.onKeyDown,props=_object_without_properties(_param,["children","dimension","iconPosition","hideTopDivider","hideBottomDivider","onKeyDown"]),accordionRef=(0,react.useRef)(null),handleKeyDown=(0,react.useCallback)(function(e){var focusedOption=(accordionRef.current&&accordionRef.current.ownerDocument||document).activeElement;if(focusedOption.id.indexOf("accordion_title")>-1&&"button"===focusedOption.tagName.toLowerCase()){do focusedOption=null==focusedOption?void 0:focusedOption.parentNode;while(focusedOption.parentNode!==accordionRef.current)var code=keyboardKey.r.getCode(e);code===keyboardKey.r.ArrowDown?(moveFocus(accordionRef.current,focusedOption,nextItem),e.preventDefault()):code===keyboardKey.r.ArrowUp?(moveFocus(accordionRef.current,focusedOption,previousItem),e.preventDefault()):code===keyboardKey.r.Home?(e.preventDefault(),moveFocus(accordionRef.current,null,nextItem)):code===keyboardKey.r.End&&(e.preventDefault(),moveFocus(accordionRef.current,null,previousItem))}null==onKeyDown||onKeyDown(e)},[]);return(0,jsx_runtime.jsx)(AccordionWrapper,_object_spread_props(_object_spread({ref:accordionRef,"data-dimension":dimension,"data-icon":void 0===_param_iconPosition?"right":_param_iconPosition,$hideTopDivider:void 0!==_param_hideTopDivider&&_param_hideTopDivider,$hideBottomDivider:void 0!==_param_hideBottomDivider&&_param_hideBottomDivider,$dimension:dimension,onKeyDown:handleKeyDown},props),{children:children}))};Accordion.displayName="Accordion";try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},iconPosition:{defaultValue:{value:"right"},description:"Расположение иконки шеврона в заголовке. По умолчанию иконка выравнивается по правому краю.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},hideTopDivider:{defaultValue:{value:"false"},description:`Скрыть верхний разделитель аккордиона (верхнюю серую полоску).
Параметр hideTopDivider скрывает верхнюю серую полоску только у первого AccordionItem, заданного внутри Accordion`,name:"hideTopDivider",required:!1,type:{name:"boolean"}},hideBottomDivider:{defaultValue:{value:"false"},description:`Скрыть нижний разделитель аккордиона (нижнюю серую полоску)
Параметр hideBottomDivider скрывает нижнюю серую полоску только у последнего AccordionItem, заданного внутри Accordion`,name:"hideBottomDivider",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/index.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"src/components/Accordion/index.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");function Collapse_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Collapse_templateObject(){var data=Collapse_tagged_template_literal([`
  overflow: hidden;
  transition:
    max-height 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  max-height: `,`;
  visibility: `,`;
`]);return Collapse_templateObject=function _templateObject(){return data},data}var Collapse=styled_components_browser_esm.Ay.div(Collapse_templateObject(),function(p){return p.$opened?p.$contentMaxHeight:0},function(p){return p.$opened?"visible":"hidden"});try{Collapse.displayName="Collapse",Collapse.__docgenInfo={description:"",displayName:"Collapse",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Collapse.tsx#Collapse"]={docgenInfo:Collapse.__docgenInfo,name:"Collapse",path:"src/components/Accordion/Collapse.tsx#Collapse"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function AccordionItem_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function AccordionItem_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AccordionItem_define_property(target,key,source[key])})}return target}function AccordionItem_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AccordionItem_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AccordionItem_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AccordionItem_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=AccordionItem_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AccordionItem_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var AccordionItem=function(_param){var children=_param.children,title=_param.title,id=_param.id,defaultExpanded=_param.defaultExpanded,userExpanded=_param.expanded,onClick=_param.onClick,_param_contentMaxHeight=_param.contentMaxHeight,contentMaxHeight=void 0===_param_contentMaxHeight?"100vh":_param_contentMaxHeight,disabled=_param.disabled,props=AccordionItem_object_without_properties(_param,["children","title","id","defaultExpanded","expanded","onClick","contentMaxHeight","disabled"]),_useState=_sliced_to_array((0,react.useState)(defaultExpanded),2),expanded=_useState[0],setExpanded=_useState[1],collapseOpened=void 0===userExpanded?expanded:userExpanded,itemId=(0,react.useMemo)(function(){return id||(0,uid.L)()},[id]),ITEM_TITLE_ID="accordion_title_".concat(itemId),ITEM_CONTENT_ID="accordion_content_".concat(itemId),handleClick=(0,react.useCallback)(function(event){void 0===userExpanded?(null==onClick||onClick(title,!expanded,event),setExpanded(!expanded)):null==onClick||onClick(title,!userExpanded,event)},[expanded,userExpanded,onClick,title]);return(0,jsx_runtime.jsxs)(ItemWrapper,{$opened:collapseOpened,"data-disabled":disabled,children:[(0,jsx_runtime.jsx)(ItemTitle,AccordionItem_object_spread_props(AccordionItem_object_spread({onClick:handleClick,role:"button",type:"button","aria-expanded":collapseOpened,"aria-controls":ITEM_CONTENT_ID,id:ITEM_TITLE_ID,disabled:disabled},props),{children:(0,jsx_runtime.jsxs)(ItemTitleContent,{tabIndex:-1,children:[(0,jsx_runtime.jsx)(TitleContent,{children:title}),(0,jsx_runtime.jsx)(Chevron,{"aria-hidden":!0})]})})),(0,jsx_runtime.jsx)(Collapse,{$opened:collapseOpened,$contentMaxHeight:contentMaxHeight,children:(0,jsx_runtime.jsx)(ItemContent,{$contentMaxHeight:contentMaxHeight,role:"region","aria-labelledby":ITEM_TITLE_ID,id:ITEM_CONTENT_ID,children:children})})]})};try{AccordionItem.displayName="AccordionItem",AccordionItem.__docgenInfo={description:"",displayName:"AccordionItem",props:{title:{defaultValue:null,description:"Заголовок компонента",name:"title",required:!0,type:{name:"ReactNode"}},defaultExpanded:{defaultValue:null,description:"дефолтное (изначальное) состояние компонента (раскрыт/свернут) при неконтролируемом режиме работы",name:"defaultExpanded",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"состояние компонента (раскрыт/свернут) при контролируемом режиме работы",name:"expanded",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Колбек на клик по компоненту",name:"onClick",required:!1,type:{name:"((title: ReactNode, expanded: boolean, event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},contentMaxHeight:{defaultValue:{value:"100vh"},description:"Устанавливает максимальную высоту, на которую открывается контент до появления вертикального скрола",name:"contentMaxHeight",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionItem.tsx#AccordionItem"]={docgenInfo:AccordionItem.__docgenInfo,name:"AccordionItem",path:"src/components/Accordion/AccordionItem.tsx#AccordionItem"})}catch(__react_docgen_typescript_loader_error){}function AccordionDivider_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AccordionDivider_template_templateObject(){var data=AccordionDivider_template_tagged_template_literal([`
  height: `,`px;
`]);return AccordionDivider_template_templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(AccordionDivider_template_templateObject(),function(p){return p.$height||8}),AccordionDividerTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["В зависимости от контекста можно включать-выключать разделители блоков компонента (верхнюю и нижнюю полоски). Например при использовании на подложке. Высота компонента при этом не меняется.",(0,jsx_runtime.jsx)(Separator,{}),"Для отключения верхнего разделителя используйте параметр hideTopDivider, данный параметр скрывает верхний разделитель у первого AccordionItem, заданного внутри Accordion. Для отключения нижнего разделителя используйте параметр hideBottomDivider, данный параметр скрывает нижний разделитель у последнего AccordionItem, заданного внутри Accordion."]}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsxs)(Accordion,{hideTopDivider:!0,hideBottomDivider:!0,children:[(0,jsx_runtime.jsx)(AccordionItem,{title:"Первый пункт",children:"Контент первого пункта"}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Второй пункт",children:"Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними."}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Третий пункт",children:"Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей."})]})]})};function AccordionIcon_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AccordionIcon_template_templateObject(){var data=AccordionIcon_template_tagged_template_literal([`
  height: `,`px;
`]);return AccordionIcon_template_templateObject=function _templateObject(){return data},data}var AccordionIcon_template_Separator=styled_components_browser_esm.Ay.div(AccordionIcon_template_templateObject(),function(p){return p.$height||8}),AccordionIconTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Альтернативным вариантом является расположение шеврона слева от заголовка. Текст заголовка и иконка шеврона просто меняются местами с сохранением всех расстояний и размеров. При этом компоновка остальных элементов компонента никак не меняются.",(0,jsx_runtime.jsx)(AccordionIcon_template_Separator,{}),"Используйте параметр iconPosition, чтобы управлять расположением шеврона."]}),(0,jsx_runtime.jsx)(AccordionIcon_template_Separator,{$height:24}),(0,jsx_runtime.jsxs)(Accordion,{iconPosition:"left",children:[(0,jsx_runtime.jsx)(AccordionItem,{title:"Первый пункт",children:"Контент первого пункта"}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Второй пункт",children:"Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними."}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Третий пункт",children:"Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей."})]})]})};function AccordionModes_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function AccordionModes_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function AccordionModes_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AccordionModes_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function AccordionModes_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function AccordionModes_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AccordionModes_template_define_property(target,key,source[key])})}return target}function AccordionModes_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AccordionModes_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AccordionModes_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AccordionModes_template_sliced_to_array(arr,i){return AccordionModes_template_array_with_holes(arr)||AccordionModes_template_iterable_to_array_limit(arr,i)||AccordionModes_template_unsupported_iterable_to_array(arr,i)||AccordionModes_template_non_iterable_rest()}function AccordionModes_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AccordionModes_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return AccordionModes_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AccordionModes_template_array_like_to_array(o,minLen)}}function AccordionModes_template_templateObject(){var data=AccordionModes_template_tagged_template_literal([`
  height: `,`px;
`]);return AccordionModes_template_templateObject=function _templateObject(){return data},data}var AccordionModes_template_Separator=styled_components_browser_esm.Ay.div(AccordionModes_template_templateObject(),function(p){return p.$height||8}),AccordionModesTemplate=function(props){var _React_useState=AccordionModes_template_sliced_to_array(react.useState(!1),2),expanded=_React_useState[0],setExpanded=_React_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Компонент AccordionItem может работать в контролируемом и неконтролируемом режимах. Параметр expanded задает состояние компонента в контролируемом режиме:",(0,jsx_runtime.jsx)(AccordionModes_template_Separator,{})," - если true, разворачивает тело аккордеона;",(0,jsx_runtime.jsx)(AccordionModes_template_Separator,{}),"- если false, сворачивает тело аккордеона.",(0,jsx_runtime.jsx)(AccordionModes_template_Separator,{}),"Если свойство expanded передано - автоматическое сворачивание/разворачивание блокируется. В неконтролируемом режиме дефолтное состояние аккордеона можно задать с помощью свойства defaultExpanded."]}),(0,jsx_runtime.jsx)(AccordionModes_template_Separator,{$height:24}),(0,jsx_runtime.jsxs)(Accordion,AccordionModes_template_object_spread_props(AccordionModes_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(AccordionItem,{defaultExpanded:!0,title:"Неконтролируемый режим использования (uncontrolled)",onClick:function(title,expanded,event){return console.log({title:title,expanded:expanded,event:event})},children:"Контент первого пункта"}),(0,jsx_runtime.jsx)(AccordionItem,{expanded:expanded,title:"Контролируемый режим использования (controlled)",onClick:function(_title,expanded){return setExpanded(expanded)},children:"Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей."})]}))]})};try{AccordionModesTemplate.displayName="AccordionModesTemplate",AccordionModesTemplate.__docgenInfo={description:"",displayName:"AccordionModesTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},iconPosition:{defaultValue:null,description:"Расположение иконки шеврона в заголовке. По умолчанию иконка выравнивается по правому краю.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},hideTopDivider:{defaultValue:null,description:`Скрыть верхний разделитель аккордиона (верхнюю серую полоску).
Параметр hideTopDivider скрывает верхнюю серую полоску только у первого AccordionItem, заданного внутри Accordion`,name:"hideTopDivider",required:!1,type:{name:"boolean"}},hideBottomDivider:{defaultValue:null,description:`Скрыть нижний разделитель аккордиона (нижнюю серую полоску)
Параметр hideBottomDivider скрывает нижнюю серую полоску только у последнего AccordionItem, заданного внутри Accordion`,name:"hideBottomDivider",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/stories/AccordionModes.template.tsx#AccordionModesTemplate"]={docgenInfo:AccordionModesTemplate.__docgenInfo,name:"AccordionModesTemplate",path:"src/components/Accordion/stories/AccordionModes.template.tsx#AccordionModesTemplate"})}catch(__react_docgen_typescript_loader_error){}function AccordionDimension_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AccordionDimension_template_templateObject(){var data=AccordionDimension_template_tagged_template_literal([`
  height: `,`px;
`]);return AccordionDimension_template_templateObject=function _templateObject(){return data},data}var AccordionDimension_template_Separator=styled_components_browser_esm.Ay.div(AccordionDimension_template_templateObject(),function(p){return p.$height||20}),AccordionDimensionTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Существует в двух размерах - L и M."}),(0,jsx_runtime.jsx)(AccordionDimension_template_Separator,{$height:24}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Размер L"}),(0,jsx_runtime.jsx)(AccordionDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(Accordion,{children:[(0,jsx_runtime.jsx)(AccordionItem,{title:"Первый пункт",children:"Контент первого пункта"}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Второй пункт",children:"Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними."}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Третий пункт",children:"Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей."})]}),(0,jsx_runtime.jsx)(AccordionDimension_template_Separator,{}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Размер M"}),(0,jsx_runtime.jsx)(AccordionDimension_template_Separator,{}),(0,jsx_runtime.jsxs)(Accordion,{dimension:"m",children:[(0,jsx_runtime.jsx)(AccordionItem,{title:"Первый пункт",children:"Контент первого пункта"}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Второй пункт",children:"Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними."}),(0,jsx_runtime.jsx)(AccordionItem,{title:"Третий пункт",contentMaxHeight:"150px",children:"Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей. Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей."})]})]})},SelectField=__webpack_require__("./src/components/form/SelectField/index.tsx"),FieldSet=__webpack_require__("./src/components/form/FieldSet/index.tsx"),RadioButton=__webpack_require__("./src/components/RadioButton/index.tsx"),Option=__webpack_require__("./src/components/input/Select/Option/index.tsx");function AccordionPlayground_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function AccordionPlayground_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function AccordionPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AccordionPlayground_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function AccordionPlayground_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function AccordionPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AccordionPlayground_template_define_property(target,key,source[key])})}return target}function AccordionPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AccordionPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AccordionPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AccordionPlayground_template_sliced_to_array(arr,i){return AccordionPlayground_template_array_with_holes(arr)||AccordionPlayground_template_iterable_to_array_limit(arr,i)||AccordionPlayground_template_unsupported_iterable_to_array(arr,i)||AccordionPlayground_template_non_iterable_rest()}function AccordionPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AccordionPlayground_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return AccordionPlayground_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return AccordionPlayground_template_array_like_to_array(o,minLen)}}function AccordionPlayground_template_templateObject(){var data=AccordionPlayground_template_tagged_template_literal([`
  margin-top: 24px;
`]);return AccordionPlayground_template_templateObject=function _templateObject(){return data},data}var AccordionPlayground_template_SelectField=(0,styled_components_browser_esm.Ay)(SelectField.z)(AccordionPlayground_template_templateObject()),OPTIONS_SIMPLE=["teeext 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","texttt 6"],AccordionPlaygroundTemplate=function(props){var _React_useState=AccordionPlayground_template_sliced_to_array(react.useState(""),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=AccordionPlayground_template_sliced_to_array(react.useState(""),2),selectValue=_React_useState1[0],setSelectValue=_React_useState1[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Accordion,AccordionPlayground_template_object_spread_props(AccordionPlayground_template_object_spread({},props),{children:[(0,jsx_runtime.jsx)(AccordionItem,{id:"accordion1-item1",title:"Первый пункт",onClick:function(title,expanded,event){return console.log({title:title,expanded:expanded,event:event})},children:"Контент первого пункта"}),(0,jsx_runtime.jsxs)(AccordionItem,{id:"accordion1-item2",title:"Второй пункт",onClick:function(title,expanded,event){return console.log({title:title,expanded:expanded,event:event})},children:["Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.",(0,jsx_runtime.jsxs)(FieldSet.n,{style:{marginTop:8},onChange:function(e){setSelected(e.target.value)},legend:"Управляемая группа радиокнопок:",dimension:"m"===props.dimension?"s":"m",children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:"1",name:"test1",defaultChecked:"1"===selected,children:"First option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"2",name:"test1",defaultChecked:"2"===selected,children:"Second option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"3",name:"test1",defaultChecked:"3"===selected,children:"Third option"})]}),(0,jsx_runtime.jsx)(AccordionPlayground_template_SelectField,{mode:"searchSelect",label:"label",className:"Search",value:selectValue,onChange:function(e){setSelectValue(e.target.value)},placeholder:"Placeholder",children:OPTIONS_SIMPLE.map(function(option,ind){return(0,jsx_runtime.jsx)(Option.c,{value:option,disabled:4===ind,children:option},option)})})]}),(0,jsx_runtime.jsx)(AccordionItem,{id:"accordion1-item3",defaultExpanded:!0,title:"Третий пункт",onClick:function(title,expanded,event){return console.log({title:title,expanded:expanded,event:event})},children:"Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения консолей."})]}))})};try{AccordionPlaygroundTemplate.displayName="AccordionPlaygroundTemplate",AccordionPlaygroundTemplate.__docgenInfo={description:"",displayName:"AccordionPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},iconPosition:{defaultValue:null,description:"Расположение иконки шеврона в заголовке. По умолчанию иконка выравнивается по правому краю.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},hideTopDivider:{defaultValue:null,description:`Скрыть верхний разделитель аккордиона (верхнюю серую полоску).
Параметр hideTopDivider скрывает верхнюю серую полоску только у первого AccordionItem, заданного внутри Accordion`,name:"hideTopDivider",required:!1,type:{name:"boolean"}},hideBottomDivider:{defaultValue:null,description:`Скрыть нижний разделитель аккордиона (нижнюю серую полоску)
Параметр hideBottomDivider скрывает нижнюю серую полоску только у последнего AccordionItem, заданного внутри Accordion`,name:"hideBottomDivider",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/stories/AccordionPlayground.template.tsx#AccordionPlaygroundTemplate"]={docgenInfo:AccordionPlaygroundTemplate.__docgenInfo,name:"AccordionPlaygroundTemplate",path:"src/components/Accordion/stories/AccordionPlayground.template.tsx#AccordionPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}let AccordionDivider_templateraw_namespaceObject=`import * as React from 'react';

import { Accordion, AccordionItem, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

export const AccordionDividerTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        В зависимости от контекста можно включать-выключать разделители блоков компонента (верхнюю и нижнюю полоски).
        Например при использовании на подложке. Высота компонента при этом не меняется.
        <Separator />
        Для отключения верхнего разделителя используйте параметр hideTopDivider, данный параметр скрывает верхний
        разделитель у первого AccordionItem, заданного внутри Accordion. Для отключения нижнего разделителя используйте
        параметр hideBottomDivider, данный параметр скрывает нижний разделитель у последнего AccordionItem, заданного
        внутри Accordion.
      </T>
      <Separator $height={24} />
      <Accordion hideTopDivider hideBottomDivider>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};
`,AccordionIcon_templateraw_namespaceObject=`import * as React from 'react';

import { Accordion, AccordionItem, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

export const AccordionIconTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Альтернативным вариантом является расположение шеврона слева от заголовка. Текст заголовка и иконка шеврона
        просто меняются местами с сохранением всех расстояний и размеров. При этом компоновка остальных элементов
        компонента никак не меняются.
        <Separator />
        Используйте параметр iconPosition, чтобы управлять расположением шеврона.
      </T>
      <Separator $height={24} />
      <Accordion iconPosition="left">
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};
`,AccordionModes_templateraw_namespaceObject=`import * as React from 'react';

import { Accordion, AccordionItem, T } from '@admiral-ds/react-ui';
import type { AccordionProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

export const AccordionModesTemplate = (props: AccordionProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Компонент AccordionItem может работать в контролируемом и неконтролируемом режимах. Параметр expanded задает
        состояние компонента в контролируемом режиме:
        <Separator /> - если true, разворачивает тело аккордеона;
        <Separator />- если false, сворачивает тело аккордеона.
        <Separator />
        Если свойство expanded передано - автоматическое сворачивание/разворачивание блокируется. В неконтролируемом
        режиме дефолтное состояние аккордеона можно задать с помощью свойства defaultExpanded.
      </T>
      <Separator $height={24} />
      <Accordion {...props}>
        <AccordionItem
          defaultExpanded
          title="Неконтролируемый режим использования (uncontrolled)"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Контент первого пункта
        </AccordionItem>
        <AccordionItem
          expanded={expanded}
          title="Контролируемый режим использования (controlled)"
          onClick={(_title, expanded) => setExpanded(expanded)}
        >
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};
`,AccordionDimension_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Accordion, AccordionItem, T } from '@admiral-ds/react-ui';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 20}px;
\`;

export const AccordionDimensionTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Существует в двух размерах - L и M.
      </T>
      <Separator $height={24} />
      <T font="Body/Body 1 Long" as="div">
        Размер L
      </T>
      <Separator />
      <Accordion>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Размер M
      </T>
      <Separator />
      <Accordion dimension="m">
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт" contentMaxHeight="150px">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей. Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые
          сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям.
          Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с
          теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет
          нового поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};
`,AccordionPlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Accordion, AccordionItem, FieldSet, Option, RadioButton, SelectField as Select } from '@admiral-ds/react-ui';
import type { AccordionProps } from '@admiral-ds/react-ui';

const SelectField = styled(Select)\`
  margin-top: 24px;
\`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

export const AccordionPlaygroundTemplate = (props: AccordionProps) => {
  const values = ['1', '2', '3'];
  const [selected, setSelected] = React.useState<number | string | null>('');
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };
  return (
    <>
      <Accordion {...props}>
        <AccordionItem
          id="accordion1-item1"
          title="Первый пункт"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Контент первого пункта
        </AccordionItem>
        <AccordionItem
          id="accordion1-item2"
          title="Второй пункт"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
          <FieldSet
            style={{ marginTop: 8 }}
            onChange={(e) => {
              setSelected((e.target as HTMLInputElement).value);
            }}
            legend="Управляемая группа радиокнопок:"
            dimension={props.dimension === 'm' ? 's' : 'm'}
          >
            <RadioButton value={values[0]} name="test1" defaultChecked={values[0] === selected}>
              First option
            </RadioButton>
            <RadioButton value={values[1]} name="test1" defaultChecked={values[1] === selected}>
              Second option
            </RadioButton>
            <RadioButton value={values[2]} name="test1" defaultChecked={values[2] === selected}>
              Third option
            </RadioButton>
          </FieldSet>
          <SelectField
            mode="searchSelect"
            label="label"
            className="Search"
            value={selectValue}
            onChange={onChange}
            placeholder="Placeholder"
          >
            {OPTIONS_SIMPLE.map((option, ind) => (
              <Option key={option} value={option} disabled={ind === 4}>
                {option}
              </Option>
            ))}
          </SelectField>
        </AccordionItem>
        <AccordionItem
          id="accordion1-item3"
          defaultExpanded
          title="Третий пункт"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};
`;function Accordion_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Accordion_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Accordion_stories_define_property(target,key,source[key])})}return target}function Accordion_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Accordion_stories_templateObject(){var data=Accordion_stories_tagged_template_literal([`
  height: 20px;
`]);return Accordion_stories_templateObject=function _templateObject(){return data},data}function Accordion_stories_templateObject1(){var data=Accordion_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Accordion_stories_templateObject1=function _templateObject(){return data},data}var Accordion_stories_Separator=styled_components_browser_esm.Ay.div(Accordion_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(Accordion_stories_templateObject1());let Accordion_stories={title:"Admiral-2.1/Accordion",component:Accordion,parameters:{docs:{source:{language:"tsx"}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними. Два размера: 56 и 40 px.",(0,jsx_runtime.jsx)(Accordion_stories_Separator,{}),"Компонент настроен на автоподстройку высоты, при вводе текста под заголовком. Ширину можно менять вручную, так же происходит автоподстройка контента.",(0,jsx_runtime.jsx)(Accordion_stories_Separator,{}),"Если открыта одна закладка, то открытие другой не приводит к ее закрытию. При открытии вкладки весь контент страницы под аккордеоном сдвигается вниз на высоту текста открытой вкладки."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A9887"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A10059"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A10103"}]},argTypes:{dimension:{options:["l","m"],control:{type:"radio"}},iconPosition:{options:["right","left"],control:{type:"radio"}},hideTopDivider:{control:{type:"boolean"}},hideBottomDivider:{control:{type:"boolean"}}}};var AccordionPlayground={render:function(props){return(0,jsx_runtime.jsx)(AccordionPlaygroundTemplate,Accordion_stories_object_spread({},props))},parameters:{docs:{source:{code:AccordionPlayground_templateraw_namespaceObject}}},name:"Accordion. Playground."},AccordionDimension={render:function(){return(0,jsx_runtime.jsx)(AccordionDimensionTemplate,{})},parameters:{docs:{source:{code:AccordionDimension_templateraw_namespaceObject}}},name:"Accordion. Размеры."},AccordionModes={render:function(props){return(0,jsx_runtime.jsx)(AccordionModesTemplate,Accordion_stories_object_spread({},props))},parameters:{docs:{source:{code:AccordionModes_templateraw_namespaceObject}}},name:"Accordion. Режимы использования."},AccordionIcon={render:function(){return(0,jsx_runtime.jsx)(AccordionIconTemplate,{})},name:"Accordion. Расположение шеврона слева.",parameters:{docs:{source:{code:AccordionIcon_templateraw_namespaceObject}}}},AccordionDivider={render:function(){return(0,jsx_runtime.jsx)(AccordionDividerTemplate,{})},parameters:{docs:{source:{code:AccordionDivider_templateraw_namespaceObject}}},name:"Accordion. Скрытие разделителей."};AccordionPlayground.parameters={...AccordionPlayground.parameters,docs:{...AccordionPlayground.parameters?.docs,source:{originalSource:`{
  render: AccordionPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: AccordionPlaygroundRaw
      }
    }
  },
  name: 'Accordion. Playground.'
}`,...AccordionPlayground.parameters?.docs?.source}}},AccordionDimension.parameters={...AccordionDimension.parameters,docs:{...AccordionDimension.parameters?.docs,source:{originalSource:`{
  render: AccordionDimensionStory,
  parameters: {
    docs: {
      source: {
        code: AccordionDimensionRaw
      }
    }
  },
  name: 'Accordion. Размеры.'
}`,...AccordionDimension.parameters?.docs?.source}}},AccordionModes.parameters={...AccordionModes.parameters,docs:{...AccordionModes.parameters?.docs,source:{originalSource:`{
  render: AccordionModesStory,
  parameters: {
    docs: {
      source: {
        code: AccordionModesRaw
      }
    }
  },
  name: 'Accordion. Режимы использования.'
}`,...AccordionModes.parameters?.docs?.source}}},AccordionIcon.parameters={...AccordionIcon.parameters,docs:{...AccordionIcon.parameters?.docs,source:{originalSource:`{
  render: AccordionIconStory,
  name: 'Accordion. Расположение шеврона слева.',
  parameters: {
    docs: {
      source: {
        code: AccordionIconRaw
      }
    }
  }
}`,...AccordionIcon.parameters?.docs?.source}}},AccordionDivider.parameters={...AccordionDivider.parameters,docs:{...AccordionDivider.parameters?.docs,source:{originalSource:`{
  render: AccordionDividerStory,
  parameters: {
    docs: {
      source: {
        code: AccordionDividerRaw
      }
    }
  },
  name: 'Accordion. Скрытие разделителей.'
}`,...AccordionDivider.parameters?.docs?.source}}};let __namedExportsOrder=["AccordionPlayground","AccordionDimension","AccordionModes","AccordionIcon","AccordionDivider"]},"./src/components/InputIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>InputIconButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function AnyIcon(_param){var icon=_param.icon,props=_object_without_properties(_param,["icon"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(icon,_object_spread({},props))}var InputIconButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(AnyIcon)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 70"]});try{AnyIcon.displayName="AnyIcon",AnyIcon.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#AnyIcon"]={docgenInfo:AnyIcon.__docgenInfo,name:"AnyIcon",path:"src/components/InputIconButton.tsx#AnyIcon"})}catch(__react_docgen_typescript_loader_error){}try{InputIconButton.displayName="InputIconButton",InputIconButton.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#InputIconButton"]={docgenInfo:InputIconButton.__docgenInfo,name:"InputIconButton",path:"src/components/InputIconButton.tsx#InputIconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject1=function _templateObject(){return data},data}var sizes=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}},function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1(),sizes,function(p){return p.$svgMixin||""}),Spinner=function(_param){var _param_dimension=_param.dimension,_param_inverse=_param.inverse,svgMixin=_param.svgMixin,props=_object_without_properties(_param,["dimension","inverse","svgMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerWrapper,_object_spread_props(_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__.N,{$inverse:void 0!==_param_inverse&&_param_inverse})}))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/dom/changeInputData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isInputDataDifferent(data1,data2){return data1.value!==data2.value||data1.selectionStart!==data2.selectionStart||data1.selectionEnd!==data2.selectionEnd}function changeInputData(input,toChangeData){var _toChangeData_value=toChangeData.value,value=void 0===_toChangeData_value?input.value:_toChangeData_value,selectionStart=toChangeData.selectionStart,selectionEnd=toChangeData.selectionEnd;if(isInputDataDifferent(input,{value:value,selectionStart:selectionStart,selectionEnd:selectionEnd})){var _Object_getOwnPropertyDescriptor,event,nativeInputValueSetter=null==(_Object_getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input),"value"))?void 0:_Object_getOwnPropertyDescriptor.set;null==nativeInputValueSetter||nativeInputValueSetter.call(input,value),"number"==typeof selectionStart&&"number"==typeof selectionEnd&&input.setSelectionRange(selectionStart,selectionEnd),"function"==typeof Event?event=new Event("input",{bubbles:!0}):(event=document.createEvent("Event")).initEvent("input",!0,!0),input.dispatchEvent(event)}}__webpack_require__.d(__webpack_exports__,{B:()=>changeInputData,i:()=>isInputDataDifferent})},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>checkOverflow});var checkOverflow=function(textContainer){return!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)}},"./src/components/form/SelectField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>SelectField});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_input_Select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/input/Select/index.tsx"),_src_components_Field__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),_src_components_common_hooks_useId__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/hooks/useId.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  [data-status='error'] & {
    border-color: var(--admiral-color-Error_Error60Main, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}var Select=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_input_Select__WEBPACK_IMPORTED_MODULE_3__.l6)(_templateObject(),function(p){return p.theme.color["Error/Error 60 Main"]}),SelectField=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(props,ref){var className=props.className,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,_src_components_common_hooks_useId__WEBPACK_IMPORTED_MODULE_4__.B)():_props_id,disabled=props.disabled,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","displayInline","status","required","extraText","label","id","disabled","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__.$e)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_5__.G)(restProps,fieldContainerProps);var selectProps=_object_spread({ref:ref,id:id,"aria-required":required,status:status,disabled:disabled,skeleton:skeleton},restProps);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_6__.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Select,_object_spread({},selectProps))}))});SelectField.displayName="SelectField";try{SelectField.displayName="SelectField",SelectField.__docgenInfo={description:"",displayName:"SelectField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},mode:{defaultValue:null,description:"Позволяет использовать Select как select",name:"mode",required:!1,type:{name:"enum",value:[{value:'"select"'},{value:'"searchSelect"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"Добавить селекту возможность множественного выбора",name:"multiple",required:!1,type:{name:"boolean"}},showCheckbox:{defaultValue:null,description:"По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его",name:"showCheckbox",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string | string[]"}},displayClearIcon:{defaultValue:null,description:"",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},idleHeight:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.6.0, будет удалено в 10.x.x версии.
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
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SelectField/index.tsx#SelectField"]={docgenInfo:SelectField.__docgenInfo,name:"SelectField",path:"src/components/form/SelectField/index.tsx#SelectField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cg:()=>containerHeights,j2:()=>HeightLimitedContainer,mc:()=>Container,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/animation.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
  & > * {
    visibility: hidden;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: `,`;

  pointer-events: `,`;
  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  `,`;
`]);return _templateObject3=function _templateObject(){return data},data}var containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),function(param){switch(param.$dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}}),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__.h),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject2(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__.VM)(p.theme.shape),")")},function(p){return p.$skeleton?"none":"all"},function(param){return param.$skeleton&&skeletonMixin}),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(Container)(_templateObject3(),containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-Accordion-stories-Accordion-stories.c3b97a37.iframe.bundle.js.map