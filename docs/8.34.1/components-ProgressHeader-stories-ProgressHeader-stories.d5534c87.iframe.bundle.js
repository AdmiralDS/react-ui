"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6389],{"./src/components/ProgressHeader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>ProgressHeader});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  background: var(--admiral-color-Neutral_Neutral20, ",");\n  min-width: 140px;\n  min-height: 4px;\n  display: flex;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  background: ",";\n  width: ","%;\n  transition: all 0.3s linear;\n"]);return _templateObject2=function _templateObject(){return data},data}var Container=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject()),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 20"]}),Progress=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(param){var theme=param.theme;return"error"===param.$appearance?"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")},function(param){return param.$percent}),ProgressHeader=function(_param){var _param_percent=_param.percent,_param_appearance=_param.appearance,props=_object_without_properties(_param,["percent","appearance"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Container,_object_spread_props(_object_spread({},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Progress,{$appearance:void 0===_param_appearance?"primary":_param_appearance,$percent:void 0===_param_percent?0:_param_percent})})}))};ProgressHeader.displayName="ProgressHeader";try{ProgressHeader.displayName="ProgressHeader",ProgressHeader.__docgenInfo={description:"",displayName:"ProgressHeader",props:{percent:{defaultValue:{value:"0"},description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"primary"},description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressHeader/index.tsx#ProgressHeader"]={docgenInfo:ProgressHeader.__docgenInfo,name:"ProgressHeader",path:"src/components/ProgressHeader/index.tsx#ProgressHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ProgressHeader/stories/ProgressHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProgressHeaderBase:()=>ProgressHeaderBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProgressHeader_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ProgressHeader=__webpack_require__("./src/components/ProgressHeader/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  bottom: 90%;\n"]);return _templateObject=function _templateObject(){return data},data}var StyledProgressHeader=(0,styled_components_browser_esm.Ay)(ProgressHeader.v)(_templateObject()),ProgressHeaderBaseTemplate=function(_param){var _param_appearance=_param.appearance,_param_percent=_param.percent,props=_object_without_properties(_param,["appearance","percent"]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledProgressHeader,_object_spread_props(_object_spread({},props),{appearance:void 0===_param_appearance?"primary":_param_appearance,percent:void 0===_param_percent?50:_param_percent,role:"alert","aria-live":"assertive"}))})};try{ProgressHeaderBaseTemplate.displayName="ProgressHeaderBaseTemplate",ProgressHeaderBaseTemplate.__docgenInfo={description:"",displayName:"ProgressHeaderBaseTemplate",props:{percent:{defaultValue:{value:"50"},description:"Значение прогресса от 1 до 100",name:"percent",required:!1,type:{name:"number"}},appearance:{defaultValue:{value:"primary"},description:"Вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProgressHeader/stories/ProgressHeaderBase.template.tsx#ProgressHeaderBaseTemplate"]={docgenInfo:ProgressHeaderBaseTemplate.__docgenInfo,name:"ProgressHeaderBaseTemplate",path:"src/components/ProgressHeader/stories/ProgressHeaderBase.template.tsx#ProgressHeaderBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function ProgressHeader_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ProgressHeader_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ProgressHeader_stories_define_property(target,key,source[key])})}return target}function ProgressHeader_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ProgressHeader_stories_templateObject(){var data=ProgressHeader_stories_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return ProgressHeader_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(ProgressHeader_stories_templateObject());let ProgressHeader_stories={title:"Admiral-2.1/ProgressHeader/Base",decorators:void 0,component:ProgressHeader.v,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Показывает визуальный прогресс загрузки страницы. Компонент отображается наверху страницы, непосредственно под шапкой браузера на самом верху рабочей области сайта. Ширина равняется ширине окна браузера."})},{}),design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A24985"}},argTypes:{appearance:{options:["primary","error"],control:{type:"radio"}},percent:{control:{type:"number"}}}};var ProgressHeaderBase={render:function(props){return(0,jsx_runtime.jsx)(ProgressHeaderBaseTemplate,ProgressHeader_stories_object_spread({},props))},parameters:{docs:{source:{code:"import * as React from 'react';\nimport styled from 'styled-components';\n\nimport { ProgressHeader } from '@admiral-ds/react-ui';\nimport type { ProgressHeaderProps } from '@admiral-ds/react-ui';\n\nconst StyledProgressHeader = styled(ProgressHeader)`\n  bottom: 90%;\n`;\n\nexport const ProgressHeaderBaseTemplate = ({ appearance = 'primary', percent = 50, ...props }: ProgressHeaderProps) => {\n  return (\n    <>\n      <StyledProgressHeader {...props} appearance={appearance} percent={percent} role=\"alert\" aria-live=\"assertive\" />\n    </>\n  );\n};\n"}}},name:"Базовый пример"};ProgressHeaderBase.parameters={...ProgressHeaderBase.parameters,docs:{...ProgressHeaderBase.parameters?.docs,source:{originalSource:"{\n  render: ProgressHeaderBaseStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ProgressHeaderBaseRaw\n      }\n    }\n  },\n  name: 'Базовый пример'\n}",...ProgressHeaderBase.parameters?.docs?.source}}};let __namedExportsOrder=["ProgressHeaderBase"]}}]);