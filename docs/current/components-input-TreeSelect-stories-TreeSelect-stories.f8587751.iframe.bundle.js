"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4881],{"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_2__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Body/Body 1 Long"'},{value:'"Body/Body 2 Long"'},{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 90"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>uid});function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}},"./src/components/input/TreeSelect/stories/TreeSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TextInputPlayground:()=>TextInputPlayground,TextInputWithIcon:()=>TextInputWithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TreeSelect_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TreeSelect=__webpack_require__("./src/components/input/TreeSelect/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var STORY_ITEMS=[{id:"1",label:"Опция 1",checked:!1,children:[{id:"1.1",label:"Опция 1.1",checked:!1},{id:"1.2",label:"Опция 1.2",checked:!1,children:[{id:"1.2.1",label:"Опция 1.2.1",checked:!1},{id:"1.2.2",label:"Опция 1.2.2",checked:!1},{id:"1.2.3",label:"Опция 1.2.3",checked:!1}]},{id:"1.3",label:"Опция 1.3",checked:!1}]},{id:"2",label:"Опция 2",checked:!1},{id:"3",label:"Опция 3",checked:!1}],PlaygroundTemplate=function(_param){var _param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),clearButtonProps={"data-testid":"selectClearButton"},openButtonProps={"data-testid":"selectOpenButton"},dropdownProps={"data-testid":"dropdown-tree"},_useState=_sliced_to_array((0,react.useState)(),2),value=_useState[0],setValue=_useState[1],treeProps=_object_spread_props(_object_spread({},props),{items:STORY_ITEMS,value:value,placeholder:void 0===_param_placeholder?"Выберите элементы...":_param_placeholder,onChange:function(newValue){console.log("onChange ",newValue),setValue(newValue)},onSelect:function(value){console.log("onSelect ",value)},onDeselect:function(value){console.log("onDeselect ",value)},onClearIconClick:function(){console.log("onClearIconClick")},onOpenChange:function(open){console.log("onOpenChange",open)}});return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TreeSelect.f,_object_spread_props(_object_spread({},treeProps),{clearButtonPropsConfig:function(){return clearButtonProps},openButtonPropsConfig:function(){return openButtonProps},dropdownConfig:function(){return dropdownProps},displayClearIcon:!0}))})};try{PlaygroundTemplate.displayName="PlaygroundTemplate",PlaygroundTemplate.__docgenInfo={description:"",displayName:"PlaygroundTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string[]"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Список опций дерева",name:"items",required:!0,type:{name:"TreeSelectItemProps[]"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},onChange:{defaultValue:null,description:"Срабатывает при изменении значения",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}},onSelect:{defaultValue:null,description:"Срабатывает при выборе отдельного item",name:"onSelect",required:!1,type:{name:"((id: string) => void)"}},onDeselect:{defaultValue:null,description:"Срабатывает при отмене выбора отдельного item",name:"onDeselect",required:!1,type:{name:"((id: string) => void)"}},onOpenChange:{defaultValue:null,description:"Срабатывает при открытии/закрытии DropDownMenu",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},dropdownConfig:{defaultValue:null,description:`Конфиг функция пропсов для dropdown. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"dropdownConfig",required:!1,type:{name:"((props: DropdownContainerProps & { children?: ReactNode; } & RefAttributes<HTMLDivElement>) => Partial<DropdownContainerProps & { ...; } & RefAttributes<...> & DataAttributes>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TreeSelect/stories/Playground.template.tsx#PlaygroundTemplate"]={docgenInfo:PlaygroundTemplate.__docgenInfo,name:"PlaygroundTemplate",path:"src/components/input/TreeSelect/stories/Playground.template.tsx#PlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx");function PanesRender_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function PanesRender_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function PanesRender_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PanesRender_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function PanesRender_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function PanesRender_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PanesRender_template_define_property(target,key,source[key])})}return target}function PanesRender_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function PanesRender_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):PanesRender_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function PanesRender_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=PanesRender_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function PanesRender_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function PanesRender_template_sliced_to_array(arr,i){return PanesRender_template_array_with_holes(arr)||PanesRender_template_iterable_to_array_limit(arr,i)||PanesRender_template_unsupported_iterable_to_array(arr,i)||PanesRender_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function PanesRender_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return PanesRender_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return PanesRender_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  margin: 8px;
`]);return _templateObject=function _templateObject(){return data},data}var PanesRender_template_STORY_ITEMS=[{id:"1",label:"Опция 1",checked:!1,children:[{id:"1.1",label:"Опция 1.1",checked:!1},{id:"1.2",label:"Опция 1.2",checked:!1,children:[{id:"1.2.1",label:"Опция 1.2.1",checked:!1},{id:"1.2.2",label:"Опция 1.2.2",checked:!1},{id:"1.2.3",label:"Опция 1.2.3",checked:!1}]},{id:"1.3",label:"Опция 1.3",checked:!1}]},{id:"2",label:"Опция 2",checked:!1},{id:"3",label:"Опция 3",checked:!1}],ContentWrapper=styled_components_browser_esm.I4.div(_templateObject()),PanesRenderTemplate=function(_param){var _param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=PanesRender_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),clearButtonProps={"data-testid":"selectClearButton"},openButtonProps={"data-testid":"selectOpenButton"},_useState=PanesRender_template_sliced_to_array((0,react.useState)(["1.2.1","1.2.2"]),2),value=_useState[0],setValue=_useState[1],treeProps=PanesRender_template_object_spread_props(PanesRender_template_object_spread({},props),{items:PanesRender_template_STORY_ITEMS,value:value,placeholder:void 0===_param_placeholder?"Placeholder":_param_placeholder,onChange:function(newValue){console.log("onChange ",newValue),setValue(newValue)},onSelect:function(value){console.log("onSelect ",value)},onDeselect:function(value){console.log("onDeselect ",value)},onClearIconClick:function(){console.log("onClearIconClick")},onOpenChange:function(open){console.log("onOpenChange",open)}});return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TreeSelect.f,PanesRender_template_object_spread_props(PanesRender_template_object_spread({},treeProps),{clearButtonPropsConfig:function(){return clearButtonProps},openButtonPropsConfig:function(){return openButtonProps},renderTopPanel:function(){return(0,jsx_runtime.jsxs)(ContentWrapper,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Caption/Caption 1",as:"div",children:"Верхняя панель"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){console.log("Кнопка в верхней панели нажата")},children:"Действие сверху"})]})},renderBottomPanel:function(){return(0,jsx_runtime.jsxs)(ContentWrapper,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Caption/Caption 1",as:"div",children:["Выбрано: ",value.length," элементов"]}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){console.log("Кнопка в нижней панели нажата")},children:"Действие снизу"}),(0,jsx_runtime.jsx)(T.T,{font:"Caption/Caption 1",as:"div",children:"Нижняя панель"})]})}}))})};try{PanesRenderTemplate.displayName="PanesRenderTemplate",PanesRenderTemplate.__docgenInfo={description:"",displayName:"PanesRenderTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string[]"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Список опций дерева",name:"items",required:!0,type:{name:"TreeSelectItemProps[]"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},onChange:{defaultValue:null,description:"Срабатывает при изменении значения",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}},onSelect:{defaultValue:null,description:"Срабатывает при выборе отдельного item",name:"onSelect",required:!1,type:{name:"((id: string) => void)"}},onDeselect:{defaultValue:null,description:"Срабатывает при отмене выбора отдельного item",name:"onDeselect",required:!1,type:{name:"((id: string) => void)"}},onOpenChange:{defaultValue:null,description:"Срабатывает при открытии/закрытии DropDownMenu",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},dropdownConfig:{defaultValue:null,description:`Конфиг функция пропсов для dropdown. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"dropdownConfig",required:!1,type:{name:"((props: DropdownContainerProps & { children?: ReactNode; } & RefAttributes<HTMLDivElement>) => Partial<DropdownContainerProps & { ...; } & RefAttributes<...> & DataAttributes>)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TreeSelect/stories/PanesRender.template.tsx#PanesRenderTemplate"]={docgenInfo:PanesRenderTemplate.__docgenInfo,name:"PanesRenderTemplate",path:"src/components/input/TreeSelect/stories/PanesRender.template.tsx#PanesRenderTemplate"})}catch(__react_docgen_typescript_loader_error){}let Playground_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { TreeSelect } from '@admiral-ds/react-ui';
import type { BorderRadiusType, TreeSelectItemProps, TreeSelectProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const STORY_ITEMS: Array<TreeSelectItemProps> = [
  {
    id: '1',
    label: 'Опция 1',
    checked: false,
    children: [
      {
        id: '1.1',
        label: 'Опция 1.1',
        checked: false,
      },
      {
        id: '1.2',
        label: 'Опция 1.2',
        checked: false,
        children: [
          {
            id: '1.2.1',
            label: 'Опция 1.2.1',
            checked: false,
          },
          {
            id: '1.2.2',
            label: 'Опция 1.2.2',
            checked: false,
          },
          {
            id: '1.2.3',
            label: 'Опция 1.2.3',
            checked: false,
          },
        ],
      },
      {
        id: '1.3',
        label: 'Опция 1.3',
        checked: false,
      },
    ],
  },
  {
    id: '2',
    label: 'Опция 2',
    checked: false,
  },
  {
    id: '3',
    label: 'Опция 3',
    checked: false,
  },
];

export const PlaygroundTemplate = ({
  placeholder = 'Выберите элементы...',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TreeSelectProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const clearButtonProps = { 'data-testid': 'selectClearButton' };
  const openButtonProps = { 'data-testid': 'selectOpenButton' };
  const dropdownProps = { 'data-testid': 'dropdown-tree' };
  const [value, setValue] = useState<Array<string>>();

  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue);
    setValue(newValue);
  };

  const onSelect = (value: string) => {
    console.log('onSelect ', value);
  };

  const onDeselect = (value: string) => {
    console.log('onDeselect ', value);
  };

  const onClearIconClick = () => {
    console.log('onClearIconClick');
  };

  const onOpenChange = (open: boolean) => {
    console.log('onOpenChange', open);
  };

  const treeProps: TreeSelectProps = {
    ...props,
    items: STORY_ITEMS,
    value,
    placeholder,
    onChange,
    onSelect,
    onDeselect,
    onClearIconClick,
    onOpenChange,
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TreeSelect
        {...treeProps}
        clearButtonPropsConfig={() => clearButtonProps}
        openButtonPropsConfig={() => openButtonProps}
        dropdownConfig={() => dropdownProps}
        displayClearIcon
      />
    </ThemeProvider>
  );
};
`,PanesRender_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { TreeSelect, Button, T } from '@admiral-ds/react-ui';
import type { BorderRadiusType, TreeSelectItemProps, TreeSelectProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const STORY_ITEMS: Array<TreeSelectItemProps> = [
  {
    id: '1',
    label: 'Опция 1',
    checked: false,
    children: [
      {
        id: '1.1',
        label: 'Опция 1.1',
        checked: false,
      },
      {
        id: '1.2',
        label: 'Опция 1.2',
        checked: false,
        children: [
          {
            id: '1.2.1',
            label: 'Опция 1.2.1',
            checked: false,
          },
          {
            id: '1.2.2',
            label: 'Опция 1.2.2',
            checked: false,
          },
          {
            id: '1.2.3',
            label: 'Опция 1.2.3',
            checked: false,
          },
        ],
      },
      {
        id: '1.3',
        label: 'Опция 1.3',
        checked: false,
      },
    ],
  },
  {
    id: '2',
    label: 'Опция 2',
    checked: false,
  },
  {
    id: '3',
    label: 'Опция 3',
    checked: false,
  },
];

const ContentWrapper = styled.div\`
  margin: 8px;
\`;

export const PanesRenderTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TreeSelectProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const clearButtonProps = { 'data-testid': 'selectClearButton' };
  const openButtonProps = { 'data-testid': 'selectOpenButton' };
  const [value, setValue] = useState(['1.2.1', '1.2.2']);

  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue);
    setValue(newValue);
  };

  const onSelect = (value: string) => {
    console.log('onSelect ', value);
  };

  const onDeselect = (value: string) => {
    console.log('onDeselect ', value);
  };

  const onClearIconClick = () => {
    console.log('onClearIconClick');
  };

  const onOpenChange = (open: boolean) => {
    console.log('onOpenChange', open);
  };

  const treeProps: TreeSelectProps = {
    ...props,
    items: STORY_ITEMS,
    value,
    placeholder,
    onChange,
    onSelect,
    onDeselect,
    onClearIconClick,
    onOpenChange,
  };

  // Пример функции для верхней панели
  const topPanelContent = () => (
    <ContentWrapper>
      <T font="Caption/Caption 1" as="div">
        Верхняя панель
      </T>
      <Button
        dimension="s"
        onClick={() => {
          console.log('Кнопка в верхней панели нажата');
        }}
      >
        Действие сверху
      </Button>
    </ContentWrapper>
  );

  // Пример функции для нижней панели
  const bottomPanelContent = () => (
    <ContentWrapper>
      <T font="Caption/Caption 1" as="div">
        Выбрано: {value.length} элементов
      </T>
      <Button
        dimension="s"
        onClick={() => {
          console.log('Кнопка в нижней панели нажата');
        }}
      >
        Действие снизу
      </Button>
      <T font="Caption/Caption 1" as="div">
        Нижняя панель
      </T>
    </ContentWrapper>
  );

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TreeSelect
        {...treeProps}
        clearButtonPropsConfig={() => clearButtonProps}
        openButtonPropsConfig={() => openButtonProps}
        renderTopPanel={topPanelContent}
        renderBottomPanel={bottomPanelContent}
      />
    </ThemeProvider>
  );
};
`;function TreeSelect_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TreeSelect_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function TreeSelect_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeSelect_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TreeSelect_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TreeSelect_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeSelect_stories_define_property(target,key,source[key])})}return target}function TreeSelect_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeSelect_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeSelect_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeSelect_stories_sliced_to_array(arr,i){return TreeSelect_stories_array_with_holes(arr)||TreeSelect_stories_iterable_to_array_limit(arr,i)||TreeSelect_stories_unsupported_iterable_to_array(arr,i)||TreeSelect_stories_non_iterable_rest()}function TreeSelect_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TreeSelect_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TreeSelect_stories_array_like_to_array(o,minLen)}}let TreeSelect_stories={title:"Admiral-2.1/Input/TreeSelect",component:TextInput.ks,decorators:void 0,parameters:{docs:{source:{code:null}},design:[]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},onChange:{action:"onChange"},icons:{control:!1},containerRef:{control:!1},handleInput:{control:!1},theme:{control:!1},ref:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var TextInputPlayground={render:function(props){var CSSCustomProps=TreeSelect_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(PlaygroundTemplate,TreeSelect_stories_object_spread_props(TreeSelect_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{args:{displayClearIcon:!0},docs:{source:{code:Playground_templateraw_namespaceObject}}},name:"Базовый пример компонент"},TextInputWithIcon={render:function(props){var CSSCustomProps=TreeSelect_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(PanesRenderTemplate,TreeSelect_stories_object_spread_props(TreeSelect_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:PanesRender_templateraw_namespaceObject}}},name:"Кастомные панели в списке"};TextInputPlayground.parameters={...TextInputPlayground.parameters,docs:{...TextInputPlayground.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    args: {
      displayClearIcon: true
    },
    docs: {
      source: {
        code: PlaygroundRaw
      }
    }
  },
  name: 'Базовый пример компонент'
}`,...TextInputPlayground.parameters?.docs?.source}}},TextInputWithIcon.parameters={...TextInputWithIcon.parameters,docs:{...TextInputWithIcon.parameters?.docs,source:{originalSource:`{
  render: PanesRenderStory,
  parameters: {
    docs: {
      source: {
        code: PanesRenderRaw
      }
    }
  },
  name: 'Кастомные панели в списке'
}`,...TextInputWithIcon.parameters?.docs?.source}}};let __namedExportsOrder=["TextInputPlayground","TextInputWithIcon"]},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-input-TreeSelect-stories-TreeSelect-stories.f8587751.iframe.bundle.js.map