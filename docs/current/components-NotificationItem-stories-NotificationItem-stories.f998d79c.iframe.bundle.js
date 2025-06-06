"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2189],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m7.79 3.28c.27.28.73.27 1-.02l4.42-4.8c.24-.27.22-.68-.03-.92a.66.66 0 0 0-.93.04l-3.98 4.34-2.4-2.4a.67.67 0 0 0-.93 0c-.25.25-.25.67 0 .92z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m13-3.92c.25.25.25.66 0 .92l-3.09 3 3 3.08c.26.25.26.66 0 .92-.25.25-.66.25-.91 0l-3-3.09L9 16c-.26.25-.67.25-.92 0a.64.64 0 0 1 0-.92l3-3.08-3-3a.64.64 0 0 1 0-.92.64.64 0 0 1 .92 0l3 3 3.08-3a.64.64 0 0 1 .92 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 3c-4.98 0-9 4.02-9 9 0 4.97 4.02 9 9 9a9 9 0 0 0 9-9c0-4.98-4.03-9-9-9m0 10.69c.35 0 .64-.29.64-.65V7.89c0-.35-.29-.65-.64-.65-.36 0-.65.3-.65.65v5.15c0 .36.29.65.65.65m.85 2.21a.856.856 0 0 1-1.71 0 .856.856 0 0 1 1.71 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-4.75c-.47 0-.86.38-.86.84 0 .47.39.86.86.86.46 0 .85-.39.85-.86 0-.46-.39-.84-.85-.84M14.1 16c0 .41-.34.75-.75.75h-.06c-1.13 0-2.04-.92-2.04-2.05v-3.75c0-.42.33-.75.75-.75.41 0 .75.33.75.75v3.75c0 .3.24.55.54.55h.06c.41 0 .75.33.75.75"})))};__webpack_require__.p},"./src/components/NotificationItem/stories/NotificationItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StaticNotificationItemBase:()=>StaticNotificationItemBase,StaticNotificationItemStatus:()=>StaticNotificationItemStatus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>NotificationItem_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),TextButton=__webpack_require__("./src/components/TextButton/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var NotificationItemBaseTemplate=function(_param){var status=_param.status,displayStatusIcon=_param.displayStatusIcon,isClosable=_param.isClosable,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["status","displayStatusIcon","isClosable","themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(NotificationItem.rn,_object_spread_props(_object_spread({},props),{status:status,displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Заголовок оповещения"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Тут находится текст короткого оповещения"}),(0,jsx_runtime.jsx)(NotificationItem.xs,{children:(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:"Text Button"})})]}))})};try{NotificationItemBaseTemplate.displayName="NotificationItemBaseTemplate",NotificationItemBaseTemplate.__docgenInfo={description:"",displayName:"NotificationItemBaseTemplate",props:{status:{defaultValue:null,description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},isBorderHidden:{defaultValue:null,description:"Скрыть обводку notification",name:"isBorderHidden",required:!1,type:{name:"boolean"}},isClosable:{defaultValue:null,description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:null,description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия уведомления. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, never>) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NotificationItem/stories/NotificationItemBase.template.tsx#NotificationItemBaseTemplate"]={docgenInfo:NotificationItemBaseTemplate.__docgenInfo,name:"NotificationItemBaseTemplate",path:"src/components/NotificationItem/stories/NotificationItemBase.template.tsx#NotificationItemBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}function NotificationItemStatus_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function NotificationItemStatus_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){NotificationItemStatus_template_define_property(target,key,source[key])})}return target}function NotificationItemStatus_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function NotificationItemStatus_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):NotificationItemStatus_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function NotificationItemStatus_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=NotificationItemStatus_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function NotificationItemStatus_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  margin: 20px;
`]);return _templateObject=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(_templateObject()),NotificationItemStatus_template_title="Заголовок оповещения",NotificationItemStatus_template_body="Тут находится текст короткого оповещения",NotificationItemStatus_template_linkText="Text Button",NotificationItemStatusTemplate=function(_param){var _param_displayStatusIcon=_param.displayStatusIcon,displayStatusIcon=void 0===_param_displayStatusIcon||_param_displayStatusIcon,_param_isClosable=_param.isClosable,isClosable=void 0===_param_isClosable||_param_isClosable,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=NotificationItemStatus_template_object_without_properties(_param,["displayStatusIcon","isClosable","themeBorderKind","CSSCustomProps"]);return(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:[(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsxs)(NotificationItem.rn,NotificationItemStatus_template_object_spread_props(NotificationItemStatus_template_object_spread({},props),{status:"info",displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:NotificationItemStatus_template_title}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:NotificationItemStatus_template_body}),(0,jsx_runtime.jsx)(NotificationItem.xs,{children:(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:NotificationItemStatus_template_linkText})})]}))}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsxs)(NotificationItem.rn,NotificationItemStatus_template_object_spread_props(NotificationItemStatus_template_object_spread({},props),{status:"warning",displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:NotificationItemStatus_template_title}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:NotificationItemStatus_template_body}),(0,jsx_runtime.jsx)(NotificationItem.xs,{children:(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:NotificationItemStatus_template_linkText})})]}))}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsxs)(NotificationItem.rn,NotificationItemStatus_template_object_spread_props(NotificationItemStatus_template_object_spread({},props),{status:"error",displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:NotificationItemStatus_template_title}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:NotificationItemStatus_template_body}),(0,jsx_runtime.jsx)(NotificationItem.xs,{children:(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:NotificationItemStatus_template_linkText})})]}))}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsxs)(NotificationItem.rn,NotificationItemStatus_template_object_spread_props(NotificationItemStatus_template_object_spread({},props),{status:"success",displayStatusIcon:displayStatusIcon,isClosable:isClosable,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:NotificationItemStatus_template_title}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:NotificationItemStatus_template_body}),(0,jsx_runtime.jsx)(NotificationItem.xs,{children:(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:NotificationItemStatus_template_linkText})})]}))})]})};try{NotificationItemStatusTemplate.displayName="NotificationItemStatusTemplate",NotificationItemStatusTemplate.__docgenInfo={description:"",displayName:"NotificationItemStatusTemplate",props:{status:{defaultValue:null,description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"warning"'},{value:'"info"'}]}},isBorderHidden:{defaultValue:null,description:"Скрыть обводку notification",name:"isBorderHidden",required:!1,type:{name:"boolean"}},isClosable:{defaultValue:{value:"true"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"true"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}},closeButtonPropsConfig:{defaultValue:null,description:`Конфиг функция пропсов для кнопки закрытия уведомления. На вход получает начальный набор пропсов, на
выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов.`,name:"closeButtonPropsConfig",required:!1,type:{name:'((props: FastOmit<Omit<IconPlacementProps & RefAttributes<HTMLButtonElement>, "ref"> & { ref?: ((instance: HTMLButtonElement | null) => void) | RefObject<...> | null; }, never>) => Partial<...>)'}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NotificationItem/stories/NotificationItemStatus.template.tsx#NotificationItemStatusTemplate"]={docgenInfo:NotificationItemStatusTemplate.__docgenInfo,name:"NotificationItemStatusTemplate",path:"src/components/NotificationItem/stories/NotificationItemStatus.template.tsx#NotificationItemStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}let NotificationItemBase_templateraw_namespaceObject=`import { ThemeProvider } from 'styled-components';

import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';
import type { NotificationItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Text Button';

export const NotificationItemBaseTemplate = ({
  status,
  displayStatusIcon,
  isClosable,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NotificationItemProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <NotificationItem {...props} status={status} displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
        <NotificationItemTitle>{title}</NotificationItemTitle>
        <NotificationItemContent>{body}</NotificationItemContent>
        <NotificationItemButtonPanel>
          <TextButton dimension="s" text={linkText} />
        </NotificationItemButtonPanel>
      </NotificationItem>
    </ThemeProvider>
  );
};
`,NotificationItemStatus_templateraw_namespaceObject=`import styled, { ThemeProvider } from 'styled-components';

import {
  NotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  TextButton,
} from '@admiral-ds/react-ui';
import type { NotificationItemProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const Layout = styled.div\`
  margin: 20px;
\`;

const title = 'Заголовок оповещения';
const body = 'Тут находится текст короткого оповещения';
const linkText = 'Text Button';

export const NotificationItemStatusTemplate = ({
  displayStatusIcon = true,
  isClosable = true,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: NotificationItemProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Layout>
        <NotificationItem {...props} status="info" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
      <Layout>
        <NotificationItem {...props} status="warning" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
      <Layout>
        <NotificationItem {...props} status="error" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
      <Layout>
        <NotificationItem {...props} status="success" displayStatusIcon={displayStatusIcon} isClosable={isClosable}>
          <NotificationItemTitle>{title}</NotificationItemTitle>
          <NotificationItemContent>{body}</NotificationItemContent>
          <NotificationItemButtonPanel>
            <TextButton dimension="s" text={linkText} />
          </NotificationItemButtonPanel>
        </NotificationItem>
      </Layout>
    </ThemeProvider>
  );
};
`;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function NotificationItem_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function NotificationItem_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){NotificationItem_stories_define_property(target,key,source[key])})}return target}function NotificationItem_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function NotificationItem_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):NotificationItem_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function NotificationItem_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function NotificationItem_stories_templateObject(){var data=NotificationItem_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return NotificationItem_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(NotificationItem_stories_templateObject());let NotificationItem_stories={title:"Admiral-2.1/NotificationItem",decorators:void 0,component:NotificationItem.rn,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Компонент служит для демонстрации статических нотификаций. Существует в четырех типа нотификаций: Информационное сообщение, предупреждение, ошибка и положительные действия. Применяется как самостоятельный элемент."})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27484"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27651"}]},argTypes:{displayStatusIcon:{type:"boolean"},isClosable:{type:"boolean"},onClose:{action:"clicked"},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}};var StaticNotificationItemBase={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(NotificationItemBaseTemplate,NotificationItem_stories_object_spread_props(NotificationItem_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:NotificationItemBase_templateraw_namespaceObject}}},name:"Статическая нотификация. Базовый пример."},StaticNotificationItemStatus={render:function(props){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(NotificationItemStatusTemplate,NotificationItem_stories_object_spread_props(NotificationItem_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:NotificationItemStatus_templateraw_namespaceObject}}},name:"Статусы статических нотификаций"};StaticNotificationItemBase.parameters={...StaticNotificationItemBase.parameters,docs:{...StaticNotificationItemBase.parameters?.docs,source:{originalSource:`{
  render: StaticNotificationItemBaseStory,
  parameters: {
    docs: {
      source: {
        code: StaticNotificationItemBaseRaw
      }
    }
  },
  name: 'Статическая нотификация. Базовый пример.'
}`,...StaticNotificationItemBase.parameters?.docs?.source}}},StaticNotificationItemStatus.parameters={...StaticNotificationItemStatus.parameters,docs:{...StaticNotificationItemStatus.parameters?.docs,source:{originalSource:`{
  render: StaticNotificationItemStatusStory,
  parameters: {
    docs: {
      source: {
        code: StaticNotificationItemStatusRaw
      }
    }
  },
  name: 'Статусы статических нотификаций'
}`,...StaticNotificationItemStatus.parameters?.docs?.source}}};let __namedExportsOrder=["StaticNotificationItemBase","StaticNotificationItemStatus"]},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
`]);return _templateObject1=function _templateObject(){return data},data}__webpack_require__.p;var spin=(0,styled_components_browser_esm.i7)(_templateObject()),SpinnerIcon=(0,styled_components_browser_esm.Ay)(function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})(_templateObject1(),spin,function(param){var $inverse=param.$inverse,theme=param.theme;return $inverse?"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")})},"./src/components/Spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: relative;
  container-type: inline-size;
  `,`;

  & svg {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}var sizes=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}},function(param){switch(param.$dimension){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}),SpinnerWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div(_templateObject1(),sizes,function(p){return p.$svgMixin||""}),Spinner=function(_param){var _param_dimension=_param.dimension,_param_inverse=_param.inverse,svgMixin=_param.svgMixin,props=_object_without_properties(_param,["dimension","inverse","svgMixin"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpinnerWrapper,_object_spread_props(_object_spread({$dimension:void 0===_param_dimension?"m":_param_dimension,$svgMixin:svgMixin,role:"alert","aria-live":"assertive"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SpinnerIcon__WEBPACK_IMPORTED_MODULE_2__.N,{$inverse:void 0!==_param_inverse&&_param_inverse})}))};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{dimension:{defaultValue:{value:"m"},description:"Рзамер спиннера",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"ms"'}]}},inverse:{defaultValue:{value:"false"},description:"Белый цвет компонента",name:"inverse",required:!1,type:{name:"boolean"}},svgMixin:{defaultValue:null,description:"Миксин svg иконки",name:"svgMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextButton/commonMixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ef:()=>ButtonContainer,Tu:()=>IconContainer,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([""]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([""]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-image:
    linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size:
    315px 250px,
    315px 180px,
    100px 100px,
    225px 30px;
  background-position:
    -315px 0,
    0 0,
    0 190px,
    50px 195px;
  animation: `,` 1.5s infinite;
`]);return _templateObject3=function _templateObject(){return data},data}var IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject()),ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject1()),loadingKeyframes=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject2()),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3(),loadingKeyframes)},"./src/components/TextButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>TextButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),commonMixin=__webpack_require__("./src/components/TextButton/commonMixin.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,` {
    `,`;
    border-radius: `,`;
    svg {
      visibility: `,`;
    }
  }

  border-radius: `,`;

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:hover {
    cursor: pointer;
    color: var(--admiral-color-Primary_Primary70, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary70, `,`);
        }
      }
    }
  }

  &:active {
    color: var(--admiral-color-Primary_Primary80, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary80, `,`);
        }
      }
    }
  }

  &:disabled {
    cursor: `,`;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Neutral_Neutral30, `,`);
        }
      }
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Primary_Primary60Main, `,`);
      }
    }
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral50, `,`);
      }
    }
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &[data-appearance='primary'] {
    `,`
  }
  &[data-appearance='secondary'] {
    `,`
  }

  `,`
`]);return _templateObject3=function _templateObject(){return data},data}var defaultAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject(),commonMixin.Tu,function(param){return param.$skeleton&&commonMixin.vy},function(param){return param.$skeleton?"50%":""},function(p){return p.$skeleton||p.$loading?"hidden":"visible"},function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,borderRadius.VM)(p.theme.shape),")")},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 70"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 80"]},function(param){var $skeleton=param.$skeleton,$loading=param.$loading;return $skeleton||$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 30"]}),primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 60 Main"]}),secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 90"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 50"]}),appearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),primaryAppearanceMixin,secondaryAppearanceMixin,defaultAppearanceMixin),typography=__webpack_require__("./src/components/Typography/typography.ts");function dimensionMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function dimensionMixin_templateObject(){var data=dimensionMixin_tagged_template_literal([`
  &[data-dimension='m'] {
    `,` {
      width: 24px;
      height: 24px;
    }
    `,`;
  }

  &[data-dimension='s'] {
    `,` {
      width: 20px;
      height: 20px;
    }
    `,`;
  }
`]);return dimensionMixin_templateObject=function _templateObject(){return data},data}var dimensionMixin=(0,styled_components_browser_esm.AH)(dimensionMixin_templateObject(),commonMixin.Tu,typography.Il["Button/Button 1"],commonMixin.Tu,typography.Il["Button/Button 2"]),animation=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TextButton_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextButton_templateObject(){var data=TextButton_tagged_template_literal([`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return TextButton_templateObject=function _templateObject(){return data},data}function TextButton_templateObject1(){var data=TextButton_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  vertical-align: middle;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  white-space: nowrap;
  `,`;

  `,` {
    visibility: `,`;
  }

  `,` {
    visibility: `,`;
  }

  `,`;

  `,`;
`]);return TextButton_templateObject1=function _templateObject(){return data},data}var StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y)(TextButton_templateObject()),StyledButton=styled_components_browser_esm.Ay.button(TextButton_templateObject1(),function(p){return p.$skeleton&&animation.h},commonMixin.Ef,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},commonMixin.Tu,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},appearanceMixin,dimensionMixin),TextButton=react.forwardRef(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,icon=_param.icon,iconStart=_param.iconStart,iconEnd=_param.iconEnd,_param_type=_param.type,text=_param.text,_param_displayRight=_param.displayRight,displayRight=void 0!==_param_displayRight&&_param_displayRight,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,props=_object_without_properties(_param,["appearance","dimension","icon","iconStart","iconEnd","type","text","displayRight","loading","skeleton"]),disabled=props.disabled||loading||skeleton;return(0,jsx_runtime.jsxs)(StyledButton,_object_spread_props(_object_spread({},props),{"data-dimension":dimension,"data-appearance":appearance,ref:ref,$appearance:appearance,$dimension:dimension,type:void 0===_param_type?"button":_param_type,disabled:disabled,$loading:loading,$skeleton:skeleton,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:"s"===dimension?"ms":"m"}),iconStart?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconStart}):icon&&!displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null,(0,jsx_runtime.jsx)(commonMixin.Ef,{children:(0,jsx_runtime.jsx)("span",{children:text})}),iconEnd?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconEnd}):icon&&displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null]}))});TextButton.displayName="TextButton";try{TextButton.displayName="TextButton",TextButton.__docgenInfo={description:"",displayName:"TextButton",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},displayRight:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Позиционирование иконки. По умолчанию - слева`,name:"displayRight",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/index.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/TextButton/index.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
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
//# sourceMappingURL=components-NotificationItem-stories-NotificationItem-stories.f998d79c.iframe.bundle.js.map