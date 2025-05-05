"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8259],{"./src/components/Toggle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Toggle});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
  border-radius: `,`;
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: `,`;
  height: `,`;
  border-radius: `,`;
`]);return _templateObject2=function _templateObject(){return data},data}var SLIDER_SIZE_M="16px",SLIDER_SIZE_S="12px",HOVER_SIZE_M="36px",HOVER_SIZE_S="32px",sizes=(0,styled_components_browser_esm.AH)(_templateObject(),function(param){return"s"===param.$dimension?"28px":"36px"},function(param){return"s"===param.$dimension?"16px":"20px"}),sliderSizes=(0,styled_components_browser_esm.AH)(_templateObject1(),function(param){return"s"===param.$dimension?SLIDER_SIZE_S:SLIDER_SIZE_M},function(param){return"s"===param.$dimension?SLIDER_SIZE_S:SLIDER_SIZE_M},function(param){return"s"===param.$dimension?SLIDER_SIZE_S:SLIDER_SIZE_M}),hoverSizes=(0,styled_components_browser_esm.AH)(_templateObject2(),function(param){return"s"===param.$dimension?HOVER_SIZE_S:HOVER_SIZE_M},function(param){return"s"===param.$dimension?HOVER_SIZE_S:HOVER_SIZE_M},function(param){return"s"===param.$dimension?HOVER_SIZE_S:HOVER_SIZE_M}),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Toggle_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Toggle_templateObject(){var data=Toggle_tagged_template_literal([`
  & + div > div {
    `,`
  }
`]);return Toggle_templateObject=function _templateObject(){return data},data}function Toggle_templateObject1(){var data=Toggle_tagged_template_literal([`
  position: absolute;
  cursor: `,`;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  opacity: 0;

  &:disabled {
    cursor: not-allowed;
  }

  &:checked {
    & + div > span {
      &:before {
        `,`
      }

      background: `,`;
    }

    &:disabled + div > span {
      background: var(--admiral-color-Primary_Primary30, `,`);
    }

    `,`;
  }

  &:not(:disabled) {
    &:focus-visible + div > span {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
    }

    &:hover {
      & + div > div {
        `,`;
      }
      &:focus-visible + div > span {
        outline: none;
      }
    }
    &:active {
      & + div > div {
        `,`;
        background: var(--admiral-color-Opacity_Press, `,`);
      }
    }
  }
`]);return Toggle_templateObject1=function _templateObject(){return data},data}function Toggle_templateObject2(){var data=Toggle_tagged_template_literal([`
  display: flex;
  flex-direction: column;
  `,`
  `,`
  color: `,`;
`]);return Toggle_templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=Toggle_tagged_template_literal([`
  margin-top: 4px;
  `,`
  color: `,`;
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=Toggle_tagged_template_literal([`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: `,`;
  flex-shrink: 0;
  `,`

  &:before {
    content: '';
    position: absolute;
    top: `,`px;
    left: `,`px;
    background: var(--admiral-color-Special_StaticWhite, `,`);
    transition: all 0.3s;
    `,`
  }

  background: `,`;
`]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=Toggle_tagged_template_literal([`
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  top: `,`;
  left: `,`;
  background: var(--admiral-color-Opacity_Hover, `,`);
  `,`
`]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=Toggle_tagged_template_literal([`
  pointer-events: none;
  position: relative;
  flex-shrink: 0;
  `,`
`]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=Toggle_tagged_template_literal([`
  display: flex;
  flex-direction: `,`;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  width: `,`;
  cursor: `,`;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  `,`;
`]);return _templateObject7=function _templateObject(){return data},data}var HOVER_INDENT="-8px",hoverInputStyles=(0,styled_components_browser_esm.AH)(Toggle_templateObject(),function(param){var $dimension=param.$dimension;return"left: calc(".concat("m"===$dimension?SLIDER_SIZE_M:SLIDER_SIZE_S," + ").concat("-12px"," + ").concat(4,"px);")}),Input=styled_components_browser_esm.Ay.input(Toggle_templateObject1(),function(param){return param.readOnly?"default":"pointer"},function(param){var $dimension=param.$dimension;return"left: calc(".concat("m"===$dimension?SLIDER_SIZE_M:SLIDER_SIZE_S," + ").concat(2,"px);")},function(param){var theme=param.theme;return param.readOnly?"var(--admiral-color-Primary_Primary30, ".concat(theme.color["Primary/Primary 30"],")"):"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")")},function(p){return p.theme.color["Primary/Primary 30"]},hoverInputStyles,function(p){return p.theme.color["Primary/Primary 60 Main"]},function(param){return!param.readOnly&&"visibility: visible"},function(param){return!param.readOnly&&"visibility: visible"},function(p){return p.theme.color["Opacity/Press"]}),Label=styled_components_browser_esm.Ay.div(Toggle_templateObject2(),function(param){return"right"===param.$position?"margin-left: ".concat("8px",";"):"margin-right: ".concat("8px",";")},function(param){return"s"===param.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]},function(param){var disabled=param.disabled,theme=param.theme;return disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral90, ".concat(theme.color["Neutral/Neutral 90"],")")}),Hint=styled_components_browser_esm.Ay.div(_templateObject3(),function(param){return"s"===param.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]},function(param){var theme=param.theme;return param.disabled?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")}),Slider=styled_components_browser_esm.Ay.span(_templateObject4(),"10px",sizes,2,2,function(p){return p.theme.color["Special/Static White"]},sliderSizes,function(param){var theme=param.theme;return param.$faded?"var(--admiral-color-Neutral_Neutral30, ".concat(theme.color["Neutral/Neutral 30"],")"):"var(--admiral-color-Neutral_Neutral50, ".concat(theme.color["Neutral/Neutral 50"],")")}),Hover=styled_components_browser_esm.Ay.div(_templateObject5(),HOVER_INDENT,HOVER_INDENT,function(p){return p.theme.color["Opacity/Hover"]},hoverSizes),SliderWrapper=styled_components_browser_esm.Ay.div(_templateObject6(),sizes),Wrapper=styled_components_browser_esm.Ay.label(_templateObject7(),function(param){return"right"===param.$labelPosition?"row":"row-reverse"},function(param){var width=param.width;return width?"number"==typeof width?"".concat(width,"px"):width:"fit-content"},function(param){var disabled=param.disabled,readOnly=param.readOnly;return disabled?"not-allowed":readOnly?"default":"pointer"},function(param){return param.readOnly&&"pointer-events: none"}),Toggle=(0,react.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,_param_labelPosition=_param.labelPosition,labelPosition=void 0===_param_labelPosition?"right":_param_labelPosition,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_readOnly=_param.readOnly,readOnly=void 0!==_param_readOnly&&_param_readOnly,width=_param.width,extraText=_param.extraText,className=_param.className,children=_param.children,props=_object_without_properties(_param,["dimension","labelPosition","disabled","readOnly","width","extraText","className","children"]);return(0,jsx_runtime.jsxs)(Wrapper,{className:className,width:"left"===labelPosition?width:void 0,$labelPosition:labelPosition,disabled:disabled,readOnly:readOnly,role:"switch","aria-checked":props.checked||props["aria-checked"],children:[(0,jsx_runtime.jsx)(Input,_object_spread_props(_object_spread({ref:ref,type:"checkbox",$dimension:dimension,disabled:disabled,readOnly:readOnly},props),{onKeyDown:function(e){var _props_onKeyDown;readOnly&&keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault(),null==(_props_onKeyDown=props.onKeyDown)||_props_onKeyDown.call(props,e)}})),(0,jsx_runtime.jsxs)(SliderWrapper,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(Hover,{$dimension:dimension}),(0,jsx_runtime.jsx)(Slider,{$dimension:dimension,$faded:disabled||readOnly,"aria-hidden":!0})]}),children&&(0,jsx_runtime.jsxs)(Label,{$dimension:dimension,disabled:disabled,$position:labelPosition,children:[children,extraText&&(0,jsx_runtime.jsx)(Hint,{$dimension:dimension,disabled:disabled,children:extraText})]})]})});Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{labelPosition:{defaultValue:{value:"right"},description:"Расположение подписи",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение компонента",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:`Ширина компонента. Применяется только в случае labelPosition == 'left'.
Рекомендуется использовать в мобильной версии компонента, указывая ширину равную всему экрану`,name:"width",required:!1,type:{name:"string | number"}},extraText:{defaultValue:null,description:"Дополнительный текст (подсказка), выводится нижней строкой",name:"extraText",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/index.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/index.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/keyboardKey.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function isObject(val){return null!==val&&!Array.isArray(val)&&(void 0===val?"undefined":_type_of(val))==="object"}__webpack_require__.d(__webpack_exports__,{r:()=>keyboardKey});for(var codes={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"},i=0;i<24;i+=1)codes[112+i]="F"+(i+1);for(var j=0;j<26;j+=1){var n=j+65;codes[n]=[String.fromCharCode(n+32),String.fromCharCode(n)]}var keyboardKey={codes:codes,getCode:function getCode(eventOrKey){return isObject(eventOrKey)?eventOrKey.keyCode||eventOrKey.which||this[eventOrKey.key]:this[eventOrKey]},getKey:function getKey(eventOrCode){var isEvent=isObject(eventOrCode);if(isEvent&&eventOrCode.key)return eventOrCode.key;var name=codes[isEvent?eventOrCode.keyCode||eventOrCode.which:eventOrCode];return Array.isArray(name)&&(name=isEvent?name[+!!eventOrCode.shiftKey]:name[0]),name},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};keyboardKey.Spacebar=keyboardKey[" "],keyboardKey.Digit0=keyboardKey["0"],keyboardKey.Digit1=keyboardKey["1"],keyboardKey.Digit2=keyboardKey["2"],keyboardKey.Digit3=keyboardKey["3"],keyboardKey.Digit4=keyboardKey["4"],keyboardKey.Digit5=keyboardKey["5"],keyboardKey.Digit6=keyboardKey["6"],keyboardKey.Digit7=keyboardKey["7"],keyboardKey.Digit8=keyboardKey["8"],keyboardKey.Digit9=keyboardKey["9"],keyboardKey.Tilde=keyboardKey["~"],keyboardKey.GraveAccent=keyboardKey["`"],keyboardKey.ExclamationPoint=keyboardKey["!"],keyboardKey.AtSign=keyboardKey["@"],keyboardKey.PoundSign=keyboardKey["#"],keyboardKey.PercentSign=keyboardKey["%"],keyboardKey.Caret=keyboardKey["^"],keyboardKey.Ampersand=keyboardKey["&"],keyboardKey.PlusSign=keyboardKey["+"],keyboardKey.MinusSign=keyboardKey["-"],keyboardKey.EqualsSign=keyboardKey["="],keyboardKey.DivisionSign=keyboardKey["/"],keyboardKey.MultiplicationSign=keyboardKey["*"],keyboardKey.Comma=keyboardKey[","],keyboardKey.Decimal=keyboardKey["."],keyboardKey.Colon=keyboardKey[":"],keyboardKey.Semicolon=keyboardKey[";"],keyboardKey.Pipe=keyboardKey["|"],keyboardKey.BackSlash=keyboardKey["\\"],keyboardKey.QuestionMark=keyboardKey["?"],keyboardKey.SingleQuote=keyboardKey["'"],keyboardKey.DoubleQuote=keyboardKey['"'],keyboardKey.LeftCurlyBrace=keyboardKey["{"],keyboardKey.RightCurlyBrace=keyboardKey["}"],keyboardKey.LeftParenthesis=keyboardKey["("],keyboardKey.RightParenthesis=keyboardKey[")"],keyboardKey.LeftAngleBracket=keyboardKey["<"],keyboardKey.RightAngleBracket=keyboardKey[">"],keyboardKey.LeftSquareBracket=keyboardKey["["],keyboardKey.RightSquareBracket=keyboardKey["]"]}}]);