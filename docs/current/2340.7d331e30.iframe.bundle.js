"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2340],{"./src/components/RadioButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>RadioButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  background: var(--admiral-color-Opacity_Hover, `,`);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  `,`
  background-color: var(--admiral-color-Opacity_Hover, `,`);
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: `,`;
  `,`
  color: `,`;
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }
  fieldset[data-dimension='s'] && {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  border-color: var(--admiral-color-Neutral_Neutral30, `,`);
  background-color: var(--admiral-color-Neutral_Neutral10, `,`);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  display: inline-block;
  position: absolute;
  flex-shrink: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: '';
  box-sizing: border-box;
  pointer-events: none;
  border-radius: 50%;
  transition: all 0.25s ease-in-out;

  width: `,`px;
  height: `,`px;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
  border: `,`px solid
    var(--admiral-color-Neutral_Neutral50, `,`);

  fieldset[data-dimension='s'] & {
    width: `,`px;
    height: `,`px;
  }
  `,`
  `,`

  fieldset:disabled & {
    border: `,`px solid
      var(--admiral-color-Neutral_Neutral30, `,`);
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  pointer-events: none;
  position: relative;
  flex-shrink: 0;
  border-radius: 50%;
  margin: `,`px;
  `,`
  fieldset[data-dimension='s'] & {
    width: `,`px;
    height: `,`px;
    margin: 1px;
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  pointer-events: none;

  &:not(:checked) {
    & + div > span {
      background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    }
  }

  &:checked {
    & + div > span {
      background-color: var(--admiral-color-Neutral_Neutral00, `,`);
    }
  }
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  opacity: 0;

  box-sizing: border-box;

  `,`;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:checked):disabled {
    & + div > span {
      background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    }
  }

  &:checked:disabled {
    & + div > span {
      border: `,`px solid
        var(--admiral-color-Primary_Primary30, `,`);
      background-color: var(--admiral-color-Neutral_Neutral00, `,`);
    }
  }

  &:checked:not(:disabled) {
    & + div > span {
      border: `,`;
    }
  }

  &:not(:disabled) {
    &:focus-visible + div {
      outline-offset: `,`px;
      outline: var(--admiral-color-Primary_Primary60Main, `,`) solid
        `,`px;
    }

    &:hover {
      & + div > div {
        `,`;
      }
      &:focus-visible + div {
        outline: none;
      }
    }
    &:active {
      & + div > div {
        `,`;
        background: var(--admiral-color-Opacity_Press, `,`);
      }
      &:focus-visible + div {
        outline: none;
      }
    }
  }
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  margin-top: 6px;
  `,`;
  color: `,`;
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
      & > * {
        pointer-events: none;
      }
    `]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  display: flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  user-select: none;

  cursor: `,`;
  color: `,`;

  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    cursor: not-allowed;
  }

  `,`;
`]);return _templateObject9=function _templateObject(){return data},data}var RadioButtonHover=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Opacity/Hover"]},function(p){return`
        width: calc(100% + `.concat("s"===p.$dimension?14:16,`px);
        height: calc(100% + `).concat("s"===p.$dimension?14:16,`px);
      `)},function(p){return p.theme.color["Opacity/Hover"]}),RadioButtonLabel=styled_components_browser_esm.Ay.div(_templateObject1(),"2px 0 2px 8px",function(p){return"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]},typography.Il["Body/Body 2 Short"]),disabledCss=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 10"]}),Span=styled_components_browser_esm.Ay.span(_templateObject3(),function(p){return"s"===p.$dimension?18:20},function(p){return"s"===p.$dimension?18:20},function(p){return p.theme.color["Neutral/Neutral 00"]},1,function(p){return p.theme.color["Neutral/Neutral 50"]},18,18,function(p){return p.disabled?disabledCss:""},function(p){return p.$error?"border-color: var(--admiral-color-Error_Error60Main, ".concat(p.theme.color["Error/Error 60 Main"],");"):""},1,function(p){return p.theme.color["Neutral/Neutral 30"]}),InputContainer=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return"s"===p.$dimension?1:2},function(p){return`
    width: `.concat("s"===p.$dimension?18:20,`px;
    height: `).concat("s"===p.$dimension?18:20,`px;
  `)},18,18),readOnlyCss=(0,styled_components_browser_esm.AH)(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 00"]}),Input=styled_components_browser_esm.Ay.input(_templateObject6(),function(p){return p.readOnly&&readOnlyCss},function(p){return p.theme.color["Neutral/Neutral 10"]},5,function(p){return p.theme.color["Primary/Primary 30"]},function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return p.readOnly?"".concat(5,"px solid var(--admiral-color_Primary_Primary30, ").concat(p.theme.color["Primary/Primary 30"],")"):"".concat(5,"px solid var(--admiral-color_Primary_Primary60Main, ").concat(p.theme.color["Primary/Primary 60 Main"],")")},2,function(p){return p.theme.color["Primary/Primary 60 Main"]},2,function(p){return!p.readOnly&&"visibility: visible"},function(p){return!p.readOnly&&"visibility: visible"},function(p){return p.theme.color["Opacity/Press"]}),Hint=styled_components_browser_esm.Ay.div(_templateObject7(),typography.Il["Body/Body 2 Short"],function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")}),RadioButtonComponent=styled_components_browser_esm.Ay.label(_templateObject9(),function(p){return p.disabled?"not-allowed":p.readOnly?"default":"pointer"},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.readOnly&&(0,styled_components_browser_esm.AH)(_templateObject8())}),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var RadioButton=(0,react.forwardRef)(function(_param,ref){var children=_param.children,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,readOnly=_param.readOnly,_param_error=_param.error,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,extraText=_param.extraText,className=_param.className,props=_object_without_properties(_param,["children","disabled","readOnly","error","dimension","extraText","className"]);return(0,jsx_runtime.jsxs)(RadioButtonComponent,{disabled:disabled,readOnly:readOnly,className:className,children:[(0,jsx_runtime.jsx)(Input,_object_spread_props(_object_spread({ref:ref,type:"radio",disabled:disabled,readOnly:readOnly,$dimension:dimension},props),{onKeyDown:function(e){var _props_onKeyDown;readOnly&&keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault(),null==(_props_onKeyDown=props.onKeyDown)||_props_onKeyDown.call(props,e)}})),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(RadioButtonHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(Span,{disabled:disabled||readOnly,$dimension:dimension,$error:void 0!==_param_error&&_param_error,"aria-hidden":!0})]}),children&&(0,jsx_runtime.jsxs)(RadioButtonLabel,{$dimension:dimension,disabled:disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(Hint,{disabled:disabled,children:extraText})]})]})});RadioButton.displayName="RadioButton";try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"Состояние кнопки, выбрана или нет",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"m"},description:"Размер радиокнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},extraText:{defaultValue:null,description:"Дополнительный текст (подсказка), который выводится нижней строкой",name:"extraText",required:!1,type:{name:"ReactNode"}},error:{defaultValue:{value:"false"},description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/index.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/index.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/form/FieldSet/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>FieldSet});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Field__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Field/index.tsx"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  padding-inline: 0;
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  fieldset:disabled & {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    cursor: default;
  }

  [aria-required='true'] &:after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, `,`);
  }

  [data-status='error'] & {
    color: var(--admiral-color-Error_Error60Main, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  flex: 1 1 100%;
  display: flex;
  margin: 0;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  border: none;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: `,`;

  && > *:not(`,`) {
    margin-top: `,`px;
    margin-right: 16px;
  }

  `,` {
    margin-top: 0;
  }
`]);return _templateObject2=function _templateObject(){return data},data}var Legend=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.legend(_templateObject(),function(props){return"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 1 Long"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Error/Error 60 Main"]},function(p){return p.theme.color["Error/Error 60 Main"]}),FieldSetExtrasContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1()),FieldSetContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.fieldset(_templateObject2(),function(param){return param.$flexDirection||"column"},FieldSetExtrasContainer,function(props){return"s"===props.$dimension?12:16},Legend),FieldSet=function(props){var legend=props.legend,children=props.children,extraText=props.extraText,dimension=props.dimension,flexDirection=props.flexDirection,fieldsetProps=_object_without_properties(props,["legend","children","extraText","dimension","flexDirection"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldSetContainer,_object_spread_props(_object_spread({},fieldsetProps),{$dimension:dimension,$flexDirection:flexDirection,"data-dimension":dimension,"aria-required":props.required,"data-status":props.status,"data-required-within":props.required?"":void 0,"data-disabled":props.disabled?"":void 0,children:[legend&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Legend,{$dimension:dimension,children:legend}),children,extraText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FieldSetExtrasContainer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Field__WEBPACK_IMPORTED_MODULE_2__.bV,{children:extraText})})]}))};FieldSet.displayName="FieldSet";try{FieldSet.displayName="FieldSet",FieldSet.__docgenInfo={description:"",displayName:"FieldSet",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Установка статуса disabled",name:"disabled",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:"Расположение контента по вертикали или горизонтали",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/FieldSet/index.tsx#FieldSet"]={docgenInfo:FieldSet.__docgenInfo,name:"FieldSet",path:"src/components/form/FieldSet/index.tsx#FieldSet"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=2340.7d331e30.iframe.bundle.js.map