"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[308],{"./src/components/List/OrderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>OrderedList});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/style.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var OrderedList=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_styleType=_param.styleType,_param_gap=_param.gap,markerCssMixin=_param.markerCssMixin,props=_object_without_properties(_param,["children","dimension","styleType","gap","markerCssMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.ti,_object_spread_props(_object_spread({ref:ref,"data-dimension":dimension,$dimension:dimension,$styleType:void 0===_param_styleType?"numbers":_param_styleType,$gap:void 0===_param_gap?"8px":_param_gap,$markerCssMixin:markerCssMixin},props),{children:children}))});OrderedList.displayName="OrderedList";try{OrderedList.displayName="OrderedList",OrderedList.__docgenInfo={description:"",displayName:"OrderedList",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"numbers"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"numbers"'},{value:'"lower-letters"'},{value:'"upper-letters"'}]}},gap:{defaultValue:{value:"8px"},description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/OrderedList.tsx#OrderedList"]={docgenInfo:OrderedList.__docgenInfo,name:"OrderedList",path:"src/components/List/OrderedList.tsx#OrderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/List/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ck:()=>ListItem,kp:()=>ListIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/style.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ListItem=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var children=_param.children,props=_object_without_properties(_param,["children"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.Pt,_object_spread_props(_object_spread({ref:ref},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.be,{children:children})}))});ListItem.displayName="ListItem";var ListIcon=function(_param){var as=_param.as,color=_param.color,props=_object_without_properties(_param,["as","color"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.In,_object_spread({role:"presentation",as:as,color:color},props))};ListIcon.displayName="ListIcon";try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/index.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/components/List/index.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/List/stories/OrderedList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OrderedListVariantsExample:()=>OrderedListVariantsExample,OrderedPlaygroundExample:()=>OrderedPlaygroundExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>OrderedList_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OrderedList=__webpack_require__("./src/components/List/OrderedList.tsx"),T=__webpack_require__("./src/components/T/index.tsx"),List=__webpack_require__("./src/components/List/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, auto);
  .desc {
    grid-column-start: 1;
    grid-column-end: span 2;
    margin-top: 20px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(_templateObject()),OrderedListVariantsTemplate=function(props){return(0,jsx_runtime.jsxs)(Layout,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",className:"desc",children:"Numbers"}),(0,jsx_runtime.jsxs)(OrderedList._,_object_spread_props(_object_spread({},props),{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Обработка запроса"}),(0,jsx_runtime.jsx)(List.ck,{children:"Исследование"}),(0,jsx_runtime.jsx)(List.ck,{children:"Подведение итогов"})]})),(0,jsx_runtime.jsxs)(OrderedList._,_object_spread_props(_object_spread({},props),{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Обработка запроса"}),(0,jsx_runtime.jsx)(List.ck,{children:"Исследование"}),(0,jsx_runtime.jsx)(List.ck,{children:"Подведение итогов"})]})),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",className:"desc",children:"Letters lower"}),(0,jsx_runtime.jsxs)(OrderedList._,_object_spread_props(_object_spread({},props),{styleType:"lower-letters",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Обработка запроса"}),(0,jsx_runtime.jsx)(List.ck,{children:"Исследование"}),(0,jsx_runtime.jsx)(List.ck,{children:"Подведение итогов"})]})),(0,jsx_runtime.jsxs)(OrderedList._,_object_spread_props(_object_spread({},props),{styleType:"lower-letters",dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Обработка запроса"}),(0,jsx_runtime.jsx)(List.ck,{children:"Исследование"}),(0,jsx_runtime.jsx)(List.ck,{children:"Подведение итогов"})]})),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",className:"desc",children:"Letters upper"}),(0,jsx_runtime.jsxs)(OrderedList._,_object_spread_props(_object_spread({},props),{styleType:"upper-letters",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Обработка запроса"}),(0,jsx_runtime.jsx)(List.ck,{children:"Исследование"}),(0,jsx_runtime.jsx)(List.ck,{children:"Подведение итогов"})]})),(0,jsx_runtime.jsxs)(OrderedList._,_object_spread_props(_object_spread({},props),{styleType:"upper-letters",dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Обработка запроса"}),(0,jsx_runtime.jsx)(List.ck,{children:"Исследование"}),(0,jsx_runtime.jsx)(List.ck,{children:"Подведение итогов"})]}))]})};try{OrderedListVariantsTemplate.displayName="OrderedListVariantsTemplate",OrderedListVariantsTemplate.__docgenInfo={description:"",displayName:"OrderedListVariantsTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:null,description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"numbers"'},{value:'"lower-letters"'},{value:'"upper-letters"'}]}},gap:{defaultValue:null,description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/stories/OrderedListVariants.template.tsx#OrderedListVariantsTemplate"]={docgenInfo:OrderedListVariantsTemplate.__docgenInfo,name:"OrderedListVariantsTemplate",path:"src/components/List/stories/OrderedListVariants.template.tsx#OrderedListVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}function OrderedListPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function OrderedListPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){OrderedListPlayground_template_define_property(target,key,source[key])})}return target}function OrderedListPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function OrderedListPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):OrderedListPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var OrderedListPlaygroundTemplate=function(_param){var _param_styleType=_param.styleType,props=_object_without_properties(_param,["styleType"]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(OrderedList._,OrderedListPlayground_template_object_spread_props(OrderedListPlayground_template_object_spread({},props),{styleType:void 0===_param_styleType?"numbers":_param_styleType,children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]}))})};try{OrderedListPlaygroundTemplate.displayName="OrderedListPlaygroundTemplate",OrderedListPlaygroundTemplate.__docgenInfo={description:"",displayName:"OrderedListPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"numbers"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"numbers"'},{value:'"lower-letters"'},{value:'"upper-letters"'}]}},gap:{defaultValue:null,description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/stories/OrderedListPlayground.template.tsx#OrderedListPlaygroundTemplate"]={docgenInfo:OrderedListPlaygroundTemplate.__docgenInfo,name:"OrderedListPlaygroundTemplate",path:"src/components/List/stories/OrderedListPlayground.template.tsx#OrderedListPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}let OrderedListVariants_templateraw_namespaceObject=`import * as React from 'react';
import { OrderedList, ListItem, T } from '@admiral-ds/react-ui';
import type { OrderedListProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div\`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, auto);
  .desc {
    grid-column-start: 1;
    grid-column-end: span 2;
    margin-top: 20px;
  }
\`;

export const OrderedListVariantsTemplate = (props: OrderedListProps) => {
  return (
    <Layout>
      <T font="Body/Body 1 Long" className="desc">
        Numbers
      </T>
      <OrderedList {...props}>
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <OrderedList {...props} dimension="s">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <T font="Body/Body 1 Long" className="desc">
        Letters lower
      </T>
      <OrderedList {...props} styleType="lower-letters">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <OrderedList {...props} styleType="lower-letters" dimension="s">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <T font="Body/Body 1 Long" className="desc">
        Letters upper
      </T>
      <OrderedList {...props} styleType="upper-letters">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
      <OrderedList {...props} styleType="upper-letters" dimension="s">
        <ListItem>Обработка запроса</ListItem>
        <ListItem>Исследование</ListItem>
        <ListItem>Подведение итогов</ListItem>
      </OrderedList>
    </Layout>
  );
};
`,OrderedListPlayground_templateraw_namespaceObject=`import * as React from 'react';
import { OrderedList, ListItem } from '@admiral-ds/react-ui';
import type { OrderedListProps } from '@admiral-ds/react-ui';

export const OrderedListPlaygroundTemplate = ({ styleType = 'numbers', ...props }: OrderedListProps) => {
  return (
    <>
      <OrderedList {...props} styleType={styleType}>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
        <ListItem>Текст строки</ListItem>
      </OrderedList>
    </>
  );
};
`;function OrderedList_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function OrderedList_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){OrderedList_stories_define_property(target,key,source[key])})}return target}function OrderedList_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function OrderedList_stories_templateObject(){var data=OrderedList_stories_tagged_template_literal([`
  height: 20px;
  width: 8px;
`]);return OrderedList_stories_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=OrderedList_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(OrderedList_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(_templateObject1());let OrderedList_stories={title:"Admiral-2.1/List/OrderedList",decorators:void 0,component:OrderedList._,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["OrderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. OrderedList следует использовать, если вам необходим упорядоченный, пронумерованный список.",(0,jsx_runtime.jsx)(Separator,{}),"Компонент представлен в двух видах (Numbers и Letters) и двух размерах (S и M). В списках Letters можно использовать как прописные (lower-letters), так и заглавные буквы (upper-letters)."]})},{})},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},gap:{control:{type:"text"}}}};var OrderedPlaygroundExample={render:function(props){return(0,jsx_runtime.jsx)(OrderedListPlaygroundTemplate,OrderedList_stories_object_spread({},props))},parameters:{docs:{source:{code:OrderedListPlayground_templateraw_namespaceObject}}},name:"Playground."},OrderedListVariantsExample={render:function(props){return(0,jsx_runtime.jsx)(OrderedListVariantsTemplate,OrderedList_stories_object_spread({},props))},parameters:{docs:{source:{code:OrderedListVariants_templateraw_namespaceObject}}},name:"OrderedList. Виды и размеры."};OrderedPlaygroundExample.parameters={...OrderedPlaygroundExample.parameters,docs:{...OrderedPlaygroundExample.parameters?.docs,source:{originalSource:`{
  render: OrderedPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: OrderedListPlaygroundRaw
      }
    }
  },
  name: 'Playground.'
}`,...OrderedPlaygroundExample.parameters?.docs?.source}}},OrderedListVariantsExample.parameters={...OrderedListVariantsExample.parameters,docs:{...OrderedListVariantsExample.parameters?.docs,source:{originalSource:`{
  render: OrderedListVariantsStory,
  parameters: {
    docs: {
      source: {
        code: OrderedListVariantsRaw
      }
    }
  },
  name: 'OrderedList. Виды и размеры.'
}`,...OrderedListVariantsExample.parameters?.docs?.source}}};let __namedExportsOrder=["OrderedPlaygroundExample","OrderedListVariantsExample"]},"./src/components/List/style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E2:()=>UnorderedListComponent,In:()=>Icon,Pt:()=>ListItemComponent,be:()=>ListItemContent,ti:()=>OrderedListComponent});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  @counter-style lower-cyrillic {
    system: fixed;
    symbols: а б в г д е ж з и к л м н о п р с т у ф х ц ч ш щ ы э ю я;
  }
  @counter-style upper-cyrillic {
    system: fixed;
    symbols: А Б В Г Д Е Ж З И К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ы Э Ю Я;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
        `,`
        content: counter(admiral-list-counter, lower-cyrillic) ')';
      `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
        `,`
        content: counter(admiral-list-counter, upper-cyrillic) ')';
      `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
        content: '—';
      `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
        content: counters(admiral-list-counter, '.') '.';
      `]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
        content: '•';
        /** Размер шрифта, при котором достигается необходимый размер точки */
        font-size: 18px;
        color: var(--admiral-color-Neutral_Neutral50, `,`);
      `]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: `,`;
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: admiral-list-counter 0;

  & > li ul,
  & > li ol {
    margin-top: `,`;
  }
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  display: inline-flex;
  flex-shrink: 0;
  margin-inline-end: 8px;
  `,`
  height: `,`px;
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  `,`
  & > li::before {
    `,`
    justify-content: flex-start;
    min-width: `,`;
    `,`
  }
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  `,`
  & > li::before {
    `,`
    justify-content: center;
    width: `,`px;
    `,`
  }
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  counter-increment: admiral-list-counter 1;
  display: inline-flex;

  ol[data-dimension='m'] &,
  ul[data-dimension='m'] & {
    `,`
  }
  ol[data-dimension='s'] &,
  ul[data-dimension='s'] & {
    `,`
  }
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
  display: block;
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  ul[data-dimension='m'] & {
    width: 24px;
    height: 24px;
  }
  ul[data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
  vertical-align: bottom;
  margin-inline-end: 8px;
  *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject12=function _templateObject(){return data},data}var cyrillicStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject());function getContent($styleType){switch($styleType){case"lower-letters":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),cyrillicStyle);case"upper-letters":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject2(),cyrillicStyle);case"virgule":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3());case"numbers":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject4());case"bullet":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 50"]});default:return"content: none;"}}var listMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject6(),function(p){return p.$gap},function(p){return p.$gap}),listMarkerMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject7(),function(p){return getContent(p.$styleType)},function(p){return"m"==p.$dimension?24:20}),OrderedListComponent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.ol(_templateObject8(),listMixin,listMarkerMixin,function(p){return"numbers"==p.$styleType?"auto":"".concat("m"==p.$dimension?24:20,"px")},function(p){return p.$markerCssMixin}),UnorderedListComponent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.ul(_templateObject9(),listMixin,listMarkerMixin,function(p){return"m"==p.$dimension?24:20},function(p){return p.$markerCssMixin}),ListItemComponent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.li(_templateObject10(),function(p){return p.theme.color["Neutral/Neutral 90"]},_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 1 Long"],_src_components_Typography__WEBPACK_IMPORTED_MODULE_1__.Il["Body/Body 2 Long"]),ListItemContent=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject11()),Icon=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.svg(_templateObject12(),function(p){return p.color?p.color:"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")})},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Special/Static White"'},{value:'"Neutral/Neutral 50"'},{value:'"Primary/Primary 70"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-List-stories-OrderedList-stories.f3f5d026.iframe.bundle.js.map