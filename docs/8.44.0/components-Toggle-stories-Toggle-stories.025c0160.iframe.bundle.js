"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9877],{"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toggle/stories/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToggleDimension:()=>ToggleDimension,ToggleHint:()=>ToggleHint,ToggleLabel:()=>ToggleLabel,ToggleMobile:()=>ToggleMobile,TogglePlayground:()=>TogglePlayground,ToggleState:()=>ToggleState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Toggle=__webpack_require__("./src/components/Toggle/index.tsx"),T=__webpack_require__("./src/components/T/index.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return _templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject()),ToggleHintTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Варианты компонента с дополнительным текстом."}),(0,jsx_runtime.jsx)(Toggle.l,{extraText:"Add text",children:"Dimension - m"}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{extraText:"Add text",dimension:"s",children:"Dimension - s"}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{labelPosition:"left",extraText:"Add text",children:"Dimension - m"}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{labelPosition:"left",extraText:"Add text",dimension:"s",children:"Dimension - s"})]})};function ToggleDimension_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ToggleDimension_template_templateObject(){var data=ToggleDimension_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return ToggleDimension_template_templateObject=function _templateObject(){return data},data}var ToggleDimension_template_Separator=styled_components_browser_esm.Ay.div(ToggleDimension_template_templateObject()),ToggleDimensionTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Toggle.l,{children:"Dimension - m"}),(0,jsx_runtime.jsx)(ToggleDimension_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{dimension:"s",children:"Dimension - s"})]})};function ToggleMobile_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ToggleMobile_template_templateObject(){var data=ToggleMobile_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return ToggleMobile_template_templateObject=function _templateObject(){return data},data}var ToggleMobile_template_Separator=styled_components_browser_esm.Ay.div(ToggleMobile_template_templateObject()),ToggleMobileTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M с текстом слева, который можно вытянуть на всю ширину экрана."}),(0,jsx_runtime.jsxs)("div",{style:{width:"400px"},children:[(0,jsx_runtime.jsx)(Toggle.l,{labelPosition:"left",children:"Some label"}),(0,jsx_runtime.jsx)(ToggleMobile_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{labelPosition:"left",width:"200px",children:"Some label"}),(0,jsx_runtime.jsx)(ToggleMobile_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{labelPosition:"left",width:300,children:"Some label"}),(0,jsx_runtime.jsx)(ToggleMobile_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{labelPosition:"left",width:"100%",children:"Some label"})]})]})};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function TogglePlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function TogglePlayground_template_templateObject(){var data=TogglePlayground_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return TogglePlayground_template_templateObject=function _templateObject(){return data},data}var TogglePlayground_template_Separator=styled_components_browser_esm.Ay.div(TogglePlayground_template_templateObject()),TogglePlaygroundTemplate=function(_param){var dimension=_param.dimension,disabled=_param.disabled,readOnly=_param.readOnly,width=_param.width,extraText=_param.extraText,labelPosition=_param.labelPosition,argChecked=_param.checked,props=_object_without_properties(_param,["dimension","disabled","readOnly","width","extraText","labelPosition","checked"]),_React_useState=_sliced_to_array(react.useState(argChecked||!1),2),checked=_React_useState[0],setChecked=_React_useState[1];return react.useEffect(function(){setChecked(!!argChecked)},[argChecked]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Toggle.l,_object_spread_props(_object_spread({},props),{checked:checked,onChange:function(event){return setChecked(event.currentTarget.checked)},dimension:dimension,disabled:disabled,readOnly:readOnly,width:width,extraText:extraText,labelPosition:labelPosition,children:"Controlled component"})),(0,jsx_runtime.jsx)(TogglePlayground_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{dimension:dimension,disabled:disabled,readOnly:readOnly,width:width,extraText:extraText,labelPosition:labelPosition,children:"Uncontrolled component"})]})};try{TogglePlaygroundTemplate.displayName="TogglePlaygroundTemplate",TogglePlaygroundTemplate.__docgenInfo={description:"",displayName:"TogglePlaygroundTemplate",props:{labelPosition:{defaultValue:null,description:"Расположение подписи",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:`Ширина компонента. Применяется только в случае labelPosition == 'left'.
Рекомендуется использовать в мобильной версии компонента, указывая ширину равную всему экрану`,name:"width",required:!1,type:{name:"string | number"}},extraText:{defaultValue:null,description:"Дополнительный текст (подсказка), выводится нижней строкой",name:"extraText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/stories/TogglePlayground.template.tsx#TogglePlaygroundTemplate"]={docgenInfo:TogglePlaygroundTemplate.__docgenInfo,name:"TogglePlaygroundTemplate",path:"src/components/Toggle/stories/TogglePlayground.template.tsx#TogglePlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function ToggleLabel_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ToggleLabel_template_templateObject(){var data=ToggleLabel_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return ToggleLabel_template_templateObject=function _templateObject(){return data},data}var ToggleLabel_template_Separator=styled_components_browser_esm.Ay.div(ToggleLabel_template_templateObject()),ToggleLabelTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Варианты компонента без подписи, с подписью слева и справа."}),(0,jsx_runtime.jsx)(Toggle.l,{}),(0,jsx_runtime.jsx)(ToggleLabel_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{children:"Some label"}),(0,jsx_runtime.jsx)(ToggleLabel_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{labelPosition:"left",children:"Some label"})]})};function ToggleState_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ToggleState_template_templateObject(){var data=ToggleState_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return ToggleState_template_templateObject=function _templateObject(){return data},data}var ToggleState_template_Separator=styled_components_browser_esm.Ay.div(ToggleState_template_templateObject()),ToggleStateTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Toggle.l,{checked:!0,onChange:function(){},children:"Active"}),(0,jsx_runtime.jsx)(ToggleState_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{checked:!1,onChange:function(){},children:"Not active"}),(0,jsx_runtime.jsx)(ToggleState_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{checked:!0,readOnly:!0,children:"Active readonly"}),(0,jsx_runtime.jsx)(ToggleState_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{checked:!1,readOnly:!0,children:"Not active readonly"}),(0,jsx_runtime.jsx)(ToggleState_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{checked:!0,disabled:!0,children:"Active disabled"}),(0,jsx_runtime.jsx)(ToggleState_template_Separator,{}),(0,jsx_runtime.jsx)(Toggle.l,{checked:!1,disabled:!0,children:"Not active disabled"})]})};let ToggleHint_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Toggle, T } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const ToggleHintTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Варианты компонента с дополнительным текстом.
      </T>
      <Toggle extraText="Add text">Dimension - m</Toggle>
      <Separator />
      <Toggle extraText="Add text" dimension="s">
        Dimension - s
      </Toggle>
      <Separator />
      <Toggle labelPosition="left" extraText="Add text">
        Dimension - m
      </Toggle>
      <Separator />
      <Toggle labelPosition="left" extraText="Add text" dimension="s">
        Dimension - s
      </Toggle>
    </>
  );
};
`,ToggleDimension_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const ToggleDimensionTemplate = () => {
  return (
    <>
      <Toggle>Dimension - m</Toggle>
      <Separator />
      <Toggle dimension="s">Dimension - s</Toggle>
    </>
  );
};
`,ToggleMobile_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Toggle, T } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const ToggleMobileTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        При создании отдельных макетов для мобильных устройств, рекомендуется использовать вариацию комопнента размера M
        с текстом слева, который можно вытянуть на всю ширину экрана.
      </T>
      <div style={{ width: '400px' }}>
        <Toggle labelPosition="left">Some label</Toggle>
        <Separator />
        <Toggle labelPosition="left" width="200px">
          Some label
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" width={300}>
          Some label
        </Toggle>
        <Separator />
        <Toggle labelPosition="left" width="100%">
          Some label
        </Toggle>
      </div>
    </>
  );
};
`,TogglePlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';
import type { ToggleProps } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const TogglePlaygroundTemplate = ({
  dimension,
  disabled,
  readOnly,
  width,
  extraText,
  labelPosition,
  checked: argChecked,
  ...props
}: ToggleProps) => {
  const [checked, setChecked] = React.useState(argChecked || false);

  React.useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);
  return (
    <>
      <Toggle
        {...props}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        dimension={dimension}
        disabled={disabled}
        readOnly={readOnly}
        width={width}
        extraText={extraText}
        labelPosition={labelPosition}
      >
        Controlled component
      </Toggle>
      <Separator />
      <Toggle
        dimension={dimension}
        disabled={disabled}
        readOnly={readOnly}
        width={width}
        extraText={extraText}
        labelPosition={labelPosition}
      >
        Uncontrolled component
      </Toggle>
    </>
  );
};
`,ToggleLabel_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Toggle, T } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const ToggleLabelTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Варианты компонента без подписи, с подписью слева и справа.
      </T>
      <Toggle />
      <Separator />
      <Toggle>Some label</Toggle>
      <Separator />
      <Toggle labelPosition="left">Some label</Toggle>
    </>
  );
};
`,ToggleState_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const ToggleStateTemplate = () => {
  return (
    <>
      <Toggle checked onChange={() => undefined}>
        Active
      </Toggle>
      <Separator />
      <Toggle checked={false} onChange={() => undefined}>
        Not active
      </Toggle>
      <Separator />
      <Toggle checked readOnly>
        Active readonly
      </Toggle>
      <Separator />
      <Toggle checked={false} readOnly>
        Not active readonly
      </Toggle>
      <Separator />
      <Toggle checked disabled>
        Active disabled
      </Toggle>
      <Separator />
      <Toggle checked={false} disabled>
        Not active disabled
      </Toggle>
    </>
  );
};
`;function Toggle_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Toggle_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Toggle_stories_define_property(target,key,source[key])})}return target}function Toggle_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Toggle_stories_templateObject(){var data=Toggle_stories_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return Toggle_stories_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=Toggle_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject1=function _templateObject(){return data},data}var Toggle_stories_Separator=styled_components_browser_esm.Ay.div(Toggle_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(_templateObject1());let Toggle_stories={title:"Admiral-2.1/Toggle",decorators:void 0,component:Toggle.l,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21193"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21376"}],componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Переключатель используется в ситуации, когда нужно переключиться между двумя равнозначными состояними интерфейса.",(0,jsx_runtime.jsx)(Toggle_stories_Separator,{}),"Размер вариации компонента с текстом слева изменяется вручную, может применяться как адаптив на мобильных устройствах."]})},{}),actions:{argTypesRegex:"^on[A-Z].*"},layout:"centered"},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},labelPosition:{options:["left","right"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},width:{control:{type:"text"}},extraText:{control:{type:"text"}}}};var TogglePlayground={render:function(props){return(0,jsx_runtime.jsx)(TogglePlaygroundTemplate,Toggle_stories_object_spread({},props))},parameters:{docs:{source:{code:TogglePlayground_templateraw_namespaceObject}}},name:"Toggle. Playground"},ToggleDimension={render:function(){return(0,jsx_runtime.jsx)(ToggleDimensionTemplate,{})},parameters:{docs:{source:{code:ToggleDimension_templateraw_namespaceObject}}},name:"Toggle. Размеры"},ToggleState={render:function(){return(0,jsx_runtime.jsx)(ToggleStateTemplate,{})},parameters:{docs:{source:{code:ToggleState_templateraw_namespaceObject}}},name:"Toggle. Состояния"},ToggleLabel={render:function(){return(0,jsx_runtime.jsx)(ToggleLabelTemplate,{})},name:"Toggle. Расположение подписи",parameters:{docs:{source:{code:ToggleLabel_templateraw_namespaceObject}}}},ToggleHint={render:function(){return(0,jsx_runtime.jsx)(ToggleHintTemplate,{})},name:"Toggle. Дополнительный текст",parameters:{docs:{source:{code:ToggleHint_templateraw_namespaceObject}}}},ToggleMobile={render:function(){return(0,jsx_runtime.jsx)(ToggleMobileTemplate,{})},name:"Toggle. Адаптив",parameters:{docs:{source:{code:ToggleMobile_templateraw_namespaceObject}}}};TogglePlayground.parameters={...TogglePlayground.parameters,docs:{...TogglePlayground.parameters?.docs,source:{originalSource:`{
  render: TogglePlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: TogglePlaygroundRaw
      }
    }
  },
  name: 'Toggle. Playground'
}`,...TogglePlayground.parameters?.docs?.source}}},ToggleDimension.parameters={...ToggleDimension.parameters,docs:{...ToggleDimension.parameters?.docs,source:{originalSource:`{
  render: ToggleDimensionStory,
  parameters: {
    docs: {
      source: {
        code: ToggleDimensionRaw
      }
    }
  },
  name: 'Toggle. Размеры'
}`,...ToggleDimension.parameters?.docs?.source}}},ToggleState.parameters={...ToggleState.parameters,docs:{...ToggleState.parameters?.docs,source:{originalSource:`{
  render: ToggleStateStory,
  parameters: {
    docs: {
      source: {
        code: ToggleStateRaw
      }
    }
  },
  name: 'Toggle. Состояния'
}`,...ToggleState.parameters?.docs?.source}}},ToggleLabel.parameters={...ToggleLabel.parameters,docs:{...ToggleLabel.parameters?.docs,source:{originalSource:`{
  render: ToggleLabelStory,
  name: 'Toggle. Расположение подписи',
  parameters: {
    docs: {
      source: {
        code: ToggleLabelRaw
      }
    }
  }
}`,...ToggleLabel.parameters?.docs?.source}}},ToggleHint.parameters={...ToggleHint.parameters,docs:{...ToggleHint.parameters?.docs,source:{originalSource:`{
  render: ToggleHintStory,
  name: 'Toggle. Дополнительный текст',
  parameters: {
    docs: {
      source: {
        code: ToggleHintRaw
      }
    }
  }
}`,...ToggleHint.parameters?.docs?.source}}},ToggleMobile.parameters={...ToggleMobile.parameters,docs:{...ToggleMobile.parameters?.docs,source:{originalSource:`{
  render: ToggleMobileStory,
  name: 'Toggle. Адаптив',
  parameters: {
    docs: {
      source: {
        code: ToggleMobileRaw
      }
    }
  }
}`,...ToggleMobile.parameters?.docs?.source}}};let __namedExportsOrder=["TogglePlayground","ToggleDimension","ToggleState","ToggleLabel","ToggleHint","ToggleMobile"]},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-Toggle-stories-Toggle-stories.025c0160.iframe.bundle.js.map