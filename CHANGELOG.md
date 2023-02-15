# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.4.0](https://github.com/AdmiralDS/react-ui/compare/v4.3.0...v4.4.0) (2023-02-14)


### Features

* **Notification:** add ability to customize Notification content ([72ca847](https://github.com/AdmiralDS/react-ui/commit/72ca847f47bffa2953e2c308c6b412db2854c273))
* **NotificationItem:** add new component ([9f0df38](https://github.com/AdmiralDS/react-ui/commit/9f0df385ebe4af8dc3b0468e46abf0e9bcb1ccda))
* **Toast:** add api for adding/removing customized toasts ([49af07e](https://github.com/AdmiralDS/react-ui/commit/49af07e4069247f55ae3afe80f97705a76b4156b))
* **Toast:** add renderToast prop ([dd3af77](https://github.com/AdmiralDS/react-ui/commit/dd3af77ec97946caf0f2d9e03d7c37f92987ff39))
* **Toast:** add toast item templates ([4391a5c](https://github.com/AdmiralDS/react-ui/commit/4391a5c26c88adbf297b5dc7b674f44f46482621))


### Bug Fixes

* **FileUploader:** fix Status type name to FileUploadingStatus ([e45809c](https://github.com/AdmiralDS/react-ui/commit/e45809c5ebb82a23287887f09f93a78ef9986283))

## [4.3.0](https://github.com/AdmiralDS/react-ui/compare/v4.2.0...v4.3.0) (2023-02-09)


### Features

* **InputEx:** add Tooltip ([61c1345](https://github.com/AdmiralDS/react-ui/commit/61c13457c7d4393a6023e938235bc80c5a25acd9))
* **Table:** add isFilterActive prop for column to control filter state, setFilterActive callback is deprecated now ([8617756](https://github.com/AdmiralDS/react-ui/commit/8617756a466e17135a85306d1f77c6a75846eab9))


### Bug Fixes

* **Button:** use props for icon to fix paddings ([d73c215](https://github.com/AdmiralDS/react-ui/commit/d73c215dc16bde2d49681cb08024deccad0bd0b1))
* **Table:** remove deprecated onMenuOpen, onMenuClose callbacks from row overflowMenuRender method ([4a6154e](https://github.com/AdmiralDS/react-ui/commit/4a6154e03748cc7cd54ef78159f1e63381c75584))

## [4.2.0](https://github.com/AdmiralDS/react-ui/compare/v4.1.0...v4.2.0) (2023-02-06)


### Features

* **Link:** add LinkComponentCssMixin for styling different components as link ([a49b1f4](https://github.com/AdmiralDS/react-ui/commit/a49b1f4066f88c51897adfd8b2fb8a9592de97c0))
* **Link:** add prop 'as' for rendering different html elements or components as root node ([fdee069](https://github.com/AdmiralDS/react-ui/commit/fdee0694d95a69f400db51259494e050d7716957))
* **Table:** add hover state for clickable rows ([eea3dbe](https://github.com/AdmiralDS/react-ui/commit/eea3dbe10c112567ac3e646c1647acbfbdd03d11))


### Bug Fixes

* **Avatar:** fix stories controls ([2de7902](https://github.com/AdmiralDS/react-ui/commit/2de7902e26c5cc002c0bb06e3b6f32ad7b16d486))
* **AvatarGroup:** fix stories controls ([ab5a16a](https://github.com/AdmiralDS/react-ui/commit/ab5a16a89d8b5f965a4b9a99af5a0316466b74f0))
* **Calendar:** fix bug with tooltip and disabled buttons ([184c110](https://github.com/AdmiralDS/react-ui/commit/184c110176ed4f8f1b9f0526a1cddb2cd684ec47))
* **NumberInput:** block selecting text on double click ([7cb0825](https://github.com/AdmiralDS/react-ui/commit/7cb08257218de95116e9c0b517b256a979932103))
* **RadioButton:** fix left text padding ([99c22b7](https://github.com/AdmiralDS/react-ui/commit/99c22b70e889579eaf306fe3fa5a5f686cff6bf1))
* **SuggestInput:** remove wrong transparent paddings in drop container ([966c183](https://github.com/AdmiralDS/react-ui/commit/966c1835e5428f8afa0008e0dfc8edf298bc14ec))
* **TreeNode:** add properly passing styling props on container ([c83d977](https://github.com/AdmiralDS/react-ui/commit/c83d9773742633bd20509a70f1fe3da07a62eb9b))

## [4.1.0](https://github.com/AdmiralDS/react-ui/compare/v4.0.0...v4.1.0) (2023-01-27)


### Features

* **Select:** add default filter for mode "searchSelect" ([95afa27](https://github.com/AdmiralDS/react-ui/commit/95afa27643cf44fd1b989223adea82a267bf330a))


### Bug Fixes

* **Breadcrumbs:** fix bug with dimension change ([c66e07c](https://github.com/AdmiralDS/react-ui/commit/c66e07c38f7264615f42db0ae121471385c9ba8d))
* **InputEx:** add passing render Options props to dropdown ([aaeb98b](https://github.com/AdmiralDS/react-ui/commit/aaeb98b4fd6284a09d793bfe55467668578df2c3))
* **InputEx:** add passing render Value prop ([cf4e7f7](https://github.com/AdmiralDS/react-ui/commit/cf4e7f7f1dc6b3db61229dd60b0bc616ad9cff81))
* invisibility styles ([10cc351](https://github.com/AdmiralDS/react-ui/commit/10cc3514d74c3639bea71c20b0ff8552e66edc07))
* **Modal:** fix bug with select in modal and incorrect arrows work ([9bf170b](https://github.com/AdmiralDS/react-ui/commit/9bf170b464aa28ef19afddc09929d226a42931a9))
* removed margin from Tag ([36935bc](https://github.com/AdmiralDS/react-ui/commit/36935bcfdf73b045c2671f69065d9cf4ac60d187))
* **Table:** fix filter dropdown menu alignment ([18391cb](https://github.com/AdmiralDS/react-ui/commit/18391cbf8759d3d1898b891345aa778bef1e7aec))

## [4.0.0](https://github.com/AdmiralDS/react-ui/compare/v3.10.1...v4.0.0) (2023-01-19)


### ⚠ BREAKING CHANGES

* **Table:** Table columns resize is controlled by user, onColumnResize callback is compulsory prop

### Features

* **Table:** add opportunity to use any valid css value as column width (px, percents, calc function etc.) ([2759d44](https://github.com/AdmiralDS/react-ui/commit/2759d4484670f203b5cc5bc32207565b24cfc106))


### Bug Fixes

* **InputEx:** fix focus style when icons prop is used ([ca663cb](https://github.com/AdmiralDS/react-ui/commit/ca663cb1777acb9c92d91658913237471e4b2c45))
* **Select:** space close options in searchMode (React 16) ([a2beb1a](https://github.com/AdmiralDS/react-ui/commit/a2beb1a7deaea67b6f44054f98a2b6c0c18068ba))
* **TextArea:** fix autoHeight behaviour ([e36e84f](https://github.com/AdmiralDS/react-ui/commit/e36e84f5d0847623d6fd3e0169b6747d84b57f14))
* **TextArea:** fix vertical paddings ([9b90a09](https://github.com/AdmiralDS/react-ui/commit/9b90a09dd521866358cff2ee601016d629c47ef5))
* **TimeInput:** fix bug with incorrect second number in time value ([4be4772](https://github.com/AdmiralDS/react-ui/commit/4be477288d3c0c459bd5551a5592f17ad928d391))


* **Table:** now column resize is controlled by user ([54b8c5c](https://github.com/AdmiralDS/react-ui/commit/54b8c5cc4bc7bf17b2661d8de73bf901a61c89eb))

### [3.10.1](https://github.com/AdmiralDS/react-ui/compare/v3.10.0...v3.10.1) (2023-01-10)


### Bug Fixes

* **CheckboxField:** add setting data-field attributes to container ([5cf3bf1](https://github.com/AdmiralDS/react-ui/commit/5cf3bf13990ad7a763277e1ae837706f54b0b137))
* linter and snapshots ([8a7e9f3](https://github.com/AdmiralDS/react-ui/commit/8a7e9f3a90d81cbe8381e8dbaa144d5382e1dac0))
* remove misleading doc text ([4412690](https://github.com/AdmiralDS/react-ui/commit/44126903eace3394279281c6770bfb56e140808d))
* **Table:** fix bug with disabled chevron icon for empty rows group ([3e292ae](https://github.com/AdmiralDS/react-ui/commit/3e292ae76e523074c6627df7d8b8bff002a6f1d5))

## [3.10.0](https://github.com/AdmiralDS/react-ui/compare/v3.9.0...v3.10.0) (2022-12-28)


### Features

* **Calendar:** add highlightWeekend prop ([468cc50](https://github.com/AdmiralDS/react-ui/commit/468cc50c9504226197c4387a7f22b255eb1b0276))
* **Calendar:** hide dates outside Month ([26100b3](https://github.com/AdmiralDS/react-ui/commit/26100b312807fcd7b4706b83429bb09b9c31489d))
* **PaginationOne:** add page number input panel to dropdown ([e0c01e6](https://github.com/AdmiralDS/react-ui/commit/e0c01e6f973feb19d30b4a0549aca0a9b3ca28d2))


### Bug Fixes

* **TextArea:** fix autoHeight on first render ([766f112](https://github.com/AdmiralDS/react-ui/commit/766f11220a88bfa941f3f356695e186ae5aa9aba))

## [3.9.0](https://github.com/AdmiralDS/react-ui/compare/v3.8.3...v3.9.0) (2022-12-22)


### Features

* **Select:** expose input ref and keyboard event handlers ([6e3da69](https://github.com/AdmiralDS/react-ui/commit/6e3da690525e47f45182106b444d360e4c88f808))
* **SelectField:** add filtering example story ([215f326](https://github.com/AdmiralDS/react-ui/commit/215f326ee8c6d24cdb817d90dbafdbdc65390ac3))
* **Tag:** add custom hover background for active tag ([af51ff2](https://github.com/AdmiralDS/react-ui/commit/af51ff21b5965bc55da8db5827eee2e6752e30fd))
* **Tag:** remove change background color on hover for passive tags ([94c2963](https://github.com/AdmiralDS/react-ui/commit/94c2963a6200c80c52ff6c8039f128e467c31778))


### Bug Fixes

* **DropdownContainer:** autocalculate vertical position ([7e7a618](https://github.com/AdmiralDS/react-ui/commit/7e7a6189838fd53438a93fd230de81371a0d5089))
* **Select:** fix paddings for size s ([8ad5cd3](https://github.com/AdmiralDS/react-ui/commit/8ad5cd3fe5c73e7229d8303b69cc96b1c5e83889))
* **Table:** fix bug resize cursor ([48e508b](https://github.com/AdmiralDS/react-ui/commit/48e508b9519b8b35cdccef8da56553cf85f0fa05))
* **Tag:** fix hover border color on active tag ([f6c24a6](https://github.com/AdmiralDS/react-ui/commit/f6c24a6b78c56178fee4aea25e23fe6f2a46201c))

### [3.8.3](https://github.com/AdmiralDS/react-ui/compare/v3.8.2...v3.8.3) (2022-12-20)


### Bug Fixes

* **FileInputField:** add export ([dbc6563](https://github.com/AdmiralDS/react-ui/commit/dbc65636f41e25ce5bed7ff32f306155e8408b85))
* **Table:** fix bug with negative values in onColumnResize callback ([90e99b1](https://github.com/AdmiralDS/react-ui/commit/90e99b19f93eaa62ef9999f623b5b229def48171))
* **Table:** row with group name should not be scrolled ([505ff07](https://github.com/AdmiralDS/react-ui/commit/505ff07a19a34c86d1da35fe89a4cb7d6d4ccdc2))

### [3.8.2](https://github.com/AdmiralDS/react-ui/compare/v3.8.1...v3.8.2) (2022-12-15)


### Bug Fixes

* **Select:** fix cycle deadlock ([1abdfba](https://github.com/AdmiralDS/react-ui/commit/1abdfbaf91592b94fdff980c55bae9c7e0af7b9c))
* **Table:** fix bug with header checkbox and checkboxDisabled rows ([8d4a722](https://github.com/AdmiralDS/react-ui/commit/8d4a722c5588239bf2d702763fbc13d405f303d7))
* **Table:** fix bug with horizontal scroll and group row width ([af3550e](https://github.com/AdmiralDS/react-ui/commit/af3550ecbee0fc3c5d403c41b02bbb441a2de7e2))
* **Table:** fix bug with overflowMenu and horizontal scroll ([3d7c00b](https://github.com/AdmiralDS/react-ui/commit/3d7c00bca7c58858276c5a06ef26ea729962db7c))

### [3.8.1](https://github.com/AdmiralDS/react-ui/compare/v3.8.0...v3.8.1) (2022-12-13)


### Bug Fixes

* **MenuButton:** set onChange prop to optional ([4be4e71](https://github.com/AdmiralDS/react-ui/commit/4be4e716bd001993d6f386cb056bbdfcc9ae89c1))
* **MultiButton:** set onChange prop to optional ([7517bb2](https://github.com/AdmiralDS/react-ui/commit/7517bb2247554eea146a5f8b45b947f1714016a3))
* **Select:** add passing props to native select ([401880a](https://github.com/AdmiralDS/react-ui/commit/401880a6beaa5278810970170b89a43bc6304d36))
* **Select:** change state disabled option ([de038c6](https://github.com/AdmiralDS/react-ui/commit/de038c65be0ffaec822d86c780fd85105915b12f))
* **StyledDropdownContainer:** fix DropdownContainer width to its content ([6388ef7](https://github.com/AdmiralDS/react-ui/commit/6388ef71bbe551a3375651bd521b36986c1b48e1))

## [3.8.0](https://github.com/AdmiralDS/react-ui/compare/v3.7.0...v3.8.0) (2022-12-07)


### Features

* **Select:** show ClearIon only when option is selected ([0ce4ec9](https://github.com/AdmiralDS/react-ui/commit/0ce4ec9cf03c59846bd8741989d782ec1c94f585))
* **Table:** add column argument to renderFilter callback, fix stories ([ca3460d](https://github.com/AdmiralDS/react-ui/commit/ca3460dfc6e7c2c9c08c7ae3c602017af571eac8))


### Bug Fixes

* **DropdownContainer:** fix infinity position recalculate ([a97a5fe](https://github.com/AdmiralDS/react-ui/commit/a97a5fea4997ab8aa08b4b749206379f69d607d3))
* **FileInput:** fix bug with incompatible API changes ([9e1ddde](https://github.com/AdmiralDS/react-ui/commit/9e1dddee96bcdb79b910ed5ff1d43435640908f6))
* **Select, Suggest:** pass dimension to dropdown container ([dcf2172](https://github.com/AdmiralDS/react-ui/commit/dcf2172cacea6267540591b1a99120190439d398))

## [3.7.0](https://github.com/AdmiralDS/react-ui/compare/v3.6.0...v3.7.0) (2022-12-01)


### Features

* **FileInputField:** add FileInputField component, in FileInput mark prop description as deprecated ([4ee9749](https://github.com/AdmiralDS/react-ui/commit/4ee9749ec4286b7c958c04482a9c1dcb41b61549))


### Bug Fixes

* **FileItem:** add focus for preview icon ([7ca0932](https://github.com/AdmiralDS/react-ui/commit/7ca0932debe2c5926f269552678749f6260cd55c))
* typscripts set to fixed verson where path transform know to works ([ac4d398](https://github.com/AdmiralDS/react-ui/commit/ac4d3980bf8b5684c951803a42d837adf29d99e3))

## [3.6.0](https://github.com/AdmiralDS/react-ui/compare/v3.5.0...v3.6.0) (2022-11-29)


### Features

* **FileItem:** add file type and icon handlers ([6101f44](https://github.com/AdmiralDS/react-ui/commit/6101f44dad6e69dbde0f347407220bf2649362d1))
* **IconButton:** add primary and secondary appearance ([10927d2](https://github.com/AdmiralDS/react-ui/commit/10927d2c5946a39a2c1f5c8a468645d0e17d5d08))
* **Modal:** move content scrollbar on modal right side, reduce modal left-right paddings ([575d6bb](https://github.com/AdmiralDS/react-ui/commit/575d6bb76db42b6903654c647f5ac895e5e11a4f))
* **Select:** Add property to control max row count in multiple mode ([9d3361e](https://github.com/AdmiralDS/react-ui/commit/9d3361e87598142b87826191f95990b6b436a580))
* **themes:** add 6px and 10px border radius ([899ca40](https://github.com/AdmiralDS/react-ui/commit/899ca404c75013bcf26201ca0b88cd7528a84d01))
* **Tooltip:** if renderContent result is empty, tooltip will not display ([ff25c40](https://github.com/AdmiralDS/react-ui/commit/ff25c400c1ef9c7a351b5d42a2821cf248cba02e))


### Bug Fixes

* **Table:** fix column minWidth which can be achieved by column resize ([a94a060](https://github.com/AdmiralDS/react-ui/commit/a94a060dd5df351d9a6e10c8cc2cf7ea38cf02b3))
* typings import statements, enforce linting ([da541d1](https://github.com/AdmiralDS/react-ui/commit/da541d11428d06b8fed20d9d8fadf83e07f3f7d8))

## [3.5.0](https://github.com/AdmiralDS/react-ui/compare/v3.4.0...v3.5.0) (2022-11-22)


### Features

* **CloseIconPlacementButton:** add IconPlacement with CloseOutline icon ([8070b45](https://github.com/AdmiralDS/react-ui/commit/8070b456326d25ba069a05cb94ad3926c387be2c))
* **IconPlacement:** add appearance ([56a1533](https://github.com/AdmiralDS/react-ui/commit/56a15331a063c3db5977f68e13ea443f4101152b))
* **IconPlacement:** add prop highlightFocus ([275cfb1](https://github.com/AdmiralDS/react-ui/commit/275cfb15f6520d68cd0585a5cd0f3cd3beec8659))
* **OverflowMenu:** use IconPlacement ([849c995](https://github.com/AdmiralDS/react-ui/commit/849c995a9cc5fde5fb92635126f182913200c55f))
* **Table:** add data attributes (data-column, data-row) for table body cells ([9c17a3a](https://github.com/AdmiralDS/react-ui/commit/9c17a3a5b73235cfdd0b1313b71ea723592041e3))


### Bug Fixes

* **Breadcrumbs:** fix OverflowMenu size ([02caa7e](https://github.com/AdmiralDS/react-ui/commit/02caa7ec867a3895fbca30c71e0531b10e384401))
* **Select:** lose focus on click on selected value ([a0dfb60](https://github.com/AdmiralDS/react-ui/commit/a0dfb60486cd268d8bf2da876a9f348dae1de5f2))
* **Table:** fix bug with overflowMenuRender and zoom ([92b6ca1](https://github.com/AdmiralDS/react-ui/commit/92b6ca1e4f567ac0ae0e7896fb9df9795d854451))

## [3.4.0](https://github.com/AdmiralDS/react-ui/compare/v3.3.0...v3.4.0) (2022-11-18)


### Features

* **FileItem:** add formatFileSizeInfo prop for custom file size view ([d385e20](https://github.com/AdmiralDS/react-ui/commit/d385e20321cda94bdf1caef49a7bf75c7e221f0d))
* **FileItem:** show file size in Kb if file is less than 1Mb ([3d73e40](https://github.com/AdmiralDS/react-ui/commit/3d73e40fa53646b801f2a4cdd6b5e887f83c5bc5))
* **IconPlacement:** add new component ([2a63e7e](https://github.com/AdmiralDS/react-ui/commit/2a63e7e1c1305116cf9fd400512ec06782c50502))
* **MultiButton:** enable customize DropMenu options ([f32bf7d](https://github.com/AdmiralDS/react-ui/commit/f32bf7d37ec2521ff49e4ca01e91652a173015a2))
* **PhoneNumberInput:** change Chevron icon and its margin ([b14fdbd](https://github.com/AdmiralDS/react-ui/commit/b14fdbdb922b376ed9d9b9c404c54e22c20eb4c4))
* **Select:** duplicate input value on cmd+a ([6f9e933](https://github.com/AdmiralDS/react-ui/commit/6f9e933cd6196ada0d5c9514e644c3205a9f5b8b))
* **Select:** remove highlight from select ([7951f16](https://github.com/AdmiralDS/react-ui/commit/7951f1626025f646a2ecefbe55480a63b9ac87b3))
* **SliderRange:** add controlled mode, fix bug with animation for Range component ([ce8a88c](https://github.com/AdmiralDS/react-ui/commit/ce8a88c7987724f9d0d8bbdd3dadf7eb07b0aa74))
* **Table:** add opportunity to use empty rows group ([8c86213](https://github.com/AdmiralDS/react-ui/commit/8c8621301145a4bb39058eb85da175fe765bfc09))
* **Table:** add opportunity to use grey zebra rows ([25e6470](https://github.com/AdmiralDS/react-ui/commit/25e647099a7a19ba380a30cb9eca425917970d1a))
* **TagMenu:** enable customize DropMenu options ([21d7f13](https://github.com/AdmiralDS/react-ui/commit/21d7f136c7c6633c983265360251142ad8f9e13a))


### Bug Fixes

* **ContentSwitcher:** fix story with icons only ([a235cee](https://github.com/AdmiralDS/react-ui/commit/a235cee6dc2625c304ce3a202655de0926c426e7))
* **TimeInput:** fix problem with 20-24 hours ([9bcee8b](https://github.com/AdmiralDS/react-ui/commit/9bcee8b4585d9411716a9808d79e14e27d1f5d72))

## [3.3.0](https://github.com/AdmiralDS/react-ui/compare/v3.2.0...v3.3.0) (2022-11-09)


### Features

* **Select:** add controlled open state ([df03b2d](https://github.com/AdmiralDS/react-ui/commit/df03b2dbed1a76fb490c3e7e39dd8f1975062cb8))


### Bug Fixes

* deploy-storybook workaround for https://github.com/storybookjs/storybook/issues/19692 ([89aa572](https://github.com/AdmiralDS/react-ui/commit/89aa57239e27467c857a50e81042bba0205e6c8f))
* **Modal:** fix bug with overflow on left side of ModalContent ([946dee9](https://github.com/AdmiralDS/react-ui/commit/946dee98b8b86570e1983ccd1681f035a8f5505d))
* **Storybook:** disable "Show code" in Docs tab ([16bbbe2](https://github.com/AdmiralDS/react-ui/commit/16bbbe27c5e7112a3443d306289ac4884e842ec8))
* **Storybook:** move options for a radio/check/select controls up to the argType level ([5af266e](https://github.com/AdmiralDS/react-ui/commit/5af266ed06d64901aa5f6f2b5b8639dd59fdabb9))
* **Storybook:** set values for args at the component level ([516f4b2](https://github.com/AdmiralDS/react-ui/commit/516f4b2b4403310ec08b8131b14491ac9907ecb9))

## [3.2.0](https://github.com/AdmiralDS/react-ui/compare/v3.1.0...v3.2.0) (2022-11-03)


### Features

* **Pill:** add new component Pill ([1000e36](https://github.com/AdmiralDS/react-ui/commit/1000e363e18b07834893922ddb2e61a076b438d8))
* **Select:** change internal dropdown to  standard menu ([10a1d9e](https://github.com/AdmiralDS/react-ui/commit/10a1d9eefc5dc7f06144dc771cd4670047d7b148))
* **SliderInput:** add opportunity to use controlled mode ([f670d29](https://github.com/AdmiralDS/react-ui/commit/f670d295afd76f91954d08ba42d1cea9c4bbc7ca))


### Bug Fixes

* **DropMenu:** add Menu visibility to props ([d016bbe](https://github.com/AdmiralDS/react-ui/commit/d016bbe84faa9e3e601f68afeadb67aab59bcda8))
* **DropMenu:** use onSelectItem instead of onChange, pass active and onActivateItem to Menu ([cfe3bc7](https://github.com/AdmiralDS/react-ui/commit/cfe3bc78d614eea10740c40438819c1fc7262e24))
* **Menu, DropMenu:** add disableSelectedOptionHighlight prop instead of multiSelection ([533b79b](https://github.com/AdmiralDS/react-ui/commit/533b79b0467a6c428b9155d14ddbffd6aba87e00))
* **MenuButton:** use correct props for DropMenu ([42e77f9](https://github.com/AdmiralDS/react-ui/commit/42e77f9a3816c78e9e45ff498cb2a30afa3bf4fd))
* **MultiButton:** add prop onMainButtonClick ([a902f01](https://github.com/AdmiralDS/react-ui/commit/a902f01a16aa2a1243d5a377b4dec6899c80a893))
* **MultiButton:** use correct props for DropMenu ([ce8f03a](https://github.com/AdmiralDS/react-ui/commit/ce8f03a2af375b27125d3247adf52f26cf18a155))
* **OverflowMenu:** use correct props for DropMenu ([730a2c4](https://github.com/AdmiralDS/react-ui/commit/730a2c423da91ca607f0a50f69254c556de37ea2))
* **PaginationOne:** use correct props for DropMenu ([7d9aed8](https://github.com/AdmiralDS/react-ui/commit/7d9aed8b247a6d67144d8f422c1d8c84b19252ae))
* **Table:** use correct props for OverflowMenu ([56b7a05](https://github.com/AdmiralDS/react-ui/commit/56b7a051e6dc781c87dd739af495e0c3062ee95d))
* **Table:** use tooltip in title only if title is not custom ([48c9a36](https://github.com/AdmiralDS/react-ui/commit/48c9a3665b1265c421f5b79d74e2a8761df83ea2))
* **TagMenu:** use correct props for DropMenu ([01177fe](https://github.com/AdmiralDS/react-ui/commit/01177fe32239ea52d6e1fc4832d034ef452d8732))
* **TextButtonMenu:** use correct props for DropMenu ([48f9570](https://github.com/AdmiralDS/react-ui/commit/48f9570cd2d1b33a1506992d9cf5ce868ec9b906))
* workaround for https://github.com/storybookjs/storybook/issues/19692 ([fe0d8fd](https://github.com/AdmiralDS/react-ui/commit/fe0d8fdf4c1ab6ae4bbe876b6381eba92b4d576b))

## [3.1.0](https://github.com/AdmiralDS/react-ui/compare/v3.0.1...v3.1.0) (2022-10-21)


### Features

* **Menu,DropMenu:** add multiSelection prop ([321aeed](https://github.com/AdmiralDS/react-ui/commit/321aeed61df158e7d77cb1659714122387cc3e43))
* **Menu:** add example with CheckboxGroup ([1793930](https://github.com/AdmiralDS/react-ui/commit/1793930562c757e45ab292604411a8f777da97d0))
* **MenuItemWithCheckbox:** add component ([acde02a](https://github.com/AdmiralDS/react-ui/commit/acde02a5d9c6ebdfbe89b8c9ce9e38d7fbc4fbb1))


### Bug Fixes

*  fix TagMenu  export ([9f06f8c](https://github.com/AdmiralDS/react-ui/commit/9f06f8cffe7ee86e206241493603e9de9d6d04f3))
* **DateInput, InputExtended, TimeInput:** fix reopening drop container on icon click ([44aaba9](https://github.com/AdmiralDS/react-ui/commit/44aaba9c7ee5fa1c59be3941e3420c1fa93aa337))
* **DateInput:** set focus to input when calendar is open ([b627722](https://github.com/AdmiralDS/react-ui/commit/b627722a8db9755f3b841067125c2a81c3faf139))
* fix Range export ([1917e53](https://github.com/AdmiralDS/react-ui/commit/1917e53c91e20712f7155d03295b5a40a8bdbca4))
* fix tsconfig (need npm upgrade after merge to local brunch) ([40df47d](https://github.com/AdmiralDS/react-ui/commit/40df47df164b44451fee4539ffa17b335494186c))
* **Slider:** fix problems with animation, add type 'any' for step prop ([9e7cf2c](https://github.com/AdmiralDS/react-ui/commit/9e7cf2c52e6de172e01b55495435f4c70c1a6281))
* **Storybook:** pass loading and disabled in DropMenu stories examples ([3ffe082](https://github.com/AdmiralDS/react-ui/commit/3ffe0824dc6f75acba542f2a222cb81db30052de))
* **Table:** update CheckboxCell and ExpandCell dimensions ([3edccec](https://github.com/AdmiralDS/react-ui/commit/3edccecaaac4ee7b2da4abcd4307bc56714140c2))
* **TagMenu:** pass id to Menu's selected prop ([d5f277e](https://github.com/AdmiralDS/react-ui/commit/d5f277e74d2e40cc52aa3dda615ffcf6d058e611))
* **Tree,MenuItemWithCheckbox:** fix parent checkbox status ([729d870](https://github.com/AdmiralDS/react-ui/commit/729d87069fd22dba1e01c3131827559947453f3e))

### [3.0.1](https://github.com/AdmiralDS/react-ui/compare/v3.0.0...v3.0.1) (2022-10-13)

## [3.0.0](https://github.com/AdmiralDS/react-ui/compare/v2.5.0...v3.0.0) (2022-10-12)


### ⚠ BREAKING CHANGES

* **Tooltip, TooltipHoc:** change api for Tooltip and TooltipHoc

### Features

* **FileInput:** add FileInput instead of FileUploader ([d927c41](https://github.com/AdmiralDS/react-ui/commit/d927c416b3e878f6eb470dd4c30c441afaa5cbb0))
* **FileInput:** add status and extraText props ([f1a1079](https://github.com/AdmiralDS/react-ui/commit/f1a107940cdb4e399ef613b30fdda7034b6641ff))
* **Menu:** update initial hover position ([df34fd5](https://github.com/AdmiralDS/react-ui/commit/df34fd592b97e6f0b3ef7bbe53c70d50c8fe51ef))


### Bug Fixes

* **FileInput:** add synchronization with native input file list ([91626a9](https://github.com/AdmiralDS/react-ui/commit/91626a9ab96e9dea212bb0091055b3c16932d6b0))
* **FileInput:** fix outline focus ([f325893](https://github.com/AdmiralDS/react-ui/commit/f325893d8a77312469b88a052aff89f73894acde))
* **Locale:** remove deprecated props instead which locale prop should be used ([3e603a1](https://github.com/AdmiralDS/react-ui/commit/3e603a18b5c058cfb7763f9ad5278a597272444b))


* **Tooltip, TooltipHoc:** change api, add opportunity to use controlled and uncontrolled components ([e216a6d](https://github.com/AdmiralDS/react-ui/commit/e216a6d473421aeb7812f1fe4eabfcb4260786f2))

## [2.5.0](https://github.com/AdmiralDS/react-ui/compare/v2.4.0...v2.5.0) (2022-10-04)


### Features

* **Components:** add dropContainerCssMixin prop for components with drop down ([4de4e05](https://github.com/AdmiralDS/react-ui/commit/4de4e05e02f7d46c752638f1d8d070470302fc19))


### Bug Fixes

* **Menu:** fix styles ([3518783](https://github.com/AdmiralDS/react-ui/commit/35187835ff15833673f9aa8a288d2d46a4784d4c))
* **SuggestInput:** fix double scroll ([d004158](https://github.com/AdmiralDS/react-ui/commit/d0041584e8b88020d10b844e25eedc0854853454))
* wrong entry name mappings and CRA5 workaround ([335f496](https://github.com/AdmiralDS/react-ui/commit/335f496f03b95f8f60b436b37345c05b2873eded))

## [2.4.0](https://github.com/AdmiralDS/react-ui/compare/v2.3.0...v2.4.0) (2022-09-29)


### Features

* **SuggestInput:** add storybook example with filtering results ([5d5c643](https://github.com/AdmiralDS/react-ui/commit/5d5c643f561505ae4c84d258b895605cf1f38d1d))
* **SuggestInput:** add storybook example with no matches ([2d3cf54](https://github.com/AdmiralDS/react-ui/commit/2d3cf543f56a61c7271d656a7edbb8d4a4916a44))
* **Toast:** add return id to addToast method, add removeById method ([0c17ede](https://github.com/AdmiralDS/react-ui/commit/0c17ede86289469ab9852d98efeeb6f52debb3b4))


### Bug Fixes

* **Breadcrumbs:** fix bug with items update and incorrect menu ([cac4305](https://github.com/AdmiralDS/react-ui/commit/cac43055d425b333287eae5f8aac02a8f09b0da6))
* **Table:** fix column.title interface ([eb70d79](https://github.com/AdmiralDS/react-ui/commit/eb70d7997caa8c1a78b7a6005c9cf295ef168ae6))
* **Toast:** fix default width ([ecdf664](https://github.com/AdmiralDS/react-ui/commit/ecdf66445cf8958240b2d504efb4f07e106a466d))
* **Tree:** leave line selected after toggle expand and checkbox ([e383421](https://github.com/AdmiralDS/react-ui/commit/e3834213612e308b2459c1432500c903d6fc5ca2))
* **Tree:** set cursor to default when TreeNode is disabled ([4caad24](https://github.com/AdmiralDS/react-ui/commit/4caad241e2149f191aa06a7c437391069bb262a9))

## [2.3.0](https://github.com/AdmiralDS/react-ui/compare/v2.2.2...v2.3.0) (2022-09-23)


### Features

* **DateInput:** use DropdownContainer instead of deprecated Dropdown ([e9da26d](https://github.com/AdmiralDS/react-ui/commit/e9da26da202d0837c1879341de31e03bd360b8e8))
* **Menu:** add renderTopPanel and renderBottomPanel props ([e6352e7](https://github.com/AdmiralDS/react-ui/commit/e6352e7d02a690d19714141e8554ef5f12f1a92e))
* **NumberInput, SliderInput, SliderRange:** disable opportunity to enter minus char if minValue >= 0 ([4474f43](https://github.com/AdmiralDS/react-ui/commit/4474f4378aa3033c254f1f3734f8abdb400f129f))
* **SuggestInput:** add highlightFormat prop ([6ce4c63](https://github.com/AdmiralDS/react-ui/commit/6ce4c63259318032df914a3b6a5c222588e5792c))
* **SuggestInput:** use Menu instead of deprecated DropDown ([346820f](https://github.com/AdmiralDS/react-ui/commit/346820fbdf6ad5fff400aaea8f4f51d337bb330a))
* **Table:** add prop disableResize for column ([d3a741d](https://github.com/AdmiralDS/react-ui/commit/d3a741d10fd2407a2178df0777e4f926c49da306))
* **Table:** use DropdownContainer instead of deprecated DropDown in Filter ([3fcd4f4](https://github.com/AdmiralDS/react-ui/commit/3fcd4f4012e79f0bd1906754cc16b8e1e2bde9fc))
* **TimeInput:** use Menu instead of deprecated DropDown ([22e7783](https://github.com/AdmiralDS/react-ui/commit/22e778378d9982d9442a83355dbdf0a740499a95))


### Bug Fixes

* **Hint:** add utils to position hint according to page scroll ([08dc1f1](https://github.com/AdmiralDS/react-ui/commit/08dc1f1fde7e768b7879b183bedfb3d6e2e51cf5))
* **SuggestInput:** MessagePanel styles ([e50c7b5](https://github.com/AdmiralDS/react-ui/commit/e50c7b5a3901af4c9ebc2e9df9c7331e62eae86d))
* **Table:** disable header checkbox when rowList is empty ([efd9cbb](https://github.com/AdmiralDS/react-ui/commit/efd9cbbf8192300145901643fe1c2b1b398269fc))
* **Table:** fix action and overflowMenu position on horizontal scroll ([1637dc7](https://github.com/AdmiralDS/react-ui/commit/1637dc76063afd10243f07bdf5875e61a67c471e))
* **Table:** fix bug with columnList and resize ([90ac571](https://github.com/AdmiralDS/react-ui/commit/90ac5714e4e89093fdb1e1782cef16985d935045))
* **Table:** fix bug with row action, row overflowMenu and scroll ([eb74ab6](https://github.com/AdmiralDS/react-ui/commit/eb74ab628fd7a3932e398dab9babd6fd6900c414))
* **Table:** fix bug with virtual scroll and small number of rows ([3b99f57](https://github.com/AdmiralDS/react-ui/commit/3b99f57c2aae6bc201f73b9aabd8c6b37e0149cb))
* **Table:** fix problem with checkboxes and columns widths ([cc2b5e4](https://github.com/AdmiralDS/react-ui/commit/cc2b5e4262dc56cb3c1c07a98204fb582fa55591))
* **TextInput:** fix icon padding ([238a177](https://github.com/AdmiralDS/react-ui/commit/238a177b9bd3b4e7c64d5d20557da935d77ecbdf))

### [2.2.2](https://github.com/AdmiralDS/react-ui/compare/v2.2.1...v2.2.2) (2022-09-15)


### Bug Fixes

* **InputEx:** wrong typing cause storybook error ([686d63a](https://github.com/AdmiralDS/react-ui/commit/686d63ae650093906a477149a25993fa636824db))

### [2.2.1](https://github.com/AdmiralDS/react-ui/compare/v2.2.0...v2.2.1) (2022-09-15)


### Bug Fixes

* **Breadcrumbs:** fix bug with hidden menu breadcrumbs and router link ([19789da](https://github.com/AdmiralDS/react-ui/commit/19789dafc6d51cf601d7614c48b6c199a603b4f7))
* readonly and disabled component behavior ([64e33f3](https://github.com/AdmiralDS/react-ui/commit/64e33f3be0d7ac2a66ef9140d384e23f30a4899e))
* **Table:** fix horizontal scroll when emptyMessage displays ([ff266e3](https://github.com/AdmiralDS/react-ui/commit/ff266e344dce251a8c6e0fb69f8c844676826787))

## [2.2.0](https://github.com/AdmiralDS/react-ui/compare/v2.1.0...v2.2.0) (2022-09-12)


### Features

* **Table:** add forwardRef for RowAction ([2c45788](https://github.com/AdmiralDS/react-ui/commit/2c457883961efe0fdfd056497fafeac4dd8a0dca))
* **TimeInput:** add uncontrolled mode ([577b009](https://github.com/AdmiralDS/react-ui/commit/577b009e460fb8badd25588a583df0b436914542))


### Bug Fixes

* **AvatarGroup:** set className to wrapper ([531f977](https://github.com/AdmiralDS/react-ui/commit/531f9775c763061f0494b71a877cfa2d3d682a40))
* **Badge:** add ref passing ([dc0c860](https://github.com/AdmiralDS/react-ui/commit/dc0c8607dbe332b704820c8274d28e01a07b4731))
* **DateInput:** change default input handler ([8136839](https://github.com/AdmiralDS/react-ui/commit/8136839a7505ac071501ed538b25718d67b2bd7b))
* **GroupActionsPane:** add property for disable table settings buttons ([b04ef8f](https://github.com/AdmiralDS/react-ui/commit/b04ef8f2f90b413b6011850373309e7460afcb85))
* **InputEx:** fix close option on select, fix focus stealing on open click ([d2897a4](https://github.com/AdmiralDS/react-ui/commit/d2897a475e92b5fae097a7d49cc76104a1b92ab4))
* **InputEx:** fix suffix option highlight ([ec09d39](https://github.com/AdmiralDS/react-ui/commit/ec09d392caa750e89ac4c51f480e12a7c56463ab))
* **InputEx:** text wrap on resize ([dca4127](https://github.com/AdmiralDS/react-ui/commit/dca4127711f765d4e71160dd80c2dcf29ff0e95e))
* **MultiButton:** set className to wrapper ([3345bf3](https://github.com/AdmiralDS/react-ui/commit/3345bf32e07678bbc219b069539c8a33f0734a41))
* **SliderInputField, SliderRangeField:** fix problem with field overflow ([88857d7](https://github.com/AdmiralDS/react-ui/commit/88857d7bfe7bc17bcfa6d1167c891ddf2dbab308))
* **Table:** update column percent width on table resize ([2045712](https://github.com/AdmiralDS/react-ui/commit/2045712393301d4f1b21888bb54eec7029292cd7))
* **TimeInput:** fix problem with invalid numbers enter ([3d268aa](https://github.com/AdmiralDS/react-ui/commit/3d268aa5179ab2d8df6ad0817b388992b259e522))
* **Tree:** add TreeNode to export ([be3101e](https://github.com/AdmiralDS/react-ui/commit/be3101ed1ea6cec38fd3112a5bee668caef81409))

## [2.1.0](https://github.com/AdmiralDS/react-ui/compare/v2.0.0...v2.1.0) (2022-08-31)


### Features

* **EditMode:** add dimension XXL ([e5c390c](https://github.com/AdmiralDS/react-ui/commit/e5c390c1f5486f5ec3387aff29765cc5ca385734))
* **Stepper:** add mobile prop, make step width adaptive ([ae32953](https://github.com/AdmiralDS/react-ui/commit/ae32953375cd53bd58f1175975f93fcdb1b0f97f))
* **Table:** add row group ([5595afe](https://github.com/AdmiralDS/react-ui/commit/5595afe147eedf82233b09a5e64c61e750e85bca))
* **Table:** add Tooltip example for icons ([e67765e](https://github.com/AdmiralDS/react-ui/commit/e67765efa0da4dd48727f234698cceef7a649c13))
* **Table:** add Tooltip example for icons ([57ea7c8](https://github.com/AdmiralDS/react-ui/commit/57ea7c8d79d690c98ed9aacc0593ec4533b00501))
* **Table:** add TooltipHoc example for icons ([a86f248](https://github.com/AdmiralDS/react-ui/commit/a86f2483298ea2da4faa5ef98d146d50f78d5dac))
* **Theme:** add localization params to theme, define ru, en, en-US locales, move all text constants from components to theme locale ([5284ab5](https://github.com/AdmiralDS/react-ui/commit/5284ab50421dcb6c2d30f109ce7d956f1b1b1dc8))
* **Typography:** add new text style 'Caption/Caption 2' ([cae23e2](https://github.com/AdmiralDS/react-ui/commit/cae23e262960c301e3a4a87334ff7e1215712bad))


### Bug Fixes

* [#348](https://github.com/AdmiralDS/react-ui/issues/348) [#346](https://github.com/AdmiralDS/react-ui/issues/346) ([0449bc5](https://github.com/AdmiralDS/react-ui/commit/0449bc56b10135d41ea70c3ed5a60ce55ba4be08))
* **OverflowMenu:** fix component size ([c0ba3cb](https://github.com/AdmiralDS/react-ui/commit/c0ba3cb701270e509460366ada000fbf6f7155d2))
* **PaginationOne:** fix setting className to container ([0ad2bf8](https://github.com/AdmiralDS/react-ui/commit/0ad2bf8dbc9b510c9aa205936869231eea4c0ad7))
* **Storybook:** update icon components ([d05bd10](https://github.com/AdmiralDS/react-ui/commit/d05bd10b998d15e8a76d107864c876ac0b3c2bef))

## [2.0.0](https://github.com/AdmiralDS/react-ui/compare/v1.10.0...v2.0.0) (2022-08-23)


### ⚠ BREAKING CHANGES

* **TooltipHoc:** refactor Tooltip, change api

### Features

* **FormFields, Components with DropMenu:** pass data-attributes to field container and dropdown container ([7adb55b](https://github.com/AdmiralDS/react-ui/commit/7adb55bf1d92bdbf6a7a52969048a3a41a60c826))
* **Select, Input:** add loading indicator to Select & Input, remove property loadingMessage ([6244198](https://github.com/AdmiralDS/react-ui/commit/624419840535aaa7da97bf18bf4f42b8eec85c8b))
* **themes:** update color tokens ([d444635](https://github.com/AdmiralDS/react-ui/commit/d4446351bf7c34ac2db2114db8fda0474ebaaa1e))
* **TooltipHoc:** add component TooltipHoc ([9acb570](https://github.com/AdmiralDS/react-ui/commit/9acb5701290474f8a3247749304a6aed48931db4))


### Bug Fixes

* **Chips:** fix non clickable closeIcon ([5f14da4](https://github.com/AdmiralDS/react-ui/commit/5f14da43f6f4170f70e82ed77a9460e6e201bd20))
* **Field:** flex layout must not overflow ([49c276e](https://github.com/AdmiralDS/react-ui/commit/49c276e37b74e3079e2224103911ff1e8dc4c0ed))
* **PhoneInputField:** add click on flag icon to open flag list container ([7f7c9ee](https://github.com/AdmiralDS/react-ui/commit/7f7c9ee7500be18363f60104e9c39694dfae6068))

## [1.10.0](https://github.com/AdmiralDS/react-ui/compare/v1.9.0...v1.10.0) (2022-08-17)


### Features

* **ContentSwitcher:** add OnlyIcon example ([5c729db](https://github.com/AdmiralDS/react-ui/commit/5c729db6927680fa0eca776955c8b5b52a05bad4))
* **Menu, DropMenu:** add example with Checkboxes and Radiobuttons ([7ab46b9](https://github.com/AdmiralDS/react-ui/commit/7ab46b9195b58b844c57441f712753b3cc29d97e))
* **Menu, DropMenu:** add example with Tooltip ([7873739](https://github.com/AdmiralDS/react-ui/commit/7873739e9c327d176b2782ca7c3c8886299d4c2c))
* **TextArea:** update hover and focus styles with success/error status ([de2337a](https://github.com/AdmiralDS/react-ui/commit/de2337ad409e9a151b78cc56835959158fc6f009))
* **TextInput:** update hover and focus styles with success/error status ([48c82db](https://github.com/AdmiralDS/react-ui/commit/48c82db58ad663ceb785f7c40d750fd051314781))


### Bug Fixes

* **Checkbox:** hide hover in disabled state ([e9b37f8](https://github.com/AdmiralDS/react-ui/commit/e9b37f896da3cd1dc0989056928836fed56f1053))
* **Checkbox:** hide hover in disabled state ([eb0e325](https://github.com/AdmiralDS/react-ui/commit/eb0e32566d6d869481fb23e3087bcaf5a4191a49))
* **Chips:** fix background color in outlined appearance ([875369b](https://github.com/AdmiralDS/react-ui/commit/875369bfeeb9df2939bc77d51abb8bb3fcfb307d))
* **Chips:** fix closeIcon color ([d3ce00d](https://github.com/AdmiralDS/react-ui/commit/d3ce00decdb2dc981973f247699d9e08b5c47b37))
* **Chips:** fix style ([80de973](https://github.com/AdmiralDS/react-ui/commit/80de973f42ce172f6888f07075e51d35b52de882))
* **EditMode:** fix read only state ([0bbeb21](https://github.com/AdmiralDS/react-ui/commit/0bbeb21b034742e36dadc91238c35774487b92e1))
* **NumberInput:** fix readOnly background color ([66f72af](https://github.com/AdmiralDS/react-ui/commit/66f72afd2828028ef49ee7264b484b7d16e35603))
* **PhoneNumberInput:** fix Chevron transform in disabled state ([56182a4](https://github.com/AdmiralDS/react-ui/commit/56182a440abf485ccb29ab62862209c4b5b8e356))
* **SuggestInput:** add status prop ([ab49fef](https://github.com/AdmiralDS/react-ui/commit/ab49fefafb3c205455b8f7f0d09a45682a39b6ab))
* **Tag:** remove Tooltip Wrapper from Tag and fix some styles so that Tag can be correctly embeded in other components ([a4de402](https://github.com/AdmiralDS/react-ui/commit/a4de402f9393fdbb79774b2332ec0bd61d7d2302))
* **TextArea:** fix changing colors after switching theme ([efe3a52](https://github.com/AdmiralDS/react-ui/commit/efe3a524b169a4ea2956465fbbc93ea071b8fcfb))
* **TextArea:** fix text color in disabled state ([c5a6a8a](https://github.com/AdmiralDS/react-ui/commit/c5a6a8acfcfd96740249a524a83eccd41bb4f216))
* **TextInput:** fix changing colors after switching theme ([7da4e06](https://github.com/AdmiralDS/react-ui/commit/7da4e0647372ca61e4445a458f7d8ce244964c77))

## [1.9.0](https://github.com/AdmiralDS/react-ui/compare/v1.8.0...v1.9.0) (2022-08-09)


### Features

* **FieldSet:** add example with required mark for Checkboxes ([cb3a63f](https://github.com/AdmiralDS/react-ui/commit/cb3a63f934240e0f7078d5b8cd4766bb8955aba9))
* **MenuButton:** add example with icons ([c900e70](https://github.com/AdmiralDS/react-ui/commit/c900e7079870ed2ed0df2a9701679127afd777b5))
* **Table:** add multi level sort ([4b622f4](https://github.com/AdmiralDS/react-ui/commit/4b622f4a2e53a9b0df9af9b8ed8e630bb76206eb))
* **TagMenu:** add TagMenu component ([5c11698](https://github.com/AdmiralDS/react-ui/commit/5c116984f1218a9fad73db535ab0b27c27508eed))
* **themes:** add new color Special/Dark Static Neutral 70 ([ab64a2d](https://github.com/AdmiralDS/react-ui/commit/ab64a2d0ea51d97477ae1d9df5d818ec9b0abb89))
* **themes:** change Modal opacity level to 60% in Dark theme ([7d432ac](https://github.com/AdmiralDS/react-ui/commit/7d432ac6b1ef4baeed293727b1def2cb19beb904))


### Bug Fixes

* **Badge:** display badge with value 0 ([9603b77](https://github.com/AdmiralDS/react-ui/commit/9603b77157d999db349f33bbdb65a75ae5f3b01b))
* **Checkbox:** add stories examples ([c762835](https://github.com/AdmiralDS/react-ui/commit/c762835d5a8ae6683a6e7d36bd9047352553b3e9))
* **Field:** label text-align ([4130b77](https://github.com/AdmiralDS/react-ui/commit/4130b7791692c429b142b914b32e120bfc2436f0))
* **FieldSet:** place '*' after legend when required ([5a69ca4](https://github.com/AdmiralDS/react-ui/commit/5a69ca41be39bd1d998eb65fb9ef455aacc208a9))
* **FieldSet:** set legend font color with error status ([19f788f](https://github.com/AdmiralDS/react-ui/commit/19f788f7bc98def6ed662fbaacb64323cd05a30d))
* **NumberInput:** fix bug with input size and placeholder ([2820458](https://github.com/AdmiralDS/react-ui/commit/2820458fcc9bb336a5be00a31b81b34f433ee279))
* **Select:** enable pointer events on disabled control ([b61b3a2](https://github.com/AdmiralDS/react-ui/commit/b61b3a22a9162b32c84b00caff217187d9a016bd))
* **Table:** add tooltip for column title if text is overflow ([d0fa896](https://github.com/AdmiralDS/react-ui/commit/d0fa896ed7cdc687411d6c9a03ec521220f591f8))

## [1.8.0](https://github.com/AdmiralDS/react-ui/compare/v1.7.0...v1.8.0) (2022-07-28)


### Features

* **Chips:** add badge ([f62619f](https://github.com/AdmiralDS/react-ui/commit/f62619f28a0260f96c714ca368979bc0d58b4750))
* **EditMode:** remove displayStatusIcon prop ([571d8e3](https://github.com/AdmiralDS/react-ui/commit/571d8e3b385089b4d8f8a37f1f341fb14e6e5459))
* **Hint:** add props visible and onVisibilityChange to use component as controlled ([f112f15](https://github.com/AdmiralDS/react-ui/commit/f112f15622c77ac7c7fb77ba8b63fcfbad407e9b))
* **NumberInput:** refactor icons and remove displayClearIcon prop ([13addbe](https://github.com/AdmiralDS/react-ui/commit/13addbe75d23cf13e18bd64ac1ea2d9c9192afbe))
* **PaginationOne:** use DropMenu instead of DropDown ([6d582ee](https://github.com/AdmiralDS/react-ui/commit/6d582ee6f3526e3f283f82797860450f23be182e))
* **PhoneNumberInput:** remove displayStatusIcon prop, fix readOnly style ([228aa6a](https://github.com/AdmiralDS/react-ui/commit/228aa6a6a724a59576c1be53ea4ba70269fd8e4d))
* **Select:** remove displayStatusIcon prop ([5ee25ba](https://github.com/AdmiralDS/react-ui/commit/5ee25ba696b20f8e08cc496e66f2b8c3963e7d06))
* **SliderRange:** add readOnly prop to component, fix readOnly state in input components ([af8fb22](https://github.com/AdmiralDS/react-ui/commit/af8fb224cd28fe54ef2033fc7c6575dd106f28e0))
* **SuggestInput, TextArea, TimeInput:** remove displayStatusIcon prop, refactor icons with InputIconButton component ([c95e40b](https://github.com/AdmiralDS/react-ui/commit/c95e40b68d034fa40bf276be828f5b466257696b))
* **TextInput:** refactor icons and remove displayStatusIcon prop ([127b7cc](https://github.com/AdmiralDS/react-ui/commit/127b7cc5fac3ad2652374afa4aeae081e2e83a24))
* **Toggle:** set new color in active disabled state ([850cf27](https://github.com/AdmiralDS/react-ui/commit/850cf2790c6a1b0853e191da9745f494c05f54a6))


### Bug Fixes

* **PaginationOne:** fix button text color ([95cb30a](https://github.com/AdmiralDS/react-ui/commit/95cb30a5f6f6cb058d4dbe7a47e4cbffadc62680))

## [1.7.0](https://github.com/AdmiralDS/react-ui/compare/v1.6.0...v1.7.0) (2022-07-19)


### Features

* **Table:** add emptyMessage prop to show that there are no matches after filtration ([9664b5f](https://github.com/AdmiralDS/react-ui/commit/9664b5f84a75e7ad013e04172741c368457f918e))
* **Table:** add id prop in onRowSelectionChange callback ([d847f47](https://github.com/AdmiralDS/react-ui/commit/d847f475743e11c73b923d172e04a3a5dd593ffc))
* **Table:** add single row action as alternative to overflowMenu ([ecd90e9](https://github.com/AdmiralDS/react-ui/commit/ecd90e95d3dd5e582e305a7655764070dece6992))


### Bug Fixes

* **GroupActionPane:** change usage api ([fa24a2b](https://github.com/AdmiralDS/react-ui/commit/fa24a2b4fbb87480af3b5bcb64b4b0384ef7472e))
* **OverflowMenu:** fix focus style and fix OverflowMenu dimension in Breadcrumbs component ([ae4ceaa](https://github.com/AdmiralDS/react-ui/commit/ae4ceaaeeeca11b8b634c8403f163a0650bd83cb))
* **Select:** adjust height and label font ([5c2d75b](https://github.com/AdmiralDS/react-ui/commit/5c2d75b4d4cf1c949bfd99f1be02998c646e51d1))

## [1.6.0](https://github.com/AdmiralDS/react-ui/compare/v1.5.2...v1.6.0) (2022-07-12)


### Features

* **Calendar:** calendar has fixed height ([41a3d43](https://github.com/AdmiralDS/react-ui/commit/41a3d43dcfdbba902fd6cffad5ba537ae197b627))
* **DropdownProvider:** add DropdownProvider component to handle with multiple dropdowns clickoutside ([df69f80](https://github.com/AdmiralDS/react-ui/commit/df69f80f3ac8aeb1c2a322d139ff53ee45ffb08d))


### Bug Fixes

* **Select:** add props for custom messages on loading and empty ([4b27139](https://github.com/AdmiralDS/react-ui/commit/4b27139094420038c37a2e7df766148cd2f22e66))
* **Select:** when select component is out of visible aria drop option container must settle with its position ([93d663e](https://github.com/AdmiralDS/react-ui/commit/93d663e09a99ad147fd28565815b9a2066046022))
* **Table:** reduce some unneccesary data attributes ([b3c9245](https://github.com/AdmiralDS/react-ui/commit/b3c9245eb4765594673980e5a680d6e80200d421))

### [1.5.2](https://github.com/AdmiralDS/react-ui/compare/v1.5.1...v1.5.2) (2022-07-06)


### Bug Fixes

* **DateField:** id must be populated on label when set on component ([83d4153](https://github.com/AdmiralDS/react-ui/commit/83d41537195d106880bd94baf84c331e1f8a6fdd))
* **NumberInput:** add recalculation on fonts loading ([eb871e5](https://github.com/AdmiralDS/react-ui/commit/eb871e59622fb1ff8717c597c27b9ae9b0dc8052))

### [1.5.1](https://github.com/AdmiralDS/react-ui/compare/v1.5.0...v1.5.1) (2022-07-04)


### Bug Fixes

* chrome 84, inset css rule is not supported ([7d7a21f](https://github.com/AdmiralDS/react-ui/commit/7d7a21fac63213a4250fd23cfd3abd6d753d56cd))
* **TabMenu:** fix active button tab color ([8e4617b](https://github.com/AdmiralDS/react-ui/commit/8e4617bebcbcb4fe242baae4ec777e7275efbc8b))

## [1.5.0](https://github.com/AdmiralDS/react-ui/compare/v1.4.2...v1.5.0) (2022-06-29)


### Features

* **DropMenu:** add width prop ([6a3571f](https://github.com/AdmiralDS/react-ui/commit/6a3571fb4244845237d4f96ee95fcf531049fc1d))
* **MultiButton:** use new DropMenu instead of Dropdown ([94e9784](https://github.com/AdmiralDS/react-ui/commit/94e9784d93ae676f3ef20093347847bc46277b4f))
* **SliderInput:** add opportunity to customize labels for slider marks ([9c726ee](https://github.com/AdmiralDS/react-ui/commit/9c726eeb1c619b18d5ae9d1390535b5a03eae67a))


### Bug Fixes

* **Breadcrumbs:** fix bug with dimension ([e19e12b](https://github.com/AdmiralDS/react-ui/commit/e19e12b630ba67751727b4a7f5dc645487dc26f3))
* **MenuButton:** add menuWidth and menuMaxHeight ([34646db](https://github.com/AdmiralDS/react-ui/commit/34646dbe1773c0cddf0946a482f6274006917ec6))
* **NumberInput:** fix bug with copied value and precision 0 ([1c78d10](https://github.com/AdmiralDS/react-ui/commit/1c78d1034aca6268eaf3c51297f2062b4a344d70))

### [1.4.2](https://github.com/AdmiralDS/react-ui/compare/v1.4.1...v1.4.2) (2022-06-28)

### [1.4.1](https://github.com/AdmiralDS/react-ui/compare/v1.4.0...v1.4.1) (2022-06-28)


### Bug Fixes

* **FileUploader:** fix [#189](https://github.com/AdmiralDS/react-ui/issues/189) ([e9789a8](https://github.com/AdmiralDS/react-ui/commit/e9789a8a53aa7f7d8b1189dc01caf022058f8121))

## [1.4.0](https://github.com/AdmiralDS/react-ui/compare/v1.3.1...v1.4.0) (2022-06-27)


### Features

* **Avatar:** add opportunity to customize Avatar icon color and status color, add opportunity to use different avatars in AvatarGroup ([c9ebfb5](https://github.com/AdmiralDS/react-ui/commit/c9ebfb516ed3615f9e6df6e01c324581dcdc2a71))
* **Breadcrumbs:** remove ReactDOM.render method, refactor component ([d3512ec](https://github.com/AdmiralDS/react-ui/commit/d3512ecd70ffdcf8ce2ebe7e4f6415c6434f99a4))
* **Table:** add opportunity to disable row checkbox ([d91e447](https://github.com/AdmiralDS/react-ui/commit/d91e4476e958dd0f8f9dfca9f3c91d3f37ee072a))


### Bug Fixes

* **OverflowMenu:** fix active style ([d4d24aa](https://github.com/AdmiralDS/react-ui/commit/d4d24aa4545d31d9d70916e47ad675cd2da07e73))

### [1.3.1](https://github.com/AdmiralDS/react-ui/compare/v1.3.0...v1.3.1) (2022-06-20)


### Bug Fixes

* **Button:** should rerender only when props changed ([9bddc96](https://github.com/AdmiralDS/react-ui/commit/9bddc9662d4adccd7d5d1f12ca8611343a4ce036))

## [1.3.0](https://github.com/AdmiralDS/react-ui/compare/v1.2.1...v1.3.0) (2022-06-16)


### Features

* **Select:** add styles for multiple select in readOnly state ([de37f71](https://github.com/AdmiralDS/react-ui/commit/de37f71adda899fdea8b332375351189cad46376))


### Bug Fixes

* **Select:** fix drop button position for custom content in select ([92f1e47](https://github.com/AdmiralDS/react-ui/commit/92f1e47d5827be4c6f44fe09d9441a937e86a1e6))
* **SuggestInput:** fix event for handling option selection ([36a6489](https://github.com/AdmiralDS/react-ui/commit/36a64897e507e984165ac5fe9c5188708ae59e21))

### [1.2.1](https://github.com/AdmiralDS/react-ui/compare/v1.2.0...v1.2.1) (2022-06-14)


### Bug Fixes

* **MenuButton:** fix tests ([a583fd5](https://github.com/AdmiralDS/react-ui/commit/a583fd53093652f113cbc20c5d42292a34af4ab4))

## [1.2.0](https://github.com/AdmiralDS/react-ui/compare/v1.1.0...v1.2.0) (2022-06-10)


### Features

* **Breadcrumbs:** update use of OverflowMenu ([e844c3f](https://github.com/AdmiralDS/react-ui/commit/e844c3fe3978edf311fa56f0ef81b031d2e2d0ba))
* **Modal:** add opportunity to hide CloseIcon ([fb6ef56](https://github.com/AdmiralDS/react-ui/commit/fb6ef56d70040cc418d0de3dead0c8177a446106))
* **Select:** add styles for readOnly state ([d2098ac](https://github.com/AdmiralDS/react-ui/commit/d2098ac29779685859f7a0e006d850c97116f5ee))
* **Table:** update use of OverflowMenu ([2d79ec1](https://github.com/AdmiralDS/react-ui/commit/2d79ec145c1bb58570a029a9f552a05adbaabcd2))
* **TabMenu:** use OverflowMenu component ([f658620](https://github.com/AdmiralDS/react-ui/commit/f658620339ef87221d778e5a9f9249ac03208342))
* **TextButtonMenu:** add TextButtonMenu ([1437a6e](https://github.com/AdmiralDS/react-ui/commit/1437a6e7e37eb0157a962d6a14a59ce6a5361980))


### Bug Fixes

* **DateInput:** add icon prop for alternative icon ([e95f665](https://github.com/AdmiralDS/react-ui/commit/e95f6658c6ccaaac621523400e017a0e77cfca75))
* **IconButton:** fix icon size ([27553e3](https://github.com/AdmiralDS/react-ui/commit/27553e33e48aa18ba8e0f776da1e514c2fdab5a3))
* **Modal:** remove overlay blur ([96e5162](https://github.com/AdmiralDS/react-ui/commit/96e51624477ea67f2538fbfcbbddefa858e61418))
* **OverflowMenu:** fix DropdownContainer position ([c903f3e](https://github.com/AdmiralDS/react-ui/commit/c903f3e2e8c28ad5bd0dc64801c7f4664e4b705e))
* **OverflowMenu:** use new DropDown ([55a86cd](https://github.com/AdmiralDS/react-ui/commit/55a86cd0dae516ab3a4f3cc664138447c51ee7b9))
* **Select:**  input aria should be small when not in focus ([18982ad](https://github.com/AdmiralDS/react-ui/commit/18982ad384c5d5de2cc0d2fe6abaafe5569da656))
* **Select:** fix bug with placeholder color ([48a5b5d](https://github.com/AdmiralDS/react-ui/commit/48a5b5d4275c826c1d3c770cc603d38446b03ba7))
* **Select:** fix problem with label click and dropdown opening ([3e3be1b](https://github.com/AdmiralDS/react-ui/commit/3e3be1b01f8c5aa95be6fbef47b8f6ff18c0d869))
* **Select:** in readonly mode should not display drop icon ([83f7f4e](https://github.com/AdmiralDS/react-ui/commit/83f7f4edb7e1be2f76661f0201f8fd8afeaa8ce8))
* **SuggestInput:** fix timeout blur effect ([6d09233](https://github.com/AdmiralDS/react-ui/commit/6d092339655be4f2d5194f2cc684aa625a9bf04a))
* **SuggestInput:** in readonly mode should not display icon ([58af65f](https://github.com/AdmiralDS/react-ui/commit/58af65f1394a0315849c0d822e564367095e75fc))
* **TabMenu:** copy fix underline from Admiral 2.0 ([638480d](https://github.com/AdmiralDS/react-ui/commit/638480dbc43a5fe94bc75748a820954600631808))
* **TabMenu:** fix underline in mobile view ([52ffc72](https://github.com/AdmiralDS/react-ui/commit/52ffc722cc838dc0e3d827d807b2a991aa1dbc7b))
* **TextButton:** fix disabled and loading pointer events ([0349b03](https://github.com/AdmiralDS/react-ui/commit/0349b034d55537c0bf689cb7a861aac43a78a19b))

## [1.1.0](https://github.com/AdmiralDS/react-ui/compare/v1.0.0...v1.1.0) (2022-05-20)


### Features

* **Table:** replace column defaultSort with controlled sort parameter ([d6c2228](https://github.com/AdmiralDS/react-ui/commit/d6c2228e090b0356463f47e20fe7e4a968509c59))


### Bug Fixes

* **NumberInput:** fix bug with onBlur and precision 0 ([e87e489](https://github.com/AdmiralDS/react-ui/commit/e87e489317cb4e17967326b6614e09bbb769c313))
* **Table:** fix problem with hook in renderHeaderCell ([707b553](https://github.com/AdmiralDS/react-ui/commit/707b553ad54ece30c63616016a71a546b472b930))

### [1.0.0](https://github.com/AdmiralDS/react-ui/compare/v0.9.1...v1.0.0) (2022-05-18)


### Features

* **Menu:** add new components - Menu & DropDownContainer ([726aed0](https://github.com/AdmiralDS/react-ui/commit/726aed0f292af1029ed5d82fdd912c0910a03596))
* **Menu:** add new components - Menu & DropDownContainer ([739d8db](https://github.com/AdmiralDS/react-ui/commit/739d8dbfe01c938b5b43e23020d00cc5afbf63de))
* **Table:** add opportunity to use extraText in header ([22521bc](https://github.com/AdmiralDS/react-ui/commit/22521bce0324ab07b24056e556d83904b3c0ad99))
* **Table:** add opportunity to use OverflowMenu in table row ([cb1756c](https://github.com/AdmiralDS/react-ui/commit/cb1756c89c5b8125d3c54a215cb98c29b7db1d4e))
* **Table:** add virtual scroll for fixed row height ([638402f](https://github.com/AdmiralDS/react-ui/commit/638402f156d151df380adf5b3e0e6af859548501))


### Bug Fixes

* **Checkbox:** add disabled background color ([5035b14](https://github.com/AdmiralDS/react-ui/commit/5035b149df5e5dddae5944898f9c959fcdafe121))
* **FileUploader:** backport select file logic ([0ac8aef](https://github.com/AdmiralDS/react-ui/commit/0ac8aef1166634234678f86d20beae52f04e2295))
* **MenuButton:** add vertical paddings to Dropdown ([dd12039](https://github.com/AdmiralDS/react-ui/commit/dd120392d77f64cbad107fc7cbdc7c41ed72db56))
* **NumberInput:** fix formatting logic on onBlur or slider onChange ([ded4713](https://github.com/AdmiralDS/react-ui/commit/ded47135dfd6427cc5ffebc102dcde3c33198e76))
* **OverflowMenu:** fix hover ([cbe45a2](https://github.com/AdmiralDS/react-ui/commit/cbe45a21f482d80fede6ca5d03c49e01b4d25966))
* **OverflowMenu:** fix opened Button appearance ([5c94c14](https://github.com/AdmiralDS/react-ui/commit/5c94c143ecc8ef88e5184b42cd64f0a40716bcb2))
* **PhoneNumberInput:** fix delete "+" ([917ba0a](https://github.com/AdmiralDS/react-ui/commit/917ba0aebff7745d9a93d678e6f94d3378d8b4b5))
* **RadioButton:** add disabled background color ([d8d9c55](https://github.com/AdmiralDS/react-ui/commit/d8d9c5579adc2d1d934a1d21135cb727cfaf8371))
* **Select:** fix bug with Safari and several select components ([f5e4f24](https://github.com/AdmiralDS/react-ui/commit/f5e4f24e3440e60d309f7eb297b4cb98e23088e1))
* **Select:** fix problem with dropdown toggle behaviour ([2c3ac78](https://github.com/AdmiralDS/react-ui/commit/2c3ac78a81db00e234fe1f81765e5b375a2087c4))
* **SelectTree:** fix checkbox behaviour ([ff0d514](https://github.com/AdmiralDS/react-ui/commit/ff0d5143eab4ee2e750bf9156fa297a97330feab))
* **SelectTree:** fix next level offset ([da298a8](https://github.com/AdmiralDS/react-ui/commit/da298a8f478764c685e156dc834713e9cb71ed20))
* **SelectTree:** fix vertical line paddings ([8ee640e](https://github.com/AdmiralDS/react-ui/commit/8ee640e0c6bd8bd67b1bb84f776cf5e71ea02008))
* **Slider:** fix numeric points formatting ([063864f](https://github.com/AdmiralDS/react-ui/commit/063864f1b261c370f774e7147107ed145bb161af))
* **Table:** fix bug with vertical scroll compensator ([219157b](https://github.com/AdmiralDS/react-ui/commit/219157b2f8f0e23d95f2cceae05903d6967ee48f))
* **Table:** fix problem with header background when displayRowSelectionColumn is true ([7490711](https://github.com/AdmiralDS/react-ui/commit/7490711b93361fbb16a7220356484ae57710e18b))
* **Table:** fix problem with useRef hook ([01e1d86](https://github.com/AdmiralDS/react-ui/commit/01e1d862d65cadfdf0124007c99895a5583a0d9a))
* **TabOverflowMenu:** fix hover ([a17f427](https://github.com/AdmiralDS/react-ui/commit/a17f42714e05a4a11074877dc0d73652f591a394))
* **Toggle:** fix hover style ([49c5e34](https://github.com/AdmiralDS/react-ui/commit/49c5e34cff60b5378ff39db4279dc9b0445878ee))

### [0.9.1](https://github.com/AdmiralDS/react-ui/compare/v0.0.2...v0.9.1) (2022-04-20)


### Bug Fixes

* **Avatar:** use standard Tooltip ([ac474dc](https://github.com/AdmiralDS/react-ui/commit/ac474dc76cf265b86530fa35db720eec4c64587c))
* **Chips:** use standard Tooltip ([442fdba](https://github.com/AdmiralDS/react-ui/commit/442fdba81e1619f31881756150ae75122a2f1619))
* **FileUploader:** use standard Tooltip ([e94c80d](https://github.com/AdmiralDS/react-ui/commit/e94c80d8021aa5a41e1b3e6284f6265da8e85854))
* **NumberInput:** add event argument in onChange callback ([3a300ab](https://github.com/AdmiralDS/react-ui/commit/3a300ab34d3c7823d9c39946608cc889489eea2c))
* **Stepper:** use standard Tooltip ([45711a4](https://github.com/AdmiralDS/react-ui/commit/45711a4c0e65047fa85f8aacea1b47e31f74eb05))
* **Table:** fix icon styles for expanded row ([4d80668](https://github.com/AdmiralDS/react-ui/commit/4d80668e4dc5f75169e73047b1277c8447f40f5a))
* **Table:** fix sticky columns horizontal scroll ([7d250cb](https://github.com/AdmiralDS/react-ui/commit/7d250cb99c7cd34f704db45d9f32b5833754d69e))
* **TabOverflowMenu:** use standard Tooltip ([1699edb](https://github.com/AdmiralDS/react-ui/commit/1699edb8bc4a06a3bdf64d3536d45ddf8611cd9a))
* **Tag:** use standard Tooltip ([1b35c54](https://github.com/AdmiralDS/react-ui/commit/1b35c54bfdc71e4e583f022fa2efeee4e800140a))

### 0.0.2 (2022-04-19)
