"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[763],{"./src/components/Anchor/stories/Anchor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnchorPlayground:()=>AnchorPlayground,AnchorTree:()=>AnchorTree,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Anchor_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
  &:before {
    position: absolute;
    inset-inline-start: 0;
    top: 0;
    height: 100%;
    border-inline-start: 2px solid var(--admiral-color-Neutral_Neutral20, `,`);
    content: ' ';
  }
`]);return _templateObject=function _templateObject(){return data},data}var AnchorContainer=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 20"]});AnchorContainer.displayName="AnchorContainer";var typography=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function AnchorItem_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AnchorItem_templateObject(){var data=AnchorItem_tagged_template_literal([`
  height: `,`px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`]);return AnchorItem_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=AnchorItem_tagged_template_literal([`
  box-sizing: border-box;
  text-decoration: none;
  color: `,`;

  padding: `,`;

  `,`;

  `,`

  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, `,`);
  }

  &:active {
    background-color: var(--admiral-color-Opacity_Press, `,`);
  }
`]);return _templateObject1=function _templateObject(){return data},data}var singleLineMixin=(0,styled_components_browser_esm.AH)(AnchorItem_templateObject(),function(param){return"m"===param.$dimension?28:24}),AnchorItemLink=styled_components_browser_esm.Ay.a(_templateObject1(),function(p){return p.$active?"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")")},function(p){return"m"===p.$dimension?"6px 8px 6px ".concat(18+16*p.$level,"px"):"4px 8px 4px ".concat(18+16*p.$level,"px")},function(p){return"m"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Caption/Caption 1"]},function(p){return!p.$multilineView&&singleLineMixin},function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Opacity/Press"]});AnchorItemLink.displayName="AnchorItemLink";var AnchorItem=(0,react.forwardRef)(function(_param,ref){var active=_param.active,_param_dimension=_param.dimension,_param_level=_param.level,_param_multilineView=_param.multilineView,children=_param.children,props=_object_without_properties(_param,["active","dimension","level","multilineView","children"]);return(0,jsx_runtime.jsx)(AnchorItemLink,_object_spread_props(_object_spread({},props),{$dimension:void 0===_param_dimension?"m":_param_dimension,$multilineView:void 0!==_param_multilineView&&_param_multilineView,$active:active,$level:void 0===_param_level?0:_param_level,ref:ref,children:children}))});AnchorItem.displayName="AnchorItem";try{AnchorItem.displayName="AnchorItemLink",AnchorItem.__docgenInfo={description:"",displayName:"AnchorItemLink",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"m"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},level:{defaultValue:{value:"0"},description:"",name:"level",required:!1,type:{name:"number"}},multilineView:{defaultValue:{value:"false"},description:"",name:"multilineView",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Anchor/AnchorItem.tsx#AnchorItemLink"]={docgenInfo:AnchorItemLink.__docgenInfo,name:"AnchorItemLink",path:"src/components/Anchor/AnchorItem.tsx#AnchorItemLink"})}catch(__react_docgen_typescript_loader_error){}function ActiveVerticalSelector_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ActiveVerticalSelector_templateObject(){var data=ActiveVerticalSelector_tagged_template_literal([`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: `,`px;
  width: `,`px;
  height: `,`px;
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  transition: `,`;
`]);return ActiveVerticalSelector_templateObject=function _templateObject(){return data},data}var ActiveVerticalSelector=styled_components_browser_esm.Ay.div(ActiveVerticalSelector_templateObject(),function(p){return p.$top},2,function(p){return p.$height},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.$transition?"all 0.2s ease-out":"unset"});ActiveVerticalSelector.displayName="ActiveVerticalTabSelector";try{ActiveVerticalSelector.displayName="ActiveVerticalTabSelector",ActiveVerticalSelector.__docgenInfo={description:"",displayName:"ActiveVerticalTabSelector",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Anchor/ActiveVerticalSelector.tsx#ActiveVerticalTabSelector"]={docgenInfo:ActiveVerticalTabSelector.__docgenInfo,name:"ActiveVerticalTabSelector",path:"src/components/Anchor/ActiveVerticalSelector.tsx#ActiveVerticalTabSelector"})}catch(__react_docgen_typescript_loader_error){}var sharpMatcherRegex=/#([\S ]+)$/,getInternalCurrentAnchor=function(container,_links){var _offsetTop=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,_bounds=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,linkSections=[];return(_links.forEach(function(link){var sharpLinkMatch=sharpMatcherRegex.exec(null==link?void 0:link.toString());if(sharpLinkMatch){var target=document.getElementById(sharpLinkMatch[1]);if(target){var top=getOffsetTop(target,container);top<=_offsetTop+_bounds&&linkSections.push({link:link,top:top})}}}),linkSections.length)?linkSections.reduce(function(prev,curr){return curr.top>prev.top?curr:prev}).link:""};function getOffsetTop(element,container){if(!element.getClientRects().length)return 0;var rect=element.getBoundingClientRect();return rect.width||rect.height?container===window?rect.top-element.ownerDocument.documentElement.clientTop:rect.top-container.getBoundingClientRect().top:rect.top}var debounce=__webpack_require__("./src/components/common/utils/debounce.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function Anchor_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Anchor_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Anchor_define_property(target,key,source[key])})}return target}function Anchor_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Anchor_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Anchor_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Anchor_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=Anchor_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Anchor_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function getDefaultContainer(){return window}var treeToFlat=function(tree){var level=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,parent=arguments.length>2?arguments[2]:void 0;return tree.reduce(function(acc,item){var item1,key=item.key.toString(),href=item.href,title=item.title;if(acc.push({key:key,href:href,title:title,parent:parent,level:level}),item.children&&(item1=item).children&&Array.isArray(item1.children)&&item1.children.length>0){var map=treeToFlat(item.children,level+1,key);return _to_consumable_array(acc).concat(_to_consumable_array(map))}return acc},[])},Anchor=(0,react.forwardRef)(function(_param,ref){var _itemsMap_,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_offsetTop=_param.offsetTop,offsetTop=void 0===_param_offsetTop?0:_param_offsetTop,_param_bounds=_param.bounds,bounds=void 0===_param_bounds?5:_param_bounds,_param_multilineView=_param.multilineView,multilineView=void 0!==_param_multilineView&&_param_multilineView,items=_param.items,getAnchorContainer=_param.getAnchorContainer,props=Anchor_object_without_properties(_param,["dimension","offsetTop","bounds","multilineView","items","getAnchorContainer"]),getCurrentContainer=null!=getAnchorContainer?getAnchorContainer:getDefaultContainer,itemsMap=(0,react.useMemo)(function(){return treeToFlat(items)},[items]),itemsWithRef=(0,react.useMemo)(function(){return itemsMap.map(function(item){return Anchor_object_spread_props(Anchor_object_spread({},item),{ref:(0,react.createRef)()})})},[itemsMap]),_useState=_sliced_to_array((0,react.useState)((null==(_itemsMap_=itemsMap[0])?void 0:_itemsMap_.href)||null),2),activeLink=_useState[0],setActiveLink=_useState[1],handleScroll=(0,react.useCallback)(function(){var links=itemsMap.map(function(param){return param.href});setActiveLink(getInternalCurrentAnchor(getCurrentContainer(),links,offsetTop,bounds))},[getAnchorContainer,itemsMap]),anchorContainerRef=(0,react.useRef)(null),_useState1=_sliced_to_array((0,react.useState)(0),2),selectorTop=_useState1[0],setSelectorTop=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(0),2),selectorHeight=_useState2[0],setSelectorHeight=_useState2[1],selectorRef=(0,react.useRef)(null),styleSelector=function(top,height){setSelectorTop(top),setSelectorHeight(height)};return(0,react.useEffect)(function(){if(null==(_anchorContainerRef_current=anchorContainerRef.current)?void 0:_anchorContainerRef_current.firstElementChild){var _anchorContainerRef_current,_anchorContainerRef_current1,resizeObserver=new ResizeObserver((0,debounce.s)(function setSelector(){var _itemsWithRef_filter_,_itemsWithRef_filter,_selectorRef_current,_selectorRef_current1,activeLinkRef=null==(_itemsWithRef_filter=itemsWithRef.filter(function(item){return item.href===activeLink}))||null==(_itemsWithRef_filter_=_itemsWithRef_filter[0])?void 0:_itemsWithRef_filter_.ref.current,top=parseFloat((null==(_selectorRef_current=selectorRef.current)?void 0:_selectorRef_current.style.top)||"0"),selectorHeight=parseFloat((null==(_selectorRef_current1=selectorRef.current)?void 0:_selectorRef_current1.style.height)||"0");if(activeLinkRef&&anchorContainerRef.current){var activeLinkHeight=activeLinkRef.getBoundingClientRect().height,activeLinkTop=activeLinkRef.getBoundingClientRect().top-anchorContainerRef.current.getBoundingClientRect().top+anchorContainerRef.current.scrollTop;(activeLinkTop!==top||activeLinkHeight!==selectorHeight)&&styleSelector(activeLinkTop,activeLinkHeight)}activeLinkRef||styleSelector(0,0)},100));return resizeObserver.observe(null==(_anchorContainerRef_current1=anchorContainerRef.current)?void 0:_anchorContainerRef_current1.firstElementChild),function(){resizeObserver.disconnect()}}},[itemsWithRef,activeLink,dimension,multilineView,offsetTop,bounds]),(0,react.useEffect)(function(){var container=getCurrentContainer();return container.addEventListener("scroll",handleScroll),function(){container.removeEventListener("scroll",handleScroll)}},[getAnchorContainer,handleScroll]),(0,jsx_runtime.jsxs)(AnchorContainer,Anchor_object_spread_props(Anchor_object_spread({},props),{ref:(0,refSetter.d)(ref,anchorContainerRef),children:[itemsWithRef.map(function(item){return(0,jsx_runtime.jsx)(AnchorItem,{ref:item.ref,dimension:dimension,multilineView:multilineView,href:item.href,active:item.href===activeLink,level:item.level,children:item.title},item.key)}),(0,jsx_runtime.jsx)(ActiveVerticalSelector,{$top:selectorTop,$height:selectorHeight,$transition:!0})]}))});Anchor.displayName="Anchor";try{Anchor.displayName="Anchor",Anchor.__docgenInfo={description:"",displayName:"Anchor",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},offsetTop:{defaultValue:{value:"0"},description:"Сдвиг сверху при расчете положения прокрутки, в пикселях",name:"offsetTop",required:!1,type:{name:"number"}},bounds:{defaultValue:{value:"5"},description:"Границы зоны якоря, в пикселях",name:"bounds",required:!1,type:{name:"number"}},multilineView:{defaultValue:{value:"false"},description:"Многострочное отображение текста, по умолчанию false",name:"multilineView",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Элементы для отображения",name:"items",required:!0,type:{name:"AnchorLinkItemProps[]"}},getAnchorContainer:{defaultValue:null,description:"Элемент для отслеживания скролла",name:"getAnchorContainer",required:!1,type:{name:"(() => HTMLElement | Window)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Anchor/index.tsx#Anchor"]={docgenInfo:Anchor.__docgenInfo,name:"Anchor",path:"src/components/Anchor/index.tsx#Anchor"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx");function AnchorPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AnchorPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AnchorPlayground_template_define_property(target,key,source[key])})}return target}function AnchorPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AnchorPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AnchorPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AnchorPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AnchorPlayground_template_templateObject(){var data=AnchorPlayground_template_tagged_template_literal([`
  display: flex;
  height: 400px;
`]);return AnchorPlayground_template_templateObject=function _templateObject(){return data},data}function AnchorPlayground_template_templateObject1(){var data=AnchorPlayground_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  overflow: scroll;
  scroll-behavior: smooth;
`]);return AnchorPlayground_template_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=AnchorPlayground_template_tagged_template_literal([`
  flex: 1 0 500px;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=AnchorPlayground_template_tagged_template_literal([`
  flex: 0 1 20%;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=AnchorPlayground_template_tagged_template_literal([`
  height: 24px;
`]);return _templateObject4=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(AnchorPlayground_template_templateObject()),Content=styled_components_browser_esm.Ay.div(AnchorPlayground_template_templateObject1()),ContentItem=styled_components_browser_esm.Ay.div(_templateObject2()),StyledAnchor=(0,styled_components_browser_esm.Ay)(Anchor)(_templateObject3()),Separator=styled_components_browser_esm.Ay.div(_templateObject4()),AnchorItems=[{key:"part-1",href:"#part-1",title:"Part 1"},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}],AnchorPlaygroundTemplate=function(props){var containerRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Компонент служит для упрощения навигации по длинным страницам и состоит из якорных гиперссылок, которые, при клике на них, направляют пользователя на соответствующую часть страницы.",(0,jsx_runtime.jsx)(Separator,{}),"Имеет одинаковую компоновку при использовании как справа, так и слева относительно контента страницы.",(0,jsx_runtime.jsx)(Separator,{}),"Ширина компонента задается пользователем. Высота формируется контентом.",(0,jsx_runtime.jsx)(Separator,{}),"Компонент не используется на мобильных устройствах"]}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(Content,{ref:containerRef,children:[(0,jsx_runtime.jsx)(ContentItem,{id:"part-1",style:{background:"rgb(255,220,220)"}}),(0,jsx_runtime.jsx)(ContentItem,{id:"part-2",style:{background:"rgb(220,255,220)"}}),(0,jsx_runtime.jsx)(ContentItem,{id:"part-3",style:{background:"rgb(220,220,255)"}})]}),(0,jsx_runtime.jsx)(StyledAnchor,AnchorPlayground_template_object_spread_props(AnchorPlayground_template_object_spread({},props),{getAnchorContainer:function(){return containerRef.current||window},items:AnchorItems}))]})]})};try{AnchorPlaygroundTemplate.displayName="AnchorPlaygroundTemplate",AnchorPlaygroundTemplate.__docgenInfo={description:"",displayName:"AnchorPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},offsetTop:{defaultValue:null,description:"Сдвиг сверху при расчете положения прокрутки, в пикселях",name:"offsetTop",required:!1,type:{name:"number"}},bounds:{defaultValue:null,description:"Границы зоны якоря, в пикселях",name:"bounds",required:!1,type:{name:"number"}},multilineView:{defaultValue:null,description:"Многострочное отображение текста, по умолчанию false",name:"multilineView",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Элементы для отображения",name:"items",required:!0,type:{name:"AnchorLinkItemProps[]"}},getAnchorContainer:{defaultValue:null,description:"Элемент для отслеживания скролла",name:"getAnchorContainer",required:!1,type:{name:"(() => HTMLElement | Window)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Anchor/stories/AnchorPlayground.template.tsx#AnchorPlaygroundTemplate"]={docgenInfo:AnchorPlaygroundTemplate.__docgenInfo,name:"AnchorPlaygroundTemplate",path:"src/components/Anchor/stories/AnchorPlayground.template.tsx#AnchorPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function AnchorTree_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AnchorTree_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AnchorTree_template_define_property(target,key,source[key])})}return target}function AnchorTree_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AnchorTree_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AnchorTree_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AnchorTree_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AnchorTree_template_templateObject(){var data=AnchorTree_template_tagged_template_literal([`
  display: flex;
  height: 400px;
`]);return AnchorTree_template_templateObject=function _templateObject(){return data},data}function AnchorTree_template_templateObject1(){var data=AnchorTree_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  overflow: scroll;
  scroll-behavior: smooth;
`]);return AnchorTree_template_templateObject1=function _templateObject(){return data},data}function AnchorTree_template_templateObject2(){var data=AnchorTree_template_tagged_template_literal([`
  flex: 1 0 500px;
`]);return AnchorTree_template_templateObject2=function _templateObject(){return data},data}function AnchorTree_template_templateObject3(){var data=AnchorTree_template_tagged_template_literal([`
  flex: 0 1 20%;
`]);return AnchorTree_template_templateObject3=function _templateObject(){return data},data}function AnchorTree_template_templateObject4(){var data=AnchorTree_template_tagged_template_literal([`
  height: 24px;
`]);return AnchorTree_template_templateObject4=function _templateObject(){return data},data}var AnchorTree_template_Wrapper=styled_components_browser_esm.Ay.div(AnchorTree_template_templateObject()),AnchorTree_template_Content=styled_components_browser_esm.Ay.div(AnchorTree_template_templateObject1()),AnchorTree_template_ContentItem=styled_components_browser_esm.Ay.div(AnchorTree_template_templateObject2()),AnchorTree_template_StyledAnchor=(0,styled_components_browser_esm.Ay)(Anchor)(AnchorTree_template_templateObject3()),AnchorTree_template_Separator=styled_components_browser_esm.Ay.div(AnchorTree_template_templateObject4()),AnchorTree_template_AnchorItems=[{key:"part-1",href:"#part-1",title:"Part 1",children:[{key:"part-1-1",href:"#part-1-1",title:"Part 1.1",children:[{key:"part-1-1-1",href:"#part-1-1-1",title:"Part 1.1-1"},{key:"part-1-1-2",href:"#part-1-1-2",title:"Part 1.1-2"}]},{key:"part-1-2",href:"#part-1-2",title:"Part 1.2",children:[{key:"part-1-2-1",href:"#part-1-2-1",title:"Part 1.2-1"},{key:"part-1-2-2",href:"#part-1-2-2",title:"Part 1.2-2"}]}]},{key:"part-2",href:"#part-2",title:"Part 2"},{key:"part-3",href:"#part-3",title:"Part 3"}],AnchorTreeTemplate=function(props){var containerRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Основные настройки компонента",(0,jsx_runtime.jsx)(AnchorTree_template_Separator,{}),(0,jsx_runtime.jsx)("li",{children:"Два размера — M и S"}),(0,jsx_runtime.jsx)("li",{children:"До трех уровней вложенности"}),(0,jsx_runtime.jsx)("li",{children:"Написание пунктов в одну строку (обрезание текста) или несколько строк"})]}),(0,jsx_runtime.jsx)(AnchorTree_template_Separator,{}),(0,jsx_runtime.jsxs)(AnchorTree_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(AnchorTree_template_Content,{ref:containerRef,children:[(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-1",style:{background:"rgb(235, 74, 74)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-1-1",style:{background:"rgb(172, 109, 109)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-1-1-1",style:{background:"rgb(212, 105, 34)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-1-1-2",style:{background:"rgb(205, 147, 32)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-1-2",style:{background:"rgb(227, 62, 202)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-1-2-1",style:{background:"rgb(132, 16, 110)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-1-2-2",style:{background:"rgb(194, 110, 177)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-2",style:{background:"rgb(65, 220, 65)"}}),(0,jsx_runtime.jsx)(AnchorTree_template_ContentItem,{id:"part-3",style:{background:"rgb(97, 97, 243)"}})]}),(0,jsx_runtime.jsx)(AnchorTree_template_StyledAnchor,AnchorTree_template_object_spread_props(AnchorTree_template_object_spread({},props),{style:{width:"100px"},getAnchorContainer:function(){return containerRef.current||window},items:AnchorTree_template_AnchorItems}))]})]})};try{AnchorTreeTemplate.displayName="AnchorTreeTemplate",AnchorTreeTemplate.__docgenInfo={description:"",displayName:"AnchorTreeTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},offsetTop:{defaultValue:null,description:"Сдвиг сверху при расчете положения прокрутки, в пикселях",name:"offsetTop",required:!1,type:{name:"number"}},bounds:{defaultValue:null,description:"Границы зоны якоря, в пикселях",name:"bounds",required:!1,type:{name:"number"}},multilineView:{defaultValue:null,description:"Многострочное отображение текста, по умолчанию false",name:"multilineView",required:!1,type:{name:"boolean"}},items:{defaultValue:null,description:"Элементы для отображения",name:"items",required:!0,type:{name:"AnchorLinkItemProps[]"}},getAnchorContainer:{defaultValue:null,description:"Элемент для отслеживания скролла",name:"getAnchorContainer",required:!1,type:{name:"(() => HTMLElement | Window)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Anchor/stories/AnchorTree.template.tsx#AnchorTreeTemplate"]={docgenInfo:AnchorTreeTemplate.__docgenInfo,name:"AnchorTreeTemplate",path:"src/components/Anchor/stories/AnchorTree.template.tsx#AnchorTreeTemplate"})}catch(__react_docgen_typescript_loader_error){}function Anchor_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Anchor_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Anchor_stories_define_property(target,key,source[key])})}return target}let Anchor_stories={title:"Admiral-2.1/Anchor",decorators:void 0,component:Anchor,parameters:{docs:{source:{code:null}}},argTypes:{dimension:{options:["m","s"],defaultValue:"m",control:{type:"radio"}},theme:{control:!1},items:{control:!1}}};var AnchorPlayground={render:function(props){return(0,jsx_runtime.jsx)(AnchorPlaygroundTemplate,Anchor_stories_object_spread({},props))},parameters:{docs:{source:{code:`import { useRef } from 'react';
import styled from 'styled-components';

import { Anchor, T } from '@admiral-ds/react-ui';
import type { AnchorProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  height: 400px;
\`;

const Content = styled.div\`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  overflow: scroll;
  scroll-behavior: smooth;
\`;

const ContentItem = styled.div\`
  flex: 1 0 500px;
\`;

const StyledAnchor = styled(Anchor)\`
  flex: 0 1 20%;
\`;

const Separator = styled.div\`
  height: 24px;
\`;

const AnchorItems = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];

export const AnchorPlaygroundTemplate = (props: AnchorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Компонент служит для упрощения навигации по длинным страницам и состоит из якорных гиперссылок, которые, при
        клике на них, направляют пользователя на соответствующую часть страницы.
        <Separator />
        Имеет одинаковую компоновку при использовании как справа, так и слева относительно контента страницы.
        <Separator />
        Ширина компонента задается пользователем. Высота формируется контентом.
        <Separator />
        Компонент не используется на мобильных устройствах
      </T>
      <Separator />
      <Wrapper>
        <Content ref={containerRef}>
          <ContentItem id="part-1" style={{ background: 'rgb(255,220,220)' }} />
          <ContentItem id="part-2" style={{ background: 'rgb(220,255,220)' }} />
          <ContentItem id="part-3" style={{ background: 'rgb(220,220,255)' }} />
        </Content>

        <StyledAnchor {...props} getAnchorContainer={() => containerRef.current || window} items={AnchorItems} />
      </Wrapper>
    </>
  );
};
`},viewMode:"story"}},name:"Anchor. Playground"},AnchorTree={render:function(props){return(0,jsx_runtime.jsx)(AnchorTreeTemplate,Anchor_stories_object_spread({},props))},parameters:{docs:{source:{code:`import { useRef } from 'react';
import styled from 'styled-components';

import { Anchor, T } from '@admiral-ds/react-ui';
import type { AnchorLinkItemProps, AnchorProps } from '@admiral-ds/react-ui';

const Wrapper = styled.div\`
  display: flex;
  height: 400px;
\`;

const Content = styled.div\`
  display: flex;
  flex-direction: column;
  flex: 1 0 80%;
  overflow: scroll;
  scroll-behavior: smooth;
\`;

const ContentItem = styled.div\`
  flex: 1 0 500px;
\`;

const StyledAnchor = styled(Anchor)\`
  flex: 0 1 20%;
\`;

const Separator = styled.div\`
  height: 24px;
\`;

const AnchorItems: Array<AnchorLinkItemProps> = [
  {
    key: 'part-1',
    href: '#part-1',
    title: 'Part 1',
    children: [
      {
        key: 'part-1-1',
        href: '#part-1-1',
        title: 'Part 1.1',
        children: [
          {
            key: 'part-1-1-1',
            href: '#part-1-1-1',
            title: 'Part 1.1-1',
          },
          {
            key: 'part-1-1-2',
            href: '#part-1-1-2',
            title: 'Part 1.1-2',
          },
        ],
      },
      {
        key: 'part-1-2',
        href: '#part-1-2',
        title: 'Part 1.2',
        children: [
          {
            key: 'part-1-2-1',
            href: '#part-1-2-1',
            title: 'Part 1.2-1',
          },
          {
            key: 'part-1-2-2',
            href: '#part-1-2-2',
            title: 'Part 1.2-2',
          },
        ],
      },
    ],
  },
  {
    key: 'part-2',
    href: '#part-2',
    title: 'Part 2',
  },
  {
    key: 'part-3',
    href: '#part-3',
    title: 'Part 3',
  },
];

export const AnchorTreeTemplate = (props: AnchorProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Основные настройки компонента
        <Separator />
        <li>Два размера — M и S</li>
        <li>До трех уровней вложенности</li>
        <li>Написание пунктов в одну строку (обрезание текста) или несколько строк</li>
      </T>
      <Separator />
      <Wrapper>
        <Content ref={containerRef}>
          <ContentItem id="part-1" style={{ background: 'rgb(235, 74, 74)' }} />
          <ContentItem id="part-1-1" style={{ background: 'rgb(172, 109, 109)' }} />
          <ContentItem id="part-1-1-1" style={{ background: 'rgb(212, 105, 34)' }} />
          <ContentItem id="part-1-1-2" style={{ background: 'rgb(205, 147, 32)' }} />
          <ContentItem id="part-1-2" style={{ background: 'rgb(227, 62, 202)' }} />
          <ContentItem id="part-1-2-1" style={{ background: 'rgb(132, 16, 110)' }} />
          <ContentItem id="part-1-2-2" style={{ background: 'rgb(194, 110, 177)' }} />
          <ContentItem id="part-2" style={{ background: 'rgb(65, 220, 65)' }} />
          <ContentItem id="part-3" style={{ background: 'rgb(97, 97, 243)' }} />
        </Content>

        <StyledAnchor
          {...props}
          style={{ width: '100px' }}
          getAnchorContainer={() => containerRef.current || window}
          items={AnchorItems}
        />
      </Wrapper>
    </>
  );
};
`},viewMode:"story"}},name:"Anchor. Tree"};AnchorPlayground.parameters={...AnchorPlayground.parameters,docs:{...AnchorPlayground.parameters?.docs,source:{originalSource:`{
  render: AnchorPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: AnchorPlaygroundRaw
      },
      viewMode: 'story'
    }
  },
  name: 'Anchor. Playground'
}`,...AnchorPlayground.parameters?.docs?.source}}},AnchorTree.parameters={...AnchorTree.parameters,docs:{...AnchorTree.parameters?.docs,source:{originalSource:`{
  render: AnchorTreeStory,
  parameters: {
    docs: {
      source: {
        code: AnchorTreeRaw
      },
      viewMode: 'story'
    }
  },
  name: 'Anchor. Tree'
}`,...AnchorTree.parameters?.docs?.source}}};let __namedExportsOrder=["AnchorPlayground","AnchorTree"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Special/Static White"'},{value:'"Neutral/Neutral 50"'},{value:'"Primary/Primary 70"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/utils/debounce.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>debounce});function debounce(f,delay){var timer=setTimeout(function(){});return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout(function(){return f.apply(args)},delay)}}},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, `,`);
    border-color: var(--admiral-color-Neutral_Neutral20, `,`);
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 2s ease infinite;
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonAnimation=function(props){return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject(),props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"])},skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),function(props){return skeletonAnimation(props)});try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:`Dynamically adjust the rendered component or HTML tag, e.g.
\`\`\`
const StyledButton = styled.button\`\`

<StyledButton as="a" href="/foo">
  I'm an anchor now
</StyledButton>
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Anchor-stories-Anchor-stories.96342611.iframe.bundle.js.map