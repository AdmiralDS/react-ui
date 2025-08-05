"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3819],{"./src/components/Divider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  background: `,`;
  `,`;
  `,`;
`]);return _templateObject3=function _templateObject(){return data},data}var getBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var theme=param.theme,$appearance=param.$appearance;switch($appearance){case"subtle":return"var(--admiral-color-Neutral_Neutral10, ".concat(theme.color["Neutral/Neutral 10"],")");case"strong":return"var(--admiral-color-Neutral_Neutral40, ".concat(theme.color["Neutral/Neutral 40"],")");case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"staticWhite":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"default":return"var(--admiral-color-Neutral_Neutral20, ".concat(theme.color["Neutral/Neutral 20"],")");default:return $appearance}});function getThicknessSize(dimension){return"s"===dimension?"1px":"2px"}var getThickness=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $dimension=param.$dimension;return"horizontal"===param.$orientation?"height: ".concat(getThicknessSize($dimension)):"width: ".concat(getThicknessSize($dimension))}),getLength=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject2(),function(param){var $length=param.$length;return"horizontal"===param.$orientation?"width: ".concat($length):"height: ".concat($length)}),StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject3(),getBackground,getThickness,getLength),Divider=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,_param_appearance=_param.appearance,_param_orientation=_param.orientation,_param_length=_param.length,props=_object_without_properties(_param,["dimension","appearance","orientation","length"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledDiv,_object_spread_props(_object_spread({},props),{ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"default":_param_appearance,$orientation:void 0===_param_orientation?"horizontal":_param_orientation,$length:void 0===_param_length?"100%":_param_length}))});Divider.displayName="Divider";try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента, определяет толщину разделителя",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:{value:"default"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"Ориентация компонента, по умолчанию горизонтальная",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},length:{defaultValue:{value:"100%"},description:"Длина компонента",name:"length",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/index.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/Divider/index.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Divider/stories/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DividerPlayground:()=>DividerPlayground,DividerVariants:()=>DividerVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Divider_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Divider=__webpack_require__("./src/components/Divider/index.tsx"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),T=__webpack_require__("./src/components/T/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  padding: 20px;
  width: 90%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--admiral-color-Neutral_Neutral05, `,`);
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  height: 24px;
`]);return _templateObject1=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 05"]}),Separator=styled_components_browser_esm.Ay.div(_templateObject1()),DividerPlaygroundTemplate=function(props){var dividerRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Компонент для визуального разделения групп контента, создания визуальной иерархии или упорядочивания длинного списка элементов.",(0,jsx_runtime.jsx)(Separator,{}),"Рекомендации",(0,jsx_runtime.jsx)("li",{children:"Используйте Divider, только когда это необходимо. В большинстве ситуаций можно обойтись пустым пространством (отступами) и цветами."}),(0,jsx_runtime.jsx)("li",{children:"Не используйте компонент для создания обводок и других аналогичных элементов."}),(0,jsx_runtime.jsx)("li",{children:"При использовании между несколькими одинаковыми элементами интерфейса, разделители ставятся только между ними. Не ставьте разделители перед первым элементом и после последнего."}),(0,jsx_runtime.jsx)(Separator,{}),"Ширина компонента задается пользователем. Высота формируется контентом.",(0,jsx_runtime.jsx)(Separator,{}),"Компонент не используется на мобильных устройствах"]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Wrapper,{children:(0,jsx_runtime.jsx)(Divider.c,_object_spread({ref:dividerRef},props))})]})};try{DividerPlaygroundTemplate.displayName="DividerPlaygroundTemplate",DividerPlaygroundTemplate.__docgenInfo={description:"",displayName:"DividerPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента, определяет толщину разделителя",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"Ориентация компонента, по умолчанию горизонтальная",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},length:{defaultValue:null,description:"Длина компонента",name:"length",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/stories/DividerPlayground.template.tsx#DividerPlaygroundTemplate"]={docgenInfo:DividerPlaygroundTemplate.__docgenInfo,name:"DividerPlaygroundTemplate",path:"src/components/Divider/stories/DividerPlayground.template.tsx#DividerPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function DividerVariants_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DividerVariants_template_templateObject(){var data=DividerVariants_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  gap: 15px;
`]);return DividerVariants_template_templateObject=function _templateObject(){return data},data}function DividerVariants_template_templateObject1(){var data=DividerVariants_template_tagged_template_literal([`
  box-sizing: border-box;
  padding: 20px 0;
  width: 80%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: var(--admiral-color-Neutral_Neutral05, `,`);
`]);return DividerVariants_template_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=DividerVariants_template_tagged_template_literal([`
  flex-direction: column;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=DividerVariants_template_tagged_template_literal([`
  height: 100px;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=DividerVariants_template_tagged_template_literal([`
  height: 24px;
`]);return _templateObject4=function _templateObject(){return data},data}var DividerVariants_template_Wrapper=styled_components_browser_esm.Ay.div(DividerVariants_template_templateObject()),Container=styled_components_browser_esm.Ay.div(DividerVariants_template_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 05"]}),HorizontalWrapper=(0,styled_components_browser_esm.Ay)(Container)(_templateObject2()),VerticalWrapper=(0,styled_components_browser_esm.Ay)(Container)(_templateObject3()),DividerVariants_template_Separator=styled_components_browser_esm.Ay.div(_templateObject4()),DividerVariantsTemplate=function(_props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Основные настройки компонента",(0,jsx_runtime.jsx)(DividerVariants_template_Separator,{}),(0,jsx_runtime.jsx)("li",{children:"Тип — горизонтальный или вертикальный"}),(0,jsx_runtime.jsx)("li",{children:"Стиль — default, subtle, strong, primary, static white"}),(0,jsx_runtime.jsx)("li",{children:"Толщина линии — 1 px ('s'), 2 px ('m')"}),(0,jsx_runtime.jsx)("li",{children:"Тема — светлая или темная"}),(0,jsx_runtime.jsx)("li",{children:"Вы можете назначать произвольные цвета компоненту, помимо заданных"}),(0,jsx_runtime.jsx)("li",{children:"Размер компонента регулируется «вручную» пользователем"})]}),(0,jsx_runtime.jsx)(DividerVariants_template_Separator,{}),(0,jsx_runtime.jsxs)(DividerVariants_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(HorizontalWrapper,{children:[(0,jsx_runtime.jsx)(Divider.c,{length:"80%",dimension:"s"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",dimension:"s",appearance:"subtle"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",appearance:"subtle"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",dimension:"s",appearance:"strong"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",appearance:"strong"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",dimension:"s",appearance:"primary"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",appearance:"primary"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",dimension:"s",appearance:"staticWhite"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",appearance:"staticWhite"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",dimension:"s",appearance:"#84106e"}),(0,jsx_runtime.jsx)(Divider.c,{length:"80%",appearance:"#84106e"})]}),(0,jsx_runtime.jsxs)(VerticalWrapper,{children:[(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",dimension:"s"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",dimension:"s",appearance:"subtle"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",appearance:"subtle"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",dimension:"s",appearance:"strong"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",appearance:"strong"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",dimension:"s",appearance:"primary"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",appearance:"primary"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",dimension:"s",appearance:"staticWhite"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",appearance:"staticWhite"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",dimension:"s",appearance:"#84106e"}),(0,jsx_runtime.jsx)(Divider.c,{orientation:"vertical",appearance:"#84106e"})]})]})]})};try{DividerVariantsTemplate.displayName="DividerVariantsTemplate",DividerVariantsTemplate.__docgenInfo={description:"",displayName:"DividerVariantsTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента, определяет толщину разделителя",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"string"}},orientation:{defaultValue:null,description:"Ориентация компонента, по умолчанию горизонтальная",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},length:{defaultValue:null,description:"Длина компонента",name:"length",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/stories/DividerVariants.template.tsx#DividerVariantsTemplate"]={docgenInfo:DividerVariantsTemplate.__docgenInfo,name:"DividerVariantsTemplate",path:"src/components/Divider/stories/DividerVariants.template.tsx#DividerVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}let DividerPlayground_templateraw_namespaceObject=`import { useRef } from 'react';
import styled from 'styled-components';

import { Divider, T } from '@admiral-ds/react-ui';
import type { DividerProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  box-sizing: border-box;
  padding: 20px;
  width: 90%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
\`;

const Separator = styled.div\`
  height: 24px;
\`;

export const DividerPlaygroundTemplate = (props: DividerProps) => {
  const dividerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Компонент для визуального разделения групп контента, создания визуальной иерархии или упорядочивания длинного
        списка элементов.
        <Separator />
        Рекомендации
        <li>
          Используйте Divider, только когда это необходимо. В большинстве ситуаций можно обойтись пустым пространством
          (отступами) и цветами.
        </li>
        <li>Не используйте компонент для создания обводок и других аналогичных элементов.</li>
        <li>
          При использовании между несколькими одинаковыми элементами интерфейса, разделители ставятся только между ними.
          Не ставьте разделители перед первым элементом и после последнего.
        </li>
        <Separator />
        Ширина компонента задается пользователем. Высота формируется контентом.
        <Separator />
        Компонент не используется на мобильных устройствах
      </T>
      <Separator />
      <Wrapper>
        <Divider ref={dividerRef} {...props} />
      </Wrapper>
    </>
  );
};
`,DividerVariants_templateraw_namespaceObject=`import styled from 'styled-components';

import { Divider, T } from '@admiral-ds/react-ui';
import type { DividerProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 15px;
\`;

const Container = styled.div\`
  box-sizing: border-box;
  padding: 20px 0;
  width: 80%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
\`;

const HorizontalWrapper = styled(Container)\`
  flex-direction: column;
\`;

const VerticalWrapper = styled(Container)\`
  height: 100px;
\`;

const Separator = styled.div\`
  height: 24px;
\`;

export const DividerVariantsTemplate = (_props: DividerProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Основные настройки компонента
        <Separator />
        <li>Тип — горизонтальный или вертикальный</li>
        <li>Стиль — default, subtle, strong, primary, static white</li>
        <li>Толщина линии — 1 px ('s'), 2 px ('m')</li>
        <li>Тема — светлая или темная</li>
        <li>Вы можете назначать произвольные цвета компоненту, помимо заданных</li>
        <li>Размер компонента регулируется \xabвручную\xbb пользователем</li>
      </T>
      <Separator />
      <Wrapper>
        <HorizontalWrapper>
          <Divider length="80%" dimension="s" />
          <Divider length="80%" />
          <Divider length="80%" dimension="s" appearance="subtle" />
          <Divider length="80%" appearance="subtle" />
          <Divider length="80%" dimension="s" appearance="strong" />
          <Divider length="80%" appearance="strong" />
          <Divider length="80%" dimension="s" appearance="primary" />
          <Divider length="80%" appearance="primary" />
          <Divider length="80%" dimension="s" appearance="staticWhite" />
          <Divider length="80%" appearance="staticWhite" />
          <Divider length="80%" dimension="s" appearance="#84106e" />
          <Divider length="80%" appearance="#84106e" />
        </HorizontalWrapper>
        <VerticalWrapper>
          <Divider orientation="vertical" />
          <Divider orientation="vertical" dimension="s" />
          <Divider orientation="vertical" dimension="s" appearance="subtle" />
          <Divider orientation="vertical" appearance="subtle" />
          <Divider orientation="vertical" dimension="s" appearance="strong" />
          <Divider orientation="vertical" appearance="strong" />
          <Divider orientation="vertical" dimension="s" appearance="primary" />
          <Divider orientation="vertical" appearance="primary" />
          <Divider orientation="vertical" dimension="s" appearance="staticWhite" />
          <Divider orientation="vertical" appearance="staticWhite" />
          <Divider orientation="vertical" dimension="s" appearance="#84106e" />
          <Divider orientation="vertical" appearance="#84106e" />
        </VerticalWrapper>
      </Wrapper>
    </>
  );
};
`;function Divider_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Divider_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Divider_stories_define_property(target,key,source[key])})}return target}let Divider_stories={title:"Admiral-2.1/Divider",decorators:void 0,component:Divider.c,parameters:{docs:{source:{code:null}}},argTypes:{dimension:{options:["m","s"],defaultValue:"m",control:{type:"radio"}},theme:{control:!1},length:{control:{type:"text"}}}};var DividerPlayground={render:function(props){return(0,jsx_runtime.jsx)(DividerPlaygroundTemplate,Divider_stories_object_spread({},props))},parameters:{docs:{source:{code:DividerPlayground_templateraw_namespaceObject},viewMode:"story"}},name:"Divider. Playground"},DividerVariants={render:function(props){return(0,jsx_runtime.jsx)(DividerVariantsTemplate,Divider_stories_object_spread({},props))},parameters:{docs:{source:{code:DividerVariants_templateraw_namespaceObject},viewMode:"story"}},name:"Divider. Variants"};DividerPlayground.parameters={...DividerPlayground.parameters,docs:{...DividerPlayground.parameters?.docs,source:{originalSource:`{
  render: DividerPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: DividerPlaygroundRaw
      },
      viewMode: 'story'
    }
  },
  name: 'Divider. Playground'
}`,...DividerPlayground.parameters?.docs?.source}}},DividerVariants.parameters={...DividerVariants.parameters,docs:{...DividerVariants.parameters?.docs,source:{originalSource:`{
  render: DividerVariantsStory,
  parameters: {
    docs: {
      source: {
        code: DividerVariantsRaw
      },
      viewMode: 'story'
    }
  },
  name: 'Divider. Variants'
}`,...DividerVariants.parameters?.docs?.source}}};let __namedExportsOrder=["DividerPlayground","DividerVariants"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-Divider-stories-Divider-stories.94f4fada.iframe.bundle.js.map