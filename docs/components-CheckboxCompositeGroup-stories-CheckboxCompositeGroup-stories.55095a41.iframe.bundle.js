"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8833],{"./src/components/CheckboxCompositeGroup/stories/CheckboxCompositeGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxCompositeGroupExample:()=>CheckboxCompositeGroupExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxCompositeGroup_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");(0,styled_components_browser_esm.css)(["width:",";"],(({dimension})=>{switch(dimension){case"m":default:return"20px";case"s":return"16px"}})),(0,styled_components_browser_esm.css)(["height:",";"],(({dimension})=>{switch(dimension){case"m":default:return"20px";case"s":return"16px"}}));const styleTextMixin=(0,styled_components_browser_esm.css)(["font-size:","px;line-height:","px;font-weight:normal;font-family:",";color:",";user-select:none;"],(({dimension})=>"m"===dimension?16:14),(({dimension})=>"m"===dimension?20:16),typography.l.fontFamily,(({disabled,theme})=>disabled?theme.color["Neutral/Neutral 30"]:theme.color["Neutral/Neutral 90"])),CheckboxGroupWrapper=styled_components_browser_esm.default.div.withConfig({displayName:"CheckboxWrapper__CheckboxGroupWrapper",componentId:"sc-b84ui9-0"})(["flex-direction:column;display:inline-flex;box-sizing:border-box;",";& > *{margin-top:","px;}"],styleTextMixin,(({dimension})=>"m"===dimension?16:12)),CompositeWrapper=styled_components_browser_esm.default.div.withConfig({displayName:"CompositeWrapper",componentId:"sc-ypnxbx-0"})(["",""],(({dimension})=>(0,styled_components_browser_esm.css)(["position:relative;width:fit-content;display:flex;flex-flow:column;& > ","{padding-left:","px;}",""],CheckboxGroupWrapper,"m"===dimension?30:25,styleTextMixin)));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxCompositeGroup=({children,disabled=!1,dimension="m",...props})=>(0,jsx_runtime.jsx)(CompositeWrapper,{dimension,disabled,...props,children:react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{disabled:disabled||child.props.disabled,dimension,...child.props}):null))});CheckboxCompositeGroup.displayName="CheckboxCompositeGroup",CheckboxCompositeGroup.displayName="CheckboxCompositeGroup";try{CheckboxCompositeGroup.displayName="CheckboxCompositeGroup",CheckboxCompositeGroup.__docgenInfo={description:"",displayName:"CheckboxCompositeGroup",props:{dimension:{defaultValue:{value:"m"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxCompositeGroup/index.tsx#CheckboxCompositeGroup"]={docgenInfo:CheckboxCompositeGroup.__docgenInfo,name:"CheckboxCompositeGroup",path:"src/components/CheckboxCompositeGroup/index.tsx#CheckboxCompositeGroup"})}catch(__react_docgen_typescript_loader_error){}var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx");const CheckboxGroup=(0,react.forwardRef)((({children,label,disabled=!1,dimension="m",...props},ref)=>(0,jsx_runtime.jsxs)(CheckboxGroupWrapper,{disabled,dimension,ref,...props,children:[label&&label,react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{disabled:disabled||child.props.disabled,dimension,...child.props}):null))]})));CheckboxGroup.displayName="CheckboxGroup";try{CheckboxGroup.displayName="CheckboxGroup",CheckboxGroup.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},dimension:{defaultValue:{value:"m"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/index.tsx#CheckboxGroup"]={docgenInfo:CheckboxGroup.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/index.tsx#CheckboxGroup"})}catch(__react_docgen_typescript_loader_error){}const initialValue=[{label:"Москва",id:"1",checked:!1},{label:"Воронеж",id:"2",checked:!1},{label:"Самара",id:"3",checked:!1},{label:"Омск",id:"4",checked:!1}],CheckboxCompositeGroupExampleTemplate=props=>{const[list,setValue]=react.useState(initialValue),someItemChecked=()=>list.some((item=>item.checked)),handleOnchange=e=>{const{name}=e.target;setValue((prev=>prev.map((item=>name===item.label?{...item,checked:!item.checked}:{...item}))))};return(0,jsx_runtime.jsx)(styled_components_browser_esm.ThemeProvider,{theme:function swapBorder(theme){return theme.shape.borderRadiusKind=props.themeBorderKind||theme.shape.borderRadiusKind,theme},children:(0,jsx_runtime.jsxs)(CheckboxCompositeGroup,{...props,children:[(0,jsx_runtime.jsx)(CheckboxField.ji,{indeterminate:!list.every((item=>item.checked))&&someItemChecked(),checked:someItemChecked(),onChange:()=>{setValue((prev=>prev.map((item=>({...item,checked:!someItemChecked()})))))},children:"Города :"}),(0,jsx_runtime.jsx)(CheckboxGroup,{children:list.map((item=>(0,jsx_runtime.jsx)(CheckboxField.ji,{checked:item.checked,name:item.label,onChange:handleOnchange,children:item.label},item.id)))})]})})};CheckboxCompositeGroupExampleTemplate.displayName="CheckboxCompositeGroupExampleTemplate";try{CheckboxCompositeGroupExampleTemplate.displayName="CheckboxCompositeGroupExampleTemplate",CheckboxCompositeGroupExampleTemplate.__docgenInfo={description:"",displayName:"CheckboxCompositeGroupExampleTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxCompositeGroup/stories/CheckboxCompositeGroupExample.template.tsx#CheckboxCompositeGroupExampleTemplate"]={docgenInfo:CheckboxCompositeGroupExampleTemplate.__docgenInfo,name:"CheckboxCompositeGroupExampleTemplate",path:"src/components/CheckboxCompositeGroup/stories/CheckboxCompositeGroupExample.template.tsx#CheckboxCompositeGroupExampleTemplate"})}catch(__react_docgen_typescript_loader_error){}const CheckboxCompositeGroup_stories={title:"Admiral-2.1/CheckboxCompositeGroup",decorators:void 0,component:CheckboxCompositeGroup,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015"}]},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},disabled:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}}}},CheckboxCompositeGroupExampleStory=props=>(0,jsx_runtime.jsx)(CheckboxCompositeGroupExampleTemplate,{...props});CheckboxCompositeGroupExampleStory.displayName="CheckboxCompositeGroupExampleStory";const CheckboxCompositeGroupExample={render:CheckboxCompositeGroupExampleStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { CheckboxCompositeGroup, CheckboxField, CheckboxGroup } from '@admiral-ds/react-ui';\nimport type { CheckboxCompositeGroupProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';\n\ninterface ItemValue {\n  label: string;\n  id: string;\n  checked: boolean;\n}\n\nconst initialValue: Array<ItemValue> = [\n  { label: 'Москва', id: '1', checked: false },\n  { label: 'Воронеж', id: '2', checked: false },\n  { label: 'Самара', id: '3', checked: false },\n  { label: 'Омск', id: '4', checked: false },\n];\n\nexport const CheckboxCompositeGroupExampleTemplate = (\n  props: CheckboxCompositeGroupProps & { themeBorderKind?: BorderRadiusType },\n) => {\n  function swapBorder(theme: Theme): Theme {\n    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;\n    return theme;\n  }\n\n  const [list, setValue] = React.useState<Array<ItemValue>>(initialValue);\n\n  const someItemChecked = () => list.some((item) => item.checked);\n\n  const handleOnchangeAll = () => {\n    setValue((prev) => prev.map((item) => ({ ...item, checked: !someItemChecked() })));\n  };\n  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const { name } = e.target;\n    setValue((prev) => prev.map((item) => (name === item.label ? { ...item, checked: !item.checked } : { ...item })));\n  };\n  const getIndeterminateStatus = () => !list.every((item) => item.checked) && someItemChecked();\n\n  return (\n    <ThemeProvider theme={swapBorder}>\n      <CheckboxCompositeGroup {...props}>\n        <CheckboxField\n          indeterminate={getIndeterminateStatus()}\n          checked={someItemChecked()}\n          onChange={handleOnchangeAll}\n        >\n          Города :\n        </CheckboxField>\n        <CheckboxGroup>\n          {list.map((item) => (\n            <CheckboxField checked={item.checked} name={item.label} key={item.id} onChange={handleOnchange}>\n              {item.label}\n            </CheckboxField>\n          ))}\n        </CheckboxGroup>\n      </CheckboxCompositeGroup>\n    </ThemeProvider>\n  );\n};\n"}}},name:"CheckboxCompositeGroup. Пример"};CheckboxCompositeGroupExample.parameters={...CheckboxCompositeGroupExample.parameters,docs:{...CheckboxCompositeGroupExample.parameters?.docs,source:{originalSource:"{\n  render: CheckboxCompositeGroupExampleStory,\n  parameters: {\n    docs: {\n      source: {\n        code: CheckboxCompositeGroupExampleRaw\n      }\n    }\n  },\n  name: 'CheckboxCompositeGroup. Пример'\n}",...CheckboxCompositeGroupExample.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxCompositeGroupExample"]},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{h:()=>uid})}}]);