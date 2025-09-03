"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8139],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/Checkbox/CheckboxDimension.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ALL_DIMENSIONS_VALUES});var ALL_DIMENSIONS_VALUES=["m","s"]},"./src/components/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox});var _path,_rect,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function Minus_extends(){return(Minus_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}__webpack_require__.p,__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject15=function _templateObject(){return data},data}var width=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){switch(param.$dimension){case"m":default:return"20px";case"s":return"16px"}}),height=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){switch(param.$dimension){case"m":default:return"20px";case"s":return"16px"}}),Check=(0,styled_components_browser_esm.Ay)(function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})(_templateObject2()),Indeterminate=(0,styled_components_browser_esm.Ay)(function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})(_templateObject3(),function(p){return p.theme.color["Special/Static White"]}),Container=styled_components_browser_esm.Ay.div(_templateObject4(),function(props){return props.$disabled?"not-allowed":props.$readOnly?"default":"pointer"},width,height),Background=styled_components_browser_esm.Ay.div(_templateObject5(),function(p){return(0,borderRadius.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 00"]},function(param){var $error=param.$error,theme=param.theme;return $error?"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")},function(p){return p.theme.color["Special/Static White"]}),actionCss=(0,styled_components_browser_esm.AH)(_templateObject6()),hoveredCss=(0,styled_components_browser_esm.AH)(_templateObject7(),actionCss,function(p){return p.theme.color["Opacity/Hover"]}),activeCss=(0,styled_components_browser_esm.AH)(_templateObject8(),actionCss,function(p){return p.theme.color["Opacity/Press"]}),disabledCss=(0,styled_components_browser_esm.AH)(_templateObject9(),Background,function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 10"]}),disabledCheckedBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject10(),function(p){return p.theme.color["Primary/Primary 30"]},function(p){return p.theme.color["Neutral/Neutral 00"]}),checkedBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject11(),function(p){return p.theme.color["Primary/Primary 60 Main"]}),indeterminateBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject12(),Background,checkedBackgroundCss),disabledIndeterminateBackgroundCss=(0,styled_components_browser_esm.AH)(_templateObject13(),Background,disabledCheckedBackgroundCss),indeterminateCss=(0,styled_components_browser_esm.AH)(_templateObject14(),function(p){return p.readOnly?disabledIndeterminateBackgroundCss:indeterminateBackgroundCss}),Input=styled_components_browser_esm.Ay.input(_templateObject15(),function(p){return(0,borderRadius.r2)(p.theme.shape)},function(props){return props.readOnly&&disabledCss},Background,function(props){return props.readOnly?disabledCheckedBackgroundCss:checkedBackgroundCss},Background,disabledCheckedBackgroundCss,function(p){return p.$indeterminate&&indeterminateCss},Background,function(p){return p.$indeterminate?"block":"none"},disabledCss,function(p){return p.$indeterminate&&disabledIndeterminateBackgroundCss},function(props){return!props.readOnly&&props.$hovered&&hoveredCss},hoveredCss,activeCss,function(p){return p.theme.color["Primary/Primary 60 Main"]}),Checkbox=(0,react.forwardRef)(function(_param,ref){var className=_param.className,_param_dimension=_param.dimension,disabled=_param.disabled,readOnly=_param.readOnly,hovered=_param.hovered,indeterminate=_param.indeterminate,error=_param.error,props=_object_without_properties(_param,["className","dimension","disabled","readOnly","hovered","indeterminate","error"]);return(0,jsx_runtime.jsxs)(Container,{$dimension:void 0===_param_dimension?"m":_param_dimension,$disabled:disabled,$readOnly:readOnly,className:className,children:[(0,jsx_runtime.jsx)(Input,_object_spread_props(_object_spread({ref:ref,disabled:disabled,readOnly:readOnly},props),{type:"checkbox",$indeterminate:indeterminate,onKeyDown:function(e){var _props_onKeyDown;readOnly&&keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault(),null==(_props_onKeyDown=props.onKeyDown)||_props_onKeyDown.call(props,e)},"data-hovered":hovered,$hovered:hovered})),(0,jsx_runtime.jsx)(Background,{$error:error,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false"}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false"})})]})});Checkbox.displayName="Checkbox";try{Background.displayName="Background",Background.__docgenInfo={description:"",displayName:"Background",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Background"]={docgenInfo:Background.__docgenInfo,name:"Background",path:"src/components/Checkbox/index.tsx#Background"})}catch(__react_docgen_typescript_loader_error){}try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{dimension:{defaultValue:{value:"m"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"",name:"hovered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Checkbox/stories/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxDemo:()=>CheckboxDemo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Checkbox=__webpack_require__("./src/components/Checkbox/index.tsx"),CheckboxDimension=__webpack_require__("./src/components/Checkbox/CheckboxDimension.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),T=__webpack_require__("./src/components/T/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: row;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 66px;
  }
  > * {
    flex: 0 0 auto;
  }
`]);return _templateObject1=function _templateObject(){return data},data}var Container=styled_components_browser_esm.Ay.div(_templateObject()),Row=styled_components_browser_esm.Ay.div(_templateObject1()),CheckboxDemoTemplate=function(_param){var _props_checked,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(null!=(_props_checked=props.checked)&&_props_checked),2),checked=_React_useState[0],setChecked=_React_useState[1];return react.useEffect(function(){setChecked(!!props.checked)},[props.checked]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Header/H6",as:"div",children:"Состояния"}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,_object_spread_props(_object_spread({},props),{checked:checked,onChange:function(e){setChecked(e.target.checked)}})),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s"}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Default"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{indeterminate:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",indeterminate:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Частично выбранный"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{disabled:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",disabled:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Disable"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{disabled:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",disabled:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Disable active"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{disabled:!0,indeterminate:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",disabled:!0,indeterminate:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Disable indeterminate"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{error:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",error:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Состояние ошибки"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{readOnly:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",readOnly:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Readonly"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{readOnly:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",readOnly:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Readonly active"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{readOnly:!0,indeterminate:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",readOnly:!0,indeterminate:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Readonly indeterminate"})]})]})})})};try{CheckboxDemoTemplate.displayName="CheckboxDemoTemplate",CheckboxDemoTemplate.__docgenInfo={description:"",displayName:"CheckboxDemoTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"",name:"hovered",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/stories/CheckboxDemo.template.tsx#CheckboxDemoTemplate"]={docgenInfo:CheckboxDemoTemplate.__docgenInfo,name:"CheckboxDemoTemplate",path:"src/components/Checkbox/stories/CheckboxDemo.template.tsx#CheckboxDemoTemplate"})}catch(__react_docgen_typescript_loader_error){}let CheckboxDemo_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Checkbox, T } from '@admiral-ds/react-ui';
import type { CheckBoxProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div\`
  display: flex;
  flex-direction: column;

  > *:not(:first-child) {
    margin-top: 16px;
  }
\`;

const Row = styled.div\`
  display: flex;
  flex-direction: row;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 66px;
  }
  > * {
    flex: 0 0 auto;
  }
\`;

export const CheckboxDemoTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CheckBoxProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);
  React.useEffect(() => {
    setChecked(Boolean(props.checked));
  }, [props.checked]);
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
        <Container>
          <T font="Header/H6" as="div">
            Состояния
          </T>
          <Row>
            <Checkbox
              {...props}
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            <Checkbox dimension="s" />
            <T font="Body/Body 1 Long" as="div">
              Default
            </T>
          </Row>
          <Row>
            <Checkbox indeterminate />
            <Checkbox dimension="s" indeterminate />
            <T font="Body/Body 1 Long" as="div">
              Частично выбранный
            </T>
          </Row>
          <Row>
            <Checkbox disabled />
            <Checkbox dimension="s" disabled />
            <T font="Body/Body 1 Long" as="div">
              Disable
            </T>
          </Row>
          <Row>
            <Checkbox disabled defaultChecked />
            <Checkbox dimension="s" disabled defaultChecked />
            <T font="Body/Body 1 Long" as="div">
              Disable active
            </T>
          </Row>
          <Row>
            <Checkbox disabled indeterminate />
            <Checkbox dimension="s" disabled indeterminate />
            <T font="Body/Body 1 Long" as="div">
              Disable indeterminate
            </T>
          </Row>
          <Row>
            <Checkbox error />
            <Checkbox dimension="s" error />
            <T font="Body/Body 1 Long" as="div">
              Состояние ошибки
            </T>
          </Row>
          <Row>
            <Checkbox readOnly />
            <Checkbox dimension="s" readOnly />
            <T font="Body/Body 1 Long" as="div">
              Readonly
            </T>
          </Row>
          <Row>
            <Checkbox readOnly defaultChecked />
            <Checkbox dimension="s" readOnly defaultChecked />
            <T font="Body/Body 1 Long" as="div">
              Readonly active
            </T>
          </Row>
          <Row>
            <Checkbox readOnly indeterminate />
            <Checkbox dimension="s" readOnly indeterminate />
            <T font="Body/Body 1 Long" as="div">
              Readonly indeterminate
            </T>
          </Row>
        </Container>
      </ThemeProvider>
    </>
  );
};
`;function Checkbox_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Checkbox_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Checkbox_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Checkbox_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Checkbox_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Checkbox_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Checkbox_stories_define_property(target,key,source[key])})}return target}function Checkbox_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Checkbox_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Checkbox_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Checkbox_stories_sliced_to_array(arr,i){return Checkbox_stories_array_with_holes(arr)||Checkbox_stories_iterable_to_array_limit(arr,i)||Checkbox_stories_unsupported_iterable_to_array(arr,i)||Checkbox_stories_non_iterable_rest()}function Checkbox_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Checkbox_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Checkbox_stories_array_like_to_array(o,minLen)}}let Checkbox_stories={title:"Admiral-2.1/Atoms/Checkbox",decorators:void 0,component:Checkbox.Sc,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A20804"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015"}]},argTypes:{dimension:{options:CheckboxDimension.n,control:{type:"radio"}},indeterminate:{control:{type:"boolean"}},checked:{options:[!1,!0],control:{type:"radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},hovered:{control:{type:"boolean"}},error:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},theme:{control:!1},as:{control:!1},forwardedAs:{control:!1},ref:{control:!1}}};var CheckboxDemo={render:function(props){var CSSCustomProps=Checkbox_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CheckboxDemoTemplate,Checkbox_stories_object_spread_props(Checkbox_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CheckboxDemo_templateraw_namespaceObject}}},name:"Checkbox. Пример"};CheckboxDemo.parameters={...CheckboxDemo.parameters,docs:{...CheckboxDemo.parameters?.docs,source:{originalSource:`{
  render: CheckboxDemoStory,
  parameters: {
    docs: {
      source: {
        code: CheckboxDemoRaw
      }
    }
  },
  name: 'Checkbox. Пример'
}`,...CheckboxDemo.parameters?.docs?.source}}};let __namedExportsOrder=["CheckboxDemo"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 2 Long"'},{value:'"Body/Body 1 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function isObject(val){return null!==val&&!Array.isArray(val)&&(void 0===val?"undefined":_type_of(val))==="object"}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});for(var codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"},i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(var j=0;j<26;j+=1){var n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}var keyboardKey={codes:codes,getCode:function getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey:function getKey(eventOrCode){var isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;var name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[+!!eventOrCode.shiftKey]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey["0"],keyboardKey.Digit1=keyboardKey["1"],keyboardKey.Digit2=keyboardKey["2"],keyboardKey.Digit3=keyboardKey["3"],keyboardKey.Digit4=keyboardKey["4"],keyboardKey.Digit5=keyboardKey["5"],keyboardKey.Digit6=keyboardKey["6"],keyboardKey.Digit7=keyboardKey["7"],keyboardKey.Digit8=keyboardKey["8"],keyboardKey.Digit9=keyboardKey["9"],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Checkbox-stories-Checkbox-stories.b13b3475.iframe.bundle.js.map