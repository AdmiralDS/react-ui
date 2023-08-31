"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2073],{"./src/components/Slider/stories/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,RangeExample:()=>RangeExample,SimpleExample:()=>SimpleExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Slider_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Slider=__webpack_require__("./src/components/Slider/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SliderPlaygroundTemplate=args=>{const[rangeValue,setRangeValue]=react.useState(args.value);return react.useEffect((()=>{setRangeValue(args.value)}),[args.value]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Slider.i,{...args,value:rangeValue,onChange:(e,value)=>{console.log({event:e.type,value}),setRangeValue(value)}})})};try{SliderPlaygroundTemplate.displayName="SliderPlaygroundTemplate",SliderPlaygroundTemplate.__docgenInfo={description:"",displayName:"SliderPlaygroundTemplate",props:{value:{defaultValue:null,description:"Значение компонента",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"Коллбек на изменение состояния",name:"onChange",required:!0,type:{name:"(event: any, value: number) => void"}},minValue:{defaultValue:null,description:"Минимальное значение",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:null,description:"Максимальное значение",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера. Это либо строка any, либо положительное число, по умолчанию 1.\nЕсли этот параметр не установлен в any, компонент принимает только кратные step значения, в диапазоне minValue - maxValue",name:"step",required:!1,type:{name:'number | "any"'}},decimal:{defaultValue:null,description:"Символ разделителя между целым и десятичным числом, используется при форматировании надписей к отметкам слайдера",name:"decimal",required:!1,type:{name:"string"}},precision:{defaultValue:null,description:"Точность (количество знаков в десятичной части числа), используется при форматировании надписей к отметкам слайдера",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:null,description:"Символ разделителя между тысячами, используется при форматировании надписей к отметкам слайдера",name:"thousand",required:!1,type:{name:"string"}},tickMarks:{defaultValue:null,description:"Массив отметок",name:"tickMarks",required:!1,type:{name:"number[]"}},renderTickMark:{defaultValue:null,description:"Render колбек для отрисовки кастомизированных подписей к отметкам слайдера",name:"renderTickMark",required:!1,type:{name:"((mark: string) => ReactNode)"}},disabled:{defaultValue:null,description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/stories/SliderPlayground.template.tsx#SliderPlaygroundTemplate"]={docgenInfo:SliderPlaygroundTemplate.__docgenInfo,name:"SliderPlaygroundTemplate",path:"src/components/Slider/stories/SliderPlayground.template.tsx#SliderPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}const SliderSimpleTemplate=()=>{const[rangeValue,setRangeValue]=react.useState(0);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Slider.i,{value:rangeValue,onChange:(e,value)=>{console.log({event:e.type,value}),setRangeValue(value)},minValue:10,maxValue:100})})},SliderRangeTemplate=()=>{const[rangeValue,setRangeValue]=react.useState(50);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Slider.i,{tickMarks:[25,50,75],value:rangeValue,maxValue:100,onChange:(e,value)=>{console.log({event:e.type,value}),setRangeValue(value)},renderTickMark:mark=>mark+" ₽"})})},Separator=styled_components_browser_esm.default.div.withConfig({displayName:"Sliderstories__Separator",componentId:"sc-vjs577-0"})(["height:20px;"]),Desc=styled_components_browser_esm.default.div.withConfig({displayName:"Sliderstories__Desc",componentId:"sc-vjs577-1"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsxs)(Desc,{children:["Слайдер с двумя значениями используется для произвольного выбора любого значения из заданного диапазона.",(0,jsx_runtime.jsx)(Separator,{}),"Слайдер с тремя и более значениями используется для выбора из набора заданных значений. В компоненте можно выбрать от 3 до 5 значений. Слайдер “притягивается” к ближайшему значению. Так же можно кликать на заданные значения."]});Description.displayName="Description";const Slider_stories={title:"Admiral-2.1/Slider",decorators:void 0,component:Slider.i,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61110"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61184"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61214"}]},argTypes:{dimension:{options:["xl","m"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},step:{control:{type:"number"}},minValue:{control:{type:"number"}},maxValue:{control:{type:"number"}},precision:{control:{type:"number"}},tickMarks:{control:!1},skeleton:{control:{type:"boolean"}},decimal:{control:{type:"text"}},thousand:{control:{type:"text"}}}},PlaygroundStory=({value,onChange,...props})=>(0,jsx_runtime.jsx)(SliderPlaygroundTemplate,{value,onChange,...props});PlaygroundStory.displayName="PlaygroundStory";const Playground={render:PlaygroundStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { Slider } from '@admiral-ds/react-ui';\nimport type { SliderProps } from '@admiral-ds/react-ui';\n\nexport const SliderPlaygroundTemplate = (args: SliderProps) => {\n  const [rangeValue, setRangeValue] = React.useState(args.value);\n  React.useEffect(() => {\n    setRangeValue(args.value);\n  }, [args.value]);\n  return (\n    <>\n      <Slider\n        {...args}\n        value={rangeValue}\n        onChange={(e: any, value: number) => {\n          console.log({ event: e.type, value });\n          setRangeValue(value);\n        }}\n      />\n    </>\n  );\n};\n"}}},name:"Slider. Playground."},SimpleStory=()=>(0,jsx_runtime.jsx)(SliderSimpleTemplate,{});SimpleStory.displayName="SimpleStory";const SimpleExample={render:SimpleStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { Slider } from '@admiral-ds/react-ui';\n\nexport const SliderSimpleTemplate = () => {\n  const [rangeValue, setRangeValue] = React.useState(0);\n  return (\n    <>\n      <Slider\n        value={rangeValue}\n        onChange={(e: any, value: number) => {\n          console.log({ event: e.type, value });\n          setRangeValue(value);\n        }}\n        minValue={10}\n        maxValue={100}\n      />\n    </>\n  );\n};\n"}}},name:"Slider с настройками minValue, maxValue."},RangeStory=()=>(0,jsx_runtime.jsx)(SliderRangeTemplate,{});RangeStory.displayName="RangeStory";const RangeExample={render:RangeStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { Slider } from '@admiral-ds/react-ui';\n\nexport const SliderRangeTemplate = () => {\n  const [rangeValue, setRangeValue] = React.useState(50);\n  return (\n    <>\n      <Slider\n        tickMarks={[25, 50, 75]}\n        value={rangeValue}\n        maxValue={100}\n        onChange={(e: any, value: number) => {\n          console.log({ event: e.type, value });\n          setRangeValue(value);\n        }}\n        renderTickMark={(mark: string) => mark + ' ₽'}\n      />\n    </>\n  );\n};\n"}}},name:"Slider с отметками и кастомизированными подписями к ним."};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: PlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderPlaygroundRaw\n      }\n    }\n  },\n  name: 'Slider. Playground.'\n}",...Playground.parameters?.docs?.source}}},SimpleExample.parameters={...SimpleExample.parameters,docs:{...SimpleExample.parameters?.docs,source:{originalSource:"{\n  render: SimpleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderSimpleRaw\n      }\n    }\n  },\n  name: 'Slider с настройками minValue, maxValue.'\n}",...SimpleExample.parameters?.docs?.source}}},RangeExample.parameters={...RangeExample.parameters,docs:{...RangeExample.parameters?.docs,source:{originalSource:"{\n  render: RangeStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SliderRangeRaw\n      }\n    }\n  },\n  name: 'Slider с отметками и кастомизированными подписями к ним.'\n}",...RangeExample.parameters?.docs?.source}}};const __namedExportsOrder=["Playground","SimpleExample","RangeExample"]},"./src/components/Slider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Slider});var react=__webpack_require__("./node_modules/react/index.js"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),throttle=__webpack_require__("./src/components/common/utils/throttle.ts");const calcValue=(e,trackRef,minValue,maxValue,step,tickMarks)=>{const trackLeft=trackRef.current?.getBoundingClientRect().left||0,trackWidth=trackRef.current?.getBoundingClientRect().width||0;let cursorPosition=e.changedTouches?e.changedTouches[0].pageX:e.pageX;cursorPosition<=trackLeft&&(cursorPosition=trackLeft),cursorPosition>=trackLeft+trackWidth&&(cursorPosition=trackLeft+trackWidth);let newValue=((trackWidth,sliderPosition,minValue,maxValue,step)=>{let sliderValue=sliderPosition*(trackWidth?(maxValue-minValue)/trackWidth:0);"number"==typeof step&&(!step||step>=1)&&(sliderValue=Math.round(sliderValue));let calcValue=minValue+sliderValue;if(step&&"number"==typeof step&&(calcValue=Math.round(calcValue/step)*step,step.toString().includes("."))){const decimal=step.toString().match(/\.(\d+)/)?.[1].length;calcValue=+calcValue.toFixed(decimal)}return minValue+sliderValue===minValue&&calcValue!==minValue?minValue:minValue+sliderValue===maxValue&&calcValue!==maxValue?maxValue:calcValue})(trackWidth,Math.round(cursorPosition-trackLeft),minValue,maxValue,step);return tickMarks&&(newValue=((ranges,value,minValue,maxValue)=>{const fullRangePoints=[...ranges.map((elem=>elem)),minValue,maxValue].sort(((a,b)=>a-b)),closestRight=Math.min(...fullRangePoints.filter((v=>v>=value))),closestLeft=Math.max(...fullRangePoints.filter((v=>v<=value)));return closestRight-value<=value-closestLeft?closestRight:closestLeft})(tickMarks,newValue,minValue,maxValue)),newValue};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),animation=__webpack_require__("./src/components/skeleton/animation.tsx");const Wrapper=styled_components_browser_esm.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-tqten7-0"})(["position:relative;-webkit-tap-highlight-color:transparent;"]),skeletonMixin=(0,styled_components_browser_esm.css)(["",";pointer-events:none;& > *{visibility:hidden;}"],animation.x),TrackWrapper=styled_components_browser_esm.default.div.withConfig({displayName:"style__TrackWrapper",componentId:"sc-tqten7-1"})(["position:relative;box-sizing:border-box;width:100%;cursor:pointer;display:flex;align-items:center;height:","px;padding-bottom:20px;[data-disabled='true'] &&{pointer-events:none;cursor:auto;}","};"],(({dimension})=>"m"===dimension?36:40),(({skeleton})=>skeleton&&skeletonMixin)),Track=styled_components_browser_esm.default.div.withConfig({displayName:"style__Track",componentId:"sc-tqten7-2"})(["height:2px;background:",";[data-disabled='true'] &&{background:",";}width:100%;"],(({theme})=>theme.color["Neutral/Neutral 20"]),(({theme})=>theme.color["Neutral/Neutral 20"])),DefaultTrack=styled_components_browser_esm.default.div.withConfig({displayName:"style__DefaultTrack",componentId:"sc-tqten7-3"})(["height:2px;transform:translateY(-50%);"]),FilledTrack=styled_components_browser_esm.default.div.withConfig({displayName:"style__FilledTrack",componentId:"sc-tqten7-4"})(["display:block;[data-disabled='true'] &&{background:",";}position:absolute;height:2px;width:0%;background-color:",";transition:",";"],(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({animation})=>animation?"all  ease-in 0.3s":"none")),Thumb=styled_components_browser_esm.default.div.withConfig({displayName:"style__Thumb",componentId:"sc-tqten7-5"})(["position:absolute;width:","px;height:","px;align-items:center;justify-content:center;transform:translateX(-50%) translateY(-50%);border-radius:50%;top:2px;left:0;transition:",";"],(({dimension})=>"m"===dimension?16:20),(({dimension})=>"m"===dimension?16:20),(({animation})=>animation?"all  ease-in 0.3s":"none")),ThumbCircle=styled_components_browser_esm.default.div.withConfig({displayName:"style__ThumbCircle",componentId:"sc-tqten7-6"})(["position:relative;height:","px;width:","px;background:",";border-radius:50%;&:before{position:absolute;content:'';height:","px;width:","px;background:",";top:","px;bottom:","px;left:","px;right:","px;border-radius:50%;}&:hover{background:",";}&:active{background:",";}[data-disabled='true'] &&{background:",";pointer-events:none;&:hover,&:active{background:",";}}"],(({dimension})=>"m"===dimension?16:20),(({dimension})=>"m"===dimension?16:20),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({dimension})=>"m"===dimension?6:8),(({dimension})=>"m"===dimension?6:8),(({theme})=>theme.color["Special/Static White"]),(({dimension})=>"m"===dimension?5:6),(({dimension})=>"m"===dimension?5:6),(({dimension})=>"m"===dimension?5:6),(({dimension})=>"m"===dimension?5:6),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"]));var typography=__webpack_require__("./src/components/Typography/typography.ts"),utils=__webpack_require__("./src/components/input/NumberInput/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TickMarks_Wrapper=styled_components_browser_esm.default.div.withConfig({displayName:"TickMarks__Wrapper",componentId:"sc-cx5qzt-0"})(["position:absolute;left:","%;display:flex;align-items:center;justify-content:center;user-select:none;"],(({position})=>position)),Content=styled_components_browser_esm.default.div.withConfig({displayName:"TickMarks__Content",componentId:"sc-cx5qzt-1"})(["display:flex;align-items:center;position:absolute;top:16px;[data-dimension='m'] &&{top:14px;}white-space:nowrap;"," color:",";&:hover{color:",";}&:active{color:",";}[data-disabled='true'] &&{color:",";}"],typography.c["Body/Body 2 Short"],(({theme})=>theme.color["Neutral/Neutral 90"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Neutral/Neutral 30"])),TickMarks=({minValue,maxValue,decimal=".",precision=2,thousand=" ",tickMarks,onPointClick,renderTickMark})=>{const items=tickMarks.filter((d=>d>=minValue&&d<=maxValue)),range=maxValue-minValue;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:items.map(((value,index)=>{const key=value.toString()+index,position=(value-minValue)/range*100;let style={};return style=0===index?{left:0}:style,style=index===tickMarks.length-1?{right:0}:style,(0,jsx_runtime.jsx)(TickMarks_Wrapper,{position,onMouseDown:e=>{onPointClick(e,value)},children:(0,jsx_runtime.jsx)(Content,{style,children:renderTickMark?renderTickMark((0,utils.lT)(value,precision,decimal,thousand)):(0,utils.lT)(value,precision,decimal,thousand)})},key)}))})};try{Content.displayName="Content",Content.__docgenInfo={description:"",displayName:"Content",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/TickMarks.tsx#Content"]={docgenInfo:Content.__docgenInfo,name:"Content",path:"src/components/Slider/TickMarks.tsx#Content"})}catch(__react_docgen_typescript_loader_error){}try{TickMarks.displayName="TickMarks",TickMarks.__docgenInfo={description:"",displayName:"TickMarks",props:{minValue:{defaultValue:null,description:"",name:"minValue",required:!0,type:{name:"number"}},maxValue:{defaultValue:null,description:"",name:"maxValue",required:!0,type:{name:"number"}},decimal:{defaultValue:{value:"."},description:"",name:"decimal",required:!1,type:{name:"string"}},precision:{defaultValue:{value:"2"},description:"",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:{value:""},description:"",name:"thousand",required:!1,type:{name:"string"}},tickMarks:{defaultValue:null,description:"",name:"tickMarks",required:!0,type:{name:"number[]"}},onPointClick:{defaultValue:null,description:"",name:"onPointClick",required:!0,type:{name:"(e: any, value: number) => void"}},renderTickMark:{defaultValue:null,description:"",name:"renderTickMark",required:!1,type:{name:"((mark: string) => ReactNode)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/TickMarks.tsx#TickMarks"]={docgenInfo:TickMarks.__docgenInfo,name:"TickMarks",path:"src/components/Slider/TickMarks.tsx#TickMarks"})}catch(__react_docgen_typescript_loader_error){}const Slider=({minValue=0,maxValue=20,decimal=".",precision=2,thousand=" ",value=0,onChange,renderTickMark,tickMarks:points,disabled=!1,step:userStep=1,dimension="xl",skeleton=!1,...props})=>{const tickMarks=Array.isArray(points)?points:void 0,step="number"==typeof userStep&&userStep>0||"any"===userStep?userStep:1,[isDraging,setDrag]=react.useState(!1),[animation,setAnimation]=react.useState(!0),[rangeWidth,setRangeWidth]=react.useState(0),filledRef=react.useRef(null),trackRef=react.useRef(null),sliderRef=react.useRef(null);react.useLayoutEffect((()=>{let newValue=value;if(newValue<minValue&&(newValue=minValue),newValue>maxValue&&(newValue=maxValue),step&&"any"!==step&&(newValue=Math.round(newValue/step)*step,step.toString().includes("."))){const decimal=step.toString().match(/\.(\d+)/)?.[1].length;newValue=+newValue.toFixed(decimal)}!function correctSliderPosition(value){let calcPercents=(rangeWidth?rangeWidth/(maxValue-minValue):0)*(value>=0?value-minValue:-minValue+value)/rangeWidth*100;calcPercents=calcPercents>100?100:calcPercents,calcPercents=calcPercents<0?0:calcPercents;const sliderCoords=String(value)?calcPercents:0;sliderRef.current&&filledRef.current&&(sliderRef.current.style.left=`${sliderCoords}%`,filledRef.current.style.width=`${sliderCoords}%`)}(newValue)}),[value,minValue,maxValue,step,rangeWidth]),react.useLayoutEffect((()=>{if(trackRef.current){const resizeObserver=new ResizeObserver((entries=>{entries.forEach((entry=>setRangeWidth(entry.contentRect.width||0)))}));return resizeObserver.observe(trackRef.current),()=>{resizeObserver.disconnect()}}}),[setRangeWidth]);const[handleMouseMove,freeResources]=(0,throttle.P)((e=>{const newValue=calcValue(e,trackRef,minValue,maxValue,step,void 0);newValue!==value&&(onChange(e,newValue),setAnimation(!1))}),50);react.useEffect((()=>(isDraging&&!disabled&&(document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",handleMouseUp),document.addEventListener("touchmove",handleMouseMove),document.addEventListener("touchend",handleMouseUp),document.addEventListener("touchcancel",handleMouseUp)),()=>{freeResources(),document.removeEventListener("mousemove",handleMouseMove),document.removeEventListener("mouseup",handleMouseUp),document.removeEventListener("touchmove",handleMouseMove),document.removeEventListener("touchend",handleMouseUp),document.removeEventListener("touchcancel",handleMouseUp)})));const onSliderClick=e=>{e.stopPropagation(),"mousedown"===e.type?props.onMouseDown?.(e):props.onTouchStart?.(e),setDrag(!0),setAnimation(!0)},onTrackClick=e=>{setAnimation(!0),tickMarks||setDrag(!0);const newValue=calcValue(e,trackRef,minValue,maxValue,step,tickMarks);newValue!==value&&onChange(e,newValue)},handleMouseUp=e=>{setDrag(!1),setAnimation(!0);const newValue=calcValue(e,trackRef,minValue,maxValue,step,tickMarks);newValue!==value&&onChange(e,newValue)};return(0,jsx_runtime.jsx)(Wrapper,{"data-disabled":disabled,...props,children:(0,jsx_runtime.jsx)(TrackWrapper,{dimension,skeleton,onTouchStart:onTrackClick,onMouseDown:onTrackClick,children:(0,jsx_runtime.jsxs)(Track,{children:[(0,jsx_runtime.jsx)(FilledTrack,{ref:filledRef,animation}),(0,jsx_runtime.jsxs)(DefaultTrack,{ref:trackRef,children:[(0,jsx_runtime.jsx)(TickMarks,{tickMarks:tickMarks?[minValue,...tickMarks,maxValue]:[minValue,maxValue],minValue,maxValue,decimal,precision,thousand,onPointClick:(e,newValue)=>{e.stopPropagation(),props.onMouseDown?.(e),setAnimation(!0),newValue!==value&&onChange(e,newValue)},renderTickMark}),(0,jsx_runtime.jsx)(Thumb,{ref:sliderRef,animation,dimension,role:"slider",tabIndex:disabled?-1:0,"aria-valuenow":value,"aria-valuemin":minValue,"aria-valuemax":maxValue,onKeyDown:e=>{switch(keyboardKey.y.getCode(e)){case keyboardKey.y.ArrowLeft:setAnimation(!0),"any"!==step&&value-step>=minValue&&value-step!==value&&onChange(e,value-step),e.preventDefault();break;case keyboardKey.y.ArrowRight:setAnimation(!0),"any"!==step&&value+step<=maxValue&&value+step!==value&&onChange(e,value+step),e.preventDefault()}},children:(0,jsx_runtime.jsx)(ThumbCircle,{dimension,onTouchStart:onSliderClick,onMouseDown:onSliderClick})})]})]})})})};Slider.displayName="Slider",Slider.displayName="Slider";try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{value:{defaultValue:{value:"0"},description:"Значение компонента",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"Коллбек на изменение состояния",name:"onChange",required:!0,type:{name:"(event: any, value: number) => void"}},minValue:{defaultValue:{value:"0"},description:"Минимальное значение",name:"minValue",required:!1,type:{name:"number"}},maxValue:{defaultValue:{value:"20"},description:"Максимальное значение",name:"maxValue",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"Шаг слайдера. Это либо строка any, либо положительное число, по умолчанию 1.\nЕсли этот параметр не установлен в any, компонент принимает только кратные step значения, в диапазоне minValue - maxValue",name:"step",required:!1,type:{name:'number | "any"'}},decimal:{defaultValue:{value:"."},description:"Символ разделителя между целым и десятичным числом, используется при форматировании надписей к отметкам слайдера",name:"decimal",required:!1,type:{name:"string"}},precision:{defaultValue:{value:"2"},description:"Точность (количество знаков в десятичной части числа), используется при форматировании надписей к отметкам слайдера",name:"precision",required:!1,type:{name:"number"}},thousand:{defaultValue:{value:""},description:"Символ разделителя между тысячами, используется при форматировании надписей к отметкам слайдера",name:"thousand",required:!1,type:{name:"string"}},tickMarks:{defaultValue:null,description:"Массив отметок",name:"tickMarks",required:!1,type:{name:"number[]"}},renderTickMark:{defaultValue:null,description:"Render колбек для отрисовки кастомизированных подписей к отметкам слайдера",name:"renderTickMark",required:!1,type:{name:"((mark: string) => ReactNode)"}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider/index.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/components/Slider/index.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/throttle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>throttle});const throttle=(fn,delay)=>{let timeout,wait=!1,cancelled=!1;return[(...args)=>{if(cancelled)return;if(wait)return;const val=fn(...args);return wait=!0,timeout=window.setTimeout((()=>{wait=!1}),delay),val},()=>{cancelled=!0,clearTimeout(timeout)}]}}}]);