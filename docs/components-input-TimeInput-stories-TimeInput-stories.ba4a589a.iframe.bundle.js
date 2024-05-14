"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7584],{"./src/components/input/TimeInput/stories/TimeInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TimeInputIconAlternative:()=>TimeInputIconAlternative,TimeInputRange:()=>TimeInputRange,TimeInputRangeDisabled:()=>TimeInputRangeDisabled,TimeInputSimple:()=>TimeInputSimple,TimeInputSimpleDisabled:()=>TimeInputSimpleDisabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TimeInput_stories});var _defs,_g,react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),TimeInput=__webpack_require__("./src/components/input/TimeInput/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),InputIconButton=__webpack_require__("./src/components/InputIconButton.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgGpsOutline=function SvgGpsOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_defs||(_defs=react.createElement("defs",null,react.createElement("clipPath",{id:"GPSOutline_svg__a"},react.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"})))),_g||(_g=react.createElement("g",{clipPath:"url(#GPSOutline_svg__a)"},react.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M18.59 5.33s-.01 0-.02.01L5.4 11.09l-.02.01c0 .01-.01.01-.01.01v.03c0 .02.01.03.01.04h.01s.01 0 .02.01l5.24.79c.72.11 1.28.67 1.39 1.39l.78 5.28c.01.01.01.02.01.02v.01c.01 0 .02.01.04.01h.03s0-.01.01-.01c0 0 0-.01.01-.02L18.64 5.4v-.03s0-.01-.01-.02c-.01-.02-.02-.02-.03-.02zm-.53-1.19c1.12-.49 2.25.65 1.77 1.78l-5.72 13.26c-.54 1.25-2.37 1.01-2.57-.34l-.79-5.27a.34.34 0 0 0-.29-.3l-5.24-.79c-1.34-.21-1.58-2.04-.34-2.58z"}))))};__webpack_require__.p;var TimeSolid_defs,TimeSolid_g;function TimeSolid_extends(){return TimeSolid_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},TimeSolid_extends.apply(this,arguments)}var SvgTimeSolid=function SvgTimeSolid(props){return react.createElement("svg",TimeSolid_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),TimeSolid_defs||(TimeSolid_defs=react.createElement("defs",null,react.createElement("clipPath",{id:"TimeSolid_svg__a"},react.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"})))),TimeSolid_g||(TimeSolid_g=react.createElement("g",{clipPath:"url(#TimeSolid_svg__a)"},react.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3c-4.98 0-9 4.02-9 9 0 4.97 4.02 9 9 9a9 9 0 0 0 9-9c0-4.98-4.03-9-9-9m0 4.5c.35 0 .64.29.64.65V12H16c.35 0 .64.29.64.65s-.29.65-.64.65h-4c-.36 0-.65-.29-.65-.65v-4.5c0-.36.29-.65.65-.65"}))))};__webpack_require__.p;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TimeInputIconAlternativeTemplate=props=>{const[localValue,setValue]=react.useState(String(props.value)??"");react.useEffect((()=>{void 0!==props.value&&setValue(String(props.value))}),[props.value]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TimeInput.c,{...props,style:{maxWidth:"320px"},icons:(0,jsx_runtime.jsx)(InputIconButton.G,{icon:SvgGpsOutline,onClick:()=>setValue("12:00")}),icon:SvgTimeSolid,value:localValue,onChange:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},readOnly:!0,dropContainerClassName:"dropContainerClass"})})};try{TimeInputIconAlternativeTemplate.displayName="TimeInputIconAlternativeTemplate",TimeInputIconAlternativeTemplate.__docgenInfo={description:"",displayName:"TimeInputIconAlternativeTemplate",props:{value:{defaultValue:null,description:"Выбранное значение времени",name:"value",required:!1,type:{name:"string"}},startTime:{defaultValue:null,description:"Начало временного диапазона",name:"startTime",required:!1,type:{name:"string"}},endTime:{defaultValue:null,description:"Конец временного диапазона",name:"endTime",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Задизейбленный инпут",name:"disabled",required:!1,type:{name:"boolean"}},disabledSlots:{defaultValue:null,description:"Задизейбленное значение временного диапозона",name:"disabledSlots",required:!1,type:{name:"string[]"}},icon:{defaultValue:null,description:"Альтернативная иконка компонента",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},parser:{defaultValue:null,description:"Позволяет обрабатывать введенные значения",name:"parser",required:!1,type:{name:"((time?: string) => string)"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TimeInput/stories/TimeInputIconAlternative.template.tsx#TimeInputIconAlternativeTemplate"]={docgenInfo:TimeInputIconAlternativeTemplate.__docgenInfo,name:"TimeInputIconAlternativeTemplate",path:"src/components/input/TimeInput/stories/TimeInputIconAlternative.template.tsx#TimeInputIconAlternativeTemplate"})}catch(__react_docgen_typescript_loader_error){}const TimeInputRangeTemplate=props=>{const[localValue,setValue]=react.useState(String(props.value)??"");react.useEffect((()=>{void 0!==props.value&&setValue(String(props.value))}),[props.value]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TimeInput.c,{...props,style:{maxWidth:"320px"},startTime:"09:00",endTime:"18:00",value:localValue,onChange:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},dropContainerClassName:"dropContainerClass"})})};try{TimeInputRangeTemplate.displayName="TimeInputRangeTemplate",TimeInputRangeTemplate.__docgenInfo={description:"",displayName:"TimeInputRangeTemplate",props:{value:{defaultValue:null,description:"Выбранное значение времени",name:"value",required:!1,type:{name:"string"}},startTime:{defaultValue:null,description:"Начало временного диапазона",name:"startTime",required:!1,type:{name:"string"}},endTime:{defaultValue:null,description:"Конец временного диапазона",name:"endTime",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Задизейбленный инпут",name:"disabled",required:!1,type:{name:"boolean"}},disabledSlots:{defaultValue:null,description:"Задизейбленное значение временного диапозона",name:"disabledSlots",required:!1,type:{name:"string[]"}},icon:{defaultValue:null,description:"Альтернативная иконка компонента",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},parser:{defaultValue:null,description:"Позволяет обрабатывать введенные значения",name:"parser",required:!1,type:{name:"((time?: string) => string)"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TimeInput/stories/TimeInputRange.template.tsx#TimeInputRangeTemplate"]={docgenInfo:TimeInputRangeTemplate.__docgenInfo,name:"TimeInputRangeTemplate",path:"src/components/input/TimeInput/stories/TimeInputRange.template.tsx#TimeInputRangeTemplate"})}catch(__react_docgen_typescript_loader_error){}const TimeInputRangeDisabledTemplate=props=>{const[localValue,setValue]=react.useState(String(props.value)??"");react.useEffect((()=>{void 0!==props.value&&setValue(String(props.value))}),[props.value]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TimeInput.c,{...props,style:{maxWidth:"320px"},disabledSlots:["12:30","15:30","17:00","19:30"],startTime:"11:00",endTime:"20:00",value:localValue,onChange:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},dropContainerClassName:"dropContainerClass"})})};try{TimeInputRangeDisabledTemplate.displayName="TimeInputRangeDisabledTemplate",TimeInputRangeDisabledTemplate.__docgenInfo={description:"",displayName:"TimeInputRangeDisabledTemplate",props:{value:{defaultValue:null,description:"Выбранное значение времени",name:"value",required:!1,type:{name:"string"}},startTime:{defaultValue:null,description:"Начало временного диапазона",name:"startTime",required:!1,type:{name:"string"}},endTime:{defaultValue:null,description:"Конец временного диапазона",name:"endTime",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Задизейбленный инпут",name:"disabled",required:!1,type:{name:"boolean"}},disabledSlots:{defaultValue:null,description:"Задизейбленное значение временного диапозона",name:"disabledSlots",required:!1,type:{name:"string[]"}},icon:{defaultValue:null,description:"Альтернативная иконка компонента",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},parser:{defaultValue:null,description:"Позволяет обрабатывать введенные значения",name:"parser",required:!1,type:{name:"((time?: string) => string)"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TimeInput/stories/TimeInputRangeDisabled.template.tsx#TimeInputRangeDisabledTemplate"]={docgenInfo:TimeInputRangeDisabledTemplate.__docgenInfo,name:"TimeInputRangeDisabledTemplate",path:"src/components/input/TimeInput/stories/TimeInputRangeDisabled.template.tsx#TimeInputRangeDisabledTemplate"})}catch(__react_docgen_typescript_loader_error){}var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");const TimeInputSimpleTemplate=({themeBorderKind,CSSCustomProps,...props})=>{const[localValue,setValue]=react.useState(String(props.value)??"");react.useEffect((()=>{void 0!==props.value&&setValue(String(props.value))}),[props.value]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(TimeInput.c,{...props,style:{maxWidth:"320px"},value:localValue,onChange:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},dropContainerClassName:"dropContainerClass"})})};TimeInputSimpleTemplate.displayName="TimeInputSimpleTemplate";try{TimeInputSimpleTemplate.displayName="TimeInputSimpleTemplate",TimeInputSimpleTemplate.__docgenInfo={description:"",displayName:"TimeInputSimpleTemplate",props:{value:{defaultValue:null,description:"Выбранное значение времени",name:"value",required:!1,type:{name:"string"}},startTime:{defaultValue:null,description:"Начало временного диапазона",name:"startTime",required:!1,type:{name:"string"}},endTime:{defaultValue:null,description:"Конец временного диапазона",name:"endTime",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Задизейбленный инпут",name:"disabled",required:!1,type:{name:"boolean"}},disabledSlots:{defaultValue:null,description:"Задизейбленное значение временного диапозона",name:"disabledSlots",required:!1,type:{name:"string[]"}},icon:{defaultValue:null,description:"Альтернативная иконка компонента",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},parser:{defaultValue:null,description:"Позволяет обрабатывать введенные значения",name:"parser",required:!1,type:{name:"((time?: string) => string)"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TimeInput/stories/TimeInputSimple.template.tsx#TimeInputSimpleTemplate"]={docgenInfo:TimeInputSimpleTemplate.__docgenInfo,name:"TimeInputSimpleTemplate",path:"src/components/input/TimeInput/stories/TimeInputSimple.template.tsx#TimeInputSimpleTemplate"})}catch(__react_docgen_typescript_loader_error){}const TimeInputSimpleDisabledTemplate=props=>{const[localValue,setValue]=react.useState(String(props.value)??"");react.useEffect((()=>{void 0!==props.value&&setValue(String(props.value))}),[props.value]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TimeInput.c,{...props,style:{maxWidth:"320px"},disabledSlots:["01:00","03:30","05:00","07:30","10:00","12:30","15:30","17:00","19:30"],value:localValue,onChange:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},dropContainerClassName:"dropContainerClass"})})};try{TimeInputSimpleDisabledTemplate.displayName="TimeInputSimpleDisabledTemplate",TimeInputSimpleDisabledTemplate.__docgenInfo={description:"",displayName:"TimeInputSimpleDisabledTemplate",props:{value:{defaultValue:null,description:"Выбранное значение времени",name:"value",required:!1,type:{name:"string"}},startTime:{defaultValue:null,description:"Начало временного диапазона",name:"startTime",required:!1,type:{name:"string"}},endTime:{defaultValue:null,description:"Конец временного диапазона",name:"endTime",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Задизейбленный инпут",name:"disabled",required:!1,type:{name:"boolean"}},disabledSlots:{defaultValue:null,description:"Задизейбленное значение временного диапозона",name:"disabledSlots",required:!1,type:{name:"string[]"}},icon:{defaultValue:null,description:"Альтернативная иконка компонента",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},parser:{defaultValue:null,description:"Позволяет обрабатывать введенные значения",name:"parser",required:!1,type:{name:"((time?: string) => string)"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TimeInput/stories/TimeInputSimpleDisabled.template.tsx#TimeInputSimpleDisabledTemplate"]={docgenInfo:TimeInputSimpleDisabledTemplate.__docgenInfo,name:"TimeInputSimpleDisabledTemplate",path:"src/components/input/TimeInput/stories/TimeInputSimpleDisabled.template.tsx#TimeInputSimpleDisabledTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"TimeInputstories__Desc",componentId:"sc-6tul1y-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"TimeInputstories__Separator",componentId:"sc-6tul1y-1"})(["height:20px;"]),Description=()=>(0,jsx_runtime.jsxs)(Desc,{children:["Компонент для ввода-выбора времени. Поддерживается как ручной ввод, так и выбор через выпадающий список с фиксированным шагом в полчаса.",(0,jsx_runtime.jsx)(Separator,{}),"Компонент нельзя изменять по ширине."]});Description.displayName="Description";const TimeInput_stories={title:"Admiral-2.1/Input/TimeInput",component:TimeInput.c,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60618"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60644"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60669"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},value:{control:{type:"text",disabled:!0},description:"Значение TimePicker"},onChange:{action:"onChange"},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},icons:{control:!1},icon:{control:!1},handleInput:{control:!1},startTime:{control:{type:"text"}},endTime:{control:{type:"text"}},disabledSlots:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},containerRef:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}},TimeInputSimpleStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(TimeInputSimpleTemplate,{...props,CSSCustomProps})};TimeInputSimpleStory.displayName="TimeInputSimpleStory";const TimeInputSimple={render:TimeInputSimpleStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { TimeInput } from '@admiral-ds/react-ui';\nimport type { TimeInputProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nexport const TimeInputSimpleTemplate = ({\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: TimeInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');\n\n  React.useEffect(() => {\n    if (props.value !== undefined) {\n      setValue(String(props.value));\n    }\n  }, [props.value]);\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <TimeInput\n        {...props}\n        style={{ maxWidth: '320px' }}\n        value={localValue}\n        onChange={handleChange}\n        dropContainerClassName=\"dropContainerClass\"\n      />\n    </ThemeProvider>\n  );\n};\n"}}},name:"Базовый компонент"},TimeInputIconAlternativeStory=props=>(0,jsx_runtime.jsx)(TimeInputIconAlternativeTemplate,{...props});TimeInputIconAlternativeStory.displayName="TimeInputIconAlternativeStory";const TimeInputIconAlternative={render:TimeInputIconAlternativeStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\n\nimport { InputIconButton, TimeInput } from '@admiral-ds/react-ui';\nimport type { TimeInputProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as GPSOutline } from '@admiral-ds/icons/build/location/GPSOutline.svg';\nimport { ReactComponent as TimeSolid } from '@admiral-ds/icons/build/system/TimeSolid.svg';\n\nexport const TimeInputIconAlternativeTemplate = (props: TimeInputProps) => {\n  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');\n\n  React.useEffect(() => {\n    if (props.value !== undefined) {\n      setValue(String(props.value));\n    }\n  }, [props.value]);\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  return (\n    <>\n      <TimeInput\n        {...props}\n        style={{ maxWidth: '320px' }}\n        icons={<InputIconButton icon={GPSOutline} onClick={() => setValue('12:00')} />}\n        icon={TimeSolid}\n        value={localValue}\n        onChange={handleChange}\n        readOnly\n        dropContainerClassName=\"dropContainerClass\"\n      />\n    </>\n  );\n};\n"}}},name:"Компонент с дополнительной иконкой и альтернативной иконкой компонента"},TimeInputRangeStory=props=>(0,jsx_runtime.jsx)(TimeInputRangeTemplate,{...props});TimeInputRangeStory.displayName="TimeInputRangeStory";const TimeInputRange={render:TimeInputRangeStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\n\nimport { TimeInput } from '@admiral-ds/react-ui';\nimport type { TimeInputProps } from '@admiral-ds/react-ui';\n\nexport const TimeInputRangeTemplate = (props: TimeInputProps) => {\n  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');\n\n  React.useEffect(() => {\n    if (props.value !== undefined) {\n      setValue(String(props.value));\n    }\n  }, [props.value]);\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n  return (\n    <>\n      <TimeInput\n        {...props}\n        style={{ maxWidth: '320px' }}\n        startTime=\"09:00\"\n        endTime=\"18:00\"\n        value={localValue}\n        onChange={handleChange}\n        dropContainerClassName=\"dropContainerClass\"\n      />\n    </>\n  );\n};\n"}}},name:"C диапазоном времени"},TimeInputRangeDisabledStory=props=>(0,jsx_runtime.jsx)(TimeInputRangeDisabledTemplate,{...props});TimeInputRangeDisabledStory.displayName="TimeInputRangeDisabledStory";const TimeInputRangeDisabled={render:TimeInputRangeDisabledStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\n\nimport { TimeInput } from '@admiral-ds/react-ui';\nimport type { TimeInputProps } from '@admiral-ds/react-ui';\n\nexport const TimeInputRangeDisabledTemplate = (props: TimeInputProps) => {\n  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');\n\n  React.useEffect(() => {\n    if (props.value !== undefined) {\n      setValue(String(props.value));\n    }\n  }, [props.value]);\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n  return (\n    <>\n      <TimeInput\n        {...props}\n        style={{ maxWidth: '320px' }}\n        disabledSlots={['12:30', '15:30', '17:00', '19:30']}\n        startTime=\"11:00\"\n        endTime=\"20:00\"\n        value={localValue}\n        onChange={handleChange}\n        dropContainerClassName=\"dropContainerClass\"\n      />\n    </>\n  );\n};\n"}}},name:"C диапазоном времени и задизейбленными значениями"},TimeInputSimpleDisabledStory=props=>(0,jsx_runtime.jsx)(TimeInputSimpleDisabledTemplate,{...props});TimeInputSimpleDisabledStory.displayName="TimeInputSimpleDisabledStory";const TimeInputSimpleDisabled={render:TimeInputSimpleDisabledStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\n\nimport { TimeInput } from '@admiral-ds/react-ui';\nimport type { TimeInputProps } from '@admiral-ds/react-ui';\n\nexport const TimeInputSimpleDisabledTemplate = (props: TimeInputProps) => {\n  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');\n\n  React.useEffect(() => {\n    if (props.value !== undefined) {\n      setValue(String(props.value));\n    }\n  }, [props.value]);\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n  return (\n    <>\n      <TimeInput\n        {...props}\n        style={{ maxWidth: '320px' }}\n        disabledSlots={['01:00', '03:30', '05:00', '07:30', '10:00', '12:30', '15:30', '17:00', '19:30']}\n        value={localValue}\n        onChange={handleChange}\n        dropContainerClassName=\"dropContainerClass\"\n      />\n    </>\n  );\n};\n"}}},name:"Базовый с задизейбленными значениями"};TimeInputSimple.parameters={...TimeInputSimple.parameters,docs:{...TimeInputSimple.parameters?.docs,source:{originalSource:"{\n  render: TimeInputSimpleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TimeInputSimpleRaw\n      }\n    }\n  },\n  name: 'Базовый компонент'\n}",...TimeInputSimple.parameters?.docs?.source}}},TimeInputIconAlternative.parameters={...TimeInputIconAlternative.parameters,docs:{...TimeInputIconAlternative.parameters?.docs,source:{originalSource:"{\n  render: TimeInputIconAlternativeStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TimeInputIconAlternativeRaw\n      }\n    }\n  },\n  name: 'Компонент с дополнительной иконкой и альтернативной иконкой компонента'\n}",...TimeInputIconAlternative.parameters?.docs?.source}}},TimeInputRange.parameters={...TimeInputRange.parameters,docs:{...TimeInputRange.parameters?.docs,source:{originalSource:"{\n  render: TimeInputRangeStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TimeInputRangeRaw\n      }\n    }\n  },\n  name: 'C диапазоном времени'\n}",...TimeInputRange.parameters?.docs?.source}}},TimeInputRangeDisabled.parameters={...TimeInputRangeDisabled.parameters,docs:{...TimeInputRangeDisabled.parameters?.docs,source:{originalSource:"{\n  render: TimeInputRangeDisabledStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TimeInputRangeDisabledRaw\n      }\n    }\n  },\n  name: 'C диапазоном времени и задизейбленными значениями'\n}",...TimeInputRangeDisabled.parameters?.docs?.source}}},TimeInputSimpleDisabled.parameters={...TimeInputSimpleDisabled.parameters,docs:{...TimeInputSimpleDisabled.parameters?.docs,source:{originalSource:"{\n  render: TimeInputSimpleDisabledStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TimeInputSimpleDisabledRaw\n      }\n    }\n  },\n  name: 'Базовый с задизейбленными значениями'\n}",...TimeInputSimpleDisabled.parameters?.docs?.source}}};const __namedExportsOrder=["TimeInputSimple","TimeInputIconAlternative","TimeInputRange","TimeInputRangeDisabled","TimeInputSimpleDisabled"]}}]);