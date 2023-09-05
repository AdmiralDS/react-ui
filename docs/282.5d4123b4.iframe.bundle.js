"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[282],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx");const primaryAppearanceMixin=(0,styled_components_browser_esm.css)(["background-color:",";color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";border-color:",";}&&&:active{background-color:",";border-color:",";}&&&&[data-appearance~='disabled'],&&&:disabled{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 80"]),(({theme})=>theme.color["Primary/Primary 80"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"])),secondaryAppearanceMixin=(0,styled_components_browser_esm.css)(["background-color:transparent;color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}&&&:active{background-color:",";color:",";border-color:",";& *[fill^='#']{fill:",";}}&&&[data-appearance~='disabled'],&&&:disabled{background-color:transparent;color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Hover"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Press"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"])),ghostAppearanceMixin=(0,styled_components_browser_esm.css)(["background-color:transparent;color:",";border:1px solid transparent;&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";color:",";border-color:transparent;& *[fill^='#']{fill:",";}}&&&:active{background-color:",";color:",";border-color:transparent;& *[fill^='#']{fill:",";}}&&&[data-appearance~='disabled'],&&&:disabled{background-color:transparent;color:",";border-color:transparent;&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Hover"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Press"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"])),whiteAppearanceMixin=(0,styled_components_browser_esm.css)(["background-color:transparent;color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}&&&:active{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}&&&[data-appearance~='disabled'],&&&:disabled{border-color:",";color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Opacity/Dark Static Hover"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Opacity/Dark Static Press"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Dark Static Neutral 30"]),(({theme})=>theme.color["Special/Dark Static Neutral 30"]),(({theme})=>theme.color["Special/Dark Static Neutral 30"])),dangerAppearanceMixin=(0,styled_components_browser_esm.css)(["background-color:",";color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";border-color:",";}&&&:active{background-color:",";border-color:",";}&&&[data-appearance~='disabled'],&&&:disabled{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Error/Error 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Error/Error 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Error/Error 70"]),(({theme})=>theme.color["Error/Error 70"]),(({theme})=>theme.color["Error/Error 80"]),(({theme})=>theme.color["Error/Error 80"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"])),successAppearanceMixin=(0,styled_components_browser_esm.css)(["background-color:",";color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";border-color:",";}&&&:active{background-color:",";border-color:",";}&&&[data-appearance~='disabled'],&&&:disabled{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Success/Success 50 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Success/Success 50 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Success/Success 60"]),(({theme})=>theme.color["Success/Success 60"]),(({theme})=>theme.color["Success/Success 70"]),(({theme})=>theme.color["Success/Success 70"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"])),focusVisibleStyle=(0,styled_components_browser_esm.css)(["&:focus-visible{outline-offset:2px;outline:"," solid 2px;}"],(p=>p.theme.color["Primary/Primary 60 Main"])),appearanceMixin=(0,styled_components_browser_esm.css)(["&[data-appearance~='primary']{","}&[data-appearance~='secondary']{","}&[data-appearance~='ghost']{","}&[data-appearance~='white']{","}&[data-appearance~='danger']{","}&[data-appearance~='success']{","}",""],primaryAppearanceMixin,secondaryAppearanceMixin,ghostAppearanceMixin,whiteAppearanceMixin,dangerAppearanceMixin,successAppearanceMixin,focusVisibleStyle);var typography=__webpack_require__("./src/components/Typography/typography.ts");const ButtonIconContainer=styled_components_browser_esm.default.div.withConfig({displayName:"dimensionMixin__ButtonIconContainer",componentId:"sc-drkg95-0"})([""]);function getHorizontalIconPadding(dimension){switch(dimension){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}(0,styled_components_browser_esm.css)(["&[data-dimension='xl']{","}&[data-dimension='l']{","}&[data-dimension='m']{","}&[data-dimension='s']{","}"],(props=>!props.displayAsSquare&&`padding-left: ${getHorizontalIconPadding("xl")}px;`),(props=>!props.displayAsSquare&&`padding-left: ${getHorizontalIconPadding("l")}px;`),(props=>!props.displayAsSquare&&`padding-left: ${getHorizontalIconPadding("m")}px;`),(props=>!props.displayAsSquare&&`padding-left: ${getHorizontalIconPadding("s")}px;`)),(0,styled_components_browser_esm.css)(["&[data-dimension='xl']{","}&[data-dimension='l']{","}&[data-dimension='m']{","}&[data-dimension='s']{","}"],(props=>!props.displayAsSquare&&`padding-right: ${getHorizontalIconPadding("xl")}px;`),(props=>!props.displayAsSquare&&`padding-right: ${getHorizontalIconPadding("l")}px;`),(props=>!props.displayAsSquare&&`padding-right: ${getHorizontalIconPadding("m")}px;`),(props=>!props.displayAsSquare&&`padding-right: ${getHorizontalIconPadding("s")}px;`));const defaultDimensionMixin=(0,styled_components_browser_esm.css)(["padding:0;height:56px;"," ","{width:24px;height:24px;}",""],(props=>props.displayAsSquare?"width: 56px;":"padding: 0 29px;"),ButtonIconContainer,typography.c["Button/Button 1"]),dimensionMixin=(0,styled_components_browser_esm.css)([""," &[data-dimension='xl']{","}&[data-dimension='l']{height:48px;","}&[data-dimension='m']{height:40px;","}&[data-dimension='s']{height:32px;"," ","{width:20px;height:20px;}","}"],defaultDimensionMixin,defaultDimensionMixin,(props=>props.displayAsSquare?"width: 48px;":"padding: 0 21px;"),(props=>props.displayAsSquare?"width: 40px;":"padding: 0 17px;"),(props=>props.displayAsSquare?"width: 32px;":"padding: 0 13px;"),ButtonIconContainer,typography.c["Button/Button 2"]);var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),animation=__webpack_require__("./src/components/skeleton/animation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonContent=styled_components_browser_esm.default.div.withConfig({displayName:"Button__ButtonContent",componentId:"sc-hfmi87-0"})(["vertical-align:top;display:inline-flex;gap:8px;flex-direction:row;overflow:hidden;flex-wrap:nowrap;justify-content:center;align-items:center;height:24px;> *{display:inline-block;flex:0 1 auto;white-space:nowrap;}& > svg{width:24px;height:24px;}[data-dimension='s'] &{height:20px;& > svg{width:20px;height:20px;}}"]),StyledSpinner=(0,styled_components_browser_esm.default)(Spinner.$).withConfig({displayName:"Button__StyledSpinner",componentId:"sc-hfmi87-1"})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]),AdditionalPadding=styled_components_browser_esm.default.div.withConfig({displayName:"Button__AdditionalPadding",componentId:"sc-hfmi87-2"})(["display:inline-block;width:2px;"]),Button=react.forwardRef((({appearance="primary",dimension="xl",type="button",loading=!1,skeleton=!1,iconStart,iconEnd,icon,iconPlace="left",children,buttonCssMixin,...props},ref)=>{const spinnerDimension="s"===dimension?"ms":"m",spinnerInverse="secondary"!==appearance&&"ghost"!==appearance,hasIconStart=!!iconStart||!!icon&&"left"===iconPlace,hasIconEnd=!!iconEnd||!!icon&&"right"===iconPlace;return(0,jsx_runtime.jsxs)(StyledButton,{ref,appearance,dimension,type,$loading:loading,skeleton,buttonCssMixin,...props,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:spinnerDimension,inverse:spinnerInverse}),!props.displayAsSquare&&!hasIconStart&&(0,jsx_runtime.jsx)(AdditionalPadding,{}),(0,jsx_runtime.jsxs)(ButtonContent,{children:[hasIconStart?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconStart||icon}):null,react.Children.toArray(children).map(((child,index)=>"string"==typeof child?(0,jsx_runtime.jsx)("div",{children:child},child+index):child)),hasIconEnd?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconEnd||icon}):null]}),!props.displayAsSquare&&!hasIconEnd&&(0,jsx_runtime.jsx)(AdditionalPadding,{})]})})),StyledButton=styled_components_browser_esm.default.button.attrs((props=>({"data-dimension":props.dimension,"data-appearance":[props.appearance,props.displayAsDisabled?"disabled":void 0].filter((val=>void 0!==val)).join(" ")}))).withConfig({displayName:"Button__StyledButton",componentId:"sc-hfmi87-3"})(["position:relative;box-sizing:border-box;display:inline-block;white-space:nowrap;border:none;border-radius:",";appearance:none;vertical-align:middle;pointer-events:",";",";",";",";","};","{","}&:hover{cursor:pointer;}"],(p=>p.skeleton?0:(0,borderRadius.c8)(p.theme.shape)),(p=>p.$loading||p.disabled||p.skeleton?"none":"all"),appearanceMixin,dimensionMixin,(p=>p.buttonCssMixin),(({skeleton})=>skeleton&&animation.x),ButtonContent,(p=>p.$loading||p.skeleton?"visibility: hidden;":""));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"ghost"'},{value:'"white"'}]}},dimension:{defaultValue:{value:"xl"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"@deprecated Используйте iconStart или iconEnd\nИконка кнопки",name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:{value:"left"},description:"@deprecated Используйте iconStart или iconEnd\nРасположение иконки кнопки",name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"FlattenInterpolation<ThemeProps<DefaultTheme>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XZ:()=>Checkbox});var _path,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.p;var _rect;function Minus_extends(){return Minus_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Minus_extends.apply(this,arguments)}__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const width=(0,styled_components_browser_esm.css)(["width:",";fieldset[data-dimension='s'] &{width:16px;}"],(({dimension})=>{switch(dimension){case"m":default:return"20px";case"s":return"16px"}})),height=(0,styled_components_browser_esm.css)(["height:",";fieldset[data-dimension='s'] &{height:16px;}"],(({dimension})=>{switch(dimension){case"m":default:return"20px";case"s":return"16px"}})),Check=(0,styled_components_browser_esm.default)((function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0l6-6Z"})))})).withConfig({displayName:"Checkbox__Check",componentId:"sc-16etnr2-0"})(["pointer-events:none;"]),Indeterminate=(0,styled_components_browser_esm.default)((function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})).withConfig({displayName:"Checkbox__Indeterminate",componentId:"sc-16etnr2-1"})(["pointer-events:none;& *[fill^='#']{fill:",";}"],(({theme})=>theme.color["Special/Static White"])),Container=styled_components_browser_esm.default.div.withConfig({displayName:"Checkbox__Container",componentId:"sc-16etnr2-2"})(["position:relative;box-sizing:border-box;overflow:visible;",";",";"],width,height),Background=styled_components_browser_esm.default.div.withConfig({displayName:"Checkbox__Background",componentId:"sc-16etnr2-3"})(["pointer-events:none;display:inline-block;position:absolute;margin:0;top:0;left:0;right:0;bottom:0;border-radius:",";outline:0;transition:background 0.1s ease-in;line-height:initial;background-color:",";border:1px solid ",";& *[fill^='#']{fill:",";}"],(p=>(0,borderRadius.pk)(p.theme.shape)),(({theme})=>theme.color["Neutral/Neutral 00"]),(({error,theme})=>error?theme.color["Error/Error 60 Main"]:theme.color["Neutral/Neutral 50"]),(({theme})=>theme.color["Special/Static White"])),indeterminate=(0,styled_components_browser_esm.css)(["&:not(:checked) + ","{background-color:",";border:",";> *{display:",";}}"],Background,(({theme,indeterminate})=>indeterminate&&theme.color["Primary/Primary 60 Main"]),(({indeterminate})=>indeterminate&&"none"),(p=>p.indeterminate?"block":"none")),hoveredCss=(0,styled_components_browser_esm.css)(["&:not(:disabled){&::after{content:'';position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;width:calc(100% + 16px);height:calc(100% + 16px);background-color:",";}}"],(({theme})=>theme.color["Opacity/Hover"])),disabledCss=(0,styled_components_browser_esm.css)(["pointer-events:none;& + ","{border:1px solid ",";background-color:",";}"],Background,(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 10"])),disabledCheckedBackgroundCss=(0,styled_components_browser_esm.css)(["background-color:",";border:none;& *[fill^='#']{fill:",";}"],(({theme})=>theme.color["Primary/Primary 30"]),(({theme})=>theme.color["Neutral/Neutral 00"])),checkedBackgroundCss=(0,styled_components_browser_esm.css)(["background-color:",";border:none;"],(({theme})=>theme.color["Primary/Primary 60 Main"])),Input=styled_components_browser_esm.default.input.withConfig({displayName:"Checkbox__Input",componentId:"sc-16etnr2-4"})(["appearance:none;::-ms-check{display:none;}width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;cursor:pointer;border-radius:",";margin:0;padding:0;"," &:checked + ","{","}&:disabled{",";}"," "," &:hover:not(:disabled),&:focus:not(:disabled) + "," &:checked:disabled + ","{","}&:focus-visible{outline-offset:2px;outline:"," solid 2px;}"],(p=>(0,borderRadius.pk)(p.theme.shape)),(props=>props.readOnly&&disabledCss),Background,(props=>props.readOnly?disabledCheckedBackgroundCss:checkedBackgroundCss),disabledCss,(props=>!props.readOnly&&props.hovered&&hoveredCss),indeterminate,hoveredCss,Background,disabledCheckedBackgroundCss,(p=>p.theme.color["Primary/Primary 60 Main"])),Checkbox=react.forwardRef((({className,dimension="m",disabled,readOnly,...props},ref)=>(0,jsx_runtime.jsxs)(Container,{dimension,className,children:[(0,jsx_runtime.jsx)(Input,{ref,disabled,readOnly,...props,type:"checkbox",indeterminate:props.indeterminate,onKeyDown:e=>{if(readOnly){keyboardKey.y.getCode(e)===keyboardKey.y[" "]&&e.preventDefault()}props.onKeyDown?.(e)},"data-hovered":props.hovered}),(0,jsx_runtime.jsx)(Background,{error:props.error,children:props.indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false"}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false"})})]})));Checkbox.displayName="Checkbox";try{Background.displayName="Checkbox",Background.__docgenInfo={description:"",displayName:"Checkbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/MenuItemWithCheckbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>MenuItemWithCheckbox,W:()=>checkboxTreeToMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Checkbox/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const checkboxTreeToMap=(checkboxTree,level=0,dependencies)=>checkboxTree.reduce(((acc,item)=>{const key=item.id,currentNode={level,node:item};if(acc.set(key,currentNode),dependencies&&!item.children&&dependencies.forEach((dependency=>dependency.push(key))),item.children){const allDependencies=dependencies?[...dependencies]:[],itemDependencies=[];currentNode.dependencies=itemDependencies,acc.set(key,currentNode),allDependencies.push(itemDependencies);const map=checkboxTreeToMap(item.children,level+1,allDependencies);return new Map([...acc,...map])}return acc}),new Map),paddingLeft=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.css)(["padding-left:","px;"],(({dimension,level=0})=>"s"===dimension?12+28*level:16+32*level)),CheckboxGroupMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.s).withConfig({displayName:"MenuItemWithCheckbox__CheckboxGroupMenuItem",componentId:"sc-aoffmn-0"})(["",""],paddingLeft),OptionContent=styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({displayName:"MenuItemWithCheckbox__OptionContent",componentId:"sc-aoffmn-1"})(["position:relative;padding:0 0 0 ","px;"],(props=>"s"===props.dimension?28:32)),PositionedCheckbox=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.default)(_src_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__.XZ).withConfig({displayName:"MenuItemWithCheckbox__PositionedCheckbox",componentId:"sc-aoffmn-2"})(["position:absolute;top:2px;left:2px;"]),MenuItemWithCheckbox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({checked,indeterminate,checkboxRef,level=0,children,dimension="l",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CheckboxGroupMenuItem,{dimension:dimension||"l",level,ref,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(OptionContent,{dimension:dimension||"l",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PositionedCheckbox,{dimension:"s"===dimension?"s":"m",checked,indeterminate,hovered:props.hovered,disabled:props.disabled,readOnly:props.readOnly,ref:checkboxRef,onChange:()=>!1}),children]})})));try{MenuItemWithCheckbox.displayName="MenuItemWithCheckbox",MenuItemWithCheckbox.__docgenInfo={description:"",displayName:"MenuItemWithCheckbox",props:{checked:{defaultValue:null,description:"Значение Checkbox",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"Неопределенное состояние Checkbox",name:"indeterminate",required:!1,type:{name:"boolean"}},checkboxIsHovered:{defaultValue:null,description:"Состояние hovered для Checkbox",name:"checkboxIsHovered",required:!1,type:{name:"boolean"}},checkboxRef:{defaultValue:null,description:"Ref на Checkbox",name:"checkboxRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},level:{defaultValue:{value:"0"},description:"Сдвиг внутри MenuItem при наличии нескольких уровней (например при использовании составной группы чекбоксов внутри Menu)",name:"level",required:!1,type:{name:"number"}},dimension:{defaultValue:{value:"l"},description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},selected:{defaultValue:null,description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:"",name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"]={docgenInfo:MenuItemWithCheckbox.__docgenInfo,name:"MenuItemWithCheckbox",path:"src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"})}catch(__react_docgen_typescript_loader_error){}}}]);