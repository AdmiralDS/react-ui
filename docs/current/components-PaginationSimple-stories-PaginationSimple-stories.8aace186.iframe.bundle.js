"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[385],{"./src/components/PaginationSimple/stories/PaginationSimple.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PaginationSimple_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),uid=__webpack_require__("./src/components/common/uid.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  overflow-x: scroll;
  list-style: none;

  & > li {
    margin-right: 8px;
  }

  & > li:last-child {
    margin-right: 0;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4px;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  display: inline-flex;
  height: 4px;
  width: 16px;
  border-radius: 2px;
  background-color: var(--admiral-color-Neutral_Neutral20, `,`);

  [aria-selected='true'] & {
    background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  width: 24px;
  height: 12px;
  border-radius: var(--admiral-border-radius-Small, `,`);

  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: transparent;
  appearance: none;
  border: 2px solid transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    border-color: var(--admiral-color-Primary_Primary60Main, `,`);
  }
  &:focus,
  & > `,` {
    outline: none;
  }

  &:hover `,` {
    background-color: var(--admiral-color-Primary_Primary70, `,`);
  }
  &:active `,` {
    background-color: var(--admiral-color-Primary_Primary80, `,`);
  }
`]);return _templateObject3=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.ul(_templateObject()),ItemContentWrapper=styled_components_browser_esm.Ay.span(_templateObject1()),ItemContent=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 20"]},function(p){return p.theme.color["Primary/Primary 60 Main"]}),Item=styled_components_browser_esm.Ay.button(_templateObject3(),function(p){return(0,borderRadius.r2)(p.theme.shape)},function(p){return p.theme.color["Primary/Primary 60 Main"]},ItemContentWrapper,ItemContent,function(p){return p.theme.color["Primary/Primary 70"]},ItemContent,function(p){return p.theme.color["Primary/Primary 80"]}),PaginationSimple=function(_param){var currentItem=_param.currentItem,onChange=_param.onChange,children=_param.children,props=_object_without_properties(_param,["currentItem","onChange","children"]);return(0,jsx_runtime.jsx)(Wrapper,_object_spread_props(_object_spread({},props),{children:children&&react.Children.toArray(children).map(function(child,index){var id=(0,uid.L)();return(0,jsx_runtime.jsx)("li",{"aria-selected":currentItem===index,onClick:function(event){return onChange(event,index)},children:child},id)})}))},PaginationSimpleItem=function(props){return(0,jsx_runtime.jsx)(Item,_object_spread_props(_object_spread({},props),{children:(0,jsx_runtime.jsx)(ItemContentWrapper,{tabIndex:-1,children:(0,jsx_runtime.jsx)(ItemContent,{})})}))};PaginationSimple.displayName="PaginationSimple";try{PaginationSimple.displayName="PaginationSimple",PaginationSimple.__docgenInfo={description:"",displayName:"PaginationSimple",props:{totalItems:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.2, будет удалено в версии 9.х.х.
Взамен используйте children!

Общее количество секций`,name:"totalItems",required:!1,type:{name:"number"}},currentItem:{defaultValue:null,description:"Номер выбранной секции (нумерация с 0)",name:"currentItem",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"Колбек на изменение текущей секции",name:"onChange",required:!0,type:{name:"(event: any, item: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PaginationSimple/index.tsx#PaginationSimple"]={docgenInfo:PaginationSimple.__docgenInfo,name:"PaginationSimple",path:"src/components/PaginationSimple/index.tsx#PaginationSimple"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function PaginationSimplePlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function PaginationSimplePlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PaginationSimplePlayground_template_define_property(target,key,source[key])})}return target}function PaginationSimplePlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function PaginationSimplePlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):PaginationSimplePlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function PaginationSimplePlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=PaginationSimplePlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function PaginationSimplePlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var PaginationSimplePlaygroundTemplate=function(_param){var _param_currentItem=_param.currentItem,currentItem=void 0===_param_currentItem?1:_param_currentItem,args=PaginationSimplePlayground_template_object_without_properties(_param,["currentItem"]),_React_useState=_sliced_to_array(react.useState(currentItem),2),current=_React_useState[0],setCurrent=_React_useState[1];return react.useEffect(function(){setCurrent(currentItem)},[currentItem]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(PaginationSimple,PaginationSimplePlayground_template_object_spread_props(PaginationSimplePlayground_template_object_spread({},args),{currentItem:current,onChange:function(_,item){return setCurrent(item)},children:_to_consumable_array([,,,,,].keys()).map(function(item){return(0,jsx_runtime.jsx)(PaginationSimpleItem,{"aria-label":"Item ".concat(item)},item)})}))})};try{PaginationSimplePlaygroundTemplate.displayName="PaginationSimplePlaygroundTemplate",PaginationSimplePlaygroundTemplate.__docgenInfo={description:"",displayName:"PaginationSimplePlaygroundTemplate",props:{totalItems:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.8.2, будет удалено в версии 9.х.х.
Взамен используйте children!

Общее количество секций`,name:"totalItems",required:!1,type:{name:"number"}},currentItem:{defaultValue:{value:"1"},description:"Номер выбранной секции (нумерация с 0)",name:"currentItem",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Колбек на изменение текущей секции",name:"onChange",required:!0,type:{name:"(event: any, item: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PaginationSimple/stories/PaginationSimplePlayground.template.tsx#PaginationSimplePlaygroundTemplate"]={docgenInfo:PaginationSimplePlaygroundTemplate.__docgenInfo,name:"PaginationSimplePlaygroundTemplate",path:"src/components/PaginationSimple/stories/PaginationSimplePlayground.template.tsx#PaginationSimplePlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}let PaginationSimplePlayground_templateraw_namespaceObject=`import * as React from 'react';
import { PaginationSimple, PaginationSimpleItem } from '@admiral-ds/react-ui';
import type { PaginationSimpleProps } from '@admiral-ds/react-ui';

export const PaginationSimplePlaygroundTemplate = ({ currentItem = 1, ...args }: PaginationSimpleProps) => {
  const [current, setCurrent] = React.useState(currentItem);

  React.useEffect(() => {
    setCurrent(currentItem);
  }, [currentItem]);

  return (
    <>
      <PaginationSimple {...args} currentItem={current} onChange={(_, item) => setCurrent(item)}>
        {[...Array(5).keys()].map((item) => {
          return <PaginationSimpleItem aria-label={\`Item \${item}\`} key={item} />;
        })}
      </PaginationSimple>
    </>
  );
};
`;function PaginationSimple_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function PaginationSimple_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){PaginationSimple_stories_define_property(target,key,source[key])})}return target}function PaginationSimple_stories_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=PaginationSimple_stories_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function PaginationSimple_stories_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function PaginationSimple_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function PaginationSimple_stories_templateObject(){var data=PaginationSimple_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return PaginationSimple_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(PaginationSimple_stories_templateObject());let PaginationSimple_stories={title:"Deprecated/PaginationSimple (Deprecated используйте CarouselSlider)",decorators:void 0,component:PaginationSimple,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Deprecated используйте CarouselSlider."})},{}),design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A41560"}},argTypes:{totalItems:{control:!1},currentItem:{control:{type:"number"}}}};var Playground={render:function(_param){var currentItem=_param.currentItem,onChange=_param.onChange,props=PaginationSimple_stories_object_without_properties(_param,["currentItem","onChange"]);return(0,jsx_runtime.jsx)(PaginationSimplePlaygroundTemplate,PaginationSimple_stories_object_spread({currentItem:currentItem,onChange:onChange},props))},parameters:{docs:{source:{code:PaginationSimplePlayground_templateraw_namespaceObject}}}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:`{
  render: PaginationPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: PaginationSimplePlaygroundRaw
      }
    }
  }
}`,...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>uid});function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-PaginationSimple-stories-PaginationSimple-stories.8aace186.iframe.bundle.js.map