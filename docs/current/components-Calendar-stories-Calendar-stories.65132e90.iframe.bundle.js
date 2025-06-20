"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2505],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./src/components/Calendar/stories/Calendar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CalendarSimple:()=>CalendarSimple,Range:()=>Range,SimpleWithChangeViewDate:()=>SimpleWithChangeViewDate,SimpleWithFilterDate:()=>SimpleWithFilterDate,SimpleWithMaxDate:()=>SimpleWithMaxDate,SimpleWithSetActiveViewDate:()=>SimpleWithSetActiveViewDate,SimpleWithSetActiveViewDateAfterChooseYear:()=>SimpleWithSetActiveViewDateAfterChooseYear,SimpleWithSetActiveViewWithoutDay:()=>SimpleWithSetActiveViewWithoutDay,SimpleWithSpecialDates:()=>SimpleWithSpecialDates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Calendar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Calendar=__webpack_require__("./src/components/Calendar/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  color: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}(0,styled_components_browser_esm.AH)(_templateObject(),function(p){return p.disabled?"var(--admiral-color-Neutral_Neutral90, ".concat(p.theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")")});var weekendMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.disabled?"var(--admiral-color-Error_Error30, ".concat(p.theme.color["Error/Error 30"],")"):"var(--admiral-color-Error_Error60Main, ".concat(p.theme.color["Error/Error 60 Main"],")")}),T=__webpack_require__("./src/components/T/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function SimpleWithSpecialDates_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function SimpleWithSpecialDates_template_templateObject(){var data=SimpleWithSpecialDates_template_tagged_template_literal([`
  color: `,`;
`]);return SimpleWithSpecialDates_template_templateObject=function _templateObject(){return data},data}function SimpleWithSpecialDates_template_templateObject1(){var data=SimpleWithSpecialDates_template_tagged_template_literal([`
  color: `,`;
`]);return SimpleWithSpecialDates_template_templateObject1=function _templateObject(){return data},data}var startOfDay=function(date){return date.setHours(0,0,0,0),date},HOLIDAY="holidays",PRE_HOLIDAY="preholidays",WEEKEND="weekend",holidayCalendar=[{date:"2022-01-01",type:HOLIDAY},{date:"2022-01-02",type:HOLIDAY},{date:"2022-01-03",type:HOLIDAY},{date:"2022-01-04",type:HOLIDAY},{date:"2022-01-05",type:HOLIDAY},{date:"2022-01-06",type:HOLIDAY},{date:"2022-01-07",type:HOLIDAY},{date:"2022-01-08",type:HOLIDAY},{date:"2022-01-09",type:WEEKEND},{date:"2022-01-15",type:WEEKEND},{date:"2022-01-16",type:WEEKEND},{date:"2022-01-22",type:WEEKEND},{date:"2022-01-23",type:WEEKEND},{date:"2022-01-29",type:WEEKEND},{date:"2022-01-30",type:WEEKEND},{date:"2022-02-05",type:WEEKEND},{date:"2022-02-06",type:WEEKEND},{date:"2022-02-12",type:WEEKEND},{date:"2022-02-13",type:WEEKEND},{date:"2022-02-19",type:WEEKEND},{date:"2022-02-20",type:WEEKEND},{date:"2022-02-23",type:HOLIDAY},{date:"2022-02-26",type:WEEKEND},{date:"2022-02-27",type:WEEKEND},{date:"2022-03-06",type:WEEKEND},{date:"2022-03-07",type:WEEKEND},{date:"2022-03-08",type:HOLIDAY},{date:"2022-03-12",type:WEEKEND},{date:"2022-03-13",type:WEEKEND},{date:"2022-03-19",type:WEEKEND},{date:"2022-03-20",type:WEEKEND},{date:"2022-03-26",type:WEEKEND},{date:"2022-03-27",type:WEEKEND},{date:"2022-04-02",type:WEEKEND},{date:"2022-04-03",type:WEEKEND},{date:"2022-04-09",type:WEEKEND},{date:"2022-04-10",type:WEEKEND},{date:"2022-04-16",type:WEEKEND},{date:"2022-04-17",type:WEEKEND},{date:"2022-04-23",type:WEEKEND},{date:"2022-04-24",type:WEEKEND},{date:"2022-04-30",type:WEEKEND},{date:"2022-05-01",type:HOLIDAY},{date:"2022-05-02",type:WEEKEND},{date:"2022-05-03",type:WEEKEND},{date:"2022-05-07",type:WEEKEND},{date:"2022-05-08",type:WEEKEND},{date:"2022-05-09",type:HOLIDAY},{date:"2022-05-10",type:WEEKEND},{date:"2022-05-14",type:WEEKEND},{date:"2022-05-15",type:WEEKEND},{date:"2022-05-21",type:WEEKEND},{date:"2022-05-22",type:WEEKEND},{date:"2022-05-28",type:WEEKEND},{date:"2022-05-29",type:WEEKEND},{date:"2022-06-04",type:WEEKEND},{date:"2022-06-05",type:WEEKEND},{date:"2022-06-11",type:WEEKEND},{date:"2022-06-12",type:HOLIDAY},{date:"2022-06-13",type:WEEKEND},{date:"2022-06-18",type:WEEKEND},{date:"2022-06-19",type:WEEKEND},{date:"2022-06-25",type:WEEKEND},{date:"2022-06-26",type:WEEKEND},{date:"2022-07-02",type:WEEKEND},{date:"2022-07-03",type:WEEKEND},{date:"2022-07-09",type:WEEKEND},{date:"2022-07-10",type:WEEKEND},{date:"2022-07-16",type:WEEKEND},{date:"2022-07-17",type:WEEKEND},{date:"2022-07-23",type:WEEKEND},{date:"2022-07-24",type:WEEKEND},{date:"2022-07-30",type:WEEKEND},{date:"2022-07-31",type:WEEKEND},{date:"2022-08-06",type:WEEKEND},{date:"2022-08-07",type:WEEKEND},{date:"2022-08-13",type:WEEKEND},{date:"2022-08-14",type:WEEKEND},{date:"2022-08-20",type:WEEKEND},{date:"2022-08-21",type:WEEKEND},{date:"2022-08-27",type:WEEKEND},{date:"2022-08-28",type:WEEKEND},{date:"2022-09-03",type:WEEKEND},{date:"2022-09-04",type:WEEKEND},{date:"2022-09-10",type:WEEKEND},{date:"2022-09-11",type:WEEKEND},{date:"2022-09-17",type:WEEKEND},{date:"2022-09-18",type:WEEKEND},{date:"2022-09-24",type:WEEKEND},{date:"2022-09-25",type:WEEKEND},{date:"2022-10-01",type:WEEKEND},{date:"2022-10-02",type:WEEKEND},{date:"2022-10-08",type:WEEKEND},{date:"2022-10-09",type:WEEKEND},{date:"2022-10-15",type:WEEKEND},{date:"2022-10-16",type:WEEKEND},{date:"2022-10-22",type:WEEKEND},{date:"2022-10-23",type:WEEKEND},{date:"2022-10-29",type:WEEKEND},{date:"2022-10-30",type:WEEKEND},{date:"2022-11-04",type:HOLIDAY},{date:"2022-11-05",type:WEEKEND},{date:"2022-11-06",type:WEEKEND},{date:"2022-11-12",type:WEEKEND},{date:"2022-11-13",type:WEEKEND},{date:"2022-11-19",type:WEEKEND},{date:"2022-11-20",type:WEEKEND},{date:"2022-11-26",type:WEEKEND},{date:"2022-11-27",type:WEEKEND},{date:"2022-12-03",type:WEEKEND},{date:"2022-12-04",type:WEEKEND},{date:"2022-12-10",type:WEEKEND},{date:"2022-12-11",type:WEEKEND},{date:"2022-12-17",type:WEEKEND},{date:"2022-12-18",type:WEEKEND},{date:"2022-12-24",type:WEEKEND},{date:"2022-12-25",type:WEEKEND},{date:"2022-12-31",type:WEEKEND},{date:"2022-02-22",type:PRE_HOLIDAY},{date:"2022-03-05",type:PRE_HOLIDAY},{date:"2022-11-03",type:PRE_HOLIDAY},{date:"2023-01-01",type:HOLIDAY},{date:"2023-01-02",type:HOLIDAY},{date:"2023-01-03",type:HOLIDAY},{date:"2023-01-04",type:HOLIDAY},{date:"2023-01-05",type:HOLIDAY},{date:"2023-01-06",type:HOLIDAY},{date:"2023-01-07",type:HOLIDAY},{date:"2023-01-08",type:HOLIDAY},{date:"2023-01-14",type:WEEKEND},{date:"2023-01-15",type:WEEKEND},{date:"2023-01-21",type:WEEKEND},{date:"2023-01-22",type:WEEKEND},{date:"2023-01-28",type:WEEKEND},{date:"2023-01-29",type:WEEKEND},{date:"2023-02-04",type:WEEKEND},{date:"2023-02-05",type:WEEKEND},{date:"2023-02-11",type:WEEKEND},{date:"2023-02-12",type:WEEKEND},{date:"2023-02-18",type:WEEKEND},{date:"2023-02-19",type:WEEKEND},{date:"2023-02-23",type:HOLIDAY},{date:"2023-02-24",type:WEEKEND},{date:"2023-02-25",type:WEEKEND},{date:"2023-02-26",type:WEEKEND},{date:"2023-03-04",type:WEEKEND},{date:"2023-03-05",type:WEEKEND},{date:"2023-03-08",type:HOLIDAY},{date:"2023-03-11",type:WEEKEND},{date:"2023-03-12",type:WEEKEND},{date:"2023-03-18",type:WEEKEND},{date:"2023-03-19",type:WEEKEND},{date:"2023-03-25",type:WEEKEND},{date:"2023-03-26",type:WEEKEND},{date:"2023-04-01",type:WEEKEND},{date:"2023-04-02",type:WEEKEND},{date:"2023-04-08",type:WEEKEND},{date:"2023-04-09",type:WEEKEND},{date:"2023-04-15",type:WEEKEND},{date:"2023-04-16",type:WEEKEND},{date:"2023-04-22",type:WEEKEND},{date:"2023-04-23",type:WEEKEND},{date:"2023-04-29",type:WEEKEND},{date:"2023-04-30",type:WEEKEND},{date:"2023-05-01",type:HOLIDAY},{date:"2023-05-06",type:WEEKEND},{date:"2023-05-07",type:WEEKEND},{date:"2023-05-08",type:WEEKEND},{date:"2023-05-09",type:HOLIDAY},{date:"2023-05-13",type:WEEKEND},{date:"2023-05-14",type:WEEKEND},{date:"2023-05-20",type:WEEKEND},{date:"2023-05-21",type:WEEKEND},{date:"2023-05-27",type:WEEKEND},{date:"2023-05-28",type:WEEKEND},{date:"2023-06-03",type:WEEKEND},{date:"2023-06-04",type:WEEKEND},{date:"2023-06-10",type:WEEKEND},{date:"2023-06-11",type:WEEKEND},{date:"2023-06-12",type:HOLIDAY},{date:"2023-06-17",type:WEEKEND},{date:"2023-06-18",type:WEEKEND},{date:"2023-06-24",type:WEEKEND},{date:"2023-06-25",type:WEEKEND},{date:"2023-07-01",type:WEEKEND},{date:"2023-07-02",type:WEEKEND},{date:"2023-07-08",type:WEEKEND},{date:"2023-07-09",type:WEEKEND},{date:"2023-07-15",type:WEEKEND},{date:"2023-07-16",type:WEEKEND},{date:"2023-07-22",type:WEEKEND},{date:"2023-07-23",type:WEEKEND},{date:"2023-07-29",type:WEEKEND},{date:"2023-07-30",type:WEEKEND},{date:"2023-08-05",type:WEEKEND},{date:"2023-08-06",type:WEEKEND},{date:"2023-08-12",type:WEEKEND},{date:"2023-08-13",type:WEEKEND},{date:"2023-08-19",type:WEEKEND},{date:"2023-08-20",type:WEEKEND},{date:"2023-08-26",type:WEEKEND},{date:"2023-08-27",type:WEEKEND},{date:"2023-09-02",type:WEEKEND},{date:"2023-09-03",type:WEEKEND},{date:"2023-09-09",type:WEEKEND},{date:"2023-09-10",type:WEEKEND},{date:"2023-09-16",type:WEEKEND},{date:"2023-09-17",type:WEEKEND},{date:"2023-09-23",type:WEEKEND},{date:"2023-09-24",type:WEEKEND},{date:"2023-09-30",type:WEEKEND},{date:"2023-10-01",type:WEEKEND},{date:"2023-10-07",type:WEEKEND},{date:"2023-10-08",type:WEEKEND},{date:"2023-10-14",type:WEEKEND},{date:"2023-10-15",type:WEEKEND},{date:"2023-10-21",type:WEEKEND},{date:"2023-10-22",type:WEEKEND},{date:"2023-10-28",type:WEEKEND},{date:"2023-10-29",type:WEEKEND},{date:"2023-11-04",type:HOLIDAY},{date:"2023-11-05",type:WEEKEND},{date:"2023-11-06",type:WEEKEND},{date:"2023-11-11",type:WEEKEND},{date:"2023-11-12",type:WEEKEND},{date:"2023-11-18",type:WEEKEND},{date:"2023-11-19",type:WEEKEND},{date:"2023-11-25",type:WEEKEND},{date:"2023-11-26",type:WEEKEND},{date:"2023-12-02",type:WEEKEND},{date:"2023-12-03",type:WEEKEND},{date:"2023-12-09",type:WEEKEND},{date:"2023-12-10",type:WEEKEND},{date:"2023-12-16",type:WEEKEND},{date:"2023-12-17",type:WEEKEND},{date:"2023-12-23",type:WEEKEND},{date:"2023-12-24",type:WEEKEND},{date:"2023-12-30",type:WEEKEND},{date:"2023-12-31",type:WEEKEND},{date:"2023-02-22",type:PRE_HOLIDAY},{date:"2023-03-07",type:PRE_HOLIDAY},{date:"2023-11-03",type:PRE_HOLIDAY}],holidayMixin=(0,styled_components_browser_esm.AH)(SimpleWithSpecialDates_template_templateObject(),function(p){return p.disabled?"var(--admiral-color-Success_Success30, ".concat(p.theme.color["Success/Success 30"],")"):"var(--admiral-color-Success_Success50Main, ".concat(p.theme.color["Success/Success 50 Main"],")")}),preHolidayMixin=(0,styled_components_browser_esm.AH)(SimpleWithSpecialDates_template_templateObject1(),function(p){return p.disabled?"var(--admiral-color-Attention_Attention30, ".concat(p.theme.color["Attention/Attention 30"],")"):"var(--admiral-color-Attention_Attention50Main, ".concat(p.theme.color["Attention/Attention 50 Main"],")")}),holidayDates=new Map(holidayCalendar.map(function(day){return[startOfDay(new Date(day.date)).getTime(),day.type]})),SimpleWithSpecialDatesTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(null),2),endDate=_React_useState1[0],setEndDate=_React_useState1[1],handleChange=function(value){null===value||_instanceof(value,Date)?setSelected(value):(setSelected(value[0]),setEndDate(value[1]))},highlightHolidays=function(day){var key=startOfDay(day).getTime();switch(holidayDates.get(key)){case HOLIDAY:return holidayMixin;case PRE_HOLIDAY:return preHolidayMixin;case WEEKEND:return weekendMixin;default:return}};return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с подсветкой выходных, праздничный и специальных дат."}),props.range?(0,jsx_runtime.jsx)(Calendar.V,_object_spread_props(_object_spread({},props),{range:!0,startDate:selected,endDate:endDate,onChange:handleChange,highlightSpecialDay:highlightHolidays})):(0,jsx_runtime.jsx)(Calendar.V,_object_spread_props(_object_spread({},props),{selected:selected,onChange:handleChange,highlightSpecialDay:highlightHolidays}))]})};try{SimpleWithSpecialDatesTemplate.displayName="SimpleWithSpecialDatesTemplate",SimpleWithSpecialDatesTemplate.__docgenInfo={description:"",displayName:"SimpleWithSpecialDatesTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/SimpleWithSpecialDates.template.tsx#SimpleWithSpecialDatesTemplate"]={docgenInfo:SimpleWithSpecialDatesTemplate.__docgenInfo,name:"SimpleWithSpecialDatesTemplate",path:"src/components/Calendar/stories/SimpleWithSpecialDates.template.tsx#SimpleWithSpecialDatesTemplate"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.tsx");function SimpleWithSetActiveViewWithoutDay_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SimpleWithSetActiveViewWithoutDay_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SimpleWithSetActiveViewWithoutDay_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function SimpleWithSetActiveViewWithoutDay_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SimpleWithSetActiveViewWithoutDay_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function SimpleWithSetActiveViewWithoutDay_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SimpleWithSetActiveViewWithoutDay_template_define_property(target,key,source[key])})}return target}function SimpleWithSetActiveViewWithoutDay_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SimpleWithSetActiveViewWithoutDay_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SimpleWithSetActiveViewWithoutDay_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SimpleWithSetActiveViewWithoutDay_template_sliced_to_array(arr,i){return SimpleWithSetActiveViewWithoutDay_template_array_with_holes(arr)||SimpleWithSetActiveViewWithoutDay_template_iterable_to_array_limit(arr,i)||SimpleWithSetActiveViewWithoutDay_template_unsupported_iterable_to_array(arr,i)||SimpleWithSetActiveViewWithoutDay_template_non_iterable_rest()}function SimpleWithSetActiveViewWithoutDay_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SimpleWithSetActiveViewWithoutDay_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SimpleWithSetActiveViewWithoutDay_template_array_like_to_array(o,minLen)}}var SimpleWithSetActiveViewWithoutDayTemplate=function(_param){var props=_extends({},_object_destructuring_empty(_param)),_React_useState=SimpleWithSetActiveViewWithoutDay_template_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=SimpleWithSetActiveViewWithoutDay_template_sliced_to_array(react.useState("MONTH"),2),currentActiveView=_React_useState1[0],setCurrentActiveView=_React_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с выбором только месяца/года. Показываем только экраны выбора месяца и года."}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 2 Long",as:"div",style:{marginBottom:"24px"},children:"Если выставлен currentActiveViewImportant, то необходимо самому управлять открытием экранов"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){return setSelected(new Date)},children:"set Date now"})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Calendar.V,SimpleWithSetActiveViewWithoutDay_template_object_spread_props(SimpleWithSetActiveViewWithoutDay_template_object_spread({},props),{selected:selected,currentActiveView:currentActiveView,currentActiveViewImportant:!0,onDateIncreaseDecrease:function(date){console.log(date,"onIncreaseDecreaseDate"),setSelected(date)},onChange:function(value){setSelected(value),console.log(value,"onChange")},onViewMonthSelect:function(){console.log("onViewMonthSelect"),setCurrentActiveView("MONTH")},onViewYearSelect:function(){console.log("onViewYearSelect"),setCurrentActiveView("YEAR")}}))]})};try{SimpleWithSetActiveViewWithoutDayTemplate.displayName="SimpleWithSetActiveViewWithoutDayTemplate",SimpleWithSetActiveViewWithoutDayTemplate.__docgenInfo={description:"",displayName:"SimpleWithSetActiveViewWithoutDayTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/SimpleWithSetActiveViewWithoutDay.template.tsx#SimpleWithSetActiveViewWithoutDayTemplate"]={docgenInfo:SimpleWithSetActiveViewWithoutDayTemplate.__docgenInfo,name:"SimpleWithSetActiveViewWithoutDayTemplate",path:"src/components/Calendar/stories/SimpleWithSetActiveViewWithoutDay.template.tsx#SimpleWithSetActiveViewWithoutDayTemplate"})}catch(__react_docgen_typescript_loader_error){}function SimpleWithSetActiveViewDateAfterChooseYear_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SimpleWithSetActiveViewDateAfterChooseYear_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SimpleWithSetActiveViewDateAfterChooseYear_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SimpleWithSetActiveViewDateAfterChooseYear_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SimpleWithSetActiveViewDateAfterChooseYear_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SimpleWithSetActiveViewDateAfterChooseYear_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SimpleWithSetActiveViewDateAfterChooseYear_template_define_property(target,key,source[key])})}return target}function SimpleWithSetActiveViewDateAfterChooseYear_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SimpleWithSetActiveViewDateAfterChooseYear_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SimpleWithSetActiveViewDateAfterChooseYear_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SimpleWithSetActiveViewDateAfterChooseYear_template_sliced_to_array(arr,i){return SimpleWithSetActiveViewDateAfterChooseYear_template_array_with_holes(arr)||SimpleWithSetActiveViewDateAfterChooseYear_template_iterable_to_array_limit(arr,i)||SimpleWithSetActiveViewDateAfterChooseYear_template_unsupported_iterable_to_array(arr,i)||SimpleWithSetActiveViewDateAfterChooseYear_template_non_iterable_rest()}function SimpleWithSetActiveViewDateAfterChooseYear_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SimpleWithSetActiveViewDateAfterChooseYear_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SimpleWithSetActiveViewDateAfterChooseYear_template_array_like_to_array(o,minLen)}}var SimpleWithSetActiveViewDateAfterChooseYearTemplate=function(props){var _React_useState=SimpleWithSetActiveViewDateAfterChooseYear_template_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=SimpleWithSetActiveViewDateAfterChooseYear_template_sliced_to_array(react.useState(null),2),currentActiveView=_React_useState1[0],setActiveViewDateScreen=_React_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с открытием экрана выбора месяца после выбора года."}),(0,jsx_runtime.jsx)(Calendar.V,SimpleWithSetActiveViewDateAfterChooseYear_template_object_spread_props(SimpleWithSetActiveViewDateAfterChooseYear_template_object_spread({},props),{selected:selected,currentActiveView:currentActiveView,onDateIncreaseDecrease:function(date){setActiveViewDateScreen(null),console.log(date,"onIncreaseDecreaseDate")},onChange:function(value){setSelected(value),console.log(value,"onChange")},onYearSelect:function(){setActiveViewDateScreen("MONTH")}}))]})};try{SimpleWithSetActiveViewDateAfterChooseYearTemplate.displayName="SimpleWithSetActiveViewDateAfterChooseYearTemplate",SimpleWithSetActiveViewDateAfterChooseYearTemplate.__docgenInfo={description:"",displayName:"SimpleWithSetActiveViewDateAfterChooseYearTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/SimpleWithSetActiveViewDateAfterChooseYear.template.tsx#SimpleWithSetActiveViewDateAfterChooseYearTemplate"]={docgenInfo:SimpleWithSetActiveViewDateAfterChooseYearTemplate.__docgenInfo,name:"SimpleWithSetActiveViewDateAfterChooseYearTemplate",path:"src/components/Calendar/stories/SimpleWithSetActiveViewDateAfterChooseYear.template.tsx#SimpleWithSetActiveViewDateAfterChooseYearTemplate"})}catch(__react_docgen_typescript_loader_error){}function SimpleWithSetActiveViewDate_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SimpleWithSetActiveViewDate_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SimpleWithSetActiveViewDate_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SimpleWithSetActiveViewDate_template_extends(){return(SimpleWithSetActiveViewDate_template_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function SimpleWithSetActiveViewDate_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SimpleWithSetActiveViewDate_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SimpleWithSetActiveViewDate_template_object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function SimpleWithSetActiveViewDate_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SimpleWithSetActiveViewDate_template_define_property(target,key,source[key])})}return target}function SimpleWithSetActiveViewDate_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SimpleWithSetActiveViewDate_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SimpleWithSetActiveViewDate_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SimpleWithSetActiveViewDate_template_sliced_to_array(arr,i){return SimpleWithSetActiveViewDate_template_array_with_holes(arr)||SimpleWithSetActiveViewDate_template_iterable_to_array_limit(arr,i)||SimpleWithSetActiveViewDate_template_unsupported_iterable_to_array(arr,i)||SimpleWithSetActiveViewDate_template_non_iterable_rest()}function SimpleWithSetActiveViewDate_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SimpleWithSetActiveViewDate_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SimpleWithSetActiveViewDate_template_array_like_to_array(o,minLen)}}var SimpleWithSetActiveViewDateTemplate=function(_param){var props=SimpleWithSetActiveViewDate_template_extends({},SimpleWithSetActiveViewDate_template_object_destructuring_empty(_param)),_React_useState=SimpleWithSetActiveViewDate_template_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=SimpleWithSetActiveViewDate_template_sliced_to_array(react.useState(null),2),currentActiveView=_React_useState1[0],setCurrentActiveView=_React_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с переключением экранов выбора дат - месяц/год/день."}),(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){return setCurrentActiveView("MONTH")},children:"Month"}),"&nbsp;",(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){return setCurrentActiveView("YEAR")},children:"Year"}),"&nbsp;",(0,jsx_runtime.jsx)(Button.$n,{dimension:"s",onClick:function(){return setCurrentActiveView("DAY")},children:"Day"})]}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(Calendar.V,SimpleWithSetActiveViewDate_template_object_spread_props(SimpleWithSetActiveViewDate_template_object_spread({},props),{selected:selected,currentActiveView:currentActiveView,currentActiveViewImportant:!0,onDateIncreaseDecrease:function(){setCurrentActiveView(null)},onYearSelect:function(data){setSelected(data),setCurrentActiveView("MONTH")},onMonthSelect:function(data){setSelected(data)},onViewMonthSelect:function(){console.log("onViewMonthSelect"),setCurrentActiveView("MONTH")},onViewYearSelect:function(){console.log("onViewYearSelect"),setCurrentActiveView("YEAR")},onChange:function(value){setSelected(value)}}))]})};try{SimpleWithSetActiveViewDateTemplate.displayName="SimpleWithSetActiveViewDateTemplate",SimpleWithSetActiveViewDateTemplate.__docgenInfo={description:"",displayName:"SimpleWithSetActiveViewDateTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/SimpleWithSetActiveViewDate.template.tsx#SimpleWithSetActiveViewDateTemplate"]={docgenInfo:SimpleWithSetActiveViewDateTemplate.__docgenInfo,name:"SimpleWithSetActiveViewDateTemplate",path:"src/components/Calendar/stories/SimpleWithSetActiveViewDate.template.tsx#SimpleWithSetActiveViewDateTemplate"})}catch(__react_docgen_typescript_loader_error){}function SimpleWithChangeViewDate_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SimpleWithChangeViewDate_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SimpleWithChangeViewDate_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SimpleWithChangeViewDate_template_extends(){return(SimpleWithChangeViewDate_template_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function SimpleWithChangeViewDate_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SimpleWithChangeViewDate_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SimpleWithChangeViewDate_template_object_destructuring_empty(o){if(null==o)throw TypeError("Cannot destructure "+o);return o}function SimpleWithChangeViewDate_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SimpleWithChangeViewDate_template_define_property(target,key,source[key])})}return target}function SimpleWithChangeViewDate_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SimpleWithChangeViewDate_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SimpleWithChangeViewDate_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SimpleWithChangeViewDate_template_sliced_to_array(arr,i){return SimpleWithChangeViewDate_template_array_with_holes(arr)||SimpleWithChangeViewDate_template_iterable_to_array_limit(arr,i)||SimpleWithChangeViewDate_template_unsupported_iterable_to_array(arr,i)||SimpleWithChangeViewDate_template_non_iterable_rest()}function SimpleWithChangeViewDate_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SimpleWithChangeViewDate_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SimpleWithChangeViewDate_template_array_like_to_array(o,minLen)}}var SimpleWithChangeViewDateTemplate=function(_param){var props=SimpleWithChangeViewDate_template_extends({},SimpleWithChangeViewDate_template_object_destructuring_empty(_param)),_React_useState=SimpleWithChangeViewDate_template_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с коллбеками (смотри в консоль)"}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 2 Long",as:"div",children:"Открытие экранов выбора года и месяца `(onViewEnter, onViewLeave)`"}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 2 Long",as:"div",style:{marginBottom:"24px"},children:"Изменение даты после выбора года или месяца по стрелкам `(onIncreaseDecreaseDate)`"}),(0,jsx_runtime.jsx)(Calendar.V,SimpleWithChangeViewDate_template_object_spread_props(SimpleWithChangeViewDate_template_object_spread({},props),{selected:selected,onChange:function(value){setSelected(value)},onDateIncreaseDecrease:function(value){console.log("onIncreaseDecreaseDate",value)},onViewEnter:function(view){console.log("onViewEnter",view)},onViewLeave:function(view){console.log("onViewLeave",view)}}))]})};try{SimpleWithChangeViewDateTemplate.displayName="SimpleWithChangeViewDateTemplate",SimpleWithChangeViewDateTemplate.__docgenInfo={description:"",displayName:"SimpleWithChangeViewDateTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/SimpleWithChangeViewDate.template.tsx#SimpleWithChangeViewDateTemplate"]={docgenInfo:SimpleWithChangeViewDateTemplate.__docgenInfo,name:"SimpleWithChangeViewDateTemplate",path:"src/components/Calendar/stories/SimpleWithChangeViewDate.template.tsx#SimpleWithChangeViewDateTemplate"})}catch(__react_docgen_typescript_loader_error){}function SimpleWithFilterDate_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SimpleWithFilterDate_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SimpleWithFilterDate_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SimpleWithFilterDate_template_instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}function SimpleWithFilterDate_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SimpleWithFilterDate_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SimpleWithFilterDate_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SimpleWithFilterDate_template_define_property(target,key,source[key])})}return target}function SimpleWithFilterDate_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SimpleWithFilterDate_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SimpleWithFilterDate_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SimpleWithFilterDate_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SimpleWithFilterDate_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SimpleWithFilterDate_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SimpleWithFilterDate_template_sliced_to_array(arr,i){return SimpleWithFilterDate_template_array_with_holes(arr)||SimpleWithFilterDate_template_iterable_to_array_limit(arr,i)||SimpleWithFilterDate_template_unsupported_iterable_to_array(arr,i)||SimpleWithFilterDate_template_non_iterable_rest()}function SimpleWithFilterDate_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SimpleWithFilterDate_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SimpleWithFilterDate_template_array_like_to_array(o,minLen)}}var SimpleWithFilterDateTemplate=function(_param){var range=_param.range,props=SimpleWithFilterDate_template_object_without_properties(_param,["range"]),_React_useState=SimpleWithFilterDate_template_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=SimpleWithFilterDate_template_sliced_to_array(react.useState(null),2),endDate=_React_useState1[0],setEndDate=_React_useState1[1],handleChange=function(value){null===value||SimpleWithFilterDate_template_instanceof(value,Date)?setSelected(value):(setSelected(value[0]),setEndDate(value[1]))},isWeekday=function(date){var day=date.getDay();return 0!==day&&6!==day};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с недоступными для выбора датами."}),range?(0,jsx_runtime.jsx)(Calendar.V,SimpleWithFilterDate_template_object_spread_props(SimpleWithFilterDate_template_object_spread({},props),{range:!0,startDate:selected,endDate:endDate,filterDate:isWeekday,onChange:handleChange})):(0,jsx_runtime.jsx)(Calendar.V,SimpleWithFilterDate_template_object_spread_props(SimpleWithFilterDate_template_object_spread({},props),{filterDate:isWeekday,selected:selected,onChange:handleChange}))]})};try{SimpleWithFilterDateTemplate.displayName="SimpleWithFilterDateTemplate",SimpleWithFilterDateTemplate.__docgenInfo={description:"",displayName:"SimpleWithFilterDateTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/SimpleWithFilterDate.template.tsx#SimpleWithFilterDateTemplate"]={docgenInfo:SimpleWithFilterDateTemplate.__docgenInfo,name:"SimpleWithFilterDateTemplate",path:"src/components/Calendar/stories/SimpleWithFilterDate.template.tsx#SimpleWithFilterDateTemplate"})}catch(__react_docgen_typescript_loader_error){}function SimpleWithMaxDate_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SimpleWithMaxDate_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function SimpleWithMaxDate_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SimpleWithMaxDate_template_instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}function SimpleWithMaxDate_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function SimpleWithMaxDate_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function SimpleWithMaxDate_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){SimpleWithMaxDate_template_define_property(target,key,source[key])})}return target}function SimpleWithMaxDate_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function SimpleWithMaxDate_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):SimpleWithMaxDate_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function SimpleWithMaxDate_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=SimpleWithMaxDate_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SimpleWithMaxDate_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function SimpleWithMaxDate_template_sliced_to_array(arr,i){return SimpleWithMaxDate_template_array_with_holes(arr)||SimpleWithMaxDate_template_iterable_to_array_limit(arr,i)||SimpleWithMaxDate_template_unsupported_iterable_to_array(arr,i)||SimpleWithMaxDate_template_non_iterable_rest()}function SimpleWithMaxDate_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SimpleWithMaxDate_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return SimpleWithMaxDate_template_array_like_to_array(o,minLen)}}var SimpleWithMaxDateTemplate=function(_param){var range=_param.range,props=SimpleWithMaxDate_template_object_without_properties(_param,["range"]),_React_useState=SimpleWithMaxDate_template_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=SimpleWithMaxDate_template_sliced_to_array(react.useState(null),2),endDate=_React_useState1[0],setEndDate=_React_useState1[1],handleChange=function(value){null===value||SimpleWithMaxDate_template_instanceof(value,Date)?setSelected(value):(setSelected(value[0]),setEndDate(value[1]))},tomorrow=new Date;return tomorrow.setDate(new Date().getDate()+1),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с ограничением максимальной даты."}),range?(0,jsx_runtime.jsx)(Calendar.V,SimpleWithMaxDate_template_object_spread_props(SimpleWithMaxDate_template_object_spread({},props),{range:!0,startDate:selected,endDate:endDate,maxDate:tomorrow,onChange:handleChange})):(0,jsx_runtime.jsx)(Calendar.V,SimpleWithMaxDate_template_object_spread_props(SimpleWithMaxDate_template_object_spread({},props),{maxDate:tomorrow,selected:selected,onChange:handleChange}))]})};try{SimpleWithMaxDateTemplate.displayName="SimpleWithMaxDateTemplate",SimpleWithMaxDateTemplate.__docgenInfo={description:"",displayName:"SimpleWithMaxDateTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/SimpleWithMaxDate.template.tsx#SimpleWithMaxDateTemplate"]={docgenInfo:SimpleWithMaxDateTemplate.__docgenInfo,name:"SimpleWithMaxDateTemplate",path:"src/components/Calendar/stories/SimpleWithMaxDate.template.tsx#SimpleWithMaxDateTemplate"})}catch(__react_docgen_typescript_loader_error){}function Range_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Range_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function Range_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Range_template_instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}function Range_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Range_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Range_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Range_template_define_property(target,key,source[key])})}return target}function Range_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Range_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Range_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Range_template_sliced_to_array(arr,i){return Range_template_array_with_holes(arr)||Range_template_iterable_to_array_limit(arr,i)||Range_template_unsupported_iterable_to_array(arr,i)||Range_template_non_iterable_rest()}function Range_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Range_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Range_template_array_like_to_array(o,minLen)}}var RangeTemplate=function(props){var _React_useState=Range_template_sliced_to_array(react.useState(null),2),startDate=_React_useState[0],setStartDate=_React_useState[1],_React_useState1=Range_template_sliced_to_array(react.useState(null),2),endDate=_React_useState1[0],setEndDate=_React_useState1[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример с выбором диапазона."}),(0,jsx_runtime.jsx)(Calendar.V,Range_template_object_spread_props(Range_template_object_spread({},props),{range:!0,startDate:startDate,endDate:endDate,onChange:function(value){null===value||Range_template_instanceof(value,Date)?setStartDate(value):(setStartDate(value[0]),setEndDate(value[1]))}}))]})};try{RangeTemplate.displayName="RangeTemplate",RangeTemplate.__docgenInfo={description:"",displayName:"RangeTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/Range.template.tsx#RangeTemplate"]={docgenInfo:RangeTemplate.__docgenInfo,name:"RangeTemplate",path:"src/components/Calendar/stories/Range.template.tsx#RangeTemplate"})}catch(__react_docgen_typescript_loader_error){}function CalendarSimple_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function CalendarSimple_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function CalendarSimple_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CalendarSimple_template_instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}function CalendarSimple_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function CalendarSimple_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function CalendarSimple_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){CalendarSimple_template_define_property(target,key,source[key])})}return target}function CalendarSimple_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function CalendarSimple_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):CalendarSimple_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function CalendarSimple_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=CalendarSimple_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function CalendarSimple_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function CalendarSimple_template_sliced_to_array(arr,i){return CalendarSimple_template_array_with_holes(arr)||CalendarSimple_template_iterable_to_array_limit(arr,i)||CalendarSimple_template_unsupported_iterable_to_array(arr,i)||CalendarSimple_template_non_iterable_rest()}function CalendarSimple_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return CalendarSimple_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return CalendarSimple_template_array_like_to_array(o,minLen)}}var CalendarSimpleTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=CalendarSimple_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]),_React_useState=CalendarSimple_template_sliced_to_array(react.useState(null),2),selected=_React_useState[0],setSelected=_React_useState[1],_React_useState1=CalendarSimple_template_sliced_to_array(react.useState(null),2),endDate=_React_useState1[0],setEndDate=_React_useState1[1],handleChange=function(value){null===value||CalendarSimple_template_instanceof(value,Date)?setSelected(value):(setSelected(value[0]),setEndDate(value[1]))};return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Пример календаря с выбором даты."}),props.range?(0,jsx_runtime.jsx)(Calendar.V,CalendarSimple_template_object_spread_props(CalendarSimple_template_object_spread({},props),{range:!0,startDate:selected,endDate:endDate,onChange:handleChange})):(0,jsx_runtime.jsx)(Calendar.V,CalendarSimple_template_object_spread_props(CalendarSimple_template_object_spread({},props),{selected:selected,onChange:handleChange}))]})};try{CalendarSimpleTemplate.displayName="CalendarSimpleTemplate",CalendarSimpleTemplate.__docgenInfo={description:"",displayName:"CalendarSimpleTemplate",props:{tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},onChange:{defaultValue:null,description:"Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат)",name:"onChange",required:!0,type:{name:"(date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event> | undefined) => void"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},range:{defaultValue:null,description:"Режим выбора диапазона дат",name:"range",required:!1,type:{name:"boolean"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/stories/CalendarSimple.template.tsx#CalendarSimpleTemplate"]={docgenInfo:CalendarSimpleTemplate.__docgenInfo,name:"CalendarSimpleTemplate",path:"src/components/Calendar/stories/CalendarSimple.template.tsx#CalendarSimpleTemplate"})}catch(__react_docgen_typescript_loader_error){}let SimpleWithSpecialDates_templateraw_namespaceObject=`import * as React from 'react';
import { css, ThemeProvider } from 'styled-components';

import { Calendar, weekendMixin, T } from '@admiral-ds/react-ui';
import type { CalendarPropType, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const startOfDay = (date: Date): Date => {
  date.setHours(0, 0, 0, 0);
  return date;
};

const HOLIDAY = 'holidays';
const PRE_HOLIDAY = 'preholidays';
const WEEKEND = 'weekend';
const holidayCalendar: Array<{ date: string; type: string }> = [
  { date: '2022-01-01', type: HOLIDAY },
  { date: '2022-01-02', type: HOLIDAY },
  { date: '2022-01-03', type: HOLIDAY },
  { date: '2022-01-04', type: HOLIDAY },
  { date: '2022-01-05', type: HOLIDAY },
  { date: '2022-01-06', type: HOLIDAY },
  { date: '2022-01-07', type: HOLIDAY },
  { date: '2022-01-08', type: HOLIDAY },
  { date: '2022-01-09', type: WEEKEND },
  { date: '2022-01-15', type: WEEKEND },
  { date: '2022-01-16', type: WEEKEND },
  { date: '2022-01-22', type: WEEKEND },
  { date: '2022-01-23', type: WEEKEND },
  { date: '2022-01-29', type: WEEKEND },
  { date: '2022-01-30', type: WEEKEND },
  { date: '2022-02-05', type: WEEKEND },
  { date: '2022-02-06', type: WEEKEND },
  { date: '2022-02-12', type: WEEKEND },
  { date: '2022-02-13', type: WEEKEND },
  { date: '2022-02-19', type: WEEKEND },
  { date: '2022-02-20', type: WEEKEND },
  { date: '2022-02-23', type: HOLIDAY },
  { date: '2022-02-26', type: WEEKEND },
  { date: '2022-02-27', type: WEEKEND },
  { date: '2022-03-06', type: WEEKEND },
  { date: '2022-03-07', type: WEEKEND },
  { date: '2022-03-08', type: HOLIDAY },
  { date: '2022-03-12', type: WEEKEND },
  { date: '2022-03-13', type: WEEKEND },
  { date: '2022-03-19', type: WEEKEND },
  { date: '2022-03-20', type: WEEKEND },
  { date: '2022-03-26', type: WEEKEND },
  { date: '2022-03-27', type: WEEKEND },
  { date: '2022-04-02', type: WEEKEND },
  { date: '2022-04-03', type: WEEKEND },
  { date: '2022-04-09', type: WEEKEND },
  { date: '2022-04-10', type: WEEKEND },
  { date: '2022-04-16', type: WEEKEND },
  { date: '2022-04-17', type: WEEKEND },
  { date: '2022-04-23', type: WEEKEND },
  { date: '2022-04-24', type: WEEKEND },
  { date: '2022-04-30', type: WEEKEND },
  { date: '2022-05-01', type: HOLIDAY },
  { date: '2022-05-02', type: WEEKEND },
  { date: '2022-05-03', type: WEEKEND },
  { date: '2022-05-07', type: WEEKEND },
  { date: '2022-05-08', type: WEEKEND },
  { date: '2022-05-09', type: HOLIDAY },
  { date: '2022-05-10', type: WEEKEND },
  { date: '2022-05-14', type: WEEKEND },
  { date: '2022-05-15', type: WEEKEND },
  { date: '2022-05-21', type: WEEKEND },
  { date: '2022-05-22', type: WEEKEND },
  { date: '2022-05-28', type: WEEKEND },
  { date: '2022-05-29', type: WEEKEND },
  { date: '2022-06-04', type: WEEKEND },
  { date: '2022-06-05', type: WEEKEND },
  { date: '2022-06-11', type: WEEKEND },
  { date: '2022-06-12', type: HOLIDAY },
  { date: '2022-06-13', type: WEEKEND },
  { date: '2022-06-18', type: WEEKEND },
  { date: '2022-06-19', type: WEEKEND },
  { date: '2022-06-25', type: WEEKEND },
  { date: '2022-06-26', type: WEEKEND },
  { date: '2022-07-02', type: WEEKEND },
  { date: '2022-07-03', type: WEEKEND },
  { date: '2022-07-09', type: WEEKEND },
  { date: '2022-07-10', type: WEEKEND },
  { date: '2022-07-16', type: WEEKEND },
  { date: '2022-07-17', type: WEEKEND },
  { date: '2022-07-23', type: WEEKEND },
  { date: '2022-07-24', type: WEEKEND },
  { date: '2022-07-30', type: WEEKEND },
  { date: '2022-07-31', type: WEEKEND },
  { date: '2022-08-06', type: WEEKEND },
  { date: '2022-08-07', type: WEEKEND },
  { date: '2022-08-13', type: WEEKEND },
  { date: '2022-08-14', type: WEEKEND },
  { date: '2022-08-20', type: WEEKEND },
  { date: '2022-08-21', type: WEEKEND },
  { date: '2022-08-27', type: WEEKEND },
  { date: '2022-08-28', type: WEEKEND },
  { date: '2022-09-03', type: WEEKEND },
  { date: '2022-09-04', type: WEEKEND },
  { date: '2022-09-10', type: WEEKEND },
  { date: '2022-09-11', type: WEEKEND },
  { date: '2022-09-17', type: WEEKEND },
  { date: '2022-09-18', type: WEEKEND },
  { date: '2022-09-24', type: WEEKEND },
  { date: '2022-09-25', type: WEEKEND },
  { date: '2022-10-01', type: WEEKEND },
  { date: '2022-10-02', type: WEEKEND },
  { date: '2022-10-08', type: WEEKEND },
  { date: '2022-10-09', type: WEEKEND },
  { date: '2022-10-15', type: WEEKEND },
  { date: '2022-10-16', type: WEEKEND },
  { date: '2022-10-22', type: WEEKEND },
  { date: '2022-10-23', type: WEEKEND },
  { date: '2022-10-29', type: WEEKEND },
  { date: '2022-10-30', type: WEEKEND },
  { date: '2022-11-04', type: HOLIDAY },
  { date: '2022-11-05', type: WEEKEND },
  { date: '2022-11-06', type: WEEKEND },
  { date: '2022-11-12', type: WEEKEND },
  { date: '2022-11-13', type: WEEKEND },
  { date: '2022-11-19', type: WEEKEND },
  { date: '2022-11-20', type: WEEKEND },
  { date: '2022-11-26', type: WEEKEND },
  { date: '2022-11-27', type: WEEKEND },
  { date: '2022-12-03', type: WEEKEND },
  { date: '2022-12-04', type: WEEKEND },
  { date: '2022-12-10', type: WEEKEND },
  { date: '2022-12-11', type: WEEKEND },
  { date: '2022-12-17', type: WEEKEND },
  { date: '2022-12-18', type: WEEKEND },
  { date: '2022-12-24', type: WEEKEND },
  { date: '2022-12-25', type: WEEKEND },
  { date: '2022-12-31', type: WEEKEND },
  { date: '2022-02-22', type: PRE_HOLIDAY },
  { date: '2022-03-05', type: PRE_HOLIDAY },
  { date: '2022-11-03', type: PRE_HOLIDAY },
  { date: '2023-01-01', type: HOLIDAY },
  { date: '2023-01-02', type: HOLIDAY },
  { date: '2023-01-03', type: HOLIDAY },
  { date: '2023-01-04', type: HOLIDAY },
  { date: '2023-01-05', type: HOLIDAY },
  { date: '2023-01-06', type: HOLIDAY },
  { date: '2023-01-07', type: HOLIDAY },
  { date: '2023-01-08', type: HOLIDAY },
  { date: '2023-01-14', type: WEEKEND },
  { date: '2023-01-15', type: WEEKEND },
  { date: '2023-01-21', type: WEEKEND },
  { date: '2023-01-22', type: WEEKEND },
  { date: '2023-01-28', type: WEEKEND },
  { date: '2023-01-29', type: WEEKEND },
  { date: '2023-02-04', type: WEEKEND },
  { date: '2023-02-05', type: WEEKEND },
  { date: '2023-02-11', type: WEEKEND },
  { date: '2023-02-12', type: WEEKEND },
  { date: '2023-02-18', type: WEEKEND },
  { date: '2023-02-19', type: WEEKEND },
  { date: '2023-02-23', type: HOLIDAY },
  { date: '2023-02-24', type: WEEKEND },
  { date: '2023-02-25', type: WEEKEND },
  { date: '2023-02-26', type: WEEKEND },
  { date: '2023-03-04', type: WEEKEND },
  { date: '2023-03-05', type: WEEKEND },
  { date: '2023-03-08', type: HOLIDAY },
  { date: '2023-03-11', type: WEEKEND },
  { date: '2023-03-12', type: WEEKEND },
  { date: '2023-03-18', type: WEEKEND },
  { date: '2023-03-19', type: WEEKEND },
  { date: '2023-03-25', type: WEEKEND },
  { date: '2023-03-26', type: WEEKEND },
  { date: '2023-04-01', type: WEEKEND },
  { date: '2023-04-02', type: WEEKEND },
  { date: '2023-04-08', type: WEEKEND },
  { date: '2023-04-09', type: WEEKEND },
  { date: '2023-04-15', type: WEEKEND },
  { date: '2023-04-16', type: WEEKEND },
  { date: '2023-04-22', type: WEEKEND },
  { date: '2023-04-23', type: WEEKEND },
  { date: '2023-04-29', type: WEEKEND },
  { date: '2023-04-30', type: WEEKEND },
  { date: '2023-05-01', type: HOLIDAY },
  { date: '2023-05-06', type: WEEKEND },
  { date: '2023-05-07', type: WEEKEND },
  { date: '2023-05-08', type: WEEKEND },
  { date: '2023-05-09', type: HOLIDAY },
  { date: '2023-05-13', type: WEEKEND },
  { date: '2023-05-14', type: WEEKEND },
  { date: '2023-05-20', type: WEEKEND },
  { date: '2023-05-21', type: WEEKEND },
  { date: '2023-05-27', type: WEEKEND },
  { date: '2023-05-28', type: WEEKEND },
  { date: '2023-06-03', type: WEEKEND },
  { date: '2023-06-04', type: WEEKEND },
  { date: '2023-06-10', type: WEEKEND },
  { date: '2023-06-11', type: WEEKEND },
  { date: '2023-06-12', type: HOLIDAY },
  { date: '2023-06-17', type: WEEKEND },
  { date: '2023-06-18', type: WEEKEND },
  { date: '2023-06-24', type: WEEKEND },
  { date: '2023-06-25', type: WEEKEND },
  { date: '2023-07-01', type: WEEKEND },
  { date: '2023-07-02', type: WEEKEND },
  { date: '2023-07-08', type: WEEKEND },
  { date: '2023-07-09', type: WEEKEND },
  { date: '2023-07-15', type: WEEKEND },
  { date: '2023-07-16', type: WEEKEND },
  { date: '2023-07-22', type: WEEKEND },
  { date: '2023-07-23', type: WEEKEND },
  { date: '2023-07-29', type: WEEKEND },
  { date: '2023-07-30', type: WEEKEND },
  { date: '2023-08-05', type: WEEKEND },
  { date: '2023-08-06', type: WEEKEND },
  { date: '2023-08-12', type: WEEKEND },
  { date: '2023-08-13', type: WEEKEND },
  { date: '2023-08-19', type: WEEKEND },
  { date: '2023-08-20', type: WEEKEND },
  { date: '2023-08-26', type: WEEKEND },
  { date: '2023-08-27', type: WEEKEND },
  { date: '2023-09-02', type: WEEKEND },
  { date: '2023-09-03', type: WEEKEND },
  { date: '2023-09-09', type: WEEKEND },
  { date: '2023-09-10', type: WEEKEND },
  { date: '2023-09-16', type: WEEKEND },
  { date: '2023-09-17', type: WEEKEND },
  { date: '2023-09-23', type: WEEKEND },
  { date: '2023-09-24', type: WEEKEND },
  { date: '2023-09-30', type: WEEKEND },
  { date: '2023-10-01', type: WEEKEND },
  { date: '2023-10-07', type: WEEKEND },
  { date: '2023-10-08', type: WEEKEND },
  { date: '2023-10-14', type: WEEKEND },
  { date: '2023-10-15', type: WEEKEND },
  { date: '2023-10-21', type: WEEKEND },
  { date: '2023-10-22', type: WEEKEND },
  { date: '2023-10-28', type: WEEKEND },
  { date: '2023-10-29', type: WEEKEND },
  { date: '2023-11-04', type: HOLIDAY },
  { date: '2023-11-05', type: WEEKEND },
  { date: '2023-11-06', type: WEEKEND },
  { date: '2023-11-11', type: WEEKEND },
  { date: '2023-11-12', type: WEEKEND },
  { date: '2023-11-18', type: WEEKEND },
  { date: '2023-11-19', type: WEEKEND },
  { date: '2023-11-25', type: WEEKEND },
  { date: '2023-11-26', type: WEEKEND },
  { date: '2023-12-02', type: WEEKEND },
  { date: '2023-12-03', type: WEEKEND },
  { date: '2023-12-09', type: WEEKEND },
  { date: '2023-12-10', type: WEEKEND },
  { date: '2023-12-16', type: WEEKEND },
  { date: '2023-12-17', type: WEEKEND },
  { date: '2023-12-23', type: WEEKEND },
  { date: '2023-12-24', type: WEEKEND },
  { date: '2023-12-30', type: WEEKEND },
  { date: '2023-12-31', type: WEEKEND },
  { date: '2023-02-22', type: PRE_HOLIDAY },
  { date: '2023-03-07', type: PRE_HOLIDAY },
  { date: '2023-11-03', type: PRE_HOLIDAY },
];

const holidayMixin = css<{ disabled?: boolean }>\`
  color: \${(p) =>
    p.disabled
      ? \`var(--admiral-color-Success_Success30, \${p.theme.color['Success/Success 30']})\`
      : \`var(--admiral-color-Success_Success50Main, \${p.theme.color['Success/Success 50 Main']})\`};
\`;

const preHolidayMixin = css<{ disabled?: boolean }>\`
  color: \${(p) =>
    p.disabled
      ? \`var(--admiral-color-Attention_Attention30, \${p.theme.color['Attention/Attention 30']})\`
      : \`var(--admiral-color-Attention_Attention50Main, \${p.theme.color['Attention/Attention 50 Main']})\`};
\`;

const holidayDates = new Map(
  holidayCalendar.map((day) => {
    const date = new Date(day.date);
    const keyDate = startOfDay(date);
    return [keyDate.getTime(), day.type];
  }),
);

export const SimpleWithSpecialDatesTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CalendarPropType & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value === null || value instanceof Date) {
      setSelected(value);
    } else {
      setSelected(value[0]);
      setEndDate(value[1]);
    }
  };

  const highlightHolidays = (day: Date) => {
    const key = startOfDay(day).getTime();
    const check = holidayDates.get(key);
    switch (check) {
      case HOLIDAY:
        return holidayMixin;
      case PRE_HOLIDAY:
        return preHolidayMixin;
      case WEEKEND:
        return weekendMixin;
      default:
        return undefined;
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с подсветкой выходных, праздничный и специальных дат.
      </T>
      {props.range ? (
        <Calendar
          {...props}
          range
          startDate={selected}
          endDate={endDate}
          onChange={handleChange}
          highlightSpecialDay={highlightHolidays}
        />
      ) : (
        <Calendar {...props} selected={selected} onChange={handleChange} highlightSpecialDay={highlightHolidays} />
      )}
    </ThemeProvider>
  );
};
`,SimpleWithSetActiveViewWithoutDay_templateraw_namespaceObject=`import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Button, Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithSetActiveViewWithoutDayTemplate = ({ ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = React.useState<ViewScreenType | null>('MONTH');

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с выбором только месяца/года. Показываем только экраны выбора месяца и года.
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '24px' }}>
        Если выставлен currentActiveViewImportant, то необходимо самому управлять открытием экранов
      </T>
      <div>
        <Button onClick={() => setSelected(new Date())}>set Date now</Button>
      </div>
      <br />
      <Calendar
        {...props}
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={(date) => {
          // eslint-disable-next-line no-console
          console.log(date, 'onIncreaseDecreaseDate');
          setSelected(date as Date);
        }}
        onChange={(value) => {
          setSelected(value as Date);
          // eslint-disable-next-line no-console
          console.log(value, 'onChange');
        }}
        onViewMonthSelect={() => {
          // eslint-disable-next-line no-console
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          // eslint-disable-next-line no-console
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
      />
    </>
  );
};
`,SimpleWithSetActiveViewDateAfterChooseYear_templateraw_namespaceObject=`import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithSetActiveViewDateAfterChooseYearTemplate = (props: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [currentActiveView, setActiveViewDateScreen] = React.useState<ViewScreenType | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с открытием экрана выбора месяца после выбора года.
      </T>
      <Calendar
        {...props}
        selected={selected}
        currentActiveView={currentActiveView}
        onDateIncreaseDecrease={(date) => {
          setActiveViewDateScreen(null);
          // eslint-disable-next-line no-console
          console.log(date, 'onIncreaseDecreaseDate');
        }}
        onChange={(value) => {
          setSelected(value as Date);
          // eslint-disable-next-line no-console
          console.log(value, 'onChange');
        }}
        onYearSelect={() => {
          setActiveViewDateScreen('MONTH');
        }}
      />
    </>
  );
};
`,SimpleWithSetActiveViewDate_templateraw_namespaceObject=`import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Button, Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithSetActiveViewDateTemplate = ({ ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [currentActiveView, setCurrentActiveView] = React.useState<ViewScreenType | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с переключением экранов выбора дат - месяц/год/день.
      </T>
      <div style={{ display: 'flex' }}>
        <Button dimension="s" onClick={() => setCurrentActiveView('MONTH')}>
          Month
        </Button>
        &nbsp;
        <Button dimension="s" onClick={() => setCurrentActiveView('YEAR')}>
          Year
        </Button>
        &nbsp;
        <Button dimension="s" onClick={() => setCurrentActiveView('DAY')}>
          Day
        </Button>
      </div>
      <br />
      <Calendar
        {...props}
        selected={selected}
        currentActiveView={currentActiveView}
        currentActiveViewImportant={true}
        onDateIncreaseDecrease={() => {
          setCurrentActiveView(null);
        }}
        onYearSelect={(data) => {
          setSelected(data as Date);
          setCurrentActiveView('MONTH');
        }}
        onMonthSelect={(data) => {
          setSelected(data as Date);
        }}
        onViewMonthSelect={() => {
          // eslint-disable-next-line no-console
          console.log('onViewMonthSelect');
          setCurrentActiveView('MONTH');
        }}
        onViewYearSelect={() => {
          // eslint-disable-next-line no-console
          console.log('onViewYearSelect');
          setCurrentActiveView('YEAR');
        }}
        onChange={(value) => {
          setSelected(value as Date);
        }}
      />
    </>
  );
};
`,SimpleWithChangeViewDate_templateraw_namespaceObject=`import * as React from 'react';

import type { CalendarPropType, ViewScreenType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithChangeViewDateTemplate = ({ ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с коллбеками (смотри в консоль)
      </T>
      <T font="Body/Body 2 Long" as="div">
        Открытие экранов выбора года и месяца \`(onViewEnter, onViewLeave)\`
      </T>
      <T font="Body/Body 2 Long" as="div" style={{ marginBottom: '24px' }}>
        Изменение даты после выбора года или месяца по стрелкам \`(onIncreaseDecreaseDate)\`
      </T>

      <Calendar
        {...props}
        selected={selected}
        onChange={(value) => {
          setSelected(value as Date);
        }}
        onDateIncreaseDecrease={(value) => {
          // eslint-disable-next-line no-console
          console.log('onIncreaseDecreaseDate', value);
        }}
        onViewEnter={(view: ViewScreenType) => {
          // eslint-disable-next-line no-console
          console.log('onViewEnter', view);
        }}
        onViewLeave={(view: ViewScreenType) => {
          // eslint-disable-next-line no-console
          console.log('onViewLeave', view);
        }}
      />
    </>
  );
};
`,SimpleWithFilterDate_templateraw_namespaceObject=`import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithFilterDateTemplate = ({ range, ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value === null || value instanceof Date) {
      setSelected(value);
    } else {
      setSelected(value[0]);
      setEndDate(value[1]);
    }
  };

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с недоступными для выбора датами.
      </T>
      {range ? (
        <Calendar
          {...props}
          range
          startDate={selected}
          endDate={endDate}
          filterDate={isWeekday}
          onChange={handleChange}
        />
      ) : (
        <Calendar {...props} filterDate={isWeekday} selected={selected} onChange={handleChange} />
      )}
    </>
  );
};
`,SimpleWithMaxDate_templateraw_namespaceObject=`import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithMaxDateTemplate = ({ range, ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value === null || value instanceof Date) {
      setSelected(value);
    } else {
      setSelected(value[0]);
      setEndDate(value[1]);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с ограничением максимальной даты.
      </T>
      {range ? (
        <Calendar {...props} range startDate={selected} endDate={endDate} maxDate={tomorrow} onChange={handleChange} />
      ) : (
        <Calendar {...props} maxDate={tomorrow} selected={selected} onChange={handleChange} />
      )}
    </>
  );
};
`,Range_templateraw_namespaceObject=`import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const RangeTemplate = (props: CalendarPropType) => {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value === null || value instanceof Date) {
      setStartDate(value);
    } else {
      setStartDate(value[0]);
      setEndDate(value[1]);
    }
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с выбором диапазона.
      </T>
      <Calendar {...props} range startDate={startDate} endDate={endDate} onChange={handleChange} />
    </>
  );
};
`,CalendarSimple_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import type { CalendarPropType, BorderRadiusType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const CalendarSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CalendarPropType & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value === null || value instanceof Date) {
      setSelected(value);
    } else {
      setSelected(value[0]);
      setEndDate(value[1]);
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример календаря с выбором даты.
      </T>
      {props.range ? (
        <Calendar {...props} range startDate={selected} endDate={endDate} onChange={handleChange} />
      ) : (
        <Calendar {...props} selected={selected} onChange={handleChange} />
      )}
    </ThemeProvider>
  );
};
`;function Calendar_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Calendar_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Calendar_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Calendar_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Calendar_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Calendar_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Calendar_stories_define_property(target,key,source[key])})}return target}function Calendar_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Calendar_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Calendar_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Calendar_stories_sliced_to_array(arr,i){return Calendar_stories_array_with_holes(arr)||Calendar_stories_iterable_to_array_limit(arr,i)||Calendar_stories_unsupported_iterable_to_array(arr,i)||Calendar_stories_non_iterable_rest()}function Calendar_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Calendar_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Calendar_stories_array_like_to_array(o,minLen)}}let Calendar_stories={title:"Admiral-2.1/Calendar",decorators:void 0,component:Calendar.V,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"}},argTypes:{range:{control:{type:"boolean"}},currentActiveViewImportant:{control:{type:"boolean"}},currentActiveView:{options:["YEAR","MONTH","DAY"],control:{type:"radio"}},validator:{control:!1},tooltipContainer:{control:!1},startDate:{control:!1},selected:{control:!1},endDate:{control:!1},minDate:{control:!1},maxDate:{control:!1},locale:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var CalendarSimple={render:function(props){var CSSCustomProps=Calendar_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(CalendarSimpleTemplate,Calendar_stories_object_spread_props(Calendar_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:CalendarSimple_templateraw_namespaceObject}}},args:{},name:"Simple."},Range={render:function(props){return(0,jsx_runtime.jsx)(RangeTemplate,Calendar_stories_object_spread({},props))},parameters:{docs:{source:{code:Range_templateraw_namespaceObject}}},args:{},name:"Range."},SimpleWithMaxDate={render:function(props){return(0,jsx_runtime.jsx)(SimpleWithMaxDateTemplate,Calendar_stories_object_spread({},props))},parameters:{docs:{source:{code:SimpleWithMaxDate_templateraw_namespaceObject}}},args:{},name:"maxDate."},SimpleWithFilterDate={render:function(props){return(0,jsx_runtime.jsx)(SimpleWithFilterDateTemplate,Calendar_stories_object_spread({},props))},parameters:{docs:{source:{code:SimpleWithFilterDate_templateraw_namespaceObject}}},args:{},name:"FilterDate."},SimpleWithChangeViewDate={render:function(props){return(0,jsx_runtime.jsx)(SimpleWithChangeViewDateTemplate,Calendar_stories_object_spread({},props))},parameters:{docs:{source:{code:SimpleWithChangeViewDate_templateraw_namespaceObject}}},args:{},name:"Callback"},SimpleWithSetActiveViewDate={render:function(props){return(0,jsx_runtime.jsx)(SimpleWithSetActiveViewDateTemplate,Calendar_stories_object_spread({},props))},parameters:{docs:{source:{code:SimpleWithSetActiveViewDate_templateraw_namespaceObject}}},args:{},name:"Active ViewDate screen"},SimpleWithSetActiveViewDateAfterChooseYear={render:function(props){return(0,jsx_runtime.jsx)(SimpleWithSetActiveViewDateAfterChooseYearTemplate,Calendar_stories_object_spread({},props))},parameters:{docs:{source:{code:SimpleWithSetActiveViewDateAfterChooseYear_templateraw_namespaceObject}}},args:{},name:"ViewDate screen after choose year"},SimpleWithSetActiveViewWithoutDay={render:function(props){return(0,jsx_runtime.jsx)(SimpleWithSetActiveViewWithoutDayTemplate,Calendar_stories_object_spread({},props))},parameters:{docs:{source:{code:SimpleWithSetActiveViewWithoutDay_templateraw_namespaceObject}}},args:{},name:"ViewDate year/month"},SimpleWithSpecialDates={render:function(props){var CSSCustomProps=Calendar_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(SimpleWithSpecialDatesTemplate,Calendar_stories_object_spread_props(Calendar_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:SimpleWithSpecialDates_templateraw_namespaceObject}}},args:{},name:"Highlight special dates"};CalendarSimple.parameters={...CalendarSimple.parameters,docs:{...CalendarSimple.parameters?.docs,source:{originalSource:`{
  render: CalendarSimpleStory,
  parameters: {
    docs: {
      source: {
        code: CalendarSimpleRaw
      }
    }
  },
  args: {},
  name: 'Simple.'
}`,...CalendarSimple.parameters?.docs?.source}}},Range.parameters={...Range.parameters,docs:{...Range.parameters?.docs,source:{originalSource:`{
  render: RangeStory,
  parameters: {
    docs: {
      source: {
        code: RangeRaw
      }
    }
  },
  args: {},
  name: 'Range.'
}`,...Range.parameters?.docs?.source}}},SimpleWithMaxDate.parameters={...SimpleWithMaxDate.parameters,docs:{...SimpleWithMaxDate.parameters?.docs,source:{originalSource:`{
  render: SimpleWithMaxDateStory,
  parameters: {
    docs: {
      source: {
        code: SimpleWithMaxDateRaw
      }
    }
  },
  args: {},
  name: 'maxDate.'
}`,...SimpleWithMaxDate.parameters?.docs?.source}}},SimpleWithFilterDate.parameters={...SimpleWithFilterDate.parameters,docs:{...SimpleWithFilterDate.parameters?.docs,source:{originalSource:`{
  render: SimpleWithFilterDateStory,
  parameters: {
    docs: {
      source: {
        code: SimpleWithFilterDateRaw
      }
    }
  },
  args: {},
  name: 'FilterDate.'
}`,...SimpleWithFilterDate.parameters?.docs?.source}}},SimpleWithChangeViewDate.parameters={...SimpleWithChangeViewDate.parameters,docs:{...SimpleWithChangeViewDate.parameters?.docs,source:{originalSource:`{
  render: SimpleWithChangeViewDateStory,
  parameters: {
    docs: {
      source: {
        code: SimpleWithChangeViewDateRaw
      }
    }
  },
  args: {},
  name: 'Callback'
}`,...SimpleWithChangeViewDate.parameters?.docs?.source}}},SimpleWithSetActiveViewDate.parameters={...SimpleWithSetActiveViewDate.parameters,docs:{...SimpleWithSetActiveViewDate.parameters?.docs,source:{originalSource:`{
  render: SimpleWithSetActiveViewDateStory,
  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewDateRaw
      }
    }
  },
  args: {},
  name: 'Active ViewDate screen'
}`,...SimpleWithSetActiveViewDate.parameters?.docs?.source}}},SimpleWithSetActiveViewDateAfterChooseYear.parameters={...SimpleWithSetActiveViewDateAfterChooseYear.parameters,docs:{...SimpleWithSetActiveViewDateAfterChooseYear.parameters?.docs,source:{originalSource:`{
  render: SimpleWithSetActiveViewDateAfterChooseYearStory,
  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewDateAfterChooseYearRaw
      }
    }
  },
  args: {},
  name: 'ViewDate screen after choose year'
}`,...SimpleWithSetActiveViewDateAfterChooseYear.parameters?.docs?.source}}},SimpleWithSetActiveViewWithoutDay.parameters={...SimpleWithSetActiveViewWithoutDay.parameters,docs:{...SimpleWithSetActiveViewWithoutDay.parameters?.docs,source:{originalSource:`{
  render: SimpleWithSetActiveViewWithoutDayStory,
  parameters: {
    docs: {
      source: {
        code: SimpleWithSetActiveViewWithoutDayRaw
      }
    }
  },
  args: {},
  name: 'ViewDate year/month'
}`,...SimpleWithSetActiveViewWithoutDay.parameters?.docs?.source}}},SimpleWithSpecialDates.parameters={...SimpleWithSpecialDates.parameters,docs:{...SimpleWithSpecialDates.parameters?.docs,source:{originalSource:`{
  render: SimpleWithSpecialDatesStory,
  parameters: {
    docs: {
      source: {
        code: SimpleWithSpecialDatesRaw
      }
    }
  },
  args: {},
  name: 'Highlight special dates'
}`,...SimpleWithSpecialDates.parameters?.docs?.source}}};let __namedExportsOrder=["CalendarSimple","Range","SimpleWithMaxDate","SimpleWithFilterDate","SimpleWithChangeViewDate","SimpleWithSetActiveViewDate","SimpleWithSetActiveViewDateAfterChooseYear","SimpleWithSetActiveViewWithoutDay","SimpleWithSpecialDates"]},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  animation: `,` 1s linear infinite;
  path {
    fill: `,`;
  }
  width: 100%;
  height: 100%;
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-Calendar-stories-Calendar-stories.65132e90.iframe.bundle.js.map