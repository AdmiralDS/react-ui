"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9583],{"./src/components/Badge/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>Badge,He:()=>SegmentedControlBadge,I3:()=>ButtonBadge,nS:()=>BadgeComponent});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/light/index.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  background: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: `,`;
  height: `,`;
  border-radius: `,`;
  `,`
  `,`
  `,`
  user-select: none;
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:is(input:checked + div *) {
    background: `,`;
    color: `,`;
  }
`]);return _templateObject3=function _templateObject(){return data},data}var background=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"warning":return"var(--admiral-color-Warning_Warning50Main, ".concat(theme.color["Warning/Warning 50 Main"],")");case"success":return"var(--admiral-color-Success_Success50Main, ".concat(theme.color["Success/Success 50 Main"],")");case"error":return"var(--admiral-color-Error_Error60Main, ".concat(theme.color["Error/Error 60 Main"],")");case"grey":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"dark":return"var(--admiral-color-Neutral_Neutral80, ".concat(theme.color["Neutral/Neutral 80"],")");case"whiteBlue":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"white":case"whiteInactive":case"whiteDisable":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");default:return"var(--admiral-color-Opacity_Neutral8, ".concat(theme.color["Opacity/Neutral 8"],")")}}),color=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $appearance=param.$appearance,theme=param.theme;switch($appearance){case"info":case"warning":case"success":case"error":case"grey":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"dark":return"var(--admiral-color-Neutral_Neutral00, ".concat(theme.color["Neutral/Neutral 00"],")");case"whiteBlue":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"lightInactive":case"whiteInactive":return"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")");case"whiteDisable":case"lightDisable":return"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")");default:return"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}}),BadgeComponent=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject2(),function(param){return"s"===param.$dimension?"0 5px":"0 6px"},function(param){return"s"===param.$dimension?"16px":"20px"},function(param){return"s"===param.$dimension?"8px":"10px"},function(param){return"s"===param.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Caption/Caption 1"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_3__.Il["Body/Body 2 Long"]},background,color),Badge=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var children=_param.children,_param_dimension=_param.dimension,_param_appearance=_param.appearance,locale=_param.locale,props=_object_without_properties(_param,["children","dimension","appearance","locale"]),theme=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.DP)()||_src_components_themes__WEBPACK_IMPORTED_MODULE_4__.d,amountText=(null==locale?void 0:locale.amountAriaLabel)||theme.locales[theme.currentLocale].badge.amountAriaLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BadgeComponent,_object_spread_props(_object_spread({ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"light":_param_appearance,"aria-label":"".concat(amountText," ").concat(children)},props),{children:children}))});function getBadgeAppearance(appearance,disabled){switch(appearance){case"secondary":case"ghost":if(disabled)return"lightDisable";return"info";case"tertiary":if(disabled)return"whiteDisable";return"white";default:if(disabled)return"whiteDisable";return"whiteBlue"}}Badge.displayName="Badge";var ButtonBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]),isVisible="primary"===appearance||"secondary"===appearance||"tertiary"===appearance||"ghost"===appearance,badgeAppearance=getBadgeAppearance(appearance,void 0!==_param_disabled&&_param_disabled);return isVisible?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Badge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:badgeAppearance})):null},SegmentedBadge=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(Badge)(_templateObject3(),function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral00, ".concat(p.theme.color["Neutral/Neutral 00"],")"):"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},function(p){return p.$disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(p.theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")")}),SegmentedControlBadge=function(_param){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"outlined":_param_appearance,_param_disabled=_param.disabled,props=_object_without_properties(_param,["appearance","disabled"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SegmentedBadge,_object_spread_props(_object_spread({},props),{dimension:"s",appearance:void 0!==_param_disabled&&_param_disabled?"outlined"==appearance?"lightDisable":"whiteDisable":"outlined"==appearance?"info":"white"}))};try{BadgeComponent.displayName="Badge",BadgeComponent.__docgenInfo={description:"",displayName:"Badge",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/stories/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccessabilityExample:()=>AccessabilityExample,PlaygroundExample:()=>PlaygroundExample,VariantsExample:()=>VariantsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Badge=__webpack_require__("./src/components/Badge/index.tsx"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  display: flex;
  align-items: center;
  `,`
  & > * {
    margin-right: 16px;
  }
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}var Layout=styled_components_browser_esm.Ay.div(_templateObject()),BadgePlayground_template_String=styled_components_browser_esm.Ay.div(_templateObject1(),function(param){var appearance=param.appearance,theme=param.theme;return appearance&&appearance.indexOf("white")>-1&&"background: var(--admiral-color-Neutral_Neutral05, ".concat(theme.color["Neutral/Neutral 05"],");")},typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),BadgePlaygroundTemplate=function(props){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsxs)(BadgePlayground_template_String,{appearance:props.appearance,children:[(0,jsx_runtime.jsx)(Badge.Ex,_object_spread_props(_object_spread({},props),{children:"4"})),"Appearance: ",props.appearance||"light",(0,jsx_runtime.jsx)("br",{}),"Dimension: ",props.dimension||"m"]})})})};try{BadgePlaygroundTemplate.displayName="BadgePlaygroundTemplate",BadgePlaygroundTemplate.__docgenInfo={description:"",displayName:"BadgePlaygroundTemplate",props:{dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:null,description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"white"'},{value:'"grey"'},{value:'"dark"'},{value:'"light"'},{value:'"warning"'},{value:'"info"'},{value:'"lightInactive"'},{value:'"lightDisable"'},{value:'"whiteInactive"'},{value:'"whiteDisable"'},{value:'"whiteBlue"'}]}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ amountAriaLabel?: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/stories/BadgePlayground.template.tsx#BadgePlaygroundTemplate"]={docgenInfo:BadgePlaygroundTemplate.__docgenInfo,name:"BadgePlaygroundTemplate",path:"src/components/Badge/stories/BadgePlayground.template.tsx#BadgePlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function BadgeVariants_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function BadgeVariants_template_templateObject(){var data=BadgeVariants_template_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
`]);return BadgeVariants_template_templateObject=function _templateObject(){return data},data}function BadgeVariants_template_templateObject1(){var data=BadgeVariants_template_tagged_template_literal([`
  display: flex;
  align-items: center;
  `,`
  & > * {
    margin-right: 16px;
  }

  & > *:last-child {
    margin-right: 40px;
  }
  `,`
  color: var(--admiral-color-Neutral_Neutral90, `,`);
`]);return BadgeVariants_template_templateObject1=function _templateObject(){return data},data}var BadgeVariants_template_Layout=styled_components_browser_esm.Ay.div(BadgeVariants_template_templateObject()),BadgeVariants_template_String=styled_components_browser_esm.Ay.div(BadgeVariants_template_templateObject1(),function(param){var $appearance=param.$appearance,theme=param.theme;return $appearance&&$appearance.indexOf("white")>-1&&"background: var(--admiral-color-Neutral_Neutral05, ".concat(theme.color["Neutral/Neutral 05"],");")},typography.Il["Body/Body 2 Long"],function(p){return p.theme.color["Neutral/Neutral 90"]}),BadgeVariantsTemplate=function(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(BadgeVariants_template_Layout,{children:[(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{dimension:"s",children:"5"}),"Light"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"info",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"info",dimension:"s",children:"5"}),"Info"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"warning",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"warning",dimension:"s",children:"5"}),"Warning"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"success",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"success",dimension:"s",children:"5"}),"Success"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"error",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"error",dimension:"s",children:"5"}),"Error"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"grey",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"grey",dimension:"s",children:"5"}),"Grey"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"dark",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"dark",dimension:"s",children:"5"}),"Dark"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"lightInactive",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"lightInactive",dimension:"s",children:"5"}),"Light Inactive"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"lightDisable",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"lightDisable",dimension:"s",children:"5"}),"Light Disable"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{$appearance:"white",children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"white",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"white",dimension:"s",children:"5"}),"White"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{$appearance:"whiteInactive",children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteInactive",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteInactive",dimension:"s",children:"5"}),"White Inactive"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{$appearance:"whiteDisable",children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteDisable",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteDisable",dimension:"s",children:"5"}),"White Disable"]}),(0,jsx_runtime.jsxs)(BadgeVariants_template_String,{$appearance:"whiteBlue",children:[(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteBlue",children:"5"}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteBlue",dimension:"s",children:"5"}),"White Blue"]})]})})},T=__webpack_require__("./src/components/T/index.tsx"),Button=__webpack_require__("./src/components/Button/index.tsx");function BadgeAccessability_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function BadgeAccessability_template_templateObject(){var data=BadgeAccessability_template_tagged_template_literal([`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
`]);return BadgeAccessability_template_templateObject=function _templateObject(){return data},data}function BadgeAccessability_template_templateObject1(){var data=BadgeAccessability_template_tagged_template_literal([`
  height: `,`px;
  width: 8px;
`]);return BadgeAccessability_template_templateObject1=function _templateObject(){return data},data}var BadgeAccessability_template_String=styled_components_browser_esm.Ay.div(BadgeAccessability_template_templateObject()),Separator=styled_components_browser_esm.Ay.div(BadgeAccessability_template_templateObject1(),function(p){return p.$height||20}),BadgeAccessabilityTemplate=function(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(T.T,{font:"Body/Body 1 Long",as:"div",children:['При фокусе на компоненте, включающем в себя компонент Badge, осуществляется следующая озвучка: "Количество ',"<","число, указанное в Badge",">",'". При желании текст озвучки можно поменять с помощью атрибута aria-label, как это сделано во второй кнопке.']}),(0,jsx_runtime.jsx)(Separator,{$height:24}),(0,jsx_runtime.jsxs)(BadgeAccessability_template_String,{children:[(0,jsx_runtime.jsxs)(Button.$n,{children:["Пример",(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteInactive",children:"4"})]}),(0,jsx_runtime.jsxs)(Button.$n,{children:["Example",(0,jsx_runtime.jsx)(Separator,{}),(0,jsx_runtime.jsx)(Badge.Ex,{appearance:"whiteInactive","aria-label":"Amount 4",children:"4"})]})]})]})};let BadgePlayground_templateraw_namespaceObject=`import * as React from 'react';
import styled from 'styled-components';
import { Badge, typography } from '@admiral-ds/react-ui';
import type { BadgeProps } from '@admiral-ds/react-ui';

const Layout = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
\`;

const String = styled.div<{ appearance?: BadgeProps['appearance'] }>\`
  display: flex;
  align-items: center;
  \${({ appearance, theme }) =>
    appearance &&
    appearance.indexOf('white') > -1 &&
    \`background: var(--admiral-color-Neutral_Neutral05, \${theme.color['Neutral/Neutral 05']});\`}
  & > * {
    margin-right: 16px;
  }
  \${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

export const BadgePlaygroundTemplate = (props: BadgeProps) => {
  return (
    <>
      <Layout>
        <String appearance={props.appearance}>
          <Badge {...props}>4</Badge>
          Appearance: {props.appearance || 'light'}
          <br />
          Dimension: {props.dimension || 'm'}
        </String>
      </Layout>
    </>
  );
};
`,BadgeVariants_templateraw_namespaceObject=`import * as React from 'react';
import { Badge, typography } from '@admiral-ds/react-ui';
import type { BadgeProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Layout = styled.div\`
  display: flex;
  flex-direction: column;
  padding: 50px;
  & > * {
    padding: 8px 0 8px 16px;
  }
\`;

const String = styled.div<{ $appearance?: BadgeProps['appearance'] }>\`
  display: flex;
  align-items: center;
  \${({ $appearance, theme }) =>
    $appearance &&
    $appearance.indexOf('white') > -1 &&
    \`background: var(--admiral-color-Neutral_Neutral05, \${theme.color['Neutral/Neutral 05']});\`}
  & > * {
    margin-right: 16px;
  }

  & > *:last-child {
    margin-right: 40px;
  }
  \${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, \${(p) => p.theme.color['Neutral/Neutral 90']});
\`;

export const BadgeVariantsTemplate = () => {
  return (
    <>
      <Layout>
        <String>
          <Badge>5</Badge>
          <Badge dimension="s">5</Badge>
          Light
        </String>
        <String>
          <Badge appearance="info">5</Badge>
          <Badge appearance="info" dimension="s">
            5
          </Badge>
          Info
        </String>
        <String>
          <Badge appearance="warning">5</Badge>
          <Badge appearance="warning" dimension="s">
            5
          </Badge>
          Warning
        </String>
        <String>
          <Badge appearance="success">5</Badge>
          <Badge appearance="success" dimension="s">
            5
          </Badge>
          Success
        </String>
        <String>
          <Badge appearance="error">5</Badge>
          <Badge appearance="error" dimension="s">
            5
          </Badge>
          Error
        </String>
        <String>
          <Badge appearance="grey">5</Badge>
          <Badge appearance="grey" dimension="s">
            5
          </Badge>
          Grey
        </String>
        <String>
          <Badge appearance="dark">5</Badge>
          <Badge appearance="dark" dimension="s">
            5
          </Badge>
          Dark
        </String>
        <String>
          <Badge appearance="lightInactive">5</Badge>
          <Badge appearance="lightInactive" dimension="s">
            5
          </Badge>
          Light Inactive
        </String>
        <String>
          <Badge appearance="lightDisable">5</Badge>
          <Badge appearance="lightDisable" dimension="s">
            5
          </Badge>
          Light Disable
        </String>
        <String $appearance="white">
          <Badge appearance="white">5</Badge>
          <Badge appearance="white" dimension="s">
            5
          </Badge>
          White
        </String>
        <String $appearance="whiteInactive">
          <Badge appearance="whiteInactive">5</Badge>
          <Badge appearance="whiteInactive" dimension="s">
            5
          </Badge>
          White Inactive
        </String>
        <String $appearance="whiteDisable">
          <Badge appearance="whiteDisable">5</Badge>
          <Badge appearance="whiteDisable" dimension="s">
            5
          </Badge>
          White Disable
        </String>
        <String $appearance="whiteBlue">
          <Badge appearance="whiteBlue">5</Badge>
          <Badge appearance="whiteBlue" dimension="s">
            5
          </Badge>
          White Blue
        </String>
      </Layout>
    </>
  );
};
`,BadgeAccessability_templateraw_namespaceObject=`import * as React from 'react';
import { Badge, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const String = styled.div\`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 16px;
  }
\`;
const Separator = styled.div<{ $height?: number }>\`
  height: \${(p) => p.$height || 20}px;
  width: 8px;
\`;

export const BadgeAccessabilityTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        При фокусе на компоненте, включающем в себя компонент Badge, осуществляется следующая озвучка: "Количество {'<'}
        число, указанное в Badge{'>'}". При желании текст озвучки можно поменять с помощью атрибута aria-label, как это
        сделано во второй кнопке.
      </T>
      <Separator $height={24} />
      <String>
        <Button>
          Пример
          <Separator />
          <Badge appearance="whiteInactive">4</Badge>
        </Button>
        <Button>
          Example
          <Separator />
          <Badge appearance="whiteInactive" aria-label="Amount 4">
            4
          </Badge>
        </Button>
      </String>
    </>
  );
};
`;function Badge_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Badge_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){Badge_stories_define_property(target,key,source[key])})}return target}function Badge_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Badge_stories_templateObject(){var data=Badge_stories_tagged_template_literal([`
  height: 20px;
  width: 8px;
`]);return Badge_stories_templateObject=function _templateObject(){return data},data}function Badge_stories_templateObject1(){var data=Badge_stories_tagged_template_literal([`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`]);return Badge_stories_templateObject1=function _templateObject(){return data},data}var Badge_stories_Separator=styled_components_browser_esm.Ay.div(Badge_stories_templateObject()),Desc=styled_components_browser_esm.Ay.div(Badge_stories_templateObject1());let Badge_stories={title:"Admiral-2.1/Badge",decorators:void 0,component:Badge.Ex,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(function(){return(0,jsx_runtime.jsxs)(Desc,{children:["Badge — компонент, который обычно дополняет другие компоненты и показывает количественные значения. Например, в компоненте Tabs может показывать количество элементов в закладке. Или показывать количество оповещений в панели нотификации.",(0,jsx_runtime.jsx)(Badge_stories_Separator,{}),"Компонент существует в двух размерах — S 16 и M 20 px по высоте."]})},{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18581"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18684"}]},argTypes:{dimension:{options:["m","s"],control:{type:"radio"}},appearance:{options:["light","info","warning","success","error","grey","dark","lightInactive","lightDisable","white","whiteInactive","whiteDisable","whiteBlue"],control:{type:"select"}},theme:{control:!1},ref:{control:!1}}};var PlaygroundExample={render:function(props){return(0,jsx_runtime.jsx)(BadgePlaygroundTemplate,Badge_stories_object_spread({},props))},parameters:{docs:{source:{code:BadgePlayground_templateraw_namespaceObject}}},name:"Playground"},VariantsExample={render:function(){return(0,jsx_runtime.jsx)(BadgeVariantsTemplate,{})},parameters:{docs:{source:{code:BadgeVariants_templateraw_namespaceObject}}},name:"Badge. Варианты использования."},AccessabilityExample={render:function(){return(0,jsx_runtime.jsx)(BadgeAccessabilityTemplate,{})},parameters:{docs:{source:{code:BadgeAccessability_templateraw_namespaceObject}}},name:"Badge. Accessability."};PlaygroundExample.parameters={...PlaygroundExample.parameters,docs:{...PlaygroundExample.parameters?.docs,source:{originalSource:`{
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: BadgePlaygroundRaw
      }
    }
  },
  name: 'Playground'
}`,...PlaygroundExample.parameters?.docs?.source}}},VariantsExample.parameters={...VariantsExample.parameters,docs:{...VariantsExample.parameters?.docs,source:{originalSource:`{
  render: VariantsStory,
  parameters: {
    docs: {
      source: {
        code: BadgeVariantsRaw
      }
    }
  },
  name: 'Badge. Варианты использования.'
}`,...VariantsExample.parameters?.docs?.source}}},AccessabilityExample.parameters={...AccessabilityExample.parameters,docs:{...AccessabilityExample.parameters?.docs,source:{originalSource:`{
  render: AccessabilityStory,
  parameters: {
    docs: {
      source: {
        code: BadgeAccessabilityRaw
      }
    }
  },
  name: 'Badge. Accessability.'
}`,...AccessabilityExample.parameters?.docs?.source}}};let __namedExportsOrder=["PlaygroundExample","VariantsExample","AccessabilityExample"]},"./src/components/T/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>T});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/themes/common/index.ts"),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/skeleton/animation.tsx"),_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/fixedForwardRef.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`;
  pointer-events: none;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: `,`;
  `,`;
  `,`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.AH)(_templateObject(),_src_components_skeleton_animation__WEBPACK_IMPORTED_MODULE_2__.h),Tspan=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.span(_templateObject1(),function(param){var $color=param.$color,theme=param.theme,$skeleton=param.$skeleton,cssVar="--admiral-color-".concat(null==$color?void 0:$color.replace("/","_").replaceAll(" ",""));return $skeleton?"transparent":$color?theme.color[$color]?"var(".concat(cssVar,", ").concat(theme.color[$color],")"):$color:"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color[_src_components_themes__WEBPACK_IMPORTED_MODULE_3__.jn],")")},function(p){return p.theme.typography[p.$font]},function(p){return p.$cssMixin?p.$cssMixin:""},function(p){return p.$skeleton&&skeletonMixin}),T=(0,_common_fixedForwardRef__WEBPACK_IMPORTED_MODULE_4__.B)(function(_param,ref){var font=_param.font,color=_param.color,cssMixin=_param.cssMixin,skeleton=_param.skeleton,props=_object_without_properties(_param,["font","color","cssMixin","skeleton"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tspan,_object_spread_props(_object_spread({ref:ref},props),{$font:font,$color:color,$cssMixin:cssMixin,$skeleton:skeleton}))});T.displayName="T";try{T.displayName="T",T.__docgenInfo={description:"",displayName:"T",props:{font:{defaultValue:null,description:"Имя шрифта из списка дизайн системы",name:"font",required:!0,type:{name:"enum",value:[{value:'"Main/XXL"'},{value:'"Main/XL"'},{value:'"Main/L"'},{value:'"Main/M"'},{value:'"Main/S"'},{value:'"Main/XS-bold"'},{value:'"Main/XS"'},{value:'"Additional/L-bold"'},{value:'"Additional/L"'},{value:'"Additional/M"'},{value:'"Additional/S"'},{value:'"Additional/S-bold"'},{value:'"Additional/XS"'},{value:'"Button/M"'},{value:'"Button/S"'},{value:'"Caption/XS"'},{value:'"Header/HL1"'},{value:'"Header/HL2"'},{value:'"Header/HL3"'},{value:'"Header/H1"'},{value:'"Header/H2"'},{value:'"Header/H3"'},{value:'"Header/H4"'},{value:'"Header/H5"'},{value:'"Header/H6"'},{value:'"Subtitle/Subtitle 1"'},{value:'"Subtitle/Subtitle 2"'},{value:'"Subtitle/Subtitle 3"'},{value:'"Body/Body 1 Long"'},{value:'"Body/Body 1 Short"'},{value:'"Body/Body 2 Long"'},{value:'"Body/Body 2 Short"'},{value:'"Button/Button 1"'},{value:'"Button/Button 2"'},{value:'"Caption/Caption 1"'},{value:'"Caption/Caption 2"'}]}},color:{defaultValue:null,description:"Имя цвета шрифта из палитры темы *",name:"color",required:!1,type:{name:"enum",value:[{value:'"Special/Static White"'},{value:'"Neutral/Neutral 50"'},{value:'"Primary/Primary 70"'},{value:'"Neutral/Neutral 30"'},{value:'"Neutral/Neutral 40"'},{value:'"Error/Error 60 Main"'},{value:'"Success/Success 50 Main"'},{value:'"Primary/Primary 60 Main"'},{value:'"Neutral/Neutral 60"'},{value:'"Error/Error 70"'},{value:'"Success/Success 60"'},{value:'"Neutral/Neutral 00"'},{value:'"Neutral/Neutral 10"'},{value:'"Neutral/Neutral 20"'},{value:'"Neutral/Neutral 05"'},{value:'"Neutral/Neutral 70"'},{value:'"Neutral/Neutral 80"'},{value:'"Neutral/Neutral 90"'},{value:'"Primary/Primary 10"'},{value:'"Primary/Primary 20"'},{value:'"Primary/Primary 30"'},{value:'"Primary/Primary 40"'},{value:'"Primary/Primary 50"'},{value:'"Primary/Primary 80"'},{value:'"Special/Elevated BG"'},{value:'"Special/Dark Static Neutral 00"'},{value:'"Special/Dark Static Neutral 05"'},{value:'"Special/Dark Static Neutral 10"'},{value:'"Special/Dark Static Neutral 20"'},{value:'"Special/Dark Static Neutral 30"'},{value:'"Special/Dark Static Neutral 50"'},{value:'"Special/Dark Static Neutral 70"'},{value:'"Special/Dark Static Neutral 80"'},{value:'"Special/Dark Static Neutral 90"'},{value:'"Special/Dark Static Primary 60"'},{value:'"Special/Dark Static Primary 70"'},{value:'"Special/Dark Static Primary 80"'},{value:'"Special/Dark Static Error 60"'},{value:'"Special/Dark Static Success 50"'},{value:'"Opacity/Hover"'},{value:'"Opacity/Focus"'},{value:'"Opacity/Press"'},{value:'"Opacity/Modal"'},{value:'"Opacity/Dark Static Hover"'},{value:'"Opacity/Dark Static Focus"'},{value:'"Opacity/Dark Static Press"'},{value:'"Opacity/Neutral 4"'},{value:'"Opacity/Neutral 8"'},{value:'"Opacity/Neutral 12"'},{value:'"Opacity/Neutral 16"'},{value:'"Error/Error 10"'},{value:'"Error/Error 20"'},{value:'"Error/Error 30"'},{value:'"Error/Error 40"'},{value:'"Error/Error 50"'},{value:'"Error/Error 80"'},{value:'"Success/Success 10"'},{value:'"Success/Success 20"'},{value:'"Success/Success 30"'},{value:'"Success/Success 40"'},{value:'"Success/Success 70"'},{value:'"Warning/Warning 10"'},{value:'"Warning/Warning 20"'},{value:'"Warning/Warning 30"'},{value:'"Warning/Warning 40"'},{value:'"Warning/Warning 50 Main"'},{value:'"Warning/Warning 60"'},{value:'"Warning/Warning 70"'},{value:'"Attention/Attention 10"'},{value:'"Attention/Attention 20"'},{value:'"Attention/Attention 30"'},{value:'"Attention/Attention 40"'},{value:'"Attention/Attention 50 Main"'},{value:'"Attention/Attention 60"'},{value:'"Attention/Attention 70"'},{value:'"Purple/Purple 10"'},{value:'"Purple/Purple 20"'},{value:'"Purple/Purple 30"'},{value:'"Purple/Purple 40"'},{value:'"Purple/Purple 50"'},{value:'"Purple/Purple 60 Main"'},{value:'"Purple/Purple 70"'},{value:'"Purple/Purple 80"'},{value:'"Magenta/Magenta 10"'},{value:'"Magenta/Magenta 20"'},{value:'"Magenta/Magenta 30"'},{value:'"Magenta/Magenta 40"'},{value:'"Magenta/Magenta 50"'},{value:'"Magenta/Magenta 60 Main"'},{value:'"Magenta/Magenta 70"'},{value:'"Magenta/Magenta 80"'},{value:'"Cyan/Cyan 10"'},{value:'"Cyan/Cyan 20"'},{value:'"Cyan/Cyan 30"'},{value:'"Cyan/Cyan 40"'},{value:'"Cyan/Cyan 50"'},{value:'"Cyan/Cyan 60 Main"'},{value:'"Cyan/Cyan 70"'},{value:'"Cyan/Cyan 80"'},{value:'"Teal/Teal 10"'},{value:'"Teal/Teal 20"'},{value:'"Teal/Teal 30"'},{value:'"Teal/Teal 40"'},{value:'"Teal/Teal 50"'},{value:'"Teal/Teal 60 Main"'},{value:'"Teal/Teal 70"'},{value:'"Teal/Teal 80"'}]}},cssMixin:{defaultValue:null,description:"Позволяет добавлять  миксин созданный с помощью styled css",name:"cssMixin",required:!1,type:{name:"RuleSet<object>"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/T/index.tsx#T"]={docgenInfo:T.__docgenInfo,name:"T",path:"src/components/T/index.tsx#T"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});var ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}},"./src/components/themes/common/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gz:()=>DefaultBackgroundColorName,jn:()=>DefaultFontColorName,yL:()=>MainPrimaryColorName});var DefaultFontColorName="Neutral/Neutral 90",DefaultBackgroundColorName="Neutral/Neutral 00",MainPrimaryColorName="Primary/Primary 60 Main"}}]);
//# sourceMappingURL=components-Badge-stories-Badge-stories.a203b526.iframe.bundle.js.map