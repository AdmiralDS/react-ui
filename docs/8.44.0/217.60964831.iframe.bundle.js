"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[217],{"./src/components/Range/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Range});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),throttle=__webpack_require__("./src/components/common/utils/throttle.ts"),calcValueByPos=function(trackWidth,sliderPosition,minValue,maxValue,step){var sliderValue=sliderPosition*(trackWidth?(maxValue-minValue)/trackWidth:0);"number"==typeof step&&(!step||step>=1)&&(sliderValue=Math.round(sliderValue));var calcValue=minValue+sliderValue;if(step&&"number"==typeof step&&(calcValue=Math.round(calcValue/step)*step,step.toString().includes("."))){var _step_toString_match,decimal=null==(_step_toString_match=step.toString().match(/\.(\d+)/))?void 0:_step_toString_match[1].length;calcValue=+calcValue.toFixed(decimal)}return minValue+sliderValue===minValue&&calcValue!==minValue?minValue:minValue+sliderValue===maxValue&&calcValue!==maxValue?maxValue:calcValue},calcValue=function(e,trackRef,minValue,maxValue,step){var _trackRef_current,_trackRef_current1,trackLeft=(null==(_trackRef_current=trackRef.current)?void 0:_trackRef_current.getBoundingClientRect().left)||0,trackWidth=(null==(_trackRef_current1=trackRef.current)?void 0:_trackRef_current1.getBoundingClientRect().width)||0,cursorPosition=e.changedTouches?e.changedTouches[0].pageX:e.pageX;return cursorPosition<=trackLeft&&(cursorPosition=trackLeft),cursorPosition>=trackLeft+trackWidth&&(cursorPosition=trackLeft+trackWidth),calcValueByPos(trackWidth,Math.round(cursorPosition-trackLeft),minValue,maxValue,step)},sortNum=function(arr){return arr[0]>arr[1]?[arr[1],arr[0]]:[arr[0],arr[1]]},arraysEqual=function(arr1,arr2){return arr1.length===arr2.length&&arr1.every(function(value,index){return value===arr2[index]})},calcSliderCoords=function(value,minValue,maxValue,rangeWidth){var percents=(rangeWidth?rangeWidth/(maxValue-minValue):0)*(value>=0?value-minValue:-minValue+value)/rangeWidth*100;return(percents=percents>100?100:percents)<0?0:percents},styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),animation=__webpack_require__("./src/components/skeleton/animation.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  position: relative;
  -webkit-tap-highlight-color: transparent;
  cursor: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
  & > * {
    visibility: hidden;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: `,`px;
  [data-disabled='true'] && {
    pointer-events: none;
  }

  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  height: 2px;
  background: var(--admiral-color-Neutral_Neutral20, `,`);
  [data-disabled='true'] && {
    background: var(--admiral-color-Neutral_Neutral20, `,`);
  }
  width: 100%;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  height: 2px;
  transform: translateY(-50%);
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
  display: block;
  [data-disabled='true'] && {
    background: var(--admiral-color-Neutral_Neutral30, `,`);
  }
  position: absolute;
  height: 2px;
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  transition:
    left `,`,
    right `,`;
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
  position: absolute;
  width: `,`px;
  height: `,`px;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
  top: 2px;
  transition: left `,`;
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
  position: relative;
  width: `,`px;
  height: `,`px;
  background: var(--admiral-color-Primary_Primary60Main, `,`);
  border-radius: 50%;
  &:before {
    position: absolute;
    content: '';
    width: `,`px;
    height: `,`px;
    background: var(--admiral-color-Special_StaticWhite, `,`);
    top: `,`px;
    bottom: `,`px;
    right: `,`px;
    left: `,`px;
    border-radius: 50%;
  }
  &:hover {
    background: var(--admiral-color-Primary_Primary70, `,`);
  }

  `,`

  [data-disabled='true'] && {
    background: var(--admiral-color-Neutral_Neutral30, `,`);
    pointer-events: none;
  }
`]);return _templateObject7=function _templateObject(){return data},data}var TRANSITION_ANIMATION="ease-in 0.3s",Wrapper=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.$disabled?"not-allowed":p.$skeleton?"default":"pointer"}),skeletonMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),animation.h),TrackWrapper=styled_components_browser_esm.Ay.div(_templateObject2(),function(param){return"s"===param.$dimension?20:24},function(param){return param.$skeleton&&skeletonMixin}),Track=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 20"]},function(p){return p.theme.color["Neutral/Neutral 20"]}),DefaultTrack=styled_components_browser_esm.Ay.div(_templateObject4()),FilledTrack=styled_components_browser_esm.Ay.div(_templateObject5(),function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(param){return param.$animation?TRANSITION_ANIMATION:"none"},function(param){return param.$animation?TRANSITION_ANIMATION:"none"}),Thumb=styled_components_browser_esm.Ay.div(_templateObject6(),function(param){return"s"===param.$dimension?16:20},function(param){return"s"===param.$dimension?16:20},function(param){return param.$animation?TRANSITION_ANIMATION:"none"}),ThumbCircle=styled_components_browser_esm.Ay.div(_templateObject7(),function(param){return"s"===param.$dimension?16:20},function(param){return"s"===param.$dimension?16:20},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(param){return"s"===param.$dimension?6:8},function(param){return"s"===param.$dimension?6:8},function(p){return p.theme.color["Special/Static White"]},function(param){return"s"===param.$dimension?5:6},function(param){return"s"===param.$dimension?5:6},function(param){return"s"===param.$dimension?5:6},function(param){return"s"===param.$dimension?5:6},function(p){return p.theme.color["Primary/Primary 70"]},function(param){var $active=param.$active,theme=param.theme;return $active&&"background: var(--admiral-color-Primary_Primary70, ".concat(theme.color["Primary/Primary 70"],");")},function(p){return p.theme.color["Neutral/Neutral 30"]});function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var Range=function(_param){var _param_minValue=_param.minValue,minValue=void 0===_param_minValue?0:_param_minValue,_param_maxValue=_param.maxValue,maxValue=void 0===_param_maxValue?20:_param_maxValue,userValue=_param.value,onChange=_param.onChange,onRangeMouseUp=_param.onRangeMouseUp,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_step=_param.step,step=void 0===_param_step?1:_param_step,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,props=_object_without_properties(_param,["minValue","maxValue","value","onChange","onRangeMouseUp","disabled","step","dimension","skeleton"]),value=Array.isArray(userValue)&&2===userValue.length&&"number"==typeof userValue[0]&&"number"==typeof userValue[1]?sortNum(userValue):[minValue,maxValue],_useState=_sliced_to_array((0,react.useState)(!1),2),isDraging=_useState[0],setDrag=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),isDraging2=_useState1[0],setDrag2=_useState1[1],_useState2=_sliced_to_array((0,react.useState)(!0),2),animation=_useState2[0],setAnimation=_useState2[1],_useState3=_sliced_to_array((0,react.useState)(0),2),rangeWidth=_useState3[0],setRangeWidth=_useState3[1],filledRef=(0,react.useRef)(null),trackRef=(0,react.useRef)(null),sliderRef=(0,react.useRef)(null),slider2Ref=(0,react.useRef)(null);(0,react.useLayoutEffect)(function(){var slider1Coords,slider2Coords,newValue=value;if(step&&"any"!==step&&(newValue=[Math.round(newValue[0]/step)*step,Math.round(newValue[1]/step)*step],step.toString().includes("."))){var _step_toString_match,decimal=null==(_step_toString_match=step.toString().match(/\.(\d+)/))?void 0:_step_toString_match[1].length;newValue=[+newValue[0].toFixed(decimal),+newValue[1].toFixed(decimal)]}slider1Coords=calcSliderCoords(value[0],minValue,maxValue,rangeWidth),slider2Coords=calcSliderCoords(value[1],minValue,maxValue,rangeWidth),sliderRef.current&&slider2Ref.current&&filledRef.current&&(sliderRef.current.style.left="".concat(slider1Coords,"%"),slider2Ref.current.style.left="".concat(slider2Coords,"%"),filledRef.current.style.left="".concat(slider1Coords,"%"),filledRef.current.style.right="".concat(100-slider2Coords,"%"))},[value,rangeWidth,minValue,maxValue,step]),(0,react.useLayoutEffect)(function(){if(trackRef.current){var resizeObserver=new ResizeObserver(function(entries){entries.forEach(function(entry){return setRangeWidth(entry.contentRect.width||0)})});return resizeObserver.observe(trackRef.current),function(){resizeObserver.disconnect()}}},[setRangeWidth]);var _throttle=_sliced_to_array((0,throttle.n)(function(e){updateSlider(e)},50),2),moveListener=_throttle[0],freeResources=_throttle[1];(0,react.useEffect)(function(){return(isDraging||isDraging2)&&!disabled&&(document.addEventListener("mousemove",moveListener),document.addEventListener("mouseup",handleSliderMouseUp),document.addEventListener("touchmove",moveListener),document.addEventListener("touchend",handleSliderMouseUp),document.addEventListener("touchcancel",handleSliderMouseUp)),function(){freeResources(),document.removeEventListener("mousemove",moveListener),document.removeEventListener("mouseup",handleSliderMouseUp),document.removeEventListener("touchmove",moveListener),document.removeEventListener("touchend",handleSliderMouseUp),document.removeEventListener("touchcancel",handleSliderMouseUp)}});var updateSlider=function(e){if(setAnimation(!1),isDraging||isDraging2){var calcVal=calcValue(e,trackRef,minValue,maxValue,step);if(isDraging&&calcVal>value[1]){var newValue=[value[1],calcVal];setDrag(!1),setDrag2(!0),arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}else if(isDraging2&&calcVal<value[0]){var newValue1=[calcVal,value[0]];setDrag(!0),setDrag2(!1),arraysEqual(sortNum(newValue1),value)||onChange(e,sortNum(newValue1))}else{var newValue2=isDraging?[calcVal,value[1]]:[value[0],calcVal];arraysEqual(sortNum(newValue2),value)||onChange(e,sortNum(newValue2))}}},onSliderClick=function(_e,slider){"first"===slider?setDrag(!0):setDrag2(!0),setAnimation(!0)},handleSliderMouseUp=function(e){var calcVal=calcValue(e,trackRef,minValue,maxValue,step);if(null==onRangeMouseUp||onRangeMouseUp(),isDraging&&calcVal>value[1]){var newValue=[value[1],calcVal];arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}if(isDraging2&&calcVal<value[0]){var newValue1=[calcVal,value[0]];arraysEqual(sortNum(newValue1),value)||onChange(e,sortNum(newValue1))}else{var newValue2=isDraging?[calcVal,value[1]]:[value[0],calcVal];arraysEqual(sortNum(newValue2),value)||onChange(e,sortNum(newValue2))}setAnimation(!0),setDrag(!1),setDrag2(!1)},onTrackClick=function(e){var calcVal=calcValue(e,trackRef,minValue,maxValue,step);if(Math.abs(value[1]-calcVal)<Math.abs(calcVal-value[0]))arraysEqual(sortNum([value[0],calcVal]),value)||onChange(e,sortNum([value[0],calcVal])),onSliderClick(e,"second");else if(Math.abs(value[1]-calcVal)>Math.abs(calcVal-value[0]))arraysEqual(sortNum([calcVal,value[1]]),value)||onChange(e,sortNum([calcVal,value[1]])),onSliderClick(e,"first");else if(Math.abs(value[1]-calcVal)===Math.abs(calcVal-value[0])){var slider=value[0]===value[1]?calcVal<value[0]?"first":"second":"first",newValue="first"===slider?[calcVal,value[1]]:[value[0],calcVal];arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue)),onSliderClick(e,slider)}};return(0,jsx_runtime.jsx)(Wrapper,_object_spread_props(_object_spread({"data-disabled":disabled,$disabled:disabled,$skeleton:skeleton},props),{children:(0,jsx_runtime.jsx)(TrackWrapper,{$dimension:dimension,$skeleton:skeleton,onTouchStart:onTrackClick,onMouseDown:onTrackClick,children:(0,jsx_runtime.jsxs)(Track,{children:[(0,jsx_runtime.jsx)(FilledTrack,{ref:filledRef,$animation:animation}),(0,jsx_runtime.jsxs)(DefaultTrack,{ref:trackRef,children:[(0,jsx_runtime.jsx)(Thumb,{ref:sliderRef,$animation:animation,$dimension:dimension,children:(0,jsx_runtime.jsx)(ThumbCircle,{$dimension:dimension,onTouchStart:function(e){var _props_onTouchStart;e.stopPropagation(),null==(_props_onTouchStart=props.onTouchStart)||_props_onTouchStart.call(props,e),onSliderClick(e,"first")},onMouseDown:function(e){var _props_onMouseDown;e.stopPropagation(),null==(_props_onMouseDown=props.onMouseDown)||_props_onMouseDown.call(props,e),onSliderClick(e,"first")},$active:isDraging})}),(0,jsx_runtime.jsx)(Thumb,{ref:slider2Ref,$animation:animation,$dimension:dimension,children:(0,jsx_runtime.jsx)(ThumbCircle,{$dimension:dimension,onTouchStart:function(e){var _props_onTouchStart;e.stopPropagation(),null==(_props_onTouchStart=props.onTouchStart)||_props_onTouchStart.call(props,e),onSliderClick(e,"second")},onMouseDown:function(e){var _props_onMouseDown;e.stopPropagation(),null==(_props_onMouseDown=props.onMouseDown)||_props_onMouseDown.call(props,e),onSliderClick(e,"second")},$active:isDraging2})})]})]})})}))};Range.displayName="Range";try{Range.displayName="Range",Range.__docgenInfo={description:"",displayName:"Range",props:{value:{defaultValue:null,description:"Значение компонента",name:"value",required:!0,type:{name:"NumberRange"}},onChange:{defaultValue:null,description:"Коллбек на изменение состояния",name:"onChange",required:!0,type:{name:"(event: any, value: NumberRange) => void"}},onRangeMouseUp:{defaultValue:null,description:"Колбек, который срабатывает по окончании изменения значения (по окончании перетаскивания ползунка или клика на полосу диапазона)",name:"onRangeMouseUp",required:!1,type:{name:"(() => void)"}},minValue:{defaultValue:{value:"0"},description:"Минимальное значение",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"20"},description:"Максимальное значение",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:`Шаг слайдера. Это либо строка any, либо положительное число, по умолчанию 1.
Если этот параметр не установлен в any, компонент принимает только кратные step значения, в диапазоне minValue - maxValue`,name:"step",required:!1,type:{name:'number | "any"'}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Range/index.tsx#Range"]={docgenInfo:Range.__docgenInfo,name:"Range",path:"src/components/Range/index.tsx#Range"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/throttle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__.d(__webpack_exports__,{n:()=>throttle});var throttle=function(fn,delay){var timeout,wait=!1,cancelled=!1;return[function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];if(!cancelled&&!wait){var val=fn.apply(void 0,_to_consumable_array(args));return wait=!0,timeout=setTimeout(function(){wait=!1},delay),val}},function(){cancelled=!0,clearTimeout(timeout)}]}}}]);