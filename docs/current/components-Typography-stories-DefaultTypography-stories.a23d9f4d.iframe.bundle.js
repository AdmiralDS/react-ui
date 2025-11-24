"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3012],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m7.79 3.29c.28.28.74.27 1.01-.02l4.42-4.8c.24-.27.22-.68-.04-.92a.65.65 0 0 0-.92.04l-3.99 4.34-2.4-2.4a.66.66 0 0 0-.92 0c-.25.25-.25.67 0 .92z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 1 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m13-3.92A.65.65 0 0 1 16 9l-3.08 3 3 3.08A.65.65 0 1 1 15 16l-3-3.08L9 16a.65.65 0 1 1-.92-.92l3-3.08-3-3A.65.65 0 0 1 9 8.08l3 3 3.08-3a.65.65 0 0 1 .92 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 10.695a.65.65 0 0 0 .65-.65V7.9a.65.65 0 1 0-1.3 0v5.146c0 .36.291.65.65.65m.85 2.206a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-4.75a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7M14.1 16a.75.75 0 0 1-.75.75h-.05a2.05 2.05 0 0 1-2.05-2.05v-3.75a.75.75 0 0 1 1.5 0v3.75c0 .304.246.55.55.55h.05a.75.75 0 0 1 .75.75"})))};__webpack_require__.p},"./src/components/Typography/stories/DefaultTypography.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ThemeActivatingExample:()=>ThemeActivatingExample,ThemeBasicsExample:()=>ThemeBasicsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DefaultTypography_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  div,
  span,
  main,
  footer,
  article,
  section {
    `,`;
  }
  header {
    `,`;
  }
  details,
  summary {
    `,`;
  }
`]);return _templateObject=function _templateObject(){return data},data}var defaultTypographyMixin=(0,styled_components_browser_esm.AH)(_templateObject(),typography.Il["Body/Body 1 Long"],typography.Il["Header/H4"],typography.Il["Caption/Caption 1"]),common=__webpack_require__("./src/components/themes/common/index.ts"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx");function UsingDefaultTypographyGlobally_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function UsingDefaultTypographyGlobally_template_templateObject(){var data=UsingDefaultTypographyGlobally_template_tagged_template_literal([`
  `,`;
`]);return UsingDefaultTypographyGlobally_template_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=UsingDefaultTypographyGlobally_template_tagged_template_literal([`
  table {
    `,`;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    color: var(--admiral-color-Neutral_Neutral90, `,`);

    border: 1px solid var(--admiral-color-Neutral_Neutral70, `,`);

    tr {
      height: 50px;
    }
    th {
      text-align: left;
      `,`;
      color: var(--admiral-color-Neutral_Neutral50, `,`);
    }
    th,
    td {
      border: 1px solid var(--admiral-color-Neutral_Neutral70, `,`);
      padding: 8px 10px;
    }

    td[data-label='Manual'] {
      min-width: 300px;
      width: 300px;
    }

    tbody > tr:nth-of-type(even) {
      background-color: var(--admiral-color-Opacity_Neutral4, `,`);
    }
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=UsingDefaultTypographyGlobally_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  `,`;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=UsingDefaultTypographyGlobally_template_tagged_template_literal([`
  height: `,`px;
`]);return _templateObject3=function _templateObject(){return data},data}var GlobalStyle=(0,styled_components_browser_esm.DU)(UsingDefaultTypographyGlobally_template_templateObject(),defaultTypographyMixin),customTypographyMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),typography.Il["Body/Body 1 Long"],function(p){return p.theme.color[common.jn]},function(p){return p.theme.color["Neutral/Neutral 70"]},typography.Il["Header/H6"],function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 70"]},function(p){return p.theme.color["Opacity/Neutral 4"]}),Content=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 90"]},customTypographyMixin),Separator=styled_components_browser_esm.Ay.div(_templateObject3(),function(p){return p.height}),UsingDefaultTypographyGloballyTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsxs)(Content,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Дефолтные стили текста для основных тэгов"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Для основных тэгов рекомендуется использовать стили текста соответственно таблице ниже.",(0,jsx_runtime.jsx)(Separator,{height:8}),"Все стили собраны в defaultTypographyMixin. Данный миксин можно подключать локально или глобально. Глобальное использование возможно с помощью компонент styled-components createGlobalStyle."]})]}),(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Тэг"}),(0,jsx_runtime.jsx)("th",{children:"Стиль текста"}),(0,jsx_runtime.jsx)("th",{children:"Пример"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<div>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("div",{children:"Пример текста в div"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<span>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("span",{children:"Пример текста в span"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<main>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:"-"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<footer>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:"-"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<article>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("article",{children:"Пример текста в article"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<section>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("section",{children:"Пример текста в section"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<header>"}),(0,jsx_runtime.jsx)("td",{children:"Header/H4"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:"-"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<details>"}),(0,jsx_runtime.jsx)("td",{children:"Caption/Caption 1"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"Пример details"}),"Пример текста в details."]})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<summary>"}),(0,jsx_runtime.jsx)("td",{children:"Caption/Caption 1"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("summary",{children:"Пример текста в summary"})})]})]})]})]})]})},createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function UsingDefaultTypographyLocally_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function UsingDefaultTypographyLocally_template_templateObject(){var data=UsingDefaultTypographyLocally_template_tagged_template_literal([`
  table {
    `,`;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    color: var(--admiral-color-Neutral_Neutral90, `,`);

    border: 1px solid var(--admiral-color-Neutral_Neutral70, `,`);

    tr {
      height: 50px;
    }
    th {
      text-align: left;
      `,`;
      color: var(--admiral-color-Neutral_Neutral50, `,`);
    }
    th,
    td {
      border: 1px solid var(--admiral-color-Neutral_Neutral70, `,`);
      padding: 8px 10px;
    }

    td[data-label='Manual'] {
      min-width: 300px;
      width: 300px;
    }

    tbody > tr:nth-of-type(even) {
      background-color: var(--admiral-color-Opacity_Neutral4, `,`);
    }
  }
`]);return UsingDefaultTypographyLocally_template_templateObject=function _templateObject(){return data},data}function UsingDefaultTypographyLocally_template_templateObject1(){var data=UsingDefaultTypographyLocally_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  `,`;
`]);return UsingDefaultTypographyLocally_template_templateObject1=function _templateObject(){return data},data}function UsingDefaultTypographyLocally_template_templateObject2(){var data=UsingDefaultTypographyLocally_template_tagged_template_literal([`
  width: 100%;
  `,`;
`]);return UsingDefaultTypographyLocally_template_templateObject2=function _templateObject(){return data},data}function UsingDefaultTypographyLocally_template_templateObject3(){var data=UsingDefaultTypographyLocally_template_tagged_template_literal([`
  height: `,`px;
`]);return UsingDefaultTypographyLocally_template_templateObject3=function _templateObject(){return data},data}var UsingDefaultTypographyLocally_template_customTypographyMixin=(0,styled_components_browser_esm.AH)(UsingDefaultTypographyLocally_template_templateObject(),typography.Il["Body/Body 1 Long"],function(p){return p.theme.color[common.jn]},function(p){return p.theme.color["Neutral/Neutral 70"]},typography.Il["Header/H6"],function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 70"]},function(p){return p.theme.color["Opacity/Neutral 4"]}),UsingDefaultTypographyLocally_template_Content=styled_components_browser_esm.Ay.div(UsingDefaultTypographyLocally_template_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 90"]},UsingDefaultTypographyLocally_template_customTypographyMixin),TableWrapper=styled_components_browser_esm.Ay.div(UsingDefaultTypographyLocally_template_templateObject2(),defaultTypographyMixin),UsingDefaultTypographyLocally_template_Separator=styled_components_browser_esm.Ay.div(UsingDefaultTypographyLocally_template_templateObject3(),function(p){return p.height}),UsingDefaultTypographyLocallyTemplate=function(param){var themeBorderKind=param.themeBorderKind,CSSCustomProps=param.CSSCustomProps;return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(UsingDefaultTypographyLocally_template_Content,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Дефолтные стили текста для основных тэгов"}),(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["Для основных тэгов рекомендуется использовать стили текста соответственно таблице ниже.",(0,jsx_runtime.jsx)(UsingDefaultTypographyLocally_template_Separator,{height:8}),"Все стили собраны в defaultTypographyMixin. Данный миксин можно подключать локально или глобально. При локальном подключении достаточно добавить его в стилизованный с помощью styled-components компонент, внутри которого необходимо использование данных стилей. Также возможно создавать кастомные миксины."]})]}),(0,jsx_runtime.jsx)(TableWrapper,{children:(0,jsx_runtime.jsxs)("table",{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("th",{children:"Тэг"}),(0,jsx_runtime.jsx)("th",{children:"Стиль текста"}),(0,jsx_runtime.jsx)("th",{children:"Пример"})]})}),(0,jsx_runtime.jsxs)("tbody",{children:[(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<div>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("div",{children:"Пример текста в div"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<span>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("span",{children:"Пример текста в span"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<main>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:"-"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<footer>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:"-"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<article>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("article",{children:"Пример текста в article"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<section>"}),(0,jsx_runtime.jsx)("td",{children:"Body/Body 1 Long"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("section",{children:"Пример текста в section"})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<header>"}),(0,jsx_runtime.jsx)("td",{children:"Header/H4"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:"-"})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<details>"}),(0,jsx_runtime.jsx)("td",{children:"Caption/Caption 1"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsxs)("details",{children:[(0,jsx_runtime.jsx)("summary",{children:"Пример details"}),"Пример текста в details."]})})]}),(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:"<summary>"}),(0,jsx_runtime.jsx)("td",{children:"Caption/Caption 1"}),(0,jsx_runtime.jsx)("td",{"data-label":"Manual",children:(0,jsx_runtime.jsx)("summary",{children:"Пример текста в summary"})})]})]})]})})]})})};try{UsingDefaultTypographyLocallyTemplate.displayName="UsingDefaultTypographyLocallyTemplate",UsingDefaultTypographyLocallyTemplate.__docgenInfo={description:"",displayName:"UsingDefaultTypographyLocallyTemplate",props:{themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/stories/UsingDefaultTypographyLocally.template.tsx#UsingDefaultTypographyLocallyTemplate"]={docgenInfo:UsingDefaultTypographyLocallyTemplate.__docgenInfo,name:"UsingDefaultTypographyLocallyTemplate",path:"src/components/Typography/stories/UsingDefaultTypographyLocally.template.tsx#UsingDefaultTypographyLocallyTemplate"})}catch(__react_docgen_typescript_loader_error){}let UsingDefaultTypographyLocally_templateraw_namespaceObject=`import styled, { css, ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import {
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
  DefaultFontColorName,
  defaultTypographyMixin,
  typography,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const customTypographyMixin = css\`
  table {
    \${typography['Body/Body 1 Long']};
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color[DefaultFontColorName]});

    border: 1px solid var(--admiral-color-Neutral_Neutral70, \${(p) => p.theme.color['Neutral/Neutral 70']});

    tr {
      height: 50px;
    }
    th {
      text-align: left;
      \${typography['Header/H6']};
      color: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 90']});
    }
    th,
    td {
      border: 1px solid var(--admiral-color-Neutral_Neutral70, \${(p) => p.theme.color['Neutral/Neutral 70']});
      padding: 8px 10px;
    }

    td[data-label='Manual'] {
      min-width: 300px;
      width: 300px;
    }

    tbody > tr:nth-of-type(even) {
      background-color: var(--admiral-color-Opacity_Neutral4, \${(p) => p.theme.color['Opacity/Neutral 4']});
    }
  }
\`;

const Content = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
  \${customTypographyMixin};
\`;
const TableWrapper = styled.div\`
  width: 100%;
  \${defaultTypographyMixin};
\`;

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;

export const UsingDefaultTypographyLocallyTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Content>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Дефолтные стили текста для основных тэгов</NotificationItemTitle>
          <NotificationItemContent>
            Для основных тэгов рекомендуется использовать стили текста соответственно таблице ниже.
            <Separator height={8} />
            Все стили собраны в defaultTypographyMixin. Данный миксин можно подключать локально или глобально. При
            локальном подключении достаточно добавить его в стилизованный с помощью styled-components компонент, внутри
            которого необходимо использование данных стилей. Также возможно создавать кастомные миксины.
          </NotificationItemContent>
        </NotificationItem>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Тэг</th>
                <th>Стиль текста</th>
                <th>Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;div&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <div>Пример текста в div</div>
                </td>
              </tr>
              <tr>
                <td>&lt;span&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <span>Пример текста в span</span>
                </td>
              </tr>
              <tr>
                <td>&lt;main&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">-</td>
              </tr>
              <tr>
                <td>&lt;footer&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">-</td>
              </tr>
              <tr>
                <td>&lt;article&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <article>Пример текста в article</article>
                </td>
              </tr>
              <tr>
                <td>&lt;section&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <section>Пример текста в section</section>
                </td>
              </tr>
              <tr>
                <td>&lt;header&gt;</td>
                <td>Header/H4</td>
                <td data-label="Manual">-</td>
              </tr>
              <tr>
                <td>&lt;details&gt;</td>
                <td>Caption/Caption 1</td>
                <td data-label="Manual">
                  <details>
                    <summary>Пример details</summary>
                    Пример текста в details.
                  </details>
                </td>
              </tr>
              <tr>
                <td>&lt;summary&gt;</td>
                <td>Caption/Caption 1</td>
                <td data-label="Manual">
                  <summary>Пример текста в summary</summary>
                </td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </Content>
    </ThemeProvider>
  );
};
`,UsingDefaultTypographyGlobally_templateraw_namespaceObject=`import styled, { createGlobalStyle, css } from 'styled-components';
import {
  DefaultFontColorName,
  defaultTypographyMixin,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
  typography,
} from '@admiral-ds/react-ui';

const GlobalStyle = createGlobalStyle\`
  \${defaultTypographyMixin};
\`;

const customTypographyMixin = css\`
  table {
    \${typography['Body/Body 1 Long']};
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color[DefaultFontColorName]});

    border: 1px solid var(--admiral-color-Neutral_Neutral70, \${(p) => p.theme.color['Neutral/Neutral 70']});

    tr {
      height: 50px;
    }
    th {
      text-align: left;
      \${typography['Header/H6']};
      color: var(--admiral-color-Neutral_Neutral50, \${(p) => p.theme.color['Neutral/Neutral 90']});
    }
    th,
    td {
      border: 1px solid var(--admiral-color-Neutral_Neutral70, \${(p) => p.theme.color['Neutral/Neutral 70']});
      padding: 8px 10px;
    }

    td[data-label='Manual'] {
      min-width: 300px;
      width: 300px;
    }

    tbody > tr:nth-of-type(even) {
      background-color: var(--admiral-color-Opacity_Neutral4, \${(p) => p.theme.color['Opacity/Neutral 4']});
    }
  }
\`;

const Content = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
  \${customTypographyMixin};
\`;

const Separator = styled.div<{ height: number }>\`
  height: \${(p) => p.height}px;
\`;

export const UsingDefaultTypographyGloballyTemplate = () => {
  return (
    <>
      <GlobalStyle />
      <Content>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Дефолтные стили текста для основных тэгов</NotificationItemTitle>
          <NotificationItemContent>
            Для основных тэгов рекомендуется использовать стили текста соответственно таблице ниже.
            <Separator height={8} />
            Все стили собраны в defaultTypographyMixin. Данный миксин можно подключать локально или глобально.
            Глобальное использование возможно с помощью компонент styled-components createGlobalStyle.
          </NotificationItemContent>
        </NotificationItem>
        <table>
          <thead>
            <tr>
              <th>Тэг</th>
              <th>Стиль текста</th>
              <th>Пример</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt;div&gt;</td>
              <td>Body/Body 1 Long</td>
              <td data-label="Manual">
                <div>Пример текста в div</div>
              </td>
            </tr>
            <tr>
              <td>&lt;span&gt;</td>
              <td>Body/Body 1 Long</td>
              <td data-label="Manual">
                <span>Пример текста в span</span>
              </td>
            </tr>
            <tr>
              <td>&lt;main&gt;</td>
              <td>Body/Body 1 Long</td>
              <td data-label="Manual">-</td>
            </tr>
            <tr>
              <td>&lt;footer&gt;</td>
              <td>Body/Body 1 Long</td>
              <td data-label="Manual">-</td>
            </tr>
            <tr>
              <td>&lt;article&gt;</td>
              <td>Body/Body 1 Long</td>
              <td data-label="Manual">
                <article>Пример текста в article</article>
              </td>
            </tr>
            <tr>
              <td>&lt;section&gt;</td>
              <td>Body/Body 1 Long</td>
              <td data-label="Manual">
                <section>Пример текста в section</section>
              </td>
            </tr>
            <tr>
              <td>&lt;header&gt;</td>
              <td>Header/H4</td>
              <td data-label="Manual">-</td>
            </tr>
            <tr>
              <td>&lt;details&gt;</td>
              <td>Caption/Caption 1</td>
              <td data-label="Manual">
                <details>
                  <summary>Пример details</summary>
                  Пример текста в details.
                </details>
              </td>
            </tr>
            <tr>
              <td>&lt;summary&gt;</td>
              <td>Caption/Caption 1</td>
              <td data-label="Manual">
                <summary>Пример текста в summary</summary>
              </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </>
  );
};
`;function DefaultTypography_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DefaultTypography_stories_templateObject(){var data=DefaultTypography_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return DefaultTypography_stories_templateObject=function _templateObject(){return data},data}var Desc=styled_components_browser_esm.Ay.div(DefaultTypography_stories_templateObject());let DefaultTypography_stories={title:"Experimental API/DefaultTypography",component:Desc,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsx)(Desc,{children:"Для сохранения единообразия в проекте рекомендуется использовать единые стили текста для стандартных HTML тэгов."})},{})}};var ThemeActivatingExample={render:function(){return(0,jsx_runtime.jsx)(UsingDefaultTypographyLocallyTemplate,{})},parameters:{docs:{source:{code:UsingDefaultTypographyLocally_templateraw_namespaceObject}}},name:"Локальное использование"},ThemeBasicsExample={render:function(){return(0,jsx_runtime.jsx)(UsingDefaultTypographyGloballyTemplate,{})},parameters:{docs:{source:{code:UsingDefaultTypographyGlobally_templateraw_namespaceObject}}},name:"Глобальное использование"};ThemeActivatingExample.parameters={...ThemeActivatingExample.parameters,docs:{...ThemeActivatingExample.parameters?.docs,source:{originalSource:`{
  render: UsingDefaultTypographyLocallyStory,
  parameters: {
    docs: {
      source: {
        code: UsingDefaultTypographyLocallyRaw
      }
    }
  },
  name: 'Локальное использование'
}`,...ThemeActivatingExample.parameters?.docs?.source}}},ThemeBasicsExample.parameters={...ThemeBasicsExample.parameters,docs:{...ThemeBasicsExample.parameters?.docs,source:{originalSource:`{
  render: UsingDefaultTypographyGloballyStory,
  parameters: {
    docs: {
      source: {
        code: UsingDefaultTypographyGloballyRaw
      }
    }
  },
  name: 'Глобальное использование'
}`,...ThemeBasicsExample.parameters?.docs?.source}}};let __namedExportsOrder=["ThemeActivatingExample","ThemeBasicsExample"]},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});var parseShadow=function(token){var result=token;return(result=result.replace("box-shadow: ","")).replace(";","")}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Typography-stories-DefaultTypography-stories.a23d9f4d.iframe.bundle.js.map