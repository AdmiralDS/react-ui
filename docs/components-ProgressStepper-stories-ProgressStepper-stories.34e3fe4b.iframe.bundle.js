"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3187],{"./src/components/ProgressStepper/stories/ProgressStepper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlaygroundExample:()=>PlaygroundExample,VariantsExample:()=>VariantsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressStepper_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ProgressStepper=__webpack_require__("./src/components/ProgressStepper/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const steps=["Название первого шага","Название второго шага","Название третьего шага","Название четвертого шага","Название пятого шага","Название шестого шага"],ProgressStepperPlaygroundTemplate=args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps})});try{ProgressStepperPlaygroundTemplate.displayName="ProgressStepperPlaygroundTemplate",ProgressStepperPlaygroundTemplate.__docgenInfo={description:"",displayName:"ProgressStepperPlaygroundTemplate",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:null,description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:null,description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/stories/ProgressStepperPlayground.template.tsx#ProgressStepperPlaygroundTemplate"]={docgenInfo:ProgressStepperPlaygroundTemplate.__docgenInfo,name:"ProgressStepperPlaygroundTemplate",path:"src/components/ProgressStepper/stories/ProgressStepperPlayground.template.tsx#ProgressStepperPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./src/components/Typography/typography.ts");const Sect=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepperVariantstemplate__Sect",componentId:"sc-1hrw4gl-0"})(["margin-bottom:60px;"," color:",";label{display:block;margin-bottom:20px;}"],typography.c["Body/Body 1 Long"],(({theme})=>theme.color["Neutral/Neutral 90"])),Section=({title,children})=>(0,jsx_runtime.jsxs)(Sect,{children:[(0,jsx_runtime.jsx)("label",{children:(0,jsx_runtime.jsx)("i",{children:title})}),children]});Section.displayName="Section";const ProgressStepperVariants_template_steps=["название первого шага","название второго шага","название третьего шага","название четвертого шага","название пятого шага","название шестого шага"],steps2=["название первого этапа","название второго этапа","название третьего этапа","название четвертого этапа","название пятого этапа","название шестого этапа"],ProgressStepperVariantsTemplate=args=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Section,{title:"Первый шаг",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:0})}),(0,jsx_runtime.jsx)(Section,{title:"Середина прогресса",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:2})}),(0,jsx_runtime.jsx)(Section,{title:"Последний шаг",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:5})}),(0,jsx_runtime.jsx)(Section,{title:"Первый шаг - Adaptive (Mobile)",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:0,mobile:!0})}),(0,jsx_runtime.jsx)(Section,{title:"Середина прогресса - Adaptive (Mobile)",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:2,mobile:!0})}),(0,jsx_runtime.jsx)(Section,{title:"Последний шаг - Adaptive (Mobile)",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:5,mobile:!0})}),(0,jsx_runtime.jsx)(Section,{title:"Кастомная подпись о следующем шаге",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:2,locale:{renderNextStepName:nextStepName=>`Далее следует шаг: ${nextStepName}`}})}),(0,jsx_runtime.jsx)(Section,{title:"Отключение подписи о следующем шаге",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:ProgressStepperVariants_template_steps,activeStep:2,displayNextStepName:!1,mobile:!0})}),(0,jsx_runtime.jsx)(Section,{title:"Пример настройки названия шага",children:(0,jsx_runtime.jsx)(ProgressStepper.S,{...args,steps:steps2,activeStep:2,locale:{stepName:["этап","этапов"]}})})]});try{ProgressStepperVariantsTemplate.displayName="ProgressStepperVariantsTemplate",ProgressStepperVariantsTemplate.__docgenInfo={description:"",displayName:"ProgressStepperVariantsTemplate",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:null,description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:null,description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/stories/ProgressStepperVariants.template.tsx#ProgressStepperVariantsTemplate"]={docgenInfo:ProgressStepperVariantsTemplate.__docgenInfo,name:"ProgressStepperVariantsTemplate",path:"src/components/ProgressStepper/stories/ProgressStepperVariants.template.tsx#ProgressStepperVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepperstories__Desc",componentId:"sc-1qoiwei-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Separator=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepperstories__Separator",componentId:"sc-1qoiwei-1"})(["height:20px;width:100%;"]),Description=()=>(0,jsx_runtime.jsxs)(Desc,{children:["Компонент Progress Stepper — визуальное отображение пользовательского прогресса в виде заполняющейся линии. Уведомляет пользователя о текущем положении на пути при выполнении конкретной задачи.",(0,jsx_runtime.jsx)(Separator,{}),"Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.",(0,jsx_runtime.jsx)(Separator,{}),"Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине, минимальная ширина 388px.",(0,jsx_runtime.jsx)(Separator,{}),"На мобильных устройствах применяется компонент Stepper Progress Mobile. Использование строки названия следующего шага — опционально."]});Description.displayName="Description";const ProgressStepper_stories={title:"Admiral-2.1/ProgressStepper",decorators:void 0,component:ProgressStepper.S,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16832"}},argTypes:{mobile:{control:{type:"boolean"}},displayNextStepName:{control:{type:"boolean"}},activeStep:{control:{type:"number"}},steps:{control:!1},locale:{control:!1}}},PlaygroundStory=props=>(0,jsx_runtime.jsx)(ProgressStepperPlaygroundTemplate,{...props});PlaygroundStory.displayName="PlaygroundStory";const PlaygroundExample={render:PlaygroundStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { ProgressStepper } from '@admiral-ds/react-ui';\nimport type { ProgressStepperProps } from '@admiral-ds/react-ui';\n\nconst steps = [\n  'Название первого шага',\n  'Название второго шага',\n  'Название третьего шага',\n  'Название четвертого шага',\n  'Название пятого шага',\n  'Название шестого шага',\n];\n\nexport const ProgressStepperPlaygroundTemplate = (args: ProgressStepperProps) => {\n  return (\n    <>\n      <ProgressStepper {...args} steps={steps} />\n    </>\n  );\n};\n"}}},name:"StepperProgress. Playground."},VariantsStory=props=>(0,jsx_runtime.jsx)(ProgressStepperVariantsTemplate,{...props});VariantsStory.displayName="VariantsStory";const VariantsExample={render:VariantsStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { ProgressStepper, typography } from '@admiral-ds/react-ui';\nimport type { ProgressStepperProps } from '@admiral-ds/react-ui';\nimport styled from 'styled-components';\n\nconst Sect = styled.div`\n  margin-bottom: 60px;\n  ${typography['Body/Body 1 Long']}\n  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};\n  label {\n    display: block;\n    margin-bottom: 20px;\n  }\n`;\n\nconst Section = ({ title, children }: any) => (\n  <Sect>\n    <label>\n      <i>{title}</i>\n    </label>\n    {children}\n  </Sect>\n);\n\nconst steps = [\n  'название первого шага',\n  'название второго шага',\n  'название третьего шага',\n  'название четвертого шага',\n  'название пятого шага',\n  'название шестого шага',\n];\nconst steps2 = [\n  'название первого этапа',\n  'название второго этапа',\n  'название третьего этапа',\n  'название четвертого этапа',\n  'название пятого этапа',\n  'название шестого этапа',\n];\n\nexport const ProgressStepperVariantsTemplate = (args: ProgressStepperProps) => {\n  return (\n    <>\n      <Section title=\"Первый шаг\">\n        <ProgressStepper {...args} steps={steps} activeStep={0} />\n      </Section>\n      <Section title=\"Середина прогресса\">\n        <ProgressStepper {...args} steps={steps} activeStep={2} />\n      </Section>\n      <Section title=\"Последний шаг\">\n        <ProgressStepper {...args} steps={steps} activeStep={5} />\n      </Section>\n      <Section title=\"Первый шаг - Adaptive (Mobile)\">\n        <ProgressStepper {...args} steps={steps} activeStep={0} mobile />\n      </Section>\n      <Section title=\"Середина прогресса - Adaptive (Mobile)\">\n        <ProgressStepper {...args} steps={steps} activeStep={2} mobile />\n      </Section>\n      <Section title=\"Последний шаг - Adaptive (Mobile)\">\n        <ProgressStepper {...args} steps={steps} activeStep={5} mobile />\n      </Section>\n      <Section title=\"Кастомная подпись о следующем шаге\">\n        <ProgressStepper\n          {...args}\n          steps={steps}\n          activeStep={2}\n          locale={{ renderNextStepName: (nextStepName) => `Далее следует шаг: ${nextStepName}` }}\n        />\n      </Section>\n      <Section title=\"Отключение подписи о следующем шаге\">\n        <ProgressStepper {...args} steps={steps} activeStep={2} displayNextStepName={false} mobile />\n      </Section>\n      <Section title=\"Пример настройки названия шага\">\n        <ProgressStepper {...args} steps={steps2} activeStep={2} locale={{ stepName: ['этап', 'этапов'] }} />\n      </Section>\n    </>\n  );\n};\n"}}},name:"StepperProgress. Примеры использования."};PlaygroundExample.parameters={...PlaygroundExample.parameters,docs:{...PlaygroundExample.parameters?.docs,source:{originalSource:"{\n  render: PlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ProgressStepperPlaygroundRaw\n      }\n    }\n  },\n  name: 'StepperProgress. Playground.'\n}",...PlaygroundExample.parameters?.docs?.source}}},VariantsExample.parameters={...VariantsExample.parameters,docs:{...VariantsExample.parameters?.docs,source:{originalSource:"{\n  render: VariantsStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ProgressStepperVariantsRaw\n      }\n    }\n  },\n  name: 'StepperProgress. Примеры использования.'\n}",...VariantsExample.parameters?.docs?.source}}};const __namedExportsOrder=["PlaygroundExample","VariantsExample"]},"./src/components/ProgressStepper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>ProgressStepper});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),light=__webpack_require__("./src/components/themes/light/index.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts");const setFirstLetterToUpperCase=(str="")=>str.slice(0,1).toUpperCase()+str.slice(1),convertNumberToIntegerPercent=(num,max=100)=>Math.round(100*num/max);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepper__Wrapper",componentId:"sc-4zqzo6-0"})(["display:flex;flex-direction:column;min-width:388px;"]),ProgressWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepper__ProgressWrapper",componentId:"sc-4zqzo6-1"})(["display:flex;overflow:hidden;height:4px;border-radius:2px;background-color:",";"],(({theme})=>theme.color["Neutral/Neutral 20"])),Progress=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepper__Progress",componentId:"sc-4zqzo6-2"})(["width:","%;background-color:",";"],(({$percent})=>$percent),(({theme})=>theme.color["Primary/Primary 60 Main"])),Header=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepper__Header",componentId:"sc-4zqzo6-3"})(["display:flex;flex-direction:",";"," margin-bottom:8px;"],(({$mobile})=>$mobile?"column":"row"),(({$mobile})=>!$mobile&&"  justify-content: space-between;")),ActiveStep=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepper__ActiveStep",componentId:"sc-4zqzo6-4"})([""," color:",";"],typography.c["Body/Body 2 Long"],(({theme})=>theme.color["Neutral/Neutral 90"])),ProgressText=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepper__ProgressText",componentId:"sc-4zqzo6-5"})(["white-space:nowrap;flex-shrink:0;color:",";",""],(({theme})=>theme.color["Neutral/Neutral 50"]),typography.c["Caption/Caption 1"]),NextStep=styled_components_browser_esm.ZP.div.withConfig({displayName:"ProgressStepper__NextStep",componentId:"sc-4zqzo6-6"})(["width:100%;text-align:left;margin-top:8px;color:",";",""],(({theme})=>theme.color["Neutral/Neutral 50"]),typography.c["Caption/Caption 1"]),ProgressStepper=({steps,activeStep:activeStepProp=-1,displayNextStepName=!0,mobile=!1,locale,...props})=>{const theme=(0,styled_components_browser_esm.Fg)()||light.f,stepName=locale?.stepName||theme.locales[theme.currentLocale].progressStepper.stepName,progressText=locale?.progressText||theme.locales[theme.currentLocale].progressStepper.progressText,renderNextStepName=locale?.renderNextStepName||theme.locales[theme.currentLocale].progressStepper.renderNextStepName,stepsAmount=steps.length,activeStep=(max=stepsAmount,(num=activeStepProp)>=0&&num<max?activeStepProp:-1);var max,num;const activeStepNumber=activeStep+1,nextStep=activeStep+1,nextStepContent=renderNextStepName(((str="")=>str.slice(0,1).toLowerCase()+str.slice(1))(steps[nextStep])),fixedStepName=stepName[0],fixedStepNamePlural=stepName[stepName.length-1];return(0,jsx_runtime.jsxs)(Wrapper,{...props,children:[(0,jsx_runtime.jsxs)(Header,{$mobile:mobile,"aria-hidden":!0,children:[(0,jsx_runtime.jsx)(ActiveStep,{children:setFirstLetterToUpperCase(steps[activeStep])}),(0,jsx_runtime.jsx)(ProgressText,{children:progressText(activeStepNumber,stepsAmount,fixedStepNamePlural?.toLowerCase())})]}),(0,jsx_runtime.jsx)(ProgressWrapper,{children:(0,jsx_runtime.jsx)(Progress,{tabIndex:0,role:"progressbar","aria-valuemin":0,"aria-valuemax":stepsAmount,"aria-valuenow":activeStepNumber,"aria-valuetext":`${fixedStepName} ${activeStepNumber}: ${steps[activeStep]}`,$percent:convertNumberToIntegerPercent(activeStepNumber,stepsAmount)})}),displayNextStepName&&steps[nextStep]&&(0,jsx_runtime.jsx)(NextStep,{"aria-hidden":!0,children:nextStepContent})]})};ProgressStepper.displayName="ProgressStepper",ProgressStepper.displayName="ProgressStepper";try{ProgressStepper.displayName="ProgressStepper",ProgressStepper.__docgenInfo={description:"",displayName:"ProgressStepper",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:null,description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:{value:"true"},description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/index.tsx#ProgressStepper"]={docgenInfo:ProgressStepper.__docgenInfo,name:"ProgressStepper",path:"src/components/ProgressStepper/index.tsx#ProgressStepper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>typography,l:()=>TYPOGRAPHY});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FONT_FAMILY="'VTB Group UI', sans-serif",TYPOGRAPHY={fontFamily:FONT_FAMILY,fontSize:{12:"12px",14:"14px",16:"16px",18:"18px",22:"22px",28:"28px",32:"32px",36:"36px",42:"42px"},fontWeight:{normal:400,medium:500,bold:600},lineHeight:{16:"16px",20:"20px",24:"24px",28:"28px",36:"36px",40:"40px",44:"44px",52:"52px"}},typography={"Main/XXL":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:42px;line-height:52px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Main/XL":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:36px;line-height:44px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Main/L":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:500;font-size:32px;line-height:40px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Main/M":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:28px;line-height:36px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Main/S":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:20px;line-height:28px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Main/XS-bold":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:18px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Main/XS":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:normal;font-size:18px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Additional/L-bold":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:16px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Additional/L":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:normal;font-size:16px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Additional/M":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:normal;font-size:16px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Additional/S":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:normal;font-size:14px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Additional/S-bold":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:500;font-size:14px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Additional/XS":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:normal;font-size:14px;line-height:16px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Button/M":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:500;font-size:16px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Button/S":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:500;font-size:14px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Caption/XS":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:normal;font-size:12px;line-height:16px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/HL1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:72px;line-height:80px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/HL2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:56px;line-height:64px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/HL3":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:48px;line-height:56px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/H1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:40px;line-height:48px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/H2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:34px;line-height:40px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/H3":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:28px;line-height:36px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/H4":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:24px;line-height:32px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/H5":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:20px;line-height:28px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Header/H6":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:18px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Subtitle/Subtitle 1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:400;font-size:18px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Subtitle/Subtitle 2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:16px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Subtitle/Subtitle 3":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:550;font-size:14px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Body/Body 1 Long":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:400;font-size:16px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Body/Body 1 Short":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:400;font-size:16px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Body/Body 2 Long":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:400;font-size:14px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Body/Body 2 Short":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:400;font-size:14px;line-height:16px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Button/Button 1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:500;font-size:16px;line-height:24px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Button/Button 2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:500;font-size:14px;line-height:20px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Caption/Caption 1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:400;font-size:12px;line-height:16px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY),"Caption/Caption 2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["font-family:",";font-style:normal;font-weight:400;font-size:10px;line-height:12px;font-feature-settings:'tnum' on,'lnum' on;text-rendering:geometricPrecision;"],FONT_FAMILY)}}}]);