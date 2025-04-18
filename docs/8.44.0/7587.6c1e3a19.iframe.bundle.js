"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7587],{"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>TOOLTIP_DELAY,m:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),scrollbarUtil=__webpack_require__("./src/components/common/dom/scrollbarUtil.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),PositionInPortal=__webpack_require__("./src/components/PositionInPortal.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),parseShadowFromTheme=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, `,`);
  `,`
  color: var(--admiral-color-Neutral_Neutral00, `,`);
  border-radius: var(--admiral-border-radius-Small, `,`);
  box-shadow: var(--admiral-box-shadow-Shadow04, `,`);
  padding: `,`;
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  display: flex;
  flex-wrap: nowrap;
  `,`
  z-index: var(--admiral-z-index-tooltip, `,`);
`]);return _templateObject3=function _templateObject(){return data},data}var TooltipWrapper=styled_components_browser_esm.Ay.div(_templateObject()),TooltipContainer=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 80"]},function(p){return"m"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Caption/Caption 1"]},function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return(0,borderRadius.r2)(p.theme.shape)},function(p){return(0,parseShadowFromTheme.C)(p.theme.shadow["Shadow 04"])},function(p){return"m"===p.$dimension?"4px 8px":"2px 6px"}),FakeTarget=styled_components_browser_esm.Ay.div(_templateObject2()),Portal=(0,styled_components_browser_esm.Ay)(PositionInPortal.l)(_templateObject3(),function(param){var $flexDirection=param.$flexDirection;return $flexDirection?"flex-direction: ".concat($flexDirection,";"):""},function(param){return param.theme.zIndex.tooltip});function getTooltipDirection(anchorElement,tooltipElement,scrollbarSize,tooltipPosition){var anchorElementRect=anchorElement.getBoundingClientRect(),tooltipRect=tooltipElement.getBoundingClientRect(),positions=Object.entries(getPositionMapper(scrollbarSize)),compatiblePositions=tooltipPosition?positions.filter(function(kv){return kv[0].includes(tooltipPosition)&&kv[1].check(anchorElementRect,tooltipRect)}):positions.filter(function(kv){return kv[1].check(anchorElementRect,tooltipRect)}),defaultPosition=tooltipPosition||"bottom";return compatiblePositions.length?compatiblePositions[0][0]:defaultPosition}function getPositionMapper(scrollbarSize){return{bottom:{check:function(anchorElementRect,tooltipRect){var isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.bottom-scrollbarSize>8+tooltipRect.height,isEnoughOnLeft=anchorElementRect.left+anchorElementRect.width/2>tooltipRect.width/2,isEnoughOnRight=globalThis.innerWidth-anchorElementRect.right-scrollbarSize+anchorElementRect.width/2>tooltipRect.width/2;return isEnoughOnBottom&&isEnoughOnLeft&&isEnoughOnRight}},top:{check:function(anchorElementRect,tooltipRect){var isEnoughOnTop=anchorElementRect.top>8+tooltipRect.height,isEnoughOnLeft=anchorElementRect.left+anchorElementRect.width/2>tooltipRect.width/2,isEnoughOnRight=globalThis.innerWidth-anchorElementRect.right-scrollbarSize+anchorElementRect.width/2>tooltipRect.width/2;return isEnoughOnTop&&isEnoughOnLeft&&isEnoughOnRight}},left:{check:function(anchorElementRect,tooltipRect){var isEnoughOnLeft=anchorElementRect.left>8+tooltipRect.width,isEnoughOnTop=anchorElementRect.top>(tooltipRect.height-anchorElementRect.height)/2,isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.bottom-scrollbarSize>(tooltipRect.height-anchorElementRect.height)/2;return isEnoughOnLeft&&isEnoughOnBottom&&isEnoughOnTop}},right:{check:function(anchorElementRect,tooltipRect){var isEnoughOnRight=globalThis.innerWidth-anchorElementRect.right-scrollbarSize>8+tooltipRect.width,isEnoughOnTop=anchorElementRect.top>(tooltipRect.height-anchorElementRect.height)/2,isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.bottom-scrollbarSize>(tooltipRect.height-anchorElementRect.height)/2;return isEnoughOnRight&&isEnoughOnBottom&&isEnoughOnTop}},bottomRight:{check:function(anchorElementRect,tooltipRect){var isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.bottom-scrollbarSize>8+tooltipRect.height,isEnoughOnRight=globalThis.innerWidth-anchorElementRect.left-scrollbarSize>tooltipRect.width;return isEnoughOnBottom&&isEnoughOnRight}},bottomLeft:{check:function(anchorElementRect,tooltipRect){var isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.bottom-scrollbarSize>8+tooltipRect.height,isEnoughOnLeft=anchorElementRect.right>tooltipRect.width;return isEnoughOnBottom&&isEnoughOnLeft}},topRight:{check:function(anchorElementRect,tooltipRect){var isEnoughOnTop=anchorElementRect.top>8+tooltipRect.height,isEnoughOnRight=globalThis.innerWidth-anchorElementRect.left-scrollbarSize>tooltipRect.width;return isEnoughOnTop&&isEnoughOnRight}},topLeft:{check:function(anchorElementRect,tooltipRect){var isEnoughOnTop=anchorElementRect.top>8+tooltipRect.height,isEnoughOnLeft=anchorElementRect.right>tooltipRect.width;return isEnoughOnTop&&isEnoughOnLeft}},leftBottom:{check:function(anchorElementRect,tooltipRect){var isEnoughOnLeft=anchorElementRect.left>8+tooltipRect.width,isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.top-scrollbarSize>tooltipRect.height;return isEnoughOnLeft&&isEnoughOnBottom}},leftTop:{check:function(anchorElementRect,tooltipRect){var isEnoughOnLeft=anchorElementRect.left>8+tooltipRect.width,isEnoughOnTop=anchorElementRect.bottom>tooltipRect.height;return isEnoughOnLeft&&isEnoughOnTop}},rightBottom:{check:function(anchorElementRect,tooltipRect){var isEnoughOnRight=globalThis.innerWidth-anchorElementRect.right-scrollbarSize>8+tooltipRect.width,isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.top-scrollbarSize>tooltipRect.height;return isEnoughOnRight&&isEnoughOnBottom}},rightTop:{check:function(anchorElementRect,tooltipRect){var isEnoughOnRight=globalThis.innerWidth-anchorElementRect.right-scrollbarSize>8+tooltipRect.width,isEnoughOnTop=anchorElementRect.bottom>tooltipRect.height;return isEnoughOnRight&&isEnoughOnTop}},bottomPageCenter:{check:function(anchorElementRect,tooltipRect){var isEnoughOnBottom=globalThis.innerHeight-anchorElementRect.bottom-scrollbarSize>8+tooltipRect.height,isEnoughOnCenter=globalThis.innerWidth-scrollbarSize>=tooltipRect.width;return isEnoughOnBottom&&isEnoughOnCenter}},topPageCenter:{check:function(anchorElementRect,tooltipRect){var isEnoughOnTop=anchorElementRect.top>8+tooltipRect.height,isEnoughOnCenter=globalThis.innerWidth-scrollbarSize>=tooltipRect.width;return isEnoughOnTop&&isEnoughOnCenter}}}}var DropdownProvider=__webpack_require__("./src/components/DropdownProvider.tsx"),react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var TOOLTIP_DELAY=1500,Tooltip=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,renderContent=_param.renderContent,targetElement=_param.targetElement,tooltipPosition=_param.tooltipPosition,props=_object_without_properties(_param,["dimension","renderContent","targetElement","tooltipPosition"]),tooltipElementRef=(0,react.useRef)(null),tooltipHeight=(0,react.useRef)(0),rootRef=(0,react.useContext)(DropdownProvider.rO).rootRef,emptyContent=(0,react.useMemo)(function(){return!renderContent()&&0!==renderContent()},[renderContent]),_useState=_sliced_to_array((0,react.useState)(),2),portalFlexDirection=_useState[0],setPortalFlexDirection=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),portalFullWidth=_useState1[0],setPortalFullWidth=_useState1[1],_useState2=_sliced_to_array((0,react.useState)({}),2),recalculation=_useState2[0],startRecalculation=_useState2[1],manageTooltip=function(scrollbarSize){if(targetElement&&tooltipElementRef.current){var direction=getTooltipDirection(targetElement,tooltipElementRef.current,scrollbarSize,tooltipPosition),tooltip=tooltipElementRef.current;switch(direction){case"leftBottom":case"leftTop":case"left":setPortalFlexDirection("row-reverse"),setPortalFullWidth(!1),tooltip.style.margin="0 8px 0 0",tooltip.style.alignSelf="leftBottom"===direction?"flex-start":"leftTop"===direction?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":setPortalFlexDirection("row"),setPortalFullWidth(!1),tooltip.style.margin="0 0 0 8px",tooltip.style.alignSelf="rightBottom"===direction?"flex-start":"rightTop"===direction?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":setPortalFlexDirection("column-reverse"),setPortalFullWidth("topPageCenter"===direction),tooltip.style.margin="0 0 8px 0",tooltip.style.alignSelf="topLeft"===direction?"flex-end":"topRight"===direction?"flex-start":"center";break;default:setPortalFlexDirection("column"),setPortalFullWidth("bottomPageCenter"===direction),tooltip.style.margin="8px 0 0 0",tooltip.style.alignSelf="bottomLeft"===direction?"flex-end":"bottomRight"===direction?"flex-start":"center"}}};return(0,react.useEffect)(function(){manageTooltip((0,scrollbarUtil.M)())},[renderContent(),targetElement,tooltipPosition,recalculation]),(0,react.useLayoutEffect)(function(){if(tooltipElementRef.current&&!emptyContent){var resizeObserver=new ResizeObserver(function(entries){entries.forEach(function(entry){0===tooltipHeight.current?tooltipHeight.current=entry.contentRect.height:startRecalculation({})})});return resizeObserver.observe(tooltipElementRef.current),function(){resizeObserver.disconnect()}}},[emptyContent]),(0,react.useEffect)(function(){tooltipElementRef.current&&!emptyContent&&(tooltipElementRef.current.style.opacity="1")},[emptyContent]),emptyContent?null:(0,jsx_runtime.jsxs)(Portal,{targetElement:targetElement,rootRef:rootRef,$flexDirection:portalFlexDirection,fullContainerWidth:portalFullWidth,children:[(0,jsx_runtime.jsx)(FakeTarget,{}),(0,jsx_runtime.jsx)(TooltipWrapper,{ref:(0,refSetter.d)(ref,tooltipElementRef),children:(0,jsx_runtime.jsx)(TooltipContainer,_object_spread_props(_object_spread({role:"tooltip",$dimension:void 0===_param_dimension?"m":_param_dimension},props),{children:renderContent()}))})]})});Tooltip.displayName="Tooltip";try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},renderContent:{defaultValue:null,description:"Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание",name:"renderContent",required:!0,type:{name:"() => ReactNode"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},container:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором будет отрисован тултип через React.createPortal.
По умолчанию тултип отрисовывается в document.body`,name:"container",required:!1,type:{name:"undefined"}},tooltipPosition:{defaultValue:null,description:"Расположение тултипа",name:"tooltipPosition",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/index.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/index.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/dom/scrollbarUtil.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>getScrollbarSize});var getScrollbarSize=function(){var scrollBarWidth=0,scrollbox=document.createElement("div");return scrollbox.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,scrollbox.style.overflow="scroll",scrollbox.style.fontSize="14px",scrollbox.style.height="50px",scrollbox.style.maxHeight="50px",scrollbox.style.width="100px",scrollbox.style.position="absolute",scrollbox.style.top="-100000px",scrollbox.style.left="-100000px",document.body.appendChild(scrollbox),scrollBarWidth=scrollbox.offsetWidth-scrollbox.clientWidth,document.body.removeChild(scrollbox),scrollBarWidth||16}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=7587.6c1e3a19.iframe.bundle.js.map