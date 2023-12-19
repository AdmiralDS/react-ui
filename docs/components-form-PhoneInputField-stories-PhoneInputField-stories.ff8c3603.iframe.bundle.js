"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9842],{"./src/components/form/PhoneInputField/stories/PhoneInputField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PhoneInputFieldExample:()=>PhoneInputFieldExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PhoneInputField_stories});var react=__webpack_require__("./node_modules/react/index.js"),PhoneInputField=__webpack_require__("./src/components/form/PhoneInputField/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PhoneInputFieldExampleTemplate=({label="Введите номер телефона",themeBorderKind,...props})=>{const cleanProps=Object.keys(props).reduce(((acc,key)=>(void 0!==props[key]&&(acc[key]=props[key]),acc)),{}),[localValue,setValue]=react.useState(props.value??"");react.useEffect((()=>{void 0!==props.value&&setValue(String(props.value))}),[props.value]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:(0,createBorderRadiusSwapper.z)(themeBorderKind),children:(0,jsx_runtime.jsx)(PhoneInputField.a,{"data-container-id":"phoneInputFieldIdOne",...cleanProps,value:localValue,defaultCountry:"RUS",onChange:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},dropContainerClassName:"dropContainerClass",label})})};PhoneInputFieldExampleTemplate.displayName="PhoneInputFieldExampleTemplate";try{PhoneInputFieldExampleTemplate.displayName="PhoneInputFieldExampleTemplate",PhoneInputFieldExampleTemplate.__docgenInfo={description:"",displayName:"PhoneInputFieldExampleTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultCountry:{defaultValue:null,description:"Код ISO A3 страны для определения префикса номера по умолчанию",name:"defaultCountry",required:!1,type:{name:"string"}},onlyCountries:{defaultValue:null,description:"Список стран для выпадающего списка. Отмечается кодом ISO A3 страны",name:"onlyCountries",required:!1,type:{name:"string[]"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Введите номер телефона"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/PhoneInputField/stories/PhoneInputFieldExample.template.tsx#PhoneInputFieldExampleTemplate"]={docgenInfo:PhoneInputFieldExampleTemplate.__docgenInfo,name:"PhoneInputFieldExampleTemplate",path:"src/components/form/PhoneInputField/stories/PhoneInputFieldExample.template.tsx#PhoneInputFieldExampleTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");const PhoneInputField_stories={title:"Admiral-2.1/Form Field/PhoneInputField",component:PhoneInputField.a,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.t,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61244"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61271"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61297"}]},argTypes:{dimension:{options:types.q,control:{type:"radio"}},disabled:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1}}},PhoneInputFieldExampleStory=props=>(0,jsx_runtime.jsx)(PhoneInputFieldExampleTemplate,{...props});PhoneInputFieldExampleStory.displayName="PhoneInputFieldExampleStory";const PhoneInputFieldExample={render:PhoneInputFieldExampleStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { PhoneInputField } from '@admiral-ds/react-ui';\nimport type { PhoneInputFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const PhoneInputFieldExampleTemplate = ({\n  label = 'Введите номер телефона',\n  themeBorderKind,\n  ...props\n}: PhoneInputFieldProps & { themeBorderKind?: BorderRadiusType }) => {\n  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce(\n    (acc, key) => {\n      if (props[key] !== undefined) acc[key] = props[key];\n\n      return acc;\n    },\n    {} as Record<any, any>,\n  );\n\n  const [localValue, setValue] = React.useState<string>(props.value ?? '');\n\n  React.useEffect(() => {\n    if (props.value !== undefined) {\n      setValue(String(props.value));\n    }\n  }, [props.value]);\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>\n      <PhoneInputField\n        data-container-id=\"phoneInputFieldIdOne\"\n        {...cleanProps}\n        value={localValue}\n        defaultCountry=\"RUS\"\n        onChange={handleChange}\n        dropContainerClassName=\"dropContainerClass\"\n        label={label}\n      />\n    </ThemeProvider>\n  );\n};\n"}}},name:"PhoneInputField example"};PhoneInputFieldExample.parameters={...PhoneInputFieldExample.parameters,docs:{...PhoneInputFieldExample.parameters?.docs,source:{originalSource:"{\n  render: PhoneInputFieldExampleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: PhoneInputFieldExampleRaw\n      }\n    }\n  },\n  name: 'PhoneInputField example'\n}",...PhoneInputFieldExample.parameters?.docs?.source}}};const __namedExportsOrder=["PhoneInputFieldExample"]},"./src/components/DropdownContainer/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DropdownContainer,I:()=>StyledDropdownContainer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/hooks/useClickOutside.ts"),_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/PositionInPortal.tsx"),_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/hooks/useInterval.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/DropdownProvider.tsx"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/themes/borderRadius.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"DropdownContainer__Container",componentId:"sc-1eulg01-0"})(["pointer-events:initial;margin:8px 0;flex:0 0 auto;",";max-width:calc(100vw - 32px);opacity:0;transition-delay:200ms;transition-property:opacity;&:focus-visible{border:2px solid blue;}",""],(p=>p.$alignSelf?`align-self: ${p.$alignSelf};`:""),(p=>p.$dropContainerCssMixin)),FakeTarget=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"DropdownContainer__FakeTarget",componentId:"sc-1eulg01-1"})(["pointer-events:none;height:100%;flex:0 0 auto;"]),Portal=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(_src_components_PositionInPortal__WEBPACK_IMPORTED_MODULE_3__.k).withConfig({displayName:"DropdownContainer__Portal",componentId:"sc-1eulg01-2"})(["display:flex;flex-direction:",";flex-wrap:nowrap;"],(p=>p.$reverse?"column-reverse":"column")),DropdownContainer=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({targetRef,targetElement,onClickOutside=()=>null,className="",alignSelf,dropContainerCssMixin,...props},ref)=>{const containerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[displayUpward,setDisplayUpward]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),targetNode=targetElement??targetRef?.current,{addDropdown,removeDropdown,dropdowns}=(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.xN)(containerRef),{rootRef}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.Dl);(0,_src_components_common_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_5__.O)([containerRef],(e=>{(0,_src_components_DropdownProvider__WEBPACK_IMPORTED_MODULE_4__.DD)(e,dropdowns)&&onClickOutside(e)})),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{containerRef.current!==document.activeElement&&containerRef?.current?.focus()}),[]);const checkDropdownPosition=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const node=containerRef.current;if(node&&targetNode){const rect=node.getBoundingClientRect(),targetRect=targetNode.getBoundingClientRect(),viewportHeight=window.innerHeight,viewportWidth=window.innerWidth;if(viewportHeight-rect.bottom<0&&targetRect.top>viewportHeight-targetRect.bottom?displayUpward||setDisplayUpward(!0):(targetRect.bottom+(targetRect.top-rect.top)<viewportHeight-8||targetRect.top<viewportHeight-targetRect.bottom)&&displayUpward&&setDisplayUpward(!1),alignSelf&&"auto"!==alignSelf)return;const rectWidth=rect.right-rect.left,enoughWidthOnTheRight=viewportWidth-targetRect.left>=rectWidth,enoughWidthOnTheLeft=targetRect.right-16>=rectWidth,containerWiderTarget=rectWidth>targetRect.width;if(enoughWidthOnTheLeft||enoughWidthOnTheRight)node.style.transform="translateX(0)",enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-end":containerWiderTarget&&!enoughWidthOnTheLeft&&enoughWidthOnTheRight?node.style.alignSelf="flex-start":containerWiderTarget&&!enoughWidthOnTheRight&&enoughWidthOnTheLeft&&(node.style.alignSelf="flex-end");else{node.style.alignSelf="center";const offset=(viewportWidth-rect.width)/2-(targetRect.left-(rectWidth-targetRect.width)/2);node.style.transform=`translateX(${offset}px)`}}}),[displayUpward,targetRef,targetElement]);return(0,_src_components_common_hooks_useInterval__WEBPACK_IMPORTED_MODULE_6__.Y)(checkDropdownPosition,100),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{containerRef.current&&(containerRef.current.style.opacity="1")}),[]),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>(addDropdown?.(containerRef),()=>{removeDropdown?.(containerRef)})),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Portal,{targetElement:targetNode,$reverse:displayUpward,rootRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FakeTarget,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_7__.O)(ref,containerRef),...props,className:className+" dropdown-container",$alignSelf:alignSelf,$dropContainerCssMixin:dropContainerCssMixin})]})})}));DropdownContainer.displayName="DropdownContainer";const StyledDropdownContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(DropdownContainer).withConfig({displayName:"DropdownContainer__StyledDropdownContainer",componentId:"sc-1eulg01-3"})([""," border-radius:",";overflow:hidden;width:max-content;"],(p=>p.theme.shadow["Shadow 08"]),(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_8__.c8)(p.theme.shape)));StyledDropdownContainer.displayName="StyledDropdownContainer";try{DropdownContainer.displayName="DropdownContainer",DropdownContainer.__docgenInfo={description:"",displayName:"DropdownContainer",props:{targetRef:{defaultValue:null,description:"@deprecated Будет удалено в 8.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef на элемент, относительно которого позиционируется выпадающее меню",name:"targetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню\nВ 8.x.x версии данный параметр станет обязательным, заменив собой targetRef",name:"targetElement",required:!1,type:{name:"Element | null"}},onClickOutside:{defaultValue:{value:"() => null"},description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownContainer/index.tsx#DropdownContainer"]={docgenInfo:DropdownContainer.__docgenInfo,name:"DropdownContainer",path:"src/components/DropdownContainer/index.tsx#DropdownContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bP:()=>ExtraTextContainer,gN:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.c["Body/Body 2 Long"],(p=>p.error?p.theme.color["Error/Error 60 Main"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,inputRef,...props})=>{const[currentCount,setCurrentCount]=react.useState(0);return react.useEffect((()=>{function oninput(){const{value}=this;setCurrentCount(value.length)}const node=inputRef.current;if(node)return node.addEventListener("input",oninput),oninput.call(node),()=>{node.removeEventListener("input",oninput)}}),[inputRef]),currentCount>.8*maxLength?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<.8*maxLength,children:[currentCount,"/",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const inlineMixin=(0,styled_components_browser_esm.iv)(["flex-direction:row;justify-content:space-between;align-items:center;> *{flex:1 1 auto;}","{margin:0 8px 0 0;}"],Label._),Field_Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-0"})(["display:flex;overflow:hidden;",""],(props=>props.$displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-1"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.c8),LabelContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-2"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.iv)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.ZP)(Label._).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-3"})(["",";"],(p=>p.$skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.iv)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-4"})(["display:flex;justify-content:space-between;",";"],(p=>p.$skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-5"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-status='error'] &{color:",";}[data-status='success'] &{color:",";}"],typography.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.theme.color["Error/Error 60 Main"]),(props=>props.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.ZP)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-6"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id=(0,uid.h)(),skeleton=!1,...restFieldProps}=props,fieldContainerProps={className,style,...restFieldProps},labelProps={htmlFor:id,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,$displayInline:displayInline,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.O)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{$skeleton:skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)("div",{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{$skeleton:skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:",";[data-disabled] &{color:",";}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:",";}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.c["Body/Body 2 Short"],(props=>props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Neutral/Neutral 30"]),(props=>props.disabled?"":props.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/hooks/useInterval.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useInterval});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useInterval(callback,delay){const intervalRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),callbackRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(callback);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callbackRef.current=callback}),[callback]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if("number"==typeof delay)return intervalRef.current=window.setInterval((()=>callbackRef.current()),delay),()=>window.clearInterval(intervalRef.current||0)}),[delay]),intervalRef}},"./src/components/form/PhoneInputField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>PhoneInputField});var _src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/uid.ts"),_src_components_Field__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_input_PhoneNumberInput__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/input/PhoneNumberInput/index.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PhoneInputField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),{className,displayInline,status,required,extraText,label,id=(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__.h)(),disabled,displayCharacterCounter,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,displayCharacterCounter,ref:inputRef,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.$l)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.Od)(restProps,fieldContainerProps);const inputProps={ref,id,"aria-required":required,status,disabled,skeleton,...restProps};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_4__.gN,{...fieldContainerProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_input_PhoneNumberInput__WEBPACK_IMPORTED_MODULE_5__.A,{...inputProps})})}));PhoneInputField.displayName="PhoneInputField";try{PhoneInputField.displayName="PhoneInputField",PhoneInputField.__docgenInfo={description:"",displayName:"PhoneInputField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},defaultCountry:{defaultValue:null,description:"Код ISO A3 страны для определения префикса номера по умолчанию",name:"defaultCountry",required:!1,type:{name:"string"}},onlyCountries:{defaultValue:null,description:"Список стран для выпадающего списка. Отмечается кодом ISO A3 страны",name:"onlyCountries",required:!1,type:{name:"string[]"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/PhoneInputField/index.tsx#PhoneInputField"]={docgenInfo:PhoneInputField.__docgenInfo,name:"PhoneInputField",path:"src/components/form/PhoneInputField/index.tsx#PhoneInputField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>DataAttributesDescription});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div.withConfig({displayName:"common__Desc",componentId:"sc-1vhod0x-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),DataAttributesDescription=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.cP,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']});DataAttributesDescription.displayName="DataAttributesDescription"}}]);