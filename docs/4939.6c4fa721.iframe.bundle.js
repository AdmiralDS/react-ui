"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4939],{"./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMinusCircleOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgMinusCircleOutline=function SvgMinusCircleOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M7.65 11.35a.65.65 0 1 0 0 1.3h8.7a.65.65 0 1 0 0-1.3z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m-7.7 9a7.7 7.7 0 1 1 15.4 0 7.7 7.7 0 0 1-15.4 0",clipRule:"evenodd"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M5.226 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.37 5.55-6.41a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.9c-.28.31-.76.31-1.04 0L5.396 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M9.996 16.211c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.494-3.146-3.49-3.018a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.98 3.458c.31.28.31.76 0 1.04l-3.984 3.586c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/DropMenu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DropMenu});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/keyboardKey.js"),_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/OpenStatusButton.tsx"),_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownContainer/index.tsx"),_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/index.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledMenu=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu__WEBPACK_IMPORTED_MODULE_3__.W).withConfig({displayName:"DropMenu__StyledMenu",componentId:"sc-19qa2e-0"})(["width:",";"],(({$width})=>$width||"auto")),DropMenuContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_DropdownContainer__WEBPACK_IMPORTED_MODULE_4__.a).withConfig({displayName:"DropMenu__DropMenuContainer",componentId:"sc-19qa2e-1"})(["",""],(p=>p.$dropContainerCssMixin||"")),DropMenu=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({dimension="m",menuWidth,disabled=!1,loading=!1,alignSelf="flex-end",onClose,onOpen,items,selected,active,onSelectItem,onActivateItem,onChange,onClick,onKeyDown,alignMenuRef,targetElement,renderContentProp,menuMaxHeight,dropContainerCssMixin,dropContainerClassName,dropContainerStyle,multiSelection=!1,disableSelectedOptionHighlight=!1,isVisible,onVisibilityChange=()=>{},onClickOutside,renderTopPanel,renderBottomPanel,onForwardCycleApprove,onBackwardCycleApprove,...props},ref)=>{const[isMenuOpenState,setIsMenuOpenState]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),btnRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),isMenuOpen=isVisible??isMenuOpenState,setIsMenuOpen=newMenuOpenState=>{setIsMenuOpenState(newMenuOpenState),onVisibilityChange(newMenuOpenState)},closeMenu=()=>{setIsMenuOpen(!1),onClose?.(),btnRef.current?.focus()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[renderContentProp({disabled,buttonRef:btnRef,handleKeyDown:e=>{const code=_common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.getCode(e);switch(onKeyDown?.(e),code){case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Escape:isMenuOpen&&closeMenu();break;case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r.Enter:case _common_keyboardKey__WEBPACK_IMPORTED_MODULE_5__.r[" "]:isMenuOpen||(e.stopPropagation(),setIsMenuOpen(!0),onOpen?.(),e.preventDefault())}},handleClick:e=>{isMenuOpen?onClose?.():onOpen?.(),setIsMenuOpen(!isMenuOpen),onClick?.(e)},statusIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_OpenStatusButton__WEBPACK_IMPORTED_MODULE_6__.$,{$isOpen:isMenuOpen,"aria-hidden":!0}),menuState:isMenuOpen}),isMenuOpen&&!loading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DropMenuContainer,{ref,role:"listbox",alignSelf,targetElement:targetElement||alignMenuRef?.current||btnRef.current,onClickOutside:e=>{e.target&&btnRef.current?.contains(e.target)||(onClickOutside?onClickOutside(e):(setIsMenuOpen(!1),onClose?.()))},$dropContainerCssMixin:dropContainerCssMixin,className:dropContainerClassName,style:dropContainerStyle,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledMenu,{maxHeight:menuMaxHeight,$width:menuWidth,model:items,selected,onSelectItem:id=>{onChange?.(id),onSelectItem?.(id),void 0!==isVisible||multiSelection||disableSelectedOptionHighlight||closeMenu()},dimension,active,onActivateItem,multiSelection,disableSelectedOptionHighlight,renderTopPanel,renderBottomPanel,onForwardCycleApprove,onBackwardCycleApprove})})]})}));DropMenu.displayName="DropMenu";try{DropMenu.displayName="DropMenu",DropMenu.__docgenInfo={description:"",displayName:"DropMenu",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Опции выпадающего списка",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"@deprecated use onSelectItem instead\nКолбек на изменение выбранной опции",name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:"@deprecated use isVisible and onVisibilityChange instead\nКолбек на открытие меню",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"@deprecated use isVisible and onVisibilityChange instead\nКолбек на закрытие меню",name:"onClose",required:!1,type:{name:"(() => void)"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},alignMenuRef:{defaultValue:null,description:"Компонент, относительно которого необходимо выравнивать выпадающее меню",name:"alignMenuRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!1,type:{name:"Element"}},alignSelf:{defaultValue:{value:"flex-end"},description:"Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},renderContentProp:{defaultValue:null,description:"Компонент, для которого необходимо Menu",name:"renderContentProp",required:!0,type:{name:"(options: RenderContentProps) => ReactNode"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:{value:"() => undefined"},description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},disableSelectedOptionHighlight:{defaultValue:{value:"false"},description:"Возможность отключить подсветку выбранной опции\n(например, при множественном выборе, когда у каждой опции есть Checkbox",name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},multiSelection:{defaultValue:{value:"false"},description:"Возможность множественного выбора (опции с Checkbox)\n@deprecated use disableSelectedOptionHighlight instead",name:"multiSelection",required:!1,type:{name:"boolean"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropMenu/index.tsx#DropMenu"]={docgenInfo:DropMenu.__docgenInfo,name:"DropMenu",path:"src/components/DropMenu/index.tsx#DropMenu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DropdownContainer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>DropdownContainer,a:()=>StyledDropdownContainer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/hooks/useClickOutside.ts"),_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/utils/parseShadowFromTheme.ts"),_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/PositionInPortal.tsx"),_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/hooks/useInterval.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownProvider.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/themes/borderRadius.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"DropdownContainer__Container",componentId:"sc-1eulg01-0"})(["pointer-events:initial;margin:8px 0;flex:0 0 auto;",";max-width:calc(100vw - 32px);opacity:0;transition-delay:200ms;transition-property:opacity;&:focus-visible{border:2px solid blue;}",""],(p=>p.$alignSelf?`align-self: ${p.$alignSelf};`:""),(p=>p.$dropContainerCssMixin)),FakeTarget=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"DropdownContainer__FakeTarget",componentId:"sc-1eulg01-1"})(["pointer-events:none;height:100%;flex:0 0 auto;"]),Portal=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__.l).withConfig({displayName:"DropdownContainer__Portal",componentId:"sc-1eulg01-2"})(["display:flex;flex-direction:",";flex-wrap:nowrap;"],(p=>p.$reverse?"column-reverse":"column")),DropdownContainer=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({targetRef,targetElement,onClickOutside=()=>null,className="",alignSelf,dropContainerCssMixin,...props},ref)=>{const containerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[displayUpward,setDisplayUpward]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),targetNode=targetElement??targetRef?.current,{addDropdown,removeDropdown,dropdowns}=(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.BK)(containerRef),{rootRef}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.rO);(0,_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__.L)([containerRef],(e=>{(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.TT)(e,dropdowns)&&onClickOutside(e)})),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{containerRef.current!==document.activeElement&&containerRef?.current?.focus()}),[]);const checkDropdownPosition=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const node=containerRef.current;if(node&&targetNode){const rect=node.getBoundingClientRect(),targetRect=targetNode.getBoundingClientRect(),viewportHeight=window.innerHeight,viewportWidth=window.innerWidth;if(viewportHeight-rect.bottom<0&&targetRect.top>viewportHeight-targetRect.bottom?displayUpward||setDisplayUpward(!0):(targetRect.bottom+(targetRect.top-rect.top)<viewportHeight-8||targetRect.top<viewportHeight-targetRect.bottom)&&displayUpward&&setDisplayUpward(!1),alignSelf&&"auto"!==alignSelf)return;const rectWidth=rect.right-rect.left,enoughWidthOnTheRight=viewportWidth-targetRect.left>=rectWidth,enoughWidthOnTheLeft=targetRect.right-16>=rectWidth,containerWiderTarget=rectWidth>targetRect.width;if(enoughWidthOnTheLeft||enoughWidthOnTheRight)node.style.transform="translateX(0)",enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-end":containerWiderTarget&&!enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-start":containerWiderTarget&&!enoughWidthOnTheRight&&enoughWidthOnTheLeft&&(node.style.alignSelf="flex-end");else{node.style.alignSelf="center";const offset=(viewportWidth-rect.width)/2-(targetRect.left-(rectWidth-targetRect.width)/2);node.style.transform=`translateX(${offset}px)`}}}),[displayUpward,targetRef,targetElement]);return(0,_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__.$)(checkDropdownPosition,100),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{containerRef.current&&(containerRef.current.style.opacity="1")}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>(addDropdown?.(containerRef),()=>{removeDropdown?.(containerRef)})),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Portal,{targetElement:targetNode,$reverse:displayUpward,rootRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FakeTarget,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__.d)(ref,containerRef),...props,className:className+" dropdown-container",$alignSelf:alignSelf,$dropContainerCssMixin:dropContainerCssMixin})]})})}));DropdownContainer.displayName="DropdownContainer";const StyledDropdownContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(DropdownContainer).withConfig({displayName:"DropdownContainer__StyledDropdownContainer",componentId:"sc-1eulg01-3"})(["box-shadow:var(--admiral-box-shadow-Shadow08,",");border-radius:var(--admiral-border-radius-Medium,",");overflow:hidden;width:max-content;"],(p=>(0,_src_components_common_utils_parseShadowFromTheme__WEBPACK_IMPORTED_MODULE_8__.C)(p.theme.shadow["Shadow 08"])),(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_9__.VM)(p.theme.shape)));StyledDropdownContainer.displayName="StyledDropdownContainer";try{DropdownContainer.displayName="DropdownContainer",DropdownContainer.__docgenInfo={description:"",displayName:"DropdownContainer",props:{targetRef:{defaultValue:null,description:"@deprecated Будет удалено в 8.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef на элемент, относительно которого позиционируется выпадающее меню",name:"targetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню\nВ 8.x.x версии данный параметр станет обязательным, заменив собой targetRef",name:"targetElement",required:!1,type:{name:"Element | null"}},onClickOutside:{defaultValue:{value:"() => null"},description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/index.tsx#DropdownContainer"]={docgenInfo:DropdownContainer.__docgenInfo,name:"DropdownContainer",path:"src/components/DropdownContainer/index.tsx#DropdownContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/OpenStatusButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>OpenStatusButton});var _admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg");const OpenStatusButton=(0,__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay)(_admiral_ds_icons_build_system_ChevronDownOutline_svg__WEBPACK_IMPORTED_MODULE_0__.h).withConfig({displayName:"OpenStatusButton",componentId:"sc-126g2c3-0"})(["transition:transform 0.3s ease-in-out;transform:rotate(","deg);& *[fill^='#']{fill:",";}&:hover *[fill^='#']{fill:",";}&[data-disabled]{pointer-events:none;*[fill^='#']{fill:var(--admiral-color-Neutral_Neutral30,",");}}"],(p=>p.$isOpen?180:0),(({appearance,theme})=>"white"===appearance?`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`),(p=>"white"===p.appearance?"":`var(--admiral-color-Primary_Primary70, ${p.theme.color["Primary/Primary 70"]})`),(p=>p.theme.color["Neutral/Neutral 30"]))},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PositionedPortalContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"PositionInPortal__PositionedPortalContainer",componentId:"sc-e6ntdu-0"})(["pointer-events:none;position:fixed;overflow:visible;z-index:var(--admiral-z-index-dropdown,",");"],(({theme})=>theme.zIndex.dropdown)),PositionInPortal=({targetRef,targetElement,rootRef,fullContainerWidth,...props})=>{const positionedPortalContainerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const node=positionedPortalContainerRef.current,targetNode=targetElement??targetRef?.current;if(node&&targetNode){const observer=(0,_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__.A)(targetNode,(rect=>{if(rect){const{x,y,height,width}=rect,{style}=node;style.top=`${y}px`,style.left=fullContainerWidth?"0px":`${x}px`,style.height=`${height}px`,style.width=fullContainerWidth?"100%":`${width}px`}}));return observer.observe(),()=>{observer.unobserve()}}}),[targetRef,targetElement,fullContainerWidth]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PositionedPortalContainer,{ref:positionedPortalContainerRef,...props}),rootRef?.current||document.body)};try{PositionedPortalContainer.displayName="PositionedPortalContainer",PositionedPortalContainer.__docgenInfo={description:"",displayName:"PositionedPortalContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionedPortalContainer"]={docgenInfo:PositionedPortalContainer.__docgenInfo,name:"PositionedPortalContainer",path:"src/components/PositionInPortal.tsx#PositionedPortalContainer"})}catch(__react_docgen_typescript_loader_error){}try{PositionInPortal.displayName="PositionInPortal",PositionInPortal.__docgenInfo={description:"При фиксированном позиционировании (как у PositionedPortalContainer) элемент позиционируется\nвсегда относительно исходного содержащего блока (окна браузера).\nИсключение, когда один из его предков имеет свойство transform, perspective, или filter,\nустановленное на что-то иное, кроме none, в этом случае этот предок ведет\nсебя как содержащий блок. Тогда top, right, bottom и left элемента рассчитываются относительно этого содержащего блока.\nЕсли у такого предка кроме transform задано свойство overflow: hidden, то элемент будет обрезаться по его краям.\n\nВ связи с вышеописанным в качестве контейнера для портала рекомендуется выбирать элемент, у предков которого нет свойств\ntransform, perspective, или filter отличных от none. Также рекомендуется размещать контейнер портала в самом низу dom-дерева,\nчтобы избежать возможных конфликтов стилей.",displayName:"PositionInPortal",props:{targetRef:{defaultValue:null,description:"@deprecated Будет удалено в 8.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef на элемент, относительно которого позиционируется портал",name:"targetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал\nВ 8.x.x версии данный параметр станет обязательным, заменив собой targetRef",name:"targetElement",required:!1,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/hooks/useInterval.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>useInterval});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInterval(callback,delay){const intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("number"==typeof delay)return intervalRef.current=window.setInterval((()=>callbackRef.current()),delay),()=>window.clearInterval(intervalRef.current||0)}),[delay]),intervalRef}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});const props=["bottom","height","left","right","top","width"],rectChanged=(a={},b={})=>props.some((prop=>a[prop]!==b[prop]));function observeRect(node,cb){const state={};return{observe(){state.rafId&&cancelAnimationFrame(state.rafId);const run=()=>{if(state.isObserving){const{bottom,height,left,right,top,width,x,y}=node.getBoundingClientRect(),newRect={bottom,height,left,right,top,width,x:x||left,y:y||top};rectChanged(newRect,state.rect)&&(state.rect=newRect,cb(state.rect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});const parseShadow=token=>{let result=token;return result=result.replace("box-shadow: ",""),result=result.replace(";",""),result}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function refSetter(...refs){return ref=>{refs.forEach((someRef=>{someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)}))}}__webpack_require__.d(__webpack_exports__,{d:()=>refSetter})},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});const ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);