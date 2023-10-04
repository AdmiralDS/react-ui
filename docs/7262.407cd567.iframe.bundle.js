"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7262],{"./src/components/Menu/MenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>MenuItem});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");const styleTextMixin=(0,styled_components_browser_esm.iv)([""," ul[data-dimension='s'] &{","}"],(({$dimension})=>"s"===$dimension?typography.c["Body/Body 2 Long"]:typography.c["Body/Body 1 Long"]),typography.c["Body/Body 2 Long"]),colorTextMixin=(0,styled_components_browser_esm.iv)(["color:",";"],(({theme,$disabled})=>$disabled?theme.color["Neutral/Neutral 30"]:theme.color["Neutral/Neutral 90"])),backgroundColor=(0,styled_components_browser_esm.iv)(["background:",";"],(({theme,$selected,$hovered})=>$hovered?theme.color["Opacity/Hover"]:$selected?theme.color["Opacity/Focus"]:theme.color["Special/Elevated BG"])),paddings=(0,styled_components_browser_esm.iv)(["padding:",";ul[data-dimension='m'] &&{padding:8px 16px;}ul[data-dimension='s'] &&{padding:6px 12px;}"],(({$dimension})=>{switch($dimension){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}));var SmallArrowRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg");const Chevron=(0,styled_components_browser_esm.ZP)(SmallArrowRightOutline.r).withConfig({displayName:"styled__Chevron",componentId:"sc-h2e66q-0"})(["transition:all 0.3s;flex-shrink:0;width:24px;height:24px;margin:0 0 0 8px;[data-icon='left'] &{margin:0 8px 0 0;}& *[fill^='#']{fill:",";}[data-disabled='true'] &{& *[fill^='#']{fill:",";}}[data-dimension='s'] &{width:20px;height:20px;}"],(({theme})=>theme.color["Neutral/Neutral 50"]),(({theme})=>theme.color["Neutral/Neutral 30"]));var refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const stopEventHandler=e=>{e.preventDefault(),e.stopPropagation()},MenuItem=react.forwardRef((({children,expandIcon=(0,jsx_runtime.jsx)(Chevron,{}),hasSubmenu,onHover,disabled,hovered,dimension="l",selected=!1,selfRef,onMouseDown,onLeave,containerRef,...props},ref)=>{const handleMouseDown=disabled?stopEventHandler:onMouseDown,resolvedRef=selfRef?(0,refSetter.O)(ref,selfRef):ref;return(0,jsx_runtime.jsxs)(Item,{ref:resolvedRef,$dimension:dimension,$selected:selected,$hovered:hovered,"data-hovered":hovered,"data-disabled":disabled,"data-dimension":dimension,onMouseEnter:e=>{onHover?.(),props.onMouseEnter?.(e)},onMouseLeave:e=>{onLeave?.(e),props.onMouseLeave?.(e)},onMouseMove:e=>{onHover?.(),props.onMouseMove?.(e)},onMouseDown:handleMouseDown,...props,children:[react.Children.toArray(children).map(((child,index)=>"string"==typeof child?(0,jsx_runtime.jsx)(TextWrapper,{children:child},child+index):child)),hasSubmenu&&expandIcon]})}));MenuItem.displayName="MenuItem";const Item=styled_components_browser_esm.ZP.div.withConfig({displayName:"MenuItem__Item",componentId:"sc-jdadix-0"})(["display:flex;align-items:center;user-select:none;position:relative;justify-content:space-between;outline:none;white-space:pre;margin:0;cursor:pointer;box-sizing:border-box;"," "," "," "," &&[data-disabled='true']{cursor:not-allowed;background-color:",";color:",";&& *[fill^='#']{fill:",";}&& input[type='checkbox'] + * [fill^='#']{fill:",";}}"],paddings,styleTextMixin,colorTextMixin,backgroundColor,(p=>p.theme.color["Special/Elevated BG"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),TextWrapper=styled_components_browser_esm.ZP.span.withConfig({displayName:"MenuItem__TextWrapper",componentId:"sc-jdadix-1"})(["overflow:hidden;text-overflow:ellipsis;"]);try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{dimension:{defaultValue:{value:"l"},description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},selected:{defaultValue:{value:"false"},description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:{value:"<Chevron />"},description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:"",name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuItem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Menu/MenuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Menu,u:()=>getItemHeight});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spacer=styled_components_browser_esm.ZP.div.withConfig({displayName:"VirtualBody__Spacer",componentId:"sc-grtm5e-0"})(["display:flex;flex:0 0 auto;"]);const VirtualBody=({scrollContainerRef,itemHeight,rowCount=6,aheadItemsCount=3,model,activeId,selected,onRenderItem})=>{const[scrollTop,setScrollTop]=react.useState(0),[partition,setPartition]=react.useState({startIndex:0,endIndex:rowCount,topPadding:"",bottomPadding:"",needAddListener:!1}),prevValue=function usePrevious(value){const ref=react.useRef();return react.useEffect((()=>{ref.current=value})),ref.current}({activeId}),handleScroll=react.useCallback((e=>{requestAnimationFrame((()=>{e.target&&setScrollTop(e.target.scrollTop)}))}),[scrollContainerRef]);react.useEffect((()=>{const scrollContainer=scrollContainerRef.current;return setScrollTop(scrollContainer?.scrollTop||0),scrollContainer?.addEventListener("scroll",handleScroll),()=>scrollContainer?.removeEventListener("scroll",handleScroll)}),[handleScroll]),react.useEffect((()=>{partition.needAddListener&&(setTimeout((()=>scrollContainerRef?.current?.addEventListener("scroll",handleScroll))),setPartition({...partition,needAddListener:!1}))}),[partition,scrollContainerRef]);const calcPartition=react.useCallback((start=>{const itemCount=model.length,startIndex=Math.max(0,start);let visibleNodeCount=rowCount+2*aheadItemsCount;visibleNodeCount=Math.min(itemCount-startIndex,visibleNodeCount);return{startIndex,endIndex:startIndex+visibleNodeCount,topPadding:startIndex*itemHeight+"px",bottomPadding:(itemCount-startIndex-visibleNodeCount)*itemHeight+"px"}}),[itemHeight,aheadItemsCount,model,rowCount]);react.useEffect((()=>{const start=Math.floor(scrollTop/itemHeight-aheadItemsCount),partition={...calcPartition(start),needAddListener:!1};setPartition(partition)}),[scrollTop,calcPartition]),react.useEffect((()=>{if(!activeId||!prevValue)return;if(prevValue.activeId===activeId)return;const index=model.findIndex((item=>item.id===activeId));-1!==index&&(index<partition.startIndex||index>partition.endIndex)&&(scrollContainerRef?.current?.removeEventListener("scroll",handleScroll),setPartition({...calcPartition(index),needAddListener:!0}))}),[activeId,partition,calcPartition,scrollContainerRef]);const visibleChildren=react.useMemo((()=>[...model].slice(partition.startIndex,partition.endIndex).map(((item,index)=>onRenderItem?.(item,index)))),[model,activeId,selected,partition]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Spacer,{style:{minHeight:partition.topPadding}}),visibleChildren,(0,jsx_runtime.jsx)(Spacer,{style:{minHeight:partition.bottomPadding}})]})};try{VirtualBody.displayName="VirtualBody",VirtualBody.__docgenInfo={description:"",displayName:"VirtualBody",props:{scrollContainerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"scrollContainerRef",required:!0,type:{name:"RefObject<HTMLElement>"}},itemHeight:{defaultValue:null,description:"Высота 1 элемента меню",name:"itemHeight",required:!0,type:{name:"number"}},rowCount:{defaultValue:{value:"6"},description:"Максимальное количество строк в меню",name:"rowCount",required:!1,type:{name:"number"}},aheadItemsCount:{defaultValue:{value:"3"},description:"Количество отображаемых строк в начале и в конце виртуального списка",name:"aheadItemsCount",required:!1,type:{name:"number"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!0,type:{name:"MenuModelItemProps[]"}},activeId:{defaultValue:null,description:"Id активного элемента",name:"activeId",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"Id выбранных элементов",name:"selected",required:!0,type:{name:"string[]"}},onRenderItem:{defaultValue:null,description:"render-метод для отрисовки пункта меню",name:"onRenderItem",required:!1,type:{name:"((item: MenuModelItemProps, index: number) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/VirtualBody.tsx#VirtualBody"]={docgenInfo:VirtualBody.__docgenInfo,name:"VirtualBody",path:"src/components/Menu/VirtualBody.tsx#VirtualBody"})}catch(__react_docgen_typescript_loader_error){}var refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),DropdownProvider=__webpack_require__("./src/components/DropdownProvider.tsx"),PositionInPortal=__webpack_require__("./src/components/PositionInPortal.tsx"),useClickOutside=__webpack_require__("./src/components/common/hooks/useClickOutside.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),throttle=__webpack_require__("./src/components/common/utils/throttle.ts");const findModelItem=(items,id)=>{for(let i=0;i<items.length;i++){const item=items[i];if(item.id===id)return item;if(item.subItems&&item.subItems.length>0){const subItem=findModelItem(item.subItems,id);if(subItem)return subItem}}},hasSelectedChildren=(item,selected)=>!!item.subItems&&item.subItems.some((item=>selected.includes(item.id)||hasSelectedChildren(item,selected))),valueToArray=value=>Array.isArray(value)?[...value]:[value],AnchorWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"SubMenuContainer__AnchorWrapper",componentId:"sc-1kusot-0"})(["display:inline-block;position:relative;cursor:pointer;"]),Portal=(0,styled_components_browser_esm.ZP)(PositionInPortal.k).withConfig({displayName:"SubMenuContainer__Portal",componentId:"sc-1kusot-1"})(["display:flex;flex-wrap:nowrap;",""],(({$flexDirection})=>$flexDirection?`flex-direction: ${$flexDirection};`:"flex-direction: column;")),FakeTarget=styled_components_browser_esm.ZP.div.withConfig({displayName:"SubMenuContainer__FakeTarget",componentId:"sc-1kusot-2"})(["pointer-events:none;height:100%;width:100%;flex:0 0 auto;"]),SubMenuWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"SubMenuContainer__SubMenuWrapper",componentId:"sc-1kusot-3"})(["position:relative;align-self:flex-start;"]),InnerContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"SubMenuContainer__InnerContainer",componentId:"sc-1kusot-4"})(["background-color:",";color:",";"," border-radius:",";overflow:hidden;box-sizing:border-box;"],(({theme})=>theme.color["Special/Elevated BG"]),(({theme})=>theme.color["Neutral/Neutral 90"]),(({theme})=>theme.shadow["Shadow 08"]),(p=>(0,borderRadius.c8)(p.theme.shape))),SubMenuContainer=({target,children,onClickOutside,defaultRenderDirection="right",...props})=>{const{rootRef}=react.useContext(DropdownProvider.Dl),anchorElementRef=react.useRef(null),wrapperRef=react.useRef(null),targetElement=target?.current||anchorElementRef.current,[recalculation,startRecalculation]=react.useState(null),[portalFlexDirection,setPortalFlexDirection]=react.useState("row");react.useLayoutEffect((()=>{const[listener,freeResources]=(0,throttle.P)((()=>{startRecalculation({})}),100);return window.addEventListener("resize",listener),window.addEventListener("scroll",listener),()=>{window.removeEventListener("resize",listener),window.removeEventListener("scroll",listener),freeResources()}}));const{addDropdown,removeDropdown,dropdowns}=(0,DropdownProvider.xN)(wrapperRef);react.useLayoutEffect((()=>(addDropdown?.(wrapperRef),()=>{removeDropdown?.(wrapperRef)})),[]);return(0,useClickOutside.O)([wrapperRef],(e=>{(0,DropdownProvider.DD)(e,dropdowns)&&onClickOutside(e)})),react.useLayoutEffect((()=>{const wrapperElement=wrapperRef.current;if(targetElement&&wrapperElement){const{position,bottomOffset=0}=function getPosition(anchorElement,containerElement,renderDirection){const anchorElementRect=anchorElement.getBoundingClientRect(),containerRect=containerElement.getBoundingClientRect(),isEnoughOnRight=document.documentElement.clientWidth-anchorElementRect.right>containerRect.width,isEnoughOnLeft=anchorElementRect.left>containerRect.width,side="right"===renderDirection?!isEnoughOnRight&&isEnoughOnLeft?"left":"right":!isEnoughOnLeft&&isEnoughOnRight?"right":"left";return document.documentElement.clientHeight-anchorElementRect.top>containerRect.height-1?{position:`${side}Bottom`}:{position:side,bottomOffset:8-(document.documentElement.clientHeight-anchorElementRect.top-containerRect.height)}}(targetElement,wrapperElement,defaultRenderDirection);switch(position){case"right":setPortalFlexDirection("row"),wrapperElement.style.bottom=`${bottomOffset}px`;break;case"left":setPortalFlexDirection("row-reverse"),wrapperElement.style.bottom=`${bottomOffset}px`;break;case"rightBottom":default:setPortalFlexDirection("row"),wrapperElement.style.bottom="8px";break;case"leftBottom":setPortalFlexDirection("row-reverse"),wrapperElement.style.bottom="8px"}}}),[target,recalculation]),(0,jsx_runtime.jsx)(AnchorWrapper,{ref:anchorElementRef,children:(0,jsx_runtime.jsxs)(Portal,{targetElement,rootRef,$flexDirection:portalFlexDirection,fullContainerWidth:!1,children:[(0,jsx_runtime.jsx)(FakeTarget,{}),(0,jsx_runtime.jsx)(SubMenuWrapper,{ref:wrapperRef,...props,children:(0,jsx_runtime.jsx)(InnerContainer,{children})})]})})};SubMenuContainer.displayName="SubMenuContainer",SubMenuContainer.displayName="SubMenu";try{AnchorWrapper.displayName="SubMenu",AnchorWrapper.__docgenInfo={description:"",displayName:"SubMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/SubMenuContainer.tsx#SubMenu"]={docgenInfo:SubMenu.__docgenInfo,name:"SubMenu",path:"src/components/Menu/SubMenuContainer.tsx#SubMenu"})}catch(__react_docgen_typescript_loader_error){}var splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");const getItemHeight=dimension=>{switch(dimension){case"l":default:return 48;case"m":return 40;case"s":return 32}},menuListHeights=(0,styled_components_browser_esm.iv)(["max-height:",";"],(({$dimension,$maxHeight,$rowCount})=>{return $maxHeight||`min(calc(100vh - 16px), ${rowCount=$rowCount,dimension=$dimension,getItemHeight(dimension)*rowCount+16}px)`;var rowCount,dimension})),Wrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"Menu__Wrapper",componentId:"sc-5xn1k8-0"})(["padding:0;",";",";box-sizing:border-box;display:flex;overflow:hidden;flex-direction:column;align-items:stretch;pointer-events:initial;background-color:",";max-width:calc(100vw - 32px);border-color:transparent;",";&:focus-visible{border:0;outline:none;}"],(p=>p.$hasTopPanel?"padding-top: 8px":""),(p=>p.$hasBottomPanel?"padding-bottom: 8px":""),(p=>p.theme.color["Special/Elevated BG"]),menuListHeights),StyledDiv=styled_components_browser_esm.ZP.div.withConfig({displayName:"Menu__StyledDiv",componentId:"sc-5xn1k8-1"})(["",";",";margin:0;appearance:none;flex:1 1 auto;border:none;overflow-y:auto;box-sizing:border-box;"],(p=>p.$hasTopPanel?"":"padding-top: 8px"),(p=>p.$hasBottomPanel?"":"padding-bottom: 8px")),Menu=react.forwardRef((({model,defaultSelected,selected,active,onSelectItem,onDeselectItem,onActivateItem,renderTopPanel,renderBottomPanel,dimension="l",multiSelection=!1,disableSelectedOptionHighlight=!1,onForwardCycleApprove,onBackwardCycleApprove,containerRef,virtualScroll,rowCount=6,parentMenuRef,onCloseQuery,defaultIsActive=!0,subMenuRenderDirection,preventFocusSteal,maxHeight,...props},ref)=>{const findNextId=currentId=>{const currentIndex=currentId?model.findIndex((item=>item.id===currentId)):-1;let nextIndex=currentIndex<model.length-1?currentIndex+1:0,finishCycle=!1;for(;(model[nextIndex].disabled||model[nextIndex].readOnly)&&!finishCycle;)nextIndex=nextIndex<model.length-1?nextIndex+1:0,finishCycle=-1===currentIndex?0===nextIndex:nextIndex===currentIndex;nextIndex=!(currentIndex>-1&&nextIndex<currentIndex)||!onForwardCycleApprove||onForwardCycleApprove()?nextIndex:currentIndex;return model[nextIndex].disabled||model[nextIndex].readOnly?void 0:model[nextIndex].id},uncontrolledActiveValue=model.length>0?findNextId():void 0,[selectedState,setSelectedState]=react.useState(defaultSelected?valueToArray(defaultSelected):[]),[activeState,setActiveState]=react.useState(uncontrolledActiveValue),[lastScrollEvent,setLastScrollEvent]=react.useState(),wrapperRef=react.useRef(null),subMenuRef=react.useRef(null),activeItemRef=react.useRef(null),[submenuVisible,setSubmenuVisible]=react.useState(!1),innerSelected=disableSelectedOptionHighlight?[]:void 0===selected?selectedState:valueToArray(selected),activeId=void 0===active?activeState:active,menuRef=react.useRef(null),hasTopPanel=!!renderTopPanel,hasBottomPanel=!!renderBottomPanel,activateItem=id=>{activeId!==id&&setActiveState(id),onActivateItem?.(id)},handleClickItem=id=>{const item=findModelItem(model,id);if(item&&!item.disabled&&!item.readOnly){const selectedIndex=selectedState.findIndex((itemId=>itemId===id));multiSelection?selectedIndex>-1?(setSelectedState(selectedState.splice(selectedIndex,1)),onDeselectItem?.(id)):(setSelectedState([...selectedState,id]),onSelectItem?.(id)):(-1===selectedIndex&&setSelectedState([id]),onSelectItem?.(id))}},{currentActiveMenu,activateMenu,deactivateMenu}=(0,DropdownProvider.xN)(wrapperRef);react.useEffect((()=>{function handleKeyDown(e){if(currentActiveMenu?.current!==wrapperRef.current)return;switch(keyboardKey.y.getCode(e)){case keyboardKey.y[" "]:case keyboardKey.y.Enter:activeId&&handleClickItem(activeId),e.preventDefault();break;case keyboardKey.y.ArrowDown:{const nextId=findNextId(activeId);activateItem(nextId),e.preventDefault();break}case keyboardKey.y.ArrowUp:{const previousId=(currentId=>{const currentIndex=currentId?model.findIndex((item=>item.id===currentId)):-1;let prevIndex=currentIndex>0?currentIndex-1:model.length-1,finishCycle=!1;for(;(model[prevIndex].disabled||model[prevIndex].readOnly)&&!finishCycle;)prevIndex=prevIndex>0?prevIndex-1:model.length-1,finishCycle=-1===currentIndex?0===prevIndex:prevIndex===currentIndex;return prevIndex=currentIndex>-1&&prevIndex>currentIndex&&onBackwardCycleApprove&&!onBackwardCycleApprove()?currentIndex:prevIndex,model[prevIndex].disabled||model[prevIndex].readOnly?void 0:model[prevIndex].id})(activeId);activateItem(previousId),e.preventDefault();break}case keyboardKey.y.ArrowRight:{const item=model.find((item=>item.id===activeId));!item||item.disabled||item.readOnly||!item.subItems||submenuVisible||setSubmenuVisible(!0),subMenuRef&&subMenuRef.current&&activateMenu?.(subMenuRef);break}case keyboardKey.y.ArrowLeft:parentMenuRef&&parentMenuRef.current&&onCloseQuery?.()}}return document.addEventListener("keydown",handleKeyDown),()=>{document.removeEventListener("keydown",handleKeyDown)}}),[active,activeState,currentActiveMenu]),react.useEffect((()=>(defaultIsActive&&activateMenu?.(wrapperRef),()=>{defaultIsActive&&currentActiveMenu===wrapperRef&&deactivateMenu?.(wrapperRef)})),[defaultIsActive]);const handleSubMenuClose=()=>{setSubmenuVisible(!1),activateMenu?.(wrapperRef)},renderItem=(item,index)=>{const{id,subItems,render,...itemProps}=item,hasSubmenu=!!subItems&&subItems.length>0,renderProps={hovered:activeId===id,selected:innerSelected.includes(id)||hasSelectedChildren(item,innerSelected),onLeave:e=>{subMenuRef.current?.contains(e.relatedTarget)||setSubmenuVisible(!1)},onHover:()=>{activateItem(itemProps.disabled?void 0:id),setSubmenuVisible(hasSubmenu)},onMouseDown:preventFocusSteal?e=>e.preventDefault():void 0,onClick:()=>handleClickItem(id),hasSubmenu,selfRef:ref=>{activeId===id&&hasSubmenu&&(activeItemRef.current=ref)},disabled:itemProps.disabled,containerRef,...itemProps};return"function"==typeof render?render(renderProps):(0,jsx_runtime.jsx)(MenuItem.s,{...renderProps,children:render},`${item.id}-${index}`)};react.useLayoutEffect((()=>{setTimeout((()=>{const hoveredItem=menuRef.current?.querySelector('[data-hovered="true"]');if(hoveredItem){const scrollEventTime=Date.now();setLastScrollEvent(scrollEventTime),hoveredItem?.scrollIntoView({behavior:!lastScrollEvent||scrollEventTime-lastScrollEvent<150?"auto":"smooth",inline:"center",block:"nearest"})}}),0)}),[active,activeState,model]);const menuProps=(0,splitDataAttributes.R_)(props);return(0,jsx_runtime.jsxs)(Wrapper,{ref:(0,refSetter.O)(wrapperRef,ref),$dimension:dimension,$hasTopPanel:hasTopPanel,$hasBottomPanel:hasBottomPanel,$rowCount:rowCount,$maxHeight:maxHeight,onMouseEnter:e=>{currentActiveMenu!==wrapperRef&&activateMenu?.(wrapperRef),props.onMouseEnter?.(e)},onFocus:e=>{currentActiveMenu!==wrapperRef&&activateMenu?.(wrapperRef),props.onFocus?.(e)},onBlur:e=>{currentActiveMenu===wrapperRef&&deactivateMenu?.(wrapperRef),props.onBlur?.(e)},...props,children:[hasTopPanel&&renderTopPanel({dimension}),(0,jsx_runtime.jsx)(StyledDiv,{ref:menuRef,$hasTopPanel:hasTopPanel,$hasBottomPanel:hasBottomPanel,...menuProps,children:virtualScroll?(()=>{if(!virtualScroll)return null;const itemHeight="auto"===virtualScroll.itemHeight?getItemHeight(dimension):virtualScroll.itemHeight;return(0,jsx_runtime.jsx)(VirtualBody,{scrollContainerRef:menuRef,itemHeight,model,rowCount,activeId,selected:innerSelected,onRenderItem:renderItem})})():model.map(((item,index)=>renderItem(item,index)))}),submenuVisible&&activeItemRef.current&&(0,jsx_runtime.jsx)(SubMenuContainer,{target:activeItemRef,defaultRenderDirection:subMenuRenderDirection,onClickOutside:()=>{setSubmenuVisible(!1)},children:(()=>{const activeItem=model.find((item=>item.id===activeId));return activeItem&&activeItem.subItems&&activeItem.subItems.length>0&&(0,jsx_runtime.jsx)(Menu,{ref:subMenuRef,parentMenuRef:wrapperRef,model:activeItem.subItems,subMenuRenderDirection,onCloseQuery:handleSubMenuClose,selected:innerSelected,onSelectItem:id=>handleClickItem(id),virtualScroll,preventFocusSteal:!0})})()}),hasBottomPanel&&renderBottomPanel({dimension})]})}));Menu.displayName="Menu";try{getItemHeight.displayName="Menu",getItemHeight.__docgenInfo={description:"",displayName:"Menu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/index.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/Menu/index.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/hooks/useClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useClickOutside});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useClickOutside=(elements,handler)=>{const listener=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{elements.every((element=>element.current&&!element.current.contains(e.target)))&&handler(e)}),[handler,elements]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(document.addEventListener("mousedown",listener,!0),document.addEventListener("touchstart",listener),()=>{document.removeEventListener("mousedown",listener,!0),document.removeEventListener("touchstart",listener)})),[listener])}},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(val){return null!==val&&!Array.isArray(val)&&"object"==typeof val}__webpack_require__.d(__webpack_exports__,{y:()=>keyboardKey});const codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(let j=0;j<26;j+=1){let n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}const keyboardKey={codes,getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey(eventOrCode){const isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;let name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[eventOrCode.shiftKey?1:0]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey[0],keyboardKey.Digit1=keyboardKey[1],keyboardKey.Digit2=keyboardKey[2],keyboardKey.Digit3=keyboardKey[3],keyboardKey.Digit4=keyboardKey[4],keyboardKey.Digit5=keyboardKey[5],keyboardKey.Digit6=keyboardKey[6],keyboardKey.Digit7=keyboardKey[7],keyboardKey.Digit8=keyboardKey[8],keyboardKey.Digit9=keyboardKey[9],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$l:()=>passFormFieldDataAttributes,Od:()=>passFormFieldContainerDataAttributes,R_:()=>passMenuDataAttributes,cP:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,wP:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/common/utils/throttle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>throttle});const throttle=(fn,delay)=>{let timeout,wait=!1,cancelled=!1;return[(...args)=>{if(cancelled)return;if(wait)return;const val=fn(...args);return wait=!0,timeout=window.setTimeout((()=>{wait=!1}),delay),val},()=>{cancelled=!0,clearTimeout(timeout)}]}}}]);