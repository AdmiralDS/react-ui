# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
