"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9011],{"./src/components/AvatarActivityGroup/stories/AvatarActivityGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarActivityGroupPlayground:()=>AvatarActivityGroupPlayground,AvatarActivityGroupWidth:()=>AvatarActivityGroupWidth,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AvatarActivityGroup_stories});var AvatarBaseGroup=__webpack_require__("./src/components/AvatarBaseGroup/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AvatarActivityGroup=({items,...props})=>{const itemsBase=items.map((item=>({...item,withActivityRing:!0})));return(0,jsx_runtime.jsx)(AvatarBaseGroup.W,{...props,items:itemsBase,withActivityRing:!0})};AvatarActivityGroup.displayName="AvatarActivityGroup",AvatarActivityGroup.displayName="AvatarActivityGroup";try{AvatarActivityGroup.displayName="AvatarActivityGroup",AvatarActivityGroup.__docgenInfo={description:"",displayName:"AvatarActivityGroup",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AvatarActivityProps[]"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},onAvatarSelect:{defaultValue:null,description:"Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара",name:"onAvatarSelect",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarActivityGroup/index.tsx#AvatarActivityGroup"]={docgenInfo:AvatarActivityGroup.__docgenInfo,name:"AvatarActivityGroup",path:"src/components/AvatarActivityGroup/index.tsx#AvatarActivityGroup"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),PersonSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PersonSolid.svg");const Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"AvatarActivityGroupWidthtemplate__Wrapper",componentId:"sc-1hhq848-0"})(["display:flex;flex-direction:column;align-items:center;gap:20px;"]),StyledNotificationItem=(0,styled_components_browser_esm.Ay)(NotificationItem.rn).withConfig({displayName:"AvatarActivityGroupWidthtemplate__StyledNotificationItem",componentId:"sc-1hhq848-1"})(["width:100%;"]),Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"AvatarActivityGroupWidthtemplate__Separator",componentId:"sc-1hhq848-2"})(["height:","px;"],(p=>p.height)),imageURL="https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",onSelectAvatar=id=>{console.log("Select item with id: ",id)},items1=[{userName:"Lena Ivanova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"1"},{userName:"Petr Lesov",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"2"},{userName:"Agata Petrova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"3"},{userName:"Arina Leskova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"4",showActivityRing:!0},{userName:"Rita",appearance:"neutral4",id:"5"},{userName:"Важный Кот",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),href:imageURL,id:"6"},{userName:"Lisa Kotova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"7"},{userName:"Ирина Глушко",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"8"},{userName:"Rosa Farrel",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"9"},{userName:"Tom Hidlton",appearance:"neutral4",id:"10"}],items2=[{userName:"Lena Ivanova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"1",appearance:{background:"#3F7DFE",icon:"#001157"}},{userName:"Petr Lesov",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"2"},{userName:"Agata Petrova",id:"3",appearance:{background:"#D92020",text:"#FFFFFF"}},{userName:"Arina Leskova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"4",showActivityRing:!0},{userName:"Rita",appearance:"neutral2",id:"5"},{userName:"Важный Кот",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),href:imageURL,id:"6"},{userName:"Lisa Kotova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"7"},{userName:"Ирина Глушко",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"8"},{userName:"Rosa Farrel",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"9"},{userName:"Tom Hidlton",appearance:"neutral2",id:"10"}],AvatarActivityGroupWidthTemplate=props=>(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"AvatarActivityGroup."}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества скрытых элементов.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Чтобы задать для всех аватаров, входящих в группу, единый внешний вид, достаточно задать для компонента AvatarGroup соответствующее значение параметра appearance. Если для каких-то аватаров нужно задать отличный от остальных внешний вид, необходимо задать параметр appearance непосредственно для компонента Avatar. Параметр appearance, заданный для Avatar, имеет больший приоритет, чем параметр appearance, заданный для AvatarGroup.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Пример AvatarActivityGroup с единым для всех аватаров внешним видом (appearance)."]})]}),(0,jsx_runtime.jsx)(AvatarActivityGroup,{...props,style:{width:"300px"},items:items1,onAvatarSelect:onSelectAvatar,dropContainerClassName:"dropContainerClass"}),(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Avatar Group."}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Пример AvatarActivityGroup с различными по внешнему виду (appearance) аватарами."})]}),(0,jsx_runtime.jsx)(AvatarActivityGroup,{...props,style:{width:"300px"},items:items2,onAvatarSelect:onSelectAvatar,appearance:"neutral4",dropContainerClassName:"dropContainerClass",dropContainerStyle:{width:"250px"}})]});AvatarActivityGroupWidthTemplate.displayName="AvatarActivityGroupWidthTemplate";try{AvatarActivityGroupWidthTemplate.displayName="AvatarActivityGroupWidthTemplate",AvatarActivityGroupWidthTemplate.__docgenInfo={description:"",displayName:"AvatarActivityGroupWidthTemplate",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AvatarActivityProps[]"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},onAvatarSelect:{defaultValue:null,description:"Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара",name:"onAvatarSelect",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarActivityGroup/stories/AvatarActivityGroupWidth.template.tsx#AvatarActivityGroupWidthTemplate"]={docgenInfo:AvatarActivityGroupWidthTemplate.__docgenInfo,name:"AvatarActivityGroupWidthTemplate",path:"src/components/AvatarActivityGroup/stories/AvatarActivityGroupWidth.template.tsx#AvatarActivityGroupWidthTemplate"})}catch(__react_docgen_typescript_loader_error){}const AvatarActivityGroupPlayground_template_Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"AvatarActivityGroupPlaygroundtemplate__Wrapper",componentId:"sc-1v1g7hf-0"})(["display:flex;flex-direction:column;align-items:center;gap:20px;"]),AvatarActivityGroupPlayground_template_StyledNotificationItem=(0,styled_components_browser_esm.Ay)(NotificationItem.rn).withConfig({displayName:"AvatarActivityGroupPlaygroundtemplate__StyledNotificationItem",componentId:"sc-1v1g7hf-1"})(["width:100%;"]),AvatarActivityGroupPlayground_template_onSelectAvatar=id=>{console.log("Select item with id: ",id)},items=[{userName:"Lena Ivanova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"1"},{userName:"Petr Lesov",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"2"},{userName:"Agata Petrova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"3"},{userName:"Arina Leskova",appearance:"neutral3",id:"4",showActivityRing:!0},{userName:"Rita",appearance:"neutral4",id:"5"},{userName:"Важный Кот",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),href:"https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",id:"6"},{userName:"Lisa Kotova",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"7"},{userName:"Ирина Глушко",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"8"},{userName:"Rosa Farrel",icon:(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"9"},{userName:"Tom Hidlton",appearance:{background:"#3F7DFE",text:"#001157"},id:"10"}],AvatarActivityGroupPlaygroundTemplate=({onAvatarSelect,...props})=>(0,jsx_runtime.jsxs)(AvatarActivityGroupPlayground_template_Wrapper,{children:[(0,jsx_runtime.jsxs)(AvatarActivityGroupPlayground_template_StyledNotificationItem,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Группировка. Компонент AvatarActivityGroup."}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Компоненты выстраиваются по горизонтали с отрицательным отступом -10 px и внешней обводкой 2px в цвет фона страницы. При группировке статусы не отображаются."})]}),(0,jsx_runtime.jsx)(AvatarActivityGroup,{...props,items,onAvatarSelect:onAvatarSelect||AvatarActivityGroupPlayground_template_onSelectAvatar,"data-dropdown-container-id":"avatar-group-with-dropdown",className:"avatar-group-class"})]});AvatarActivityGroupPlaygroundTemplate.displayName="AvatarActivityGroupPlaygroundTemplate";try{AvatarActivityGroupPlaygroundTemplate.displayName="AvatarActivityGroupPlaygroundTemplate",AvatarActivityGroupPlaygroundTemplate.__docgenInfo={description:"",displayName:"AvatarActivityGroupPlaygroundTemplate",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AvatarActivityProps[]"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},onAvatarSelect:{defaultValue:null,description:"Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара",name:"onAvatarSelect",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarActivityGroup/stories/AvatarActivityGroupPlayground.template.tsx#AvatarActivityGroupPlaygroundTemplate"]={docgenInfo:AvatarActivityGroupPlaygroundTemplate.__docgenInfo,name:"AvatarActivityGroupPlaygroundTemplate",path:"src/components/AvatarActivityGroup/stories/AvatarActivityGroupPlayground.template.tsx#AvatarActivityGroupPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}const AvatarActivityGroup_stories={title:"Admiral-2.1/AvatarActivityGroup",component:AvatarActivityGroup,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367"}},argTypes:{dimension:{options:["xl","l","m","s","xs"],control:{type:"radio"}},items:{control:!1},appearance:{options:["neutral1","neutral2","neutral3","neutral4"],control:{type:"radio"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},menuWidth:{control:!1},menuMaxHeight:{control:!1}}},AvatarActivityGroupPlaygroundStory=props=>(0,jsx_runtime.jsx)(AvatarActivityGroupPlaygroundTemplate,{...props});AvatarActivityGroupPlaygroundStory.displayName="AvatarActivityGroupPlaygroundStory";const AvatarActivityGroupPlayground={render:AvatarActivityGroupPlaygroundStory,parameters:{docs:{source:{code:"import {\n  AvatarActivityGroup,\n  NotificationItem,\n  NotificationItemContent,\n  NotificationItemTitle,\n} from '@admiral-ds/react-ui';\nimport type { AvatarActivityGroupProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';\nimport styled from 'styled-components';\n\nconst Wrapper = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n`;\nconst StyledNotificationItem = styled(NotificationItem)`\n  width: 100%;\n`;\n\nconst imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';\n\nconst onSelectAvatar = (id: string) => {\n  // eslint-disable-next-line no-console\n  console.log('Select item with id: ', id);\n};\n\nconst items: AvatarActivityGroupProps['items'] = [\n  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },\n  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },\n  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },\n  { userName: 'Arina Leskova', appearance: 'neutral3', id: '4', showActivityRing: true },\n  { userName: 'Rita', appearance: 'neutral4', id: '5' },\n  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },\n  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },\n  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },\n  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },\n  { userName: 'Tom Hidlton', appearance: { background: '#3F7DFE', text: '#001157' }, id: '10' },\n];\n\nexport const AvatarActivityGroupPlaygroundTemplate = ({ onAvatarSelect, ...props }: AvatarActivityGroupProps) => {\n  return (\n    <Wrapper>\n      <StyledNotificationItem displayStatusIcon>\n        <NotificationItemTitle>Группировка. Компонент AvatarActivityGroup.</NotificationItemTitle>\n        <NotificationItemContent>\n          Компоненты выстраиваются по горизонтали с отрицательным отступом -10 px и внешней обводкой 2px в цвет фона\n          страницы. При группировке статусы не отображаются.\n        </NotificationItemContent>\n      </StyledNotificationItem>\n      <AvatarActivityGroup\n        {...props}\n        items={items}\n        onAvatarSelect={onAvatarSelect || onSelectAvatar}\n        data-dropdown-container-id=\"avatar-group-with-dropdown\"\n        className=\"avatar-group-class\"\n      />\n    </Wrapper>\n  );\n};\n"}}},name:"AvatarActivityGroup. Playground"},AvatarActivityGroupWidthStory=props=>(0,jsx_runtime.jsx)(AvatarActivityGroupWidthTemplate,{...props});AvatarActivityGroupWidthStory.displayName="AvatarActivityGroupWidthStory";const AvatarActivityGroupWidth={render:AvatarActivityGroupWidthStory,parameters:{docs:{source:{code:"import styled from 'styled-components';\n\nimport {\n  AvatarActivityGroup,\n  NotificationItem,\n  NotificationItemContent,\n  NotificationItemTitle,\n} from '@admiral-ds/react-ui';\nimport type { AvatarActivityGroupProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';\n\nconst Wrapper = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n`;\nconst StyledNotificationItem = styled(NotificationItem)`\n  width: 100%;\n`;\nconst Separator = styled.div<{ height: number }>`\n  height: ${(p) => p.height}px;\n`;\n\nconst imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';\n\nconst onSelectAvatar = (id: string) => {\n  // eslint-disable-next-line no-console\n  console.log('Select item with id: ', id);\n};\n\nconst items1: AvatarActivityGroupProps['items'] = [\n  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },\n  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },\n  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },\n  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4', showActivityRing: true },\n  { userName: 'Rita', appearance: 'neutral4', id: '5' },\n  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },\n  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },\n  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },\n  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },\n  { userName: 'Tom Hidlton', appearance: 'neutral4', id: '10' },\n];\n\nconst items2: AvatarActivityGroupProps['items'] = [\n  {\n    userName: 'Lena Ivanova',\n    icon: <PersonSolid />,\n    id: '1',\n    appearance: { background: '#3F7DFE', icon: '#001157' },\n  },\n  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },\n  {\n    userName: 'Agata Petrova',\n    id: '3',\n    appearance: { background: '#D92020', text: '#FFFFFF' },\n  },\n  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4', showActivityRing: true },\n  { userName: 'Rita', appearance: 'neutral2', id: '5' },\n  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },\n  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },\n  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },\n  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },\n  { userName: 'Tom Hidlton', appearance: 'neutral2', id: '10' },\n];\n\nexport const AvatarActivityGroupWidthTemplate = (props: AvatarActivityGroupProps) => {\n  return (\n    <Wrapper>\n      <StyledNotificationItem displayStatusIcon>\n        <NotificationItemTitle>AvatarActivityGroup.</NotificationItemTitle>\n        <NotificationItemContent>\n          При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества\n          скрытых элементов.\n          <Separator height={8} />\n          Чтобы задать для всех аватаров, входящих в группу, единый внешний вид, достаточно задать для компонента\n          AvatarGroup соответствующее значение параметра appearance. Если для каких-то аватаров нужно задать отличный от\n          остальных внешний вид, необходимо задать параметр appearance непосредственно для компонента Avatar. Параметр\n          appearance, заданный для Avatar, имеет больший приоритет, чем параметр appearance, заданный для AvatarGroup.\n          <Separator height={8} />\n          Пример AvatarActivityGroup с единым для всех аватаров внешним видом (appearance).\n        </NotificationItemContent>\n      </StyledNotificationItem>\n      <AvatarActivityGroup\n        {...props}\n        style={{ width: '300px' }}\n        items={items1}\n        onAvatarSelect={onSelectAvatar}\n        dropContainerClassName=\"dropContainerClass\"\n      />\n      <StyledNotificationItem displayStatusIcon>\n        <NotificationItemTitle>Avatar Group.</NotificationItemTitle>\n        <NotificationItemContent>\n          Пример AvatarActivityGroup с различными по внешнему виду (appearance) аватарами.\n        </NotificationItemContent>\n      </StyledNotificationItem>\n      <AvatarActivityGroup\n        {...props}\n        style={{ width: '300px' }}\n        items={items2}\n        onAvatarSelect={onSelectAvatar}\n        appearance=\"neutral4\"\n        dropContainerClassName=\"dropContainerClass\"\n        dropContainerStyle={{ width: '250px' }}\n      />\n    </Wrapper>\n  );\n};\n"}}},name:"AvatarActivityGroup. Пример с ограниченной шириной"};AvatarActivityGroupPlayground.parameters={...AvatarActivityGroupPlayground.parameters,docs:{...AvatarActivityGroupPlayground.parameters?.docs,source:{originalSource:"{\n  render: AvatarActivityGroupPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: AvatarActivityGroupPlaygroundRaw\n      }\n    }\n  },\n  name: 'AvatarActivityGroup. Playground'\n}",...AvatarActivityGroupPlayground.parameters?.docs?.source}}},AvatarActivityGroupWidth.parameters={...AvatarActivityGroupWidth.parameters,docs:{...AvatarActivityGroupWidth.parameters?.docs,source:{originalSource:"{\n  render: AvatarActivityGroupWidthStory,\n  parameters: {\n    docs: {\n      source: {\n        code: AvatarActivityGroupWidthRaw\n      }\n    }\n  },\n  name: 'AvatarActivityGroup. Пример с ограниченной шириной'\n}",...AvatarActivityGroupWidth.parameters?.docs?.source}}};const __namedExportsOrder=["AvatarActivityGroupPlayground","AvatarActivityGroupWidth"]}}]);