"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1187],{"./src/components/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox});var _path,_rect,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function Minus_extends(){return(Minus_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}__webpack_require__.p,__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  height: `,`;
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  pointer-events: none;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, `,`);
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  cursor: `,`;

  overflow: visible;
  `,`;
  `,`;
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, `,`);
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  border: 1px solid
    `,`;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, `,`);
  }
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  &:not(:disabled) {
    &::after {
      `,`;
      background-color: var(--admiral-color-Opacity_Hover, `,`);
    }
  }
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
  &:not(:disabled) {
    &::after {
      `,`;
      background-color: var(--admiral-color-Opacity_Press, `,`);
    }
  }
`]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  pointer-events: none;
  & + `,` {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, `,`);
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
`]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
  background-color: var(--admiral-color-Primary_Primary30, `,`);
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, `,`);
  }
`]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  border: none;
`]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
  & + `,` {
    `,`
  }
`]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal([`
  & + `,` {
    `,`
  }
`]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject14=function _templateObject(){return data},data}function _templateObject15(){var data=_tagged_template_literal([`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Small, `,`);
  margin: 0;
  padding: 0;

  `,`

  &:checked + `,` {
    `,`
  }
  &:checked:disabled + `,` {
    `,`
  }

  `,`

  &:not(:checked) + `,` {
    > * {
      display: `,`;
    }
  }

  &:disabled {
    cursor: not-allowed;
    `,`
    `,`
  }

  `,`

  &:hover:not(:disabled),
  &:focus:not(:disabled) + `,`

  &:active:not(:disabled) {
    `,`
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }
`]);return _templateObject15=function _templateObject(){return data},data}var width=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){switch(param.$dimension){case"m":default:return"20px";case"s":return"16px"}}),height=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){switch(param.$dimension){case"m":default:return"20px";case"s":return"16px"}}),Check=(0,styled_components_browser_esm.Ay)(function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})(_templateObject2()),Indeterminate=(0,styled_components_browser_esm.Ay)(function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})(_templateObject3(),function(p){return p.theme.color["Special/Static White"]}),Container=styled_components_browser_esm.Ay.div(_templateObject4(),function(props){return props.$disabled?"not-allowed":props.$readOnly?"default":"pointer"},width,height),Background=styled_components_browser_esm.Ay.div(_templateObject5(),function(p){return(0,borderRadius.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 00"]},function(param){var $error=param.$error,theme=param.theme;return $error?"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")},function(p){return p.theme.color["Special/Static White"]}),actionCss=(0,styled_components_browser_esm.AH)(_templateObject6()),hoveredCss=(0,styled_components_browser_esm.AH)(_templateObject7(),actionCss,function(p){return p.theme.color["Opacity/Hover"]}),activeCss=(0,styled_components_browser_esm.AH)(_templateObject8(),actionCss,function(p){return p.theme.color["Opacity/Press"]}),disabledCss=(0,styled_components_browser_esm.AH)(_templateObject9(),Background,function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 10"]}),disabledCheckedBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject10(),function(p){return p.theme.color["Primary/Primary 30"]},function(p){return p.theme.color["Neutral/Neutral 00"]}),checkedBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject11(),function(p){return p.theme.color["Primary/Primary 60 Main"]}),indeterminateBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject12(),Background,checkedBackgroundCss),disabledIndeterminateBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject13(),Background,disabledCheckedBackgroundCss),indeterminateCss=(0,styled_components_browser_esm.AH)(_templateObject14(),function(p){return p.readOnly?disabledIndeterminateBackgroundCss:indeterminateBackgroundCss}),Input=styled_components_browser_esm.Ay.input(_templateObject15(),function(p){return(0,borderRadius.r2)(p.theme.shape)},function(props){return props.readOnly&&disabledCss},Background,function(props){return props.readOnly?disabledCheckedBackgroundCss:checkedBackgroundCss},Background,disabledCheckedBackgroundCss,function(p){return p.$indeterminate&&indeterminateCss},Background,function(p){return p.$indeterminate?"block":"none"},disabledCss,function(p){return p.$indeterminate&&disabledIndeterminateBackgroundCss},function(props){return!props.readOnly&&props.$hovered&&hoveredCss},hoveredCss,activeCss,function(p){return p.theme.color["Primary/Primary 60 Main"]}),Checkbox=(0,react.forwardRef)(function(_param,ref){var className=_param.className,_param_dimension=_param.dimension,disabled=_param.disabled,readOnly=_param.readOnly,hovered=_param.hovered,indeterminate=_param.indeterminate,error=_param.error,props=_object_without_properties(_param,["className","dimension","disabled","readOnly","hovered","indeterminate","error"]);return(0,jsx_runtime.jsxs)(Container,{$dimension:void 0===_param_dimension?"m":_param_dimension,$disabled:disabled,$readOnly:readOnly,className:className,children:[(0,jsx_runtime.jsx)(Input,_object_spread_props(_object_spread({ref:ref,disabled:disabled,readOnly:readOnly},props),{type:"checkbox",$indeterminate:indeterminate,onKeyDown:function(e){var _props_onKeyDown;readOnly&&keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault(),null==(_props_onKeyDown=props.onKeyDown)||_props_onKeyDown.call(props,e)},"data-hovered":hovered,$hovered:hovered})),(0,jsx_runtime.jsx)(Background,{$error:error,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false"}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false"})})]})});Checkbox.displayName="Checkbox";try{Background.displayName="Checkbox",Background.__docgenInfo={description:"",displayName:"Checkbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/CheckboxField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CheckboxField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),uid=__webpack_require__("./src/components/common/uid.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: `,`;

  `,`
  color: `,`;

  fieldset[data-dimension='s'] && {
    `,`;
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    cursor: not-allowed;
  }

  `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: `,`;
  `,`
  color: `,`;
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }
  fieldset[data-dimension='s'] && {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  margin-top: 4px;
  `,`
  color: `,`;

  fieldset[data-dimension='s'] && {
    `,`
  }
`]);return _templateObject2=function _templateObject(){return data},data}var CheckboxComponentWrapper=styled_components_browser_esm.Ay.label(_templateObject(),function(p){return p.disabled?"not-allowed":p.readOnly?"default":"pointer"},function(p){return"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},typography.Il["Body/Body 2 Short"],function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.readOnly?"pointer-events: none":""}),CheckboxComponentLabel=styled_components_browser_esm.Ay.div(_templateObject1(),"8px",function(p){return"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]},typography.Il["Body/Body 2 Short"]),CheckboxComponentHint=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return"s"===p.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},typography.Il["Caption/Caption 1"]),Checkbox=__webpack_require__("./src/components/Checkbox/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CheckboxField_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CheckboxField_templateObject(){var data=CheckboxField_tagged_template_literal([`
  margin-top: 2px;
`]);return CheckboxField_templateObject=function _templateObject(){return data},data}var StyledChekbox=(0,styled_components_browser_esm.Ay)(Checkbox.Sc)(CheckboxField_templateObject()),CheckboxField=(0,react.forwardRef)(function(_param,ref){var children=_param.children,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_readOnly=_param.readOnly,readOnly=void 0!==_param_readOnly&&_param_readOnly,hovered=_param.hovered,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,error=_param.error,_param_indeterminate=_param.indeterminate,extraText=_param.extraText,className=_param.className,passedId=_param.id,name=_param.name,style=_param.style,props=_object_without_properties(_param,["children","disabled","readOnly","hovered","dimension","error","indeterminate","extraText","className","id","name","style"]),id=(0,react.useMemo)(function(){return passedId||(0,uid.L)()},[passedId]),fieldContainerProps={"data-field-id":id,"data-field-name":name};return(0,splitDataAttributes.G)(props,fieldContainerProps),(0,jsx_runtime.jsxs)(CheckboxComponentWrapper,_object_spread_props(_object_spread({className:className,$dimension:dimension,disabled:disabled,readOnly:readOnly,style:style},fieldContainerProps),{onClick:function(e){"INPUT"!==e.target.tagName&&e.stopPropagation()},children:[(0,jsx_runtime.jsx)(StyledChekbox,_object_spread_props(_object_spread({},props),{ref:ref,disabled:disabled,readOnly:readOnly,type:"checkbox",indeterminate:void 0!==_param_indeterminate&&_param_indeterminate,onKeyDown:function(e){var _props_onKeyDown;readOnly&&keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault(),null==(_props_onKeyDown=props.onKeyDown)||_props_onKeyDown.call(props,e)},"data-hovered":hovered,hovered:hovered,dimension:dimension,id:id,name:name,error:error})),children&&(0,jsx_runtime.jsxs)(CheckboxComponentLabel,{$dimension:dimension,disabled:disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(CheckboxComponentHint,{disabled:disabled,$dimension:dimension,children:extraText})]})]}))});CheckboxField.displayName="CheckboxField";try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:{value:"false"},description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/index.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/components/form/CheckboxField/index.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}}}]);