"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[5819],{"./src/components/Avatar/stories/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarPlayground:()=>AvatarPlayground,SingleAvatar:()=>SingleAvatar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Avatar_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),AvatarBase=__webpack_require__("./src/components/AvatarBase/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Avatar=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(AvatarBase.d,{ref,...props,withActivityRing:!1,showActivityRing:!1})));Avatar.displayName="Avatar";try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},status:{defaultValue:null,description:"Статус пользователя",name:"status",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки, текста, иконки) -\nможно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.\nПараметры background, text и icon являются опциональными, если какие-то из них не заданы,\nто по умолчанию будут применены те же цвета, что и при appearance='neutral2'",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:"Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых\nдвух слов (одного слова для dimension='s'), входящих в userName",name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}},group:{defaultValue:null,description:"Для внутреннего использования! Отображение аватара в составе группы (когда правый край аватара усечен)",name:"group",required:!1,type:{name:"boolean"}},isMenuAvatar:{defaultValue:null,description:"Для внутреннего использования! Используется ли аватар в качестве меню. Если да - то userName выводится без изменений",name:"isMenuAvatar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/index.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/index.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/themes/common/index.ts"),PersonSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PersonSolid.svg");const imageURL="https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",Text=styled_components_browser_esm.Ay.div.withConfig({displayName:"AvatarSingletemplate__Text",componentId:"sc-1n6ia5k-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;margin-bottom:8px;color:var(--admiral-color-Neutral_Neutral90,",");"],(p=>p.theme.color[common.jn])),Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"AvatarSingletemplate__Container",componentId:"sc-1n6ia5k-1"})(["position:relative;display:flex;& > *{margin-right:20px;}margin-bottom:40px;"]),AvatarSingleTemplate=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Text,{children:"Размеры компонента"}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{dimension:"xs",userName:"Dimension xs"}),(0,jsx_runtime.jsx)(Avatar,{dimension:"s",userName:"Dimension s"}),(0,jsx_runtime.jsx)(Avatar,{dimension:"m",userName:"Dimension m"}),(0,jsx_runtime.jsx)(Avatar,{dimension:"l",userName:"Dimension l"}),(0,jsx_runtime.jsx)(Avatar,{userName:"Dimension xl"})]}),(0,jsx_runtime.jsx)(Text,{children:"Внешний вид компонента (цвет фона, текста и иконки). Возможен выбор из четырех вариантов: light, white, grey, dark или самостоятельная настройка цвета фона, текста, иконки"}),(0,jsx_runtime.jsxs)(Container,{style:{background:"#F1F2F4"},children:[(0,jsx_runtime.jsx)(Avatar,{userName:"Neutral 1 Appearance",appearance:"neutral1"}),(0,jsx_runtime.jsx)(Avatar,{userName:"Neutral 2 Appearance"}),(0,jsx_runtime.jsx)(Avatar,{userName:"Neutral 3 Appearance",appearance:"neutral3"}),(0,jsx_runtime.jsx)(Avatar,{userName:"Neutral 4 Appearance",appearance:"neutral4"}),(0,jsx_runtime.jsx)(Avatar,{userName:"Custom Appearance",appearance:{background:"#3F7DFE",text:"#001157"}}),(0,jsx_runtime.jsx)(Avatar,{userName:"Custom Appearance",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),appearance:{background:"#8A3FFC",icon:"#FFFFFF"}})]}),(0,jsx_runtime.jsx)(Text,{children:"Варианты контента (инициалы, иконка, фото)"}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{userName:"Name",userInitials:"Na"}),(0,jsx_runtime.jsx)(Avatar,{userName:"Name Surname"}),(0,jsx_runtime.jsx)(Avatar,{userName:"Icon Avatar",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{})}),(0,jsx_runtime.jsx)(Avatar,{userName:"Image Avatar",href:imageURL})]}),(0,jsx_runtime.jsx)(Text,{children:"Статусы компонента"}),(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(Avatar,{dimension:"xs",userName:"Status Danger",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"danger"}),(0,jsx_runtime.jsx)(Avatar,{dimension:"s",userName:"Status Warning",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"warn"}),(0,jsx_runtime.jsx)(Avatar,{dimension:"m",userName:"Status Success",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"success"}),(0,jsx_runtime.jsx)(Avatar,{dimension:"l",userName:"Status Inactive",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),status:"inactive"}),(0,jsx_runtime.jsx)(Avatar,{dimension:"xl",userName:"Custom Status",href:imageURL,status:"#3F7DFE"})]})]}),AvatarPlaygroundTemplate=({userName,...props})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Avatar,{userName:userName||"Just Example",...props})});try{AvatarPlaygroundTemplate.displayName="AvatarPlaygroundTemplate",AvatarPlaygroundTemplate.__docgenInfo={description:"",displayName:"AvatarPlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},status:{defaultValue:null,description:"Статус пользователя",name:"status",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки, текста, иконки) -\nможно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.\nПараметры background, text и icon являются опциональными, если какие-то из них не заданы,\nто по умолчанию будут применены те же цвета, что и при appearance='neutral2'",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:"Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых\nдвух слов (одного слова для dimension='s'), входящих в userName",name:"userInitials",required:!1,type:{name:"string"}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/stories/AvatarPlayground.template.tsx#AvatarPlaygroundTemplate"]={docgenInfo:AvatarPlaygroundTemplate.__docgenInfo,name:"AvatarPlaygroundTemplate",path:"src/components/Avatar/stories/AvatarPlayground.template.tsx#AvatarPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.Ay.div.withConfig({displayName:"Avatarstories__Desc",componentId:"sc-1xo8wr9-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Avatar_stories={title:"Admiral-2.1/Avatar",decorators:void 0,component:Avatar,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Desc,{children:"Компонент используется для отображения фотографии пользователя, его инициалов или иконки."}),design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367"}},argTypes:{dimension:{options:["xl","l","m","s","xs"],control:{type:"radio"}},group:{control:!1},icon:{control:!1},userInitials:{control:{type:"text"}},href:{control:{type:"text"}},status:{options:["success","danger","warn","inactive"],control:{type:"radio"}},appearance:{options:["neutral1","neutral2","neutral3","neutral4"],control:{type:"radio"}},svgMaskId:{control:{type:"text"}},showTooltip:{control:{type:"boolean"}},isMenuAvatar:{control:!1},theme:{control:!1}}},AvatarPlaygroundStory=({userName,...props})=>(0,jsx_runtime.jsx)(AvatarPlaygroundTemplate,{userName,...props});AvatarPlaygroundStory.displayName="AvatarPlaygroundStory";const AvatarPlayground={render:AvatarPlaygroundStory,parameters:{docs:{source:{code:"import { Avatar } from '@admiral-ds/react-ui';\nimport type { AvatarProps } from '@admiral-ds/react-ui';\n\nexport const AvatarPlaygroundTemplate = ({ userName, ...props }: AvatarProps) => {\n  return (\n    <>\n      <Avatar userName={userName || 'Just Example'} {...props} />\n    </>\n  );\n};\n"}}},name:"Playground"},SingleAvatarStory=()=>(0,jsx_runtime.jsx)(AvatarSingleTemplate,{});SingleAvatarStory.displayName="SingleAvatarStory";const SingleAvatar={render:SingleAvatarStory,parameters:{docs:{source:{code:'import styled from \'styled-components\';\n\nimport { Avatar, DefaultFontColorName } from \'@admiral-ds/react-ui\';\nimport { ReactComponent as PersonSolid } from \'@admiral-ds/icons/build/system/PersonSolid.svg\';\n\nconst imageURL = \'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg\';\n\nconst Text = styled.div`\n  font-family: \'VTB Group UI\';\n  font-size: 16px;\n  line-height: 24px;\n  margin-bottom: 8px;\n  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});\n`;\n\nconst Container = styled.div`\n  position: relative;\n  display: flex;\n  & > * {\n    margin-right: 20px;\n  }\n  margin-bottom: 40px;\n`;\n\nexport const AvatarSingleTemplate = () => (\n  <>\n    <Text>Размеры компонента</Text>\n    <Container>\n      <Avatar dimension="xs" userName="Dimension xs" />\n      <Avatar dimension="s" userName="Dimension s" />\n      <Avatar dimension="m" userName="Dimension m" />\n      <Avatar dimension="l" userName="Dimension l" />\n      <Avatar userName="Dimension xl" />\n    </Container>\n    <Text>\n      Внешний вид компонента (цвет фона, текста и иконки). Возможен выбор из четырех вариантов: light, white, grey, dark\n      или самостоятельная настройка цвета фона, текста, иконки\n    </Text>\n    <Container style={{ background: \'#F1F2F4\' }}>\n      <Avatar userName="Neutral 1 Appearance" appearance="neutral1" />\n      <Avatar userName="Neutral 2 Appearance" />\n      <Avatar userName="Neutral 3 Appearance" appearance="neutral3" />\n      <Avatar userName="Neutral 4 Appearance" appearance="neutral4" />\n      <Avatar userName="Custom Appearance" appearance={{ background: \'#3F7DFE\', text: \'#001157\' }} />\n      <Avatar\n        userName="Custom Appearance"\n        icon={<PersonSolid />}\n        appearance={{ background: \'#8A3FFC\', icon: \'#FFFFFF\' }}\n      />\n    </Container>\n    <Text>Варианты контента (инициалы, иконка, фото)</Text>\n    <Container>\n      <Avatar userName="Name" userInitials="Na" />\n      <Avatar userName="Name Surname" />\n      <Avatar userName="Icon Avatar" icon={<PersonSolid />} />\n      <Avatar userName="Image Avatar" href={imageURL} />\n    </Container>\n    <Text>Статусы компонента</Text>\n    <Container>\n      <Avatar dimension="xs" userName="Status Danger" icon={<PersonSolid />} status="danger" />\n      <Avatar dimension="s" userName="Status Warning" icon={<PersonSolid />} status="warn" />\n      <Avatar dimension="m" userName="Status Success" icon={<PersonSolid />} status="success" />\n      <Avatar dimension="l" userName="Status Inactive" icon={<PersonSolid />} status="inactive" />\n      <Avatar dimension="xl" userName="Custom Status" href={imageURL} status="#3F7DFE" />\n    </Container>\n  </>\n);\n'},description:{story:"Компонент используется для отображения фотографии пользователя, его инициалов или иконки. Присутствует \n        пять размеров компонента.\n\nДопускается использование одной или двух букв для обозначения пользователя (в размере XS \n        только одна буква). Компоненту и символам в нем можно присваивать любые цвета из палитры.\n\nКомпонент может быть \n        кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями пользователя. При ховере \n        над аватаром показывается Tooltip с именем пользователя (опционально можно отключить).\n\nМожет отображать статус \n        пользователя с помощью статусного Бейджа."}}},name:"Avatar"};AvatarPlayground.parameters={...AvatarPlayground.parameters,docs:{...AvatarPlayground.parameters?.docs,source:{originalSource:"{\n  render: AvatarPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: AvatarPlaygroundRaw\n      }\n    }\n  },\n  name: 'Playground'\n}",...AvatarPlayground.parameters?.docs?.source}}},SingleAvatar.parameters={...SingleAvatar.parameters,docs:{...SingleAvatar.parameters?.docs,source:{originalSource:"{\n  render: SingleAvatarStory,\n  parameters: {\n    docs: {\n      source: {\n        code: AvatarSingleRaw\n      },\n      description: {\n        story: `Компонент используется для отображения фотографии пользователя, его инициалов или иконки. Присутствует \n        пять размеров компонента.\\n\\nДопускается использование одной или двух букв для обозначения пользователя (в размере XS \n        только одна буква). Компоненту и символам в нем можно присваивать любые цвета из палитры.\\n\\nКомпонент может быть \n        кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями пользователя. При ховере \n        над аватаром показывается Tooltip с именем пользователя (опционально можно отключить).\\n\\nМожет отображать статус \n        пользователя с помощью статусного Бейджа.`\n      }\n    }\n  },\n  name: 'Avatar'\n}",...SingleAvatar.parameters?.docs?.source}}};const __namedExportsOrder=["AvatarPlayground","SingleAvatar"]},"./node_modules/@admiral-ds/icons/build/system/PersonSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgPersonSolid});var _defs,_g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgPersonSolid=function SvgPersonSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_defs||(_defs=react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath",{id:"PersonSolid_svg__a"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#fff",fillOpacity:0,d:"M0 0h24v24H0z"})))),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{clipPath:"url(#PersonSolid_svg__a)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3C9.33 3 7.26 5.32 7.56 7.96l.26 2.31A4.21 4.21 0 0 0 12 14c2.13 0 3.93-1.61 4.17-3.73l.26-2.31A4.46 4.46 0 0 0 12 3m-1.86 12c-2.81 0-5.25 1.95-5.86 4.69l-.1.45c-.09.44.24.86.69.86h14.25c.45 0 .78-.42.69-.86l-.1-.45A6 6 0 0 0 13.85 15z"}))))};__webpack_require__.p},"./src/components/AvatarBase/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>AvatarBase});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),TooltipHOC=__webpack_require__("./src/components/TooltipHOC/index.tsx"),common=__webpack_require__("./src/components/themes/common/index.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");var light=__webpack_require__("./src/components/themes/light/index.ts"),uid=__webpack_require__("./src/components/common/uid.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IMAGE_SIZE={xs:"24px",s:"32px",m:"40px",l:"48px",xl:"56px"},VIEWBOX={xs:"0 0 24 24",s:"0 0 32 32",m:"0 0 40 40",l:"0 0 48 48",xl:"0 0 56 56"},ACTIVITY_VIEWBOX={xs:"0 0 32 32",s:"0 0 40 40",m:"0 0 48 48",l:"0 0 56 56",xl:"0 0 64 64"},ACTIVITY_RING={xs:"15",s:"19",m:"23",l:"27",xl:"31"},CIRCLE={xs:"12",s:"16",m:"20",l:"24",xl:"28"},ACTIVITY_CIRCLE={xs:"16",s:"20",m:"24",l:"28",xl:"32"},ELLIPSE={xs:{c:"21",r:"3",r2:"5"},s:{c:"27",r:"5",r2:"7"},m:{c:"34",r:"6",r2:"8"},l:{c:"41",r:"7",r2:"9"},xl:{c:"47",r:"9",r2:"11"}},ACTIVITY_ELLIPSE={xs:{c:"25",r:"3",r2:"5"},s:{c:"31",r:"5",r2:"7"},m:{c:"38",r:"6",r2:"8"},l:{c:"45",r:"7",r2:"9"},xl:{c:"51",r:"9",r2:"11"}},RoundedImage=styled_components_browser_esm.Ay.image.withConfig({displayName:"Avatar_SVG__RoundedImage",componentId:"sc-iznzp-0"})(["clip-path:circle();"]),AvatarSVG=({dimension="xl",hasImage,href,status,size,appearance:appearanceProp,group=!1,svgMaskId,withActivityRing=!1,showActivityRing=!1})=>{const theme=(0,styled_components_browser_esm.DP)()||light.d,id=svgMaskId||(0,uid.L)(),useId=`url(#${id})`,circleCenter=withActivityRing?ACTIVITY_CIRCLE[dimension]:CIRCLE[dimension],ellipseCenter=withActivityRing?ACTIVITY_ELLIPSE[dimension].c:ELLIPSE[dimension].c,imageCoordinate=withActivityRing?"4px":"0",appearance=appearanceProp||"light",backgroundColor="string"==typeof appearance?(appearance=>{switch(appearance){case"neutral1":case"white":return`var(--admiral-color-Neutral_Neutral00, ${theme.color["Neutral/Neutral 00"]})`;case"neutral2":case"light":return`var(--admiral-color-Neutral_Neutral10, ${theme.color["Neutral/Neutral 10"]})`;case"neutral3":case"grey":return`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`;case"neutral4":case"dark":return`var(--admiral-color-Neutral_Neutral80, ${theme.color["Neutral/Neutral 80"]})`;default:return appearance?.background||`var(--admiral-color-Neutral_Neutral10, ${theme.color["Neutral/Neutral 10"]})`}})(appearance):appearance.background;return(0,jsx_runtime.jsxs)("svg",{viewBox:withActivityRing?ACTIVITY_VIEWBOX[dimension]:VIEWBOX[dimension],width:size,height:size,style:{transform:"rotate(.00001deg)"},children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsxs)("mask",{id,children:[withActivityRing&&showActivityRing&&(0,jsx_runtime.jsx)("circle",{id:"ring",cx:circleCenter,cy:circleCenter,r:ACTIVITY_RING[dimension],strokeWidth:"2",stroke:"white",fill:"white"}),(0,jsx_runtime.jsx)("circle",{id:"outer",cx:circleCenter,cy:circleCenter,r:CIRCLE[dimension],strokeWidth:"0",stroke:"white",fill:"white"}),status&&!group&&(0,jsx_runtime.jsx)("ellipse",{id:"inner",vectorEffect:"non-scaling-stroke",cx:ellipseCenter,cy:ellipseCenter,rx:ELLIPSE[dimension].r2,ry:ELLIPSE[dimension].r2,fill:"black"}),group&&(0,jsx_runtime.jsx)("circle",{cx:String(withActivityRing?3*Number(ACTIVITY_RING[dimension])-4:3*Number(CIRCLE[dimension])-2),cy:circleCenter,r:String(Number(withActivityRing?ACTIVITY_RING[dimension]:CIRCLE[dimension])+2),strokeWidth:"0",stroke:"black",fill:"black"})]})}),hasImage&&(0,jsx_runtime.jsx)(RoundedImage,{width:IMAGE_SIZE[dimension],height:IMAGE_SIZE[dimension],preserveAspectRatio:"xMidYMid slice",mask:useId,xlinkHref:href,x:imageCoordinate,y:imageCoordinate}),!hasImage&&(0,jsx_runtime.jsx)("circle",{id:"outer",cx:circleCenter,cy:circleCenter,r:CIRCLE[dimension],strokeWidth:"0",stroke:backgroundColor,fill:backgroundColor,mask:useId}),withActivityRing&&showActivityRing&&(0,jsx_runtime.jsx)("circle",{id:"ring",cx:circleCenter,cy:circleCenter,r:ACTIVITY_RING[dimension],strokeWidth:"2",stroke:`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`,fill:"none",mask:useId}),status&&!group&&(0,jsx_runtime.jsx)("ellipse",{style:{fill:(status=>{switch(status){case"success":return`var(--admiral-color-Success_Success50Main, ${theme.color["Success/Success 50 Main"]})`;case"warn":return`var(--admiral-color-Attention_Attention50Main, ${theme.color["Attention/Attention 50 Main"]})`;case"danger":return`var(--admiral-color-Error_Error60Main, ${theme.color["Error/Error 60 Main"]})`;case"inactive":return`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`;default:return status||`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`}})(status),strokeWidth:0,strokeOpacity:0},vectorEffect:"non-scaling-stroke",cx:ellipseCenter,cy:ellipseCenter,rx:ELLIPSE[dimension].r,ry:ELLIPSE[dimension].r})]})};AvatarSVG.displayName="AvatarSVG";try{AvatarSVG.displayName="AvatarSVG",AvatarSVG.__docgenInfo={description:"",displayName:"AvatarSVG",props:{dimension:{defaultValue:{value:"xl"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"string"}},hasImage:{defaultValue:null,description:"",name:"hasImage",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},group:{defaultValue:{value:"false"},description:"",name:"group",required:!1,type:{name:"boolean"}},svgMaskId:{defaultValue:null,description:"",name:"svgMaskId",required:!1,type:{name:"string"}},withActivityRing:{defaultValue:{value:"false"},description:"",name:"withActivityRing",required:!1,type:{name:"boolean"}},showActivityRing:{defaultValue:{value:"false"},description:"",name:"showActivityRing",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarBase/Avatar_SVG.tsx#AvatarSVG"]={docgenInfo:AvatarSVG.__docgenInfo,name:"AvatarSVG",path:"src/components/AvatarBase/Avatar_SVG.tsx#AvatarSVG"})}catch(__react_docgen_typescript_loader_error){}const Wrapper=styled_components_browser_esm.Ay.button.withConfig({displayName:"AvatarBase__Wrapper",componentId:"sc-w28a61-0"})(["position:relative;width:",";height:",";margin:0;padding:0;border:none;appearance:none;background:transparent;-webkit-tap-highlight-color:transparent;cursor:pointer;border-radius:var(--admiral-border-radius-Medium,",");&:focus-visible{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}"],(({size})=>size),(({size})=>size),(p=>(0,borderRadius.VM)(p.theme.shape)),(p=>p.theme.color["Primary/Primary 60 Main"])),WrapperWithTooltip=(0,TooltipHOC.K)(Wrapper),getTextColor=(0,styled_components_browser_esm.AH)(["",""],(({theme,$appearance})=>{switch($appearance){case"neutral1":case"white":case"neutral2":case"light":return`var(--admiral-color-Neutral_Neutral90, ${theme.color[common.jn]})`;case"neutral3":case"grey":return`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`;case"neutral4":case"dark":return`var(--admiral-color-Neutral_Neutral00, ${theme.color["Neutral/Neutral 00"]})`;default:return $appearance?.text||`var(--admiral-color-Neutral_Neutral90, ${theme.color[common.jn]})`}})),getTypography=(0,styled_components_browser_esm.AH)(["",""],(({$dimension})=>{switch($dimension){case"xs":case"s":return typography.Il["Caption/Caption 1"];case"m":case"l":return typography.Il["Body/Body 1 Short"];default:return typography.Il["Subtitle/Subtitle 1"]}})),Text=styled_components_browser_esm.Ay.span.withConfig({displayName:"AvatarBase__Text",componentId:"sc-w28a61-1"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);user-select:none;color:",";",""],getTextColor,getTypography),getIconSize=(0,styled_components_browser_esm.AH)(["",""],(({$dimension})=>{switch($dimension){case"xs":case"s":return"16px";case"m":return"24px";case"l":return"28px";default:return"32px"}})),getIconColor=(0,styled_components_browser_esm.AH)(["",""],(({theme,$appearance})=>{switch($appearance){case"neutral1":case"white":case"neutral2":case"light":return`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`;case"neutral3":case"grey":return`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`;case"neutral4":case"dark":return`var(--admiral-color-Neutral_Neutral00, ${theme.color["Neutral/Neutral 00"]})`;default:return $appearance?.icon||`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`}})),IconWrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"AvatarBase__IconWrapper",componentId:"sc-w28a61-2"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:",";height:",";& svg{& *[fill^='#']{fill:",";}width:100%;height:100%;}"],getIconSize,getIconSize,getIconColor),AvatarBase=(0,react.forwardRef)((({userName,userInitials,href,status,dimension="xl",icon:Icon,appearance="neutral2",group=!1,showTooltip=!0,isMenuAvatar=!1,svgMaskId,withActivityRing=!1,showActivityRing=!1,...props},ref)=>{const loaded=(src=>{const[loaded,setLoaded]=react.useState(!1);return react.useEffect((()=>{if(!src)return;setLoaded(!1);let effectActive=!0;const image=new Image;return image.src=src,image.onload=()=>{effectActive&&setLoaded("loaded")},image.onerror=()=>{effectActive&&setLoaded("error")},()=>{effectActive=!1}}),[src]),loaded})(href),hasImage=Boolean(href&&"loaded"===loaded),hasIcon=Boolean(Icon&&!hasImage),hasAbbr=!hasImage&&!hasIcon||isMenuAvatar,maxAbbrLength="xs"===dimension?1:2,defaultUserInitials=userName?.split(" ").map((word=>word.toUpperCase()[0])).join("").slice(0,maxAbbrLength),abbr=isMenuAvatar?userName:userInitials||defaultUserInitials,getSize=withActivityRing=>{let additionalPadding=0;switch(withActivityRing&&(additionalPadding=4),dimension){case"xs":return 24+2*additionalPadding+"px";case"s":return 32+2*additionalPadding+"px";case"m":return 40+2*additionalPadding+"px";case"l":return 48+2*additionalPadding+"px";default:return 56+2*additionalPadding+"px"}},renderAvatarContent=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(AvatarSVG,{dimension,size:getSize(withActivityRing),hasImage,href,status,appearance,group,svgMaskId,withActivityRing,showActivityRing}),hasAbbr&&(0,jsx_runtime.jsx)(Text,{$dimension:dimension,$appearance:appearance,children:abbr}),hasIcon&&(0,jsx_runtime.jsx)(IconWrapper,{$dimension:dimension,$appearance:appearance,children:Icon})]});return showTooltip?(0,jsx_runtime.jsx)(WrapperWithTooltip,{ref,size:getSize(withActivityRing),renderContent:()=>userName,...props,children:renderAvatarContent()}):(0,jsx_runtime.jsx)(Wrapper,{ref,size:getSize(withActivityRing),...props,children:renderAvatarContent()})}));AvatarBase.displayName="AvatarBase";try{AvatarBase.displayName="AvatarBase",AvatarBase.__docgenInfo={description:"",displayName:"AvatarBase",props:{userName:{defaultValue:null,description:"Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials)",name:"userName",required:!0,type:{name:"string"}},userInitials:{defaultValue:null,description:"Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых\nдвух слов (одного слова для dimension='s'), входящих в userName",name:"userInitials",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"URL аватарки пользователя",name:"href",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"Статус пользователя",name:"status",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Иконка для отображения",name:"icon",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:{value:"neutral2"},description:"Внешний вид компонента (цвет заливки, текста, иконки) -\nможно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.\nПараметры background, text и icon являются опциональными, если какие-то из них не заданы,\nто по умолчанию будут применены те же цвета, что и при appearance='neutral2'",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},svgMaskId:{defaultValue:null,description:"Уникальный идентификатор svg маски",name:"svgMaskId",required:!1,type:{name:"string"}},showTooltip:{defaultValue:{value:"true"},description:"Отображение тултипа",name:"showTooltip",required:!1,type:{name:"boolean"}},withActivityRing:{defaultValue:{value:"false"},description:"Аватар с опцией activity ring",name:"withActivityRing",required:!1,type:{name:"boolean"}},showActivityRing:{defaultValue:{value:"false"},description:"Отображение activity ring",name:"showActivityRing",required:!1,type:{name:"boolean"}},group:{defaultValue:{value:"false"},description:"Для внутреннего использования! Отображение аватара в составе группы (когда правый край аватара усечен)",name:"group",required:!1,type:{name:"boolean"}},isMenuAvatar:{defaultValue:{value:"false"},description:"Для внутреннего использования! Используется ли аватар в качестве меню. Если да - то userName выводится без изменений",name:"isMenuAvatar",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarBase/index.tsx#AvatarBase"]={docgenInfo:AvatarBase.__docgenInfo,name:"AvatarBase",path:"src/components/AvatarBase/index.tsx#AvatarBase"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TooltipHOC/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipHoc});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tooltip/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TooltipHoc(Component){const WrappedComponent=props=>{const{forwardedRef,renderContent,container,withDelay,tooltipRef,tooltipPosition,...wrappedCompProps}=props,emptyContent=!renderContent()&&0!==renderContent(),anchorElementRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[visible,setVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[node,setNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[timer,setTimer]=react__WEBPACK_IMPORTED_MODULE_0__.useState();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{function show(){setTimer(window.setTimeout((()=>setVisible(!0)),withDelay?_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.w:0))}function hide(){clearTimeout(timer),setVisible(!1)}if(node)return node.addEventListener("mouseenter",show),node.addEventListener("focus",show),node.addEventListener("mouseleave",hide),node.addEventListener("blur",hide),()=>{timer&&clearTimeout(timer),node.removeEventListener("mouseenter",show),node.removeEventListener("focus",show),node.removeEventListener("mouseleave",hide),node.removeEventListener("blur",hide)}}),[node,setTimer,setVisible,timer]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{...wrappedCompProps,ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__.d)(forwardedRef,anchorElementRef,setNode)}),visible&&!emptyContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.m,{targetElement:anchorElementRef.current,renderContent,container,tooltipPosition,ref:tooltipRef})]})};return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WrappedComponent,{forwardedRef:ref,...props})))}try{TooltipHoc.displayName="TooltipHoc",TooltipHoc.__docgenInfo={description:"",displayName:"TooltipHoc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipHOC/index.tsx#TooltipHoc"]={docgenInfo:TooltipHoc.__docgenInfo,name:"TooltipHoc",path:"src/components/TooltipHOC/index.tsx#TooltipHoc"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{L:()=>uid})},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});const DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);