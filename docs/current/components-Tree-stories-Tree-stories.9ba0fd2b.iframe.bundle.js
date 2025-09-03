"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1305],{"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
  & *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  `,`

  & > svg {
    height: `,`px;
    width: `,`px;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: `,`px;
  height: `,`px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:focus {
    > `,` {
      background-color: `,`;
    }
  }
  &:hover {
    > `,` {
      background-color: var(--admiral-color-Opacity_Hover, `,`);
    }
  }
  &:active {
    > `,` {
      background-color: var(--admiral-color-Opacity_Press, `,`);
    }
  }
  &:focus-visible {
    > `,` {
      background-color: transparent;
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: relative;
  padding: 0;
  margin: `,`px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: `,`px;
  width: `,`px;
  border-radius: var(--admiral-border-radius-Small, `,`);
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
  &:not(:disabled) {
    `,`
  }
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_3__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_4__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tree/stories/Tree.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo1_Tree:()=>Demo1_Tree,Demo2_Tree:()=>Demo2_Tree,TreeUncontrolledExample:()=>TreeUncontrolledExample,TreeWithControlCheckCountExample:()=>TreeWithControlCheckCountExample,TreeWithOnChangeHandlerExample:()=>TreeWithOnChangeHandlerExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tree_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  width: 768px;
`]);return _templateObject=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject()),itemHasChildren=function(item){return!!item.children&&Array.isArray(item.children)&&item.children.length>0},treeToMap=function(tree){var level=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,indent=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,dependencies=arguments.length>3?arguments[3]:void 0,parent=arguments.length>4?arguments[4]:void 0,levelHasChildren=tree.some(function(item){return itemHasChildren(item)});return tree.reduce(function(acc,item){var key=item.id.toString(),selfIndent=levelHasChildren&&itemHasChildren(item)?indent:indent+1;if(acc[key]={level:level,indent:selfIndent,node:item,parent:parent},dependencies&&dependencies.forEach(function(dependency){return dependency.push(key)}),item.children&&itemHasChildren(item)){var allDependencies=dependencies?_to_consumable_array(dependencies):[],itemDependencies=[];return acc[key].dependencies=itemDependencies,allDependencies.push(itemDependencies),_object_spread({},acc,treeToMap(item.children,level+1,indent+1,allDependencies,key))}return acc},{})},Tree=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,model=_param.model,defaultModel=_param.defaultModel,_param_withCheckbox=_param.withCheckbox,withCheckbox=void 0===_param_withCheckbox||_param_withCheckbox,selected=_param.selected,defaultSelected=_param.defaultSelected,active=_param.active,onActivateItem=_param.onActivateItem,onSelectItem=_param.onSelectItem,onChange=_param.onChange,onMouseLeave=_param.onMouseLeave,onCheckedChange=_param.onCheckedChange,onExpandedChange=_param.onExpandedChange,props=_object_without_properties(_param,["dimension","model","defaultModel","withCheckbox","selected","defaultSelected","active","onActivateItem","onSelectItem","onChange","onMouseLeave","onCheckedChange","onExpandedChange"]),_useState=_sliced_to_array((0,react.useState)(_to_consumable_array(null!=defaultModel?defaultModel:[])),2),internalModel=_useState[0],setInternalModel=_useState[1],_useState1=_sliced_to_array((0,react.useState)(defaultSelected),2),selectedState=_useState1[0],setSelectedState=_useState1[1],modelObject=void 0===model?internalModel:model,selectedId=void 0===selected?selectedState:selected,selectItem=function(id){withCheckbox&&id&&toggleCheck(id),selectedId!==id&&setSelectedState(id),null==onSelectItem||onSelectItem(id)};(0,react.useEffect)(function(){model&&setInternalModel(_to_consumable_array(model))},[model]);var map=(0,react.useMemo)(function(){return treeToMap(null!=model?model:internalModel)},[modelObject]),toggleExpand=function(id){map[id].node.expanded=!map[id].node.expanded,onExpandedChange&&onExpandedChange(Object.entries(map).map(function(param){var _$_param=_sliced_to_array(param,2),key=_$_param[0];return _$_param[1].node.expanded&&key}).filter(function(value){return!!value&&"string"==typeof value})),onChange?onChange(_to_consumable_array(internalModel)):setInternalModel(_to_consumable_array(internalModel)),selectedId!==id&&setSelectedState(id)},setChecked=function(id,value){var _map_id_dependencies,_map_id_dependencies1;!map[id].node.disabled&&(map[id].node.checked=value,(null==(_map_id_dependencies=map[id].dependencies)?void 0:_map_id_dependencies.length)&&(null==(_map_id_dependencies1=map[id].dependencies)||_map_id_dependencies1.forEach(function(depId){return setChecked(depId,value)})))},calculateParentNodeState=function(node){if(node.parent){var _map_id_dependencies,id=node.parent;map[id].node.checked=null==(_map_id_dependencies=map[id].dependencies)?void 0:_map_id_dependencies.every(function(depId){return map[depId].node.checked}),calculateParentNodeState(map[id])}},toggleCheck=function(id){var _map_id_dependencies,_map_id_dependencies1,_map_id_dependencies2,hasChildren=itemHasChildren(map[id].node),indeterminate=(null==(_map_id_dependencies=map[id].dependencies)?void 0:_map_id_dependencies.some(function(depId){return!map[depId].node.disabled&&map[depId].node.checked}))&&(null==(_map_id_dependencies1=map[id].dependencies)?void 0:_map_id_dependencies1.some(function(depId){return!map[depId].node.checked})),checked=hasChildren?!!indeterminate||(null==(_map_id_dependencies2=map[id].dependencies)?void 0:_map_id_dependencies2.every(function(depId){return map[depId].node.checked})):map[id].node.checked;setChecked(id,!checked),calculateParentNodeState(map[id]),onCheckedChange&&onCheckedChange(Object.entries(map).map(function(param){var _$_param=_sliced_to_array(param,2),key=_$_param[0];return!!_$_param[1].node.checked&&key}).filter(function(value){return!!value&&"string"==typeof value})),onChange?onChange(_to_consumable_array(internalModel)):setInternalModel(_to_consumable_array(internalModel))},renderChildren=function(items){return items.map(function(item){var _node_dependencies,_node_dependencies1,_node_dependencies2,node=map[item.id],hasChildren=itemHasChildren(item),indeterminate=(null==(_node_dependencies=node.dependencies)?void 0:_node_dependencies.some(function(depId){return map[depId].node.checked}))&&(null==(_node_dependencies1=node.dependencies)?void 0:_node_dependencies1.some(function(depId){return!map[depId].node.checked})),checked=hasChildren?node.dependencies&&(null==(_node_dependencies2=node.dependencies)?void 0:_node_dependencies2.every(function(depId){return map[depId].node.checked})):!!item.checked;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[item.render({checked:checked,indeterminate:indeterminate,hasChildren:hasChildren,level:node.level,indent:node.indent,disabled:item.disabled,dimension:dimension,expanded:item.expanded,checkboxVisible:withCheckbox,hovered:void 0!==active?active===item.id:void 0,selected:selectedId===item.id,onHover:function(){null==onActivateItem||onActivateItem(item.disabled?null:item.id)},onClick:function(){return selectItem(item.id)},onToggleExpand:function(){return toggleExpand(item.id)}}),item.children&&hasChildren&&item.expanded&&renderChildren(item.children)]},item.id)})};return(0,jsx_runtime.jsx)(Wrapper,_object_spread_props(_object_spread({ref:ref},props),{onMouseLeave:function(e){null==onActivateItem||onActivateItem(null),null==onMouseLeave||onMouseLeave(e)},children:renderChildren(modelObject)}))});try{Tree.displayName="Tree",Tree.__docgenInfo={description:"",displayName:"Tree",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},active:{defaultValue:null,description:"Активная секция Tree",name:"active",required:!1,type:{name:"string | null"}},selected:{defaultValue:null,description:"выбранная секция Tree",name:"selected",required:!1,type:{name:"string | null"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Tree",name:"defaultSelected",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onActivateItem",required:!1,type:{name:"((id: string | null) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onSelectItem",required:!1,type:{name:"((id: string | null) => void)"}},onChange:{defaultValue:null,description:"Обработчик изменения данных дерева",name:"onChange",required:!1,type:{name:"((model: TreeItemProps[]) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!1,type:{name:"TreeItemProps[]"}},defaultModel:{defaultValue:null,description:"Модель данных, с рендер-пропсами по-умолчанию для неконтролируемого состояния",name:"defaultModel",required:!1,type:{name:"TreeItemProps[]"}},withCheckbox:{defaultValue:{value:"true"},description:"Признак того, что дерево содержит checkbox-ы",name:"withCheckbox",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"Обработчик изменения состояния выбранных элементов",name:"onCheckedChange",required:!1,type:{name:"((ids: string[]) => void)"}},onExpandedChange:{defaultValue:null,description:"Обработчик открытия/закрытия узла дерева",name:"onExpandedChange",required:!1,type:{name:"((ids: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/index.tsx#Tree"]={docgenInfo:Tree.__docgenInfo,name:"Tree",path:"src/components/Tree/index.tsx#Tree"})}catch(__react_docgen_typescript_loader_error){}try{TreeNode.displayName="TreeNode",TreeNode.__docgenInfo={description:"",displayName:"TreeNode",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},selected:{defaultValue:null,description:"Активная секция Tree",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция Tree",name:"hovered",required:!1,type:{name:"boolean"}},checkboxVisible:{defaultValue:null,description:"Признак отображения checkbox-а",name:"checkboxVisible",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"Значение checkbox-а",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"Неопределенное состояние checkbox-а",name:"indeterminate",required:!1,type:{name:"boolean"}},level:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 6.1.0, будет удалено в версии 9.х.х.
Взамен используйте параметр indent

Уровень дерева item-а`,name:"level",required:!1,type:{name:"number"}},indent:{defaultValue:null,description:"Отступ item-а",name:"indent",required:!1,type:{name:"number"}},hasChildren:{defaultValue:null,description:"Наличие дочерних элемнтов у item-а",name:"hasChildren",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"Признак развернутого состояния item-а",name:"expanded",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},onToggleExpand:{defaultValue:null,description:"обработчик изменения состояния открытости узла",name:"onToggleExpand",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/index.tsx#TreeNode"]={docgenInfo:TreeNode.__docgenInfo,name:"TreeNode",path:"src/components/Tree/index.tsx#TreeNode"})}catch(__react_docgen_typescript_loader_error){}var typography=__webpack_require__("./src/components/Typography/typography.ts"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),ChevronRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronRightOutline.svg"),IconPlacement=__webpack_require__("./src/components/IconPlacement/index.tsx");function TreeNode_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TreeNode_array_with_holes(arr){if(Array.isArray(arr))return arr}function TreeNode_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeNode_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TreeNode_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TreeNode_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeNode_define_property(target,key,source[key])})}return target}function TreeNode_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeNode_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeNode_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeNode_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TreeNode_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TreeNode_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TreeNode_sliced_to_array(arr,i){return TreeNode_array_with_holes(arr)||TreeNode_iterable_to_array_limit(arr,i)||TreeNode_unsupported_iterable_to_array(arr,i)||TreeNode_non_iterable_rest()}function TreeNode_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TreeNode_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TreeNode_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TreeNode_array_like_to_array(o,minLen)}}function TreeNode_templateObject(){var data=TreeNode_tagged_template_literal([`
  transition: all 0.3s;
  & path {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  width: 100%;
  height: 100%;
  transform: `,`;
`]);return TreeNode_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=TreeNode_tagged_template_literal([`
  flex-shrink: 0;
  margin: 0 16px 0 0;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=TreeNode_tagged_template_literal([`
  background: `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=TreeNode_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  `,`;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  min-height: `,`;
  `,`;
  cursor: `,`;
  padding: `,`;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=TreeNode_tagged_template_literal([`
  margin-right: 8px;
  flex-shrink: 0;
  width: `,`;
  height: `,`;
  > svg {
    width: 100%;
    height: 100%;
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=TreeNode_tagged_template_literal([`
  margin-right: 8px;
  flex-shrink: 0;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=TreeNode_tagged_template_literal([`
  padding-top: 2px;
`]);return _templateObject6=function _templateObject(){return data},data}var Chevron=(0,styled_components_browser_esm.Ay)(ChevronRightOutline.h)(TreeNode_templateObject(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.$isOpened?"rotate(90deg)":"rotate(0deg)"}),StyledIconPlacement=(0,styled_components_browser_esm.Ay)(IconPlacement._)(_templateObject1()),backgroundColor=(0,styled_components_browser_esm.AH)(_templateObject2(),function(param){var theme=param.theme,$selected=param.$selected;return param.$hovered?"var(--admiral-color-Opacity_Hover, ".concat(theme.color["Opacity/Hover"],")"):$selected?"var(--admiral-color-Opacity_Focus, ".concat(theme.color["Opacity/Focus"],")"):"var(--admiral-color-Special_ElevatedBG, ".concat(theme.color["Special/Elevated BG"],")")}),RowWrapper=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return"m"===p.$dimension?typography.Il["Body/Body 1 Short"]:typography.Il["Body/Body 2 Short"]},function(param){return"m"===param.$dimension?"40px":"32px"},function(p){return!p.disabled&&backgroundColor},function(p){return p.disabled?"not-allowed":"pointer"},function(p){return"m"===p.$dimension?"8px 16px 8px ".concat(16+40*(p.$indent||0),"px"):"6px 16px 6px ".concat(16+36*(p.$indent||0),"px")}),IconWrapper=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return"m"===p.$dimension?"".concat(24,"px"):"".concat(20,"px")},function(p){return"m"===p.$dimension?"".concat(24,"px"):"".concat(20,"px")},function(p){return p.theme.color["Neutral/Neutral 50"]}),StyledCheckbox=(0,styled_components_browser_esm.Ay)(CheckboxField.Y)(_templateObject5()),TitleContent=styled_components_browser_esm.Ay.div(_templateObject6()),TreeNode_TreeNode=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,label=_param.label,icon=_param.icon,checkboxVisible=_param.checkboxVisible,hasChildren=_param.hasChildren,selected=_param.selected,hovered=_param.hovered,disabled=_param.disabled,expanded=_param.expanded,checked=_param.checked,indeterminate=_param.indeterminate,indent=_param.indent,onChange=(_param.level,_param.onChange),onHover=_param.onHover,onClick=_param.onClick,onToggleExpand=_param.onToggleExpand,children=_param.children,className=_param.className,style=_param.style,props=TreeNode_object_without_properties(_param,["dimension","label","icon","checkboxVisible","hasChildren","selected","hovered","disabled","expanded","checked","indeterminate","indent","level","onChange","onHover","onClick","onToggleExpand","children","className","style"]),Icon=icon||null,_useState=TreeNode_sliced_to_array((0,react.useState)(!1),2),mouseOnChevron=_useState[0],setMouseOnChevron=_useState[1],chevronRef=(0,react.useRef)(null),rowRef=(0,react.useRef)(null),_useState1=TreeNode_sliced_to_array((0,react.useState)(!1),2),hoveredState=_useState1[0],setHoveredState=_useState1[1],hoveredValue=null!=hovered?hovered:hoveredState;return(0,jsx_runtime.jsxs)(RowWrapper,{ref:rowRef,className:className,style:style,$dimension:dimension,$indent:indent,onMouseMove:function(e){var _props_onMouseMove;null==onHover||onHover(),hoveredState||setHoveredState(!0),null==(_props_onMouseMove=props.onMouseMove)||_props_onMouseMove.call(props,e)},onMouseLeave:function(e){var _props_onMouseLeave;setHoveredState(!1),null==(_props_onMouseLeave=props.onMouseLeave)||_props_onMouseLeave.call(props,e)},onClick:function(e){e.target!==chevronRef.current&&(disabled||null==onClick||onClick(e))},$selected:selected,$hovered:hoveredValue,disabled:disabled,children:[hasChildren&&(0,jsx_runtime.jsx)(StyledIconPlacement,{ref:chevronRef,dimension:"m"===dimension?"lBig":"mBig",highlightFocus:!1,onClick:onToggleExpand,onMouseMove:function(){!mouseOnChevron&&hasChildren&&setMouseOnChevron(!0)},onMouseLeave:function(){hasChildren&&setMouseOnChevron(!1)},children:(0,jsx_runtime.jsx)(Chevron,{$isOpened:expanded,"aria-hidden":!0})}),checkboxVisible&&(0,jsx_runtime.jsx)(StyledCheckbox,TreeNode_object_spread_props(TreeNode_object_spread({},props),{hovered:!mouseOnChevron&&hoveredValue,dimension:dimension,disabled:disabled,checked:checked,indeterminate:indeterminate,onChange:function(e){null==onChange||onChange(e.target.checked)}})),Icon&&(0,jsx_runtime.jsx)(IconWrapper,{$dimension:dimension,children:(0,jsx_runtime.jsx)(Icon,{})}),label&&(0,jsx_runtime.jsx)(TitleContent,{children:label}),children]})};try{TreeNode_TreeNode.displayName="TreeNode",TreeNode_TreeNode.__docgenInfo={description:"",displayName:"TreeNode",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},selected:{defaultValue:null,description:"Активная секция Tree",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция Tree",name:"hovered",required:!1,type:{name:"boolean"}},checkboxVisible:{defaultValue:null,description:"Признак отображения checkbox-а",name:"checkboxVisible",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"Значение checkbox-а",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"Неопределенное состояние checkbox-а",name:"indeterminate",required:!1,type:{name:"boolean"}},level:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 6.1.0, будет удалено в версии 9.х.х.
Взамен используйте параметр indent

Уровень дерева item-а`,name:"level",required:!1,type:{name:"number"}},indent:{defaultValue:null,description:"Отступ item-а",name:"indent",required:!1,type:{name:"number"}},hasChildren:{defaultValue:null,description:"Наличие дочерних элемнтов у item-а",name:"hasChildren",required:!1,type:{name:"boolean"}},expanded:{defaultValue:null,description:"Признак развернутого состояния item-а",name:"expanded",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},onToggleExpand:{defaultValue:null,description:"обработчик изменения состояния открытости узла",name:"onToggleExpand",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/TreeNode.tsx#TreeNode"]={docgenInfo:TreeNode_TreeNode.__docgenInfo,name:"TreeNode",path:"src/components/Tree/TreeNode.tsx#TreeNode"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),FolderSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/FolderSolid.svg");function TreeWithCheckboxes_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TreeWithCheckboxes_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TreeWithCheckboxes_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeWithCheckboxes_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TreeWithCheckboxes_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TreeWithCheckboxes_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeWithCheckboxes_template_define_property(target,key,source[key])})}return target}function TreeWithCheckboxes_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeWithCheckboxes_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeWithCheckboxes_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeWithCheckboxes_template_sliced_to_array(arr,i){return TreeWithCheckboxes_template_array_with_holes(arr)||TreeWithCheckboxes_template_iterable_to_array_limit(arr,i)||TreeWithCheckboxes_template_unsupported_iterable_to_array(arr,i)||TreeWithCheckboxes_template_non_iterable_rest()}function TreeWithCheckboxes_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TreeWithCheckboxes_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TreeWithCheckboxes_template_array_like_to_array(o,minLen)}}var demo1_TreeModel=[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread({icon:FolderSolid.h,label:"Текст заголовка, первый уровень компонента, размер M 40 1"},options),"1")},id:"1",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread({icon:FolderSolid.h,label:"Текст раскрывающейся строки, второй уровень компонента 3"},options),"1-3")},id:"1-3",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread({icon:FolderSolid.h,label:"Текст  строки, третий уровень компонента 2"},options),"2-2")},id:"2-2",disabled:!0,checked:!0},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread({icon:FolderSolid.h,label:"Текст  строки, третий уровень компонента 3"},options),"2-3")},id:"2-3",disabled:!0,checked:!1},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread({icon:FolderSolid.h,label:"Текст  строки, третий уровень компонента 4"},options),"2-4")},id:"2-4"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread({icon:FolderSolid.h,label:"Текст  строки с чекбоксом, третий уровень компонента 5"},options),"2-5")},id:"2-5",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread({label:"Текст  строки с чекбоксом, четвертый уровень компонента 1"},options),"3-1")},id:"3-1",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",key:"3-2"}))},id:"3-2",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{label:`Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике
    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней
    вложенности.`,key:"3-3"}))},id:"3-3",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{label:"Текст  строки с чекбоксом, четвертый уровень компонента 4",key:"3-4"}))},id:"3-4",checked:!1,children:[{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{label:"Текст  строки с чекбоксом, пятый уровень компонента 1",key:"4-1"}))},id:"4-1",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{label:"Текст  строки с чекбоксом, пятый уровень компонента 2",key:"4-2"}))},id:"4-2",checked:!1}]}]}]},{id:"1-1",checked:!1,render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{icon:FolderSolid.h,label:"Текст раскрывающейся строки, второй уровень компонента 1",key:"1-1"}))}},{id:"1-2",checked:!1,render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{icon:FolderSolid.h,label:"Текст раскрывающейся строки, второй уровень компонента 2",key:"1-2"}))}}]},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{icon:FolderSolid.h,label:"Текст заголовка, первый уровень компонента, размер M 40 2",key:"2"}))},id:"2",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{icon:FolderSolid.h,label:"Текст заголовка, первый уровень компонента, размер M 40 3",key:"3"}))},id:"3"},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{icon:FolderSolid.h,label:"Текст заголовка, первый уровень компонента, размер M 40 4",key:"4"}))},id:"4",disabled:!0},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},options),{icon:FolderSolid.h,label:"Текст заголовка, первый уровень компонента, с пустым массивом children",key:"5"}))},id:"5",children:[]}],TreeWithCheckboxesTemplate=function(props){var _useState=TreeWithCheckboxes_template_sliced_to_array((0,react.useState)(demo1_TreeModel),2),dataList=_useState[0],setDataList=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Контролируемое дерево с checkbox."}),(0,jsx_runtime.jsx)(Tree,TreeWithCheckboxes_template_object_spread_props(TreeWithCheckboxes_template_object_spread({},props),{model:dataList,onChange:function(dataList){setDataList(dataList)}}))]})};try{TreeWithCheckboxesTemplate.displayName="TreeWithCheckboxesTemplate",TreeWithCheckboxesTemplate.__docgenInfo={description:"",displayName:"TreeWithCheckboxesTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},active:{defaultValue:null,description:"Активная секция Tree",name:"active",required:!1,type:{name:"string | null"}},selected:{defaultValue:null,description:"выбранная секция Tree",name:"selected",required:!1,type:{name:"string | null"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Tree",name:"defaultSelected",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onActivateItem",required:!1,type:{name:"((id: string | null) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onSelectItem",required:!1,type:{name:"((id: string | null) => void)"}},onChange:{defaultValue:null,description:"Обработчик изменения данных дерева",name:"onChange",required:!1,type:{name:"((model: TreeItemProps[]) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!1,type:{name:"TreeItemProps[]"}},defaultModel:{defaultValue:null,description:"Модель данных, с рендер-пропсами по-умолчанию для неконтролируемого состояния",name:"defaultModel",required:!1,type:{name:"TreeItemProps[]"}},withCheckbox:{defaultValue:null,description:"Признак того, что дерево содержит checkbox-ы",name:"withCheckbox",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"Обработчик изменения состояния выбранных элементов",name:"onCheckedChange",required:!1,type:{name:"((ids: string[]) => void)"}},onExpandedChange:{defaultValue:null,description:"Обработчик открытия/закрытия узла дерева",name:"onExpandedChange",required:!1,type:{name:"((ids: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/stories/TreeWithCheckboxes.template.tsx#TreeWithCheckboxesTemplate"]={docgenInfo:TreeWithCheckboxesTemplate.__docgenInfo,name:"TreeWithCheckboxesTemplate",path:"src/components/Tree/stories/TreeWithCheckboxes.template.tsx#TreeWithCheckboxesTemplate"})}catch(__react_docgen_typescript_loader_error){}function TreeSimple_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TreeSimple_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TreeSimple_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeSimple_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TreeSimple_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TreeSimple_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeSimple_template_define_property(target,key,source[key])})}return target}function TreeSimple_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeSimple_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeSimple_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeSimple_template_sliced_to_array(arr,i){return TreeSimple_template_array_with_holes(arr)||TreeSimple_template_iterable_to_array_limit(arr,i)||TreeSimple_template_unsupported_iterable_to_array(arr,i)||TreeSimple_template_non_iterable_rest()}function TreeSimple_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TreeSimple_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TreeSimple_template_array_like_to_array(o,minLen)}}var demo2_TreeModel=[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeSimple_template_object_spread_props(TreeSimple_template_object_spread({},options),{children:(0,jsx_runtime.jsx)(T.T,{as:"div",style:{paddingTop:2},font:"Subtitle/Subtitle 2",children:"Элемент дерева с кастомным заголовком"})}),"1")},id:"1",expanded:!0,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeSimple_template_object_spread({icon:FolderSolid.h,label:"Второй уровень 1"},options),"1-1")},id:"1-1",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeSimple_template_object_spread({icon:FolderSolid.h,label:"Третий уровень 1"},options),"1-1-1")},id:"1-1-1"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeSimple_template_object_spread({icon:FolderSolid.h,label:"Третий уровень 2"},options),"1-1-2")},id:"1-1-2"}]}]},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeSimple_template_object_spread({icon:FolderSolid.h,label:"Первый уровень 2"},options),"4")},id:"4"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeSimple_template_object_spread({icon:FolderSolid.h,label:"Первый уровень с пустым массивом children"},options),"5")},children:[],id:"5"}],TreeSimpleTemplate=function(props){var _useState=TreeSimple_template_sliced_to_array((0,react.useState)("1"),2),activeItem=_useState[0],setActiveItem=_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Дерево без checkbox c заданной кастомной шириной в 500px и расстоянием между строками 8px."}),(0,jsx_runtime.jsx)(Tree,TreeSimple_template_object_spread_props(TreeSimple_template_object_spread({},props),{style:{width:500,gap:8},defaultSelected:"1-1",withCheckbox:!1,model:demo2_TreeModel,active:activeItem,onActivateItem:setActiveItem,onMouseLeave:function(){console.log("Mouse leave tree")}}))]})};try{TreeSimpleTemplate.displayName="TreeSimpleTemplate",TreeSimpleTemplate.__docgenInfo={description:"",displayName:"TreeSimpleTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},active:{defaultValue:null,description:"Активная секция Tree",name:"active",required:!1,type:{name:"string | null"}},selected:{defaultValue:null,description:"выбранная секция Tree",name:"selected",required:!1,type:{name:"string | null"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Tree",name:"defaultSelected",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onActivateItem",required:!1,type:{name:"((id: string | null) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onSelectItem",required:!1,type:{name:"((id: string | null) => void)"}},onChange:{defaultValue:null,description:"Обработчик изменения данных дерева",name:"onChange",required:!1,type:{name:"((model: TreeItemProps[]) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!1,type:{name:"TreeItemProps[]"}},defaultModel:{defaultValue:null,description:"Модель данных, с рендер-пропсами по-умолчанию для неконтролируемого состояния",name:"defaultModel",required:!1,type:{name:"TreeItemProps[]"}},withCheckbox:{defaultValue:null,description:"Признак того, что дерево содержит checkbox-ы",name:"withCheckbox",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"Обработчик изменения состояния выбранных элементов",name:"onCheckedChange",required:!1,type:{name:"((ids: string[]) => void)"}},onExpandedChange:{defaultValue:null,description:"Обработчик открытия/закрытия узла дерева",name:"onExpandedChange",required:!1,type:{name:"((ids: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/stories/TreeSimple.template.tsx#TreeSimpleTemplate"]={docgenInfo:TreeSimpleTemplate.__docgenInfo,name:"TreeSimpleTemplate",path:"src/components/Tree/stories/TreeSimple.template.tsx#TreeSimpleTemplate"})}catch(__react_docgen_typescript_loader_error){}function TreeUncontrolled_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeUncontrolled_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeUncontrolled_template_define_property(target,key,source[key])})}return target}function TreeUncontrolled_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeUncontrolled_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeUncontrolled_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeUncontrolled_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TreeUncontrolled_template_templateObject(){var data=TreeUncontrolled_template_tagged_template_literal([`
  width: 500px;
`]);return TreeUncontrolled_template_templateObject=function _templateObject(){return data},data}var handleNodeClick=function(id){console.log("clicked ".concat(id))},TreeUncontrolled_template_demo2_TreeModel=[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeUncontrolled_template_object_spread_props(TreeUncontrolled_template_object_spread({},options),{onClick:function(e){var _options_onClick;null==(_options_onClick=options.onClick)||_options_onClick.call(options,e),handleNodeClick("1")},children:(0,jsx_runtime.jsx)(T.T,{as:"div",style:{paddingTop:2},font:"Subtitle/Subtitle 2",children:"Элемент дерева с кастомным заголовком"})}),"1")},id:"1",expanded:!0,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeUncontrolled_template_object_spread_props(TreeUncontrolled_template_object_spread({icon:FolderSolid.h,label:"Второй уровень 1"},options),{onClick:function(e){var _options_onClick;null==(_options_onClick=options.onClick)||_options_onClick.call(options,e),handleNodeClick("1-1")}}),"1-1")},id:"1-1",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeUncontrolled_template_object_spread({icon:FolderSolid.h,label:"Третий уровень 1"},options),"1-1-1")},id:"1-1-1"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeUncontrolled_template_object_spread({icon:FolderSolid.h,label:"Третий уровень 2"},options),"1-1-2")},id:"1-1-2"}]}]},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeUncontrolled_template_object_spread({icon:FolderSolid.h,label:"Первый уровень 2"},options),"4")},id:"4"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeUncontrolled_template_object_spread({icon:FolderSolid.h,label:"Первый уровень с пустым массивом children"},options),"5")},children:[],id:"5"}],StyledTree=(0,styled_components_browser_esm.Ay)(Tree)(TreeUncontrolled_template_templateObject()),TreeUncontrolledTemplate=function(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Неконтролируемое дерево."}),(0,jsx_runtime.jsx)(StyledTree,TreeUncontrolled_template_object_spread_props(TreeUncontrolled_template_object_spread({},props),{defaultSelected:"1-1",defaultModel:TreeUncontrolled_template_demo2_TreeModel,withCheckbox:!1}))]})};try{TreeUncontrolledTemplate.displayName="TreeUncontrolledTemplate",TreeUncontrolledTemplate.__docgenInfo={description:"",displayName:"TreeUncontrolledTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},active:{defaultValue:null,description:"Активная секция Tree",name:"active",required:!1,type:{name:"string | null"}},selected:{defaultValue:null,description:"выбранная секция Tree",name:"selected",required:!1,type:{name:"string | null"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Tree",name:"defaultSelected",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onActivateItem",required:!1,type:{name:"((id: string | null) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onSelectItem",required:!1,type:{name:"((id: string | null) => void)"}},onChange:{defaultValue:null,description:"Обработчик изменения данных дерева",name:"onChange",required:!1,type:{name:"((model: TreeItemProps[]) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!1,type:{name:"TreeItemProps[]"}},defaultModel:{defaultValue:null,description:"Модель данных, с рендер-пропсами по-умолчанию для неконтролируемого состояния",name:"defaultModel",required:!1,type:{name:"TreeItemProps[]"}},withCheckbox:{defaultValue:null,description:"Признак того, что дерево содержит checkbox-ы",name:"withCheckbox",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"Обработчик изменения состояния выбранных элементов",name:"onCheckedChange",required:!1,type:{name:"((ids: string[]) => void)"}},onExpandedChange:{defaultValue:null,description:"Обработчик открытия/закрытия узла дерева",name:"onExpandedChange",required:!1,type:{name:"((ids: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/stories/TreeUncontrolled.template.tsx#TreeUncontrolledTemplate"]={docgenInfo:TreeUncontrolledTemplate.__docgenInfo,name:"TreeUncontrolledTemplate",path:"src/components/Tree/stories/TreeUncontrolled.template.tsx#TreeUncontrolledTemplate"})}catch(__react_docgen_typescript_loader_error){}function TreeWithControlCheckCount_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TreeWithControlCheckCount_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function TreeWithControlCheckCount_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeWithControlCheckCount_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TreeWithControlCheckCount_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TreeWithControlCheckCount_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeWithControlCheckCount_template_define_property(target,key,source[key])})}return target}function TreeWithControlCheckCount_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeWithControlCheckCount_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeWithControlCheckCount_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TreeWithControlCheckCount_template_sliced_to_array(arr,i){return TreeWithControlCheckCount_template_array_with_holes(arr)||TreeWithControlCheckCount_template_iterable_to_array_limit(arr,i)||TreeWithControlCheckCount_template_unsupported_iterable_to_array(arr,i)||TreeWithControlCheckCount_template_non_iterable_rest()}function TreeWithControlCheckCount_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TreeWithControlCheckCount_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TreeWithControlCheckCount_template_array_like_to_array(o,minLen)}}var TreeWithControlCheckCount_template_demo1_TreeModel=[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread({label:"Корневой элемент"},options),"1")},id:"1",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread({label:"Первый дочерний элемент"},options),"1-3")},id:"1-3",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread({label:"Текст  строки, третий уровень компонента 2"},options),"2-2")},id:"2-2"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread({label:"Текст  строки, третий уровень компонента 3"},options),"2-3")},id:"2-3"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread({label:"Текст  строки, третий уровень компонента 4"},options),"2-4")},id:"2-4"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread({label:"Текст  строки с чекбоксом, третий уровень компонента 5"},options),"2-5")},id:"2-5",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread({label:"Текст  строки с чекбоксом, четвертый уровень компонента 1"},options),"3-1")},id:"3-1",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},options),{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",key:"3-2"}))},id:"3-2",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},options),{label:`Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике
    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней
    вложенности.`,key:"3-3"}))},id:"3-3",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},options),{label:"Текст  строки с чекбоксом, четвертый уровень компонента 4",key:"3-4"}))},id:"3-4",checked:!1,children:[{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},options),{label:"Текст  строки с чекбоксом, пятый уровень компонента 1",key:"4-1"}))},id:"4-1",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},options),{label:"Текст  строки с чекбоксом, пятый уровень компонента 2",key:"4-2"}))},id:"4-2",checked:!1}]}]}]},{id:"1-1",checked:!1,render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},options),{label:"Текст раскрывающейся строки, второй уровень компонента 1",key:"1-1"}))}},{id:"1-2",checked:!1,render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},options),{label:"Текст раскрывающейся строки, второй уровень компонента 2",key:"1-2"}))}}]}],TreeWithControlCheckCountTemplate=function(props){var _useState=TreeWithControlCheckCount_template_sliced_to_array((0,react.useState)(TreeWithControlCheckCount_template_demo1_TreeModel),2),dataList=_useState[0],setDataList=_useState[1],_useState1=TreeWithControlCheckCount_template_sliced_to_array((0,react.useState)(0),2),countSelected=_useState1[0],setCountSelected=_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример показывает обработку состояния checked в модели. Checked являются узлы, которые непосредственно выбраны, либо узлы, у которых все дочерние элементы находятся в состоянии checked."}),(0,jsx_runtime.jsxs)(T.T,{font:"Subtitle/Subtitle 1",as:"p",children:["Выбрано элементов: ",countSelected]}),(0,jsx_runtime.jsx)(Tree,TreeWithControlCheckCount_template_object_spread_props(TreeWithControlCheckCount_template_object_spread({},props),{dimension:"s",model:dataList,onChange:function(newDataList){console.log(newDataList);var findChecked=function(arr,checked){return arr.forEach(function(el){(null==el?void 0:el.checked)&&checked.push(el.id),Array.isArray(null==el?void 0:el.children)&&findChecked(el.children,checked)}),checked};setCountSelected(findChecked(dataList,[]).length),setDataList(newDataList)}}))]})};try{TreeWithControlCheckCountTemplate.displayName="TreeWithControlCheckCountTemplate",TreeWithControlCheckCountTemplate.__docgenInfo={description:"",displayName:"TreeWithControlCheckCountTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},active:{defaultValue:null,description:"Активная секция Tree",name:"active",required:!1,type:{name:"string | null"}},selected:{defaultValue:null,description:"выбранная секция Tree",name:"selected",required:!1,type:{name:"string | null"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Tree",name:"defaultSelected",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onActivateItem",required:!1,type:{name:"((id: string | null) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onSelectItem",required:!1,type:{name:"((id: string | null) => void)"}},onChange:{defaultValue:null,description:"Обработчик изменения данных дерева",name:"onChange",required:!1,type:{name:"((model: TreeItemProps[]) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!1,type:{name:"TreeItemProps[]"}},defaultModel:{defaultValue:null,description:"Модель данных, с рендер-пропсами по-умолчанию для неконтролируемого состояния",name:"defaultModel",required:!1,type:{name:"TreeItemProps[]"}},withCheckbox:{defaultValue:null,description:"Признак того, что дерево содержит checkbox-ы",name:"withCheckbox",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"Обработчик изменения состояния выбранных элементов",name:"onCheckedChange",required:!1,type:{name:"((ids: string[]) => void)"}},onExpandedChange:{defaultValue:null,description:"Обработчик открытия/закрытия узла дерева",name:"onExpandedChange",required:!1,type:{name:"((ids: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/stories/TreeWithControlCheckCount.template.tsx#TreeWithControlCheckCountTemplate"]={docgenInfo:TreeWithControlCheckCountTemplate.__docgenInfo,name:"TreeWithControlCheckCountTemplate",path:"src/components/Tree/stories/TreeWithControlCheckCount.template.tsx#TreeWithControlCheckCountTemplate"})}catch(__react_docgen_typescript_loader_error){}function TreeWithOnChangeHandler_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TreeWithOnChangeHandler_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TreeWithOnChangeHandler_template_define_property(target,key,source[key])})}return target}function TreeWithOnChangeHandler_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TreeWithOnChangeHandler_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TreeWithOnChangeHandler_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}var TreeWithOnChangeHandler_template_demo1_TreeModel=[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread({label:"Корневой элемент"},options),"1")},id:"1",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread({label:"Первый дочерний элемент"},options),"1-3")},id:"1-3",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread({label:"Текст  строки, третий уровень компонента 2"},options),"2-2")},id:"2-2"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread({label:"Текст  строки, третий уровень компонента 3"},options),"2-3")},id:"2-3"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread({label:"Текст  строки, третий уровень компонента 4"},options),"2-4")},id:"2-4"},{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread({label:"Текст  строки с чекбоксом, третий уровень компонента 5"},options),"2-5")},id:"2-5",checked:!1,children:[{render:function(options){return(0,jsx_runtime.jsx)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread({label:"Текст  строки с чекбоксом, четвертый уровень компонента 1"},options),"3-1")},id:"3-1",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},options),{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",key:"3-2"}))},id:"3-2",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},options),{label:`Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике
    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней
    вложенности.`,key:"3-3"}))},id:"3-3",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},options),{label:"Текст  строки с чекбоксом, четвертый уровень компонента 4",key:"3-4"}))},id:"3-4",checked:!1,children:[{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},options),{label:"Текст  строки с чекбоксом, пятый уровень компонента 1",key:"4-1"}))},id:"4-1",checked:!1},{render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},options),{label:"Текст  строки с чекбоксом, пятый уровень компонента 2",key:"4-2"}))},id:"4-2",checked:!1}]}]}]},{id:"1-1",checked:!1,render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},options),{label:"Текст раскрывающейся строки, второй уровень компонента 1",key:"1-1"}))}},{id:"1-2",checked:!1,render:function(options){return(0,react.createElement)(TreeNode_TreeNode,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},options),{label:"Текст раскрывающейся строки, второй уровень компонента 2",key:"1-2"}))}}]}],TreeWithOnChangeHandlerTemplate=function(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"События onExpandedChange и onCheckedChange добавлены для упрощения обработки изменений дерева в контролируемом состоянии."}),(0,jsx_runtime.jsx)(Tree,TreeWithOnChangeHandler_template_object_spread_props(TreeWithOnChangeHandler_template_object_spread({},props),{dimension:"s",defaultModel:TreeWithOnChangeHandler_template_demo1_TreeModel,onCheckedChange:function(ids){console.log("Выбранные элементы:",ids.toString())},onExpandedChange:function(ids){console.log("Развернутые узлы:",ids.toString())}}))]})};try{TreeWithOnChangeHandlerTemplate.displayName="TreeWithOnChangeHandlerTemplate",TreeWithOnChangeHandlerTemplate.__docgenInfo={description:"",displayName:"TreeWithOnChangeHandlerTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},active:{defaultValue:null,description:"Активная секция Tree",name:"active",required:!1,type:{name:"string | null"}},selected:{defaultValue:null,description:"выбранная секция Tree",name:"selected",required:!1,type:{name:"string | null"}},defaultSelected:{defaultValue:null,description:"выбранная по умолчанию секция Tree",name:"defaultSelected",required:!1,type:{name:"string"}},onActivateItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onActivateItem",required:!1,type:{name:"((id: string | null) => void)"}},onSelectItem:{defaultValue:null,description:"Обработчик выбора элемента дерева",name:"onSelectItem",required:!1,type:{name:"((id: string | null) => void)"}},onChange:{defaultValue:null,description:"Обработчик изменения данных дерева",name:"onChange",required:!1,type:{name:"((model: TreeItemProps[]) => void)"}},model:{defaultValue:null,description:"Модель данных, с рендер-пропсами",name:"model",required:!1,type:{name:"TreeItemProps[]"}},defaultModel:{defaultValue:null,description:"Модель данных, с рендер-пропсами по-умолчанию для неконтролируемого состояния",name:"defaultModel",required:!1,type:{name:"TreeItemProps[]"}},withCheckbox:{defaultValue:null,description:"Признак того, что дерево содержит checkbox-ы",name:"withCheckbox",required:!1,type:{name:"boolean"}},onCheckedChange:{defaultValue:null,description:"Обработчик изменения состояния выбранных элементов",name:"onCheckedChange",required:!1,type:{name:"((ids: string[]) => void)"}},onExpandedChange:{defaultValue:null,description:"Обработчик открытия/закрытия узла дерева",name:"onExpandedChange",required:!1,type:{name:"((ids: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tree/stories/TreeWithOnChangeHandler.template.tsx#TreeWithOnChangeHandlerTemplate"]={docgenInfo:TreeWithOnChangeHandlerTemplate.__docgenInfo,name:"TreeWithOnChangeHandlerTemplate",path:"src/components/Tree/stories/TreeWithOnChangeHandler.template.tsx#TreeWithOnChangeHandlerTemplate"})}catch(__react_docgen_typescript_loader_error){}let TreeWithCheckboxes_templateraw_namespaceObject=`import { useState } from 'react';
import { Tree, TreeNode, T } from '@admiral-ds/react-ui';
import type { TreeItemProps, TreeNodeRenderOptionProps, TreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

const demo1_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode
        key={'1'}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 1'}
        {...options}
      />
    ),
    id: '1',
    checked: false,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode
            key={'1-3'}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 3'}
            {...options}
          />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode
                key={'2-2'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 2'}
                {...options}
              />
            ),
            id: '2-2',
            disabled: true,
            checked: true,
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode
                key={'2-3'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 3'}
                {...options}
              />
            ),
            id: '2-3',
            disabled: true,
            checked: false,
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode
                key={'2-4'}
                icon={FolderSolid}
                label={'Текст  строки, третий уровень компонента 4'}
                {...options}
              />
            ),
            id: '2-4',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode
                key={'2-5'}
                icon={FolderSolid}
                label={'Текст  строки с чекбоксом, третий уровень компонента 5'}
                {...options}
              />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 1'}
            key={'1-1'}
          />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode
            {...options}
            icon={FolderSolid}
            label={'Текст раскрывающейся строки, второй уровень компонента 2'}
            key={'1-2'}
          />
        ),
      },
    ],
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 2'}
        key={'2'}
      />
    ),
    id: '2',
    checked: false,
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 3'}
        key={'3'}
      />
    ),
    id: '3',
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, размер M 40 4'}
        key={'4'}
      />
    ),
    id: '4',
    disabled: true,
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode
        {...options}
        icon={FolderSolid}
        label={'Текст заголовка, первый уровень компонента, с пустым массивом children'}
        key={'5'}
      />
    ),
    id: '5',
    children: [],
  },
];

export const TreeWithCheckboxesTemplate = (props: TreeProps) => {
  const [dataList, setDataList] = useState<TreeItemProps[]>(demo1_TreeModel);

  const handleChange = (dataList: TreeItemProps[]) => {
    setDataList(dataList);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Контролируемое дерево с checkbox.
      </T>
      <Tree {...props} model={dataList} onChange={handleChange} />
    </>
  );
};
`,TreeSimple_templateraw_namespaceObject=`import { Tree, TreeNode, T } from '@admiral-ds/react-ui';
import { useState } from 'react';
import type { TreeItemProps, TreeNodeRenderOptionProps, TreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

const demo2_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'1'} {...options}>
        <T as="div" style={{ paddingTop: 2 }} font="Subtitle/Subtitle 2">
          Элемент дерева с кастомным заголовком
        </T>
      </TreeNode>
    ),
    id: '1',
    expanded: true,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode key={'1-1'} icon={FolderSolid} label={'Второй уровень 1'} {...options} />
        ),
        id: '1-1',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'1-1-1'} icon={FolderSolid} label={'Третий уровень 1'} {...options} />
            ),
            id: '1-1-1',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'1-1-2'} icon={FolderSolid} label={'Третий уровень 2'} {...options} />
            ),
            id: '1-1-2',
          },
        ],
      },
    ],
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'4'} icon={FolderSolid} label={'Первый уровень 2'} {...options} />
    ),
    id: '4',
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'5'} icon={FolderSolid} label={'Первый уровень с пустым массивом children'} {...options} />
    ),
    children: [],
    id: '5',
  },
];

// Можно и так
// const StyledTree = styled(Tree)\`
//   width: 500px;
//   gap: 8px;
// \`;

export const TreeSimpleTemplate = (props: TreeProps) => {
  const [activeItem, setActiveItem] = useState<string | null>('1');

  const handleMouseLeave = () => {
    // eslint-disable-next-line no-console
    console.log('Mouse leave tree');
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Дерево без checkbox c заданной кастомной шириной в 500px и расстоянием между строками 8px.
      </T>
      <Tree
        {...props}
        style={{ width: 500, gap: 8 }}
        defaultSelected={'1-1'}
        withCheckbox={false}
        model={demo2_TreeModel}
        active={activeItem}
        onActivateItem={setActiveItem}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
};
`,TreeUncontrolled_templateraw_namespaceObject=`import { Tree, TreeNode, T } from '@admiral-ds/react-ui';
import type { TreeItemProps, TreeNodeRenderOptionProps, TreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';
import styled from 'styled-components';

const handleNodeClick = (id: string) => {
  // eslint-disable-next-line no-console
  console.log(\`clicked \${id}\`);
};

const demo2_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode
        key={'1'}
        {...options}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          options.onClick?.(e);
          handleNodeClick('1');
        }}
      >
        <T as="div" style={{ paddingTop: 2 }} font="Subtitle/Subtitle 2">
          Элемент дерева с кастомным заголовком
        </T>
      </TreeNode>
    ),
    id: '1',
    expanded: true,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode
            key={'1-1'}
            icon={FolderSolid}
            label={'Второй уровень 1'}
            {...options}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              options.onClick?.(e);
              handleNodeClick('1-1');
            }}
          />
        ),
        id: '1-1',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'1-1-1'} icon={FolderSolid} label={'Третий уровень 1'} {...options} />
            ),
            id: '1-1-1',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'1-1-2'} icon={FolderSolid} label={'Третий уровень 2'} {...options} />
            ),
            id: '1-1-2',
          },
        ],
      },
    ],
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'4'} icon={FolderSolid} label={'Первый уровень 2'} {...options} />
    ),
    id: '4',
  },
  {
    render: (options: TreeNodeRenderOptionProps) => (
      <TreeNode key={'5'} icon={FolderSolid} label={'Первый уровень с пустым массивом children'} {...options} />
    ),
    children: [],
    id: '5',
  },
];

const StyledTree = styled(Tree)\`
  width: 500px;
\`;

export const TreeUncontrolledTemplate = (props: TreeProps) => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Неконтролируемое дерево.
      </T>
      <StyledTree {...props} defaultSelected={'1-1'} defaultModel={demo2_TreeModel} withCheckbox={false} />
    </>
  );
};
`,TreeWithControlCheckCount_templateraw_namespaceObject=`import { useState } from 'react';
import { T, Tree, TreeNode } from '@admiral-ds/react-ui';
import type { TreeItemProps, TreeNodeRenderOptionProps, TreeProps } from '@admiral-ds/react-ui';

const demo1_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => <TreeNode key={'1'} label={'Корневой элемент'} {...options} />,
    id: '1',
    checked: false,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode key={'1-3'} label={'Первый дочерний элемент'} {...options} />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-2'} label={'Текст  строки, третий уровень компонента 2'} {...options} />
            ),
            id: '2-2',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-3'} label={'Текст  строки, третий уровень компонента 3'} {...options} />
            ),
            id: '2-3',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-4'} label={'Текст  строки, третий уровень компонента 4'} {...options} />
            ),
            id: '2-4',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-5'} label={'Текст  строки с чекбоксом, третий уровень компонента 5'} {...options} />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} label={'Текст раскрывающейся строки, второй уровень компонента 1'} key={'1-1'} />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} label={'Текст раскрывающейся строки, второй уровень компонента 2'} key={'1-2'} />
        ),
      },
    ],
  },
];

export const TreeWithControlCheckCountTemplate = (props: TreeProps) => {
  const [dataList, setDataList] = useState<TreeItemProps[]>(demo1_TreeModel);
  const [countSelected, setCountSelected] = useState(0);
  const changeTreeValues = (newDataList: Array<TreeItemProps>) => {
    // eslint-disable-next-line no-console
    console.log(newDataList);
    const findChecked = (arr: Array<TreeItemProps>, checked: Array<string>) => {
      arr.forEach((el: TreeItemProps) => {
        if (el?.checked) {
          checked.push(el.id);
        }
        if (Array.isArray(el?.children)) {
          findChecked(el.children, checked);
        }
      });

      return checked;
    };
    const checkedList = findChecked(dataList, []);
    setCountSelected(checkedList.length);
    setDataList(newDataList);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример показывает обработку состояния checked в модели. Checked являются узлы, которые непосредственно выбраны,
        либо узлы, у которых все дочерние элементы находятся в состоянии checked.
      </T>
      <T font="Subtitle/Subtitle 1" as="p">
        Выбрано элементов: {countSelected}
      </T>
      <Tree {...props} dimension="s" model={dataList} onChange={changeTreeValues} />
    </>
  );
};
`,TreeWithOnChangeHandler_templateraw_namespaceObject=`import { Tree, TreeNode, T } from '@admiral-ds/react-ui';
import type { TreeItemProps, TreeNodeRenderOptionProps, TreeProps } from '@admiral-ds/react-ui';

const demo1_TreeModel: Array<TreeItemProps> = [
  {
    render: (options: TreeNodeRenderOptionProps) => <TreeNode key={'1'} label={'Корневой элемент'} {...options} />,
    id: '1',
    checked: false,
    children: [
      {
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode key={'1-3'} label={'Первый дочерний элемент'} {...options} />
        ),
        id: '1-3',
        checked: false,
        children: [
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-2'} label={'Текст  строки, третий уровень компонента 2'} {...options} />
            ),
            id: '2-2',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-3'} label={'Текст  строки, третий уровень компонента 3'} {...options} />
            ),
            id: '2-3',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-4'} label={'Текст  строки, третий уровень компонента 4'} {...options} />
            ),
            id: '2-4',
          },
          {
            render: (options: TreeNodeRenderOptionProps) => (
              <TreeNode key={'2-5'} label={'Текст  строки с чекбоксом, третий уровень компонента 5'} {...options} />
            ),
            id: '2-5',
            checked: false,
            children: [
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    key={'3-1'}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 1'}
                    {...options}
                  />
                ),
                id: '3-1',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 2'}
                    key={'3-2'}
                  />
                ),
                id: '3-2',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={
                      'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +
                      '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +
                      '    вложенности.'
                    }
                    key={'3-3'}
                  />
                ),
                id: '3-3',
                checked: false,
              },
              {
                render: (options: TreeNodeRenderOptionProps) => (
                  <TreeNode
                    {...options}
                    label={'Текст  строки с чекбоксом, четвертый уровень компонента 4'}
                    key={'3-4'}
                  />
                ),
                id: '3-4',
                checked: false,
                children: [
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 1'}
                        key={'4-1'}
                      />
                    ),
                    id: '4-1',
                    checked: false,
                  },
                  {
                    render: (options: TreeNodeRenderOptionProps) => (
                      <TreeNode
                        {...options}
                        label={'Текст  строки с чекбоксом, пятый уровень компонента 2'}
                        key={'4-2'}
                      />
                    ),
                    id: '4-2',
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '1-1',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} label={'Текст раскрывающейся строки, второй уровень компонента 1'} key={'1-1'} />
        ),
      },
      {
        id: '1-2',
        checked: false,
        render: (options: TreeNodeRenderOptionProps) => (
          <TreeNode {...options} label={'Текст раскрывающейся строки, второй уровень компонента 2'} key={'1-2'} />
        ),
      },
    ],
  },
];

export const TreeWithOnChangeHandlerTemplate = (props: TreeProps) => {
  const handleCheckedChange = (ids: Array<string>) => {
    // eslint-disable-next-line no-console
    console.log('Выбранные элементы:', ids.toString());
    // eslint-disable-next-line no-console
  };
  const handleExpandedChange = (ids: Array<string>) => {
    // eslint-disable-next-line no-console
    console.log('Развернутые узлы:', ids.toString());
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        События onExpandedChange и onCheckedChange добавлены для упрощения обработки изменений дерева в контролируемом
        состоянии.
      </T>
      <Tree
        {...props}
        dimension="s"
        defaultModel={demo1_TreeModel}
        onCheckedChange={handleCheckedChange}
        onExpandedChange={handleExpandedChange}
      />
    </>
  );
};
`;function Tree_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Tree_stories_define_property(target,key,source[key])})}return target}function Tree_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Tree_stories_templateObject(){var data=Tree_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Tree_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Tree_stories_templateObject());let Tree_stories={title:"Admiral-2.1/Tree",decorators:void 0,component:Tree,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней вложенности."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12178%3A70930"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12236%3A71124"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A12752"}]},args:{withCheckbox:!0},argTypes:{dimension:{options:["m","s"]},withCheckbox:{options:[!0,!1],control:{type:"radio"}},width:{control:"number"},defaultSelected:{control:"text"},selected:{control:"text"},active:{control:"text"},model:{control:!1}}};var Demo1_Tree={render:function(props){return(0,jsx_runtime.jsx)(TreeWithCheckboxesTemplate,Tree_stories_object_spread({},props))},parameters:{docs:{source:{code:TreeWithCheckboxes_templateraw_namespaceObject}}},name:"Контролируемое дерево с checkbox"},Demo2_Tree={render:function(props){return(0,jsx_runtime.jsx)(TreeSimpleTemplate,Tree_stories_object_spread({},props))},parameters:{docs:{source:{code:TreeSimple_templateraw_namespaceObject}}},name:"Дерево без checkbox c кастомизацией размеров"},TreeUncontrolledExample={render:function(props){return(0,jsx_runtime.jsx)(TreeUncontrolledTemplate,Tree_stories_object_spread({},props))},parameters:{docs:{source:{code:TreeUncontrolled_templateraw_namespaceObject}}},name:"Неконтролируемое дерево"},TreeWithControlCheckCountExample={render:function(props){return(0,jsx_runtime.jsx)(TreeWithControlCheckCountTemplate,Tree_stories_object_spread({},props))},parameters:{docs:{source:{code:TreeWithControlCheckCount_templateraw_namespaceObject}}},name:"С контролем количества выбранных"},TreeWithOnChangeHandlerExample={render:function(props){return(0,jsx_runtime.jsx)(TreeWithOnChangeHandlerTemplate,Tree_stories_object_spread({},props))},parameters:{docs:{source:{code:TreeWithOnChangeHandler_templateraw_namespaceObject}}},name:"Обработка событий onExpandChange и onCheckedChange"};Demo1_Tree.parameters={...Demo1_Tree.parameters,docs:{...Demo1_Tree.parameters?.docs,source:{originalSource:`{
  render: TreeWithCheckboxesStory,
  parameters: {
    docs: {
      source: {
        code: TreeWithCheckboxesRaw
      }
    }
  },
  name: 'Контролируемое дерево с checkbox'
}`,...Demo1_Tree.parameters?.docs?.source}}},Demo2_Tree.parameters={...Demo2_Tree.parameters,docs:{...Demo2_Tree.parameters?.docs,source:{originalSource:`{
  render: SimpleTreeStory,
  parameters: {
    docs: {
      source: {
        code: TreeSimpleRaw
      }
    }
  },
  name: 'Дерево без checkbox c кастомизацией размеров'
}`,...Demo2_Tree.parameters?.docs?.source}}},TreeUncontrolledExample.parameters={...TreeUncontrolledExample.parameters,docs:{...TreeUncontrolledExample.parameters?.docs,source:{originalSource:`{
  render: TreeUncontrolledStory,
  parameters: {
    docs: {
      source: {
        code: TreeUncontrolledRaw
      }
    }
  },
  name: 'Неконтролируемое дерево'
}`,...TreeUncontrolledExample.parameters?.docs?.source}}},TreeWithControlCheckCountExample.parameters={...TreeWithControlCheckCountExample.parameters,docs:{...TreeWithControlCheckCountExample.parameters?.docs,source:{originalSource:`{
  render: TreeWithControlCheckCountStory,
  parameters: {
    docs: {
      source: {
        code: TreeWithControlCheckCountRaw
      }
    }
  },
  name: 'С контролем количества выбранных'
}`,...TreeWithControlCheckCountExample.parameters?.docs?.source}}},TreeWithOnChangeHandlerExample.parameters={...TreeWithOnChangeHandlerExample.parameters,docs:{...TreeWithOnChangeHandlerExample.parameters?.docs,source:{originalSource:`{
  render: TreeWithOnChangeHandlerStory,
  parameters: {
    docs: {
      source: {
        code: TreeWithOnChangeHandlerRaw
      }
    }
  },
  name: 'Обработка событий onExpandChange и onCheckedChange'
}`,...TreeWithOnChangeHandlerExample.parameters?.docs?.source}}};let __namedExportsOrder=["Demo1_Tree","Demo2_Tree","TreeUncontrolledExample","TreeWithControlCheckCountExample","TreeWithOnChangeHandlerExample"]}}]);
//# sourceMappingURL=components-Tree-stories-Tree-stories.9ba0fd2b.iframe.bundle.js.map