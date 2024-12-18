"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7667],{"./src/components/Spinner/stories/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpinnerBase:()=>SpinnerBase,SpinnerDark:()=>SpinnerDark,SpinnerLight:()=>SpinnerLight,SpinnerOthers:()=>SpinnerOthers,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Spinner_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),common=__webpack_require__("./src/components/themes/common/index.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ",";\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(_templateObject(),function(param){var theme=param.theme;return param.$inverse?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color[common.yL],")"):"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color[common.Gz],")")}),SpinnerBaseTemplate=function(props){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Layout,{$inverse:props.inverse,children:(0,jsx_runtime.jsx)(Spinner.y,_object_spread({},props))})})};try{SpinnerBaseTemplate.displayName="SpinnerBaseTemplate",SpinnerBaseTemplate.__docgenInfo={description:"",displayName:"SpinnerBaseTemplate",props:{dimension:{defaultValue:null,description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:null,description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/stories/SpinnerBase.template.tsx#SpinnerBaseTemplate"]={docgenInfo:SpinnerBaseTemplate.__docgenInfo,name:"SpinnerBaseTemplate",path:"src/components/Spinner/stories/SpinnerBase.template.tsx#SpinnerBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function SpinnerLight_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SpinnerLight_template_templateObject(){var data=SpinnerLight_template_tagged_template_literal(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ",";\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n"]);return SpinnerLight_template_templateObject=function _templateObject(){return data},data}var SpinnerLight_template_Layout=styled_components_browser_esm.Ay.div(SpinnerLight_template_templateObject(),function(param){var theme=param.theme;return param.$inverse?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color[common.yL],")"):"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color[common.Gz],")")}),SpinnerLightTemplate=function(props){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SpinnerLight_template_Layout,{$inverse:props.inverse,children:[(0,jsx_runtime.jsx)(Spinner.y,{dimension:"xl",inverse:props.inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"l",inverse:props.inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"m",inverse:props.inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"ms",inverse:props.inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"s",inverse:props.inverse})]})})};try{SpinnerLightTemplate.displayName="SpinnerLightTemplate",SpinnerLightTemplate.__docgenInfo={description:"",displayName:"SpinnerLightTemplate",props:{dimension:{defaultValue:null,description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:null,description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/stories/SpinnerLight.template.tsx#SpinnerLightTemplate"]={docgenInfo:SpinnerLightTemplate.__docgenInfo,name:"SpinnerLightTemplate",path:"src/components/Spinner/stories/SpinnerLight.template.tsx#SpinnerLightTemplate"})}catch(__react_docgen_typescript_loader_error){}function SpinnerDark_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SpinnerDark_template_templateObject(){var data=SpinnerDark_template_tagged_template_literal(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ",";\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n"]);return SpinnerDark_template_templateObject=function _templateObject(){return data},data}var SpinnerDark_template_Layout=styled_components_browser_esm.Ay.div(SpinnerDark_template_templateObject(),function(param){var theme=param.theme;return param.$inverse?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color[common.yL],")"):"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color[common.Gz],")")}),SpinnerDarkTemplate=function(param){var _param_inverse=param.inverse,inverse=void 0===_param_inverse||_param_inverse;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SpinnerDark_template_Layout,{$inverse:inverse,children:[(0,jsx_runtime.jsx)(Spinner.y,{dimension:"xl",inverse:inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"l",inverse:inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"m",inverse:inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"ms",inverse:inverse}),(0,jsx_runtime.jsx)(Spinner.y,{dimension:"s",inverse:inverse})]})})};try{SpinnerDarkTemplate.displayName="SpinnerDarkTemplate",SpinnerDarkTemplate.__docgenInfo={description:"",displayName:"SpinnerDarkTemplate",props:{dimension:{defaultValue:null,description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"true"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/stories/SpinnerDark.template.tsx#SpinnerDarkTemplate"]={docgenInfo:SpinnerDarkTemplate.__docgenInfo,name:"SpinnerDarkTemplate",path:"src/components/Spinner/stories/SpinnerDark.template.tsx#SpinnerDarkTemplate"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.tsx");function SpinnerOthers_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SpinnerOthers_template_templateObject(){var data=SpinnerOthers_template_tagged_template_literal(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ",";\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n"]);return SpinnerOthers_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=SpinnerOthers_template_tagged_template_literal(["\n  padding: 0 8px;\n"]);return _templateObject1=function _templateObject(){return data},data}var SpinnerOthers_template_Layout=styled_components_browser_esm.Ay.div(SpinnerOthers_template_templateObject(),function(param){var theme=param.theme;return param.$inverse?"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color[common.yL],")"):"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color[common.Gz],")")}),StyledButton=(0,styled_components_browser_esm.Ay)(Button.$n)(_templateObject1()),SpinnerOthersTemplate=function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SpinnerOthers_template_Layout,{children:[(0,jsx_runtime.jsx)(StyledButton,{dimension:"m",appearance:"secondary",children:(0,jsx_runtime.jsx)(Spinner.y,{dimension:"m"})}),(0,jsx_runtime.jsx)(StyledButton,{dimension:"m",appearance:"primary",children:(0,jsx_runtime.jsx)(Spinner.y,{dimension:"m",inverse:!0})})]})})};function Spinner_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Spinner_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Spinner_stories_define_property(target,key,source[key])})}return target}function Spinner_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Spinner_stories_templateObject(){var data=Spinner_stories_tagged_template_literal(["\n  height: 20px;\n"]);return Spinner_stories_templateObject=function _templateObject(){return data},data}function Spinner_stories_templateObject1(){var data=Spinner_stories_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return Spinner_stories_templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(Spinner_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(Spinner_stories_templateObject1());let Spinner_stories={title:"Admiral-2.1/Spinner",decorators:void 0,component:Spinner.y,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент служит для демонстрации процесса загрузки, ожидания. Существует в четырех размерах - 16, 24, 48 и 64 px. Может применяется как самостоятельный элемент, так и в составе других компонентов, например кнопок.",(0,jsx_runtime.jsx)(Separator,{}),"Вращение происходит по часовой стрелке, делая полный оборот за 1 секунду."]})},{}),design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A24955"}},argTypes:{dimension:{options:["xl","l","m","ms","s"],control:{type:"radio"}},inverse:{control:{type:"boolean"}},svgMixin:{control:!1}}};var SpinnerBase={render:function(props){return(0,jsx_runtime.jsx)(SpinnerBaseTemplate,Spinner_stories_object_spread({},props))},parameters:{docs:{source:{code:"import * as React from 'react';\nimport styled from 'styled-components';\n\nimport { DefaultBackgroundColorName, MainPrimaryColorName, Spinner } from '@admiral-ds/react-ui';\nimport type { SpinnerProps } from '@admiral-ds/react-ui';\n\nconst Layout = styled.div<{\n  $inverse?: boolean;\n}>`\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ${({ theme, $inverse }) =>\n    $inverse\n      ? `var(--admiral-color-Primary_Primary60Main, ${theme.color[MainPrimaryColorName]})`\n      : `var(--admiral-color-Neutral_Neutral00, ${theme.color[DefaultBackgroundColorName]})`};\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n`;\n\nexport const SpinnerBaseTemplate = (props: SpinnerProps) => {\n  return (\n    <>\n      <Layout $inverse={props.inverse}>\n        <Spinner {...props} />\n      </Layout>\n    </>\n  );\n};\n"}}},name:"Spinner. Базовый пример."},SpinnerLight={render:function(props){return(0,jsx_runtime.jsx)(SpinnerLightTemplate,Spinner_stories_object_spread({},props))},parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled from \'styled-components\';\n\nimport { DefaultBackgroundColorName, MainPrimaryColorName, Spinner } from \'@admiral-ds/react-ui\';\nimport type { SpinnerProps } from \'@admiral-ds/react-ui\';\n\nconst Layout = styled.div<{\n  $inverse?: boolean;\n}>`\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ${({ theme, $inverse }) =>\n    $inverse\n      ? `var(--admiral-color-Primary_Primary60Main, ${theme.color[MainPrimaryColorName]})`\n      : `var(--admiral-color-Neutral_Neutral00, ${theme.color[DefaultBackgroundColorName]})`};\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n`;\n\nexport const SpinnerLightTemplate = (props: SpinnerProps) => {\n  return (\n    <>\n      <Layout $inverse={props.inverse}>\n        <Spinner dimension="xl" inverse={props.inverse} />\n        <Spinner dimension="l" inverse={props.inverse} />\n        <Spinner dimension="m" inverse={props.inverse} />\n        <Spinner dimension="ms" inverse={props.inverse} />\n        <Spinner dimension="s" inverse={props.inverse} />\n      </Layout>\n    </>\n  );\n};\n'}}},name:"Spinner. Светлый фон."},SpinnerDark={render:function(props){return(0,jsx_runtime.jsx)(SpinnerDarkTemplate,Spinner_stories_object_spread({},props))},parameters:{docs:{source:{code:'import styled from \'styled-components\';\nimport { DefaultBackgroundColorName, MainPrimaryColorName, Spinner } from \'@admiral-ds/react-ui\';\nimport type { SpinnerProps } from \'@admiral-ds/react-ui\';\n\nconst Layout = styled.div<{\n  $inverse?: boolean;\n}>`\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ${({ theme, $inverse }) =>\n    $inverse\n      ? `var(--admiral-color-Primary_Primary60Main, ${theme.color[MainPrimaryColorName]})`\n      : `var(--admiral-color-Neutral_Neutral00, ${theme.color[DefaultBackgroundColorName]})`};\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n`;\n\nexport const SpinnerDarkTemplate = ({ inverse = true }: SpinnerProps) => {\n  return (\n    <>\n      <Layout $inverse={inverse}>\n        <Spinner dimension="xl" inverse={inverse} />\n        <Spinner dimension="l" inverse={inverse} />\n        <Spinner dimension="m" inverse={inverse} />\n        <Spinner dimension="ms" inverse={inverse} />\n        <Spinner dimension="s" inverse={inverse} />\n      </Layout>\n    </>\n  );\n};\n'},description:{story:"На темных поверхностях применяется белый спинер"}}},name:"Spinner. Темный фон."},SpinnerOthers={render:function(){return(0,jsx_runtime.jsx)(SpinnerOthersTemplate,{})},parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled from \'styled-components\';\n\nimport { Button, DefaultBackgroundColorName, MainPrimaryColorName, Spinner } from \'@admiral-ds/react-ui\';\n\nconst Layout = styled.div<{\n  $inverse?: boolean;\n}>`\n  display: flex;\n  flex-wrap: wrap;\n  padding: 50px;\n  background: ${({ theme, $inverse }) =>\n    $inverse\n      ? `var(--admiral-color-Primary_Primary60Main, ${theme.color[MainPrimaryColorName]})`\n      : `var(--admiral-color-Neutral_Neutral00, ${theme.color[DefaultBackgroundColorName]})`};\n\n  > * {\n    flex: 0 0 auto;\n    margin: 24px;\n  }\n`;\n\nconst StyledButton = styled(Button)`\n  padding: 0 8px;\n`;\n\nexport const SpinnerOthersTemplate = () => {\n  return (\n    <>\n      <Layout>\n        <StyledButton dimension="m" appearance="secondary">\n          <Spinner dimension="m" />\n        </StyledButton>\n        <StyledButton dimension="m" appearance="primary">\n          <Spinner dimension="m" inverse />\n        </StyledButton>\n      </Layout>\n    </>\n  );\n};\n'}}},name:"Spinner. В составе других компонентов."};SpinnerBase.parameters={...SpinnerBase.parameters,docs:{...SpinnerBase.parameters?.docs,source:{originalSource:"{\n  render: SpinnerBaseStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SpinnerBaseRaw\n      }\n    }\n  },\n  name: 'Spinner. Базовый пример.'\n}",...SpinnerBase.parameters?.docs?.source}}},SpinnerLight.parameters={...SpinnerLight.parameters,docs:{...SpinnerLight.parameters?.docs,source:{originalSource:"{\n  render: SpinnerLightStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SpinnerLightRaw\n      }\n    }\n  },\n  name: 'Spinner. Светлый фон.'\n}",...SpinnerLight.parameters?.docs?.source}}},SpinnerDark.parameters={...SpinnerDark.parameters,docs:{...SpinnerDark.parameters?.docs,source:{originalSource:"{\n  render: SpinnerDarkStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SpinnerDarkRaw\n      },\n      description: {\n        story: `На темных поверхностях применяется белый спинер`\n      }\n    }\n  },\n  name: 'Spinner. Темный фон.'\n}",...SpinnerDark.parameters?.docs?.source}}},SpinnerOthers.parameters={...SpinnerOthers.parameters,docs:{...SpinnerOthers.parameters?.docs,source:{originalSource:"{\n  render: SpinnerOthersStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SpinnerOthersRaw\n      }\n    }\n  },\n  name: 'Spinner. В составе других компонентов.'\n}",...SpinnerOthers.parameters?.docs?.source}}};let __namedExportsOrder=["SpinnerBase","SpinnerLight","SpinnerDark","SpinnerOthers"]},"./src/components/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  width: ",";\n  height: ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  position: relative;\n  container-type: inline-size;\n  ",";\n\n  & svg {\n    ","\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}var sizes=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}},function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1(),sizes,function(p){return p.$svgMixin||""}),Spinner=function(_param){var _param_dimension=_param.dimension,_param_inverse=_param.inverse,svgMixin=_param.svgMixin,props=_object_without_properties(_param,["dimension","inverse","svgMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerWrapper,_object_spread_props(_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__.N,{$inverse:void 0!==_param_inverse&&_param_inverse})}))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);