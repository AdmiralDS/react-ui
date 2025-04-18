"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6037],{"./src/components/List/OrderedList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>OrderedList});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/List/style.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var OrderedList=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_styleType=_param.styleType,_param_gap=_param.gap,markerCssMixin=_param.markerCssMixin,props=_object_without_properties(_param,["children","dimension","styleType","gap","markerCssMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.ti,_object_spread_props(_object_spread({ref:ref,"data-dimension":dimension,$dimension:dimension,$styleType:void 0===_param_styleType?"numbers":_param_styleType,$gap:void 0===_param_gap?"8px":_param_gap,$markerCssMixin:markerCssMixin},props),{children:children}))});OrderedList.displayName="OrderedList";try{OrderedList.displayName="OrderedList",OrderedList.__docgenInfo={description:"",displayName:"OrderedList",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},styleType:{defaultValue:{value:"numbers"},description:"Стиль маркеров в списке",name:"styleType",required:!1,type:{name:"enum",value:[{value:'"numbers"'},{value:'"lower-letters"'},{value:'"upper-letters"'}]}},gap:{defaultValue:{value:"8px"},description:"Расстояние между пунктами списка. По умолчанию 8px",name:"gap",required:!1,type:{name:"Gap<string | number>"}},markerCssMixin:{defaultValue:null,description:"Css mixin для кастомизации стилей маркера",name:"markerCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/OrderedList.tsx#OrderedList"]={docgenInfo:OrderedList.__docgenInfo,name:"OrderedList",path:"src/components/List/OrderedList.tsx#OrderedList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/List/stories/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ListMarkerColorExample:()=>ListMarkerColorExample,ListMarkerCustomExample:()=>ListMarkerCustomExample,ListMultiLineExample:()=>ListMultiLineExample,ListNestedExample:()=>ListNestedExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>List_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),OrderedList=__webpack_require__("./src/components/List/OrderedList.tsx"),T=__webpack_require__("./src/components/T/index.tsx"),List=__webpack_require__("./src/components/List/index.tsx"),UnorderedList=__webpack_require__("./src/components/List/UnorderedList.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  height: `,`px;
`]);return _templateObject1=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(_templateObject()),Separator=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.$height||8}),ListNestedTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Списки могут быть вложенными, а разновидности могут смешиваться внутри вложенных группировок.",(0,jsx_runtime.jsx)(Separator,{}),"Отступ слева равен расстоянию от текста до левого края компонента вышестоящего уровня. То есть выравнивание идет по краю текста вышестоящего уровня."]}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsxs)(Layout,{children:[(0,jsx_runtime.jsxs)(OrderedList._,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(OrderedList._,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]}),(0,jsx_runtime.jsxs)(OrderedList._,{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(OrderedList._,{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]}),(0,jsx_runtime.jsxs)(UnorderedList.X,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(UnorderedList.X,{styleType:"virgule",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]}),(0,jsx_runtime.jsxs)(UnorderedList.X,{dimension:"s",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Текст строки",(0,jsx_runtime.jsxs)(UnorderedList.X,{dimension:"s",styleType:"virgule",children:[(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]}),(0,jsx_runtime.jsx)(List.ck,{children:"Текст строки"})]})]})]})},TasksOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/TasksOutline.svg"),PeopleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PeopleOutline.svg"),EmailOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/EmailOutline.svg");function ListMarkerColor_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ListMarkerColor_template_templateObject(){var data=ListMarkerColor_template_tagged_template_literal([`
  &&::before {
    color: `,`;
  }
`]);return ListMarkerColor_template_templateObject=function _templateObject(){return data},data}var ItemWithColoredMarker=(0,styled_components_browser_esm.Ay)(List.ck)(ListMarkerColor_template_templateObject(),function(p){return p.$color}),ListMarkerColorTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пользователь может кастомизировать цвет маркеров и иконок самостоятельно, как это продемонстрировано в данном примере."}),(0,jsx_runtime.jsxs)(UnorderedList.X,{children:[(0,jsx_runtime.jsx)(List.ck,{children:"Уборка"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Покупка продуктов",(0,jsx_runtime.jsxs)(UnorderedList.X,{children:[(0,jsx_runtime.jsx)(ItemWithColoredMarker,{$color:"blue",children:"Куриная грудка"}),(0,jsx_runtime.jsx)(ItemWithColoredMarker,{$color:"red",children:"Сливки"}),(0,jsx_runtime.jsx)(ItemWithColoredMarker,{$color:"green",children:"Чеснок"})]})]}),(0,jsx_runtime.jsxs)(List.ck,{children:["Работа",(0,jsx_runtime.jsxs)(UnorderedList.X,{styleType:"icon",children:[(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:TasksOutline.h,color:"blue"}),"Задачи"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:EmailOutline.h,color:"red"}),"Почта"]}),(0,jsx_runtime.jsxs)(List.ck,{children:[(0,jsx_runtime.jsx)(List.kp,{as:PeopleOutline.h,color:"green"}),"Встречи"]})]})]})]})]})},ListMultiLineTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пользователь может настроить необходимую ширину компонента самостоятельно, например, через атрибут style. По умолчанию компонент подстраивается под размеры родительского элемента."}),(0,jsx_runtime.jsxs)(UnorderedList.X,{style:{maxWidth:"500px"},children:[(0,jsx_runtime.jsx)(List.ck,{children:"First, let's set up your Segment Unify space. We'll take you to Segment to do this."}),(0,jsx_runtime.jsx)(List.ck,{children:"The segment uses IDs to find customer profiles. Give your IDs display names and select IDs to use when automatically finding profiles."}),(0,jsx_runtime.jsx)(List.ck,{children:"Customer profiles in your Segment Unify space can include a large number of traits. Select the traits you want to make available to Flex agents and give them display names."})]})]})};function ListMarkerCustom_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ListMarkerCustom_template_templateObject(){var data=ListMarkerCustom_template_tagged_template_literal([`
  content: counter(admiral-list-counter, lower-latin) ')';
`]);return ListMarkerCustom_template_templateObject=function _templateObject(){return data},data}function ListMarkerCustom_template_templateObject1(){var data=ListMarkerCustom_template_tagged_template_literal([`
  content: counter(admiral-list-counter, square);
`]);return ListMarkerCustom_template_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=ListMarkerCustom_template_tagged_template_literal([`
  content: '✓';
  color: green;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=ListMarkerCustom_template_tagged_template_literal([`
  height: `,`px;
`]);return _templateObject3=function _templateObject(){return data},data}var latinLettersMarker=(0,styled_components_browser_esm.AH)(ListMarkerCustom_template_templateObject()),squareMarker=(0,styled_components_browser_esm.AH)(ListMarkerCustom_template_templateObject1()),checkMarker=(0,styled_components_browser_esm.AH)(_templateObject2()),ListMarkerCustom_template_Separator=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return p.$height||8}),ListMarkerCustomTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Пользователь может кастомизировать внешний вид и контент маркеров в списках с помощью параметра markerCssMixin, задаваемого для компонентов OrderedList и UnorderedList.",(0,jsx_runtime.jsx)(ListMarkerCustom_template_Separator,{})," В компонентах OrderedList и UnorderedList также специально введен css счётчик с именем admiral-list-counter. Пользователи могут опираться на значение данного счетчика для задания контента маркеров с использованием css функций counter() и counters()."]}),(0,jsx_runtime.jsx)(ListMarkerCustom_template_Separator,{$height:24}),(0,jsx_runtime.jsxs)(OrderedList._,{styleType:"lower-letters",markerCssMixin:latinLettersMarker,children:[(0,jsx_runtime.jsx)(List.ck,{children:"Уборка"}),(0,jsx_runtime.jsxs)(List.ck,{children:["Покупка продуктов",(0,jsx_runtime.jsxs)(UnorderedList.X,{markerCssMixin:checkMarker,children:[(0,jsx_runtime.jsx)(List.ck,{children:"Куриная грудка"}),(0,jsx_runtime.jsx)(List.ck,{children:"Сливки"}),(0,jsx_runtime.jsx)(List.ck,{children:"Чеснок"})]})]}),(0,jsx_runtime.jsxs)(List.ck,{children:["Работа",(0,jsx_runtime.jsxs)(UnorderedList.X,{markerCssMixin:squareMarker,children:[(0,jsx_runtime.jsx)(List.ck,{children:"Задачи"}),(0,jsx_runtime.jsx)(List.ck,{children:"Почта"}),(0,jsx_runtime.jsx)(List.ck,{children:"Встречи"})]})]})]})]})};let ListNested_templateraw_namespaceObject=`import * as React from 'react';
import { OrderedList, UnorderedList, ListItem, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div\`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
\`;
const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

export const ListNestedTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Списки могут быть вложенными, а разновидности могут смешиваться внутри вложенных группировок.
        <Separator />
        Отступ слева равен расстоянию от текста до левого края компонента вышестоящего уровня. То есть выравнивание идет
        по краю текста вышестоящего уровня.
      </T>
      <Separator $height={24} />
      <Layout>
        <OrderedList>
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <OrderedList>
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </OrderedList>
        <OrderedList dimension="s">
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <OrderedList dimension="s">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </OrderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </OrderedList>
        <UnorderedList>
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <UnorderedList styleType="virgule">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </UnorderedList>
        <UnorderedList dimension="s">
          <ListItem>Текст строки</ListItem>
          <ListItem>
            Текст строки
            <UnorderedList dimension="s" styleType="virgule">
              <ListItem>Текст строки</ListItem>
              <ListItem>Текст строки</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>Текст строки</ListItem>
        </UnorderedList>
      </Layout>
    </>
  );
};
`,ListMarkerColor_templateraw_namespaceObject=`import * as React from 'react';
import { UnorderedList, ListItem, ListIcon, T } from '@admiral-ds/react-ui';
import { ReactComponent as TasksOutline } from '@admiral-ds/icons/build/documents/TasksOutline.svg';
import { ReactComponent as PeopleOutline } from '@admiral-ds/icons/build/system/PeopleOutline.svg';
import { ReactComponent as EmailOutline } from '@admiral-ds/icons/build/system/EmailOutline.svg';
import styled from 'styled-components';

const ItemWithColoredMarker = styled(ListItem)<{ $color: string }>\`
  &&::before {
    color: \${(p) => p.$color};
  }
\`;

export const ListMarkerColorTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пользователь может кастомизировать цвет маркеров и иконок самостоятельно, как это продемонстрировано в данном
        примере.
      </T>
      <UnorderedList>
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList>
            <ItemWithColoredMarker $color="blue">Куриная грудка</ItemWithColoredMarker>
            <ItemWithColoredMarker $color="red">Сливки</ItemWithColoredMarker>
            <ItemWithColoredMarker $color="green">Чеснок</ItemWithColoredMarker>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList styleType="icon">
            <ListItem>
              <ListIcon as={TasksOutline} color="blue" />
              Задачи
            </ListItem>
            <ListItem>
              <ListIcon as={EmailOutline} color="red" />
              Почта
            </ListItem>
            <ListItem>
              <ListIcon as={PeopleOutline} color="green" />
              Встречи
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </>
  );
};
`,ListMultiline_templateraw_namespaceObject=`import * as React from 'react';
import { UnorderedList, ListItem, T } from '@admiral-ds/react-ui';

export const ListMultiLineTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пользователь может настроить необходимую ширину компонента самостоятельно, например, через атрибут style. По
        умолчанию компонент подстраивается под размеры родительского элемента.
      </T>
      <UnorderedList style={{ maxWidth: '500px' }}>
        <ListItem>First, let's set up your Segment Unify space. We'll take you to Segment to do this.</ListItem>
        <ListItem>
          The segment uses IDs to find customer profiles. Give your IDs display names and select IDs to use when
          automatically finding profiles.
        </ListItem>
        <ListItem>
          Customer profiles in your Segment Unify space can include a large number of traits. Select the traits you want
          to make available to Flex agents and give them display names.
        </ListItem>
      </UnorderedList>
    </>
  );
};
`,ListMarkerCustom_templateraw_namespaceObject=`import * as React from 'react';
import { UnorderedList, OrderedList, ListItem, T } from '@admiral-ds/react-ui';
import styled, { css } from 'styled-components';

/**
 * Контент маркера может зависить от значения счетчика.
 * В компонентах OrderedList и UnorderedList используется счетчик с именем admiral-list-counter
 **/
const latinLettersMarker = css\`
  content: counter(admiral-list-counter, lower-latin) ')';
\`;

const squareMarker = css\`
  content: counter(admiral-list-counter, square);
\`;

const checkMarker = css\`
  content: '✓';
  color: green;
\`;

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

export const ListMarkerCustomTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Пользователь может кастомизировать внешний вид и контент маркеров в списках с помощью параметра markerCssMixin,
        задаваемого для компонентов OrderedList и UnorderedList.
        <Separator /> В компонентах OrderedList и UnorderedList также специально введен css счётчик с именем
        admiral-list-counter. Пользователи могут опираться на значение данного счетчика для задания контента маркеров с
        использованием css функций counter() и counters().
      </T>
      <Separator $height={24} />
      <OrderedList styleType="lower-letters" markerCssMixin={latinLettersMarker}>
        <ListItem>Уборка</ListItem>
        <ListItem>
          Покупка продуктов
          <UnorderedList markerCssMixin={checkMarker}>
            <ListItem>Куриная грудка</ListItem>
            <ListItem>Сливки</ListItem>
            <ListItem>Чеснок</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Работа
          <UnorderedList markerCssMixin={squareMarker}>
            <ListItem>Задачи</ListItem>
            <ListItem>Почта</ListItem>
            <ListItem>Встречи</ListItem>
          </UnorderedList>
        </ListItem>
      </OrderedList>
    </>
  );
};
`;function List_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function List_stories_templateObject(){var data=List_stories_tagged_template_literal([`
  height: `,`px;
  width: 8px;
`]);return List_stories_templateObject=function _templateObject(){return data},data}function List_stories_templateObject1(){var data=List_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return List_stories_templateObject1=function _templateObject(){return data},data}var List_stories_Separator=styled_components_browser_esm.Ay.div(List_stories_templateObject(),function(p){var _p_$height;return null!=(_p_$height=p.$height)?_p_$height:20}),Desc=styled_components_browser_esm.Ay.div(List_stories_templateObject1());let List_stories={title:"Admiral-2.1/List/Общие примеры",decorators:void 0,component:OrderedList._,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент для вертикальной группировки связанных по смыслу текстовых пунктов. Представлен в двух вариантах OrderedList и UnorderedList.",(0,jsx_runtime.jsx)(List_stories_Separator,{}),"Рекомендации:",(0,jsx_runtime.jsx)(List_stories_Separator,{}),"- Используйте список, если у вас есть два и более пунктов.",(0,jsx_runtime.jsx)(List_stories_Separator,{$height:8}),"- Простые списки, разделенные запятыми, могут не нуждаться в разметке, но длинные списки или группы ссылок должны ее иметь.",(0,jsx_runtime.jsx)(List_stories_Separator,{$height:8}),"- Организуйте списки так, чтобы пользователи могли понять взаимосвязь и группировку информации.",(0,jsx_runtime.jsx)(List_stories_Separator,{$height:8}),"- Создавайте структурированные списки. Их легче использовать, чем простые таблицы."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18581"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18684"}]},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},styleType:{options:["bullet","virgule","icon"],control:{type:"radio"}},gap:{control:{type:"text"}}}};var ListNestedExample={render:function(){return(0,jsx_runtime.jsx)(ListNestedTemplate,{})},parameters:{docs:{source:{code:ListNested_templateraw_namespaceObject}}},name:"Вложенные списки"},ListMarkerColorExample={render:function(){return(0,jsx_runtime.jsx)(ListMarkerColorTemplate,{})},parameters:{docs:{source:{code:ListMarkerColor_templateraw_namespaceObject}}},name:"Кастомный цвет маркера"},ListMarkerCustomExample={render:function(){return(0,jsx_runtime.jsx)(ListMarkerCustomTemplate,{})},parameters:{docs:{source:{code:ListMarkerCustom_templateraw_namespaceObject}}},name:"Кастомизация маркеров"},ListMultiLineExample={render:function(){return(0,jsx_runtime.jsx)(ListMultiLineTemplate,{})},parameters:{docs:{source:{code:ListMultiline_templateraw_namespaceObject}}},name:"Многострочность и регулировка ширины списка"};ListNestedExample.parameters={...ListNestedExample.parameters,docs:{...ListNestedExample.parameters?.docs,source:{originalSource:`{
  render: ListNestedStory,
  parameters: {
    docs: {
      source: {
        code: ListNestedRaw
      }
    }
  },
  name: 'Вложенные списки'
}`,...ListNestedExample.parameters?.docs?.source}}},ListMarkerColorExample.parameters={...ListMarkerColorExample.parameters,docs:{...ListMarkerColorExample.parameters?.docs,source:{originalSource:`{
  render: ListMarkerColorStory,
  parameters: {
    docs: {
      source: {
        code: ListMarkerColorRaw
      }
    }
  },
  name: 'Кастомный цвет маркера'
}`,...ListMarkerColorExample.parameters?.docs?.source}}},ListMarkerCustomExample.parameters={...ListMarkerCustomExample.parameters,docs:{...ListMarkerCustomExample.parameters?.docs,source:{originalSource:`{
  render: ListMarkerCustomStory,
  parameters: {
    docs: {
      source: {
        code: ListMarkerCustomRaw
      }
    }
  },
  name: 'Кастомизация маркеров'
}`,...ListMarkerCustomExample.parameters?.docs?.source}}},ListMultiLineExample.parameters={...ListMultiLineExample.parameters,docs:{...ListMultiLineExample.parameters?.docs,source:{originalSource:`{
  render: ListMultiLineStory,
  parameters: {
    docs: {
      source: {
        code: ListMultilineRaw
      }
    }
  },
  name: 'Многострочность и регулировка ширины списка'
}`,...ListMultiLineExample.parameters?.docs?.source}}};let __namedExportsOrder=["ListNestedExample","ListMarkerColorExample","ListMarkerCustomExample","ListMultiLineExample"]}}]);
//# sourceMappingURL=components-List-stories-List-stories.47dc2e1b.iframe.bundle.js.map