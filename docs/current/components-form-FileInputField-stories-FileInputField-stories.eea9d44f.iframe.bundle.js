"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5640],{"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});var FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,"data-field",!1)}function passDropdownDataAttributes(initialProps){var dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,"data-dropdown-container",!0),dropMenuProps}function passMenuDataAttributes(initialProps){var menuProps={};return passDataAttributes(initialProps,menuProps,"data-menu",!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach(function(key){"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])})}},"./src/components/form/FileInputField/stories/FileInputField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FileInputFieldBase:()=>FileInputFieldBase,FileInputFieldRequired:()=>FileInputFieldRequired,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileInputField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),uid=__webpack_require__("./src/components/common/uid.ts"),refSetter=__webpack_require__("./src/components/common/utils/refSetter.ts"),Field=__webpack_require__("./src/components/Field/index.tsx"),FileInput=__webpack_require__("./src/components/input/FileInput/index.tsx"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  & `,` {
    padding-top: 20px;
  }
`]);return _templateObject=function _templateObject(){return data},data}var FileInputField_Field=(0,styled_components_browser_esm.Ay)(Field.D0)(_templateObject(),Field.bV),FileInputField=react.forwardRef(function(props,ref){var inputRef=react.useRef(null),className=props.className,maxLength=props.maxLength,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,uid.L)():_props_id,disabled=props.disabled,displayCharacterCounter=props.displayCharacterCounter,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","maxLength","displayInline","status","required","extraText","label","id","disabled","displayCharacterCounter","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,maxLength:maxLength,inputRef:inputRef,displayCharacterCounter:displayCharacterCounter,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);var inputProps=_object_spread({ref:(0,refSetter.d)(ref,inputRef),id:id,"aria-required":required,disabled:disabled,maxLength:maxLength,skeleton:skeleton},restProps);return(0,jsx_runtime.jsx)(FileInputField_Field,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,jsx_runtime.jsx)(FileInput.zp,_object_spread({},inputProps))}))});FileInputField.displayName="FileInputField";try{FileInputField.displayName="FileInputField",FileInputField.__docgenInfo={description:"",displayName:"FileInputField",props:{title:{defaultValue:null,description:`Текстовое описание компонента (текст внутри области загрузки файлов).
Если к компоненту также нужно добавить label, используйте компонент FileInputField и его проп label`,name:"title",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},width:{defaultValue:null,description:"Задает ширину",name:"width",required:!1,type:{name:"string | number"}},description:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен проп title

Текст для кнопки при dimension M`,name:"description",required:!1,type:{name:"ReactNode"}},renderCustomFileInput:{defaultValue:null,description:'Функция, возвращающая компонент, на который нужно "повесить" файловый инпут',name:"renderCustomFileInput",required:!1,type:{name:"((option: RenderFileInputProps) => ReactNode)"}},files:{defaultValue:null,description:"Список файлов для синхронизации с нативным инпутом",name:"files",required:!1,type:{name:"File[]"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/FileInputField/index.tsx#FileInputField"]={docgenInfo:FileInputField.__docgenInfo,name:"FileInputField",path:"src/components/form/FileInputField/index.tsx#FileInputField"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),common=__webpack_require__("./src/components/form/common.tsx"),FileItem=__webpack_require__("./src/components/input/FileInput/FileItem.tsx"),style=__webpack_require__("./src/components/input/FileInput/style.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function FileInputFieldBase_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputFieldBase_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileInputFieldBase_template_define_property(target,key,source[key])})}return target}function FileInputFieldBase_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileInputFieldBase_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileInputFieldBase_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileInputFieldBase_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FileInputFieldBase_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FileInputFieldBase_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var FileInputFieldBaseTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_label=_param.label,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=FileInputFieldBase_template_object_without_properties(_param,["dimension","label","themeBorderKind","CSSCustomProps"]),inputRef=react.useRef(null),_React_useState=_sliced_to_array(react.useState([]),2),fileList=_React_useState[0],setFileList=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(new Map),2),fileAttributesMap=_React_useState1[0],setFileAttributesMap=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(void 0),2),status=_React_useState2[0],setStatus=_React_useState2[1],_React_useState3=_sliced_to_array(react.useState(void 0),2),extraText=_React_useState3[0],setExtraText=_React_useState3[1],filesAreEqual=function(file1,file2){return file1.name===file2.name&&file1.size===file2.size&&file1.type===file2.type&&file1.lastModified===file2.lastModified},accept=["image/*",".pdf","application/json"],handlePreviewIconClick=function(file){console.log('Preview icon on file "'.concat(file.name,'" was clicked'))},handleRemoveFile=function(fileToRemove){var updatedFileList=fileList.filter(function(file){return!filesAreEqual(file,fileToRemove)}),updatedFileAttributesMap=new Map(fileAttributesMap),attributes=fileAttributesMap.get(fileToRemove);attributes&&attributes.previewImageURL&&URL.revokeObjectURL(attributes.previewImageURL),updatedFileAttributesMap.delete(fileToRemove),setFileList(updatedFileList),setFileAttributesMap(updatedFileAttributesMap),setStatus(void 0),setExtraText(void 0)};return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)("div",{style:{width:"480px"},children:(0,jsx_runtime.jsx)(FileInputField,FileInputFieldBase_template_object_spread_props(FileInputFieldBase_template_object_spread({},props),{dimension:dimension,disabled:props.disabled,title:"xl"===dimension?"Загрузите не более 3-х файлов типа ".concat(accept.join(", ")):"Добавьте файлы",ref:inputRef,onInput:function(e){var userSelectedFileList=Array.from(e.target.files||[]),updatedFileAttributesMap=new Map(fileAttributesMap),updatedFileList=fileList.reduce(function(acc,file){return -1===userSelectedFileList.findIndex(function(userFile){return filesAreEqual(userFile,file)})?acc.push(file):updatedFileAttributesMap.delete(file),acc},[]);userSelectedFileList.length+updatedFileList.length>3?(userSelectedFileList.splice(3-updatedFileList.length),setStatus("error"),setExtraText("Несколько файлов не было загружено, так как превышен лимит количества загружаемых файлов")):(setStatus(void 0),setExtraText(void 0)),userSelectedFileList.forEach(function(file){var imageURL=file.type.startsWith("image")?URL.createObjectURL(file):void 0,onPreviewIconClick=file.type.startsWith("image")?function(){return handlePreviewIconClick(file)}:void 0;updatedFileAttributesMap.set(file,{fileId:(0,uid.L)(),fileName:file.name.substring(0,file.name.lastIndexOf(".")),fileType:file.type,fileSize:file.size,status:"Uploaded",errorMessage:"Что-то явно пошло не так...",previewImageURL:imageURL,onPreviewIconClick:onPreviewIconClick})}),setFileList(_to_consumable_array(updatedFileList).concat(_to_consumable_array(userSelectedFileList))),setFileAttributesMap(updatedFileAttributesMap)},accept:accept.join(", "),files:fileList,status:status,extraText:extraText,label:void 0===_param_label?"Label":_param_label,children:fileList.map(function(file){var attributes=fileAttributesMap.get(file);if(attributes)return(0,jsx_runtime.jsx)(FileItem.I,{fileId:attributes.fileId,fileName:attributes.fileName,fileType:attributes.fileType,fileSize:attributes.fileSize,status:attributes.status,errorMessage:attributes.errorMessage,previewImageURL:attributes.previewImageURL,onCloseIconClick:function(){return handleRemoveFile(file)},onPreviewIconClick:attributes.onPreviewIconClick,dimension:dimension,filesLayoutCssMixin:"xl"===dimension?style.Q5:style.Ss},attributes.fileId)})}))})})};try{FileInputFieldBaseTemplate.displayName="FileInputFieldBaseTemplate",FileInputFieldBaseTemplate.__docgenInfo={description:"",displayName:"FileInputFieldBaseTemplate",props:{title:{defaultValue:null,description:`Текстовое описание компонента (текст внутри области загрузки файлов).
Если к компоненту также нужно добавить label, используйте компонент FileInputField и его проп label`,name:"title",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},width:{defaultValue:null,description:"Задает ширину",name:"width",required:!1,type:{name:"string | number"}},description:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен проп title

Текст для кнопки при dimension M`,name:"description",required:!1,type:{name:"ReactNode"}},renderCustomFileInput:{defaultValue:null,description:'Функция, возвращающая компонент, на который нужно "повесить" файловый инпут',name:"renderCustomFileInput",required:!1,type:{name:"((option: RenderFileInputProps) => ReactNode)"}},files:{defaultValue:null,description:"Список файлов для синхронизации с нативным инпутом",name:"files",required:!1,type:{name:"File[]"}},label:{defaultValue:{value:"Label"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/FileInputField/stories/FileInputFieldBase.template.tsx#FileInputFieldBaseTemplate"]={docgenInfo:FileInputFieldBaseTemplate.__docgenInfo,name:"FileInputFieldBaseTemplate",path:"src/components/form/FileInputField/stories/FileInputFieldBase.template.tsx#FileInputFieldBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function FileInputFieldRequired_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileInputFieldRequired_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileInputFieldRequired_template_array_without_holes(arr){if(Array.isArray(arr))return FileInputFieldRequired_template_array_like_to_array(arr)}function FileInputFieldRequired_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileInputFieldRequired_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function FileInputFieldRequired_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileInputFieldRequired_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputFieldRequired_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputFieldRequired_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileInputFieldRequired_template_define_property(target,key,source[key])})}return target}function FileInputFieldRequired_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileInputFieldRequired_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileInputFieldRequired_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileInputFieldRequired_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FileInputFieldRequired_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FileInputFieldRequired_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function FileInputFieldRequired_template_sliced_to_array(arr,i){return FileInputFieldRequired_template_array_with_holes(arr)||FileInputFieldRequired_template_iterable_to_array_limit(arr,i)||FileInputFieldRequired_template_unsupported_iterable_to_array(arr,i)||FileInputFieldRequired_template_non_iterable_rest()}function FileInputFieldRequired_template_to_consumable_array(arr){return FileInputFieldRequired_template_array_without_holes(arr)||FileInputFieldRequired_template_iterable_to_array(arr)||FileInputFieldRequired_template_unsupported_iterable_to_array(arr)||FileInputFieldRequired_template_non_iterable_spread()}function FileInputFieldRequired_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileInputFieldRequired_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileInputFieldRequired_template_array_like_to_array(o,minLen)}}var FileInputFieldRequiredTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_label=_param.label,_param_required=_param.required,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=FileInputFieldRequired_template_object_without_properties(_param,["dimension","label","required","themeBorderKind","CSSCustomProps"]),inputRef=react.useRef(null),_React_useState=FileInputFieldRequired_template_sliced_to_array(react.useState([]),2),fileList=_React_useState[0],setFileList=_React_useState[1],_React_useState1=FileInputFieldRequired_template_sliced_to_array(react.useState(new Map),2),fileAttributesMap=_React_useState1[0],setFileAttributesMap=_React_useState1[1],_React_useState2=FileInputFieldRequired_template_sliced_to_array(react.useState(void 0),2),status=_React_useState2[0],setStatus=_React_useState2[1],_React_useState3=FileInputFieldRequired_template_sliced_to_array(react.useState(void 0),2),extraText=_React_useState3[0],setExtraText=_React_useState3[1],filesAreEqual=function(file1,file2){return file1.name===file2.name&&file1.size===file2.size&&file1.type===file2.type&&file1.lastModified===file2.lastModified},accept=["image/*",".pdf","application/json"],handlePreviewIconClick=function(file){console.log('Preview icon on file "'.concat(file.name,'" was clicked'))},handleRemoveFile=function(fileToRemove){var updatedFileList=fileList.filter(function(file){return!filesAreEqual(file,fileToRemove)}),updatedFileAttributesMap=new Map(fileAttributesMap),attributes=fileAttributesMap.get(fileToRemove);attributes&&attributes.previewImageURL&&URL.revokeObjectURL(attributes.previewImageURL),updatedFileAttributesMap.delete(fileToRemove),setFileList(updatedFileList),setFileAttributesMap(updatedFileAttributesMap),setStatus(void 0),setExtraText(void 0)};return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)("div",{style:{width:"480px"},children:(0,jsx_runtime.jsx)(FileInputField,FileInputFieldRequired_template_object_spread_props(FileInputFieldRequired_template_object_spread({},props),{dimension:dimension,disabled:props.disabled,title:"xl"===dimension?"Загрузите не более 3-х файлов типа ".concat(accept.join(", ")):"Добавьте файлы",ref:inputRef,onInput:function(e){var userSelectedFileList=Array.from(e.target.files||[]),updatedFileAttributesMap=new Map(fileAttributesMap),updatedFileList=fileList.reduce(function(acc,file){return -1===userSelectedFileList.findIndex(function(userFile){return filesAreEqual(userFile,file)})?acc.push(file):updatedFileAttributesMap.delete(file),acc},[]);userSelectedFileList.length+updatedFileList.length>3?(userSelectedFileList.splice(3-updatedFileList.length),setStatus("error"),setExtraText("Несколько файлов не было загружено, так как превышен лимит количества загружаемых файлов")):(setStatus(void 0),setExtraText(void 0)),userSelectedFileList.forEach(function(file){var imageURL=file.type.startsWith("image")?URL.createObjectURL(file):void 0,onPreviewIconClick=file.type.startsWith("image")?function(){return handlePreviewIconClick(file)}:void 0;updatedFileAttributesMap.set(file,{fileId:(0,uid.L)(),fileName:file.name.substring(0,file.name.lastIndexOf(".")),fileType:file.type,fileSize:file.size,status:"Uploaded",errorMessage:"Что-то явно пошло не так...",previewImageURL:imageURL,onPreviewIconClick:onPreviewIconClick})}),setFileList(FileInputFieldRequired_template_to_consumable_array(updatedFileList).concat(FileInputFieldRequired_template_to_consumable_array(userSelectedFileList))),setFileAttributesMap(updatedFileAttributesMap)},accept:accept.join(", "),files:fileList,status:status,extraText:extraText,label:void 0===_param_label?"Обязательно для заполнения":_param_label,required:void 0===_param_required||_param_required,children:fileList.map(function(file){var attributes=fileAttributesMap.get(file);if(attributes)return(0,jsx_runtime.jsx)(FileItem.I,{fileId:attributes.fileId,fileName:attributes.fileName,fileType:attributes.fileType,fileSize:attributes.fileSize,status:attributes.status,errorMessage:attributes.errorMessage,previewImageURL:attributes.previewImageURL,onCloseIconClick:function(){return handleRemoveFile(file)},onPreviewIconClick:attributes.onPreviewIconClick,dimension:dimension,filesLayoutCssMixin:"xl"===dimension?style.Q5:style.Ss},attributes.fileId)})}))})})};try{FileInputFieldRequiredTemplate.displayName="FileInputFieldRequiredTemplate",FileInputFieldRequiredTemplate.__docgenInfo={description:"",displayName:"FileInputFieldRequiredTemplate",props:{title:{defaultValue:null,description:`Текстовое описание компонента (текст внутри области загрузки файлов).
Если к компоненту также нужно добавить label, используйте компонент FileInputField и его проп label`,name:"title",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},width:{defaultValue:null,description:"Задает ширину",name:"width",required:!1,type:{name:"string | number"}},description:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен проп title

Текст для кнопки при dimension M`,name:"description",required:!1,type:{name:"ReactNode"}},renderCustomFileInput:{defaultValue:null,description:'Функция, возвращающая компонент, на который нужно "повесить" файловый инпут',name:"renderCustomFileInput",required:!1,type:{name:"((option: RenderFileInputProps) => ReactNode)"}},files:{defaultValue:null,description:"Список файлов для синхронизации с нативным инпутом",name:"files",required:!1,type:{name:"File[]"}},label:{defaultValue:{value:"Обязательно для заполнения"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Установка статуса поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:`Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:
0 - всегда видим
1 - всегда невидим
по умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества`,name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/FileInputField/stories/FileInputFieldRequired.template.tsx#FileInputFieldRequiredTemplate"]={docgenInfo:FileInputFieldRequiredTemplate.__docgenInfo,name:"FileInputFieldRequiredTemplate",path:"src/components/form/FileInputField/stories/FileInputFieldRequired.template.tsx#FileInputFieldRequiredTemplate"})}catch(__react_docgen_typescript_loader_error){}let FileInputFieldBase_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { FileInputField, FileItem, fullWidthPositionMixin, halfWidthPositionMixin } from '@admiral-ds/react-ui';
import type { FileAttributeProps, FileInputFieldProps, InputStatus, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const FileInputFieldBaseTemplate = ({
  dimension = 'xl',
  label = 'Label',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileInputFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = React.useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = React.useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = React.useState<InputStatus | undefined>(undefined);
  const [extraText, setExtraText] = React.useState<React.ReactNode | undefined>(undefined);

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const accept = ['image/*', '.pdf', 'application/json'];
  const maxFilesNumber = 3;

  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(\`Preview icon on file "\${file.name}" was clicked\`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    if (userSelectedFileList.length + updatedFileList.length > maxFilesNumber) {
      userSelectedFileList.splice(maxFilesNumber - updatedFileList.length);
      setStatus('error');
      setExtraText('Несколько файлов не было загружено, так как превышен лимит количества загружаемых файлов');
    } else {
      setStatus(undefined);
      setExtraText(undefined);
    }
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith('image') ? URL.createObjectURL(file) : undefined;
      const onPreviewIconClick = file.type.startsWith('image') ? () => handlePreviewIconClick(file) : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: uid(),
        fileName: file.name.substring(0, file.name.lastIndexOf('.')),
        fileType: file.type,
        fileSize: file.size,
        status: 'Uploaded',
        errorMessage: 'Что-то явно пошло не так...',
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
    setStatus(undefined);
    setExtraText(undefined);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={dimension}
            filesLayoutCssMixin={dimension === 'xl' ? halfWidthPositionMixin : fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ width: '480px' }}>
        <FileInputField
          {...props}
          dimension={dimension}
          disabled={props.disabled}
          title={dimension === 'xl' ? \`Загрузите не более 3-х файлов типа \${accept.join(', ')}\` : 'Добавьте файлы'}
          ref={inputRef}
          onInput={handleChange}
          accept={accept.join(', ')}
          files={fileList}
          status={status}
          extraText={extraText}
          label={label}
        >
          {renderFileList()}
        </FileInputField>
      </div>
    </ThemeProvider>
  );
};
`,FileInputFieldRequired_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { FileInputField, FileItem, fullWidthPositionMixin, halfWidthPositionMixin } from '@admiral-ds/react-ui';
import type { FileAttributeProps, FileInputFieldProps, InputStatus, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const FileInputFieldRequiredTemplate = ({
  dimension = 'xl',
  label = 'Обязательно для заполнения',
  required = true,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileInputFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = React.useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = React.useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = React.useState<InputStatus | undefined>(undefined);
  const [extraText, setExtraText] = React.useState<React.ReactNode | undefined>(undefined);

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const accept = ['image/*', '.pdf', 'application/json'];
  const maxFilesNumber = 3;

  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(\`Preview icon on file "\${file.name}" was clicked\`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
    if (userSelectedFileList.length + updatedFileList.length > maxFilesNumber) {
      userSelectedFileList.splice(maxFilesNumber - updatedFileList.length);
      setStatus('error');
      setExtraText('Несколько файлов не было загружено, так как превышен лимит количества загружаемых файлов');
    } else {
      setStatus(undefined);
      setExtraText(undefined);
    }
    userSelectedFileList.forEach((file) => {
      const imageURL = file.type.startsWith('image') ? URL.createObjectURL(file) : undefined;
      const onPreviewIconClick = file.type.startsWith('image') ? () => handlePreviewIconClick(file) : undefined;
      updatedFileAttributesMap.set(file, {
        fileId: uid(),
        fileName: file.name.substring(0, file.name.lastIndexOf('.')),
        fileType: file.type,
        fileSize: file.size,
        status: 'Uploaded',
        errorMessage: 'Что-то явно пошло не так...',
        previewImageURL: imageURL,
        onPreviewIconClick: onPreviewIconClick,
      });
    });
    setFileList([...updatedFileList, ...userSelectedFileList]);
    setFileAttributesMap(updatedFileAttributesMap);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const attributes = fileAttributesMap.get(fileToRemove);
    if (attributes && attributes.previewImageURL) {
      URL.revokeObjectURL(attributes.previewImageURL);
    }
    updatedFileAttributesMap.delete(fileToRemove);
    setFileList(updatedFileList);
    setFileAttributesMap(updatedFileAttributesMap);
    setStatus(undefined);
    setExtraText(undefined);
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);
      if (attributes) {
        return (
          <FileItem
            fileId={attributes.fileId}
            key={attributes.fileId}
            fileName={attributes.fileName}
            fileType={attributes.fileType}
            fileSize={attributes.fileSize}
            status={attributes.status}
            errorMessage={attributes.errorMessage}
            previewImageURL={attributes.previewImageURL}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={dimension}
            filesLayoutCssMixin={dimension === 'xl' ? halfWidthPositionMixin : fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <div style={{ width: '480px' }}>
        <FileInputField
          {...props}
          dimension={dimension}
          disabled={props.disabled}
          title={dimension === 'xl' ? \`Загрузите не более 3-х файлов типа \${accept.join(', ')}\` : 'Добавьте файлы'}
          ref={inputRef}
          onInput={handleChange}
          accept={accept.join(', ')}
          files={fileList}
          status={status}
          extraText={extraText}
          label={label}
          required={required}
        >
          {renderFileList()}
        </FileInputField>
      </div>
    </ThemeProvider>
  );
};
`;function FileInputField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileInputField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileInputField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileInputField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileInputField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileInputField_stories_define_property(target,key,source[key])})}return target}function FileInputField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileInputField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileInputField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileInputField_stories_sliced_to_array(arr,i){return FileInputField_stories_array_with_holes(arr)||FileInputField_stories_iterable_to_array_limit(arr,i)||FileInputField_stories_unsupported_iterable_to_array(arr,i)||FileInputField_stories_non_iterable_rest()}function FileInputField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileInputField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileInputField_stories_array_like_to_array(o,minLen)}}let FileInputField_stories={title:"Admiral-2.1/Form Field/FileInputField",component:FileInputField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27281"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27389"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27519"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27563"}]},argTypes:{dimension:{options:["xl","m"],control:{type:"radio"}},extraText:{control:{type:"text"}},title:{control:{type:"text"}},description:{control:{type:"text"}},label:{control:{type:"text"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},width:{control:!1},files:{control:!1}}};var FileInputFieldBase={render:function(props){var CSSCustomProps=FileInputField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(FileInputFieldBaseTemplate,FileInputField_stories_object_spread_props(FileInputField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:FileInputFieldBase_templateraw_namespaceObject}}},name:"FileInputField. Example"},FileInputFieldRequired={render:function(props){var CSSCustomProps=FileInputField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(FileInputFieldRequiredTemplate,FileInputField_stories_object_spread_props(FileInputField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:FileInputFieldRequired_templateraw_namespaceObject}}},name:"FileInputField. Required"};FileInputFieldBase.parameters={...FileInputFieldBase.parameters,docs:{...FileInputFieldBase.parameters?.docs,source:{originalSource:`{
  render: FileInputFieldBaseStory,
  parameters: {
    docs: {
      source: {
        code: FileInputFieldBaseRaw
      }
    }
  },
  name: 'FileInputField. Example'
}`,...FileInputFieldBase.parameters?.docs?.source}}},FileInputFieldRequired.parameters={...FileInputFieldRequired.parameters,docs:{...FileInputFieldRequired.parameters?.docs,source:{originalSource:`{
  render: FileInputFieldRequiredStory,
  parameters: {
    docs: {
      source: {
        code: FileInputFieldRequiredRaw
      }
    }
  },
  name: 'FileInputField. Required'
}`,...FileInputFieldRequired.parameters?.docs?.source}}};let __namedExportsOrder=["FileInputFieldBase","FileInputFieldRequired"]},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_2__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);
//# sourceMappingURL=components-form-FileInputField-stories-FileInputField-stories.eea9d44f.iframe.bundle.js.map