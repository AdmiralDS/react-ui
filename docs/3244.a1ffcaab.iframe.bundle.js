"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3244],{"./src/components/Range/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Range});var react=__webpack_require__("./node_modules/react/index.js"),throttle=__webpack_require__("./src/components/common/utils/throttle.ts");const calcValue=(e,trackRef,minValue,maxValue,step)=>{const trackLeft=trackRef.current?.getBoundingClientRect().left||0,trackWidth=trackRef.current?.getBoundingClientRect().width||0;let cursorPosition=e.changedTouches?e.changedTouches[0].pageX:e.pageX;cursorPosition<=trackLeft&&(cursorPosition=trackLeft),cursorPosition>=trackLeft+trackWidth&&(cursorPosition=trackLeft+trackWidth);const newValue=((trackWidth,sliderPosition,minValue,maxValue,step)=>{let sliderValue=sliderPosition*(trackWidth?(maxValue-minValue)/trackWidth:0);"number"==typeof step&&(!step||step>=1)&&(sliderValue=Math.round(sliderValue));let calcValue=minValue+sliderValue;if(step&&"number"==typeof step&&(calcValue=Math.round(calcValue/step)*step,step.toString().includes("."))){const decimal=step.toString().match(/\.(\d+)/)?.[1].length;calcValue=+calcValue.toFixed(decimal)}return minValue+sliderValue===minValue&&calcValue!==minValue?minValue:minValue+sliderValue===maxValue&&calcValue!==maxValue?maxValue:calcValue})(trackWidth,Math.round(cursorPosition-trackLeft),minValue,maxValue,step);return newValue},sortNum=arr=>arr[0]>arr[1]?[arr[1],arr[0]]:[arr[0],arr[1]],arraysEqual=(arr1,arr2)=>arr1.length===arr2.length&&arr1.every(((value,index)=>value===arr2[index])),calcSliderCoords=(value,minValue,maxValue,rangeWidth)=>{let percents=(rangeWidth?rangeWidth/(maxValue-minValue):0)*(value>=0?value-minValue:-minValue+value)/rangeWidth*100;return percents=percents>100?100:percents,percents=percents<0?0:percents,percents};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),animation=__webpack_require__("./src/components/skeleton/animation.tsx");const Wrapper=styled_components_browser_esm.cp.div.withConfig({displayName:"style__Wrapper",componentId:"sc-14flfup-0"})(["position:relative;-webkit-tap-highlight-color:transparent;"]),skeletonMixin=(0,styled_components_browser_esm.gV)(["",";pointer-events:none;& > *{visibility:hidden;}"],animation.Y),TrackWrapper=styled_components_browser_esm.cp.div.withConfig({displayName:"style__TrackWrapper",componentId:"sc-14flfup-1"})(["position:relative;width:100%;cursor:pointer;display:flex;align-items:center;height:","px;[data-disabled='true'] &&{cursor:auto;pointer-events:none;}",";"],(({$dimension})=>"s"===$dimension?20:24),(({$skeleton})=>$skeleton&&skeletonMixin)),Track=styled_components_browser_esm.cp.div.withConfig({displayName:"style__Track",componentId:"sc-14flfup-2"})(["height:2px;background:",";[data-disabled='true'] &&{background:",";}width:100%;"],(({theme})=>theme.color["Neutral/Neutral 20"]),(({theme})=>theme.color["Neutral/Neutral 20"])),DefaultTrack=styled_components_browser_esm.cp.div.withConfig({displayName:"style__DefaultTrack",componentId:"sc-14flfup-3"})(["height:2px;transform:translateY(-50%);"]),FilledTrack=styled_components_browser_esm.cp.div.withConfig({displayName:"style__FilledTrack",componentId:"sc-14flfup-4"})(["display:block;[data-disabled='true'] &&{background:",";}position:absolute;height:2px;background-color:",";transition:left ",",right ",";"],(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({$animation})=>$animation?"ease-in 0.3s":"none"),(({$animation})=>$animation?"ease-in 0.3s":"none")),Thumb=styled_components_browser_esm.cp.div.withConfig({displayName:"style__Thumb",componentId:"sc-14flfup-5"})(["position:absolute;width:","px;height:","px;align-items:center;justify-content:center;transform:translateX(-50%) translateY(-50%);border-radius:50%;top:2px;transition:left ",";"],(({$dimension})=>"s"===$dimension?16:20),(({$dimension})=>"s"===$dimension?16:20),(({$animation})=>$animation?"ease-in 0.3s":"none")),ThumbCircle=styled_components_browser_esm.cp.div.withConfig({displayName:"style__ThumbCircle",componentId:"sc-14flfup-6"})(["position:relative;width:","px;height:","px;background:",";border-radius:50%;&:before{position:absolute;content:'';width:","px;height:","px;background:",";top:","px;bottom:","px;right:","px;left:","px;border-radius:50%;}&:hover{background:",";}"," [data-disabled='true'] &&{background:",";pointer-events:none;}"],(({$dimension})=>"s"===$dimension?16:20),(({$dimension})=>"s"===$dimension?16:20),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({$dimension})=>"s"===$dimension?6:8),(({$dimension})=>"s"===$dimension?6:8),(({theme})=>theme.color["Special/Static White"]),(({$dimension})=>"s"===$dimension?5:6),(({$dimension})=>"s"===$dimension?5:6),(({$dimension})=>"s"===$dimension?5:6),(({$dimension})=>"s"===$dimension?5:6),(({theme})=>theme.color["Primary/Primary 70"]),(({$active,theme})=>$active&&`background: ${theme.color["Primary/Primary 70"]};`),(({theme})=>theme.color["Neutral/Neutral 30"]));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Range=({minValue=0,maxValue=20,value:userValue,onChange,onRangeMouseUp,disabled=!1,step=1,dimension="m",skeleton=!1,...props})=>{const value=Array.isArray(userValue)&&2===userValue.length&&"number"==typeof userValue[0]&&"number"==typeof userValue[1]?sortNum(userValue):[minValue,maxValue],[isDraging,setDrag]=(0,react.useState)(!1),[isDraging2,setDrag2]=(0,react.useState)(!1),[animation,setAnimation]=(0,react.useState)(!0),[rangeWidth,setRangeWidth]=(0,react.useState)(0),filledRef=(0,react.useRef)(null),trackRef=(0,react.useRef)(null),sliderRef=(0,react.useRef)(null),slider2Ref=(0,react.useRef)(null);(0,react.useLayoutEffect)((()=>{let newValue=value;if(step&&"any"!==step){if(newValue=[Math.round(newValue[0]/step)*step,Math.round(newValue[1]/step)*step],step.toString().includes(".")){const decimal=step.toString().match(/\.(\d+)/)?.[1].length;newValue=[+newValue[0].toFixed(decimal),+newValue[1].toFixed(decimal)]}}!function correctSliderPosition(value){const slider1Coords=calcSliderCoords(value[0],minValue,maxValue,rangeWidth),slider2Coords=calcSliderCoords(value[1],minValue,maxValue,rangeWidth);sliderRef.current&&slider2Ref.current&&filledRef.current&&(sliderRef.current.style.left=`${slider1Coords}%`,slider2Ref.current.style.left=`${slider2Coords}%`,filledRef.current.style.left=`${slider1Coords}%`,filledRef.current.style.right=100-slider2Coords+"%")}(value)}),[value,rangeWidth,minValue,maxValue,step]),(0,react.useLayoutEffect)((()=>{if(trackRef.current){const resizeObserver=new ResizeObserver((entries=>{entries.forEach((entry=>setRangeWidth(entry.contentRect.width||0)))}));return resizeObserver.observe(trackRef.current),()=>{resizeObserver.disconnect()}}}),[setRangeWidth]);const[moveListener,freeResources]=(0,throttle.o)((e=>{updateSlider(e)}),50);(0,react.useEffect)((()=>(!isDraging&&!isDraging2||disabled||(document.addEventListener("mousemove",moveListener),document.addEventListener("mouseup",handleSliderMouseUp),document.addEventListener("touchmove",moveListener),document.addEventListener("touchend",handleSliderMouseUp),document.addEventListener("touchcancel",handleSliderMouseUp)),()=>{freeResources(),document.removeEventListener("mousemove",moveListener),document.removeEventListener("mouseup",handleSliderMouseUp),document.removeEventListener("touchmove",moveListener),document.removeEventListener("touchend",handleSliderMouseUp),document.removeEventListener("touchcancel",handleSliderMouseUp)})));const updateSlider=e=>{if(setAnimation(!1),isDraging||isDraging2){const calcVal=calcValue(e,trackRef,minValue,maxValue,step);if(isDraging&&calcVal>value[1]){const newValue=[value[1],calcVal];setDrag(!1),setDrag2(!0),arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}else if(isDraging2&&calcVal<value[0]){const newValue=[calcVal,value[0]];setDrag(!0),setDrag2(!1),arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}else{const newValue=isDraging?[calcVal,value[1]]:[value[0],calcVal];arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}}},onSliderClick=(e,slider)=>{"first"===slider?setDrag(!0):setDrag2(!0),setAnimation(!0)},handleSliderMouseUp=e=>{const calcVal=calcValue(e,trackRef,minValue,maxValue,step);if(onRangeMouseUp?.(),isDraging&&calcVal>value[1]){const newValue=[value[1],calcVal];arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}if(isDraging2&&calcVal<value[0]){const newValue=[calcVal,value[0]];arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}else{const newValue=isDraging?[calcVal,value[1]]:[value[0],calcVal];arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue))}setAnimation(!0),setDrag(!1),setDrag2(!1)},onTrackClick=e=>{const calcVal=calcValue(e,trackRef,minValue,maxValue,step);if(Math.abs(value[1]-calcVal)<Math.abs(calcVal-value[0]))arraysEqual(sortNum([value[0],calcVal]),value)||onChange(e,sortNum([value[0],calcVal])),onSliderClick(0,"second");else if(Math.abs(value[1]-calcVal)>Math.abs(calcVal-value[0]))arraysEqual(sortNum([calcVal,value[1]]),value)||onChange(e,sortNum([calcVal,value[1]])),onSliderClick(0,"first");else if(Math.abs(value[1]-calcVal)===Math.abs(calcVal-value[0])){const slider=value[0]===value[1]?calcVal<value[0]?"first":"second":"first",newValue="first"===slider?[calcVal,value[1]]:[value[0],calcVal];arraysEqual(sortNum(newValue),value)||onChange(e,sortNum(newValue)),onSliderClick(0,slider)}};return(0,jsx_runtime.jsx)(Wrapper,{"data-disabled":disabled,...props,children:(0,jsx_runtime.jsx)(TrackWrapper,{$dimension:dimension,$skeleton:skeleton,onTouchStart:onTrackClick,onMouseDown:onTrackClick,children:(0,jsx_runtime.jsxs)(Track,{children:[(0,jsx_runtime.jsx)(FilledTrack,{ref:filledRef,$animation:animation}),(0,jsx_runtime.jsxs)(DefaultTrack,{ref:trackRef,children:[(0,jsx_runtime.jsx)(Thumb,{ref:sliderRef,$animation:animation,$dimension:dimension,children:(0,jsx_runtime.jsx)(ThumbCircle,{$dimension:dimension,onTouchStart:e=>{e.stopPropagation(),props.onTouchStart?.(e),onSliderClick(0,"first")},onMouseDown:e=>{e.stopPropagation(),props.onMouseDown?.(e),onSliderClick(0,"first")},$active:isDraging})}),(0,jsx_runtime.jsx)(Thumb,{ref:slider2Ref,$animation:animation,$dimension:dimension,children:(0,jsx_runtime.jsx)(ThumbCircle,{$dimension:dimension,onTouchStart:e=>{e.stopPropagation(),props.onTouchStart?.(e),onSliderClick(0,"second")},onMouseDown:e=>{e.stopPropagation(),props.onMouseDown?.(e),onSliderClick(0,"second")},$active:isDraging2})})]})]})})})};Range.displayName="Range",Range.displayName="Range";try{Range.displayName="Range",Range.__docgenInfo={description:"",displayName:"Range",props:{value:{defaultValue:null,description:"Значение компонента",name:"value",required:!0,type:{name:"NumberRange"}},onChange:{defaultValue:null,description:"Коллбек на изменение состояния",name:"onChange",required:!0,type:{name:"(event: any, value: NumberRange) => void"}},onRangeMouseUp:{defaultValue:null,description:"Колбек, который срабатывает по окончании изменения значения (по окончании перетаскивания ползунка или клика на полосу диапазона)",name:"onRangeMouseUp",required:!1,type:{name:"(() => void)"}},minValue:{defaultValue:{value:"0"},description:"Минимальное значение",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"20"},description:"Максимальное значение",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Шаг слайдера. Это либо строка any, либо положительное число, по умолчанию 1.\nЕсли этот параметр не установлен в any, компонент принимает только кратные step значения, в диапазоне minValue - maxValue",name:"step",required:!1,type:{name:'number | "any"'}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Range/index.tsx#Range"]={docgenInfo:Range.__docgenInfo,name:"Range",path:"src/components/Range/index.tsx#Range"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/throttle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>throttle});const throttle=(fn,delay)=>{let timeout,wait=!1,cancelled=!1;return[(...args)=>{if(cancelled)return;if(wait)return;const val=fn(...args);return wait=!0,timeout=window.setTimeout((()=>{wait=!1}),delay),val},()=>{cancelled=!0,clearTimeout(timeout)}]}},"./src/components/input/SliderRange/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>SliderRange});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_input_NumberInput__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/input/NumberInput/index.tsx"),_src_components_Range__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Range/index.tsx"),_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/input/NumberInput/utils.ts"),_src_components_input_Container__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/input/Container.tsx"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.cp.div.withConfig({displayName:"SliderRange__Wrapper",componentId:"sc-1wpqfkr-0"})(["position:relative;pointer-events:",";",";"],(p=>p.skeleton?"none":"all"),(({skeleton})=>skeleton&&_src_components_input_Container__WEBPACK_IMPORTED_MODULE_3__.cj)),InputsWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.cp.div.withConfig({displayName:"SliderRange__InputsWrapper",componentId:"sc-1wpqfkr-1"})(["display:flex;margin-bottom:16px;[data-dimension='s'] &{margin-bottom:12px;}& > div:first-child{margin-right:8px;}& > div{width:100%;}"]),SliderRange=({dimension,minValue=0,maxValue=20,step=1,precision=0,thousand=" ",prefix=["От","До"],suffix="₽",placeholder=[prefix[0]+" "+(0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.jQ)(String(minValue),precision,".",thousand)+" "+suffix,prefix[1]+" "+(0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.jQ)(String(maxValue),precision,".",thousand)+" "+suffix],value,defaultValue,onChange,input1:input1Props,input2:input2Props,disabled,skeleton=!1,readOnly,...props})=>{const rangeDimension="s"===dimension?dimension:"m",input1Ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),input2Ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[slider1,setSlider1]=react__WEBPACK_IMPORTED_MODULE_0__.useState(minValue),[slider2,setSlider2]=react__WEBPACK_IMPORTED_MODULE_0__.useState(maxValue),[innerInput1State,setInnerInput1State]=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue?.[0]||""),[innerInput2State,setInnerInput2State]=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue?.[1]||""),input1=value?.[0]||innerInput1State,input2=value?.[1]||innerInput2State,getFull=str=>(0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.jQ)(String(str),precision,".",thousand,!0);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(""===input1)setSlider1(minValue);else{const newSlider1=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(input1,precision));setSlider1(newSlider1)}}),[input1,minValue]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(""===input2)setSlider2(maxValue);else{const newSlider2=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(input2,precision));setSlider2(newSlider2)}}),[input2,maxValue]);const inputProps={dimension,precision,thousand,suffix,disabled,readOnly,displayPlusMinusIcons:!1,step};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper,{"data-dimension":dimension,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(InputsWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_input_NumberInput__WEBPACK_IMPORTED_MODULE_6__.WC,{ref:input1Ref,value:input1,prefix:prefix[0],placeholder:placeholder[0],skeleton,onChange:event=>{const newSlider1=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(event.target.value,precision)||minValue);setInnerInput1State(event.target.value),onChange?.([{str:event.target.value,num:newSlider1},{str:input2,num:slider2}])},onBlur:()=>{const value1Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(input1,precision)||minValue),value2Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(input2,precision)||maxValue);value1Num<minValue?input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input1Ref.current,{value:getFull(minValue)}):value1Num>value2Num-step&&input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input1Ref.current,{value:getFull(value2Num-step)})},...input1Props,...inputProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_input_NumberInput__WEBPACK_IMPORTED_MODULE_6__.WC,{ref:input2Ref,value:input2,prefix:prefix[1],placeholder:placeholder[1],skeleton,onChange:event=>{const newSlider2=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(event.target.value,precision)||maxValue);setInnerInput2State(event.target.value),onChange?.([{str:input1,num:slider1},{str:event.target.value,num:newSlider2}])},onBlur:()=>{const value1Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(input1,precision)||minValue),value2Num=Number((0,_src_components_input_NumberInput_utils__WEBPACK_IMPORTED_MODULE_4__.AL)(input2,precision)||maxValue);value2Num>maxValue?input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input2Ref.current,{value:getFull(maxValue)}):value2Num<value1Num+step&&input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input2Ref.current,{value:getFull(value1Num+step)})},...input2Props,...inputProps})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Range__WEBPACK_IMPORTED_MODULE_7__.E,{value:[slider1,slider2],skeleton,onChange:(event,value)=>{const[newSld1,newSld2]=value,newSlider1=newSld1<minValue?minValue:newSld1,newSlider2=newSld2>maxValue?maxValue:newSld2;input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input1Ref.current,{value:getFull(newSlider1)}),input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input2Ref.current,{value:getFull(newSlider2)})},onMouseDown:e=>{e.preventDefault()},onRangeMouseUp:()=>{slider1==slider2&&slider1+step<=maxValue?input2Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input2Ref.current,{value:getFull(slider2+step)}):slider1==slider2&&slider1+step>maxValue&&input1Ref.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_5__.g)(input1Ref.current,{value:getFull(slider1-step)})},minValue,maxValue,step,dimension:rangeDimension,disabled:disabled||readOnly})]})};SliderRange.displayName="SliderRange",SliderRange.displayName="SliderRange";try{SliderRange.displayName="SliderRange",SliderRange.__docgenInfo={description:"",displayName:"SliderRange",props:{value:{defaultValue:null,description:"Значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"value",required:!1,type:{name:"[string, string]"}},defaultValue:{defaultValue:null,description:"Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов)",name:"defaultValue",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"Колбек на изменение значений",name:"onChange",required:!1,type:{name:"((value: [{ str: string; num: number; }, { str: string; num: number; }]) => void)"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},minValue:{defaultValue:{value:"0"},description:"Минимальное значение слайдера",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"20"},description:"Максимальное значение слайдера",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"Шаг слайдера",name:"step",required:!1,type:{name:"number"}},precision:{defaultValue:{value:"0"},description:"точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:{value:""},description:"разделитель между тысячами",name:"thousand",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:"['От', 'До']"},description:"префикс (строка, которая выводится перед числовым значением)",name:"prefix",required:!1,type:{name:"[string, string]"}},suffix:{defaultValue:{value:"₽"},description:"суффикс (строка, которая выводится после числового значения)",name:"suffix",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"[\n    prefix[0] + ' ' + fitToCurrency(String(minValue), precision, '.', thousand) + ' ' + suffix,\n    prefix[1] + ' ' + fitToCurrency(String(maxValue), precision, '.', thousand) + ' ' + suffix,\n  ]"},description:"плейсхолдеры инпутов",name:"placeholder",required:!1,type:{name:"[string, string]"}},input1:{defaultValue:null,description:"Опции, которые можно передать в первый инпут",name:"input1",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},input2:{defaultValue:null,description:"Опции, которые можно передать во второй инпут",name:"input2",required:!1,type:{name:'Omit<TextInputProps, "onChange" | "readOnly">'}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Режим readOnly компонента",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SliderRange/index.tsx#SliderRange"]={docgenInfo:SliderRange.__docgenInfo,name:"SliderRange",path:"src/components/input/SliderRange/index.tsx#SliderRange"})}catch(__react_docgen_typescript_loader_error){}}}]);