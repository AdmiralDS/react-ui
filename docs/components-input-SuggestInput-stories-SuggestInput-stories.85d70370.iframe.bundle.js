"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2815],{"./src/components/input/SuggestInput/stories/SuggestInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SuggestInputCustomIcon:()=>SuggestInputCustomIcon,SuggestInputFilter:()=>SuggestInputFilter,SuggestInputNoMatch:()=>SuggestInputNoMatch,SuggestInputPlayground:()=>SuggestInputPlayground,SuggestInputUncontrolled:()=>SuggestInputUncontrolled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SuggestInput_stories});var _path,_path2,react=__webpack_require__("./node_modules/react/index.js"),SuggestInput=__webpack_require__("./src/components/input/SuggestInput/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgSearchSolid=function SvgSearchSolid(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#717681",d:"M11.5 8.3c-1.77 0-3.2 1.43-3.2 3.2 0 1.77 1.43 3.2 3.2 3.2 1.77 0 3.2-1.43 3.2-3.2 0-1.77-1.43-3.2-3.2-3.2Z"})),_path2||(_path2=react.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm4-.5C7 9.012 9.012 7 11.5 7S16 9.012 16 11.5c0 1.01-.331 1.94-.89 2.69l1.85 1.85a.65.65 0 1 1-.92.92l-1.85-1.85c-.75.559-1.68.89-2.69.89A4.497 4.497 0 0 1 7 11.5Z",clipRule:"evenodd"})))};__webpack_require__.p;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const OPTIONS=["text 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","text 6","text 7","text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 9","text 10","text 11","text 12"],SuggestInputPlaygroundTemplate=({placeholder="Начните набирать text",themeBorderKind,...props})=>{const[localValue,setValue]=react.useState(props.value?String(props.value):""),[isLoading,setIsLoading]=react.useState(!1),[options,setOptions]=react.useState();return react.useEffect((()=>{if(isLoading){const timeout=window.setTimeout((()=>{setIsLoading(!1),setOptions([...OPTIONS])}),3e3);return()=>{window.clearTimeout(timeout)}}}),[isLoading]),(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:(0,createBorderRadiusSwapper.z)(themeBorderKind),children:(0,jsx_runtime.jsx)(SuggestInput.n,{className:"suggest",...props,value:localValue,onInput:e=>{const inputValue=e.currentTarget.value;localValue?.length<3&&inputValue?.length>2&&(setIsLoading(!0),setOptions([])),setValue(inputValue),props.onChange?.(e)},onOptionSelect:option=>{setValue(option),console.log(`Selected option - ${option}`)},options,isLoading,onSearchButtonClick:()=>{console.log("search button click")},displayClearIcon:!0,dropContainerClassName:"dropContainerClass",placeholder})})};SuggestInputPlaygroundTemplate.displayName="SuggestInputPlaygroundTemplate";try{SuggestInputPlaygroundTemplate.displayName="SuggestInputPlaygroundTemplate",SuggestInputPlaygroundTemplate.__docgenInfo={description:"",displayName:"SuggestInputPlaygroundTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"Референс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"Задает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputPlayground.template.tsx#SuggestInputPlaygroundTemplate"]={docgenInfo:SuggestInputPlaygroundTemplate.__docgenInfo,name:"SuggestInputPlaygroundTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputPlayground.template.tsx#SuggestInputPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}const options=["one","two","three"],SuggestInputUncontrolledTemplate=props=>(0,jsx_runtime.jsx)(SuggestInput.n,{options,placeholder:"numbers",dimension:props.dimension});SuggestInputUncontrolledTemplate.displayName="SuggestInputUncontrolledTemplate";try{SuggestInputUncontrolledTemplate.displayName="SuggestInputUncontrolledTemplate",SuggestInputUncontrolledTemplate.__docgenInfo={description:"",displayName:"SuggestInputUncontrolledTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"Референс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"Задает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputUncontrolled.template.tsx#SuggestInputUncontrolledTemplate"]={docgenInfo:SuggestInputUncontrolledTemplate.__docgenInfo,name:"SuggestInputUncontrolledTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputUncontrolled.template.tsx#SuggestInputUncontrolledTemplate"})}catch(__react_docgen_typescript_loader_error){}var getTextHighlightMeta=__webpack_require__("./src/components/common/utils/getTextHighlightMeta.ts");const SuggestInputFilter_template_OPTIONS=["text 1","text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 3","text 4","text 5","text 6","text 7","text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ","text 9","text 10","text 11","text 12"],SuggestInputFilterTemplate=props=>{const[localValue,setValue]=react.useState(props.value?String(props.value):""),[options,setOptions]=react.useState([...SuggestInputFilter_template_OPTIONS]);return react.useEffect((()=>{const filteredOptions=SuggestInputFilter_template_OPTIONS.filter((option=>(0,getTextHighlightMeta.k)(option,localValue,"wholly").shouldHighlight));setOptions(filteredOptions)}),[localValue]),(0,jsx_runtime.jsx)(SuggestInput.n,{className:"suggest",...props,value:localValue,onInput:e=>{const inputValue=e.currentTarget.value;setValue(inputValue),props.onChange?.(e)},onOptionSelect:option=>{setValue(option),console.log(`Selected option - ${option}`)},options,onSearchButtonClick:()=>{console.log("search button click")},displayClearIcon:!0})};SuggestInputFilterTemplate.displayName="SuggestInputFilterTemplate";try{SuggestInputFilterTemplate.displayName="SuggestInputFilterTemplate",SuggestInputFilterTemplate.__docgenInfo={description:"",displayName:"SuggestInputFilterTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"Референс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"Задает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputFilter.template.tsx#SuggestInputFilterTemplate"]={docgenInfo:SuggestInputFilterTemplate.__docgenInfo,name:"SuggestInputFilterTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputFilter.template.tsx#SuggestInputFilterTemplate"})}catch(__react_docgen_typescript_loader_error){}const optionsNoMatch=[],SuggestInputNoMatchTemplate=props=>(0,jsx_runtime.jsx)(SuggestInput.n,{options:optionsNoMatch,placeholder:"numbers",dimension:props.dimension});SuggestInputNoMatchTemplate.displayName="SuggestInputNoMatchTemplate";try{SuggestInputNoMatchTemplate.displayName="SuggestInputNoMatchTemplate",SuggestInputNoMatchTemplate.__docgenInfo={description:"",displayName:"SuggestInputNoMatchTemplate",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onOptionSelect:{defaultValue:null,description:"Обработчик выбора опции (дефолтный обработчик подставляет значение опции в поле ввода)",name:"onOptionSelect",required:!1,type:{name:"((value: string) => void)"}},options:{defaultValue:null,description:"Список вариантов для отображения в опциях",name:"options",required:!1,type:{name:"string[]"}},portalTargetRef:{defaultValue:null,description:"Референс на контейнер для правильного позиционирования выпадающего списка",name:"portalTargetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},onSearchButtonClick:{defaultValue:null,description:"Обработчик клика по кнопке поиска",name:"onSearchButtonClick",required:!1,type:{name:"MouseEventHandler<SVGSVGElement>"}},alignDropdown:{defaultValue:null,description:"Позволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropMaxHeight:{defaultValue:null,description:"Задает максимальную высоту контейнера с опциями",name:"dropMaxHeight",required:!1,type:{name:"string | number"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'}]}},highlightFormat:{defaultValue:null,description:"Формат подсветки, 'word' или 'wholly'",name:"highlightFormat",required:!1,type:{name:"enum",value:[{value:'"word"'},{value:'"wholly"'}]}},locale:{defaultValue:null,description:"Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,\nпо умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме",name:"locale",required:!1,type:{name:"{ emptyMessage?: ReactNode; }"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"Иконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/SuggestInput/stories/SuggestInputNoMatch.template.tsx#SuggestInputNoMatchTemplate"]={docgenInfo:SuggestInputNoMatchTemplate.__docgenInfo,name:"SuggestInputNoMatchTemplate",path:"src/components/input/SuggestInput/stories/SuggestInputNoMatch.template.tsx#SuggestInputNoMatchTemplate"})}catch(__react_docgen_typescript_loader_error){}const SuggestInputPlayground_templateraw_namespaceObject="import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { SuggestInput } from '@admiral-ds/react-ui';\nimport type { SuggestInputProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nconst OPTIONS = [\n  'text 1',\n  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',\n  'text 3',\n  'text 4',\n  'text 5',\n  'text 6',\n  'text 7',\n  'text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',\n  'text 9',\n  'text 10',\n  'text 11',\n  'text 12',\n];\n\nexport const SuggestInputPlaygroundTemplate = ({\n  placeholder = 'Начните набирать text',\n  themeBorderKind,\n  ...props\n}: SuggestInputProps & { themeBorderKind?: BorderRadiusType }) => {\n  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const [options, setOptions] = React.useState<string[] | undefined>();\n\n  const handleSelectOption = (option: string) => {\n    setValue(option);\n    console.log(`Selected option - ${option}`);\n  };\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n\n    // Если в инпуте больше 3х символов производим запрос на поиск совпадений\n    if (localValue?.length < 3 && inputValue?.length > 2) {\n      setIsLoading(true);\n      setOptions([]);\n    }\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  // Имитация запросов на бакэнд\n  React.useEffect(() => {\n    if (isLoading) {\n      const timeout = window.setTimeout(() => {\n        setIsLoading(false);\n        setOptions([...OPTIONS]);\n      }, 3000);\n      return () => {\n        window.clearTimeout(timeout);\n      };\n    }\n  }, [isLoading]);\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>\n      <SuggestInput\n        className=\"suggest\"\n        {...props}\n        value={localValue}\n        onInput={handleChange}\n        onOptionSelect={handleSelectOption}\n        options={options}\n        isLoading={isLoading}\n        onSearchButtonClick={() => {\n          console.log('search button click');\n        }}\n        displayClearIcon\n        dropContainerClassName=\"dropContainerClass\"\n        placeholder={placeholder}\n      />\n    </ThemeProvider>\n  );\n};\n",SuggestInput_stories={title:"Admiral-2.1/Input/SuggestInput",component:SuggestInput.n,decorators:void 0,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826"},{type:"figma",url:"https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855"}]},argTypes:{dimension:{options:types.q,control:{type:"radio"}},status:{options:types.l,control:{type:"radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},alignDropdown:{options:["auto","flex-start","flex-end","center","baseline","stretch"],control:{type:"radio"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},onChange:{action:"onChange"},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},options:{control:!1},portalTargetRef:{control:!1},onSearchButtonClick:{control:!1},dropMaxHeight:{control:!1},icon:{control:!1},icons:{control:!1},locale:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},containerRef:{control:!1},handleInput:{control:!1}}},SuggestInputPlaygroundStory=props=>(0,jsx_runtime.jsx)(SuggestInputPlaygroundTemplate,{...props});SuggestInputPlaygroundStory.displayName="SuggestInputPlaygroundStory";const SuggestInputPlayground={render:SuggestInputPlaygroundStory,parameters:{docs:{source:{code:SuggestInputPlayground_templateraw_namespaceObject}}},name:"Suggest Input компонент"},SuggestInputCustomIconStory=props=>(0,jsx_runtime.jsx)(SuggestInputPlaygroundTemplate,{...props,icon:SvgSearchSolid});SuggestInputCustomIconStory.displayName="SuggestInputCustomIconStory";const SuggestInputCustomIcon={render:SuggestInputCustomIconStory,parameters:{docs:{source:{code:SuggestInputPlayground_templateraw_namespaceObject}}},name:"Suggest Input альтернативная иконка"},SuggestInputUncontrolledStory=props=>(0,jsx_runtime.jsx)(SuggestInputUncontrolledTemplate,{...props});SuggestInputUncontrolledStory.displayName="SuggestInputUncontrolledStory";const SuggestInputUncontrolled={render:SuggestInputUncontrolledStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { SuggestInput } from '@admiral-ds/react-ui';\nimport type { SuggestInputProps } from '@admiral-ds/react-ui';\n\nconst options = ['one', 'two', 'three'];\n\nexport const SuggestInputUncontrolledTemplate = (props: SuggestInputProps) => {\n  return <SuggestInput options={options} placeholder=\"numbers\" dimension={props.dimension} />;\n};\n"}}},name:"Suggest Input неконтроллируемый"},SuggestInputNoMatchStory=props=>(0,jsx_runtime.jsx)(SuggestInputNoMatchTemplate,{...props});SuggestInputNoMatchStory.displayName="SuggestInputNoMatchStory";const SuggestInputNoMatch={render:SuggestInputNoMatchStory,parameters:{docs:{source:{code:"import * as React from 'react';\n\nimport { SuggestInput } from '@admiral-ds/react-ui';\nimport type { SuggestInputProps } from '@admiral-ds/react-ui';\n\nconst optionsNoMatch: string[] = [];\n\nexport const SuggestInputNoMatchTemplate = (props: SuggestInputProps) => {\n  return <SuggestInput options={optionsNoMatch} placeholder=\"numbers\" dimension={props.dimension} />;\n};\n"}}},name:'Suggest Input "Нет совпадений"'},SuggestInputFilterStory=props=>(0,jsx_runtime.jsx)(SuggestInputFilterTemplate,{...props});SuggestInputFilterStory.displayName="SuggestInputFilterStory";const SuggestInputFilter={render:SuggestInputFilterStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\n\nimport { getTextHighlightMeta, SuggestInput } from '@admiral-ds/react-ui';\nimport type { SuggestInputProps } from '@admiral-ds/react-ui';\n\nconst OPTIONS = [\n  'text 1',\n  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',\n  'text 3',\n  'text 4',\n  'text 5',\n  'text 6',\n  'text 7',\n  'text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',\n  'text 9',\n  'text 10',\n  'text 11',\n  'text 12',\n];\n\nexport const SuggestInputFilterTemplate = (props: SuggestInputProps) => {\n  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');\n  const [options, setOptions] = React.useState<string[] | undefined>([...OPTIONS]);\n\n  const handleSelectOption = (option: string) => {\n    setValue(option);\n    console.log(`Selected option - ${option}`);\n  };\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  React.useEffect(() => {\n    const filteredOptions: string[] = OPTIONS.filter(\n      (option) => getTextHighlightMeta(option, localValue, 'wholly').shouldHighlight,\n    );\n    setOptions(filteredOptions);\n  }, [localValue]);\n\n  return (\n    <SuggestInput\n      className=\"suggest\"\n      {...props}\n      value={localValue}\n      onInput={handleChange}\n      onOptionSelect={handleSelectOption}\n      options={options}\n      onSearchButtonClick={() => {\n        console.log('search button click');\n      }}\n      displayClearIcon\n    />\n  );\n};\n"}}},name:"Suggest Input с фильтрацией"};SuggestInputPlayground.parameters={...SuggestInputPlayground.parameters,docs:{...SuggestInputPlayground.parameters?.docs,source:{originalSource:"{\n  render: SuggestInputPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SuggestInputPlaygroundRaw\n      }\n    }\n  },\n  name: 'Suggest Input компонент'\n}",...SuggestInputPlayground.parameters?.docs?.source}}},SuggestInputCustomIcon.parameters={...SuggestInputCustomIcon.parameters,docs:{...SuggestInputCustomIcon.parameters?.docs,source:{originalSource:"{\n  render: SuggestInputCustomIconStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SuggestInputPlaygroundRaw\n      }\n    }\n  },\n  name: 'Suggest Input альтернативная иконка'\n}",...SuggestInputCustomIcon.parameters?.docs?.source}}},SuggestInputUncontrolled.parameters={...SuggestInputUncontrolled.parameters,docs:{...SuggestInputUncontrolled.parameters?.docs,source:{originalSource:"{\n  render: SuggestInputUncontrolledStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SuggestInputUncontrolledRaw\n      }\n    }\n  },\n  name: 'Suggest Input неконтроллируемый'\n}",...SuggestInputUncontrolled.parameters?.docs?.source}}},SuggestInputNoMatch.parameters={...SuggestInputNoMatch.parameters,docs:{...SuggestInputNoMatch.parameters?.docs,source:{originalSource:"{\n  render: SuggestInputNoMatchStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SuggestInputNoMatchRaw\n      }\n    }\n  },\n  name: 'Suggest Input \"Нет совпадений\"'\n}",...SuggestInputNoMatch.parameters?.docs?.source}}},SuggestInputFilter.parameters={...SuggestInputFilter.parameters,docs:{...SuggestInputFilter.parameters?.docs,source:{originalSource:"{\n  render: SuggestInputFilterStory,\n  parameters: {\n    docs: {\n      source: {\n        code: SuggestInputFilterRaw\n      }\n    }\n  },\n  name: 'Suggest Input с фильтрацией'\n}",...SuggestInputFilter.parameters?.docs?.source}}};const __namedExportsOrder=["SuggestInputPlayground","SuggestInputCustomIcon","SuggestInputUncontrolled","SuggestInputNoMatch","SuggestInputFilter"]}}]);