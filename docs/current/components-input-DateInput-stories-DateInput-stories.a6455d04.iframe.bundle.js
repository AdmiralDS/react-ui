(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[2600],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts"),getNumFromStr=function(str){return str.replace(/^\D+/g,"")};function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){var cssPropValueSmall="var(--admiral-border-kind-Small_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueMedium="var(--admiral-border-kind-Medium_".concat(getNumFromStr(borderRadiusKind),")"),cssPropValueLarge="var(--admiral-border-kind-Large_".concat(getNumFromStr(borderRadiusKind),")");document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeCloseOutline=function SvgEyeCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/EyeOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>SvgEyeOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgEyeOutline=function SvgEyeOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};__webpack_require__.p},"./node_modules/dayjs/dayjs.min.js":function(module){module.exports=function(){"use strict";var r="millisecond",i="second",s="minute",u="hour",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g="en",D={};D[g]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}};var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+m(Math.floor(n/60),2,"0")+":"+m(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:c,y:h,w:o,d:"day",D:d,h:u,m:s,s:i,ms:r,Q:f})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return this.$d.toString()!==l},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf("day")},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case"day":case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=((n={}).day=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$="day"===o?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if("day"===$)return y(1);if($===o)return y(7);var M=((d={})[s]=6e4,d[u]=36e5,d[i]=1e3,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*6e4,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case"day":$=(g-v)/864e5;break;case u:$=g/36e5;break;case s:$=g/6e4;break;case i:$=g/1e3;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W","day"],["$M",c],["$y",h],["$D",d]].forEach(function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}()},"./src/components/Divider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>Divider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  `,`
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  box-sizing: border-box;
  background: `,`;
  `,`;
  `,`;
`]);return _templateObject3=function _templateObject(){return data},data}var getBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject(),function(param){var theme=param.theme,$appearance=param.$appearance;switch($appearance){case"subtle":return"var(--admiral-color-Neutral_Neutral10, ".concat(theme.color["Neutral/Neutral 10"],")");case"strong":return"var(--admiral-color-Neutral_Neutral40, ".concat(theme.color["Neutral/Neutral 40"],")");case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(theme.color["Primary/Primary 60 Main"],")");case"staticWhite":return"var(--admiral-color-Special_StaticWhite, ".concat(theme.color["Special/Static White"],")");case"default":return"var(--admiral-color-Neutral_Neutral20, ".concat(theme.color["Neutral/Neutral 20"],")");default:return $appearance}});function getThicknessSize(dimension){return"s"===dimension?"1px":"2px"}var getThickness=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject1(),function(param){var $dimension=param.$dimension;return"horizontal"===param.$orientation?"height: ".concat(getThicknessSize($dimension)):"width: ".concat(getThicknessSize($dimension))}),getLength=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(_templateObject2(),function(param){var $length=param.$length;return"horizontal"===param.$orientation?"width: ".concat($length):"height: ".concat($length)}),StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject3(),getBackground,getThickness,getLength),Divider=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_dimension=_param.dimension,_param_appearance=_param.appearance,_param_orientation=_param.orientation,_param_length=_param.length,props=_object_without_properties(_param,["dimension","appearance","orientation","length"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledDiv,_object_spread_props(_object_spread({},props),{ref:ref,$dimension:void 0===_param_dimension?"m":_param_dimension,$appearance:void 0===_param_appearance?"default":_param_appearance,$orientation:void 0===_param_orientation?"horizontal":_param_orientation,$length:void 0===_param_length?"100%":_param_length}))});Divider.displayName="Divider";try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{dimension:{defaultValue:{value:"m"},description:"Размер компонента, определяет толщину разделителя",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},appearance:{defaultValue:{value:"default"},description:"Внешний вид компонента",name:"appearance",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"Ориентация компонента, по умолчанию горизонтальная",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},length:{defaultValue:{value:"100%"},description:"Длина компонента",name:"length",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/index.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/Divider/index.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>CloseIconPlacementButton,_:()=>IconPlacement});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _templateObject(){var data=_tagged_template_literal([`
  & *[fill^='#'] {
    fill: `,`;
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  `,`

  & > svg {
    height: `,`px;
    width: `,`px;
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  width: `,`px;
  height: `,`px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:focus {
    > `,` {
      background-color: `,`;
    }
  }
  &:hover {
    > `,` {
      background-color: var(--admiral-color-Opacity_Hover, `,`);
    }
  }
  &:active {
    > `,` {
      background-color: var(--admiral-color-Opacity_Press, `,`);
    }
  }
  &:focus-visible {
    > `,` {
      background-color: transparent;
    }
  }
`]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
  position: relative;
  padding: 0;
  margin: `,`px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: `,`px;
  width: `,`px;
  border-radius: var(--admiral-border-radius-Small, `,`);
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, `,`);
    }
  }
  &:not(:disabled) {
    `,`
  }
`]);return _templateObject4=function _templateObject(){return data},data}function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}var IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),function(p){switch(p.$iconColor){case"primary":return"var(--admiral-color-Primary_Primary60Main, ".concat(p.theme.color["Primary/Primary 60 Main"],")");case"secondary":return"var(--admiral-color-Neutral_Neutral50, ".concat(p.theme.color["Neutral/Neutral 50"],")");default:return p.$iconColor}}),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject1(),IconColor,function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)}),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2(),function(p){return getHighlighterSize(p.$dimension)},function(p){return getHighlighterSize(p.$dimension)}),eventsMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject3(),function(p){return p.theme.color["Primary/Primary 60 Main"]},ActivityHighlighter,function(p){return p.$highlightFocus?"var(--admiral-color-Opacity_Focus, ".concat(p.theme.color["Opacity/Focus"],")"):"transparent"},ActivityHighlighter,function(p){return p.theme.color["Opacity/Hover"]},ActivityHighlighter,function(p){return p.theme.color["Opacity/Press"]},ActivityHighlighter),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.button(_templateObject4(),function(p){return getHighlighterOffset(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return getIconSize(p.$dimension)},function(p){return(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.r2)(p.theme.shape)},function(p){return p.theme.color["Neutral/Neutral 30"]},eventsMixin),IconPlacement=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var _param_type=_param.type,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"lBig":_param_dimension,_param_disabled=_param.disabled,_param_highlightFocus=_param.highlightFocus,appearance=_param.appearance,children=_param.children,props=_object_without_properties(_param,["type","dimension","disabled","highlightFocus","appearance","children"]),iconColor=(void 0===appearance?"undefined":_type_of(appearance))==="object"?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IconPlacementButton,_object_spread_props(_object_spread({ref:ref,type:void 0===_param_type?"button":_param_type,$dimension:dimension,disabled:void 0!==_param_disabled&&_param_disabled,$highlightFocus:void 0===_param_highlightFocus||_param_highlightFocus},props),{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children:children})]}))}),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPlacement,_object_spread_props(_object_spread({ref:ref,className:"close-button ".concat(className||"")},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,{"aria-hidden":!0})}))});try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextButton/commonMixin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ef:()=>ButtonContainer,Tu:()=>IconContainer,vy:()=>skeletonMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([""]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([""]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  background-image:
    linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size:
    315px 250px,
    315px 180px,
    100px 100px,
    225px 30px;
  background-position:
    -315px 0,
    0 0,
    0 190px,
    50px 195px;
  animation: `,` 1.5s infinite;
`]);return _templateObject3=function _templateObject(){return data},data}var IconContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject()),ButtonContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.Ay.div(_templateObject1()),loadingKeyframes=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(_templateObject2()),skeletonMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3(),loadingKeyframes)},"./src/components/TextButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>TextButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Spinner=__webpack_require__("./src/components/Spinner/index.tsx"),commonMixin=__webpack_require__("./src/components/TextButton/commonMixin.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
  `,` {
    `,`;
    border-radius: `,`;
    svg {
      visibility: `,`;
    }
  }

  border-radius: `,`;

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, `,`) solid 2px;
  }

  &:hover {
    cursor: pointer;
    color: var(--admiral-color-Primary_Primary70, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary70, `,`);
        }
      }
    }
  }

  &:active {
    color: var(--admiral-color-Primary_Primary80, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Primary_Primary80, `,`);
        }
      }
    }
  }

  &:disabled {
    cursor: `,`;
    color: var(--admiral-color-Neutral_Neutral30, `,`);
    `,` {
      svg {
        path {
          fill: var(--admiral-color-Neutral_Neutral30, `,`);
        }
      }
    }
  }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Primary_Primary60Main, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Primary_Primary60Main, `,`);
      }
    }
  }
`]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
  color: var(--admiral-color-Neutral_Neutral90, `,`);

  `,` {
    svg {
      path {
        fill: var(--admiral-color-Neutral_Neutral50, `,`);
      }
    }
  }
`]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
  &[data-appearance='primary'] {
    `,`
  }
  &[data-appearance='secondary'] {
    `,`
  }

  `,`
`]);return _templateObject3=function _templateObject(){return data},data}var defaultAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject(),commonMixin.Tu,function(param){return param.$skeleton&&commonMixin.vy},function(param){return param.$skeleton?"50%":""},function(p){return p.$skeleton||p.$loading?"hidden":"visible"},function(p){return p.$skeleton?0:"var(--admiral-border-radius-Medium, ".concat((0,borderRadius.VM)(p.theme.shape),")")},function(p){return p.theme.color["Primary/Primary 60 Main"]},function(p){return p.theme.color["Primary/Primary 70"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 70"]},function(p){return p.theme.color["Primary/Primary 80"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 80"]},function(param){var $skeleton=param.$skeleton,$loading=param.$loading;return $skeleton||$loading?"default":"not-allowed"},function(p){return p.theme.color["Neutral/Neutral 30"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 30"]}),primaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject1(),function(p){return p.theme.color["Primary/Primary 60 Main"]},commonMixin.Tu,function(p){return p.theme.color["Primary/Primary 60 Main"]}),secondaryAppearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 90"]},commonMixin.Tu,function(p){return p.theme.color["Neutral/Neutral 50"]}),appearanceMixin=(0,styled_components_browser_esm.AH)(_templateObject3(),primaryAppearanceMixin,secondaryAppearanceMixin,defaultAppearanceMixin),typography=__webpack_require__("./src/components/Typography/typography.ts");function dimensionMixin_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function dimensionMixin_templateObject(){var data=dimensionMixin_tagged_template_literal([`
  &[data-dimension='m'] {
    `,` {
      width: 24px;
      height: 24px;
    }
    `,`;
  }

  &[data-dimension='s'] {
    `,` {
      width: 20px;
      height: 20px;
    }
    `,`;
  }
`]);return dimensionMixin_templateObject=function _templateObject(){return data},data}var dimensionMixin=(0,styled_components_browser_esm.AH)(dimensionMixin_templateObject(),commonMixin.Tu,typography.Il["Button/Button 1"],commonMixin.Tu,typography.Il["Button/Button 2"]),animation=__webpack_require__("./src/components/skeleton/animation.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function TextButton_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function TextButton_templateObject(){var data=TextButton_tagged_template_literal([`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`]);return TextButton_templateObject=function _templateObject(){return data},data}function TextButton_templateObject1(){var data=TextButton_tagged_template_literal([`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  vertical-align: middle;
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  white-space: nowrap;
  `,`;

  `,` {
    visibility: `,`;
  }

  `,` {
    visibility: `,`;
  }

  `,`;

  `,`;
`]);return TextButton_templateObject1=function _templateObject(){return data},data}var StyledSpinner=(0,styled_components_browser_esm.Ay)(Spinner.y)(TextButton_templateObject()),StyledButton=styled_components_browser_esm.Ay.button(TextButton_templateObject1(),function(p){return p.$skeleton&&animation.h},commonMixin.Ef,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},commonMixin.Tu,function(p){return p.$skeleton||p.$loading?"hidden":"visible"},appearanceMixin,dimensionMixin),TextButton=react.forwardRef(function(_param,ref){var _param_appearance=_param.appearance,appearance=void 0===_param_appearance?"primary":_param_appearance,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,icon=_param.icon,iconStart=_param.iconStart,iconEnd=_param.iconEnd,_param_type=_param.type,text=_param.text,_param_displayRight=_param.displayRight,displayRight=void 0!==_param_displayRight&&_param_displayRight,_param_loading=_param.loading,loading=void 0!==_param_loading&&_param_loading,_param_skeleton=_param.skeleton,skeleton=void 0!==_param_skeleton&&_param_skeleton,props=_object_without_properties(_param,["appearance","dimension","icon","iconStart","iconEnd","type","text","displayRight","loading","skeleton"]),disabled=props.disabled||loading||skeleton;return(0,jsx_runtime.jsxs)(StyledButton,_object_spread_props(_object_spread({},props),{"data-dimension":dimension,"data-appearance":appearance,ref:ref,$appearance:appearance,$dimension:dimension,type:void 0===_param_type?"button":_param_type,disabled:disabled,$loading:loading,$skeleton:skeleton,children:[loading&&(0,jsx_runtime.jsx)(StyledSpinner,{dimension:"s"===dimension?"ms":"m"}),iconStart?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconStart}):icon&&!displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null,(0,jsx_runtime.jsx)(commonMixin.Ef,{children:(0,jsx_runtime.jsx)("span",{children:text})}),iconEnd?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:iconEnd}):icon&&displayRight?(0,jsx_runtime.jsx)(commonMixin.Tu,{children:icon}):null]}))});TextButton.displayName="TextButton";try{TextButton.displayName="TextButton",TextButton.__docgenInfo={description:"",displayName:"TextButton",props:{appearance:{defaultValue:{value:"primary"},description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},dimension:{defaultValue:{value:"m"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},icon:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Иконка кнопки`,name:"icon",required:!1,type:{name:"ReactNode"}},iconStart:{defaultValue:null,description:"Иконка перед текстом кнопки",name:"iconStart",required:!1,type:{name:"ReactNode"}},iconEnd:{defaultValue:null,description:"Иконка после текста кнопки",name:"iconEnd",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"Текст кнопки",name:"text",required:!1,type:{name:"string"}},displayRight:{defaultValue:{value:"false"},description:`@deprecated Помечено как deprecated в версии 4.16.0, будет удалено в версии 9.х.х.
Взамен используйте параметр iconStart или iconEnd

Позиционирование иконки. По умолчанию - слева`,name:"displayRight",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Состояние загрузки",name:"loading",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextButton/index.tsx#TextButton"]={docgenInfo:TextButton.__docgenInfo,name:"TextButton",path:"src/components/TextButton/index.tsx#TextButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/fixedForwardRef.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>fixedForwardRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function fixedForwardRef(render){return(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render)}},"./src/components/input/DateInput/stories/DateInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DateInputCustomIcon:()=>DateInputCustomIcon,DateInputPickMonth:()=>DateInputPickMonth,DateInputPlayground:()=>DateInputPlayground,DateInputSpecialDates:()=>DateInputSpecialDates,DateInputWithButtonToday:()=>DateInputWithButtonToday,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DateInput_stories});var _path,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),DateInput=__webpack_require__("./src/components/input/DateInput/index.tsx"),types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DateInputPlaygroundTemplate=function(_param){var placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=_sliced_to_array((0,react.useState)(placeholder||"Some placeholder"),2),placeholderValue=_useState[0],setPlaceholderValue=_useState[1],_useState1=_sliced_to_array((0,react.useState)(props.value?String(props.value):""),2),localValue=_useState1[0],setValue=_useState1[1];return(0,react.useEffect)(function(){void 0!==props.value&&setValue(String(props.value))},[props.value]),(0,react.useEffect)(function(){placeholder&&setPlaceholderValue(placeholder)},[placeholder]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateInput.J3,_object_spread_props(_object_spread({},props),{value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:placeholderValue,style:{maxWidth:300},dropContainerClassName:"dropContainerClass"}))})};try{DateInputPlaygroundTemplate.displayName="DateInputPlaygroundTemplate",DateInputPlaygroundTemplate.__docgenInfo={description:"",displayName:"DateInputPlaygroundTemplate",props:{type:{defaultValue:null,description:"Устанавливает тип ввода даты или интервала даты",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"date-range"'}]}},defaultIsCalendarOpen:{defaultValue:null,description:"Устанавливает начальное состояние видимости календаря",name:"defaultIsCalendarOpen",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((isoValues: string[], joinString?: string) => string)"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"((stringValue?: string, isDateRangeValue?: boolean) => Date[]) | undefined"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Принудительно выравнивает контейнер календаря относительно компонента`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},calendarRef:{defaultValue:null,description:"Ref для календаря",name:"calendarRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под календарем",name:"renderBottomPanel",required:!1,type:{name:"(() => ReactNode)"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/stories/DateInputPlayground.template.tsx#DateInputPlaygroundTemplate"]={docgenInfo:DateInputPlaygroundTemplate.__docgenInfo,name:"DateInputPlaygroundTemplate",path:"src/components/input/DateInput/stories/DateInputPlayground.template.tsx#DateInputPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}var dayjs_min=__webpack_require__("./node_modules/dayjs/dayjs.min.js"),dayjs_min_default=__webpack_require__.n(dayjs_min);function DateInputPickMonth_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DateInputPickMonth_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DateInputPickMonth_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _instanceof(left,right){return null!=right&&"undefined"!=typeof Symbol&&right[Symbol.hasInstance]?!!right[Symbol.hasInstance](left):left instanceof right}function DateInputPickMonth_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DateInputPickMonth_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateInputPickMonth_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateInputPickMonth_template_define_property(target,key,source[key])})}return target}function DateInputPickMonth_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateInputPickMonth_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateInputPickMonth_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateInputPickMonth_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateInputPickMonth_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateInputPickMonth_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateInputPickMonth_template_sliced_to_array(arr,i){return DateInputPickMonth_template_array_with_holes(arr)||DateInputPickMonth_template_iterable_to_array_limit(arr,i)||DateInputPickMonth_template_unsupported_iterable_to_array(arr,i)||DateInputPickMonth_template_non_iterable_rest()}function DateInputPickMonth_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DateInputPickMonth_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DateInputPickMonth_template_array_like_to_array(o,minLen)}}function splice(oldString,start,delCount,newSubStr){return oldString.slice(0,start)+newSubStr+oldString.slice(start+Math.abs(delCount))}var MASK_VALUE="__.____",formatDate=function(value){var MM=value.substring(0,2).replace(/\D/g,"_").padEnd(2,"_"),YYYY=value.substring(2,6).replace(/\D/g,"_").padEnd(4,"_");return"".concat(MM,".").concat(YYYY)},calcCursorPosition=function(inputValue,selectionStart){var underlinePos=inputValue.indexOf("_"),valueLength=-1===underlinePos?inputValue.length:underlinePos||1;return selectionStart<valueLength?"."===inputValue.charAt(selectionStart-1)?selectionStart+1:selectionStart:valueLength};function dateInputHandle(inputData){if(null===inputData)return{value:MASK_VALUE,selectionStart:0,selectionEnd:0};var selectionStart=inputData.selectionStart||0,inputValue=inputData.value||"",lengthDifference=inputValue.length-MASK_VALUE.length;if(inputValue.replace(/\d/g,"_")===MASK_VALUE)return inputData;if(lengthDifference<0)return inputValue=splice(inputValue,selectionStart,0,MASK_VALUE.substr(selectionStart,-lengthDifference)),DateInputPickMonth_template_object_spread_props(DateInputPickMonth_template_object_spread({},inputData),{value:inputValue});var addCount=0;"."===inputValue.charAt(selectionStart-1)&&(addCount=-1),"."===inputValue.charAt(selectionStart)&&(addCount=/\d/.test(inputValue.charAt(selectionStart-1))?1:-1);var cursorPos=calcCursorPosition(inputValue=formatDate(splice(inputValue,selectionStart+addCount,lengthDifference,"").replace(/[^\d_]/g,"")),selectionStart);return DateInputPickMonth_template_object_spread_props(DateInputPickMonth_template_object_spread({},inputData),{value:inputValue,selectionStart:cursorPos,selectionEnd:cursorPos})}function isValidDate(d){return _instanceof(d,Date)&&!isNaN(d.getTime())}function format(isoValues){return dayjs_min_default()(isoValues[0]).format("MM.YYYY")}function parse(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",_str_split=DateInputPickMonth_template_sliced_to_array(str.split("."),2),mmStr=_str_split[0],yyyyStr=_str_split[1],date=new Date("".concat(yyyyStr,"-").concat(mmStr,"-01"));return date.setHours(0,0,0,0),isValidDate(date)?[date]:[]}var DateInputPickMonthTemplate=function(_param){var placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DateInputPickMonth_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=DateInputPickMonth_template_sliced_to_array((0,react.useState)("MONTH"),2),currentActiveView=_useState[0],setCurrentActiveView=_useState[1],_useState1=DateInputPickMonth_template_sliced_to_array((0,react.useState)(placeholder||"Some placeholder"),2),placeholderValue=_useState1[0],setPlaceholderValue=_useState1[1],_useState2=DateInputPickMonth_template_sliced_to_array((0,react.useState)(props.value?String(props.value):""),2),localValue=_useState2[0],setValue=_useState2[1],_useState3=DateInputPickMonth_template_sliced_to_array((0,react.useState)(!1),2),isVisible=_useState3[0],setIsVisible=_useState3[1];react.useEffect(function(){void 0!==props.value&&setValue(String(props.value))},[props.value]),(0,react.useEffect)(function(){placeholder&&setPlaceholderValue(placeholder)},[placeholder]);var handleVisibilityChange=function(newIsVisible){setIsVisible(newIsVisible)};return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateInput.J3,DateInputPickMonth_template_object_spread_props(DateInputPickMonth_template_object_spread({},props),{handleInput:dateInputHandle,formatter:format,parser:parse,isVisible:isVisible,onVisibilityChange:handleVisibilityChange,value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:placeholderValue,style:{maxWidth:300},onMonthSelect:function(date){!Array.isArray(date)&&date&&setValue(dayjs_min_default()(date).format("MM.YYYY")),handleVisibilityChange(!1)},onYearSelect:function(date){!Array.isArray(date)&&date&&setValue(dayjs_min_default()(date).format("MM.YYYY")),setCurrentActiveView("MONTH")},onViewYearSelect:function(){return setCurrentActiveView("YEAR")},onViewMonthSelect:function(){return setCurrentActiveView("MONTH")},currentActiveView:currentActiveView,currentActiveViewImportant:!0}))})};try{DateInputPickMonthTemplate.displayName="DateInputPickMonthTemplate",DateInputPickMonthTemplate.__docgenInfo={description:"",displayName:"DateInputPickMonthTemplate",props:{type:{defaultValue:null,description:"Устанавливает тип ввода даты или интервала даты",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"date-range"'}]}},defaultIsCalendarOpen:{defaultValue:null,description:"Устанавливает начальное состояние видимости календаря",name:"defaultIsCalendarOpen",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((isoValues: string[], joinString?: string) => string)"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"((stringValue?: string, isDateRangeValue?: boolean) => Date[]) | undefined"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Принудительно выравнивает контейнер календаря относительно компонента`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},calendarRef:{defaultValue:null,description:"Ref для календаря",name:"calendarRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под календарем",name:"renderBottomPanel",required:!1,type:{name:"(() => ReactNode)"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/stories/DateInputPickMonth.template.tsx#DateInputPickMonthTemplate"]={docgenInfo:DateInputPickMonthTemplate.__docgenInfo,name:"DateInputPickMonthTemplate",path:"src/components/input/DateInput/stories/DateInputPickMonth.template.tsx#DateInputPickMonthTemplate"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCalendarSolid=function SvgCalendarSolid(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M8.14 1.94c.35 0 .65.3.65.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .64.3.64.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .65.3.65.65v1.39h.5c1.64 0 3 1.34 3 3v1.66c0 .39-.32.7-.71.7H4.7c-.39 0-.7-.31-.7-.7V6.98c0-1.66 1.33-3 3-3h.48V2.59c0-.35.3-.65.66-.65m11.15 8.71H4.7c-.39 0-.7.31-.7.7v5.77c0 1.66 1.33 3 3 3h10c1.66 0 3-1.34 3-3v-5.77c0-.39-.32-.7-.71-.7m-8.17 5.16c0 .39-.31.71-.71.71H8.1c-.4 0-.71-.32-.71-.71V14.5c0-.39.31-.7.71-.7h2.31c.4 0 .71.31.71.7z"})))};function DateInputAlternativeIcon_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DateInputAlternativeIcon_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DateInputAlternativeIcon_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateInputAlternativeIcon_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DateInputAlternativeIcon_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateInputAlternativeIcon_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateInputAlternativeIcon_template_define_property(target,key,source[key])})}return target}function DateInputAlternativeIcon_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateInputAlternativeIcon_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateInputAlternativeIcon_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateInputAlternativeIcon_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateInputAlternativeIcon_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateInputAlternativeIcon_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateInputAlternativeIcon_template_sliced_to_array(arr,i){return DateInputAlternativeIcon_template_array_with_holes(arr)||DateInputAlternativeIcon_template_iterable_to_array_limit(arr,i)||DateInputAlternativeIcon_template_unsupported_iterable_to_array(arr,i)||DateInputAlternativeIcon_template_non_iterable_rest()}function DateInputAlternativeIcon_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DateInputAlternativeIcon_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DateInputAlternativeIcon_template_array_like_to_array(o,minLen)}}__webpack_require__.p;var DateInputAlternativeIconTemplate=function(_param){var placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DateInputAlternativeIcon_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=DateInputAlternativeIcon_template_sliced_to_array((0,react.useState)(placeholder||"Другая иконка ->"),2),placeholderValue=_useState[0],setPlaceholderValue=_useState[1],_useState1=DateInputAlternativeIcon_template_sliced_to_array((0,react.useState)(""),2),value=_useState1[0],setValue=_useState1[1];return(0,react.useEffect)(function(){placeholder&&setPlaceholderValue(placeholder)},[placeholder]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateInput.J3,DateInputAlternativeIcon_template_object_spread_props(DateInputAlternativeIcon_template_object_spread({},props),{value:value,onChange:function(e){setValue(e.currentTarget.value)},placeholder:placeholderValue,style:{maxWidth:300},dropContainerClassName:"dropContainerClass",icon:SvgCalendarSolid}))})};try{DateInputAlternativeIconTemplate.displayName="DateInputAlternativeIconTemplate",DateInputAlternativeIconTemplate.__docgenInfo={description:"",displayName:"DateInputAlternativeIconTemplate",props:{type:{defaultValue:null,description:"Устанавливает тип ввода даты или интервала даты",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"date-range"'}]}},defaultIsCalendarOpen:{defaultValue:null,description:"Устанавливает начальное состояние видимости календаря",name:"defaultIsCalendarOpen",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((isoValues: string[], joinString?: string) => string)"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"((stringValue?: string, isDateRangeValue?: boolean) => Date[]) | undefined"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Принудительно выравнивает контейнер календаря относительно компонента`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},calendarRef:{defaultValue:null,description:"Ref для календаря",name:"calendarRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под календарем",name:"renderBottomPanel",required:!1,type:{name:"(() => ReactNode)"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/stories/DateInputAlternativeIcon.template.tsx#DateInputAlternativeIconTemplate"]={docgenInfo:DateInputAlternativeIconTemplate.__docgenInfo,name:"DateInputAlternativeIconTemplate",path:"src/components/input/DateInput/stories/DateInputAlternativeIcon.template.tsx#DateInputAlternativeIconTemplate"})}catch(__react_docgen_typescript_loader_error){}function DateInputSpecialDates_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DateInputSpecialDates_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DateInputSpecialDates_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateInputSpecialDates_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DateInputSpecialDates_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateInputSpecialDates_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateInputSpecialDates_template_define_property(target,key,source[key])})}return target}function DateInputSpecialDates_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateInputSpecialDates_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateInputSpecialDates_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateInputSpecialDates_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateInputSpecialDates_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateInputSpecialDates_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateInputSpecialDates_template_sliced_to_array(arr,i){return DateInputSpecialDates_template_array_with_holes(arr)||DateInputSpecialDates_template_iterable_to_array_limit(arr,i)||DateInputSpecialDates_template_unsupported_iterable_to_array(arr,i)||DateInputSpecialDates_template_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function DateInputSpecialDates_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DateInputSpecialDates_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DateInputSpecialDates_template_array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
  color: `,`;
`]);return _templateObject=function _templateObject(){return data},data}var weekendMixin=(0,styled_components_browser_esm.AH)(_templateObject(),function(p){return p.disabled?"var(--admiral-color-Error_Error30, ".concat(p.theme.color["Error/Error 30"],")"):"var(--admiral-color-Error_Error60Main, ".concat(p.theme.color["Error/Error 60 Main"],")")}),DateInputSpecialDatesTemplate=function(_param){var placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DateInputSpecialDates_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=DateInputSpecialDates_template_sliced_to_array((0,react.useState)(placeholder||"Some placeholder"),2),placeholderValue=_useState[0],setPlaceholderValue=_useState[1],_useState1=DateInputSpecialDates_template_sliced_to_array((0,react.useState)(props.value?String(props.value):""),2),localValue=_useState1[0],setValue=_useState1[1];return(0,react.useEffect)(function(){void 0!==props.value&&setValue(String(props.value))},[props.value]),(0,react.useEffect)(function(){placeholder&&setPlaceholderValue(placeholder)},[placeholder]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateInput.J3,DateInputSpecialDates_template_object_spread_props(DateInputSpecialDates_template_object_spread({},props),{value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:placeholderValue,style:{maxWidth:300},dropContainerClassName:"dropContainerClass",highlightSpecialDay:function(date){var dayNumber=date.getDay();if(0===dayNumber||6===dayNumber)return weekendMixin}}))})};try{DateInputSpecialDatesTemplate.displayName="DateInputSpecialDatesTemplate",DateInputSpecialDatesTemplate.__docgenInfo={description:"",displayName:"DateInputSpecialDatesTemplate",props:{type:{defaultValue:null,description:"Устанавливает тип ввода даты или интервала даты",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"date-range"'}]}},defaultIsCalendarOpen:{defaultValue:null,description:"Устанавливает начальное состояние видимости календаря",name:"defaultIsCalendarOpen",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((isoValues: string[], joinString?: string) => string)"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"((stringValue?: string, isDateRangeValue?: boolean) => Date[]) | undefined"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Принудительно выравнивает контейнер календаря относительно компонента`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},calendarRef:{defaultValue:null,description:"Ref для календаря",name:"calendarRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под календарем",name:"renderBottomPanel",required:!1,type:{name:"(() => ReactNode)"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/stories/DateInputSpecialDates.template.tsx#DateInputSpecialDatesTemplate"]={docgenInfo:DateInputSpecialDatesTemplate.__docgenInfo,name:"DateInputSpecialDatesTemplate",path:"src/components/input/DateInput/stories/DateInputSpecialDates.template.tsx#DateInputSpecialDatesTemplate"})}catch(__react_docgen_typescript_loader_error){}var Divider=__webpack_require__("./src/components/Divider/index.tsx");function ActionsPanel_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ActionsPanel_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ActionsPanel_define_property(target,key,source[key])})}return target}function ActionsPanel_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ActionsPanel_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ActionsPanel_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function ActionsPanel_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=ActionsPanel_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ActionsPanel_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function ActionsPanel_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ActionsPanel_templateObject(){var data=ActionsPanel_tagged_template_literal([`
  box-sizing: border-box;
  margin: 0 16px 16px 16px;
`]);return ActionsPanel_templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=ActionsPanel_tagged_template_literal([`
  display: flex;
  min-height: 36px;
  align-items: center;
  margin-top: 12px;
  `,`
`]);return _templateObject1=function _templateObject(){return data},data}var ActionsPanelDiv=styled_components_browser_esm.Ay.div(ActionsPanel_templateObject()),PanelContent=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.$actionsPanelCssMixin}),ActionsPanel=function(_param){var actionsPanelCssMixin=_param.actionsPanelCssMixin,children=_param.children,props=ActionsPanel_object_without_properties(_param,["actionsPanelCssMixin","children"]);return(0,jsx_runtime.jsxs)(ActionsPanelDiv,ActionsPanel_object_spread_props(ActionsPanel_object_spread({},props),{children:[(0,jsx_runtime.jsx)(Divider.c,{dimension:"s"}),(0,jsx_runtime.jsx)(PanelContent,{$actionsPanelCssMixin:actionsPanelCssMixin,children:children})]}))};try{ActionsPanel.displayName="ActionsPanel",ActionsPanel.__docgenInfo={description:"",displayName:"ActionsPanel",props:{actionsPanelCssMixin:{defaultValue:null,description:"",name:"actionsPanelCssMixin",required:!1,type:{name:"RuleSet<object>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/ActionsPanel.tsx#ActionsPanel"]={docgenInfo:ActionsPanel.__docgenInfo,name:"ActionsPanel",path:"src/components/input/DateInput/ActionsPanel.tsx#ActionsPanel"})}catch(__react_docgen_typescript_loader_error){}var TextButton=__webpack_require__("./src/components/TextButton/index.tsx");function DateInputWithButtonToday_template_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DateInputWithButtonToday_template_array_with_holes(arr){if(Array.isArray(arr))return arr}function DateInputWithButtonToday_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateInputWithButtonToday_template_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DateInputWithButtonToday_template_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateInputWithButtonToday_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateInputWithButtonToday_template_define_property(target,key,source[key])})}return target}function DateInputWithButtonToday_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateInputWithButtonToday_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateInputWithButtonToday_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateInputWithButtonToday_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=DateInputWithButtonToday_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function DateInputWithButtonToday_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function DateInputWithButtonToday_template_sliced_to_array(arr,i){return DateInputWithButtonToday_template_array_with_holes(arr)||DateInputWithButtonToday_template_iterable_to_array_limit(arr,i)||DateInputWithButtonToday_template_unsupported_iterable_to_array(arr,i)||DateInputWithButtonToday_template_non_iterable_rest()}function DateInputWithButtonToday_template_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DateInputWithButtonToday_template_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DateInputWithButtonToday_template_array_like_to_array(o,minLen)}}var DateInputWithButtonTodayTemplate=function(_param){var placeholder=_param.placeholder,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=DateInputWithButtonToday_template_object_without_properties(_param,["placeholder","themeBorderKind","CSSCustomProps"]),_useState=DateInputWithButtonToday_template_sliced_to_array((0,react.useState)(placeholder||"Some placeholder"),2),placeholderValue=_useState[0],setPlaceholderValue=_useState[1],_useState1=DateInputWithButtonToday_template_sliced_to_array((0,react.useState)(props.value?String(props.value):""),2),localValue=_useState1[0],setValue=_useState1[1],_useState2=DateInputWithButtonToday_template_sliced_to_array((0,react.useState)(""!==localValue?new Date(localValue):null),2),viewDateLocal=_useState2[0],setViewDateLocal=_useState2[1],handleViewDateLocalChange=function(newDate){setViewDateLocal(newDate)};return(0,react.useEffect)(function(){void 0!==props.value&&setValue(String(props.value))},[props.value]),(0,react.useEffect)(function(){placeholder&&setPlaceholderValue(placeholder)},[placeholder]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DateInput.J3,DateInputWithButtonToday_template_object_spread_props(DateInputWithButtonToday_template_object_spread({},props),{viewDate:viewDateLocal,onViewDateChange:handleViewDateLocalChange,value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null==(_props_onChange=props.onChange)||_props_onChange.call(props,e)},placeholder:placeholderValue,style:{maxWidth:300},dropContainerClassName:"dropContainerClass",renderBottomPanel:function(){return(0,jsx_runtime.jsx)(ActionsPanel,{children:(0,jsx_runtime.jsx)(TextButton.Q,{dimension:"s",text:"Сегодня",onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),handleViewDateLocalChange(new Date)}})})}}))})};try{DateInputWithButtonTodayTemplate.displayName="DateInputWithButtonTodayTemplate",DateInputWithButtonTodayTemplate.__docgenInfo={description:"",displayName:"DateInputWithButtonTodayTemplate",props:{type:{defaultValue:null,description:"Устанавливает тип ввода даты или интервала даты",name:"type",required:!1,type:{name:"enum",value:[{value:'"date"'},{value:'"date-range"'}]}},defaultIsCalendarOpen:{defaultValue:null,description:"Устанавливает начальное состояние видимости календаря",name:"defaultIsCalendarOpen",required:!1,type:{name:"boolean"}},formatter:{defaultValue:null,description:"",name:"formatter",required:!1,type:{name:"((isoValues: string[], joinString?: string) => string)"}},parser:{defaultValue:null,description:"",name:"parser",required:!1,type:{name:"((stringValue?: string, isDateRangeValue?: boolean) => Date[]) | undefined"}},alignDropdown:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.
Взамен используйте alignSelf

Принудительно выравнивает контейнер календаря относительно компонента`,name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},calendarRef:{defaultValue:null,description:"Ref для календаря",name:"calendarRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},icon:{defaultValue:null,description:"Компонент для отображения альтернативной иконки",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},renderBottomPanel:{defaultValue:null,description:"Позволяет добавить панель внизу под календарем",name:"renderBottomPanel",required:!1,type:{name:"(() => ReactNode)"}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.
Взамен используйте iconsAfter

Иконки для отображения в правом углу поля`,name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:`Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.
Используется для создания масок ввода`,name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:`Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме`,name:"locale",required:!1,type:{name:"{ backwardText?: string; forwardText?: string; nextMonthText?: string | undefined; previousMonthText?: string | undefined; returnText?: string | undefined; selectYearText?: string | undefined; selectMonthText?: string | undefined; } | undefined"}},selected:{defaultValue:null,description:"Выбранное значение даты",name:"selected",required:!1,type:{name:"Date | null"}},tooltipContainer:{defaultValue:null,description:`@deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
Взамен используйте rootRef пропсу на DropdownProvider.

Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal`,name:"tooltipContainer",required:!1,type:{name:"undefined"}},viewDate:{defaultValue:null,description:"Дата, отображаемая на календаре",name:"viewDate",required:!1,type:{name:"Date | null"}},onViewDateChange:{defaultValue:null,description:"Коллбэк при изменении даты, отображаемая на календаре",name:"onViewDateChange",required:!1,type:{name:"((newDate: Date) => void)"}},currentActiveView:{defaultValue:null,description:"Показать экран выбора дат (месяц/год/день)",name:"currentActiveView",required:!1,type:{name:"ViewScreenType | null"}},currentActiveViewImportant:{defaultValue:null,description:"Приоритет экрана currentActiveView",name:"currentActiveViewImportant",required:!1,type:{name:"boolean"}},onDateIncreaseDecrease:{defaultValue:null,description:"Коллбэк срабатывает при клике на стрелках переключения дат",name:"onDateIncreaseDecrease",required:!1,type:{name:"((date: Date | (Date | null)[] | null, event?: SyntheticEvent<any, Event>) => void)"}},onMonthSelect:{defaultValue:null,description:"Коллбэк при изменении месяца",name:"onMonthSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onYearSelect:{defaultValue:null,description:"Коллбэк при изменении года",name:"onYearSelect",required:!1,type:{name:"((date: Date | (Date | null)[] | null) => void)"}},onViewEnter:{defaultValue:null,description:"Срабатывает при открытии экрана выбора года",name:"onViewEnter",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewLeave:{defaultValue:null,description:"Срабатывает при открытии экрана выбора месяца",name:"onViewLeave",required:!1,type:{name:"((view: ViewScreenType) => void)"}},onViewMonthSelect:{defaultValue:null,description:"Выбор вкладки - Месяц",name:"onViewMonthSelect",required:!1,type:{name:"(() => void)"}},onViewYearSelect:{defaultValue:null,description:"Выбор вкладки - Год",name:"onViewYearSelect",required:!1,type:{name:"(() => void)"}},highlightSpecialDay:{defaultValue:null,description:"Позволяет добавлять стили на необходимые даты",name:"highlightSpecialDay",required:!1,type:{name:"((date: Date) => RuleSet<object>)"}},minDate:{defaultValue:null,description:"Минимально возможная для выбора дата",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"Максимально возможная для выбора дата",name:"maxDate",required:!1,type:{name:"Date"}},startDate:{defaultValue:null,description:"Начальная дата диапазона",name:"startDate",required:!1,type:{name:"Date | null"}},endDate:{defaultValue:null,description:"Конечная дата диапазона",name:"endDate",required:!1,type:{name:"Date | null"}},validator:{defaultValue:null,description:`Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
функцией значение является текстом ошибки`,name:"validator",required:!1,type:{name:"DateValidator"}},filterDate:{defaultValue:null,description:`Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
Пример функции https://reactdatepicker.com/#example-filter-dates`,name:"filterDate",required:!1,type:{name:"((date: Date) => boolean)"}},isVisible:{defaultValue:null,description:"Видимость выпадающего меню",name:"isVisible",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"Колбек на изменение видимости меню",name:"onVisibilityChange",required:!1,type:{name:"((isVisible: boolean) => void)"}},alignSelf:{defaultValue:null,description:`Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
https://developer.mozilla.org/en-US/docs/Web/CSS/align-self`,name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/DateInput/stories/DateInputWithButtonToday.template.tsx#DateInputWithButtonTodayTemplate"]={docgenInfo:DateInputWithButtonTodayTemplate.__docgenInfo,name:"DateInputWithButtonTodayTemplate",path:"src/components/input/DateInput/stories/DateInputWithButtonToday.template.tsx#DateInputWithButtonTodayTemplate"})}catch(__react_docgen_typescript_loader_error){}let DateInputPlayground_templateraw_namespaceObject=`import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateInputPlaygroundTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  useEffect(() => {
    if (placeholder) {
      setPlaceholderValue(placeholder);
    }
  }, [placeholder]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateInput
        {...props}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};
`,DateInputPickMonth_templateraw_namespaceObject=`import * as React from 'react';
import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { DateInputProps, BorderRadiusType, InputData } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import dayjs from 'dayjs';

function splice(oldString: string, start: number, delCount: number, newSubStr: string): string {
  return oldString.slice(0, start) + newSubStr + oldString.slice(start + Math.abs(delCount));
}

const MASK_VALUE = '__.____';

const formatDate = (value: string) => {
  const MM = value.substring(0, 2).replace(/\\D/g, '_').padEnd(2, '_');
  const YYYY = value.substring(2, 6).replace(/\\D/g, '_').padEnd(4, '_');
  return \`\${MM}.\${YYYY}\`;
};

const calcCursorPosition = (inputValue: string, selectionStart: number) => {
  const underlinePos = inputValue.indexOf('_');
  // selectionStart должен быть не менее 1, иначе маска не будет отображаться
  const valueLength = underlinePos === -1 ? inputValue.length : underlinePos || 1;

  if (selectionStart < valueLength) {
    return inputValue.charAt(selectionStart - 1) === '.' ? selectionStart + 1 : selectionStart;
  }

  return valueLength;
};

function dateInputHandle(inputData: InputData | null): InputData {
  if (inputData === null) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }

  const selectionStart = inputData.selectionStart || 0;
  let inputValue = inputData.value || '';

  const lengthDifference = inputValue.length - MASK_VALUE.length;

  if (inputValue.replace(/\\d/g, '_') === MASK_VALUE) return inputData;

  if (lengthDifference < 0) {
    inputValue = splice(inputValue, selectionStart, 0, MASK_VALUE.substr(selectionStart, -lengthDifference));
    return { ...inputData, value: inputValue };
  }

  let addCount = 0;

  if (inputValue.charAt(selectionStart - 1) === '.') {
    addCount = -1;
  }
  if (inputValue.charAt(selectionStart) === '.') {
    if (/\\d/.test(inputValue.charAt(selectionStart - 1))) {
      addCount = 1;
    } else {
      addCount = -1;
    }
  }

  const clearValue = splice(inputValue, selectionStart + addCount, lengthDifference, '').replace(/[^\\d_]/g, '');
  inputValue = formatDate(clearValue);
  const cursorPos = calcCursorPosition(inputValue, selectionStart);

  return {
    ...inputData,
    value: inputValue,
    selectionStart: cursorPos,
    selectionEnd: cursorPos,
  };
}

function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d.getTime());
}

function format(isoValues: string[]): string {
  return dayjs(isoValues[0]).format('MM.YYYY');
}

function parse(str = ''): Date[] {
  const [mmStr, yyyyStr] = str.split('.');
  const date = new Date(\`\${yyyyStr}-\${mmStr}-01\`);
  date.setHours(0, 0, 0, 0);
  return isValidDate(date) ? [date] : [];
}

export const DateInputPickMonthTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [currentActiveView, setCurrentActiveView] = useState<'YEAR' | 'MONTH'>('MONTH');
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  useEffect(() => {
    if (placeholder) {
      setPlaceholderValue(placeholder);
    }
  }, [placeholder]);

  const handleVisibilityChange = (newIsVisible: boolean) => {
    setIsVisible(newIsVisible);
  };

  const handleMonthClick = (date: Date | Array<Date | null> | null) => {
    if (!Array.isArray(date) && date) {
      setValue(dayjs(date).format('MM.YYYY'));
    }
    handleVisibilityChange(false);
  };

  const handleYearClick = (date: Date | Array<Date | null> | null) => {
    if (!Array.isArray(date) && date) {
      setValue(dayjs(date).format('MM.YYYY'));
    }
    setCurrentActiveView('MONTH');
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateInput
        {...props}
        handleInput={dateInputHandle}
        formatter={format}
        parser={parse}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        onMonthSelect={handleMonthClick}
        onYearSelect={handleYearClick}
        onViewYearSelect={() => setCurrentActiveView('YEAR')}
        onViewMonthSelect={() => setCurrentActiveView('MONTH')}
        currentActiveView={currentActiveView}
        currentActiveViewImportant
      />
    </ThemeProvider>
  );
};
`,DateInputAlternativeIcon_templateraw_namespaceObject=`import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { DateInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as CalendarSolidSVG } from '@admiral-ds/icons/build/system/CalendarSolid.svg';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateInputAlternativeIconTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Другая иконка ->');
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  useEffect(() => {
    if (placeholder) {
      setPlaceholderValue(placeholder);
    }
  }, [placeholder]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateInput
        {...props}
        value={value}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        icon={CalendarSolidSVG}
      />
    </ThemeProvider>
  );
};
`,DateInputSpecialDates_templateraw_namespaceObject=`import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { css, ThemeProvider } from 'styled-components';

import { DateInput } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const weekendMixin = css<{ disabled?: boolean }>\`
  color: \${(p) =>
    p.disabled
      ? \`var(--admiral-color-Error_Error30, \${p.theme.color['Error/Error 30']})\`
      : \`var(--admiral-color-Error_Error60Main, \${p.theme.color['Error/Error 60 Main']})\`};
\`;

export const DateInputSpecialDatesTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  useEffect(() => {
    if (placeholder) {
      setPlaceholderValue(placeholder);
    }
  }, [placeholder]);

  const highlightWeekend = (date: Date) => {
    const dayNumber = date.getDay();
    if (dayNumber === 0 || dayNumber === 6) {
      return weekendMixin;
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateInput
        {...props}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        highlightSpecialDay={highlightWeekend}
      />
    </ThemeProvider>
  );
};
`,DateInputWithButtonToday_templateraw_namespaceObject=`import { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { ActionsPanel, DateInput, TextButton } from '@admiral-ds/react-ui';
import type { BorderRadiusType, DateInputProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

export const DateInputWithButtonTodayTemplate = ({
  placeholder,
  themeBorderKind,
  CSSCustomProps,
  ...props
}: DateInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [placeholderValue, setPlaceholderValue] = useState<string>(placeholder || 'Some placeholder');
  const [localValue, setValue] = useState<string>(props.value ? String(props.value) : '');

  const [viewDateLocal, setViewDateLocal] = useState<Date | null>(localValue !== '' ? new Date(localValue) : null);
  const handleViewDateLocalChange = (newDate: Date) => {
    setViewDateLocal(newDate);
  };

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);

  const renderPanelToday = () => {
    const handleTodayButtonMouseDown: React.MouseEventHandler = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const today = new Date();
      handleViewDateLocalChange(today);
    };
    return (
      <ActionsPanel>
        <TextButton dimension="s" text="Сегодня" onMouseDown={handleTodayButtonMouseDown} />
      </ActionsPanel>
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  useEffect(() => {
    if (placeholder) {
      setPlaceholderValue(placeholder);
    }
  }, [placeholder]);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DateInput
        {...props}
        viewDate={viewDateLocal}
        onViewDateChange={handleViewDateLocalChange}
        value={localValue}
        onChange={handleChange}
        placeholder={placeholderValue}
        style={{ maxWidth: 300 }}
        dropContainerClassName="dropContainerClass"
        renderBottomPanel={renderPanelToday}
      />
    </ThemeProvider>
  );
};
`;function DateInput_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function DateInput_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function DateInput_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function DateInput_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function DateInput_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function DateInput_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){DateInput_stories_define_property(target,key,source[key])})}return target}function DateInput_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function DateInput_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):DateInput_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function DateInput_stories_sliced_to_array(arr,i){return DateInput_stories_array_with_holes(arr)||DateInput_stories_iterable_to_array_limit(arr,i)||DateInput_stories_unsupported_iterable_to_array(arr,i)||DateInput_stories_non_iterable_rest()}function DateInput_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return DateInput_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return DateInput_stories_array_like_to_array(o,minLen)}}let DateInput_stories={title:"Admiral-2.1/Input/DateInput",component:DateInput.J3,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53678"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53659"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},disabled:{control:{type:"boolean"}},defaultIsCalendarOpen:{type:"boolean"},value:{control:{type:"text",disabled:!0},description:"Значение DateInput"},onChange:{action:"onChange"},displayStatusIcon:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},type:{options:["date","date-range"],control:{type:"radio"}},placeholder:{control:{type:"text"}},minDate:{control:!1},maxDate:{control:!1},containerRef:{control:!1},handleInput:{control:!1},icon:{control:!1},icons:{control:!1},calendarRef:{control:!1},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},locale:{control:!1},startDate:{control:!1},endDate:{control:!1},validator:{control:!1},selected:{control:!1},tooltipContainer:{control:!1},currentActiveViewImportant:{control:{type:"boolean"}},theme:{control:!1},isVisible:{control:!1},onVisibilityChange:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},renderBottomPanel:{control:!1},currentActiveView:{options:[void 0,"DAY","MONTH","YEAR"],control:{type:"radio"}}}};var DateInputPlayground={render:function(props){var CSSCustomProps=DateInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateInputPlaygroundTemplate,DateInput_stories_object_spread_props(DateInput_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateInputPlayground_templateraw_namespaceObject}}},name:'DateInput (input type="date")'},DateInputCustomIcon={render:function(props){var CSSCustomProps=DateInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateInputAlternativeIconTemplate,DateInput_stories_object_spread_props(DateInput_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateInputAlternativeIcon_templateraw_namespaceObject}}},name:"DateInput. Альтернативная иконка"},DateInputPickMonth={render:function(props){var CSSCustomProps=DateInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateInputPickMonthTemplate,DateInput_stories_object_spread_props(DateInput_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateInputPickMonth_templateraw_namespaceObject}}},name:"DateInput. Выбор месяца"},DateInputSpecialDates={render:function(props){var CSSCustomProps=DateInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateInputSpecialDatesTemplate,DateInput_stories_object_spread_props(DateInput_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateInputSpecialDates_templateraw_namespaceObject}}},name:"DateInput. Выделение определенных дат"},DateInputWithButtonToday={render:function(props){var CSSCustomProps=DateInput_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(DateInputWithButtonTodayTemplate,DateInput_stories_object_spread_props(DateInput_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:DateInputWithButtonToday_templateraw_namespaceObject}}},name:'DateInput с кнопкой "Сегодня"'};DateInputPlayground.parameters={...DateInputPlayground.parameters,docs:{...DateInputPlayground.parameters?.docs,source:{originalSource:`{
  render: DateInputPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: DateInputPlaygroundRaw
      }
    }
  },
  name: 'DateInput (input type="date")'
}`,...DateInputPlayground.parameters?.docs?.source}}},DateInputCustomIcon.parameters={...DateInputCustomIcon.parameters,docs:{...DateInputCustomIcon.parameters?.docs,source:{originalSource:`{
  render: DateInputCustomIconStory,
  parameters: {
    docs: {
      source: {
        code: DateInputAlternativeIconRaw
      }
    }
  },
  name: 'DateInput. Альтернативная иконка'
}`,...DateInputCustomIcon.parameters?.docs?.source}}},DateInputPickMonth.parameters={...DateInputPickMonth.parameters,docs:{...DateInputPickMonth.parameters?.docs,source:{originalSource:`{
  render: DateInputPickMonthStory,
  parameters: {
    docs: {
      source: {
        code: DateInputPickMonthRaw
      }
    }
  },
  name: 'DateInput. Выбор месяца'
}`,...DateInputPickMonth.parameters?.docs?.source}}},DateInputSpecialDates.parameters={...DateInputSpecialDates.parameters,docs:{...DateInputSpecialDates.parameters?.docs,source:{originalSource:`{
  render: DateInputSpecialDatesStory,
  parameters: {
    docs: {
      source: {
        code: DateInputSpecialDatesRaw
      }
    }
  },
  name: 'DateInput. Выделение определенных дат'
}`,...DateInputSpecialDates.parameters?.docs?.source}}},DateInputWithButtonToday.parameters={...DateInputWithButtonToday.parameters,docs:{...DateInputWithButtonToday.parameters?.docs,source:{originalSource:`{
  render: DateInputWithButtonTodayStory,
  parameters: {
    docs: {
      source: {
        code: DateInputWithButtonTodayRaw
      }
    }
  },
  name: 'DateInput с кнопкой "Сегодня"'
}`,...DateInputWithButtonToday.parameters?.docs?.source}}};let __namedExportsOrder=["DateInputPlayground","DateInputCustomIcon","DateInputPickMonth","DateInputSpecialDates","DateInputWithButtonToday"]},"./src/components/input/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>INPUT_STATUS_VALUES,o:()=>INPUT_DIMENSIONS_VALUES});var INPUT_DIMENSIONS_VALUES=["xl","m","s"],INPUT_STATUS_VALUES=["error","success"]}}]);
//# sourceMappingURL=components-input-DateInput-stories-DateInput-stories.a6455d04.iframe.bundle.js.map