"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8993],{"./src/components/ProgressPage/stories/ProgressPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressPageAnimation:()=>ProgressPageAnimation,ProgressPageBase:()=>ProgressPageBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressPage_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  background: var(--admiral-color-Neutral_Neutral20, `,`);
  border-radius: 2px;
  min-width: 140px;
  min-height: 4px;
  display: flex;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  background: `,`;
  border-radius: 2px;
  transition: all 0.3s linear;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: flex;
  padding-bottom: 8px;
  justify-content: space-between;
  width: 100%;
  `,`
  color: `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([""]);return _templateObject3=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 20"]}),Progress=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){var theme=param.theme;return"error"===param.$appearance?"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}),Label=styled_components_browser_esm.Ay.div(_templateObject2(),typography.Il["Caption/Caption 1"],function(param){var theme=param.theme;return"error"===param.$appearance?"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}),Container=styled_components_browser_esm.Ay.div(_templateObject3()),ProgressPage=function(_param){var _param_percent=_param.percent,label=_param.label,_param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,props=_object_without_properties(_param,["percent","label","appearance"]);return(0,jsx_runtime.jsxs)(Container,_object_spread_props(_object_spread({},props),{children:[(0,jsx_runtime.jsx)(Label,{$appearance:appearance,children:label}),(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsx)(Progress,{$appearance:appearance,style:{width:"".concat(void 0===_param_percent?0:_param_percent,"%")}})})]}))};ProgressPage.displayName="ProgressPage";try{ProgressPage.displayName="ProgressPage",ProgressPage.__docgenInfo={description:"",displayName:"ProgressPage",props:{percent:{defaultValue:{value:"0"},description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Текст над прогрессбаром",name:"label",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:{value:"primary"},description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressPage/index.tsx#ProgressPage"]={docgenInfo:ProgressPage.__docgenInfo,name:"ProgressPage",path:"src/components/ProgressPage/index.tsx#ProgressPage"})}catch(__react_docgen_typescript_loader_error){}function ProgressPageBase_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ProgressPageBase_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ProgressPageBase_template_define_property(target,key,source[key])})}return target}function ProgressPageBase_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ProgressPageBase_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ProgressPageBase_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ProgressPageBase_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ProgressPageBase_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ProgressPageBase_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ProgressPageBaseTemplate=function(_param){var _param_percent=_param.percent,percent=void 0===_param_percent?50:_param_percent,props=ProgressPageBase_template_object_without_properties(_param,["percent"]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ProgressPage,ProgressPageBase_template_object_spread_props(ProgressPageBase_template_object_spread({},props),{label:props.label?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{children:props.label})}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"error"===props.appearance?"Ошибка загрузки":"Загрузка данных..."}),(0,jsx_runtime.jsxs)("div",{children:[" ",percent,"%"]})]}),percent:percent,role:"alert","aria-live":"assertive"}))})};try{ProgressPageBaseTemplate.displayName="ProgressPageBaseTemplate",ProgressPageBaseTemplate.__docgenInfo={description:"",displayName:"ProgressPageBaseTemplate",props:{percent:{defaultValue:{value:"50"},description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Текст над прогрессбаром",name:"label",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressPage/stories/ProgressPageBase.template.tsx#ProgressPageBaseTemplate"]={docgenInfo:ProgressPageBaseTemplate.__docgenInfo,name:"ProgressPageBaseTemplate",path:"src/components/ProgressPage/stories/ProgressPageBase.template.tsx#ProgressPageBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function ProgressPageAnimation_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ProgressPageAnimation_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ProgressPageAnimation_template_define_property(target,key,source[key])})}return target}function ProgressPageAnimation_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ProgressPageAnimation_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ProgressPageAnimation_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var ProgressPageAnimationTemplate=function(props){var _React_useState=_sliced_to_array(react.useState(0),2),tik=_React_useState[0],setTick=_React_useState[1];return react.useEffect(function(){var timerId=setTimeout(function(){return setTick(function(prev){return prev+1})},1e3);return tik>=20&&clearTimeout(timerId),function(){clearTimeout(timerId)}},[tik]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(ProgressPage,ProgressPageAnimation_template_object_spread_props(ProgressPageAnimation_template_object_spread({},props),{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"error"===props.appearance?"Ошибка загрузки":"Загрузка данных..."}),(0,jsx_runtime.jsxs)("div",{children:[" ",props.percent||tik,"%"]})]}),percent:props.percent||tik,role:"alert","aria-live":"assertive"}))})};try{ProgressPageAnimationTemplate.displayName="ProgressPageAnimationTemplate",ProgressPageAnimationTemplate.__docgenInfo={description:"",displayName:"ProgressPageAnimationTemplate",props:{percent:{defaultValue:null,description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"Текст над прогрессбаром",name:"label",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressPage/stories/ProgressPageAnimation.template.tsx#ProgressPageAnimationTemplate"]={docgenInfo:ProgressPageAnimationTemplate.__docgenInfo,name:"ProgressPageAnimationTemplate",path:"src/components/ProgressPage/stories/ProgressPageAnimation.template.tsx#ProgressPageAnimationTemplate"})}catch(__react_docgen_typescript_loader_error){}let ProgressPageBase_templateraw_namespaceObject=`import * as React from 'react';

import { ProgressPage } from '@admiral-ds/react-ui';
import type { ProgressPageProps } from '@admiral-ds/react-ui';

export const ProgressPageBaseTemplate = ({ percent = 50, ...props }: ProgressPageProps) => {
  return (
    <>
      <ProgressPage
        {...props}
        label={
          props.label ? (
            <>
              <div>{props.label}</div>
            </>
          ) : (
            <>
              <div>{props.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>
              <div> {percent}%</div>
            </>
          )
        }
        percent={percent}
        role="alert"
        aria-live="assertive"
      />
    </>
  );
};
`,ProgressPageAnimation_templateraw_namespaceObject=`import * as React from 'react';

import { ProgressPage } from '@admiral-ds/react-ui';
import type { ProgressPageProps } from '@admiral-ds/react-ui';

export const ProgressPageAnimationTemplate = (props: ProgressPageProps) => {
  const [tik, setTick] = React.useState(0);

  React.useEffect(() => {
    const counter = () => setTick((prev) => prev + 1);
    const timerId = setTimeout(counter, 1000);
    if (tik >= 20) {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [tik]);

  return (
    <>
      <ProgressPage
        {...props}
        label={
          <>
            <div>{props.appearance === 'error' ? 'Ошибка загрузки' : 'Загрузка данных...'}</div>
            <div> {props.percent || tik}%</div>
          </>
        }
        percent={props.percent || tik}
        role="alert"
        aria-live="assertive"
      />
    </>
  );
};
`;function ProgressPage_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ProgressPage_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ProgressPage_stories_define_property(target,key,source[key])})}return target}function ProgressPage_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ProgressPage_stories_templateObject(){var data=ProgressPage_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return ProgressPage_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(ProgressPage_stories_templateObject());let ProgressPage_stories={title:"Admiral-2.1/ProgressPage",decorators:void 0,component:ProgressPage,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Компонент для отображения прогресса загрузки страницы, либо контента на странице. Компонент может изменяться по ширине, минимальный размер 140px. Компонент имеет два сценария применения: Первый, когда мы, например, загружаем тяжелую страницу (или контент на ней) и показываем прогресс ее загрузки, при этом блокируется содержимое страницы и прогресс отображается оверлеем. Второй сценарий, более редкий, когда компонент используется как часть интерфейсов на странице и отображает прогресс какого-либо процесса, например опроса."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25008"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A25036"}]},args:{appearance:"primary"},argTypes:{appearance:{options:["primary","error"],control:{type:"radio"}},label:{control:{type:"text"}},percent:{control:{type:"number"}}}};var ProgressPageBase={render:function(props){return(0,jsx_runtime.jsx)(ProgressPageBaseTemplate,ProgressPage_stories_object_spread({},props))},parameters:{docs:{source:{code:ProgressPageBase_templateraw_namespaceObject}}},name:"Базовый пример"},ProgressPageAnimation={render:function(props){return(0,jsx_runtime.jsx)(ProgressPageAnimationTemplate,ProgressPage_stories_object_spread({},props))},parameters:{docs:{source:{code:ProgressPageAnimation_templateraw_namespaceObject}}},name:"Прогресс бар с анимацией"};ProgressPageBase.parameters={...ProgressPageBase.parameters,docs:{...ProgressPageBase.parameters?.docs,source:{originalSource:`{
  render: ProgressPageBaseStory,
  parameters: {
    docs: {
      source: {
        code: ProgressPageBaseRaw
      }
    }
  },
  name: 'Базовый пример'
}`,...ProgressPageBase.parameters?.docs?.source}}},ProgressPageAnimation.parameters={...ProgressPageAnimation.parameters,docs:{...ProgressPageAnimation.parameters?.docs,source:{originalSource:`{
  render: ProgressPageAnimationStory,
  parameters: {
    docs: {
      source: {
        code: ProgressPageAnimationRaw
      }
    }
  },
  name: 'Прогресс бар с анимацией'
}`,...ProgressPageAnimation.parameters?.docs?.source}}};let __namedExportsOrder=["ProgressPageBase","ProgressPageAnimation"]}}]);
//# sourceMappingURL=components-ProgressPage-stories-ProgressPage-stories.f701b067.iframe.bundle.js.map