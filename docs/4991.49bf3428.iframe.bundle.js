"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4991],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");function createBorderRadiusSwapper(borderRadiusKind){return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx");const primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:",";color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";border-color:",";}&&&:active{background-color:",";border-color:",";}&&&&[data-appearance~='disabled'],&&&:disabled{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 80"]),(({theme})=>theme.color["Primary/Primary 80"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"])),secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:transparent;color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}&&&:active{background-color:",";color:",";border-color:",";& *[fill^='#']{fill:",";}}&&&[data-appearance~='disabled'],&&&:disabled{background-color:transparent;color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Hover"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Press"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"])),ghostAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:transparent;color:",";border:1px solid transparent;&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";color:",";border-color:transparent;& *[fill^='#']{fill:",";}}&&&:active{background-color:",";color:",";border-color:transparent;& *[fill^='#']{fill:",";}}&&&[data-appearance~='disabled'],&&&:disabled{background-color:transparent;color:",";border-color:transparent;&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Hover"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Opacity/Press"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Primary/Primary 60 Main"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"])),whiteAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:transparent;color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}&&&:active{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}&&&[data-appearance~='disabled'],&&&:disabled{border-color:",";color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Opacity/Dark Static Hover"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Opacity/Dark Static Press"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Special/Dark Static Neutral 30"]),(({theme})=>theme.color["Special/Dark Static Neutral 30"]),(({theme})=>theme.color["Special/Dark Static Neutral 30"])),dangerAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:",";color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";border-color:",";}&&&:active{background-color:",";border-color:",";}&&&[data-appearance~='disabled'],&&&:disabled{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Error/Error 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Error/Error 60 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Error/Error 70"]),(({theme})=>theme.color["Error/Error 70"]),(({theme})=>theme.color["Error/Error 80"]),(({theme})=>theme.color["Error/Error 80"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"])),successAppearanceMixin=(0,styled_components_browser_esm.AH)(["background-color:",";color:",";border:1px solid ",";&&& *[fill^='#']{fill:",";}&&&:hover{background-color:",";border-color:",";}&&&:active{background-color:",";border-color:",";}&&&[data-appearance~='disabled'],&&&:disabled{background-color:",";color:",";border-color:",";&&& *[fill^='#']{fill:",";}}"],(({theme})=>theme.color["Success/Success 50 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Success/Success 50 Main"]),(({theme})=>theme.color["Special/Static White"]),(({theme})=>theme.color["Success/Success 60"]),(({theme})=>theme.color["Success/Success 60"]),(({theme})=>theme.color["Success/Success 70"]),(({theme})=>theme.color["Success/Success 70"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 10"]),(({theme})=>theme.color["Neutral/Neutral 30"])),focusVisibleStyle=(0,styled_components_browser_esm.AH)(["&:focus-visible{outline-offset:2px;outline:"," solid 2px;}"],(p=>p.theme.color["Primary/Primary 60 Main"])),appearanceMixin=(0,styled_components_browser_esm.AH)(["&[data-appearance~='primary']{","}&[data-appearance~='secondary']{","}&[data-appearance~='ghost']{","}&[data-appearance~='white']{","}&[data-appearance~='danger']{","}&[data-appearance~='success']{","}",""],primaryAppearanceMixin,secondaryAppearanceMixin,ghostAppearanceMixin,whiteAppearanceMixin,dangerAppearanceMixin,successAppearanceMixin,focusVisibleStyle);var typography=__webpack_require__("./src/components/Typography/typography.ts");const ButtonIconContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"dimensionMixin__ButtonIconContainer",componentId:"sc-drkg95-0"})([""]);function getHorizontalIconPadding(dimension){switch(dimension){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}(0,styled_components_browser_esm.AH)(["&[data-dimension='xl']{","}&[data-dimension='l']{","}&[data-dimension='m']{","}&[data-dimension='s']{","}"],(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("xl")}px;`),(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("l")}px;`),(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("m")}px;`),(props=>!props.$displayAsSquare&&`padding-left: ${getHorizontalIconPadding("s")}px;`)),(0,styled_components_browser_esm.AH)(["&[data-dimension='xl']{","}&[data-dimension='l']{","}&[data-dimension='m']{","}&[data-dimension='s']{","}"],(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("xl")}px;`),(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("l")}px;`),(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("m")}px;`),(props=>!props.$displayAsSquare&&`padding-right: ${getHorizontalIconPadding("s")}px;`));const defaultDimensionMixin=(0,styled_components_browser_esm.AH)(["padding:0;height:56px;"," ","{width:24px;height:24px;}",""],(props=>props.$displayAsSquare?"width: 56px;":"padding: 0 29px;"),ButtonIconContainer,typography.Il["Button/Button 1"]),dimensionMixin=(0,styled_components_browser_esm.AH)([""," &[data-dimension='xl']{","}&[data-dimension='l']{height:48px;","}&[data-dimension='m']{height:40px;","}&[data-dimension='s']{height:32px;"," ","{width:20px;height:20px;}","}"],defaultDimensionMixin,defaultDimensionMixin,(props=>props.$displayAsSquare?"width: 48px;":"padding: 0 21px;"),(props=>props.$displayAsSquare?"width: 40px;":"padding: 0 17px;"),(props=>props.$displayAsSquare?"width: 32px;":"padding: 0 13px;"),ButtonIconContainer,typography.Il["Button/Button 2"]);var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),animation=__webpack_require__("./src/components/skeleton/animation.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonContent=styled_components_browser_esm.Ay.div.withConfig({displayName:"Button__ButtonContent",componentId:"sc-hfmi87-0"})(["vertical-align:top;display:inline-flex;gap:8px;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;height:24px;max-width:calc(100% - ","px);> *{display:inline-block;flex:0 1 auto;white-space:nowrap;}> ","{flex:0 0 auto;}& > svg{width:24px;height:24px;}[data-dimension='s'] &{height:20px;& > svg{width:20px;height:20px;}}"],(p=>p.$addPadding),ButtonIconContainer),StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y).withConfig({displayName:"Button__StyledSpinner",componentId:"sc-hfmi87-1"})(["position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"]),AdditionalPadding=styled_components_browser_esm.Ay.div.withConfig({displayName:"Button__AdditionalPadding",componentId:"sc-hfmi87-2"})(["display:inline-block;width:2px;"]),Button=(0,react.forwardRef)((({appearance="primary",dimension="xl",type="button",loading=!1,skeleton=!1,iconStart,iconEnd,icon,iconPlace="left",children,buttonCssMixin,displayAsDisabled,displayAsSquare,...props},ref)=>{const spinnerDimension="s"===dimension?"ms":"m",spinnerInverse="secondary"!==appearance&&"ghost"!==appearance,hasIconStart=!!iconStart||!!icon&&"left"===iconPlace,hasIconEnd=!!iconEnd||!!icon&&"right"===iconPlace,additionalPadding=(displayAsSquare||hasIconStart?0:2)+(displayAsSquare||hasIconEnd?0:2);return(0,jsx_runtime.jsxs)(StyledButton,{ref,$appearance:appearance,$dimension:dimension,type,$loading:loading,$skeleton:skeleton,$buttonCssMixin:buttonCssMixin,$displayAsSquare:displayAsSquare,$displayAsDisabled:displayAsDisabled,...props,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:spinnerDimension,inverse:spinnerInverse}),!displayAsSquare&&!hasIconStart&&(0,jsx_runtime.jsx)(AdditionalPadding,{}),(0,jsx_runtime.jsxs)(ButtonContent,{$addPadding:additionalPadding,children:[hasIconStart?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconStart||icon}):null,react.Children.toArray(children).map(((child,index)=>"string"==typeof child?(0,jsx_runtime.jsx)("div",{children:child},child+index):child)),hasIconEnd?(0,jsx_runtime.jsx)(ButtonIconContainer,{children:iconEnd||icon}):null]}),!displayAsSquare&&!hasIconEnd&&(0,jsx_runtime.jsx)(AdditionalPadding,{})]})})),StyledButton=styled_components_browser_esm.Ay.button.attrs((props=>({"data-dimension":props.$dimension,"data-appearance":[props.$appearance,props.$displayAsDisabled?"disabled":void 0].filter((val=>void 0!==val)).join(" ")}))).withConfig({displayName:"Button__StyledButton",componentId:"sc-hfmi87-3"})(["position:relative;box-sizing:border-box;display:inline-block;white-space:nowrap;border:none;border-radius:",";appearance:none;vertical-align:middle;cursor:",";",";",";",";",";","{","}"],(p=>p.$skeleton?0:(0,borderRadius.VM)(p.theme.shape)),(p=>p.$loading||p.disabled||p.$skeleton?"default":"pointer"),appearanceMixin,dimensionMixin,(p=>p.$buttonCssMixin),(({$skeleton})=>$skeleton&&animation.h),ButtonContent,(p=>p.$loading||p.$skeleton?"visibility: hidden;":""));Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"white"'},{value:'"ghost"'}]}},dimension:{defaultValue:{value:"xl"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"@deprecated Используйте iconStart или iconEnd\nИконка кнопки",name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:{value:"left"},description:"@deprecated Используйте iconStart или iconEnd\nРасположение иконки кнопки",name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/MenuItemWithCheckbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>MenuItemWithCheckbox,x:()=>checkboxTreeToMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const checkboxTreeToMap=(checkboxTree,level=0,dependencies)=>checkboxTree.reduce(((acc,item)=>{const key=item.id,currentNode={level,node:item};if(acc.set(key,currentNode),dependencies&&!item.children&&dependencies.forEach((dependency=>dependency.push(key))),item.children){const allDependencies=dependencies?[...dependencies]:[],itemDependencies=[];currentNode.dependencies=itemDependencies,acc.set(key,currentNode),allDependencies.push(itemDependencies);const map=checkboxTreeToMap(item.children,level+1,allDependencies);return new Map([...acc,...map])}return acc}),new Map),paddingLeft=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["padding-left:","px;"],(({dimension,$level=0})=>"s"===dimension?12+28*$level:16+32*$level)),CheckboxGroupMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D).withConfig({displayName:"MenuItemWithCheckbox__CheckboxGroupMenuItem",componentId:"sc-aoffmn-0"})(["",""],paddingLeft),MenuItemWithCheckbox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({checked,indeterminate,checkboxRef,level=0,children,dimension="l",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CheckboxGroupMenuItem,{dimension,$level:level,ref,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_form__WEBPACK_IMPORTED_MODULE_4__.Y,{dimension:"s"===dimension?"s":"m",checked,indeterminate,hovered:props.hovered,disabled:props.disabled,readOnly:props.readOnly,ref:checkboxRef,onChange:()=>!1,children})})));try{MenuItemWithCheckbox.displayName="MenuItemWithCheckbox",MenuItemWithCheckbox.__docgenInfo={description:"",displayName:"MenuItemWithCheckbox",props:{checked:{defaultValue:null,description:"Значение Checkbox",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"Неопределенное состояние Checkbox",name:"indeterminate",required:!1,type:{name:"boolean"}},checkboxIsHovered:{defaultValue:null,description:"Состояние hovered для Checkbox",name:"checkboxIsHovered",required:!1,type:{name:"boolean"}},checkboxRef:{defaultValue:null,description:"Ref на Checkbox",name:"checkboxRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},level:{defaultValue:{value:"0"},description:"Сдвиг внутри MenuItem при наличии нескольких уровней (например при использовании составной группы чекбоксов внутри Menu)",name:"level",required:!1,type:{name:"number"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},selected:{defaultValue:null,description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:"",name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"l"},description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"]={docgenInfo:MenuItemWithCheckbox.__docgenInfo,name:"MenuItemWithCheckbox",path:"src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{L:()=>uid})},"./src/components/form/CheckboxField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CheckboxField});var _path,react=__webpack_require__("./node_modules/react/index.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),uid=__webpack_require__("./src/components/common/uid.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.p;var _rect;function Minus_extends(){return Minus_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Minus_extends.apply(this,arguments)}__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const CheckboxComponentWrapper=styled_components_browser_esm.Ay.label.withConfig({displayName:"style__CheckboxComponentWrapper",componentId:"sc-suyql9-0"})(["display:inline-flex;align-items:flex-start;position:relative;box-sizing:content-box;padding:0;user-select:none;cursor:",";"," color:",";fieldset[data-dimension='s'] &&{",";}fieldset:disabled &&{color:",";cursor:default;}",";"],(p=>p.disabled||p.readOnly?"default":"pointer"),(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 30"]:p.theme.color["Neutral/Neutral 90"]),typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.readOnly?"pointer-events: none":"")),readOnlyCss=(0,styled_components_browser_esm.AH)(["pointer-events:none;cursor:default;&:not(:checked){& + div > span{border-color:",";background-color:",";}}&:checked{& + div > span{border-color:",";background-color:",";& *[fill^='#']{fill:",";}& > svg{visibility:visible;}}}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),indeterminateCss=(0,styled_components_browser_esm.AH)(["&:not(:checked) + div > span{border-color:",";background-color:",";}> *{display:block;}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"])),hoveredCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){& + div > div{visibility:visible;}&:focus-visible + div{outline:none;}}"]),activeCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){"," & + div > div{background:",";}}"],hoveredCss,(p=>p.theme.color["Opacity/Press"])),Input=styled_components_browser_esm.Ay.input.withConfig({displayName:"style__Input",componentId:"sc-suyql9-1"})(["appearance:none;::-ms-check{display:none;}position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;padding:0;margin:0;opacity:0;box-sizing:border-box;&:disabled{cursor:default;&:not(:checked){& + div > span{border-color:",";background-color:",";}}&:checked{& + div > span{border-color:",";background-color:",";& *[fill^='#']{fill:",";}& > svg{visibility:visible;}}}}&:checked:not(:disabled){& + div > span{border-color:",";background-color:",";& *[fill^='#']{fill:",";}& > svg{visibility:visible;}}}"," &:not(:disabled){&:focus-visible + div{outline-offset:","px;outline:"," solid ","px;}&:hover{","}&:active{","}",";",";}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>!p.readOnly&&p.$hovered&&hoveredCss),2,(p=>p.theme.color["Primary/Primary 60 Main"]),2,(p=>!p.readOnly&&hoveredCss),(p=>!p.readOnly&&activeCss),(p=>p.$indeterminate&&indeterminateCss),(p=>p.readOnly&&readOnlyCss)),InputContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__InputContainer",componentId:"sc-suyql9-2"})(["box-sizing:border-box;padding:2px;pointer-events:none;position:relative;flex-shrink:0;"," fieldset[data-dimension='s'] &{width:","px;height:","px;}"],(p=>`\n    width: ${"s"===p.$dimension?20:24}px;\n    height: ${"s"===p.$dimension?20:24}px;\n  `),20,20),CheckboxComponentHover=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHover",componentId:"sc-suyql9-3"})(["visibility:hidden;pointer-events:none;position:absolute;background:",";left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;"," background-color:",";fieldset[data-dimension='s'] &&{width:32px;height:32px;}"],(p=>p.theme.color["Opacity/Hover"]),(p=>`\n        width: ${"s"===p.$dimension?32:36}px;\n        height: ${"s"===p.$dimension?32:36}px;\n      `),(p=>p.theme.color["Opacity/Hover"])),CheckboxComponentBackground=styled_components_browser_esm.Ay.span.withConfig({displayName:"style__CheckboxComponentBackground",componentId:"sc-suyql9-4"})(["box-sizing:border-box;pointer-events:none;display:inline-block;position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:",";"," outline:0;transition:background 0.1s ease-in;fieldset[data-dimension='s'] &&{width:16px;height:16px;}line-height:initial;background-color:",";border:1px solid ",";& *[fill^='#']{fill:",";}fieldset:disabled &&{& *[fill^='#']{fill:",";}}"],(p=>(0,borderRadius.r2)(p.theme.shape)),(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.$error?p.theme.color["Error/Error 60 Main"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 10"]:p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Neutral/Neutral 10"])),iconCss=(0,styled_components_browser_esm.AH)([""," position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;"],(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `)),Check=(0,styled_components_browser_esm.Ay)((function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})).withConfig({displayName:"style__Check",componentId:"sc-suyql9-5"})(["visibility:hidden;",""],iconCss),Indeterminate=(0,styled_components_browser_esm.Ay)((function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})).withConfig({displayName:"style__Indeterminate",componentId:"sc-suyql9-6"})([""," & *[fill^='#']{fill:",";}"],iconCss,(p=>p.theme.color["Special/Static White"])),CheckboxComponentLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentLabel",componentId:"sc-suyql9-7"})(["display:flex;flex-direction:column;align-content:center;margin-top:2px;margin-bottom:2px;margin-left:",";"," color:",";fieldset:disabled &&{color:",";}fieldset[data-dimension='s'] &&{","}"],"8px",(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 30"]:p.theme.color["Neutral/Neutral 90"]),(p=>p.theme.color["Neutral/Neutral 30"]),typography.Il["Body/Body 2 Short"]),CheckboxComponentHint=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHint",componentId:"sc-suyql9-8"})(["margin-top:4px;"," color:",";fieldset[data-dimension='s'] &&{","}"],(p=>"s"===p.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 30"]:p.theme.color["Neutral/Neutral 50"]),typography.Il["Caption/Caption 1"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxField=(0,react.forwardRef)((({children,disabled=!1,readOnly=!1,hovered,dimension="m",error,indeterminate=!1,extraText,className,id=(0,uid.L)(),name,...props},ref)=>{const fieldContainerProps={"data-field-id":id,"data-field-name":name};(0,splitDataAttributes.G)(props,fieldContainerProps);return(0,jsx_runtime.jsxs)(CheckboxComponentWrapper,{className,$dimension:dimension,disabled,readOnly,...fieldContainerProps,children:[(0,jsx_runtime.jsx)(Input,{...props,ref,disabled,readOnly,type:"checkbox",$indeterminate:indeterminate,onKeyDown:e=>{if(readOnly){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault()}props.onKeyDown?.(e)},"data-hovered":hovered,$hovered:hovered,$dimension:dimension,id,name}),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(CheckboxComponentHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(CheckboxComponentBackground,{$dimension:dimension,$error:error,disabled:disabled||readOnly,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false",$dimension:dimension}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false",$dimension:dimension})})]}),children&&(0,jsx_runtime.jsxs)(CheckboxComponentLabel,{$dimension:dimension,disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(CheckboxComponentHint,{disabled,$dimension:dimension,children:extraText})]})]})}));CheckboxField.displayName="CheckboxField";try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:{value:"false"},description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/index.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/components/form/CheckboxField/index.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}}}]);