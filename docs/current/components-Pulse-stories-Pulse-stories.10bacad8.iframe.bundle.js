"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1435],{"./src/components/Pulse/stories/Pulse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DimensionExample:()=>DimensionExample,PlaygroundExample:()=>PlaygroundExample,StatusExample:()=>StatusExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pulse_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
 0% {
    width: 6px;
    height: 6px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }

  80% {
    width: 20px;
    height: 20px;
    opacity: 0%;
    border-width: 1.5px;
    filter: blur(0.66px);
  }

  100% {
    opacity: 0%;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
 0% {
    width: 10px;
    height: 10px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }
  80% {
    width: 28px;
    height: 28px;
    opacity: 0%;
    border-width: 2px;
    filter: blur(1px);
  }
  100% {
    opacity: 0%;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
 0% {
    width: 14px;
    height: 14px;
    opacity: 100%;
    border-width: 1px;
    filter: blur(0.33px);
  }
  80% {
    width: 36px;
    height: 36px;
    opacity: 0%;
    border-width: 3px;
    filter: blur(1.33px);
  }
  100% {
    opacity: 0%;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  block-size: `,`px;
  inline-size: `,`px;
  border-radius: 50%;
  background-color: `,`;

  &:before {
    position: absolute;
    content: '';
    background-color: transparent;
    border-radius: 50%;
    border-style: solid;
    border-color: `,`;
    box-sizing: border-box;
    animation-name: `,`;
    animation-duration: 2500ms;
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);
    animation-iteration-count: infinite;
  }

  `,`
`]);return _templateObject4=function _templateObject(){return data},data}var AnimationS=(0,styled_components_browser_esm.i7)(_templateObject()),AnimationM=(0,styled_components_browser_esm.i7)(_templateObject1()),AnimationL=(0,styled_components_browser_esm.i7)(_templateObject2()),getPulseColor=(0,styled_components_browser_esm.AH)(_templateObject3(),function(param){var theme=param.theme,$status=param.$status;switch($status){case"danger":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");default:return(null==$status?void 0:$status.background)||"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}}),PulseElement=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return"l"==p.$dimension?16:"m"==p.$dimension?12:8},function(p){return"l"==p.$dimension?16:"m"==p.$dimension?12:8},getPulseColor,getPulseColor,function(p){return"l"==p.$dimension?AnimationL:"m"==p.$dimension?AnimationM:AnimationS},function(p){return p.$cssMixin}),Pulse=function(_param){var _param_dimension=_param.dimension,_param_status=_param.status,cssMixin=_param.cssMixin,props=_object_without_properties(_param,["dimension","status","cssMixin"]);return(0,jsx_runtime.jsx)(PulseElement,_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$status:void 0===_param_status?"info":_param_status,$cssMixin:cssMixin},props))};try{Pulse.displayName="Pulse",Pulse.__docgenInfo={description:"",displayName:"Pulse",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},status:{defaultValue:{value:"info"},description:`Статус компонента (цветовое окрашивание).
Можно задать кастомный цвет через объект со свойством background`,name:"status",required:!1,type:{name:"PulseStatus | { background?: string; }"}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pulse/index.tsx#Pulse"]={docgenInfo:Pulse.__docgenInfo,name:"Pulse",path:"src/components/Pulse/index.tsx#Pulse"})}catch(__react_docgen_typescript_loader_error){}function PulsePlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PulsePlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PulsePlayground_template_define_property(target,key,source[key])})}return target}var PulsePlaygroundTemplate=function(props){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Pulse,PulsePlayground_template_object_spread({},props))})};try{PulsePlaygroundTemplate.displayName="PulsePlaygroundTemplate",PulsePlaygroundTemplate.__docgenInfo={description:"",displayName:"PulsePlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},status:{defaultValue:null,description:`Статус компонента (цветовое окрашивание).
Можно задать кастомный цвет через объект со свойством background`,name:"status",required:!1,type:{name:"PulseStatus | { background?: string; }"}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pulse/stories/PulsePlayground.template.tsx#PulsePlaygroundTemplate"]={docgenInfo:PulsePlaygroundTemplate.__docgenInfo,name:"PulsePlaygroundTemplate",path:"src/components/Pulse/stories/PulsePlayground.template.tsx#PulsePlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx");function PulseDimension_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PulseDimension_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PulseDimension_template_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function PulseDimension_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function PulseDimension_template_templateObject(){var data=PulseDimension_template_tagged_template_literal([`
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 20px;
  }
`]);return PulseDimension_template_templateObject=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(PulseDimension_template_templateObject()),PulseDimensionTemplate=function(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Компонент представлен в трёх размерах: L, M (по умолчанию) и S."}),(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(Pulse,_object_spread_props(PulseDimension_template_object_spread({},props),{dimension:"l"})),(0,jsx_runtime.jsx)(Pulse,_object_spread_props(PulseDimension_template_object_spread({},props),{dimension:"m"})),(0,jsx_runtime.jsx)(Pulse,_object_spread_props(PulseDimension_template_object_spread({},props),{dimension:"s"}))]})]})};try{PulseDimensionTemplate.displayName="PulseDimensionTemplate",PulseDimensionTemplate.__docgenInfo={description:"",displayName:"PulseDimensionTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},status:{defaultValue:null,description:`Статус компонента (цветовое окрашивание).
Можно задать кастомный цвет через объект со свойством background`,name:"status",required:!1,type:{name:"PulseStatus | { background?: string; }"}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pulse/stories/PulseDimension.template.tsx#PulseDimensionTemplate"]={docgenInfo:PulseDimensionTemplate.__docgenInfo,name:"PulseDimensionTemplate",path:"src/components/Pulse/stories/PulseDimension.template.tsx#PulseDimensionTemplate"})}catch(__react_docgen_typescript_loader_error){}function PulseStatus_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PulseStatus_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PulseStatus_template_define_property(target,key,source[key])})}return target}function PulseStatus_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function PulseStatus_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):PulseStatus_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function PulseStatus_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function PulseStatus_template_templateObject(){var data=PulseStatus_template_tagged_template_literal([`
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 20px;
  }
`]);return PulseStatus_template_templateObject=function _templateObject(){return data},data}var PulseStatus_template_Wrapper=styled_components_browser_esm.Ay.div(PulseStatus_template_templateObject()),PulseStatusTemplate=function(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Компонент выполнен в одном цвете (и основание и волна) и имеет четыре цвета-статуса: info (по умолчанию), danger, success, warning. Пользователь может задать свой кастомный цвет из палитры библиотеки. Для того, чтобы задать кастомный статус в параметр status нужно передать объект со свойством background и значением кастомного цвета."}),(0,jsx_runtime.jsxs)(PulseStatus_template_Wrapper,{children:[(0,jsx_runtime.jsx)(Pulse,PulseStatus_template_object_spread_props(PulseStatus_template_object_spread({},props),{status:"info"})),(0,jsx_runtime.jsx)(Pulse,PulseStatus_template_object_spread_props(PulseStatus_template_object_spread({},props),{status:"danger"})),(0,jsx_runtime.jsx)(Pulse,PulseStatus_template_object_spread_props(PulseStatus_template_object_spread({},props),{status:"success"})),(0,jsx_runtime.jsx)(Pulse,PulseStatus_template_object_spread_props(PulseStatus_template_object_spread({},props),{status:"warning"})),(0,jsx_runtime.jsx)(Pulse,PulseStatus_template_object_spread_props(PulseStatus_template_object_spread({},props),{status:{background:"#8A3FFC"}}))]})]})};try{PulseStatusTemplate.displayName="PulseStatusTemplate",PulseStatusTemplate.__docgenInfo={description:"",displayName:"PulseStatusTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},status:{defaultValue:null,description:`Статус компонента (цветовое окрашивание).
Можно задать кастомный цвет через объект со свойством background`,name:"status",required:!1,type:{name:"PulseStatus | { background?: string; }"}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pulse/stories/PulseStatus.template.tsx#PulseStatusTemplate"]={docgenInfo:PulseStatusTemplate.__docgenInfo,name:"PulseStatusTemplate",path:"src/components/Pulse/stories/PulseStatus.template.tsx#PulseStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}let PulsePlayground_templateraw_namespaceObject=`import { Pulse } from '@admiral-ds/react-ui';
import type { PulseProps } from '@admiral-ds/react-ui';

export const PulsePlaygroundTemplate = (props: PulseProps) => {
  return (
    <>
      <Pulse {...props} />
    </>
  );
};
`,PulseDimension_templateraw_namespaceObject=`import { Pulse, T } from '@admiral-ds/react-ui';
import type { PulseProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 20px;
  }
\`;

export const PulseDimensionTemplate = (props: PulseProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент представлен в трёх размерах: L, M (по умолчанию) и S.
      </T>
      <Wrapper>
        <Pulse {...props} dimension="l" />
        <Pulse {...props} dimension="m" />
        <Pulse {...props} dimension="s" />
      </Wrapper>
    </>
  );
};
`,PulseStatus_templateraw_namespaceObject=`import { Pulse, T } from '@admiral-ds/react-ui';
import type { PulseProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div\`
  display: flex;
  justify-content: center;
  & > * {
    margin: 0 20px;
  }
\`;

export const PulseStatusTemplate = (props: PulseProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент выполнен в одном цвете (и основание и волна) и имеет четыре цвета-статуса: info (по умолчанию),
        danger, success, warning. Пользователь может задать свой кастомный цвет из палитры библиотеки. Для того, чтобы
        задать кастомный статус в параметр status нужно передать объект со свойством background и значением кастомного
        цвета.
      </T>
      <Wrapper>
        <Pulse {...props} status="info" />
        <Pulse {...props} status="danger" />
        <Pulse {...props} status="success" />
        <Pulse {...props} status="warning" />
        <Pulse {...props} status={{ background: '#8A3FFC' }} />
      </Wrapper>
    </>
  );
};
`;function Pulse_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Pulse_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Pulse_stories_define_property(target,key,source[key])})}return target}function Pulse_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Pulse_stories_templateObject(){var data=Pulse_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Pulse_stories_templateObject=function _templateObject(){return data},data}function Pulse_stories_templateObject1(){var data=Pulse_stories_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return Pulse_stories_templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Pulse_stories_templateObject()),Separator=styled_components_browser_esm.Ay.div(Pulse_stories_templateObject1());let Pulse_stories={title:"Admiral-2.1/Pulse",decorators:void 0,component:Pulse,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент Pulse — анимированный компонент, используется для привлечения дополнительного внимания к определенному месту или элементу интерфейса. Компонент имеет зацикленную анимацию в виде расходящейся от основания концентрической исчезающей волны.",(0,jsx_runtime.jsx)(Separator,{}),"Не рекомендуется использовать больше одного компонента Pulse на странице во избежании визуального шума.",(0,jsx_runtime.jsx)(Separator,{}),"Учитывайте размер анимации. Она в два с небольшим раза больше размера компонента. Не ставьте компонент вплотную к границам фреймов, что бы не обрезалась анимированная волна."]})},{}),layout:"centered"},argTypes:{dimension:{options:["l","m","s"],control:{type:"radio"}},status:{options:["info","danger","success","warning"],control:{type:"radio"}},cssMixin:{control:!1}}};var PlaygroundExample={render:function(props){return(0,jsx_runtime.jsx)(PulsePlaygroundTemplate,Pulse_stories_object_spread({},props))},parameters:{docs:{source:{code:PulsePlayground_templateraw_namespaceObject}}},name:"Pulse. Playground"},DimensionExample={render:function(props){return(0,jsx_runtime.jsx)(PulseDimensionTemplate,Pulse_stories_object_spread({},props))},parameters:{docs:{source:{code:PulseDimension_templateraw_namespaceObject}}},name:"Pulse. Размеры"},StatusExample={render:function(props){return(0,jsx_runtime.jsx)(PulseStatusTemplate,Pulse_stories_object_spread({},props))},parameters:{docs:{source:{code:PulseStatus_templateraw_namespaceObject}}},name:"Pulse. Статусы"};PlaygroundExample.parameters={...PlaygroundExample.parameters,docs:{...PlaygroundExample.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: PulsePlaygroundRaw
      }
    }
  },
  name: 'Pulse. Playground'
}`,...PlaygroundExample.parameters?.docs?.source}}},DimensionExample.parameters={...DimensionExample.parameters,docs:{...DimensionExample.parameters?.docs,source:{originalSource:`{
  render: DimensionStory,
  parameters: {
    docs: {
      source: {
        code: PulseDimensionRaw
      }
    }
  },
  name: 'Pulse. Размеры'
}`,...DimensionExample.parameters?.docs?.source}}},StatusExample.parameters={...StatusExample.parameters,docs:{...StatusExample.parameters?.docs,source:{originalSource:`{
  render: StatusStory,
  parameters: {
    docs: {
      source: {
        code: PulseStatusRaw
      }
    }
  },
  name: 'Pulse. Статусы'
}`,...StatusExample.parameters?.docs?.source}}};let __namedExportsOrder=["PlaygroundExample","DimensionExample","StatusExample"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, `,`);
    border-color: var(--admiral-color-Neutral_Neutral20, `,`);
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 2s ease infinite;
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonAnimation=function(props){return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject(),props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"])},skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),function(props){return skeletonAnimation(props)});try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:`Dynamically adjust the rendered component or HTML tag, e.g.
\`\`\`
const StyledButton = styled.button\`\`

<StyledButton as="a" href="/foo">
  I'm an anchor now
</StyledButton>
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Pulse-stories-Pulse-stories.10bacad8.iframe.bundle.js.map