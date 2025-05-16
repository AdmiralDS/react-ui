"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7055],{"./node_modules/@admiral-ds/icons/build/service/CheckOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCheckOutline=function SvgCheckOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-7.71c-4.26 0-7.71 3.45-7.71 7.71 0 4.25 3.45 7.7 7.71 7.7 4.25 0 7.7-3.45 7.7-7.7 0-4.26-3.45-7.71-7.7-7.71m-.21 10.98c-.27.29-.73.3-1 .02l-2.84-2.84a.66.66 0 0 1 0-.92c.25-.25.67-.25.92 0l2.4 2.4 3.99-4.34c.24-.27.65-.28.92-.05.25.24.27.66.04.93z"})))};__webpack_require__.p},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Special/Static White"'},{value:'"Neutral/Neutral 50"'},{value:'"Primary/Primary 70"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tag/stories/Tag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColorsExample:()=>CustomColorsExample,IconExample:()=>IconExample,Playground:()=>Playground,StateExample:()=>StateExample,StatusBackgroundExample:()=>StatusBackgroundExample,StatusExample:()=>StatusExample,TooltipExample:()=>TooltipExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tag_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Tag=__webpack_require__("./src/components/Tag/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var TagPlaygroundTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(Tag.v,_object_spread_props(_object_spread({},props),{children:"Playground"}))})})};try{TagPlaygroundTemplate.displayName="TagPlaygroundTemplate",TagPlaygroundTemplate.__docgenInfo={description:"",displayName:"TagPlaygroundTemplate",props:{kind:{defaultValue:null,description:`Тип тэга. Можно выбрать из предложенных вариантов, либо задать свои цвета для тэга.
В случае когда статус задается через статусную метку (кружок), свойство background отвечает за цвет статусной метки.
В случае когда статус задается через цвет фона и обводки, свойство background отвечает за цвет фона,
свойство border отвечает за цвет обводки, свойство backgroundHover отвечает за цвет фона при ховере в случае активного тэга.`,name:"kind",required:!1,type:{name:"TagKind | { background: string; border?: string; backgroundHover?: string; } | undefined"}},statusViaBackground:{defaultValue:null,description:`Отображение статуса через цвет обводки и фона. По умолчанию, при statusViaBackground = false, отображение статуса
происходит через цветную статусную метку (цветной кружок рядом с текстом)`,name:"statusViaBackground",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Отображение иконки. Иконка отображается только по левому краю и при условии, что статус отображается через цвет обводки и фона",name:"icon",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"Высота тэга",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},width:{defaultValue:null,description:"Ширина тэга",name:"width",required:!1,type:{name:"string | number"}},as:{defaultValue:null,description:`Позволяет рендерить компонент, используя другой тег HTML (https://styled-components.com/docs/api#as-polymorphic-prop).
В storybook в качестве примера приведены несколько возможных вариантов этого параметра (кроме них можно использовать любой другой HTML тег).`,name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/stories/TagPlayground.template.tsx#TagPlaygroundTemplate"]={docgenInfo:TagPlaygroundTemplate.__docgenInfo,name:"TagPlaygroundTemplate",path:"src/components/Tag/stories/TagPlayground.template.tsx#TagPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var T=__webpack_require__("./src/components/T/index.tsx"),Tags=__webpack_require__("./src/components/Tags/index.tsx"),clickHandler=function(){return console.log("click active tag")},TagStatusTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Тэг может иметь цветную статусную метку, определяемую параметром kind."}),(0,jsx_runtime.jsxs)(Tags.Y,{children:[(0,jsx_runtime.jsx)(Tag.v,{onClick:clickHandler,children:"Neutral"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:clickHandler,kind:"success",children:"Success"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:clickHandler,kind:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:clickHandler,as:"span",kind:"danger",children:"Danger"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:clickHandler,kind:"warning",children:"Warning"})]}),(0,jsx_runtime.jsxs)(Tags.Y,{dimension:"s",style:{marginTop:24},children:[(0,jsx_runtime.jsx)(Tag.v,{children:"Neutral"}),(0,jsx_runtime.jsx)(Tag.v,{kind:"success",children:"Success"}),(0,jsx_runtime.jsx)(Tag.v,{kind:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(Tag.v,{as:"span",kind:"danger",children:"Danger"}),(0,jsx_runtime.jsx)(Tag.v,{kind:"warning",children:"Warning"})]})]})};function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`px;
`]);return _templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.$height||8}),TagStatusBackground_template_clickHandler=function(){return console.log("click active tag")},TagStatusBackgroundTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Тэг также может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент.",(0,jsx_runtime.jsx)(Separator,{}),"Чтобы отобразить статус через цвет обводки и фона необходимо передать в компонент параметр statusViaBackground, установленный в true."]}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsxs)(Tags.Y,{children:[(0,jsx_runtime.jsx)(Tag.v,{onClick:TagStatusBackground_template_clickHandler,statusViaBackground:!0,children:"Neutral"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:TagStatusBackground_template_clickHandler,statusViaBackground:!0,kind:"success",children:"Success"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:TagStatusBackground_template_clickHandler,statusViaBackground:!0,kind:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:TagStatusBackground_template_clickHandler,statusViaBackground:!0,kind:"danger",children:"Danger"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:TagStatusBackground_template_clickHandler,statusViaBackground:!0,kind:"warning",children:"Warning"})]}),(0,jsx_runtime.jsxs)(Tags.Y,{dimension:"s",style:{marginTop:24},children:[(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,children:"Neutral"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,kind:"success",children:"Success"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,kind:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,kind:"danger",children:"Danger"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,kind:"warning",children:"Warning"})]})]})},light=__webpack_require__("./src/components/themes/light/index.ts");function TagCustomColors_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TagCustomColors_template_templateObject(){var data=TagCustomColors_template_tagged_template_literal([`
  height: `,`px;
`]);return TagCustomColors_template_templateObject=function _templateObject(){return data},data}var TagCustomColors_template_Separator=styled_components_browser_esm.Ay.div(TagCustomColors_template_templateObject(),function(p){return p.$height||8}),TagCustomColors_template_clickHandler=function(){return console.log("click active tag")},TagCustomColorsTemplate=function(){var theme=(0,styled_components_browser_esm.DP)()||light.d;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Тэг может иметь цветную статусную метку. Помимо предложенных вариантов метка может быть окрашена в любой цвет на усмотрение пользователя. Для этого в качестве значения параметра kind нужно указать объект со свойством background, содержащим значение кастомного цвета метки.",(0,jsx_runtime.jsx)(TagCustomColors_template_Separator,{})," Либо тэг может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент. В этом случае, помимо предложенных вариантов, фон и обводку тега можно окрасить в любые цвета. Рекомендуются цветовые пары (фон, обводка) из представленных в палитре цветов по следующей схеме: фон - color 10, обводка - основной цвет минус 1 шаг вниз. Чтобы задать кастомные цвета фона и обводки тега нужно в качестве значения параметра kind указать объект со свойствами background и border, содержащими соответственно кастомные значения цветов фона и обводки тега.",(0,jsx_runtime.jsx)(TagCustomColors_template_Separator,{}),"Также помимо свойств background и border пользователь может задать свойство backgroundHover. Данное свойство отвечает за цвет фона тега при ховере, в случае если тег является активным. Рекомендуется в качестве значения backgroundHover выбирать из палитры цветов цвет, который на 1 шаг темнее цвета фона."]}),(0,jsx_runtime.jsx)(TagCustomColors_template_Separator,{$height:24}),(0,jsx_runtime.jsxs)(Tags.Y,{children:[(0,jsx_runtime.jsx)(Tag.v,{onClick:TagCustomColors_template_clickHandler,kind:{background:"var(--admiral-color-Purple_Purple60Main, ".concat(theme.color["Purple/Purple 60 Main"],")")},children:"Purple"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:TagCustomColors_template_clickHandler,statusViaBackground:!0,kind:{background:"var(--admiral-color-Teal_Teal10, ".concat(theme.color["Teal/Teal 10"],")"),border:"var(--admiral-color-Teal_Teal50, ".concat(theme.color["Teal/Teal 50"],")"),backgroundHover:"var(--admiral-color-Teal_Teal20, ".concat(theme.color["Teal/Teal 20"],")")},children:"Teal"}),(0,jsx_runtime.jsx)(Tag.v,{onClick:TagCustomColors_template_clickHandler,statusViaBackground:!0,kind:{background:"var(--admiral-color-Magenta_Magenta10, ".concat(theme.color["Magenta/Magenta 10"],")"),border:"var(--admiral-color-Magenta_Magenta50, ".concat(theme.color["Magenta/Magenta 50"],")"),backgroundHover:"var(--admiral-color-Magenta_Magenta20, ".concat(theme.color["Magenta/Magenta 20"],")")},children:"Magenta"})]}),(0,jsx_runtime.jsxs)(Tags.Y,{dimension:"s",style:{marginTop:24},children:[(0,jsx_runtime.jsx)(Tag.v,{kind:{background:"var(--admiral-color-Purple_Purple60Main, ".concat(theme.color["Purple/Purple 60 Main"],")")},children:"Purple"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,kind:{background:"var(--admiral-color-Teal_Teal10, ".concat(theme.color["Teal/Teal 10"],")"),border:"var(--admiral-color-Teal_Teal50, ".concat(theme.color["Teal/Teal 50"],")")},children:"Teal"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,kind:{background:"var(--admiral-color-Magenta_Magenta10, ".concat(theme.color["Magenta/Magenta 10"],")"),border:"var(--admiral-color-Magenta_Magenta50, ".concat(theme.color["Magenta/Magenta 50"],")")},children:"Magenta"})]})]})};function TagState_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TagState_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TagState_template_define_property(target,key,source[key])})}return target}function TagState_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TagState_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TagState_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TagState_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TagState_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TagState_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var TagState_template_clickHandler=function(){return console.log("click active tag")},TagStateTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TagState_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Тэги могут быть как активными и служить, например, каталагизаторами, так и пассивными, просто отображая принадлежность элемента к некоторой группе элементов имеющих общий признак."}),(0,jsx_runtime.jsxs)(Tags.Y,{children:[(0,jsx_runtime.jsx)(Tag.v,TagState_template_object_spread_props(TagState_template_object_spread({},props),{onClick:TagState_template_clickHandler,children:"Active"})),(0,jsx_runtime.jsx)(Tag.v,TagState_template_object_spread_props(TagState_template_object_spread({},props),{children:"Passive"}))]})]})};try{TagStateTemplate.displayName="TagStateTemplate",TagStateTemplate.__docgenInfo={description:"",displayName:"TagStateTemplate",props:{kind:{defaultValue:null,description:`Тип тэга. Можно выбрать из предложенных вариантов, либо задать свои цвета для тэга.
В случае когда статус задается через статусную метку (кружок), свойство background отвечает за цвет статусной метки.
В случае когда статус задается через цвет фона и обводки, свойство background отвечает за цвет фона,
свойство border отвечает за цвет обводки, свойство backgroundHover отвечает за цвет фона при ховере в случае активного тэга.`,name:"kind",required:!1,type:{name:"TagKind | { background: string; border?: string; backgroundHover?: string; } | undefined"}},statusViaBackground:{defaultValue:null,description:`Отображение статуса через цвет обводки и фона. По умолчанию, при statusViaBackground = false, отображение статуса
происходит через цветную статусную метку (цветной кружок рядом с текстом)`,name:"statusViaBackground",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Отображение иконки. Иконка отображается только по левому краю и при условии, что статус отображается через цвет обводки и фона",name:"icon",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"Высота тэга",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},width:{defaultValue:null,description:"Ширина тэга",name:"width",required:!1,type:{name:"string | number"}},as:{defaultValue:null,description:`Позволяет рендерить компонент, используя другой тег HTML (https://styled-components.com/docs/api#as-polymorphic-prop).
В storybook в качестве примера приведены несколько возможных вариантов этого параметра (кроме них можно использовать любой другой HTML тег).`,name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tag/stories/TagState.template.tsx#TagStateTemplate"]={docgenInfo:TagStateTemplate.__docgenInfo,name:"TagStateTemplate",path:"src/components/Tag/stories/TagState.template.tsx#TagStateTemplate"})}catch(__react_docgen_typescript_loader_error){}var TagTooltip_template_clickHandler=function(){return console.log("click active tag")},TagTooltipTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"В случае ограниченного пространства используется тултип."}),(0,jsx_runtime.jsxs)(Tags.Y,{children:[(0,jsx_runtime.jsx)(Tag.v,{width:150,onClick:TagTooltip_template_clickHandler,children:"Если текст длинее ширины тэга, добавляется тултип"}),(0,jsx_runtime.jsx)(Tag.v,{width:150,children:"Если текст длинее ширины тэга, добавляется тултип "})]})]})},CheckOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CheckOutline.svg"),TagIcon_template_clickHandler=function(){return console.log("click active tag")},TagIconTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Тэги могут быть с иконками, но только в том случае, если статус отображается через цвет обводки и фона (параметр statusViaBackground установлен в true)."}),(0,jsx_runtime.jsxs)(Tags.Y,{children:[(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),children:"Neutral"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"success",children:"Success"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"danger",children:"Danger"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"warning",children:"Warning"})]}),(0,jsx_runtime.jsxs)(Tags.Y,{dimension:"s",style:{marginTop:24},children:[(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),children:"Neutral"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"success",children:"Success"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"primary",children:"Primary"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"danger",children:"Danger"}),(0,jsx_runtime.jsx)(Tag.v,{statusViaBackground:!0,onClick:TagIcon_template_clickHandler,icon:(0,jsx_runtime.jsx)(CheckOutline.h,{}),kind:"warning",children:"Warning"})]})]})};let TagPlayground_templateraw_namespaceObject=`import * as React from 'react';
import { Tag } from '@admiral-ds/react-ui';
import type { TagProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const TagPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TagProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <>
      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
        <Tag {...props}>Playground</Tag>
      </ThemeProvider>
    </>
  );
};
`,TagStatus_templateraw_namespaceObject=`import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagStatusTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Тэг может иметь цветную статусную метку, определяемую параметром kind.
      </T>
      <Tags>
        <Tag onClick={clickHandler}>Neutral</Tag>
        <Tag onClick={clickHandler} kind="success">
          Success
        </Tag>
        <Tag onClick={clickHandler} kind="primary">
          Primary
        </Tag>
        <Tag onClick={clickHandler} as="span" kind="danger">
          Danger
        </Tag>
        <Tag onClick={clickHandler} kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag>Neutral</Tag>
        <Tag kind="success">Success</Tag>
        <Tag kind="primary">Primary</Tag>
        <Tag as="span" kind="danger">
          Danger
        </Tag>
        <Tag kind="warning">Warning</Tag>
      </Tags>
    </>
  );
};
`,TagStatusBackground_templateraw_namespaceObject=`import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagStatusBackgroundTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Тэг также может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент.
        <Separator />
        Чтобы отобразить статус через цвет обводки и фона необходимо передать в компонент параметр statusViaBackground,
        установленный в true.
      </T>
      <Separator $height={24} />
      <Tags>
        <Tag onClick={clickHandler} statusViaBackground>
          Neutral
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="success">
          Success
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="primary">
          Primary
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="danger">
          Danger
        </Tag>
        <Tag onClick={clickHandler} statusViaBackground kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag statusViaBackground>Neutral</Tag>
        <Tag statusViaBackground kind="success">
          Success
        </Tag>
        <Tag statusViaBackground kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground kind="warning">
          Warning
        </Tag>
      </Tags>
    </>
  );
};
`,TagCustomColors_templateraw_namespaceObject=`import * as React from 'react';
import { Tag, Tags, LIGHT_THEME, T } from '@admiral-ds/react-ui';
import styled, { useTheme } from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagCustomColorsTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Тэг может иметь цветную статусную метку. Помимо предложенных вариантов метка может быть окрашена в любой цвет на
        усмотрение пользователя. Для этого в качестве значения параметра kind нужно указать объект со свойством
        background, содержащим значение кастомного цвета метки.
        <Separator /> Либо тэг может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой
        акцент. В этом случае, помимо предложенных вариантов, фон и обводку тега можно окрасить в любые цвета.
        Рекомендуются цветовые пары (фон, обводка) из представленных в палитре цветов по следующей схеме: фон - color
        10, обводка - основной цвет минус 1 шаг вниз. Чтобы задать кастомные цвета фона и обводки тега нужно в качестве
        значения параметра kind указать объект со свойствами background и border, содержащими соответственно кастомные
        значения цветов фона и обводки тега.
        <Separator />
        Также помимо свойств background и border пользователь может задать свойство backgroundHover. Данное свойство
        отвечает за цвет фона тега при ховере, в случае если тег является активным. Рекомендуется в качестве значения
        backgroundHover выбирать из палитры цветов цвет, который на 1 шаг темнее цвета фона.
      </T>
      <Separator $height={24} />
      <Tags>
        <Tag
          onClick={clickHandler}
          kind={{ background: \`var(--admiral-color-Purple_Purple60Main, \${theme.color['Purple/Purple 60 Main']})\` }}
        >
          Purple
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: \`var(--admiral-color-Teal_Teal10, \${theme.color['Teal/Teal 10']})\`,
            border: \`var(--admiral-color-Teal_Teal50, \${theme.color['Teal/Teal 50']})\`,
            backgroundHover: \`var(--admiral-color-Teal_Teal20, \${theme.color['Teal/Teal 20']})\`,
          }}
        >
          Teal
        </Tag>
        <Tag
          onClick={clickHandler}
          statusViaBackground
          kind={{
            background: \`var(--admiral-color-Magenta_Magenta10, \${theme.color['Magenta/Magenta 10']})\`,
            border: \`var(--admiral-color-Magenta_Magenta50, \${theme.color['Magenta/Magenta 50']})\`,
            backgroundHover: \`var(--admiral-color-Magenta_Magenta20, \${theme.color['Magenta/Magenta 20']})\`,
          }}
        >
          Magenta
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag kind={{ background: \`var(--admiral-color-Purple_Purple60Main, \${theme.color['Purple/Purple 60 Main']})\` }}>
          Purple
        </Tag>
        <Tag
          statusViaBackground
          kind={{
            background: \`var(--admiral-color-Teal_Teal10, \${theme.color['Teal/Teal 10']})\`,
            border: \`var(--admiral-color-Teal_Teal50, \${theme.color['Teal/Teal 50']})\`,
          }}
        >
          Teal
        </Tag>
        <Tag
          statusViaBackground
          kind={{
            background: \`var(--admiral-color-Magenta_Magenta10, \${theme.color['Magenta/Magenta 10']})\`,
            border: \`var(--admiral-color-Magenta_Magenta50, \${theme.color['Magenta/Magenta 50']})\`,
          }}
        >
          Magenta
        </Tag>
      </Tags>
    </>
  );
};
`,TagState_templateraw_namespaceObject=`import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';
import type { TagProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagStateTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TagProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Тэги могут быть как активными и служить, например, каталагизаторами, так и пассивными, просто отображая
        принадлежность элемента к некоторой группе элементов имеющих общий признак.
      </T>
      <Tags>
        <Tag {...props} onClick={clickHandler}>
          Active
        </Tag>
        <Tag {...props}>Passive</Tag>
      </Tags>
    </ThemeProvider>
  );
};
`,TagTooltip_templateraw_namespaceObject=`import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagTooltipTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        В случае ограниченного пространства используется тултип.
      </T>
      <Tags>
        <Tag width={150} onClick={clickHandler}>
          Если текст длинее ширины тэга, добавляется тултип
        </Tag>
        <Tag width={150}>Если текст длинее ширины тэга, добавляется тултип </Tag>
      </Tags>
    </>
  );
};
`,TagIcon_templateraw_namespaceObject=`import * as React from 'react';
import { Tag, Tags, T } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';

// eslint-disable-next-line no-console
const clickHandler = () => console.log('click active tag');

export const TagIconTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Тэги могут быть с иконками, но только в том случае, если статус отображается через цвет обводки и фона (параметр
        statusViaBackground установлен в true).
      </T>
      <Tags>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
      <Tags dimension="s" style={{ marginTop: 24 }}>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />}>
          Neutral
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="success">
          Success
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="primary">
          Primary
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="danger">
          Danger
        </Tag>
        <Tag statusViaBackground onClick={clickHandler} icon={<CheckOutline />} kind="warning">
          Warning
        </Tag>
      </Tags>
    </>
  );
};
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function Tag_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Tag_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Tag_stories_define_property(target,key,source[key])})}return target}function Tag_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Tag_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tag_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function Tag_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function Tag_stories_templateObject(){var data=Tag_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Tag_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Tag_stories_templateObject());let Tag_stories={title:"Admiral-2.1/Tag",decorators:void 0,component:Tag.v,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг загружаются все элементы имеющие эту метку (опционально)."})},{}),layout:"centered",design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530"}]},argTypes:{kind:{options:["neutral","primary","success","danger","warning"],control:{type:"radio"}},dimension:{options:["m","s"],control:{type:"radio"}},width:{control:{type:"text"}},statusViaBackground:{control:{type:"boolean"}},statusIcon:{control:!1},icon:{control:!1},as:{options:["div","span","button"],control:{type:"radio"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var Playground={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TagPlaygroundTemplate,Tag_stories_object_spread_props(Tag_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:TagPlayground_templateraw_namespaceObject}}},name:"Tag. Playground."},StatusExample={render:function(){return(0,jsx_runtime.jsx)(TagStatusTemplate,{})},parameters:{docs:{source:{code:TagStatus_templateraw_namespaceObject}}},name:"Tag. Статус через цветную статусную метку."},StatusBackgroundExample={render:function(){return(0,jsx_runtime.jsx)(TagStatusBackgroundTemplate,{})},parameters:{docs:{source:{code:TagStatusBackground_templateraw_namespaceObject}}},name:"Tag. Статус через цвет обводки и фона."},CustomColorsExample={render:function(){return(0,jsx_runtime.jsx)(TagCustomColorsTemplate,{})},parameters:{docs:{source:{code:TagCustomColors_templateraw_namespaceObject}}},name:"Tag. Кастомные цвета."},StateExample={render:function(){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TagStateTemplate,{CSSCustomProps:CSSCustomProps})},parameters:{docs:{source:{code:TagState_templateraw_namespaceObject}}},name:"Tag. Активный и пассивный."},TooltipExample={render:function(){return(0,jsx_runtime.jsx)(TagTooltipTemplate,{})},parameters:{docs:{source:{code:TagTooltip_templateraw_namespaceObject}}},name:"Tag. Тултип."},IconExample={render:function(){return(0,jsx_runtime.jsx)(TagIconTemplate,{})},parameters:{docs:{source:{code:TagIcon_templateraw_namespaceObject}}},name:"Tag. С иконкой."};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: TagPlaygroundRaw
      }
    }
  },
  name: 'Tag. Playground.'
}`,...Playground.parameters?.docs?.source}}},StatusExample.parameters={...StatusExample.parameters,docs:{...StatusExample.parameters?.docs,source:{originalSource:`{
  render: StatusStory,
  parameters: {
    docs: {
      source: {
        code: TagStatusRaw
      }
    }
  },
  name: 'Tag. Статус через цветную статусную метку.'
}`,...StatusExample.parameters?.docs?.source}}},StatusBackgroundExample.parameters={...StatusBackgroundExample.parameters,docs:{...StatusBackgroundExample.parameters?.docs,source:{originalSource:`{
  render: StatusBackgroundStory,
  parameters: {
    docs: {
      source: {
        code: TagStatusBackgroundRaw
      }
    }
  },
  name: 'Tag. Статус через цвет обводки и фона.'
}`,...StatusBackgroundExample.parameters?.docs?.source}}},CustomColorsExample.parameters={...CustomColorsExample.parameters,docs:{...CustomColorsExample.parameters?.docs,source:{originalSource:`{
  render: CustomColorsStory,
  parameters: {
    docs: {
      source: {
        code: TagCustomColorsRaw
      }
    }
  },
  name: 'Tag. Кастомные цвета.'
}`,...CustomColorsExample.parameters?.docs?.source}}},StateExample.parameters={...StateExample.parameters,docs:{...StateExample.parameters?.docs,source:{originalSource:`{
  render: StateStory,
  parameters: {
    docs: {
      source: {
        code: TagStateRaw
      }
    }
  },
  name: 'Tag. Активный и пассивный.'
}`,...StateExample.parameters?.docs?.source}}},TooltipExample.parameters={...TooltipExample.parameters,docs:{...TooltipExample.parameters?.docs,source:{originalSource:`{
  render: TooltipStory,
  parameters: {
    docs: {
      source: {
        code: TagTooltipRaw
      }
    }
  },
  name: 'Tag. Тултип.'
}`,...TooltipExample.parameters?.docs?.source}}},IconExample.parameters={...IconExample.parameters,docs:{...IconExample.parameters?.docs,source:{originalSource:`{
  render: IconStory,
  parameters: {
    docs: {
      source: {
        code: TagIconRaw
      }
    }
  },
  name: 'Tag. С иконкой.'
}`,...IconExample.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","StatusExample","StatusBackgroundExample","CustomColorsExample","StateExample","TooltipExample","IconExample"]},"./src/components/Tags/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Tags});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-flow: wrap;
  gap: 8px;
`]);return _templateObject=function _templateObject(){return data},data}var TagsWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject()),Tags=function(_param){var children=_param.children,width=_param.width,dimension=_param.dimension,kind=_param.kind,onClick=_param.onClick,props=_object_without_properties(_param,["children","width","dimension","kind","onClick"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TagsWrapper,_object_spread_props(_object_spread({},props),{children:react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children,function(child){return(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child)?(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(child,_object_spread_props(_object_spread({onClick:child.props.onClick||onClick,width:child.props.width||width,kind:child.props.kind||kind},child.props),{dimension:dimension})):null})}))};Tags.displayName="Tags";try{Tags.displayName="Tags",Tags.__docgenInfo={description:"",displayName:"Tags",props:{width:{defaultValue:null,description:"Ширина тэгов",name:"width",required:!1,type:{name:"string | number"}},dimension:{defaultValue:null,description:"Высота тэгов",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},kind:{defaultValue:null,description:"Тип тэгов",name:"kind",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"primary"'},{value:'"blue"'},{value:'"green"'},{value:'"orange"'},{value:'"red"'},{value:'"danger"'},{value:'"neutral"'},{value:'"warning"'}]}},onClick:{defaultValue:null,description:"Обработчик клика по тэгам",name:"onClick",required:!1,type:{name:"((event: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement, MouseEvent>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tags/index.tsx#Tags"]={docgenInfo:Tags.__docgenInfo,name:"Tags",path:"src/components/Tags/index.tsx#Tags"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-Tag-stories-Tag-stories.dedc9f29.iframe.bundle.js.map