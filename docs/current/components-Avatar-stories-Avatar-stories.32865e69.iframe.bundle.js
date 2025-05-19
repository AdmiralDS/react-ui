"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5819],{"./src/components/Avatar/stories/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarPlayground:()=>AvatarPlayground,AvatarXXS:()=>AvatarXXS,SingleAvatar:()=>SingleAvatar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),AvatarBase=__webpack_require__("./src/components/AvatarBase/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var Avatar=(0,react.forwardRef)(function(_param,ref){var dimension=_param.dimension,props=_object_without_properties(_param,["dimension"]);return(0,jsx_runtime.jsx)(AvatarBase.d,_object_spread_props(_object_spread({ref:ref},props),{dimension:props.status&&"xxs"===dimension?"xs":dimension,withActivityRing:!1,showActivityRing:!1}))});Avatar.displayName="Avatar";try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xxs"'},{value:'"xs"'}]}},status:{defaultValue:null,description:`Статус пользователя -
можно выбрать один из четырех исходных вариантов, либо задать свой цвет.`,name:"status",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:`Внешний вид компонента (цвет заливки, текста, иконки) -
можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
то по умолчанию будут применены те же цвета, что и при appearance='neutral2'`,name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:`Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
двух слов (одного слова для dimension='s'), входящих в userName`,name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}},group:{defaultValue:null,description:"Для внутреннего использования! Отображение аватара в составе группы (когда правый край аватара усечен)",name:"group",required:!1,type:{name:"boolean"}},isMenuAvatar:{defaultValue:null,description:"Для внутреннего использования! Используется ли аватар в качестве меню. Если да - то userName выводится без изменений",name:"isMenuAvatar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx");function AvatarPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarPlayground_template_define_property(target,key,source[key])})}return target}function AvatarPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=AvatarPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AvatarPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  height: `,`px;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`]);return _templateObject1=function _templateObject(){return data},data}var Separator=styled_components_browser_esm.Ay.div(_templateObject(),function(p){return p.height}),Wrapper=styled_components_browser_esm.Ay.div(_templateObject1()),AvatarPlaygroundTemplate=function(_param){var userName=_param.userName,props=AvatarPlayground_template_object_without_properties(_param,["userName"]);return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Аватар"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Компонент используется для отображения фотографии пользователя, его инициалов или иконки. Присутствует пять размеров компонента. Допускается использование одной или двух букв для обозначения пользователя (в размере XS только одна буква). Компоненту и символам в нем можно присваивать любые цвета из палитры. Компонент может быть кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями пользователя. При ховере над аватаром показывается Tooltip с именем пользователя (опционально можно отключить). Может отображать статус пользователя с помощью статусного Бейджа. Статусы: «В сети», «Не беспокоить», «Отошел», «Не в сети».",(0,jsx_runtime.jsx)(Separator,{height:8}),"Для окраски фона компонента, букв (иконок) используйте стандартную палитру дизайн-системы, следите за контрастностью и читаемостью.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Рекомендуемый алгоритм использования типов аватаров:",(0,jsx_runtime.jsx)("li",{children:"Если пользователь предоставил фотографию, то используется аватар с фото"}),(0,jsx_runtime.jsx)("li",{children:"Если нет фото, то пишутся инициалы пользователя – первые буквы имени и фамилии"}),(0,jsx_runtime.jsx)("li",{children:"Если известно только имя, то пишутся первые две буквы имени"}),(0,jsx_runtime.jsx)("li",{children:"Если нет никаких данных, то используется аватар с иконкой"}),(0,jsx_runtime.jsx)("li",{children:"При использовании размера аватара XS пишется только одна, первая буква имени"})]})]}),(0,jsx_runtime.jsx)(Separator,{height:40}),(0,jsx_runtime.jsx)(Avatar,AvatarPlayground_template_object_spread({userName:userName||"Just Example"},props))]})};try{AvatarPlaygroundTemplate.displayName="AvatarPlaygroundTemplate",AvatarPlaygroundTemplate.__docgenInfo={description:"",displayName:"AvatarPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xxs"'},{value:'"xs"'}]}},status:{defaultValue:null,description:`Статус пользователя -
можно выбрать один из четырех исходных вариантов, либо задать свой цвет.`,name:"status",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:`Внешний вид компонента (цвет заливки, текста, иконки) -
можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
то по умолчанию будут применены те же цвета, что и при appearance='neutral2'`,name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:`Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
двух слов (одного слова для dimension='s'), входящих в userName`,name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/stories/AvatarPlayground.template.tsx#AvatarPlaygroundTemplate"]={docgenInfo:AvatarPlaygroundTemplate.__docgenInfo,name:"AvatarPlaygroundTemplate",path:"src/components/Avatar/stories/AvatarPlayground.template.tsx#AvatarPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/themes/common/index.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),PersonSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PersonSolid.svg");function AvatarSingle_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AvatarSingle_template_templateObject(){var data=AvatarSingle_template_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  `,`
`]);return AvatarSingle_template_templateObject=function _templateObject(){return data},data}function AvatarSingle_template_templateObject1(){var data=AvatarSingle_template_tagged_template_literal([`
  position: relative;
  display: flex;
  gap: 20px;
`]);return AvatarSingle_template_templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=AvatarSingle_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=AvatarSingle_template_tagged_template_literal([`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=AvatarSingle_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=AvatarSingle_template_tagged_template_literal([`
  width: 100%;
`]);return _templateObject5=function _templateObject(){return data},data}var imageURL="https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",Text=styled_components_browser_esm.Ay.div(AvatarSingle_template_templateObject(),function(p){return p.theme.color[common.jn]},typography.Il["Body/Body 2 Long"]),Container=styled_components_browser_esm.Ay.div(AvatarSingle_template_templateObject1()),AvatarSingle_template_Wrapper=styled_components_browser_esm.Ay.div(_templateObject2()),GridContainer=styled_components_browser_esm.Ay.div(_templateObject3()),AvatarContainer=styled_components_browser_esm.Ay.div(_templateObject4()),StyledNotificationItem=(0,styled_components_browser_esm.Ay)(NotificationItem.rn)(_templateObject5()),AvatarSingleTemplate=function(param){var showTooltip=param.showTooltip;return(0,jsx_runtime.jsxs)(AvatarSingle_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Размеры и типы"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Опционально Tooltip можно отключать."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"xs",userName:"Dimension xs"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"s",userName:"Dimension s"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"m",userName:"Dimension m"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"l",userName:"Dimension l"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Dimension xl"})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"xs",userName:"Dimension xs",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"s",userName:"Dimension s",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"m",userName:"Dimension m",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"l",userName:"Dimension l",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Dimension xl",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"xs",userName:"Dimension xs",href:imageURL}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"s",userName:"Dimension s",href:imageURL}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"m",userName:"Dimension m",href:imageURL}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"l",userName:"Dimension l",href:imageURL}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Dimension xl",href:imageURL})]}),(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Avatar с опцией «Status»"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Статусы: «В сети», «Не беспокоить», «Отошел», «Не в сети». Также возможно задать кастомный цвет для статуса."})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"xs",userName:"Status Success",status:"success"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"s",userName:"Status Danger",status:"danger"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"m",userName:"Status Warn",status:"warn"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"l",userName:"Status Inactive",status:"inactive"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Custom Status",status:"#3F7DFE"})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"xs",userName:"Status Success",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"success"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"s",userName:"Status Danger",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"danger"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"m",userName:"Status Warn",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"warn"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"l",userName:"Status Inactive",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"inactive"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Custom Status",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"#3F7DFE"})]}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"xs",userName:"Status Success",href:imageURL,status:"success"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"s",userName:"Status Danger",href:imageURL,status:"danger"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"m",userName:"Status Warn",href:imageURL,status:"warn"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,dimension:"l",userName:"Status Inactive",href:imageURL,status:"inactive"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Custom Status",href:imageURL,status:"#3F7DFE"})]}),(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Цвета Аватаров"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Для окраски фона компонента, букв (иконок) используйте стандартную палитру дизайн-системы, следите за контрастностью и читаемостью. Рекомендуемые цвета:"})]}),(0,jsx_runtime.jsxs)(GridContainer,{children:[(0,jsx_runtime.jsxs)(AvatarContainer,{style:{background:"#F1F2F4"},children:[(0,jsx_runtime.jsx)(Text,{children:"Neutral 00"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Neutral 1 Appearance",appearance:"neutral1",dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Neutral 10"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Neutral 2 Appearance",dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Neutral 50"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Neutral 3 Appearance",appearance:"neutral3",dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Neutral 80"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Neutral 4 Appearance",appearance:"neutral4",dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Primary 60 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Primary 60 Main",appearance:{background:"#0062FF",text:"#FFFFFF"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Error 60 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Error 60 Main",appearance:{background:"#D92020",text:"#FFFFFF"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Success 50 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Success 50 Main",appearance:{background:"#1BA049",text:"#FFFFFF"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Warning 50 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Warning 50 Main",appearance:{background:"#FF5C22",text:"#FFFFFF"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Attention 50 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Attention 50 Main",appearance:{background:"#FFC400",text:"#121316"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Purple 60 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Purple 60 Main",appearance:{background:"#8A3FFC",text:"#FFFFFF"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Magenta 60 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Magenta 60 Main",appearance:{background:"#D02670",text:"#FFFFFF"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Cian 60 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Cian 60 Main",appearance:{background:"#0072C3",text:"#FFFFFF"},dimension:"m"})]}),(0,jsx_runtime.jsxs)(AvatarContainer,{children:[(0,jsx_runtime.jsx)(Text,{children:"Teal 60 Main"}),(0,jsx_runtime.jsx)(Avatar,{showTooltip:showTooltip,userName:"Teal 60 Main",appearance:{background:"#007D79",text:"#FFFFFF"},dimension:"m"})]})]})]})};try{AvatarSingleTemplate.displayName="AvatarSingleTemplate",AvatarSingleTemplate.__docgenInfo={description:"",displayName:"AvatarSingleTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xxs"'},{value:'"xs"'}]}},status:{defaultValue:null,description:`Статус пользователя -
можно выбрать один из четырех исходных вариантов, либо задать свой цвет.`,name:"status",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:`Внешний вид компонента (цвет заливки, текста, иконки) -
можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
то по умолчанию будут применены те же цвета, что и при appearance='neutral2'`,name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:`Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
двух слов (одного слова для dimension='s'), входящих в userName`,name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/stories/AvatarSingle.template.tsx#AvatarSingleTemplate"]={docgenInfo:AvatarSingleTemplate.__docgenInfo,name:"AvatarSingleTemplate",path:"src/components/Avatar/stories/AvatarSingle.template.tsx#AvatarSingleTemplate"})}catch(__react_docgen_typescript_loader_error){}function AvatarXXS_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarXXS_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarXXS_template_define_property(target,key,source[key])})}return target}function AvatarXXS_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AvatarXXS_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AvatarXXS_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AvatarXXS_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=AvatarXXS_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AvatarXXS_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function AvatarXXS_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AvatarXXS_template_templateObject(){var data=AvatarXXS_template_tagged_template_literal([`
  height: `,`px;
`]);return AvatarXXS_template_templateObject=function _templateObject(){return data},data}function AvatarXXS_template_templateObject1(){var data=AvatarXXS_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`]);return AvatarXXS_template_templateObject1=function _templateObject(){return data},data}function AvatarXXS_template_templateObject2(){var data=AvatarXXS_template_tagged_template_literal([`
  position: relative;
  display: flex;
  gap: 20px;
`]);return AvatarXXS_template_templateObject2=function _templateObject(){return data},data}var AvatarXXS_template_Separator=styled_components_browser_esm.Ay.div(AvatarXXS_template_templateObject(),function(p){return p.height}),AvatarXXS_template_Wrapper=styled_components_browser_esm.Ay.div(AvatarXXS_template_templateObject1()),AvatarXXS_template_Container=styled_components_browser_esm.Ay.div(AvatarXXS_template_templateObject2()),AvatarXXSTemplate=function(_param){var userName=_param.userName,href=_param.href,props=AvatarXXS_template_object_without_properties(_param,["userName","href"]);return(0,jsx_runtime.jsxs)(AvatarXXS_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Размер XXS 20px"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Размер XXS не используется самостоятельно, как отдельно стоящий и в группах. Применяется в составе других компонентов с размерным рядом элементов 20px.",(0,jsx_runtime.jsx)(AvatarXXS_template_Separator,{height:8}),"Имеет только два типа: с инициалами или с фото."]})]}),(0,jsx_runtime.jsx)(AvatarXXS_template_Separator,{height:40}),(0,jsx_runtime.jsxs)(AvatarXXS_template_Container,{children:[(0,jsx_runtime.jsx)(Avatar,AvatarXXS_template_object_spread_props(AvatarXXS_template_object_spread({userName:userName||"Just Example"},props),{dimension:"xxs"})),(0,jsx_runtime.jsx)(Avatar,AvatarXXS_template_object_spread_props(AvatarXXS_template_object_spread({userName:userName||"Just Example"},props),{href:href||"https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",dimension:"xxs"}))]})]})};try{AvatarXXSTemplate.displayName="AvatarXXSTemplate",AvatarXXSTemplate.__docgenInfo={description:"",displayName:"AvatarXXSTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xxs"'},{value:'"xs"'}]}},status:{defaultValue:null,description:`Статус пользователя -
можно выбрать один из четырех исходных вариантов, либо задать свой цвет.`,name:"status",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:`Внешний вид компонента (цвет заливки, текста, иконки) -
можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
то по умолчанию будут применены те же цвета, что и при appearance='neutral2'`,name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:`Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
двух слов (одного слова для dimension='s'), входящих в userName`,name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/stories/AvatarXXS.template.tsx#AvatarXXSTemplate"]={docgenInfo:AvatarXXSTemplate.__docgenInfo,name:"AvatarXXSTemplate",path:"src/components/Avatar/stories/AvatarXXS.template.tsx#AvatarXXSTemplate"})}catch(__react_docgen_typescript_loader_error){}function Avatar_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Avatar_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Avatar_stories_define_property(target,key,source[key])})}return target}function Avatar_stories_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=Avatar_stories_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Avatar_stories_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}let Avatar_stories={title:"Admiral-2.1/Avatar",decorators:void 0,component:Avatar,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367"}},argTypes:{dimension:{options:["xl","l","m","s","xs"],control:{type:"radio"}},group:{control:!1},icon:{control:!1},userInitials:{control:{type:"text"}},href:{control:{type:"text"}},status:{options:["success","danger","warn","inactive"],control:{type:"radio"}},appearance:{options:["neutral1","neutral2","neutral3","neutral4"],control:{type:"radio"}},svgMaskId:{control:{type:"text"}},showTooltip:{control:{type:"boolean"}},isMenuAvatar:{control:!1},theme:{control:!1}}};var AvatarPlayground={render:function(_param){var userName=_param.userName,props=Avatar_stories_object_without_properties(_param,["userName"]);return(0,jsx_runtime.jsx)(AvatarPlaygroundTemplate,Avatar_stories_object_spread({userName:userName},props))},parameters:{docs:{source:{code:`import styled from 'styled-components';

import { Avatar, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { AvatarProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;
const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
\`;

export const AvatarPlaygroundTemplate = ({ userName, ...props }: AvatarProps) => {
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Аватар</NotificationItemTitle>
        <NotificationItemContent>
          Компонент используется для отображения фотографии пользователя, его инициалов или иконки. Присутствует пять
          размеров компонента. Допускается использование одной или двух букв для обозначения пользователя (в размере XS
          только одна буква). Компоненту и символам в нем можно присваивать любые цвета из палитры. Компонент может быть
          кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями пользователя. При
          ховере над аватаром показывается Tooltip с именем пользователя (опционально можно отключить). Может отображать
          статус пользователя с помощью статусного Бейджа. Статусы: \xabВ сети\xbb, \xabНе беспокоить\xbb, \xabОтошел\xbb, \xabНе в сети\xbb.
          <Separator height={8} />
          Для окраски фона компонента, букв (иконок) используйте стандартную палитру дизайн-системы, следите за
          контрастностью и читаемостью.
          <Separator height={8} />
          Рекомендуемый алгоритм использования типов аватаров:
          <li>Если пользователь предоставил фотографию, то используется аватар с фото</li>
          <li>Если нет фото, то пишутся инициалы пользователя – первые буквы имени и фамилии</li>
          <li>Если известно только имя, то пишутся первые две буквы имени</li>
          <li>Если нет никаких данных, то используется аватар с иконкой</li>
          <li>При использовании размера аватара XS пишется только одна, первая буква имени</li>
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Avatar userName={userName || 'Just Example'} {...props} />
    </Wrapper>
  );
};
`}}},name:"Avatar. Playground"},SingleAvatar={render:function(param){var showTooltip=param.showTooltip,userName=param.userName;return(0,jsx_runtime.jsx)(AvatarSingleTemplate,{userName:userName,showTooltip:showTooltip})},parameters:{docs:{source:{code:`import styled from 'styled-components';

import type { AvatarProps } from '@admiral-ds/react-ui';
import {
  Avatar,
  DefaultFontColorName,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
  typography,
} from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Text = styled.div\`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color[DefaultFontColorName]});
  \${typography['Body/Body 2 Long']}
\`;

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
const GridContainer = styled.div\`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
\`;
const AvatarContainer = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
\`;
const StyledNotificationItem = styled(NotificationItem)\`
  width: 100%;
\`;

export const AvatarSingleTemplate = ({ showTooltip }: AvatarProps) => (
  <Wrapper>
    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Размеры и типы</NotificationItemTitle>
      <NotificationItemContent>Опционально Tooltip можно отключать.</NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" />
      <Avatar showTooltip={showTooltip} userName="Dimension xl" />
    </Container>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" icon={<PersonSolid />} />
      <Avatar showTooltip={showTooltip} userName="Dimension xl" icon={<PersonSolid />} />
    </Container>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Dimension xs" href={imageURL} />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Dimension s" href={imageURL} />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Dimension m" href={imageURL} />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Dimension l" href={imageURL} />
      <Avatar showTooltip={showTooltip} userName="Dimension xl" href={imageURL} />
    </Container>

    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Avatar с опцией \xabStatus\xbb</NotificationItemTitle>
      <NotificationItemContent>
        Статусы: \xabВ сети\xbb, \xabНе беспокоить\xbb, \xabОтошел\xbb, \xabНе в сети\xbb. Также возможно задать кастомный цвет для статуса.
      </NotificationItemContent>
    </StyledNotificationItem>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Status Success" status="success" />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" status="danger" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" status="warn" />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Status Inactive" status="inactive" />
      <Avatar showTooltip={showTooltip} userName="Custom Status" status="#3F7DFE" />
    </Container>
    <Container>
      <Avatar
        showTooltip={showTooltip}
        dimension="xs"
        userName="Status Success"
        icon={<PersonSolid />}
        status="success"
      />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" icon={<PersonSolid />} status="danger" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" icon={<PersonSolid />} status="warn" />
      <Avatar
        showTooltip={showTooltip}
        dimension="l"
        userName="Status Inactive"
        icon={<PersonSolid />}
        status="inactive"
      />
      <Avatar showTooltip={showTooltip} userName="Custom Status" icon={<PersonSolid />} status="#3F7DFE" />
    </Container>
    <Container>
      <Avatar showTooltip={showTooltip} dimension="xs" userName="Status Success" href={imageURL} status="success" />
      <Avatar showTooltip={showTooltip} dimension="s" userName="Status Danger" href={imageURL} status="danger" />
      <Avatar showTooltip={showTooltip} dimension="m" userName="Status Warn" href={imageURL} status="warn" />
      <Avatar showTooltip={showTooltip} dimension="l" userName="Status Inactive" href={imageURL} status="inactive" />
      <Avatar showTooltip={showTooltip} userName="Custom Status" href={imageURL} status="#3F7DFE" />
    </Container>

    <StyledNotificationItem displayStatusIcon>
      <NotificationItemTitle>Цвета Аватаров</NotificationItemTitle>
      <NotificationItemContent>
        Для окраски фона компонента, букв (иконок) используйте стандартную палитру дизайн-системы, следите за
        контрастностью и читаемостью. Рекомендуемые цвета:
      </NotificationItemContent>
    </StyledNotificationItem>
    <GridContainer>
      <AvatarContainer style={{ background: '#F1F2F4' }}>
        <Text>Neutral 00</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 1 Appearance" appearance="neutral1" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Neutral 10</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 2 Appearance" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Neutral 50</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 3 Appearance" appearance="neutral3" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Neutral 80</Text>
        <Avatar showTooltip={showTooltip} userName="Neutral 4 Appearance" appearance="neutral4" dimension="m" />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Primary 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Primary 60 Main"
          appearance={{ background: '#0062FF', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Error 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Error 60 Main"
          appearance={{ background: '#D92020', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Success 50 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Success 50 Main"
          appearance={{ background: '#1BA049', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Warning 50 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Warning 50 Main"
          appearance={{ background: '#FF5C22', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Attention 50 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Attention 50 Main"
          appearance={{ background: '#FFC400', text: '#121316' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Purple 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Purple 60 Main"
          appearance={{ background: '#8A3FFC', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Magenta 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Magenta 60 Main"
          appearance={{ background: '#D02670', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Cian 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Cian 60 Main"
          appearance={{ background: '#0072C3', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
      <AvatarContainer>
        <Text>Teal 60 Main</Text>
        <Avatar
          showTooltip={showTooltip}
          userName="Teal 60 Main"
          appearance={{ background: '#007D79', text: '#FFFFFF' }}
          dimension="m"
        />
      </AvatarContainer>
    </GridContainer>
  </Wrapper>
);
`}}},argTypes:{href:{control:!1},appearance:{control:!1},svgMaskId:{control:!1},userInitials:{control:!1},userName:{control:!1},dimension:{control:!1},status:{control:!1}},name:"Avatar. Типы и размеры"},AvatarXXS={render:function(_param){var userName=_param.userName,props=Avatar_stories_object_without_properties(_param,["userName"]);return(0,jsx_runtime.jsx)(AvatarXXSTemplate,Avatar_stories_object_spread({userName:userName},props))},parameters:{docs:{source:{code:`import styled from 'styled-components';

import { Avatar, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';
import type { AvatarProps } from '@admiral-ds/react-ui';

const imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;
const Wrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
\`;
const Container = styled.div\`
  position: relative;
  display: flex;
  gap: 20px;
\`;

export const AvatarXXSTemplate = ({ userName, href, ...props }: AvatarProps) => {
  return (
    <Wrapper>
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>Размер XXS 20px</NotificationItemTitle>
        <NotificationItemContent>
          Размер XXS не используется самостоятельно, как отдельно стоящий и в группах. Применяется в составе других
          компонентов с размерным рядом элементов 20px.
          <Separator height={8} />
          Имеет только два типа: с инициалами или с фото.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Container>
        <Avatar userName={userName || 'Just Example'} {...props} dimension="xxs" />
        <Avatar userName={userName || 'Just Example'} {...props} href={href || imageURL} dimension="xxs" />
      </Container>
    </Wrapper>
  );
};
`}}},argTypes:{dimension:{control:!1},status:{control:!1}},name:"Avatar XXS"};AvatarPlayground.parameters={...AvatarPlayground.parameters,docs:{...AvatarPlayground.parameters?.docs,source:{originalSource:`{
  render: AvatarPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: AvatarPlaygroundRaw
      }
    }
  },
  name: 'Avatar. Playground'
}`,...AvatarPlayground.parameters?.docs?.source}}},SingleAvatar.parameters={...SingleAvatar.parameters,docs:{...SingleAvatar.parameters?.docs,source:{originalSource:`{
  render: SingleAvatarStory,
  parameters: {
    docs: {
      source: {
        code: AvatarSingleRaw
      }
    }
  },
  argTypes: {
    href: {
      control: false
    },
    appearance: {
      control: false
    },
    svgMaskId: {
      control: false
    },
    userInitials: {
      control: false
    },
    userName: {
      control: false
    },
    dimension: {
      control: false
    },
    status: {
      control: false
    }
  },
  name: 'Avatar. Типы и размеры'
}`,...SingleAvatar.parameters?.docs?.source}}},AvatarXXS.parameters={...AvatarXXS.parameters,docs:{...AvatarXXS.parameters?.docs,source:{originalSource:`{
  render: AvatarXXSStory,
  parameters: {
    docs: {
      source: {
        code: AvatarXXSRaw
      }
    }
  },
  argTypes: {
    dimension: {
      control: false
    },
    status: {
      control: false
    }
  },
  name: 'Avatar XXS'
}`,...AvatarXXS.parameters?.docs?.source}}};let __namedExportsOrder=["AvatarPlayground","SingleAvatar","AvatarXXS"]},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}}}]);
//# sourceMappingURL=components-Avatar-stories-Avatar-stories.32865e69.iframe.bundle.js.map