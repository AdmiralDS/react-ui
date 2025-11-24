"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5155],{"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 1 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
  & *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  `,`

  & > svg {
    height: `,`px;
    width: `,`px;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: `,`px;
  height: `,`px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:focus {
    > `,` {
      background-color: `,`;
    }
  }
  &:hover {
    > `,` {
      background-color: var(--admiral-color-Opacity_Hover, `,`);
    }
  }
  &:active {
    > `,` {
      background-color: var(--admiral-color-Opacity_Press, `,`);
    }
  }
  &:focus-visible {
    > `,` {
      background-color: transparent;
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: relative;
  padding: 0;
  margin: `,`px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: `,`px;
  width: `,`px;
  border-radius: var(--admiral-border-radius-Small, `,`);
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
  &:not(:disabled) {
    `,`
  }
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Label/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Is:()=>AdditionalLabel,JU:()=>Label,wQ:()=>MainLabel});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  text-align: left;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  text-align: right;
  margin-left: 8px;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: flex;
  justify-content: space-between;
  text-align: left;
  `,`
  color: var(--admiral-color-Neutral_Neutral50, `,`);

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }

  [data-focus-within] & {
    color: `,`;
  }
  [data-required-within] &:is(label)[required] `,`:first-child::after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, `,`);
  }
  margin-bottom: 8px;
`]);return _templateObject2=function _templateObject(){return data},data}var MainLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject()),AdditionalLabel=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject1()),Label=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.label(_templateObject2(),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Short"],function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.disabled?"":"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},MainLabel,function(p){return p.theme.color["Error/Error 60 Main"]});Label.displayName="Label";try{MainLabel.displayName="MainLabel",MainLabel.__docgenInfo={description:"",displayName:"MainLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#MainLabel"]={docgenInfo:MainLabel.__docgenInfo,name:"MainLabel",path:"src/components/Label/index.tsx#MainLabel"})}catch(__react_docgen_typescript_loader_error){}try{AdditionalLabel.displayName="AdditionalLabel",AdditionalLabel.__docgenInfo={description:"",displayName:"AdditionalLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#AdditionalLabel"]={docgenInfo:AdditionalLabel.__docgenInfo,name:"AdditionalLabel",path:"src/components/Label/index.tsx#AdditionalLabel"})}catch(__react_docgen_typescript_loader_error){}try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label/index.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Label/index.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProgressStepper/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>ProgressStepper});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),light=__webpack_require__("./src/components/themes/light/index.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),setFirstLetterToLowerCase=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return str.slice(0,1).toLowerCase()+str.slice(1)},setFirstLetterToUpperCase=function(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return str.slice(0,1).toUpperCase()+str.slice(1)},convertNumberToIntegerPercent=function(num){var max=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.round(100*num/max)};function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject6=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject()),ProgressWrapper=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 20"]}),Progress=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return p.theme.color["Primary/Primary 60 Main"]}),Header=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){return param.$mobile?"column":"row"},function(param){return!param.$mobile&&"  justify-content: space-between;"}),ActiveStep=styled_components_browser_esm.Ay.div(_templateObject4(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),ProgressText=styled_components_browser_esm.Ay.div(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 50"]},typography.Il["Caption/Caption 1"]),NextStep=styled_components_browser_esm.Ay.div(_templateObject6(),function(p){return p.theme.color["Neutral/Neutral 50"]},typography.Il["Caption/Caption 1"]),ProgressStepper=function(_param){var steps=_param.steps,tmp=_param.activeStep,activeStepProp=void 0===tmp?-1:tmp,_param_displayNextStepName=_param.displayNextStepName,_param_mobile=_param.mobile,locale=_param.locale,props=_object_without_properties(_param,["steps","activeStep","displayNextStepName","mobile","locale"]),theme=(0,styled_components_browser_esm.DP)()||light.d,stepName=(null==locale?void 0:locale.stepName)||theme.locales[theme.currentLocale].progressStepper.stepName,progressText=(null==locale?void 0:locale.progressText)||theme.locales[theme.currentLocale].progressStepper.progressText,renderNextStepName=(null==locale?void 0:locale.renderNextStepName)||theme.locales[theme.currentLocale].progressStepper.renderNextStepName,stepsAmount=steps.length,activeStep=activeStepProp>=0&&activeStepProp<stepsAmount?activeStepProp:-1,activeStepNumber=activeStep+1,nextStep=activeStep+1,nextStepContent=renderNextStepName(setFirstLetterToLowerCase(steps[nextStep])),fixedStepName=stepName[0],fixedStepNamePlural=stepName[stepName.length-1];return(0,jsx_runtime.jsxs)(Wrapper,_object_spread_props(_object_spread({},props),{children:[(0,jsx_runtime.jsxs)(Header,{$mobile:void 0!==_param_mobile&&_param_mobile,"aria-hidden":!0,children:[(0,jsx_runtime.jsx)(ActiveStep,{children:setFirstLetterToUpperCase(steps[activeStep])}),(0,jsx_runtime.jsx)(ProgressText,{children:progressText(activeStepNumber,stepsAmount,null==fixedStepNamePlural?void 0:fixedStepNamePlural.toLowerCase())})]}),(0,jsx_runtime.jsx)(ProgressWrapper,{children:(0,jsx_runtime.jsx)(Progress,{tabIndex:0,role:"progressbar","aria-valuemin":0,"aria-valuemax":stepsAmount,"aria-valuenow":activeStepNumber,"aria-valuetext":"".concat(fixedStepName," ").concat(activeStepNumber,": ").concat(steps[activeStep]),style:{width:"".concat(convertNumberToIntegerPercent(activeStepNumber,stepsAmount),"%")}})}),(void 0===_param_displayNextStepName||_param_displayNextStepName)&&steps[nextStep]&&(0,jsx_runtime.jsx)(NextStep,{"aria-hidden":!0,children:nextStepContent})]}))};ProgressStepper.displayName="ProgressStepper";try{ProgressStepper.displayName="ProgressStepper",ProgressStepper.__docgenInfo={description:"",displayName:"ProgressStepper",props:{steps:{defaultValue:null,description:"Массив шагов",name:"steps",required:!0,type:{name:"string[]"}},activeStep:{defaultValue:{value:"-1"},description:"Номер активного шага, соответствует индексу шага в массиве",name:"activeStep",required:!1,type:{name:"number"}},displayNextStepName:{defaultValue:{value:"true"},description:"Отображение/скрытие подписи о следующем шаге",name:"displayNextStepName",required:!1,type:{name:"boolean"}},mobile:{defaultValue:{value:"false"},description:"Мобильная версия компонента",name:"mobile",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ stepName?: [string, string]; progressText?: ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string); renderNextStepName?: ((nextStepName: string) => ReactNode) | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressStepper/index.tsx#ProgressStepper"]={docgenInfo:ProgressStepper.__docgenInfo,name:"ProgressStepper",path:"src/components/ProgressStepper/index.tsx#ProgressStepper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"},"./src/locales/locale.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ComponentProp:()=>ComponentProp,ThemeCurrentLocale:()=>ThemeCurrentLocale,ThemeNewLocale:()=>ThemeNewLocale,__namedExportsOrder:()=>__namedExportsOrder,default:()=>locale_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),light=__webpack_require__("./src/components/themes/light/index.ts"),Label=__webpack_require__("./src/components/Label/index.tsx"),Calendar=__webpack_require__("./src/components/Calendar/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 20px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject()),LocaleThemeCurrentLocaleTemplate=function(){var _useState=_sliced_to_array((0,react.useState)(null),2),selected=_useState[0],setSelected=_useState[1],_useState1=_sliced_to_array((0,react.useState)(null),2),selected2=_useState1[0],setSelected2=_useState1[1];return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Label.JU,{children:"Calendar in 'ru' locale"}),(0,jsx_runtime.jsx)(Calendar.V,{selected:selected,onChange:function(value){setSelected(value)}}),(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:function setUSALocale(theme){return theme?_object_spread_props(_object_spread({},theme),{currentLocale:"en-US"}):(light.d.currentLocale="en-US",light.d)},children:[(0,jsx_runtime.jsx)(Label.JU,{children:"Calendar in 'en-US' locale"}),(0,jsx_runtime.jsx)(Calendar.V,{selected:selected2,onChange:function(value){setSelected2(value)}})]})]})},T=__webpack_require__("./src/components/T/index.tsx");function LocaleThemeNewLocale_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function LocaleThemeNewLocale_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function LocaleThemeNewLocale_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function LocaleThemeNewLocale_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function LocaleThemeNewLocale_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function LocaleThemeNewLocale_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){LocaleThemeNewLocale_template_define_property(target,key,source[key])})}return target}function LocaleThemeNewLocale_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function LocaleThemeNewLocale_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):LocaleThemeNewLocale_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function LocaleThemeNewLocale_template_sliced_to_array(arr,i){return LocaleThemeNewLocale_template_array_with_holes(arr)||LocaleThemeNewLocale_template_iterable_to_array_limit(arr,i)||LocaleThemeNewLocale_template_unsupported_iterable_to_array(arr,i)||LocaleThemeNewLocale_template_non_iterable_rest()}function LocaleThemeNewLocale_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LocaleThemeNewLocale_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return LocaleThemeNewLocale_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return LocaleThemeNewLocale_template_array_like_to_array(o,minLen)}}function LocaleThemeNewLocale_template_templateObject(){var data=LocaleThemeNewLocale_template_tagged_template_literal([`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 24px;
  }
`]);return LocaleThemeNewLocale_template_templateObject=function _templateObject(){return data},data}var LocaleThemeNewLocale_template_Wrapper=styled_components_browser_esm.Ay.div(LocaleThemeNewLocale_template_templateObject()),LocaleThemeNewLocaleTemplate=function(){var _useState=LocaleThemeNewLocale_template_sliced_to_array((0,react.useState)(null),2),selected=_useState[0],setSelected=_useState[1];return(0,jsx_runtime.jsx)(LocaleThemeNewLocale_template_Wrapper,{children:(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:function setDeLocale(theme){var deLocale={firstDayOfWeek:1,badge:{amountAriaLabel:"Anzahl"},calendar:{backwardText:"Zurück",forwardText:"Vorwärts",nextMonthText:"Nächster Monat",previousMonthText:"Vorheriger Monat",returnText:"Zurück sein",selectYearText:"Wahl des Jahres",selectMonthText:"Monatsauswahl"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"In der Tabelle suchen"},hint:{closeButtonAriaLabel:"Tipp schließen"},imageViewer:{flipHorizontallyText:"Horizontal spiegeln",flipVerticallyText:"Vertikal spiegeln",rotateLeftText:"Nach links drehen",rotateRightText:"Nach rechts drehen",zoomInText:"Heranzoomen",zoomOutText:"Herauszoomen",backwardText:"Zurück",forwardText:"Weiterleiten"},modal:{closeButtonAriaLabel:"Modales Fenster schließen"},paginationOne:{itemsPerPageText:"Einträge pro Seite:",pageSelectLabel:function(page,totalPages){return"Seite ".concat(page," von ").concat(totalPages)},pageSizeSelectLabel:function(pageSize,total){return"Einträge ".concat(pageSize," von ").concat(total)},itemRangeText:function(min,max,total){return"".concat(min,"–").concat(max," einträge von ").concat(total)},pageRangeText:function(total){return"von ".concat(total," ").concat(1===total?"Seite":"Seiten")},backwardText:"Vorherige Seite, auswählen",forwardText:"Nächste Seite, auswählen"},paginationTwo:{inputPlaceholder:"№ Seiten",itemRangeText:function(min,max,total){return"".concat(min,"–").concat(max," einträge von ").concat(total)}},progressStepper:{renderNextStepName:function(stepName){return"Weiter - ".concat(stepName)},stepName:["schritt","schritte"],progressText:function(activeStepNumber,stepsAmount,stepNamePlural){return"".concat(activeStepNumber," von ").concat(stepsAmount," ").concat(stepNamePlural)}},select:{emptyMessage:"Keine Zufälle"},suggestInput:{emptyMessage:"Keine Zufälle"},table:{emptyMessage:"Keine Zufälle"},textArea:{copyTextMessage:"Text kopieren",copiedMessage:"Kopiert"}};return theme?LocaleThemeNewLocale_template_object_spread_props(LocaleThemeNewLocale_template_object_spread({},theme),{currentLocale:"de",locales:LocaleThemeNewLocale_template_object_spread_props(LocaleThemeNewLocale_template_object_spread({},theme.locales),{de:deLocale})}):(light.d.currentLocale="de",light.d.locales=LocaleThemeNewLocale_template_object_spread_props(LocaleThemeNewLocale_template_object_spread({},light.d.locales),{de:deLocale}),light.d)},children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Пользователь может создать свою локаль. Для этого в объект theme.locales добавляется соответсвующий ключ, значением которого является объект типа Locale. Данный объект содержит в себе перечисление текстовых констант для компонентов библиотеки, а также содержит свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва - число от 0 до 6) обозначает, с какого дня начинается неделя для данной локали, где 0 - это воскресенье."}),(0,jsx_runtime.jsx)(Label.JU,{children:"Calendar in 'de' locale"}),(0,jsx_runtime.jsx)(Calendar.V,{selected:selected,onChange:function(value){setSelected(value)}})]})})},ProgressStepper=__webpack_require__("./src/components/ProgressStepper/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx");function LocaleProp_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function LocaleProp_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function LocaleProp_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function LocaleProp_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function LocaleProp_template_sliced_to_array(arr,i){return LocaleProp_template_array_with_holes(arr)||LocaleProp_template_iterable_to_array_limit(arr,i)||LocaleProp_template_unsupported_iterable_to_array(arr,i)||LocaleProp_template_non_iterable_rest()}function LocaleProp_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LocaleProp_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return LocaleProp_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return LocaleProp_template_array_like_to_array(o,minLen)}}function LocaleProp_template_templateObject(){var data=LocaleProp_template_tagged_template_literal([`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 24px;
  }
`]);return LocaleProp_template_templateObject=function _templateObject(){return data},data}var LocaleProp_template_Wrapper=styled_components_browser_esm.Ay.div(LocaleProp_template_templateObject()),LocalePropTemplate=function(){var _useState=LocaleProp_template_sliced_to_array((0,react.useState)(0),2),activeStep=_useState[0],setActiveStep=_useState[1];return(0,jsx_runtime.jsxs)(LocaleProp_template_Wrapper,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"В некоторых случаях может быть необходимо изменить значения текстовых констант для отдельных компонентов. Для этого у компонентов, использующих текстовые константы, есть специальный параметр locale - объект, в котором можно задать альтернативные значения текстовых констант, отличные от тех, что заданы в theme.locales. Текстовая константа, заданная через пропс locale компонента имеет больший приоритет, чем та же константа, заданная в theme.locale."}),(0,jsx_runtime.jsx)(ProgressStepper.z,{steps:["Определение стратегии","Анализ","Проектирование","Реализация","Тестирование","Внедрение","Техническая поддержка"],activeStep:activeStep,locale:{stepName:["этап","этапов"],renderNextStepName:function(stepName){return"Далее следует этап - ".concat(stepName)}}}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",disabled:activeStep<=0,onClick:function(){return setActiveStep(activeStep-1)},style:{marginRight:"40px"},children:"Назад"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",disabled:activeStep>=6,onClick:function(){return setActiveStep(activeStep+1)},children:"Вперёд"})]})]})};let LocaleThemeCurrentLocale_templateraw_namespaceObject=`import { useState } from 'react';
import { LIGHT_THEME, Label, Calendar } from '@admiral-ds/react-ui';
import type { Theme } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 20px;
  }
\`;

export const LocaleThemeCurrentLocaleTemplate = () => {
  function setUSALocale(theme?: Theme): Theme {
    if (theme) {
      return { ...theme, currentLocale: 'en-US' };
    }
    LIGHT_THEME.currentLocale = 'en-US';
    return LIGHT_THEME;
  }
  const [selected, setSelected] = useState<Date | null>(null);
  const [selected2, setSelected2] = useState<Date | null>(null);

  return (
    <Wrapper>
      <Label>Calendar in 'ru' locale</Label>
      <Calendar
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
      <ThemeProvider theme={setUSALocale}>
        <Label>Calendar in 'en-US' locale</Label>
        <Calendar
          selected={selected2}
          onChange={(value: any) => {
            setSelected2(value);
          }}
        />
      </ThemeProvider>
    </Wrapper>
  );
};
`,LocaleThemeNewLocale_templateraw_namespaceObject=`import { useState } from 'react';
import { LIGHT_THEME, Label, Calendar, T } from '@admiral-ds/react-ui';
import type { Theme, Locale } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 24px;
  }
\`;

export const LocaleThemeNewLocaleTemplate = () => {
  function setDeLocale(theme?: Theme): Theme {
    const deLocale: Locale = {
      /** Число от 0 до 6, где 0 - это воскресенье */
      firstDayOfWeek: 1,
      badge: {
        amountAriaLabel: 'Anzahl',
      },
      calendar: {
        backwardText: 'Zur\xfcck',
        forwardText: 'Vorw\xe4rts',
        nextMonthText: 'N\xe4chster Monat',
        previousMonthText: 'Vorheriger Monat',
        returnText: 'Zur\xfcck sein',
        selectYearText: 'Wahl des Jahres',
        selectMonthText: 'Monatsauswahl',
      },
      fileInput: {
        metricUnits: ['Kb', 'Mb', 'Gb'],
      },
      groupActionsPane: {
        inputPlaceholder: 'In der Tabelle suchen',
      },
      hint: {
        closeButtonAriaLabel: 'Tipp schlie\xdfen',
      },
      imageViewer: {
        flipHorizontallyText: 'Horizontal spiegeln',
        flipVerticallyText: 'Vertikal spiegeln',
        rotateLeftText: 'Nach links drehen',
        rotateRightText: 'Nach rechts drehen',
        zoomInText: 'Heranzoomen',
        zoomOutText: 'Herauszoomen',
        backwardText: 'Zur\xfcck',
        forwardText: 'Weiterleiten',
      },
      modal: {
        closeButtonAriaLabel: 'Modales Fenster schlie\xdfen',
      },
      paginationOne: {
        itemsPerPageText: 'Eintr\xe4ge pro Seite:',
        pageSelectLabel: (page: number, totalPages: number) => \`Seite \${page} von \${totalPages}\`,
        pageSizeSelectLabel: (pageSize: number, total: number) => \`Eintr\xe4ge \${pageSize} von \${total}\`,
        itemRangeText: (min: number, max: number, total: number) => \`\${min}–\${max} eintr\xe4ge von \${total}\`,
        pageRangeText: (total: number) => \`von \${total} \${total === 1 ? 'Seite' : 'Seiten'}\`,
        backwardText: 'Vorherige Seite, ausw\xe4hlen',
        forwardText: 'N\xe4chste Seite, ausw\xe4hlen',
      },
      paginationTwo: {
        inputPlaceholder: '№ Seiten',
        itemRangeText: (min: number, max: number, total: number) => \`\${min}–\${max} eintr\xe4ge von \${total}\`,
      },
      progressStepper: {
        renderNextStepName: (stepName: string) => \`Weiter - \${stepName}\`,
        stepName: ['schritt', 'schritte'],
        progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
          \`\${activeStepNumber} von \${stepsAmount} \${stepNamePlural}\`,
      },
      select: {
        emptyMessage: 'Keine Zuf\xe4lle',
      },
      suggestInput: {
        emptyMessage: 'Keine Zuf\xe4lle',
      },
      table: {
        emptyMessage: 'Keine Zuf\xe4lle',
      },
      textArea: {
        copyTextMessage: 'Text kopieren',
        copiedMessage: 'Kopiert',
      },
    };
    if (theme) {
      return { ...theme, currentLocale: 'de', locales: { ...theme.locales, de: deLocale } };
    }
    LIGHT_THEME.currentLocale = 'de';
    LIGHT_THEME.locales = { ...LIGHT_THEME.locales, de: deLocale };
    return LIGHT_THEME;
  }
  const [selected, setSelected] = useState<Date | null>(null);

  return (
    <Wrapper>
      <ThemeProvider theme={setDeLocale}>
        <T font="Body/Body 1 Long" as="div">
          Пользователь может создать свою локаль. Для этого в объект theme.locales добавляется соответсвующий ключ,
          значением которого является объект типа Locale. Данный объект содержит в себе перечисление текстовых констант
          для компонентов библиотеки, а также содержит свойство firstDayOfWeek. Свойство firstDayOfWeek (значение св-ва
          - число от 0 до 6) обозначает, с какого дня начинается неделя для данной локали, где 0 - это воскресенье.
        </T>
        <Label>Calendar in 'de' locale</Label>
        <Calendar
          selected={selected}
          onChange={(value: any) => {
            setSelected(value);
          }}
        />
      </ThemeProvider>
    </Wrapper>
  );
};
`,LocaleProp_templateraw_namespaceObject=`import { useState } from 'react';
import { ProgressStepper, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 24px;
  }
\`;

export const LocalePropTemplate = () => {
  const steps = [
    'Определение стратегии',
    'Анализ',
    'Проектирование',
    'Реализация',
    'Тестирование',
    'Внедрение',
    'Техническая поддержка',
  ];
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        В некоторых случаях может быть необходимо изменить значения текстовых констант для отдельных компонентов. Для
        этого у компонентов, использующих текстовые константы, есть специальный параметр locale - объект, в котором
        можно задать альтернативные значения текстовых констант, отличные от тех, что заданы в theme.locales. Текстовая
        константа, заданная через пропс locale компонента имеет больший приоритет, чем та же константа, заданная в
        theme.locale.
      </T>
      <ProgressStepper
        steps={steps}
        activeStep={activeStep}
        locale={{
          stepName: ['этап', 'этапов'],
          renderNextStepName: (stepName: string) => \`Далее следует этап - \${stepName}\`,
        }}
      />
      <div>
        <Button
          dimension="s"
          disabled={activeStep <= 0}
          onClick={() => setActiveStep(activeStep - 1)}
          style={{ marginRight: '40px' }}
        >
          Назад
        </Button>
        <Button dimension="s" disabled={activeStep >= 6} onClick={() => setActiveStep(activeStep + 1)}>
          Вперёд
        </Button>
      </div>
    </Wrapper>
  );
};
`;function locale_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function locale_stories_templateObject(){var data=locale_stories_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return locale_stories_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=locale_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(locale_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(_templateObject1());let locale_stories={title:"Locales",decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компоненты Admiral 2.1 поддерживают локализацию, и все текстовые константы в компонентах меняют своё значение при смене локали.",(0,jsx_runtime.jsx)(Separator,{}),"Текущая локаль задается в теме в свойстве currentLocale (значение по умолчанию - ru). В качестве значения currentLocale выступает строковый код локали, совместимый с методами Intl, и перечисленный в качестве ключа в другом свойстве темы - в объекте locales.",(0,jsx_runtime.jsx)(Separator,{}),"Объект theme.locales предтавляет собой перечисление локалей, поддерживаемых библиотекой: где ключами объекта выступают строковые коды локалей, а значениями объекты типа Locale с набором текстовых констант, соответствующих определенной локали.",(0,jsx_runtime.jsx)(Separator,{}),"Библиотека поддерживает три локали: ru, en, en-US. Чтобы переключить дефолтную русскую локаль на иную достаточно с помощью ThemeProvider изменить значение theme.currentLocale и убедиться, что данное значение содержится в theme.locales. Также пользователь всегда может добавить свою локаль, добавив соответствующий объект в theme.locales."]})},{})}};var ThemeCurrentLocale={render:function(){return(0,jsx_runtime.jsx)(LocaleThemeCurrentLocaleTemplate,{})},parameters:{docs:{source:{code:LocaleThemeCurrentLocale_templateraw_namespaceObject}}},name:"Пример использования календаря в русской и американской локалях"},ThemeNewLocale={render:function(){return(0,jsx_runtime.jsx)(LocaleThemeNewLocaleTemplate,{})},parameters:{docs:{source:{code:LocaleThemeNewLocale_templateraw_namespaceObject}}},name:"Пример определения новой локали (немецкой)"},ComponentProp={render:function(){return(0,jsx_runtime.jsx)(LocalePropTemplate,{})},parameters:{docs:{source:{code:LocaleProp_templateraw_namespaceObject}}},name:"Пример переопределения текстовых констант с помощью пропса locale в компоненте ProgressStepper"};ThemeCurrentLocale.parameters={...ThemeCurrentLocale.parameters,docs:{...ThemeCurrentLocale.parameters?.docs,source:{originalSource:`{
  render: LocaleThemeCurrentLocaleStory,
  parameters: {
    docs: {
      source: {
        code: LocaleThemeCurrentLocaleRaw
      }
    }
  },
  name: 'Пример использования календаря в русской и американской локалях'
}`,...ThemeCurrentLocale.parameters?.docs?.source}}},ThemeNewLocale.parameters={...ThemeNewLocale.parameters,docs:{...ThemeNewLocale.parameters?.docs,source:{originalSource:`{
  render: LocaleThemeNewLocaleStory,
  parameters: {
    docs: {
      source: {
        code: LocaleThemeNewLocaleRaw
      }
    }
  },
  name: 'Пример определения новой локали (немецкой)'
}`,...ThemeNewLocale.parameters?.docs?.source}}},ComponentProp.parameters={...ComponentProp.parameters,docs:{...ComponentProp.parameters?.docs,source:{originalSource:`{
  render: LocalePropStory,
  parameters: {
    docs: {
      source: {
        code: LocalePropRaw
      }
    }
  },
  name: 'Пример переопределения текстовых констант с помощью пропса locale в компоненте ProgressStepper'
}`,...ComponentProp.parameters?.docs?.source}}};let __namedExportsOrder=["ThemeCurrentLocale","ThemeNewLocale","ComponentProp"]}}]);
//# sourceMappingURL=locales-locale-stories.57d312cc.iframe.bundle.js.map