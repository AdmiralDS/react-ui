"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7132],{"./src/components/form/SuggestField/stories/SuggestField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SuggestFieldExample:()=>SuggestFieldExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SuggestField_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),SuggestInput=__webpack_require__("./src/components/input/SuggestInput/index.tsx"),Field=__webpack_require__("./src/components/Field/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SuggestField=react.forwardRef(((props,ref)=>{const fieldRef=react.useRef(null),inputRef=react.useRef(null),{className,displayInline,status,required,extraText,label,id=(0,uid.L)(),disabled,displayCharacterCounter,maxLength,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,displayCharacterCounter,maxLength,ref:fieldRef,inputRef,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);const suggestProps={ref:(0,refSetter.d)(ref,inputRef),id,"aria-required":required,status,maxLength,disabled,skeleton,...restProps,portalTargetRef:fieldRef};return(0,jsx_runtime.jsx)(Field.D0,{...fieldContainerProps,children:(0,jsx_runtime.jsx)(SuggestInput.Z,{...suggestProps})})}));SuggestField.displayName="SuggestField";try{SuggestField.displayName="SuggestField",SuggestField.__docgenInfo={description:"",displayName:"SuggestField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"Референс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"Задает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SuggestField/index.tsx#SuggestField"]={docgenInfo:SuggestField.__docgenInfo,name:"SuggestField",path:"src/components/form/SuggestField/index.tsx#SuggestField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");const DisplayContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"SuggestFieldExampletemplate__DisplayContainer",componentId:"sc-1ags6m8-0"})(["> *{margin-bottom:24px;}"]),OPTIONS=["text 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","text 6"],SuggestFieldExampleTemplate=({placeholder="Наберите несколько символов...",label="Поле ввода с вариантами подстановки значений",themeBorderKind,CSSCustomProps,...props})=>{const cleanProps=Object.keys(props).reduce(((acc,key)=>(void 0!==props[key]&&(acc[key]=props[key]),acc)),{}),[localValue,setValue]=react.useState(props.value?String(props.value):""),[isLoading,setIsLoading]=react.useState(!1),[options,setOptions]=react.useState();return react.useEffect((()=>{if(isLoading){const timeout=window.setTimeout((()=>{setIsLoading(!1),setOptions([...OPTIONS])}),3e3);return()=>{window.clearTimeout(timeout)}}}),[isLoading]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DisplayContainer,{children:(0,jsx_runtime.jsx)(SuggestField,{"data-container-id":"suggestFieldIdOne",...cleanProps,defaultValue:"text",onChange:e=>{const inputValue=e.target.value;localValue?.length<3&&inputValue?.length>2&&(setIsLoading(!0),setOptions([])),console.log(`>>> onChange: ${inputValue}`),setValue(inputValue)},onOptionSelect:value=>{console.log(`>>> onOptionSelect: ${value}`)},options,isLoading,placeholder,label})})})};SuggestFieldExampleTemplate.displayName="SuggestFieldExampleTemplate";try{SuggestFieldExampleTemplate.displayName="SuggestFieldExampleTemplate",SuggestFieldExampleTemplate.__docgenInfo={description:"",displayName:"SuggestFieldExampleTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"Референс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"Задает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:{value:"Поле ввода с вариантами подстановки значений"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/SuggestField/stories/SuggestFieldExample.template.tsx#SuggestFieldExampleTemplate"]={docgenInfo:SuggestFieldExampleTemplate.__docgenInfo,name:"SuggestFieldExampleTemplate",path:"src/components/form/SuggestField/stories/SuggestFieldExample.template.tsx#SuggestFieldExampleTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");const SuggestField_stories={title:"Admiral-2.1/Form Field/SuggestField",component:SuggestField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},isLoading:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},maxLength:{control:{type:"number"}},displayInline:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},extraText:{control:{type:"text"}},value:{control:{type:"text"}},label:{control:{type:"text"}},handleInput:{control:!1},containerRef:{control:!1},options:{control:!1},portalTargetRef:{control:!1},onSearchButtonClick:{control:!1},dropMaxHeight:{control:{type:"text"}},icon:{control:!1},icons:{control:!1},locale:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}},SuggestFieldExampleStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(SuggestFieldExampleTemplate,{...props,CSSCustomProps})};SuggestFieldExampleStory.displayName="SuggestFieldExampleStory";const SuggestFieldExample={render:SuggestFieldExampleStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport styled, { ThemeProvider } from 'styled-components';\n\nimport { SuggestField } from '@admiral-ds/react-ui';\nimport type { SuggestFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nconst DisplayContainer = styled.div`\n  > * {\n    margin-bottom: 24px;\n  }\n`;\n\nconst OPTIONS = [\n  'text 1',\n  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',\n  'text 3',\n  'text 4',\n  'text 5',\n  'text 6',\n];\n\nexport const SuggestFieldExampleTemplate = ({\n  placeholder = 'Наберите несколько символов...',\n  label = 'Поле ввода с вариантами подстановки значений',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SuggestFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce(\n    (acc, key) => {\n      if (props[key] !== undefined) acc[key] = props[key];\n\n      return acc;\n    },\n    {} as Record<any, any>,\n  );\n\n  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const [options, setOptions] = React.useState<string[] | undefined>();\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.target.value;\n\n    // Если в инпуте больше 3х символов производим запрос на поиск совпадений\n    if (localValue?.length < 3 && inputValue?.length > 2) {\n      setIsLoading(true);\n      setOptions([]);\n    }\n\n    console.log(`>>> onChange: ${inputValue}`);\n    setValue(inputValue);\n  };\n\n  const handleOptionSelect = (value: string) => {\n    console.log(`>>> onOptionSelect: ${value}`);\n  };\n\n  // Имитация запросов на бакэнд\n  React.useEffect(() => {\n    if (isLoading) {\n      const timeout = window.setTimeout(() => {\n        setIsLoading(false);\n        setOptions([...OPTIONS]);\n      }, 3000);\n      return () => {\n        window.clearTimeout(timeout);\n      };\n    }\n  }, [isLoading]);\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <DisplayContainer>\n        <SuggestField\n          data-container-id=\"suggestFieldIdOne\"\n          {...cleanProps}\n          defaultValue=\"text\"\n          onChange={handleChange}\n          onOptionSelect={handleOptionSelect}\n          options={options}\n          isLoading={isLoading}\n          placeholder={placeholder}\n          label={label}\n        />\n      </DisplayContainer>\n    </ThemeProvider>\n  );\n};\n"}}},name:"SuggestField example"};SuggestFieldExample.parameters={...SuggestFieldExample.parameters,docs:{...SuggestFieldExample.parameters?.docs,source:{originalSource:"{\n  render: SuggestFieldExampleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SuggestFieldExampleRaw\n      }\n    }\n  },\n  name: 'SuggestField example'\n}",...SuggestFieldExample.parameters?.docs?.source}}};const __namedExportsOrder=["SuggestFieldExample"]},"./src/components/Field/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bV:()=>ExtraTextContainer,D0:()=>Field});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Container=__webpack_require__("./src/components/input/Container.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CharacterCounter_Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"CharacterCounter__Container",componentId:"sc-1sngjg6-0"})(["white-space:nowrap;"," color:",";transition:all 0.5s,color 0.5s;opacity:",";max-width:",";overflow:hidden;"],typography.Il["Body/Body 2 Long"],(p=>p.error?`var(--admiral-color-Error_Error60Main, ${p.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.transparent&&!p.error?0:1),(p=>p.transparent&&!p.error?0:"none")),CharacterCounter=({maxLength,inputRef,...props})=>{const[currentCount,setCurrentCount]=react.useState(0);return react.useEffect((()=>{const timer=setInterval((()=>{const node=inputRef.current;node&&setCurrentCount(node.value.length)}),250);return()=>clearInterval(timer)}),[inputRef]),currentCount>.8*maxLength?(0,jsx_runtime.jsxs)(CharacterCounter_Container,{...props,error:currentCount>=maxLength,transparent:currentCount<.8*maxLength,children:[currentCount," / ",maxLength]}):null};try{CharacterCounter.displayName="CharacterCounter",CharacterCounter.__docgenInfo={description:"",displayName:"CharacterCounter",props:{maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!0,type:{name:"RefObject<HTMLInputElement | HTMLTextAreaElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"]={docgenInfo:CharacterCounter.__docgenInfo,name:"CharacterCounter",path:"src/components/input/TextArea/CharacterCounter.tsx#CharacterCounter"})}catch(__react_docgen_typescript_loader_error){}var Label=__webpack_require__("./src/components/Label/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts");const inlineMixin=(0,styled_components_browser_esm.AH)(["flex-direction:row;justify-content:space-between;align-items:center;> *{flex:1 1 auto;}","{margin:0 8px 0 0;}"],Label.J),Field_Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__Container",componentId:"sc-1wrg3lg-0"})(["display:flex;overflow:hidden;",""],(props=>props.$displayInline?inlineMixin:"flex-direction: column;")),SkeletonLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__SkeletonLabel",componentId:"sc-1wrg3lg-1"})(["position:absolute;top:0;left:0;height:16px;width:50%;margin-bottom:8px;",""],Container.vy),LabelContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__LabelContainer",componentId:"sc-1wrg3lg-2"})(["position:relative;text-align:left;"]),textSkeletonMixin=(0,styled_components_browser_esm.AH)(["color:transparent;"]),StyledLabel=(0,styled_components_browser_esm.Ay)(Label.J).withConfig({displayName:"Field__StyledLabel",componentId:"sc-1wrg3lg-3"})(["",";"],(p=>p.$skeleton&&textSkeletonMixin)),containerSkeletonMixin=(0,styled_components_browser_esm.AH)(["visibility:hidden;"]),ExtrasContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__ExtrasContainer",componentId:"sc-1wrg3lg-4"})(["display:flex;justify-content:space-between;",";"],(p=>p.$skeleton&&containerSkeletonMixin)),ExtraTextContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"Field__ExtraTextContainer",componentId:"sc-1wrg3lg-5"})(["flex:1 1 auto;padding-top:8px;text-align:left;"," color:var(--admiral-color-Neutral_Neutral50,",");[data-disabled] &{color:var(--admiral-color-Neutral_Neutral30,",");}[data-status='error'] &{color:var(--admiral-color-Error_Error60Main,",");}[data-status='success'] &{color:var(--admiral-color-Success_Success50Main,",");}"],typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Error/Error 60 Main"]),(p=>p.theme.color["Success/Success 50 Main"])),PositionedCharacterCounter=(0,styled_components_browser_esm.Ay)(CharacterCounter).withConfig({displayName:"Field__PositionedCharacterCounter",componentId:"sc-1wrg3lg-6"})(["flex:0 0 auto;padding:8px 0 0 8px;"]),Field=react.forwardRef((({children,maxLength,inputRef,displayCharacterCounter=!0,...props},ref)=>{const containerRef=react.useRef(null),[hasFocus,setFocus]=react.useState(!1),{className,style,displayInline,status,extraText,label,required,disabled,id,skeleton=!1,...restFieldProps}=props,[defaultID]=(0,react.useState)((0,uid.L)()),fieldContainerProps={className,style,...restFieldProps},labelProps={htmlFor:id??defaultID,children:label,required,disabled};return react.useEffect((()=>{const onFocusIn=()=>{setFocus(!0)},onFocusOut=()=>{setFocus(!1)},containerNode=containerRef.current;return containerNode&&(containerNode.addEventListener("focusin",onFocusIn),containerNode.addEventListener("focusout",onFocusOut)),()=>{containerNode&&(containerNode.removeEventListener("focusin",onFocusIn),containerNode.removeEventListener("focusout",onFocusOut))}}),[]),(0,jsx_runtime.jsxs)(Field_Container,{...fieldContainerProps,$displayInline:displayInline,"data-status":status,"data-focus-within":hasFocus?"":void 0,"data-required-within":required?"":void 0,"data-disabled":disabled?"":void 0,"data-read-only":!!props.readOnly||void 0,ref:(0,refSetter.d)(containerRef,ref),children:[labelProps.children&&(0,jsx_runtime.jsxs)(LabelContainer,{children:[skeleton&&(0,jsx_runtime.jsx)(SkeletonLabel,{}),(0,jsx_runtime.jsx)(StyledLabel,{$skeleton:skeleton,...labelProps})]}),(0,jsx_runtime.jsxs)("div",{children:[children,(0,jsx_runtime.jsxs)(ExtrasContainer,{$skeleton:skeleton,children:[extraText&&(0,jsx_runtime.jsx)(ExtraTextContainer,{children:extraText}),displayCharacterCounter&&inputRef&&void 0!==maxLength&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{}),(0,jsx_runtime.jsx)(PositionedCharacterCounter,{maxLength,inputRef})]})]})]})]})}));Field.displayName="Field";try{ExtrasContainer.displayName="Field",ExtrasContainer.__docgenInfo={description:"",displayName:"Field",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Field/index.tsx#Field"]={docgenInfo:Field.__docgenInfo,name:"Field",path:"src/components/Field/index.tsx#Field"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:var(--admiral-color-Neutral_Neutral50,",");[data-disabled] &{color:var(--admiral-color-Neutral_Neutral30,",");}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:var(--admiral-color-Error_Error60Main,",");}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{L:()=>uid})},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div.withConfig({displayName:"common__Desc",componentId:"sc-1vhod0x-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),DataAttributesDescription=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']});DataAttributesDescription.displayName="DataAttributesDescription"}}]);