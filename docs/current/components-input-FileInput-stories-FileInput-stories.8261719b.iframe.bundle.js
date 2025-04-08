"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1888],{"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 30"'},{value:'"Primary/Primary 70"'},{value:'"Special/Static White"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/input/FileInput/stories/FileInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FileInputCustom:()=>FileInputCustom,FileInputCustomFileType:()=>FileInputCustomFileType,FileInputDimensionM:()=>FileInputDimensionM,FileInputDimensionXL:()=>FileInputDimensionXL,FileInputWithStatus:()=>FileInputWithStatus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileInput_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),FileInput=__webpack_require__("./src/components/input/FileInput/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),FileItem=__webpack_require__("./src/components/input/FileInput/FileItem.tsx"),style=__webpack_require__("./src/components/input/FileInput/style.ts"),T=__webpack_require__("./src/components/T/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var filesAreEqual=function(file1,file2){return file1.name===file2.name&&file1.size===file2.size&&file1.type===file2.type&&file1.lastModified===file2.lastModified},ACCEPT_STR="image/*, .pdf, application/json",FileInputBaseTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_width=_param.width,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["dimension","width","themeBorderKind","CSSCustomProps"]),inputRef=react.useRef(null),_React_useState=_sliced_to_array(react.useState([]),2),fileList=_React_useState[0],setFileList=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(new Map),2),fileAttributesMap=_React_useState1[0],setFileAttributesMap=_React_useState1[1],_React_useState2=_sliced_to_array(react.useState(void 0),2),status=_React_useState2[0],setStatus=_React_useState2[1],handlePreviewIconClick=function(file){console.log('Preview icon on file "'.concat(file.name,'" was clicked'))},handleRemoveFile=function(fileToRemove){var updatedFileList=fileList.filter(function(file){return!filesAreEqual(file,fileToRemove)}),updatedFileAttributesMap=new Map(fileAttributesMap),attributes=fileAttributesMap.get(fileToRemove);attributes&&attributes.previewImageURL&&URL.revokeObjectURL(attributes.previewImageURL),updatedFileAttributesMap.delete(fileToRemove),setFileList(updatedFileList),setFileAttributesMap(updatedFileAttributesMap),setStatus(void 0)};return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Компонент позволяет загружать файлы на сервер. Используется в двух вариантах - для загрузки одного или нескольких файлов. Позволяет как загружать файлы через браузер файлов, так и через Drag and Drop (перетаскивание файлов). Компонент можно изменять по ширине, минимальная ширина 320px."}),(0,jsx_runtime.jsx)(FileInput.zp,{dimension:dimension,disabled:props.disabled,width:void 0===_param_width?"480px":_param_width,title:"xl"===dimension?"Загрузите не более 3-х файлов типа ".concat(ACCEPT_STR):"Добавьте файлы",ref:inputRef,onInput:function(e){var userSelectedFileList=Array.from(e.target.files||[]);userSelectedFileList.forEach(function(file){return console.log("change ".concat(file.name))});var updatedFileAttributesMap=new Map(fileAttributesMap),updatedFileList=fileList.reduce(function(acc,file){return -1===userSelectedFileList.findIndex(function(userFile){return filesAreEqual(userFile,file)})?acc.push(file):updatedFileAttributesMap.delete(file),acc},[]);userSelectedFileList.length+updatedFileList.length>3?(userSelectedFileList.splice(3-updatedFileList.length),setStatus("error")):setStatus(void 0),userSelectedFileList.forEach(function(file){var imageURL=file.type.startsWith("image")?URL.createObjectURL(file):void 0,onPreviewIconClick=file.type.startsWith("image")?function(){return handlePreviewIconClick(file)}:void 0;updatedFileAttributesMap.set(file,{fileId:(0,uid.L)(),fileName:file.name.substring(0,file.name.lastIndexOf(".")),fileType:file.type,fileSize:file.size,status:"Uploaded",errorMessage:"Что-то явно пошло не так...",previewImageURL:imageURL,onPreviewIconClick:onPreviewIconClick})}),setFileList(_to_consumable_array(updatedFileList).concat(_to_consumable_array(userSelectedFileList))),setFileAttributesMap(updatedFileAttributesMap)},accept:ACCEPT_STR,files:fileList,status:status,children:fileList.map(function(file){var attributes=fileAttributesMap.get(file);if(attributes)return(0,jsx_runtime.jsx)(FileItem.I,{fileId:attributes.fileId,fileName:attributes.fileName,fileType:attributes.fileType,fileSize:attributes.fileSize,status:attributes.status,errorMessage:attributes.errorMessage,previewImageURL:attributes.previewImageURL,onCloseIconClick:function(){return handleRemoveFile(file)},onPreviewIconClick:attributes.onPreviewIconClick,dimension:dimension,filesLayoutCssMixin:"xl"===dimension?style.Q5:style.Ss},attributes.fileId)})})]})};try{FileInputBaseTemplate.displayName="FileInputBaseTemplate",FileInputBaseTemplate.__docgenInfo={description:"",displayName:"FileInputBaseTemplate",props:{dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},width:{defaultValue:{value:"480px"},description:"Задает ширину",name:"width",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:`Текстовое описание компонента (текст внутри области загрузки файлов).
Если к компоненту также нужно добавить label, используйте компонент FileInputField и его проп label`,name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен проп title

Текст для кнопки при dimension M`,name:"description",required:!1,type:{name:"ReactNode"}},renderCustomFileInput:{defaultValue:null,description:'Функция, возвращающая компонент, на который нужно "повесить" файловый инпут',name:"renderCustomFileInput",required:!1,type:{name:"((option: RenderFileInputProps) => ReactNode)"}},files:{defaultValue:null,description:"Список файлов для синхронизации с нативным инпутом",name:"files",required:!1,type:{name:"File[]"}},extraText:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп extraText

Текст будет виден ниже компонента`,name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 7.1.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп status

Установка статуса поля`,name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileInput/stories/FileInputBase.template.tsx#FileInputBaseTemplate"]={docgenInfo:FileInputBaseTemplate.__docgenInfo,name:"FileInputBaseTemplate",path:"src/components/input/FileInput/stories/FileInputBase.template.tsx#FileInputBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function FileInputWithStatus_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileInputWithStatus_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileInputWithStatus_template_array_without_holes(arr){if(Array.isArray(arr))return FileInputWithStatus_template_array_like_to_array(arr)}function FileInputWithStatus_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function FileInputWithStatus_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileInputWithStatus_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputWithStatus_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputWithStatus_template_sliced_to_array(arr,i){return FileInputWithStatus_template_array_with_holes(arr)||FileInputWithStatus_template_iterable_to_array_limit(arr,i)||FileInputWithStatus_template_unsupported_iterable_to_array(arr,i)||FileInputWithStatus_template_non_iterable_rest()}function FileInputWithStatus_template_to_consumable_array(arr){return FileInputWithStatus_template_array_without_holes(arr)||FileInputWithStatus_template_iterable_to_array(arr)||FileInputWithStatus_template_unsupported_iterable_to_array(arr)||FileInputWithStatus_template_non_iterable_spread()}function FileInputWithStatus_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileInputWithStatus_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileInputWithStatus_template_array_like_to_array(o,minLen)}}var file1=new File(["foo"],"example1.jpeg",{type:"image/jpeg"}),file2=new File(["foo"],"veryveryveryveryveryveryveryveryverylongfilenameexample2.pdf",{type:"application/pdf"}),file3=new File(["foo"],"example3.doc",{type:"application/msword"}),file4=new File(["foo"],"example4.xls",{type:"application/vnd.ms-excel"}),file5=new File(["foo"],"example5.zip",{type:"application/zip"}),filesInitial=[file1,file2,file3,file4,file5],filesAttributesInitial=[{fileId:"1",fileName:"example1",fileType:file1.type,fileSize:file1.size,status:"Uploaded"},{fileId:"2",fileName:"veryveryveryveryveryveryveryveryverylongfilenameexample2",fileType:file2.type,fileSize:file2.size,status:"Error",errorMessage:"Что-то явно пошло не так..."},{fileId:"3",fileName:"example3",fileType:file3.type,fileSize:file3.size,status:"Loading"},{fileId:"4",fileName:"example4",fileType:file4.type,fileSize:file4.size,status:"Queue"},{fileId:"5",fileName:"example5",fileType:file5.type,fileSize:file5.size,status:"Uploaded"}],filesMapInitial=function(){var initialMap=new Map;return filesInitial.forEach(function(file,index){return initialMap.set(file,filesAttributesInitial[index])}),initialMap},FileInputWithStatusTemplate=function(props){var inputRef=react.useRef(null),_React_useState=FileInputWithStatus_template_sliced_to_array(react.useState(FileInputWithStatus_template_to_consumable_array(filesInitial)),2),fileList=_React_useState[0],setFileList=_React_useState[1],_React_useState1=FileInputWithStatus_template_sliced_to_array(react.useState(filesMapInitial()),2),fileAttributesMap=_React_useState1[0],setFileAttributesMap=_React_useState1[1],filesAreEqual=function(file1,file2){return file1.name===file2.name&&file1.size===file2.size&&file1.type===file2.type&&file1.lastModified===file2.lastModified},handlePreviewIconClick=function(file){console.log('Preview icon on file "'.concat(file.name,'" was clicked'))},handleRemoveFile=function(fileToRemove){var updatedFileList=fileList.filter(function(file){return!filesAreEqual(file,fileToRemove)}),updatedFileAttributesMap=new Map(fileAttributesMap),attributes=fileAttributesMap.get(fileToRemove);attributes&&attributes.previewImageURL&&URL.revokeObjectURL(attributes.previewImageURL),updatedFileAttributesMap.delete(fileToRemove),setFileList(updatedFileList),setFileAttributesMap(updatedFileAttributesMap)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки."}),(0,jsx_runtime.jsx)(FileInput.zp,{dimension:props.dimension,disabled:props.disabled,width:"xl"===props.dimension?"480px":"288px",title:"xl"===props.dimension?"Загрузите файлы":"Добавьте файлы",ref:inputRef,onInput:function(e){var userSelectedFileList=Array.from(e.target.files||[]),updatedFileAttributesMap=new Map(fileAttributesMap),updatedFileList=fileList.reduce(function(acc,file){return -1===userSelectedFileList.findIndex(function(userFile){return filesAreEqual(userFile,file)})?acc.push(file):updatedFileAttributesMap.delete(file),acc},[]);userSelectedFileList.forEach(function(file){var imageURL=file.type.startsWith("image")?URL.createObjectURL(file):void 0,onPreviewIconClick=file.type.startsWith("image")?function(){return handlePreviewIconClick(file)}:void 0;updatedFileAttributesMap.set(file,{fileId:(0,uid.L)(),fileName:file.name.substring(0,file.name.lastIndexOf(".")),fileType:file.type,fileSize:file.size,status:"Uploaded",errorMessage:"Что-то явно пошло не так...",previewImageURL:imageURL,onPreviewIconClick:onPreviewIconClick})}),setFileList(FileInputWithStatus_template_to_consumable_array(updatedFileList).concat(FileInputWithStatus_template_to_consumable_array(userSelectedFileList))),setFileAttributesMap(updatedFileAttributesMap)},files:fileList,children:fileList.map(function(file){var attributes=fileAttributesMap.get(file);if(attributes)return(0,jsx_runtime.jsx)(FileItem.I,{fileId:attributes.fileId,fileName:attributes.fileName,fileType:attributes.fileType,fileSize:attributes.fileSize,status:attributes.status,errorMessage:attributes.errorMessage,previewImageURL:attributes.previewImageURL,onCloseIconClick:function(){return handleRemoveFile(file)},onPreviewIconClick:attributes.onPreviewIconClick,dimension:props.dimension,filesLayoutCssMixin:style.Ss},attributes.fileId)})})]})};try{FileInputWithStatusTemplate.displayName="FileInputWithStatusTemplate",FileInputWithStatusTemplate.__docgenInfo={description:"",displayName:"FileInputWithStatusTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},width:{defaultValue:null,description:"Задает ширину",name:"width",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:`Текстовое описание компонента (текст внутри области загрузки файлов).
Если к компоненту также нужно добавить label, используйте компонент FileInputField и его проп label`,name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен проп title

Текст для кнопки при dimension M`,name:"description",required:!1,type:{name:"ReactNode"}},renderCustomFileInput:{defaultValue:null,description:'Функция, возвращающая компонент, на который нужно "повесить" файловый инпут',name:"renderCustomFileInput",required:!1,type:{name:"((option: RenderFileInputProps) => ReactNode)"}},files:{defaultValue:null,description:"Список файлов для синхронизации с нативным инпутом",name:"files",required:!1,type:{name:"File[]"}},extraText:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп extraText

Текст будет виден ниже компонента`,name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 7.1.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп status

Установка статуса поля`,name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileInput/stories/FileInputWithStatus.template.tsx#FileInputWithStatusTemplate"]={docgenInfo:FileInputWithStatusTemplate.__docgenInfo,name:"FileInputWithStatusTemplate",path:"src/components/input/FileInput/stories/FileInputWithStatus.template.tsx#FileInputWithStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.tsx"),AttachFileOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/AttachFileOutline.svg"),CloseOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function FileInputCustom_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileInputCustom_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileInputCustom_template_array_without_holes(arr){if(Array.isArray(arr))return FileInputCustom_template_array_like_to_array(arr)}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileInputCustom_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function FileInputCustom_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileInputCustom_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputCustom_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileInputCustom_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FileInputCustom_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FileInputCustom_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function FileInputCustom_template_sliced_to_array(arr,i){return FileInputCustom_template_array_with_holes(arr)||FileInputCustom_template_iterable_to_array_limit(arr,i)||FileInputCustom_template_unsupported_iterable_to_array(arr,i)||FileInputCustom_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function FileInputCustom_template_to_consumable_array(arr){return FileInputCustom_template_array_without_holes(arr)||FileInputCustom_template_iterable_to_array(arr)||FileInputCustom_template_unsupported_iterable_to_array(arr)||FileInputCustom_template_non_iterable_spread()}function FileInputCustom_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileInputCustom_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileInputCustom_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: nowrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  margin: 0;
  padding: 12px 16px;
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, `,`);
  margin-top: 16px;
  `,`

  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, `,`);
    color: var(--admiral-color-Magenta_Magenta60Main, `,`);
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }
`]);return _templateObject1=function _templateObject(){return data},data}var MyFileItem=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.filesLayoutCssMixin},function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Magenta/Magenta 60 Main"]}),CloseIcon=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 50"]}),CustomFileItem=function(_param){var children=_param.children,filesLayoutCssMixin=_param.filesLayoutCssMixin,onCloseIconClick=_param.onCloseIconClick,props=FileInputCustom_template_object_without_properties(_param,["children","filesLayoutCssMixin","onCloseIconClick"]);return(0,jsx_runtime.jsxs)(MyFileItem,_object_spread_props(_object_spread({filesLayoutCssMixin:filesLayoutCssMixin},props),{children:[children,(0,jsx_runtime.jsx)(CloseIcon,{onClick:function(){null==onCloseIconClick||onCloseIconClick()},children:(0,jsx_runtime.jsx)(CloseOutline.h,{})})]}))},FileInputCustomTemplate=function(props){var inputRef=react.useRef(null),_React_useState=FileInputCustom_template_sliced_to_array(react.useState([]),2),fileList=_React_useState[0],setFileList=_React_useState[1],filesAreEqual=function(file1,file2){return file1.name===file2.name&&file1.size===file2.size&&file1.type===file2.type&&file1.lastModified===file2.lastModified},handleRemoveFile=function(fileToRemove){setFileList(fileList.filter(function(file){return!filesAreEqual(file,fileToRemove)}))};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие текстовые инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки реакт-компонента. Для отображения выбранных файлов можно использовать кастомные компоненты."}),(0,jsx_runtime.jsx)(FileInput.zp,{dimension:props.dimension,disabled:props.disabled,width:"260px",ref:inputRef,onInput:function(e){var userSelectedFileList=Array.from(e.target.files||[]);setFileList(FileInputCustom_template_to_consumable_array(fileList.reduce(function(acc,file){return -1===userSelectedFileList.findIndex(function(userFile){return filesAreEqual(userFile,file)})&&acc.push(file),acc},[])).concat(FileInputCustom_template_to_consumable_array(userSelectedFileList)))},renderCustomFileInput:function(options){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("p",{style:{textAlign:"justify"},children:"Загрузите файлы изображений"}),(0,jsx_runtime.jsxs)(Button.$n,{onClick:function(){return options.onQueryUpload()},children:[(0,jsx_runtime.jsx)(AttachFileOutline.h,{}),"Загрузить документы"]})]})},files:fileList,children:fileList.map(function(file){return(0,jsx_runtime.jsx)(CustomFileItem,{onCloseIconClick:function(){return handleRemoveFile(file)},filesLayoutCssMixin:style.Ss,children:file.name},file.name)})})]})};try{FileInputCustomTemplate.displayName="FileInputCustomTemplate",FileInputCustomTemplate.__docgenInfo={description:"",displayName:"FileInputCustomTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!0,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},width:{defaultValue:null,description:"Задает ширину",name:"width",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:`Текстовое описание компонента (текст внутри области загрузки файлов).
Если к компоненту также нужно добавить label, используйте компонент FileInputField и его проп label`,name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен проп title

Текст для кнопки при dimension M`,name:"description",required:!1,type:{name:"ReactNode"}},renderCustomFileInput:{defaultValue:null,description:'Функция, возвращающая компонент, на который нужно "повесить" файловый инпут',name:"renderCustomFileInput",required:!1,type:{name:"((option: RenderFileInputProps) => ReactNode)"}},files:{defaultValue:null,description:"Список файлов для синхронизации с нативным инпутом",name:"files",required:!1,type:{name:"File[]"}},extraText:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп extraText

Текст будет виден ниже компонента`,name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 7.1.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп status

Установка статуса поля`,name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileInput/stories/FileInputCustom.template.tsx#FileInputCustomTemplate"]={docgenInfo:FileInputCustomTemplate.__docgenInfo,name:"FileInputCustomTemplate",path:"src/components/input/FileInput/stories/FileInputCustom.template.tsx#FileInputCustomTemplate"})}catch(__react_docgen_typescript_loader_error){}var PDFSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/PDFSolid.svg"),PPTSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/PPTSolid.svg"),FileWordSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/FileWordSolid.svg"),XLSSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/XLSSolid.svg"),DocsSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/DocsSolid.svg"),JpgSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/JpgSolid.svg"),ZIPSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/ZIPSolid.svg"),FileCSVSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/documents/FileCSVSolid.svg");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEmailsOutline=function SvgEmailsOutline(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M8.29 4.79c-1.46 0-2.65 1.19-2.65 2.65V14c0 1.46 1.19 2.65 2.65 2.65h10.04c1.46 0 2.65-1.19 2.65-2.65V7.44c0-1.46-1.19-2.65-2.65-2.65zm3.61 5.67L7.08 6.85c.21-.45.68-.76 1.21-.76h10.04c.53 0 .99.31 1.21.76l-4.82 3.61c-.84.63-1.98.63-2.82 0m6.51 1.97-2.05-1.57 3.32-2.49V14c0 .75-.61 1.35-1.35 1.35H8.29c-.74 0-1.35-.6-1.35-1.35V8.37l3.28 2.46-2.09 1.6a.65.65 0 0 0 .79 1.03l2.39-1.83c1.2.79 2.75.8 3.95.03l2.36 1.8c.28.22.69.16.91-.12a.65.65 0 0 0-.12-.91M4.31 9.2c0-.36-.29-.65-.65-.65s-.65.29-.65.65v7.35c0 1.46 1.19 2.65 2.65 2.65h11.82c.35 0 .64-.29.64-.65s-.29-.65-.64-.65H5.66c-.74 0-1.35-.6-1.35-1.35z"})))};function FileInputCustomFileType_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileInputCustomFileType_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileInputCustomFileType_template_array_without_holes(arr){if(Array.isArray(arr))return FileInputCustomFileType_template_array_like_to_array(arr)}function FileInputCustomFileType_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function FileInputCustomFileType_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileInputCustomFileType_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputCustomFileType_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInputCustomFileType_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FileInputCustomFileType_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FileInputCustomFileType_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function FileInputCustomFileType_template_sliced_to_array(arr,i){return FileInputCustomFileType_template_array_with_holes(arr)||FileInputCustomFileType_template_iterable_to_array_limit(arr,i)||FileInputCustomFileType_template_unsupported_iterable_to_array(arr,i)||FileInputCustomFileType_template_non_iterable_rest()}function FileInputCustomFileType_template_to_consumable_array(arr){return FileInputCustomFileType_template_array_without_holes(arr)||FileInputCustomFileType_template_iterable_to_array(arr)||FileInputCustomFileType_template_unsupported_iterable_to_array(arr)||FileInputCustomFileType_template_non_iterable_spread()}function FileInputCustomFileType_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileInputCustomFileType_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileInputCustomFileType_template_array_like_to_array(o,minLen)}}__webpack_require__.p;var FileInputCustomFileType_template_filesAreEqual=function(file1,file2){return file1.name===file2.name&&file1.size===file2.size&&file1.type===file2.type&&file1.lastModified===file2.lastModified},getCustomFileType=function(type){if(type.startsWith("message/"))return"MSG";switch(type){case"image/jpeg":return"JPEG";case"image/png":case"image/apng":return"PNG";case"image/tiff":return"TIFF";case"image/svg+xml":return"SVG";case"image/gif":return"GIF";case"image/webp":return"WEBP";case"application/pdf":return"PDF";case"application/vnd.ms-powerpoint":case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PPT";case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"XLS";case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";case"application/zip":return"ZIP";case"text/csv":return"CSV";default:return"Docs"}},getCustomFileTypeIcon=function(type){if(type.startsWith("message/"))return SvgEmailsOutline;switch(type){case"image/jpeg":case"image/png":case"image/tiff":case"image/svg+xml":case"image/apng":case"image/avif":case"image/gif":case"image/webp":return JpgSolid.h;case"application/pdf":return PDFSolid.h;case"application/vnd.ms-powerpoint":case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return PPTSolid.h;case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return XLSSolid.h;case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return FileWordSolid.h;case"application/zip":return ZIPSolid.h;case"text/csv":return FileCSVSolid.h;default:return DocsSolid.h}},FileInputCustomFileTypeTemplate=function(_param){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"xl":_param_dimension,_param_width=_param.width,props=(_param.themeBorderKind,_param.CSSCustomProps,FileInputCustomFileType_template_object_without_properties(_param,["dimension","width","themeBorderKind","CSSCustomProps"])),inputRef=(0,react.useRef)(null),_useState=FileInputCustomFileType_template_sliced_to_array((0,react.useState)([]),2),fileList=_useState[0],setFileList=_useState[1],_useState1=FileInputCustomFileType_template_sliced_to_array((0,react.useState)(new Map),2),fileAttributesMap=_useState1[0],setFileAttributesMap=_useState1[1],handlePreviewIconClick=function(file){console.log('Preview icon on file "'.concat(file.name,'" was clicked'))},handleRemoveFile=function(fileToRemove){var updatedFileList=fileList.filter(function(file){return!FileInputCustomFileType_template_filesAreEqual(file,fileToRemove)}),updatedFileAttributesMap=new Map(fileAttributesMap),attributes=fileAttributesMap.get(fileToRemove);attributes&&attributes.previewImageURL&&URL.revokeObjectURL(attributes.previewImageURL),updatedFileAttributesMap.delete(fileToRemove),setFileList(updatedFileList),setFileAttributesMap(updatedFileAttributesMap)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие текстовые инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки реакт-компонента. Для отображения выбранных файлов можно использовать кастомные компоненты."}),(0,jsx_runtime.jsx)(FileInput.zp,{dimension:dimension,disabled:props.disabled,width:void 0===_param_width?"480px":_param_width,title:"Добавьте файлы",ref:inputRef,onInput:function(e){var userSelectedFileList=Array.from(e.target.files||[]);userSelectedFileList.forEach(function(file){return console.log("change ".concat(file.name))});var updatedFileAttributesMap=new Map(fileAttributesMap),updatedFileList=fileList.reduce(function(acc,file){return -1===userSelectedFileList.findIndex(function(userFile){return FileInputCustomFileType_template_filesAreEqual(userFile,file)})?acc.push(file):updatedFileAttributesMap.delete(file),acc},[]);userSelectedFileList.forEach(function(file){var imageURL=file.type.startsWith("image")?URL.createObjectURL(file):void 0,onPreviewIconClick=file.type.startsWith("image")?function(){return handlePreviewIconClick(file)}:void 0;updatedFileAttributesMap.set(file,{fileId:(0,uid.L)(),fileName:file.name.substring(0,file.name.lastIndexOf(".")),fileType:file.type,fileSize:file.size,status:"Uploaded",errorMessage:"Что-то явно пошло не так...",previewImageURL:imageURL,onPreviewIconClick:onPreviewIconClick})}),setFileList(FileInputCustomFileType_template_to_consumable_array(updatedFileList).concat(FileInputCustomFileType_template_to_consumable_array(userSelectedFileList))),setFileAttributesMap(updatedFileAttributesMap)},files:fileList,children:fileList.map(function(file){var attributes=fileAttributesMap.get(file);if(attributes)return console.log(attributes.fileType),(0,jsx_runtime.jsx)(FileItem.I,{fileId:attributes.fileId,fileName:attributes.fileName,fileType:attributes.fileType,fileSize:attributes.fileSize,status:attributes.status,errorMessage:attributes.errorMessage,previewImageURL:attributes.previewImageURL,formatFileTypeInfo:getCustomFileType,formatFileTypeIcon:getCustomFileTypeIcon,onCloseIconClick:function(){return handleRemoveFile(file)},onPreviewIconClick:attributes.onPreviewIconClick,dimension:dimension,filesLayoutCssMixin:style.Ss},attributes.fileId)})})]})};try{FileInputCustomFileTypeTemplate.displayName="FileInputCustomFileTypeTemplate",FileInputCustomFileTypeTemplate.__docgenInfo={description:"",displayName:"FileInputCustomFileTypeTemplate",props:{dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"xl"'}]}},width:{defaultValue:{value:"480px"},description:"Задает ширину",name:"width",required:!1,type:{name:"string | number"}},title:{defaultValue:null,description:`Текстовое описание компонента (текст внутри области загрузки файлов).
Если к компоненту также нужно добавить label, используйте компонент FileInputField и его проп label`,name:"title",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен проп title

Текст для кнопки при dimension M`,name:"description",required:!1,type:{name:"ReactNode"}},renderCustomFileInput:{defaultValue:null,description:'Функция, возвращающая компонент, на который нужно "повесить" файловый инпут',name:"renderCustomFileInput",required:!1,type:{name:"((option: RenderFileInputProps) => ReactNode)"}},files:{defaultValue:null,description:"Список файлов для синхронизации с нативным инпутом",name:"files",required:!1,type:{name:"File[]"}},extraText:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 3.7.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп extraText

Текст будет виден ниже компонента`,name:"extraText",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 7.1.0, будет удалено в 9.x.x версии.
Используйте взамен компонент FileInputField и его проп status

Установка статуса поля`,name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/FileInput/stories/FileInputCustomFileType.template.tsx#FileInputCustomFileTypeTemplate"]={docgenInfo:FileInputCustomFileTypeTemplate.__docgenInfo,name:"FileInputCustomFileTypeTemplate",path:"src/components/input/FileInput/stories/FileInputCustomFileType.template.tsx#FileInputCustomFileTypeTemplate"})}catch(__react_docgen_typescript_loader_error){}let FileInputBase_templateraw_namespaceObject=`import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { FileInput, FileItem, fullWidthPositionMixin, halfWidthPositionMixin, T } from '@admiral-ds/react-ui';
import type { FileAttributeProps, FileInputProps, InputStatus, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const filesAreEqual = (file1: File, file2: File) =>
  file1.name === file2.name &&
  file1.size === file2.size &&
  file1.type === file2.type &&
  file1.lastModified === file2.lastModified;

const accept = ['image/*', '.pdf', 'application/json'];
const ACCEPT_STR = accept.join(', ');
const maxFilesNumber = 3;

export const FileInputBaseTemplate = ({
  dimension = 'xl',
  width = '480px',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = React.useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = React.useState(new Map<File, FileAttributeProps>());
  const [status, setStatus] = React.useState<InputStatus | undefined>(undefined);
  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(\`Preview icon on file "\${file.name}" was clicked\`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    // eslint-disable-next-line no-console
    userSelectedFileList.forEach((file) => console.log(\`change \${file.name}\`));
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
    } else {
      setStatus(undefined);
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
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент позволяет загружать файлы на сервер. Используется в двух вариантах - для загрузки одного или
        нескольких файлов. Позволяет как загружать файлы через браузер файлов, так и через Drag and Drop (перетаскивание
        файлов). Компонент можно изменять по ширине, минимальная ширина 320px.
      </T>
      <FileInput
        dimension={dimension}
        disabled={props.disabled}
        width={width}
        title={dimension === 'xl' ? \`Загрузите не более 3-х файлов типа \${ACCEPT_STR}\` : 'Добавьте файлы'}
        ref={inputRef}
        onInput={handleChange}
        accept={ACCEPT_STR}
        files={fileList}
        status={status}
      >
        {renderFileList()}
      </FileInput>
    </ThemeProvider>
  );
};
`,FileInputWithStatus_templateraw_namespaceObject=`import * as React from 'react';

import { FileInput, FileItem, fullWidthPositionMixin, T } from '@admiral-ds/react-ui';
import type { FileAttributeProps, FileInputProps } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';

//<editor-fold desc="Status demo">
const file1 = new File(['foo'], 'example1.jpeg', {
  type: 'image/jpeg',
});
const file2 = new File(['foo'], 'veryveryveryveryveryveryveryveryverylongfilenameexample2.pdf', {
  type: 'application/pdf',
});
const file3 = new File(['foo'], 'example3.doc', {
  type: 'application/msword',
});
const file4 = new File(['foo'], 'example4.xls', {
  type: 'application/vnd.ms-excel',
});
const file5 = new File(['foo'], 'example5.zip', {
  type: 'application/zip',
});

const filesInitial = [file1, file2, file3, file4, file5];
const filesAttributesInitial: FileAttributeProps[] = [
  {
    fileId: '1',
    fileName: 'example1',
    fileType: file1.type,
    fileSize: file1.size,
    status: 'Uploaded',
  },
  {
    fileId: '2',
    fileName: 'veryveryveryveryveryveryveryveryverylongfilenameexample2',
    fileType: file2.type,
    fileSize: file2.size,
    status: 'Error',
    errorMessage: 'Что-то явно пошло не так...',
  },
  {
    fileId: '3',
    fileName: 'example3',
    fileType: file3.type,
    fileSize: file3.size,
    status: 'Loading',
  },
  {
    fileId: '4',
    fileName: 'example4',
    fileType: file4.type,
    fileSize: file4.size,
    status: 'Queue',
  },
  {
    fileId: '5',
    fileName: 'example5',
    fileType: file5.type,
    fileSize: file5.size,
    status: 'Uploaded',
  },
];
const filesMapInitial = () => {
  const initialMap = new Map<File, FileAttributeProps>();
  filesInitial.forEach((file, index) => initialMap.set(file, filesAttributesInitial[index]));
  return initialMap;
};
//</editor-fold>

export const FileInputWithStatusTemplate = (props: FileInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = React.useState<File[]>([...filesInitial]);
  const [fileAttributesMap, setFileAttributesMap] = React.useState(filesMapInitial());

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

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
            dimension={props.dimension}
            filesLayoutCssMixin={fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Для отображения статуса загрузки файла или ошибки при валидации, компонент файла через параметр status принимает
        состояния Uploaded, Loading, Error, Queue, а через параметр error - текст ошибки.
      </T>
      <FileInput
        dimension={props.dimension}
        disabled={props.disabled}
        width={props.dimension === 'xl' ? '480px' : '288px'}
        title={props.dimension === 'xl' ? \`Загрузите файлы\` : 'Добавьте файлы'}
        ref={inputRef}
        onInput={handleChange}
        files={fileList}
      >
        {renderFileList()}
      </FileInput>
    </>
  );
};
`,FileInputCustom_templateraw_namespaceObject=`import * as React from 'react';
import type { css } from 'styled-components';
import styled from 'styled-components';

import { Button, FileInput, fullWidthPositionMixin, T } from '@admiral-ds/react-ui';
import type { FileInputProps, RenderFileInputProps } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileOutline } from '@admiral-ds/icons/build/system/AttachFileOutline.svg';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

//<editor-fold desc="MyFileItem">
interface MyFileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  filesLayoutCssMixin?: ReturnType<typeof css>;
  onCloseIconClick?: () => void;
}
const MyFileItem = styled.div<{ filesLayoutCssMixin?: ReturnType<typeof css> }>\`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: nowrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  margin: 0;
  padding: 12px 16px;
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
  margin-top: 16px;
  \${(p) => p.filesLayoutCssMixin}

  &:hover {
    background-color: var(--admiral-color-Opacity_Hover, \${(p) => p.theme.color['Opacity/Hover']});
    color: var(--admiral-color-Magenta_Magenta60Main, \${(p) => p.theme.color['Magenta/Magenta 60 Main']});
  }
\`;

const CloseIcon = styled.div\`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 50']});
  }
\`;
const CustomFileItem = ({ children, filesLayoutCssMixin, onCloseIconClick, ...props }: MyFileItemProps) => {
  const handleCloseIconClick = () => {
    onCloseIconClick?.();
  };

  return (
    <MyFileItem filesLayoutCssMixin={filesLayoutCssMixin} {...props}>
      {children}
      <CloseIcon onClick={handleCloseIconClick}>
        <CloseOutline />
      </CloseIcon>
    </MyFileItem>
  );
};
//</editor-fold>

export const FileInputCustomTemplate = (props: FileInputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = React.useState<File[]>([]);

  const filesAreEqual = (file1: File, file2: File) =>
    file1.name === file2.name &&
    file1.size === file2.size &&
    file1.type === file2.type &&
    file1.lastModified === file2.lastModified;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      }
      return acc;
    }, []);
    setFileList([...updatedFileList, ...userSelectedFileList]);
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const updatedFileList = fileList.filter((file) => !filesAreEqual(file, fileToRemove));

    setFileList(updatedFileList);
  };

  const renderFileList = () => {
    return fileList.map((file) => (
      <CustomFileItem
        key={file.name}
        onCloseIconClick={() => handleRemoveFile(file)}
        filesLayoutCssMixin={fullWidthPositionMixin}
      >
        {file.name}
      </CustomFileItem>
    ));
  };

  const renderCustomInput = (options: RenderFileInputProps) => {
    const handleButtonClick = () => options.onQueryUpload();
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ textAlign: 'justify' }}>Загрузите файлы изображений</p>
        <Button onClick={handleButtonClick}>
          <AttachFileOutline />
          Загрузить документы
        </Button>
      </div>
    );
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие текстовые
        инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки реакт-компонента.
        Для отображения выбранных файлов можно использовать кастомные компоненты.
      </T>
      <FileInput
        dimension={props.dimension}
        disabled={props.disabled}
        width="260px"
        ref={inputRef}
        onInput={handleChange}
        renderCustomFileInput={renderCustomInput}
        files={fileList}
      >
        {renderFileList()}
      </FileInput>
    </>
  );
};
`,FileInputCustomFileType_templateraw_namespaceObject=`import { useRef, useState } from 'react';

import { FileInput, FileItem, fullWidthPositionMixin, T } from '@admiral-ds/react-ui';
import type { FileInputProps, FileAttributeProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as PDFSolid } from '@admiral-ds/icons/build/documents/PDFSolid.svg';
import { ReactComponent as PPTSolid } from '@admiral-ds/icons/build/documents/PPTSolid.svg';
import { ReactComponent as FileWordSolid } from '@admiral-ds/icons/build/documents/FileWordSolid.svg';
import { ReactComponent as XLSSolid } from '@admiral-ds/icons/build/documents/XLSSolid.svg';
import { ReactComponent as DocsSolid } from '@admiral-ds/icons/build/documents/DocsSolid.svg';
import { ReactComponent as JpgSolid } from '@admiral-ds/icons/build/documents/JpgSolid.svg';
import { ReactComponent as ZIPSolid } from '@admiral-ds/icons/build/documents/ZIPSolid.svg';
import { ReactComponent as FileCSVSolid } from '@admiral-ds/icons/build/documents/FileCSVSolid.svg';
import { ReactComponent as EmailsOutline } from '@admiral-ds/icons/build/category/EmailsOutline.svg';
import { uid } from '#src/components/common/uid';

const filesAreEqual = (file1: File, file2: File) =>
  file1.name === file2.name &&
  file1.size === file2.size &&
  file1.type === file2.type &&
  file1.lastModified === file2.lastModified;

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * https://www.iana.org/assignments/media-types/media-types.xhtml
 * @param type {string}
 */
const getCustomFileType = (type: string) => {
  if (type.startsWith('message/')) {
    return 'MSG';
  }
  switch (type) {
    case 'image/jpeg':
      return 'JPEG';
    case 'image/png':
    case 'image/apng':
      return 'PNG';
    case 'image/tiff':
      return 'TIFF';
    case 'image/svg+xml':
      return 'SVG';
    case 'image/gif':
      return 'GIF';
    case 'image/webp':
      return 'WEBP';
    case 'application/pdf':
      return 'PDF';
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PPT';
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'XLS';
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'Word';
    case 'application/zip':
      return 'ZIP';
    case 'text/csv':
      return 'CSV';
    default:
      return 'Docs';
  }
};

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#important_mime_types_for_web_developers
 * https://www.iana.org/assignments/media-types/media-types.xhtml
 * @param type {string}
 */
const getCustomFileTypeIcon = (type: string) => {
  if (type.startsWith('message/')) {
    return EmailsOutline;
  }
  switch (type) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/tiff':
    case 'image/svg+xml':
    case 'image/apng':
    case 'image/avif':
    case 'image/gif':
    case 'image/webp':
      return JpgSolid;
    case 'application/pdf':
      return PDFSolid;
    case 'application/vnd.ms-powerpoint':
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return PPTSolid;
    case 'application/vnd.ms-excel':
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return XLSSolid;
    case 'application/msword':
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return FileWordSolid;
    case 'application/zip':
      return ZIPSolid;
    case 'text/csv':
      return FileCSVSolid;
    default:
      return DocsSolid;
  }
};

export const FileInputCustomFileTypeTemplate = ({
  dimension = 'xl',
  width = '480px',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FileInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<File[]>([]);
  const [fileAttributesMap, setFileAttributesMap] = useState(new Map<File, FileAttributeProps>());
  const handlePreviewIconClick = (file: File) => {
    // eslint-disable-next-line no-console
    console.log(\`Preview icon on file "\${file.name}" was clicked\`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userSelectedFileList = Array.from(e.target.files || []);
    // eslint-disable-next-line no-console
    userSelectedFileList.forEach((file) => console.log(\`change \${file.name}\`));
    const updatedFileAttributesMap = new Map<File, FileAttributeProps>(fileAttributesMap);
    const updatedFileList = fileList.reduce((acc: File[], file) => {
      if (userSelectedFileList.findIndex((userFile) => filesAreEqual(userFile, file)) === -1) {
        acc.push(file);
      } else {
        updatedFileAttributesMap.delete(file);
      }
      return acc;
    }, []);
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
  };

  const renderFileList = () => {
    return fileList.map((file) => {
      const attributes = fileAttributesMap.get(file);

      if (attributes) {
        // eslint-disable-next-line no-console
        console.log(attributes.fileType);
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
            formatFileTypeInfo={getCustomFileType}
            formatFileTypeIcon={getCustomFileTypeIcon}
            onCloseIconClick={() => handleRemoveFile(file)}
            onPreviewIconClick={attributes.onPreviewIconClick}
            dimension={dimension}
            filesLayoutCssMixin={fullWidthPositionMixin}
          />
        );
      }
    });
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Функцию загрузки файла можно “повесить” на другие компоненты, например, кнопки, сделав соответствующие текстовые
        инструкции. В этом случае нужно воспользоваться методом renderCustomFileInput для отрисовки реакт-компонента.
        Для отображения выбранных файлов можно использовать кастомные компоненты.
      </T>
      <FileInput
        dimension={dimension}
        disabled={props.disabled}
        width={width}
        title="Добавьте файлы"
        ref={inputRef}
        onInput={handleChange}
        files={fileList}
      >
        {renderFileList()}
      </FileInput>
    </>
  );
};
`;function FileInput_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function FileInput_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function FileInput_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function FileInput_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function FileInput_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function FileInput_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){FileInput_stories_define_property(target,key,source[key])})}return target}function FileInput_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function FileInput_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FileInput_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function FileInput_stories_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=FileInput_stories_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function FileInput_stories_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function FileInput_stories_sliced_to_array(arr,i){return FileInput_stories_array_with_holes(arr)||FileInput_stories_iterable_to_array_limit(arr,i)||FileInput_stories_unsupported_iterable_to_array(arr,i)||FileInput_stories_non_iterable_rest()}function FileInput_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function FileInput_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return FileInput_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return FileInput_stories_array_like_to_array(o,minLen)}}function FileInput_stories_templateObject(){var data=FileInput_stories_tagged_template_literal([`
  height: 40px;
`]);return FileInput_stories_templateObject=function _templateObject(){return data},data}function FileInput_stories_templateObject1(){var data=FileInput_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return FileInput_stories_templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(FileInput_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(FileInput_stories_templateObject1());let FileInput_stories={title:"Admiral-2.1/Input/FileInput",decorators:void 0,component:FileInput.zp,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27281"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27389"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27519"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27563"}],componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент позволяет выбирать локальные файлы пользователя для последующей загрузки их на сервер. Выбирать файлы можно как через нажатие на компонент, так и через Drag and Drop на компонент. Компонент имеет две разновидности отображения — размер XL с превью изображения или иконкой формата файла и размер M без превью, передается параметром fileDimension.",(0,jsx_runtime.jsx)(Separator,{}),"Для отображения компонента в другом варианте можно использовать параметр renderCustomFileInput.",(0,jsx_runtime.jsx)(Separator,{}),"В компоненте есть возможность синхронизировать внешний стейт списка файлов с внутренним стейтом нативного инпута через параметр files."]})},{}),layout:"centered"},argTypes:{dimension:{options:["xl","m"],control:{type:"radio"}},title:{control:!1},disabled:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},width:{control:{type:"text"}},description:{control:!1},files:{control:!1},extraText:{control:!1}}};var FileInputDimensionXL={render:function(_param){var _param_width=_param.width,_param_dimension=_param.dimension,props=FileInput_stories_object_without_properties(_param,["width","dimension"]),CSSCustomProps=FileInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(FileInputBaseTemplate,FileInput_stories_object_spread_props(FileInput_stories_object_spread({},props),{width:void 0===_param_width?"480px":_param_width,dimension:void 0===_param_dimension?"xl":_param_dimension,CSSCustomProps:CSSCustomProps}))},name:"FileInput XL",parameters:{docs:{source:{code:FileInputBase_templateraw_namespaceObject}}}},FileInputDimensionM={render:function(_param){var _param_width=_param.width,_param_dimension=_param.dimension,props=FileInput_stories_object_without_properties(_param,["width","dimension"]);return(0,jsx_runtime.jsx)(FileInputBaseTemplate,FileInput_stories_object_spread_props(FileInput_stories_object_spread({},props),{width:void 0===_param_width?"350px":_param_width,dimension:void 0===_param_dimension?"m":_param_dimension}))},name:"FileInput M",parameters:{docs:{source:{code:FileInputBase_templateraw_namespaceObject}}}},FileInputWithStatus={render:function(props){return(0,jsx_runtime.jsx)(FileInputWithStatusTemplate,FileInput_stories_object_spread({},props))},name:"FileInput со статусом загрузки файлов",parameters:{docs:{source:{code:FileInputWithStatus_templateraw_namespaceObject}}}},FileInputCustom={render:function(props){return(0,jsx_runtime.jsx)(FileInputCustomTemplate,FileInput_stories_object_spread_props(FileInput_stories_object_spread({},props),{dimension:"m"}))},name:"FileInput. Кастомизация",parameters:{docs:{source:{code:FileInputCustom_templateraw_namespaceObject}}}},FileInputCustomFileType={render:function(_param){var _param_width=_param.width,_param_dimension=_param.dimension,props=FileInput_stories_object_without_properties(_param,["width","dimension"]),CSSCustomProps=FileInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(FileInputCustomFileTypeTemplate,FileInput_stories_object_spread_props(FileInput_stories_object_spread({},props),{width:void 0===_param_width?"480px":_param_width,dimension:void 0===_param_dimension?"xl":_param_dimension,CSSCustomProps:CSSCustomProps}))},name:"FileInput. Кастомизация типов файлов",parameters:{docs:{source:{code:FileInputCustomFileType_templateraw_namespaceObject}}}};FileInputDimensionXL.parameters={...FileInputDimensionXL.parameters,docs:{...FileInputDimensionXL.parameters?.docs,source:{originalSource:`{
  render: FileInputDimensionXLStory,
  name: 'FileInput XL',
  parameters: {
    docs: {
      source: {
        code: FileInputBaseRaw
      }
    }
  }
}`,...FileInputDimensionXL.parameters?.docs?.source}}},FileInputDimensionM.parameters={...FileInputDimensionM.parameters,docs:{...FileInputDimensionM.parameters?.docs,source:{originalSource:`{
  render: FileInputDimensionMStory,
  name: 'FileInput M',
  parameters: {
    docs: {
      source: {
        code: FileInputBaseRaw
      }
    }
  }
}`,...FileInputDimensionM.parameters?.docs?.source}}},FileInputWithStatus.parameters={...FileInputWithStatus.parameters,docs:{...FileInputWithStatus.parameters?.docs,source:{originalSource:`{
  render: FileInputWithStatusStory,
  name: 'FileInput со статусом загрузки файлов',
  parameters: {
    docs: {
      source: {
        code: FileInputWithStatusRaw
      }
    }
  }
}`,...FileInputWithStatus.parameters?.docs?.source}}},FileInputCustom.parameters={...FileInputCustom.parameters,docs:{...FileInputCustom.parameters?.docs,source:{originalSource:`{
  render: FileInputCustomStory,
  name: 'FileInput. Кастомизация',
  parameters: {
    docs: {
      source: {
        code: FileInputCustomRaw
      }
    }
  }
}`,...FileInputCustom.parameters?.docs?.source}}},FileInputCustomFileType.parameters={...FileInputCustomFileType.parameters,docs:{...FileInputCustomFileType.parameters?.docs,source:{originalSource:`{
  render: FileInputCustomFileTypeStory,
  name: 'FileInput. Кастомизация типов файлов',
  parameters: {
    docs: {
      source: {
        code: FileInputCustomFileTypeRaw
      }
    }
  }
}`,...FileInputCustomFileType.parameters?.docs?.source}}};let __namedExportsOrder=["FileInputDimensionXL","FileInputDimensionM","FileInputWithStatus","FileInputCustom","FileInputCustomFileType"]},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-input-FileInput-stories-FileInput-stories.8261719b.iframe.bundle.js.map