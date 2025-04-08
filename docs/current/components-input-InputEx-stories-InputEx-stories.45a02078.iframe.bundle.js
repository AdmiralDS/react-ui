"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8176],{"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/input/InputEx/stories/InputEx.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CurrencyInputMinMaxValue:()=>CurrencyInputMinMaxValue,CurrencyInputWithPrefix:()=>CurrencyInputWithPrefix,InputExBase:()=>InputExBase,InputExCustom:()=>InputExCustom,InputExPrefixSuffixSelect:()=>InputExPrefixSuffixSelect,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InputEx_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),InputEx=__webpack_require__("./src/components/input/InputEx/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  height: 20px;
`]);return _templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject()),InputExBaseTemplate=function(_param){var _param_placeholder=_param.placeholder,placeholder=void 0===_param_placeholder?"Placeholder":_param_placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=_sliced_to_array((0,react.useState)(props.value?String(props.value):"Вариант с префиксом"),2),localValueOne=_useState[0],setValueOne=_useState[1],_useState1=_sliced_to_array((0,react.useState)(props.value?String(props.value):"Вариант с суффиксом"),2),localValueTwo=_useState1[0],setValueTwo=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(props.value?String(props.value):"Вариант с префиксом и суффиксом"),2),localValueThree=_useState2[0],setValueThree=_useState2[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(InputEx.M,_object_spread_props(_object_spread({},props),{value:localValueOne,onChange:function(e){var _props_onChange;setValueOne(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},prefixValue:"Prefix",placeholder:placeholder})),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(InputEx.M,_object_spread_props(_object_spread({},props),{value:localValueTwo,onChange:function(e){var _props_onChange;setValueTwo(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},suffixValue:"Suffix",placeholder:placeholder})),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(InputEx.M,_object_spread_props(_object_spread({},props),{value:localValueThree,onChange:function(e){var _props_onChange;setValueThree(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},prefixValue:"Prefix",suffixValue:"Suffix",placeholder:placeholder}))]})};try{InputExBaseTemplate.displayName="InputExBaseTemplate",InputExBaseTemplate.__docgenInfo={description:"",displayName:"InputExBaseTemplate",props:{menuWidth:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры prefixDropContainerStyle.menuWidth и
suffixDropContainerStyle.menuWidth.

Ширина меню`,name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
если не указан, выравнивание произойдет относительно контейнера компонента`,name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.
Взамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin

Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css`,name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/stories/InputExBase.template.tsx#InputExBaseTemplate"]={docgenInfo:InputExBaseTemplate.__docgenInfo,name:"InputExBaseTemplate",path:"src/components/input/InputEx/stories/InputExBase.template.tsx#InputExBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function InputExPrefixSuffixSelect_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputExPrefixSuffixSelect_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputExPrefixSuffixSelect_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputExPrefixSuffixSelect_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputExPrefixSuffixSelect_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputExPrefixSuffixSelect_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputExPrefixSuffixSelect_template_define_property(target,key,source[key])})}return target}function InputExPrefixSuffixSelect_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputExPrefixSuffixSelect_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputExPrefixSuffixSelect_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputExPrefixSuffixSelect_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputExPrefixSuffixSelect_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputExPrefixSuffixSelect_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputExPrefixSuffixSelect_template_sliced_to_array(arr,i){return InputExPrefixSuffixSelect_template_array_with_holes(arr)||InputExPrefixSuffixSelect_template_iterable_to_array_limit(arr,i)||InputExPrefixSuffixSelect_template_unsupported_iterable_to_array(arr,i)||InputExPrefixSuffixSelect_template_non_iterable_rest()}function InputExPrefixSuffixSelect_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputExPrefixSuffixSelect_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputExPrefixSuffixSelect_template_array_like_to_array(o,minLen)}}var PREFIX_OPTIONS=["prefix One","prefix Two","prefix Three"],SUFFIX_OPTIONS=["One","Two","Three"],InputExPrefixSuffixSelectTemplate=function(_param){var _String,_param_value=_param.value,_param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=InputExPrefixSuffixSelect_template_object_without_properties(_param,["value","placeholder","themeBorderKind","CSSCustomProps"]),_useState=InputExPrefixSuffixSelect_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"Привет!":_param_value))?_String:""),2),localValue=_useState[0],setValue=_useState[1],_useState1=InputExPrefixSuffixSelect_template_sliced_to_array((0,react.useState)("prefix One"),2),prefixValue=_useState1[0],setPrefixValue=_useState1[1],_useState2=InputExPrefixSuffixSelect_template_sliced_to_array((0,react.useState)("One"),2),suffixValue=_useState2[0],setSuffixValue=_useState2[1],inputRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(InputEx.M,InputExPrefixSuffixSelect_template_object_spread_props(InputExPrefixSuffixSelect_template_object_spread({},props),{containerRef:inputRef,value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},prefixValue:prefixValue,prefixValueList:PREFIX_OPTIONS,onPrefixValueChange:setPrefixValue,suffixValue:suffixValue,suffixValueList:SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,prefixDropContainerStyle:{dropContainerClassName:"prefixDropContainerClass"},suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass"},placeholder:void 0===_param_placeholder?"Placeholder":_param_placeholder}))})};try{InputExPrefixSuffixSelectTemplate.displayName="InputExPrefixSuffixSelectTemplate",InputExPrefixSuffixSelectTemplate.__docgenInfo={description:"",displayName:"InputExPrefixSuffixSelectTemplate",props:{menuWidth:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры prefixDropContainerStyle.menuWidth и
suffixDropContainerStyle.menuWidth.

Ширина меню`,name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
если не указан, выравнивание произойдет относительно контейнера компонента`,name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.
Взамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin

Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css`,name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/stories/InputExPrefixSuffixSelect.template.tsx#InputExPrefixSuffixSelectTemplate"]={docgenInfo:InputExPrefixSuffixSelectTemplate.__docgenInfo,name:"InputExPrefixSuffixSelectTemplate",path:"src/components/input/InputEx/stories/InputExPrefixSuffixSelect.template.tsx#InputExPrefixSuffixSelectTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx");function InputExCustom_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputExCustom_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputExCustom_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputExCustom_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputExCustom_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputExCustom_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputExCustom_template_define_property(target,key,source[key])})}return target}function InputExCustom_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputExCustom_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputExCustom_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputExCustom_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=InputExCustom_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function InputExCustom_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function InputExCustom_template_sliced_to_array(arr,i){return InputExCustom_template_array_with_holes(arr)||InputExCustom_template_iterable_to_array_limit(arr,i)||InputExCustom_template_unsupported_iterable_to_array(arr,i)||InputExCustom_template_non_iterable_rest()}function InputExCustom_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function InputExCustom_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputExCustom_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputExCustom_template_array_like_to_array(o,minLen)}}function InputExCustom_template_templateObject(){var data=InputExCustom_template_tagged_template_literal([`
  height: 20px;
`]);return InputExCustom_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=InputExCustom_template_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);
  border: var(--admiral-color-Primary_Primary60Main, `,`) 1px dashed;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=InputExCustom_template_tagged_template_literal([`
  color: deeppink;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=InputExCustom_template_tagged_template_literal([`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject3=function _templateObject(){return data},data}var InputExCustom_template_Separator=styled_components_browser_esm.Ay.div(InputExCustom_template_templateObject()),InputExCustom_template_PREFIX_OPTIONS=["prefix One","prefix Two","prefix Three"],InputExCustom_template_SUFFIX_OPTIONS=["One","Two","Three"],CustomValueStyle=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]}),CustomMenuItem=(0,styled_components_browser_esm.Ay)(MenuItem.D)(_templateObject2());function customValueRender(param){var value=param.value;return(0,jsx_runtime.jsx)(CustomValueStyle,{children:String(value)})}function customOptionRender(_param){var value=_param.value,props=InputExCustom_template_object_without_properties(_param,["value"]);return(0,jsx_runtime.jsx)(CustomMenuItem,InputExCustom_template_object_spread_props(InputExCustom_template_object_spread({},props),{children:String(value)}))}var containerContrastBorder=(0,styled_components_browser_esm.AH)(_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 90"]}),InputExCustomTemplate=function(_param){var _String,_param_value=_param.value,_param_placeholder=_param.placeholder,placeholder=void 0===_param_placeholder?"Placeholder":_param_placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=InputExCustom_template_object_without_properties(_param,["value","placeholder","themeBorderKind","CSSCustomProps"]),_useState=InputExCustom_template_sliced_to_array((0,react.useState)(null!=(_String=String(void 0===_param_value?"Привет!":_param_value))?_String:""),2),localValue=_useState[0],setValue=_useState[1],handleChange=function(e){var _props_onChange;setValue(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},_useState1=InputExCustom_template_sliced_to_array((0,react.useState)("prefix One"),2),prefixValue=_useState1[0],setPrefixValue=_useState1[1],_useState2=InputExCustom_template_sliced_to_array((0,react.useState)("One"),2),suffixValue=_useState2[0],setSuffixValue=_useState2[1],inputRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(InputEx.M,InputExCustom_template_object_spread_props(InputExCustom_template_object_spread({},props),{containerRef:inputRef,value:localValue,onChange:handleChange,prefixValue:"Prefix",onPrefixValueChange:setPrefixValue,renderPrefixValue:customValueRender,suffixValue:"Suffix",onSuffixValueChange:setSuffixValue,renderSuffixValue:customValueRender,placeholder:placeholder})),(0,jsx_runtime.jsx)(InputExCustom_template_Separator,{}),(0,jsx_runtime.jsx)(InputEx.M,InputExCustom_template_object_spread_props(InputExCustom_template_object_spread({},props),{containerRef:inputRef,value:localValue,onChange:handleChange,prefixValue:prefixValue,prefixValueList:InputExCustom_template_PREFIX_OPTIONS,onPrefixValueChange:setPrefixValue,renderPrefixValue:customValueRender,renderPrefixOption:customOptionRender,suffixValue:suffixValue,suffixValueList:InputExCustom_template_SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,renderSuffixValue:customValueRender,renderSuffixOption:customOptionRender,prefixDropContainerStyle:{dropContainerCssMixin:containerContrastBorder,dropContainerClassName:"prefixDropContainerClass"},suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass",dropContainerStyle:{border:"dashed 2px red"}},placeholder:placeholder}))]})};try{InputExCustomTemplate.displayName="InputExCustomTemplate",InputExCustomTemplate.__docgenInfo={description:"",displayName:"InputExCustomTemplate",props:{menuWidth:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры prefixDropContainerStyle.menuWidth и
suffixDropContainerStyle.menuWidth.

Ширина меню`,name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
если не указан, выравнивание произойдет относительно контейнера компонента`,name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.
Взамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin

Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css`,name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/stories/InputExCustom.template.tsx#InputExCustomTemplate"]={docgenInfo:InputExCustomTemplate.__docgenInfo,name:"InputExCustomTemplate",path:"src/components/input/InputEx/stories/InputExCustom.template.tsx#InputExCustomTemplate"})}catch(__react_docgen_typescript_loader_error){}var refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),T=__webpack_require__("./src/components/T/index.tsx"),index_esm=__webpack_require__("./node_modules/@maskito/kit/index.esm.js"),react_index_esm=__webpack_require__("./node_modules/@maskito/react/index.esm.js");function CurrencyInputPlayground_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CurrencyInputPlayground_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function CurrencyInputPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CurrencyInputPlayground_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CurrencyInputPlayground_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CurrencyInputPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CurrencyInputPlayground_template_define_property(target,key,source[key])})}return target}function CurrencyInputPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CurrencyInputPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CurrencyInputPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CurrencyInputPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CurrencyInputPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CurrencyInputPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CurrencyInputPlayground_template_sliced_to_array(arr,i){return CurrencyInputPlayground_template_array_with_holes(arr)||CurrencyInputPlayground_template_iterable_to_array_limit(arr,i)||CurrencyInputPlayground_template_unsupported_iterable_to_array(arr,i)||CurrencyInputPlayground_template_non_iterable_rest()}function CurrencyInputPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CurrencyInputPlayground_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CurrencyInputPlayground_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CurrencyInputPlayground_template_array_like_to_array(o,minLen)}}function CurrencyInputPlayground_template_templateObject(){var data=CurrencyInputPlayground_template_tagged_template_literal([`
  height: 8px;
`]);return CurrencyInputPlayground_template_templateObject=function _templateObject(){return data},data}var CurrencyInputPlayground_template_SUFFIX_OPTIONS=["₽","$","€","¥","£"],CurrencyInputPlayground_template_Separator=styled_components_browser_esm.Ay.div(CurrencyInputPlayground_template_templateObject()),options=(0,index_esm.TK)({decimalSeparator:",",thousandSeparator:" ",precision:2}),CurrencyInput=(0,react.forwardRef)(function(props,ref){var inputRef=(0,react_index_esm.M)({options:options});return(0,jsx_runtime.jsx)(InputEx.M,CurrencyInputPlayground_template_object_spread_props(CurrencyInputPlayground_template_object_spread({},props),{ref:(0,refSetter.d)(ref,inputRef)}))}),CurrencyInputPlaygroundTemplate=function(_param){var _param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CurrencyInputPlayground_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=CurrencyInputPlayground_template_sliced_to_array((0,react.useState)(props.value?String(props.value):"152,00"),2),localValueOne=_useState[0],setValueOne=_useState[1],_useState1=CurrencyInputPlayground_template_sliced_to_array((0,react.useState)("₽"),2),suffixValue=_useState1[0],setSuffixValue=_useState1[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:["Компонент для ввода числовых значений валюты с точностью до двух знаков после запятой. Строится на основе компонента Input Extended. Особенности:",(0,jsx_runtime.jsx)("li",{children:"Возможен ввод как целых чисел, так и с двумя знаками после запятой."}),(0,jsx_runtime.jsx)("li",{children:"Если при вводе цифр нажать «,» (запятая), то включается маска ввода сотых значений."}),(0,jsx_runtime.jsx)("li",{children:"Введенная «.» (точка) автоматически конвертируется в «,» (запятая)."}),(0,jsx_runtime.jsx)("li",{children:"Валюта ввода может быть как фиксированной (только рубли, например), так и изменяемой через суффикс поля."}),(0,jsx_runtime.jsx)("li",{children:"Автопробел каждые три знака в целой части суммы."}),(0,jsx_runtime.jsx)("li",{children:"Можно указывать минимальные и максимальные значения для вводимой суммы."}),(0,jsx_runtime.jsx)(CurrencyInputPlayground_template_Separator,{}),"Для реализации маски была использована библиотека Maskito."]}),(0,jsx_runtime.jsx)(CurrencyInput,CurrencyInputPlayground_template_object_spread_props(CurrencyInputPlayground_template_object_spread({},props),{value:localValueOne,onInput:function(e){var _props_onChange;setValueOne(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:void 0===_param_placeholder?"Placeholder":_param_placeholder,displayClearIcon:!0,suffixValue:suffixValue,suffixValueList:CurrencyInputPlayground_template_SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass"},style:{width:"400px"}}))]})};try{CurrencyInputPlaygroundTemplate.displayName="CurrencyInputPlaygroundTemplate",CurrencyInputPlaygroundTemplate.__docgenInfo={description:"",displayName:"CurrencyInputPlaygroundTemplate",props:{menuWidth:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры prefixDropContainerStyle.menuWidth и
suffixDropContainerStyle.menuWidth.

Ширина меню`,name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
если не указан, выравнивание произойдет относительно контейнера компонента`,name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.
Взамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin

Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css`,name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/stories/CurrencyInputPlayground.template.tsx#CurrencyInputPlaygroundTemplate"]={docgenInfo:CurrencyInputPlaygroundTemplate.__docgenInfo,name:"CurrencyInputPlaygroundTemplate",path:"src/components/input/InputEx/stories/CurrencyInputPlayground.template.tsx#CurrencyInputPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function CurrencyInputWithPrefix_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CurrencyInputWithPrefix_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function CurrencyInputWithPrefix_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CurrencyInputWithPrefix_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CurrencyInputWithPrefix_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CurrencyInputWithPrefix_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CurrencyInputWithPrefix_template_define_property(target,key,source[key])})}return target}function CurrencyInputWithPrefix_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CurrencyInputWithPrefix_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CurrencyInputWithPrefix_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CurrencyInputWithPrefix_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CurrencyInputWithPrefix_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CurrencyInputWithPrefix_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CurrencyInputWithPrefix_template_sliced_to_array(arr,i){return CurrencyInputWithPrefix_template_array_with_holes(arr)||CurrencyInputWithPrefix_template_iterable_to_array_limit(arr,i)||CurrencyInputWithPrefix_template_unsupported_iterable_to_array(arr,i)||CurrencyInputWithPrefix_template_non_iterable_rest()}function CurrencyInputWithPrefix_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function CurrencyInputWithPrefix_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CurrencyInputWithPrefix_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CurrencyInputWithPrefix_template_array_like_to_array(o,minLen)}}function CurrencyInputWithPrefix_template_templateObject(){var data=CurrencyInputWithPrefix_template_tagged_template_literal([`
  display: flex;
  gap: 10px;
`]);return CurrencyInputWithPrefix_template_templateObject=function _templateObject(){return data},data}var CurrencyInputWithPrefix_template_SUFFIX_OPTIONS=["₽","$","€","¥","£"],CurrencyInputWithPrefix_template_options=(0,index_esm.TK)({decimalSeparator:",",thousandSeparator:" ",precision:2}),CurrencyInputWithPrefix_template_CurrencyInput=(0,react.forwardRef)(function(props,ref){var inputRef=(0,react_index_esm.M)({options:CurrencyInputWithPrefix_template_options});return(0,jsx_runtime.jsx)(InputEx.M,CurrencyInputWithPrefix_template_object_spread_props(CurrencyInputWithPrefix_template_object_spread({},props),{ref:(0,refSetter.d)(ref,inputRef)}))}),Wrapper=styled_components_browser_esm.Ay.div(CurrencyInputWithPrefix_template_templateObject()),CurrencyInputWithPrefixTemplate=function(_param){var _param_placeholder=_param.placeholder,placeholder=void 0===_param_placeholder?"Placeholder":_param_placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CurrencyInputWithPrefix_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=CurrencyInputWithPrefix_template_sliced_to_array((0,react.useState)(props.value?String(props.value):""),2),localValueOne=_useState[0],setValueOne=_useState[1],_useState1=CurrencyInputWithPrefix_template_sliced_to_array((0,react.useState)(props.value?String(props.value):""),2),localValueTwo=_useState1[0],setValueTwo=_useState1[1],_useState2=CurrencyInputWithPrefix_template_sliced_to_array((0,react.useState)("₽"),2),suffixValue=_useState2[0],setSuffixValue=_useState2[1];return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsx)(CurrencyInputWithPrefix_template_CurrencyInput,CurrencyInputWithPrefix_template_object_spread_props(CurrencyInputWithPrefix_template_object_spread({},props),{value:localValueOne,onInput:function(e){var _props_onChange;setValueOne(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},prefixValue:"От",placeholder:placeholder,displayClearIcon:!0,suffixValue:suffixValue,suffixValueList:CurrencyInputWithPrefix_template_SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,prefixDropContainerStyle:{dropContainerClassName:"prefixDropContainerClass"},suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass"},style:{width:"400px"}})),(0,jsx_runtime.jsx)(CurrencyInputWithPrefix_template_CurrencyInput,CurrencyInputWithPrefix_template_object_spread_props(CurrencyInputWithPrefix_template_object_spread({},props),{value:localValueTwo,onInput:function(e){var _props_onChange;setValueTwo(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},prefixValue:"До",placeholder:placeholder,displayClearIcon:!0,suffixValue:suffixValue,suffixValueList:CurrencyInputWithPrefix_template_SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,prefixDropContainerStyle:{dropContainerClassName:"prefixDropContainerClass"},suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass"},style:{width:"400px"}}))]})})};try{CurrencyInputWithPrefixTemplate.displayName="CurrencyInputWithPrefixTemplate",CurrencyInputWithPrefixTemplate.__docgenInfo={description:"",displayName:"CurrencyInputWithPrefixTemplate",props:{menuWidth:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры prefixDropContainerStyle.menuWidth и
suffixDropContainerStyle.menuWidth.

Ширина меню`,name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
если не указан, выравнивание произойдет относительно контейнера компонента`,name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.
Взамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin

Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css`,name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/stories/CurrencyInputWithPrefix.template.tsx#CurrencyInputWithPrefixTemplate"]={docgenInfo:CurrencyInputWithPrefixTemplate.__docgenInfo,name:"CurrencyInputWithPrefixTemplate",path:"src/components/input/InputEx/stories/CurrencyInputWithPrefix.template.tsx#CurrencyInputWithPrefixTemplate"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./src/components/input/NumberInput/utils.ts");function CurrencyInputMinMaxValue_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CurrencyInputMinMaxValue_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function CurrencyInputMinMaxValue_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CurrencyInputMinMaxValue_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CurrencyInputMinMaxValue_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CurrencyInputMinMaxValue_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CurrencyInputMinMaxValue_template_define_property(target,key,source[key])})}return target}function CurrencyInputMinMaxValue_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CurrencyInputMinMaxValue_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CurrencyInputMinMaxValue_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CurrencyInputMinMaxValue_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CurrencyInputMinMaxValue_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CurrencyInputMinMaxValue_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CurrencyInputMinMaxValue_template_sliced_to_array(arr,i){return CurrencyInputMinMaxValue_template_array_with_holes(arr)||CurrencyInputMinMaxValue_template_iterable_to_array_limit(arr,i)||CurrencyInputMinMaxValue_template_unsupported_iterable_to_array(arr,i)||CurrencyInputMinMaxValue_template_non_iterable_rest()}function CurrencyInputMinMaxValue_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CurrencyInputMinMaxValue_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CurrencyInputMinMaxValue_template_array_like_to_array(o,minLen)}}var CurrencyInputMinMaxValue_template_SUFFIX_OPTIONS=["₽","$","€","¥","£"],CurrencyInputMinMaxValue_template_options=(0,index_esm.TK)({decimalSeparator:",",thousandSeparator:" ",precision:2,max:2e3,min:-5}),CurrencyInputMinMaxValue_template_CurrencyInput=(0,react.forwardRef)(function(props,ref){var inputRef=(0,react_index_esm.M)({options:CurrencyInputMinMaxValue_template_options});return(0,jsx_runtime.jsx)(InputEx.M,CurrencyInputMinMaxValue_template_object_spread_props(CurrencyInputMinMaxValue_template_object_spread({},props),{ref:(0,refSetter.d)(ref,inputRef)}))});function convertStrToNum(str,precision,decimal){return Number((0,utils.Zv)(str,precision,decimal).replace(decimal,"."))}var CurrencyInputMinMaxValueTemplate=function(_param){var _param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CurrencyInputMinMaxValue_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=CurrencyInputMinMaxValue_template_sliced_to_array((0,react.useState)(props.value?String(props.value):""),2),localValueOne=_useState[0],setValueOne=_useState[1],_useState1=CurrencyInputMinMaxValue_template_sliced_to_array((0,react.useState)("₽"),2),suffixValue=_useState1[0],setSuffixValue=_useState1[1],_useState2=CurrencyInputMinMaxValue_template_sliced_to_array((0,react.useState)(void 0),2),status=_useState2[0],setStatus=_useState2[1];return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:["Пример с ограничением в маске min = -5, max = 2000, и подсвечивание статуса success если 10 ","<"," value ","<"," ","1000."]}),(0,jsx_runtime.jsx)(CurrencyInputMinMaxValue_template_CurrencyInput,CurrencyInputMinMaxValue_template_object_spread_props(CurrencyInputMinMaxValue_template_object_spread({},props),{value:localValueOne,onInput:function(e){var _props_onChange,inputValue=e.currentTarget.value,numValue=convertStrToNum(inputValue,2,",");inputValue&&numValue>10&&numValue<1e3?setStatus("success"):setStatus("error"),setValueOne(inputValue),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:void 0===_param_placeholder?"Placeholder":_param_placeholder,displayClearIcon:!0,suffixValue:suffixValue,suffixValueList:CurrencyInputMinMaxValue_template_SUFFIX_OPTIONS,onSuffixValueChange:setSuffixValue,status:status,suffixDropContainerStyle:{dropContainerClassName:"suffixDropContainerClass"},style:{width:"400px"}}))]})};try{CurrencyInputMinMaxValueTemplate.displayName="CurrencyInputMinMaxValueTemplate",CurrencyInputMinMaxValueTemplate.__docgenInfo={description:"",displayName:"CurrencyInputMinMaxValueTemplate",props:{menuWidth:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
Взамен используйте параметры prefixDropContainerStyle.menuWidth и
suffixDropContainerStyle.menuWidth.

Ширина меню`,name:"menuWidth",required:!1,type:{name:"string"}},alignDropRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
Взамен используйте параметр targetElement.

Ref контейнера, относительно которого нужно выравнивать дроп контейнеры,
если не указан, выравнивание произойдет относительно контейнера компонента`,name:"alignDropRef",required:!1,type:{name:"RefObject<HTMLElement>"}},prefixValue:{defaultValue:null,description:"Значение префикса",name:"prefixValue",required:!1,type:{name:"ReactNode"}},prefixValueList:{defaultValue:null,description:"Список значений префикса",name:"prefixValueList",required:!1,type:{name:"ReactNode[]"}},onPrefixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения префикса",name:"onPrefixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderPrefixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению префикса",name:"renderPrefixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderPrefixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка префикса по значению",name:"renderPrefixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},suffixValue:{defaultValue:null,description:"Значение суффикса",name:"suffixValue",required:!1,type:{name:"ReactNode"}},suffixValueList:{defaultValue:null,description:"Список значений суффикса",name:"suffixValueList",required:!1,type:{name:"ReactNode[]"}},onSuffixValueChange:{defaultValue:null,description:"Срабатывает при выборе нового значения суффикса",name:"onSuffixValueChange",required:!1,type:{name:"((value: ReactNode) => void)"}},renderSuffixValue:{defaultValue:null,description:"Специальный метод для рендера компонента по значению суффикса",name:"renderSuffixValue",required:!1,type:{name:"((props: RenderProps) => ReactNode)"}},renderSuffixOption:{defaultValue:null,description:"Специальный метод для рендера опции списка суффикса по значению",name:"renderSuffixOption",required:!1,type:{name:'((props: RenderPropsType<ReactNode> & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & RenderOptionProps) => ReactNode)'}},dropContainerCssMixin:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.0, будет удалено в 9.x.x версии.
Взамен используйте columnsButtonDropContainerStyle.dropContainerCssMixin

Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css`,name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},prefixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок",name:"prefixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},suffixDropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили и className для выпадающего меню кнопки настроек",name:"suffixDropContainerStyle",required:!1,type:{name:'Omit<DropMenuStyleProps, "alignSelf">'}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},iconsBefore:{defaultValue:null,description:"Иконки для отображения в начале поля",name:"iconsBefore",required:!1,type:{name:"ReactNode"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется выпадающее меню",name:"targetElement",required:!1,type:{name:"Element | null"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/InputEx/stories/CurrencyInputMinMaxValue.template.tsx#CurrencyInputMinMaxValueTemplate"]={docgenInfo:CurrencyInputMinMaxValueTemplate.__docgenInfo,name:"CurrencyInputMinMaxValueTemplate",path:"src/components/input/InputEx/stories/CurrencyInputMinMaxValue.template.tsx#CurrencyInputMinMaxValueTemplate"})}catch(__react_docgen_typescript_loader_error){}let InputExBase_templateraw_namespaceObject=`import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InputEx } from '@admiral-ds/react-ui';
import type { InputExProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 20px;
\`;

export const InputExBaseTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : 'Вариант с префиксом');
  const [localValueTwo, setValueTwo] = useState<string>(props.value ? String(props.value) : 'Вариант с суффиксом');
  const [localValueThree, setValueThree] = useState<string>(
    props.value ? String(props.value) : 'Вариант с префиксом и суффиксом',
  );

  const handleChangeOne = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueOne(inputValue);
    props.onChange?.(e);
  };

  const handleChangeTwo = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueTwo(inputValue);
    props.onChange?.(e);
  };

  const handleChangeThree = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueThree(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <InputEx
        {...props}
        value={localValueOne}
        onChange={handleChangeOne}
        prefixValue="Prefix"
        placeholder={placeholder}
      />
      <Separator />
      <InputEx
        {...props}
        value={localValueTwo}
        onChange={handleChangeTwo}
        suffixValue="Suffix"
        placeholder={placeholder}
      />
      <Separator />
      <InputEx
        {...props}
        value={localValueThree}
        onChange={handleChangeThree}
        prefixValue="Prefix"
        suffixValue="Suffix"
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
`,InputExPrefixSuffixSelect_templateraw_namespaceObject=`import { useRef, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { InputEx } from '@admiral-ds/react-ui';
import type { BorderRadiusType, InputExProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

export const InputExPrefixSuffixSelectTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('One');

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <InputEx
        {...props}
        containerRef={inputRef}
        value={localValue}
        onChange={handleChange}
        prefixValue={prefixValue}
        prefixValueList={PREFIX_OPTIONS}
        onPrefixValueChange={setPrefixValue}
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        prefixDropContainerStyle={{ dropContainerClassName: 'prefixDropContainerClass' }}
        suffixDropContainerStyle={{ dropContainerClassName: 'suffixDropContainerClass' }}
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
`,InputExCustom_templateraw_namespaceObject=`import { useRef, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { InputEx, MenuItem } from '@admiral-ds/react-ui';
import type { InputExProps, MenuItemProps, RenderProps, RenderPropsType, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div\`
  height: 20px;
\`;

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['One', 'Two', 'Three'];

const CustomValueStyle = styled.div\`
  color: var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']});
  border: var(--admiral-color-Primary_Primary60Main, \${(p) => p.theme.color['Primary/Primary 60 Main']}) 1px dashed;
\`;

const CustomMenuItem = styled(MenuItem)\`
  color: deeppink;
\`;

function customValueRender({ value }: RenderProps) {
  return <CustomValueStyle>{String(value)}</CustomValueStyle>;
}
function customOptionRender({ value, ...props }: RenderPropsType<ReactNode> & MenuItemProps) {
  return <CustomMenuItem {...props}>{String(value)}</CustomMenuItem>;
}

const containerContrastBorder = css\`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

export const InputExCustomTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('One');

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <InputEx
        {...props}
        containerRef={inputRef}
        value={localValue}
        onChange={handleChange}
        prefixValue="Prefix"
        onPrefixValueChange={setPrefixValue}
        renderPrefixValue={customValueRender}
        suffixValue="Suffix"
        onSuffixValueChange={setSuffixValue}
        renderSuffixValue={customValueRender}
        placeholder={placeholder}
      />
      <Separator />
      <InputEx
        {...props}
        containerRef={inputRef}
        value={localValue}
        onChange={handleChange}
        prefixValue={prefixValue}
        prefixValueList={PREFIX_OPTIONS}
        onPrefixValueChange={setPrefixValue}
        renderPrefixValue={customValueRender}
        renderPrefixOption={customOptionRender}
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        renderSuffixValue={customValueRender}
        renderSuffixOption={customOptionRender}
        prefixDropContainerStyle={{
          dropContainerCssMixin: containerContrastBorder,
          dropContainerClassName: 'prefixDropContainerClass',
        }}
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
          dropContainerStyle: { border: 'dashed 2px red' },
        }}
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
`,CurrencyInputPlayground_templateraw_namespaceObject=`import { forwardRef, useState } from 'react';
import type { ChangeEvent, ComponentProps, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { type InputExProps, type BorderRadiusType, T, InputEx, refSetter } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

const SUFFIX_OPTIONS = ['₽', '$', '€', '\xa5', '\xa3'];

const Separator = styled.div\`
  height: 8px;
\`;

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
});

/**
 * В компоненте необходимо использовать onInput по причине отсутствия onChange.
 * В документации в разделе Controlled masked input описана проблема.
 * https://maskito.dev/frameworks/react
 */
const CurrencyInput = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputEx>, 'onChange'>>((props, ref) => {
  const inputRef = useMaskito({ options });

  return <InputEx {...props} ref={refSetter(ref, inputRef)} />;
});

export const CurrencyInputPlaygroundTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : '152,00');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueOne(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент для ввода числовых значений валюты с точностью до двух знаков после запятой. Строится на основе
        компонента Input Extended. Особенности:
        <li>Возможен ввод как целых чисел, так и с двумя знаками после запятой.</li>
        <li>Если при вводе цифр нажать \xab,\xbb (запятая), то включается маска ввода сотых значений.</li>
        <li>Введенная \xab.\xbb (точка) автоматически конвертируется в \xab,\xbb (запятая).</li>
        <li>
          Валюта ввода может быть как фиксированной (только рубли, например), так и изменяемой через суффикс поля.
        </li>
        <li>Автопробел каждые три знака в целой части суммы.</li>
        <li>Можно указывать минимальные и максимальные значения для вводимой суммы.</li>
        <Separator />
        Для реализации маски была использована библиотека Maskito.
      </T>
      <CurrencyInput
        {...props}
        value={localValueOne}
        onInput={handleChange}
        placeholder={placeholder}
        displayClearIcon
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
        }}
        style={{ width: '400px' }}
      />
    </ThemeProvider>
  );
};
`,CurrencyInputWithPrefix_templateraw_namespaceObject=`import { forwardRef, useState } from 'react';
import type { ChangeEvent, ComponentProps, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { type InputExProps, type BorderRadiusType, InputEx, refSetter } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

const SUFFIX_OPTIONS = ['₽', '$', '€', '\xa5', '\xa3'];

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
});

/**
 * В компоненте необходимо использовать onInput по причине отсутствия onChange.
 * В документации в разделе Controlled masked input описана проблема.
 * https://maskito.dev/frameworks/react
 */
const CurrencyInput = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputEx>, 'onChange'>>((props, ref) => {
  const inputRef = useMaskito({ options });

  return <InputEx {...props} ref={refSetter(ref, inputRef)} />;
});

const Wrapper = styled.div\`
  display: flex;
  gap: 10px;
\`;

export const CurrencyInputWithPrefixTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : '');
  const [localValueTwo, setValueTwo] = useState<string>(props.value ? String(props.value) : '');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');

  const handleChangeOne = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueOne(inputValue);
    props.onChange?.(e);
  };
  const handleChangeTwo = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueTwo(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <CurrencyInput
          {...props}
          value={localValueOne}
          onInput={handleChangeOne}
          prefixValue="От"
          placeholder={placeholder}
          displayClearIcon
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          prefixDropContainerStyle={{
            dropContainerClassName: 'prefixDropContainerClass',
          }}
          suffixDropContainerStyle={{
            dropContainerClassName: 'suffixDropContainerClass',
          }}
          style={{ width: '400px' }}
        />
        <CurrencyInput
          {...props}
          value={localValueTwo}
          onInput={handleChangeTwo}
          prefixValue="До"
          placeholder={placeholder}
          displayClearIcon
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          prefixDropContainerStyle={{
            dropContainerClassName: 'prefixDropContainerClass',
          }}
          suffixDropContainerStyle={{
            dropContainerClassName: 'suffixDropContainerClass',
          }}
          style={{ width: '400px' }}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
`,CurrencyInputMinMaxValue_templateraw_namespaceObject=`import { forwardRef, useState } from 'react';
import type { ChangeEvent, ComponentProps, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { type InputExProps, type BorderRadiusType, T, InputEx, refSetter, clearValue } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';

const SUFFIX_OPTIONS = ['₽', '$', '€', '\xa5', '\xa3'];

const options = maskitoNumberOptionsGenerator({
  decimalSeparator: ',',
  thousandSeparator: ' ',
  precision: 2,
  max: 2000,
  min: -5,
});

/**
 * В компоненте необходимо использовать onInput по причине отсутствия onChange.
 * В документации в разделе Controlled masked input описана проблема.
 * https://maskito.dev/frameworks/react
 */
const CurrencyInput = forwardRef<HTMLInputElement, Omit<ComponentProps<typeof InputEx>, 'onChange'>>((props, ref) => {
  const inputRef = useMaskito({ options });

  return <InputEx {...props} ref={refSetter(ref, inputRef)} />;
});

function convertStrToNum(str: string, precision: number, decimal: string) {
  return Number(clearValue(str, precision, decimal).replace(decimal, '.'));
}

export const CurrencyInputMinMaxValueTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : '');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('₽');
  const [status, setStatus] = useState<InputExProps['status'] | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    const numValue = convertStrToNum(inputValue, 2, ',');

    if (inputValue && numValue > 10 && numValue < 1000) {
      setStatus('success');
    } else {
      setStatus('error');
    }
    setValueOne(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с ограничением в маске min = -5, max = 2000, и подсвечивание статуса success если 10 {'<'} value {'<'}{' '}
        1000.
      </T>
      <CurrencyInput
        {...props}
        value={localValueOne}
        onInput={handleChange}
        placeholder={placeholder}
        displayClearIcon
        suffixValue={suffixValue}
        suffixValueList={SUFFIX_OPTIONS}
        onSuffixValueChange={setSuffixValue}
        status={status}
        suffixDropContainerStyle={{
          dropContainerClassName: 'suffixDropContainerClass',
        }}
        style={{ width: '400px' }}
      />
    </ThemeProvider>
  );
};
`;function InputEx_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function InputEx_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function InputEx_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function InputEx_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function InputEx_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function InputEx_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){InputEx_stories_define_property(target,key,source[key])})}return target}function InputEx_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function InputEx_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InputEx_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function InputEx_stories_sliced_to_array(arr,i){return InputEx_stories_array_with_holes(arr)||InputEx_stories_iterable_to_array_limit(arr,i)||InputEx_stories_unsupported_iterable_to_array(arr,i)||InputEx_stories_non_iterable_rest()}function InputEx_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return InputEx_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return InputEx_stories_array_like_to_array(o,minLen)}}let InputEx_stories={title:"Admiral-2.1/Input/InputEx",component:InputEx.M,decorators:void 0,parameters:{docs:{source:{code:null}},design:[{type:"figma",label:"label",caption:"caption",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=162659-147609&mode=dev"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=112553-78310&mode=dev"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=162659-149149&mode=dev"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayStatusIcon:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},prefixValue:{control:{type:"text"}},suffixValue:{control:{type:"text"}},onChange:{action:"onChange"},icons:{control:!1},containerRef:{control:!1},prefixValueList:{control:!1},suffixValueList:{control:!1},alignDropRef:{control:!1},targetElement:{control:!1},dropContainerCssMixin:{control:!1},prefixDropContainerStyle:{control:!1},suffixDropContainerStyle:{control:!1},skeleton:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var InputExBase={render:function(props){var CSSCustomProps=InputEx_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputExBaseTemplate,InputEx_stories_object_spread_props(InputEx_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputExBase_templateraw_namespaceObject}}},name:"Базовый InputExtended"},InputExPrefixSuffixSelect={render:function(props){var CSSCustomProps=InputEx_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputExPrefixSuffixSelectTemplate,InputEx_stories_object_spread_props(InputEx_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputExPrefixSuffixSelect_templateraw_namespaceObject}}},name:"InputExtended с выбором префикса и суффикса"},InputExCustom={render:function(props){var CSSCustomProps=InputEx_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(InputExCustomTemplate,InputEx_stories_object_spread_props(InputEx_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:InputExCustom_templateraw_namespaceObject}}},name:"InputExtended. Кастомизация"},Playground={render:function(props){var CSSCustomProps=InputEx_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CurrencyInputPlaygroundTemplate,InputEx_stories_object_spread_props(InputEx_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CurrencyInputPlayground_templateraw_namespaceObject}}},name:"Базовый CurrencyInput"},CurrencyInputWithPrefix={render:function(props){var CSSCustomProps=InputEx_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CurrencyInputWithPrefixTemplate,InputEx_stories_object_spread_props(InputEx_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CurrencyInputWithPrefix_templateraw_namespaceObject}}},name:"CurrencyInput с префиксом"},CurrencyInputMinMaxValue={render:function(props){var CSSCustomProps=InputEx_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CurrencyInputMinMaxValueTemplate,InputEx_stories_object_spread_props(InputEx_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CurrencyInputMinMaxValue_templateraw_namespaceObject}}},name:"CurrencyInput с минимальным и максимальным значением"};InputExBase.parameters={...InputExBase.parameters,docs:{...InputExBase.parameters?.docs,source:{originalSource:`{
  render: InputExBaseStory,
  parameters: {
    docs: {
      source: {
        code: InputExBaseRaw
      }
    }
  },
  name: 'Базовый InputExtended'
}`,...InputExBase.parameters?.docs?.source}}},InputExPrefixSuffixSelect.parameters={...InputExPrefixSuffixSelect.parameters,docs:{...InputExPrefixSuffixSelect.parameters?.docs,source:{originalSource:`{
  render: InputExPrefixSuffixSelectStory,
  parameters: {
    docs: {
      source: {
        code: InputExPrefixSuffixSelectRaw
      }
    }
  },
  name: 'InputExtended с выбором префикса и суффикса'
}`,...InputExPrefixSuffixSelect.parameters?.docs?.source}}},InputExCustom.parameters={...InputExCustom.parameters,docs:{...InputExCustom.parameters?.docs,source:{originalSource:`{
  render: InputExCustomStory,
  parameters: {
    docs: {
      source: {
        code: InputExCustomRaw
      }
    }
  },
  name: 'InputExtended. Кастомизация'
}`,...InputExCustom.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:`{
  render: CurrencyInputPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: CurrencyInputPlaygroundTemplateRaw
      }
    }
  },
  name: 'Базовый CurrencyInput'
}`,...Playground.parameters?.docs?.source}}},CurrencyInputWithPrefix.parameters={...CurrencyInputWithPrefix.parameters,docs:{...CurrencyInputWithPrefix.parameters?.docs,source:{originalSource:`{
  render: CurrencyInputWithPrefixTemplateStory,
  parameters: {
    docs: {
      source: {
        code: CurrencyInputWithPrefixTemplateRaw
      }
    }
  },
  name: 'CurrencyInput с префиксом'
}`,...CurrencyInputWithPrefix.parameters?.docs?.source}}},CurrencyInputMinMaxValue.parameters={...CurrencyInputMinMaxValue.parameters,docs:{...CurrencyInputMinMaxValue.parameters?.docs,source:{originalSource:`{
  render: CurrencyInputMinMaxValueTemplateStory,
  parameters: {
    docs: {
      source: {
        code: CurrencyInputMinMaxValueTemplateRaw
      }
    }
  },
  name: 'CurrencyInput с минимальным и максимальным значением'
}`,...CurrencyInputMinMaxValue.parameters?.docs?.source}}};let __namedExportsOrder=["InputExBase","InputExPrefixSuffixSelect","InputExCustom","Playground","CurrencyInputWithPrefix","CurrencyInputMinMaxValue"]},"./src/components/input/NumberInput/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FI:()=>getDecimalSeparator,YW:()=>fitToCurrency,Zv:()=>clearValue,o7:()=>getThousandSeparator,p:()=>validateThousand});var repeatStringNumTimes=function(str,n){for(var repeatedString="";n>0;)repeatedString+=str,n--;return repeatedString},clearValue=function(str,precision){var decimal=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",minValue=arguments.length>3?arguments[3]:void 0,validChars=precision>0?[decimal,"-","0","1","2","3","4","5","6","7","8","9"]:["-","0","1","2","3","4","5","6","7","8","9"];"number"==typeof minValue&&minValue>=0&&(validChars=validChars.filter(function(char){return"-"!==char}));var newStr=str.split("").filter(function(char){return validChars.indexOf(char)>-1}).join("");if(newStr.indexOf("-")>-1&&(newStr=newStr[0]+newStr.slice(1,newStr.length).split("").filter(function(char){return"-"!==char}).join("")),"-"===newStr[0]&&newStr[1]===decimal&&(newStr=newStr[0]+"0"+newStr.slice(1,newStr.length)),newStr.indexOf(decimal)>-1){var firstDecimalIndex=newStr.indexOf(decimal);newStr=newStr.split("").filter(function(char,index){return char!==decimal||char===decimal&&index===firstDecimalIndex}).join("")}return"0"===newStr[0]&&newStr[1]!==decimal&&newStr.length>=2&&(newStr=newStr.slice(1,newStr.length)),"-0"===newStr.slice(0,2)&&newStr[2]!==decimal&&newStr.length>=3&&(newStr="-"+newStr.slice(2,newStr.length)),newStr},reverseString=function(str){return str.split("").reverse().join("")},replaceByDecimal=function(str,decimal,thousand){var validChars=[decimal,thousand],replaceableChars=[",","."];return str.split("").map(function(char){return replaceableChars.includes(char)&&!validChars.includes(char)?decimal:char}).join("")},validateThousand=function(thousand){return/[^a-zA-Z]*/.test(thousand)};function fitToCurrency(value,precision,decimal,thousand,fillEmptyDecimals,minValue){if(""===value)return value;var _reverseString_match,strDecimal=replaceByDecimal(String(value),decimal,thousand);if(""===(strDecimal=clearValue(strDecimal,precision,decimal,minValue)))return"";var decimalIndex=strDecimal.indexOf(decimal),isDecimal=decimalIndex>-1;isDecimal&&strDecimal.length-decimalIndex-1>precision&&(strDecimal=strDecimal.slice(0,decimalIndex+precision+1));var isNegative="-"===strDecimal[0],left_side=isDecimal?strDecimal.slice(0,decimalIndex):strDecimal,right_side=isDecimal?strDecimal.slice(decimalIndex,strDecimal.length):"",newValue="";if(newValue=(null==(_reverseString_match=reverseString(isNegative?left_side.slice(1,left_side.length):left_side).match(/.{1,3}/g))?void 0:_reverseString_match.reduceRight(function(previousValue,currentValue,index){return 0===index?previousValue+=reverseString(currentValue):previousValue+=reverseString(currentValue)+thousand},""))||"",isNegative&&(newValue="-"+newValue),right_side&&(newValue+=right_side),fillEmptyDecimals)if(isDecimal){var dot=newValue.indexOf(decimal),diff=newValue.length-dot-1;diff<precision&&(newValue+=repeatStringNumTimes("0",precision-diff)),0===dot&&(newValue="0"+newValue)}else"-"===newValue&&(newValue+="0"),precision>0&&(newValue+=decimal+repeatStringNumTimes("0",precision));return newValue}var getDecimalSeparator=function(locale){var testText=1.9.toLocaleString(locale),one=1..toLocaleString(locale),nine=9..toLocaleString(locale),result=new RegExp("".concat(one,"(.+)").concat(nine)).exec(testText);return result&&result[1]||","},getThousandSeparator=function(locale){var testText=1900..toLocaleString(locale),one=1..toLocaleString(locale),nine=900..toLocaleString(locale),result=new RegExp("".concat(one,"(.+)").concat(nine)).exec(testText);return result&&result[1]||" "}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-input-InputEx-stories-InputEx-stories.45a02078.iframe.bundle.js.map