(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8792],{"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{decorators:()=>decorators,globalTypes:()=>globalTypes,parameters:()=>parameters});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),chunk_6E673XPF=__webpack_require__("./node_modules/@storybook/theming/dist/chunk-6E673XPF.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),esm=__webpack_require__("./node_modules/storybook-dark-mode/dist/esm/index.js"),CSSCustomProps=__webpack_require__("./src/components/CSSCustomProps/index.tsx"),dark=__webpack_require__("./src/components/themes/dark/index.ts"),light=__webpack_require__("./src/components/themes/light/index.ts"),DropdownProvider=__webpack_require__("./src/components/DropdownProvider.tsx"),VTBGroupUI_SemiBold=__webpack_require__("./node_modules/@admiral-ds/fonts/VTBGroupUI-SemiBold.ttf"),VTBGroupUI_Medium=__webpack_require__("./node_modules/@admiral-ds/fonts/VTBGroupUI-Medium.otf"),VTBGroupUI_Regular=__webpack_require__("./node_modules/@admiral-ds/fonts/VTBGroupUI-Regular.otf");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var cssText=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('`.concat(VTBGroupUI_SemiBold,`') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('`).concat(VTBGroupUI_Medium,`') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('`).concat(VTBGroupUI_Regular,`') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`);function FontsVTBGroup(props){return(0,jsx_runtime.jsx)("style",_object_spread({type:"text/css",children:cssText},props))}try{FontsVTBGroup.displayName="FontsVTBGroup",FontsVTBGroup.__docgenInfo={description:"",displayName:"FontsVTBGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FontsVTBGroup.tsx#FontsVTBGroup"]={docgenInfo:FontsVTBGroup.__docgenInfo,name:"FontsVTBGroup",path:"src/components/FontsVTBGroup.tsx#FontsVTBGroup"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function preview_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function preview_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){preview_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal([`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    html {
      background-color: var(--admiral-color-Neutral_Neutral00, `,`);
    }
`]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
  padding: 3em;
  background-color: var(--admiral-color-Neutral_Neutral00, `,`);
`]);return _templateObject1=function _templateObject(){return data},data}var GlobalStyles=(0,styled_components_browser_esm.DU)(_templateObject(),function(p){return p.theme.color["Neutral/Neutral 00"]}),parameters={options:{storySort:{includeName:!0,locales:"en-US",order:["Admiral-2.1",["Atoms","Input","Form Field","Data Table"]]}},docs:{container:function(props){var theme=(0,esm.D2)()?chunk_6E673XPF.Zj.dark:chunk_6E673XPF.Zj.normal;return(0,jsx_runtime.jsx)(dist.vD,_object_spread_props(preview_object_spread({},props),{theme:theme}))}}};function ThemeWrapper(props){var isDark=(0,esm.D2)();return(0,react.useEffect)(function(){document.body.classList.add("admiral-theme-".concat(isDark?"dark":"light")),document.body.classList.remove("admiral-theme-".concat(isDark?"light":"dark"))},[isDark]),(0,jsx_runtime.jsxs)(styled_components_browser_esm.NP,{theme:isDark?dark.n:light.d,children:[props.CSSCustomProps&&(isDark?(0,jsx_runtime.jsx)(CSSCustomProps.$,{}):(0,jsx_runtime.jsx)(CSSCustomProps.b,{})),props.children]})}var StoryContainer=styled_components_browser_esm.Ay.div(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 00"]}),decorators=[function(renderStory){var CSSCustomProps=_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsxs)(ThemeWrapper,{CSSCustomProps:CSSCustomProps,children:[(0,jsx_runtime.jsx)(GlobalStyles,{}),(0,jsx_runtime.jsx)(DropdownProvider.tc,{children:(0,jsx_runtime.jsx)(StoryContainer,{children:renderStory()})})]})},function(Story){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(FontsVTBGroup,{}),(0,jsx_runtime.jsx)(Story,{})]})}],globalTypes={CSSCustomProps:{defaultValue:!1,toolbar:{title:"CSS Custom Props",items:[{value:!0,title:"Enable css custom props",icon:"passed"},{value:!1,title:"Disable css custom props",icon:"failed"}]}}}},"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e})}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./colors/colors.stories":["./src/colors/colors.stories.tsx",7587,5977,1187,8600,2728],"./colors/colors.stories.tsx":["./src/colors/colors.stories.tsx",7587,5977,1187,8600,2728],"./components/Accordion/stories/Accordion.stories":["./src/components/Accordion/stories/Accordion.stories.tsx",7587,502,5977,3860,9675,6217,1187,6235,4384,2340,8187],"./components/Accordion/stories/Accordion.stories.tsx":["./src/components/Accordion/stories/Accordion.stories.tsx",7587,502,5977,3860,9675,6217,1187,6235,4384,2340,8187],"./components/ActionBar/stories/ActionBar.stories":["./src/components/ActionBar/stories/ActionBar.stories.tsx",282,7587,502,5977,3860,9675,8665,4890,7683],"./components/ActionBar/stories/ActionBar.stories.tsx":["./src/components/ActionBar/stories/ActionBar.stories.tsx",282,7587,502,5977,3860,9675,8665,4890,7683],"./components/Anchor/stories/Anchor.stories":["./src/components/Anchor/stories/Anchor.stories.tsx",763],"./components/Anchor/stories/Anchor.stories.tsx":["./src/components/Anchor/stories/Anchor.stories.tsx",763],"./components/Avatar/stories/Avatar.stories":["./src/components/Avatar/stories/Avatar.stories.tsx",7587,8665,222,5819],"./components/Avatar/stories/Avatar.stories.tsx":["./src/components/Avatar/stories/Avatar.stories.tsx",7587,8665,222,5819],"./components/AvatarActivity/stories/AvatarActivity.stories":["./src/components/AvatarActivity/stories/AvatarActivity.stories.tsx",7587,8665,222,1297],"./components/AvatarActivity/stories/AvatarActivity.stories.tsx":["./src/components/AvatarActivity/stories/AvatarActivity.stories.tsx",7587,8665,222,1297],"./components/AvatarActivityGroup/stories/AvatarActivityGroup.stories":["./src/components/AvatarActivityGroup/stories/AvatarActivityGroup.stories.tsx",7587,502,5977,3860,9675,8665,222,7322,9011],"./components/AvatarActivityGroup/stories/AvatarActivityGroup.stories.tsx":["./src/components/AvatarActivityGroup/stories/AvatarActivityGroup.stories.tsx",7587,502,5977,3860,9675,8665,222,7322,9011],"./components/AvatarGroup/stories/AvatarGroup.stories":["./src/components/AvatarGroup/stories/AvatarGroup.stories.tsx",7587,502,5977,3860,9675,8665,222,7322,795],"./components/AvatarGroup/stories/AvatarGroup.stories.tsx":["./src/components/AvatarGroup/stories/AvatarGroup.stories.tsx",7587,502,5977,3860,9675,8665,222,7322,795],"./components/Badge/stories/Badge.stories":["./src/components/Badge/stories/Badge.stories.tsx",1629,9583],"./components/Badge/stories/Badge.stories.tsx":["./src/components/Badge/stories/Badge.stories.tsx",1629,9583],"./components/BadgeDot/stories/BadgeDot.stories":["./src/components/BadgeDot/stories/BadgeDot.stories.tsx",5881],"./components/BadgeDot/stories/BadgeDot.stories.tsx":["./src/components/BadgeDot/stories/BadgeDot.stories.tsx",5881],"./components/Breadcrumbs/stories/Breadcrumbs.stories":["./src/components/Breadcrumbs/stories/Breadcrumbs.stories.tsx",4976,7587,502,5977,3860,9675,4890,7635],"./components/Breadcrumbs/stories/Breadcrumbs.stories.tsx":["./src/components/Breadcrumbs/stories/Breadcrumbs.stories.tsx",4976,7587,502,5977,3860,9675,4890,7635],"./components/Button/stories/Button.stories":["./src/components/Button/stories/Button.stories.tsx",1629,377],"./components/Button/stories/Button.stories.tsx":["./src/components/Button/stories/Button.stories.tsx",1629,377],"./components/ButtonGroup/stories/ButtonGroup.stories":["./src/components/ButtonGroup/stories/ButtonGroup.stories.tsx",1629,8665,7151],"./components/ButtonGroup/stories/ButtonGroup.stories.tsx":["./src/components/ButtonGroup/stories/ButtonGroup.stories.tsx",1629,8665,7151],"./components/CSSCustomProps/stories/CSSCustomProps.stories":["./src/components/CSSCustomProps/stories/CSSCustomProps.stories.tsx",4437],"./components/CSSCustomProps/stories/CSSCustomProps.stories.tsx":["./src/components/CSSCustomProps/stories/CSSCustomProps.stories.tsx",4437],"./components/Calendar/stories/Calendar.stories":["./src/components/Calendar/stories/Calendar.stories.tsx",7587,1629,2470,2505],"./components/Calendar/stories/Calendar.stories.tsx":["./src/components/Calendar/stories/Calendar.stories.tsx",7587,1629,2470,2505],"./components/Carousel/stories/Carousel.stories":["./src/components/Carousel/stories/Carousel.stories.tsx",8665,609],"./components/Carousel/stories/Carousel.stories.tsx":["./src/components/Carousel/stories/Carousel.stories.tsx",8665,609],"./components/CarouselSlider/stories/CarouselSlider.stories":["./src/components/CarouselSlider/stories/CarouselSlider.stories.tsx",8665,8259,6363],"./components/CarouselSlider/stories/CarouselSlider.stories.tsx":["./src/components/CarouselSlider/stories/CarouselSlider.stories.tsx",8665,8259,6363],"./components/Checkbox/stories/Checkbox.stories":["./src/components/Checkbox/stories/Checkbox.stories.tsx",8139],"./components/Checkbox/stories/Checkbox.stories.tsx":["./src/components/Checkbox/stories/Checkbox.stories.tsx",8139],"./components/CheckboxCompositeGroup/stories/CheckboxCompositeGroup.stories":["./src/components/CheckboxCompositeGroup/stories/CheckboxCompositeGroup.stories.tsx",1187,1403],"./components/CheckboxCompositeGroup/stories/CheckboxCompositeGroup.stories.tsx":["./src/components/CheckboxCompositeGroup/stories/CheckboxCompositeGroup.stories.tsx",1187,1403],"./components/Chips/stories/Chips.stories":["./src/components/Chips/stories/Chips.stories.tsx",7587,6235,1679],"./components/Chips/stories/Chips.stories.tsx":["./src/components/Chips/stories/Chips.stories.tsx",7587,6235,1679],"./components/ContentSwitcher/stories/ContentSwitcher.stories":["./src/components/ContentSwitcher/stories/ContentSwitcher.stories.tsx",7587,1911],"./components/ContentSwitcher/stories/ContentSwitcher.stories.tsx":["./src/components/ContentSwitcher/stories/ContentSwitcher.stories.tsx",7587,1911],"./components/Divider/stories/Divider.stories":["./src/components/Divider/stories/Divider.stories.tsx",3819],"./components/Divider/stories/Divider.stories.tsx":["./src/components/Divider/stories/Divider.stories.tsx",3819],"./components/Drawer/stories/Drawer.stories":["./src/components/Drawer/stories/Drawer.stories.tsx",7587,6501,1629,6217,1187,3035],"./components/Drawer/stories/Drawer.stories.tsx":["./src/components/Drawer/stories/Drawer.stories.tsx",7587,6501,1629,6217,1187,3035],"./components/DropDownMenu/stories/DropDownMenu.stories":["./src/components/DropDownMenu/stories/DropDownMenu.stories.tsx",1629,8413],"./components/DropDownMenu/stories/DropDownMenu.stories.tsx":["./src/components/DropDownMenu/stories/DropDownMenu.stories.tsx",1629,8413],"./components/DropMenu/stories/DropMenu.stories":["./src/components/DropMenu/stories/DropMenu.stories.tsx",7587,502,5977,3860,9675,1629,1187,1990,9225],"./components/DropMenu/stories/DropMenu.stories.tsx":["./src/components/DropMenu/stories/DropMenu.stories.tsx",7587,502,5977,3860,9675,1629,1187,1990,9225],"./components/DropdownContainer/stories/DropDownContainer.stories":["./src/components/DropdownContainer/stories/DropDownContainer.stories.tsx",502,5977,3860,9675,1629,3703],"./components/DropdownContainer/stories/DropDownContainer.stories.tsx":["./src/components/DropdownContainer/stories/DropDownContainer.stories.tsx",502,5977,3860,9675,1629,3703],"./components/Field/stories/Field.stories":["./src/components/Field/stories/Field.stories.tsx",7587,6501,6217,2623],"./components/Field/stories/Field.stories.tsx":["./src/components/Field/stories/Field.stories.tsx",7587,6501,6217,2623],"./components/Flex/stories/Flex.stories":["./src/components/Flex/stories/Flex.stories.tsx",7587,502,6501,6217,4272,9055],"./components/Flex/stories/Flex.stories.tsx":["./src/components/Flex/stories/Flex.stories.tsx",7587,502,6501,6217,4272,9055],"./components/FloatingButton/stories/FloatingButton.stories":["./src/components/FloatingButton/stories/FloatingButton.stories.tsx",7587,8555,1885],"./components/FloatingButton/stories/FloatingButton.stories.tsx":["./src/components/FloatingButton/stories/FloatingButton.stories.tsx",7587,8555,1885],"./components/FloatingButton/stories/FloatingButtonMenu.stories":["./src/components/FloatingButton/stories/FloatingButtonMenu.stories.tsx",7587,8259,8555,500],"./components/FloatingButton/stories/FloatingButtonMenu.stories.tsx":["./src/components/FloatingButton/stories/FloatingButtonMenu.stories.tsx",7587,8259,8555,500],"./components/GlobalSearch/stories/GlobalSearch.stories":["./src/components/GlobalSearch/stories/GlobalSearch.stories.tsx",7523,7587,502,5977,3860,9675,6501,7334,8539],"./components/GlobalSearch/stories/GlobalSearch.stories.tsx":["./src/components/GlobalSearch/stories/GlobalSearch.stories.tsx",7523,7587,502,5977,3860,9675,6501,7334,8539],"./components/GroupActionsPane/stories/GroupActionsPane.stories":["./src/components/GroupActionsPane/stories/GroupActionsPane.stories.tsx",7587,502,5977,3860,9675,1629,1187,1569],"./components/GroupActionsPane/stories/GroupActionsPane.stories.tsx":["./src/components/GroupActionsPane/stories/GroupActionsPane.stories.tsx",7587,502,5977,3860,9675,1629,1187,1569],"./components/Hint/stories/Hint.stories":["./src/components/Hint/stories/Hint.stories.tsx",1629,3185,7659],"./components/Hint/stories/Hint.stories.tsx":["./src/components/Hint/stories/Hint.stories.tsx",1629,3185,7659],"./components/IconButton/stories/IconButton.stories":["./src/components/IconButton/stories/IconButton.stories.tsx",8699],"./components/IconButton/stories/IconButton.stories.tsx":["./src/components/IconButton/stories/IconButton.stories.tsx",8699],"./components/IconButtonGroup/stories/IconButtonGroup.stories":["./src/components/IconButtonGroup/stories/IconButtonGroup.stories.tsx",7587,8665,5535],"./components/IconButtonGroup/stories/IconButtonGroup.stories.tsx":["./src/components/IconButtonGroup/stories/IconButtonGroup.stories.tsx",7587,8665,5535],"./components/IconPlacement/stories/IconPlacement.stories":["./src/components/IconPlacement/stories/IconPlacement.stories.tsx",8383],"./components/IconPlacement/stories/IconPlacement.stories.tsx":["./src/components/IconPlacement/stories/IconPlacement.stories.tsx",8383],"./components/ImageViewer/stories/ImageViewer.stories":["./src/components/ImageViewer/stories/ImageViewer.stories.tsx",7587,8665,7927],"./components/ImageViewer/stories/ImageViewer.stories.tsx":["./src/components/ImageViewer/stories/ImageViewer.stories.tsx",7587,8665,7927],"./components/Link/stories/Link.stories":["./src/components/Link/stories/Link.stories.tsx",4976,6961],"./components/Link/stories/Link.stories.tsx":["./src/components/Link/stories/Link.stories.tsx",4976,6961],"./components/List/stories/List.stories":["./src/components/List/stories/List.stories.tsx",2637,6037],"./components/List/stories/List.stories.tsx":["./src/components/List/stories/List.stories.tsx",2637,6037],"./components/List/stories/OrderedList.stories":["./src/components/List/stories/OrderedList.stories.tsx",308],"./components/List/stories/OrderedList.stories.tsx":["./src/components/List/stories/OrderedList.stories.tsx",308],"./components/List/stories/UnorderedList.stories":["./src/components/List/stories/UnorderedList.stories.tsx",2637,5111],"./components/List/stories/UnorderedList.stories.tsx":["./src/components/List/stories/UnorderedList.stories.tsx",2637,5111],"./components/Menu/stories/Menu.stories":["./src/components/Menu/stories/Menu.stories.tsx",768,7587,502,3860,9675,6501,1629,1187,1990,599],"./components/Menu/stories/Menu.stories.tsx":["./src/components/Menu/stories/Menu.stories.tsx",768,7587,502,3860,9675,6501,1629,1187,1990,599],"./components/MenuButton/stories/MenuButton.stories":["./src/components/MenuButton/stories/MenuButton.stories.tsx",502,5977,3860,9675,1629,1187,2174,4459],"./components/MenuButton/stories/MenuButton.stories.tsx":["./src/components/MenuButton/stories/MenuButton.stories.tsx",502,5977,3860,9675,1629,1187,2174,4459],"./components/Modal/stories/Modal.stories":["./src/components/Modal/stories/Modal.stories.tsx",7587,502,5977,3860,9675,6501,1629,6217,1187,6235,4272,4384,4776,5435],"./components/Modal/stories/Modal.stories.tsx":["./src/components/Modal/stories/Modal.stories.tsx",7587,502,5977,3860,9675,6501,1629,6217,1187,6235,4272,4384,4776,5435],"./components/MultiButton/stories/MultiButton.stories":["./src/components/MultiButton/stories/MultiButton.stories.tsx",502,5977,3860,9675,1629,3883],"./components/MultiButton/stories/MultiButton.stories.tsx":["./src/components/MultiButton/stories/MultiButton.stories.tsx",502,5977,3860,9675,1629,3883],"./components/Notification/stories/Notification.stories":["./src/components/Notification/stories/Notification.stories.tsx",4147],"./components/Notification/stories/Notification.stories.tsx":["./src/components/Notification/stories/Notification.stories.tsx",4147],"./components/NotificationItem/stories/NotificationItem.stories":["./src/components/NotificationItem/stories/NotificationItem.stories.tsx",8665,2189],"./components/NotificationItem/stories/NotificationItem.stories.tsx":["./src/components/NotificationItem/stories/NotificationItem.stories.tsx",8665,2189],"./components/OverflowMenu/stories/OverflowMenu.stories":["./src/components/OverflowMenu/stories/OverflowMenu.stories.tsx",502,5977,3860,9675,4890,4315],"./components/OverflowMenu/stories/OverflowMenu.stories.tsx":["./src/components/OverflowMenu/stories/OverflowMenu.stories.tsx",502,5977,3860,9675,4890,4315],"./components/PaginationOne/stories/PaginationOne.stories":["./src/components/PaginationOne/stories/PaginationOne.stories.tsx",7587,502,5977,3860,9675,6501,1629,6217,6823],"./components/PaginationOne/stories/PaginationOne.stories.tsx":["./src/components/PaginationOne/stories/PaginationOne.stories.tsx",7587,502,5977,3860,9675,6501,1629,6217,6823],"./components/PaginationSimple/stories/PaginationSimple.stories":["./src/components/PaginationSimple/stories/PaginationSimple.stories.tsx",385],"./components/PaginationSimple/stories/PaginationSimple.stories.tsx":["./src/components/PaginationSimple/stories/PaginationSimple.stories.tsx",385],"./components/PaginationTwo/stories/PaginationTwo.stories":["./src/components/PaginationTwo/stories/PaginationTwo.stories.tsx",7587,6501,1629,5919],"./components/PaginationTwo/stories/PaginationTwo.stories.tsx":["./src/components/PaginationTwo/stories/PaginationTwo.stories.tsx",7587,6501,1629,5919],"./components/Pill/stories/Pill.stories":["./src/components/Pill/stories/Pill.stories.tsx",7587,502,5977,3860,9675,555],"./components/Pill/stories/Pill.stories.tsx":["./src/components/Pill/stories/Pill.stories.tsx",7587,502,5977,3860,9675,555],"./components/ProgressHeader/stories/ProgressHeader.stories":["./src/components/ProgressHeader/stories/ProgressHeader.stories.tsx",6389],"./components/ProgressHeader/stories/ProgressHeader.stories.tsx":["./src/components/ProgressHeader/stories/ProgressHeader.stories.tsx",6389],"./components/ProgressHeader/stories/ProgressHeaderAnimation.stories":["./src/components/ProgressHeader/stories/ProgressHeaderAnimation.stories.tsx",925],"./components/ProgressHeader/stories/ProgressHeaderAnimation.stories.tsx":["./src/components/ProgressHeader/stories/ProgressHeaderAnimation.stories.tsx",925],"./components/ProgressPage/stories/ProgressPage.stories":["./src/components/ProgressPage/stories/ProgressPage.stories.tsx",8993],"./components/ProgressPage/stories/ProgressPage.stories.tsx":["./src/components/ProgressPage/stories/ProgressPage.stories.tsx",8993],"./components/ProgressStepper/stories/ProgressStepper.stories":["./src/components/ProgressStepper/stories/ProgressStepper.stories.tsx",1379],"./components/ProgressStepper/stories/ProgressStepper.stories.tsx":["./src/components/ProgressStepper/stories/ProgressStepper.stories.tsx",1379],"./components/Pulse/stories/Pulse.stories":["./src/components/Pulse/stories/Pulse.stories.tsx",1435],"./components/Pulse/stories/Pulse.stories.tsx":["./src/components/Pulse/stories/Pulse.stories.tsx",1435],"./components/RadioButton/stories/RadioButton.stories":["./src/components/RadioButton/stories/RadioButton.stories.tsx",1629,3185,6611],"./components/RadioButton/stories/RadioButton.stories.tsx":["./src/components/RadioButton/stories/RadioButton.stories.tsx",1629,3185,6611],"./components/Range/stories/Range.stories":["./src/components/Range/stories/Range.stories.tsx",217,211],"./components/Range/stories/Range.stories.tsx":["./src/components/Range/stories/Range.stories.tsx",217,211],"./components/Scrollbar/stories/Scrollbar.stories":["./src/components/Scrollbar/stories/Scrollbar.stories.tsx",502,8665,8259,1223],"./components/Scrollbar/stories/Scrollbar.stories.tsx":["./src/components/Scrollbar/stories/Scrollbar.stories.tsx",502,8665,8259,1223],"./components/SegmentedControl/stories/SegmentedControl.stories":["./src/components/SegmentedControl/stories/SegmentedControl.stories.tsx",6331],"./components/SegmentedControl/stories/SegmentedControl.stories.tsx":["./src/components/SegmentedControl/stories/SegmentedControl.stories.tsx",6331],"./components/SelectTree/stories/SelectTree.stories":["./src/components/SelectTree/stories/SelectTree.stories.tsx",1187,6814,6609],"./components/SelectTree/stories/SelectTree.stories.tsx":["./src/components/SelectTree/stories/SelectTree.stories.tsx",1187,6814,6609],"./components/Slider/stories/Slider.stories":["./src/components/Slider/stories/Slider.stories.tsx",7587,9478,5627],"./components/Slider/stories/Slider.stories.tsx":["./src/components/Slider/stories/Slider.stories.tsx",7587,9478,5627],"./components/Spinner/stories/Spinner.stories":["./src/components/Spinner/stories/Spinner.stories.tsx",1629,7667],"./components/Spinner/stories/Spinner.stories.tsx":["./src/components/Spinner/stories/Spinner.stories.tsx",1629,7667],"./components/StatusIndicator/stories/StatusIndicator.stories":["./src/components/StatusIndicator/stories/StatusIndicator.stories.tsx",4375],"./components/StatusIndicator/stories/StatusIndicator.stories.tsx":["./src/components/StatusIndicator/stories/StatusIndicator.stories.tsx",4375],"./components/Stepper/stories/Stepper.stories":["./src/components/Stepper/stories/Stepper.stories.tsx",7587,1629,7563],"./components/Stepper/stories/Stepper.stories.tsx":["./src/components/Stepper/stories/Stepper.stories.tsx",7587,1629,7563],"./components/T/stories/T.stories":["./src/components/T/stories/T.stories.tsx",7587,535],"./components/T/stories/T.stories.tsx":["./src/components/T/stories/T.stories.tsx",7587,535],"./components/TabMenu/stories/TabMenu.stories":["./src/components/TabMenu/stories/TabMenu.stories.tsx",502,5977,3860,9675,1629,4890,1387],"./components/TabMenu/stories/TabMenu.stories.tsx":["./src/components/TabMenu/stories/TabMenu.stories.tsx",502,5977,3860,9675,1629,4890,1387],"./components/TabMenuComponent/stories/filterTabsStories/FilterTabs.stories":["./src/components/TabMenuComponent/stories/filterTabsStories/FilterTabs.stories.tsx",8665,8132,330],"./components/TabMenuComponent/stories/filterTabsStories/FilterTabs.stories.tsx":["./src/components/TabMenuComponent/stories/filterTabsStories/FilterTabs.stories.tsx",8665,8132,330],"./components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontal.stories":["./src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontal.stories.tsx",7489,7587,502,5977,3860,9675,8665,4890,8132,2499,4374],"./components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontal.stories.tsx":["./src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontal.stories.tsx",7489,7587,502,5977,3860,9675,8665,4890,8132,2499,4374],"./components/TabMenuComponent/stories/horizontalTabMenuStories/TabMenuHorizontal.stories":["./src/components/TabMenuComponent/stories/horizontalTabMenuStories/TabMenuHorizontal.stories.tsx",7587,502,5977,3860,9675,8665,4890,8132,2499,2566],"./components/TabMenuComponent/stories/horizontalTabMenuStories/TabMenuHorizontal.stories.tsx":["./src/components/TabMenuComponent/stories/horizontalTabMenuStories/TabMenuHorizontal.stories.tsx",7587,502,5977,3860,9675,8665,4890,8132,2499,2566],"./components/TabMenuComponent/stories/horizontalTabsStories/HorizontalTabs.stories":["./src/components/TabMenuComponent/stories/horizontalTabsStories/HorizontalTabs.stories.tsx",8665,8132,390],"./components/TabMenuComponent/stories/horizontalTabsStories/HorizontalTabs.stories.tsx":["./src/components/TabMenuComponent/stories/horizontalTabsStories/HorizontalTabs.stories.tsx",8665,8132,390],"./components/TabMenuComponent/stories/iconTabMenuStories/IconTabMenu.stories":["./src/components/TabMenuComponent/stories/iconTabMenuStories/IconTabMenu.stories.tsx",8665,4880],"./components/TabMenuComponent/stories/iconTabMenuStories/IconTabMenu.stories.tsx":["./src/components/TabMenuComponent/stories/iconTabMenuStories/IconTabMenu.stories.tsx",8665,4880],"./components/TabMenuComponent/stories/verticalTabMenuStories/VerticalTabMenu.stories":["./src/components/TabMenuComponent/stories/verticalTabMenuStories/VerticalTabMenu.stories.tsx",7587,502,5977,3860,9675,8665,4890,8132,3690],"./components/TabMenuComponent/stories/verticalTabMenuStories/VerticalTabMenu.stories.tsx":["./src/components/TabMenuComponent/stories/verticalTabMenuStories/VerticalTabMenu.stories.tsx",7587,502,5977,3860,9675,8665,4890,8132,3690],"./components/Table/stories/Table.stories":["./src/components/Table/stories/Table.stories.tsx",7587,502,5977,3860,9675,6501,1629,6217,8665,1187,4890,2470,3469,2340,8600,1663],"./components/Table/stories/Table.stories.tsx":["./src/components/Table/stories/Table.stories.tsx",7587,502,5977,3860,9675,6501,1629,6217,8665,1187,4890,2470,3469,2340,8600,1663],"./components/Tag/stories/Tag.stories":["./src/components/Tag/stories/Tag.stories.tsx",7587,3307,7055],"./components/Tag/stories/Tag.stories.tsx":["./src/components/Tag/stories/Tag.stories.tsx",7587,3307,7055],"./components/TagMenu/stories/TagMenu.stories":["./src/components/TagMenu/stories/TagMenu.stories.tsx",7587,502,5977,3860,9675,3307,5343],"./components/TagMenu/stories/TagMenu.stories.tsx":["./src/components/TagMenu/stories/TagMenu.stories.tsx",7587,502,5977,3860,9675,3307,5343],"./components/Tags/stories/Tags.stories":["./src/components/Tags/stories/Tags.stories.tsx",7587,3307,5275],"./components/Tags/stories/Tags.stories.tsx":["./src/components/Tags/stories/Tags.stories.tsx",7587,3307,5275],"./components/TextButton/stories/TextButton.stories":["./src/components/TextButton/stories/TextButton.stories.tsx",1167],"./components/TextButton/stories/TextButton.stories.tsx":["./src/components/TextButton/stories/TextButton.stories.tsx",1167],"./components/TextButtonMenu/stories/TextButtonMenu.stories":["./src/components/TextButtonMenu/stories/TextButtonMenu.stories.tsx",502,5977,3860,9675,8025],"./components/TextButtonMenu/stories/TextButtonMenu.stories.tsx":["./src/components/TextButtonMenu/stories/TextButtonMenu.stories.tsx",502,5977,3860,9675,8025],"./components/Toast/stories/Toast.stories":["./src/components/Toast/stories/Toast.stories.tsx",7587,6501,1629,8665,9215],"./components/Toast/stories/Toast.stories.tsx":["./src/components/Toast/stories/Toast.stories.tsx",7587,6501,1629,8665,9215],"./components/Toggle/stories/Toggle.stories":["./src/components/Toggle/stories/Toggle.stories.tsx",8259,9877],"./components/Toggle/stories/Toggle.stories.tsx":["./src/components/Toggle/stories/Toggle.stories.tsx",8259,9877],"./components/Tooltip/stories/Tooltip.stories":["./src/components/Tooltip/stories/Tooltip.stories.tsx",7587,502,5977,3860,9675,1629,2174,4927],"./components/Tooltip/stories/Tooltip.stories.tsx":["./src/components/Tooltip/stories/Tooltip.stories.tsx",7587,502,5977,3860,9675,1629,2174,4927],"./components/TooltipHOC/stories/TooltipHoc.stories":["./src/components/TooltipHOC/stories/TooltipHoc.stories.tsx",7587,6501,1629,6217,5035],"./components/TooltipHOC/stories/TooltipHoc.stories.tsx":["./src/components/TooltipHOC/stories/TooltipHoc.stories.tsx",7587,6501,1629,6217,5035],"./components/Tree/stories/Tree.stories":["./src/components/Tree/stories/Tree.stories.tsx",1187,6814,1305],"./components/Tree/stories/Tree.stories.tsx":["./src/components/Tree/stories/Tree.stories.tsx",1187,6814,1305],"./components/Typography/stories/DefaultTypography.stories":["./src/components/Typography/stories/DefaultTypography.stories.tsx",8665,3012],"./components/Typography/stories/DefaultTypography.stories.tsx":["./src/components/Typography/stories/DefaultTypography.stories.tsx",8665,3012],"./components/form/CheckboxField/stories/CheckboxField.stories":["./src/components/form/CheckboxField/stories/CheckboxField.stories.tsx",1187,3185,9426],"./components/form/CheckboxField/stories/CheckboxField.stories.tsx":["./src/components/form/CheckboxField/stories/CheckboxField.stories.tsx",1187,3185,9426],"./components/form/DateField/stories/DateField.stories":["./src/components/form/DateField/stories/DateField.stories.tsx",7587,5977,6501,6217,2470,3469,3666],"./components/form/DateField/stories/DateField.stories.tsx":["./src/components/form/DateField/stories/DateField.stories.tsx",7587,5977,6501,6217,2470,3469,3666],"./components/form/DateTimeField/stories/DateTimeField.stories":["./src/components/form/DateTimeField/stories/DateTimeField.stories.tsx",7587,502,5977,3860,9675,6501,6217,2470,3469,1515,7518],"./components/form/DateTimeField/stories/DateTimeField.stories.tsx":["./src/components/form/DateTimeField/stories/DateTimeField.stories.tsx",7587,502,5977,3860,9675,6501,6217,2470,3469,1515,7518],"./components/form/EditModeAreaField/stories/EditModeAreaField.stories":["./src/components/form/EditModeAreaField/stories/EditModeAreaField.stories.tsx",7587,502,6501,1629,6217,4272,2033,438],"./components/form/EditModeAreaField/stories/EditModeAreaField.stories.tsx":["./src/components/form/EditModeAreaField/stories/EditModeAreaField.stories.tsx",7587,502,6501,1629,6217,4272,2033,438],"./components/form/EditModeField/stories/EditModeField.stories":["./src/components/form/EditModeField/stories/EditModeField.stories.tsx",7587,502,6501,1629,6217,4272,5054,2254],"./components/form/EditModeField/stories/EditModeField.stories.tsx":["./src/components/form/EditModeField/stories/EditModeField.stories.tsx",7587,502,6501,1629,6217,4272,5054,2254],"./components/form/FieldSet/stories/FieldSet.stories":["./src/components/form/FieldSet/stories/FieldSet.stories.tsx",6217,1187,2340,3088],"./components/form/FieldSet/stories/FieldSet.stories.tsx":["./src/components/form/FieldSet/stories/FieldSet.stories.tsx",6217,1187,2340,3088],"./components/form/FileInputField/stories/FileInputField.stories":["./src/components/form/FileInputField/stories/FileInputField.stories.tsx",7587,6217,3757,5640],"./components/form/FileInputField/stories/FileInputField.stories.tsx":["./src/components/form/FileInputField/stories/FileInputField.stories.tsx",7587,6217,3757,5640],"./components/form/InputExField/stories/InputExField.stories":["./src/components/form/InputExField/stories/InputExField.stories.tsx",7587,5977,3860,6501,6217,7334,6607,6718],"./components/form/InputExField/stories/InputExField.stories.tsx":["./src/components/form/InputExField/stories/InputExField.stories.tsx",7587,5977,3860,6501,6217,7334,6607,6718],"./components/form/InputField/stories/InputField.stories":["./src/components/form/InputField/stories/InputField.stories.tsx",7587,6501,6217,3185,4540],"./components/form/InputField/stories/InputField.stories.tsx":["./src/components/form/InputField/stories/InputField.stories.tsx",7587,6501,6217,3185,4540],"./components/form/MultiInputField/stories/MultiInputField.stories":["./src/components/form/MultiInputField/stories/MultiInputField.stories.tsx",7587,6501,6217,6235,3551,6238],"./components/form/MultiInputField/stories/MultiInputField.stories.tsx":["./src/components/form/MultiInputField/stories/MultiInputField.stories.tsx",7587,6501,6217,6235,3551,6238],"./components/form/NumberInputField/stories/NumberInputField.stories":["./src/components/form/NumberInputField/stories/NumberInputField.stories.tsx",6217,2307,2586],"./components/form/NumberInputField/stories/NumberInputField.stories.tsx":["./src/components/form/NumberInputField/stories/NumberInputField.stories.tsx",6217,2307,2586],"./components/form/PhoneInputField/stories/PhoneInputField.stories":["./src/components/form/PhoneInputField/stories/PhoneInputField.stories.tsx",4208,7587,502,5977,3860,9675,6501,6217,8467,6982],"./components/form/PhoneInputField/stories/PhoneInputField.stories.tsx":["./src/components/form/PhoneInputField/stories/PhoneInputField.stories.tsx",4208,7587,502,5977,3860,9675,6501,6217,8467,6982],"./components/form/ReadOnlyMaskedField/stories/ReadOnlyMaskedField.stories":["./src/components/form/ReadOnlyMaskedField/stories/ReadOnlyMaskedField.stories.tsx",4208,7587,502,5977,3860,9675,6501,6217,2470,3469,8467,1742],"./components/form/ReadOnlyMaskedField/stories/ReadOnlyMaskedField.stories.tsx":["./src/components/form/ReadOnlyMaskedField/stories/ReadOnlyMaskedField.stories.tsx",4208,7587,502,5977,3860,9675,6501,6217,2470,3469,8467,1742],"./components/form/SelectField/stories/SelectField.stories":["./src/components/form/SelectField/stories/SelectField.stories.tsx",7587,502,5977,3860,9675,6217,1187,6235,4384,1454,4490],"./components/form/SelectField/stories/SelectField.stories.tsx":["./src/components/form/SelectField/stories/SelectField.stories.tsx",7587,502,5977,3860,9675,6217,1187,6235,4384,1454,4490],"./components/form/SliderInputField/stories/SliderInputField.stories":["./src/components/form/SliderInputField/stories/SliderInputField.stories.tsx",7587,6217,2307,9478,174],"./components/form/SliderInputField/stories/SliderInputField.stories.tsx":["./src/components/form/SliderInputField/stories/SliderInputField.stories.tsx",7587,6217,2307,9478,174],"./components/form/SliderRangeField/stories/SliderRangeField.stories":["./src/components/form/SliderRangeField/stories/SliderRangeField.stories.tsx",6217,2307,217,7220],"./components/form/SliderRangeField/stories/SliderRangeField.stories.tsx":["./src/components/form/SliderRangeField/stories/SliderRangeField.stories.tsx",6217,2307,217,7220],"./components/form/SuggestField/stories/SuggestField.stories":["./src/components/form/SuggestField/stories/SuggestField.stories.tsx",7587,502,5977,3860,9675,6501,6217,3691,7132],"./components/form/SuggestField/stories/SuggestField.stories.tsx":["./src/components/form/SuggestField/stories/SuggestField.stories.tsx",7587,502,5977,3860,9675,6501,6217,3691,7132],"./components/form/TextField/stories/TextField.stories":["./src/components/form/TextField/stories/TextField.stories.tsx",7587,502,6217,4272,7358],"./components/form/TextField/stories/TextField.stories.tsx":["./src/components/form/TextField/stories/TextField.stories.tsx",7587,502,6217,4272,7358],"./components/form/TimeField/stories/TimeField.stories":["./src/components/form/TimeField/stories/TimeField.stories.tsx",7587,502,5977,3860,9675,6501,6217,1515,3382],"./components/form/TimeField/stories/TimeField.stories.tsx":["./src/components/form/TimeField/stories/TimeField.stories.tsx",7587,502,5977,3860,9675,6501,6217,1515,3382],"./components/form/TreeSelectField/stories/TreeSelectField.stories":["./src/components/form/TreeSelectField/stories/TreeSelectField.stories.tsx",7587,502,5977,3860,9675,6501,6217,1187,6235,3551,2137,9462],"./components/form/TreeSelectField/stories/TreeSelectField.stories.tsx":["./src/components/form/TreeSelectField/stories/TreeSelectField.stories.tsx",7587,502,5977,3860,9675,6501,6217,1187,6235,3551,2137,9462],"./components/input/DateInput/stories/DateInput.stories":["./src/components/input/DateInput/stories/DateInput.stories.tsx",7587,5977,6501,2470,3469,2600],"./components/input/DateInput/stories/DateInput.stories.tsx":["./src/components/input/DateInput/stories/DateInput.stories.tsx",7587,5977,6501,2470,3469,2600],"./components/input/EditMode/stories/EditMode.stories":["./src/components/input/EditMode/stories/EditMode.stories.tsx",7587,502,6501,1629,4272,5054,80],"./components/input/EditMode/stories/EditMode.stories.tsx":["./src/components/input/EditMode/stories/EditMode.stories.tsx",7587,502,6501,1629,4272,5054,80],"./components/input/EditModeArea/stories/EditModeArea.stories":["./src/components/input/EditModeArea/stories/EditModeArea.stories.tsx",7587,502,6501,1629,4272,2033,8226],"./components/input/EditModeArea/stories/EditModeArea.stories.tsx":["./src/components/input/EditModeArea/stories/EditModeArea.stories.tsx",7587,502,6501,1629,4272,2033,8226],"./components/input/FileInput/stories/FileInput.stories":["./src/components/input/FileInput/stories/FileInput.stories.tsx",7587,1629,6217,3757,1888],"./components/input/FileInput/stories/FileInput.stories.tsx":["./src/components/input/FileInput/stories/FileInput.stories.tsx",7587,1629,6217,3757,1888],"./components/input/FileUploader/stories/FileUploader.stories":["./src/components/input/FileUploader/stories/FileUploader.stories.tsx",7587,2682],"./components/input/FileUploader/stories/FileUploader.stories.tsx":["./src/components/input/FileUploader/stories/FileUploader.stories.tsx",7587,2682],"./components/input/InputEx/stories/InputEx.stories":["./src/components/input/InputEx/stories/InputEx.stories.tsx",4398,7587,5977,3860,6501,7334,6607,8176],"./components/input/InputEx/stories/InputEx.stories.tsx":["./src/components/input/InputEx/stories/InputEx.stories.tsx",4398,7587,5977,3860,6501,7334,6607,8176],"./components/input/InputLine/stories/InputLine.stories":["./src/components/input/InputLine/stories/InputLine.stories.tsx",4398,1629,4756],"./components/input/InputLine/stories/InputLine.stories.tsx":["./src/components/input/InputLine/stories/InputLine.stories.tsx",4398,1629,4756],"./components/input/MultiInput/stories/MultiInput.stories":["./src/components/input/MultiInput/stories/MultiInput.stories.tsx",7587,6501,6235,3551,5744],"./components/input/MultiInput/stories/MultiInput.stories.tsx":["./src/components/input/MultiInput/stories/MultiInput.stories.tsx",7587,6501,6235,3551,5744],"./components/input/NumberInput/stories/NumberInput.stories":["./src/components/input/NumberInput/stories/NumberInput.stories.tsx",2307,5684],"./components/input/NumberInput/stories/NumberInput.stories.tsx":["./src/components/input/NumberInput/stories/NumberInput.stories.tsx",2307,5684],"./components/input/PhoneNumberInput/stories/PhoneNumberInput.stories":["./src/components/input/PhoneNumberInput/stories/PhoneNumberInput.stories.tsx",4208,7587,502,5977,3860,9675,6501,8467,2440],"./components/input/PhoneNumberInput/stories/PhoneNumberInput.stories.tsx":["./src/components/input/PhoneNumberInput/stories/PhoneNumberInput.stories.tsx",4208,7587,502,5977,3860,9675,6501,8467,2440],"./components/input/Select/stories/SearchSelect.stories":["./src/components/input/Select/stories/SearchSelect.stories.tsx",7523,7587,502,5977,3860,9675,1629,6217,1187,6235,4384,1454,4776,8126],"./components/input/Select/stories/SearchSelect.stories.tsx":["./src/components/input/Select/stories/SearchSelect.stories.tsx",7523,7587,502,5977,3860,9675,1629,6217,1187,6235,4384,1454,4776,8126],"./components/input/Select/stories/Select.stories":["./src/components/input/Select/stories/Select.stories.tsx",7587,502,5977,3860,9675,1187,6235,4384,1454,3990],"./components/input/Select/stories/Select.stories.tsx":["./src/components/input/Select/stories/Select.stories.tsx",7587,502,5977,3860,9675,1187,6235,4384,1454,3990],"./components/input/SliderInput/stories/SliderInput.stories":["./src/components/input/SliderInput/stories/SliderInput.stories.tsx",7587,2307,9478,1008],"./components/input/SliderInput/stories/SliderInput.stories.tsx":["./src/components/input/SliderInput/stories/SliderInput.stories.tsx",7587,2307,9478,1008],"./components/input/SliderRange/stories/SliderRange.stories":["./src/components/input/SliderRange/stories/SliderRange.stories.tsx",2307,217,5120],"./components/input/SliderRange/stories/SliderRange.stories.tsx":["./src/components/input/SliderRange/stories/SliderRange.stories.tsx",2307,217,5120],"./components/input/SuggestInput/stories/SuggestInput.stories":["./src/components/input/SuggestInput/stories/SuggestInput.stories.tsx",7587,502,5977,3860,9675,6501,3691,7522],"./components/input/SuggestInput/stories/SuggestInput.stories.tsx":["./src/components/input/SuggestInput/stories/SuggestInput.stories.tsx",7587,502,5977,3860,9675,6501,3691,7522],"./components/input/TextArea/stories/TextArea.stories":["./src/components/input/TextArea/stories/TextArea.stories.tsx",7587,502,4272,7262],"./components/input/TextArea/stories/TextArea.stories.tsx":["./src/components/input/TextArea/stories/TextArea.stories.tsx",7587,502,4272,7262],"./components/input/TextInput/stories/TextInput.stories":["./src/components/input/TextInput/stories/TextInput.stories.tsx",7587,6501,1280],"./components/input/TextInput/stories/TextInput.stories.tsx":["./src/components/input/TextInput/stories/TextInput.stories.tsx",7587,6501,1280],"./components/input/TimeInput/stories/TimeInput.stories":["./src/components/input/TimeInput/stories/TimeInput.stories.tsx",7587,502,5977,3860,9675,6501,1515,7584],"./components/input/TimeInput/stories/TimeInput.stories.tsx":["./src/components/input/TimeInput/stories/TimeInput.stories.tsx",7587,502,5977,3860,9675,6501,1515,7584],"./components/input/TreeSelect/stories/TreeSelect.stories":["./src/components/input/TreeSelect/stories/TreeSelect.stories.tsx",7587,502,5977,3860,9675,6501,1187,6235,3551,2137,4881],"./components/input/TreeSelect/stories/TreeSelect.stories.tsx":["./src/components/input/TreeSelect/stories/TreeSelect.stories.tsx",7587,502,5977,3860,9675,6501,1187,6235,3551,2137,4881],"./icons/Icons.stories":["./src/icons/Icons.stories.tsx",4630],"./icons/Icons.stories.tsx":["./src/icons/Icons.stories.tsx",4630],"./locales/locale.stories":["./src/locales/locale.stories.tsx",7587,1629,2470,5155],"./locales/locale.stories.tsx":["./src/locales/locale.stories.tsx",7587,1629,2470,5155]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./src/components/CSSCustomProps/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>DarkThemeCssVars,b:()=>LightThemeCssVars});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var lightThemeText=`
:root,
.admiral-theme-light {
  /*
   * Color Primitives
   * Проверить дополнительно на опечатки
   */

  /* Neutral */
  --admiral-color-Neutral_Neutral00: #FFFFFF;
  --admiral-color-Neutral_Neutral05: #F5F5F6;
  --admiral-color-Neutral_Neutral10: #EAEBEC;
  --admiral-color-Neutral_Neutral20: #D7D8DA;
  --admiral-color-Neutral_Neutral30: #B2B5B8;
  --admiral-color-Neutral_Neutral40: #9EA0A4;
  --admiral-color-Neutral_Neutral50: #74767B;
  --admiral-color-Neutral_Neutral60: #67696D;
  --admiral-color-Neutral_Neutral70: #515256;
  --admiral-color-Neutral_Neutral80: #37383B;
  --admiral-color-Neutral_Neutral90: #252629;

  /* Primary */
  --admiral-color-Primary_Primary10: #EDF5FF;
  --admiral-color-Primary_Primary20: #DDE9FF;
  --admiral-color-Primary_Primary30: #A7C7FF;
  --admiral-color-Primary_Primary40: #6FA3FF;
  --admiral-color-Primary_Primary50: #3A85FF;
  --admiral-color-Primary_Primary60Main: #0062FF;
  --admiral-color-Primary_Primary70: #0046E2;
  --admiral-color-Primary_Primary80: #0132B0;

  /* Special */
  --admiral-color-Special_StaticWhite: #FFFFFF;
  --admiral-color-Special_ElevatedBG: #FFFFFF;
  --admiral-color-Special_DarkStaticNeutral00: #131314;
  --admiral-color-Special_DarkStaticNeutral05: #1B1C1D;
  --admiral-color-Special_DarkStaticNeutral10: #252627;
  --admiral-color-Special_DarkStaticNeutral20: #3B3C3E;
  --admiral-color-Special_DarkStaticNeutral30: #515357;
  --admiral-color-Special_DarkStaticNeutral50: #82868B;
  --admiral-color-Special_DarkStaticNeutral70: #A8ABAF;
  --admiral-color-Special_DarkStaticNeutral80: #C9CACD;
  --admiral-color-Special_DarkStaticNeutral90: #E3E5E7;
  --admiral-color-Special_DarkStaticPrimary60: #3984FF;
  --admiral-color-Special_DarkStaticPrimary70: #5290FF;
  --admiral-color-Special_DarkStaticPrimary80: #689FFF;
  --admiral-color-Special_DarkStaticError60: #EA3C3C;
  --admiral-color-Special_DarkStaticSuccess50: #16913F;

  /* Opacity */
  --admiral-color-Opacity_Hover: #0000000D;
  --admiral-color-Opacity_Focus: #00000017;
  --admiral-color-Opacity_Press: #0000001F;
  --admiral-color-Opacity_Modal: #0000009A;
  --admiral-color-Opacity_DarkStaticHover: #FFFFFF0F;
  --admiral-color-Opacity_DarkStaticFocus: #FFFFFF17;
  --admiral-color-Opacity_DarkStaticPress: #FFFFFF1F;
  --admiral-color-Opacity_Neutral4: #0000000A;
  --admiral-color-Opacity_Neutral8: #00000014;
  --admiral-color-Opacity_Neutral12: #0000001F;
  --admiral-color-Opacity_Neutral16: #00000029;

  /* Error */
  --admiral-color-Error_Error10: #FFEFEF;
  --admiral-color-Error_Error20: #FFDDDD;
  --admiral-color-Error_Error30: #FFA7A7;
  --admiral-color-Error_Error40: #FF7C7C;
  --admiral-color-Error_Error50: #F64E4E;
  --admiral-color-Error_Error60Main: #D92020;
  --admiral-color-Error_Error70: #BA1717;
  --admiral-color-Error_Error80: #981111;

  /* Success */
  --admiral-color-Success_Success10: #EAFCF1;
  --admiral-color-Success_Success20: #C3F4D3;
  --admiral-color-Success_Success30: #80DCA0;
  --admiral-color-Success_Success40: #32C665;
  --admiral-color-Success_Success50Main: #1BA049;
  --admiral-color-Success_Success60: #128238;
  --admiral-color-Success_Success70: #0B682A;

  /* Warning */
  --admiral-color-Warning_Warning10: #FFF1E5;
  --admiral-color-Warning_Warning20: #FFDECE;
  --admiral-color-Warning_Warning30: #FFB799;
  --admiral-color-Warning_Warning40: #FF8D64;
  --admiral-color-Warning_Warning50Main: #FF5C22;
  --admiral-color-Warning_Warning60: #D63F09;
  --admiral-color-Warning_Warning70: #A63208;

  /* Attention */
  --admiral-color-Attention_Attention10: #FEF5D7;
  --admiral-color-Attention_Attention20: #FEE7A0;
  --admiral-color-Attention_Attention30: #FDDD77;
  --admiral-color-Attention_Attention40: #FDD14C;
  --admiral-color-Attention_Attention50Main: #FFC400;
  --admiral-color-Attention_Attention60: #F0B902;
  --admiral-color-Attention_Attention70: #DFAB00;

  /* Purple */
  --admiral-color-Purple_Purple10: #F6F2FF;
  --admiral-color-Purple_Purple20: #EBE0FF;
  --admiral-color-Purple_Purple30: #D4BBFF;
  --admiral-color-Purple_Purple40: #BE95FF;
  --admiral-color-Purple_Purple50: #A56EFF;
  --admiral-color-Purple_Purple60Main: #8A3FFC;
  --admiral-color-Purple_Purple70: #6929C4;
  --admiral-color-Purple_Purple80: #491D8B;

  /* Magenta */
  --admiral-color-Magenta_Magenta10: #FFF0F7;
  --admiral-color-Magenta_Magenta20: #FFDBEB;
  --admiral-color-Magenta_Magenta30: #FFAFD2;
  --admiral-color-Magenta_Magenta40: #FF7EB6;
  --admiral-color-Magenta_Magenta50: #EE5396;
  --admiral-color-Magenta_Magenta60Main: #D02670;
  --admiral-color-Magenta_Magenta70: #9F1853;
  --admiral-color-Magenta_Magenta80: #740937;

  /* Cyan */
  --admiral-color-Cyan_Cyan10: #E5F6FF;
  --admiral-color-Cyan_Cyan20: #C4EAFF;
  --admiral-color-Cyan_Cyan30: #82CFFF;
  --admiral-color-Cyan_Cyan40: #33B1FF;
  --admiral-color-Cyan_Cyan50: #1192E8;
  --admiral-color-Cyan_Cyan60Main: #0072C3;
  --admiral-color-Cyan_Cyan70: #00539A;
  --admiral-color-Cyan_Cyan80: #003A6D;

  /* Teal */
  --admiral-color-Teal_Teal10: #D9FBFB;
  --admiral-color-Teal_Teal20: #B0F0F0;
  --admiral-color-Teal_Teal30: #3DDBD9;
  --admiral-color-Teal_Teal40: #08BDBA;
  --admiral-color-Teal_Teal50: #009D9A;
  --admiral-color-Teal_Teal60Main: #007D79;
  --admiral-color-Teal_Teal70: #005D5D;
  --admiral-color-Teal_Teal80: #004144;

  /*
  * Z-indexes
  */

  --admiral-z-index-tooltip: 100;
  --admiral-z-index-notification: 99;
  --admiral-z-index-hint: 98;
  --admiral-z-index-dropdown: 97;
  --admiral-z-index-modal: 96;
  --admiral-z-index-drawer: 96;

  /* 
  * Box-shadows 
  */

  --admiral-box-shadow-Shadow02: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
  --admiral-box-shadow-Shadow04: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
  --admiral-box-shadow-Shadow08: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
  --admiral-box-shadow-Shadow12: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
  --admiral-box-shadow-Shadow16: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
  --admiral-box-shadow-ShadowStroke: 0px -1px 0px 0px #D6D8DD inset;

  /* 
  * Font-family 
  */
  --admiral-font-family: 'VTB Group UI', sans-serif;

  /* 
  * Font-weights 
  */
  --admiral-font-weight-Header_HL1: 550;
  --admiral-font-weight-Header_HL2: 550;
  --admiral-font-weight-Header_HL3: 550;
  --admiral-font-weight-Header_H1: 550;
  --admiral-font-weight-Header_H2: 550;
  --admiral-font-weight-Header_H3: 550;
  --admiral-font-weight-Header_H4: 550;
  --admiral-font-weight-Header_H5: 550;
  --admiral-font-weight-Header_H6: 550;
  --admiral-font-weight-Subtitle_Subtitle1: 400;
  --admiral-font-weight-Subtitle_Subtitle2: 550;
  --admiral-font-weight-Subtitle_Subtitle3: 550;
  --admiral-font-weight-Body_Body1Long: 400;
  --admiral-font-weight-Body_Body1Short: 400;
  --admiral-font-weight-Body_Body2Long: 400;
  --admiral-font-weight-Body_Body2Short: 400;
  --admiral-font-weight-Button_Button1: 500;
  --admiral-font-weight-Button_Button2: 500;
  --admiral-font-weight-Caption_Caption1: 400;
  --admiral-font-weight-Caption_Caption2: 400;


  /* 
  * Font-sizes 
  */
  --admiral-font-size-Header_HL1: 72px;
  --admiral-font-size-Header_HL2: 56px;
  --admiral-font-size-Header_HL3: 48px;
  --admiral-font-size-Header_H1: 40px;
  --admiral-font-size-Header_H2: 34px;
  --admiral-font-size-Header_H3: 28px;
  --admiral-font-size-Header_H4: 24px;
  --admiral-font-size-Header_H5: 20px;
  --admiral-font-size-Header_H6: 18px;
  --admiral-font-size-Subtitle_Subtitle1: 18px;
  --admiral-font-size-Subtitle_Subtitle2: 16px;
  --admiral-font-size-Subtitle_Subtitle3: 14px;
  --admiral-font-size-Body_Body1Long: 16px;
  --admiral-font-size-Body_Body1Short: 16px;
  --admiral-font-size-Body_Body2Long: 14px;
  --admiral-font-size-Body_Body2Short: 14px;
  --admiral-font-size-Button_Button1: 16px;
  --admiral-font-size-Button_Button2: 14px;
  --admiral-font-size-Caption_Caption1: 12px;
  --admiral-font-size-Caption_Caption2: 10px;

  /* 
  * Line-heights 
  */
  --admiral-line-height-Header_HL1: 80px;
  --admiral-line-height-Header_HL2: 64px;
  --admiral-line-height-Header_HL3: 56px;
  --admiral-line-height-Header_H1: 48px;
  --admiral-line-height-Header_H2: 40px;
  --admiral-line-height-Header_H3: 36px;
  --admiral-line-height-Header_H4: 32px;
  --admiral-line-height-Header_H5: 28px;
  --admiral-line-height-Header_H6: 24px;
  --admiral-line-height-Subtitle_Subtitle1: 24px;
  --admiral-line-height-Subtitle_Subtitle2: 24px;
  --admiral-line-height-Subtitle_Subtitle3: 20px;
  --admiral-line-height-Body_Body1Long: 24px;
  --admiral-line-height-Body_Body1Short: 20px;
  --admiral-line-height-Body_Body2Long: 20px;
  --admiral-line-height-Body_Body2Short: 16px;
  --admiral-line-height-Button_Button1: 24px;
  --admiral-line-height-Button_Button2: 20px;
  --admiral-line-height-Caption_Caption1: 16px;
  --admiral-line-height-Caption_Caption2: 12px;

  /* 
  * Border-radius
  */
  --admiral-border-kind-Small_0: 0;
  --admiral-border-kind-Small_2: 2px;
  --admiral-border-kind-Small_4: 4px;
  --admiral-border-kind-Small_6: 4px;
  --admiral-border-kind-Small_8: 4px;
  --admiral-border-kind-Small_10: 4px;
  --admiral-border-radius-Small: var(--admiral-border-kind-Small_4);

  --admiral-border-kind-Medium_0: 0;
  --admiral-border-kind-Medium_2: 2px;
  --admiral-border-kind-Medium_4: 4px;
  --admiral-border-kind-Medium_6: 6px;
  --admiral-border-kind-Medium_8: 8px;
  --admiral-border-kind-Medium_10: 10px;
  --admiral-border-radius-Medium: var(--admiral-border-kind-Medium_4);

  --admiral-border-kind-Large_0: 0;
  --admiral-border-kind-Large_2: 4px;
  --admiral-border-kind-Large_4: 8px;
  --admiral-border-kind-Large_6: 12px;
  --admiral-border-kind-Large_8: 16px;
  --admiral-border-kind-Large_10: 20px;
  --admiral-border-radius-Large: var(--admiral-border-kind-Large_4);
}
`,darkThemeText=`
.admiral-theme-dark {
  /*
   * Color Primitives
   * Проверить дополнительно на опечатки
   */

  /* Neutral */
  --admiral-color-Neutral_Neutral00: #1B1C1D;
  --admiral-color-Neutral_Neutral05: #131314;
  --admiral-color-Neutral_Neutral10: #252627;
  --admiral-color-Neutral_Neutral20: #3B3C3E;
  --admiral-color-Neutral_Neutral30: #515357;
  --admiral-color-Neutral_Neutral40: #5F6166;
  --admiral-color-Neutral_Neutral50: #82868B;
  --admiral-color-Neutral_Neutral60: #92969B;
  --admiral-color-Neutral_Neutral70: #A8ABAF;
  --admiral-color-Neutral_Neutral80: #C9CACD;
  --admiral-color-Neutral_Neutral90: #E3E5E7;

  /* Primary */
  --admiral-color-Primary_Primary10: #1F2024;
  --admiral-color-Primary_Primary20: #162B67;
  --admiral-color-Primary_Primary30: #022D9A;
  --admiral-color-Primary_Primary40: #0142D3;
  --admiral-color-Primary_Primary50: #0062FF;
  --admiral-color-Primary_Primary60Main: #3984FF;
  --admiral-color-Primary_Primary70: #5290FF;
  --admiral-color-Primary_Primary80: #689FFF;

  /* Special */
  --admiral-color-Special_StaticWhite: #FFFFFF;
  --admiral-color-Special_ElevatedBG: #1B1C1D;
  --admiral-color-Special_DarkStaticNeutral00: #131314;
  --admiral-color-Special_DarkStaticNeutral05: #1B1C1D;
  --admiral-color-Special_DarkStaticNeutral10: #252627;
  --admiral-color-Special_DarkStaticNeutral20: #3B3C3E;
  --admiral-color-Special_DarkStaticNeutral30: #515357;
  --admiral-color-Special_DarkStaticNeutral50: #82868B;
  --admiral-color-Special_DarkStaticNeutral70: #A8ABAF;
  --admiral-color-Special_DarkStaticNeutral80: #C9CACD;
  --admiral-color-Special_DarkStaticNeutral90: #E3E5E7;
  --admiral-color-Special_DarkStaticPrimary60: #3984FF;
  --admiral-color-Special_DarkStaticPrimary70: #5290FF;
  --admiral-color-Special_DarkStaticPrimary80: #689FFF;
  --admiral-color-Special_DarkStaticError60: #EA3C3C;
  --admiral-color-Special_DarkStaticSuccess50: #16913F;

  /* Opacity */
  --admiral-color-Opacity_Hover: #FFFFFF0F;
  --admiral-color-Opacity_Focus: #FFFFFF17;
  --admiral-color-Opacity_Press: #FFFFFF1F;
  --admiral-color-Opacity_Modal: #00000099;
  --admiral-color-Opacity_DarkStaticHover: #FFFFFF0F;
  --admiral-color-Opacity_DarkStaticFocus: #FFFFFF17;
  --admiral-color-Opacity_DarkStaticPress: #FFFFFF1F;
  --admiral-color-Opacity_Neutral4: #FFFFFF0A;
  --admiral-color-Opacity_Neutral8: #FFFFFF14;
  --admiral-color-Opacity_Neutral12: #FFFFFF1F;
  --admiral-color-Opacity_Neutral16: #FFFFFF29;

  /* Error */
  --admiral-color-Error_Error10: #1F2024;
  --admiral-color-Error_Error20: #571B1B;
  --admiral-color-Error_Error30: #880C0C;
  --admiral-color-Error_Error40: #A71212;
  --admiral-color-Error_Error50: #D92020;
  --admiral-color-Error_Error60Main: #EA3C3C;
  --admiral-color-Error_Error70: #F55F5F;
  --admiral-color-Error_Error80: #FA7979;

  /* Success */
  --admiral-color-Success_Success10: #1F2024;
  --admiral-color-Success_Success20: #0E3B1E;
  --admiral-color-Success_Success30: #055320;
  --admiral-color-Success_Success40: #0C7431;
  --admiral-color-Success_Success50Main: #16913F;
  --admiral-color-Success_Success60: #1FA951;
  --admiral-color-Success_Success70: #2FC063;

  /* Warning */
  --admiral-color-Warning_Warning10: #1F2024;
  --admiral-color-Warning_Warning20: #591C04;
  --admiral-color-Warning_Warning30: #902C06;
  --admiral-color-Warning_Warning40: #BC3B0D;
  --admiral-color-Warning_Warning50Main: #EF5018;
  --admiral-color-Warning_Warning60: #FF662F;
  --admiral-color-Warning_Warning70: #FF8559;

  /* Attention */
  --admiral-color-Attention_Attention10: #1F2024;
  --admiral-color-Attention_Attention20: #CA9B00;
  --admiral-color-Attention_Attention30: #DFAB00;
  --admiral-color-Attention_Attention40: #F0B902;
  --admiral-color-Attention_Attention50Main: #FFC400;
  --admiral-color-Attention_Attention60: #FDD14C;
  --admiral-color-Attention_Attention70: #FDDD77;

  /* Purple */
  --admiral-color-Purple_Purple10: #1F2024;
  --admiral-color-Purple_Purple20: #391968;
  --admiral-color-Purple_Purple30: #491D8B;
  --admiral-color-Purple_Purple40: #6929C4;
  --admiral-color-Purple_Purple50: #8A3FFC;
  --admiral-color-Purple_Purple60Main: #A065FE;
  --admiral-color-Purple_Purple70: #B587FF;
  --admiral-color-Purple_Purple80: #CEB1FF;

  /* Magenta */
  --admiral-color-Magenta_Magenta10: #1F2024;
  --admiral-color-Magenta_Magenta20: #510224;
  --admiral-color-Magenta_Magenta30: #740937;
  --admiral-color-Magenta_Magenta40: #9F1853;
  --admiral-color-Magenta_Magenta50: #D02670;
  --admiral-color-Magenta_Magenta60Main: #E84A8E;
  --admiral-color-Magenta_Magenta70: #F970AB;
  --admiral-color-Magenta_Magenta80: #FEA2CA;

  /* Cyan */
  --admiral-color-Cyan_Cyan10: #1F2024;
  --admiral-color-Cyan_Cyan20: #002D56;
  --admiral-color-Cyan_Cyan30: #003A6D;
  --admiral-color-Cyan_Cyan40: #00539A;
  --admiral-color-Cyan_Cyan50: #0072C3;
  --admiral-color-Cyan_Cyan60Main: #0E8CE1;
  --admiral-color-Cyan_Cyan70: #28A6F6;
  --admiral-color-Cyan_Cyan80: #70C7FD;

  /* Teal */
  --admiral-color-Teal_Teal10: #1F2024;
  --admiral-color-Teal_Teal20: #023136;
  --admiral-color-Teal_Teal30: #004144;
  --admiral-color-Teal_Teal40: #005D5D;
  --admiral-color-Teal_Teal50: #007D79;
  --admiral-color-Teal_Teal60Main: #009692;
  --admiral-color-Teal_Teal70: #06B2AF;
  --admiral-color-Teal_Teal80: #2FD2CF;

  /*
  * Z-indexes
  */

  --admiral-z-index-tooltip: 100;
  --admiral-z-index-notification: 99;
  --admiral-z-index-hint: 98;
  --admiral-z-index-dropdown: 97;
  --admiral-z-index-modal: 96;
  --admiral-z-index-drawer: 96;

  /* 
  * Box-shadows 
  */

  --admiral-box-shadow-Shadow02: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.42);
  --admiral-box-shadow-Shadow04: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.22), 0px 0.2px 1px 0.4px rgba(0, 0, 0, 0.20);
  --admiral-box-shadow-Shadow08: 0px 3.2px 16px 0px rgba(0, 0, 0, 0.28), 0px 0.6px 2px 0px rgba(0, 0, 0, 0.16), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.09);
  --admiral-box-shadow-Shadow12: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.06), 0px 4px 18px 0px rgba(0, 0, 0, 0.20), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.16);
  --admiral-box-shadow-Shadow16: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.24), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.12);
  --admiral-box-shadow-ShadowStroke: 0px -1px 0px 0px #3A3C41 inset;

  /* 
  * Font-family 
  */
  --admiral-font-family: 'VTB Group UI', sans-serif;

  /* 
  * Font-weights 
  */
  --admiral-font-weight-Header_HL1: 550;
  --admiral-font-weight-Header_HL2: 550;
  --admiral-font-weight-Header_HL3: 550;
  --admiral-font-weight-Header_H1: 550;
  --admiral-font-weight-Header_H2: 550;
  --admiral-font-weight-Header_H3: 550;
  --admiral-font-weight-Header_H4: 550;
  --admiral-font-weight-Header_H5: 550;
  --admiral-font-weight-Header_H6: 550;
  --admiral-font-weight-Subtitle_Subtitle1: 400;
  --admiral-font-weight-Subtitle_Subtitle2: 550;
  --admiral-font-weight-Subtitle_Subtitle3: 550;
  --admiral-font-weight-Body_Body1Long: 400;
  --admiral-font-weight-Body_Body1Short: 400;
  --admiral-font-weight-Body_Body2Long: 400;
  --admiral-font-weight-Body_Body2Short: 400;
  --admiral-font-weight-Button_Button1: 500;
  --admiral-font-weight-Button_Button2: 500;
  --admiral-font-weight-Caption_Caption1: 400;
  --admiral-font-weight-Caption_Caption2: 400;


  /* 
  * Font-sizes 
  */
  --admiral-font-size-Header_HL1: 72px;
  --admiral-font-size-Header_HL2: 56px;
  --admiral-font-size-Header_HL3: 48px;
  --admiral-font-size-Header_H1: 40px;
  --admiral-font-size-Header_H2: 34px;
  --admiral-font-size-Header_H3: 28px;
  --admiral-font-size-Header_H4: 24px;
  --admiral-font-size-Header_H5: 20px;
  --admiral-font-size-Header_H6: 18px;
  --admiral-font-size-Subtitle_Subtitle1: 18px;
  --admiral-font-size-Subtitle_Subtitle2: 16px;
  --admiral-font-size-Subtitle_Subtitle3: 14px;
  --admiral-font-size-Body_Body1Long: 16px;
  --admiral-font-size-Body_Body1Short: 16px;
  --admiral-font-size-Body_Body2Long: 14px;
  --admiral-font-size-Body_Body2Short: 14px;
  --admiral-font-size-Button_Button1: 16px;
  --admiral-font-size-Button_Button2: 14px;
  --admiral-font-size-Caption_Caption1: 12px;
  --admiral-font-size-Caption_Caption2: 10px;

  /* 
  * Line-heights 
  */
  --admiral-line-height-Header_HL1: 80px;
  --admiral-line-height-Header_HL2: 64px;
  --admiral-line-height-Header_HL3: 56px;
  --admiral-line-height-Header_H1: 48px;
  --admiral-line-height-Header_H2: 40px;
  --admiral-line-height-Header_H3: 36px;
  --admiral-line-height-Header_H4: 32px;
  --admiral-line-height-Header_H5: 28px;
  --admiral-line-height-Header_H6: 24px;
  --admiral-line-height-Subtitle_Subtitle1: 24px;
  --admiral-line-height-Subtitle_Subtitle2: 24px;
  --admiral-line-height-Subtitle_Subtitle3: 20px;
  --admiral-line-height-Body_Body1Long: 24px;
  --admiral-line-height-Body_Body1Short: 20px;
  --admiral-line-height-Body_Body2Long: 20px;
  --admiral-line-height-Body_Body2Short: 16px;
  --admiral-line-height-Button_Button1: 24px;
  --admiral-line-height-Button_Button2: 20px;
  --admiral-line-height-Caption_Caption1: 16px;
  --admiral-line-height-Caption_Caption2: 12px;

  /* 
  * Border-radius
  */
  --admiral-border-kind-Small_0: 0;
  --admiral-border-kind-Small_2: 2px;
  --admiral-border-kind-Small_4: 4px;
  --admiral-border-kind-Small_6: 4px;
  --admiral-border-kind-Small_8: 4px;
  --admiral-border-kind-Small_10: 4px;
  --admiral-border-radius-Small: var(--admiral-border-kind-Small_4);

  --admiral-border-kind-Medium_0: 0;
  --admiral-border-kind-Medium_2: 2px;
  --admiral-border-kind-Medium_4: 4px;
  --admiral-border-kind-Medium_6: 6px;
  --admiral-border-kind-Medium_8: 8px;
  --admiral-border-kind-Medium_10: 10px;
  --admiral-border-radius-Medium: var(--admiral-border-kind-Medium_4);

  --admiral-border-kind-Large_0: 0;
  --admiral-border-kind-Large_2: 4px;
  --admiral-border-kind-Large_4: 8px;
  --admiral-border-kind-Large_6: 12px;
  --admiral-border-kind-Large_8: 16px;
  --admiral-border-kind-Large_10: 20px;
  --admiral-border-radius-Large: var(--admiral-border-kind-Large_4);
}
`;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function LightThemeCssVars(props){return(0,jsx_runtime.jsx)("style",_object_spread({type:"text/css",children:lightThemeText},props))}function DarkThemeCssVars(props){return(0,jsx_runtime.jsx)("style",_object_spread({type:"text/css",children:darkThemeText},props))}try{LightThemeCssVars.displayName="LightThemeCssVars",LightThemeCssVars.__docgenInfo={description:"",displayName:"LightThemeCssVars",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CSSCustomProps/index.tsx#LightThemeCssVars"]={docgenInfo:LightThemeCssVars.__docgenInfo,name:"LightThemeCssVars",path:"src/components/CSSCustomProps/index.tsx#LightThemeCssVars"})}catch(__react_docgen_typescript_loader_error){}try{DarkThemeCssVars.displayName="DarkThemeCssVars",DarkThemeCssVars.__docgenInfo={description:"",displayName:"DarkThemeCssVars",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CSSCustomProps/index.tsx#DarkThemeCssVars"]={docgenInfo:DarkThemeCssVars.__docgenInfo,name:"DarkThemeCssVars",path:"src/components/CSSCustomProps/index.tsx#DarkThemeCssVars"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DropdownProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BK:()=>useDropdown,TT:()=>useDropdownsClickOutside,rO:()=>DropdownContext,tc:()=>DropdownProvider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var DropdownContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({}),DropdownProvider=function(_param){var rootRef=_param.rootRef,props=_object_without_properties(_param,["rootRef"]),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),2),dropdowns=_useState[0],setDropdowns=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),2),currentActiveMenu=_useState1[0],setCurrentActiveMenu=_useState1[1],activateMenu=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(menuRef){setCurrentActiveMenu(menuRef)},[]),deactivateMenu=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(menuRef){setCurrentActiveMenu(function(prevValue){return prevValue===menuRef?void 0:prevValue})},[]),removeDropdown=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(removeDropdown){setDropdowns(function(prevDrops){var index=prevDrops.indexOf(removeDropdown);return index>-1?prevDrops.slice(0,index):prevDrops})},[]),addDropdown=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function(newDropdown){setDropdowns(function(prevDrops){return _to_consumable_array(prevDrops).concat([newDropdown])})},[]),providerValue=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return{addDropdown:addDropdown,removeDropdown:removeDropdown,dropdowns:dropdowns,rootRef:rootRef,activateMenu:activateMenu,deactivateMenu:deactivateMenu,currentActiveMenu:currentActiveMenu}},[addDropdown,removeDropdown,dropdowns,rootRef,activateMenu,deactivateMenu,currentActiveMenu]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DropdownContext.Provider,{value:providerValue,children:props.children})};function useDropdown(dropdownRef){var _useContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DropdownContext),_useContext_dropdowns=_useContext.dropdowns,dropdowns=void 0===_useContext_dropdowns?[]:_useContext_dropdowns,addDropdown=_useContext.addDropdown,removeDropdown=_useContext.removeDropdown,activateMenu=_useContext.activateMenu,deactivateMenu=_useContext.deactivateMenu,currentActiveMenu=_useContext.currentActiveMenu,dropdownIndex=dropdowns.indexOf(dropdownRef);return{addDropdown:addDropdown,removeDropdown:removeDropdown,dropdowns:dropdownIndex>-1?dropdowns.slice(dropdownIndex+1,dropdowns.length):[],activateMenu:activateMenu,deactivateMenu:deactivateMenu,currentActiveMenu:currentActiveMenu}}var useDropdownsClickOutside=function(e,dropdowns){return!dropdowns.some(function(element){return element.current&&element.current.contains(e.target)})};try{useDropdown.displayName="useDropdown",useDropdown.__docgenInfo={description:"",displayName:"useDropdown",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownProvider.tsx#useDropdown"]={docgenInfo:useDropdown.__docgenInfo,name:"useDropdown",path:"src/components/DropdownProvider.tsx#useDropdown"})}catch(__react_docgen_typescript_loader_error){}try{DropdownProvider.displayName="DropdownProvider",DropdownProvider.__docgenInfo={description:"",displayName:"DropdownProvider",props:{rootRef:{defaultValue:null,description:"ref на дом элемент внутри которого будут создаваться все дроп контейнеры",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownProvider.tsx#DropdownProvider"]={docgenInfo:DropdownProvider.__docgenInfo,name:"DropdownProvider",path:"src/components/DropdownProvider.tsx#DropdownProvider"})}catch(__react_docgen_typescript_loader_error){}try{useDropdownsClickOutside.displayName="useDropdownsClickOutside",useDropdownsClickOutside.__docgenInfo={description:"Функция возращает true, если клик не произошёл ни в одном из дропдаунов и был вне их; иначе возвращает false",displayName:"useDropdownsClickOutside",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropdownProvider.tsx#useDropdownsClickOutside"]={docgenInfo:useDropdownsClickOutside.__docgenInfo,name:"useDropdownsClickOutside",path:"src/components/DropdownProvider.tsx#useDropdownsClickOutside"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/typography.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Il:()=>typography});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject9=function _templateObject(){return data},data}function _templateObject10(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject10=function _templateObject(){return data},data}function _templateObject11(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject11=function _templateObject(){return data},data}function _templateObject12(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject12=function _templateObject(){return data},data}function _templateObject13(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject13=function _templateObject(){return data},data}function _templateObject14(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject14=function _templateObject(){return data},data}function _templateObject15(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject15=function _templateObject(){return data},data}function _templateObject16(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject16=function _templateObject(){return data},data}function _templateObject17(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject17=function _templateObject(){return data},data}function _templateObject18(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject18=function _templateObject(){return data},data}function _templateObject19(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject19=function _templateObject(){return data},data}function _templateObject20(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject20=function _templateObject(){return data},data}function _templateObject21(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject21=function _templateObject(){return data},data}function _templateObject22(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject22=function _templateObject(){return data},data}function _templateObject23(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject23=function _templateObject(){return data},data}function _templateObject24(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject24=function _templateObject(){return data},data}function _templateObject25(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject25=function _templateObject(){return data},data}function _templateObject26(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject26=function _templateObject(){return data},data}function _templateObject27(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject27=function _templateObject(){return data},data}function _templateObject28(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject28=function _templateObject(){return data},data}function _templateObject29(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject29=function _templateObject(){return data},data}function _templateObject30(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject30=function _templateObject(){return data},data}function _templateObject31(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject31=function _templateObject(){return data},data}function _templateObject32(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject32=function _templateObject(){return data},data}function _templateObject33(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject33=function _templateObject(){return data},data}function _templateObject34(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject34=function _templateObject(){return data},data}function _templateObject35(){var data=_tagged_template_literal([`
      font-family: var(--admiral-font-family, `,`);
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `]);return _templateObject35=function _templateObject(){return data},data}var typography=createTypography();function createTypography(){return{"Main/XXL":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject(),function(p){return p.theme.fontFamily}),"Main/XL":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject1(),function(p){return p.theme.fontFamily}),"Main/L":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject2(),function(p){return p.theme.fontFamily}),"Main/M":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject3(),function(p){return p.theme.fontFamily}),"Main/S":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject4(),function(p){return p.theme.fontFamily}),"Main/XS-bold":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject5(),function(p){return p.theme.fontFamily}),"Main/XS":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject6(),function(p){return p.theme.fontFamily}),"Additional/L-bold":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject7(),function(p){return p.theme.fontFamily}),"Additional/L":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject8(),function(p){return p.theme.fontFamily}),"Additional/M":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject9(),function(p){return p.theme.fontFamily}),"Additional/S":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject10(),function(p){return p.theme.fontFamily}),"Additional/S-bold":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject11(),function(p){return p.theme.fontFamily}),"Additional/XS":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject12(),function(p){return p.theme.fontFamily}),"Button/M":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject13(),function(p){return p.theme.fontFamily}),"Button/S":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject14(),function(p){return p.theme.fontFamily}),"Caption/XS":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject15(),function(p){return p.theme.fontFamily}),"Header/HL1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject16(),function(p){return p.theme.fontFamily}),"Header/HL2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject17(),function(p){return p.theme.fontFamily}),"Header/HL3":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject18(),function(p){return p.theme.fontFamily}),"Header/H1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject19(),function(p){return p.theme.fontFamily}),"Header/H2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject20(),function(p){return p.theme.fontFamily}),"Header/H3":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject21(),function(p){return p.theme.fontFamily}),"Header/H4":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject22(),function(p){return p.theme.fontFamily}),"Header/H5":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject23(),function(p){return p.theme.fontFamily}),"Header/H6":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject24(),function(p){return p.theme.fontFamily}),"Subtitle/Subtitle 1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject25(),function(p){return p.theme.fontFamily}),"Subtitle/Subtitle 2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject26(),function(p){return p.theme.fontFamily}),"Subtitle/Subtitle 3":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject27(),function(p){return p.theme.fontFamily}),"Body/Body 1 Long":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject28(),function(p){return p.theme.fontFamily}),"Body/Body 1 Short":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject29(),function(p){return p.theme.fontFamily}),"Body/Body 2 Long":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject30(),function(p){return p.theme.fontFamily}),"Body/Body 2 Short":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject31(),function(p){return p.theme.fontFamily}),"Button/Button 1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject32(),function(p){return p.theme.fontFamily}),"Button/Button 2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject33(),function(p){return p.theme.fontFamily}),"Caption/Caption 1":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject34(),function(p){return p.theme.fontFamily}),"Caption/Caption 2":(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(_templateObject35(),function(p){return p.theme.fontFamily})}}},"./src/components/themes/common/locales.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}__webpack_require__.d(__webpack_exports__,{I:()=>locales});var enLocale={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:function(page,totalPages){return"Page ".concat(page," of ").concat(totalPages)},pageSizeSelectLabel:function(pageSize,total){return"Entries ".concat(pageSize," out of ").concat(total)},itemRangeText:function(min,max,total){return"".concat(min,"–").concat(max,"  entries out of ").concat(total)},pageRangeText:function(total){return"from ".concat(total," ").concat(1===total?"page":"pages")},backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:function(min,max,total){return"".concat(min,"–").concat(max," entries out of ").concat(total)}},progressStepper:{renderNextStepName:function(stepName){return"Next - ".concat(stepName)},stepName:["step","steps"],progressText:function(activeStepNumber,stepsAmount,stepNamePlural){return"".concat(activeStepNumber," from ").concat(stepsAmount," ").concat(stepNamePlural)}},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},locales={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:function(page,totalPages){return"Страница ".concat(page," из ").concat(totalPages)},pageSizeSelectLabel:function(pageSize,total){return"Записей ".concat(pageSize," из ").concat(total)},itemRangeText:function(min,max,total){return"".concat(min,"–").concat(max," записей из ").concat(total)},pageRangeText:function(total){return"из ".concat(total," ").concat(1===total?"страницы":"страниц")},backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:function(min,max,total){return"".concat(min,"–").concat(max," записей из ").concat(total)}},progressStepper:{renderNextStepName:function(stepName){return"Далее - ".concat(stepName)},stepName:["шаг","шагов"],progressText:function(activeStepNumber,stepsAmount,stepNamePlural){return"".concat(activeStepNumber," из ").concat(stepsAmount," ").concat(stepNamePlural)}},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:enLocale,"en-US":_object_spread_props(_object_spread({},enLocale),{firstDayOfWeek:0})}},"./src/components/themes/common/zIndex.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>zIndex});var zIndex={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96}},"./src/components/themes/dark/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>DARK_THEME});var shadow={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.42);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.22), 0px 0.2px 1px 0.4px rgba(0, 0, 0, 0.20);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 16px 0px rgba(0, 0, 0, 0.28), 0px 0.6px 2px 0px rgba(0, 0, 0, 0.16), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.09);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.06), 0px 4px 18px 0px rgba(0, 0, 0, 0.20), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.16);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.24), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.12);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #3A3C41 inset;
`},zIndex=__webpack_require__("./src/components/themes/common/zIndex.ts"),locales=__webpack_require__("./src/components/themes/common/locales.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),DARK_THEME={color:{"Neutral/Neutral 00":"#1B1C1D","Neutral/Neutral 05":"#131314","Neutral/Neutral 10":"#252627","Neutral/Neutral 20":"#3B3C3E","Neutral/Neutral 30":"#515357","Neutral/Neutral 40":"#5F6166","Neutral/Neutral 50":"#82868B","Neutral/Neutral 60":"#92969B","Neutral/Neutral 70":"#A8ABAF","Neutral/Neutral 80":"#C9CACD","Neutral/Neutral 90":"#E3E5E7","Primary/Primary 10":"#1F2024","Primary/Primary 20":"#162B67","Primary/Primary 30":"#022D9A","Primary/Primary 40":"#0142D3","Primary/Primary 50":"#0062FF","Primary/Primary 60 Main":"#3984FF","Primary/Primary 70":"#5290FF","Primary/Primary 80":"#689FFF","Special/Static White":"#FFFFFF","Special/Elevated BG":"#1B1C1D","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#FFFFFF0F","Opacity/Focus":"#FFFFFF17","Opacity/Press":"#FFFFFF1F","Opacity/Modal":"#00000099","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#FFFFFF0A","Opacity/Neutral 8":"#FFFFFF14","Opacity/Neutral 12":"#FFFFFF1F","Opacity/Neutral 16":"#FFFFFF29","Error/Error 10":"#1F2024","Error/Error 20":"#571B1B","Error/Error 30":"#880C0C","Error/Error 40":"#A71212","Error/Error 50":"#D92020","Error/Error 60 Main":"#EA3C3C","Error/Error 70":"#F55F5F","Error/Error 80":"#FA7979","Success/Success 10":"#1F2024","Success/Success 20":"#0E3B1E","Success/Success 30":"#055320","Success/Success 40":"#0C7431","Success/Success 50 Main":"#16913F","Success/Success 60":"#1FA951","Success/Success 70":"#2FC063","Warning/Warning 10":"#1F2024","Warning/Warning 20":"#591C04","Warning/Warning 30":"#902C06","Warning/Warning 40":"#BC3B0D","Warning/Warning 50 Main":"#EF5018","Warning/Warning 60":"#FF662F","Warning/Warning 70":"#FF8559","Attention/Attention 10":"#1F2024","Attention/Attention 20":"#CA9B00","Attention/Attention 30":"#DFAB00","Attention/Attention 40":"#F0B902","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#FDD14C","Attention/Attention 70":"#FDDD77","Purple/Purple 10":"#1F2024","Purple/Purple 20":"#391968","Purple/Purple 30":"#491D8B","Purple/Purple 40":"#6929C4","Purple/Purple 50":"#8A3FFC","Purple/Purple 60 Main":"#A065FE","Purple/Purple 70":"#B587FF","Purple/Purple 80":"#CEB1FF","Magenta/Magenta 10":"#1F2024","Magenta/Magenta 20":"#510224","Magenta/Magenta 30":"#740937","Magenta/Magenta 40":"#9F1853","Magenta/Magenta 50":"#D02670","Magenta/Magenta 60 Main":"#E84A8E","Magenta/Magenta 70":"#F970AB","Magenta/Magenta 80":"#FEA2CA","Cyan/Cyan 10":"#1F2024","Cyan/Cyan 20":"#002D56","Cyan/Cyan 30":"#003A6D","Cyan/Cyan 40":"#00539A","Cyan/Cyan 50":"#0072C3","Cyan/Cyan 60 Main":"#0E8CE1","Cyan/Cyan 70":"#28A6F6","Cyan/Cyan 80":"#70C7FD","Teal/Teal 10":"#1F2024","Teal/Teal 20":"#023136","Teal/Teal 30":"#004144","Teal/Teal 40":"#005D5D","Teal/Teal 50":"#007D79","Teal/Teal 60 Main":"#009692","Teal/Teal 70":"#06B2AF","Teal/Teal 80":"#2FD2CF"},shadow:shadow,zIndex:zIndex.f,name:"dark",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:locales.I,typography:typography.Il,fontFamily:"'VTB Group UI', sans-serif"}},"./src/components/themes/light/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>LIGHT_THEME});var shadow={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},zIndex=__webpack_require__("./src/components/themes/common/zIndex.ts"),locales=__webpack_require__("./src/components/themes/common/locales.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),LIGHT_THEME={color:{"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},shadow:shadow,zIndex:zIndex.f,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:locales.I,typography:typography.Il,fontFamily:"'VTB Group UI', sans-serif"}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");let pipeline=x=>x(),importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];async function importFn(path){for(let i=0;i<importers.length;i++){let moduleExports=await pipeline(()=>importers[i](path));if(moduleExports)return moduleExports}}let channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);let preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:importFn,getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.tsx")])})},"?4f7e":()=>{},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"@storybook/types":module=>{"use strict";module.exports=__STORYBOOK_MODULE_TYPES__}},__webpack_require__=>{__webpack_require__.O(0,[7623],()=>__webpack_require__(__webpack_require__.s="./storybook-config-entry.js")),__webpack_require__.O()}]);
//# sourceMappingURL=main.4c093c9e.iframe.bundle.js.map