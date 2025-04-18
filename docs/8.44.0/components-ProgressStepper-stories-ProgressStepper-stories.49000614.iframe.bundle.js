"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1379],{"./src/components/ProgressStepper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressStepper});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),light=__webpack_require__("./src/components/themes/light/index.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),setFirstLetterToLowerCase=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return str.slice(0,1).toLowerCase()+str.slice(1)},setFirstLetterToUpperCase=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return str.slice(0,1).toUpperCase()+str.slice(1)},convertNumberToIntegerPercent=function(num){var max=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.round(100*num/max)};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  min-width: 388px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  height: 4px;
  border-radius: 2px;
  background-color: var(--admiral-color-Neutral_Neutral20, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: `,`;
  `,`
  margin-bottom: 8px;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  white-space: nowrap;
  flex-shrink: 0;
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  `,`
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  width: 100%;
  text-align: left;
  margin-top: 8px;
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  `,`
`]);return _templateObject6=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject()),ProgressWrapper=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 20"]}),Progress=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return p.theme.color["Primary/Primary 60 Main"]}),Header=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){return param.$mobile?"column":"row"},function(param){return!param.$mobile&&"  justify-content: space-between;"}),ActiveStep=styled_components_browser_esm.Ay.div(_templateObject4(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),ProgressText=styled_components_browser_esm.Ay.div(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 50"]},typography.Il["Caption/Caption 1"]),NextStep=styled_components_browser_esm.Ay.div(_templateObject6(),function(p){return p.theme.color["Neutral/Neutral 50"]},typography.Il["Caption/Caption 1"]),ProgressStepper=function(_param){var steps=_param.steps,tmp=_param.activeStep,activeStepProp=void 0===tmp?-1:tmp,_param_displayNextStepName=_param.displayNextStepName,_param_mobile=_param.mobile,locale=_param.locale,props=_object_without_properties(_param,["steps","activeStep","displayNextStepName","mobile","locale"]),theme=(0,styled_components_browser_esm.DP)()||light.d,stepName=(null==locale?void 0:locale.stepName)||theme.locales[theme.currentLocale].progressStepper.stepName,progressText=(null==locale?void 0:locale.progressText)||theme.locales[theme.currentLocale].progressStepper.progressText,renderNextStepName=(null==locale?void 0:locale.renderNextStepName)||theme.locales[theme.currentLocale].progressStepper.renderNextStepName,stepsAmount=steps.length,activeStep=activeStepProp>=0&&activeStepProp<stepsAmount?activeStepProp:-1,activeStepNumber=activeStep+1,nextStep=activeStep+1,nextStepContent=renderNextStepName(setFirstLetterToLowerCase(steps[nextStep])),fixedStepName=stepName[0],fixedStepNamePlural=stepName[stepName.length-1];return(0,jsx_runtime.jsxs)(Wrapper,_object_spread_props(_object_spread({},props),{children:[(0,jsx_runtime.jsxs)(Header,{$mobile:void 0!==_param_mobile&&_param_mobile,"aria-hidden":!0,children:[(0,jsx_runtime.jsx)(ActiveStep,{children:setFirstLetterToUpperCase(steps[activeStep])}),(0,jsx_runtime.jsx)(ProgressText,{children:progressText(activeStepNumber,stepsAmount,null==fixedStepNamePlural?void 0:fixedStepNamePlural.toLowerCase())})]}),(0,jsx_runtime.jsx)(ProgressWrapper,{children:(0,jsx_runtime.jsx)(Progress,{tabIndex:0,role:"progressbar","aria-valuemin":0,"aria-valuemax":stepsAmount,"aria-valuenow":activeStepNumber,"aria-valuetext":"".concat(fixedStepName," ").concat(activeStepNumber,": ").concat(steps[activeStep]),style:{width:"".concat(convertNumberToIntegerPercent(activeStepNumber,stepsAmount),"%")}})}),(void 0===_param_displayNextStepName||_param_displayNextStepName)&&steps[nextStep]&&(0,jsx_runtime.jsx)(NextStep,{"aria-hidden":!0,children:nextStepContent})]}))};ProgressStepper.displayName="ProgressStepper";try{ProgressStepper.displayName="ProgressStepper",ProgressStepper.__docgenInfo={description:"",displayName:"ProgressStepper",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:null,description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:{value:"true"},description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/index.tsx#ProgressStepper"]={docgenInfo:ProgressStepper.__docgenInfo,name:"ProgressStepper",path:"src/components/ProgressStepper/index.tsx#ProgressStepper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProgressStepper/stories/ProgressStepper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlaygroundExample:()=>PlaygroundExample,VariantsExample:()=>VariantsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressStepper_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ProgressStepper=__webpack_require__("./src/components/ProgressStepper/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var steps=["Название первого шага","Название второго шага","Название третьего шага","Название четвертого шага","Название пятого шага","Название шестого шага"],ProgressStepperPlaygroundTemplate=function(args){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ProgressStepper.z,_object_spread_props(_object_spread({},args),{steps:steps}))})};try{ProgressStepperPlaygroundTemplate.displayName="ProgressStepperPlaygroundTemplate",ProgressStepperPlaygroundTemplate.__docgenInfo={description:"",displayName:"ProgressStepperPlaygroundTemplate",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:null,description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:null,description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/stories/ProgressStepperPlayground.template.tsx#ProgressStepperPlaygroundTemplate"]={docgenInfo:ProgressStepperPlaygroundTemplate.__docgenInfo,name:"ProgressStepperPlaygroundTemplate",path:"src/components/ProgressStepper/stories/ProgressStepperPlayground.template.tsx#ProgressStepperPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./src/components/Typography/typography.ts");function ProgressStepperVariants_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ProgressStepperVariants_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ProgressStepperVariants_template_define_property(target,key,source[key])})}return target}function ProgressStepperVariants_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ProgressStepperVariants_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ProgressStepperVariants_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  margin-bottom: 60px;
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  label {
    display: block;
    margin-bottom: 20px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var Sect=styled_components_browser_esm.Ay.div(_templateObject(),typography.Il["Body/Body 1 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),Section=function(param){var title=param.title,children=param.children;return(0,jsx_runtime.jsxs)(Sect,{children:[(0,jsx_runtime.jsx)("label",{children:(0,jsx_runtime.jsx)("i",{children:title})}),children]})},ProgressStepperVariants_template_steps=["название первого шага","название второго шага","название третьего шага","название четвертого шага","название пятого шага","название шестого шага"],steps2=["название первого этапа","название второго этапа","название третьего этапа","название четвертого этапа","название пятого этапа","название шестого этапа"],ProgressStepperVariantsTemplate=function(args){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Section,{title:"Первый шаг",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:0}))}),(0,jsx_runtime.jsx)(Section,{title:"Середина прогресса",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:2}))}),(0,jsx_runtime.jsx)(Section,{title:"Последний шаг",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:5}))}),(0,jsx_runtime.jsx)(Section,{title:"Первый шаг - Adaptive (Mobile)",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:0,mobile:!0}))}),(0,jsx_runtime.jsx)(Section,{title:"Середина прогресса - Adaptive (Mobile)",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:2,mobile:!0}))}),(0,jsx_runtime.jsx)(Section,{title:"Последний шаг - Adaptive (Mobile)",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:5,mobile:!0}))}),(0,jsx_runtime.jsx)(Section,{title:"Кастомная подпись о следующем шаге",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:2,locale:{renderNextStepName:function(nextStepName){return"Далее следует шаг: ".concat(nextStepName)}}}))}),(0,jsx_runtime.jsx)(Section,{title:"Отключение подписи о следующем шаге",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:ProgressStepperVariants_template_steps,activeStep:2,displayNextStepName:!1,mobile:!0}))}),(0,jsx_runtime.jsx)(Section,{title:"Пример настройки названия шага",children:(0,jsx_runtime.jsx)(ProgressStepper.z,ProgressStepperVariants_template_object_spread_props(ProgressStepperVariants_template_object_spread({},args),{steps:steps2,activeStep:2,locale:{stepName:["этап","этапов"]}}))})]})};try{ProgressStepperVariantsTemplate.displayName="ProgressStepperVariantsTemplate",ProgressStepperVariantsTemplate.__docgenInfo={description:"",displayName:"ProgressStepperVariantsTemplate",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:null,description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:null,description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/stories/ProgressStepperVariants.template.tsx#ProgressStepperVariantsTemplate"]={docgenInfo:ProgressStepperVariantsTemplate.__docgenInfo,name:"ProgressStepperVariantsTemplate",path:"src/components/ProgressStepper/stories/ProgressStepperVariants.template.tsx#ProgressStepperVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}let ProgressStepperPlayground_templateraw_namespaceObject=`import * as React from 'react';
import { ProgressStepper } from '@admiral-ds/react-ui';
import type { ProgressStepperProps } from '@admiral-ds/react-ui';

const steps = [
  'Название первого шага',
  'Название второго шага',
  'Название третьего шага',
  'Название четвертого шага',
  'Название пятого шага',
  'Название шестого шага',
];

export const ProgressStepperPlaygroundTemplate = (args: ProgressStepperProps) => {
  return (
    <>
      <ProgressStepper {...args} steps={steps} />
    </>
  );
};
`,ProgressStepperVariants_templateraw_namespaceObject=`import { ProgressStepper, typography } from '@admiral-ds/react-ui';
import type { ProgressStepperProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Sect = styled.div\`
  margin-bottom: 60px;
  \${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
  label {
    display: block;
    margin-bottom: 20px;
  }
\`;

interface SectionProps {
  title: string;
  children: React.ReactNode;
}
const Section = ({ title, children }: SectionProps) => (
  <Sect>
    <label>
      <i>{title}</i>
    </label>
    {children}
  </Sect>
);

const steps = [
  'название первого шага',
  'название второго шага',
  'название третьего шага',
  'название четвертого шага',
  'название пятого шага',
  'название шестого шага',
];
const steps2 = [
  'название первого этапа',
  'название второго этапа',
  'название третьего этапа',
  'название четвертого этапа',
  'название пятого этапа',
  'название шестого этапа',
];

export const ProgressStepperVariantsTemplate = (args: ProgressStepperProps) => {
  return (
    <>
      <Section title="Первый шаг">
        <ProgressStepper {...args} steps={steps} activeStep={0} />
      </Section>
      <Section title="Середина прогресса">
        <ProgressStepper {...args} steps={steps} activeStep={2} />
      </Section>
      <Section title="Последний шаг">
        <ProgressStepper {...args} steps={steps} activeStep={5} />
      </Section>
      <Section title="Первый шаг - Adaptive (Mobile)">
        <ProgressStepper {...args} steps={steps} activeStep={0} mobile />
      </Section>
      <Section title="Середина прогресса - Adaptive (Mobile)">
        <ProgressStepper {...args} steps={steps} activeStep={2} mobile />
      </Section>
      <Section title="Последний шаг - Adaptive (Mobile)">
        <ProgressStepper {...args} steps={steps} activeStep={5} mobile />
      </Section>
      <Section title="Кастомная подпись о следующем шаге">
        <ProgressStepper
          {...args}
          steps={steps}
          activeStep={2}
          locale={{ renderNextStepName: (nextStepName) => \`Далее следует шаг: \${nextStepName}\` }}
        />
      </Section>
      <Section title="Отключение подписи о следующем шаге">
        <ProgressStepper {...args} steps={steps} activeStep={2} displayNextStepName={false} mobile />
      </Section>
      <Section title="Пример настройки названия шага">
        <ProgressStepper {...args} steps={steps2} activeStep={2} locale={{ stepName: ['этап', 'этапов'] }} />
      </Section>
    </>
  );
};
`;function ProgressStepper_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ProgressStepper_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ProgressStepper_stories_define_property(target,key,source[key])})}return target}function ProgressStepper_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ProgressStepper_stories_templateObject(){var data=ProgressStepper_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return ProgressStepper_stories_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=ProgressStepper_stories_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return _templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(ProgressStepper_stories_templateObject()),Separator=styled_components_browser_esm.Ay.div(_templateObject1());let ProgressStepper_stories={title:"Admiral-2.1/ProgressStepper",decorators:void 0,component:ProgressStepper.z,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент Progress Stepper — визуальное отображение пользовательского прогресса в виде заполняющейся линии. Уведомляет пользователя о текущем положении на пути при выполнении конкретной задачи.",(0,jsx_runtime.jsx)(Separator,{}),"Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.",(0,jsx_runtime.jsx)(Separator,{}),"Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине, минимальная ширина 388px.",(0,jsx_runtime.jsx)(Separator,{}),"На мобильных устройствах применяется компонент Stepper Progress Mobile. Использование строки названия следующего шага — опционально."]})},{}),layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16832"}},argTypes:{mobile:{control:{type:"boolean"}},displayNextStepName:{control:{type:"boolean"}},activeStep:{control:{type:"number"}},steps:{control:!1},locale:{control:!1}}};var PlaygroundExample={render:function(props){return(0,jsx_runtime.jsx)(ProgressStepperPlaygroundTemplate,ProgressStepper_stories_object_spread({},props))},parameters:{docs:{source:{code:ProgressStepperPlayground_templateraw_namespaceObject}}},name:"StepperProgress. Playground."},VariantsExample={render:function(props){return(0,jsx_runtime.jsx)(ProgressStepperVariantsTemplate,ProgressStepper_stories_object_spread({},props))},parameters:{docs:{source:{code:ProgressStepperVariants_templateraw_namespaceObject}}},name:"StepperProgress. Примеры использования."};PlaygroundExample.parameters={...PlaygroundExample.parameters,docs:{...PlaygroundExample.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: ProgressStepperPlaygroundRaw
      }
    }
  },
  name: 'StepperProgress. Playground.'
}`,...PlaygroundExample.parameters?.docs?.source}}},VariantsExample.parameters={...VariantsExample.parameters,docs:{...VariantsExample.parameters?.docs,source:{originalSource:`{
  render: VariantsStory,
  parameters: {
    docs: {
      source: {
        code: ProgressStepperVariantsRaw
      }
    }
  },
  name: 'StepperProgress. Примеры использования.'
}`,...VariantsExample.parameters?.docs?.source}}};let __namedExportsOrder=["PlaygroundExample","VariantsExample"]}}]);
//# sourceMappingURL=components-ProgressStepper-stories-ProgressStepper-stories.49000614.iframe.bundle.js.map