"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2580],{"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bV:()=>ExtraTextContainer,D0:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.Il["Body/Body 2 Long"],(p=>p.error?`var(--admiral-color-Error_Error60Main, ${p.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,inputRef,...props})=>{const[currentCount,setCurrentCount]=react.useState(0);return react.useEffect((()=>{function oninput(){const{value}=this;setCurrentCount(value.length)}const node=inputRef.current;if(node)return node.addEventListener("input",oninput),oninput.call(node),()=>{node.removeEventListener("input",oninput)}}),[inputRef]),currentCount>.8*maxLength?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<.8*maxLength,children:[currentCount," / ",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const inlineMixin=(0,styled_components_browser_esm.AH)(["flex-direction:row;justify-content:space-between;align-items:center;> *{flex:1 1 auto;}","{margin:0 8px 0 0;}"],Label.J),Field_Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-0"})(["display:flex;overflow:hidden;",""],(props=>props.$displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-1"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.vy),LabelContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-2"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.AH)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.Ay)(Label.J).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-3"})(["",";"],(p=>p.$skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.AH)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-4"})(["display:flex;justify-content:space-between;",";"],(p=>p.$skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-5"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:var(--admiral-color-Neutral_Neutral50,",");[data-disabled] &{color:var(--admiral-color-Neutral_Neutral30,",");}[data-status='error'] &{color:var(--admiral-color-Error_Error60Main,",");}[data-status='success'] &{color:var(--admiral-color-Success_Success50Main,",");}"],typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Error/Error 60 Main"]),(p=>p.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.Ay)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-6"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id=(0,uid.L)(),skeleton=!1,...restFieldProps}=props,fieldContainerProps={className,style,...restFieldProps},labelProps={htmlFor:id,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,$displayInline:displayInline,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.d)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{$skeleton:skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)("div",{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{$skeleton:skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:var(--admiral-color-Neutral_Neutral50,",");[data-disabled] &{color:var(--admiral-color-Neutral_Neutral30,",");}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:var(--admiral-color-Error_Error60Main,",");}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{L:()=>uid})},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/TextField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TextField});var _src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/refSetter.ts"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_input__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/input/TextArea/index.tsx"),_src_components_Field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/uid.ts"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),{className,maxLength,displayInline,status,required,extraText,label,id=(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__.L)(),disabled,displayCharacterCounter,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,maxLength,inputRef,displayCharacterCounter,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.$e)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G)(restProps,fieldContainerProps);const inputProps={ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__.d)(ref,inputRef),id,"aria-required":required,status,disabled,maxLength,skeleton,...restProps};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_5__.D0,{...fieldContainerProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_input__WEBPACK_IMPORTED_MODULE_6__.f,{...inputProps})})}));TextField.displayName="TextField";try{TextField.displayName="TextField",TextField.__docgenInfo={description:"",displayName:"TextField",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:null,description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TextField/index.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/form/TextField/index.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TextArea/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextArea});var _src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/typography.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/InputIconButton.tsx"),_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/input/Container.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const iconSizeValue=props=>{switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},verticalPaddingValue=props=>{switch(props.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},horizontalPaddingValue=props=>{switch(props.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["padding-right:","px;"],(props=>horizontalPaddingValue(props)+(props.$iconCount?iconSizeValue(props)+8:0))),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:transparent;"],(p=>p.theme.color["Neutral/Neutral 10"])),BorderedDiv=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"TextArea__BorderedDiv",componentId:"sc-1kfofel-0"})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:0;pointer-events:none;overflow:hidden;min-width:0;background:none;border:1px solid var(--admiral-color-Neutral_Neutral40,",");border-radius:inherit;[data-status='error'] &&&{border:1px solid var(--admiral-color-Error_Error60Main,",");}[data-status='success'] &&&{border:1px solid var(--admiral-color-Success_Success50Main,",");}[data-read-only] &&&{border-color:transparent;}"],(p=>p.theme.color["Neutral/Neutral 40"]),(p=>p.theme.color["Error/Error 60 Main"]),(p=>p.theme.color["Success/Success 50 Main"])),colorsBorderAndBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["background-color:var(--admiral-color-Neutral_Neutral00,",");&:focus + ","{border:2px solid var(--admiral-color-Primary_Primary60Main,",");}&&&:disabled + ",",[data-read-only] &&& + ","{border-color:transparent;}&:hover:not(:focus) + ","{border-color:",";}&:user-invalid + ",",&:user-invalid:hover + ","{border:1px solid var(--admiral-color-Error_Error60Main,",");}[data-status='error'] &&&:hover:not(:disabled) + ",",&:user-invalid:hover:not(:disabled) + ","{border:1px solid var(--admiral-color-Error_Error70,",");}[data-status='success'] &&&:hover:not(:disabled) + ","{border:1px solid var(--admiral-color-Success_Success60,",");}[data-status='error'] &&&:focus:not(:disabled) + ",",&:user-invalid:focus:not(:disabled) + ","{border:2px solid var(--admiral-color-Error_Error60Main,",");}[data-status='success'] &&&:focus:not(:disabled) + ","{border:2px solid var(--admiral-color-Success_Success50Main,",");}[data-read-only] &&&,&&&:disabled{","}[data-read-only] &&&:hover + ",",[data-read-only] &&&:focus + ","{border-color:transparent;}"],(p=>p.theme.color["Neutral/Neutral 00"]),BorderedDiv,(p=>p.theme.color["Primary/Primary 60 Main"]),BorderedDiv,BorderedDiv,BorderedDiv,(p=>p.disabled?"transparent":`var(--admiral-color-Neutral_Neutral60, ${p.theme.color["Neutral/Neutral 60"]})`),BorderedDiv,BorderedDiv,(p=>p.theme.color["Error/Error 60 Main"]),BorderedDiv,BorderedDiv,(p=>p.theme.color["Error/Error 70"]),BorderedDiv,(p=>p.theme.color["Success/Success 60"]),BorderedDiv,BorderedDiv,(p=>p.theme.color["Error/Error 60 Main"]),BorderedDiv,(p=>p.theme.color["Success/Success 50 Main"]),disabledColors,BorderedDiv,BorderedDiv),ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["::-ms-clear,::-ms-reveal{display:none;}"]),textBlockStyleMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(["outline:none;appearance:none;border-radius:inherit;border:none;box-sizing:border-box;margin:0;padding:","px ","px;overflow-wrap:break-word;"," "," ",""],verticalPaddingValue,horizontalPaddingValue,(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]),colorsBorderAndBackground,extraPadding),HiddenSpanContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"TextArea__HiddenSpanContainer",componentId:"sc-1kfofel-1"})(["overflow-x:hidden;overflow-y:auto;",""],textBlockStyleMixin),Text=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.textarea.withConfig({displayName:"TextArea__Text",componentId:"sc-1kfofel-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;resize:none;flex:1 1 auto;min-width:10px;background:transparent;overflow-y:auto;overflow-x:hidden;color:var(--admiral-color-Neutral_Neutral90,",");"," &::placeholder{color:var(--admiral-color-Neutral_Neutral50,",");}&:disabled::placeholder,&:disabled{color:var(--admiral-color-Neutral_Neutral30,",");}[data-disable-copying] &{user-select:none;pointer-events:none;}"," ",""],(p=>p.theme.color["Neutral/Neutral 90"]),(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]),(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),textBlockStyleMixin,ieFixes),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"TextArea__IconPanel",componentId:"sc-1kfofel-3"})(["position:absolute;top:0;bottom:0;right:0;display:flex;flex-direction:column;align-items:center;padding-right:","px;padding-top:","px;& > *{display:block;width:","px;}"],horizontalPaddingValue,verticalPaddingValue,iconSizeValue);function defaultHandleInput(newInputData){return newInputData}const stopEvent=e=>e.preventDefault(),textAreaHeight=(rows,$dimension)=>rows*("s"===$dimension?20:24)+2*verticalPaddingValue({$dimension}),StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay)(_Container__WEBPACK_IMPORTED_MODULE_5__.mc).withConfig({displayName:"TextArea__StyledContainer",componentId:"sc-1kfofel-4"})(["min-height:","px;"," ",""],(p=>textAreaHeight(p.$rows,p.$dimension)),(p=>p.$maxRows?`max-height: ${textAreaHeight(p.$maxRows,p.$dimension)}px;`:""),(p=>p.$autoHeight?"":`height: ${textAreaHeight(p.$rows,p.$dimension)}px;`));function toHtmlString(value){return String(value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}const TextArea=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((({rows=3,maxRows,value,displayClearIcon,status,handleInput=defaultHandleInput,containerRef,icons,children,className,autoHeight,skeleton=!1,dimension="m",disableCopying,...props},ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),hiddenDivRef=react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),iconArray=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(icons);!props.readOnly&&displayClearIcon&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_6__.G,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_0__.h,onClick:()=>{inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.B)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon"));const iconCount=iconArray.length,inputData=null!=value?handleInput({value:String(value)}):{};return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect((()=>{function oninput(){const{value,selectionStart,selectionEnd}=this,inputData=handleInput({value,selectionStart,selectionEnd});(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.B)(this,inputData)}if(inputRef.current){const node=inputRef.current;node.addEventListener("input",oninput);const{value,selectionStart,selectionEnd}=node,inputData=handleInput({value,selectionStart,selectionEnd});return(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_7__.B)(node,inputData),()=>{node.removeEventListener("input",oninput)}}}),[handleInput]),react__WEBPACK_IMPORTED_MODULE_1__.useEffect((()=>{function oninput(){const{value}=this,hiddenDiv=hiddenDivRef.current;hiddenDiv&&(hiddenDiv.innerHTML=toHtmlString(value),this.style.overflowY=hiddenDiv.clientHeight<hiddenDiv.scrollHeight?"":"hidden")}if(autoHeight&&inputRef.current&&hiddenDivRef.current){const node=inputRef.current;return hiddenDivRef.current.innerHTML=toHtmlString(node.value),node.addEventListener("input",oninput),node.style.overflowY=hiddenDivRef.current.clientHeight<hiddenDivRef.current.scrollHeight?"":"hidden",()=>{node.removeEventListener("input",oninput),node.style.overflowY=""}}}),[autoHeight,inputData.value,props.defaultValue]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledContainer,{className,ref:containerRef,"data-read-only":!!props.readOnly||void 0,"data-status":status,$skeleton:skeleton,"data-disable-copying":!!disableCopying||void 0,$autoHeight:!!autoHeight,$rows:rows,$maxRows:maxRows,$dimension:dimension,...disableCopying&&{onMouseDown:stopEvent},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HiddenSpanContainer,{ref:hiddenDivRef,$dimension:dimension,disabled:props.disabled,$iconCount:iconCount}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_8__.d)(ref,inputRef),...props,$dimension:dimension,$iconCount:iconCount,$autoHeight:autoHeight,value:inputData.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BorderedDiv,{}),iconCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconPanel,{disabled:props.disabled,$dimension:dimension,children:iconArray}),children]})}));TextArea.displayName="TextArea";try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"3"},description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:{value:"m"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/index.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/input/TextArea/index.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}}}]);