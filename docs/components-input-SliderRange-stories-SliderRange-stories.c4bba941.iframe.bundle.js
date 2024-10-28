"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5120],{"./src/components/input/SliderRange/stories/SliderRange.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ControlledExample:()=>ControlledExample,CustomExample:()=>CustomExample,PlaygroundExample:()=>PlaygroundExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SliderRange_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),SliderRange=__webpack_require__("./src/components/input/SliderRange/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var SliderRangePlaygroundTemplate=function(_param){var defaultValue=_param.defaultValue,onChange=_param.onChange,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["defaultValue","onChange","themeBorderKind","CSSCustomProps"]);return/*#__PURE__*/(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:/*#__PURE__*/(0,jsx_runtime.jsx)(SliderRange.t,_object_spread({defaultValue:defaultValue||["2","6"],onChange:onChange||function(value){return console.log(value)}},props))})};try{SliderRangePlaygroundTemplate.displayName="SliderRangePlaygroundTemplate",SliderRangePlaygroundTemplate.__docgenInfo={description:"",displayName:"SliderRangePlaygroundTemplate",props:{value:{defaultValue:null,description:"Значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"value",required:!1,type:{name:"[string, string]"}},defaultValue:{defaultValue:null,description:"Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"defaultValue",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"Колбек на изменение значений",name:"onChange",required:!1,type:{name:"((value: [{ str: string; num: number; }, { str: string; num: number; }]) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},minValue:{defaultValue:null,description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера",name:"step",required:!1,type:{name:"number"}},precision:{defaultValue:null,description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами. Если значение не задано,\nто оно определяется согласно локали, в русской локали thousand - это пробел",name:"thousand",required:!1,type:{name:"string"}},decimal:{defaultValue:null,description:"разделитель между целым и десятичным. Если значение не задано,\nто оно определяется согласно локали, в русской локали decimal - это запятая",name:"decimal",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"[string, string]"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдеры инпутов",name:"placeholder",required:!1,type:{name:"[string, string]"}},input1:{defaultValue:null,description:"Опции, которые можно передать в первый инпут",name:"input1",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},input2:{defaultValue:null,description:"Опции, которые можно передать во второй инпут",name:"input2",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Режим readOnly компонента",name:"readOnly",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SliderRange/stories/SliderRangePlayground.template.tsx#SliderRangePlaygroundTemplate"]={docgenInfo:SliderRangePlaygroundTemplate.__docgenInfo,name:"SliderRangePlaygroundTemplate",path:"src/components/input/SliderRange/stories/SliderRangePlayground.template.tsx#SliderRangePlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var SliderRangeCustomTemplate=function(){return/*#__PURE__*/(0,jsx_runtime.jsx)(SliderRange.t,{onChange:function(value){return console.log(value)},minValue:10,maxValue:100,prefix:["From","To"],suffix:"$",placeholder:["From 0 $","To 0 $"]})};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SliderRangeControlledTemplate=function(){var _React_useState=_sliced_to_array(react.useState(["2,0","5,0"]),2),value=_React_useState[0],setValue=_React_useState[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(SliderRange.t,{value:value,onChange:function(value){console.log(value),setValue([value[0].str,value[1].str])},prefix:["От","До"],suffix:"₽",placeholder:["От 0,0 ₽","До 0,0 ₽"],precision:1})};function SliderRange_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SliderRange_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function SliderRange_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SliderRange_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SliderRange_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SliderRange_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SliderRange_stories_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SliderRange_stories_sliced_to_array(arr,i){return SliderRange_stories_array_with_holes(arr)||SliderRange_stories_iterable_to_array_limit(arr,i)||SliderRange_stories_unsupported_iterable_to_array(arr,i)||SliderRange_stories_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SliderRange_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SliderRange_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SliderRange_stories_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  height: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  font-family: 'VTB Group UI', serif;\n  font-size: 16px;\n  line-height: 24px;\n"]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject()),Desc=styled_components_browser_esm.Ay.div(_templateObject1());let SliderRange_stories={title:"Admiral-2.1/Input/SliderRange",decorators:void 0,component:SliderRange.t,parameters:{docs:{source:{code:null}},componentSubtitle:/*#__PURE__*/(0,jsx_runtime.jsx)(function(){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Desc,{children:["Поле ввода с двойным слайдером позволяет выбирать диапазон внутри обозначенного диапазона значений. Так же возможен ввод вручную.",/*#__PURE__*/(0,jsx_runtime.jsx)(Separator,{}),"В диапозон может быть добавлено значение: рубли, доллары и т.п. В таком случае значение подставляется только в поле ввода."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61377"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61446"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61513"}]},argTypes:{disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},thousand:{control:{type:"text"}},decimal:{control:{type:"text"}},suffix:{control:{type:"text"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},minValue:{control:{type:"number"}},maxValue:{control:{type:"number"}},precision:{control:{type:"number"}},step:{control:{type:"number"}},value:{control:!1},defaultValue:{control:!1},input1:{control:!1},input2:{control:!1},prefix:{control:!1},placeholder:{control:!1}}};var PlaygroundExample=(function(props){var CSSCustomProps=SliderRange_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return/*#__PURE__*/(0,jsx_runtime.jsx)(SliderRangePlaygroundTemplate,_object_spread_props(SliderRange_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))}).bind({});PlaygroundExample.parameters={docs:{source:{code:"import * as React from 'react';\nimport { SliderRange } from '@admiral-ds/react-ui';\nimport type { SliderRangeProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { ThemeProvider } from 'styled-components';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const SliderRangePlaygroundTemplate = ({\n  defaultValue,\n  onChange,\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: SliderRangeProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  // eslint-disable-next-line no-console\n  const handleChange = (value: any) => console.log(value);\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <SliderRange defaultValue={defaultValue || ['2', '6']} onChange={onChange || handleChange} {...props} />\n    </ThemeProvider>\n  );\n};\n"}}},PlaygroundExample.storyName="SliderRange. Playground";var CustomExample=(function(){return/*#__PURE__*/(0,jsx_runtime.jsx)(SliderRangeCustomTemplate,{})}).bind({});CustomExample.parameters={docs:{source:{code:"import * as React from 'react';\nimport { SliderRange } from '@admiral-ds/react-ui';\n\nexport const SliderRangeCustomTemplate = () => {\n  return (\n    <SliderRange\n      // eslint-disable-next-line no-console\n      onChange={(value: any) => console.log(value)}\n      minValue={10}\n      maxValue={100}\n      prefix={['From', 'To']}\n      suffix=\"$\"\n      placeholder={['From 0 $', 'To 0 $']}\n    />\n  );\n};\n"}}},CustomExample.storyName="SliderRange. Пример изменения настроек (prefix, suffix, minValue, maxValue)";var ControlledExample=(function(){return/*#__PURE__*/(0,jsx_runtime.jsx)(SliderRangeControlledTemplate,{})}).bind({});ControlledExample.parameters={docs:{source:{code:"import * as React from 'react';\nimport { SliderRange } from '@admiral-ds/react-ui';\n\nexport const SliderRangeControlledTemplate = () => {\n  const [value, setValue] = React.useState<[string, string]>(['2,0', '5,0']);\n  return (\n    <SliderRange\n      value={value}\n      onChange={(value: any) => {\n        // eslint-disable-next-line no-console\n        console.log(value);\n        setValue([value[0].str, value[1].str]);\n      }}\n      prefix={['От', 'До']}\n      suffix=\"₽\"\n      placeholder={['От 0,0 ₽', 'До 0,0 ₽']}\n      precision={1}\n    />\n  );\n};\n"},description:{story:"В качестве значений параметров value и defaultValue в SliderRange необходимо передавать уже\n      отформатированные строки с разделителями тысяч (суффикс/префикс в value/defaultValue вносить не нужно).\n\nКроме того, библиотека \n      предоставляет утилиту fitToCurrency, которая возвращает строку отформатированную в денежном формате. В качестве параметров \n      данная утилита принимает value - значение, которое надо отформатировать, а также параметры precision, decimal, thousand. \n      Также библиотека предоставляет утилиту clearValue, которая возвращает входную строку, из которой удалены все символы кроме \n      цифр, символа decimal и минуса."}}},ControlledExample.storyName="SliderRange. Пример контролируемого компонента.",PlaygroundExample.parameters={...PlaygroundExample.parameters,docs:{...PlaygroundExample.parameters?.docs,source:{originalSource:"props => {\n  const [{\n    CSSCustomProps\n  }] = useGlobals();\n  return <SliderRangePlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;\n}",...PlaygroundExample.parameters?.docs?.source}}},CustomExample.parameters={...CustomExample.parameters,docs:{...CustomExample.parameters?.docs,source:{originalSource:"() => <SliderRangeCustomTemplate />",...CustomExample.parameters?.docs?.source}}},ControlledExample.parameters={...ControlledExample.parameters,docs:{...ControlledExample.parameters?.docs,source:{originalSource:"() => <SliderRangeControlledTemplate />",...ControlledExample.parameters?.docs?.source}}};let __namedExportsOrder=["PlaygroundExample","CustomExample","ControlledExample"]},"./src/components/input/SliderRange/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>SliderRange});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_input_NumberInput__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/input/NumberInput/index.tsx"),_src_components_Range__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/Range/index.tsx"),_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/input/NumberInput/utils.ts"),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/input/Container.tsx"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/common/dom/changeInputData.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  position: relative;\n\n  pointer-events: ",";\n  ",";\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  display: flex;\n  margin-bottom: 16px;\n  [data-dimension='s'] & {\n    margin-bottom: 12px;\n  }\n  & > div:first-child {\n    margin-right: 8px;\n  }\n  & > div {\n    width: 100%;\n  }\n"]);return _templateObject1=function _templateObject(){return data},data}var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),function(p){return p.skeleton?"none":"all"},function(param){return param.skeleton&&_src_components_input_Container__WEBPACK_IMPORTED_MODULE_3__.vy}),InputsWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1()),SliderRange=function(_param){var _userDecimal_slice,dimension=_param.dimension,_param_minValue=_param.minValue,minValue=void 0===_param_minValue?0:_param_minValue,_param_maxValue=_param.maxValue,maxValue=void 0===_param_maxValue?20:_param_maxValue,_param_step=_param.step,step=void 0===_param_step?1:_param_step,_param_precision=_param.precision,precision=void 0===_param_precision?0:_param_precision,userThousand=_param.thousand,userDecimal=_param.decimal,prefix=_param.prefix,suffix=_param.suffix,placeholder=_param.placeholder,value=_param.value,defaultValue=_param.defaultValue,onChange=_param.onChange,input1Props=_param.input1,input2Props=_param.input2,disabled=_param.disabled,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,readOnly=_param.readOnly,props=_object_without_properties(_param,["dimension","minValue","maxValue","step","precision","thousand","decimal","prefix","suffix","placeholder","value","defaultValue","onChange","input1","input2","disabled","skeleton","readOnly"]),rangeDimension="s"===dimension?dimension:"m",theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.d,decimal=null!==(_userDecimal_slice=null==userDecimal?void 0:userDecimal.slice(0,1))&&void 0!==_userDecimal_slice?_userDecimal_slice:(0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.FI)(theme.currentLocale),thousand=void 0!==userThousand&&(0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.p)(userThousand)?userThousand.slice(0,1):(0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.o7)(theme.currentLocale),input1Ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),input2Ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(minValue),2),slider1=_useState[0],setSlider1=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(maxValue),2),slider2=_useState1[0],setSlider2=_useState1[1],_useState2=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((null==defaultValue?void 0:defaultValue[0])||""),2),innerInput1State=_useState2[0],setInnerInput1State=_useState2[1],_useState3=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((null==defaultValue?void 0:defaultValue[1])||""),2),innerInput2State=_useState3[0],setInnerInput2State=_useState3[1],input1=(null==value?void 0:value[0])||innerInput1State,input2=(null==value?void 0:value[1])||innerInput2State,getFull=function(str){return(0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.YW)(String(str),precision,decimal,thousand,!0)};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){""===input1?setSlider1(minValue):setSlider1(Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(input1,precision,decimal).replace(decimal,".")))},[input1,minValue,precision,decimal]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){""===input2?setSlider2(maxValue):setSlider2(Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(input2,precision,decimal).replace(decimal,".")))},[input2,maxValue,precision,decimal]);var inputProps={dimension:dimension,precision:precision,thousand:thousand,decimal:decimal,suffix:suffix,disabled:disabled,readOnly:readOnly,displayPlusMinusIcons:!1,step:step};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper,_object_spread_props(_object_spread({"data-dimension":dimension},props),{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputsWrapper,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_NumberInput__WEBPACK_IMPORTED_MODULE_7__.Q7,_object_spread({ref:input1Ref,value:input1,prefix:null==prefix?void 0:prefix[0],placeholder:null==placeholder?void 0:placeholder[0],skeleton:skeleton,onChange:function(event){var newSlider1=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(event.target.value,precision,decimal).replace(decimal,".")||minValue);setInnerInput1State(event.target.value),null==onChange||onChange([{str:event.target.value,num:newSlider1},{str:input2,num:slider2}])},onBlur:function(){var value1Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(input1,precision,decimal).replace(decimal,".")||minValue),value2Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(input2,precision,decimal).replace(decimal,".")||maxValue);value1Num<minValue?input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input1Ref.current,{value:getFull(minValue)}):value1Num>value2Num-step&&input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input1Ref.current,{value:getFull(value2Num-step)})}},input1Props,inputProps)),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_input_NumberInput__WEBPACK_IMPORTED_MODULE_7__.Q7,_object_spread({ref:input2Ref,value:input2,prefix:null==prefix?void 0:prefix[1],placeholder:null==placeholder?void 0:placeholder[1],skeleton:skeleton,onChange:function(event){var newSlider2=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(event.target.value,precision,decimal).replace(decimal,".")||maxValue);setInnerInput2State(event.target.value),null==onChange||onChange([{str:input1,num:slider1},{str:event.target.value,num:newSlider2}])},onBlur:function(){var value1Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(input1,precision,decimal).replace(decimal,".")||minValue),value2Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_5__.Zv)(input2,precision,decimal).replace(decimal,".")||maxValue);value2Num>maxValue?input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input2Ref.current,{value:getFull(maxValue)}):value2Num<value1Num+step&&input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input2Ref.current,{value:getFull(value1Num+step)})}},input2Props,inputProps))]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Range__WEBPACK_IMPORTED_MODULE_8__.Q,{value:[slider1,slider2],skeleton:skeleton,onChange:function(_event,value){var _value=_sliced_to_array(value,2),newSld1=_value[0],newSld2=_value[1],newSlider1=newSld1<minValue?minValue:newSld1,newSlider2=newSld2>maxValue?maxValue:newSld2;input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input1Ref.current,{value:getFull(newSlider1)}),input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input2Ref.current,{value:getFull(newSlider2)})},onMouseDown:function(e){e.preventDefault()},onRangeMouseUp:function(){slider1==slider2&&slider1+step<=maxValue?input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input2Ref.current,{value:getFull(slider2+step)}):slider1==slider2&&slider1+step>maxValue&&input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_6__.B)(input1Ref.current,{value:getFull(slider1-step)})},minValue:minValue,maxValue:maxValue,step:step,dimension:rangeDimension,disabled:disabled||readOnly})]}))};SliderRange.displayName="SliderRange";try{SliderRange.displayName="SliderRange",SliderRange.__docgenInfo={description:"",displayName:"SliderRange",props:{value:{defaultValue:null,description:"Значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"value",required:!1,type:{name:"[string, string]"}},defaultValue:{defaultValue:null,description:"Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"defaultValue",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"Колбек на изменение значений",name:"onChange",required:!1,type:{name:"((value: [{ str: string; num: number; }, { str: string; num: number; }]) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},minValue:{defaultValue:{value:"0"},description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"20"},description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Шаг слайдера",name:"step",required:!1,type:{name:"number"}},precision:{defaultValue:{value:"0"},description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"разделитель между тысячами. Если значение не задано,\nто оно определяется согласно локали, в русской локали thousand - это пробел",name:"thousand",required:!1,type:{name:"string"}},decimal:{defaultValue:null,description:"разделитель между целым и десятичным. Если значение не задано,\nто оно определяется согласно локали, в русской локали decimal - это запятая",name:"decimal",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"[string, string]"}},suffix:{defaultValue:null,description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"плейсхолдеры инпутов",name:"placeholder",required:!1,type:{name:"[string, string]"}},input1:{defaultValue:null,description:"Опции, которые можно передать в первый инпут",name:"input1",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},input2:{defaultValue:null,description:"Опции, которые можно передать во второй инпут",name:"input2",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Режим readOnly компонента",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SliderRange/index.tsx#SliderRange"]={docgenInfo:SliderRange.__docgenInfo,name:"SliderRange",path:"src/components/input/SliderRange/index.tsx#SliderRange"})}catch(__react_docgen_typescript_loader_error){}}}]);