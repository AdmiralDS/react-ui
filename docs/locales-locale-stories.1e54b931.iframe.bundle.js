"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5155],{"./src/locales/locale.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComponentProp:()=>ComponentProp,ThemeCurrentLocale:()=>ThemeCurrentLocale,ThemeNewLocale:()=>ThemeNewLocale,__namedExportsOrder:()=>__namedExportsOrder,default:()=>locale_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),light=__webpack_require__("./src/components/themes/light/index.ts"),Label=__webpack_require__("./src/components/Label/index.tsx"),Calendar=__webpack_require__("./src/components/Calendar/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"LocaleThemeCurrentLocaletemplate__Wrapper",componentId:"sc-1t87n3q-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;& > div{margin-bottom:20px;}"]),LocaleThemeCurrentLocaleTemplate=()=>{const[selected,setSelected]=(0,react.useState)(null),[selected2,setSelected2]=(0,react.useState)(null);return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Label.J,{children:"Calendar in 'ru' locale"}),(0,jsx_runtime.jsx)(Calendar.V,{selected,onChange:value=>{setSelected(value)}}),(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:function setUSALocale(theme){return theme?{...theme,currentLocale:"en-US"}:(light.d.currentLocale="en-US",light.d)},children:[(0,jsx_runtime.jsx)(Label.J,{children:"Calendar in 'en-US' locale"}),(0,jsx_runtime.jsx)(Calendar.V,{selected:selected2,onChange:value=>{setSelected2(value)}})]})]})};LocaleThemeCurrentLocaleTemplate.displayName="LocaleThemeCurrentLocaleTemplate";const LocaleThemeNewLocale_template_Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"LocaleThemeNewLocaletemplate__Wrapper",componentId:"sc-1oxvqkz-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;& > div{margin-bottom:20px;}"]),LocaleThemeNewLocaleTemplate=()=>{const[selected,setSelected]=(0,react.useState)(null);return(0,jsx_runtime.jsx)(LocaleThemeNewLocale_template_Wrapper,{children:(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:function setDeLocale(theme){const deLocale={firstDayOfWeek:1,badge:{amountAriaLabel:"Anzahl"},calendar:{backwardText:"Zurück",forwardText:"Vorwärts",nextMonthText:"Nächster Monat",previousMonthText:"Vorheriger Monat",returnText:"Zurück sein",selectYearText:"Wahl des Jahres",selectMonthText:"Monatsauswahl"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"In der Tabelle suchen"},hint:{closeButtonAriaLabel:"Tipp schließen"},modal:{closeButtonAriaLabel:"Modales Fenster schließen"},paginationOne:{itemsPerPageText:"Einträge pro Seite:",pageSelectLabel:(page,totalPages)=>`Seite ${page} von ${totalPages}`,pageSizeSelectLabel:(pageSize,total)=>`Einträge ${pageSize} von ${total}`,itemRangeText:(min,max,total)=>`${min}–${max} einträge von ${total}`,pageRangeText:total=>`von ${total} ${1===total?"Seite":"Seiten"}`,backwardText:"Vorherige Seite, auswählen",forwardText:"Nächste Seite, auswählen"},paginationTwo:{inputPlaceholder:"№ Seiten",itemRangeText:(min,max,total)=>`${min}–${max} einträge von ${total}`},progressStepper:{renderNextStepName:stepName=>`Weiter - ${stepName}`,stepName:["schritt","schritte"],progressText:(activeStepNumber,stepsAmount,stepNamePlural)=>`${activeStepNumber} von ${stepsAmount} ${stepNamePlural}`},select:{emptyMessage:"Keine Zufälle"},suggestInput:{emptyMessage:"Keine Zufälle"},table:{emptyMessage:"Keine Zufälle"}};return theme?{...theme,currentLocale:"de",locales:{...theme.locales,de:deLocale}}:(light.d.currentLocale="de",light.d.locales={...light.d.locales,de:deLocale},light.d)},children:[(0,jsx_runtime.jsx)(Label.J,{children:"Calendar in 'de' locale"}),(0,jsx_runtime.jsx)(Calendar.V,{selected,onChange:value=>{setSelected(value)}})]})})};LocaleThemeNewLocaleTemplate.displayName="LocaleThemeNewLocaleTemplate";var ProgressStepper=__webpack_require__("./src/components/ProgressStepper/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx");const LocaleProp_template_Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"LocaleProptemplate__Wrapper",componentId:"sc-m36lde-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;& > div{margin-bottom:20px;}"]),LocalePropTemplate=()=>{const[activeStep,setActiveStep]=(0,react.useState)(0);return(0,jsx_runtime.jsxs)(LocaleProp_template_Wrapper,{children:[(0,jsx_runtime.jsx)(ProgressStepper.z,{steps:["Определение стратегии","Анализ","Проектирование","Реализация","Тестирование","Внедрение","Техническая поддержка"],activeStep,locale:{stepName:["этап","этапов"],renderNextStepName:stepName=>`Далее следует этап - ${stepName}`}}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",disabled:activeStep<=0,onClick:()=>setActiveStep(activeStep-1),style:{marginRight:"40px"},children:"Назад"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",disabled:activeStep>=6,onClick:()=>setActiveStep(activeStep+1),children:"Вперёд"})]})]})};LocalePropTemplate.displayName="LocalePropTemplate";const Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"localestories__Separator",componentId:"sc-1ylcf16-0"})(["height:20px;width:100%;"]),Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"localestories__Desc",componentId:"sc-1ylcf16-1"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsxs)(Desc,{children:["Компоненты Admiral 2.1 поддерживают локализацию, и все текстовые константы в компонентах меняют своё значение при смене локали.",(0,jsx_runtime.jsx)(Separator,{}),"Текущая локаль задается в теме в свойстве currentLocale (значение по умолчанию - ru). В качестве значения currentLocale выступает строковый код локали, совместимый с методами Intl, и перечисленный в качестве ключа в другом свойстве темы - в объекте locales.",(0,jsx_runtime.jsx)(Separator,{}),"Объект theme.locales предтавляет собой перечисление локалей, поддерживаемых библиотекой: где ключами объекта выступают строковые коды локалей, а значениями объекты типа Locale с набором текстовых констант, соответствующих определенной локали.",(0,jsx_runtime.jsx)(Separator,{}),"Библиотека поддерживает три локали: ru, en, en-US. Чтобы переключить дефолтную русскую локаль на иную достаточно с помощью ThemeProvider изменить значение theme.currentLocale и убедиться, что данное значение содержится в theme.locales. Также пользователь всегда может добавить свою локаль, добавив соответствующий объект в theme.locales."]});Description.displayName="Description";const locale_stories={title:"Locales",decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{})}},LocaleThemeCurrentLocaleStory=()=>(0,jsx_runtime.jsx)(LocaleThemeCurrentLocaleTemplate,{});LocaleThemeCurrentLocaleStory.displayName="LocaleThemeCurrentLocaleStory";const ThemeCurrentLocale={render:LocaleThemeCurrentLocaleStory,parameters:{docs:{source:{code:"import { useState } from 'react';\nimport { LIGHT_THEME, Label, Calendar } from '@admiral-ds/react-ui';\nimport type { Theme } from '@admiral-ds/react-ui';\nimport styled, { ThemeProvider } from 'styled-components';\n\nconst Wrapper = styled.div`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  & > div {\n    margin-bottom: 20px;\n  }\n`;\n\nexport const LocaleThemeCurrentLocaleTemplate = () => {\n  function setUSALocale(theme?: Theme): Theme {\n    if (theme) {\n      return { ...theme, currentLocale: 'en-US' };\n    }\n    LIGHT_THEME.currentLocale = 'en-US';\n    return LIGHT_THEME;\n  }\n  const [selected, setSelected] = useState<Date | null>(null);\n  const [selected2, setSelected2] = useState<Date | null>(null);\n\n  return (\n    <Wrapper>\n      <Label>Calendar in 'ru' locale</Label>\n      <Calendar\n        selected={selected}\n        onChange={(value: any) => {\n          setSelected(value);\n        }}\n      />\n      <ThemeProvider theme={setUSALocale}>\n        <Label>Calendar in 'en-US' locale</Label>\n        <Calendar\n          selected={selected2}\n          onChange={(value: any) => {\n            setSelected2(value);\n          }}\n        />\n      </ThemeProvider>\n    </Wrapper>\n  );\n};\n"}}},name:"Пример использования календаря в русской и американской локалях"},LocaleThemeNewLocaleStory=()=>(0,jsx_runtime.jsx)(LocaleThemeNewLocaleTemplate,{});LocaleThemeNewLocaleStory.displayName="LocaleThemeNewLocaleStory";const ThemeNewLocale={render:LocaleThemeNewLocaleStory,parameters:{docs:{source:{code:"import { useState } from 'react';\nimport { LIGHT_THEME, Label, Calendar } from '@admiral-ds/react-ui';\nimport type { Theme, Locale } from '@admiral-ds/react-ui';\nimport styled, { ThemeProvider } from 'styled-components';\n\nconst Wrapper = styled.div`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  & > div {\n    margin-bottom: 20px;\n  }\n`;\n\nexport const LocaleThemeNewLocaleTemplate = () => {\n  function setDeLocale(theme?: Theme): Theme {\n    const deLocale: Locale = {\n      /** Число от 0 до 6, где 0 - это воскресенье */\n      firstDayOfWeek: 1,\n      badge: {\n        amountAriaLabel: 'Anzahl',\n      },\n      calendar: {\n        backwardText: 'Zurück',\n        forwardText: 'Vorwärts',\n        nextMonthText: 'Nächster Monat',\n        previousMonthText: 'Vorheriger Monat',\n        returnText: 'Zurück sein',\n        selectYearText: 'Wahl des Jahres',\n        selectMonthText: 'Monatsauswahl',\n      },\n      fileInput: {\n        metricUnits: ['Kb', 'Mb', 'Gb'],\n      },\n      groupActionsPane: {\n        inputPlaceholder: 'In der Tabelle suchen',\n      },\n      hint: {\n        closeButtonAriaLabel: 'Tipp schließen',\n      },\n      modal: {\n        closeButtonAriaLabel: 'Modales Fenster schließen',\n      },\n      paginationOne: {\n        itemsPerPageText: 'Einträge pro Seite:',\n        pageSelectLabel: (page: number, totalPages: number) => `Seite ${page} von ${totalPages}`,\n        pageSizeSelectLabel: (pageSize: number, total: number) => `Einträge ${pageSize} von ${total}`,\n        itemRangeText: (min: number, max: number, total: number) => `${min}–${max} einträge von ${total}`,\n        pageRangeText: (total: number) => `von ${total} ${total === 1 ? 'Seite' : 'Seiten'}`,\n        backwardText: 'Vorherige Seite, auswählen',\n        forwardText: 'Nächste Seite, auswählen',\n      },\n      paginationTwo: {\n        inputPlaceholder: '№ Seiten',\n        itemRangeText: (min: number, max: number, total: number) => `${min}–${max} einträge von ${total}`,\n      },\n      progressStepper: {\n        renderNextStepName: (stepName: string) => `Weiter - ${stepName}`,\n        stepName: ['schritt', 'schritte'],\n        progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>\n          `${activeStepNumber} von ${stepsAmount} ${stepNamePlural}`,\n      },\n      select: {\n        emptyMessage: 'Keine Zufälle',\n      },\n      suggestInput: {\n        emptyMessage: 'Keine Zufälle',\n      },\n      table: {\n        emptyMessage: 'Keine Zufälle',\n      },\n    };\n    if (theme) {\n      return { ...theme, currentLocale: 'de', locales: { ...theme.locales, de: deLocale } };\n    }\n    LIGHT_THEME.currentLocale = 'de';\n    LIGHT_THEME.locales = { ...LIGHT_THEME.locales, de: deLocale };\n    return LIGHT_THEME;\n  }\n  const [selected, setSelected] = useState<Date | null>(null);\n\n  return (\n    <Wrapper>\n      <ThemeProvider theme={setDeLocale}>\n        <Label>Calendar in 'de' locale</Label>\n        <Calendar\n          selected={selected}\n          onChange={(value: any) => {\n            setSelected(value);\n          }}\n        />\n      </ThemeProvider>\n    </Wrapper>\n  );\n};\n"},description:{story:"Пользователь может создать свою локаль. Для этого в объект theme.locales \n        добавляется соответсвующий ключ, значением которого является объект типа Locale.\n        Данный объект содержит в себе перечисление текстовых констант для компонентов библиотеки, а также содержит\n        свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва - число от 0 до 6) обозначает, \n        с какого дня начинается неделя для данной локали, где 0 - это воскресенье."}}},name:"Пример определения новой локали (немецкой)"},LocalePropStory=()=>(0,jsx_runtime.jsx)(LocalePropTemplate,{});LocalePropStory.displayName="LocalePropStory";const ComponentProp={render:LocalePropStory,parameters:{docs:{source:{code:"import { useState } from 'react';\nimport { ProgressStepper, Button } from '@admiral-ds/react-ui';\nimport styled from 'styled-components';\n\nconst Wrapper = styled.div`\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  & > div {\n    margin-bottom: 20px;\n  }\n`;\n\nexport const LocalePropTemplate = () => {\n  const steps = [\n    'Определение стратегии',\n    'Анализ',\n    'Проектирование',\n    'Реализация',\n    'Тестирование',\n    'Внедрение',\n    'Техническая поддержка',\n  ];\n  const [activeStep, setActiveStep] = useState(0);\n  return (\n    <Wrapper>\n      <ProgressStepper\n        steps={steps}\n        activeStep={activeStep}\n        locale={{\n          stepName: ['этап', 'этапов'],\n          renderNextStepName: (stepName: string) => `Далее следует этап - ${stepName}`,\n        }}\n      />\n      <div>\n        <Button\n          dimension=\"s\"\n          disabled={activeStep <= 0}\n          onClick={() => setActiveStep(activeStep - 1)}\n          style={{ marginRight: '40px' }}\n        >\n          Назад\n        </Button>\n        <Button dimension=\"s\" disabled={activeStep >= 6} onClick={() => setActiveStep(activeStep + 1)}>\n          Вперёд\n        </Button>\n      </div>\n    </Wrapper>\n  );\n};\n"},description:{story:"В некоторых случаях может быть необходимо изменить значения текстовых констант для отдельных\n          компонентов. Для этого у компонентов, использующих текстовые константы, есть специальный параметр locale - объект, в\n          котором можно задать альтернативные значения текстовых констант, отличные от тех, что заданы в theme.locales.\n          Текстовая константа, заданная через пропс locale компонента имеет больший приоритет, чем та же константа, заданная в\n          theme.locale."}}},name:"Пример переопределения текстовых констант с помощью пропса locale в компоненте ProgressStepper"};ThemeCurrentLocale.parameters={...ThemeCurrentLocale.parameters,docs:{...ThemeCurrentLocale.parameters?.docs,source:{originalSource:"{\n  render: LocaleThemeCurrentLocaleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: LocaleThemeCurrentLocaleRaw\n      }\n    }\n  },\n  name: 'Пример использования календаря в русской и американской локалях'\n}",...ThemeCurrentLocale.parameters?.docs?.source}}},ThemeNewLocale.parameters={...ThemeNewLocale.parameters,docs:{...ThemeNewLocale.parameters?.docs,source:{originalSource:"{\n  render: LocaleThemeNewLocaleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: LocaleThemeNewLocaleRaw\n      },\n      description: {\n        story: `Пользователь может создать свою локаль. Для этого в объект theme.locales \n        добавляется соответсвующий ключ, значением которого является объект типа Locale.\n        Данный объект содержит в себе перечисление текстовых констант для компонентов библиотеки, а также содержит\n        свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва - число от 0 до 6) обозначает, \n        с какого дня начинается неделя для данной локали, где 0 - это воскресенье.`\n      }\n    }\n  },\n  name: 'Пример определения новой локали (немецкой)'\n}",...ThemeNewLocale.parameters?.docs?.source}}},ComponentProp.parameters={...ComponentProp.parameters,docs:{...ComponentProp.parameters?.docs,source:{originalSource:"{\n  render: LocalePropStory,\n  parameters: {\n    docs: {\n      source: {\n        code: LocalePropRaw\n      },\n      description: {\n        story: `В некоторых случаях может быть необходимо изменить значения текстовых констант для отдельных\n          компонентов. Для этого у компонентов, использующих текстовые константы, есть специальный параметр locale - объект, в\n          котором можно задать альтернативные значения текстовых констант, отличные от тех, что заданы в theme.locales.\n          Текстовая константа, заданная через пропс locale компонента имеет больший приоритет, чем та же константа, заданная в\n          theme.locale.`\n      }\n    }\n  },\n  name: 'Пример переопределения текстовых констант с помощью пропса locale в компоненте ProgressStepper'\n}",...ComponentProp.parameters?.docs?.source}}};const __namedExportsOrder=["ThemeCurrentLocale","ThemeNewLocale","ComponentProp"]},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _defs,_g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_defs||(_defs=react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath",{id:"CloseOutline_svg__a"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"})))),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{clipPath:"url(#CloseOutline_svg__a)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"}))))};__webpack_require__.p},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");const Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.label.withConfig({displayName:"Label",componentId:"sc-13m0084-0"})(["display:block;text-align:left;"," color:var(--admiral-color-Neutral_Neutral50,",");[data-disabled] &{color:var(--admiral-color-Neutral_Neutral30,",");}[data-focus-within] &{color:",";}[data-required-within] &:after{content:' *';color:var(--admiral-color-Error_Error60Main,",");}margin-bottom:8px;"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.theme.color["Error/Error 60 Main"]));Label.displayName="Label";try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProgressStepper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressStepper});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),light=__webpack_require__("./src/components/themes/light/index.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts");const setFirstLetterToUpperCase=(str="")=>str.slice(0,1).toUpperCase()+str.slice(1),convertNumberToIntegerPercent=(num,max=100)=>Math.round(100*num/max);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"ProgressStepper__Wrapper",componentId:"sc-4zqzo6-0"})(["display:flex;flex-direction:column;min-width:388px;"]),ProgressWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"ProgressStepper__ProgressWrapper",componentId:"sc-4zqzo6-1"})(["display:flex;overflow:hidden;height:4px;border-radius:2px;background-color:var(--admiral-color-Neutral_Neutral20,",");"],(p=>p.theme.color["Neutral/Neutral 20"])),Progress=styled_components_browser_esm.Ay.div.withConfig({displayName:"ProgressStepper__Progress",componentId:"sc-4zqzo6-2"})(["width:","%;background-color:var(--admiral-color-Primary_Primary60Main,",");"],(({$percent})=>$percent),(p=>p.theme.color["Primary/Primary 60 Main"])),Header=styled_components_browser_esm.Ay.div.withConfig({displayName:"ProgressStepper__Header",componentId:"sc-4zqzo6-3"})(["display:flex;flex-direction:",";"," margin-bottom:8px;"],(({$mobile})=>$mobile?"column":"row"),(({$mobile})=>!$mobile&&"  justify-content: space-between;")),ActiveStep=styled_components_browser_esm.Ay.div.withConfig({displayName:"ProgressStepper__ActiveStep",componentId:"sc-4zqzo6-4"})([""," color:var(--admiral-color-Neutral_Neutral90,",");"],typography.Il["Body/Body 2 Long"],(p=>p.theme.color["Neutral/Neutral 90"])),ProgressText=styled_components_browser_esm.Ay.div.withConfig({displayName:"ProgressStepper__ProgressText",componentId:"sc-4zqzo6-5"})(["white-space:nowrap;flex-shrink:0;color:var(--admiral-color-Neutral_Neutral50,",");",""],(p=>p.theme.color["Neutral/Neutral 50"]),typography.Il["Caption/Caption 1"]),NextStep=styled_components_browser_esm.Ay.div.withConfig({displayName:"ProgressStepper__NextStep",componentId:"sc-4zqzo6-6"})(["width:100%;text-align:left;margin-top:8px;color:var(--admiral-color-Neutral_Neutral50,",");",""],(p=>p.theme.color["Neutral/Neutral 50"]),typography.Il["Caption/Caption 1"]),ProgressStepper=({steps,activeStep:activeStepProp=-1,displayNextStepName=!0,mobile=!1,locale,...props})=>{const theme=(0,styled_components_browser_esm.DP)()||light.d,stepName=locale?.stepName||theme.locales[theme.currentLocale].progressStepper.stepName,progressText=locale?.progressText||theme.locales[theme.currentLocale].progressStepper.progressText,renderNextStepName=locale?.renderNextStepName||theme.locales[theme.currentLocale].progressStepper.renderNextStepName,stepsAmount=steps.length,activeStep=(max=stepsAmount,(num=activeStepProp)>=0&&num<max?activeStepProp:-1);var max,num;const activeStepNumber=activeStep+1,nextStep=activeStep+1,nextStepContent=renderNextStepName(((str="")=>str.slice(0,1).toLowerCase()+str.slice(1))(steps[nextStep])),fixedStepName=stepName[0],fixedStepNamePlural=stepName[stepName.length-1];return(0,jsx_runtime.jsxs)(Wrapper,{...props,children:[(0,jsx_runtime.jsxs)(Header,{$mobile:mobile,"aria-hidden":!0,children:[(0,jsx_runtime.jsx)(ActiveStep,{children:setFirstLetterToUpperCase(steps[activeStep])}),(0,jsx_runtime.jsx)(ProgressText,{children:progressText(activeStepNumber,stepsAmount,fixedStepNamePlural?.toLowerCase())})]}),(0,jsx_runtime.jsx)(ProgressWrapper,{children:(0,jsx_runtime.jsx)(Progress,{tabIndex:0,role:"progressbar","aria-valuemin":0,"aria-valuemax":stepsAmount,"aria-valuenow":activeStepNumber,"aria-valuetext":`${fixedStepName} ${activeStepNumber}: ${steps[activeStep]}`,$percent:convertNumberToIntegerPercent(activeStepNumber,stepsAmount)})}),displayNextStepName&&steps[nextStep]&&(0,jsx_runtime.jsx)(NextStep,{"aria-hidden":!0,children:nextStepContent})]})};ProgressStepper.displayName="ProgressStepper",ProgressStepper.displayName="ProgressStepper";try{ProgressStepper.displayName="ProgressStepper",ProgressStepper.__docgenInfo={description:"",displayName:"ProgressStepper",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:null,description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:{value:"true"},description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/index.tsx#ProgressStepper"]={docgenInfo:ProgressStepper.__docgenInfo,name:"ProgressStepper",path:"src/components/ProgressStepper/index.tsx#ProgressStepper"})}catch(__react_docgen_typescript_loader_error){}}}]);