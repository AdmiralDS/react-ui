"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6609],{"./src/components/SelectTree/stories/SelectTree.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectTreeM:()=>SelectTreeM,SelectTreeNoCheckbox:()=>SelectTreeNoCheckbox,SelectTreeS:()=>SelectTreeS,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectTree_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),ChevronRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ChevronRightOutline.svg");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  transition: all 0.3s;
  & path {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
  width: 100%;
  height: 100%;
  transform: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  flex-shrink: 0;
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  width: `,`;
  height: `,`;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(100% + 12px);
      height: calc(100% + 12px);
      background-color: var(--admiral-color-Opacity_Hover, `,`);
    }
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  `,`;
  display: flex;
  align-items: flex-start;
  padding: `,`;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  margin-right: 8px;
  flex-shrink: 0;
  width: `,`;
  height: `,`;
  > svg {
    width: 100%;
    height: 100%;
  }
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  margin-right: 8px;
  flex-shrink: 0;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  padding-top: 2px;
`]);return _templateObject6=function _templateObject(){return data},data}var Chevron=(0,styled_components_browser_esm.Ay)(ChevronRightOutline.h)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.$isOpened?"rotate(90deg)":"rotate(0deg)"}),ChevronWrapper=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return"m"===p.$dimension?"".concat(24,"px"):"".concat(20,"px")},function(p){return"m"===p.$dimension?"".concat(24,"px"):"".concat(20,"px")},function(p){return p.theme.color["Opacity/Hover"]}),TreeItem=styled_components_browser_esm.Ay.ul(_templateObject2(),function(p){return"m"===p.$dimension?"".concat(40,"px"):"".concat(36,"px")}),Wrapper=styled_components_browser_esm.Ay.li(_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return"m"===p.$dimension?typography.Il["Body/Body 1 Short"]:typography.Il["Body/Body 2 Short"]},function(p){return"m"===p.$dimension?"".concat(8,"px ").concat(16,"px ").concat(8,"px ").concat(40*p.$level,"px"):"".concat(6,"px ").concat(16,"px ").concat(6,"px ").concat(36*p.$level,"px")}),IconWrapper=styled_components_browser_esm.Ay.div(_templateObject4(),function(p){return"m"===p.$dimension?"".concat(24,"px"):"".concat(20,"px")},function(p){return"m"===p.$dimension?"".concat(24,"px"):"".concat(20,"px")}),StyledCheckbox=(0,styled_components_browser_esm.Ay)(CheckboxField.Y)(_templateObject5()),TitleContent=styled_components_browser_esm.Ay.div(_templateObject6()),SelectTreeNode=function(param){var dimension=param.dimension,node=param.node,level=param.level,onChange=param.onChange,onButtonClick=param.onButtonClick,onKeyDown=param.onKeyDown,expandAll=param.expandAll;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Wrapper,{$dimension:dimension,$level:level,onKeyDown:onKeyDown,children:[node.children&&(0,jsx_runtime.jsx)(ChevronWrapper,{"data-key":node.id,$dimension:dimension,onClick:onButtonClick,children:(0,jsx_runtime.jsx)(Chevron,{$isOpened:node.expanded})}),"status"in node&&(0,jsx_runtime.jsx)(StyledCheckbox,{id:node.id,"data-key":node.id,dimension:dimension,indeterminate:"indeterminate"===node.status,checked:"unchecked"!==node.status,onChange:onChange}),node.icon&&(0,jsx_runtime.jsx)(IconWrapper,{$dimension:dimension,children:node.icon}),(0,jsx_runtime.jsx)(TitleContent,{children:node.label})]}),node.expanded&&node.children&&node.children.map(function(child,i){return(0,jsx_runtime.jsx)(TreeItem,{$dimension:dimension,children:(0,jsx_runtime.jsx)(SelectTreeNode,{dimension:dimension,node:child,level:level+1,expandAll:expandAll,onKeyDown:onKeyDown,onButtonClick:onButtonClick,onChange:onChange},node.id)},[node.id,i].join("/"))})]})};try{SelectTreeNode.displayName="SelectTreeNode",SelectTreeNode.__docgenInfo={description:"",displayName:"SelectTreeNode",props:{node:{defaultValue:null,description:"",name:"node",required:!0,type:{name:"SelectTreeNodeProps"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"number"}},expandAll:{defaultValue:null,description:"",name:"expandAll",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent<HTMLLIElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/SelectTreeNode.tsx#SelectTreeNode"]={docgenInfo:SelectTreeNode.__docgenInfo,name:"SelectTreeNode",path:"src/components/SelectTree/SelectTreeNode.tsx#SelectTreeNode"})}catch(__react_docgen_typescript_loader_error){}var keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),defineBranchStatus=function(childrenStatus){if(0!==childrenStatus.length)return childrenStatus.every(function(status){return"unchecked"===status})?"unchecked":childrenStatus.every(function(status){return"checked"===status})?"checked":"indeterminate"},updateNodeStatus=function(root){return defineBranchStatus(root.map(function(branch){var branchStatus;return branch.children?(branchStatus=updateNodeStatus(branch.children),"status"in branch&&branchStatus&&(branch.status=branchStatus,branch.checked="checked"===branchStatus||"indeterminate"===branchStatus)):"status"in branch&&(branchStatus=branch.status,branch.checked="checked"===branchStatus||"indeterminate"===branchStatus),branchStatus}).filter(function(item){return item}))},checkParent=function(root,node){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=root[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var branch=_step.value;if(branch.children&&(branch.children.find(function(child){return child.id===node.id})||checkParent(branch.children,node)))return"status"in branch&&(branch.status="checked",branch.checked=!0),!0}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return!1},setNodeStatus=function(list){list.forEach(function(node){"checked"in node&&(node.status=node.checked?"checked":"unchecked"),node.children&&setNodeStatus(node.children)})};function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function SelectTree_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function SelectTree_templateObject(){var data=SelectTree_tagged_template_literal([`
  list-style: none;
  margin: 0;
  padding: 0;
`]);return SelectTree_templateObject=function _templateObject(){return data},data}var SelectTree_TreeItem=styled_components_browser_esm.Ay.ul(SelectTree_templateObject()),SelectTree=function(_param){var list=_param.list,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_expandAll=_param.expandAll,expandAll=void 0!==_param_expandAll&&_param_expandAll,onChange=_param.onChange,props=_object_without_properties(_param,["list","dimension","expandAll","onChange"]),_React_useState=_sliced_to_array(react.useState(!1),2),handleGuard=_React_useState[0],setHandleGuard=_React_useState[1],handleExpandAll=function(node){void 0===node.expanded&&node.children&&(node.expanded=expandAll,node.children&&node.children.forEach(handleExpandAll))},handleChangeList=function(type,e){var checked=e.target.checked,key=e.target.getAttribute("data-key"),traverseNodes=function(node){if(node.id===key){if("buttonclick"===type){var expanded=node.expanded;node.expanded=!expanded}if("inputchange"===type&&(node.status=checked?"checked":"unchecked",checked&&checkParent(list,node),node.children&&node.children.forEach(checkAllNodes)),"keydown"===type){var code=keyboardKey.r.getCode(e);code===keyboardKey.r.Enter||code===keyboardKey.r[" "]?node.expanded=!0:code===keyboardKey.r.Escape&&(node.expanded=!1)}}node.children&&node.children.forEach(traverseNodes)},checkAllNodes=function(node){"status"in node&&(node.status=checked?"checked":"unchecked",node.checked=checked),node.children&&node.children.forEach(checkAllNodes)};list.forEach(traverseNodes),null==onChange||onChange(_to_consumable_array(list))},handleButtonClick=react.useCallback(function(e){handleChangeList("buttonclick",e)},[]),handleChange=react.useCallback(function(e){handleChangeList("inputchange",e)},[]),handleKeyDown=react.useCallback(function(e){handleChangeList("keydown",e)},[]);return react.useEffect(function(){expandAll&&(list.forEach(handleExpandAll),null==onChange||onChange(_to_consumable_array(list)))},[expandAll]),handleGuard||(setNodeStatus(list),setHandleGuard(!0)),updateNodeStatus(list),(0,jsx_runtime.jsx)(SelectTree_TreeItem,_object_spread_props(_object_spread({},props),{children:list.map(function(node){return(0,jsx_runtime.jsx)(SelectTreeNode,{node:node,onChange:handleChange,dimension:dimension,expandAll:expandAll,onButtonClick:handleButtonClick,onKeyDown:handleKeyDown,level:0},node.id)})}))};SelectTree.displayName="SelectTree";try{SelectTree.displayName="SelectTree",SelectTree.__docgenInfo={description:"",displayName:"SelectTree",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:{value:"false"},description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/index.tsx#SelectTree"]={docgenInfo:SelectTree.__docgenInfo,name:"SelectTree",path:"src/components/SelectTree/index.tsx#SelectTree"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),FolderSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/FolderSolid.svg");let RNBLogoLight=__webpack_require__.p+"static/media/src/components/SelectTree/stories/RNBLogoLight.svg";function SelectTreeM_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectTreeM_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectTreeM_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SelectTreeM_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectTreeM_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectTreeM_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SelectTreeM_template_define_property(target,key,source[key])})}return target}function SelectTreeM_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SelectTreeM_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SelectTreeM_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SelectTreeM_template_sliced_to_array(arr,i){return SelectTreeM_template_array_with_holes(arr)||SelectTreeM_template_iterable_to_array_limit(arr,i)||SelectTreeM_template_unsupported_iterable_to_array(arr,i)||SelectTreeM_template_non_iterable_rest()}function SelectTreeM_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectTreeM_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectTreeM_template_array_like_to_array(o,minLen)}}var selectTreeListM=[{label:(0,jsx_runtime.jsx)(T.T,{as:"div",style:{marginTop:-2},font:"Subtitle/Subtitle 2",children:"Текст заголовка, первый уровень компонента, размер M 40 1"}),id:"1",checked:!1,children:[{label:"Текст раскрывающейся строки, второй уровень компонента 1",id:"1-1",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 2",id:"1-2",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 3",id:"1-3",checked:!1,children:[{label:(0,jsx_runtime.jsx)("img",{src:RNBLogoLight,alt:""}),id:"2-1",checked:!1},{label:"Текст  строки, третий уровень компонента 2",id:"2-2"},{label:"Текст  строки, третий уровень компонента 3",id:"2-3"},{label:"Текст  строки, третий уровень компонента 4",id:"2-4"},{label:"Текст  строки с чекбоксом, третий уровень компонента 5",id:"2-5",checked:!1,children:[{label:"Текст  строки с чекбоксом, четвертый уровень компонента 1",id:"3-1",checked:!1},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",id:"3-2",checked:!1},{label:`Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике
    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней
    вложенности.`,id:"3-3",checked:!1},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 4",id:"3-4",checked:!1,children:[{label:"Текст  строки с чекбоксом, пятый уровень компонента 1",id:"4-1",checked:!1},{label:"Текст  строки с чекбоксом, пятый уровень компонента 2",id:"4-2",checked:!1}]}]}]}]},{label:"Текст заголовка, первый уровень компонента, размер M 40 2",id:"2",checked:!1},{label:"Текст заголовка, первый уровень компонента, размер M 40 3",id:"3"},{label:"Текст заголовка, первый уровень компонента, размер M 40 4",id:"4"}],SelectTreeMTemplate=function(props){var _React_useState=SelectTreeM_template_sliced_to_array(react.useState(selectTreeListM),2),dataList=_React_useState[0],setDataList=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectTree,SelectTreeM_template_object_spread_props(SelectTreeM_template_object_spread({},props),{style:{maxWidth:"768px"},list:dataList,dimension:"m",onChange:function(dataList){return setDataList(dataList)}}))})};try{SelectTreeMTemplate.displayName="SelectTreeMTemplate",SelectTreeMTemplate.__docgenInfo={description:"",displayName:"SelectTreeMTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:null,description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/stories/SelectTreeM.template.tsx#SelectTreeMTemplate"]={docgenInfo:SelectTreeMTemplate.__docgenInfo,name:"SelectTreeMTemplate",path:"src/components/SelectTree/stories/SelectTreeM.template.tsx#SelectTreeMTemplate"})}catch(__react_docgen_typescript_loader_error){}function SelectTreeS_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectTreeS_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectTreeS_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SelectTreeS_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectTreeS_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectTreeS_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SelectTreeS_template_define_property(target,key,source[key])})}return target}function SelectTreeS_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SelectTreeS_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SelectTreeS_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SelectTreeS_template_sliced_to_array(arr,i){return SelectTreeS_template_array_with_holes(arr)||SelectTreeS_template_iterable_to_array_limit(arr,i)||SelectTreeS_template_unsupported_iterable_to_array(arr,i)||SelectTreeS_template_non_iterable_rest()}function SelectTreeS_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectTreeS_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectTreeS_template_array_like_to_array(o,minLen)}}var selectTreeListS=[{label:"Текст заголовка, первый уровень компонента, размер S 32 1",id:"1",checked:!1,children:[{label:"Текст раскрывающейся строки, второй уровень компонента 1",id:"1-1",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 2",id:"1-2",checked:!1,icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 3",id:"1-3",checked:!1,children:[{label:(0,jsx_runtime.jsx)("img",{src:RNBLogoLight,alt:""}),id:"2-1",checked:!1},{label:"Текст  строки, третий уровень компонента 2",id:"2-2"},{label:"Текст  строки с чекбоксом, третий уровень компонента 3",id:"2-3",checked:!1,children:[{label:`Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике
    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней
    вложенности.`,id:"3-1",checked:!1},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",id:"3-2",checked:!1,children:[{label:"Текст  строки с чекбоксом, пятый уровень компонента 1",id:"4-1",checked:!1},{label:"Текст  строки с чекбоксом, пятый уровень компонента 2",id:"4-2",checked:!1}]}]}]}]},{label:"Текст заголовка, первый уровень компонента, размер S 32 2",id:"2",checked:!1}],SelectTreeSTemplate=function(props){var _React_useState=SelectTreeS_template_sliced_to_array(react.useState(selectTreeListS),2),dataList=_React_useState[0],setDataList=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectTree,SelectTreeS_template_object_spread_props(SelectTreeS_template_object_spread({},props),{style:{maxWidth:"768px"},list:dataList,dimension:"s",onChange:function(dataList){return setDataList(dataList)}}))})};try{SelectTreeSTemplate.displayName="SelectTreeSTemplate",SelectTreeSTemplate.__docgenInfo={description:"",displayName:"SelectTreeSTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:null,description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/stories/SelectTreeS.template.tsx#SelectTreeSTemplate"]={docgenInfo:SelectTreeSTemplate.__docgenInfo,name:"SelectTreeSTemplate",path:"src/components/SelectTree/stories/SelectTreeS.template.tsx#SelectTreeSTemplate"})}catch(__react_docgen_typescript_loader_error){}function SelectTreeNoCheckbox_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SelectTreeNoCheckbox_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SelectTreeNoCheckbox_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SelectTreeNoCheckbox_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SelectTreeNoCheckbox_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SelectTreeNoCheckbox_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SelectTreeNoCheckbox_template_define_property(target,key,source[key])})}return target}function SelectTreeNoCheckbox_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SelectTreeNoCheckbox_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SelectTreeNoCheckbox_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SelectTreeNoCheckbox_template_sliced_to_array(arr,i){return SelectTreeNoCheckbox_template_array_with_holes(arr)||SelectTreeNoCheckbox_template_iterable_to_array_limit(arr,i)||SelectTreeNoCheckbox_template_unsupported_iterable_to_array(arr,i)||SelectTreeNoCheckbox_template_non_iterable_rest()}function SelectTreeNoCheckbox_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SelectTreeNoCheckbox_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SelectTreeNoCheckbox_template_array_like_to_array(o,minLen)}}var treeViewList=[{label:"Текст заголовка, первый уровень компонента, размер M 40 1",id:"1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{}),children:[{label:"Текст раскрывающейся строки, второй уровень компонента 1",id:"1-1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 2",id:"1-2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст раскрывающейся строки, второй уровень компонента 3",id:"1-3",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{}),children:[{label:(0,jsx_runtime.jsx)("img",{src:RNBLogoLight,alt:""}),id:"2-1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки, третий уровень компонента 2",id:"2-2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки, третий уровень компонента 3",id:"2-3",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки, третий уровень компонента 4",id:"2-4",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки с чекбоксом, третий уровень компонента 5",id:"2-5",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{}),children:[{label:"Текст  строки с чекбоксом, четвертый уровень компонента 1",id:"3-1",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:"Текст  строки с чекбоксом, четвертый уровень компонента 2",id:"3-2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})},{label:`Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике
    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней
    вложенности.`,id:"3-3",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})}]}]}]},{label:"Текст заголовка, первый уровень компонента, размер M 40 2",id:"2",icon:(0,jsx_runtime.jsx)(FolderSolid.h,{})}],SelectTreeNoCheckboxTemplate=function(props){var _React_useState=SelectTreeNoCheckbox_template_sliced_to_array(react.useState(treeViewList),2),dataList=_React_useState[0],setDataList=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SelectTree,SelectTreeNoCheckbox_template_object_spread_props(SelectTreeNoCheckbox_template_object_spread({},props),{style:{maxWidth:"768px"},list:dataList,dimension:"m",onChange:function(dataList){return setDataList(dataList)},expandAll:!0}))})};try{SelectTreeNoCheckboxTemplate.displayName="SelectTreeNoCheckboxTemplate",SelectTreeNoCheckboxTemplate.__docgenInfo={description:"",displayName:"SelectTreeNoCheckboxTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},list:{defaultValue:null,description:"Данные для отображения вложенного списка",name:"list",required:!0,type:{name:"SelectTreeNodeProps[]"}},expandAll:{defaultValue:null,description:"Раскрытие всех веток",name:"expandAll",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Колбек на изменение списка компонента (dataList - измененный вложенный список)",name:"onChange",required:!1,type:{name:"((dataList: SelectTreeNodeProps[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectTree/stories/SelectTreeNoCheckbox.template.tsx#SelectTreeNoCheckboxTemplate"]={docgenInfo:SelectTreeNoCheckboxTemplate.__docgenInfo,name:"SelectTreeNoCheckboxTemplate",path:"src/components/SelectTree/stories/SelectTreeNoCheckbox.template.tsx#SelectTreeNoCheckboxTemplate"})}catch(__react_docgen_typescript_loader_error){}let SelectTreeM_templateraw_namespaceObject=`import * as React from 'react';

import { SelectTree, T } from '@admiral-ds/react-ui';
import type { SelectTreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

import type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';
import RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';

const selectTreeListM = [
  {
    label: (
      <T as="div" style={{ marginTop: -2 }} font="Subtitle/Subtitle 2">
        Текст заголовка, первый уровень компонента, размер M 40 1
      </T>
    ),
    id: '1',
    checked: false,
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        checked: false,
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        checked: false,
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        checked: false,
        children: [
          {
            label: <img src={RNBLogoLight} alt={''} />,
            id: '2-1',
            checked: false,
          },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },
          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3' },
          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4' },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',
            id: '2-5',
            checked: false,
            children: [
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', checked: false },
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', checked: false },
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +
                  '    вложенности.',
                id: '3-3',
                checked: false,
              },
              {
                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 4',
                id: '3-4',
                checked: false,
                children: [
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', checked: false },
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', checked: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 2', id: '2', checked: false },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 3', id: '3' },
  { label: 'Текст заголовка, первый уровень компонента, размер M 40 4', id: '4' },
];

export const SelectTreeMTemplate = (props: SelectTreeProps) => {
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(selectTreeListM);

  return (
    <>
      <SelectTree
        {...props}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="m"
        onChange={(dataList) => setDataList(dataList)}
      />
    </>
  );
};
`,SelectTreeS_templateraw_namespaceObject=`import * as React from 'react';

import { SelectTree } from '@admiral-ds/react-ui';
import type { SelectTreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

import type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';
import RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';

const selectTreeListS = [
  {
    label: 'Текст заголовка, первый уровень компонента, размер S 32 1',
    id: '1',
    checked: false,
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        checked: false,
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        checked: false,
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        checked: false,
        children: [
          {
            label: <img src={RNBLogoLight} alt={''} />,
            id: '2-1',
            checked: false,
          },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2' },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 3',
            id: '2-3',
            checked: false,
            children: [
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +
                  '    вложенности.',
                id: '3-1',
                checked: false,
              },
              {
                label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2',
                id: '3-2',
                checked: false,
                children: [
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 1', id: '4-1', checked: false },
                  { label: 'Текст  строки с чекбоксом, пятый уровень компонента 2', id: '4-2', checked: false },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { label: 'Текст заголовка, первый уровень компонента, размер S 32 2', id: '2', checked: false },
];

export const SelectTreeSTemplate = (props: SelectTreeProps) => {
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(selectTreeListS);

  return (
    <>
      <SelectTree
        {...props}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="s"
        onChange={(dataList) => setDataList(dataList)}
      />
    </>
  );
};
`,SelectTreeNoCheckbox_templateraw_namespaceObject=`import * as React from 'react';

import { SelectTree } from '@admiral-ds/react-ui';
import type { SelectTreeProps } from '@admiral-ds/react-ui';
import { ReactComponent as FolderSolid } from '@admiral-ds/icons/build/documents/FolderSolid.svg';

import type { SelectTreeNodeProps } from '#src/components/SelectTree/SelectTreeNode';
import RNBLogoLight from '#src/components/SelectTree/stories/RNBLogoLight.svg';

const treeViewList = [
  {
    label: 'Текст заголовка, первый уровень компонента, размер M 40 1',
    id: '1',
    icon: <FolderSolid />,
    children: [
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 1',
        id: '1-1',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 2',
        id: '1-2',
        icon: <FolderSolid />,
      },
      {
        label: 'Текст раскрывающейся строки, второй уровень компонента 3',
        id: '1-3',
        icon: <FolderSolid />,
        children: [
          {
            label: <img src={RNBLogoLight} alt={''} />,
            id: '2-1',
            icon: <FolderSolid />,
          },
          { label: 'Текст  строки, третий уровень компонента 2', id: '2-2', icon: <FolderSolid /> },
          { label: 'Текст  строки, третий уровень компонента 3', id: '2-3', icon: <FolderSolid /> },
          { label: 'Текст  строки, третий уровень компонента 4', id: '2-4', icon: <FolderSolid /> },
          {
            label: 'Текст  строки с чекбоксом, третий уровень компонента 5',
            id: '2-5',
            icon: <FolderSolid />,
            children: [
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 1', id: '3-1', icon: <FolderSolid /> },
              { label: 'Текст  строки с чекбоксом, четвертый уровень компонента 2', id: '3-2', icon: <FolderSolid /> },
              {
                label:
                  'Текст  строки с чекбоксом, четвертый уровень компонента. Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов по логике\\n' +
                  '    чекбоксов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней\\n' +
                  '    вложенности.',
                id: '3-3',
                icon: <FolderSolid />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Текст заголовка, первый уровень компонента, размер M 40 2',
    id: '2',
    icon: <FolderSolid />,
  },
];

export const SelectTreeNoCheckboxTemplate = (props: SelectTreeProps) => {
  const [dataList, setDataList] = React.useState<SelectTreeNodeProps[]>(treeViewList);

  return (
    <>
      <SelectTree
        {...props}
        style={{ maxWidth: '768px' }}
        list={dataList}
        dimension="m"
        onChange={(dataList) => setDataList(dataList)}
        expandAll
      />
    </>
  );
};
`;function SelectTree_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SelectTree_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SelectTree_stories_define_property(target,key,source[key])})}return target}function SelectTree_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function SelectTree_stories_templateObject(){var data=SelectTree_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return SelectTree_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(SelectTree_stories_templateObject());let SelectTree_stories={title:"Deprecated/SelectTree (Deprecated используйте Tree компонент)",decorators:void 0,component:SelectTree,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"(Deprecated используйте Tree компонент) Компонент используется для отображения дерева вложенных списков с возможностью выбора отдельных пунктов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках присутствует до 6ти уровней вложенности."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12178%3A70930"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12236%3A71124"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A12752"}]},argTypes:{dimension:{options:["m","s"]},expandAll:{control:{type:"boolean"}},list:{control:!1}}};var SelectTreeM={render:function(props){return(0,jsx_runtime.jsx)(SelectTreeMTemplate,SelectTree_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectTreeM_templateraw_namespaceObject}}},name:"Select Tree. Размер М"},SelectTreeS={render:function(props){return(0,jsx_runtime.jsx)(SelectTreeSTemplate,SelectTree_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectTreeS_templateraw_namespaceObject}}},name:"Select Tree. Размер S"},SelectTreeNoCheckbox={render:function(props){return(0,jsx_runtime.jsx)(SelectTreeNoCheckboxTemplate,SelectTree_stories_object_spread({},props))},parameters:{docs:{source:{code:SelectTreeNoCheckbox_templateraw_namespaceObject}}},name:"Select Tree. Развернутый список без опции выбора"};SelectTreeM.parameters={...SelectTreeM.parameters,docs:{...SelectTreeM.parameters?.docs,source:{originalSource:`{
  render: SelectTreeMStory,
  parameters: {
    docs: {
      source: {
        code: SelectTreeMRaw
      }
    }
  },
  name: 'Select Tree. Размер М'
}`,...SelectTreeM.parameters?.docs?.source}}},SelectTreeS.parameters={...SelectTreeS.parameters,docs:{...SelectTreeS.parameters?.docs,source:{originalSource:`{
  render: SelectTreeSStory,
  parameters: {
    docs: {
      source: {
        code: SelectTreeSRaw
      }
    }
  },
  name: 'Select Tree. Размер S'
}`,...SelectTreeS.parameters?.docs?.source}}},SelectTreeNoCheckbox.parameters={...SelectTreeNoCheckbox.parameters,docs:{...SelectTreeNoCheckbox.parameters?.docs,source:{originalSource:`{
  render: SelectTreeNoCheckboxStory,
  parameters: {
    docs: {
      source: {
        code: SelectTreeNoCheckboxRaw
      }
    }
  },
  name: 'Select Tree. Развернутый список без опции выбора'
}`,...SelectTreeNoCheckbox.parameters?.docs?.source}}};let __namedExportsOrder=["SelectTreeM","SelectTreeS","SelectTreeNoCheckbox"]}}]);
//# sourceMappingURL=components-SelectTree-stories-SelectTree-stories.cd83c195.iframe.bundle.js.map