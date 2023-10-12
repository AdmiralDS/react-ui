"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1818],{"./src/components/DropdownContainer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DropdownContainer,I:()=>StyledDropdownContainer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/hooks/useClickOutside.ts"),_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/PositionInPortal.tsx"),_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/hooks/useInterval.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownProvider.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/themes/borderRadius.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"DropdownContainer__Container",componentId:"sc-1eulg01-0"})(["pointer-events:initial;margin:8px 0;flex:0 0 auto;",";max-width:calc(100vw - 32px);opacity:0;transition-delay:200ms;transition-property:opacity;&:focus-visible{border:2px solid blue;}",""],(p=>p.$alignSelf?`align-self: ${p.$alignSelf};`:""),(p=>p.$dropContainerCssMixin)),FakeTarget=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"DropdownContainer__FakeTarget",componentId:"sc-1eulg01-1"})(["pointer-events:none;height:100%;flex:0 0 auto;"]),Portal=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__.k).withConfig({displayName:"DropdownContainer__Portal",componentId:"sc-1eulg01-2"})(["display:flex;flex-direction:",";flex-wrap:nowrap;"],(p=>p.$reverse?"column-reverse":"column")),DropdownContainer=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({targetRef,targetElement,onClickOutside=()=>null,className="",alignSelf,dropContainerCssMixin,...props},ref)=>{const containerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[displayUpward,setDisplayUpward]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),targetNode=targetElement??targetRef?.current,{addDropdown,removeDropdown,dropdowns}=(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.xN)(containerRef),{rootRef}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.Dl);(0,_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__.O)([containerRef],(e=>{(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.DD)(e,dropdowns)&&onClickOutside(e)})),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{containerRef.current!==document.activeElement&&containerRef?.current?.focus()}),[]);const checkDropdownPosition=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const node=containerRef.current;if(node&&targetNode){const rect=node.getBoundingClientRect(),targetRect=targetNode.getBoundingClientRect(),viewportHeight=window.innerHeight,viewportWidth=window.innerWidth;if(viewportHeight-rect.bottom<0&&targetRect.top>viewportHeight-targetRect.bottom?displayUpward||setDisplayUpward(!0):(targetRect.bottom+(targetRect.top-rect.top)<viewportHeight-8||targetRect.top<viewportHeight-targetRect.bottom)&&displayUpward&&setDisplayUpward(!1),alignSelf&&"auto"!==alignSelf)return;const rectWidth=rect.right-rect.left,enoughWidthOnTheRight=viewportWidth-targetRect.left>=rectWidth,enoughWidthOnTheLeft=targetRect.right-16>=rectWidth,containerWiderTarget=rectWidth>targetRect.width;if(enoughWidthOnTheLeft||enoughWidthOnTheRight)node.style.transform="translateX(0)",enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-end":containerWiderTarget&&!enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-start":containerWiderTarget&&!enoughWidthOnTheRight&&enoughWidthOnTheLeft&&(node.style.alignSelf="flex-end");else{node.style.alignSelf="center";const offset=(viewportWidth-rect.width)/2-(targetRect.left-(rectWidth-targetRect.width)/2);node.style.transform=`translateX(${offset}px)`}}}),[displayUpward,targetRef,targetElement]);return(0,_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__.Y)(checkDropdownPosition,100),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{containerRef.current&&(containerRef.current.style.opacity="1")}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>(addDropdown?.(containerRef),()=>{removeDropdown?.(containerRef)})),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Portal,{targetElement:targetNode,$reverse:displayUpward,rootRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FakeTarget,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__.O)(ref,containerRef),...props,className:className+" dropdown-container",$alignSelf:alignSelf,$dropContainerCssMixin:dropContainerCssMixin})]})})}));DropdownContainer.displayName="DropdownContainer";const StyledDropdownContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(DropdownContainer).withConfig({displayName:"DropdownContainer__StyledDropdownContainer",componentId:"sc-1eulg01-3"})([""," border-radius:",";overflow:hidden;width:max-content;"],(p=>p.theme.shadow["Shadow 08"]),(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_8__.c8)(p.theme.shape)));StyledDropdownContainer.displayName="StyledDropdownContainer";try{DropdownContainer.displayName="DropdownContainer",DropdownContainer.__docgenInfo={description:"",displayName:"DropdownContainer",props:{targetRef:{defaultValue:null,description:"@deprecated Будет удалено в 8.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef на элемент, относительно которого позиционируется выпадающее меню",name:"targetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню\nВ 8.x.x версии данный параметр станет обязательным, заменив собой targetRef",name:"targetElement",required:!1,type:{name:"Element | null"}},onClickOutside:{defaultValue:{value:"() => null"},description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/index.tsx#DropdownContainer"]={docgenInfo:DropdownContainer.__docgenInfo,name:"DropdownContainer",path:"src/components/DropdownContainer/index.tsx#DropdownContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputIconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>InputIconButton});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AnyIcon({icon,...props}){const Icon=icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{...props})}AnyIcon.displayName="AnyIcon";const InputIconButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(AnyIcon).withConfig({displayName:"InputIconButton",componentId:"sc-1brcj1d-0"})(["& *[fill^='#']{fill:",";}[disabled] &&&{pointer-events:none;& *[fill^='#']{fill:",";}}&:hover{cursor:pointer;}&:hover *[fill^='#']{fill:",";}"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Primary/Primary 70"]));try{AnyIcon.displayName="AnyIcon",AnyIcon.__docgenInfo={description:"",displayName:"AnyIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#AnyIcon"]={docgenInfo:AnyIcon.__docgenInfo,name:"AnyIcon",path:"src/components/InputIconButton.tsx#AnyIcon"})}catch(__react_docgen_typescript_loader_error){}try{InputIconButton.displayName="InputIconButton",InputIconButton.__docgenInfo={description:"",displayName:"InputIconButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputIconButton.tsx#InputIconButton"]={docgenInfo:InputIconButton.__docgenInfo,name:"InputIconButton",path:"src/components/InputIconButton.tsx#InputIconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/dom/changeInputData.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isInputDataDifferent(data1,data2){return data1.value!==data2.value||data1.selectionStart!==data2.selectionStart||data1.selectionEnd!==data2.selectionEnd}function changeInputData(input,toChangeData){const{value=input.value,selectionStart,selectionEnd}=toChangeData;if(isInputDataDifferent(input,{value,selectionStart,selectionEnd})){const nativeInputValueSetter=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input),"value")?.set;let event;nativeInputValueSetter?.call(input,value),"number"==typeof selectionStart&&"number"==typeof selectionEnd&&input.setSelectionRange(selectionStart,selectionEnd),"function"==typeof Event?event=new Event("input",{bubbles:!0}):(event=document.createEvent("Event"),event.initEvent("input",!0,!0)),input.dispatchEvent(event)}}__webpack_require__.d(__webpack_exports__,{F:()=>isInputDataDifferent,j:()=>changeInputData})},"./src/components/common/hooks/useInterval.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useInterval});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInterval(callback,delay){const intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("number"==typeof delay)return intervalRef.current=window.setInterval((()=>callbackRef.current()),delay),()=>window.clearInterval(intervalRef.current||0)}),[delay]),intervalRef}},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>checkOverflow});const checkOverflow=textContainer=>!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)},"./src/components/common/utils/splice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function splice(oldString,start,delCount,newSubStr){return oldString.slice(0,start)+newSubStr+oldString.slice(start+Math.abs(delCount))}__webpack_require__.d(__webpack_exports__,{d:()=>splice})},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W2:()=>Container,c8:()=>skeletonMixin,pT:()=>containerHeights,xj:()=>HeightLimitedContainer});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/animation.tsx");const containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["height:",";"],(({$dimension})=>{switch($dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}})),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)([""," & > *{visibility:hidden;}"],_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__.x),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div.withConfig({displayName:"Container",componentId:"sc-1p357h8-0"})(["position:relative;display:flex;align-items:stretch;border:none;border-radius:",";pointer-events:",";",";"],(p=>p.$skeleton?0:(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__.c8)(p.theme.shape)),(p=>p.$skeleton?"none":"all"),(({$skeleton})=>$skeleton&&skeletonMixin)),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(Container).withConfig({displayName:"Container__HeightLimitedContainer",componentId:"sc-1p357h8-1"})(["",";"],containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TextInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N9:()=>BorderedDivStyles,oi:()=>TextInput,sV:()=>InputBorderedDiv});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/input/Container.tsx"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Typography/typography.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),_admiral_ds_icons_build_service_EyeCloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg"),_admiral_ds_icons_build_service_EyeOutline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/InputIconButton.tsx"),_src_components_Spinner__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Spinner/index.tsx"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/Tooltip/index.tsx"),_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/utils/checkOverflow.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const iconSizeValue=props=>{switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},horizontalPaddingValue=props=>{switch(props.$dimension){case"xl":default:return 16;case"s":return 12}},extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["padding-right:","px;"],(props=>horizontalPaddingValue(props)+(iconSizeValue(props)+8)*(props.$iconCount??0))),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["background-color:",";border-color:transparent;"],(props=>props.theme.color["Neutral/Neutral 10"]));const InputBorderedDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div.withConfig({displayName:"TextInput__InputBorderedDiv",componentId:"sc-1e79s1s-0"})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:0;pointer-events:none;overflow:hidden;min-width:0;background:none;border-radius:inherit;border:1px solid ",";",";"],(p=>p.theme.color[function getBorderColor(status){if(!status)return"Neutral/Neutral 40";switch(status){case"error":return"Error/Error 60 Main";case"success":return"Success/Success 50 Main"}}(p.$status)]),(p=>p.disabled&&"border-color: transparent;"));const BorderedDivStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["&:focus-within:not(:disabled) > ","{","}&:hover:not(:focus-within) > ","{border-color:",";}"],InputBorderedDiv,(p=>p.disabled||p.readOnly?"border-color: transparent":`border: 2px solid ${p.theme.color[function getFocusBorderColor(status){if(!status)return"Primary/Primary 60 Main";switch(status){case"error":return"Error/Error 60 Main";case"success":return"Success/Success 50 Main"}}(p.$status)]}`),InputBorderedDiv,(props=>props.disabled||props.readOnly?"transparent":props.theme.color[function getHoverBorderColor(status){if(!status)return"Neutral/Neutral 60";switch(status){case"error":return"Error/Error 70";case"success":return"Success/Success 60"}}(props.$status)])),ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.iv)(["::-ms-clear,::-ms-reveal{display:none;}"]),Input=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.input.withConfig({displayName:"TextInput__Input",componentId:"sc-1e79s1s-1"})(["outline:none;appearance:none;border-radius:inherit;box-sizing:border-box;flex:1 1 auto;min-width:10px;border:none;text-overflow:ellipsis;padding:0 ","px;"," color:",";&&&:disabled{color:",";}&::placeholder{color:",";}&:disabled::placeholder{color:",";}[data-disable-copying] &{user-select:none;pointer-events:none;}background-color:",";&&&:invalid + ","{border:1px solid ",";}&&&:invalid:hover:not(:disabled) + ","{border:1px solid ",";}&&&:invalid:focus:not(:disabled) + ","{border:2px solid ",";}[data-read-only] &&&,&&&:disabled{","}"," ",""],horizontalPaddingValue,(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__.c["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__.c["Body/Body 1 Long"]),(props=>props.theme.color["Neutral/Neutral 90"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Neutral/Neutral 00"]),InputBorderedDiv,(props=>props.theme.color["Error/Error 60 Main"]),InputBorderedDiv,(props=>props.theme.color["Error/Error 70"]),InputBorderedDiv,(props=>props.theme.color["Error/Error 60 Main"]),disabledColors,extraPadding,ieFixes),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div.withConfig({displayName:"TextInput__IconPanel",componentId:"sc-1e79s1s-2"})(["position:absolute;top:0;bottom:0;right:0;display:flex;align-items:center;padding-right:","px;& > svg{border-radius:",";display:block;width:","px;&:focus{outline:none;}&:focus-visible{outline-offset:2px;outline:"," solid 2px;}}& > *:not(:first-child){margin-left:8px;}"],horizontalPaddingValue,(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__.c8)(p.theme.shape)),iconSizeValue,(p=>p.theme.color["Primary/Primary 60 Main"])),StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP)(_src_components_input_Container__WEBPACK_IMPORTED_MODULE_8__.xj).withConfig({displayName:"TextInput__StyledContainer",componentId:"sc-1e79s1s-3"})(["",""],BorderedDivStyles);function defaultHandleInput(newInputData){return newInputData||{}}const stopEvent=e=>e.preventDefault(),TextInput=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({dimension,type,displayClearIcon,isLoading,status,handleInput=defaultHandleInput,containerRef,icons,children,className,style,placeholder,skeleton=!1,showTooltip=!0,...props},ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),wrapperRef=containerRef||react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),iconArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(icons),[overflowActive,setOverflowActive]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[tooltipVisible,setTooltipVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[innerValueState,setInnerValueState]=react__WEBPACK_IMPORTED_MODULE_0__.useState(props.defaultValue??void 0),innerValue=props.value??innerValueState;react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{(0,_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__.a)(inputRef.current)?setOverflowActive(!0):setOverflowActive(!1)}),[tooltipVisible,setOverflowActive]),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{function show(){document.activeElement!==inputRef.current&&setTooltipVisible(!0)}function hide(){setTooltipVisible(!1)}const wrapper=wrapperRef.current;if(wrapper)return wrapper.addEventListener("mouseenter",show),wrapper.addEventListener("mouseleave",hide),wrapper.addEventListener("mousedown",hide),()=>{wrapper.removeEventListener("mouseenter",show),wrapper.removeEventListener("mouseleave",hide),wrapper.removeEventListener("mousedown",hide)}}),[setTooltipVisible]);const[isPasswordVisible,setPasswordVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);if(!props.readOnly&&"password"===type){const Icon=isPasswordVisible?_admiral_ds_icons_build_service_EyeOutline_svg__WEBPACK_IMPORTED_MODULE_3__.r:_admiral_ds_icons_build_service_EyeCloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.r;iconArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__.W,{icon:Icon,onClick:()=>{setPasswordVisible(!isPasswordVisible)},"aria-hidden":!0},"eye-icon"))}!props.readOnly&&displayClearIcon&&innerValue&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__.W,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__.r,onClick:()=>{inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.j)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon")),isLoading&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Spinner__WEBPACK_IMPORTED_MODULE_12__.$,{dimension:"s"===dimension?"ms":"m"},"loading-icon"));const iconCount=iconArray.length;return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{const nullHandledValue=handleInput(null);function oninput(){const{value,selectionStart,selectionEnd}=this,inputData=handleInput({value,selectionStart,selectionEnd});placeholder&&!(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.F)(nullHandledValue,inputData)?(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.j)(this,{...inputData,value:""}):(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.j)(this,inputData)}if("date"!==type&&inputRef.current){const node=inputRef.current;node.addEventListener("input",oninput);const{value,selectionStart,selectionEnd}=node,inputData=handleInput({value,selectionStart,selectionEnd});return placeholder&&!(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.F)(nullHandledValue,inputData)?(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.j)(node,{...inputData,value:""}):(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.j)(node,inputData),()=>{node.removeEventListener("input",oninput)}}}),[handleInput,placeholder]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledContainer,{className,style,$dimension:dimension,ref:wrapperRef,disabled:props.disabled,readOnly:props.readOnly,$status:status,"data-disabled":!!props.disabled||void 0,"data-read-only":!!props.readOnly||void 0,"data-status":status,$skeleton:skeleton,"data-disable-copying":!!props.disableCopying||void 0,...props.disableCopying&&{onMouseDown:stopEvent},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Input,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_13__.O)(ref,inputRef),...props,onChange:e=>{setInnerValueState(e.currentTarget.value),props.onChange?.(e)},placeholder,$dimension:dimension,$iconCount:iconCount,type:"password"===type&&isPasswordVisible?"text":type}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputBorderedDiv,{$status:status,disabled:props.disabled||props.readOnly}),iconCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconPanel,{disabled:props.disabled,$dimension:dimension,children:iconArray}),children]}),showTooltip&&tooltipVisible&&overflowActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_14__.u,{renderContent:()=>inputRef?.current?.value||"",targetElement:wrapperRef.current})]})}));TextInput.defaultProps={dimension:"m"},TextInput.displayName="TextInput";try{InputBorderedDiv.displayName="TextInput",InputBorderedDiv.__docgenInfo={description:"",displayName:"TextInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextInput/index.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/input/TextInput/index.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}}}]);