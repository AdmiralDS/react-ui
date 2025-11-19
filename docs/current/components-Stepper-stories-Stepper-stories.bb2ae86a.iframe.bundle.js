"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7563],{"./src/components/Stepper/stories/Stepper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdaptiveExample:()=>AdaptiveExample,ClickPropExample:()=>ClickPropExample,ClickableLinksExample:()=>ClickableLinksExample,CustomStepContentExample:()=>CustomStepContentExample,MobileExample:()=>MobileExample,Playground:()=>Playground,PreviousStepsExample:()=>PreviousStepsExample,ProgressCustomExample:()=>ProgressCustomExample,ProgressExample:()=>ProgressExample,ProgressLineClampStepExample:()=>ProgressLineClampStepExample,ProgressMobileExample:()=>ProgressMobileExample,ProgressNextStepExample:()=>ProgressNextStepExample,ProgressPercentageExample:()=>ProgressPercentageExample,StepKindsExample:()=>StepKindsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Stepper_stories});var _path,StepCompleted_path,StepError_path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),StepperContext=(0,react.createContext)({orientation:"horizontal",activeStep:-1,lineClamp:3,stepsAmount:0,progressMode:!1,displayNextStepName:!0,progressFormat:"steps"});StepperContext.displayName="StepperContext";var typography=__webpack_require__("./src/components/Typography/typography.ts");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgStep=function SvgStep(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},props),_path||(_path=react.createElement("path",{fill:"#D6D8DD",fillRule:"evenodd",d:"M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-5.4a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2",clipRule:"evenodd"})))};__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
  width: 100%;
  margin: 0 0 8px 0;
  [data-orientation='vertical'] & {
    flex-direction: column;
    width: 20px;
    margin: 0 8px 0 0;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  margin: 0 4px 0 0;
  [data-orientation='vertical'] & {
    margin: 0 0 4px 0;
  }
  [data-active='true'] & {
    path {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }
  [data-error='true'] & {
    path {
      fill: var(--admiral-color-Error_Error60Main, `,`);
    }
  }
  [data-warning='true'] & {
    path {
      fill: var(--admiral-color-Warning_Warning50Main, `,`);
    }
  }
  [data-disabled='true'] & {
    path {
      fill: var(--admiral-color-Primary_Primary30, `,`);
    }
  }
  flex-shrink: 0;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  height: 2px;
  width: 100%;
  [data-orientation='vertical'] & {
    height: 100%;
    width: 2px;
  }
  background-color: var(--admiral-color-Neutral_Neutral20, `,`);
  [data-completed='true'] & {
    background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  }
  [data-error='true'] & {
    background-color: var(--admiral-color-Error_Error60Main, `,`);
  }
  [data-warning='true'] & {
    background-color: var(--admiral-color-Warning_Warning50Main, `,`);
  }
  [data-disabled='true'] & {
    background-color: var(--admiral-color-Primary_Primary30, `,`);
  }
  border-radius: 1px;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  flex-direction: column;
  [data-orientation='vertical'] & {
    flex-direction: row;
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  &:hover svg {
    path {
      fill: `,`;
    }
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  &:hover `,` {
    background-color: `,`;
  }
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: `,`;
  `,`
  background: none;
  padding: 0;
  margin: 0;
  text-align: left;
  border: none;
  text-decoration: none;
  `,`
  `,`
  `,`

    &:focus {
    outline: none;
    &:before {
      position: absolute;
      content: '';
      border: 2px solid var(--admiral-color-Primary_Primary60Main, `,`);
      border-radius: var(--admiral-border-radius-Medium, `,`);
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
    }
  }
  &:focus,
  & > `,` {
    outline: none;
  }
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  display: flex;
  width: 100%;
  `,`
  [data-orientation='vertical'] & {
    margin: 0 0 20px 0;
  }
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: `,`;
  overflow: hidden;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  [data-disabled='true'] & {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }
  `,`
  margin: 0 12px 0 0;
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding: 0;
  `,`

  & > * {
    padding: 2px;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  min-width: 388px;
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: `,`;
  `,`
  margin-bottom: 8px;
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: `,`;
  overflow: hidden;
`]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal([`
  white-space: nowrap;
  flex-shrink: 0;
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  `,`
`]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal([`
  display: flex;
  overflow: hidden;
  height: 4px;
  border-radius: 2px;
  background-color: var(--admiral-color-Neutral_Neutral20, `,`);
`]);return _templateObject14=function _templateObject(){return data},data}function _templateObject15(){var data=_tagged_template_literal([`
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  transition: width 0.3s ease;
  border-radius: 2px;
`]);return _templateObject15=function _templateObject(){return data},data}function _templateObject16(){var data=_tagged_template_literal([`
  width: 100%;
  text-align: left;
  margin-top: 8px;
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  `,`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: `,`;
  overflow: hidden;
`]);return _templateObject16=function _templateObject(){return data},data}var StepTrack=styled_components_browser_esm.Ay.div(_templateObject()),StepIcon=(0,styled_components_browser_esm.Ay)(SvgStep)(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Error/Error 60 Main"]},function(p){return p.theme.color["Warning/Warning 50 Main"]},function(p){return p.theme.color["Primary/Primary 30"]}),StepRail=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 20"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Error/Error 60 Main"]},function(p){return p.theme.color["Warning/Warning 50 Main"]},function(p){return p.theme.color["Primary/Primary 30"]}),StepContentWrapper=styled_components_browser_esm.Ay.span(_templateObject3()),clickableCss=(0,styled_components_browser_esm.AH)(_templateObject4(),function(param){var $error=param.$error,$warning=param.$warning,theme=param.theme;return $error?"var(--admiral-color-Error_Error70, ".concat(theme.color["Error/Error 70"],")"):$warning?"var(--admiral-color-Warning_Warning70, ".concat(theme.color["Warning/Warning 70"],")"):"var(--admiral-color-Primary_Primary70, ".concat(theme.color["Primary/Primary 70"],")")}),clickableNotActiveCss=(0,styled_components_browser_esm.AH)(_templateObject5(),StepRail,function(param){var $error=param.$error,$warning=param.$warning,theme=param.theme;return $error?"var(--admiral-color-Error_Error70, ".concat(theme.color["Error/Error 70"],")"):$warning?"var(--admiral-color-Warning_Warning70, ".concat(theme.color["Warning/Warning 70"],")"):"var(--admiral-color-Primary_Primary70, ".concat(theme.color["Primary/Primary 70"],")")}),StepWrapper=styled_components_browser_esm.Ay.li(_templateObject6(),function(param){var $orientation=param.$orientation,$stepWidth=param.$stepWidth,$stepsAmount=param.$stepsAmount,$mobile=param.$mobile;return $stepWidth?"".concat("number"==typeof $stepWidth?"".concat($stepWidth,"px"):$stepWidth):$mobile?"horizontal"===$orientation?"188px":"224px":"horizontal"===$orientation?"".concat(100/$stepsAmount,"%"):"100%"},function(param){return param.$mobile&&"flex-shrink: 0;"},function(param){return param.$clickable&&"cursor: pointer;"},function(param){return param.$clickable&&clickableCss},function(param){var $clickable=param.$clickable,$active=param.$active;return $clickable&&!$active&&clickableNotActiveCss},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return(0,borderRadius.VM)(p.theme.shape)},StepContentWrapper),ContentWrapper=styled_components_browser_esm.Ay.div(_templateObject7(),function(param){return param.$withTooltip&&"cursor: pointer;"}),Content=styled_components_browser_esm.Ay.div(_templateObject8(),function(param){var $lineClamp=param.$lineClamp;return 1===$lineClamp?1:2===$lineClamp?2:3},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 30"]},typography.Il["Body/Body 2 Long"]),List=styled_components_browser_esm.Ay.ul(_templateObject9(),function(param){return"horizontal"===param.$orientation?`
flex-direction: row;
overflow-x: scroll;
`:`
flex-direction: column;
`}),ProgressWrapper=styled_components_browser_esm.Ay.div(_templateObject10()),ProgressHeader=styled_components_browser_esm.Ay.div(_templateObject11(),function(param){return param.$mobile?"column":"row"},function(param){return!param.$mobile&&"justify-content: space-between;"}),ProgressActiveStep=styled_components_browser_esm.Ay.div(_templateObject12(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]},function(param){var $lineClamp=param.$lineClamp;return 1===$lineClamp?1:2===$lineClamp?2:3}),ProgressText=styled_components_browser_esm.Ay.div(_templateObject13(),function(p){return p.theme.color["Neutral/Neutral 50"]},typography.Il["Body/Body 2 Long"]),ProgressBarWrapper=styled_components_browser_esm.Ay.div(_templateObject14(),function(p){return p.theme.color["Neutral/Neutral 20"]}),ProgressBar=styled_components_browser_esm.Ay.div(_templateObject15(),function(p){return p.theme.color["Primary/Primary 60 Main"]}),ProgressNextStep=styled_components_browser_esm.Ay.div(_templateObject16(),function(p){return p.theme.color["Neutral/Neutral 50"]},typography.Il["Caption/Caption 1"],function(param){var $lineClamp=param.$lineClamp;return 1===$lineClamp?1:2===$lineClamp?2:3}),utils_setFirstLetterToLowerCase=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return str.slice(0,1).toLowerCase()+str.slice(1).toLocaleLowerCase()},utils_setFirstLetterToUpperCase=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return str.slice(0,1).toUpperCase()+str.slice(1).toLocaleLowerCase()},utils_convertNumberToIntegerPercent=function(num){var max=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.round(100*num/max)},utils_getPluralForm=function(num,forms){var normalized=void 0!==forms[2]?forms:[forms[0],forms[1],forms[1]],n=Math.abs(num)%100,n1=n%10;return n>10&&n<20?normalized[2]:n1>1&&n1<5?normalized[1]:1===n1?normalized[0]:normalized[2]},light=__webpack_require__("./src/components/themes/light/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Stepper=function(_param){var _param_orientation=_param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,_param_activeStep=_param.activeStep,activeStep=void 0===_param_activeStep?-1:_param_activeStep,_param_lineClamp=_param.lineClamp,lineClamp=void 0===_param_lineClamp?3:_param_lineClamp,stepWidth=_param.stepWidth,_param_hideLastStepLine=_param.hideLastStepLine,hideLastStepLine=void 0!==_param_hideLastStepLine&&_param_hideLastStepLine,mobile=_param.mobile,_param_progressMode=_param.progressMode,progressMode=void 0!==_param_progressMode&&_param_progressMode,_param_displayNextStepName=_param.displayNextStepName,displayNextStepName=void 0===_param_displayNextStepName||_param_displayNextStepName,_param_progressFormat=_param.progressFormat,progressFormat=void 0===_param_progressFormat?"steps":_param_progressFormat,progressLocale=_param.progressLocale,children=_param.children,props=_object_without_properties(_param,["orientation","activeStep","lineClamp","stepWidth","hideLastStepLine","mobile","progressMode","displayNextStepName","progressFormat","progressLocale","children"]),listRef=(0,react.useRef)(null),steps=react.Children.toArray(children).map(function(step,index){return(0,react.isValidElement)(step)?activeStep===index?(0,react.cloneElement)(step,_object_spread({index:index,role:"listitem","aria-current":"step",hideLine:index===react.Children.toArray(children).length-1&&hideLastStepLine},step.props)):(0,react.cloneElement)(step,_object_spread({index:index,role:"listitem",hideLine:index===react.Children.toArray(children).length-1&&hideLastStepLine},step.props)):null}),stepsAmount=steps.length,contextValue=(0,react.useMemo)(function(){return{activeStep:activeStep,orientation:orientation,lineClamp:lineClamp,stepsAmount:stepsAmount,stepWidth:stepWidth,mobile:mobile,progressMode:progressMode,displayNextStepName:displayNextStepName,progressFormat:progressFormat,progressLocale:progressLocale}},[activeStep,orientation,lineClamp,stepWidth,stepsAmount,mobile,progressMode,displayNextStepName,progressFormat,progressLocale]);if((0,react.useEffect)(function(){if(listRef.current&&mobile&&"horizontal"===orientation){var activeNode=listRef.current.childNodes[activeStep]||listRef.current.firstChild;listRef.current.scrollLeft=0===activeStep?activeNode.offsetLeft:activeNode.offsetLeft-16}},[activeStep,steps]),progressMode){var _theme_locales_theme_currentLocale_progressStepper,_theme_locales_theme_currentLocale_progressStepper1,_theme_locales_theme_currentLocale_progressStepper2,theme=(0,styled_components_browser_esm.DP)()||light.d,stepNames=react.Children.toArray(children).map(function(step){return(0,react.isValidElement)(step)&&"string"==typeof step.props.children?step.props.children:""}).filter(Boolean),stepsAmount1=stepNames.length,currentStep=Math.max(0,Math.min(activeStep,stepsAmount1-1)),currentStepNumber=currentStep+1,nextStepName=stepNames[currentStep+1],stepName=(null==progressLocale?void 0:progressLocale.stepName)||(null==(_theme_locales_theme_currentLocale_progressStepper=theme.locales[theme.currentLocale].progressStepper)?void 0:_theme_locales_theme_currentLocale_progressStepper.stepName)||["шага","шагов","шагов"],progressText=(null==progressLocale?void 0:progressLocale.progressText)||(null==(_theme_locales_theme_currentLocale_progressStepper1=theme.locales[theme.currentLocale].progressStepper)?void 0:_theme_locales_theme_currentLocale_progressStepper1.progressText)||function(activeStepNumber,stepsAmount,stepNamePlural){return"".concat(activeStepNumber," из ").concat(stepsAmount," ").concat(stepNamePlural)},renderNextStepName=(null==progressLocale?void 0:progressLocale.renderNextStepName)||(null==(_theme_locales_theme_currentLocale_progressStepper2=theme.locales[theme.currentLocale].progressStepper)?void 0:_theme_locales_theme_currentLocale_progressStepper2.renderNextStepName)||function(nextStepName){return"Далее - ".concat(utils_setFirstLetterToLowerCase(nextStepName))},progressPercentage=utils_convertNumberToIntegerPercent(currentStepNumber,stepsAmount1),stepNamePlural=utils_getPluralForm(stepsAmount1,stepName),progressTextContent="percentage"===progressFormat?"".concat(progressPercentage,"%"):progressText(currentStepNumber,stepsAmount1,stepNamePlural);return(0,jsx_runtime.jsx)(StepperContext.Provider,{value:contextValue,children:(0,jsx_runtime.jsxs)(ProgressWrapper,{className:props.className,style:props.style,"data-testid":"progress-wrapper",children:[(0,jsx_runtime.jsxs)(ProgressHeader,{$mobile:mobile,"aria-hidden":!0,children:[(0,jsx_runtime.jsx)(ProgressActiveStep,{$lineClamp:lineClamp,"data-testid":"progress-active-step",children:utils_setFirstLetterToUpperCase(stepNames[currentStep])}),(0,jsx_runtime.jsx)(ProgressText,{"data-testid":"progress-text",children:progressTextContent})]}),(0,jsx_runtime.jsx)(ProgressBarWrapper,{children:(0,jsx_runtime.jsx)(ProgressBar,{tabIndex:0,role:"progressbar","aria-valuemin":0,"aria-valuemax":stepsAmount1,"aria-valuenow":currentStepNumber,"aria-valuetext":"".concat(stepName[0]," ").concat(currentStepNumber,": ").concat(stepNames[currentStep]),style:{width:"".concat(progressPercentage,"%")}})}),displayNextStepName&&nextStepName&&(0,jsx_runtime.jsx)(ProgressNextStep,{$lineClamp:lineClamp,"aria-hidden":!0,"data-testid":"progress-next-step",children:renderNextStepName(utils_setFirstLetterToLowerCase(nextStepName))})]})})}return(0,jsx_runtime.jsx)(StepperContext.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(List,_object_spread_props(_object_spread({ref:listRef,role:"list",$orientation:orientation},props),{children:steps}))})};Stepper.displayName="Stepper";try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"",displayName:"Stepper",props:{orientation:{defaultValue:{value:"horizontal"},description:"Ориентация компонента",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activeStep:{defaultValue:{value:"-1"},description:`Индекс активного шага, нумерация шагов начинается с 0.
Этот параметр будет перезаписан, если какому-то шагу задан параметр active равный true`,name:"activeStep",required:!1,type:{name:"number"}},lineClamp:{defaultValue:{value:"3"},description:"Количество строк в шаге, все шаги по высоте вмещают одинаковое количество строк",name:"lineClamp",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},stepWidth:{defaultValue:null,description:`Ширина шага
Если данный параметр не задан, то ширина шага будет адаптивной:
- при горизонтальной ориентации все шаги будут в равной степени делить между собой свободное пространство (ширину степпера);
- при вертикальной ориентации каждый шаг займет 100% ширины степпера.
То есть шаги будут пропорционально увеличиваться/уменьшаться при изменении ширины степпера.`,name:"stepWidth",required:!1,type:{name:"string | number"}},hideLastStepLine:{defaultValue:{value:"false"},description:"В последнем шаге опционально можно выключать статусную полосу",name:"hideLastStepLine",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:`Мобильное отображение компонента
В мобильной версии компонента применяется только горизонтальный вариант компонента, ширина шагов фиксирована,
по мере прохождения шагов происходит автоматический скролл по горизонтали`,name:"mobile",required:!1,type:{name:"boolean"}},progressMode:{defaultValue:{value:"false"},description:"Включить режим отображения Progress для большого количества шагов",name:"progressMode",required:!1,type:{name:"boolean"}},displayNextStepName:{defaultValue:{value:"true"},description:"Отображение/скрытие подписи о следующем шаге в режиме Progress",name:"displayNextStepName",required:!1,type:{name:"boolean"}},progressFormat:{defaultValue:{value:"steps"},description:"Формат отображения прогресса: 'percentage' - проценты, 'steps' - в шагах",name:"progressFormat",required:!1,type:{name:"enum",value:[{value:'"percentage"'},{value:'"steps"'}]}},progressLocale:{defaultValue:null,description:"Объект локализации для режима Progress",name:"progressLocale",required:!1,type:{name:"{ stepName?: [string, string] | [string, string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/components/Stepper/index.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}try{Step.displayName="Step",Step.__docgenInfo={description:"",displayName:"Step",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},index:{defaultValue:{value:"-1"},description:"",name:"index",required:!1,type:{name:"number"}},hideLine:{defaultValue:null,description:"",name:"hideLine",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((step: { index: number; active: boolean; completed: boolean; disabled?: boolean; }) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#Step"]={docgenInfo:Step.__docgenInfo,name:"Step",path:"src/components/Stepper/index.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}try{StepContent.displayName="StepContent",StepContent.__docgenInfo={description:"",displayName:"StepContent",props:{tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"Partial<ITooltipProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#StepContent"]={docgenInfo:StepContent.__docgenInfo,name:"StepContent",path:"src/components/Stepper/index.tsx#StepContent"})}catch(__react_docgen_typescript_loader_error){}try{fitLimit.displayName="fitLimit",fitLimit.__docgenInfo={description:"Функция проверяет входит ли число в интервал чисел",displayName:"fitLimit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#fitLimit"]={docgenInfo:fitLimit.__docgenInfo,name:"fitLimit",path:"src/components/Stepper/index.tsx#fitLimit"})}catch(__react_docgen_typescript_loader_error){}try{setFirstLetterToLowerCase.displayName="setFirstLetterToLowerCase",setFirstLetterToLowerCase.__docgenInfo={description:"Функция переводит первую буквы строки в нижний регистр",displayName:"setFirstLetterToLowerCase",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#setFirstLetterToLowerCase"]={docgenInfo:setFirstLetterToLowerCase.__docgenInfo,name:"setFirstLetterToLowerCase",path:"src/components/Stepper/index.tsx#setFirstLetterToLowerCase"})}catch(__react_docgen_typescript_loader_error){}try{setFirstLetterToUpperCase.displayName="setFirstLetterToUpperCase",setFirstLetterToUpperCase.__docgenInfo={description:"Функция переводит первую буквы строки в верхний регистр",displayName:"setFirstLetterToUpperCase",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#setFirstLetterToUpperCase"]={docgenInfo:setFirstLetterToUpperCase.__docgenInfo,name:"setFirstLetterToUpperCase",path:"src/components/Stepper/index.tsx#setFirstLetterToUpperCase"})}catch(__react_docgen_typescript_loader_error){}try{convertNumberToIntegerPercent.displayName="convertNumberToIntegerPercent",convertNumberToIntegerPercent.__docgenInfo={description:"Функция возвращает соотношение чисел друг к другу в процентах",displayName:"convertNumberToIntegerPercent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#convertNumberToIntegerPercent"]={docgenInfo:convertNumberToIntegerPercent.__docgenInfo,name:"convertNumberToIntegerPercent",path:"src/components/Stepper/index.tsx#convertNumberToIntegerPercent"})}catch(__react_docgen_typescript_loader_error){}try{getPluralForm.displayName="getPluralForm",getPluralForm.__docgenInfo={description:"Функция для получения правильной формы слова в зависимости от числа",displayName:"getPluralForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#getPluralForm"]={docgenInfo:getPluralForm.__docgenInfo,name:"getPluralForm",path:"src/components/Stepper/index.tsx#getPluralForm"})}catch(__react_docgen_typescript_loader_error){}try{getStepsPluralForm.displayName="getStepsPluralForm",getStepsPluralForm.__docgenInfo={description:"Функция для получения правильной формы слова для общего количества шагов",displayName:"getStepsPluralForm",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/index.tsx#getStepsPluralForm"]={docgenInfo:getStepsPluralForm.__docgenInfo,name:"getStepsPluralForm",path:"src/components/Stepper/index.tsx#getStepsPluralForm"})}catch(__react_docgen_typescript_loader_error){}function StepCompleted_extends(){return(StepCompleted_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgStepCompleted=function SvgStepCompleted(props){return react.createElement("svg",StepCompleted_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},props),StepCompleted_path||(StepCompleted_path=react.createElement("path",{fill:"#0062FF",fillRule:"evenodd",d:"M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18m5.471-12.405c.26.26.26.683 0 .943l-6 6a.667.667 0 0 1-.942 0l-3.334-3.333a.667.667 0 1 1 .943-.943L9 12.124l5.529-5.529c.26-.26.682-.26.942 0",clipRule:"evenodd"})))};function StepError_extends(){return(StepError_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}__webpack_require__.p;var SvgStepError=function SvgStepError(props){return react.createElement("svg",StepError_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},props),StepError_path||(StepError_path=react.createElement("path",{fill:"#D92020",fillRule:"evenodd",d:"M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.007-6.929a.857.857 0 0 0 .857-.857V5.357a.857.857 0 1 0-1.714 0v5.857c0 .474.384.857.857.857m.857 2.572a.857.857 0 1 0-1.714 0 .857.857 0 0 0 1.714 0",clipRule:"evenodd"})))};function Step_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Step_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Step_define_property(target,key,source[key])})}return target}function Step_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Step_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Step_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Step_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=Step_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Step_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.p;var Step_Step=function(_param){var _param_index=_param.index,index=void 0===_param_index?-1:_param_index,link=_param.link,error=_param.error,warning=_param.warning,propDisabled=_param.disabled,propCompleted=_param.completed,propActive=_param.active,hideLine=_param.hideLine,onClick=_param.onClick,children=_param.children,props=Step_object_without_properties(_param,["index","link","error","warning","disabled","completed","active","hideLine","onClick","children"]),_useContext=(0,react.useContext)(StepperContext),activeStep=_useContext.activeStep,orientation=_useContext.orientation,stepWidth=_useContext.stepWidth,stepsAmount=_useContext.stepsAmount,mobile=_useContext.mobile,clickable=!propDisabled&&(!!onClick||!!link)&&!!propCompleted,active=void 0!==propActive?propActive:activeStep===index,completed=!!propCompleted&&!propDisabled,disabled=!completed&&!active||!!propDisabled,icon=error||warning?SvgStepError:completed?SvgStepCompleted:SvgStep,stepRef=(0,react.useRef)(null),extraProps=clickable?link?{$clickable:!0,as:"a",href:link}:{$clickable:!0,as:"button",type:"button",disabled:disabled}:{$clickable:!1};return(0,jsx_runtime.jsx)(StepWrapper,Step_object_spread_props(Step_object_spread({ref:stepRef,"data-orientation":orientation,$orientation:orientation,"data-error":error,$error:error,"data-warning":warning,$warning:warning,"data-completed":completed,"data-active":active,$active:active,"data-disabled":propDisabled,$stepWidth:stepWidth,$stepsAmount:stepsAmount,$mobile:mobile,onClick:function(){disabled||null==onClick||onClick({index:index,active:active,completed:completed,disabled:disabled})}},extraProps,props),{children:(0,jsx_runtime.jsxs)(StepContentWrapper,{tabIndex:-1,children:[(0,jsx_runtime.jsxs)(StepTrack,{"aria-hidden":!0,children:[(0,jsx_runtime.jsx)(StepIcon,{as:icon,width:20,height:20}),!hideLine&&(0,jsx_runtime.jsx)(StepRail,{})]}),children]})}))};Step_Step.displayName="Step";try{Step_Step.displayName="Step",Step_Step.__docgenInfo={description:"",displayName:"Step",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},warning:{defaultValue:null,description:"",name:"warning",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},completed:{defaultValue:null,description:"",name:"completed",required:!1,type:{name:"boolean"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}},index:{defaultValue:{value:"-1"},description:"",name:"index",required:!1,type:{name:"number"}},hideLine:{defaultValue:null,description:"",name:"hideLine",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((step: { index: number; active: boolean; completed: boolean; disabled?: boolean; }) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/Step.tsx#Step"]={docgenInfo:Step_Step.__docgenInfo,name:"Step",path:"src/components/Stepper/Step.tsx#Step"})}catch(__react_docgen_typescript_loader_error){}var Tooltip=__webpack_require__("./src/components/Tooltip/index.tsx"),checkOverflow=__webpack_require__("./src/components/common/utils/checkOverflow.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function StepContent_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepContent_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepContent_define_property(target,key,source[key])})}return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var StepContent_StepContent=function(param){var children=param.children,tooltipProps=param.tooltipProps,lineClamp=(0,react.useContext)(StepperContext).lineClamp,wrapperRef=(0,react.useRef)(null),contentRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),overflow=_useState[0],setOverflow=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),tooltipVisible=_useState1[0],setTooltipVisible=_useState1[1];return(0,react.useLayoutEffect)(function(){contentRef.current&&(0,checkOverflow.p)(contentRef.current)!==overflow&&setOverflow((0,checkOverflow.p)(contentRef.current))},[tooltipVisible,setOverflow]),(0,react.useLayoutEffect)(function(){var show=function show(){setTooltipVisible(!0)},hide=function hide(){setTooltipVisible(!1)},wrapper=wrapperRef.current;if(wrapper)return wrapper.addEventListener("mouseenter",show),wrapper.addEventListener("mouseleave",hide),function(){wrapper.removeEventListener("mouseenter",show),wrapper.removeEventListener("mouseleave",hide)}},[setTooltipVisible]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ContentWrapper,{ref:wrapperRef,$withTooltip:overflow,children:(0,jsx_runtime.jsx)(Content,{ref:contentRef,$lineClamp:lineClamp,"data-testid":"step-content",children:children})}),tooltipVisible&&overflow&&(0,jsx_runtime.jsx)(Tooltip.m,StepContent_object_spread({targetElement:wrapperRef.current,renderContent:function(){return children}},tooltipProps))]})};StepContent_StepContent.displayName="StepContent";try{StepContent_StepContent.displayName="StepContent",StepContent_StepContent.__docgenInfo={description:"",displayName:"StepContent",props:{tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"Partial<ITooltipProps>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/StepContent.tsx#StepContent"]={docgenInfo:StepContent_StepContent.__docgenInfo,name:"StepContent",path:"src/components/Stepper/StepContent.tsx#StepContent"})}catch(__react_docgen_typescript_loader_error){}function StepperPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StepperPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepperPlayground_template_define_property(target,key,source[key])})}return target}function StepperPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StepperPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StepperPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StepperPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StepperPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StepperPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var steps=[{key:0,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",completed:!0},{key:1,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",completed:!0},{key:2,content:"Активный шаг, текст занимает максимум три строки"},{key:3,content:"Неактивный шаг, текст занимает максимум три строки"}],StepperPlaygroundTemplate=function(_param){var lineClamp=_param.lineClamp,activeStep=_param.activeStep,orientation=_param.orientation,args=StepperPlayground_template_object_without_properties(_param,["lineClamp","activeStep","orientation"]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Stepper,StepperPlayground_template_object_spread_props(StepperPlayground_template_object_spread({lineClamp:lineClamp,activeStep:activeStep||2,orientation:orientation,stepWidth:200},args),{children:steps.map(function(_param){var content=_param.content,step=StepperPlayground_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperPlayground_template_object_spread_props(StepperPlayground_template_object_spread({},step),{onClick:function(step){},children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})}))})};try{StepperPlaygroundTemplate.displayName="StepperPlaygroundTemplate",StepperPlaygroundTemplate.__docgenInfo={description:"",displayName:"StepperPlaygroundTemplate",props:{orientation:{defaultValue:null,description:"Ориентация компонента",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},activeStep:{defaultValue:null,description:`Индекс активного шага, нумерация шагов начинается с 0.
Этот параметр будет перезаписан, если какому-то шагу задан параметр active равный true`,name:"activeStep",required:!0,type:{name:"number"}},lineClamp:{defaultValue:null,description:"Количество строк в шаге, все шаги по высоте вмещают одинаковое количество строк",name:"lineClamp",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},stepWidth:{defaultValue:null,description:`Ширина шага
Если данный параметр не задан, то ширина шага будет адаптивной:
- при горизонтальной ориентации все шаги будут в равной степени делить между собой свободное пространство (ширину степпера);
- при вертикальной ориентации каждый шаг займет 100% ширины степпера.
То есть шаги будут пропорционально увеличиваться/уменьшаться при изменении ширины степпера.`,name:"stepWidth",required:!1,type:{name:"string | number"}},hideLastStepLine:{defaultValue:null,description:"В последнем шаге опционально можно выключать статусную полосу",name:"hideLastStepLine",required:!1,type:{name:"boolean"}},mobile:{defaultValue:null,description:`Мобильное отображение компонента
В мобильной версии компонента применяется только горизонтальный вариант компонента, ширина шагов фиксирована,
по мере прохождения шагов происходит автоматический скролл по горизонтали`,name:"mobile",required:!1,type:{name:"boolean"}},progressMode:{defaultValue:null,description:"Включить режим отображения Progress для большого количества шагов",name:"progressMode",required:!1,type:{name:"boolean"}},displayNextStepName:{defaultValue:null,description:"Отображение/скрытие подписи о следующем шаге в режиме Progress",name:"displayNextStepName",required:!1,type:{name:"boolean"}},progressFormat:{defaultValue:null,description:"Формат отображения прогресса: 'percentage' - проценты, 'steps' - в шагах",name:"progressFormat",required:!1,type:{name:"enum",value:[{value:'"percentage"'},{value:'"steps"'}]}},progressLocale:{defaultValue:null,description:"Объект локализации для режима Progress",name:"progressLocale",required:!1,type:{name:"{ stepName?: [string, string] | [string, string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Stepper/stories/StepperPlayground.template.tsx#StepperPlaygroundTemplate"]={docgenInfo:StepperPlaygroundTemplate.__docgenInfo,name:"StepperPlaygroundTemplate",path:"src/components/Stepper/stories/StepperPlayground.template.tsx#StepperPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx");function StepperStepKinds_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StepperStepKinds_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepperStepKinds_template_define_property(target,key,source[key])})}return target}function StepperStepKinds_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StepperStepKinds_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StepperStepKinds_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StepperStepKinds_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StepperStepKinds_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StepperStepKinds_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function StepperStepKinds_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperStepKinds_template_templateObject(){var data=StepperStepKinds_template_tagged_template_literal([`
  max-width: 800px;
  overflow: hidden;
`]);return StepperStepKinds_template_templateObject=function _templateObject(){return data},data}function StepperStepKinds_template_templateObject1(){var data=StepperStepKinds_template_tagged_template_literal([`
  height: `,`px;
`]);return StepperStepKinds_template_templateObject1=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(StepperStepKinds_template_templateObject()),Separator=styled_components_browser_esm.Ay.div(StepperStepKinds_template_templateObject1(),function(p){return p.$height||8}),StepperStepKinds_template_steps=[{key:0,content:"Шаг с предупреждением",warning:!0},{key:1,content:"Disabled шаг",disabled:!0},{key:2,content:"Шаг с ошибкой",error:!0},{key:3,content:"Завершенный шаг",completed:!0},{key:4,content:"Активный шаг"},{key:5,content:"Неактивный шаг"}],StepperStepKindsTemplate=function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Для обозначения активного шага в компонент Stepper нужно передать параметр activeStep, равный индексу активного шага. Либо для самого Step можно задать параметр active (перезаписывает собой параметр activeStep).",(0,jsx_runtime.jsx)(Separator,{}),"Чтобы обозначить завершенные (пройденные) шаги, для соответствующих шагов необходимо задать параметр completed. Также компонент Step имеет параметры disabled, error, warning.",(0,jsx_runtime.jsx)(Separator,{}),"Пройденные шаги могут быть кликабельными, для этого у них должен быть задан колбек onClick или параметр link."]}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsx)(Stepper,{activeStep:4,children:StepperStepKinds_template_steps.map(function(_param){var content=_param.content,step=StepperStepKinds_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperStepKinds_template_object_spread_props(StepperStepKinds_template_object_spread({},step),{children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})})]})})};function StepperAdaptive_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StepperAdaptive_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepperAdaptive_template_define_property(target,key,source[key])})}return target}function StepperAdaptive_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StepperAdaptive_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StepperAdaptive_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StepperAdaptive_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StepperAdaptive_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StepperAdaptive_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function StepperAdaptive_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperAdaptive_template_templateObject(){var data=StepperAdaptive_template_tagged_template_literal([`
  height: `,`px;
  width: 100%;
`]);return StepperAdaptive_template_templateObject=function _templateObject(){return data},data}var StepperAdaptive_template_Separator=styled_components_browser_esm.Ay.div(StepperAdaptive_template_templateObject(),function(p){return p.$height||8}),StepperAdaptive_template_steps=[{key:0,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",link:"#",completed:!0},{key:1,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",link:"#",completed:!0},{key:2,content:"Активный шаг, текст занимает максимум три строки",link:"#"},{key:3,content:"Неактивный шаг, текст занимает максимум три строки",link:"#"}],StepperAdaptiveTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["С помощью параметра stepWidth можно задать ширину шага. Если данный параметр не задан, то ширина шага будет рассчитываться следующим образом:",(0,jsx_runtime.jsx)(StepperAdaptive_template_Separator,{}),"- при горизонтальной ориентации все шаги будут в равной степени делить между собой свободное пространство;",(0,jsx_runtime.jsx)(StepperAdaptive_template_Separator,{}),"- при вертикальной ориентации каждый шаг займет 100% ширины степпера.",(0,jsx_runtime.jsx)(StepperAdaptive_template_Separator,{}),"Таким образом шаги будут пропорционально увеличиваться/уменьшаться при изменении ширины степпера."]}),(0,jsx_runtime.jsx)(StepperAdaptive_template_Separator,{$height:24}),(0,jsx_runtime.jsx)(Stepper,{activeStep:2,children:StepperAdaptive_template_steps.map(function(_param){var content=_param.content,step=StepperAdaptive_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperAdaptive_template_object_spread_props(StepperAdaptive_template_object_spread({},step),{children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})}),(0,jsx_runtime.jsx)(StepperAdaptive_template_Separator,{$height:20}),(0,jsx_runtime.jsx)(Stepper,{activeStep:2,orientation:"vertical",style:{width:"25%"},children:StepperAdaptive_template_steps.map(function(_param){var content=_param.content,step=StepperAdaptive_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperAdaptive_template_object_spread_props(StepperAdaptive_template_object_spread({},step),{children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})})]})};function StepperClickableLinks_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StepperClickableLinks_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepperClickableLinks_template_define_property(target,key,source[key])})}return target}function StepperClickableLinks_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StepperClickableLinks_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StepperClickableLinks_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StepperClickableLinks_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StepperClickableLinks_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StepperClickableLinks_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function StepperClickableLinks_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperClickableLinks_template_templateObject(){var data=StepperClickableLinks_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return StepperClickableLinks_template_templateObject=function _templateObject(){return data},data}var StepperClickableLinks_template_Separator=styled_components_browser_esm.Ay.div(StepperClickableLinks_template_templateObject()),StepperClickableLinks_template_steps=[{key:0,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",link:"#",completed:!0},{key:1,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",link:"#",completed:!0},{key:2,content:"Активный шаг, текст занимает максимум три строки",link:"#"},{key:3,content:"Неактивный шаг, текст занимает максимум три строки",link:"#"}],StepperClickableLinksTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Stepper,{activeStep:2,"data-testid":"stepper",children:StepperClickableLinks_template_steps.map(function(_param){var content=_param.content,step=StepperClickableLinks_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperClickableLinks_template_object_spread_props(StepperClickableLinks_template_object_spread({},step),{children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})}),(0,jsx_runtime.jsx)(StepperClickableLinks_template_Separator,{}),(0,jsx_runtime.jsx)(Stepper,{activeStep:2,orientation:"vertical",style:{width:"25%"},children:StepperClickableLinks_template_steps.map(function(_param){var content=_param.content,step=StepperClickableLinks_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperClickableLinks_template_object_spread_props(StepperClickableLinks_template_object_spread({},step),{children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})})]})};function StepperCustomStepContent_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StepperCustomStepContent_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepperCustomStepContent_template_define_property(target,key,source[key])})}return target}function StepperCustomStepContent_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StepperCustomStepContent_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StepperCustomStepContent_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StepperCustomStepContent_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StepperCustomStepContent_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StepperCustomStepContent_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var StepperCustomStepContent_template_steps=[{key:0,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",completed:!0},{key:1,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",completed:!0},{key:2,content:"Активный шаг, текст занимает максимум три строки"},{key:3,content:"Неактивный шаг, текст занимает максимум три строки"}],StepperCustomStepContentTemplate=function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Stepper,{lineClamp:2,activeStep:2,children:StepperCustomStepContent_template_steps.map(function(_param){var content=_param.content,step=StepperCustomStepContent_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperCustomStepContent_template_object_spread_props(StepperCustomStepContent_template_object_spread({},step),{children:(0,jsx_runtime.jsx)("i",{children:content})}))})})})};function StepperClickProp_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperClickProp_template_templateObject(){var data=StepperClickProp_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return StepperClickProp_template_templateObject=function _templateObject(){return data},data}var StepperClickProp_template_Separator=styled_components_browser_esm.Ay.div(StepperClickProp_template_templateObject()),StepperClickProp_template_steps=[{key:0,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",completed:!0},{key:1,content:"Завершенный шаг, текст занимает максимум три строки, далее идет сокращение",completed:!0},{key:2,content:"Активный шаг, текст занимает максимум три строки"},{key:3,content:"Неактивный шаг, текст занимает максимум три строки"}],StepperClickPropTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Stepper,{activeStep:2,"data-testid":"stepper",children:StepperClickProp_template_steps.map(function(param){var content=param.content,key=param.key,completed=param.completed;return(0,jsx_runtime.jsx)(Step_Step,{completed:completed,onClick:function(step){console.log("step ".concat(step.index))},"data-testid":"step",children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})},"step-".concat(key))})}),(0,jsx_runtime.jsx)(StepperClickProp_template_Separator,{}),(0,jsx_runtime.jsx)(Stepper,{activeStep:2,orientation:"vertical",style:{width:"225px"},children:StepperClickProp_template_steps.map(function(param){var content=param.content,key=param.key,completed=param.completed;return(0,jsx_runtime.jsx)(Step_Step,{completed:completed,onClick:function(step){console.log("step ".concat(step.index))},children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})},"step-".concat(key))})})]})};function StepperPreviousSteps_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperPreviousSteps_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return StepperPreviousSteps_template_array_like_to_array(arr)}function StepperPreviousSteps_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function StepperPreviousSteps_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperPreviousSteps_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperPreviousSteps_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepperPreviousSteps_template_define_property(target,key,source[key])})}return target}function StepperPreviousSteps_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StepperPreviousSteps_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StepperPreviousSteps_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StepperPreviousSteps_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StepperPreviousSteps_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StepperPreviousSteps_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function StepperPreviousSteps_template_sliced_to_array(arr,i){return StepperPreviousSteps_template_array_with_holes(arr)||StepperPreviousSteps_template_iterable_to_array_limit(arr,i)||StepperPreviousSteps_template_unsupported_iterable_to_array(arr,i)||StepperPreviousSteps_template_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||StepperPreviousSteps_template_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function StepperPreviousSteps_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperPreviousSteps_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperPreviousSteps_template_array_like_to_array(o,minLen)}}var initialSteps=[{key:0,content:"1. Пройденный шаг",completed:!0},{key:1,content:"2. Ранее пройденный шаг, на котрый мы вернулись с 4го шага"},{key:2,content:"3. Пройденный шаг",completed:!0},{key:3,content:"4. Отсюда мы вернулись на 2 шаг.",completed:!0},{key:4,content:"5. Неактивный шаг, еще не пройденный"}],StepperPreviousStepsTemplate=function(){var _React_useState=StepperPreviousSteps_template_sliced_to_array(react.useState(1),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],_React_useState1=StepperPreviousSteps_template_sliced_to_array(react.useState(initialSteps),2),steps=_React_useState1[0],setSteps=_React_useState1[1],handleStepClick=function(param){var index=param.index;setSteps(_to_consumable_array(steps).map(function(step,i){return i<4?StepperPreviousSteps_template_object_spread_props(StepperPreviousSteps_template_object_spread({},step),{completed:i!==index}):step})),setActiveStep(index)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"В случаях необходимости и когда это позволяет логика шагов, например, результаты предыдущих шагов не влияют на последующие, допускается возможность возврата к предыдущим шагам."}),(0,jsx_runtime.jsx)("div",{style:{maxWidth:"800px",overflow:"hidden"},children:(0,jsx_runtime.jsx)(Stepper,{lineClamp:2,activeStep:activeStep,children:steps.map(function(_param){var content=_param.content,step=StepperPreviousSteps_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperPreviousSteps_template_object_spread_props(StepperPreviousSteps_template_object_spread({},step),{onClick:handleStepClick,children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})})})]})},Button=__webpack_require__("./src/components/Button/index.tsx");function StepperMobile_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperMobile_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function StepperMobile_template_array_without_holes(arr){if(Array.isArray(arr))return StepperMobile_template_array_like_to_array(arr)}function StepperMobile_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function StepperMobile_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function StepperMobile_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperMobile_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperMobile_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperMobile_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){StepperMobile_template_define_property(target,key,source[key])})}return target}function StepperMobile_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function StepperMobile_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):StepperMobile_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function StepperMobile_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=StepperMobile_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function StepperMobile_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function StepperMobile_template_sliced_to_array(arr,i){return StepperMobile_template_array_with_holes(arr)||StepperMobile_template_iterable_to_array_limit(arr,i)||StepperMobile_template_unsupported_iterable_to_array(arr,i)||StepperMobile_template_non_iterable_rest()}function StepperMobile_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperMobile_template_to_consumable_array(arr){return StepperMobile_template_array_without_holes(arr)||StepperMobile_template_iterable_to_array(arr)||StepperMobile_template_unsupported_iterable_to_array(arr)||StepperMobile_template_non_iterable_spread()}function StepperMobile_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperMobile_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperMobile_template_array_like_to_array(o,minLen)}}function StepperMobile_template_templateObject(){var data=StepperMobile_template_tagged_template_literal([`
  height: `,`px;
`]);return StepperMobile_template_templateObject=function _templateObject(){return data},data}function StepperMobile_template_templateObject1(){var data=StepperMobile_template_tagged_template_literal([`
  width: 400px;
  overflow: hidden;
`]);return StepperMobile_template_templateObject1=function _templateObject(){return data},data}function StepperMobile_template_templateObject2(){var data=StepperMobile_template_tagged_template_literal([`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
`]);return StepperMobile_template_templateObject2=function _templateObject(){return data},data}var StepperMobile_template_Separator=styled_components_browser_esm.Ay.div(StepperMobile_template_templateObject(),function(p){return p.$height||8}),StepperMobile_template_Wrapper=styled_components_browser_esm.Ay.div(StepperMobile_template_templateObject1()),MobileWrapper=styled_components_browser_esm.Ay.div(StepperMobile_template_templateObject2()),StepperMobile_template_initialSteps=[{key:0,content:"Текст занимает максимум три строки, далее идет сокращение"},{key:1,content:"Текст занимает максимум три строки, далее идет сокращение"},{key:2,content:"Текст занимает максимум три строки, далее идет сокращение"},{key:3,content:"Текст занимает максимум три строки, далее идет сокращение"}],StepperMobileTemplate=function(){var _React_useState=StepperMobile_template_sliced_to_array(react.useState(0),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],_React_useState1=StepperMobile_template_sliced_to_array(react.useState(StepperMobile_template_initialSteps),2),steps=_React_useState1[0],setSteps=_React_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["В мобильной версии применяется только горизонтальный вариант компонента с автоматическим скроллом по горизонтали по мере прохождения шагов.",(0,jsx_runtime.jsx)(StepperMobile_template_Separator,{}),"Компонент можно скроллить пальцем, если нужно посмотреть пройденные или будущие шаги.",(0,jsx_runtime.jsx)(StepperMobile_template_Separator,{}),"При переходе на следующий шаг, который становится текущим, он выравнивается относительно левого края на расстоянии 16px (боковой падинг). Шаг перед текущим уходит за границы экрана.",(0,jsx_runtime.jsx)(StepperMobile_template_Separator,{}),"Для перевода компонента в мобильный вид используйте параметр mobile."]}),(0,jsx_runtime.jsx)(StepperMobile_template_Separator,{$height:24}),(0,jsx_runtime.jsxs)(StepperMobile_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(MobileWrapper,{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){setSteps(StepperMobile_template_to_consumable_array(steps).map(function(step,i){return i===activeStep-1?StepperMobile_template_object_spread_props(StepperMobile_template_object_spread({},step),{completed:!1}):step})),setActiveStep(activeStep-1)},disabled:0===activeStep,dimension:"s",children:"Шаг назад"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){setSteps(StepperMobile_template_to_consumable_array(steps).map(function(step,i){return i===activeStep?StepperMobile_template_object_spread_props(StepperMobile_template_object_spread({},step),{completed:!0}):step})),setActiveStep(activeStep+1)},disabled:3===activeStep,dimension:"s",children:"Шаг вперёд"})]}),(0,jsx_runtime.jsx)(Stepper,{activeStep:activeStep,mobile:!0,children:steps.map(function(_param){var content=_param.content,step=StepperMobile_template_object_without_properties(_param,["content"]);return(0,jsx_runtime.jsx)(Step_Step,StepperMobile_template_object_spread_props(StepperMobile_template_object_spread({},step),{children:(0,jsx_runtime.jsx)(StepContent_StepContent,{tooltipProps:{style:{maxWidth:"300px"}},children:content})}))})})]})]})};function StepperProgress_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperProgress_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function StepperProgress_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperProgress_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperProgress_template_sliced_to_array(arr,i){return StepperProgress_template_array_with_holes(arr)||StepperProgress_template_iterable_to_array_limit(arr,i)||StepperProgress_template_unsupported_iterable_to_array(arr,i)||StepperProgress_template_non_iterable_rest()}function StepperProgress_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperProgress_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperProgress_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperProgress_template_array_like_to_array(o,minLen)}}function StepperProgress_template_templateObject(){var data=StepperProgress_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`]);return StepperProgress_template_templateObject=function _templateObject(){return data},data}function StepperProgress_template_templateObject1(){var data=StepperProgress_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return StepperProgress_template_templateObject1=function _templateObject(){return data},data}var StepperProgress_template_Wrapper=styled_components_browser_esm.Ay.div(StepperProgress_template_templateObject()),StepperProgress_template_Separator=styled_components_browser_esm.Ay.div(StepperProgress_template_templateObject1()),StepperProgressTemplate=function(){var _React_useState=StepperProgress_template_sliced_to_array(react.useState(2),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],steps=["Заполнение данных","Проверка документов","Подтверждение заявки","Обработка заявки","Проверка кредитоспособности","Принятие решения","Подписание договора","Выдача кредита"];return(0,jsx_runtime.jsxs)(StepperProgress_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Режим отображения ProgressMode для большого количества шагов. Представляет собой визуальное отображение пользовательского прогресса в виде заполняющейся линии. Уведомляет пользователя о текущем положении на пути при выполнении конкретной задачи.",(0,jsx_runtime.jsx)(StepperProgress_template_Separator,{}),"Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.",(0,jsx_runtime.jsx)(StepperProgress_template_Separator,{}),"Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине, минимальная ширина 388px."]}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Базовый пример (формат в шагах)"}),(0,jsx_runtime.jsx)(Stepper,{activeStep:activeStep,progressMode:!0,children:steps.map(function(step,index){return(0,jsx_runtime.jsx)(Step_Step,{children:step},index)})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.max(0,activeStep-1))},disabled:0===activeStep,style:{marginRight:"8px"},dimension:"s",children:"Предыдущий шаг"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.min(steps.length-1,activeStep+1))},disabled:activeStep===steps.length-1,dimension:"s",children:"Следующий шаг"})]})]})};function StepperProgressPercentage_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperProgressPercentage_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function StepperProgressPercentage_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperProgressPercentage_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperProgressPercentage_template_sliced_to_array(arr,i){return StepperProgressPercentage_template_array_with_holes(arr)||StepperProgressPercentage_template_iterable_to_array_limit(arr,i)||StepperProgressPercentage_template_unsupported_iterable_to_array(arr,i)||StepperProgressPercentage_template_non_iterable_rest()}function StepperProgressPercentage_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperProgressPercentage_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperProgressPercentage_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperProgressPercentage_template_array_like_to_array(o,minLen)}}function StepperProgressPercentage_template_templateObject(){var data=StepperProgressPercentage_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`]);return StepperProgressPercentage_template_templateObject=function _templateObject(){return data},data}var StepperProgressPercentage_template_Wrapper=styled_components_browser_esm.Ay.div(StepperProgressPercentage_template_templateObject()),StepperProgressPercentageTemplate=function(){var _React_useState=StepperProgressPercentage_template_sliced_to_array(react.useState(2),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],steps=["Заполнение данных","Проверка документов","Подтверждение заявки","Обработка заявки","Проверка кредитоспособности","Принятие решения","Подписание договора","Выдача кредита"];return(0,jsx_runtime.jsxs)(StepperProgressPercentage_template_Wrapper,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Формат в процентах"}),(0,jsx_runtime.jsx)(Stepper,{activeStep:activeStep,progressMode:!0,progressFormat:"percentage",children:steps.map(function(step,index){return(0,jsx_runtime.jsx)(Step_Step,{children:step},index)})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.max(0,activeStep-1))},disabled:0===activeStep,style:{marginRight:"8px"},dimension:"s",children:"Предыдущий шаг"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.min(steps.length-1,activeStep+1))},disabled:activeStep===steps.length-1,dimension:"s",children:"Следующий шаг"})]})]})};function StepperProgressDisplayNextStep_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperProgressDisplayNextStep_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function StepperProgressDisplayNextStep_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperProgressDisplayNextStep_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperProgressDisplayNextStep_template_sliced_to_array(arr,i){return StepperProgressDisplayNextStep_template_array_with_holes(arr)||StepperProgressDisplayNextStep_template_iterable_to_array_limit(arr,i)||StepperProgressDisplayNextStep_template_unsupported_iterable_to_array(arr,i)||StepperProgressDisplayNextStep_template_non_iterable_rest()}function StepperProgressDisplayNextStep_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperProgressDisplayNextStep_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperProgressDisplayNextStep_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperProgressDisplayNextStep_template_array_like_to_array(o,minLen)}}function StepperProgressDisplayNextStep_template_templateObject(){var data=StepperProgressDisplayNextStep_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`]);return StepperProgressDisplayNextStep_template_templateObject=function _templateObject(){return data},data}var StepperProgressDisplayNextStep_template_Wrapper=styled_components_browser_esm.Ay.div(StepperProgressDisplayNextStep_template_templateObject()),StepperProgressDisplayNextStepTemplate=function(){var _React_useState=StepperProgressDisplayNextStep_template_sliced_to_array(react.useState(2),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],steps=["Заполнение данных","Проверка документов","Подтверждение заявки","Обработка заявки","Проверка кредитоспособности","Принятие решения","Подписание договора","Выдача кредита"];return(0,jsx_runtime.jsxs)(StepperProgressDisplayNextStep_template_Wrapper,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Без отображения следующего шага"}),(0,jsx_runtime.jsx)(Stepper,{activeStep:activeStep,progressMode:!0,displayNextStepName:!1,children:steps.map(function(step,index){return(0,jsx_runtime.jsx)(Step_Step,{children:step},index)})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.max(0,activeStep-1))},disabled:0===activeStep,style:{marginRight:"8px"},dimension:"s",children:"Предыдущий шаг"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.min(steps.length-1,activeStep+1))},disabled:activeStep===steps.length-1,dimension:"s",children:"Следующий шаг"})]})]})};function StepperProgressLineClamp_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperProgressLineClamp_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function StepperProgressLineClamp_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperProgressLineClamp_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperProgressLineClamp_template_sliced_to_array(arr,i){return StepperProgressLineClamp_template_array_with_holes(arr)||StepperProgressLineClamp_template_iterable_to_array_limit(arr,i)||StepperProgressLineClamp_template_unsupported_iterable_to_array(arr,i)||StepperProgressLineClamp_template_non_iterable_rest()}function StepperProgressLineClamp_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperProgressLineClamp_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperProgressLineClamp_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperProgressLineClamp_template_array_like_to_array(o,minLen)}}function StepperProgressLineClamp_template_templateObject(){var data=StepperProgressLineClamp_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`]);return StepperProgressLineClamp_template_templateObject=function _templateObject(){return data},data}var StepperProgressLineClamp_template_Wrapper=styled_components_browser_esm.Ay.div(StepperProgressLineClamp_template_templateObject()),StepperProgressLineClampTemplate=function(){var _React_useState=StepperProgressLineClamp_template_sliced_to_array(react.useState(2),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],steps=["Заполнение данных","Проверка документов","Подтверждение заявки","Обработка заявки","Проверка кредитоспособности","Принятие решения","Подписание договора","Выдача кредита"];return(0,jsx_runtime.jsxs)(StepperProgressLineClamp_template_Wrapper,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"С ограничением строк назвния текущего и следующего шага (lineClamp = 1)"}),(0,jsx_runtime.jsx)(Stepper,{activeStep:activeStep,progressMode:!0,lineClamp:1,children:steps.map(function(step,index){return(0,jsx_runtime.jsx)(Step_Step,{children:step},index)})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.max(0,activeStep-1))},disabled:0===activeStep,style:{marginRight:"8px"},dimension:"s",children:"Предыдущий шаг"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.min(steps.length-1,activeStep+1))},disabled:activeStep===steps.length-1,dimension:"s",children:"Следующий шаг"})]})]})};function StepperProgressMobile_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperProgressMobile_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function StepperProgressMobile_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperProgressMobile_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperProgressMobile_template_sliced_to_array(arr,i){return StepperProgressMobile_template_array_with_holes(arr)||StepperProgressMobile_template_iterable_to_array_limit(arr,i)||StepperProgressMobile_template_unsupported_iterable_to_array(arr,i)||StepperProgressMobile_template_non_iterable_rest()}function StepperProgressMobile_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperProgressMobile_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperProgressMobile_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperProgressMobile_template_array_like_to_array(o,minLen)}}function StepperProgressMobile_template_templateObject(){var data=StepperProgressMobile_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`]);return StepperProgressMobile_template_templateObject=function _templateObject(){return data},data}var StepperProgressMobile_template_Wrapper=styled_components_browser_esm.Ay.div(StepperProgressMobile_template_templateObject()),StepperProgressMobileTemplate=function(){var _React_useState=StepperProgressMobile_template_sliced_to_array(react.useState(2),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],steps=["Заполнение данных","Проверка документов","Подтверждение заявки","Обработка заявки","Проверка кредитоспособности","Принятие решения","Подписание договора","Выдача кредита"];return(0,jsx_runtime.jsxs)(StepperProgressMobile_template_Wrapper,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Мобильная версия"}),(0,jsx_runtime.jsx)("div",{style:{width:"300px"},children:(0,jsx_runtime.jsx)(Stepper,{activeStep:activeStep,progressMode:!0,mobile:!0,children:steps.map(function(step,index){return(0,jsx_runtime.jsx)(Step_Step,{children:step},index)})})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.max(0,activeStep-1))},disabled:0===activeStep,style:{marginRight:"8px"},dimension:"s",children:"Предыдущий шаг"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.min(steps.length-1,activeStep+1))},disabled:activeStep===steps.length-1,dimension:"s",children:"Следующий шаг"})]})]})};function StepperProgressCustom_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function StepperProgressCustom_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function StepperProgressCustom_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function StepperProgressCustom_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function StepperProgressCustom_template_sliced_to_array(arr,i){return StepperProgressCustom_template_array_with_holes(arr)||StepperProgressCustom_template_iterable_to_array_limit(arr,i)||StepperProgressCustom_template_unsupported_iterable_to_array(arr,i)||StepperProgressCustom_template_non_iterable_rest()}function StepperProgressCustom_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function StepperProgressCustom_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return StepperProgressCustom_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return StepperProgressCustom_template_array_like_to_array(o,minLen)}}function StepperProgressCustom_template_templateObject(){var data=StepperProgressCustom_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`]);return StepperProgressCustom_template_templateObject=function _templateObject(){return data},data}var StepperProgressCustom_template_Wrapper=styled_components_browser_esm.Ay.div(StepperProgressCustom_template_templateObject()),StepperProgressCustomTemplate=function(){var _React_useState=StepperProgressCustom_template_sliced_to_array(react.useState(2),2),activeStep=_React_useState[0],setActiveStep=_React_useState[1],steps=["Заполнение данных","Проверка документов","Подтверждение заявки","Обработка заявки","Проверка кредитоспособности","Принятие решения","Подписание договора","Выдача кредита"];return(0,jsx_runtime.jsxs)(StepperProgressCustom_template_Wrapper,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"С кастомной локализацией"}),(0,jsx_runtime.jsx)(Stepper,{activeStep:activeStep,progressMode:!0,progressFormat:"steps",progressLocale:{stepName:["этап","этапа","этапов"],progressText:function(activeStepNumber,stepsAmount){return"Этап ".concat(activeStepNumber," из ").concat(stepsAmount)},renderNextStepName:function(nextStepName){return"Следующий этап: ".concat(nextStepName)}},children:steps.map(function(step,index){return(0,jsx_runtime.jsx)(Step_Step,{children:step},index)})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.max(0,activeStep-1))},disabled:0===activeStep,style:{marginRight:"8px"},dimension:"s",children:"Предыдущий шаг"}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setActiveStep(Math.min(steps.length-1,activeStep+1))},disabled:activeStep===steps.length-1,dimension:"s",children:"Следующий шаг"})]})]})};let StepperPlayground_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';
import type { StepperProps } from '@admiral-ds/react-ui';

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const StepperPlaygroundTemplate = ({ lineClamp, activeStep, orientation, ...args }: StepperProps) => {
  return (
    <>
      <Stepper lineClamp={lineClamp} activeStep={activeStep || 2} orientation={orientation} stepWidth={200} {...args}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step
              {...step}
              onClick={(step: { index: number; active: boolean; completed: boolean; disabled?: boolean }) => {
                // Обработчик клика по шагу
                void step;
              }}
            >
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
`,StepperStepKinds_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step, StepContent, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div\`
  max-width: 800px;
  overflow: hidden;
\`;
const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

const steps = [
  { key: 0, content: 'Шаг с предупреждением', warning: true },
  { key: 1, content: 'Disabled шаг', disabled: true },
  { key: 2, content: 'Шаг с ошибкой', error: true },
  { key: 3, content: 'Завершенный шаг', completed: true },
  { key: 4, content: 'Активный шаг' },
  { key: 5, content: 'Неактивный шаг' },
];

export const StepperStepKindsTemplate = () => {
  return (
    <>
      <Wrapper>
        <T font="Body/Body 1 Long" as="div">
          Для обозначения активного шага в компонент Stepper нужно передать параметр activeStep, равный индексу
          активного шага. Либо для самого Step можно задать параметр active (перезаписывает собой параметр activeStep).
          <Separator />
          Чтобы обозначить завершенные (пройденные) шаги, для соответствующих шагов необходимо задать параметр
          completed. Также компонент Step имеет параметры disabled, error, warning.
          <Separator />
          Пройденные шаги могут быть кликабельными, для этого у них должен быть задан колбек onClick или параметр link.
        </T>
        <Separator $height={24} />
        <Stepper activeStep={4}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Wrapper>
    </>
  );
};
`,StepperAdaptive_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step, StepContent, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
  width: 100%;
\`;

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  {
    key: 1,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
];

export const StepperAdaptiveTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        С помощью параметра stepWidth можно задать ширину шага. Если данный параметр не задан, то ширина шага будет
        рассчитываться следующим образом:
        <Separator />- при горизонтальной ориентации все шаги будут в равной степени делить между собой свободное
        пространство;
        <Separator />- при вертикальной ориентации каждый шаг займет 100% ширины степпера.
        <Separator />
        Таким образом шаги будут пропорционально увеличиваться/уменьшаться при изменении ширины степпера.
      </T>
      <Separator $height={24} />
      <Stepper activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator $height={20} />
      <Stepper activeStep={2} orientation="vertical" style={{ width: '25%' }}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
`,StepperClickableLinks_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  {
    key: 1,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
];

export const StepperClickableLinksTemplate = () => {
  return (
    <>
      <Stepper activeStep={2} data-testid="stepper">
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
      <Stepper activeStep={2} orientation="vertical" style={{ width: '25%' }}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
`,StepperCustomStepContent_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step } from '@admiral-ds/react-ui';

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const StepperCustomStepContentTemplate = () => {
  return (
    <>
      <Stepper lineClamp={2} activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <i>{content}</i>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
`,StepperClickProp_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const StepperClickPropTemplate = () => {
  return (
    <>
      <Stepper activeStep={2} data-testid="stepper">
        {steps.map(({ content, key, completed }) => {
          return (
            <Step
              completed={completed}
              key={\`step-\${key}\`}
              onClick={(step: { index: number; active: boolean; completed: boolean; disabled?: boolean }) => {
                // Обработчик клика по шагу
                console.log(\`step \${step.index}\`);
              }}
              data-testid="step"
            >
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
      <Stepper activeStep={2} orientation="vertical" style={{ width: '225px' }}>
        {steps.map(({ content, key, completed }) => {
          return (
            <Step
              completed={completed}
              key={\`step-\${key}\`}
              onClick={(step: { index: number; active: boolean; completed: boolean; disabled?: boolean }) => {
                // Обработчик клика по шагу
                console.log(\`step \${step.index}\`);
              }}
            >
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
`,StepperPreviousSteps_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step, StepContent, T } from '@admiral-ds/react-ui';

const initialSteps = [
  {
    key: 0,
    content: '1. Пройденный шаг',
    completed: true,
  },
  { key: 1, content: '2. Ранее пройденный шаг, на котрый мы вернулись с 4го шага' },
  { key: 2, content: '3. Пройденный шаг', completed: true },
  { key: 3, content: '4. Отсюда мы вернулись на 2 шаг.', completed: true },
  { key: 4, content: '5. Неактивный шаг, еще не пройденный' },
];

export const StepperPreviousStepsTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [steps, setSteps] = React.useState(initialSteps);
  const handleStepClick = ({ index }: { index: number; active: boolean; completed: boolean; disabled?: boolean }) => {
    const newSteps = [...steps].map((step, i) => (i < 4 ? { ...step, completed: i !== index } : step));
    setSteps(newSteps);
    setActiveStep(index);
  };
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В случаях необходимости и когда это позволяет логика шагов, например, результаты предыдущих шагов не влияют на
        последующие, допускается возможность возврата к предыдущим шагам.
      </T>
      <div style={{ maxWidth: '800px', overflow: 'hidden' }}>
        <Stepper lineClamp={2} activeStep={activeStep}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step} onClick={handleStepClick}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </>
  );
};
`,StepperMobile_templateraw_namespaceObject=`import * as React from 'react';
import { Stepper, Step, StepContent, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;
const Wrapper = styled.div\`
  width: 400px;
  overflow: hidden;
\`;
const MobileWrapper = styled.div\`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
\`;

const initialSteps = [
  {
    key: 0,
    content: 'Текст занимает максимум три строки, далее идет сокращение',
  },
  { key: 1, content: 'Текст занимает максимум три строки, далее идет сокращение' },
  { key: 2, content: 'Текст занимает максимум три строки, далее идет сокращение' },
  { key: 3, content: 'Текст занимает максимум три строки, далее идет сокращение' },
];

export const StepperMobileTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(initialSteps);

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        В мобильной версии применяется только горизонтальный вариант компонента с автоматическим скроллом по горизонтали
        по мере прохождения шагов.
        <Separator />
        Компонент можно скроллить пальцем, если нужно посмотреть пройденные или будущие шаги.
        <Separator />
        При переходе на следующий шаг, который становится текущим, он выравнивается относительно левого края на
        расстоянии 16px (боковой падинг). Шаг перед текущим уходит за границы экрана.
        <Separator />
        Для перевода компонента в мобильный вид используйте параметр mobile.
      </T>
      <Separator $height={24} />
      <Wrapper>
        <MobileWrapper>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) =>
                i === activeStep - 1 ? { ...step, completed: false } : step,
              );
              setSteps(newSteps);
              setActiveStep(activeStep - 1);
            }}
            disabled={activeStep === 0}
            dimension="s"
          >
            Шаг назад
          </Button>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) => (i === activeStep ? { ...step, completed: true } : step));
              setSteps(newSteps);
              setActiveStep(activeStep + 1);
            }}
            disabled={activeStep === 3}
            dimension="s"
          >
            Шаг вперёд
          </Button>
        </MobileWrapper>
        <Stepper activeStep={activeStep} mobile>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Wrapper>
    </>
  );
};
`,StepperProgress_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
\`;

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const StepperProgressTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const steps = [
    'Заполнение данных',
    'Проверка документов',
    'Подтверждение заявки',
    'Обработка заявки',
    'Проверка кредитоспособности',
    'Принятие решения',
    'Подписание договора',
    'Выдача кредита',
  ];

  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        Режим отображения ProgressMode для большого количества шагов. Представляет собой визуальное отображение
        пользовательского прогресса в виде заполняющейся линии. Уведомляет пользователя о текущем положении на пути при
        выполнении конкретной задачи.
        <Separator />
        Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на
        каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
        <Separator />
        Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине,
        минимальная ширина 388px.
      </T>
      <T font="Body/Body 1 Long" as="div">
        Базовый пример (формат в шагах)
      </T>
      <Stepper activeStep={activeStep} progressMode>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>

      <div>
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          style={{ marginRight: '8px' }}
          dimension="s"
        >
          Предыдущий шаг
        </Button>
        <Button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          dimension="s"
        >
          Следующий шаг
        </Button>
      </div>
    </Wrapper>
  );
};
`,StepperProgressPercentage_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
\`;

export const StepperProgressPercentageTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const steps = [
    'Заполнение данных',
    'Проверка документов',
    'Подтверждение заявки',
    'Обработка заявки',
    'Проверка кредитоспособности',
    'Принятие решения',
    'Подписание договора',
    'Выдача кредита',
  ];

  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        Формат в процентах
      </T>
      <Stepper activeStep={activeStep} progressMode progressFormat="percentage">
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>

      <div>
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          style={{ marginRight: '8px' }}
          dimension="s"
        >
          Предыдущий шаг
        </Button>
        <Button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          dimension="s"
        >
          Следующий шаг
        </Button>
      </div>
    </Wrapper>
  );
};
`,StepperProgressDisplayNextStep_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
\`;

export const StepperProgressDisplayNextStepTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const steps = [
    'Заполнение данных',
    'Проверка документов',
    'Подтверждение заявки',
    'Обработка заявки',
    'Проверка кредитоспособности',
    'Принятие решения',
    'Подписание договора',
    'Выдача кредита',
  ];

  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        Без отображения следующего шага
      </T>
      <Stepper activeStep={activeStep} progressMode displayNextStepName={false}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>

      <div>
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          style={{ marginRight: '8px' }}
          dimension="s"
        >
          Предыдущий шаг
        </Button>
        <Button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          dimension="s"
        >
          Следующий шаг
        </Button>
      </div>
    </Wrapper>
  );
};
`,StepperProgressLineClamp_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
\`;

export const StepperProgressLineClampTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const steps = [
    'Заполнение данных',
    'Проверка документов',
    'Подтверждение заявки',
    'Обработка заявки',
    'Проверка кредитоспособности',
    'Принятие решения',
    'Подписание договора',
    'Выдача кредита',
  ];

  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        С ограничением строк назвния текущего и следующего шага (lineClamp = 1)
      </T>
      <Stepper activeStep={activeStep} progressMode lineClamp={1}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>

      <div>
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          style={{ marginRight: '8px' }}
          dimension="s"
        >
          Предыдущий шаг
        </Button>
        <Button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          dimension="s"
        >
          Следующий шаг
        </Button>
      </div>
    </Wrapper>
  );
};
`,StepperProgressMobile_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
\`;

export const StepperProgressMobileTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const steps = [
    'Заполнение данных',
    'Проверка документов',
    'Подтверждение заявки',
    'Обработка заявки',
    'Проверка кредитоспособности',
    'Принятие решения',
    'Подписание договора',
    'Выдача кредита',
  ];

  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        Мобильная версия
      </T>
      <div style={{ width: '300px' }}>
        <Stepper activeStep={activeStep} progressMode mobile>
          {steps.map((step, index) => (
            <Step key={index}>{step}</Step>
          ))}
        </Stepper>
      </div>

      <div>
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          style={{ marginRight: '8px' }}
          dimension="s"
        >
          Предыдущий шаг
        </Button>
        <Button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          dimension="s"
        >
          Следующий шаг
        </Button>
      </div>
    </Wrapper>
  );
};
`,StepperProgressCustom_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
\`;

export const StepperProgressCustomTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const steps = [
    'Заполнение данных',
    'Проверка документов',
    'Подтверждение заявки',
    'Обработка заявки',
    'Проверка кредитоспособности',
    'Принятие решения',
    'Подписание договора',
    'Выдача кредита',
  ];

  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        С кастомной локализацией
      </T>
      <Stepper
        activeStep={activeStep}
        progressMode
        progressFormat="steps"
        progressLocale={{
          stepName: ['этап', 'этапа', 'этапов'],
          progressText: (activeStepNumber, stepsAmount) => \`Этап \${activeStepNumber} из \${stepsAmount}\`,
          renderNextStepName: (nextStepName) => \`Следующий этап: \${nextStepName}\`,
        }}
      >
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>

      <div>
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          style={{ marginRight: '8px' }}
          dimension="s"
        >
          Предыдущий шаг
        </Button>
        <Button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          dimension="s"
        >
          Следующий шаг
        </Button>
      </div>
    </Wrapper>
  );
};
`;function Stepper_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Stepper_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Stepper_stories_define_property(target,key,source[key])})}return target}function Stepper_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Stepper_stories_templateObject(){var data=Stepper_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Stepper_stories_templateObject=function _templateObject(){return data},data}function Stepper_stories_templateObject1(){var data=Stepper_stories_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return Stepper_stories_templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Stepper_stories_templateObject()),Stepper_stories_Separator=styled_components_browser_esm.Ay.div(Stepper_stories_templateObject1());let Stepper_stories={title:"Admiral-2.1/Stepper",decorators:void 0,component:Stepper,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент Stepper — визуальное отображение пользовательского прогресса через набор шагов. Уведомляет пользователя о текущем положении на пути при выполнении конкретной задачи.",(0,jsx_runtime.jsx)(Stepper_stories_Separator,{}),"Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.",(0,jsx_runtime.jsx)(Stepper_stories_Separator,{}),"Компонент представлен в двух вариантах — горизонтальном и вертикальном."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16671"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16789"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A16767"}]},argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"radio"}},lineClamp:{options:[1,2,3],control:{type:"radio"}},hideLastStepLine:{control:{type:"boolean"}},mobile:{control:{type:"boolean"}},stepWidth:{control:!1},progressMode:{control:{type:"boolean"}},displayNextStepName:{control:{type:"boolean"}},progressFormat:{options:["percentage","steps"],control:{type:"radio"}}}};var Playground={render:function(props){return(0,jsx_runtime.jsx)(StepperPlaygroundTemplate,Stepper_stories_object_spread({},props))},parameters:{docs:{source:{code:StepperPlayground_templateraw_namespaceObject}}},name:"Stepper. Playground."},StepKindsExample={render:function(){return(0,jsx_runtime.jsx)(StepperStepKindsTemplate,{})},parameters:{docs:{source:{code:StepperStepKinds_templateraw_namespaceObject}}},name:"Stepper. Виды шагов."},AdaptiveExample={render:function(){return(0,jsx_runtime.jsx)(StepperAdaptiveTemplate,{})},parameters:{docs:{source:{code:StepperAdaptive_templateraw_namespaceObject}}},name:"Stepper. Адаптив."},CustomStepContentExample={render:function(){return(0,jsx_runtime.jsx)(StepperCustomStepContentTemplate,{})},parameters:{docs:{source:{code:StepperCustomStepContent_templateraw_namespaceObject}}},name:"Stepper. Кастомный StepContent."},ClickableLinksExample={render:function(){return(0,jsx_runtime.jsx)(StepperClickableLinksTemplate,{})},parameters:{docs:{source:{code:StepperClickableLinks_templateraw_namespaceObject}}},name:"Stepper. Шаги в виде ссылок."},ClickPropExample={render:function(){return(0,jsx_runtime.jsx)(StepperClickPropTemplate,{})},parameters:{docs:{source:{code:StepperClickProp_templateraw_namespaceObject}}},name:"Stepper. Кликабельные шаги."},PreviousStepsExample={render:function(){return(0,jsx_runtime.jsx)(StepperPreviousStepsTemplate,{})},parameters:{docs:{source:{code:StepperPreviousSteps_templateraw_namespaceObject}}},name:"Stepper. Возврат к предыдущим шагам."},MobileExample={render:function(){return(0,jsx_runtime.jsx)(StepperMobileTemplate,{})},parameters:{docs:{source:{code:StepperMobile_templateraw_namespaceObject}}},name:"Stepper. Мобильная версия."},ProgressExample={render:function(){return(0,jsx_runtime.jsx)(StepperProgressTemplate,{})},parameters:{docs:{source:{code:StepperProgress_templateraw_namespaceObject}}},name:"ProgressStepper."},ProgressPercentageExample={render:function(){return(0,jsx_runtime.jsx)(StepperProgressPercentageTemplate,{})},parameters:{docs:{source:{code:StepperProgressPercentage_templateraw_namespaceObject}}},name:"ProgressStepper. Проценты."},ProgressNextStepExample={render:function(){return(0,jsx_runtime.jsx)(StepperProgressDisplayNextStepTemplate,{})},parameters:{docs:{source:{code:StepperProgressDisplayNextStep_templateraw_namespaceObject}}},name:"ProgressStepper. Отключение следующего шага."},ProgressLineClampStepExample={render:function(){return(0,jsx_runtime.jsx)(StepperProgressLineClampTemplate,{})},parameters:{docs:{source:{code:StepperProgressLineClamp_templateraw_namespaceObject}}},name:"ProgressStepper. Ограничение количества строк."},ProgressMobileExample={render:function(){return(0,jsx_runtime.jsx)(StepperProgressMobileTemplate,{})},parameters:{docs:{source:{code:StepperProgressMobile_templateraw_namespaceObject}}},name:"ProgressStepper. Мобильная версия."},ProgressCustomExample={render:function(){return(0,jsx_runtime.jsx)(StepperProgressCustomTemplate,{})},parameters:{docs:{source:{code:StepperProgressCustom_templateraw_namespaceObject}}},name:"ProgressStepper. Кастомное отображение проресса"};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: StepperPlaygroundRaw
      }
    }
  },
  name: 'Stepper. Playground.'
}`,...Playground.parameters?.docs?.source}}},StepKindsExample.parameters={...StepKindsExample.parameters,docs:{...StepKindsExample.parameters?.docs,source:{originalSource:`{
  render: StepKindsStory,
  parameters: {
    docs: {
      source: {
        code: StepperStepKindsRaw
      }
    }
  },
  name: 'Stepper. Виды шагов.'
}`,...StepKindsExample.parameters?.docs?.source}}},AdaptiveExample.parameters={...AdaptiveExample.parameters,docs:{...AdaptiveExample.parameters?.docs,source:{originalSource:`{
  render: AdaptiveStory,
  parameters: {
    docs: {
      source: {
        code: StepperAdaptiveRaw
      }
    }
  },
  name: 'Stepper. Адаптив.'
}`,...AdaptiveExample.parameters?.docs?.source}}},CustomStepContentExample.parameters={...CustomStepContentExample.parameters,docs:{...CustomStepContentExample.parameters?.docs,source:{originalSource:`{
  render: CustomStepContentStory,
  parameters: {
    docs: {
      source: {
        code: StepperCustomStepContentRaw
      }
    }
  },
  name: 'Stepper. Кастомный StepContent.'
}`,...CustomStepContentExample.parameters?.docs?.source}}},ClickableLinksExample.parameters={...ClickableLinksExample.parameters,docs:{...ClickableLinksExample.parameters?.docs,source:{originalSource:`{
  render: ClickableLinksStory,
  parameters: {
    docs: {
      source: {
        code: StepperClickableLinksRaw
      }
    }
  },
  name: 'Stepper. Шаги в виде ссылок.'
}`,...ClickableLinksExample.parameters?.docs?.source}}},ClickPropExample.parameters={...ClickPropExample.parameters,docs:{...ClickPropExample.parameters?.docs,source:{originalSource:`{
  render: ClickPropStory,
  parameters: {
    docs: {
      source: {
        code: StepperClickPropRaw
      }
    }
  },
  name: 'Stepper. Кликабельные шаги.'
}`,...ClickPropExample.parameters?.docs?.source}}},PreviousStepsExample.parameters={...PreviousStepsExample.parameters,docs:{...PreviousStepsExample.parameters?.docs,source:{originalSource:`{
  render: PreviousStepsStory,
  parameters: {
    docs: {
      source: {
        code: StepperPreviousStepsRaw
      }
    }
  },
  name: 'Stepper. Возврат к предыдущим шагам.'
}`,...PreviousStepsExample.parameters?.docs?.source}}},MobileExample.parameters={...MobileExample.parameters,docs:{...MobileExample.parameters?.docs,source:{originalSource:`{
  render: MobileStory,
  parameters: {
    docs: {
      source: {
        code: StepperMobileRaw
      }
    }
  },
  name: 'Stepper. Мобильная версия.'
}`,...MobileExample.parameters?.docs?.source}}},ProgressExample.parameters={...ProgressExample.parameters,docs:{...ProgressExample.parameters?.docs,source:{originalSource:`{
  render: ProgressStory,
  parameters: {
    docs: {
      source: {
        code: StepperProgressRaw
      }
    }
  },
  name: 'ProgressStepper.'
}`,...ProgressExample.parameters?.docs?.source}}},ProgressPercentageExample.parameters={...ProgressPercentageExample.parameters,docs:{...ProgressPercentageExample.parameters?.docs,source:{originalSource:`{
  render: ProgressPercentageStory,
  parameters: {
    docs: {
      source: {
        code: StepperProgressPercentageRaw
      }
    }
  },
  name: 'ProgressStepper. Проценты.'
}`,...ProgressPercentageExample.parameters?.docs?.source}}},ProgressNextStepExample.parameters={...ProgressNextStepExample.parameters,docs:{...ProgressNextStepExample.parameters?.docs,source:{originalSource:`{
  render: ProgressNextStepStory,
  parameters: {
    docs: {
      source: {
        code: StepperProgressDisplayNextStepRaw
      }
    }
  },
  name: 'ProgressStepper. Отключение следующего шага.'
}`,...ProgressNextStepExample.parameters?.docs?.source}}},ProgressLineClampStepExample.parameters={...ProgressLineClampStepExample.parameters,docs:{...ProgressLineClampStepExample.parameters?.docs,source:{originalSource:`{
  render: ProgressLineClampStepStory,
  parameters: {
    docs: {
      source: {
        code: StepperProgressLineClampRaw
      }
    }
  },
  name: 'ProgressStepper. Ограничение количества строк.'
}`,...ProgressLineClampStepExample.parameters?.docs?.source}}},ProgressMobileExample.parameters={...ProgressMobileExample.parameters,docs:{...ProgressMobileExample.parameters?.docs,source:{originalSource:`{
  render: ProgressMobileStory,
  parameters: {
    docs: {
      source: {
        code: StepperProgressMobileRaw
      }
    }
  },
  name: 'ProgressStepper. Мобильная версия.'
}`,...ProgressMobileExample.parameters?.docs?.source}}},ProgressCustomExample.parameters={...ProgressCustomExample.parameters,docs:{...ProgressCustomExample.parameters?.docs,source:{originalSource:`{
  render: ProgressCustomStory,
  parameters: {
    docs: {
      source: {
        code: StepperProgressCustomRaw
      }
    }
  },
  name: 'ProgressStepper. Кастомное отображение проресса'
}`,...ProgressCustomExample.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","StepKindsExample","AdaptiveExample","CustomStepContentExample","ClickableLinksExample","ClickPropExample","PreviousStepsExample","MobileExample","ProgressExample","ProgressPercentageExample","ProgressNextStepExample","ProgressLineClampStepExample","ProgressMobileExample","ProgressCustomExample"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>checkOverflow});var checkOverflow=function(textContainer){return!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Stepper-stories-Stepper-stories.bb2ae86a.iframe.bundle.js.map