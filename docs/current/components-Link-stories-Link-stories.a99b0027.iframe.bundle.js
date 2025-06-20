"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[6961],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/system/ArrowLeftOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgArrowLeftOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgArrowLeftOutline=function SvgArrowLeftOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M11.54 18.14c-.13.14-.3.21-.48.21-.16 0-.31-.05-.44-.17l-6.04-5.49a.7.7 0 0 1 0-1.04l6.04-5.49c.27-.24.68-.22.92.04.24.27.23.68-.04.92l-4.84 4.4h10.9c.36 0 .65.29.65.65s-.29.65-.65.65H6.66l4.84 4.4c.26.24.28.65.04.92"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgArrowRightOutline=function SvgArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M11.02 18.14c.12.14.3.21.48.21.16 0 .31-.05.43-.17l6.05-5.49c.31-.28.31-.76 0-1.04l-6.05-5.49a.646.646 0 0 0-.91.04.65.65 0 0 0 .04.92l4.83 4.4H5c-.36 0-.65.29-.65.65s.29.65.65.65h10.89l-4.83 4.4c-.26.24-.28.65-.04.92"})))};__webpack_require__.p},"./src/components/Link/LinkComponent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>LinkComponent,u:()=>LinkComponentCssMixin});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral30, `,`);
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral30, `,`);
  }
  user-select: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  & *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  border-radius: var(--admiral-border-radius-Medium, `,`);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:hover {
    color: var(--admiral-color-Primary_Primary70, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, `,`);
    }
  }
  &:focus {
    color: var(--admiral-color-Primary_Primary70, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, `,`);
    }
    outline-color: var(--admiral-color-Primary_Primary70, `,`);
  }
  &:active {
    color: var(--admiral-color-Primary_Primary80, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary80, `,`);
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject4=function _templateObject(){return data},data}var styleDisabledMixin=(0,styled_components_browser_esm.AH)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]}),styleColorMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){var theme=param.theme;return"secondary"===param.$appearance?"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")},function(param){var theme=param.theme;return"secondary"===param.$appearance?"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}),styleMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return(0,borderRadius.VM)(p.theme.shape)}),styleEventMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Primary/Primary 60 Main"]}),styleTextMixin=(0,styled_components_browser_esm.AH)(_templateObject4(),function(param){return"s"===param.$dimension?typography.Il["Body/Body 2 Long"]:typography.Il["Body/Body 1 Long"]});function LinkComponent_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LinkComponent_templateObject(){var data=LinkComponent_tagged_template_literal([`
  cursor: `,`;
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  position: relative;
  `,`;
  `,`;
  `,`;
  `,`
`]);return LinkComponent_templateObject=function _templateObject(){return data},data}function LinkComponent_templateObject1(){var data=LinkComponent_tagged_template_literal([`
  `,`
`]);return LinkComponent_templateObject1=function _templateObject(){return data},data}var LinkComponentCssMixin=(0,styled_components_browser_esm.AH)(LinkComponent_templateObject(),function(props){return props.disabled?"not-allowed":"pointer"},styleMixin,styleColorMixin,styleTextMixin,function(props){return props.disabled?styleDisabledMixin:styleEventMixin}),LinkComponent=styled_components_browser_esm.Ay.a(LinkComponent_templateObject1(),LinkComponentCssMixin)},"./src/components/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_LinkComponent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Link/LinkComponent.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Link=(0,__webpack_require__("./src/components/common/fixedForwardRef.ts").B)(function(_param,ref){var _obj,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_appearance=_param.appearance,_param_dimension=_param.dimension,as=_param.as,props=_object_without_properties(_param,["disabled","appearance","dimension","as"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LinkComponent__WEBPACK_IMPORTED_MODULE_2__.g,_object_spread_props(_object_spread({},props),(_define_property(_obj={$dimension:void 0===_param_dimension?"m":_param_dimension,ref:ref,tabIndex:disabled?-1:props.tabIndex},"tabIndex",disabled?"span":as),_define_property(_obj,"disabled",disabled),_define_property(_obj,"$appearance",void 0===_param_appearance?"primary":_param_appearance),_obj)))});Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{children:{defaultValue:null,description:"Текст ссылки",name:"children",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид ссылки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:null,description:"Отключение ссылки",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Размер ссылки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link/stories/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CssMixin:()=>CssMixin,IconLink:()=>IconLink,LinkAsProp:()=>LinkAsProp,Playground:()=>Playground,Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Link_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Link=__webpack_require__("./src/components/Link/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),T=__webpack_require__("./src/components/T/index.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`px;
`]);return _templateObject=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.$height||8}),LinkPlaygroundTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:["Компонент Link используется для навигации. Может применяться отдельно или внутри текста, с иконкой или без.",(0,jsx_runtime.jsx)(Separator,{}),"Ссылки бывают двух типов — Primary и Secondary, и двух размеров — M (24px) и S (20px)."]}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsx)(Link.N,_object_spread_props(_object_spread({},props),{href:"http://localhost:6006/?path=/story/example-link--playground",children:props.children||"Link"}))]})};try{LinkPlaygroundTemplate.displayName="LinkPlaygroundTemplate",LinkPlaygroundTemplate.__docgenInfo={description:"",displayName:"LinkPlaygroundTemplate",props:{children:{defaultValue:null,description:"Текст ссылки",name:"children",required:!0,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид ссылки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:null,description:"Отключение ссылки",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Размер ссылки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/stories/LinkPlayground.template.tsx#LinkPlaygroundTemplate"]={docgenInfo:LinkPlaygroundTemplate.__docgenInfo,name:"LinkPlaygroundTemplate",path:"src/components/Link/stories/LinkPlayground.template.tsx#LinkPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function LinkPrimary_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LinkPrimary_template_templateObject(){var data=LinkPrimary_template_tagged_template_literal([`
  margin-top: 10px;
`]);return LinkPrimary_template_templateObject=function _templateObject(){return data},data}var LinkPrimary_template_Separator=styled_components_browser_esm.Ay.div(LinkPrimary_template_templateObject()),LinkPrimaryTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - M"}),(0,jsx_runtime.jsx)(Link.N,{appearance:"primary",href:"",onClick:function(e){return e.preventDefault()},children:"Link"}),(0,jsx_runtime.jsx)(LinkPrimary_template_Separator,{}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - S"}),(0,jsx_runtime.jsx)(Link.N,{appearance:"primary",dimension:"s",href:"",onClick:function(e){return e.preventDefault()},children:"Link"})]})};function LinkSecondary_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LinkSecondary_template_templateObject(){var data=LinkSecondary_template_tagged_template_literal([`
  margin-top: 10px;
`]);return LinkSecondary_template_templateObject=function _templateObject(){return data},data}var LinkSecondary_template_Separator=styled_components_browser_esm.Ay.div(LinkSecondary_template_templateObject()),LinkSecondaryTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - M"}),(0,jsx_runtime.jsx)(Link.N,{appearance:"secondary",href:"",onClick:function(e){return e.preventDefault()},children:"Link"}),(0,jsx_runtime.jsx)(LinkSecondary_template_Separator,{}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Dimension - S"}),(0,jsx_runtime.jsx)(Link.N,{appearance:"secondary",dimension:"s",href:"",onClick:function(e){return e.preventDefault()},children:"Link"})]})},ArrowLeftOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ArrowLeftOutline.svg"),ArrowRightOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/ArrowRightOutline.svg");function LinkWithIcon_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LinkWithIcon_template_templateObject(){var data=LinkWithIcon_template_tagged_template_literal([`
  height: `,`px;
`]);return LinkWithIcon_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=LinkWithIcon_template_tagged_template_literal([`
  width: 10px;
  height: 12px;
`]);return _templateObject1=function _templateObject(){return data},data}var LinkWithIcon_template_Separator=styled_components_browser_esm.Ay.div(LinkWithIcon_template_templateObject(),function(p){return p.$height||8}),Divider=styled_components_browser_esm.Ay.div(_templateObject1()),LinkWithIconTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Link with icon. Dimension - m"}),(0,jsx_runtime.jsx)(LinkWithIcon_template_Separator,{}),(0,jsx_runtime.jsxs)(Link.N,{appearance:"primary",href:"",onClick:function(e){return e.preventDefault()},children:[(0,jsx_runtime.jsx)(ArrowLeftOutline.h,{width:24}),(0,jsx_runtime.jsx)(Divider,{}),"Link"]}),(0,jsx_runtime.jsx)(LinkWithIcon_template_Separator,{$height:24}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Link with icon. Dimension - s"}),(0,jsx_runtime.jsx)(LinkWithIcon_template_Separator,{}),(0,jsx_runtime.jsxs)(Link.N,{appearance:"secondary",dimension:"s",href:"",onClick:function(e){return e.preventDefault()},children:["Link",(0,jsx_runtime.jsx)(Divider,{}),(0,jsx_runtime.jsx)(ArrowRightOutline.h,{width:20})]})]})},LinkComponent=__webpack_require__("./src/components/Link/LinkComponent.ts"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js");function LinkMixin_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LinkMixin_template_templateObject(){var data=LinkMixin_template_tagged_template_literal([`
  width: 10px;
  height: 12px;
`]);return LinkMixin_template_templateObject=function _templateObject(){return data},data}function LinkMixin_template_templateObject1(){var data=LinkMixin_template_tagged_template_literal([`
  `,`
`]);return LinkMixin_template_templateObject1=function _templateObject(){return data},data}var LinkMixin_template_Divider=styled_components_browser_esm.Ay.div(LinkMixin_template_templateObject()),StyledRouterLink=(0,styled_components_browser_esm.Ay)(dist.N_)(LinkMixin_template_templateObject1(),LinkComponent.u),LinkMixinTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Помимо компонента Link библиотека предоставляет LinkComponentCssMixin - миксин, включающий в себя все стили компонента Link согласно дизайну Admiral 2.1. Данный миксин целесообразно применять, если пользователь хочет использовать свой собственный компонент, стилизованный согласно дизайну Admiral 2.1."}),(0,jsx_runtime.jsxs)(react_router_dist.fS,{children:[(0,jsx_runtime.jsx)(StyledRouterLink,{to:"",children:"Styled RouterLink - dimension m"}),(0,jsx_runtime.jsx)(LinkMixin_template_Divider,{}),(0,jsx_runtime.jsx)(StyledRouterLink,{to:"",$dimension:"s",children:"Styled RouterLink - dimension s"}),(0,jsx_runtime.jsx)(LinkMixin_template_Divider,{}),(0,jsx_runtime.jsx)(StyledRouterLink,{to:"",$appearance:"secondary",children:"Styled RouterLink - appearance secondary"})]})]})};function LinkAsProp_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function LinkAsProp_template_templateObject(){var data=LinkAsProp_template_tagged_template_literal([`
  width: 10px;
  height: 12px;
`]);return LinkAsProp_template_templateObject=function _templateObject(){return data},data}var LinkAsProp_template_Divider=styled_components_browser_esm.Ay.div(LinkAsProp_template_templateObject()),LinkAsPropTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",style:{marginBottom:"24px"},children:"Компонент Link является полиморфным компонентом. По умолчанию компонент Link возвращает стандартный html anchor элемент. Однако с помощью параметра as можно перезадать тип элемента, который будет отрисован. В качестве значения as можно передать строку, в которой будет прописан тип html элемента, или компонент."}),(0,jsx_runtime.jsx)(Link.N,{as:"button",type:"button",children:"Render button instead of anchor"}),(0,jsx_runtime.jsx)(LinkAsProp_template_Divider,{}),(0,jsx_runtime.jsx)(Link.N,{as:"div",dimension:"s",children:"Render div instead of anchor"}),(0,jsx_runtime.jsx)(LinkAsProp_template_Divider,{}),(0,jsx_runtime.jsx)(react_router_dist.fS,{children:(0,jsx_runtime.jsx)(Link.N,{as:dist.N_,to:"",children:"Render RouterLink instead of anchor"})})]})};let LinkPlayground_templateraw_namespaceObject=`import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import type { LinkProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;

export const LinkPlaygroundTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: LinkProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        Компонент Link используется для навигации. Может применяться отдельно или внутри текста, с иконкой или без.
        <Separator />
        Ссылки бывают двух типов — Primary и Secondary, и двух размеров — M (24px) и S (20px).
      </T>
      <Separator $height={24} />
      <Link {...props} href="http://localhost:6006/?path=/story/example-link--playground">
        {props.children || 'Link'}
      </Link>
    </ThemeProvider>
  );
};
`,LinkPrimary_templateraw_namespaceObject=`import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div\`
  margin-top: 10px;
\`;

export const LinkPrimaryTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Dimension - M
      </T>
      <Link appearance="primary" href="" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - S
      </T>
      <Link
        appearance="primary"
        dimension="s"
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
      >
        Link
      </Link>
    </>
  );
};
`,LinkSecondary_templateraw_namespaceObject=`import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div\`
  margin-top: 10px;
\`;

export const LinkSecondaryTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Dimension - M
      </T>
      <Link appearance="secondary" href="" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
        Link
      </Link>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Dimension - S
      </T>
      <Link
        appearance="secondary"
        dimension="s"
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
      >
        Link
      </Link>
    </>
  );
};
`,LinkWithIcon_templateraw_namespaceObject=`import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 8}px;
\`;
const Divider = styled.div\`
  width: 10px;
  height: 12px;
\`;

export const LinkWithIconTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - m
      </T>
      <Separator />
      <Link appearance="primary" href="" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
        <ArrowLeftOutline width={24} />
        <Divider />
        Link
      </Link>
      <Separator $height={24} />
      <T font="Body/Body 1 Long" as="div">
        Link with icon. Dimension - s
      </T>
      <Separator />
      <Link
        appearance="secondary"
        dimension="s"
        href=""
        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
      >
        Link
        <Divider />
        <ArrowRightOutline width={20} />
      </Link>
    </>
  );
};
`,LinkMixin_templateraw_namespaceObject=`import * as React from 'react';
import { LinkComponentCssMixin, T } from '@admiral-ds/react-ui';
import type { LinkComponentProps } from '@admiral-ds/react-ui';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const Divider = styled.div\`
  width: 10px;
  height: 12px;
\`;

const StyledRouterLink = styled(RouterLink)<LinkComponentProps>\`
  \${LinkComponentCssMixin}
\`;

export const LinkMixinTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Помимо компонента Link библиотека предоставляет LinkComponentCssMixin - миксин, включающий в себя все стили
        компонента Link согласно дизайну Admiral 2.1. Данный миксин целесообразно применять, если пользователь хочет
        использовать свой собственный компонент, стилизованный согласно дизайну Admiral 2.1.
      </T>
      <Router>
        <StyledRouterLink to="">Styled RouterLink - dimension m</StyledRouterLink>
        <Divider />
        <StyledRouterLink to="" $dimension="s">
          Styled RouterLink - dimension s
        </StyledRouterLink>
        <Divider />
        <StyledRouterLink to="" $appearance="secondary">
          Styled RouterLink - appearance secondary
        </StyledRouterLink>
      </Router>
    </>
  );
};
`,LinkAsProp_templateraw_namespaceObject=`import * as React from 'react';
import { Link, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';

const Divider = styled.div\`
  width: 10px;
  height: 12px;
\`;

export const LinkAsPropTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент Link является полиморфным компонентом. По умолчанию компонент Link возвращает стандартный html anchor
        элемент. Однако с помощью параметра as можно перезадать тип элемента, который будет отрисован. В качестве
        значения as можно передать строку, в которой будет прописан тип html элемента, или компонент.
      </T>
      <Link as="button" type="button">
        Render button instead of anchor
      </Link>
      <Divider />
      <Link as="div" dimension="s">
        Render div instead of anchor
      </Link>
      <Divider />
      <Router>
        <Link as={RouterLink} to="">
          Render RouterLink instead of anchor
        </Link>
      </Router>
    </>
  );
};
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function Link_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Link_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Link_stories_define_property(target,key,source[key])})}return target}function Link_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Link_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Link_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let Link_stories={title:"Admiral-2.1/Link",decorators:void 0,component:Link.N,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A8489"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A8620"}]},argTypes:{target:{options:["_parent","_self","_top","_blank"],control:{type:"select"}},appearance:{options:["primary","secondary"],control:{type:"radio"}},dimension:{options:["m","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},as:{control:!1},children:{control:!1},ref:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var Playground={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(LinkPlaygroundTemplate,Link_stories_object_spread_props(Link_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:LinkPlayground_templateraw_namespaceObject}}}},Primary={render:function(){return(0,jsx_runtime.jsx)(LinkPrimaryTemplate,{})},parameters:{docs:{source:{code:LinkPrimary_templateraw_namespaceObject}}}},Secondary={render:function(){return(0,jsx_runtime.jsx)(LinkSecondaryTemplate,{})},parameters:{docs:{source:{code:LinkSecondary_templateraw_namespaceObject}}}},IconLink={render:function(){return(0,jsx_runtime.jsx)(LinkWithIconTemplate,{})},parameters:{docs:{source:{code:LinkWithIcon_templateraw_namespaceObject}}}},CssMixin={render:function(){return(0,jsx_runtime.jsx)(LinkMixinTemplate,{})},parameters:{docs:{source:{code:LinkMixin_templateraw_namespaceObject}}}},LinkAsProp={render:function(){return(0,jsx_runtime.jsx)(LinkAsPropTemplate,{})},parameters:{docs:{source:{code:LinkAsProp_templateraw_namespaceObject}}}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:`{
  render: LinkPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: LinkPlaygroundRaw
      }
    }
  }
}`,...Playground.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:`{
  render: LinkPrimaryStory,
  parameters: {
    docs: {
      source: {
        code: LinkPrimaryRaw
      }
    }
  }
}`,...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:`{
  render: LinkSecondaryStory,
  parameters: {
    docs: {
      source: {
        code: LinkSecondaryRaw
      }
    }
  }
}`,...Secondary.parameters?.docs?.source}}},IconLink.parameters={...IconLink.parameters,docs:{...IconLink.parameters?.docs,source:{originalSource:`{
  render: LinkWithIconStory,
  parameters: {
    docs: {
      source: {
        code: LinkWithIconRaw
      }
    }
  }
}`,...IconLink.parameters?.docs?.source}}},CssMixin.parameters={...CssMixin.parameters,docs:{...CssMixin.parameters?.docs,source:{originalSource:`{
  render: LinkMixinStory,
  parameters: {
    docs: {
      source: {
        code: LinkMixinRaw
      }
    }
  }
}`,...CssMixin.parameters?.docs?.source}}},LinkAsProp.parameters={...LinkAsProp.parameters,docs:{...LinkAsProp.parameters?.docs,source:{originalSource:`{
  render: LinkAsPropStory,
  parameters: {
    docs: {
      source: {
        code: LinkAsPropRaw
      }
    }
  }
}`,...LinkAsProp.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","Primary","Secondary","IconLink","CssMixin","LinkAsProp"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
\`\`\``,name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Link-stories-Link-stories.a99b0027.iframe.bundle.js.map