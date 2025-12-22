"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9215],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m7.79 3.29c.28.28.74.27 1.01-.02l4.42-4.8c.24-.27.22-.68-.04-.92a.65.65 0 0 0-.92.04l-3.99 4.34-2.4-2.4a.66.66 0 0 0-.92 0c-.25.25-.25.67 0 .92z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 1 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m13-3.92A.65.65 0 0 1 16 9l-3.08 3 3 3.08A.65.65 0 1 1 15 16l-3-3.08L9 16a.65.65 0 1 1-.92-.92l3-3.08-3-3A.65.65 0 0 1 9 8.08l3 3 3.08-3a.65.65 0 0 1 .92 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 10.695a.65.65 0 0 0 .65-.65V7.9a.65.65 0 1 0-1.3 0v5.146c0 .36.291.65.65.65m.85 2.206a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M21.7 10.046c.3.198.381.601.182.9-.5.754-1.141 1.573-1.913 2.359l1.835 1.835a.65.65 0 1 1-.919.92l-1.867-1.868c-.935.8-2.015 1.516-3.226 2.023l1.034 2.49a.65.65 0 1 1-1.2.498l-1.064-2.56a9.6 9.6 0 0 1-2.562.349 9.8 9.8 0 0 1-2.566-.338l-1.06 2.55a.65.65 0 0 1-1.2-.5l1.027-2.47c-1.244-.517-2.316-1.25-3.221-2.04L3.115 16.06a.65.65 0 0 1-.92-.919l1.844-1.843a19 19 0 0 1-1.903-2.338.65.65 0 1 1 1.066-.744c1.463 2.097 4.34 5.477 8.798 5.477 4.034 0 7.15-2.979 8.8-5.465a.65.65 0 0 1 .9-.181"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.437 10.683C3.867 8.654 7.119 5 12 5c4.88 0 8.134 3.655 9.563 5.682a2.27 2.27 0 0 1 0 2.636C20.133 15.345 16.881 19 12 19c-4.88 0-8.134-3.655-9.563-5.682a2.27 2.27 0 0 1 0-2.636M6.3 12a5.7 5.7 0 1 0 11.4 0 5.7 5.7 0 0 0-11.4 0m14.2-.569a15 15 0 0 0-2.209-2.504c.454.928.709 1.97.709 3.073a7 7 0 0 1-.709 3.073 15 15 0 0 0 2.21-2.504.97.97 0 0 0 0-1.138m-17 0a15 15 0 0 1 2.209-2.504A7 7 0 0 0 5 12c0 1.102.255 2.145.709 3.073a15 15 0 0 1-2.21-2.504.97.97 0 0 1 0-1.138m7.806-2.35c.376-.09.694.232.694.619v1a1.3 1.3 0 0 0 1.3 1.3h1c.387 0 .708.318.62.694a3.001 3.001 0 1 1-3.614-3.613"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-4.75a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7M14.1 16a.75.75 0 0 1-.75.75h-.05a2.05 2.05 0 0 1-2.05-2.05v-3.75a.75.75 0 0 1 1.5 0v3.75c0 .304.246.55.55.55h.05a.75.75 0 0 1 .75.75"})))};__webpack_require__.p},"./src/components/Link/LinkComponent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>LinkComponent,u:()=>LinkComponentCssMixin});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return LinkComponent_templateObject1=function _templateObject(){return data},data}var LinkComponentCssMixin=(0,styled_components_browser_esm.AH)(LinkComponent_templateObject(),function(props){return props.disabled?"not-allowed":"pointer"},styleMixin,styleColorMixin,styleTextMixin,function(props){return props.disabled?styleDisabledMixin:styleEventMixin}),LinkComponent=styled_components_browser_esm.Ay.a(LinkComponent_templateObject1(),LinkComponentCssMixin)},"./src/components/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Link});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_LinkComponent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Link/LinkComponent.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Link=(0,__webpack_require__("./src/components/common/fixedForwardRef.ts").B)(function(_param,ref){var _param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_appearance=_param.appearance,_param_dimension=_param.dimension,as=_param.as,props=_object_without_properties(_param,["disabled","appearance","dimension","as"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LinkComponent__WEBPACK_IMPORTED_MODULE_1__.g,_object_spread_props(_object_spread({},props),{$dimension:void 0===_param_dimension?"m":_param_dimension,ref:ref,tabIndex:disabled?-1:props.tabIndex,as:disabled?"span":as,disabled:disabled,$appearance:void 0===_param_appearance?"primary":_param_appearance}))});Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{children:{defaultValue:null,description:"Текст ссылки",name:"children",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Вид ссылки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:null,description:"Отключение ссылки",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:null,description:"Размер ссылки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toast/stories/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToastBackwardCompatibility:()=>ToastBackwardCompatibility,ToastCustomComponent:()=>ToastCustomComponent,ToastLineNotification:()=>ToastLineNotification,ToastNotification:()=>ToastNotification,ToastNotificationBase:()=>ToastNotificationBase,ToastProgressComponent:()=>ToastProgressComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),dist=__webpack_require__("./node_modules/@storybook/csf/dist/index.mjs"),{document:chunk_6GSMXRCY_document,HTMLElement}=external_STORYBOOK_MODULE_GLOBAL_.global;function parseQuery(queryString){let query={},pairs=("?"===queryString[0]?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"")}return query}var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let{sbKind:kind,sbStory:story}=target.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener))};(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))});var react=__webpack_require__("./node_modules/react/index.js"),LinkTo=class extends react.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await new Promise(resolve=>{let{location}=chunk_6GSMXRCY_document,existingId=[].concat(parseQuery(location.search).id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${(0,dist.Lr)(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,"");resolve(`${location.origin+sbPath}?${Object.entries({path}).map(item=>`${item[0]}=${item[1]}`).join("&")}`)});this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&chunk_6GSMXRCY_navigate({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react.createElement("a",{href,onClick:e=>((e,cb=_e=>{})=>{0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var uid=__webpack_require__("./src/components/common/uid.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),Link=__webpack_require__("./src/components/Link/index.tsx"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: absolute;
  bottom: 0;
  left: 0;
  background: `,`;
  height: 4px;
  transition: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  overflow: hidden;
  border-radius: var(--admiral-border-radius-Medium, `,`);
`]);return _templateObject2=function _templateObject(){return data},data}var StyledLink=(0,styled_components_browser_esm.Ay)(Link.N)(_templateObject(),typography.Il["Button/Button 2"]),ToastItem_DefaultToastItem=function(_param){var title=_param.title,_param_linkText=_param.linkText,linkText=void 0===_param_linkText?"":_param_linkText,_param_href=_param.href,href=void 0===_param_href?"":_param_href,onClose=_param.onClose,children=_param.children,props=_object_without_properties(_param,["title","linkText","href","onClose","children"]);return(0,jsx_runtime.jsxs)(NotificationItem.se,_object_spread_props(_object_spread({},props),{onClose:onClose,children:[title&&(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:title}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:children}),linkText&&(0,jsx_runtime.jsx)(NotificationItem.xs,{children:(0,jsx_runtime.jsx)(StyledLink,{href:href,children:linkText||href})})]}))},ToastItem_ToastItemWithAutoDelete=function(param){var children=param.children,onRemoveNotification=param.onRemoveNotification,autoDeleteTime=param.autoDeleteTime;return(0,react.useEffect)(function(){if(autoDeleteTime){var timerId=setTimeout(function(){return onRemoveNotification()},autoDeleteTime);return function(){clearTimeout(timerId)}}},[]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children})},Progress=styled_components_browser_esm.Ay.div.attrs(function(props){return{style:{width:"".concat(props.$percent,"%")}}})(_templateObject1(),function(param){var theme=param.theme;switch(param.$status){case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");default:return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")}},function(param){var $duration=param.$duration;return"all ".concat($duration,"ms linear")}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return(0,borderRadius.VM)(p.theme.shape)}),ToastItem_ToastItemWithProgress=function(param){var children=param.children,status=param.status,onRemoveNotification=param.onRemoveNotification,autoDeleteTime=param.autoDeleteTime,_param_progressStep=param.progressStep,progressStep=void 0===_param_progressStep?1:_param_progressStep,_useState=_sliced_to_array((0,react.useState)(100),2),progress=_useState[0],setProgress=_useState[1],delta=(autoDeleteTime||0)/(100*progressStep);return(0,react.useEffect)(function(){if(autoDeleteTime){if(0===progress)return void onRemoveNotification();var timerId=setTimeout(function(){return setProgress(function(prev){return prev-1})},delta);return function(){clearTimeout(timerId)}}},[progress,progressStep]),(0,jsx_runtime.jsxs)(Wrapper,{children:[children,progress>0&&(0,jsx_runtime.jsx)(Progress,{$percent:progress,$status:status,$duration:delta})]})};ToastItem_DefaultToastItem.displayName="DefaultToastItem",ToastItem_ToastItemWithAutoDelete.displayName="ToastItemWithAutoDelete",ToastItem_ToastItemWithProgress.displayName="ToastItemWithProgress";try{ToastItem_DefaultToastItem.displayName="DefaultToastItem",ToastItem_DefaultToastItem.__docgenInfo={description:`Данный шаблон предназначен для перехода на новую модель c Notification на
NotificationItem в ToastProvider.
Рекомендуется в дальнейшем использовать новый вариант NotificationItem
с полностью кастомным наполнением согласно дизайну
(пример можно посмотреть в разделе NotificationItem)`,displayName:"DefaultToastItem",props:{status:{defaultValue:null,description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:null,description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:""},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:null,description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:null,description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastItem.tsx#DefaultToastItem"]={docgenInfo:ToastItem_DefaultToastItem.__docgenInfo,name:"DefaultToastItem",path:"src/components/Toast/ToastItem.tsx#DefaultToastItem"})}catch(__react_docgen_typescript_loader_error){}try{ToastItem_ToastItemWithAutoDelete.displayName="ToastItemWithAutoDelete",ToastItem_ToastItemWithAutoDelete.__docgenInfo={description:`Шаблон для отображения кастомного уведомления с автоматическим удалением
через заданное время`,displayName:"ToastItemWithAutoDelete",props:{onRemoveNotification:{defaultValue:null,description:"Колбек для удаления уведомления",name:"onRemoveNotification",required:!0,type:{name:"() => void"}},autoDeleteTime:{defaultValue:null,description:"Время, после которого уведомление автоматически удалится",name:"autoDeleteTime",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastItem.tsx#ToastItemWithAutoDelete"]={docgenInfo:ToastItem_ToastItemWithAutoDelete.__docgenInfo,name:"ToastItemWithAutoDelete",path:"src/components/Toast/ToastItem.tsx#ToastItemWithAutoDelete"})}catch(__react_docgen_typescript_loader_error){}function ToastProvider_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastProvider_array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return ToastProvider_array_like_to_array(arr)}function ToastProvider_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function ToastProvider_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ToastProvider_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastProvider_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ToastProvider_define_property(target,key,source[key])})}return target}function ToastProvider_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ToastProvider_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ToastProvider_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ToastProvider_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ToastProvider_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ToastProvider_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ToastProvider_sliced_to_array(arr,i){return ToastProvider_array_with_holes(arr)||ToastProvider_iterable_to_array_limit(arr,i)||ToastProvider_unsupported_iterable_to_array(arr,i)||ToastProvider_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||ToastProvider_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function ToastProvider_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ToastProvider_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastProvider_array_like_to_array(o,minLen)}}var ToastContext=(0,react.createContext)({});function makeToastList(prevList,newToast){return prevList.every(function(item){return item.id!==newToast.id})?[newToast].concat(_to_consumable_array(prevList)):prevList}var ToastProvider_ToastProvider=function(_param){var autoDeleteTime=_param.autoDeleteTime,props=ToastProvider_object_without_properties(_param,["autoDeleteTime"]),_useState=ToastProvider_sliced_to_array((0,react.useState)([]),2),toasts=_useState[0],setToast=_useState[1],_useState1=ToastProvider_sliced_to_array((0,react.useState)([]),2),toastItemList=_useState1[0],setToastItemList=_useState1[1],addToast=(0,react.useCallback)(function(toast){var id=(0,uid.L)(),newToast=ToastProvider_object_spread_props(ToastProvider_object_spread({},toast),{id:id});setToast(function(prevToasts){return makeToastList(prevToasts,newToast)});var renderDefaultNotificationItem=function(){var handleOnClose=function(){removeToastItem({id:id,renderToast:renderDefaultNotificationItem})};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:autoDeleteTime?(0,jsx_runtime.jsx)(ToastItem_ToastItemWithAutoDelete,{onRemoveNotification:handleOnClose,autoDeleteTime:autoDeleteTime,children:(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastProvider_object_spread_props(ToastProvider_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))}):(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastProvider_object_spread_props(ToastProvider_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))})},newRenderToast={id:id,renderToast:renderDefaultNotificationItem};return setToastItemList(function(prevToasts){return makeToastList(prevToasts,newRenderToast)}),id},[]),removeToast=(0,react.useCallback)(function(removeToast){setToast(function(prevToasts){return prevToasts.filter(function(param){return param.id!==removeToast.id})}),setToastItemList(function(prevToasts){return prevToasts.filter(function(param){return param.id!==removeToast.id})})},[]),removeById=(0,react.useCallback)(function(toastId){setToast(function(prevToasts){return prevToasts.filter(function(param){return param.id!==toastId})}),setToastItemList(function(prevToasts){return prevToasts.filter(function(param){return param.id!==toastId})})},[]),addToastItem=(0,react.useCallback)(function(toastItem){setToast(function(prevToasts){return makeToastList(prevToasts,{id:toastItem.id})}),setToastItemList(function(prevToasts){return makeToastList(prevToasts,toastItem)})},[]),findToastItemById=function(toastId){return toastItemList.find(function(item){return item.id===toastId})},removeToastItem=(0,react.useCallback)(function(removeToast){setToast(function(prevToasts){return prevToasts.filter(function(param){return param.id!==removeToast.id})}),setToastItemList(function(prevToasts){return prevToasts.filter(function(toast){return toast.renderToast!==removeToast.renderToast})})},[]),providerValue=(0,react.useMemo)(function(){return{addToast:addToast,removeToast:removeToast,removeById:removeById,addToastItem:addToastItem,findToastItemById:findToastItemById,removeToastItem:removeToastItem,toasts:toasts,toastItemList:toastItemList,autoDeleteTime:autoDeleteTime}},[addToast,removeToast,removeById,addToastItem,findToastItemById,removeToastItem,toasts,toastItemList,autoDeleteTime]);return(0,jsx_runtime.jsx)(ToastContext.Provider,{value:providerValue,children:props.children})};try{ToastProvider_ToastProvider.displayName="ToastProvider",ToastProvider_ToastProvider.__docgenInfo={description:"",displayName:"ToastProvider",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastProvider.tsx#ToastProvider"]={docgenInfo:ToastProvider_ToastProvider.__docgenInfo,name:"ToastProvider",path:"src/components/Toast/ToastProvider.tsx#ToastProvider"})}catch(__react_docgen_typescript_loader_error){}function useToast(){var context=react.useContext(ToastContext);return{addToast:null==context?void 0:context.addToast,removeToast:null==context?void 0:context.removeToast,removeById:null==context?void 0:context.removeById,addToastItem:null==context?void 0:context.addToastItem,findToastItemById:null==context?void 0:context.findToastItemById,removeToastItem:null==context?void 0:context.removeToastItem,toasts:null==context?void 0:context.toasts,toastItemList:null==context?void 0:context.toastItemList,autoDeleteTime:null==context?void 0:context.autoDeleteTime}}function Toast_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Toast_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Toast_define_property(target,key,source[key])})}return target}function Toast_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Toast_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Toast_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Toast_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=Toast_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Toast_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Toast_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Toast_templateObject(){var data=Toast_tagged_template_literal([`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 384px;
  z-index: var(--admiral-z-index-notification, `,`);
  `,`;
  `,`;
  `,`;
  `,`;
  pointer-events: none;
  > * {
    pointer-events: initial;
  }
`]);return Toast_templateObject=function _templateObject(){return data},data}function Toast_templateObject1(){var data=Toast_tagged_template_literal([`
  from {
    transform: translateX(100%);

  }
  to {
    transform: translateX(0);
  }
`]);return Toast_templateObject1=function _templateObject(){return data},data}function Toast_templateObject2(){var data=Toast_tagged_template_literal([`
  from {
    transform: translateX(-100%);

  }
  to {
    transform: translateX(0);
  }
`]);return Toast_templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=Toast_tagged_template_literal([`
  animation-name: `,`;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=Toast_tagged_template_literal([`
  margin-bottom: 16px;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  `,`
`]);return _templateObject4=function _templateObject(){return data},data}var Container=styled_components_browser_esm.Ay.div(Toast_templateObject(),function(param){return param.theme.zIndex.notification},function(p){return"top-right"===p.$position&&"top: 16px"},function(p){return("bottom-right"===p.$position||"bottom-left"===p.$position)&&"bottom: 16px"},function(p){return("top-right"===p.$position||"bottom-right"===p.$position)&&"right: 16px"},function(p){return"bottom-left"===p.$position&&"left: 16px"}),fadeInRight=(0,styled_components_browser_esm.i7)(Toast_templateObject1()),fadeInLeft=(0,styled_components_browser_esm.i7)(Toast_templateObject2()),fadeMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),function(param){return"bottom-left"===param.$position?fadeInLeft:fadeInRight}),Transition=styled_components_browser_esm.Ay.div(_templateObject4(),fadeMixin),Toast=function(_param){var _param_position=_param.position,position=void 0===_param_position?"top-right":_param_position,props=Toast_object_without_properties(_param,["position"]),toastItemList=useToast().toastItemList;return(0,jsx_runtime.jsx)(Container,Toast_object_spread_props(Toast_object_spread({$position:position},props),{children:!!(null==toastItemList?void 0:toastItemList.length)&&toastItemList.map(function(param){var renderToast=param.renderToast,id=param.id;return(0,jsx_runtime.jsx)(Transition,{$position:position,children:renderToast(id)},id)})}))};Toast.displayName="Toast";try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{position:{defaultValue:{value:"top-right"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Toast/index.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}try{ToastProvider.displayName="ToastProvider",ToastProvider.__docgenInfo={description:"",displayName:"ToastProvider",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#ToastProvider"]={docgenInfo:ToastProvider.__docgenInfo,name:"ToastProvider",path:"src/components/Toast/index.tsx#ToastProvider"})}catch(__react_docgen_typescript_loader_error){}try{DefaultToastItem.displayName="DefaultToastItem",DefaultToastItem.__docgenInfo={description:`Данный шаблон предназначен для перехода на новую модель c Notification на
NotificationItem в ToastProvider.
Рекомендуется в дальнейшем использовать новый вариант NotificationItem
с полностью кастомным наполнением согласно дизайну
(пример можно посмотреть в разделе NotificationItem)`,displayName:"DefaultToastItem",props:{status:{defaultValue:null,description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:null,description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:""},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:null,description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:null,description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#DefaultToastItem"]={docgenInfo:DefaultToastItem.__docgenInfo,name:"DefaultToastItem",path:"src/components/Toast/index.tsx#DefaultToastItem"})}catch(__react_docgen_typescript_loader_error){}try{ToastItemWithAutoDelete.displayName="ToastItemWithAutoDelete",ToastItemWithAutoDelete.__docgenInfo={description:`Шаблон для отображения кастомного уведомления с автоматическим удалением
через заданное время`,displayName:"ToastItemWithAutoDelete",props:{onRemoveNotification:{defaultValue:null,description:"Колбек для удаления уведомления",name:"onRemoveNotification",required:!0,type:{name:"() => void"}},autoDeleteTime:{defaultValue:null,description:"Время, после которого уведомление автоматически удалится",name:"autoDeleteTime",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#ToastItemWithAutoDelete"]={docgenInfo:ToastItemWithAutoDelete.__docgenInfo,name:"ToastItemWithAutoDelete",path:"src/components/Toast/index.tsx#ToastItemWithAutoDelete"})}catch(__react_docgen_typescript_loader_error){}try{ToastItemWithProgress.displayName="ToastItemWithProgress",ToastItemWithProgress.__docgenInfo={description:"",displayName:"ToastItemWithProgress",props:{onRemoveNotification:{defaultValue:null,description:"Колбек для удаления уведомления",name:"onRemoveNotification",required:!0,type:{name:"() => void"}},autoDeleteTime:{defaultValue:null,description:"Время, после которого уведомление автоматически удалится",name:"autoDeleteTime",required:!1,type:{name:"number"}},status:{defaultValue:null,description:"Статус уведомления",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},progressStep:{defaultValue:{value:"1"},description:"Шаг шкалы отсчета времени",name:"progressStep",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.tsx#ToastItemWithProgress"]={docgenInfo:ToastItemWithProgress.__docgenInfo,name:"ToastItemWithProgress",path:"src/components/Toast/index.tsx#ToastItemWithProgress"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function ToastNotification_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastNotification_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ToastNotification_template_array_without_holes(arr){if(Array.isArray(arr))return ToastNotification_template_array_like_to_array(arr)}function ToastNotification_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ToastNotification_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function ToastNotification_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ToastNotification_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastNotification_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastNotification_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ToastNotification_template_define_property(target,key,source[key])})}return target}function ToastNotification_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ToastNotification_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ToastNotification_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ToastNotification_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ToastNotification_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ToastNotification_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ToastNotification_template_sliced_to_array(arr,i){return ToastNotification_template_array_with_holes(arr)||ToastNotification_template_iterable_to_array_limit(arr,i)||ToastNotification_template_unsupported_iterable_to_array(arr,i)||ToastNotification_template_non_iterable_rest()}function ToastNotification_template_to_consumable_array(arr){return ToastNotification_template_array_without_holes(arr)||ToastNotification_template_iterable_to_array(arr)||ToastNotification_template_unsupported_iterable_to_array(arr)||ToastNotification_template_non_iterable_spread()}function ToastNotification_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ToastNotification_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastNotification_template_array_like_to_array(o,minLen)}}var items=[{status:"error",children:"Запрос завершился ошибкой",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"warning",children:"Слишком много попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"info",children:"Осталось 7 попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"success",children:"Запрос выполнен успешно",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0}],NotificationEmitter=function(){var _useState=ToastNotification_template_sliced_to_array((0,react.useState)([]),2),toastStack=_useState[0],setToastStack=_useState[1],_useToast=useToast(),addToastItem=_useToast.addToastItem,removeToastItem=_useToast.removeToastItem,autoDeleteTime=_useToast.autoDeleteTime;return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",height:"200px"},children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){var toast=items[0+Number(Math.round(3*Math.random()))],id=(0,uid.L)(),renderToast=function(id){var handleOnClose=function(){removeToastItem({id:id,renderToast:renderToast}),console.log("Toast is closed"),setToastStack(function(prevToastIdStack){return prevToastIdStack.filter(function(toast){return toast.renderToast!==renderToast})})};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:autoDeleteTime?(0,jsx_runtime.jsx)(ToastItem_ToastItemWithAutoDelete,{onRemoveNotification:handleOnClose,autoDeleteTime:autoDeleteTime,children:(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastNotification_template_object_spread_props(ToastNotification_template_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))}):(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastNotification_template_object_spread_props(ToastNotification_template_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))})};addToastItem({id:id,renderToast:renderToast}),setToastStack(function(prev){return ToastNotification_template_to_consumable_array(prev).concat([{id:id,renderToast:renderToast}])})},children:"Добавить сообщение"}),(0,jsx_runtime.jsx)("div",{style:{width:20}}),(0,jsx_runtime.jsx)(Button.$n,{disabled:0===toastStack.length,onClick:function(){var newToastIdStack=ToastNotification_template_to_consumable_array(toastStack),toastToRemove=newToastIdStack.shift();setToastStack(newToastIdStack),toastToRemove&&removeToastItem(toastToRemove)},children:"Удалить первое сообщение"})]})},ToastNotificationTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ToastNotification_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(ToastProvider_ToastProvider,{autoDeleteTime:props.autoDeleteTime,children:[(0,jsx_runtime.jsx)(NotificationEmitter,{}),(0,jsx_runtime.jsx)(Toast,{style:{top:128,left:64}})]})})};try{ToastNotificationTemplate.displayName="ToastNotificationTemplate",ToastNotificationTemplate.__docgenInfo={description:"",displayName:"ToastNotificationTemplate",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/stories/ToastNotification.template.tsx#ToastNotificationTemplate"]={docgenInfo:ToastNotificationTemplate.__docgenInfo,name:"ToastNotificationTemplate",path:"src/components/Toast/stories/ToastNotification.template.tsx#ToastNotificationTemplate"})}catch(__react_docgen_typescript_loader_error){}function ToastNotificationBase_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastNotificationBase_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ToastNotificationBase_template_array_without_holes(arr){if(Array.isArray(arr))return ToastNotificationBase_template_array_like_to_array(arr)}function ToastNotificationBase_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ToastNotificationBase_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function ToastNotificationBase_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ToastNotificationBase_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastNotificationBase_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastNotificationBase_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ToastNotificationBase_template_define_property(target,key,source[key])})}return target}function ToastNotificationBase_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ToastNotificationBase_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ToastNotificationBase_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ToastNotificationBase_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ToastNotificationBase_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ToastNotificationBase_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ToastNotificationBase_template_sliced_to_array(arr,i){return ToastNotificationBase_template_array_with_holes(arr)||ToastNotificationBase_template_iterable_to_array_limit(arr,i)||ToastNotificationBase_template_unsupported_iterable_to_array(arr,i)||ToastNotificationBase_template_non_iterable_rest()}function ToastNotificationBase_template_to_consumable_array(arr){return ToastNotificationBase_template_array_without_holes(arr)||ToastNotificationBase_template_iterable_to_array(arr)||ToastNotificationBase_template_unsupported_iterable_to_array(arr)||ToastNotificationBase_template_non_iterable_spread()}function ToastNotificationBase_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ToastNotificationBase_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastNotificationBase_template_array_like_to_array(o,minLen)}}var ToastNotificationBase_template_items=[{status:"error",children:"Запрос завершился ошибкой",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"warning",children:"Слишком много попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"info",children:"Осталось 7 попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"success",children:"Запрос выполнен успешно",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0}],ToastNotificationBase_template_NotificationEmitter=function(){var _useState=ToastNotificationBase_template_sliced_to_array((0,react.useState)([]),2),toastStack=_useState[0],setToastStack=_useState[1],_useToast=useToast(),addToastItem=_useToast.addToastItem,removeToastItem=_useToast.removeToastItem,autoDeleteTime=_useToast.autoDeleteTime;return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"flex-start"},children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){var toast=ToastNotificationBase_template_items[0+Number(Math.round(3*Math.random()))],id=(0,uid.L)(),renderToast=function(id){var handleOnClose=function(){removeToastItem({id:id,renderToast:renderToast}),console.log("Toast is closed"),setToastStack(function(prevToastIdStack){return prevToastIdStack.filter(function(toast){return toast.renderToast!==renderToast})})};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:autoDeleteTime?(0,jsx_runtime.jsx)(ToastItem_ToastItemWithAutoDelete,{onRemoveNotification:handleOnClose,autoDeleteTime:autoDeleteTime,children:(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastNotificationBase_template_object_spread_props(ToastNotificationBase_template_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))}):(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastNotificationBase_template_object_spread_props(ToastNotificationBase_template_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))})};addToastItem({id:id,renderToast:renderToast}),setToastStack(function(prev){return ToastNotificationBase_template_to_consumable_array(prev).concat([{id:id,renderToast:renderToast}])})},children:"Добавить сообщение"}),(0,jsx_runtime.jsx)("div",{style:{width:20}}),(0,jsx_runtime.jsx)(Button.$n,{disabled:0===toastStack.length,onClick:function(){var newToastIdStack=ToastNotificationBase_template_to_consumable_array(toastStack),toastToRemove=newToastIdStack.shift();setToastStack(newToastIdStack),toastToRemove&&removeToastItem(toastToRemove)},children:"Удалить первое сообщение"})]})},ToastNotificationBaseTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ToastNotificationBase_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(ToastProvider_ToastProvider,{autoDeleteTime:props.autoDeleteTime,children:[(0,jsx_runtime.jsx)(ToastNotificationBase_template_NotificationEmitter,{}),(0,jsx_runtime.jsx)(Toast,{position:props.position})]})})};try{ToastNotificationBaseTemplate.displayName="ToastNotificationBaseTemplate",ToastNotificationBaseTemplate.__docgenInfo={description:"",displayName:"ToastNotificationBaseTemplate",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/stories/ToastNotificationBase.template.tsx#ToastNotificationBaseTemplate"]={docgenInfo:ToastNotificationBaseTemplate.__docgenInfo,name:"ToastNotificationBaseTemplate",path:"src/components/Toast/stories/ToastNotificationBase.template.tsx#ToastNotificationBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function ToastLineNotification_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastLineNotification_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ToastLineNotification_template_array_without_holes(arr){if(Array.isArray(arr))return ToastLineNotification_template_array_like_to_array(arr)}function ToastLineNotification_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ToastLineNotification_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function ToastLineNotification_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ToastLineNotification_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastLineNotification_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastLineNotification_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ToastLineNotification_template_define_property(target,key,source[key])})}return target}function ToastLineNotification_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ToastLineNotification_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ToastLineNotification_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ToastLineNotification_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ToastLineNotification_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ToastLineNotification_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ToastLineNotification_template_sliced_to_array(arr,i){return ToastLineNotification_template_array_with_holes(arr)||ToastLineNotification_template_iterable_to_array_limit(arr,i)||ToastLineNotification_template_unsupported_iterable_to_array(arr,i)||ToastLineNotification_template_non_iterable_rest()}function ToastLineNotification_template_to_consumable_array(arr){return ToastLineNotification_template_array_without_holes(arr)||ToastLineNotification_template_iterable_to_array(arr)||ToastLineNotification_template_unsupported_iterable_to_array(arr)||ToastLineNotification_template_non_iterable_spread()}function ToastLineNotification_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ToastLineNotification_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastLineNotification_template_array_like_to_array(o,minLen)}}var ToastLineNotification_template_items=[{status:"error",children:"Запрос завершился ошибкой",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"warning",children:"Слишком много попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"info",children:"Осталось 7 попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"success",children:"Запрос выполнен успешно",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0}],ToastLineNotification_template_NotificationEmitter=function(){var _useState=ToastLineNotification_template_sliced_to_array((0,react.useState)([]),2),toastStack=_useState[0],setToastStack=_useState[1],_useToast=useToast(),addToastItem=_useToast.addToastItem,removeToastItem=_useToast.removeToastItem,autoDeleteTime=_useToast.autoDeleteTime;return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",height:"200px"},children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){var toast=ToastLineNotification_template_items[0+Number(Math.round(3*Math.random()))],id=(0,uid.L)(),renderToast=function(id){var handleOnClose=function(){removeToastItem({id:id,renderToast:renderToast}),console.log("Toast is closed"),setToastStack(function(prevToastIdStack){return prevToastIdStack.filter(function(toast){return toast.renderToast!==renderToast})})};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:autoDeleteTime?(0,jsx_runtime.jsx)(ToastItem_ToastItemWithAutoDelete,{onRemoveNotification:handleOnClose,autoDeleteTime:autoDeleteTime,children:(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastLineNotification_template_object_spread_props(ToastLineNotification_template_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))}):(0,jsx_runtime.jsx)(ToastItem_DefaultToastItem,ToastLineNotification_template_object_spread_props(ToastLineNotification_template_object_spread({},toast),{onClose:toast.onClose||handleOnClose}))})};addToastItem({id:id,renderToast:renderToast}),setToastStack(function(prev){return ToastLineNotification_template_to_consumable_array(prev).concat([{id:id,renderToast:renderToast}])})},children:"Добавить сообщение"}),(0,jsx_runtime.jsx)("div",{style:{width:20}}),(0,jsx_runtime.jsx)(Button.$n,{disabled:0===toastStack.length,onClick:function(){var newToastIdStack=ToastLineNotification_template_to_consumable_array(toastStack),toastToRemove=newToastIdStack.shift();setToastStack(newToastIdStack),toastToRemove&&removeToastItem(toastToRemove)},children:"Удалить первое сообщение"})]})},ToastLineNotificationTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ToastLineNotification_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(ToastProvider_ToastProvider,{autoDeleteTime:props.autoDeleteTime,children:[(0,jsx_runtime.jsx)(ToastLineNotification_template_NotificationEmitter,{}),(0,jsx_runtime.jsx)(Toast,{style:{top:128,left:64,width:"initial"}})]})})};try{ToastLineNotificationTemplate.displayName="ToastLineNotificationTemplate",ToastLineNotificationTemplate.__docgenInfo={description:"",displayName:"ToastLineNotificationTemplate",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/stories/ToastLineNotification.template.tsx#ToastLineNotificationTemplate"]={docgenInfo:ToastLineNotificationTemplate.__docgenInfo,name:"ToastLineNotificationTemplate",path:"src/components/Toast/stories/ToastLineNotification.template.tsx#ToastLineNotificationTemplate"})}catch(__react_docgen_typescript_loader_error){}var TextButton=__webpack_require__("./src/components/TextButton/index.tsx"),TextInput=__webpack_require__("./src/components/input/TextInput/index.tsx");function ToastCustomComponent_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastCustomComponent_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ToastCustomComponent_template_array_without_holes(arr){if(Array.isArray(arr))return ToastCustomComponent_template_array_like_to_array(arr)}function ToastCustomComponent_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function ToastCustomComponent_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ToastCustomComponent_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastCustomComponent_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastCustomComponent_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ToastCustomComponent_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ToastCustomComponent_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ToastCustomComponent_template_sliced_to_array(arr,i){return ToastCustomComponent_template_array_with_holes(arr)||ToastCustomComponent_template_iterable_to_array_limit(arr,i)||ToastCustomComponent_template_unsupported_iterable_to_array(arr,i)||ToastCustomComponent_template_non_iterable_rest()}function ToastCustomComponent_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ToastCustomComponent_template_to_consumable_array(arr){return ToastCustomComponent_template_array_without_holes(arr)||ToastCustomComponent_template_iterable_to_array(arr)||ToastCustomComponent_template_unsupported_iterable_to_array(arr)||ToastCustomComponent_template_non_iterable_spread()}function ToastCustomComponent_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ToastCustomComponent_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastCustomComponent_template_array_like_to_array(o,minLen)}}function ToastCustomComponent_template_templateObject(){var data=ToastCustomComponent_template_tagged_template_literal([`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
`]);return ToastCustomComponent_template_templateObject=function _templateObject(){return data},data}function ToastCustomComponent_template_templateObject1(){var data=ToastCustomComponent_template_tagged_template_literal([`
  height: 20px;
`]);return ToastCustomComponent_template_templateObject1=function _templateObject(){return data},data}var ToastCustomComponent_template_Wrapper=styled_components_browser_esm.Ay.div(ToastCustomComponent_template_templateObject()),Separator=styled_components_browser_esm.Ay.div(ToastCustomComponent_template_templateObject1()),handleTextButtonClick=function(){console.log("TextButton click")},MessageForm=function(){var _useState=ToastCustomComponent_template_sliced_to_array((0,react.useState)([]),2),toastIdStack=_useState[0],setToastIdStack=_useState[1],_useState1=ToastCustomComponent_template_sliced_to_array((0,react.useState)("Notification message"),2),inputValue=_useState1[0],setInputValue=_useState1[1],_useToast=useToast(),addToastItem=_useToast.addToastItem,removeToastItem=_useToast.removeToastItem;return(0,jsx_runtime.jsxs)("div",{style:{width:"550px"},children:[(0,jsx_runtime.jsx)(TextInput.ks,{value:inputValue,onChange:function(e){return setInputValue(e.target.value)}}),(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsxs)(ToastCustomComponent_template_Wrapper,{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){var id=(0,uid.L)(),renderFunction=function(id){return(0,jsx_runtime.jsxs)(NotificationItem.se,{isClosable:!0,displayStatusIcon:!0,onClose:function(){removeToastItem({id:id,renderToast:renderFunction}),console.log("Toast is closed"),setToastIdStack(function(prevToastIdStack){return prevToastIdStack.filter(function(toast){return toast.id!==id})})},children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Title"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:inputValue}),(0,jsx_runtime.jsxs)(NotificationItem.xs,{children:[(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:"TextButton1",onClick:handleTextButtonClick}),(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:"TextButton2",onClick:handleTextButtonClick})]})]})};addToastItem({id:id,renderToast:renderFunction}),setToastIdStack(function(prev){return ToastCustomComponent_template_to_consumable_array(prev).concat([{id:id,renderToast:renderFunction}])})},children:"Добавить сообщение"}),(0,jsx_runtime.jsx)(Button.$n,{disabled:0===toastIdStack.length,onClick:function(){var newToastIdStack=ToastCustomComponent_template_to_consumable_array(toastIdStack),removeToast=newToastIdStack.shift();setToastIdStack(newToastIdStack),removeToast&&removeToastItem(removeToast)},children:"Удалить первое сообщение"})]})]})},ToastCustomComponentTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ToastCustomComponent_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(ToastProvider_ToastProvider,{children:[(0,jsx_runtime.jsx)(MessageForm,{}),(0,jsx_runtime.jsx)(Toast,{position:props.position})]})})};try{ToastCustomComponentTemplate.displayName="ToastCustomComponentTemplate",ToastCustomComponentTemplate.__docgenInfo={description:"",displayName:"ToastCustomComponentTemplate",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/stories/ToastCustomComponent.template.tsx#ToastCustomComponentTemplate"]={docgenInfo:ToastCustomComponentTemplate.__docgenInfo,name:"ToastCustomComponentTemplate",path:"src/components/Toast/stories/ToastCustomComponent.template.tsx#ToastCustomComponentTemplate"})}catch(__react_docgen_typescript_loader_error){}function ToastProgressComponent_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastProgressComponent_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ToastProgressComponent_template_array_without_holes(arr){if(Array.isArray(arr))return ToastProgressComponent_template_array_like_to_array(arr)}function ToastProgressComponent_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function ToastProgressComponent_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ToastProgressComponent_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastProgressComponent_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastProgressComponent_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ToastProgressComponent_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ToastProgressComponent_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ToastProgressComponent_template_sliced_to_array(arr,i){return ToastProgressComponent_template_array_with_holes(arr)||ToastProgressComponent_template_iterable_to_array_limit(arr,i)||ToastProgressComponent_template_unsupported_iterable_to_array(arr,i)||ToastProgressComponent_template_non_iterable_rest()}function ToastProgressComponent_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ToastProgressComponent_template_to_consumable_array(arr){return ToastProgressComponent_template_array_without_holes(arr)||ToastProgressComponent_template_iterable_to_array(arr)||ToastProgressComponent_template_unsupported_iterable_to_array(arr)||ToastProgressComponent_template_non_iterable_spread()}function ToastProgressComponent_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ToastProgressComponent_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastProgressComponent_template_array_like_to_array(o,minLen)}}function ToastProgressComponent_template_templateObject(){var data=ToastProgressComponent_template_tagged_template_literal([`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
`]);return ToastProgressComponent_template_templateObject=function _templateObject(){return data},data}function ToastProgressComponent_template_templateObject1(){var data=ToastProgressComponent_template_tagged_template_literal([`
  height: 20px;
`]);return ToastProgressComponent_template_templateObject1=function _templateObject(){return data},data}var ToastProgressComponent_template_Wrapper=styled_components_browser_esm.Ay.div(ToastProgressComponent_template_templateObject()),ToastProgressComponent_template_Separator=styled_components_browser_esm.Ay.div(ToastProgressComponent_template_templateObject1()),toastStatuses=["info","error","success","warning"],ToastProgressComponent_template_handleTextButtonClick=function(){console.log("TextButton click")},ToastProgressComponent_template_MessageForm=function(){var _useState=ToastProgressComponent_template_sliced_to_array((0,react.useState)([]),2),toastIdStack=_useState[0],setToastIdStack=_useState[1],_useState1=ToastProgressComponent_template_sliced_to_array((0,react.useState)("Toast title"),2),titleValue=_useState1[0],setTitleValue=_useState1[1],_useState2=ToastProgressComponent_template_sliced_to_array((0,react.useState)("Toast content"),2),contentValue=_useState2[0],setContentValue=_useState2[1],_useState3=ToastProgressComponent_template_sliced_to_array((0,react.useState)("TextButton1"),2),textButton1Value=_useState3[0],setTextButton1Value=_useState3[1],_useState4=ToastProgressComponent_template_sliced_to_array((0,react.useState)("TextButton2"),2),textButton2Value=_useState4[0],setTextButton2Value=_useState4[1],_useState5=ToastProgressComponent_template_sliced_to_array((0,react.useState)(0),2),toastStatus=_useState5[0],setToastStatus=_useState5[1],_useToast=useToast(),addToastItem=_useToast.addToastItem,removeToastItem=_useToast.removeToastItem,autoDeleteTime=_useToast.autoDeleteTime;return(0,jsx_runtime.jsxs)("div",{style:{width:"550px"},children:[(0,jsx_runtime.jsx)(TextInput.ks,{value:titleValue,onChange:function(e){return setTitleValue(e.target.value)}}),(0,jsx_runtime.jsx)(ToastProgressComponent_template_Separator,{}),(0,jsx_runtime.jsx)(TextInput.ks,{value:contentValue,onChange:function(e){return setContentValue(e.target.value)}}),(0,jsx_runtime.jsx)(ToastProgressComponent_template_Separator,{}),(0,jsx_runtime.jsxs)(ToastProgressComponent_template_Wrapper,{children:[(0,jsx_runtime.jsx)(TextInput.ks,{value:textButton1Value,onChange:function(e){return setTextButton1Value(e.target.value)}}),(0,jsx_runtime.jsx)(TextInput.ks,{value:textButton2Value,onChange:function(e){return setTextButton2Value(e.target.value)}})]}),(0,jsx_runtime.jsx)(ToastProgressComponent_template_Separator,{}),(0,jsx_runtime.jsxs)(ToastProgressComponent_template_Wrapper,{children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){var id=(0,uid.L)(),renderFunction=function(id){var handleCloseToast=function(){removeToastItem({id:id,renderToast:renderFunction}),console.log("Toast is closed"),setToastIdStack(function(prevToastIdStack){return prevToastIdStack.filter(function(toast){return toast.renderToast!==renderFunction})})};return(0,jsx_runtime.jsx)(ToastItem_ToastItemWithProgress,{status:toastStatuses[toastStatus],autoDeleteTime:autoDeleteTime,onRemoveNotification:handleCloseToast,children:(0,jsx_runtime.jsxs)(NotificationItem.se,{status:toastStatuses[toastStatus],isClosable:!0,displayStatusIcon:!0,onClose:handleCloseToast,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:titleValue}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:contentValue}),(0,jsx_runtime.jsxs)(NotificationItem.xs,{children:[(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:textButton1Value,onClick:ToastProgressComponent_template_handleTextButtonClick}),(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:textButton2Value,onClick:ToastProgressComponent_template_handleTextButtonClick})]})]})})};addToastItem({id:id,renderToast:renderFunction}),setToastIdStack(function(prev){return ToastProgressComponent_template_to_consumable_array(prev).concat([{id:id,renderToast:renderFunction}])}),setToastStatus(function(prevStatus){return(prevStatus+1)%4})},children:"Добавить сообщение"}),(0,jsx_runtime.jsx)(Button.$n,{disabled:0===toastIdStack.length,onClick:function(){var newToastIdStack=ToastProgressComponent_template_to_consumable_array(toastIdStack),removeToast=newToastIdStack.shift();setToastIdStack(newToastIdStack),removeToast&&removeToastItem(removeToast)},children:"Удалить первое сообщение"})]})]})},ToastProgressComponentTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ToastProgressComponent_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(ToastProvider_ToastProvider,{autoDeleteTime:5e3,children:[(0,jsx_runtime.jsx)(ToastProgressComponent_template_MessageForm,{}),(0,jsx_runtime.jsx)(Toast,{position:props.position})]})})};try{ToastProgressComponentTemplate.displayName="ToastProgressComponentTemplate",ToastProgressComponentTemplate.__docgenInfo={description:"",displayName:"ToastProgressComponentTemplate",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/stories/ToastProgressComponent.template.tsx#ToastProgressComponentTemplate"]={docgenInfo:ToastProgressComponentTemplate.__docgenInfo,name:"ToastProgressComponentTemplate",path:"src/components/Toast/stories/ToastProgressComponent.template.tsx#ToastProgressComponentTemplate"})}catch(__react_docgen_typescript_loader_error){}function ToastBackwardCompatibility_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ToastBackwardCompatibility_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function ToastBackwardCompatibility_template_array_without_holes(arr){if(Array.isArray(arr))return ToastBackwardCompatibility_template_array_like_to_array(arr)}function ToastBackwardCompatibility_template_iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function ToastBackwardCompatibility_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function ToastBackwardCompatibility_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastBackwardCompatibility_template_non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ToastBackwardCompatibility_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ToastBackwardCompatibility_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ToastBackwardCompatibility_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ToastBackwardCompatibility_template_sliced_to_array(arr,i){return ToastBackwardCompatibility_template_array_with_holes(arr)||ToastBackwardCompatibility_template_iterable_to_array_limit(arr,i)||ToastBackwardCompatibility_template_unsupported_iterable_to_array(arr,i)||ToastBackwardCompatibility_template_non_iterable_rest()}function ToastBackwardCompatibility_template_to_consumable_array(arr){return ToastBackwardCompatibility_template_array_without_holes(arr)||ToastBackwardCompatibility_template_iterable_to_array(arr)||ToastBackwardCompatibility_template_unsupported_iterable_to_array(arr)||ToastBackwardCompatibility_template_non_iterable_spread()}function ToastBackwardCompatibility_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return ToastBackwardCompatibility_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ToastBackwardCompatibility_template_array_like_to_array(o,minLen)}}var ToastBackwardCompatibility_template_items=[{status:"error",children:"Запрос завершился ошибкой",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"warning",children:"Слишком много попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"info",children:"Осталось 7 попыток",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0},{status:"success",children:"Запрос выполнен успешно",title:"Заголовок",isClosable:!0,linkText:"Link",displayStatusIcon:!0}],ToastBackwardCompatibility_template_NotificationEmitter=function(){var _useState=ToastBackwardCompatibility_template_sliced_to_array((0,react.useState)([]),2),toastIdStack=_useState[0],setToastIdStack=_useState[1],_useToast=useToast(),addToast=_useToast.addToast,removeById=_useToast.removeById;return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",alignItems:"flex-start"},children:[(0,jsx_runtime.jsx)(Button.$n,{onClick:function(){var toastId=addToast(ToastBackwardCompatibility_template_items[0+Number(Math.round(3*Math.random()))]);setToastIdStack(function(prev){return ToastBackwardCompatibility_template_to_consumable_array(prev).concat([toastId])})},children:"Добавить сообщение"}),(0,jsx_runtime.jsx)("div",{style:{width:20}}),(0,jsx_runtime.jsx)(Button.$n,{disabled:0===toastIdStack.length,onClick:function(){var newToastIdStack=ToastBackwardCompatibility_template_to_consumable_array(toastIdStack),toastId=newToastIdStack.shift();setToastIdStack(newToastIdStack),toastId&&removeById(toastId)},children:"Удалить первое сообщение"})]})},ToastBackwardCompatibilityTemplate=function(_param){var themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=ToastBackwardCompatibility_template_object_without_properties(_param,["themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(ToastProvider_ToastProvider,{autoDeleteTime:props.autoDeleteTime,children:[(0,jsx_runtime.jsx)(ToastBackwardCompatibility_template_NotificationEmitter,{}),(0,jsx_runtime.jsx)(Toast,{position:props.position})]})})};try{ToastBackwardCompatibilityTemplate.displayName="ToastBackwardCompatibilityTemplate",ToastBackwardCompatibilityTemplate.__docgenInfo={description:"",displayName:"ToastBackwardCompatibilityTemplate",props:{position:{defaultValue:null,description:"Позиция всплывающего уведомления",name:"position",required:!1,type:{name:"enum",value:[{value:'"top-right"'},{value:'"bottom-right"'},{value:'"bottom-left"'}]}},widthContainer:{defaultValue:null,description:"Ширина контейнера уведомлений",name:"widthContainer",required:!1,type:{name:"string | number"}},autoDeleteTime:{defaultValue:null,description:"Время, через которое удаляются уведомления",name:"autoDeleteTime",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"Элементы, имеющие доступ к контексту",name:"children",required:!1,type:{name:"ReactNode"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/stories/ToastBackwardCompatibility.template.tsx#ToastBackwardCompatibilityTemplate"]={docgenInfo:ToastBackwardCompatibilityTemplate.__docgenInfo,name:"ToastBackwardCompatibilityTemplate",path:"src/components/Toast/stories/ToastBackwardCompatibility.template.tsx#ToastBackwardCompatibilityTemplate"})}catch(__react_docgen_typescript_loader_error){}let ToastNotification_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Button,
  DefaultToastItem,
  Toast,
  ToastItemWithAutoDelete,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type { ID, IdentifyToast, ToastItemProps, ToastProps, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

const items: IdentifyToast[] = [
  {
    status: 'error',
    children: \`Запрос завершился ошибкой\`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const NotificationEmitter = () => {
  const [toastStack, setToastStack] = useState<Array<ToastItemProps>>([]);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const id = uid();
    const renderToast = (id: ID) => {
      const handleOnClose = () => {
        removeToastItem({ id, renderToast });
        // eslint-disable-next-line no-console
        console.log('Toast is closed');
        setToastStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderToast));
      };

      return (
        <>
          {autoDeleteTime ? (
            <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            </ToastItemWithAutoDelete>
          ) : (
            <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
          )}
        </>
      );
    };
    addToastItem({ id, renderToast });
    setToastStack((prev) => [...prev, { id, renderToast }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastStack];
    const toastToRemove = newToastIdStack.shift();
    setToastStack(newToastIdStack);
    if (toastToRemove) {
      removeToastItem(toastToRemove);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', height: '200px' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};

export const ToastNotificationTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ToastProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast style={{ top: 128, left: 64 }} />
      </ToastProvider>
    </ThemeProvider>
  );
};
`,ToastNotificationBase_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Button,
  DefaultToastItem,
  Toast,
  ToastItemWithAutoDelete,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type { ToastProps, ID, IdentifyToast, ToastItemProps, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

const items: IdentifyToast[] = [
  {
    status: 'error',
    children: \`Запрос завершился ошибкой\`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const NotificationEmitter = () => {
  const [toastStack, setToastStack] = useState<Array<ToastItemProps>>([]);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const id = uid();
    const renderToast = (id: ID) => {
      const handleOnClose = () => {
        removeToastItem({ id, renderToast });
        // eslint-disable-next-line no-console
        console.log('Toast is closed');
        setToastStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderToast));
      };

      return (
        <>
          {autoDeleteTime ? (
            <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            </ToastItemWithAutoDelete>
          ) : (
            <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
          )}
        </>
      );
    };
    addToastItem({ id, renderToast });
    setToastStack((prev) => [...prev, { id, renderToast }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastStack];
    const toastToRemove = newToastIdStack.shift();
    setToastStack(newToastIdStack);
    if (toastToRemove) {
      removeToastItem(toastToRemove);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};

export const ToastNotificationBaseTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ToastProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};
`,ToastLineNotification_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Button,
  DefaultToastItem,
  Toast,
  ToastItemWithAutoDelete,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type { ToastProps, ID, IdentifyToast, ToastItemProps, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

const items: IdentifyToast[] = [
  {
    status: 'error',
    children: \`Запрос завершился ошибкой\`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const NotificationEmitter = () => {
  const [toastStack, setToastStack] = useState<Array<ToastItemProps>>([]);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const id = uid();
    const renderToast = (id: ID) => {
      const handleOnClose = () => {
        removeToastItem({ id, renderToast });
        // eslint-disable-next-line no-console
        console.log('Toast is closed');
        setToastStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderToast));
      };

      return (
        <>
          {autoDeleteTime ? (
            <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            </ToastItemWithAutoDelete>
          ) : (
            <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
          )}
        </>
      );
    };
    addToastItem({ id, renderToast });
    setToastStack((prev) => [...prev, { id, renderToast }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastStack];
    const toastToRemove = newToastIdStack.shift();
    setToastStack(newToastIdStack);
    if (toastToRemove) {
      removeToastItem(toastToRemove);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', height: '200px' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};

export const ToastLineNotificationTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ToastProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast style={{ top: 128, left: 64, width: 'initial' }} />
      </ToastProvider>
    </ThemeProvider>
  );
};
`,ToastCustomComponent_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Button,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  StyledNotificationItem,
  TextButton,
  TextInput,
  Toast,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type { ID, ToastItemProps, ToastProps, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div\`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
\`;

const Separator = styled.div\`
  height: 20px;
\`;

const handleTextButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('TextButton click');
};

const MessageForm = () => {
  const [toastIdStack, setToastIdStack] = useState<Array<ToastItemProps>>([]);
  const [inputValue, setInputValue] = useState('Notification message');

  const { addToastItem, removeToastItem } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeToastItem({ id, renderToast: renderFunction });
        // eslint-disable-next-line no-console
        console.log('Toast is closed');
        setToastIdStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.id !== id));
      };
      return (
        <StyledNotificationItem isClosable={true} displayStatusIcon={true} onClose={handleCloseToast}>
          <NotificationItemTitle>Title</NotificationItemTitle>
          <NotificationItemContent>{inputValue}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text="TextButton1" onClick={handleTextButtonClick} />
            <TextButton dimension="s" text="TextButton2" onClick={handleTextButtonClick} />
          </NotificationItemButtonPanel>
        </StyledNotificationItem>
      );
    };
    addToastItem({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeToastItem(removeToast);
    }
  };

  return (
    <div style={{ width: '550px' }}>
      <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Separator />
      <Wrapper>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
          Удалить первое сообщение
        </Button>
      </Wrapper>
    </div>
  );
};

export const ToastCustomComponentTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ToastProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ToastProvider>
        <MessageForm />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};
`,ToastProgressComponent_templateraw_namespaceObject=`import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Button,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  StyledNotificationItem,
  TextButton,
  TextInput,
  Toast,
  ToastItemWithProgress,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type { ID, ToastItemProps, ToastProps, NotificationItemStatus, BorderRadiusType } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Wrapper = styled.div\`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
\`;

const Separator = styled.div\`
  height: 20px;
\`;

const toastStatuses: NotificationItemStatus[] = ['info', 'error', 'success', 'warning'];

const handleTextButtonClick = () => {
  // eslint-disable-next-line no-console
  console.log('TextButton click');
};

const MessageForm = () => {
  const [toastIdStack, setToastIdStack] = useState<Array<ToastItemProps>>([]);
  const [titleValue, setTitleValue] = useState('Toast title');
  const [contentValue, setContentValue] = useState('Toast content');
  const [textButton1Value, setTextButton1Value] = useState('TextButton1');
  const [textButton2Value, setTextButton2Value] = useState('TextButton2');
  const [toastStatus, setToastStatus] = useState(0);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeToastItem({ id, renderToast: renderFunction });
        // eslint-disable-next-line no-console
        console.log('Toast is closed');
        setToastIdStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderFunction));
      };

      return (
        <ToastItemWithProgress
          status={toastStatuses[toastStatus]}
          autoDeleteTime={autoDeleteTime}
          onRemoveNotification={handleCloseToast}
        >
          <StyledNotificationItem
            status={toastStatuses[toastStatus]}
            isClosable={true}
            displayStatusIcon={true}
            onClose={handleCloseToast}
          >
            <NotificationItemTitle>{titleValue}</NotificationItemTitle>
            <NotificationItemContent>{contentValue}</NotificationItemContent>
            <NotificationItemButtonPanel>
              <TextButton dimension="s" text={textButton1Value} onClick={handleTextButtonClick} />
              <TextButton dimension="s" text={textButton2Value} onClick={handleTextButtonClick} />
            </NotificationItemButtonPanel>
          </StyledNotificationItem>
        </ToastItemWithProgress>
      );
    };
    addToastItem({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
    setToastStatus((prevStatus) => (prevStatus + 1) % 4);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeToastItem(removeToast);
    }
  };

  return (
    <div style={{ width: '550px' }}>
      <TextInput value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
      <Separator />
      <TextInput value={contentValue} onChange={(e) => setContentValue(e.target.value)} />
      <Separator />
      <Wrapper>
        <TextInput value={textButton1Value} onChange={(e) => setTextButton1Value(e.target.value)} />
        <TextInput value={textButton2Value} onChange={(e) => setTextButton2Value(e.target.value)} />
      </Wrapper>
      <Separator />
      <Wrapper>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
          Удалить первое сообщение
        </Button>
      </Wrapper>
    </div>
  );
};

export const ToastProgressComponentTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ToastProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ToastProvider autoDeleteTime={5000}>
        <MessageForm />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};
`,ToastBackwardCompatibility_templateraw_namespaceObject=`import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Button, Toast, ToastProvider, useToast } from '@admiral-ds/react-ui';
import type { IdentifyToast, ToastProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

const items: IdentifyToast[] = [
  {
    status: 'error',
    children: \`Запрос завершился ошибкой\`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const NotificationEmitter = () => {
  const [toastIdStack, setToastIdStack] = useState<Array<string>>([]);

  const { addToast, removeById } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const toastId = addToast(toast);
    setToastIdStack((prev) => [...prev, toastId]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const toastId = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (toastId) {
      removeById(toastId);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};

export const ToastBackwardCompatibilityTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: ToastProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};
`;function Toast_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Toast_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function Toast_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Toast_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function Toast_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Toast_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Toast_stories_define_property(target,key,source[key])})}return target}function Toast_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function Toast_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Toast_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function Toast_stories_sliced_to_array(arr,i){return Toast_stories_array_with_holes(arr)||Toast_stories_iterable_to_array_limit(arr,i)||Toast_stories_unsupported_iterable_to_array(arr,i)||Toast_stories_non_iterable_rest()}function Toast_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Toast_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return Toast_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Toast_stories_array_like_to_array(o,minLen)}}function Toast_stories_templateObject(){var data=Toast_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Toast_stories_templateObject=function _templateObject(){return data},data}function Toast_stories_templateObject1(){var data=Toast_stories_tagged_template_literal([`
  height: 20px;
`]);return Toast_stories_templateObject1=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(Toast_stories_templateObject()),Toast_stories_Separator=styled_components_browser_esm.Ay.div(Toast_stories_templateObject1());let Toast_stories={title:"Admiral-2.1/Toast",decorators:void 0,component:Toast,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Компонент служит для демонстрации выплывающих сообщений. В качестве таких уведомлений рекомендуется использовать ",(0,jsx_runtime.jsx)(LinkTo,{kind:"Admiral-2.1/NotificationItem",story:"static-notification-item-base-status",children:"NotificationItem"}),".",(0,jsx_runtime.jsx)(Toast_stories_Separator,{}),"Компонент Toast необходимо оборачивать в ToastProvider для управления состоянием всплывающих нотификаций. Через значение autoDeleteTime в ToastProvider можно задать в ms время, по истечению которого нотификация скроется. Если данный параметр не задан, то следует дать возможность закрывать уведомление по нажатию иконки закрытия (при использовании NotificationItem выставить isClosable и передать в onClose removeToastItem)."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27014"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27525"}]},args:{autoDeleteTime:3e3,position:"top-right"},argTypes:{autoDeleteTime:{type:"number"},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var ToastNotification={render:function(props){var CSSCustomProps=Toast_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ToastNotificationTemplate,Toast_stories_object_spread_props(Toast_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ToastNotification_templateraw_namespaceObject}}},name:"Toast. Настройка места всплытия через стили."},ToastNotificationBase={render:function(props){var CSSCustomProps=Toast_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ToastNotificationBaseTemplate,Toast_stories_object_spread_props(Toast_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ToastNotificationBase_templateraw_namespaceObject}}},name:"Toast. Базовый пример."},ToastLineNotification={render:function(props){var CSSCustomProps=Toast_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ToastLineNotificationTemplate,Toast_stories_object_spread_props(Toast_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ToastLineNotification_templateraw_namespaceObject}}},name:"Line Notification."},ToastCustomComponent={render:function(props){var CSSCustomProps=Toast_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ToastCustomComponentTemplate,Toast_stories_object_spread_props(Toast_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ToastCustomComponent_templateraw_namespaceObject}}},name:"Toast. Custom component."},ToastProgressComponent={render:function(props){var CSSCustomProps=Toast_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ToastProgressComponentTemplate,Toast_stories_object_spread_props(Toast_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ToastProgressComponent_templateraw_namespaceObject}}},name:"Toast. Custom component with Progress."},ToastBackwardCompatibility={render:function(props){var CSSCustomProps=Toast_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(ToastBackwardCompatibilityTemplate,Toast_stories_object_spread_props(Toast_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:ToastBackwardCompatibility_templateraw_namespaceObject}}},name:"Toast. Backward compatibility."};ToastNotification.parameters={...ToastNotification.parameters,docs:{...ToastNotification.parameters?.docs,source:{originalSource:`{
  render: ToastNotificationStory,
  parameters: {
    docs: {
      source: {
        code: ToastNotificationRaw
      }
    }
  },
  name: 'Toast. Настройка места всплытия через стили.'
}`,...ToastNotification.parameters?.docs?.source}}},ToastNotificationBase.parameters={...ToastNotificationBase.parameters,docs:{...ToastNotificationBase.parameters?.docs,source:{originalSource:`{
  render: ToastNotificationBaseStory,
  parameters: {
    docs: {
      source: {
        code: ToastNotificationBaseRaw
      }
    }
  },
  name: 'Toast. Базовый пример.'
}`,...ToastNotificationBase.parameters?.docs?.source}}},ToastLineNotification.parameters={...ToastLineNotification.parameters,docs:{...ToastLineNotification.parameters?.docs,source:{originalSource:`{
  render: ToastLineNotificationStory,
  parameters: {
    docs: {
      source: {
        code: ToastLineNotificationRaw
      }
    }
  },
  name: 'Line Notification.'
}`,...ToastLineNotification.parameters?.docs?.source}}},ToastCustomComponent.parameters={...ToastCustomComponent.parameters,docs:{...ToastCustomComponent.parameters?.docs,source:{originalSource:`{
  render: ToastCustomComponentStory,
  parameters: {
    docs: {
      source: {
        code: ToastCustomComponentRaw
      }
    }
  },
  name: 'Toast. Custom component.'
}`,...ToastCustomComponent.parameters?.docs?.source}}},ToastProgressComponent.parameters={...ToastProgressComponent.parameters,docs:{...ToastProgressComponent.parameters?.docs,source:{originalSource:`{
  render: ToastProgressComponentStory,
  parameters: {
    docs: {
      source: {
        code: ToastProgressComponentRaw
      }
    }
  },
  name: 'Toast. Custom component with Progress.'
}`,...ToastProgressComponent.parameters?.docs?.source}}},ToastBackwardCompatibility.parameters={...ToastBackwardCompatibility.parameters,docs:{...ToastBackwardCompatibility.parameters?.docs,source:{originalSource:`{
  render: ToastBackwardCompatibilityStory,
  parameters: {
    docs: {
      source: {
        code: ToastBackwardCompatibilityRaw
      }
    }
  },
  name: 'Toast. Backward compatibility.'
}`,...ToastBackwardCompatibility.parameters?.docs?.source}}};let __namedExportsOrder=["ToastNotification","ToastNotificationBase","ToastLineNotification","ToastCustomComponent","ToastProgressComponent","ToastBackwardCompatibility"]},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>uid});function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}}}]);
//# sourceMappingURL=components-Toast-stories-Toast-stories.dedc3f77.iframe.bundle.js.map