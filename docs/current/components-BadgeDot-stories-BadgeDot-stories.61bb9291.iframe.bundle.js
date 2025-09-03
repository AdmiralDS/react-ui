"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5881],{"./src/components/BadgeDot/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>BadgeDot});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  width: `,`;
  height: `,`;
  background: `,`;
  border-radius: 50%;
`]);return _templateObject2=function _templateObject(){return data},data}var getBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){var theme=param.theme;switch(param.$appearance){case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"attention":return"var(--admiral-color-Attention_Attention50Main, ".concat(theme.color["Attention/Attention 50 Main"],")");default:return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")}}),getSize=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject1(),function(param){switch(param.$dimension){case"l":return"12px";case"s":return"8px";case"xs":return"6px";default:return"10px"}}),Dot=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject2(),getSize,getSize,getBackground),BadgeDot=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,_param_appearance=_param.appearance,props=_object_without_properties(_param,["dimension","appearance"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Dot,_object_spread({ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"neutral":_param_appearance},props))});BadgeDot.displayName="BadgeDot";try{BadgeDot.displayName="BadgeDot",BadgeDot.__docgenInfo={description:"",displayName:"BadgeDot",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},appearance:{defaultValue:{value:"neutral"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"neutral"'},{value:'"warning"'},{value:'"info"'},{value:'"attention"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BadgeDot/index.tsx#BadgeDot"]={docgenInfo:BadgeDot.__docgenInfo,name:"BadgeDot",path:"src/components/BadgeDot/index.tsx#BadgeDot"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BadgeDot/stories/BadgeDot.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PlaygroundExample:()=>PlaygroundExample,VariantsExample:()=>VariantsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BadgeDot_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),BadgeDot=__webpack_require__("./src/components/BadgeDot/index.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  align-items: center;
  padding: 50px;
  & > * {
    margin-right: 16px;
  }
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject=function _templateObject(){return data},data}var BadgeDotPlayground_template_String=styled_components_browser_esm.Ay.div(_templateObject(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),BadgeDotPlaygroundTemplate=function(props){return(0,jsx_runtime.jsxs)(BadgeDotPlayground_template_String,{children:[(0,jsx_runtime.jsx)(BadgeDot.r,_object_spread({},props)),"Appearance: ",props.appearance||"neutral",(0,jsx_runtime.jsx)("br",{}),"Dimension: ",props.dimension||"m"]})};try{BadgeDotPlaygroundTemplate.displayName="BadgeDotPlaygroundTemplate",BadgeDotPlaygroundTemplate.__docgenInfo={description:"",displayName:"BadgeDotPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"neutral"'},{value:'"warning"'},{value:'"info"'},{value:'"attention"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BadgeDot/stories/BadgeDotPlayground.template.tsx#BadgeDotPlaygroundTemplate"]={docgenInfo:BadgeDotPlaygroundTemplate.__docgenInfo,name:"BadgeDotPlaygroundTemplate",path:"src/components/BadgeDot/stories/BadgeDotPlayground.template.tsx#BadgeDotPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function BadgeDotVariants_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function BadgeDotVariants_template_templateObject(){var data=BadgeDotVariants_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`]);return BadgeDotVariants_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=BadgeDotVariants_template_tagged_template_literal([`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
  & > *:last-child {
    margin-right: 40px;
  }
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(BadgeDotVariants_template_templateObject()),BadgeDotVariants_template_String=styled_components_browser_esm.Ay.div(_templateObject1(),typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),BadgeDotVariantsTemplate=function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Layout,{children:[(0,jsx_runtime.jsxs)(BadgeDotVariants_template_String,{children:[(0,jsx_runtime.jsx)(BadgeDot.r,{dimension:"xs"}),(0,jsx_runtime.jsx)(BadgeDot.r,{dimension:"s"}),(0,jsx_runtime.jsx)(BadgeDot.r,{}),(0,jsx_runtime.jsx)(BadgeDot.r,{dimension:"l"}),"Neutral"]}),(0,jsx_runtime.jsxs)(BadgeDotVariants_template_String,{children:[(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"info",dimension:"xs"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"info",dimension:"s"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"info"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"info",dimension:"l"}),"Info"]}),(0,jsx_runtime.jsxs)(BadgeDotVariants_template_String,{children:[(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"error",dimension:"xs"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"error",dimension:"s"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"error"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"error",dimension:"l"}),"Error"]}),(0,jsx_runtime.jsxs)(BadgeDotVariants_template_String,{children:[(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"success",dimension:"xs"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"success",dimension:"s"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"success"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"success",dimension:"l"}),"Success"]}),(0,jsx_runtime.jsxs)(BadgeDotVariants_template_String,{children:[(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"warning",dimension:"xs"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"warning",dimension:"s"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"warning"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"warning",dimension:"l"}),"Warning"]}),(0,jsx_runtime.jsxs)(BadgeDotVariants_template_String,{children:[(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"attention",dimension:"xs"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"attention",dimension:"s"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"attention"}),(0,jsx_runtime.jsx)(BadgeDot.r,{appearance:"attention",dimension:"l"}),"Attention"]})]})})};let BadgeDotPlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { BadgeDot, typography } from '@admiral-ds/react-ui';
import type { BadgeDotProps } from '@admiral-ds/react-ui';

const String = styled.div\`
  display: flex;
  align-items: center;
  padding: 50px;
  & > * {
    margin-right: 16px;
  }
  \${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

export const BadgeDotPlaygroundTemplate = (props: BadgeDotProps) => {
  return (
    <String>
      <BadgeDot {...props} />
      Appearance: {props.appearance || 'neutral'}
      <br />
      Dimension: {props.dimension || 'm'}
    </String>
  );
};
`,BadgeDotVariants_templateraw_namespaceObject=`import * as React from 'react';
import { BadgeDot, typography } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
\`;

const String = styled.div\`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
  & > *:last-child {
    margin-right: 40px;
  }
  \${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

export const BadgeDotVariantsTemplate = () => {
  return (
    <>
      <Layout>
        <String>
          <BadgeDot dimension="xs" />
          <BadgeDot dimension="s" />
          <BadgeDot />
          <BadgeDot dimension="l" />
          Neutral
        </String>
        <String>
          <BadgeDot appearance="info" dimension="xs" />
          <BadgeDot appearance="info" dimension="s" />
          <BadgeDot appearance="info" />
          <BadgeDot appearance="info" dimension="l" />
          Info
        </String>
        <String>
          <BadgeDot appearance="error" dimension="xs" />
          <BadgeDot appearance="error" dimension="s" />
          <BadgeDot appearance="error" />
          <BadgeDot appearance="error" dimension="l" />
          Error
        </String>
        <String>
          <BadgeDot appearance="success" dimension="xs" />
          <BadgeDot appearance="success" dimension="s" />
          <BadgeDot appearance="success" />
          <BadgeDot appearance="success" dimension="l" />
          Success
        </String>
        <String>
          <BadgeDot appearance="warning" dimension="xs" />
          <BadgeDot appearance="warning" dimension="s" />
          <BadgeDot appearance="warning" />
          <BadgeDot appearance="warning" dimension="l" />
          Warning
        </String>
        <String>
          <BadgeDot appearance="attention" dimension="xs" />
          <BadgeDot appearance="attention" dimension="s" />
          <BadgeDot appearance="attention" />
          <BadgeDot appearance="attention" dimension="l" />
          Attention
        </String>
      </Layout>
    </>
  );
};
`;function BadgeDot_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function BadgeDot_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){BadgeDot_stories_define_property(target,key,source[key])})}return target}function BadgeDot_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function BadgeDot_stories_templateObject(){var data=BadgeDot_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return BadgeDot_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(BadgeDot_stories_templateObject());let BadgeDot_stories={title:"Admiral-2.1/BadgeDot",decorators:void 0,component:BadgeDot.r,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"BadgeDot — вспомогательный компонент применяемый в сочетании с другими компонентами для обозначения статуса. Имеет шесть разных цветов и четыре размера."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=37-18426&mode=design&t=hEGLAaOLUryZYP7B-4"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=37-18581&mode=design&t=hEGLAaOLUryZYP7B-4"}]},argTypes:{dimension:{options:["l","m","s","xs"],control:{type:"radio"}},appearance:{options:["neutral","info","error","success","warning","attention"],control:{type:"select"}}}};var PlaygroundExample={render:function(props){return(0,jsx_runtime.jsx)(BadgeDotPlaygroundTemplate,BadgeDot_stories_object_spread({},props))},parameters:{docs:{source:{code:BadgeDotPlayground_templateraw_namespaceObject}}},name:"Playground"},VariantsExample={render:function(){return(0,jsx_runtime.jsx)(BadgeDotVariantsTemplate,{})},parameters:{docs:{source:{code:BadgeDotVariants_templateraw_namespaceObject}}},name:"Badge. Варианты использования."};PlaygroundExample.parameters={...PlaygroundExample.parameters,docs:{...PlaygroundExample.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: BadgeDotPlaygroundRaw
      }
    }
  },
  name: 'Playground'
}`,...PlaygroundExample.parameters?.docs?.source}}},VariantsExample.parameters={...VariantsExample.parameters,docs:{...VariantsExample.parameters?.docs,source:{originalSource:`{
  render: VariantsStory,
  parameters: {
    docs: {
      source: {
        code: BadgeDotVariantsRaw
      }
    }
  },
  name: 'Badge. Варианты использования.'
}`,...VariantsExample.parameters?.docs?.source}}};let __namedExportsOrder=["PlaygroundExample","VariantsExample"]}}]);
//# sourceMappingURL=components-BadgeDot-stories-BadgeDot-stories.61bb9291.iframe.bundle.js.map