"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[7683],{"./src/components/ActionBar/stories/ActionBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionBarPlayground:()=>ActionBarPlayground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ActionBar_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src=__webpack_require__("./src/index.ts"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),index_es=__webpack_require__("./node_modules/@admiral-ds/icons/dist/index.es.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const items=[{itemId:"1",withDivider:!1,name:"Search",icon:(0,jsx_runtime.jsx)(index_es.YGL,{}),disabled:!1},{itemId:"2",withDivider:!1,name:"Edit",icon:(0,jsx_runtime.jsx)(index_es.AWx,{}),disabled:!1},{itemId:"3",withDivider:!0,name:"Archive",icon:(0,jsx_runtime.jsx)(index_es.gbV,{}),disabled:!1},{itemId:"4",withDivider:!1,name:"Heart",icon:(0,jsx_runtime.jsx)(index_es.zi0,{}),disabled:!1},{itemId:"5",withDivider:!1,name:"Pin",icon:(0,jsx_runtime.jsx)(index_es.mPd,{}),disabled:!1},{itemId:"6",withDivider:!0,name:"Email",icon:(0,jsx_runtime.jsx)(index_es.cEz,{}),disabled:!0},{itemId:"7",withDivider:!1,name:"Attach file",icon:(0,jsx_runtime.jsx)(index_es.DQ2,{}),disabled:!1},{itemId:"8",withDivider:!1,name:"Attach link",icon:(0,jsx_runtime.jsx)(index_es.kMn,{}),disabled:!1},{itemId:"9",withDivider:!1,name:"Export",icon:(0,jsx_runtime.jsx)(index_es.UT8,{}),disabled:!1},{itemId:"10",withDivider:!1,name:"Delete",icon:(0,jsx_runtime.jsx)(index_es.D6i,{}),disabled:!1}],Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"ActionBartemplate__Separator",componentId:"sc-1lwpsoj-0"})(["height:","px;"],(p=>p.height)),Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"ActionBartemplate__Wrapper",componentId:"sc-1lwpsoj-1"})(["display:flex;flex-direction:column;gap:10px;"]),ActionBarTemplate=({dimension="xl",themeBorderKind,CSSCustomProps,...props})=>{const itemsMap=(0,react.useMemo)((()=>items.map((item=>({itemId:item.itemId,withDivider:item.withDivider})))),[items]);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Action Bar"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Action Bar — это панель действий с возможностью деления на логические группы с помощью разделителя.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Опционально или при нехватке места добавляется Overflow Menu. Над каждой кнопкой, входящей в состав компонента, при ховере, появляется Tooltip с подсказкой функции кнопки.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Компонент Action Bar представлен в 4х размерах по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32).",(0,jsx_runtime.jsx)(Separator,{height:8}),"По дефолту тултип появляется снизу от кнопки при ховере. Можно настроить появление тултипа справа, слева, сверху, в зависимости от расположения Action Bar. В случае, когда это действительно необходимо и смысл кнопки очевиден, опционально можно отключать тултип.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Если кнопки не помещаются в доступное горизонтальное пространство, они перемещаются в Dropdown Menu. Размеры выпадающего меню для Action Bar — L для XL и L размера Action Bar, M для M размера и S для размера S. При изменении ширины компонента, кнопки не помещающиеся в ширину Action Bar, перемещаются в Overflow Menu, добавляясь по порядку. Это означает, что последняя кнопка на панели действий также будет последней кнопкой внутри меню."]})]}),(0,jsx_runtime.jsx)(src.ActionBar,{...props,items:itemsMap,renderActionBarItem:itemId=>{const item=items.find((item=>item.itemId===itemId))||items[0];return(0,jsx_runtime.jsx)(src.ActionBarItemWithTooltip,{dimension,id:item.itemId,renderContent:()=>item.name,onClick:()=>console.log(`${item.name} clicked`),disabled:item.disabled,children:item.icon},item.itemId)},renderDropMenuItem:itemId=>{const item=items.find((item=>item.itemId===itemId))||items[0],handleClick=()=>console.log(`${item.name} clicked`);return options=>(0,react.createElement)(src.ActionBarDropMenuItem,{dimension,...options,key:itemId,onClick:handleClick},item.icon,item.name)},itemIsDisabled:itemId=>{const currentTab=items.find((item=>item.itemId===itemId));return!!currentTab?.disabled},dimension})]})})};ActionBarTemplate.displayName="ActionBarTemplate";try{ActionBarTemplate.displayName="ActionBarTemplate",ActionBarTemplate.__docgenInfo={description:"",displayName:"ActionBarTemplate",props:{dimension:{defaultValue:{value:"xl"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},renderActionBarItem:{defaultValue:null,description:"Рендер-функция для отрисовки кнопки",name:"renderActionBarItem",required:!0,type:{name:"(itemId: string) => ReactNode"}},renderDropMenuItem:{defaultValue:null,description:"Рендер-функция для отрисовки элемента выпадающего списка",name:"renderDropMenuItem",required:!0,type:{name:"(itemId: string) => ReactNode | ((options: RenderOptionProps) => ReactNode)"}},items:{defaultValue:null,description:"Массив элементов",name:"items",required:!0,type:{name:"ActionBarItemProps[]"}},itemIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли элемент disabled",name:"itemIsDisabled",required:!0,type:{name:"(itemId: string) => boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ActionBar/stories/ActionBar.template.tsx#ActionBarTemplate"]={docgenInfo:ActionBarTemplate.__docgenInfo,name:"ActionBarTemplate",path:"src/components/ActionBar/stories/ActionBar.template.tsx#ActionBarTemplate"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const ActionBar_stories={title:"Admiral-2.1/ActionBar",decorators:void 0,component:src.ActionBar,parameters:{docs:{source:{code:null}}},argTypes:{dimension:{options:["xl","l","m","s"],control:{type:"radio"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}}}},ActionBarStory=props=>(0,jsx_runtime.jsx)(ActionBarTemplate,{...props});ActionBarStory.displayName="ActionBarStory";const ActionBarPlayground={render:ActionBarStory,parameters:{docs:{source:{code:"import { useMemo } from 'react';\nimport styled, { ThemeProvider } from 'styled-components';\n\nimport type { ActionBarProps, BorderRadiusType, RenderOptionProps } from '@admiral-ds/react-ui';\nimport {\n  ActionBar,\n  ActionBarItemWithTooltip,\n  ActionBarDropMenuItem,\n  NotificationItem,\n  NotificationItemContent,\n  NotificationItemTitle,\n} from '@admiral-ds/react-ui';\n\nimport {\n  SystemSearchOutline,\n  SystemEditOutline,\n  ServiceArchiveOutline,\n  CategoryHeartOutline,\n  CategoryPinOutline,\n  SystemEmailOutline,\n  SystemAttachFileOutline,\n  SystemLinkOutline,\n  SystemExportOutline,\n  SystemDeleteOutline,\n} from '@admiral-ds/icons';\nimport { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';\n\nconst items = [\n  { itemId: '1', withDivider: false, name: 'Search', icon: <SystemSearchOutline />, disabled: false },\n  { itemId: '2', withDivider: false, name: 'Edit', icon: <SystemEditOutline />, disabled: false },\n  { itemId: '3', withDivider: true, name: 'Archive', icon: <ServiceArchiveOutline />, disabled: false },\n  { itemId: '4', withDivider: false, name: 'Heart', icon: <CategoryHeartOutline />, disabled: false },\n  { itemId: '5', withDivider: false, name: 'Pin', icon: <CategoryPinOutline />, disabled: false },\n  { itemId: '6', withDivider: true, name: 'Email', icon: <SystemEmailOutline />, disabled: true },\n  { itemId: '7', withDivider: false, name: 'Attach file', icon: <SystemAttachFileOutline />, disabled: false },\n  { itemId: '8', withDivider: false, name: 'Attach link', icon: <SystemLinkOutline />, disabled: false },\n  { itemId: '9', withDivider: false, name: 'Export', icon: <SystemExportOutline />, disabled: false },\n  { itemId: '10', withDivider: false, name: 'Delete', icon: <SystemDeleteOutline />, disabled: false },\n];\n\nconst Separator = styled.div<{ height: number }>`\n  height: ${(p) => p.height}px;\n`;\nconst Wrapper = styled.div`\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n`;\n\nexport const ActionBarTemplate = ({\n  dimension = 'xl',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: ActionBarProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const itemsMap = useMemo(() => {\n    return items.map((item) => ({\n      itemId: item.itemId,\n      withDivider: item.withDivider,\n    }));\n  }, [items]);\n\n  const renderActionBarItem = (itemId: string) => {\n    const item = items.find((item) => item.itemId === itemId) || items[0];\n    const handleClick = () => console.log(`${item.name} clicked`);\n    return (\n      <ActionBarItemWithTooltip\n        dimension={dimension}\n        id={item.itemId}\n        key={item.itemId}\n        renderContent={() => item.name}\n        onClick={handleClick}\n        disabled={item.disabled}\n      >\n        {item.icon}\n      </ActionBarItemWithTooltip>\n    );\n  };\n  const renderDropMenuItem = (itemId: string) => {\n    const item = items.find((item) => item.itemId === itemId) || items[0];\n    const handleClick = () => console.log(`${item.name} clicked`);\n    return (options: RenderOptionProps) => {\n      return (\n        <ActionBarDropMenuItem dimension={dimension} {...options} key={itemId} onClick={handleClick}>\n          {item.icon}\n          {item.name}\n        </ActionBarDropMenuItem>\n      );\n    };\n  };\n  const itemIsDisabled = (itemId: string) => {\n    const currentTab = items.find((item) => item.itemId === itemId);\n    return !!currentTab?.disabled;\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <Wrapper>\n        <NotificationItem displayStatusIcon>\n          <NotificationItemTitle>Action Bar</NotificationItemTitle>\n          <NotificationItemContent>\n            Action Bar — это панель действий с возможностью деления на логические группы с помощью разделителя.\n            <Separator height={8} />\n            Опционально или при нехватке места добавляется Overflow Menu. Над каждой кнопкой, входящей в состав\n            компонента, при ховере, появляется Tooltip с подсказкой функции кнопки.\n            <Separator height={8} />\n            Компонент Action Bar представлен в 4х размерах по аналогии с обычными кнопками: XL (56), L (48), M (40), S\n            (32).\n            <Separator height={8} />\n            По дефолту тултип появляется снизу от кнопки при ховере. Можно настроить появление тултипа справа, слева,\n            сверху, в зависимости от расположения Action Bar. В случае, когда это действительно необходимо и смысл\n            кнопки очевиден, опционально можно отключать тултип.\n            <Separator height={8} />\n            Если кнопки не помещаются в доступное горизонтальное пространство, они перемещаются в Dropdown Menu. Размеры\n            выпадающего меню для Action Bar — L для XL и L размера Action Bar, M для M размера и S для размера S. При\n            изменении ширины компонента, кнопки не помещающиеся в ширину Action Bar, перемещаются в Overflow Menu,\n            добавляясь по порядку. Это означает, что последняя кнопка на панели действий также будет последней кнопкой\n            внутри меню.\n          </NotificationItemContent>\n        </NotificationItem>\n        <ActionBar\n          {...props}\n          items={itemsMap}\n          renderActionBarItem={renderActionBarItem}\n          renderDropMenuItem={renderDropMenuItem}\n          itemIsDisabled={itemIsDisabled}\n          dimension={dimension}\n        />\n      </Wrapper>\n    </ThemeProvider>\n  );\n};\n"}}},name:"ActionBar Playground"};ActionBarPlayground.parameters={...ActionBarPlayground.parameters,docs:{...ActionBarPlayground.parameters?.docs,source:{originalSource:"{\n  render: ActionBarStory,\n  parameters: {\n    docs: {\n      source: {\n        code: ActionBarTemplateRaw\n      }\n    }\n  },\n  name: 'ActionBar Playground'\n}",...ActionBarPlayground.parameters?.docs?.source}}};const __namedExportsOrder=["ActionBarPlayground"]},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _style,_path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.p;const spin=(0,styled_components_browser_esm.i7)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),SpinnerIcon=(0,styled_components_browser_esm.Ay)((function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_style||(_style=react.createElement("style",null,"@container (min-width: 64px){svg :not(path.Subtract_svg__spinner-icon[data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg :not(path.Subtract_svg__spinner-icon[data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg :not(path.Subtract_svg__spinner-icon[data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg :not(path.Subtract_svg__spinner-icon[data-dimension=ms]){display:none}}@container (max-width: 16px){svg :not(path.Subtract_svg__spinner-icon[data-dimension=s]){display:none}}")),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))})).withConfig({displayName:"SpinnerIcon",componentId:"sc-t3762f-0"})(["animation:"," 1s linear infinite;path{fill:",";}width:100%;height:100%;"],spin,(({$inverse,theme})=>$inverse?`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`))},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(["0%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}50%{background-color:var(--admiral-color-Neutral_Neutral20,",");border-color:var(--admiral-color-Neutral_Neutral20,",");}100%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}}}]);