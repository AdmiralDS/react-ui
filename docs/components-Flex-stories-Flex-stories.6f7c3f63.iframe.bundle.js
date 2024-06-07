"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9055],{"./src/components/Flex/stories/Flex.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FlexPlayground:()=>FlexPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Flex_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const calcCellWidth=({column,columnGap=0})=>{const quotient=column/24,percentWidth=function round(number,precision){if(precision=null==precision?0:precision>=0?Math.min(precision,292):Math.max(precision,-292)){let pair=`${number}e`.split("e");return pair=`${Math.round(Number(`${pair[0]}e${+pair[1]+precision}`))}e`.split("e"),+`${pair[0]}e${+pair[1]-precision}`}return Math.round(number)}(100*quotient,6);return columnGap?`calc(${percentWidth}% - ${columnGap*(1-quotient)}px)`:`${percentWidth}%`},withBoxSize=(0,styled_components_browser_esm.AH)(["box-sizing:border-box;"]),ContainerDiv=styled_components_browser_esm.Ay.div.withConfig({displayName:"Flexstyled__ContainerDiv",componentId:"sc-2e0rdm-0"})(["",";display:flex;flex-wrap:wrap;width:100%;position:relative;row-gap:",";column-gap:",";"],withBoxSize,(({$rowGap})=>$rowGap?`${$rowGap}px`:"none"),(({$columnGap})=>$columnGap?`${$columnGap}px`:"none")),RowDiv=styled_components_browser_esm.Ay.div.withConfig({displayName:"Flexstyled__RowDiv",componentId:"sc-2e0rdm-1"})(["",";display:flex;width:100%;flex-wrap:",";flex-direction:",";row-gap:",";column-gap:",";align-items:",";"],withBoxSize,(({$wrap="wrap"})=>$wrap),(({$direction="row"})=>$direction),(({$rowGap})=>$rowGap?`${$rowGap}px`:"none"),(({$columnGap})=>$columnGap?`${$columnGap}px`:"none"),(({$alignItems="normal"})=>$alignItems)),CellDiv=styled_components_browser_esm.Ay.div.withConfig({displayName:"Flexstyled__CellDiv",componentId:"sc-2e0rdm-2"})(["",";width:",";overflow:hidden;"],withBoxSize,(({$col=24,$columnGap=0})=>calcCellWidth({column:$col,columnGap:$columnGap}))),GrowCellDiv=styled_components_browser_esm.Ay.div.withConfig({displayName:"Flexstyled__GrowCellDiv",componentId:"sc-2e0rdm-3"})(["",";flex-grow:",";overflow:hidden;"],withBoxSize,(({$grow})=>$grow||1));try{ContainerDiv.displayName="ContainerDiv",ContainerDiv.__docgenInfo={description:"",displayName:"ContainerDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.styled.tsx#ContainerDiv"]={docgenInfo:ContainerDiv.__docgenInfo,name:"ContainerDiv",path:"src/components/Flex/Flex.styled.tsx#ContainerDiv"})}catch(__react_docgen_typescript_loader_error){}try{RowDiv.displayName="RowDiv",RowDiv.__docgenInfo={description:"",displayName:"RowDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.styled.tsx#RowDiv"]={docgenInfo:RowDiv.__docgenInfo,name:"RowDiv",path:"src/components/Flex/Flex.styled.tsx#RowDiv"})}catch(__react_docgen_typescript_loader_error){}try{CellDiv.displayName="CellDiv",CellDiv.__docgenInfo={description:"",displayName:"CellDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.styled.tsx#CellDiv"]={docgenInfo:CellDiv.__docgenInfo,name:"CellDiv",path:"src/components/Flex/Flex.styled.tsx#CellDiv"})}catch(__react_docgen_typescript_loader_error){}try{GrowCellDiv.displayName="GrowCellDiv",GrowCellDiv.__docgenInfo={description:"",displayName:"GrowCellDiv",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/Flex.styled.tsx#GrowCellDiv"]={docgenInfo:GrowCellDiv.__docgenInfo,name:"GrowCellDiv",path:"src/components/Flex/Flex.styled.tsx#GrowCellDiv"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex={Container:(0,react.forwardRef)((({rowGap,columnGap,...props},ref)=>(0,jsx_runtime.jsx)(ContainerDiv,{ref,$rowGap:rowGap,$columnGap:columnGap,...props}))),Row:(0,react.forwardRef)((({rowGap,columnGap,wrap,direction,alignItems,...props},ref)=>(0,jsx_runtime.jsx)(RowDiv,{ref,$rowGap:rowGap,$columnGap:columnGap,$wrap:wrap,$direction:direction,$alignItems:alignItems,...props}))),Cell:(0,react.forwardRef)((({col,columnGap,...props},ref)=>(0,jsx_runtime.jsx)(CellDiv,{ref,$col:col,$columnGap:columnGap,...props}))),GrowCell:(0,react.forwardRef)((({grow,...props},ref)=>(0,jsx_runtime.jsx)(GrowCellDiv,{ref,$grow:grow,...props})))};var InputField=__webpack_require__("./src/components/form/InputField/index.tsx"),TextField=__webpack_require__("./src/components/form/TextField/index.tsx");const FlexPlaygroundTemplate=({rowGap=20,columnGap=10,...props})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Flex.Container,{...props,rowGap,columnGap,children:[(0,jsx_runtime.jsxs)(Flex.Row,{...props,rowGap,columnGap,children:[Array.from({length:24},((_,i)=>(0,react.createElement)(Flex.Cell,{...props,columnGap,key:24-i,col:24-i},(0,jsx_runtime.jsx)(InputField.F,{label:"Инпут шириной "+(24-i)})))),(0,jsx_runtime.jsx)(Flex.GrowCell,{...props,children:(0,jsx_runtime.jsx)(TextField.A,{label:"TextField",required:!0})})]}),(0,jsx_runtime.jsxs)(Flex.Row,{...props,rowGap,columnGap,children:[(0,jsx_runtime.jsx)(Flex.Cell,{...props,columnGap,col:5,children:(0,jsx_runtime.jsx)(InputField.F,{label:"Инпут шириной 5"})}),(0,jsx_runtime.jsx)(Flex.Cell,{col:3}),(0,jsx_runtime.jsx)(Flex.Cell,{...props,columnGap,col:3,children:(0,jsx_runtime.jsx)(InputField.F,{label:"Инпут шириной 3"})})]})]})});try{FlexPlaygroundTemplate.displayName="FlexPlaygroundTemplate",FlexPlaygroundTemplate.__docgenInfo={description:"",displayName:"FlexPlaygroundTemplate",props:{rowGap:{defaultValue:{value:"20"},description:"",name:"rowGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"6"},{value:"2"},{value:"20"},{value:"4"},{value:"8"},{value:"10"},{value:"12"},{value:"14"},{value:"16"},{value:"18"},{value:"24"},{value:"32"}]}},columnGap:{defaultValue:{value:"10"},description:"",name:"columnGap",required:!1,type:{name:"enum",value:[{value:"0"},{value:"6"},{value:"2"},{value:"20"},{value:"4"},{value:"8"},{value:"10"},{value:"12"},{value:"14"},{value:"16"},{value:"18"},{value:"24"},{value:"32"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Flex/stories/FlexPlayground.template.tsx#FlexPlaygroundTemplate"]={docgenInfo:FlexPlaygroundTemplate.__docgenInfo,name:"FlexPlaygroundTemplate",path:"src/components/Flex/stories/FlexPlayground.template.tsx#FlexPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}const Flex_stories={title:"Admiral-2.1/Flex.Container",component:Flex.Container,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=538-68923&t=Ybv78CTY3A6lMQZU-0"}]},decorators:void 0,argTypes:{rowGap:{control:{type:"number"}},columnGap:{control:{type:"number"}}}},FlexPlaygroundStory=props=>(0,jsx_runtime.jsx)(FlexPlaygroundTemplate,{...props});FlexPlaygroundStory.displayName="FlexPlaygroundStory";const FlexPlayground={render:FlexPlaygroundStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { Flex, FLEX_CELL_MAX_SIZE, InputField, TextField } from '@admiral-ds/react-ui';\nimport type { FlexContainerProps, FlexCellSizes } from '@admiral-ds/react-ui';\n\nexport const FlexPlaygroundTemplate = ({ rowGap = 20, columnGap = 10, ...props }: FlexContainerProps) => {\n  return (\n    <>\n      <Flex.Container {...props} rowGap={rowGap} columnGap={columnGap}>\n        <Flex.Row {...props} rowGap={rowGap} columnGap={columnGap}>\n          {Array.from({ length: FLEX_CELL_MAX_SIZE }, (_, i) => (\n            <Flex.Cell\n              {...props}\n              columnGap={columnGap}\n              key={FLEX_CELL_MAX_SIZE - i}\n              col={(FLEX_CELL_MAX_SIZE - i) as FlexCellSizes}\n            >\n              <InputField label={`Инпут шириной ${FLEX_CELL_MAX_SIZE - i}`} />\n            </Flex.Cell>\n          ))}\n          <Flex.GrowCell {...props}>\n            <TextField label=\"TextField\" required />\n          </Flex.GrowCell>\n        </Flex.Row>\n        <Flex.Row {...props} rowGap={rowGap} columnGap={columnGap}>\n          <Flex.Cell {...props} columnGap={columnGap} col={5}>\n            <InputField label={`Инпут шириной 5`} />\n          </Flex.Cell>\n          {/* пространство между инпутами в 3 колонки */}\n          <Flex.Cell col={3} />\n          <Flex.Cell {...props} columnGap={columnGap} col={3}>\n            <InputField label={`Инпут шириной 3`} />\n          </Flex.Cell>\n        </Flex.Row>\n      </Flex.Container>\n    </>\n  );\n};\n"}}},name:"Пример работы с Flex"};FlexPlayground.parameters={...FlexPlayground.parameters,docs:{...FlexPlayground.parameters?.docs,source:{originalSource:"{\n  render: FlexPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: FlexPlaygroundRaw\n      }\n    }\n  },\n  name: 'Пример работы с Flex'\n}",...FlexPlayground.parameters?.docs?.source}}};const __namedExportsOrder=["FlexPlayground"]},"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M21.7 10.046c.3.198.381.601.182.9-.5.754-1.141 1.573-1.913 2.359l1.835 1.835a.65.65 0 1 1-.919.92l-1.867-1.868c-.935.8-2.015 1.516-3.226 2.023l1.034 2.49a.65.65 0 1 1-1.2.498l-1.064-2.56a9.6 9.6 0 0 1-2.562.349 9.8 9.8 0 0 1-2.566-.338l-1.06 2.55a.65.65 0 0 1-1.2-.5l1.027-2.47c-1.244-.517-2.316-1.25-3.221-2.04L3.115 16.06a.65.65 0 0 1-.92-.919l1.844-1.843a19 19 0 0 1-1.903-2.338.65.65 0 1 1 1.066-.744c1.463 2.097 4.34 5.477 8.798 5.477 4.034 0 7.15-2.979 8.8-5.465a.65.65 0 0 1 .9-.181"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeOutline});var _path,_path2,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M11.306 9.08c.376-.088.694.233.694.62v1a1.3 1.3 0 0 0 1.3 1.3h1c.387 0 .708.318.62.694a3.001 3.001 0 1 1-3.614-3.613"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 5c-4.88 0-8.134 3.655-9.563 5.682a2.27 2.27 0 0 0 0 2.636C3.867 15.345 7.119 19 12 19c4.88 0 8.134-3.655 9.563-5.682a2.27 2.27 0 0 0 0-2.636C20.133 8.656 16.881 5 12 5M5.709 8.927a15 15 0 0 0-2.21 2.505.97.97 0 0 0 0 1.136c.522.74 1.263 1.654 2.21 2.505A7 7 0 0 1 5 12c0-1.102.255-2.145.709-3.073M12 17.7a5.7 5.7 0 1 1 0-11.4 5.7 5.7 0 0 1 0 11.4m6.291-8.773a15 15 0 0 1 2.21 2.505.97.97 0 0 1 0 1.136 15 15 0 0 1-2.21 2.505A7 7 0 0 0 19 12a7 7 0 0 0-.709-3.073",clipRule:"evenodd"})))};__webpack_require__.p},"./src/components/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var _path,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgSubtractXl=function SvgSubtractXl(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},props),_path||(_path=react.createElement("path",{d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",clipRule:"evenodd"})))};__webpack_require__.p;var Subtract_l_path;function Subtract_l_extends(){return Subtract_l_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Subtract_l_extends.apply(null,arguments)}var SvgSubtractL=function SvgSubtractL(props){return react.createElement("svg",Subtract_l_extends({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:"none"},props),Subtract_l_path||(Subtract_l_path=react.createElement("path",{d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",clipRule:"evenodd"})))};__webpack_require__.p;var Subtract_m_path;function Subtract_m_extends(){return Subtract_m_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Subtract_m_extends.apply(null,arguments)}var SvgSubtractM=function SvgSubtractM(props){return react.createElement("svg",Subtract_m_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},props),Subtract_m_path||(Subtract_m_path=react.createElement("path",{d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",clipRule:"evenodd"})))};__webpack_require__.p;var Subtract_ms_path;function Subtract_ms_extends(){return Subtract_ms_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Subtract_ms_extends.apply(null,arguments)}var SvgSubtractMs=function SvgSubtractMs(props){return react.createElement("svg",Subtract_ms_extends({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},props),Subtract_ms_path||(Subtract_ms_path=react.createElement("path",{d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",clipRule:"evenodd"})))};__webpack_require__.p;var Subtract_s_path;function Subtract_s_extends(){return Subtract_s_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Subtract_s_extends.apply(null,arguments)}var SvgSubtractS=function SvgSubtractS(props){return react.createElement("svg",Subtract_s_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},props),Subtract_s_path||(Subtract_s_path=react.createElement("path",{d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",clipRule:"evenodd"})))};__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const sizes=(0,styled_components_browser_esm.AH)(["width:",";height:",";"],(({$dimension})=>{switch($dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),(({$dimension})=>{switch($dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}})),spin=(0,styled_components_browser_esm.i7)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),SpinnerWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"Spinner__SpinnerWrapper",componentId:"sc-1ehr66t-0"})(["position:relative;",";& svg{"," animation:"," 1s linear infinite;path{fill:",";}}"],sizes,(p=>p.$svgMixin||""),spin,(({$inverse,theme})=>$inverse?`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`)),Spinner=({dimension="m",inverse=!1,svgMixin,...props})=>{const SpinnerIcon=(dimension=>{switch(dimension){case"s":return SvgSubtractS;case"ms":return SvgSubtractMs;case"m":return SvgSubtractM;case"xl":return SvgSubtractXl;default:return SvgSubtractL}})(dimension);return(0,jsx_runtime.jsx)(SpinnerWrapper,{$inverse:inverse,$dimension:dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive",...props,children:(0,jsx_runtime.jsx)(SpinnerIcon,{})})};Spinner.displayName="Spinner",Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/checkOverflow.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>checkOverflow});const checkOverflow=textContainer=>!!textContainer&&(textContainer.offsetHeight<textContainer.scrollHeight||textContainer.offsetWidth<textContainer.scrollWidth)},"./src/components/form/InputField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>InputField});var _src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/uid.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Field__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_input__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/input/TextInput/index.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),{className,maxLength,displayInline,status,required,extraText,label,id=(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_2__.L)(),disabled,displayCharacterCounter,skeleton,...restProps}=props,fieldContainerProps={className,extraText,status,required,label,id,displayInline,disabled,maxLength,inputRef,displayCharacterCounter,skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.$e)(restProps,fieldContainerProps),(0,_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G)(restProps,fieldContainerProps);const inputProps={ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_4__.d)(ref,inputRef),id,"aria-required":required,status,disabled,maxLength,skeleton,...restProps};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_5__.D0,{...fieldContainerProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_input__WEBPACK_IMPORTED_MODULE_6__.ks,{...inputProps})})}));InputField.displayName="InputField";try{InputField.displayName="InputField",InputField.__docgenInfo={description:"",displayName:"InputField",props:{dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/InputField/index.tsx#InputField"]={docgenInfo:InputField.__docgenInfo,name:"InputField",path:"src/components/form/InputField/index.tsx#InputField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/input/TextInput/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R$:()=>InputBorderedDiv,fw:()=>BorderedDivStyles,ks:()=>TextInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/input/Container.tsx"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Typography/typography.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),_admiral_ds_icons_build_service_EyeCloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg"),_admiral_ds_icons_build_service_EyeOutline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/InputIconButton.tsx"),_src_components_Spinner__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/Spinner/index.tsx"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/components/Tooltip/index.tsx"),_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/utils/checkOverflow.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const iconSizeValue=props=>{switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},horizontalPaddingValue=props=>{switch(props.$dimension){case"xl":default:return 16;case"s":return 12}},extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(["padding-right:","px;"],(props=>horizontalPaddingValue(props)+(iconSizeValue(props)+8)*(props.$iconCount??0))),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(["background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:transparent;"],(p=>p.theme.color["Neutral/Neutral 10"])),getBorderColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(["",""],(({$status,theme})=>{if(!$status)return`var(--admiral-color-Neutral_Neutral40, ${theme.color["Neutral/Neutral 40"]})`;switch($status){case"error":return`var(--admiral-color-Error_Error60Main, ${theme.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${theme.color["Success/Success 50 Main"]})`}})),InputBorderedDiv=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div.withConfig({displayName:"TextInput__InputBorderedDiv",componentId:"sc-1e79s1s-0"})(["position:absolute;top:0;bottom:0;left:0;right:0;margin:0;pointer-events:none;overflow:hidden;min-width:0;background:none;border-radius:inherit;border:1px solid ",";",";"],getBorderColor,(p=>p.disabled&&"border-color: transparent;")),getHoverBorderColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(["",""],(({$status,theme})=>{if(!$status)return`var(--admiral-color-Neutral_Neutral60, ${theme.color["Neutral/Neutral 60"]})`;switch($status){case"error":return`var(--admiral-color-Error_Error70, ${theme.color["Error/Error 70"]})`;case"success":return`var(--admiral-color-Success_Success60, ${theme.color["Success/Success 60"]})`}})),getFocusBorder=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(["border:2px solid ",";"],(({$status,theme})=>{if(!$status)return`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`;switch($status){case"error":return`var(--admiral-color-Error_Error60Main, ${theme.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${theme.color["Success/Success 50 Main"]})`}})),BorderedDivStyles=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(["&:focus-within:not(:disabled) > ","{","}&:hover:not(:focus-within) > ","{border-color:",";}"],InputBorderedDiv,(p=>p.disabled||p.readOnly?"border-color: transparent":getFocusBorder),InputBorderedDiv,(props=>props.disabled||props.readOnly?"transparent":getHoverBorderColor)),ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.AH)(["::-ms-clear,::-ms-reveal{display:none;}"]),Input=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.input.withConfig({displayName:"TextInput__Input",componentId:"sc-1e79s1s-1"})(["outline:none;appearance:none;border-radius:inherit;box-sizing:border-box;flex:1 1 auto;min-width:10px;border:none;text-overflow:ellipsis;padding:0 ","px;"," color:var(--admiral-color-Neutral_Neutral90,",");&&&:disabled{color:var(--admiral-color-Neutral_Neutral30,",");}&::placeholder{color:var(--admiral-color-Neutral_Neutral50,",");}&:disabled::placeholder{color:var(--admiral-color-Neutral_Neutral30,",");}[data-disable-copying] &{user-select:none;pointer-events:none;}background-color:var(--admiral-color-Neutral_Neutral00,",");&&&:user-invalid + ","{border:1px solid var(--admiral-color-Error_Error60Main,",");}&&&:user-invalid:hover:not(:disabled) + ","{border:1px solid var(--admiral-color-Error_Error70,",");}&&&:user-invalid:focus:not(:disabled) + ","{border:2px solid var(--admiral-color-Error_Error60Main,",");}[data-read-only] &&&,&&&:disabled{","}&&&:disabled{cursor:not-allowed;}"," ",""],horizontalPaddingValue,(props=>"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_6__.Il["Body/Body 1 Long"]),(p=>p.theme.color["Neutral/Neutral 90"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 00"]),InputBorderedDiv,(p=>p.theme.color["Error/Error 60 Main"]),InputBorderedDiv,(p=>p.theme.color["Error/Error 70"]),InputBorderedDiv,(p=>p.theme.color["Error/Error 60 Main"]),disabledColors,extraPadding,ieFixes),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div.withConfig({displayName:"TextInput__IconPanel",componentId:"sc-1e79s1s-2"})(["position:absolute;top:0;bottom:0;right:0;display:flex;align-items:center;padding-right:","px;& svg{border-radius:var(--admiral-border-radius-Medium,",");display:block;width:","px;&:focus{outline:none;}&:focus-visible{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}}& > *:not(:first-child){margin-left:8px;}"],horizontalPaddingValue,(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_7__.VM)(p.theme.shape)),iconSizeValue,(p=>p.theme.color["Primary/Primary 60 Main"])),StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay)(_src_components_input_Container__WEBPACK_IMPORTED_MODULE_8__.j2).withConfig({displayName:"TextInput__StyledContainer",componentId:"sc-1e79s1s-3"})([""," ",""],BorderedDivStyles,(({disabled})=>disabled?"cursor: not-allowed;":""));function defaultHandleInput(newInputData){return newInputData||{}}const stopEvent=e=>e.preventDefault(),TextInput=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({dimension,type,displayClearIcon,isLoading,status,handleInput=defaultHandleInput,containerRef,icons,children,className,style,placeholder,skeleton=!1,showTooltip=!0,disableCopying,...props},ref)=>{const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),wrapperRef=containerRef||react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),iconArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(icons),[overflowActive,setOverflowActive]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[tooltipVisible,setTooltipVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[innerValueState,setInnerValueState]=react__WEBPACK_IMPORTED_MODULE_0__.useState(props.defaultValue??void 0),innerValue=props.value??innerValueState;react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{(0,_src_components_common_utils_checkOverflow__WEBPACK_IMPORTED_MODULE_9__.p)(inputRef.current)?setOverflowActive(!0):setOverflowActive(!1)}),[tooltipVisible,setOverflowActive]),react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{function show(){document.activeElement!==inputRef.current&&setTooltipVisible(!0)}function hide(){setTooltipVisible(!1)}const wrapper=wrapperRef.current;if(wrapper)return wrapper.addEventListener("mouseenter",show),wrapper.addEventListener("mouseleave",hide),wrapper.addEventListener("mousedown",hide),()=>{wrapper.removeEventListener("mouseenter",show),wrapper.removeEventListener("mouseleave",hide),wrapper.removeEventListener("mousedown",hide)}}),[setTooltipVisible]);const[isPasswordVisible,setPasswordVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);if(!props.readOnly&&"password"===type){const Icon=isPasswordVisible?_admiral_ds_icons_build_service_EyeOutline_svg__WEBPACK_IMPORTED_MODULE_3__.h:_admiral_ds_icons_build_service_EyeCloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h;iconArray.push((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__.G,{icon:Icon,onClick:()=>{setPasswordVisible(!isPasswordVisible)},"aria-hidden":!0},"eye-icon"))}!props.readOnly&&displayClearIcon&&innerValue&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_10__.G,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__.h,onClick:()=>{inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon")),isLoading&&iconArray.unshift((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Spinner__WEBPACK_IMPORTED_MODULE_12__.y,{dimension:"s"===dimension?"ms":"m"},"loading-icon"));const iconCount=iconArray.length;return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{const nullHandledValue=handleInput(null);function oninput(){const{value,selectionStart,selectionEnd}=this,inputData=handleInput({value,selectionStart,selectionEnd});placeholder&&!(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.i)(nullHandledValue,inputData)?(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(this,{...inputData,value:""}):(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(this,inputData)}if("date"!==type&&inputRef.current){const node=inputRef.current;node.addEventListener("input",oninput);const{value,selectionStart,selectionEnd}=node,inputData=handleInput({value,selectionStart,selectionEnd});return placeholder&&!(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.i)(nullHandledValue,inputData)?(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(node,{...inputData,value:""}):(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_11__.B)(node,inputData),()=>{node.removeEventListener("input",oninput)}}}),[handleInput,placeholder]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledContainer,{className,style,$dimension:dimension,ref:wrapperRef,disabled:props.disabled,readOnly:props.readOnly,$status:status,"data-disabled":!!props.disabled||void 0,"data-read-only":!!props.readOnly||void 0,"data-status":status,$skeleton:skeleton,"data-disable-copying":!!disableCopying||void 0,...disableCopying&&{onMouseDown:stopEvent},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Input,{ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_13__.d)(ref,inputRef),...props,onChange:e=>{setInnerValueState(e.currentTarget.value),props.onChange?.(e)},placeholder,$dimension:dimension,$iconCount:iconCount,type:"password"===type&&isPasswordVisible?"text":type}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputBorderedDiv,{$status:status,disabled:props.disabled||props.readOnly}),iconCount>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconPanel,{disabled:props.disabled,$dimension:dimension,children:iconArray}),children]}),showTooltip&&tooltipVisible&&overflowActive&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_14__.m,{renderContent:()=>inputRef?.current?.value||"",targetElement:wrapperRef.current})]})}));TextInput.defaultProps={dimension:"m"},TextInput.displayName="TextInput";try{InputBorderedDiv.displayName="TextInput",InputBorderedDiv.__docgenInfo={description:"",displayName:"TextInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextInput/index.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/input/TextInput/index.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}}}]);