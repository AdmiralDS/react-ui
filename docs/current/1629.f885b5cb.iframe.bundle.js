"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[1629],{"./src/components/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$n:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),SpinnerIcon=__webpack_require__("./src/components/Spinner/SpinnerIcon.tsx");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  background-color: var(--admiral-color-Primary_Primary60Main, `,`);
  color: var(--admiral-color-Special_StaticWhite, `,`);
  border: 1px solid var(--admiral-color-Primary_Primary60Main, `,`);
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, `,`);
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, `,`);
    border-color: var(--admiral-color-Primary_Primary70, `,`);
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, `,`);
    border-color: var(--admiral-color-Primary_Primary80, `,`);
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}var primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Primary/Primary 80"]},function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 30"]});function secondaryAppearanceMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function secondaryAppearanceMixin_templateObject(){var data=secondaryAppearanceMixin_tagged_template_literal([`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, `,`);
  border: 1px solid var(--admiral-color-Primary_Primary60Main, `,`);

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, `,`);
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, `,`);
    color: var(--admiral-color-Primary_Primary60Main, `,`);
    border-color: var(--admiral-color-Primary_Primary60Main, `,`);
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, `,`);
    color: var(--admiral-color-Primary_Primary60Main, `,`);
    border-color: var(--admiral-color-Primary_Primary60Main, `,`);
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, `,`);
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return secondaryAppearanceMixin_templateObject=function _templateObject(){return data},data}var secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(secondaryAppearanceMixin_templateObject(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Opacity/Press"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]});function tertiaryAppearanceMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function tertiaryAppearanceMixin_templateObject(){var data=tertiaryAppearanceMixin_tagged_template_literal([`
  background-color: var(--admiral-color-Opacity_Neutral8, `,`);
  color: var(--admiral-color-Neutral_Neutral90, `,`);
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, `,`);
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, `,`);
    color: var(--admiral-color-Neutral_Neutral90, `,`);
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, `,`);
    color: var(--admiral-color-Neutral_Neutral90, `,`);
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, `,`);
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, `,`);
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return tertiaryAppearanceMixin_templateObject=function _templateObject(){return data},data}var tertiaryAppearanceMixin=(0,styled_components_browser_esm.AH)(tertiaryAppearanceMixin_templateObject(),function(p){return p.theme.color["Opacity/Neutral 8"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Opacity/Neutral 12"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Opacity/Neutral 16"]},function(p){return p.theme.color["Neutral/Neutral 90"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Opacity/Neutral 8"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]});function ghostAppearanceMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ghostAppearanceMixin_templateObject(){var data=ghostAppearanceMixin_tagged_template_literal([`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, `,`);
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, `,`);
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, `,`);
    color: var(--admiral-color-Primary_Primary60Main, `,`);
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, `,`);
    color: var(--admiral-color-Primary_Primary60Main, `,`);
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, `,`);
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return ghostAppearanceMixin_templateObject=function _templateObject(){return data},data}var ghostAppearanceMixin=(0,styled_components_browser_esm.AH)(ghostAppearanceMixin_templateObject(),function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Opacity/Hover"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Opacity/Press"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 30"]});function whiteAppearanceMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function whiteAppearanceMixin_templateObject(){var data=whiteAppearanceMixin_tagged_template_literal([`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, `,`);
  border: 1px solid var(--admiral-color-Special_StaticWhite, `,`);
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, `,`);
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      `,`
    );
    color: var(--admiral-color-Special_StaticWhite, `,`);
    border-color: var(--admiral-color-Special_StaticWhite, `,`);
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, `,`);
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      `,`
    );
    color: var(--admiral-color-Special_StaticWhite, `,`);
    border-color: var(--admiral-color-Special_StaticWhite, `,`);
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, `,`);
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      `,`
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, `,`);
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, `,`);
    }
  }
`]);return whiteAppearanceMixin_templateObject=function _templateObject(){return data},data}var whiteAppearanceMixin=(0,styled_components_browser_esm.AH)(whiteAppearanceMixin_templateObject(),function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Opacity/Dark Static Hover"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Opacity/Dark Static Press"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Special/Dark Static Neutral 30"]},function(p){return p.theme.color["Special/Dark Static Neutral 30"]},function(p){return p.theme.color["Special/Dark Static Neutral 30"]});function dangerAppearanceMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function dangerAppearanceMixin_templateObject(){var data=dangerAppearanceMixin_tagged_template_literal([`
  background-color: var(--admiral-color-Error_Error60Main, `,`);
  color: var(--admiral-color-Special_StaticWhite, `,`);
  border: 1px solid var(--admiral-color-Error_Error60Main, `,`);
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, `,`);
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, `,`);
    border-color: var(--admiral-color-Error_Error70, `,`);
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, `,`);
    border-color: var(--admiral-color-Error_Error80, `,`);
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return dangerAppearanceMixin_templateObject=function _templateObject(){return data},data}var dangerAppearanceMixin=(0,styled_components_browser_esm.AH)(dangerAppearanceMixin_templateObject(),function(p){return p.theme.color["Error/Error 60 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Error/Error 60 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Error/Error 70"]},function(p){return p.theme.color["Error/Error 70"]},function(p){return p.theme.color["Error/Error 80"]},function(p){return p.theme.color["Error/Error 80"]},function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 30"]});function successAppearanceMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function successAppearanceMixin_templateObject(){var data=successAppearanceMixin_tagged_template_literal([`
  background-color: var(--admiral-color-Success_Success50Main, `,`);
  color: var(--admiral-color-Special_StaticWhite, `,`);
  border: 1px solid var(--admiral-color-Success_Success50Main, `,`);

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, `,`);
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, `,`);
    border-color: var(--admiral-color-Success_Success60, `,`);
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, `,`);
    border-color: var(--admiral-color-Success_Success70, `,`);
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, `,`);
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    border-color: var(--admiral-color-Neutral_Neutral10, `,`);
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
`]);return successAppearanceMixin_templateObject=function _templateObject(){return data},data}var successAppearanceMixin=(0,styled_components_browser_esm.AH)(successAppearanceMixin_templateObject(),function(p){return p.theme.color["Success/Success 50 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Success/Success 50 Main"]},function(p){return p.theme.color["Special/Static White"]},function(p){return p.theme.color["Success/Success 60"]},function(p){return p.theme.color["Success/Success 60"]},function(p){return p.theme.color["Success/Success 70"]},function(p){return p.theme.color["Success/Success 70"]},function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 30"]},function(p){return p.theme.color["Neutral/Neutral 10"]},function(p){return p.theme.color["Neutral/Neutral 30"]});function focusVisibleStyle_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function focusVisibleStyle_templateObject(){var data=focusVisibleStyle_tagged_template_literal([`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }
`]);return focusVisibleStyle_templateObject=function _templateObject(){return data},data}var focusVisibleStyle=(0,styled_components_browser_esm.AH)(focusVisibleStyle_templateObject(),function(p){return p.theme.color["Primary/Primary 60 Main"]});function appearanceMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function appearanceMixin_templateObject(){var data=appearanceMixin_tagged_template_literal([`
  &[data-appearance~='primary']:not(.button-group > button) {
    `,`
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    `,`
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    `,`
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    `,`
  }
  &[data-appearance~='white']:not(.button-group > button) {
    `,`
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    `,`
  }
  &[data-appearance~='success']:not(.button-group > button) {
    `,`
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    `,`
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    `,`
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    `,`
  }

  `,`
`]);return appearanceMixin_templateObject=function _templateObject(){return data},data}var appearanceMixin=(0,styled_components_browser_esm.AH)(appearanceMixin_templateObject(),primaryAppearanceMixin,secondaryAppearanceMixin,tertiaryAppearanceMixin,ghostAppearanceMixin,whiteAppearanceMixin,dangerAppearanceMixin,successAppearanceMixin,primaryAppearanceMixin,secondaryAppearanceMixin,tertiaryAppearanceMixin,focusVisibleStyle),typography=__webpack_require__("./src/components/Typography/typography.ts");function dimensionMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function dimensionMixin_templateObject(){var data=dimensionMixin_tagged_template_literal([""]);return dimensionMixin_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=dimensionMixin_tagged_template_literal([`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    `,`
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    `,`
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    `,`
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    `,`
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=dimensionMixin_tagged_template_literal([`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    `,`
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    `,`
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    `,`
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    `,`
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=dimensionMixin_tagged_template_literal([`
  padding: 0;
  height: 56px;
  `,`
  `,` {
    width: 24px;
    height: 24px;
  }

  `,`
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=dimensionMixin_tagged_template_literal([`
  `,`

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    `,`
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    `,`
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    `,`
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    `,`
    `,` {
      width: 20px;
      height: 20px;
    }
    `,`
  }
`]);return _templateObject4=function _templateObject(){return data},data}var dimensionMixin_ButtonIconContainer=styled_components_browser_esm.Ay.div(dimensionMixin_templateObject());function getHorizontalIconPadding(dimension){switch(dimension){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}(0,styled_components_browser_esm.AH)(_templateObject1(),function(props){return!props.$displayAsSquare&&"padding-left: ".concat(getHorizontalIconPadding("xl"),"px;")},function(props){return!props.$displayAsSquare&&"padding-left: ".concat(getHorizontalIconPadding("l"),"px;")},function(props){return!props.$displayAsSquare&&"padding-left: ".concat(getHorizontalIconPadding("m"),"px;")},function(props){return!props.$displayAsSquare&&"padding-left: ".concat(getHorizontalIconPadding("s"),"px;")}),(0,styled_components_browser_esm.AH)(_templateObject2(),function(props){return!props.$displayAsSquare&&"padding-right: ".concat(getHorizontalIconPadding("xl"),"px;")},function(props){return!props.$displayAsSquare&&"padding-right: ".concat(getHorizontalIconPadding("l"),"px;")},function(props){return!props.$displayAsSquare&&"padding-right: ".concat(getHorizontalIconPadding("m"),"px;")},function(props){return!props.$displayAsSquare&&"padding-right: ".concat(getHorizontalIconPadding("s"),"px;")});var defaultDimensionMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),function(props){return props.$displayAsSquare?"width: 56px;":"padding: 0 29px;"},dimensionMixin_ButtonIconContainer,typography.Il["Button/Button 1"]),dimensionMixin=(0,styled_components_browser_esm.AH)(_templateObject4(),defaultDimensionMixin,defaultDimensionMixin,function(props){return props.$displayAsSquare?"width: 48px;":"padding: 0 21px;"},function(props){return props.$displayAsSquare?"width: 40px;":"padding: 0 17px;"},function(props){return props.$displayAsSquare?"width: 32px;":"padding: 0 13px;"},dimensionMixin_ButtonIconContainer,typography.Il["Button/Button 2"]),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),animation=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Button_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Button_templateObject(){var data=Button_tagged_template_literal([`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - `,`px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > `,` {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`]);return Button_templateObject=function _templateObject(){return data},data}function Button_templateObject1(){var data=Button_tagged_template_literal([`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: `,`;
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: `,`;
    }
  }
`]);return Button_templateObject1=function _templateObject(){return data},data}function Button_templateObject2(){var data=Button_tagged_template_literal([`
  display: inline-block;
  width: 2px;
`]);return Button_templateObject2=function _templateObject(){return data},data}function Button_templateObject3(){var data=Button_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: `,`;
  appearance: none;
  vertical-align: middle;
  cursor: `,`;
  `,`;

  `,`;
  `,`;
  `,`;
  `,`;

  `,` {
    `,`
  }
`]);return Button_templateObject3=function _templateObject(){return data},data}var ButtonContent=styled_components_browser_esm.Ay.div(Button_templateObject(),function(p){return p.$addPadding},dimensionMixin_ButtonIconContainer),SpinnerContainer=(0,styled_components_browser_esm.Ay)(dimensionMixin_ButtonIconContainer)(Button_templateObject1(),function(p){return"var(--admiral-color-Special_StaticWhite, ".concat(p.theme.color["Special/Static White"],")")},function(p){return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")")}),AdditionalPadding=styled_components_browser_esm.Ay.div(Button_templateObject2()),Button=(0,react.forwardRef)(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_dimension=_param.dimension,_param_type=_param.type,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,iconStart=_param.iconStart,iconEnd=_param.iconEnd,icon=_param.icon,_param_iconPlace=_param.iconPlace,iconPlace=void 0===_param_iconPlace?"left":_param_iconPlace,children=_param.children,buttonCssMixin=_param.buttonCssMixin,displayAsDisabled=_param.displayAsDisabled,displayAsSquare=_param.displayAsSquare,props=_object_without_properties(_param,["appearance","dimension","type","loading","skeleton","iconStart","iconEnd","icon","iconPlace","children","buttonCssMixin","displayAsDisabled","displayAsSquare"]),hasIconStart=!!iconStart||!!icon&&"left"===iconPlace,hasIconEnd=!!iconEnd||!!icon&&"right"===iconPlace;return(0,jsx_runtime.jsxs)(StyledButton,_object_spread_props(_object_spread({ref:ref,$appearance:appearance,$dimension:void 0===_param_dimension?"xl":_param_dimension,type:void 0===_param_type?"button":_param_type,$loading:loading,$skeleton:void 0!==_param_skeleton&&_param_skeleton,$buttonCssMixin:buttonCssMixin,$displayAsSquare:displayAsSquare,$displayAsDisabled:displayAsDisabled},props),{children:[loading&&(0,jsx_runtime.jsx)(SpinnerContainer,{children:(0,jsx_runtime.jsx)(SpinnerIcon.N,{$inverse:"secondary"!==appearance&&"tertiary"!==appearance&&"ghost"!==appearance})}),!displayAsSquare&&!hasIconStart&&(0,jsx_runtime.jsx)(AdditionalPadding,{}),(0,jsx_runtime.jsxs)(ButtonContent,{$addPadding:2*(!displayAsSquare&&!hasIconStart)+2*(!displayAsSquare&&!hasIconEnd),children:[hasIconStart?(0,jsx_runtime.jsx)(dimensionMixin_ButtonIconContainer,{children:iconStart||icon}):null,react.Children.toArray(children).map(function(child,index){return"string"==typeof child?(0,jsx_runtime.jsx)("div",{children:child},child+index):child}),hasIconEnd?(0,jsx_runtime.jsx)(dimensionMixin_ButtonIconContainer,{children:iconEnd||icon}):null]}),!displayAsSquare&&!hasIconEnd&&(0,jsx_runtime.jsx)(AdditionalPadding,{})]}))}),StyledButton=styled_components_browser_esm.Ay.button.attrs(function(props){return{"data-dimension":props.$dimension,"data-appearance":[props.$appearance,props.$displayAsDisabled?"disabled":void 0].filter(function(val){return void 0!==val}).join(" ")}})(Button_templateObject3(),function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,borderRadius.VM)(p.theme.shape),")")},function(p){return p.disabled?"not-allowed":"pointer"},function(p){return(p.$loading||p.$skeleton)&&"pointer-events: none"},appearanceMixin,dimensionMixin,function(p){return p.$buttonCssMixin},function(param){return param.$skeleton&&animation.h},ButtonContent,function(p){return p.$loading||p.$skeleton?"visibility: hidden;":""});Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"white"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'},{value:'"danger"'}]}},dimension:{defaultValue:{value:"xl"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'}]}},displayAsDisabled:{defaultValue:null,description:"Оставаясь активной для нажатия, кнопка отображается в заблокированном стиле",name:"displayAsDisabled",required:!1,type:{name:"boolean"}},displayAsSquare:{defaultValue:null,description:"Отображать кнопку квадратной",name:"displayAsSquare",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние скелетона",name:"skeleton",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},iconPlace:{defaultValue:{value:"left"},description:`@deprecated Помечено как deprecated в версии 5.2.0, будет удалено в 9.x.x версии.
Взамен используйте iconStart или iconEnd

Расположение иконки кнопки`,name:"iconPlace",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},buttonCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для кнопок, созданный с помощью styled css",name:"buttonCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}try{ButtonIconContainer.displayName="ButtonIconContainer",ButtonIconContainer.__docgenInfo={description:"",displayName:"ButtonIconContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#ButtonIconContainer"]={docgenInfo:ButtonIconContainer.__docgenInfo,name:"ButtonIconContainer",path:"src/components/Button/index.tsx#ButtonIconContainer"})}catch(__react_docgen_typescript_loader_error){}}}]);