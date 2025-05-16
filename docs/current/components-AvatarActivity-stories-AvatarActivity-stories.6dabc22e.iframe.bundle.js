"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1297],{"./src/components/AvatarActivity/stories/AvatarActivity.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarPlayground:()=>AvatarPlayground,SingleAvatar:()=>SingleAvatar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AvatarActivity_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),AvatarBase=__webpack_require__("./src/components/AvatarBase/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var AvatarActivity=(0,react.forwardRef)(function(_param,ref){var _param_showActivityRing=_param.showActivityRing,props=_object_without_properties(_param,["showActivityRing"]);return(0,jsx_runtime.jsx)(AvatarBase.d,_object_spread_props(_object_spread({ref:ref},props),{withActivityRing:!0,showActivityRing:void 0!==_param_showActivityRing&&_param_showActivityRing}))});AvatarActivity.displayName="AvatarActivity";try{AvatarActivity.displayName="AvatarActivity",AvatarActivity.__docgenInfo={description:"",displayName:"AvatarActivity",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},status:{defaultValue:null,description:`Статус пользователя -
можно выбрать один из четырех исходных вариантов, либо задать свой цвет.`,name:"status",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:`Внешний вид компонента (цвет заливки, текста, иконки) -
можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
то по умолчанию будут применены те же цвета, что и при appearance='neutral2'`,name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:`Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
двух слов (одного слова для dimension='s'), входящих в userName`,name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}},showActivityRing:{defaultValue:{value:"false"},description:"Отображение activity ring",name:"showActivityRing",required:!1,type:{name:"boolean"}},group:{defaultValue:null,description:"Для внутреннего использования! Отображение аватара в составе группы (когда правый край аватара усечен)",name:"group",required:!1,type:{name:"boolean"}},isMenuAvatar:{defaultValue:null,description:"Для внутреннего использования! Используется ли аватар в качестве меню. Если да - то userName выводится без изменений",name:"isMenuAvatar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarActivity/index.tsx#AvatarActivity"]={docgenInfo:AvatarActivity.__docgenInfo,name:"AvatarActivity",path:"src/components/AvatarActivity/index.tsx#AvatarActivity"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),PersonSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PersonSolid.svg");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  position: relative;
  display: flex;
  gap: 20px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: 100%;
`]);return _templateObject2=function _templateObject(){return data},data}var imageURL="https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",Container=styled_components_browser_esm.Ay.div(_templateObject()),Wrapper=styled_components_browser_esm.Ay.div(_templateObject1()),StyledNotificationItem=(0,styled_components_browser_esm.Ay)(NotificationItem.rn)(_templateObject2()),AvatarActivitySingleTemplate=function(param){var appearance=param.appearance,showTooltip=param.showTooltip,_param_showActivityRing=param.showActivityRing,showActivityRing=void 0===_param_showActivityRing||_param_showActivityRing;return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Размеры и типы"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Опционально Tooltip можно отключать."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"xs",userName:"Dimension xs"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"s",userName:"Dimension s"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"m",userName:"Dimension m"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"l",userName:"Dimension l"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,userName:"Dimension xl"})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"xs",userName:"Dimension xs",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"s",userName:"Dimension s",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"m",userName:"Dimension m",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"l",userName:"Dimension l",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,userName:"Dimension xl",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"xs",userName:"Dimension xs",href:imageURL}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"s",userName:"Dimension s",href:imageURL}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"m",userName:"Dimension m",href:imageURL}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"l",userName:"Dimension l",href:imageURL}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,userName:"Dimension xl",href:imageURL})]}),(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Avatar с опцией «Status»"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Статусы: «В сети», «Не беспокоить», «Отошел», «Не в сети»."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"xs",userName:"Dimension xs",status:"success"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"s",userName:"Dimension s",status:"danger"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"m",userName:"Dimension m",status:"warn"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"l",userName:"Dimension l",status:"inactive"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,userName:"Dimension xl",status:"success"})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"xs",userName:"Dimension xs",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"success"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"s",userName:"Dimension s",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"danger"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"m",userName:"Dimension m",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"warn"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"l",userName:"Dimension l",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"inactive"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,userName:"Dimension xl",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"success"})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"xs",userName:"Dimension xs",href:imageURL,status:"success"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"s",userName:"Dimension s",href:imageURL,status:"danger"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"m",userName:"Dimension m",href:imageURL,status:"warn"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,dimension:"l",userName:"Dimension l",href:imageURL,status:"inactive"}),(0,jsx_runtime.jsx)(AvatarActivity,{appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing,userName:"Dimension xl",href:imageURL,status:"success"})]})]})};try{AvatarActivitySingleTemplate.displayName="AvatarActivitySingleTemplate",AvatarActivitySingleTemplate.__docgenInfo={description:"",displayName:"AvatarActivitySingleTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},status:{defaultValue:null,description:`Статус пользователя -
можно выбрать один из четырех исходных вариантов, либо задать свой цвет.`,name:"status",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:`Внешний вид компонента (цвет заливки, текста, иконки) -
можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
то по умолчанию будут применены те же цвета, что и при appearance='neutral2'`,name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:`Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
двух слов (одного слова для dimension='s'), входящих в userName`,name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}},showActivityRing:{defaultValue:{value:"true"},description:"Отображение activity ring",name:"showActivityRing",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarActivity/stories/AvatarActivitySingle.template.tsx#AvatarActivitySingleTemplate"]={docgenInfo:AvatarActivitySingleTemplate.__docgenInfo,name:"AvatarActivitySingleTemplate",path:"src/components/AvatarActivity/stories/AvatarActivitySingle.template.tsx#AvatarActivitySingleTemplate"})}catch(__react_docgen_typescript_loader_error){}function AvatarActivityPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarActivityPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarActivityPlayground_template_define_property(target,key,source[key])})}return target}function AvatarActivityPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AvatarActivityPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AvatarActivityPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AvatarActivityPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=AvatarActivityPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AvatarActivityPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function AvatarActivityPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AvatarActivityPlayground_template_templateObject(){var data=AvatarActivityPlayground_template_tagged_template_literal([`
  height: `,`px;
`]);return AvatarActivityPlayground_template_templateObject=function _templateObject(){return data},data}function AvatarActivityPlayground_template_templateObject1(){var data=AvatarActivityPlayground_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`]);return AvatarActivityPlayground_template_templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(AvatarActivityPlayground_template_templateObject(),function(p){return p.height}),AvatarActivityPlayground_template_Wrapper=styled_components_browser_esm.Ay.div(AvatarActivityPlayground_template_templateObject1()),AvatarActivityPlaygroundTemplate=function(_param){var userName=_param.userName,_param_showActivityRing=_param.showActivityRing,props=AvatarActivityPlayground_template_object_without_properties(_param,["userName","showActivityRing"]);return(0,jsx_runtime.jsxs)(AvatarActivityPlayground_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Avatar Activity"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Условно компонент можно разделить на два вида – обычный Avatar и тот, который используется с Activity Ring. Во втором варианте появляется пустое пространство вокруг компонента под круг фокусировки, что бы он (круг) при включении входил в общий размер компонента и не обрезался во фреймах.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Таким образом, включение опции «Activity Avatar» добавляет по 4 px с каждой стороны компонента.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Используйте только один тип Аватаров одновременно."]})]}),(0,jsx_runtime.jsx)(Separator,{height:40}),(0,jsx_runtime.jsx)(AvatarActivity,AvatarActivityPlayground_template_object_spread_props(AvatarActivityPlayground_template_object_spread({},props),{userName:userName||"Just Example",showActivityRing:void 0===_param_showActivityRing||_param_showActivityRing}))]})};try{AvatarActivityPlaygroundTemplate.displayName="AvatarActivityPlaygroundTemplate",AvatarActivityPlaygroundTemplate.__docgenInfo={description:"",displayName:"AvatarActivityPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},status:{defaultValue:null,description:`Статус пользователя -
можно выбрать один из четырех исходных вариантов, либо задать свой цвет.`,name:"status",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:`Внешний вид компонента (цвет заливки, текста, иконки) -
можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
то по умолчанию будут применены те же цвета, что и при appearance='neutral2'`,name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:`Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
двух слов (одного слова для dimension='s'), входящих в userName`,name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}},showActivityRing:{defaultValue:{value:"true"},description:"Отображение activity ring",name:"showActivityRing",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarActivity/stories/AvatarActivityPlayground.template.tsx#AvatarActivityPlaygroundTemplate"]={docgenInfo:AvatarActivityPlaygroundTemplate.__docgenInfo,name:"AvatarActivityPlaygroundTemplate",path:"src/components/AvatarActivity/stories/AvatarActivityPlayground.template.tsx#AvatarActivityPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function AvatarActivity_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarActivity_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarActivity_stories_define_property(target,key,source[key])})}return target}let AvatarActivity_stories={title:"Admiral-2.1/AvatarActivity",decorators:void 0,component:AvatarActivity,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367"}},argTypes:{dimension:{options:["xl","l","m","s","xs"],control:{type:"radio"}},group:{control:!1},icon:{control:!1},userInitials:{control:{type:"text"}},href:{control:{type:"text"}},status:{options:["success","danger","warn","inactive"],control:{type:"radio"}},appearance:{options:["neutral1","neutral2","neutral3","neutral4"],control:{type:"radio"}},svgMaskId:{control:{type:"text"}},showTooltip:{control:{type:"boolean"}},isMenuAvatar:{control:!1},theme:{control:!1},as:{control:!1},forwardedAs:{control:!1}}};var AvatarPlayground={render:function(props){return(0,jsx_runtime.jsx)(AvatarActivityPlaygroundTemplate,AvatarActivity_stories_object_spread({},props))},parameters:{docs:{source:{code:`import styled from 'styled-components';

import { AvatarActivity, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { AvatarActivityProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;
const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
\`;

export const AvatarActivityPlaygroundTemplate = ({
  userName,
  showActivityRing = true,
  ...props
}: AvatarActivityProps) => {
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Avatar Activity</NotificationItemTitle>
        <NotificationItemContent>
          Условно компонент можно разделить на два вида – обычный Avatar и тот, который используется с Activity Ring. Во
          втором варианте появляется пустое пространство вокруг компонента под круг фокусировки, что бы он (круг) при
          включении входил в общий размер компонента и не обрезался во фреймах.
          <Separator height={8} />
          Таким образом, включение опции \xabActivity Avatar\xbb добавляет по 4 px с каждой стороны компонента.
          <Separator height={8} />
          Используйте только один тип Аватаров одновременно.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <AvatarActivity {...props} userName={userName || 'Just Example'} showActivityRing={showActivityRing} />
    </Wrapper>
  );
};
`}}},name:"AvatarActivity. Playground"},SingleAvatar={render:function(param){var userName=param.userName,appearance=param.appearance,showTooltip=param.showTooltip,showActivityRing=param.showActivityRing;return(0,jsx_runtime.jsx)(AvatarActivitySingleTemplate,{userName:userName,appearance:appearance,showTooltip:showTooltip,showActivityRing:showActivityRing})},parameters:{docs:{source:{code:`import styled from 'styled-components';

import type { AvatarActivityProps } from '@admiral-ds/react-ui';
import { AvatarActivity, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Container = styled.div\`
  position: relative;
  display: flex;
  gap: 20px;
\`;
const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
\`;
const StyledNotificationItem = styled(NotificationItem)\`
  width: 100%;
\`;

export const AvatarActivitySingleTemplate = ({
  appearance,
  showTooltip,
  showActivityRing = true,
}: AvatarActivityProps) => (
  <Wrapper>
    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Размеры и типы</NotificationItemTitle>
      <NotificationItemContent>Опционально Tooltip можно отключать.</NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        icon={<PersonSolid />}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        icon={<PersonSolid />}
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        href={imageURL}
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        href={imageURL}
      />
    </Container>

    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Avatar с опцией \xabStatus\xbb</NotificationItemTitle>
      <NotificationItemContent>Статусы: \xabВ сети\xbb, \xabНе беспокоить\xbb, \xabОтошел\xbb, \xabНе в сети\xbb.</NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        status="success"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        status="danger"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        status="warn"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        status="inactive"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        status="success"
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        icon={<PersonSolid />}
        status="success"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        icon={<PersonSolid />}
        status="danger"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        icon={<PersonSolid />}
        status="warn"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        icon={<PersonSolid />}
        status="inactive"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        icon={<PersonSolid />}
        status="success"
      />
    </Container>
    <Container>
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="xs"
        userName="Dimension xs"
        href={imageURL}
        status="success"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="s"
        userName="Dimension s"
        href={imageURL}
        status="danger"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="m"
        userName="Dimension m"
        href={imageURL}
        status="warn"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        dimension="l"
        userName="Dimension l"
        href={imageURL}
        status="inactive"
      />
      <AvatarActivity
        appearance={appearance}
        showTooltip={showTooltip}
        showActivityRing={showActivityRing}
        userName="Dimension xl"
        href={imageURL}
        status="success"
      />
    </Container>
  </Wrapper>
);
`}}},argTypes:{dimension:{control:!1},status:{control:!1},href:{control:!1},userInitials:{control:!1},userName:{control:!1},svgMaskId:{control:!1}},name:"AvatarActivity. Типы и размеры"};AvatarPlayground.parameters={...AvatarPlayground.parameters,docs:{...AvatarPlayground.parameters?.docs,source:{originalSource:`{
  render: AvatarActivityPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: AvatarActivityPlaygroundRaw
      }
    }
  },
  name: 'AvatarActivity. Playground'
}`,...AvatarPlayground.parameters?.docs?.source}}},SingleAvatar.parameters={...SingleAvatar.parameters,docs:{...SingleAvatar.parameters?.docs,source:{originalSource:`{
  render: AvatarActivitySingleStory,
  parameters: {
    docs: {
      source: {
        code: AvatarActivitySingleRaw
      }
    }
  },
  argTypes: {
    dimension: {
      control: false
    },
    status: {
      control: false
    },
    href: {
      control: false
    },
    userInitials: {
      control: false
    },
    userName: {
      control: false
    },
    svgMaskId: {
      control: false
    }
  },
  name: 'AvatarActivity. Типы и размеры'
}`,...SingleAvatar.parameters?.docs?.source}}};let __namedExportsOrder=["AvatarPlayground","SingleAvatar"]},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}}}]);
//# sourceMappingURL=components-AvatarActivity-stories-AvatarActivity-stories.6dabc22e.iframe.bundle.js.map