"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7130],{"./src/components/TextButton/commonMixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ef:()=>ButtonContainer,Tu:()=>IconContainer,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  flex: 1 0 auto;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
  overflow: hidden;
  text-overflow: ellipsis;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-image:
    linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size:
    315px 250px,
    315px 180px,
    100px 100px,
    225px 30px;
  background-position:
    -315px 0,
    0 0,
    0 190px,
    50px 195px;
  animation: `,` 1.5s infinite;
`]);return _templateObject3=function _templateObject(){return data},data}var IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject()),ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject1(),function(p){return p.$cssMixin&&p.$cssMixin}),loadingKeyframes=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject2()),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3(),loadingKeyframes)},"./src/components/TextButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>TextButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),commonMixin=__webpack_require__("./src/components/TextButton/commonMixin.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,` {
    `,`;
    border-radius: `,`;
    svg {
      visibility: `,`;
    }
  }

  border-radius: `,`;

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:hover {
    cursor: pointer;
    color: var(--admiral-color-Primary_Primary70, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary70, `,`);
        }
      }
    }
  }

  &:active {
    color: var(--admiral-color-Primary_Primary80, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary80, `,`);
        }
      }
    }
  }

  &:disabled {
    cursor: `,`;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Neutral_Neutral30, `,`);
        }
      }
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Primary_Primary60Main, `,`);
      }
    }
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral50, `,`);
      }
    }
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &[data-appearance='primary'] {
    `,`
  }
  &[data-appearance='secondary'] {
    `,`
  }

  `,`
`]);return _templateObject3=function _templateObject(){return data},data}var defaultAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject(),commonMixin.Tu,function(param){return param.$skeleton&&commonMixin.vy},function(param){return param.$skeleton?"50%":""},function(p){return p.$skeleton||p.$loading?"hidden":"visible"},function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,borderRadius.VM)(p.theme.shape),")")},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 70"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 80"]},function(param){var $skeleton=param.$skeleton,$loading=param.$loading;return $skeleton||$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 30"]}),primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 60 Main"]}),secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 90"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 50"]}),appearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),primaryAppearanceMixin,secondaryAppearanceMixin,defaultAppearanceMixin),typography=__webpack_require__("./src/components/Typography/typography.ts");function dimensionMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function dimensionMixin_templateObject(){var data=dimensionMixin_tagged_template_literal([`
  &[data-dimension='m'] {
    `,` {
      width: 24px;
      height: 24px;
    }
    `,`;
  }

  &[data-dimension='s'] {
    `,` {
      width: 20px;
      height: 20px;
    }
    `,`;
  }
`]);return dimensionMixin_templateObject=function _templateObject(){return data},data}var dimensionMixin=(0,styled_components_browser_esm.AH)(dimensionMixin_templateObject(),commonMixin.Tu,typography.Il["Button/Button 1"],commonMixin.Tu,typography.Il["Button/Button 2"]),animation=__webpack_require__("./src/components/skeleton/animation.tsx"),checkOverflow=__webpack_require__("./src/components/common/utils/checkOverflow.ts"),Tooltip=__webpack_require__("./src/components/Tooltip/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var nothing=function(){},TextContainer=function(_param){var text=_param.text,_param_containerPropsConfig=_param.containerPropsConfig,textCssMixin=_param.textCssMixin,props=_object_without_properties(_param,["text","containerPropsConfig","textCssMixin"]),containerRef=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(!1),2),overflowActive=_useState[0],setOverflowActive=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),tooltipVisible=_useState1[0],setTooltipVisible=_useState1[1];(0,react.useLayoutEffect)(function(){containerRef.current&&(0,checkOverflow.p)(containerRef.current)!==overflowActive&&setOverflowActive((0,checkOverflow.p)(containerRef.current))},[tooltipVisible,overflowActive]),(0,react.useEffect)(function(){var show=function show(){setTooltipVisible(!0)},hide=function hide(){setTooltipVisible(!1)},label=containerRef.current;if(label)return label.addEventListener("mouseenter",show),label.addEventListener("mouseleave",hide),function(){label.removeEventListener("mouseenter",show),label.removeEventListener("mouseleave",hide)}},[]);var showTooltip=tooltipVisible&&overflowActive&&!!text;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(commonMixin.Ef,_object_spread_props(_object_spread(_object_spread_props(_object_spread({ref:containerRef},props),{$cssMixin:textCssMixin}),(void 0===_param_containerPropsConfig?nothing:_param_containerPropsConfig)(_object_spread({},props))),{children:(0,jsx_runtime.jsx)("span",{children:text})})),showTooltip&&(0,jsx_runtime.jsx)(Tooltip.m,{targetElement:containerRef.current,renderContent:function(){return text}})]})};try{TextContainer.displayName="TextContainer",TextContainer.__docgenInfo={description:"",displayName:"TextContainer",props:{text:{defaultValue:null,description:"Отображаемый тескт",name:"text",required:!1,type:{name:"string"}},containerPropsConfig:{defaultValue:{value:"() => {}"},description:`Конфиг функция пропсов для контейнера, в котором находится текст. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"containerPropsConfig",required:!1,type:{name:'((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$cssMixin"> & { ...; }) => (Partial<...> & DataAttributes) | (() => void)) | (() => void)'}},textCssMixin:{defaultValue:null,description:"CSS миксин для переопределения стилей текста",name:"textCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/textContainer.tsx#TextContainer"]={docgenInfo:TextContainer.__docgenInfo,name:"TextContainer",path:"src/components/TextButton/textContainer.tsx#TextContainer"})}catch(__react_docgen_typescript_loader_error){}function TextButton_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TextButton_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TextButton_define_property(target,key,source[key])})}return target}function TextButton_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TextButton_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TextButton_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TextButton_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TextButton_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TextButton_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TextButton_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextButton_templateObject(){var data=TextButton_tagged_template_literal([`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return TextButton_templateObject=function _templateObject(){return data},data}function TextButton_templateObject1(){var data=TextButton_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  vertical-align: middle;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  white-space: nowrap;
  `,`;

  `,` {
    visibility: `,`;
  }

  `,` {
    visibility: `,`;
  }

  `,`;

  `,`;
`]);return TextButton_templateObject1=function _templateObject(){return data},data}var StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y)(TextButton_templateObject()),StyledButton=styled_components_browser_esm.Ay.button(TextButton_templateObject1(),function(p){return p.$skeleton&&animation.h},commonMixin.Ef,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},commonMixin.Tu,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},appearanceMixin,dimensionMixin),TextButton=react.forwardRef(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,icon=_param.icon,iconStart=_param.iconStart,iconEnd=_param.iconEnd,_param_type=_param.type,text=_param.text,_param_displayRight=_param.displayRight,displayRight=void 0!==_param_displayRight&&_param_displayRight,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,textContainerPropsConfig=_param.textContainerPropsConfig,textCssMixin=_param.textCssMixin,props=TextButton_object_without_properties(_param,["appearance","dimension","icon","iconStart","iconEnd","type","text","displayRight","loading","skeleton","textContainerPropsConfig","textCssMixin"]),disabled=props.disabled||loading||skeleton;return(0,jsx_runtime.jsxs)(StyledButton,TextButton_object_spread_props(TextButton_object_spread({},props),{"data-dimension":dimension,"data-appearance":appearance,ref:ref,$appearance:appearance,$dimension:dimension,type:void 0===_param_type?"button":_param_type,disabled:disabled,$loading:loading,$skeleton:skeleton,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:"s"===dimension?"ms":"m"}),iconStart?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconStart}):icon&&!displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null,(0,jsx_runtime.jsx)(TextContainer,{text:text,containerPropsConfig:textContainerPropsConfig,textCssMixin:textCssMixin}),iconEnd?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconEnd}):icon&&displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null]}))});TextButton.displayName="TextButton";try{TextButton.displayName="TextButton",TextButton.__docgenInfo={description:"",displayName:"TextButton",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},displayRight:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Позиционирование иконки. По умолчанию - слева`,name:"displayRight",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},textContainerPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для контейнера, в котором находится текст. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"textContainerPropsConfig",required:!1,type:{name:'((props: FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$cssMixin"> & { ...; }) => (Partial<...> & DataAttributes) | (() => void)) | (() => void)'}},textCssMixin:{defaultValue:null,description:"CSS миксин для переопределения стилей текста",name:"textCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/index.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/TextButton/index.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}}}]);