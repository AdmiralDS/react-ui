"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6611],{"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-4.75c-.47 0-.86.38-.86.84 0 .47.39.86.86.86.46 0 .85-.39.85-.86 0-.46-.39-.84-.85-.84M14.1 16c0 .41-.34.75-.75.75h-.06c-1.13 0-2.04-.92-2.04-2.05v-3.75c0-.42.33-.75.75-.75.41 0 .75.33.75.75v3.75c0 .3.24.55.54.55h.06c.41 0 .75.33.75.75"})))};__webpack_require__.p},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, `,`);
`]);return _templateObject=function _templateObject(){return data},data}var PositionedPortalContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject(),function(param){return param.theme.zIndex.dropdown}),PositionInPortal=function(_param){var targetElement=_param.targetElement,rootRef=_param.rootRef,fullContainerWidth=_param.fullContainerWidth,props=_object_without_properties(_param,["targetElement","rootRef","fullContainerWidth"]),positionedPortalContainerRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){var node=positionedPortalContainerRef.current;if(node&&targetElement){var observer=(0,_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__.A)(targetElement,function(rect){if(rect){var x=rect.x,y=rect.y,height=rect.height,width=rect.width,style=node.style;style.top="".concat(y,"px"),style.left=fullContainerWidth?"0px":"".concat(x,"px"),style.height="".concat(height,"px"),style.width=fullContainerWidth?"100%":"".concat(width,"px")}});return observer.observe(),function(){observer.unobserve()}}},[targetElement,fullContainerWidth]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PositionedPortalContainer,_object_spread({ref:positionedPortalContainerRef},props)),(null==rootRef?void 0:rootRef.current)||document.body)};try{PositionedPortalContainer.displayName="PositionedPortalContainer",PositionedPortalContainer.__docgenInfo={description:"",displayName:"PositionedPortalContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionedPortalContainer"]={docgenInfo:PositionedPortalContainer.__docgenInfo,name:"PositionedPortalContainer",path:"src/components/PositionInPortal.tsx#PositionedPortalContainer"})}catch(__react_docgen_typescript_loader_error){}try{PositionInPortal.displayName="PositionInPortal",PositionInPortal.__docgenInfo={description:`При фиксированном позиционировании (как у PositionedPortalContainer) элемент позиционируется
всегда относительно исходного содержащего блока (окна браузера).
Исключение, когда один из его предков имеет свойство transform, perspective, или filter,
установленное на что-то иное, кроме none, в этом случае этот предок ведет
себя как содержащий блок. Тогда top, right, bottom и left элемента рассчитываются относительно этого содержащего блока.
Если у такого предка кроме transform задано свойство overflow: hidden, то элемент будет обрезаться по его краям.

В связи с вышеописанным в качестве контейнера для портала рекомендуется выбирать элемент, у предков которого нет свойств
transform, perspective, или filter отличных от none. Также рекомендуется размещать контейнер портала в самом низу dom-дерева,
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RadioButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>RadioButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
  margin-left: `,`;
  `,`
  `,`
  color: `,`;
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
  }
  fieldset[data-dimension='s'] && {
    margin-left: `,`;
    margin-top: 1px;
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
  `,`
  fieldset[data-dimension='s'] & {
    width: `,`px;
    height: `,`px;
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
  `,`
  color: `,`;

  fieldset[data-dimension='s'] && {
    `,`
  }
`]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
      & > * {
        pointer-events: none;
      }
    `]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
  display: flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: `,`;
  user-select: none;

  cursor: `,`;

  `,`
  color: `,`;

  fieldset[data-dimension='s'] && {
    padding: 1px 0 1px 1px;
    `,`;
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    cursor: not-allowed;
  }

  `,`;
`]);return _templateObject9=function _templateObject(){return data},data}var RadioButtonHover=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Opacity/Hover"]},function(p){return`
        width: calc(100% + `.concat("s"===p.$dimension?14:16,`px);
        height: calc(100% + `).concat("s"===p.$dimension?14:16,`px);
      `)},function(p){return p.theme.color["Opacity/Hover"]}),RadioButtonLabel=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return"s"===p.$dimension?"9px":"10px"},function(p){return"s"===p.$dimension?"margin-top: 1px;":""},function(p){return"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},function(p){return p.theme.color["Neutral/Neutral 30"]},"9px",typography.Il["Body/Body 2 Short"]),disabledCss=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 10"]}),Span=styled_components_browser_esm.Ay.span(_templateObject3(),function(p){return"s"===p.$dimension?18:20},function(p){return"s"===p.$dimension?18:20},function(p){return p.theme.color["Neutral/Neutral 00"]},1,function(p){return p.theme.color["Neutral/Neutral 50"]},18,18,function(p){return p.disabled?disabledCss:""},function(p){return p.$error?"border-color: var(--admiral-color-Error_Error60Main, ".concat(p.theme.color["Error/Error 60 Main"],");"):""},1,function(p){return p.theme.color["Neutral/Neutral 30"]}),InputContainer=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return`
    width: `.concat("s"===p.$dimension?18:20,`px;
    height: `).concat("s"===p.$dimension?18:20,`px;
  `)},18,18),readOnlyCss=(0,styled_components_browser_esm.AH)(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 00"]}),Input=styled_components_browser_esm.Ay.input(_templateObject6(),function(p){return p.readOnly&&readOnlyCss},function(p){return p.theme.color["Neutral/Neutral 10"]},5,function(p){return p.theme.color["Primary/Primary 30"]},function(p){return p.theme.color["Neutral/Neutral 00"]},function(p){return p.readOnly?"".concat(5,"px solid var(--admiral-color_Primary_Primary30, ").concat(p.theme.color["Primary/Primary 30"],")"):"".concat(5,"px solid var(--admiral-color_Primary_Primary60Main, ").concat(p.theme.color["Primary/Primary 60 Main"],")")},2,function(p){return p.theme.color["Primary/Primary 60 Main"]},2,function(p){return!p.readOnly&&"visibility: visible"},function(p){return!p.readOnly&&"visibility: visible"},function(p){return p.theme.color["Opacity/Press"]}),Hint=styled_components_browser_esm.Ay.div(_templateObject7(),function(p){return"s"===p.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},typography.Il["Caption/Caption 1"]),RadioButtonComponent=styled_components_browser_esm.Ay.label(_templateObject9(),function(p){return"s"===p.$dimension?"1px 0 1px 1px":"2px 0 2px 2px"},function(p){return p.disabled?"not-allowed":p.readOnly?"default":"pointer"},function(p){return"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]},function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")")},typography.Il["Body/Body 2 Short"],function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.readOnly&&(0,styled_components_browser_esm.AH)(_templateObject8())}),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var RadioButton=(0,react.forwardRef)(function(_param,ref){var children=_param.children,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,readOnly=_param.readOnly,_param_error=_param.error,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,extraText=_param.extraText,className=_param.className,props=_object_without_properties(_param,["children","disabled","readOnly","error","dimension","extraText","className"]);return(0,jsx_runtime.jsxs)(RadioButtonComponent,{disabled:disabled,readOnly:readOnly,className:className,$dimension:dimension,children:[(0,jsx_runtime.jsx)(Input,_object_spread_props(_object_spread({ref:ref,type:"radio",disabled:disabled,readOnly:readOnly,$dimension:dimension},props),{onKeyDown:function(e){var _props_onKeyDown;readOnly&&keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault(),null==(_props_onKeyDown=props.onKeyDown)||_props_onKeyDown.call(props,e)}})),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(RadioButtonHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(Span,{disabled:disabled||readOnly,$dimension:dimension,$error:void 0!==_param_error&&_param_error,"aria-hidden":!0})]}),children&&(0,jsx_runtime.jsxs)(RadioButtonLabel,{$dimension:dimension,disabled:disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(Hint,{disabled:disabled,$dimension:dimension,children:extraText})]})]})});RadioButton.displayName="RadioButton";try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"Состояние кнопки, выбрана или нет",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"m"},description:"Размер радиокнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},extraText:{defaultValue:null,description:"Дополнительный текст (подсказка), который выводится нижней строкой",name:"extraText",required:!1,type:{name:"ReactNode"}},error:{defaultValue:{value:"false"},description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/index.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/index.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RadioButton/stories/RadioButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RadioButtonExtraText:()=>RadioButtonExtraText,RadioButtonInformer:()=>RadioButtonInformer,RadioButtonPlayground:()=>RadioButtonPlayground,RadioButtonSize:()=>RadioButtonSize,RadioButtonState:()=>RadioButtonState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioButton_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),RadioButton=__webpack_require__("./src/components/RadioButton/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return _templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject()),RadioButtonPlaygroundTemplate=function(_param){var argChecked=_param.checked,props=_object_without_properties(_param,["checked"]),_React_useState=_sliced_to_array(react.useState(argChecked||!1),2),checked=_React_useState[0],setChecked=_React_useState[1];return(0,react.useEffect)(function(){setChecked(!!argChecked)},[argChecked]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(RadioButton.a,_object_spread_props(_object_spread({value:1,checked:checked,onChange:function(event){return setChecked(event.currentTarget.checked)}},props),{children:"Some text"})),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setChecked(!1)},children:"Сбросить состояние радиокнопки"})]})};try{RadioButtonPlaygroundTemplate.displayName="RadioButtonPlaygroundTemplate",RadioButtonPlaygroundTemplate.__docgenInfo={description:"",displayName:"RadioButtonPlaygroundTemplate",props:{checked:{defaultValue:null,description:"Состояние кнопки, выбрана или нет",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Размер радиокнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},extraText:{defaultValue:null,description:"Дополнительный текст (подсказка), который выводится нижней строкой",name:"extraText",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/stories/RadioButtonPlayground.template.tsx#RadioButtonPlaygroundTemplate"]={docgenInfo:RadioButtonPlaygroundTemplate.__docgenInfo,name:"RadioButtonPlaygroundTemplate",path:"src/components/RadioButton/stories/RadioButtonPlayground.template.tsx#RadioButtonPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function RadioButtonSize_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function RadioButtonSize_template_templateObject(){var data=RadioButtonSize_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return RadioButtonSize_template_templateObject=function _templateObject(){return data},data}var RadioButtonSize_template_Separator=styled_components_browser_esm.Ay.div(RadioButtonSize_template_templateObject()),RadioButtonSizeTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:1,children:"Dimension - m"}),(0,jsx_runtime.jsx)(RadioButtonSize_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,dimension:"s",children:"Dimension - s"})]})};function RadioButtonState_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function RadioButtonState_template_templateObject(){var data=RadioButtonState_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return RadioButtonState_template_templateObject=function _templateObject(){return data},data}var RadioButtonState_template_Separator=styled_components_browser_esm.Ay.div(RadioButtonState_template_templateObject()),RadioButtonStateTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:1,checked:!0,onChange:function(){},children:"Checked"}),(0,jsx_runtime.jsx)(RadioButtonState_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,checked:!1,onChange:function(){},children:"Not checked"}),(0,jsx_runtime.jsx)(RadioButtonState_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,checked:!0,readOnly:!0,children:"Checked readonly"}),(0,jsx_runtime.jsx)(RadioButtonState_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,checked:!1,readOnly:!0,children:"Not checked readonly"}),(0,jsx_runtime.jsx)(RadioButtonState_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,checked:!0,disabled:!0,onChange:function(){},children:"Checked disabled"}),(0,jsx_runtime.jsx)(RadioButtonState_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,checked:!1,disabled:!0,onChange:function(){},children:"Not checked disabled"}),(0,jsx_runtime.jsx)(RadioButtonState_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,checked:!1,error:!0,onChange:function(){},children:"Not checked error"})]})};function RadioButtonExtraText_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function RadioButtonExtraText_template_templateObject(){var data=RadioButtonExtraText_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return RadioButtonExtraText_template_templateObject=function _templateObject(){return data},data}var RadioButtonExtraText_template_Separator=styled_components_browser_esm.Ay.div(RadioButtonExtraText_template_templateObject()),RadioButtonExtraTextTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:1,extraText:"Additional text",children:"Text"}),(0,jsx_runtime.jsx)(RadioButtonExtraText_template_Separator,{}),(0,jsx_runtime.jsx)(RadioButton.a,{value:1,dimension:"s",extraText:"Additional text",children:"Text"})]})},Hint=__webpack_require__("./src/components/Hint/index.tsx"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg");function RadioButtonInformer_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function RadioButtonInformer_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function RadioButtonInformer_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function RadioButtonInformer_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function RadioButtonInformer_template_sliced_to_array(arr,i){return RadioButtonInformer_template_array_with_holes(arr)||RadioButtonInformer_template_iterable_to_array_limit(arr,i)||RadioButtonInformer_template_unsupported_iterable_to_array(arr,i)||RadioButtonInformer_template_non_iterable_rest()}function RadioButtonInformer_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function RadioButtonInformer_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return RadioButtonInformer_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return RadioButtonInformer_template_array_like_to_array(o,minLen)}}function RadioButtonInformer_template_templateObject(){var data=RadioButtonInformer_template_tagged_template_literal([`
  height: 20px;
  width: 100%;
`]);return RadioButtonInformer_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=RadioButtonInformer_template_tagged_template_literal([`
  margin-left: 5px;
  width: `,`;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  [data-focus-within] & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, `,`);
  }
  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, `,`);
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=RadioButtonInformer_template_tagged_template_literal([`
  display: flex;
  align-items: flex-start;
`]);return _templateObject2=function _templateObject(){return data},data}var RadioButtonInformer_template_Separator=styled_components_browser_esm.Ay.div(RadioButtonInformer_template_templateObject()),RadioButtonInformer_template_InfoSolid=(0,styled_components_browser_esm.Ay)(InfoSolid.h)(_templateObject1(),function(props){return"m"===props.dimension?"24px":"20px"},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]}),RadioWithInformer=styled_components_browser_esm.Ay.div(_templateObject2()),RadioButtonInformerTemplate=function(){var _React_useState=RadioButtonInformer_template_sliced_to_array(react.useState(!1),2),visible1=_React_useState[0],setVisible1=_React_useState[1],_React_useState1=RadioButtonInformer_template_sliced_to_array(react.useState(!1),2),visible2=_React_useState1[0],setVisible2=_React_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(RadioWithInformer,{children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:1,extraText:"Add text",children:"Dimension - m"}),(0,jsx_runtime.jsx)(Hint.C,{visible:visible1,onVisibilityChange:function(visible){return setVisible1(visible)},renderContent:function(){return"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights."},children:(0,jsx_runtime.jsx)(RadioButtonInformer_template_InfoSolid,{dimension:"m","aria-hidden":!0})})]}),(0,jsx_runtime.jsx)(RadioButtonInformer_template_Separator,{}),(0,jsx_runtime.jsxs)(RadioWithInformer,{children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:1,dimension:"s",extraText:"Add text",children:"Dimension - s"}),(0,jsx_runtime.jsx)(Hint.C,{visible:visible2,onVisibilityChange:function(visible){return setVisible2(visible)},renderContent:function(){return"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights."},children:(0,jsx_runtime.jsx)(RadioButtonInformer_template_InfoSolid,{dimension:"s","aria-hidden":!0})})]})]})};let RadioButtonPlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Button, RadioButton } from '@admiral-ds/react-ui';
import type { RadioButtonProps } from '@admiral-ds/react-ui';
import { useEffect } from 'react';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const RadioButtonPlaygroundTemplate = ({ checked: argChecked, ...props }: RadioButtonProps) => {
  const [checked, setChecked] = React.useState(argChecked || false);

  useEffect(() => {
    setChecked(!!argChecked);
  }, [argChecked]);

  return (
    <>
      <RadioButton value={1} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} {...props}>
        Some text
      </RadioButton>
      <Separator />
      <Button onClick={() => setChecked(false)}>Сбросить состояние радиокнопки</Button>
    </>
  );
};
`,RadioButtonSize_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const RadioButtonSizeTemplate = () => {
  return (
    <>
      <RadioButton value={1}>Dimension - m</RadioButton>
      <Separator />
      <RadioButton value={1} dimension="s">
        Dimension - s
      </RadioButton>
    </>
  );
};
`,RadioButtonState_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const RadioButtonStateTemplate = () => {
  return (
    <>
      <RadioButton value={1} checked onChange={() => undefined}>
        Checked
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} onChange={() => undefined}>
        Not checked
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked readOnly>
        Checked readonly
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} readOnly>
        Not checked readonly
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked disabled onChange={() => undefined}>
        Checked disabled
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} disabled onChange={() => undefined}>
        Not checked disabled
      </RadioButton>
      <Separator />
      <RadioButton value={1} checked={false} error onChange={() => undefined}>
        Not checked error
      </RadioButton>
    </>
  );
};
`,RadioButtonExtraText_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { RadioButton } from '@admiral-ds/react-ui';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

export const RadioButtonExtraTextTemplate = () => {
  return (
    <>
      <RadioButton value={1} extraText="Additional text">
        Text
      </RadioButton>
      <Separator />
      <RadioButton value={1} dimension="s" extraText="Additional text">
        Text
      </RadioButton>
    </>
  );
};
`,RadioButtonInformer_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { Hint, RadioButton } from '@admiral-ds/react-ui';
import { ReactComponent as InfoSolidSVG } from '@admiral-ds/icons/build/service/InfoSolid.svg';

const Separator = styled.div\`
  height: 20px;
  width: 100%;
\`;

type Dimension = 'm' | 's';

const InfoSolid = styled(InfoSolidSVG)<{ dimension: Dimension }>\`
  margin-left: 5px;
  width: \${(props) => (props.dimension === 'm' ? '24px' : '20px')};

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  [data-focus-within] & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, \${(p) => p.theme.color['Primary/Primary 70']});
  }
  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, \${(p) => p.theme.color['Primary/Primary 70']});
  }
\`;

const RadioWithInformer = styled.div\`
  display: flex;
  align-items: flex-start;
\`;

export const RadioButtonInformerTemplate = () => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const handleHintChange1 = (visible: boolean) => setVisible1(visible);
  const handleHintChange2 = (visible: boolean) => setVisible2(visible);
  return (
    <>
      <RadioWithInformer>
        <RadioButton value={1} extraText="Add text">
          Dimension - m
        </RadioButton>
        <Hint
          visible={visible1}
          onVisibilityChange={handleHintChange1}
          renderContent={() =>
            'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
          }
        >
          <InfoSolid dimension="m" aria-hidden />
        </Hint>
      </RadioWithInformer>
      <Separator />
      <RadioWithInformer>
        <RadioButton value={1} dimension="s" extraText="Add text">
          Dimension - s
        </RadioButton>
        <Hint
          visible={visible2}
          onVisibilityChange={handleHintChange2}
          renderContent={() =>
            'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.'
          }
        >
          <InfoSolid dimension="s" aria-hidden />
        </Hint>
      </RadioWithInformer>
    </>
  );
};
`;function RadioButton_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function RadioButton_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){RadioButton_stories_define_property(target,key,source[key])})}return target}function RadioButton_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function RadioButton_stories_templateObject(){var data=RadioButton_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return RadioButton_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(RadioButton_stories_templateObject());let RadioButton_stories={title:"Admiral-2.1/RadioButton",decorators:void 0,component:RadioButton.a,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21470"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21629"}],componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Радиальные кнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант"})},{}),actions:{argTypesRegex:"onChange"},layout:"centered"},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},error:{control:{type:"boolean"}},extraText:{control:{type:"text"}}}};var RadioButtonPlayground={render:function(props){return(0,jsx_runtime.jsx)(RadioButtonPlaygroundTemplate,RadioButton_stories_object_spread({},props))},parameters:{docs:{source:{code:RadioButtonPlayground_templateraw_namespaceObject}}}},RadioButtonSize={render:function(){return(0,jsx_runtime.jsx)(RadioButtonSizeTemplate,{})},parameters:{docs:{source:{code:RadioButtonSize_templateraw_namespaceObject}}},name:"RadioButton. Размеры"},RadioButtonState={render:function(){return(0,jsx_runtime.jsx)(RadioButtonStateTemplate,{})},parameters:{docs:{source:{code:RadioButtonState_templateraw_namespaceObject}}},name:"RadioButton. Состояния"},RadioButtonExtraText={render:function(){return(0,jsx_runtime.jsx)(RadioButtonExtraTextTemplate,{})},parameters:{docs:{source:{code:RadioButtonExtraText_templateraw_namespaceObject}}},name:"RadioButton. Дополнительный текст"},RadioButtonInformer={render:function(){return(0,jsx_runtime.jsx)(RadioButtonInformerTemplate,{})},parameters:{docs:{source:{code:RadioButtonInformer_templateraw_namespaceObject}}},name:"RadioButton. Информер"};RadioButtonPlayground.parameters={...RadioButtonPlayground.parameters,docs:{...RadioButtonPlayground.parameters?.docs,source:{originalSource:`{
  render: RadioButtonPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: RadioButtonPlaygroundRaw
      }
    }
  }
}`,...RadioButtonPlayground.parameters?.docs?.source}}},RadioButtonSize.parameters={...RadioButtonSize.parameters,docs:{...RadioButtonSize.parameters?.docs,source:{originalSource:`{
  render: RadioButtonSizeStory,
  parameters: {
    docs: {
      source: {
        code: RadioButtonSizeRaw
      }
    }
  },
  name: 'RadioButton. Размеры'
}`,...RadioButtonSize.parameters?.docs?.source}}},RadioButtonState.parameters={...RadioButtonState.parameters,docs:{...RadioButtonState.parameters?.docs,source:{originalSource:`{
  render: RadioButtonStateStory,
  parameters: {
    docs: {
      source: {
        code: RadioButtonStateRaw
      }
    }
  },
  name: 'RadioButton. Состояния'
}`,...RadioButtonState.parameters?.docs?.source}}},RadioButtonExtraText.parameters={...RadioButtonExtraText.parameters,docs:{...RadioButtonExtraText.parameters?.docs,source:{originalSource:`{
  render: RadioButtonExtraTextStory,
  parameters: {
    docs: {
      source: {
        code: RadioButtonExtraTextRaw
      }
    }
  },
  name: 'RadioButton. Дополнительный текст'
}`,...RadioButtonExtraText.parameters?.docs?.source}}},RadioButtonInformer.parameters={...RadioButtonInformer.parameters,docs:{...RadioButtonInformer.parameters?.docs,source:{originalSource:`{
  render: RadioButtonInformerStory,
  parameters: {
    docs: {
      source: {
        code: RadioButtonInformerRaw
      }
    }
  },
  name: 'RadioButton. Информер'
}`,...RadioButtonInformer.parameters?.docs?.source}}};let __namedExportsOrder=["RadioButtonPlayground","RadioButtonSize","RadioButtonState","RadioButtonExtraText","RadioButtonInformer"]},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>uid});function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-RadioButton-stories-RadioButton-stories.eda2020f.iframe.bundle.js.map