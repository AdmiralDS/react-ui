"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4437],{"./src/components/CSSCustomProps/stories/CSSCustomProps.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeActivatingExample:()=>ThemeActivatingExample,ThemeBasicsExample:()=>ThemeBasicsExample,ThemeContentExample:()=>ThemeContentExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CSSCustomProps_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  height: 20px;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  font-weight: 500;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  position: relative;
  background-color: var(--admiral-color-Primary_Primary10, `,`);
  border-left: solid 4px var(--admiral-color-Primary_Primary60Main, `,`);
  border-radius: 4px;
  padding: 24px 24px 24px 32px;

  &::before {
    content: 'i';
    `,`
    background-color: var(--admiral-color-Primary_Primary60Main, `,`);
    color: var(--admiral-color-Neutral_Neutral00, `,`);
    position: absolute;
    top: calc(50% - 12px);
    left: calc(-12px - 2px);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: circle(50% at 50% 50%);
  }
`]);return _templateObject3=function _templateObject(){return data},data}var Content=styled_components_browser_esm.Ay.div(_templateObject(),typography.Il["Body/Body 1 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),Separator=styled_components_browser_esm.Ay.div(_templateObject1()),Term=styled_components_browser_esm.Ay.span(_templateObject2()),InfoBlock=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return p.theme.color["Primary/Primary 10"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},typography.Il["Subtitle/Subtitle 3"],function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Neutral/Neutral 00"]}),ThemeBasicsTemplate=function(){return(0,jsx_runtime.jsxs)(Content,{children:["Библиотека предоставляет компоненты для подключения светлой (компонент ",(0,jsx_runtime.jsx)(Term,{children:"LightThemeCssVars"}),") и темной (компонент ",(0,jsx_runtime.jsx)(Term,{children:"DarkThemeCssVars"}),") тем, где тема - это таблица стилей, в которой согласно определенному API заданы css переменные, в дальнейшем применяемые для стилизации компонентов. Пользователь также может создать свою уникальную тему. Чтобы создать тему, необходимо понимание CSS, включая раздел"," ",(0,jsx_runtime.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",children:"CSS Custom Properties"}),".",(0,jsx_runtime.jsx)(Separator,{}),"Все темы, использующие css переменные, применяются в рамках определенных classNames, заданных согласно шаблону"," ",(0,jsx_runtime.jsx)(Term,{children:'"admiral-theme-[themeName]"'}),", где ",(0,jsx_runtime.jsx)(Term,{children:"[themeName]"})," - это значение в нижнем регистре, разделенное дефисом, представляющее имя темы.",(0,jsx_runtime.jsx)(Separator,{}),"Предоставляемые библиотекой светлая и темная темы используют ",(0,jsx_runtime.jsx)(Term,{children:'"admiral-theme-light"'})," и"," ",(0,jsx_runtime.jsx)(Term,{children:'"admiral-theme-dark"'}),' classNames соответственно. Кастомная тема с названием "Purple Power", например, использовала бы className "admiral-theme-purple-power".',(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(InfoBlock,{children:'В storybook в верхней панели добавлена кнопка "CSS Custom Props", которая позволяет управлять подключением таблиц стилей с css переменными в примерах storybookа. По умолчанию css переменные отключены. При подключении css переменные применяются к элементу body внутри каждого примера в storybook, при этом элементу body присваивается определенный className. В этом легко убедиться с помощью DevTools браузера.'})]})},CSSCustomProps=__webpack_require__("./src/components/CSSCustomProps/index.tsx");function ThemeActivating_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ThemeActivating_template_templateObject(){var data=ThemeActivating_template_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return ThemeActivating_template_templateObject=function _templateObject(){return data},data}function ThemeActivating_template_templateObject1(){var data=ThemeActivating_template_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral50, `,`);
`]);return ThemeActivating_template_templateObject1=function _templateObject(){return data},data}function ThemeActivating_template_templateObject2(){var data=ThemeActivating_template_tagged_template_literal([`
  height: 20px;
`]);return ThemeActivating_template_templateObject2=function _templateObject(){return data},data}function ThemeActivating_template_templateObject3(){var data=ThemeActivating_template_tagged_template_literal([`
  position: relative;
  background-color: var(--admiral-color-Primary_Primary10, `,`);
  border-left: solid 4px var(--admiral-color-Primary_Primary60Main, `,`);
  border-radius: 4px;
  padding: 24px 24px 24px 32px;

  &::before {
    content: 'i';
    `,`
    background-color: var(--admiral-color-Primary_Primary60Main, `,`);
    color: var(--admiral-color-Neutral_Neutral00, `,`);
    position: absolute;
    top: calc(50% - 12px);
    left: calc(-12px - 2px);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: circle(50% at 50% 50%);
  }
`]);return ThemeActivating_template_templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=ThemeActivating_template_tagged_template_literal([`
  background: var(--admiral-color-Neutral_Neutral05, `,`);
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  border-radius: 4px;
  padding: 24px;
`]);return _templateObject4=function _templateObject(){return data},data}var ThemeActivating_template_Content=styled_components_browser_esm.Ay.div(ThemeActivating_template_templateObject(),typography.Il["Body/Body 1 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),Text=styled_components_browser_esm.Ay.span(ThemeActivating_template_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 50"]}),ThemeActivating_template_Separator=styled_components_browser_esm.Ay.div(ThemeActivating_template_templateObject2()),ThemeActivating_template_InfoBlock=styled_components_browser_esm.Ay.div(ThemeActivating_template_templateObject3(),function(p){return p.theme.color["Primary/Primary 10"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},typography.Il["Subtitle/Subtitle 3"],function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Neutral/Neutral 00"]}),Example=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return p.theme.color["Neutral/Neutral 05"]},function(p){return p.theme.color["Neutral/Neutral 90"]}),ThemeActivatingTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CSSCustomProps.$,{}),(0,jsx_runtime.jsxs)(ThemeActivating_template_Content,{children:["Чтобы подключить тему, необходимо импортировать соответствующий компонент"," ",(0,jsx_runtime.jsx)(Text,{children:"(LightThemeCssVars / DarkThemeCssVars)"})," из библиотеки и назначить className темы"," ",(0,jsx_runtime.jsx)(Text,{children:'("admiral-theme-light" / "admiral-theme-dark")'})," тому элементу, dom-дерево внутри которого предполагается темизировать с помощью css переменных.",(0,jsx_runtime.jsx)(ThemeActivating_template_Separator,{}),(0,jsx_runtime.jsx)(Example,{className:"admiral-theme-dark",children:'Данный абзац является простейшим примером элемента, к которому подключена темная тема с css переменными. Пример кода можно увидеть, нажав кнопку "Show code".'}),(0,jsx_runtime.jsx)(ThemeActivating_template_Separator,{}),(0,jsx_runtime.jsx)(ThemeActivating_template_InfoBlock,{children:'Исключение: для подключения светлой темы не обязательно использовать className "admiral-theme-light". При импорте компонента LightThemeCssVars светлая тема по умолчанию подключается к элементу :root.'})]})]})};function ThemeContent_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ThemeContent_template_templateObject(){var data=ThemeContent_template_tagged_template_literal([`
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);

  li {
    margin-bottom: 16px;
  }
`]);return ThemeContent_template_templateObject=function _templateObject(){return data},data}function ThemeContent_template_templateObject1(){var data=ThemeContent_template_tagged_template_literal([`
  text-decoration: underline;
`]);return ThemeContent_template_templateObject1=function _templateObject(){return data},data}function ThemeContent_template_templateObject2(){var data=ThemeContent_template_tagged_template_literal([`
  font-weight: 500;
`]);return ThemeContent_template_templateObject2=function _templateObject(){return data},data}function ThemeContent_template_templateObject3(){var data=ThemeContent_template_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral50, `,`);
`]);return ThemeContent_template_templateObject3=function _templateObject(){return data},data}function ThemeContent_template_templateObject4(){var data=ThemeContent_template_tagged_template_literal([`
  height: 8px;
`]);return ThemeContent_template_templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=ThemeContent_template_tagged_template_literal([`
  font-weight: 550;
`]);return _templateObject5=function _templateObject(){return data},data}var ThemeContent_template_Content=styled_components_browser_esm.Ay.div(ThemeContent_template_templateObject(),typography.Il["Body/Body 1 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),Underline=styled_components_browser_esm.Ay.span(ThemeContent_template_templateObject1()),ThemeContent_template_Text=styled_components_browser_esm.Ay.span(ThemeContent_template_templateObject2()),AdText=styled_components_browser_esm.Ay.span(ThemeContent_template_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 50"]}),ThemeContent_template_Separator=styled_components_browser_esm.Ay.div(ThemeContent_template_templateObject4()),ThemeContent_template_Term=styled_components_browser_esm.Ay.span(_templateObject5()),ThemeContentTemplate=function(){return(0,jsx_runtime.jsxs)(ThemeContent_template_Content,{children:["Тема включает в себя несколько категорий css переменных.",(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"color"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями цветов",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),":",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-color-[название группы цветов]_[название конкретного цвета]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-color-Primary_Primary60Main"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная имеет аналог в стандартной теме ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"}),", в storybook в разделе Colors можно увидеть какому дизайн токену цвета соответствует каждая css переменная"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"z-index"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями z-index",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-z-index-[тип компонента]"}),", например,"," ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-z-index-tooltip"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная имеет аналог в стандартной теме ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"})]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"box-shadow"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями box-shadow",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),":",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-box-shadow-[название тени]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-box-shadow-Shadow08"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная имеет аналог в стандартной теме ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"})]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"font-family"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменная со значениями font-family",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-family"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Переменная аналогична theme.fontFamily токену из стандартной темы ",(0,jsx_runtime.jsx)(AdText,{children:"(LIGHT_THEME / DARK_THEME)"})]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"font-weight"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями font-weight",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-weight-[стиль типографики]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-weight-Header_HL1"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в компоненте T)"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"font-size"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями font-size",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-size-[стиль типографики]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-font-size-Header_HL1"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в компоненте T)"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"line-height"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями line-height",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),": ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-line-height-[стиль типографики]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-line-height-Header_HL1"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в компоненте T)"]}),(0,jsx_runtime.jsxs)("li",{children:["Категория ",(0,jsx_runtime.jsx)(ThemeContent_template_Term,{children:"border-radius"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Состоит из"}),": css переменные со значениями border-radius",(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),(0,jsx_runtime.jsx)(Underline,{children:"Именование"}),":",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-radius-[размер скругления (Small / Medium / Large)]"}),", например,",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-radius-Small"}),(0,jsx_runtime.jsx)(ThemeContent_template_Separator,{}),"Для каждой css переменной ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-radius-[размер скругления]"})," задан набор допустимых значений в виде css переменных типа ",(0,jsx_runtime.jsx)(ThemeContent_template_Text,{children:"--admiral-border-kind-[размер скругления]_*"})]})]})]})};let ThemeActivating_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { typography, DarkThemeCssVars } from '@admiral-ds/react-ui';

const Content = styled.div\`
  \${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

const Text = styled.span\`
  color: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
\`;

const Separator = styled.div\`
  height: 20px;
\`;

const InfoBlock = styled.div\`
  position: relative;
  background-color: var(--admiral-color-Primary_Primary10, \${(p) => p.theme.color['Primary/Primary 10']});
  border-left: solid 4px var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']});
  border-radius: 4px;
  padding: 24px 24px 24px 32px;

  &::before {
    content: 'i';
    \${typography['Subtitle/Subtitle 3']}
    background-color: var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']});
    color: var(--admiral-color-Neutral_Neutral00, \${(p) => p.theme.color['Neutral/Neutral 00']});
    position: absolute;
    top: calc(50% - 12px);
    left: calc(-12px - 2px);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    clip-path: circle(50% at 50% 50%);
  }
\`;

const Example = styled.div\`
  background: var(--admiral-color-Neutral_Neutral05, \${(p) => p.theme.color['Neutral/Neutral 05']});
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
  border-radius: 4px;
  padding: 24px;
\`;

export const ThemeActivatingTemplate = () => {
  return (
    <>
      <DarkThemeCssVars />
      <Content>
        Чтобы подключить тему, необходимо импортировать соответствующий компонент{' '}
        <Text>(LightThemeCssVars / DarkThemeCssVars)</Text> из библиотеки и назначить className темы{' '}
        <Text>("admiral-theme-light" / "admiral-theme-dark")</Text> тому элементу, dom-дерево внутри которого
        предполагается темизировать с помощью css переменных.
        <Separator />
        <Example className="admiral-theme-dark">
          Данный абзац является простейшим примером элемента, к которому подключена темная тема с css переменными.
          Пример кода можно увидеть, нажав кнопку "Show code".
        </Example>
        <Separator />
        <InfoBlock>
          Исключение: для подключения светлой темы не обязательно использовать className "admiral-theme-light". При
          импорте компонента LightThemeCssVars светлая тема по умолчанию подключается к элементу :root.
        </InfoBlock>
      </Content>
    </>
  );
};
`;function CSSCustomProps_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CSSCustomProps_stories_templateObject(){var data=CSSCustomProps_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return CSSCustomProps_stories_templateObject=function _templateObject(){return data},data}function CSSCustomProps_stories_templateObject1(){var data=CSSCustomProps_stories_tagged_template_literal([`
  font-weight: 500;
`]);return CSSCustomProps_stories_templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(CSSCustomProps_stories_templateObject()),CSSCustomProps_stories_Term=styled_components_browser_esm.Ay.span(CSSCustomProps_stories_templateObject1());let CSSCustomProps_stories={title:"Experimental API/CSS Custom Properties",component:Desc,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["В библиотеке добавлена дополнительная возможность темизации компонентов с помощью ",(0,jsx_runtime.jsx)(CSSCustomProps_stories_Term,{children:"css переменных"})," (css custom props / css variables). Необходимость прокидывать тему в компоненты библиотеки с помощью styled-components ThemeProvider сохраняется."]})},{})}};var ThemeBasicsExample={render:function(){return(0,jsx_runtime.jsx)(ThemeBasicsTemplate,{})},name:"Базовые понятия"},ThemeActivatingExample={render:function(){return(0,jsx_runtime.jsx)(ThemeActivatingTemplate,{})},parameters:{docs:{source:{code:ThemeActivating_templateraw_namespaceObject}}},name:"Подключение темы"},ThemeContentExample={render:function(){return(0,jsx_runtime.jsx)(ThemeContentTemplate,{})},name:"Состав темы"};ThemeBasicsExample.parameters={...ThemeBasicsExample.parameters,docs:{...ThemeBasicsExample.parameters?.docs,source:{originalSource:`{
  render: ThemeBasicsStory,
  name: 'Базовые понятия'
}`,...ThemeBasicsExample.parameters?.docs?.source}}},ThemeActivatingExample.parameters={...ThemeActivatingExample.parameters,docs:{...ThemeActivatingExample.parameters?.docs,source:{originalSource:`{
  render: ThemeActivatingStory,
  parameters: {
    docs: {
      source: {
        code: ThemeActivatingRaw
      }
    }
  },
  name: 'Подключение темы'
}`,...ThemeActivatingExample.parameters?.docs?.source}}},ThemeContentExample.parameters={...ThemeContentExample.parameters,docs:{...ThemeContentExample.parameters?.docs,source:{originalSource:`{
  render: ThemeContentStory,
  name: 'Состав темы'
}`,...ThemeContentExample.parameters?.docs?.source}}};let __namedExportsOrder=["ThemeBasicsExample","ThemeActivatingExample","ThemeContentExample"]}}]);
//# sourceMappingURL=components-CSSCustomProps-stories-CSSCustomProps-stories.2e8b1c34.iframe.bundle.js.map