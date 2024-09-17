"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8139],{"./src/components/Checkbox/stories/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxDemo:()=>CheckboxDemo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),Checkbox=__webpack_require__("./src/components/Checkbox/index.tsx"),CheckboxDimension=__webpack_require__("./src/components/Checkbox/CheckboxDimension.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),T=__webpack_require__("./src/components/T/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"CheckboxDemotemplate__Container",componentId:"sc-kzv272-0"})(["display:flex;flex-direction:column;> *:not(:first-child){margin-top:16px;}"]),Row=styled_components_browser_esm.Ay.div.withConfig({displayName:"CheckboxDemotemplate__Row",componentId:"sc-kzv272-1"})(["display:flex;flex-direction:row;align-items:center;> *:not(:last-child){margin-right:66px;}> *{flex:0 0 auto;}"]),CheckboxDemoTemplate=({themeBorderKind,CSSCustomProps,...props})=>{const[checked,setChecked]=react.useState(props.checked??!1);return react.useEffect((()=>{setChecked(Boolean(props.checked))}),[props.checked]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(T.T,{font:"Header/H6",as:"div",children:"Состояния"}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{...props,checked,onChange:e=>{setChecked(e.target.checked)}}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s"}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Default"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{indeterminate:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",indeterminate:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Частично выбранный"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{disabled:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",disabled:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Disable"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{disabled:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",disabled:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Disable active"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{error:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",error:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Состояние ошибки"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{readOnly:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",readOnly:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Readonly"})]}),(0,jsx_runtime.jsxs)(Row,{children:[(0,jsx_runtime.jsx)(Checkbox.Sc,{readOnly:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(Checkbox.Sc,{dimension:"s",readOnly:!0,defaultChecked:!0}),(0,jsx_runtime.jsx)(T.T,{font:"Body/Body 1 Long",as:"div",children:"Readonly active"})]})]})})})};try{CheckboxDemoTemplate.displayName="CheckboxDemoTemplate",CheckboxDemoTemplate.__docgenInfo={description:"",displayName:"CheckboxDemoTemplate",props:{dimension:{defaultValue:null,description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"",name:"hovered",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/stories/CheckboxDemo.template.tsx#CheckboxDemoTemplate"]={docgenInfo:CheckboxDemoTemplate.__docgenInfo,name:"CheckboxDemoTemplate",path:"src/components/Checkbox/stories/CheckboxDemo.template.tsx#CheckboxDemoTemplate"})}catch(__react_docgen_typescript_loader_error){}const Checkbox_stories={title:"Admiral-2.1/Atoms/Checkbox",decorators:void 0,component:Checkbox.Sc,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A20804"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015"}]},argTypes:{dimension:{options:CheckboxDimension.n,control:{type:"radio"}},indeterminate:{control:{type:"boolean"}},checked:{options:[!1,!0],control:{type:"radio"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},hovered:{control:{type:"boolean"}},error:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},theme:{control:!1},as:{control:!1},forwardedAs:{control:!1},ref:{control:!1}}},CheckboxDemoStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(CheckboxDemoTemplate,{...props,CSSCustomProps})};CheckboxDemoStory.displayName="CheckboxDemoStory";const CheckboxDemo={render:CheckboxDemoStory,parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled, { ThemeProvider } from \'styled-components\';\n\nimport { Checkbox, T } from \'@admiral-ds/react-ui\';\nimport type { CheckBoxProps, BorderRadiusType } from \'@admiral-ds/react-ui\';\nimport { createBorderRadiusSwapper } from \'../../../../.storybook/createBorderRadiusSwapper\';\n\nconst Container = styled.div`\n  display: flex;\n  flex-direction: column;\n\n  > *:not(:first-child) {\n    margin-top: 16px;\n  }\n`;\n\nconst Row = styled.div`\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  > *:not(:last-child) {\n    margin-right: 66px;\n  }\n  > * {\n    flex: 0 0 auto;\n  }\n`;\n\nexport const CheckboxDemoTemplate = ({\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: CheckBoxProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);\n  React.useEffect(() => {\n    setChecked(Boolean(props.checked));\n  }, [props.checked]);\n  return (\n    <>\n      <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n        <Container>\n          <T font="Header/H6" as="div">\n            Состояния\n          </T>\n          <Row>\n            <Checkbox\n              {...props}\n              checked={checked}\n              onChange={(e) => {\n                setChecked(e.target.checked);\n              }}\n            />\n            <Checkbox dimension="s" />\n            <T font="Body/Body 1 Long" as="div">\n              Default\n            </T>\n          </Row>\n          <Row>\n            <Checkbox indeterminate />\n            <Checkbox dimension="s" indeterminate />\n            <T font="Body/Body 1 Long" as="div">\n              Частично выбранный\n            </T>\n          </Row>\n          <Row>\n            <Checkbox disabled />\n            <Checkbox dimension="s" disabled />\n            <T font="Body/Body 1 Long" as="div">\n              Disable\n            </T>\n          </Row>\n          <Row>\n            <Checkbox disabled defaultChecked />\n            <Checkbox dimension="s" disabled defaultChecked />\n            <T font="Body/Body 1 Long" as="div">\n              Disable active\n            </T>\n          </Row>\n          <Row>\n            <Checkbox error />\n            <Checkbox dimension="s" error />\n            <T font="Body/Body 1 Long" as="div">\n              Состояние ошибки\n            </T>\n          </Row>\n          <Row>\n            <Checkbox readOnly />\n            <Checkbox dimension="s" readOnly />\n            <T font="Body/Body 1 Long" as="div">\n              Readonly\n            </T>\n          </Row>\n          <Row>\n            <Checkbox readOnly defaultChecked />\n            <Checkbox dimension="s" readOnly defaultChecked />\n            <T font="Body/Body 1 Long" as="div">\n              Readonly active\n            </T>\n          </Row>\n        </Container>\n      </ThemeProvider>\n    </>\n  );\n};\n'}}},name:"Checkbox. Пример"};CheckboxDemo.parameters={...CheckboxDemo.parameters,docs:{...CheckboxDemo.parameters?.docs,source:{originalSource:"{\n  render: CheckboxDemoStory,\n  parameters: {\n    docs: {\n      source: {\n        code: CheckboxDemoRaw\n      }\n    }\n  },\n  name: 'Checkbox. Пример'\n}",...CheckboxDemo.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxDemo"]},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(val){return null!==val&&!Array.isArray(val)&&"object"==typeof val}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});const codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(let j=0;j<26;j+=1){let n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}const keyboardKey={codes,getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey(eventOrCode){const isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;let name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[eventOrCode.shiftKey?1:0]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey[0],keyboardKey.Digit1=keyboardKey[1],keyboardKey.Digit2=keyboardKey[2],keyboardKey.Digit3=keyboardKey[3],keyboardKey.Digit4=keyboardKey[4],keyboardKey.Digit5=keyboardKey[5],keyboardKey.Digit6=keyboardKey[6],keyboardKey.Digit7=keyboardKey[7],keyboardKey.Digit8=keyboardKey[8],keyboardKey.Digit9=keyboardKey[9],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]},"./src/components/Checkbox/CheckboxDimension.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ALL_DIMENSIONS_VALUES});const ALL_DIMENSIONS_VALUES=["m","s"]},"./src/components/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Sc:()=>Checkbox});var _path,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.p;var _rect;function Minus_extends(){return Minus_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Minus_extends.apply(null,arguments)}__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const width=(0,styled_components_browser_esm.AH)(["width:",";fieldset[data-dimension='s'] &{width:16px;}"],(({$dimension})=>{switch($dimension){case"m":default:return"20px";case"s":return"16px"}})),height=(0,styled_components_browser_esm.AH)(["height:",";fieldset[data-dimension='s'] &{height:16px;}"],(({$dimension})=>{switch($dimension){case"m":default:return"20px";case"s":return"16px"}})),Check=(0,styled_components_browser_esm.Ay)((function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})).withConfig({displayName:"Checkbox__Check",componentId:"sc-16etnr2-0"})(["pointer-events:none;"]),Indeterminate=(0,styled_components_browser_esm.Ay)((function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})).withConfig({displayName:"Checkbox__Indeterminate",componentId:"sc-16etnr2-1"})(["pointer-events:none;& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}"],(p=>p.theme.color["Special/Static White"])),Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"Checkbox__Container",componentId:"sc-16etnr2-2"})(["position:relative;box-sizing:border-box;cursor:",";overflow:visible;",";",";"],(props=>props.$disabled?"not-allowed":props.$readOnly?"default":"pointer"),width,height),Background=styled_components_browser_esm.Ay.div.withConfig({displayName:"Checkbox__Background",componentId:"sc-16etnr2-3"})(["pointer-events:none;display:inline-block;position:absolute;margin:0;top:0;left:0;right:0;bottom:0;border-radius:var(--admiral-border-radius-Small,",");outline:0;transition:background-color 0.1s ease-in;line-height:initial;background-color:var(--admiral-color-Neutral_Neutral00,",");border:1px solid ",";& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}"],(p=>(0,borderRadius.r2)(p.theme.shape)),(p=>p.theme.color["Neutral/Neutral 00"]),(({$error,theme})=>$error?`var(--admiral-color-Error_Error60Main, ${theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${theme.color["Neutral/Neutral 50"]})`),(p=>p.theme.color["Special/Static White"])),indeterminateCss=(0,styled_components_browser_esm.AH)(["&:not(:checked) + ","{background-color:",";border:",";> *{display:",";}}"],Background,(({theme,$indeterminate})=>$indeterminate&&`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`),(({$indeterminate})=>$indeterminate&&"none"),(p=>p.$indeterminate?"block":"none")),actionCss=(0,styled_components_browser_esm.AH)(["content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;width:calc(100% + 16px);height:calc(100% + 16px);"]),hoveredCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){&::after{",";background-color:var(--admiral-color-Opacity_Hover,",");}}"],actionCss,(p=>p.theme.color["Opacity/Hover"])),activeCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){&::after{",";background-color:var(--admiral-color-Opacity_Press,",");}}"],actionCss,(p=>p.theme.color["Opacity/Press"])),disabledCss=(0,styled_components_browser_esm.AH)(["pointer-events:none;& + ","{border:1px solid var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");}"],Background,(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"])),disabledCheckedBackgroundCss=(0,styled_components_browser_esm.AH)(["background-color:var(--admiral-color-Primary_Primary30,",");border:none;& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}"],(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),checkedBackgroundCss=(0,styled_components_browser_esm.AH)(["background-color:var(--admiral-color-Primary_Primary60Main,",");border:none;"],(p=>p.theme.color["Primary/Primary 60 Main"])),Input=styled_components_browser_esm.Ay.input.withConfig({displayName:"Checkbox__Input",componentId:"sc-16etnr2-4"})(["appearance:none;::-ms-check{display:none;}width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;cursor:pointer;border-radius:var(--admiral-border-radius-Small,",");margin:0;padding:0;"," &:checked + ","{","}&:disabled{cursor:not-allowed;",";}"," "," &:hover:not(:disabled),&:focus:not(:disabled) + "," &:active:not(:disabled){","}&:checked:disabled + ","{","}&:focus-visible{outline-offset:2px;outline:var(--admiral-color-Primary_Primary60Main,",") solid 2px;}"],(p=>(0,borderRadius.r2)(p.theme.shape)),(props=>props.readOnly&&disabledCss),Background,(props=>props.readOnly?disabledCheckedBackgroundCss:checkedBackgroundCss),disabledCss,(props=>!props.readOnly&&props.$hovered&&hoveredCss),indeterminateCss,hoveredCss,activeCss,Background,disabledCheckedBackgroundCss,(p=>p.theme.color["Primary/Primary 60 Main"])),Checkbox=(0,react.forwardRef)((({className,dimension="m",disabled,readOnly,hovered,indeterminate,error,...props},ref)=>(0,jsx_runtime.jsxs)(Container,{$dimension:dimension,$disabled:disabled,$readOnly:readOnly,className,children:[(0,jsx_runtime.jsx)(Input,{ref,disabled,readOnly,...props,type:"checkbox",$indeterminate:indeterminate,onKeyDown:e=>{if(readOnly){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault()}props.onKeyDown?.(e)},"data-hovered":hovered,$hovered:hovered}),(0,jsx_runtime.jsx)(Background,{$error:error,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false"}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false"})})]})));Checkbox.displayName="Checkbox";try{Background.displayName="Checkbox",Background.__docgenInfo={description:"",displayName:"Checkbox",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/skeleton/animation.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["",";pointer-events:none;"],_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_3__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.span.withConfig({displayName:"T__Tspan",componentId:"sc-1bd4slr-0"})(["color:",";",";"," ",""],(({$color,theme,$skeleton})=>{const cssVar=`--admiral-color-${$color?.replace("/","_").replaceAll(" ","")}`;return $skeleton?"transparent":$color?theme.color[$color]?`var(${cssVar}, ${theme.color[$color]})`:$color:`var(--admiral-color-Neutral_Neutral90, ${theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.jn]})`}),(p=>p.theme.typography[p.$font]),(p=>p.$cssMixin?p.$cssMixin:""),(p=>p.$skeleton&&skeletonMixin)),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({font,color,cssMixin,skeleton,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Tspan,{ref,...props,$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton})));T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Neutral/Neutral 50"'},{value:'"Neutral/Neutral 60"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 60 Main"'},{value:'"Primary/Primary 70"'},{value:'"Primary/Primary 80"'},{value:'"Special/Static White"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 60 Main"'},{value:'"Error/Error 70"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 50 Main"'},{value:'"Success/Success 60"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(["0%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}50%{background-color:var(--admiral-color-Neutral_Neutral20,",");border-color:var(--admiral-color-Neutral_Neutral20,",");}100%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});const ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});const DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);