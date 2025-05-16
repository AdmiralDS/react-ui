"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5111],{"./node_modules/@admiral-ds/icons/build/system/StarSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgStarSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgStarSolid=function SvgStarSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"m12.62 3.31 2.47 4.98 5.51.8c.56.08.79.79.39 1.2L17 14.17l.93 5.48c.11.56-.5 1.01-1.02.74L12 17.81 7.08 20.4c-.51.27-1.11-.17-1.02-.74L7 14.17l-3.98-3.88c-.42-.41-.19-1.12.37-1.2l5.52-.8 2.46-4.98a.69.69 0 0 1 1.25 0"})))};__webpack_require__.p},"./src/components/List/stories/UnorderedList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UnorderedListVariantsExample:()=>UnorderedListVariantsExample,UnorderedPlaygroundExample:()=>UnorderedPlaygroundExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UnorderedList_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),UnorderedList=__webpack_require__("./src/components/List/UnorderedList.tsx"),T=__webpack_require__("./src/components/T/index.tsx"),List=__webpack_require__("./src/components/List/index.tsx"),TasksOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/TasksOutline.svg"),PeopleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PeopleOutline.svg"),EmailOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/EmailOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, auto);
  .desc {
    grid-column-start: 1;
    grid-column-end: span 2;
    margin-top: 20px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(_templateObject()),UnorderedListVariantsTemplate=function(props){return(0,jsx_runtime.jsxs)(Layout,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",className:"desc",children:"Bullet"}),(0,jsx_runtime.jsxs)(UnorderedList.X,_object_spread_props(_object_spread({},props),{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Уборка"}),(0,jsx_runtime.jsx)(List.ck,{children:"Покупка продуктов"}),(0,jsx_runtime.jsx)(List.ck,{children:"Работа"})]})),(0,jsx_runtime.jsxs)(UnorderedList.X,_object_spread_props(_object_spread({},props),{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Уборка"}),(0,jsx_runtime.jsx)(List.ck,{children:"Покупка продуктов"}),(0,jsx_runtime.jsx)(List.ck,{children:"Работа"})]})),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",className:"desc",children:"Virgule"}),(0,jsx_runtime.jsxs)(UnorderedList.X,_object_spread_props(_object_spread({},props),{styleType:"virgule",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Куриная грудка"}),(0,jsx_runtime.jsx)(List.ck,{children:"Сливки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Чеснок"})]})),(0,jsx_runtime.jsxs)(UnorderedList.X,_object_spread_props(_object_spread({},props),{styleType:"virgule",dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Куриная грудка"}),(0,jsx_runtime.jsx)(List.ck,{children:"Сливки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Чеснок"})]})),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",className:"desc",children:"Icon"}),(0,jsx_runtime.jsxs)(UnorderedList.X,_object_spread_props(_object_spread({},props),{styleType:"icon",children:[(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:TasksOutline.h}),"Задачи"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:EmailOutline.h}),"Почта"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:PeopleOutline.h}),"Встречи"]})]})),(0,jsx_runtime.jsxs)(UnorderedList.X,_object_spread_props(_object_spread({},props),{styleType:"icon",dimension:"s",children:[(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:TasksOutline.h}),"Задачи"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:EmailOutline.h}),"Почта"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:PeopleOutline.h}),"Встречи"]})]}))]})};try{UnorderedListVariantsTemplate.displayName="UnorderedListVariantsTemplate",UnorderedListVariantsTemplate.__docgenInfo={description:"",displayName:"UnorderedListVariantsTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:null,description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"bullet"'},{value:'"virgule"'}]}},gap:{defaultValue:null,description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/stories/UnorderedListVariants.template.tsx#UnorderedListVariantsTemplate"]={docgenInfo:UnorderedListVariantsTemplate.__docgenInfo,name:"UnorderedListVariantsTemplate",path:"src/components/List/stories/UnorderedListVariants.template.tsx#UnorderedListVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}var StarSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/StarSolid.svg");function UnorderedListPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function UnorderedListPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){UnorderedListPlayground_template_define_property(target,key,source[key])})}return target}function UnorderedListPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function UnorderedListPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):UnorderedListPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var UnorderedListPlaygroundTemplate=function(_param){var _param_styleType=_param.styleType,styleType=void 0===_param_styleType?"bullet":_param_styleType,props=_object_without_properties(_param,["styleType"]),withIcon="icon"===styleType;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(UnorderedList.X,UnorderedListPlayground_template_object_spread_props(UnorderedListPlayground_template_object_spread({},props),{styleType:styleType,children:[(0,jsx_runtime.jsxs)(List.ck,{children:[withIcon&&(0,jsx_runtime.jsx)(List.kp,{as:StarSolid.h}),"Текст строки"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[withIcon&&(0,jsx_runtime.jsx)(List.kp,{as:StarSolid.h}),"Текст строки"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[withIcon&&(0,jsx_runtime.jsx)(List.kp,{as:StarSolid.h}),"Текст строки"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[withIcon&&(0,jsx_runtime.jsx)(List.kp,{as:StarSolid.h}),"Текст строки"]})]}))})};try{UnorderedListPlaygroundTemplate.displayName="UnorderedListPlaygroundTemplate",UnorderedListPlaygroundTemplate.__docgenInfo={description:"",displayName:"UnorderedListPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"bullet"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"bullet"'},{value:'"virgule"'}]}},gap:{defaultValue:null,description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/stories/UnorderedListPlayground.template.tsx#UnorderedListPlaygroundTemplate"]={docgenInfo:UnorderedListPlaygroundTemplate.__docgenInfo,name:"UnorderedListPlaygroundTemplate",path:"src/components/List/stories/UnorderedListPlayground.template.tsx#UnorderedListPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}let UnorderedListVariants_templateraw_namespaceObject=`import * as React from 'react';
import { UnorderedList, ListItem, ListIcon, T } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';
import { ReactComponent as TasksOutline } from '@admiral-ds/icons/build/documents/TasksOutline.svg';
import { ReactComponent as PeopleOutline } from '@admiral-ds/icons/build/system/PeopleOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
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

export const UnorderedListVariantsTemplate = (props: UnorderedListProps) => {
  return (
    <Layout>
      <T font="Body/Body 1 Long" className="desc">
        Bullet
      </T>
      <UnorderedList {...props}>
        <ListItem>Уборка</ListItem>
        <ListItem>Покупка продуктов</ListItem>
        <ListItem>Работа</ListItem>
      </UnorderedList>
      <UnorderedList {...props} dimension="s">
        <ListItem>Уборка</ListItem>
        <ListItem>Покупка продуктов</ListItem>
        <ListItem>Работа</ListItem>
      </UnorderedList>
      <T font="Body/Body 1 Long" className="desc">
        Virgule
      </T>
      <UnorderedList {...props} styleType="virgule">
        <ListItem>Куриная грудка</ListItem>
        <ListItem>Сливки</ListItem>
        <ListItem>Чеснок</ListItem>
      </UnorderedList>
      <UnorderedList {...props} styleType="virgule" dimension="s">
        <ListItem>Куриная грудка</ListItem>
        <ListItem>Сливки</ListItem>
        <ListItem>Чеснок</ListItem>
      </UnorderedList>
      <T font="Body/Body 1 Long" className="desc">
        Icon
      </T>
      <UnorderedList {...props} styleType="icon">
        <ListItem>
          <ListIcon as={TasksOutline} />
          Задачи
        </ListItem>
        <ListItem>
          <ListIcon as={EmailOutline} />
          Почта
        </ListItem>
        <ListItem>
          <ListIcon as={PeopleOutline} />
          Встречи
        </ListItem>
      </UnorderedList>
      <UnorderedList {...props} styleType="icon" dimension="s">
        <ListItem>
          <ListIcon as={TasksOutline} />
          Задачи
        </ListItem>
        <ListItem>
          <ListIcon as={EmailOutline} />
          Почта
        </ListItem>
        <ListItem>
          <ListIcon as={PeopleOutline} />
          Встречи
        </ListItem>
      </UnorderedList>
    </Layout>
  );
};
`,UnorderedListPlayground_templateraw_namespaceObject=`import * as React from 'react';
import { UnorderedList, ListItem, ListIcon } from '@admiral-ds/react-ui';
import type { UnorderedListProps } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

export const UnorderedListPlaygroundTemplate = ({ styleType = 'bullet', ...props }: UnorderedListProps) => {
  const withIcon = styleType === 'icon';
  return (
    <>
      <UnorderedList {...props} styleType={styleType}>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
        <ListItem>{withIcon && <ListIcon as={StarSolid} />}Текст строки</ListItem>
      </UnorderedList>
    </>
  );
};
`;function UnorderedList_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function UnorderedList_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){UnorderedList_stories_define_property(target,key,source[key])})}return target}function UnorderedList_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function UnorderedList_stories_templateObject(){var data=UnorderedList_stories_tagged_template_literal([`
  height: 20px;
  width: 8px;
`]);return UnorderedList_stories_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=UnorderedList_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(UnorderedList_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(_templateObject1());let UnorderedList_stories={title:"Admiral-2.1/List/UnorderedList",decorators:void 0,component:UnorderedList.X,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["UnorderedList – компонент для вертикальной группировки связанных по смыслу текстовых пунктов. UnorderedList следует использовать, если вам необходим неупорядоченный список, когда смысл списка не меняется в зависимости от порядка элементов.",(0,jsx_runtime.jsx)(Separator,{}),"Компонент представлен в трех видах (Bullet, Virgule, Icon) и двух размерах (S и M)."]})},{})},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},gap:{control:{type:"text"}}}};var UnorderedPlaygroundExample={render:function(props){return(0,jsx_runtime.jsx)(UnorderedListPlaygroundTemplate,UnorderedList_stories_object_spread({},props))},parameters:{docs:{source:{code:UnorderedListPlayground_templateraw_namespaceObject}}},name:"Playground."},UnorderedListVariantsExample={render:function(props){return(0,jsx_runtime.jsx)(UnorderedListVariantsTemplate,UnorderedList_stories_object_spread({},props))},parameters:{docs:{source:{code:UnorderedListVariants_templateraw_namespaceObject}}},name:"UnorderedList. Виды и размеры."};UnorderedPlaygroundExample.parameters={...UnorderedPlaygroundExample.parameters,docs:{...UnorderedPlaygroundExample.parameters?.docs,source:{originalSource:`{
  render: UnorderedPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: UnorderedListPlaygroundRaw
      }
    }
  },
  name: 'Playground.'
}`,...UnorderedPlaygroundExample.parameters?.docs?.source}}},UnorderedListVariantsExample.parameters={...UnorderedListVariantsExample.parameters,docs:{...UnorderedListVariantsExample.parameters?.docs,source:{originalSource:`{
  render: UnorderedListVariantsStory,
  parameters: {
    docs: {
      source: {
        code: UnorderedListVariantsRaw
      }
    }
  },
  name: 'UnorderedList. Виды и размеры.'
}`,...UnorderedListVariantsExample.parameters?.docs?.source}}};let __namedExportsOrder=["UnorderedPlaygroundExample","UnorderedListVariantsExample"]}}]);
//# sourceMappingURL=components-List-stories-UnorderedList-stories.d4ca81c6.iframe.bundle.js.map