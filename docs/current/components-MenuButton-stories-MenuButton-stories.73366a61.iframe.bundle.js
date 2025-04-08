"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4459],{"./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMinusCircleOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgMinusCircleOutline=function SvgMinusCircleOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-7.7a7.7 7.7 0 1 0 0 15.4c4.25 0 7.7-3.45 7.7-7.7 0-4.26-3.45-7.7-7.7-7.7M7 12c0-.36.29-.65.64-.65h8.71c.35 0 .65.29.65.65 0 .35-.3.65-.65.65H7.64c-.35 0-.64-.3-.64-.65"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/StarSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgStarSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgStarSolid=function SvgStarSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"m12.62 3.31 2.47 4.98 5.51.8c.56.08.79.79.39 1.2L17 14.17l.93 5.48c.11.56-.5 1.01-1.02.74L12 17.81 7.08 20.4c-.51.27-1.11-.17-1.02-.74L7 14.17l-3.98-3.88c-.42-.41-.19-1.12.37-1.2l5.52-.8 2.46-4.98a.69.69 0 0 1 1.25 0"})))};__webpack_require__.p},"./src/components/Menu/MenuActionsPanel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>getHighlightedFilteredOptions,t:()=>MenuActionsPanel});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_getTextHighlightMeta__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/utils/getTextHighlightMeta.ts"),_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_common_uid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/uid.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  padding: `,`;

  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral50, `,`);
  pointer-events: none;

  &&[data-disabled='true'] {
    background-color: var(--admiral-color-Special_ElevatedBG, `,`);
    color: var(--admiral-color-Neutral_Neutral50, `,`);
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}var MenuActionsPanelDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject(),function(p){return"s"===p.$dimension?"10px 12px":"12px 16px"},function(p){return p.$menuActionsPanelCssMixin}),MenuActionsPanel=function(_param){var dimension=_param.dimension,menuActionsPanelCssMixin=_param.menuActionsPanelCssMixin,props=_object_without_properties(_param,["dimension","menuActionsPanelCssMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MenuActionsPanelDiv,_object_spread_props(_object_spread({},props),{$dimension:dimension,$menuActionsPanelCssMixin:menuActionsPanelCssMixin}))},HighlightText=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]}),TextWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2()),StyledMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D)(_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Special/Elevated BG"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 50"]});function getHighlightedFilteredOptions(options){var searchValue=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",emptyMessage=arguments.length>2?arguments[2]:void 0,dimension=arguments.length>3?arguments[3]:void 0,highlightFunction=arguments.length>4&&void 0!==arguments[4]?arguments[4]:_src_components_common_utils_getTextHighlightMeta__WEBPACK_IMPORTED_MODULE_4__.z,model=[];if(options.forEach(function(option){var _highlightFunction=highlightFunction(option.label,searchValue,"wholly"),shouldHighlight=_highlightFunction.shouldHighlight,parts=_highlightFunction.parts,chunks=_highlightFunction.chunks,itemValue=shouldHighlight?parts.map(function(part,i){return chunks.includes(part.toLowerCase())?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HighlightText,{children:part},i):part}):searchValue?null:option.label;itemValue&&model.push({id:option.id,render:function(options){return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D,_object_spread_props(_object_spread({dimension:dimension},options),{key:option.id}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextWrapper,{children:itemValue}))}})}),0===model.length){var id=(0,_src_components_common_uid__WEBPACK_IMPORTED_MODULE_5__.L)();model.push({id:id,render:function(options){return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(StyledMenuItem,_object_spread_props(_object_spread({dimension:dimension},options),{key:id}),emptyMessage)},disabled:!0})}return model}try{MenuActionsPanel.displayName="MenuActionsPanel",MenuActionsPanel.__docgenInfo={description:"",displayName:"MenuActionsPanel",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},menuActionsPanelCssMixin:{defaultValue:null,description:"",name:"menuActionsPanelCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuActionsPanel.tsx#MenuActionsPanel"]={docgenInfo:MenuActionsPanel.__docgenInfo,name:"MenuActionsPanel",path:"src/components/Menu/MenuActionsPanel.tsx#MenuActionsPanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/MenuItemWithCheckbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>MenuItemWithCheckbox,x:()=>checkboxTreeToMap});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/CheckboxField/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  padding-left: `,`px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var checkboxTreeToMap=function(checkboxTree){var level=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,dependencies=arguments.length>2?arguments[2]:void 0;return checkboxTree.reduce(function(acc,item){var key=item.id,currentNode={level:level,node:item};if(acc.set(key,currentNode),dependencies&&!item.children&&dependencies.forEach(function(dependency){return dependency.push(key)}),item.children){var allDependencies=dependencies?_to_consumable_array(dependencies):[],itemDependencies=[];currentNode.dependencies=itemDependencies,acc.set(key,currentNode),allDependencies.push(itemDependencies);var map=checkboxTreeToMap(item.children,level+1,allDependencies);return new Map(_to_consumable_array(acc).concat(_to_consumable_array(map)))}return acc},new Map)},paddingLeft=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var dimension=param.dimension,_param_$level=param.$level,$level=void 0===_param_$level?0:_param_$level;return"s"===dimension?12+28*$level:16+32*$level}),CheckboxGroupMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D)(_templateObject1(),paddingLeft),MenuItemWithCheckbox=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var checked=_param.checked,indeterminate=_param.indeterminate,checkboxRef=_param.checkboxRef,_param_level=_param.level,children=_param.children,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"l":_param_dimension,props=_object_without_properties(_param,["checked","indeterminate","checkboxRef","level","children","dimension"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckboxGroupMenuItem,_object_spread_props(_object_spread({dimension:dimension,$level:void 0===_param_level?0:_param_level,ref:ref},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_form__WEBPACK_IMPORTED_MODULE_4__.Y,{dimension:"s"===dimension?"s":"m",checked:!!checked,indeterminate:indeterminate,hovered:props.hovered,disabled:props.disabled,readOnly:props.readOnly,ref:checkboxRef,onChange:function(){return!1},children:children})}))});try{MenuItemWithCheckbox.displayName="MenuItemWithCheckbox",MenuItemWithCheckbox.__docgenInfo={description:"",displayName:"MenuItemWithCheckbox",props:{checked:{defaultValue:null,description:"Значение Checkbox",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"Неопределенное состояние Checkbox",name:"indeterminate",required:!1,type:{name:"boolean"}},checkboxIsHovered:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.17.0, будет удалено в 10.x.x версии.

Состояние hovered для Checkbox`,name:"checkboxIsHovered",required:!1,type:{name:"boolean"}},checkboxRef:{defaultValue:null,description:"Ref на Checkbox",name:"checkboxRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},level:{defaultValue:{value:"0"},description:"Сдвиг внутри MenuItem при наличии нескольких уровней (например при использовании составной группы чекбоксов внутри Menu)",name:"level",required:!1,type:{name:"number"}},selected:{defaultValue:null,description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.17.0, будет удалено в 10.x.x версии.

ссылка на элемент, при работе через renderProp`,name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"l"},description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"]={docgenInfo:MenuItemWithCheckbox.__docgenInfo,name:"MenuItemWithCheckbox",path:"src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/MenuButton/stories/MenuButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuButtonBase:()=>MenuButtonBase,MenuButtonIcon:()=>MenuButtonIcon,MenuButtonMultiLevel:()=>MenuButtonMultiLevel,MenuButtonOptions:()=>MenuButtonOptions,MenuButtonVariants:()=>MenuButtonVariants,MenuButtonWithBottomPanel:()=>MenuButtonWithBottomPanel,MenuButtonWithTopPanel:()=>MenuButtonWithTopPanel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MenuButton_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),MenuButton=__webpack_require__("./src/components/MenuButton/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),MenuItem=__webpack_require__("./src/components/Menu/MenuItem.tsx"),T=__webpack_require__("./src/components/T/index.tsx"),MinusCircleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg"),StarSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/StarSolid.svg");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  height: 20px;
  width: 20px;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    `,`
  );
  padding: 2px;
`]);return _templateObject3=function _templateObject(){return data},data}var WrapperVertical=styled_components_browser_esm.Ay.div(_templateObject()),Wrapper=styled_components_browser_esm.Ay.div(_templateObject1()),Separator=styled_components_browser_esm.Ay.div(_templateObject2()),DarkDiv=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return p.theme.color["Special/Dark Static Neutral 00"]}),handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},logSelectedId=function(id){console.log("selected: ".concat(id))},items=[{id:"1",display:"Option one"},{id:"2",display:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",width:"115px",justifyContent:"space-between",alignItems:"center"},children:[(0,jsx_runtime.jsx)(MinusCircleOutline.h,{width:20,height:20}),"Option two"]}),disabled:!0},{id:"3",display:"Option three"},{id:"4",display:"Option four"}],MenuButtonIconTemplate=function(props){var _React_useState=_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],modelL=react.useMemo(function(){return items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({dimension:"l"},items),{key:item.id}),item.display)},disabled:item.disabled}})},[]),modelM=react.useMemo(function(){return items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({dimension:"m"},items),{key:item.id}),item.display)},disabled:item.disabled}})},[]),modelS=react.useMemo(function(){return items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,_object_spread_props(_object_spread({dimension:"s"},items),{key:item.id}),item.display)},disabled:item.disabled}})},[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size XL"}),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"primary",dimension:"xl",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"secondary",dimension:"xl",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"ghost",dimension:"xl",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"white",dimension:"xl",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}))})]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size L"}),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"primary",dimension:"l",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"secondary",dimension:"l",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"ghost",dimension:"l",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"white",dimension:"l",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}))})]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size M"}),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"primary",dimension:"m",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"secondary",dimension:"m",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"ghost",dimension:"m",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"white",dimension:"m",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}))})]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size S"}),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"primary",dimension:"s",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"secondary",dimension:"s",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"ghost",dimension:"s",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"})),(0,jsx_runtime.jsx)(DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,_object_spread_props(_object_spread({},props),{appearance:"white",dimension:"s",selected:selected,onSelectItem:function(id){logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:handleVisibilityChange,iconStart:(0,jsx_runtime.jsx)(StarSolid.h,{}),children:"Button 56"}))})]})]})})};try{MenuButtonIconTemplate.displayName="MenuButtonIconTemplate",MenuButtonIconTemplate.__docgenInfo={description:"",displayName:"MenuButtonIconTemplate",props:{items:{defaultValue:null,description:"Массив опций",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/stories/MenuButtonIcon.template.tsx#MenuButtonIconTemplate"]={docgenInfo:MenuButtonIconTemplate.__docgenInfo,name:"MenuButtonIconTemplate",path:"src/components/MenuButton/stories/MenuButtonIcon.template.tsx#MenuButtonIconTemplate"})}catch(__react_docgen_typescript_loader_error){}var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function MenuButtonBase_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuButtonBase_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuButtonBase_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuButtonBase_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuButtonBase_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButtonBase_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuButtonBase_template_define_property(target,key,source[key])})}return target}function MenuButtonBase_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuButtonBase_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuButtonBase_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuButtonBase_template_sliced_to_array(arr,i){return MenuButtonBase_template_array_with_holes(arr)||MenuButtonBase_template_iterable_to_array_limit(arr,i)||MenuButtonBase_template_unsupported_iterable_to_array(arr,i)||MenuButtonBase_template_non_iterable_rest()}function MenuButtonBase_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuButtonBase_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuButtonBase_template_array_like_to_array(o,minLen)}}var MenuButtonBase_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},MenuButtonBase_template_logSelectedId=function(id){console.log("selected: ".concat(id))},MenuButtonBase_template_items=[{id:"1",display:"Option one"},{id:"2",display:"Option two"},{id:"3",display:"Option three"},{id:"4",display:"Option four"},{id:"5",display:"Option five",disabled:!0},{id:"6",display:"Option six"},{id:"7",display:"Option seven"}],MenuButtonBaseTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=MenuButtonBase_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],model=react.useMemo(function(){return MenuButtonBase_template_items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,MenuButtonBase_template_object_spread_props(MenuButtonBase_template_object_spread({dimension:"xl"===props.dimension?"l":props.dimension},items),{key:item.id}),item.display)},disabled:item.disabled}})},[props.dimension]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonBase_template_object_spread_props(MenuButtonBase_template_object_spread({},props),{selected:selected,onSelectItem:function(id){MenuButtonBase_template_logSelectedId(id),setSelected(id)},items:model,onVisibilityChange:MenuButtonBase_template_handleVisibilityChange,"data-dropdown-container-id":"menu-button-with-dropdown",className:"menu-button-class",dropContainerClassName:"dropContainerClass",children:"test"}))})};try{MenuButtonBaseTemplate.displayName="MenuButtonBaseTemplate",MenuButtonBaseTemplate.__docgenInfo={description:"",displayName:"MenuButtonBaseTemplate",props:{items:{defaultValue:null,description:"Массив опций",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/stories/MenuButtonBase.template.tsx#MenuButtonBaseTemplate"]={docgenInfo:MenuButtonBaseTemplate.__docgenInfo,name:"MenuButtonBaseTemplate",path:"src/components/MenuButton/stories/MenuButtonBase.template.tsx#MenuButtonBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuActionsPanel=__webpack_require__("./src/components/Menu/MenuActionsPanel.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx");function MenuButtonOptions_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuButtonOptions_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuButtonOptions_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuButtonOptions_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuButtonOptions_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButtonOptions_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuButtonOptions_template_define_property(target,key,source[key])})}return target}function MenuButtonOptions_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuButtonOptions_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuButtonOptions_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuButtonOptions_template_sliced_to_array(arr,i){return MenuButtonOptions_template_array_with_holes(arr)||MenuButtonOptions_template_iterable_to_array_limit(arr,i)||MenuButtonOptions_template_unsupported_iterable_to_array(arr,i)||MenuButtonOptions_template_non_iterable_rest()}function MenuButtonOptions_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuButtonOptions_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuButtonOptions_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuButtonOptions_template_array_like_to_array(o,minLen)}}function MenuButtonOptions_template_templateObject(){var data=MenuButtonOptions_template_tagged_template_literal([`
  display: flex;
  gap: 8px;
`]);return MenuButtonOptions_template_templateObject=function _templateObject(){return data},data}var ActionPanelFlex=(0,styled_components_browser_esm.AH)(MenuButtonOptions_template_templateObject()),MenuButtonOptions_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},MenuButtonOptions_template_logSelectedId=function(id){console.log("selected: ".concat(id))},MenuButtonOptions_template_items=[{id:"1",display:"Option one"},{id:"2",display:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",width:"115px",justifyContent:"space-between",alignItems:"center"},children:[(0,jsx_runtime.jsx)(MinusCircleOutline.h,{width:20,height:20}),"Option two"]}),disabled:!0},{id:"3",display:"Option three"},{id:"4",display:"Option four"}],MenuButtonOptionsTemplate=function(props){var _React_useState=MenuButtonOptions_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],model=react.useMemo(function(){return MenuButtonOptions_template_items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,MenuButtonOptions_template_object_spread_props(MenuButtonOptions_template_object_spread({dimension:"xl"===props.dimension?"l":props.dimension},items),{key:item.id}),item.display)},disabled:item.disabled}})},[props.dimension]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonOptions_template_object_spread_props(MenuButtonOptions_template_object_spread({},props),{selected:selected,onSelectItem:function(id){MenuButtonOptions_template_logSelectedId(id),setSelected(id)},items:model,onVisibilityChange:MenuButtonOptions_template_handleVisibilityChange,renderBottomPanel:function(param){var dimension=param.dimension,_param_menuActionsPanelCssMixin=param.menuActionsPanelCssMixin;return(0,jsx_runtime.jsxs)(MenuActionsPanel.t,{dimension:dimension,menuActionsPanelCssMixin:void 0===_param_menuActionsPanelCssMixin?ActionPanelFlex:_param_menuActionsPanelCssMixin,children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){console.log("Button 1 clicked")},children:"Action 1"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"secondary",onClick:function(){console.log("Button 2 clicked")},children:"Action 2"})]})},children:"test"}))})};try{MenuButtonOptionsTemplate.displayName="MenuButtonOptionsTemplate",MenuButtonOptionsTemplate.__docgenInfo={description:"",displayName:"MenuButtonOptionsTemplate",props:{items:{defaultValue:null,description:"Массив опций",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/stories/MenuButtonOptions.template.tsx#MenuButtonOptionsTemplate"]={docgenInfo:MenuButtonOptionsTemplate.__docgenInfo,name:"MenuButtonOptionsTemplate",path:"src/components/MenuButton/stories/MenuButtonOptions.template.tsx#MenuButtonOptionsTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuButtonVariants_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuButtonVariants_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuButtonVariants_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuButtonVariants_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuButtonVariants_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButtonVariants_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuButtonVariants_template_define_property(target,key,source[key])})}return target}function MenuButtonVariants_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuButtonVariants_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuButtonVariants_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuButtonVariants_template_sliced_to_array(arr,i){return MenuButtonVariants_template_array_with_holes(arr)||MenuButtonVariants_template_iterable_to_array_limit(arr,i)||MenuButtonVariants_template_unsupported_iterable_to_array(arr,i)||MenuButtonVariants_template_non_iterable_rest()}function MenuButtonVariants_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuButtonVariants_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuButtonVariants_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuButtonVariants_template_array_like_to_array(o,minLen)}}function MenuButtonVariants_template_templateObject(){var data=MenuButtonVariants_template_tagged_template_literal([`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    `,`
  );
  padding: 2px;
`]);return MenuButtonVariants_template_templateObject=function _templateObject(){return data},data}function MenuButtonVariants_template_templateObject1(){var data=MenuButtonVariants_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`]);return MenuButtonVariants_template_templateObject1=function _templateObject(){return data},data}function MenuButtonVariants_template_templateObject2(){var data=MenuButtonVariants_template_tagged_template_literal([`
  display: flex;
`]);return MenuButtonVariants_template_templateObject2=function _templateObject(){return data},data}function MenuButtonVariants_template_templateObject3(){var data=MenuButtonVariants_template_tagged_template_literal([`
  height: 20px;
  width: 20px;
`]);return MenuButtonVariants_template_templateObject3=function _templateObject(){return data},data}var MenuButtonVariants_template_DarkDiv=styled_components_browser_esm.Ay.div(MenuButtonVariants_template_templateObject(),function(p){return p.theme.color["Special/Dark Static Neutral 00"]}),MenuButtonVariants_template_WrapperVertical=styled_components_browser_esm.Ay.div(MenuButtonVariants_template_templateObject1()),MenuButtonVariants_template_Wrapper=styled_components_browser_esm.Ay.div(MenuButtonVariants_template_templateObject2()),MenuButtonVariants_template_Separator=styled_components_browser_esm.Ay.div(MenuButtonVariants_template_templateObject3()),MenuButtonVariants_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},MenuButtonVariants_template_logSelectedId=function(id){console.log("selected: ".concat(id))},MenuButtonVariants_template_items=[{id:"1",display:"Option one"},{id:"2",display:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",width:"115px",justifyContent:"space-between",alignItems:"center"},children:[(0,jsx_runtime.jsx)(MinusCircleOutline.h,{width:20,height:20}),"Option two"]}),disabled:!0},{id:"3",display:"Option three"},{id:"4",display:"Option four"}],MenuButtonVariantsTemplate=function(props){var _React_useState=MenuButtonVariants_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],modelL=react.useMemo(function(){return MenuButtonVariants_template_items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({dimension:"l"},items),{key:item.id}),item.display)},disabled:item.disabled}})},[]),modelM=react.useMemo(function(){return MenuButtonVariants_template_items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({dimension:"m"},items),{key:item.id}),item.display)},disabled:item.disabled}})},[]),modelS=react.useMemo(function(){return MenuButtonVariants_template_items.map(function(item){return{id:item.id,render:function(items){return(0,react.createElement)(MenuItem.D,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({dimension:"s"},items),{key:item.id}),item.display)},disabled:item.disabled}})},[]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(MenuButtonVariants_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(MenuButtonVariants_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size XL"}),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"xl",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"xl",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"xl",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"xl",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"xl",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"xl",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"xl",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))}),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"xl",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))})]}),(0,jsx_runtime.jsx)(MenuButtonVariants_template_Separator,{}),(0,jsx_runtime.jsxs)(MenuButtonVariants_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size L"}),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"l",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"l",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"l",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"l",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"l",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"l",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"l",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))}),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"l",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelL,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))})]}),(0,jsx_runtime.jsx)(MenuButtonVariants_template_Separator,{}),(0,jsx_runtime.jsxs)(MenuButtonVariants_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size M"}),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"m",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"m",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"m",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"m",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"m",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"m",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"m",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))}),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"m",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelM,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))})]}),(0,jsx_runtime.jsx)(MenuButtonVariants_template_Separator,{}),(0,jsx_runtime.jsxs)(MenuButtonVariants_template_WrapperVertical,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Size S"}),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"s",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"primary",dimension:"s",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"s",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"secondary",dimension:"s",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"s",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"ghost",dimension:"s",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"})),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"s",selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))}),(0,jsx_runtime.jsx)(MenuButtonVariants_template_DarkDiv,{children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonVariants_template_object_spread_props(MenuButtonVariants_template_object_spread({},props),{appearance:"white",dimension:"s",loading:!0,selected:selected,onSelectItem:function(id){MenuButtonVariants_template_logSelectedId(id),setSelected(id)},items:modelS,onVisibilityChange:MenuButtonVariants_template_handleVisibilityChange,children:"Button 56"}))})]})]})})};try{MenuButtonVariantsTemplate.displayName="MenuButtonVariantsTemplate",MenuButtonVariantsTemplate.__docgenInfo={description:"",displayName:"MenuButtonVariantsTemplate",props:{items:{defaultValue:null,description:"Массив опций",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/stories/MenuButtonVariants.template.tsx#MenuButtonVariantsTemplate"]={docgenInfo:MenuButtonVariantsTemplate.__docgenInfo,name:"MenuButtonVariantsTemplate",path:"src/components/MenuButton/stories/MenuButtonVariants.template.tsx#MenuButtonVariantsTemplate"})}catch(__react_docgen_typescript_loader_error){}var MenuItemWithCheckbox=__webpack_require__("./src/components/Menu/MenuItemWithCheckbox.tsx");function MenuButtonWithBottomPanel_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuButtonWithBottomPanel_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return MenuButtonWithBottomPanel_template_array_like_to_array(arr)}function MenuButtonWithBottomPanel_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function MenuButtonWithBottomPanel_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuButtonWithBottomPanel_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButtonWithBottomPanel_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuButtonWithBottomPanel_template_define_property(target,key,source[key])})}return target}function MenuButtonWithBottomPanel_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuButtonWithBottomPanel_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuButtonWithBottomPanel_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuButtonWithBottomPanel_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuButtonWithBottomPanel_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuButtonWithBottomPanel_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuButtonWithBottomPanel_template_sliced_to_array(arr,i){return MenuButtonWithBottomPanel_template_array_with_holes(arr)||MenuButtonWithBottomPanel_template_iterable_to_array_limit(arr,i)||MenuButtonWithBottomPanel_template_unsupported_iterable_to_array(arr,i)||MenuButtonWithBottomPanel_template_non_iterable_rest()}function MenuButtonWithBottomPanel_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||MenuButtonWithBottomPanel_template_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function MenuButtonWithBottomPanel_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuButtonWithBottomPanel_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuButtonWithBottomPanel_template_array_like_to_array(o,minLen)}}function MenuButtonWithBottomPanel_template_templateObject(){var data=MenuButtonWithBottomPanel_template_tagged_template_literal([`
  display: flex;
  gap: 8px;
`]);return MenuButtonWithBottomPanel_template_templateObject=function _templateObject(){return data},data}var MenuButtonWithBottomPanel_template_ActionPanelFlex=(0,styled_components_browser_esm.AH)(MenuButtonWithBottomPanel_template_templateObject()),itemsWithCheckbox=[{id:"1",label:"Option one"},{id:"2",label:"Option two"},{id:"3",label:"Option three"},{id:"4",label:"Option four"},{id:"5",label:"Option five"},{id:"6",label:"Option six"},{id:"7",label:"Option seven"}],MenuButtonWithBottomPanelTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps;MenuButtonWithBottomPanel_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);var _React_useState=MenuButtonWithBottomPanel_template_sliced_to_array(react.useState(itemsWithCheckbox.map(function(item){return item})),2),innerState=_React_useState[0],setInnerState=_React_useState[1],_React_useState1=MenuButtonWithBottomPanel_template_sliced_to_array(react.useState(innerState[0].id),2),activeOption=_React_useState1[0],setActiveOption=_React_useState1[1],_React_useState2=MenuButtonWithBottomPanel_template_sliced_to_array(react.useState(),2),selectedOption=_React_useState2[0],setSelectedOption=_React_useState2[1],_React_useState3=MenuButtonWithBottomPanel_template_sliced_to_array(react.useState(!1),2),menuVisible=_React_useState3[0],setMenuVisible=_React_useState3[1],model=react.useMemo(function(){return innerState.map(function(item){return{id:item.id,render:function(options){return(0,jsx_runtime.jsx)(MenuItemWithCheckbox.I,MenuButtonWithBottomPanel_template_object_spread_props(MenuButtonWithBottomPanel_template_object_spread({id:item.id,checked:!!item.checked},options),{dimension:"s",children:item.label}),item.id)}}})},[innerState,activeOption]),handleMenuVisibilityChange=function(visible){console.log("user menu visibilty change"),setMenuVisible(visible)};return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(MenuButton.I,{dimension:"s",appearance:"ghost",items:model,active:activeOption,onActivateItem:function(id){setActiveOption(id)},selected:selectedOption,onSelectItem:function(id){console.log("Option ".concat(id," clicked"));var updatedInnerState=_to_consumable_array(innerState),itemToUpdate=updatedInnerState.find(function(item){return item.id===id});itemToUpdate&&(itemToUpdate.checked=!itemToUpdate.checked),setInnerState(updatedInnerState),setSelectedOption(void 0)},disableSelectedOptionHighlight:!0,isVisible:menuVisible,onVisibilityChange:handleMenuVisibilityChange,renderBottomPanel:function(param){var dimension=param.dimension;return(0,jsx_runtime.jsxs)(MenuActionsPanel.t,{dimension:dimension,menuActionsPanelCssMixin:MenuButtonWithBottomPanel_template_ActionPanelFlex,children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){return handleMenuVisibilityChange(!1)},children:"Action 1"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"secondary",onClick:function(){return handleMenuVisibilityChange(!1)},children:"Action 2"})]})},children:"Выберите опцию"})})};try{MenuButtonWithBottomPanelTemplate.displayName="MenuButtonWithBottomPanelTemplate",MenuButtonWithBottomPanelTemplate.__docgenInfo={description:"",displayName:"MenuButtonWithBottomPanelTemplate",props:{items:{defaultValue:null,description:"Массив опций",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/stories/MenuButtonWithBottomPanel.template.tsx#MenuButtonWithBottomPanelTemplate"]={docgenInfo:MenuButtonWithBottomPanelTemplate.__docgenInfo,name:"MenuButtonWithBottomPanelTemplate",path:"src/components/MenuButton/stories/MenuButtonWithBottomPanel.template.tsx#MenuButtonWithBottomPanelTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuButtonWithTopPanel_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuButtonWithTopPanel_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuButtonWithTopPanel_template_array_without_holes(arr){if(Array.isArray(arr))return MenuButtonWithTopPanel_template_array_like_to_array(arr)}function MenuButtonWithTopPanel_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuButtonWithTopPanel_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function MenuButtonWithTopPanel_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuButtonWithTopPanel_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButtonWithTopPanel_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButtonWithTopPanel_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuButtonWithTopPanel_template_define_property(target,key,source[key])})}return target}function MenuButtonWithTopPanel_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuButtonWithTopPanel_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuButtonWithTopPanel_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuButtonWithTopPanel_template_sliced_to_array(arr,i){return MenuButtonWithTopPanel_template_array_with_holes(arr)||MenuButtonWithTopPanel_template_iterable_to_array_limit(arr,i)||MenuButtonWithTopPanel_template_unsupported_iterable_to_array(arr,i)||MenuButtonWithTopPanel_template_non_iterable_rest()}function MenuButtonWithTopPanel_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function MenuButtonWithTopPanel_template_to_consumable_array(arr){return MenuButtonWithTopPanel_template_array_without_holes(arr)||MenuButtonWithTopPanel_template_iterable_to_array(arr)||MenuButtonWithTopPanel_template_unsupported_iterable_to_array(arr)||MenuButtonWithTopPanel_template_non_iterable_spread()}function MenuButtonWithTopPanel_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuButtonWithTopPanel_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuButtonWithTopPanel_template_array_like_to_array(o,minLen)}}function MenuButtonWithTopPanel_template_templateObject(){var data=MenuButtonWithTopPanel_template_tagged_template_literal([`
  display: flex;
  gap: 8px;
`]);return MenuButtonWithTopPanel_template_templateObject=function _templateObject(){return data},data}var MenuButtonWithTopPanel_template_ActionPanelFlex=(0,styled_components_browser_esm.AH)(MenuButtonWithTopPanel_template_templateObject()),MenuButtonWithTopPanel_template_itemsWithCheckbox=[{id:"1",label:"Option one"},{id:"2",label:"Option two"},{id:"3",label:"Option three"},{id:"4",label:"Option four"},{id:"5",label:"Option five"},{id:"6",label:"Option six"},{id:"7",label:"Option seven"}],MenuButtonWithTopPanelTemplate=function(param){var themeBorderKind=param.themeBorderKind,CSSCustomProps=param.CSSCustomProps,_React_useState=MenuButtonWithTopPanel_template_sliced_to_array(react.useState(MenuButtonWithTopPanel_template_itemsWithCheckbox.map(function(item){return item})),2),innerState=_React_useState[0],setInnerState=_React_useState[1],_React_useState1=MenuButtonWithTopPanel_template_sliced_to_array(react.useState(innerState[0].id),2),activeOption=_React_useState1[0],setActiveOption=_React_useState1[1],_React_useState2=MenuButtonWithTopPanel_template_sliced_to_array(react.useState(),2),selectedOption=_React_useState2[0],setSelectedOption=_React_useState2[1],_React_useState3=MenuButtonWithTopPanel_template_sliced_to_array(react.useState(!1),2),menuVisible=_React_useState3[0],setMenuVisible=_React_useState3[1],model=react.useMemo(function(){return innerState.map(function(item){return{id:item.id,render:function(options){return(0,jsx_runtime.jsx)(MenuItemWithCheckbox.I,MenuButtonWithTopPanel_template_object_spread_props(MenuButtonWithTopPanel_template_object_spread({id:item.id,checked:!!item.checked},options),{dimension:"s",children:item.label}),item.id)}}})},[innerState,activeOption]),handleMenuVisibilityChange=function(visible){console.log("user menu visibilty change"),setMenuVisible(visible)};return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(MenuButton.I,{dimension:"s",appearance:"secondary",items:model,active:activeOption,onActivateItem:function(id){setActiveOption(id)},selected:selectedOption,onSelectItem:function(id){console.log("Option ".concat(id," clicked"));var updatedInnerState=MenuButtonWithTopPanel_template_to_consumable_array(innerState),itemToUpdate=updatedInnerState.find(function(item){return item.id===id});itemToUpdate&&(itemToUpdate.checked=!itemToUpdate.checked),setInnerState(updatedInnerState),setSelectedOption(void 0)},disableSelectedOptionHighlight:!0,isVisible:menuVisible,onVisibilityChange:handleMenuVisibilityChange,renderTopPanel:function(param){var dimension=param.dimension;return(0,jsx_runtime.jsxs)(MenuActionsPanel.t,{dimension:dimension,menuActionsPanelCssMixin:MenuButtonWithTopPanel_template_ActionPanelFlex,children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){return handleMenuVisibilityChange(!1)},children:"Action 1"}),(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",appearance:"secondary",onClick:function(){return handleMenuVisibilityChange(!1)},children:"Action 2"})]})},children:"Выберите опцию"})})};try{MenuButtonWithTopPanelTemplate.displayName="MenuButtonWithTopPanelTemplate",MenuButtonWithTopPanelTemplate.__docgenInfo={description:"",displayName:"MenuButtonWithTopPanelTemplate",props:{items:{defaultValue:null,description:"Массив опций",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/stories/MenuButtonWithTopPanel.template.tsx#MenuButtonWithTopPanelTemplate"]={docgenInfo:MenuButtonWithTopPanelTemplate.__docgenInfo,name:"MenuButtonWithTopPanelTemplate",path:"src/components/MenuButton/stories/MenuButtonWithTopPanel.template.tsx#MenuButtonWithTopPanelTemplate"})}catch(__react_docgen_typescript_loader_error){}function MenuButtonMultiLevel_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuButtonMultiLevel_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuButtonMultiLevel_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuButtonMultiLevel_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuButtonMultiLevel_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButtonMultiLevel_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuButtonMultiLevel_template_define_property(target,key,source[key])})}return target}function MenuButtonMultiLevel_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuButtonMultiLevel_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuButtonMultiLevel_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuButtonMultiLevel_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=MenuButtonMultiLevel_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function MenuButtonMultiLevel_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function MenuButtonMultiLevel_template_sliced_to_array(arr,i){return MenuButtonMultiLevel_template_array_with_holes(arr)||MenuButtonMultiLevel_template_iterable_to_array_limit(arr,i)||MenuButtonMultiLevel_template_unsupported_iterable_to_array(arr,i)||MenuButtonMultiLevel_template_non_iterable_rest()}function MenuButtonMultiLevel_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuButtonMultiLevel_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuButtonMultiLevel_template_array_like_to_array(o,minLen)}}var MenuButtonMultiLevel_template_handleVisibilityChange=function(isVisible){isVisible?console.log("Menu opened"):console.log("Menu closed")},MenuButtonMultiLevel_template_logSelectedId=function(id){console.log("selected: ".concat(id))},MenuButtonMultiLevel_template_items=[{id:"1",label:"Option with submenu",value:1,children:[{id:"1-1",label:"SubOption with long text 1-1",value:11},{id:"1-2",label:"SubOption 1-2",value:12,disabled:!0},{id:"1-3",label:"SubOption 1-3",value:13}]},{id:"2",label:"Disabled option",value:2,disabled:!0},{id:"3",label:"Option three",value:3},{id:"4",label:"Option four",value:4},{id:"5",label:"Readonly option",readOnly:!0,value:5}],MenuButtonMultiLevelTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=MenuButtonMultiLevel_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=MenuButtonMultiLevel_template_sliced_to_array(react.useState(void 0),2),selected=_React_useState[0],setSelected=_React_useState[1],convertStoryItem=function(storyItem){var _storyItem_children,id=storyItem.id,label=storyItem.label,item=MenuButtonMultiLevel_template_object_spread({id:id,render:function(options){return(0,react.createElement)(MenuItem.D,MenuButtonMultiLevel_template_object_spread_props(MenuButtonMultiLevel_template_object_spread({dimension:"xl"===props.dimension?"l":props.dimension},options),{key:id}),label)}},MenuButtonMultiLevel_template_object_without_properties(storyItem,["id","label"]));return storyItem.children&&(item.subItems=null==(_storyItem_children=storyItem.children)?void 0:_storyItem_children.map(function(child){return convertStoryItem(child)})),item},model=react.useMemo(function(){return MenuButtonMultiLevel_template_items.map(function(item){return convertStoryItem(item)})},[props.dimension]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(MenuButton.I,MenuButtonMultiLevel_template_object_spread_props(MenuButtonMultiLevel_template_object_spread({},props),{selected:selected,onSelectItem:function(id){MenuButtonMultiLevel_template_logSelectedId(id),setSelected(id)},items:model,onVisibilityChange:MenuButtonMultiLevel_template_handleVisibilityChange,"data-dropdown-container-id":"menu-button-with-dropdown",className:"menu-button-class",dropContainerClassName:"dropContainerClass",children:"Button with multilevel menu"}))})};try{MenuButtonMultiLevelTemplate.displayName="MenuButtonMultiLevelTemplate",MenuButtonMultiLevelTemplate.__docgenInfo={description:"",displayName:"MenuButtonMultiLevelTemplate",props:{items:{defaultValue:null,description:"Массив опций",name:"items",required:!0,type:{name:"MenuModelItemProps[]"}},selected:{defaultValue:null,description:"Выбранная опция",name:"selected",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onSelectItem

Колбек на изменение выбранной опции`,name:"onChange",required:!1,type:{name:"((id: string) => void)"}},onOpen:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на открытие меню`,name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
Взамен используйте onVisibilityChange

Колбек на закрытие меню`,name:"onClose",required:!1,type:{name:"(() => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"white"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Состояние loading",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"Активная секция Menu",name:"active",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик активации (hover) item в меню",name:"onActivateItem",required:!1,type:{name:"((id?: string) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора item в меню",name:"onSelectItem",required:!1,type:{name:"((id: string) => void)"}},renderTopPanel:{defaultValue:null,description:"Позволяет добавить панель сверху над выпадающим списком",name:"renderTopPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под выпадающим списком",name:"renderBottomPanel",required:!1,type:{name:"((props: RenderPanelProps) => ReactNode)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},disableSelectedOptionHighlight:{defaultValue:null,description:`Возможность отключить подсветку выбранной опции
(например, при множественном выборе, когда у каждой опции есть Checkbox)`,name:"disableSelectedOptionHighlight",required:!1,type:{name:"boolean"}},onForwardCycleApprove:{defaultValue:null,description:"",name:"onForwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onBackwardCycleApprove:{defaultValue:null,description:"",name:"onBackwardCycleApprove",required:!1,type:{name:"(() => boolean)"}},onClickOutside:{defaultValue:null,description:"Позволяет обработать событие при клике вне компонента",name:"onClickOutside",required:!1,type:{name:"((e: Event) => void)"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/stories/MenuButtonMultiLevel.template.tsx#MenuButtonMultiLevelTemplate"]={docgenInfo:MenuButtonMultiLevelTemplate.__docgenInfo,name:"MenuButtonMultiLevelTemplate",path:"src/components/MenuButton/stories/MenuButtonMultiLevel.template.tsx#MenuButtonMultiLevelTemplate"})}catch(__react_docgen_typescript_loader_error){}let MenuButtonIcon_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { MenuButton, MenuItem, T } from '@admiral-ds/react-ui';
import type { MenuButtonProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
\`;

const Wrapper = styled.div\`
  display: flex;
\`;

const Separator = styled.div\`
  height: 20px;
  width: 20px;
\`;

const DarkDiv = styled.div\`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    \${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
\`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
    disabled: true,
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
];

export const MenuButtonIconTemplate = (props: MenuButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const modelL = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="l" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="m" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelS = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="s" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);

  return (
    <>
      <Wrapper>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size XL
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="xl"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size L
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="l"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size M
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="m"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelM}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size S
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
            iconStart={<StarSolid />}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="s"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelS}
              onVisibilityChange={handleVisibilityChange}
              iconStart={<StarSolid />}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
      </Wrapper>
    </>
  );
};
`,MenuButtonBase_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { MenuButton, MenuItem } from '@admiral-ds/react-ui';
import type { MenuButtonProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

export const MenuButtonBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={props.dimension === 'xl' ? 'l' : props.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <MenuButton
        {...props}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        items={model}
        onVisibilityChange={handleVisibilityChange}
        data-dropdown-container-id="menu-button-with-dropdown"
        className="menu-button-class"
        dropContainerClassName="dropContainerClass"
      >
        test
      </MenuButton>
    </ThemeProvider>
  );
};
`,MenuButtonOptions_templateraw_namespaceObject=`import * as React from 'react';
import { css } from 'styled-components';

import { Button, MenuActionsPanel, MenuButton, MenuItem } from '@admiral-ds/react-ui';
import type { MenuButtonProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const ActionPanelFlex = css\`
  display: flex;
  gap: 8px;
\`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
    disabled: true,
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
];

export const MenuButtonOptionsTemplate = (props: MenuButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={props.dimension === 'xl' ? 'l' : props.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [props.dimension]);

  return (
    <>
      <MenuButton
        {...props}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        items={model}
        onVisibilityChange={handleVisibilityChange}
        renderBottomPanel={({ dimension, menuActionsPanelCssMixin = ActionPanelFlex }) => {
          return (
            <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={menuActionsPanelCssMixin}>
              <Button
                dimension={'s'}
                onClick={() => {
                  // eslint-disable-next-line no-console
                  console.log('Button 1 clicked');
                }}
              >
                Action 1
              </Button>
              <Button
                dimension={'s'}
                appearance="secondary"
                onClick={() => {
                  // eslint-disable-next-line no-console
                  console.log('Button 2 clicked');
                }}
              >
                Action 2
              </Button>
            </MenuActionsPanel>
          );
        }}
      >
        test
      </MenuButton>
    </>
  );
};
`,MenuButtonVariants_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { MenuButton, MenuItem, T } from '@admiral-ds/react-ui';
import type { MenuButtonProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const DarkDiv = styled.div\`
  background-color: var(
    --admiral-color-Special_DarkStaticNeutral00,
    \${(p) => p.theme.color['Special/Dark Static Neutral 00']}
  );
  padding: 2px;
\`;

const WrapperVertical = styled.div\`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
\`;

const Wrapper = styled.div\`
  display: flex;
\`;

const Separator = styled.div\`
  height: 20px;
  width: 20px;
\`;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: (
      <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
        <MinusCircleOutline width={20} height={20} />
        Option two
      </div>
    ),
    disabled: true,
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
];
export const MenuButtonVariantsTemplate = (props: MenuButtonProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const modelL = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="l" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="m" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelS = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="s" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);

  return (
    <>
      <Wrapper>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size XL
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="xl"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="xl"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="xl"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="xl"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="xl"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size L
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="l"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="l"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="l"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="l"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="l"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size M
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="m"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="m"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="m"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="m"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelM}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="m"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelM}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size S
          </T>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="primary"
            dimension="s"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="secondary"
            dimension="s"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...props}
            appearance="ghost"
            dimension="s"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="s"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelS}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...props}
              appearance="white"
              dimension="s"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelS}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
      </Wrapper>
    </>
  );
};
`,MenuButtonWithBottomPanel_templateraw_namespaceObject=`import * as React from 'react';
import { css, ThemeProvider } from 'styled-components';

import { Button, MenuActionsPanel, MenuButton, MenuItemWithCheckbox } from '@admiral-ds/react-ui';
import type {
  MenuButtonProps,
  ItemWithCheckbox,
  RenderOptionProps,
  RenderPanelProps,
  BorderRadiusType,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ActionPanelFlex = css\`
  display: flex;
  gap: 8px;
\`;

const itemsWithCheckbox: Array<ItemWithCheckbox> = [
  {
    id: '1',
    label: 'Option one',
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

export const MenuButtonWithBottomPanelTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ..._props
}: MenuButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [innerState, setInnerState] = React.useState<Array<ItemWithCheckbox>>(itemsWithCheckbox.map((item) => item));
  const [activeOption, setActiveOption] = React.useState<string | undefined>(innerState[0].id);
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>();
  const [menuVisible, setMenuVisible] = React.useState<boolean>(false);

  const model = React.useMemo(() => {
    return innerState.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox key={item.id} id={item.id} checked={!!item.checked} {...options} dimension="s">
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [innerState, activeOption]);

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(\`Option \${id} clicked\`);
    const updatedInnerState = [...innerState];
    const itemToUpdate = updatedInnerState.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.checked = !itemToUpdate.checked;
    }
    setInnerState(updatedInnerState);
    setSelectedOption(undefined);
  };

  const handleMenuVisibilityChange = (visible: boolean) => {
    // eslint-disable-next-line no-console
    console.log('user menu visibilty change');
    setMenuVisible(visible);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <MenuButton
        dimension="s"
        appearance="ghost"
        items={model}
        active={activeOption}
        onActivateItem={handleActivateItem}
        selected={selectedOption}
        onSelectItem={handleSelectItem}
        disableSelectedOptionHighlight={true}
        isVisible={menuVisible}
        onVisibilityChange={handleMenuVisibilityChange}
        renderBottomPanel={({ dimension }: RenderPanelProps) => (
          <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={ActionPanelFlex}>
            <Button dimension="s" onClick={() => handleMenuVisibilityChange(false)}>
              Action 1
            </Button>
            <Button dimension="s" appearance="secondary" onClick={() => handleMenuVisibilityChange(false)}>
              Action 2
            </Button>
          </MenuActionsPanel>
        )}
      >
        Выберите опцию
      </MenuButton>
    </ThemeProvider>
  );
};
`,MenuButtonWithTopPanel_templateraw_namespaceObject=`import * as React from 'react';
import { css, ThemeProvider } from 'styled-components';

import { Button, MenuActionsPanel, MenuButton, MenuItemWithCheckbox } from '@admiral-ds/react-ui';
import type {
  MenuButtonProps,
  ItemWithCheckbox,
  RenderOptionProps,
  RenderPanelProps,
  BorderRadiusType,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const ActionPanelFlex = css\`
  display: flex;
  gap: 8px;
\`;

const itemsWithCheckbox: Array<ItemWithCheckbox> = [
  {
    id: '1',
    label: 'Option one',
  },
  {
    id: '2',
    label: 'Option two',
  },
  {
    id: '3',
    label: 'Option three',
  },
  {
    id: '4',
    label: 'Option four',
  },
  {
    id: '5',
    label: 'Option five',
  },
  {
    id: '6',
    label: 'Option six',
  },
  {
    id: '7',
    label: 'Option seven',
  },
];

export const MenuButtonWithTopPanelTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: MenuButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [innerState, setInnerState] = React.useState<Array<ItemWithCheckbox>>(itemsWithCheckbox.map((item) => item));
  const [activeOption, setActiveOption] = React.useState<string | undefined>(innerState[0].id);
  const [selectedOption, setSelectedOption] = React.useState<string | undefined>();
  const [menuVisible, setMenuVisible] = React.useState<boolean>(false);

  const model = React.useMemo(() => {
    return innerState.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox key={item.id} id={item.id} checked={!!item.checked} {...options} dimension="s">
          {item.label}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [innerState, activeOption]);

  const handleActivateItem = (id: string | undefined) => {
    setActiveOption(id);
  };

  const handleSelectItem = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(\`Option \${id} clicked\`);
    const updatedInnerState = [...innerState];
    const itemToUpdate = updatedInnerState.find((item) => item.id === id);
    if (itemToUpdate) {
      itemToUpdate.checked = !itemToUpdate.checked;
    }
    setInnerState(updatedInnerState);
    setSelectedOption(undefined);
  };

  const handleMenuVisibilityChange = (visible: boolean) => {
    // eslint-disable-next-line no-console
    console.log('user menu visibilty change');
    setMenuVisible(visible);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <MenuButton
        dimension="s"
        appearance="secondary"
        items={model}
        active={activeOption}
        onActivateItem={handleActivateItem}
        selected={selectedOption}
        onSelectItem={handleSelectItem}
        disableSelectedOptionHighlight={true}
        isVisible={menuVisible}
        onVisibilityChange={handleMenuVisibilityChange}
        renderTopPanel={({ dimension }: RenderPanelProps) => (
          <MenuActionsPanel dimension={dimension} menuActionsPanelCssMixin={ActionPanelFlex}>
            <Button dimension="s" onClick={() => handleMenuVisibilityChange(false)}>
              Action 1
            </Button>
            <Button dimension="s" appearance="secondary" onClick={() => handleMenuVisibilityChange(false)}>
              Action 2
            </Button>
          </MenuActionsPanel>
        )}
      >
        Выберите опцию
      </MenuButton>
    </ThemeProvider>
  );
};
`,MenuButtonMultiLevel_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { MenuButton, MenuItem } from '@admiral-ds/react-ui';
import type { MenuButtonProps, RenderOptionProps, BorderRadiusType, MenuModelItemProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    // eslint-disable-next-line no-console
    console.log('Menu opened');
  } else {
    // eslint-disable-next-line no-console
    console.log('Menu closed');
  }
};

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
  children?: Array<StoryItem>;
};

const logSelectedId = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`selected: \${id}\`);
};

const items: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option with submenu',
    value: 1,
    children: [
      {
        id: '1-1',
        label: 'SubOption with long text 1-1',
        value: 11,
      },
      {
        id: '1-2',
        label: 'SubOption 1-2',
        value: 12,
        disabled: true,
      },
      {
        id: '1-3',
        label: 'SubOption 1-3',
        value: 13,
      },
    ],
  },
  {
    id: '2',
    label: 'Disabled option',
    value: 2,
    disabled: true,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Readonly option',
    readOnly: true,
    value: 5,
  },
];

export const MenuButtonMultiLevelTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: MenuButtonProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  const convertStoryItem = (storyItem: StoryItem): MenuModelItemProps => {
    const { id, label, ...restProps } = storyItem;

    const item: MenuModelItemProps = {
      id: id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={props.dimension === 'xl' ? 'l' : props.dimension} {...options} key={id}>
          {label}
        </MenuItem>
      ),
      ...restProps,
    };

    if (storyItem.children) {
      item.subItems = storyItem.children?.map((child) => convertStoryItem(child));
    }

    return item;
  };

  const model = React.useMemo(() => {
    return items.map((item) => convertStoryItem(item));
  }, [props.dimension]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <MenuButton
        {...props}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        items={model}
        onVisibilityChange={handleVisibilityChange}
        data-dropdown-container-id="menu-button-with-dropdown"
        className="menu-button-class"
        dropContainerClassName="dropContainerClass"
      >
        Button with multilevel menu
      </MenuButton>
    </ThemeProvider>
  );
};
`;function MenuButton_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function MenuButton_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function MenuButton_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function MenuButton_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function MenuButton_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function MenuButton_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){MenuButton_stories_define_property(target,key,source[key])})}return target}function MenuButton_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function MenuButton_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MenuButton_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function MenuButton_stories_sliced_to_array(arr,i){return MenuButton_stories_array_with_holes(arr)||MenuButton_stories_iterable_to_array_limit(arr,i)||MenuButton_stories_unsupported_iterable_to_array(arr,i)||MenuButton_stories_non_iterable_rest()}function MenuButton_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return MenuButton_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return MenuButton_stories_array_like_to_array(o,minLen)}}let MenuButton_stories={title:"Admiral-2.1/MenuButton",decorators:void 0,component:MenuButton.I,parameters:{docs:{source:{code:null}},layout:"centered",design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24517"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24648"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24734"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24784"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24834"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24673"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24759"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24809"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24859"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71085"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71109"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71133"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71157"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71490"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71514"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11005%3A69548"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69703"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69794"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69881"}]},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},appearance:{options:["primary","secondary","tertiary","ghost","white"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},disableSelectedOptionHighlight:{control:{type:"boolean"}},isVisible:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},skeleton:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},alignSelf:{options:[void 0,"auto","flex-start","flex-end","center","baseline","stretch"],control:{type:"select"}},items:{control:!1},selected:{control:!1},active:{control:!1},menuWidth:{control:{type:"text"}},menuMaxHeight:{control:!1},buttonCssMixin:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1}}};var MenuButtonBase={render:function(props){var CSSCustomProps=MenuButton_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuButtonBaseTemplate,MenuButton_stories_object_spread_props(MenuButton_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuButtonBase_templateraw_namespaceObject}}},name:"MenuButton. Базовый пример."},MenuButtonOptions={render:function(props){return(0,jsx_runtime.jsx)(MenuButtonOptionsTemplate,MenuButton_stories_object_spread({},props))},parameters:{docs:{source:{code:MenuButtonOptions_templateraw_namespaceObject}}},name:"MenuButton. Задизейбленные и кастомизированные опции и панель с кнопками"},MenuButtonVariants={render:function(props){return(0,jsx_runtime.jsx)(MenuButtonVariantsTemplate,MenuButton_stories_object_spread({},props))},parameters:{docs:{source:{code:MenuButtonVariants_templateraw_namespaceObject}}},name:"MenuButton. Размеры и стили."},MenuButtonIcon={render:function(props){return(0,jsx_runtime.jsx)(MenuButtonIconTemplate,MenuButton_stories_object_spread({},props))},parameters:{docs:{source:{code:MenuButtonIcon_templateraw_namespaceObject}}},name:"MenuButton с иконкой"},MenuButtonWithBottomPanel={render:function(props){var CSSCustomProps=MenuButton_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuButtonWithBottomPanelTemplate,MenuButton_stories_object_spread_props(MenuButton_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuButtonWithBottomPanel_templateraw_namespaceObject}}},name:"MenuButton с чекбоксами и нижней панелью в выпадающем меню"},MenuButtonWithTopPanel={render:function(props){var CSSCustomProps=MenuButton_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuButtonWithTopPanelTemplate,MenuButton_stories_object_spread_props(MenuButton_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuButtonWithTopPanel_templateraw_namespaceObject}}},name:"MenuButton с чекбоксами и верхней панелью в выпадающем меню"},MenuButtonMultiLevel={render:function(props){var CSSCustomProps=MenuButton_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(MenuButtonMultiLevelTemplate,MenuButton_stories_object_spread_props(MenuButton_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:MenuButtonMultiLevel_templateraw_namespaceObject}}},name:"MenuButton с многоуровневым меню"};MenuButtonBase.parameters={...MenuButtonBase.parameters,docs:{...MenuButtonBase.parameters?.docs,source:{originalSource:`{
  render: MenuButtonBaseStory,
  parameters: {
    docs: {
      source: {
        code: MenuButtonBaseRaw
      }
    }
  },
  name: 'MenuButton. Базовый пример.'
}`,...MenuButtonBase.parameters?.docs?.source}}},MenuButtonOptions.parameters={...MenuButtonOptions.parameters,docs:{...MenuButtonOptions.parameters?.docs,source:{originalSource:`{
  render: MenuButtonOptionsStory,
  parameters: {
    docs: {
      source: {
        code: MenuButtonOptionsRaw
      }
    }
  },
  name: 'MenuButton. Задизейбленные и кастомизированные опции и панель с кнопками'
}`,...MenuButtonOptions.parameters?.docs?.source}}},MenuButtonVariants.parameters={...MenuButtonVariants.parameters,docs:{...MenuButtonVariants.parameters?.docs,source:{originalSource:`{
  render: MenuButtonVariantsStory,
  parameters: {
    docs: {
      source: {
        code: MenuButtonVariantsRaw
      }
    }
  },
  name: 'MenuButton. Размеры и стили.'
}`,...MenuButtonVariants.parameters?.docs?.source}}},MenuButtonIcon.parameters={...MenuButtonIcon.parameters,docs:{...MenuButtonIcon.parameters?.docs,source:{originalSource:`{
  render: MenuButtonIconStory,
  parameters: {
    docs: {
      source: {
        code: MenuButtonIconRaw
      }
    }
  },
  name: 'MenuButton с иконкой'
}`,...MenuButtonIcon.parameters?.docs?.source}}},MenuButtonWithBottomPanel.parameters={...MenuButtonWithBottomPanel.parameters,docs:{...MenuButtonWithBottomPanel.parameters?.docs,source:{originalSource:`{
  render: MenuButtonWithBottomPanelStory,
  parameters: {
    docs: {
      source: {
        code: MenuButtonWithBottomPanelRaw
      }
    }
  },
  name: 'MenuButton с чекбоксами и нижней панелью в выпадающем меню'
}`,...MenuButtonWithBottomPanel.parameters?.docs?.source}}},MenuButtonWithTopPanel.parameters={...MenuButtonWithTopPanel.parameters,docs:{...MenuButtonWithTopPanel.parameters?.docs,source:{originalSource:`{
  render: MenuButtonWithTopPanelStory,
  parameters: {
    docs: {
      source: {
        code: MenuButtonWithTopPanelRaw
      }
    }
  },
  name: 'MenuButton с чекбоксами и верхней панелью в выпадающем меню'
}`,...MenuButtonWithTopPanel.parameters?.docs?.source}}},MenuButtonMultiLevel.parameters={...MenuButtonMultiLevel.parameters,docs:{...MenuButtonMultiLevel.parameters?.docs,source:{originalSource:`{
  render: MenuButtonMultiLevelStory,
  parameters: {
    docs: {
      source: {
        code: MenuButtonMultiLevelRaw
      }
    }
  },
  name: 'MenuButton с многоуровневым меню'
}`,...MenuButtonMultiLevel.parameters?.docs?.source}}};let __namedExportsOrder=["MenuButtonBase","MenuButtonOptions","MenuButtonVariants","MenuButtonIcon","MenuButtonWithBottomPanel","MenuButtonWithTopPanel","MenuButtonMultiLevel"]},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
чтобы избежать возможных конфликтов стилей.`,displayName:"PositionInPortal",props:{targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал",name:"targetElement",required:!0,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});function observeRect(node,cb){var state={};return{observe:function observe(){state.rafId&&cancelAnimationFrame(state.rafId);var run=function(){if(state.isObserving){var a,b,scrollHeight=node.scrollHeight,scrollLeft=node.scrollLeft,scrollTop=node.scrollTop,scrollWidth=node.scrollWidth,_node_getBoundingClientRect=node.getBoundingClientRect(),bottom=_node_getBoundingClientRect.bottom,height=_node_getBoundingClientRect.height,left=_node_getBoundingClientRect.left,right=_node_getBoundingClientRect.right,top=_node_getBoundingClientRect.top,newRect={bottom:bottom,height:height,left:left,right:right,top:top,width:_node_getBoundingClientRect.width,x:_node_getBoundingClientRect.x||left,y:_node_getBoundingClientRect.y||top,scrollHeight:scrollHeight,scrollLeft:scrollLeft,scrollTop:scrollTop,scrollWidth:scrollWidth};a=newRect,b=state.rect||{},Object.keys(a).some(function(prop){return a[prop]!==b[prop]})&&(state.rect=newRect,cb(newRect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve:function unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/getTextHighlightMeta.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>getTextHighlightMeta});var getTextHighlightMeta=function(){var text=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",highlight=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",highlightFormat=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"word",chunks=("word"===highlightFormat?highlight.split(" "):[highlight]).filter(Boolean).map(function(chunk){return chunk.toLowerCase()}),specialCharacters=[".","?","*","+","-","^","$","[","]","\\","(",")","{","}","|"],pattern=chunks.map(function(chunk){var chunkForRegExp=chunk.split("").map(function(letter){return specialCharacters.includes(letter)?"\\".concat(letter):letter}).join("");return"(".concat(chunkForRegExp,")?")}).join(""),parts=text.split(RegExp(pattern,"gi")).filter(Boolean);return{shouldHighlight:!highlight||parts.some(function(part){return chunks.includes(part.toLowerCase())}),parts:parts,chunks:chunks}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-MenuButton-stories-MenuButton-stories.73366a61.iframe.bundle.js.map