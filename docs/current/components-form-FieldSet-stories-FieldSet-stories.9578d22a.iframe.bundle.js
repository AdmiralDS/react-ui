"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3088],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function isObject(val){return null!==val&&!Array.isArray(val)&&(void 0===val?"undefined":_type_of(val))==="object"}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});for(var codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"},i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(var j=0;j<26;j+=1){var n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}var keyboardKey={codes:codes,getCode:function getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey:function getKey(eventOrCode){var isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;var name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[+!!eventOrCode.shiftKey]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey["0"],keyboardKey.Digit1=keyboardKey["1"],keyboardKey.Digit2=keyboardKey["2"],keyboardKey.Digit3=keyboardKey["3"],keyboardKey.Digit4=keyboardKey["4"],keyboardKey.Digit5=keyboardKey["5"],keyboardKey.Digit6=keyboardKey["6"],keyboardKey.Digit7=keyboardKey["7"],keyboardKey.Digit8=keyboardKey["8"],keyboardKey.Digit9=keyboardKey["9"],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/common/utils/refSetter.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>refSetter});function refSetter(){for(var _len=arguments.length,refs=Array(_len),_key=0;_key<_len;_key++)refs[_key]=arguments[_key];return function(ref){refs.forEach(function(someRef){someRef&&("function"==typeof someRef?someRef(ref):someRef.current=ref)})}}},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});var FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,"data-field",!1)}function passDropdownDataAttributes(initialProps){var dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,"data-dropdown-container",!0),dropMenuProps}function passMenuDataAttributes(initialProps){var menuProps={};return passDataAttributes(initialProps,menuProps,"data-menu",!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach(function(key){"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])})}},"./src/components/form/FieldSet/stories/FieldSet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FieldSetCheckbox:()=>FieldSetCheckbox,FieldSetRadioButton:()=>FieldSetRadioButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FieldSet_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),FieldSet=__webpack_require__("./src/components/form/FieldSet/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  > * {
    margin-top: 24px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var Container=styled_components_browser_esm.Ay.div(_templateObject()),FieldSetCheckboxTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsxs)(FieldSet.n,_object_spread_props(_object_spread({"data-container-id":"fieldSetIdOne"},props),{legend:"Группа чекбоксов:",children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check1",children:"Text 1"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check2",children:"Text 2"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check3",children:"Text 3"})]})),(0,jsx_runtime.jsxs)(FieldSet.n,{"data-container-id":"fieldSetIdTwo",disabled:!0,legend:"Disabled группа чекбоксов:",children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check1",children:"Text 1"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check2",defaultChecked:!0,children:"Text 2"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check3",children:"Text 3"})]}),(0,jsx_runtime.jsxs)(FieldSet.n,{"data-container-id":"fieldSetIdThree",dimension:"s",legend:"Группа маленьких чекбоксов:",required:!0,children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check1",children:"Text 1"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check2",children:"Text 2"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check3",children:"Text 3"})]}),(0,jsx_runtime.jsxs)(FieldSet.n,{"data-container-id":"fieldSetIdFour",legend:"Горизонтальная группа чекбоксов:",flexDirection:"row",children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check1",children:"Text 1"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check2",children:"Text 2"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{name:"check3",children:"Text 3"})]})]})})};try{FieldSetCheckboxTemplate.displayName="FieldSetCheckboxTemplate",FieldSetCheckboxTemplate.__docgenInfo={description:"",displayName:"FieldSetCheckboxTemplate",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Установка статуса disabled",name:"disabled",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:"Расположение контента по вертикали или горизонтали",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/FieldSet/stories/FieldSetCheckbox.template.tsx#FieldSetCheckboxTemplate"]={docgenInfo:FieldSetCheckboxTemplate.__docgenInfo,name:"FieldSetCheckboxTemplate",path:"src/components/form/FieldSet/stories/FieldSetCheckbox.template.tsx#FieldSetCheckboxTemplate"})}catch(__react_docgen_typescript_loader_error){}var RadioButton=__webpack_require__("./src/components/RadioButton/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function FieldSetRadioButton_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FieldSetRadioButton_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FieldSetRadioButton_template_define_property(target,key,source[key])})}return target}function FieldSetRadioButton_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FieldSetRadioButton_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FieldSetRadioButton_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FieldSetRadioButton_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FieldSetRadioButton_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FieldSetRadioButton_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function FieldSetRadioButton_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function FieldSetRadioButton_template_templateObject(){var data=FieldSetRadioButton_template_tagged_template_literal([`
  > * {
    margin-top: 24px;
  }
`]);return FieldSetRadioButton_template_templateObject=function _templateObject(){return data},data}var FieldSetRadioButton_template_Container=styled_components_browser_esm.Ay.div(FieldSetRadioButton_template_templateObject()),FieldSetRadioButtonTemplate=function(_param){var disabled=_param.disabled,dimension=_param.dimension,props=FieldSetRadioButton_template_object_without_properties(_param,["disabled","dimension"]),_React_useState=_sliced_to_array(react.useState("2"),2),selected=_React_useState[0],setSelected=_React_useState[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(FieldSetRadioButton_template_Container,{children:[(0,jsx_runtime.jsxs)(FieldSet.n,FieldSetRadioButton_template_object_spread_props(FieldSetRadioButton_template_object_spread({},props),{onChange:function(e){setSelected(e.target.value)},legend:"Управляемая группа радиокнопок",disabled:disabled,dimension:dimension,children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:"1",name:"test1",checked:"1"===selected,onChange:function(){},children:"First option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"2",name:"test1",checked:"2"===selected,onChange:function(){},children:"Second option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"3",name:"test1",checked:"3"===selected,onChange:function(){},children:"Third option"})]})),(0,jsx_runtime.jsxs)(FieldSet.n,{legend:"Неуправляемая группа радиокнопок",required:!0,disabled:disabled,dimension:dimension,children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:"4",name:"test2",children:"First option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"5",name:"test2",children:"Second option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"6",name:"test2",extraText:"some extra text",children:"Third option"})]}),(0,jsx_runtime.jsxs)(FieldSet.n,{legend:"Disabled группа радиокнопок",disabled:!0,children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:"7",name:"test3",children:"First option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"8",name:"test3",children:"Second option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"9",name:"test3",children:"Third option"})]}),(0,jsx_runtime.jsxs)(FieldSet.n,{legend:"Группа радиокнопок с одной задизейбленной кнопкой",children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:"10",name:"test4",children:"First option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"11",disabled:!0,name:"test4",children:"Second option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"12",name:"test4",children:"Third option"})]}),(0,jsx_runtime.jsxs)(FieldSet.n,{legend:"Группа радиокнопок маленького размера",dimension:"s",children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:"13",name:"test5",children:"First option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"14",name:"test5",children:"Second option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"15",name:"test5",children:"Third option"})]}),(0,jsx_runtime.jsxs)(FieldSet.n,{legend:"Горизонтальная группа радиокнопок",flexDirection:"row",children:[(0,jsx_runtime.jsx)(RadioButton.a,{value:"13",name:"test6",children:"First option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"14",name:"test6",children:"Second option"}),(0,jsx_runtime.jsx)(RadioButton.a,{value:"15",name:"test6",children:"Third option"})]})]})})};try{FieldSetRadioButtonTemplate.displayName="FieldSetRadioButtonTemplate",FieldSetRadioButtonTemplate.__docgenInfo={description:"",displayName:"FieldSetRadioButtonTemplate",props:{legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},required:{defaultValue:null,description:"Установка статуса поле обязательно для заполнения",name:"required",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Установка статуса disabled",name:"disabled",required:!1,type:{name:"boolean"}},flexDirection:{defaultValue:null,description:"Расположение контента по вертикали или горизонтали",name:"flexDirection",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/FieldSet/stories/FieldSetRadioButton.template.tsx#FieldSetRadioButtonTemplate"]={docgenInfo:FieldSetRadioButtonTemplate.__docgenInfo,name:"FieldSetRadioButtonTemplate",path:"src/components/form/FieldSet/stories/FieldSetRadioButton.template.tsx#FieldSetRadioButtonTemplate"})}catch(__react_docgen_typescript_loader_error){}let FieldSetCheckbox_templateraw_namespaceObject=`import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { CheckboxField, FieldSet } from '@admiral-ds/react-ui';
import type { PropsType as FieldSetPropsType, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Container = styled.div\`
  > * {
    margin-top: 24px;
  }
\`;

export const FieldSetCheckboxTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FieldSetPropsType & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Container>
        <FieldSet data-container-id="fieldSetIdOne" {...props} legend={'Группа чекбоксов:'}>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdTwo" disabled legend={'Disabled группа чекбоксов:'}>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2" defaultChecked>
            Text 2
          </CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdThree" dimension="s" legend={'Группа маленьких чекбоксов:'} required>
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
        <FieldSet data-container-id="fieldSetIdFour" legend={'Горизонтальная группа чекбоксов:'} flexDirection="row">
          <CheckboxField name="check1">Text 1</CheckboxField>
          <CheckboxField name="check2">Text 2</CheckboxField>
          <CheckboxField name="check3">Text 3</CheckboxField>
        </FieldSet>
      </Container>
    </ThemeProvider>
  );
};
`,FieldSetRadioButton_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';

import { FieldSet, RadioButton } from '@admiral-ds/react-ui';
import type { PropsType as FieldSetPropsType } from '@admiral-ds/react-ui';

const Container = styled.div\`
  > * {
    margin-top: 24px;
  }
\`;

const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

export const FieldSetRadioButtonTemplate = ({ disabled, dimension, ...props }: FieldSetPropsType) => {
  const [selected, setSelected] = React.useState(values[1]);
  return (
    <>
      <Container>
        <FieldSet
          {...props}
          onChange={(e) => {
            setSelected((e.target as HTMLInputElement).value);
          }}
          legend="Управляемая группа радиокнопок"
          disabled={disabled}
          dimension={dimension}
        >
          <RadioButton value={values[0]} name="test1" checked={values[0] === selected} onChange={() => {}}>
            First option
          </RadioButton>
          <RadioButton value={values[1]} name="test1" checked={values[1] === selected} onChange={() => {}}>
            Second option
          </RadioButton>
          <RadioButton value={values[2]} name="test1" checked={values[2] === selected} onChange={() => {}}>
            Third option
          </RadioButton>
        </FieldSet>
        <FieldSet legend="Неуправляемая группа радиокнопок" required disabled={disabled} dimension={dimension}>
          <RadioButton value={values[3]} name="test2">
            First option
          </RadioButton>
          <RadioButton value={values[4]} name="test2">
            Second option
          </RadioButton>
          <RadioButton value={values[5]} name="test2" extraText="some extra text">
            Third option
          </RadioButton>
        </FieldSet>
        <FieldSet legend="Disabled группа радиокнопок" disabled>
          <RadioButton value={values[6]} name="test3">
            First option
          </RadioButton>
          <RadioButton value={values[7]} name="test3">
            Second option
          </RadioButton>
          <RadioButton value={values[8]} name="test3">
            Third option
          </RadioButton>
        </FieldSet>
        <FieldSet legend="Группа радиокнопок с одной задизейбленной кнопкой">
          <RadioButton value={values[9]} name="test4">
            First option
          </RadioButton>
          <RadioButton value={values[10]} disabled name="test4">
            Second option
          </RadioButton>
          <RadioButton value={values[11]} name="test4">
            Third option
          </RadioButton>
        </FieldSet>
        <FieldSet legend="Группа радиокнопок маленького размера" dimension="s">
          <RadioButton value={values[12]} name="test5">
            First option
          </RadioButton>
          <RadioButton value={values[13]} name="test5">
            Second option
          </RadioButton>
          <RadioButton value={values[14]} name="test5">
            Third option
          </RadioButton>
        </FieldSet>
        <FieldSet legend="Горизонтальная группа радиокнопок" flexDirection="row">
          <RadioButton value={values[12]} name="test6">
            First option
          </RadioButton>
          <RadioButton value={values[13]} name="test6">
            Second option
          </RadioButton>
          <RadioButton value={values[14]} name="test6">
            Third option
          </RadioButton>
        </FieldSet>
      </Container>
    </>
  );
};
`;function FieldSet_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FieldSet_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function FieldSet_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FieldSet_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FieldSet_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FieldSet_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FieldSet_stories_define_property(target,key,source[key])})}return target}function FieldSet_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FieldSet_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FieldSet_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FieldSet_stories_sliced_to_array(arr,i){return FieldSet_stories_array_with_holes(arr)||FieldSet_stories_iterable_to_array_limit(arr,i)||FieldSet_stories_unsupported_iterable_to_array(arr,i)||FieldSet_stories_non_iterable_rest()}function FieldSet_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function FieldSet_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FieldSet_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FieldSet_stories_array_like_to_array(o,minLen)}}function FieldSet_stories_templateObject(){var data=FieldSet_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return FieldSet_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(FieldSet_stories_templateObject());let FieldSet_stories={title:"Admiral-2.1/Form Field/FieldSet",decorators:void 0,component:FieldSet.n,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Радиальные кнопки применяются, когда есть список опций, из которых пользователь может выбрать только один вариант"})},{}),actions:{argTypesRegex:"onChange"},layout:"centered"},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},legend:{control:{type:"text"}},name:{control:{type:"text"}},extraText:{control:{type:"text"}},required:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var FieldSetCheckbox={render:function(props){var CSSCustomProps=FieldSet_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(FieldSetCheckboxTemplate,FieldSet_stories_object_spread_props(FieldSet_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:FieldSetCheckbox_templateraw_namespaceObject}}},name:"Checkbox Fieldset"},FieldSetRadioButton={render:function(props){return(0,jsx_runtime.jsx)(FieldSetRadioButtonTemplate,FieldSet_stories_object_spread({},props))},parameters:{docs:{source:{code:FieldSetRadioButton_templateraw_namespaceObject}}},name:"RadioGroup Fieldset"};FieldSetCheckbox.parameters={...FieldSetCheckbox.parameters,docs:{...FieldSetCheckbox.parameters?.docs,source:{originalSource:`{
  render: FieldSetCheckboxStory,
  parameters: {
    docs: {
      source: {
        code: FieldSetCheckboxRaw
      }
    }
  },
  name: 'Checkbox Fieldset'
}`,...FieldSetCheckbox.parameters?.docs?.source}}},FieldSetRadioButton.parameters={...FieldSetRadioButton.parameters,docs:{...FieldSetRadioButton.parameters?.docs,source:{originalSource:`{
  render: FieldSetRadioButtonStory,
  parameters: {
    docs: {
      source: {
        code: FieldSetRadioButtonRaw
      }
    }
  },
  name: 'RadioGroup Fieldset'
}`,...FieldSetRadioButton.parameters?.docs?.source}}};let __namedExportsOrder=["FieldSetCheckbox","FieldSetRadioButton"]},"./src/components/input/Container.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cg:()=>containerHeights,j2:()=>HeightLimitedContainer,mc:()=>Container,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/themes/borderRadius.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/skeleton/animation.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
  & > * {
    visibility: hidden;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: `,`;

  pointer-events: `,`;
  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  `,`;
`]);return _templateObject3=function _templateObject(){return data},data}var containerHeights=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),function(param){switch(param.$dimension){case"xl":return"56px";case"s":return"32px";default:return"40px"}}),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_1__.h),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject2(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_2__.VM)(p.theme.shape),")")},function(p){return p.$skeleton?"none":"all"},function(param){return param.$skeleton&&skeletonMixin}),HeightLimitedContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay)(Container)(_templateObject3(),containerHeights);try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/input/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{HeightLimitedContainer.displayName="HeightLimitedContainer",HeightLimitedContainer.__docgenInfo={description:"",displayName:"HeightLimitedContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/Container.tsx#HeightLimitedContainer"]={docgenInfo:HeightLimitedContainer.__docgenInfo,name:"HeightLimitedContainer",path:"src/components/input/Container.tsx#HeightLimitedContainer"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);
//# sourceMappingURL=components-form-FieldSet-stories-FieldSet-stories.9578d22a.iframe.bundle.js.map