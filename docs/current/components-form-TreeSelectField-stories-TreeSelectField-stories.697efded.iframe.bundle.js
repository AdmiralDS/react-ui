"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9462],{"./src/components/form/TreeSelectField/stories/TreeSelectField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TreeSelectFieldPlayground:()=>TreeSelectFieldPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TreeSelectField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js"),uid=__webpack_require__("./src/components/common/uid.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),TreeSelect=__webpack_require__("./src/components/input/TreeSelect/index.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var TreeSelectField=react.forwardRef(function(props,ref){var inputRef=react.useRef(null),className=props.className,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,uid.L)():_props_id,disabled=props.disabled,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","displayInline","status","required","extraText","label","id","disabled","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,inputRef:inputRef,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);var inputProps=_object_spread({ref:(0,refSetter.d)(ref,inputRef),id:id,status:status,disabled:disabled,skeleton:skeleton},restProps);return(0,jsx_runtime.jsx)(Field.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,jsx_runtime.jsx)(TreeSelect.f,_object_spread({},inputProps))}))});TreeSelectField.displayName="TreeSelectField";try{TreeSelectField.displayName="TreeSelectField",TreeSelectField.__docgenInfo={description:"",displayName:"TreeSelectField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string[]"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Список опций дерева",name:"items",required:!0,type:{name:"TreeSelectItemProps[]"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},onChange:{defaultValue:null,description:"Срабатывает при изменении значения",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}},onSelect:{defaultValue:null,description:"Срабатывает при выборе отдельного item",name:"onSelect",required:!1,type:{name:"((id: string) => void)"}},onDeselect:{defaultValue:null,description:"Срабатывает при отмене выбора отдельного item",name:"onDeselect",required:!1,type:{name:"((id: string) => void)"}},onOpenChange:{defaultValue:null,description:"Срабатывает при открытии/закрытии DropDownMenu",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TreeSelectField/index.tsx#TreeSelectField"]={docgenInfo:TreeSelectField.__docgenInfo,name:"TreeSelectField",path:"src/components/form/TreeSelectField/index.tsx#TreeSelectField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function TreeSelectFieldPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TreeSelectFieldPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeSelectFieldPlayground_template_define_property(target,key,source[key])})}return target}function TreeSelectFieldPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeSelectFieldPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeSelectFieldPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeSelectFieldPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TreeSelectFieldPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TreeSelectFieldPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var STORY_ITEMS=[{id:"1",label:"Опция 1",checked:!1,children:[{id:"1.1",label:"Опция 1.1",checked:!1},{id:"1.2",label:"Опция 1.2",checked:!1,children:[{id:"1.2.1",label:"Опция 1.2.1",checked:!1},{id:"1.2.2",label:"Опция 1.2.2",checked:!1},{id:"1.2.3",label:"Опция 1.2.3",checked:!1}]},{id:"1.3",label:"Опция 1.3",checked:!1}]},{id:"2",label:"Опция 2",checked:!1},{id:"3",label:"Опция 3",checked:!1}],TreeSelectFieldPlaygroundTemplate=function(_param){var _param_label=_param.label,_param_extraText=_param.extraText,_param_placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TreeSelectFieldPlayground_template_object_without_properties(_param,["label","extraText","placeholder","themeBorderKind","CSSCustomProps"]),clearButtonProps={"data-testid":"selectClearButton"},openButtonProps={"data-testid":"selectOpenButton"},_useState=_sliced_to_array((0,react.useState)(["1.2.1","1.2.2"]),2),value=_useState[0],setValue=_useState[1],treeProps=TreeSelectFieldPlayground_template_object_spread_props(TreeSelectFieldPlayground_template_object_spread({},props),{items:STORY_ITEMS,label:void 0===_param_label?"Label":_param_label,extraText:void 0===_param_extraText?"extraText":_param_extraText,value:value,placeholder:void 0===_param_placeholder?"Placeholder":_param_placeholder,onChange:function(newValue){console.log("onChange ",newValue),setValue(newValue)},onSelect:function(value){console.log("onSelect ",value)},onDeselect:function(value){console.log("onDeselect ",value)},onClearIconClick:function(){console.log("onClearIconClick")},onOpenChange:function(open){console.log("onOpenChange",open)}});return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TreeSelectField,TreeSelectFieldPlayground_template_object_spread_props(TreeSelectFieldPlayground_template_object_spread({},treeProps),{clearButtonPropsConfig:function(){return clearButtonProps},openButtonPropsConfig:function(){return openButtonProps}}))})};try{TreeSelectFieldPlaygroundTemplate.displayName="TreeSelectFieldPlaygroundTemplate",TreeSelectFieldPlaygroundTemplate.__docgenInfo={description:"",displayName:"TreeSelectFieldPlaygroundTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string[]"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию для некотролируемого селекта",name:"defaultValue",required:!1,type:{name:"string[]"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},onClearIconClick:{defaultValue:null,description:"Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений",name:"onClearIconClick",required:!1,type:{name:"(() => void)"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Список опций дерева",name:"items",required:!0,type:{name:"TreeSelectItemProps[]"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},openButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки выпадающего списка. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"openButtonPropsConfig",required:!1,type:{name:"((props: any) => Partial<any>)"}},clearButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки очистки. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"clearButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<AnyIconProps, "ref"> & { ref?: ((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null; }, never>) => Partial<...>)'}},onChange:{defaultValue:null,description:"Срабатывает при изменении значения",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}},onSelect:{defaultValue:null,description:"Срабатывает при выборе отдельного item",name:"onSelect",required:!1,type:{name:"((id: string) => void)"}},onDeselect:{defaultValue:null,description:"Срабатывает при отмене выбора отдельного item",name:"onDeselect",required:!1,type:{name:"((id: string) => void)"}},onOpenChange:{defaultValue:null,description:"Срабатывает при открытии/закрытии DropDownMenu",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},label:{defaultValue:{value:"Label"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},extraText:{defaultValue:{value:"extraText"},description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TreeSelectField/stories/TreeSelectFieldPlayground.template.tsx#TreeSelectFieldPlaygroundTemplate"]={docgenInfo:TreeSelectFieldPlaygroundTemplate.__docgenInfo,name:"TreeSelectFieldPlaygroundTemplate",path:"src/components/form/TreeSelectField/stories/TreeSelectFieldPlayground.template.tsx#TreeSelectFieldPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");let TreeSelectFieldPlayground_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { TreeSelectField } from '@admiral-ds/react-ui';
import type { TreeSelectFieldProps, BorderRadiusType, TreeSelectItemProps } from '@admiral-ds/react-ui';
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

export const TreeSelectFieldPlaygroundTemplate = ({
  label = 'Label',
  extraText = 'extraText',
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TreeSelectFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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

  const treeProps: TreeSelectFieldProps = {
    ...props,
    items: STORY_ITEMS,
    label,
    extraText,
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
      <TreeSelectField
        {...treeProps}
        clearButtonPropsConfig={() => clearButtonProps}
        openButtonPropsConfig={() => openButtonProps}
      />
    </ThemeProvider>
  );
};
`;function TreeSelectField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TreeSelectField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function TreeSelectField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeSelectField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TreeSelectField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TreeSelectField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeSelectField_stories_define_property(target,key,source[key])})}return target}function TreeSelectField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeSelectField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeSelectField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeSelectField_stories_sliced_to_array(arr,i){return TreeSelectField_stories_array_with_holes(arr)||TreeSelectField_stories_iterable_to_array_limit(arr,i)||TreeSelectField_stories_unsupported_iterable_to_array(arr,i)||TreeSelectField_stories_non_iterable_rest()}function TreeSelectField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TreeSelectField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TreeSelectField_stories_array_like_to_array(o,minLen)}}let TreeSelectField_stories={title:"Admiral-2.1/Form Field/TreeSelectField",component:TreeSelectField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{})},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},extraText:{control:{type:"text"}},label:{control:{type:"text"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var TreeSelectFieldPlayground={render:function(props){var CSSCustomProps=TreeSelectField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TreeSelectFieldPlaygroundTemplate,TreeSelectField_stories_object_spread_props(TreeSelectField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TreeSelectFieldPlayground_templateraw_namespaceObject}}},name:"TreeSelectField Базовый пример компонента"};TreeSelectFieldPlayground.parameters={...TreeSelectFieldPlayground.parameters,docs:{...TreeSelectFieldPlayground.parameters?.docs,source:{originalSource:`{
  render: TreeSelectFieldInputStory,
  parameters: {
    docs: {
      source: {
        code: TreeSelectFieldPlaygroundTemplateRaw
      }
    }
  },
  name: 'TreeSelectField Базовый пример компонента'
}`,...TreeSelectFieldPlayground.parameters?.docs?.source}}};let __namedExportsOrder=["TreeSelectFieldPlayground"]},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);
//# sourceMappingURL=components-form-TreeSelectField-stories-TreeSelectField-stories.697efded.iframe.bundle.js.map