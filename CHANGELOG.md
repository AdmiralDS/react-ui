# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.4.1](https://github.com/AdmiralDS/react-ui/compare/v7.4.0...v7.4.1) (2023-11-10)


### Bug Fixes

* **SliderInput:** исправлен баг, связанный с отсутствием автокоррекции введенного значения, если значение выходит за пределы диапазона minValue-maxValue ([8de2dd0](https://github.com/AdmiralDS/react-ui/commit/8de2dd0fe37238488661ee7953f929493864786f))
* **TabMenu:** Исправлена ошибка, связанная со сбросом выбранного пункта на начальный при масштабировании интерфейса. ([54cdec4](https://github.com/AdmiralDS/react-ui/commit/54cdec40c051eae836174244c8c7dcb1b022265f)), closes [#1125](https://github.com/AdmiralDS/react-ui/issues/1125)

## [7.4.0](https://github.com/AdmiralDS/react-ui/compare/v7.3.0...v7.4.0) (2023-11-03)


### Features

* **Accordion:** add press state ([c0dab63](https://github.com/AdmiralDS/react-ui/commit/c0dab63d55e0212a11bdb796b9bc0061d1090709))
* **Chips:** add press state ([d0ae0a0](https://github.com/AdmiralDS/react-ui/commit/d0ae0a0e6c485c70a2b9a51973402f4092790a8e))
* **ContentSwitcher:** add press state ([84756bb](https://github.com/AdmiralDS/react-ui/commit/84756bbb8f610e25fdfbefc0af8f1514d8bd7047))
* **PaginationOne:** add press state ([cb3584c](https://github.com/AdmiralDS/react-ui/commit/cb3584ca016c95052ba111f253e63b733e8411ee))


### Bug Fixes

* **Table:** при перетаскивании (drag and drop) столбцы меняются местами в момент, когда курсор заходит на область соседнего столбца ([0b25427](https://github.com/AdmiralDS/react-ui/commit/0b254276be2e7340124f87704a2d6406e588729d))
* **Table:** при перетаскивании колонок используется системный курсор вместо прежних иконок ([e6e327f](https://github.com/AdmiralDS/react-ui/commit/e6e327f740330d6fc86743ec92da87803f3e5ff0))

## [7.3.0](https://github.com/AdmiralDS/react-ui/compare/v7.2.0...v7.3.0) (2023-10-24)


### Features

* **Badge:** change padding in size M ([e658b8e](https://github.com/AdmiralDS/react-ui/commit/e658b8ea60b8bb5ae7e99d316fbfaf7bd4f48d73))


### Bug Fixes

* **Menu:** Исправлено закрытие дочерних меню при клике за пределами открытых меню. ([cc824a9](https://github.com/AdmiralDS/react-ui/commit/cc824a9cd5ae442c00aa8c8be19c717d0c221f4f)), closes [#1122](https://github.com/AdmiralDS/react-ui/issues/1122)

## [7.2.0](https://github.com/AdmiralDS/react-ui/compare/v7.1.0...v7.2.0) (2023-10-19)


### Features

* **Menu:** Добавлен компонент для заголовка категории CategoryMenuItem, примеры с категориями приведены в соответствие с требованиями ДС ([8e8fb30](https://github.com/AdmiralDS/react-ui/commit/8e8fb3053edb14ff18b373e3f7bdf3950a55b247))


### Bug Fixes

* **Select:** Внешний вид и поведение чипсов в режиме multiple приведены в соответствие дизайну ([3a985ea](https://github.com/AdmiralDS/react-ui/commit/3a985ea7315df95a4b88a2027d47591fef926f6c)), closes [#1149](https://github.com/AdmiralDS/react-ui/issues/1149)
* **Tree:** убраны лишние ререндеры при наведении на элементы ([352aaac](https://github.com/AdmiralDS/react-ui/commit/352aaac053de759bde6584d5aa53a4a2bcacaeec)), closes [#1130](https://github.com/AdmiralDS/react-ui/issues/1130)

## [7.1.0](https://github.com/AdmiralDS/react-ui/compare/v7.0.0...v7.1.0) (2023-10-14)


### Features

* **FileInputField:** stop passing deprecated props to FileInput ([7d825dd](https://github.com/AdmiralDS/react-ui/commit/7d825dd7793bdf6f0c387e8931a3a220a6b8ac62))
* **FileInput:** mark status props as deprecated ([d6d77e9](https://github.com/AdmiralDS/react-ui/commit/d6d77e97c06659d911a4f245f9e18c29180f926f))
* **PseudoIcon, PseudoText:** поддержка styled-components v6 ([dae95d6](https://github.com/AdmiralDS/react-ui/commit/dae95d6ded03cb87774340756da947ba793c6f7f))
* **Select:** добавлена возможность получения дата атрибутов опции при попытке удаления чипса ([fd93e4d](https://github.com/AdmiralDS/react-ui/commit/fd93e4dcc495c45a0def492f9a3f28fc87e1c47a)), closes [#1144](https://github.com/AdmiralDS/react-ui/issues/1144)


### Bug Fixes

* **Button:** добавлено свойство max-width для контента кнопки ([57bb44a](https://github.com/AdmiralDS/react-ui/commit/57bb44a21bdf687e9bb8a4da1c3d9aa2631c0521))
* **Toggle:** События клика должны обрабатываться через компонет чекбокса ([e6e7b1d](https://github.com/AdmiralDS/react-ui/commit/e6e7b1d2e891d6bd802e23d5bcaf1136e8815ae7))

## [7.0.0](https://github.com/AdmiralDS/react-ui/compare/v6.3.0...v7.0.0) (2023-10-04)


### ⚠ BREAKING CHANGES

* https://github.com/styled-components/styled-components/releases/tag/v6.0.0

### Features

* поддержка styled-components v6 ([6795cff](https://github.com/AdmiralDS/react-ui/commit/6795cff59a93d100ed6e71aebf1ad81660c72466))


### Bug Fixes

* **Table:** исправлен баг с ограничением максимальной высоты строки детализации (expandedRowRender) ([6cf7bf1](https://github.com/AdmiralDS/react-ui/commit/6cf7bf1cbc561abb34164c6e90720603d90c3fdd))

## [6.3.0](https://github.com/AdmiralDS/react-ui/compare/v6.2.0...v6.3.0) (2023-09-27)

### Features

- **Menu:** добавлена возможность использовать виртуальный скролл в многоуровневом меню ([4085af3](https://github.com/AdmiralDS/react-ui/commit/4085af3c94c81eed0ddcb8e28ec64733a9745048)), closes [#1073](https://github.com/AdmiralDS/react-ui/issues/1073)

## [6.2.0](https://github.com/AdmiralDS/react-ui/compare/v6.1.1...v6.2.0) (2023-09-20)

### Features

- **Select:** добавлена возможность передавать data-attribute для dropDownContainer и Menu ([cc8f242](https://github.com/AdmiralDS/react-ui/commit/cc8f242d2557cb72f331f51794fe8f6d794da4cd)), closes [#1117](https://github.com/AdmiralDS/react-ui/issues/1117)
- **Table:** добавлен параметр type для колонки таблицы ([a26be32](https://github.com/AdmiralDS/react-ui/commit/a26be32621393a2980babfefb698db1f9fa056ad))
- **Table:** добавлены новые data-атрибуты и класснеймы для ячеек с чекбоксами и иконками стрелок ([42ef538](https://github.com/AdmiralDS/react-ui/commit/42ef538022ea487f26cac02fd2262475dadd33f8))

### Bug Fixes

- **Menu:** Исправлена ошибка с "подвисанием" подменю при скролле ([0b574e4](https://github.com/AdmiralDS/react-ui/commit/0b574e48100db0e6c2a4793dccb0e889b79884ab)), closes [#1095](https://github.com/AdmiralDS/react-ui/issues/1095)

### [6.1.1](https://github.com/AdmiralDS/react-ui/compare/v6.1.0...v6.1.1) (2023-09-07)

## [6.1.0](https://github.com/AdmiralDS/react-ui/compare/v6.0.0...v6.1.0) (2023-09-05)

### Features

- **AvatarActivity:** add new component ([1607ab0](https://github.com/AdmiralDS/react-ui/commit/1607ab0334bed041a88794e9e3594821a442d768))
- **AvatarActivityGroup:** add new component AvatarActivityGroup ([12a117b](https://github.com/AdmiralDS/react-ui/commit/12a117b8c7081e4db8f9ec3dde8da6d70deea628))
- **Select:** Изменен порядок появления опций в поле в режиме multiple - опции появляются в порядке выбора пользователем(последнее выбранное появляется последним в группе чипсов). ([5de5ef9](https://github.com/AdmiralDS/react-ui/commit/5de5ef9b9b8eb8755b0c78cc5d58d2910fe72521)), closes [#826](https://github.com/AdmiralDS/react-ui/issues/826)
- **Tree:** Добавлено свойство defaultModel для использования в неконтролируемом состоянии ([f83ce72](https://github.com/AdmiralDS/react-ui/commit/f83ce7216dd583bf8b0289ca54e21b3967973df1)), closes [#997](https://github.com/AdmiralDS/react-ui/issues/997)

### Bug Fixes

- **Avatar:** fix icon size for dimension S ([a4d26a0](https://github.com/AdmiralDS/react-ui/commit/a4d26a0d50c7c8139309a3424216ad018956e3f5))
- **Button:** исправлен баг с изменением ширины кнопки при переходе от обычного состояния в состояние loading ([e357e9b](https://github.com/AdmiralDS/react-ui/commit/e357e9b4774f07b9c8738f7fcc0375a0a2b4704c))
- clean install must succseed ([049d9f7](https://github.com/AdmiralDS/react-ui/commit/049d9f707283f39d5af87266ea93163972b6f706))
- **Select:** Исправлена ошибка срабатывания события onFocus при blur, убраны лишние срабатывания onFocus ([cafca77](https://github.com/AdmiralDS/react-ui/commit/cafca773d41ad1e7966ccbb0328acf36a7b042c1)), closes [#1044](https://github.com/AdmiralDS/react-ui/issues/1044)
- **Select:** Исправлена ошибка стирания из стейта выбранных опций при внешней фильтрации значений в режиме multiple, доработан пример внешней фильтрации в storybook ([26f1ffa](https://github.com/AdmiralDS/react-ui/commit/26f1ffa903bd757a29e49c12b4a720e59f6e9582)), closes [#1086](https://github.com/AdmiralDS/react-ui/issues/1086)
- **SliderInput:** исправлены ошибки в работе компонента в контролируемом режиме ([80262e8](https://github.com/AdmiralDS/react-ui/commit/80262e8238a73aa9b0b4edb6ff1475285701ea37))
- **SliderRange:** исправлена работа компонента в контролируемом режиме ([c473082](https://github.com/AdmiralDS/react-ui/commit/c473082796ab28f54e6f2794ba1318f6e9efbb6a))
- **Table:** движение мыши в зоне иконок фильтров и сортировки не вызывает drag&drop колонок ([56b62af](https://github.com/AdmiralDS/react-ui/commit/56b62afcfa4c84e8128775a51cc9163e1921a2d1))

## [6.0.0](https://github.com/AdmiralDS/react-ui/compare/v5.4.0...v6.0.0) (2023-08-08)

### ⚠ BREAKING CHANGES

- **NumberInput:** значение инпута, выходящее за пределы диапазона minValue-maxValue, теперь не подлежит автокоррекции при потере полем фокуса, необходимая валидация и корректировка значения должны выполняться на стороне пользователя

### Features

- **EditMode:** добавлен проп onCancel вместо onClose ([35507ed](https://github.com/AdmiralDS/react-ui/commit/35507edb4dbe94c9490ceb9048f9bda5b8c0c650))
- **EditMode:** обновлен API ([5ae2b1d](https://github.com/AdmiralDS/react-ui/commit/5ae2b1d55175f2861a7d1800ed4c8977723e9b58))
- **Modal:** добавлена статусная иконка ([461cd57](https://github.com/AdmiralDS/react-ui/commit/461cd57d01a3b27f90ad232ba22b63073e80acdc))
- **Table:** добавлена возможность создания кастомных статусов строк с помощью параметра строки status и параметра таблицы rowBackgroundColorByStatusMap, параметры строки error и success помечены как deprecated ([5bcf28e](https://github.com/AdmiralDS/react-ui/commit/5bcf28e74e7f1cb87075f8ea252d997742ac3579))

### Bug Fixes

- **Calendar:** set pointer cursor for Month and Year panel buttons ([e3a0e67](https://github.com/AdmiralDS/react-ui/commit/e3a0e676d6785d0ee6ec21471e3718ae254778de))
- **DateInput:** remove debug console logging ([e0d0578](https://github.com/AdmiralDS/react-ui/commit/e0d0578bbb332796c17a079ee2ff15eaf874bcd6))
- **DateInput:** прокинуты недостающие props ([ee1c9aa](https://github.com/AdmiralDS/react-ui/commit/ee1c9aa8d9066b8ed1407e5a9f545fa69f2ff5ef))
- **EditMode:** исправлен баг при начальном пустом значении ([30ef11b](https://github.com/AdmiralDS/react-ui/commit/30ef11bec00baca3b4de0f904a5c34b87c0b413a))
- **InputEx:** исправлено отображение prefixValue/suffixValue ([a13bb20](https://github.com/AdmiralDS/react-ui/commit/a13bb20782eac9e77e457a934d67097b5eb6d7d3))
- **InputEx:** размер компонента также влияет на размер выпадающего меню ([c9e1ba0](https://github.com/AdmiralDS/react-ui/commit/c9e1ba091818bcc707fa04249ba4ef1b0d13ff05))
- **Menu:** Исправлена ошибка вызова onSelect при повторном клике на item ([d73ab8d](https://github.com/AdmiralDS/react-ui/commit/d73ab8d2cd0e43131d9a40628958f464c9fee31c)), closes [#1045](https://github.com/AdmiralDS/react-ui/issues/1045) [#1074](https://github.com/AdmiralDS/react-ui/issues/1074)
- **MultiButton:** fix rerender while pressing button ([a685ddf](https://github.com/AdmiralDS/react-ui/commit/a685ddfb38ac754671b0f9a6b57784f1afea52a1))
- **MultiButton:** remove unneeded interface MultiButtonItem ([aa2507b](https://github.com/AdmiralDS/react-ui/commit/aa2507b2fd6f034af2f3e0495d2e97ac6cdc39aa))
- **NumberInput:** исправлен баг в работе контролируемого инпута в react 18 ([7272d43](https://github.com/AdmiralDS/react-ui/commit/7272d433619528876b83feb5cedc89cb486f11a0))
- **PhoneNumberInput:** Убрана иконка очистки выбранного значения, добавлена дефолтная иконка при отсутствии совпадений с кодами стран ([91ab4e1](https://github.com/AdmiralDS/react-ui/commit/91ab4e1acb81bdc820fde468a9557451f474f517)), closes [#971](https://github.com/AdmiralDS/react-ui/issues/971)
- **rollup:** fix alias resolve in generated typings ([696ad8b](https://github.com/AdmiralDS/react-ui/commit/696ad8b5cce9f377e6fe987fb97782c8d3a840b7))
- **Select:** Исправлена ошибка изменения порядка options при изменении списка options ([f4e80f4](https://github.com/AdmiralDS/react-ui/commit/f4e80f444fe6439f8104c182242c40ebfa3ae30d)), closes [#873](https://github.com/AdmiralDS/react-ui/issues/873)
- **Select:** Исправлена ошибка отображения иконки очистки выбранного значения в режиме mode='select' multiple displayClearIcon ([1b6f826](https://github.com/AdmiralDS/react-ui/commit/1b6f826d722ef06342a4cde0ee5be340c8e0325e)), closes [#1002](https://github.com/AdmiralDS/react-ui/issues/1002)
- **Select:** Исправлена ошибка удаления выбранных значений в режиме search multiple при помощи backspace ([586d7da](https://github.com/AdmiralDS/react-ui/commit/586d7da1824c52b168ba403df3b47b6544120b29)), closes [#984](https://github.com/AdmiralDS/react-ui/issues/984)
- **Table:** исправлен warning - can`t perform a React state update on unmounted component, связанный с работой observeRect утилиты ([dcb7aa1](https://github.com/AdmiralDS/react-ui/commit/dcb7aa11eb5aba5922857e7cb86943d5f88c3120))
- **Table:** исправлен баг с высотой подложки для OverflowMenu и для одиночных действий над строкой ([885a354](https://github.com/AdmiralDS/react-ui/commit/885a354346187ba8d5a5d553f40bc69311a3d1fe))
- **Table:** исправлен баг с одновременным ресайзингом колонки и её перетаскиванием (drag&drop) ([cafafad](https://github.com/AdmiralDS/react-ui/commit/cafafad73084cae154ef173abdbb1d079f1399dc))
- **Table:** исправлен баг со срабатыванием колбека onRowClick при клике на стрелку в строке с названием группы ([2200e71](https://github.com/AdmiralDS/react-ui/commit/2200e71baa0ee1546447f654da431223dd5b79ad))
- **TextArea:** при использовании maxRows с autoHeight должен появляться скролл текста ([4acd6e9](https://github.com/AdmiralDS/react-ui/commit/4acd6e9339eb20855ced23e4ae0c508cd6e58fdd))
- **Tree:** Изменены отступы уровней дерева в соответствии с дизайном. ([c538049](https://github.com/AdmiralDS/react-ui/commit/c5380490e6c9bf5fb754083d3e404fe0eeb11329)), closes [#961](https://github.com/AdmiralDS/react-ui/issues/961)
- **Tree:** Исправлена ошибка обработки узлов с пустым массивом дочерних элементов ([623f602](https://github.com/AdmiralDS/react-ui/commit/623f6020b9c81c88ae8122ef15c4657e647b54ed)), closes [#1032](https://github.com/AdmiralDS/react-ui/issues/1032)
- **Tree:** Убран рудиментарный атрибут width ([6d94c8a](https://github.com/AdmiralDS/react-ui/commit/6d94c8a3010aff29638f608f5d7897f1c28da9ec)), closes [#1024](https://github.com/AdmiralDS/react-ui/issues/1024)

- **NumberInput:** значение инпута, выходящее за пределы диапазона minValue-maxValue, теперь не подлежит автокоррекции при потере полем фокуса, необходимая валидация и корректировка значения должны выполняться на стороне пользователя ([73e258f](https://github.com/AdmiralDS/react-ui/commit/73e258f204ccf7e4123dc1e3c8e99e85aa34af71))

## [5.4.0](https://github.com/AdmiralDS/react-ui/compare/v5.3.0...v5.4.0) (2023-07-05)

### Features

- **Menu:** добавлена возможность использовать многоуровневые меню ([2f607b7](https://github.com/AdmiralDS/react-ui/commit/2f607b7e5ca688f198c3a7fa5f8762c373107a85)), closes [#259](https://github.com/AdmiralDS/react-ui/issues/259)

### Bug Fixes

- **SliderInput:** fix incorrect value of fullStr param in onChange callback, add event param in onChange callback ([58b9d99](https://github.com/AdmiralDS/react-ui/commit/58b9d99c6236b67de32160b9f82e1b47c1379066))

## [5.3.0](https://github.com/AdmiralDS/react-ui/compare/v5.2.0...v5.3.0) (2023-06-30)

### Features

- **Table:** add showRowsActions prop to display row actions (overflow menus and single action icons) permanently ([5e7d58e](https://github.com/AdmiralDS/react-ui/commit/5e7d58ee267410d73d38f9c694019322530bd64d))

## [5.2.0](https://github.com/AdmiralDS/react-ui/compare/v5.1.0...v5.2.0) (2023-06-22)

### Features

- **Avatar, AvatarGroup:** update appearance names ([3a8e312](https://github.com/AdmiralDS/react-ui/commit/3a8e3121cff33f82cc35a0160932e228a11a2c13))
- **Button:** add props iconStart/iconEnd ([a55c4ce](https://github.com/AdmiralDS/react-ui/commit/a55c4cea73dd0f1f6ac550e8c830f5cab707b98f))

### Bug Fixes

- **NumberInput:** fix placeholder default value, hide clear icon when value is empty ([73d7531](https://github.com/AdmiralDS/react-ui/commit/73d75314641e8cde5738b399bc1f37bfde50c97f))
- **PhoneNumberInput:** fix Chevron position ([06478ff](https://github.com/AdmiralDS/react-ui/commit/06478ff0adc6a3ef06b06e21bfdaad9226f12b4e))
- **Table:** add touch support for column resize ([a903144](https://github.com/AdmiralDS/react-ui/commit/a90314446f0d2a66061f684b6f546abec0a39cf4))

## [5.1.0](https://github.com/AdmiralDS/react-ui/compare/v5.0.1...v5.1.0) (2023-06-16)

### Features

- **GroupActionsPane:** add props id and title in columns api, add tooltip for long column titles ([50d9b53](https://github.com/AdmiralDS/react-ui/commit/50d9b530c8323d5fc8d479b99b461be2932726db))

### Bug Fixes

- **Hint, Tooltip:** fix bug with z-index ([b60467c](https://github.com/AdmiralDS/react-ui/commit/b60467ce425e1d7c2d5fc7aaadc38486f772b915))

### [5.0.1](https://github.com/AdmiralDS/react-ui/compare/v5.0.0...v5.0.1) (2023-06-08)

### Bug Fixes

- **Breadcrumbs:** fix scroll behavior in mobile mode ([fef01aa](https://github.com/AdmiralDS/react-ui/commit/fef01aabf0e881a8a421a50eccec44f7d781bbcb))
- **TimeInput:** fix drop overflow ([7933966](https://github.com/AdmiralDS/react-ui/commit/7933966929423693278c1c4b476d9b0ed2dbff56))
- **TimeInput:** fix menu dimension ([dafdbe7](https://github.com/AdmiralDS/react-ui/commit/dafdbe7ba0083b7efbc6d2546f49a4b90999dc21))

## [5.0.0](https://github.com/AdmiralDS/react-ui/compare/v4.17.0...v5.0.0) (2023-06-06)

### ⚠ BREAKING CHANGES

- add component Flex

### Features

- add component Flex ([3f4bd14](https://github.com/AdmiralDS/react-ui/commit/3f4bd14452ad38ad06804b899025dd2e4e52e4fb))
- **InputEx:** show clearIcon only when value is present ([dc973e5](https://github.com/AdmiralDS/react-ui/commit/dc973e5fe2f61b72af3d5d3578b4fdac9cafc563))
- **TextInput:** show clearIcon only when value is present ([b3c044d](https://github.com/AdmiralDS/react-ui/commit/b3c044dd749cb64493f9b59fbd1d00da3192b420))

### Bug Fixes

- **Menu:** fix horizontal scroll ([6e75516](https://github.com/AdmiralDS/react-ui/commit/6e75516dcf5ab87593ee88597633b6d1d0183d4c))
- **Table:** fix bug with column width and vertical scroll ([5439d43](https://github.com/AdmiralDS/react-ui/commit/5439d43c090baba11197f81202120b0e2570dce7))

## [4.17.0](https://github.com/AdmiralDS/react-ui/compare/v4.16.1...v4.17.0) (2023-05-31)

### Features

- **Table:** add column drag and drop ([a0c8a4b](https://github.com/AdmiralDS/react-ui/commit/a0c8a4b203c814cbfa9cb534ab7642a7864a5a8e))

### Bug Fixes

- **Button:** fix button appearance type name ([979814a](https://github.com/AdmiralDS/react-ui/commit/979814a6f4a60e908919e6d5b5bd93ea0044806b))
- **Drawer:** fix DrawerContent height ([5b76318](https://github.com/AdmiralDS/react-ui/commit/5b763180565bdd4cad731429c01cbf087de9d1d3))
- **Menu:** set correct checkbox color in disabled state ([8190c09](https://github.com/AdmiralDS/react-ui/commit/8190c09a6807b57e5b854885f25428ad7465e6a9))

### [4.16.1](https://github.com/AdmiralDS/react-ui/compare/v4.16.0...v4.16.1) (2023-05-26)

### Bug Fixes

- **InputEx:** fix style typo ([28a3f33](https://github.com/AdmiralDS/react-ui/commit/28a3f33401184f6cf0b0b7e107b32b691fb188e2))
- **Styled:** fix use of context ([b66bf11](https://github.com/AdmiralDS/react-ui/commit/b66bf11ad9d88fe8e8801f006d1e39cb9fe8b927))
- **Table:** fix problem with onRowClick callback and OverflowMenu ([abe88ae](https://github.com/AdmiralDS/react-ui/commit/abe88ae6e9ad7b80ec6b8555d1c0cd0996b7de83))
- **Theme:** fix color theme import ([d38c0c2](https://github.com/AdmiralDS/react-ui/commit/d38c0c231716d880eac912b371e4b37e2f34c7de))

## [4.16.0](https://github.com/AdmiralDS/react-ui/compare/v4.15.1...v4.16.0) (2023-05-23)

### Features

- **TextButton:** add iconStart and iconEnd props instead of icon and displayRight ([e077c99](https://github.com/AdmiralDS/react-ui/commit/e077c99303b282a28b0589b6d3aec4fc368b1c88))
- **TextButtonMenu:** add icon prop ([ee97c8a](https://github.com/AdmiralDS/react-ui/commit/ee97c8a00f1f27bd65c14d6b81cc053c0baf0306))
- **TextButtonMenu:** add iconStart prop ([1832ef8](https://github.com/AdmiralDS/react-ui/commit/1832ef8842203a6d50d8b36356cd1b17c7e9cf82))
- **themes:** add shadow style 'Shadow 12' ([628966c](https://github.com/AdmiralDS/react-ui/commit/628966c5e024a30ab440d7eae1bf9a1cfe05f70e))

### Bug Fixes

- **Menu:** fix Menu width ([07cd291](https://github.com/AdmiralDS/react-ui/commit/07cd2915e6f838bb7871c9102b5f564e40552703))
- **Toggle, RadioButton:** fix readOnly state style ([31c11ec](https://github.com/AdmiralDS/react-ui/commit/31c11ece82e1effc61afd9c39cff19ecc88b55ad))

### [4.15.1](https://github.com/AdmiralDS/react-ui/compare/v4.15.0...v4.15.1) (2023-05-19)

### Bug Fixes

- **Select:** fix checkbox color in Select drop container for multiple mode ([eaf0b28](https://github.com/AdmiralDS/react-ui/commit/eaf0b28cbad67a6cb135c31fdd09ed4adef3594a))

## [4.15.0](https://github.com/AdmiralDS/react-ui/compare/v4.14.1...v4.15.0) (2023-05-19)

### Features

- **Colors:** add colors section in storybook ([bc59e49](https://github.com/AdmiralDS/react-ui/commit/bc59e4912d2e9fcdc8e3e74e1c97ecdd844f6880))
- **Hint:** change internal vertical paddings ([f30a4fd](https://github.com/AdmiralDS/react-ui/commit/f30a4fd33c31a84ab4c8c41c10fa1a102bc1a479))
- **Modal:** change internal vertical paddings ([3f44b38](https://github.com/AdmiralDS/react-ui/commit/3f44b3835185b98b6382f8b475e258a355276e5d))

### Bug Fixes

- **Drawer:** fix paddings for DrawerTitle and DrawerButtonPanel ([d6af714](https://github.com/AdmiralDS/react-ui/commit/d6af714777836bd6918ebe8250e2816e6b5e71fe))
- **Select:** fix disabled chip border && remove checkbox redundant readOnly state ([73d8076](https://github.com/AdmiralDS/react-ui/commit/73d8076edd283010ad832598fde2c35527a37b99))

### [4.14.1](https://github.com/AdmiralDS/react-ui/compare/v4.14.0...v4.14.1) (2023-05-15)

## [4.14.0](https://github.com/AdmiralDS/react-ui/compare/v4.13.0...v4.14.0) (2023-05-11)

### Features

- **Checkbox, CheckboxField:** add readOnly state ([f530bfe](https://github.com/AdmiralDS/react-ui/commit/f530bfeec2396322712c5e0e9fdb30ffa01db8d4))
- **Drawer:** add component Drawer and examples for it ([98fe8e6](https://github.com/AdmiralDS/react-ui/commit/98fe8e62a1d389fba73161c1700ad5c057033d62))
- **RadioButton:** add readOnly state ([cfa47ed](https://github.com/AdmiralDS/react-ui/commit/cfa47ed7913d43d95611003f6f101ba7d7c95058))
- **Tag,Tags:** add proper kind names ([2115d7c](https://github.com/AdmiralDS/react-ui/commit/2115d7cf3262faabd034a3656bededebbe961842))
- **Toggle:** add readOnly state ([e69d7da](https://github.com/AdmiralDS/react-ui/commit/e69d7da495deafb17ef7d717a5a07221c9c872f7))

### Bug Fixes

- **storybook:** fix example with fonts ([5b5e195](https://github.com/AdmiralDS/react-ui/commit/5b5e1957cac1a2a5c229fa39a2d86be2dbe06900))

## [4.13.0](https://github.com/AdmiralDS/react-ui/compare/v4.12.0...v4.13.0) (2023-05-03)

### Features

- **InputEx:** border should hover when hovering suffix/prefix area ([88a382f](https://github.com/AdmiralDS/react-ui/commit/88a382ffa90e6b094375b3440c99eb37935cdb94))
- **InputEx:** hover chevron when hovering all suffix/prefix area ([611fdbd](https://github.com/AdmiralDS/react-ui/commit/611fdbd836f3a08e665f11e8158f3e3b0861010a))
- **Select:** add forceHideOverflowTooltip property & correct pass title ([191b9b5](https://github.com/AdmiralDS/react-ui/commit/191b9b51d50dd22ac6c43cd5f815a13d71491fc6))

## [4.12.0](https://github.com/AdmiralDS/react-ui/compare/v4.11.2...v4.12.0) (2023-04-27)

### Features

- **Modal:** add overlayStyle and overlayClassname props ([823a1ac](https://github.com/AdmiralDS/react-ui/commit/823a1ac23056bf93ea6a4879ed081c6fb730a66b))

### Bug Fixes

- add text-rendering: geometricPrecision to all text tokens ([821c762](https://github.com/AdmiralDS/react-ui/commit/821c76218fd8a771b8613e330c8781b357ac2131))
- **Chips:** fix behavior and hover style ([8119af7](https://github.com/AdmiralDS/react-ui/commit/8119af7f41ec4fac0eaeb518f9628d3893a9f33c))
- **PaginationTwo:** clear input on new page selection ([4b8fe08](https://github.com/AdmiralDS/react-ui/commit/4b8fe0843ce08ba32aef3e641599acffe26def28))
- **PaginationTwo:** fix button styles in mobile mode ([503fe9e](https://github.com/AdmiralDS/react-ui/commit/503fe9e9c9e63ccdc5393a874eaafa81ec624f9e))

### [4.11.2](https://github.com/AdmiralDS/react-ui/compare/v4.11.1...v4.11.2) (2023-04-25)

### Bug Fixes

- radiobutton and field paddings ([dce4f7a](https://github.com/AdmiralDS/react-ui/commit/dce4f7affc166238e4e43680a56c388b95a7f367))
- **Table:** fix onRowClick trigger when user clicks ExpandIcon ([527f3a7](https://github.com/AdmiralDS/react-ui/commit/527f3a75ed894ad083b66d0a944252076f33dc2b))
- **Tooltip:** remove irrelevant withDelay prop from docs ([9c95db3](https://github.com/AdmiralDS/react-ui/commit/9c95db3b839b7b0b3c5f9d61a3c561a4f1519958))

### [4.11.1](https://github.com/AdmiralDS/react-ui/compare/v4.11.0...v4.11.1) (2023-04-20)

### Bug Fixes

- **TabeRow:** workaround typing problem under typescript 5 ([99054d5](https://github.com/AdmiralDS/react-ui/commit/99054d5da234976c8ff4a4b997b6a5772edf166d))

## [4.11.0](https://github.com/AdmiralDS/react-ui/compare/v4.10.0...v4.11.0) (2023-04-18)

### Features

- **Breadcrumbs:** add lastBreadcrumbActive prop to control active-inactive state of last breadcrumb ([a1d0fd7](https://github.com/AdmiralDS/react-ui/commit/a1d0fd7aec3eb6de7fb230b33f8a7e5dd18171c3))
- components with drop now properly pass ref (was drop ref before) ([e53a7f9](https://github.com/AdmiralDS/react-ui/commit/e53a7f9f7b329642b005be49d6ffb72a7e6babcc))

### Bug Fixes

- **ContentSwitcher:** fix storybook docs, place playground story on 1st place ([9bb5c31](https://github.com/AdmiralDS/react-ui/commit/9bb5c315ee82e0662812c9d6c217bfa619e10055))
- **DateInput:** fix stories controls ([21bbc31](https://github.com/AdmiralDS/react-ui/commit/21bbc3177434b61450a77a61c536fc9389453441))
- **PaginationOne:** fix bug with menu width ([0056e78](https://github.com/AdmiralDS/react-ui/commit/0056e78b7c0b6489b8e38e3348938f4cdde2b91d))
- **Select:** collapse control in readOnly mode without placeholder ([50efccd](https://github.com/AdmiralDS/react-ui/commit/50efccdebb167a9ba89c8c2ea45b0109c0a58fcd))

## [4.10.0](https://github.com/AdmiralDS/react-ui/compare/v4.9.2...v4.10.0) (2023-04-11)

### Features

- **Select:** fix clear icon for multiselect mode ([f3ed09d](https://github.com/AdmiralDS/react-ui/commit/f3ed09db24a4a7145ddc2916540b9bcf899fec4f))

### Bug Fixes

- **Modal:** fix problem with props description ([e8447d8](https://github.com/AdmiralDS/react-ui/commit/e8447d8e9f824fa9ac6c04f35f7b0c1a5fcd837b))
- **StatusIndicator:** fix docs, add playground ([9e652ac](https://github.com/AdmiralDS/react-ui/commit/9e652ac87e13959787fe89d0f6dbafd90279b5aa))
- **Table:** fix bug with OverflowMenu mouseenter and row hover state ([d9349a5](https://github.com/AdmiralDS/react-ui/commit/d9349a585eade0306c614073bc90acef9e09451d))
- **TabMenu:** fix press Tab style ([6a3827a](https://github.com/AdmiralDS/react-ui/commit/6a3827a0e435e8a9beaf1cb2d174b476ed50bfc9))
- **Tag:** fix problem with props description ([b5e981a](https://github.com/AdmiralDS/react-ui/commit/b5e981a8ecaec9d01d299cedb97fe1e7648da924))

### [4.9.2](https://github.com/AdmiralDS/react-ui/compare/v4.9.1...v4.9.2) (2023-04-06)

### Bug Fixes

- **TimeInput:** manage focus properly ([66cb3e0](https://github.com/AdmiralDS/react-ui/commit/66cb3e0cec4db6922c0552b28cd8cb24eeb7f06c))

### [4.9.1](https://github.com/AdmiralDS/react-ui/compare/v4.9.0...v4.9.1) (2023-04-04)

## [4.9.0](https://github.com/AdmiralDS/react-ui/compare/v4.8.1...v4.9.0) (2023-04-04)

### Features

- **Avatar:** move showTooltip prop from internal to usual props ([3772b3a](https://github.com/AdmiralDS/react-ui/commit/3772b3a71992b77a9811d78e1df8b4e140398ade))
- **EditMode:** add multiline view mode ([77396ae](https://github.com/AdmiralDS/react-ui/commit/77396ae73bc98441fd645b227d7e148fb7d9d6e3))
- **Menu:** add property rowCount ([760d2e3](https://github.com/AdmiralDS/react-ui/commit/760d2e331c2cf1377fd3fe086774a332d8913697))

### Bug Fixes

- **Button:** rise appearance style specificity ([4aef532](https://github.com/AdmiralDS/react-ui/commit/4aef532b647fb38ab7e9fc86f2251e66929b7ec8))
- **MenuItem:** click on menu item shouldnt steal focus ([bb7f229](https://github.com/AdmiralDS/react-ui/commit/bb7f22920b8d8c1ae64eb06de575d59d0cfb2ba6))
- npm run storybook must work from project root ([dea7ce4](https://github.com/AdmiralDS/react-ui/commit/dea7ce4d9dc380e852db233cff5079b1e21d109a))
- **PaginationOne:** fix button focus style ([6b92385](https://github.com/AdmiralDS/react-ui/commit/6b9238523ddb03e497e3bfc67ca317670f7d6389))
- **TabMenu:** fix render badge in OverflowMenu ([a9f0a48](https://github.com/AdmiralDS/react-ui/commit/a9f0a48b3ed91fd6fac730d5dbffc8c65d34c2ac))
- **Tooltip:** fix bug with fonts loading ([c8fdc8a](https://github.com/AdmiralDS/react-ui/commit/c8fdc8ae4304e0dba284fbe64a07782aabd7319c))

### [4.8.1](https://github.com/AdmiralDS/react-ui/compare/v4.8.0...v4.8.1) (2023-03-23)

### Bug Fixes

- **Breadcrumbs:** fix tag names ([3e4f7e0](https://github.com/AdmiralDS/react-ui/commit/3e4f7e0d41f6d61cee0dfb290b93bd9cdfa2ebe9))
- **Breadcrumbs:** remove user agent styles for ol element ([8ba2301](https://github.com/AdmiralDS/react-ui/commit/8ba2301b12515eb544933e12adaff2835ac7f7b7))
- **DropdownContainer:** fix center position coordinates to be inside viewport ([feff3eb](https://github.com/AdmiralDS/react-ui/commit/feff3ebf10708f18659936aec6b8f405fe859b99))
- **SliderRange:** fix controls type in storybook ([6ba2ce5](https://github.com/AdmiralDS/react-ui/commit/6ba2ce51171e1c016b6d08de30849aa97cddcd12))
- **TextAria:** atoheight must work for uncontrolled component ([ac11b80](https://github.com/AdmiralDS/react-ui/commit/ac11b802d9b684f2e93d470440664f618a91a607))

## [4.8.0](https://github.com/AdmiralDS/react-ui/compare/v4.7.0...v4.8.0) (2023-03-21)

### Features

- **AvatarGroup:** add dropContainerClassName and dropContainerStyle props ([371d8fe](https://github.com/AdmiralDS/react-ui/commit/371d8fe5b4112374756be76ee12456c421e43d3a))
- **Breadcrumbs:** add dropContainerClassName and dropContainerStyle props ([523034c](https://github.com/AdmiralDS/react-ui/commit/523034c8a87877a6e070420b40b29a2eec16d791))
- **DateInput:** add dropContainerClassName and dropContainerStyle props ([a9a8e77](https://github.com/AdmiralDS/react-ui/commit/a9a8e77ef8a69e099e013a33cdc4ad87f818a59a))
- **DropMenu:** add dropContainerClassName and dropContainerStyle props ([911528e](https://github.com/AdmiralDS/react-ui/commit/911528ee9716d2ff759bd2a64f2b5d7151f78691))
- **GroupActionsPane:** add columnsButtonDropContainerStyle and settingsButtonDropContainerStyle props ([9fb0514](https://github.com/AdmiralDS/react-ui/commit/9fb0514ba028155eefa0b98d76b482797bf52037))
- **InputEx:** add pageSizeDropContainerStyle and pageNumberDropContainerStyle props ([efa9ee7](https://github.com/AdmiralDS/react-ui/commit/efa9ee752577aa3974564a6fc300441ecaf3a8af))
- **MenuButton:** add dropContainerClassName and dropContainerStyle props ([bdc8e94](https://github.com/AdmiralDS/react-ui/commit/bdc8e945f8484470bbdab87e972f68ecced75df3))
- **MultiButton:** add dropContainerClassName and dropContainerStyle props ([114be03](https://github.com/AdmiralDS/react-ui/commit/114be037849d89ab05e45af7a4f43bb5750a5221))
- **OverflowMenu:** add dropContainerClassName and dropContainerStyle props ([79ae6d2](https://github.com/AdmiralDS/react-ui/commit/79ae6d2d6357446cac939bd520860b32de4b4d32))
- **PaginationOne:** add pageSizeDropContainerStyle and pageNumberDropContainerStyle props ([f9e0a67](https://github.com/AdmiralDS/react-ui/commit/f9e0a675784018a3f15ee6170204fa5fb84affd1))
- **PhoneNumberInput:** add dropContainerClassName and dropContainerStyle props ([5714018](https://github.com/AdmiralDS/react-ui/commit/5714018176878d3c5c80a17e600731ad91e1c293))
- **Select:** add dropContainerClassName and dropContainerStyle props ([ee5749f](https://github.com/AdmiralDS/react-ui/commit/ee5749f84e3cb51faa3044acf1534b5622768a19))
- **SuggestInput:** add dropContainerClassName and dropContainerStyle props ([3648add](https://github.com/AdmiralDS/react-ui/commit/3648add67e78f071043b41d27a56838b4da2bcc1))
- **Table:** add filterMenuClassName and filterMenuStyle props ([15911b1](https://github.com/AdmiralDS/react-ui/commit/15911b195d77cf4d09c3828b096505744cff0c4f))
- **Table:** add methods for custom render cell and group ([983d938](https://github.com/AdmiralDS/react-ui/commit/983d938b3094c5622def949c5ea0a70c088ac3b3))
- **Table:** fix review ([1eb4166](https://github.com/AdmiralDS/react-ui/commit/1eb416643dcd80f756ca7b3fc0eb2ea2833a78fe))
- **Table:** remove get helper ([339b85f](https://github.com/AdmiralDS/react-ui/commit/339b85f318e51431072205fb3c0b5013c02a03b8))
- **TabMenu):** add dropContainerClassName and dropContainerStyle props ([2a8038f](https://github.com/AdmiralDS/react-ui/commit/2a8038f6b167cf6b820804312c50fa30b7d8bb08))
- **TagMenu:** add dropContainerClassName and dropContainerStyle props ([6eb96d3](https://github.com/AdmiralDS/react-ui/commit/6eb96d33eb28ea4226ab6991991f098257d17a85))
- **TextButtonMenu:** add dropContainerClassName and dropContainerStyle props ([2b32293](https://github.com/AdmiralDS/react-ui/commit/2b32293b458efff09b8d43a4fee3c3e98066ea37))
- **TimeField:** add dropContainerClassName and dropContainerStyle props ([e777290](https://github.com/AdmiralDS/react-ui/commit/e777290bf1f77733cb6115973968fd3b11e68116))

### Bug Fixes

- **Breadcrumbs:** set alignSelf to auto ([cf1acff](https://github.com/AdmiralDS/react-ui/commit/cf1acff8e5fb20d976a1493d8fd47ace65cdeca9))
- lint fixes ([2411218](https://github.com/AdmiralDS/react-ui/commit/241121856e8edd31b7f408f4f571216b60ef6107))
- **PaginationSimple:** fix bug with inactive controls in storybook ([f060cc2](https://github.com/AdmiralDS/react-ui/commit/f060cc25b374357a2c53cee7837af12044a35b64))
- **RadioButton:** fix control extraText and playground example in storybook ([d62c80b](https://github.com/AdmiralDS/react-ui/commit/d62c80bc605ff39d4bb60788cc6c35f2099c41d9))
- **Stepper:** fix type of mobile prop in storybook ([66d581d](https://github.com/AdmiralDS/react-ui/commit/66d581d33abfe9520ca13118d8329024e68a92ef))
- **TabMenu:** fix layout jumping ([8d330d9](https://github.com/AdmiralDS/react-ui/commit/8d330d961461a17e9597b28ca8861801dbbe1c24))
- **Tooltip:** long words should break ([0c986f5](https://github.com/AdmiralDS/react-ui/commit/0c986f538859fb7770554a3e624329e8ad1ffd9b))

## [4.7.0](https://github.com/AdmiralDS/react-ui/compare/v4.6.0...v4.7.0) (2023-03-15)

### Features

- **DateInput:** add drop menu visibility control ([1b38947](https://github.com/AdmiralDS/react-ui/commit/1b389470cef623f743054d708fbf170f99f65bd3))
- **Menu:** add virtual scroll ([c78a41c](https://github.com/AdmiralDS/react-ui/commit/c78a41ca193eb1a5f3f3d0fbab165e88e9a1ab8c))

### Bug Fixes

- **DropdownContainer:** should't rerender when no real state change ([d9ef469](https://github.com/AdmiralDS/react-ui/commit/d9ef469bab02b9503f58d55cbe1225d5bdcda570))
- **DropMenu:** fix using isVisible prop ([f6955c6](https://github.com/AdmiralDS/react-ui/commit/f6955c6151e592a7878c21fdfc18d8119c459c9f))
- **NumberInput:** fix bug with cursor and copy, paste actions ([bfa509f](https://github.com/AdmiralDS/react-ui/commit/bfa509f1b66be6120e16f7bedd07c1fb2c99d0c2))
- **ToastProvider:** add type export ([56938b6](https://github.com/AdmiralDS/react-ui/commit/56938b661701dfe9172b3c76ad1f0b3ee19c01e8))

## [4.6.0](https://github.com/AdmiralDS/react-ui/compare/v4.5.2...v4.6.0) (2023-03-10)

### Features

- **Table:** add filterMenuAlignSelf and filterMenuCssMixin props for column ([2bbcad1](https://github.com/AdmiralDS/react-ui/commit/2bbcad1e9e9b4ada3bc0e9aac6bdc67cddfdf5ba))

### Bug Fixes

- **MenuButton:** pass renderBottomPanel prop ([c609a4e](https://github.com/AdmiralDS/react-ui/commit/c609a4ed65d51131a8fd71108b0aa5330a9664d8))
- **NotificationItem:** add missing types to export ([5bdc451](https://github.com/AdmiralDS/react-ui/commit/5bdc4510b5cb9b97df84243cd6b77f62d628f9c4))
- **NumberInput:** value can be changed by ArrowUp, ArrowDown press as well as Plus, Minus icon click ([2da0175](https://github.com/AdmiralDS/react-ui/commit/2da0175d2e88edc5b3bd97b69f55b628bae0dc8e))
- **Tree:** add missing types to export ([5495219](https://github.com/AdmiralDS/react-ui/commit/5495219dd051f766e4d91ec8e6fdbb7266576562))

### [4.5.2](https://github.com/AdmiralDS/react-ui/compare/v4.5.1...v4.5.2) (2023-03-06)

### Bug Fixes

- **Menu:** fix scroll on repeat keydown ([5c77581](https://github.com/AdmiralDS/react-ui/commit/5c77581aa7201afc74a010df9936d5397ef28920))
- **PhoneNumberInput:** fix move more than 1 point on scroll on arrow key down ([0a39b50](https://github.com/AdmiralDS/react-ui/commit/0a39b5072e9c59de73a9cf9440aa95bad0a6c783))

### [4.5.1](https://github.com/AdmiralDS/react-ui/compare/v4.5.0...v4.5.1) (2023-03-03)

## [4.5.0](https://github.com/AdmiralDS/react-ui/compare/v4.4.1...v4.5.0) (2023-03-01)

### Features

- **Hint:** add prop hintPosition and add new variants of positions ([239067a](https://github.com/AdmiralDS/react-ui/commit/239067af37698e2856feca529d10a574d4a494ea))
- **PhoneNumberInput:** add Tooltip to drop down items ([c0ba451](https://github.com/AdmiralDS/react-ui/commit/c0ba451125f344800893664139c246475c5cf10a))
- **Spinner:** add new size MS 20px ([22db645](https://github.com/AdmiralDS/react-ui/commit/22db645c0f2573cd9e4f68daaa13c40be8664cfd))

### Bug Fixes

- **Button, IconButton, TextButton:** fix spinner size ([cf96192](https://github.com/AdmiralDS/react-ui/commit/cf961920b5b00a1c9a6d5381ddbc58309d26c79e))
- **DateInput:** date range should always replace symbols ([8c809c3](https://github.com/AdmiralDS/react-ui/commit/8c809c344864415ffb97fef2075cfc80bc6c1040))
- **DateInput:** when editing value the result must always follow replace pattern ([987eeae](https://github.com/AdmiralDS/react-ui/commit/987eeae09733408555f3e75ea6473ffc3552a0bb))
- **DateTime:** fix styles, add Container and Separator components ([f72695b](https://github.com/AdmiralDS/react-ui/commit/f72695be9506772fe2f5a792b3ddc279e4661946))
- **FileItem, TextInput:** fix spinner size ([4bdf6a2](https://github.com/AdmiralDS/react-ui/commit/4bdf6a2e83d8ffe51a5904f2351a0239b167aaed))
- **Hint:** fix styles for content area ([f924dbb](https://github.com/AdmiralDS/react-ui/commit/f924dbbbd45292b1f38375c29f2f29168df8f609))
- **IconButton:** fix vertical-align wrong value ([ad9583e](https://github.com/AdmiralDS/react-ui/commit/ad9583ed7af5d0ce9b5758629454747d8980fb4f))
- **PhoneNumberInput:** fix drop container width ([62c76ad](https://github.com/AdmiralDS/react-ui/commit/62c76ad6e98d14091ed17146ffa260bfcf3a6b63))
- **RadioButton:** remove hover circle after click ([d48db9b](https://github.com/AdmiralDS/react-ui/commit/d48db9b423903cf2228b44eec79b73fc426d826d))
- **SelectField:** fix dropdown position ([37a3d05](https://github.com/AdmiralDS/react-ui/commit/37a3d05507f6149a4754a536b1383a4ab2d6a611))
- **Select:** fix spinner size ([5a81029](https://github.com/AdmiralDS/react-ui/commit/5a8102995cca1186b78920f24d5e64778e65fde1))
- **TimeInput:** set focus on input when drop menu is opened ([9ea42d5](https://github.com/AdmiralDS/react-ui/commit/9ea42d5f14252c7e550ff7720050670822e4bc02))

### [4.4.1](https://github.com/AdmiralDS/react-ui/compare/v4.4.0...v4.4.1) (2023-02-16)

### Bug Fixes

- **TabMenu:** fix tabs update ([ccfcee8](https://github.com/AdmiralDS/react-ui/commit/ccfcee84c9d880f0401222ec9553951ce78126ae))
- **TextButton:** remove focus style after click ([2d22bd0](https://github.com/AdmiralDS/react-ui/commit/2d22bd0d97765163f779eca78ed317f9b21b1625))
- **Tree:** expose mouseleave event ([036edbb](https://github.com/AdmiralDS/react-ui/commit/036edbba83d434fb1a97d0e4cf4142b63ca0a52d))

## [4.4.0](https://github.com/AdmiralDS/react-ui/compare/v4.3.0...v4.4.0) (2023-02-14)

### Features

- **Notification:** add ability to customize Notification content ([72ca847](https://github.com/AdmiralDS/react-ui/commit/72ca847f47bffa2953e2c308c6b412db2854c273))
- **NotificationItem:** add new component ([9f0df38](https://github.com/AdmiralDS/react-ui/commit/9f0df385ebe4af8dc3b0468e46abf0e9bcb1ccda))
- **Toast:** add api for adding/removing customized toasts ([49af07e](https://github.com/AdmiralDS/react-ui/commit/49af07e4069247f55ae3afe80f97705a76b4156b))
- **Toast:** add renderToast prop ([dd3af77](https://github.com/AdmiralDS/react-ui/commit/dd3af77ec97946caf0f2d9e03d7c37f92987ff39))
- **Toast:** add toast item templates ([4391a5c](https://github.com/AdmiralDS/react-ui/commit/4391a5c26c88adbf297b5dc7b674f44f46482621))

### Bug Fixes

- **FileUploader:** fix Status type name to FileUploadingStatus ([e45809c](https://github.com/AdmiralDS/react-ui/commit/e45809c5ebb82a23287887f09f93a78ef9986283))

## [4.3.0](https://github.com/AdmiralDS/react-ui/compare/v4.2.0...v4.3.0) (2023-02-09)

### Features

- **InputEx:** add Tooltip ([61c1345](https://github.com/AdmiralDS/react-ui/commit/61c13457c7d4393a6023e938235bc80c5a25acd9))
- **Table:** add isFilterActive prop for column to control filter state, setFilterActive callback is deprecated now ([8617756](https://github.com/AdmiralDS/react-ui/commit/8617756a466e17135a85306d1f77c6a75846eab9))

### Bug Fixes

- **Button:** use props for icon to fix paddings ([d73c215](https://github.com/AdmiralDS/react-ui/commit/d73c215dc16bde2d49681cb08024deccad0bd0b1))
- **Table:** remove deprecated onMenuOpen, onMenuClose callbacks from row overflowMenuRender method ([4a6154e](https://github.com/AdmiralDS/react-ui/commit/4a6154e03748cc7cd54ef78159f1e63381c75584))

## [4.2.0](https://github.com/AdmiralDS/react-ui/compare/v4.1.0...v4.2.0) (2023-02-06)

### Features

- **Link:** add LinkComponentCssMixin for styling different components as link ([a49b1f4](https://github.com/AdmiralDS/react-ui/commit/a49b1f4066f88c51897adfd8b2fb8a9592de97c0))
- **Link:** add prop 'as' for rendering different html elements or components as root node ([fdee069](https://github.com/AdmiralDS/react-ui/commit/fdee0694d95a69f400db51259494e050d7716957))
- **Table:** add hover state for clickable rows ([eea3dbe](https://github.com/AdmiralDS/react-ui/commit/eea3dbe10c112567ac3e646c1647acbfbdd03d11))

### Bug Fixes

- **Avatar:** fix stories controls ([2de7902](https://github.com/AdmiralDS/react-ui/commit/2de7902e26c5cc002c0bb06e3b6f32ad7b16d486))
- **AvatarGroup:** fix stories controls ([ab5a16a](https://github.com/AdmiralDS/react-ui/commit/ab5a16a89d8b5f965a4b9a99af5a0316466b74f0))
- **Calendar:** fix bug with tooltip and disabled buttons ([184c110](https://github.com/AdmiralDS/react-ui/commit/184c110176ed4f8f1b9f0526a1cddb2cd684ec47))
- **NumberInput:** block selecting text on double click ([7cb0825](https://github.com/AdmiralDS/react-ui/commit/7cb08257218de95116e9c0b517b256a979932103))
- **RadioButton:** fix left text padding ([99c22b7](https://github.com/AdmiralDS/react-ui/commit/99c22b70e889579eaf306fe3fa5a5f686cff6bf1))
- **SuggestInput:** remove wrong transparent paddings in drop container ([966c183](https://github.com/AdmiralDS/react-ui/commit/966c1835e5428f8afa0008e0dfc8edf298bc14ec))
- **TreeNode:** add properly passing styling props on container ([c83d977](https://github.com/AdmiralDS/react-ui/commit/c83d9773742633bd20509a70f1fe3da07a62eb9b))

## [4.1.0](https://github.com/AdmiralDS/react-ui/compare/v4.0.0...v4.1.0) (2023-01-27)

### Features

- **Select:** add default filter for mode "searchSelect" ([95afa27](https://github.com/AdmiralDS/react-ui/commit/95afa27643cf44fd1b989223adea82a267bf330a))

### Bug Fixes

- **Breadcrumbs:** fix bug with dimension change ([c66e07c](https://github.com/AdmiralDS/react-ui/commit/c66e07c38f7264615f42db0ae121471385c9ba8d))
- **InputEx:** add passing render Options props to dropdown ([aaeb98b](https://github.com/AdmiralDS/react-ui/commit/aaeb98b4fd6284a09d793bfe55467668578df2c3))
- **InputEx:** add passing render Value prop ([cf4e7f7](https://github.com/AdmiralDS/react-ui/commit/cf4e7f7f1dc6b3db61229dd60b0bc616ad9cff81))
- invisibility styles ([10cc351](https://github.com/AdmiralDS/react-ui/commit/10cc3514d74c3639bea71c20b0ff8552e66edc07))
- **Modal:** fix bug with select in modal and incorrect arrows work ([9bf170b](https://github.com/AdmiralDS/react-ui/commit/9bf170b464aa28ef19afddc09929d226a42931a9))
- removed margin from Tag ([36935bc](https://github.com/AdmiralDS/react-ui/commit/36935bcfdf73b045c2671f69065d9cf4ac60d187))
- **Table:** fix filter dropdown menu alignment ([18391cb](https://github.com/AdmiralDS/react-ui/commit/18391cbf8759d3d1898b891345aa778bef1e7aec))

## [4.0.0](https://github.com/AdmiralDS/react-ui/compare/v3.10.1...v4.0.0) (2023-01-19)

### ⚠ BREAKING CHANGES

- **Table:** Table columns resize is controlled by user, onColumnResize callback is compulsory prop

### Features

- **Table:** add opportunity to use any valid css value as column width (px, percents, calc function etc.) ([2759d44](https://github.com/AdmiralDS/react-ui/commit/2759d4484670f203b5cc5bc32207565b24cfc106))

### Bug Fixes

- **InputEx:** fix focus style when icons prop is used ([ca663cb](https://github.com/AdmiralDS/react-ui/commit/ca663cb1777acb9c92d91658913237471e4b2c45))
- **Select:** space close options in searchMode (React 16) ([a2beb1a](https://github.com/AdmiralDS/react-ui/commit/a2beb1a7deaea67b6f44054f98a2b6c0c18068ba))
- **TextArea:** fix autoHeight behaviour ([e36e84f](https://github.com/AdmiralDS/react-ui/commit/e36e84f5d0847623d6fd3e0169b6747d84b57f14))
- **TextArea:** fix vertical paddings ([9b90a09](https://github.com/AdmiralDS/react-ui/commit/9b90a09dd521866358cff2ee601016d629c47ef5))
- **TimeInput:** fix bug with incorrect second number in time value ([4be4772](https://github.com/AdmiralDS/react-ui/commit/4be477288d3c0c459bd5551a5592f17ad928d391))

- **Table:** now column resize is controlled by user ([54b8c5c](https://github.com/AdmiralDS/react-ui/commit/54b8c5cc4bc7bf17b2661d8de73bf901a61c89eb))

### [3.10.1](https://github.com/AdmiralDS/react-ui/compare/v3.10.0...v3.10.1) (2023-01-10)

### Bug Fixes

- **CheckboxField:** add setting data-field attributes to container ([5cf3bf1](https://github.com/AdmiralDS/react-ui/commit/5cf3bf13990ad7a763277e1ae837706f54b0b137))
- linter and snapshots ([8a7e9f3](https://github.com/AdmiralDS/react-ui/commit/8a7e9f3a90d81cbe8381e8dbaa144d5382e1dac0))
- remove misleading doc text ([4412690](https://github.com/AdmiralDS/react-ui/commit/44126903eace3394279281c6770bfb56e140808d))
- **Table:** fix bug with disabled chevron icon for empty rows group ([3e292ae](https://github.com/AdmiralDS/react-ui/commit/3e292ae76e523074c6627df7d8b8bff002a6f1d5))

## [3.10.0](https://github.com/AdmiralDS/react-ui/compare/v3.9.0...v3.10.0) (2022-12-28)

### Features

- **Calendar:** add highlightWeekend prop ([468cc50](https://github.com/AdmiralDS/react-ui/commit/468cc50c9504226197c4387a7f22b255eb1b0276))
- **Calendar:** hide dates outside Month ([26100b3](https://github.com/AdmiralDS/react-ui/commit/26100b312807fcd7b4706b83429bb09b9c31489d))
- **PaginationOne:** add page number input panel to dropdown ([e0c01e6](https://github.com/AdmiralDS/react-ui/commit/e0c01e6f973feb19d30b4a0549aca0a9b3ca28d2))

### Bug Fixes

- **TextArea:** fix autoHeight on first render ([766f112](https://github.com/AdmiralDS/react-ui/commit/766f11220a88bfa941f3f356695e186ae5aa9aba))

## [3.9.0](https://github.com/AdmiralDS/react-ui/compare/v3.8.3...v3.9.0) (2022-12-22)

### Features

- **Select:** expose input ref and keyboard event handlers ([6e3da69](https://github.com/AdmiralDS/react-ui/commit/6e3da690525e47f45182106b444d360e4c88f808))
- **SelectField:** add filtering example story ([215f326](https://github.com/AdmiralDS/react-ui/commit/215f326ee8c6d24cdb817d90dbafdbdc65390ac3))
- **Tag:** add custom hover background for active tag ([af51ff2](https://github.com/AdmiralDS/react-ui/commit/af51ff21b5965bc55da8db5827eee2e6752e30fd))
- **Tag:** remove change background color on hover for passive tags ([94c2963](https://github.com/AdmiralDS/react-ui/commit/94c2963a6200c80c52ff6c8039f128e467c31778))

### Bug Fixes

- **DropdownContainer:** autocalculate vertical position ([7e7a618](https://github.com/AdmiralDS/react-ui/commit/7e7a6189838fd53438a93fd230de81371a0d5089))
- **Select:** fix paddings for size s ([8ad5cd3](https://github.com/AdmiralDS/react-ui/commit/8ad5cd3fe5c73e7229d8303b69cc96b1c5e83889))
- **Table:** fix bug resize cursor ([48e508b](https://github.com/AdmiralDS/react-ui/commit/48e508b9519b8b35cdccef8da56553cf85f0fa05))
- **Tag:** fix hover border color on active tag ([f6c24a6](https://github.com/AdmiralDS/react-ui/commit/f6c24a6b78c56178fee4aea25e23fe6f2a46201c))

### [3.8.3](https://github.com/AdmiralDS/react-ui/compare/v3.8.2...v3.8.3) (2022-12-20)

### Bug Fixes

- **FileInputField:** add export ([dbc6563](https://github.com/AdmiralDS/react-ui/commit/dbc65636f41e25ce5bed7ff32f306155e8408b85))
- **Table:** fix bug with negative values in onColumnResize callback ([90e99b1](https://github.com/AdmiralDS/react-ui/commit/90e99b19f93eaa62ef9999f623b5b229def48171))
- **Table:** row with group name should not be scrolled ([505ff07](https://github.com/AdmiralDS/react-ui/commit/505ff07a19a34c86d1da35fe89a4cb7d6d4ccdc2))

### [3.8.2](https://github.com/AdmiralDS/react-ui/compare/v3.8.1...v3.8.2) (2022-12-15)

### Bug Fixes

- **Select:** fix cycle deadlock ([1abdfba](https://github.com/AdmiralDS/react-ui/commit/1abdfbaf91592b94fdff980c55bae9c7e0af7b9c))
- **Table:** fix bug with header checkbox and checkboxDisabled rows ([8d4a722](https://github.com/AdmiralDS/react-ui/commit/8d4a722c5588239bf2d702763fbc13d405f303d7))
- **Table:** fix bug with horizontal scroll and group row width ([af3550e](https://github.com/AdmiralDS/react-ui/commit/af3550ecbee0fc3c5d403c41b02bbb441a2de7e2))
- **Table:** fix bug with overflowMenu and horizontal scroll ([3d7c00b](https://github.com/AdmiralDS/react-ui/commit/3d7c00bca7c58858276c5a06ef26ea729962db7c))

### [3.8.1](https://github.com/AdmiralDS/react-ui/compare/v3.8.0...v3.8.1) (2022-12-13)

### Bug Fixes

- **MenuButton:** set onChange prop to optional ([4be4e71](https://github.com/AdmiralDS/react-ui/commit/4be4e716bd001993d6f386cb056bbdfcc9ae89c1))
- **MultiButton:** set onChange prop to optional ([7517bb2](https://github.com/AdmiralDS/react-ui/commit/7517bb2247554eea146a5f8b45b947f1714016a3))
- **Select:** add passing props to native select ([401880a](https://github.com/AdmiralDS/react-ui/commit/401880a6beaa5278810970170b89a43bc6304d36))
- **Select:** change state disabled option ([de038c6](https://github.com/AdmiralDS/react-ui/commit/de038c65be0ffaec822d86c780fd85105915b12f))
- **StyledDropdownContainer:** fix DropdownContainer width to its content ([6388ef7](https://github.com/AdmiralDS/react-ui/commit/6388ef71bbe551a3375651bd521b36986c1b48e1))

## [3.8.0](https://github.com/AdmiralDS/react-ui/compare/v3.7.0...v3.8.0) (2022-12-07)

### Features

- **Select:** show ClearIon only when option is selected ([0ce4ec9](https://github.com/AdmiralDS/react-ui/commit/0ce4ec9cf03c59846bd8741989d782ec1c94f585))
- **Table:** add column argument to renderFilter callback, fix stories ([ca3460d](https://github.com/AdmiralDS/react-ui/commit/ca3460dfc6e7c2c9c08c7ae3c602017af571eac8))

### Bug Fixes

- **DropdownContainer:** fix infinity position recalculate ([a97a5fe](https://github.com/AdmiralDS/react-ui/commit/a97a5fea4997ab8aa08b4b749206379f69d607d3))
- **FileInput:** fix bug with incompatible API changes ([9e1ddde](https://github.com/AdmiralDS/react-ui/commit/9e1dddee96bcdb79b910ed5ff1d43435640908f6))
- **Select, Suggest:** pass dimension to dropdown container ([dcf2172](https://github.com/AdmiralDS/react-ui/commit/dcf2172cacea6267540591b1a99120190439d398))

## [3.7.0](https://github.com/AdmiralDS/react-ui/compare/v3.6.0...v3.7.0) (2022-12-01)

### Features

- **FileInputField:** add FileInputField component, in FileInput mark prop description as deprecated ([4ee9749](https://github.com/AdmiralDS/react-ui/commit/4ee9749ec4286b7c958c04482a9c1dcb41b61549))

### Bug Fixes

- **FileItem:** add focus for preview icon ([7ca0932](https://github.com/AdmiralDS/react-ui/commit/7ca0932debe2c5926f269552678749f6260cd55c))
- typscripts set to fixed verson where path transform know to works ([ac4d398](https://github.com/AdmiralDS/react-ui/commit/ac4d3980bf8b5684c951803a42d837adf29d99e3))

## [3.6.0](https://github.com/AdmiralDS/react-ui/compare/v3.5.0...v3.6.0) (2022-11-29)

### Features

- **FileItem:** add file type and icon handlers ([6101f44](https://github.com/AdmiralDS/react-ui/commit/6101f44dad6e69dbde0f347407220bf2649362d1))
- **IconButton:** add primary and secondary appearance ([10927d2](https://github.com/AdmiralDS/react-ui/commit/10927d2c5946a39a2c1f5c8a468645d0e17d5d08))
- **Modal:** move content scrollbar on modal right side, reduce modal left-right paddings ([575d6bb](https://github.com/AdmiralDS/react-ui/commit/575d6bb76db42b6903654c647f5ac895e5e11a4f))
- **Select:** Add property to control max row count in multiple mode ([9d3361e](https://github.com/AdmiralDS/react-ui/commit/9d3361e87598142b87826191f95990b6b436a580))
- **themes:** add 6px and 10px border radius ([899ca40](https://github.com/AdmiralDS/react-ui/commit/899ca404c75013bcf26201ca0b88cd7528a84d01))
- **Tooltip:** if renderContent result is empty, tooltip will not display ([ff25c40](https://github.com/AdmiralDS/react-ui/commit/ff25c400c1ef9c7a351b5d42a2821cf248cba02e))

### Bug Fixes

- **Table:** fix column minWidth which can be achieved by column resize ([a94a060](https://github.com/AdmiralDS/react-ui/commit/a94a060dd5df351d9a6e10c8cc2cf7ea38cf02b3))
- typings import statements, enforce linting ([da541d1](https://github.com/AdmiralDS/react-ui/commit/da541d11428d06b8fed20d9d8fadf83e07f3f7d8))

## [3.5.0](https://github.com/AdmiralDS/react-ui/compare/v3.4.0...v3.5.0) (2022-11-22)

### Features

- **CloseIconPlacementButton:** add IconPlacement with CloseOutline icon ([8070b45](https://github.com/AdmiralDS/react-ui/commit/8070b456326d25ba069a05cb94ad3926c387be2c))
- **IconPlacement:** add appearance ([56a1533](https://github.com/AdmiralDS/react-ui/commit/56a15331a063c3db5977f68e13ea443f4101152b))
- **IconPlacement:** add prop highlightFocus ([275cfb1](https://github.com/AdmiralDS/react-ui/commit/275cfb15f6520d68cd0585a5cd0f3cd3beec8659))
- **OverflowMenu:** use IconPlacement ([849c995](https://github.com/AdmiralDS/react-ui/commit/849c995a9cc5fde5fb92635126f182913200c55f))
- **Table:** add data attributes (data-column, data-row) for table body cells ([9c17a3a](https://github.com/AdmiralDS/react-ui/commit/9c17a3a5b73235cfdd0b1313b71ea723592041e3))

### Bug Fixes

- **Breadcrumbs:** fix OverflowMenu size ([02caa7e](https://github.com/AdmiralDS/react-ui/commit/02caa7ec867a3895fbca30c71e0531b10e384401))
- **Select:** lose focus on click on selected value ([a0dfb60](https://github.com/AdmiralDS/react-ui/commit/a0dfb60486cd268d8bf2da876a9f348dae1de5f2))
- **Table:** fix bug with overflowMenuRender and zoom ([92b6ca1](https://github.com/AdmiralDS/react-ui/commit/92b6ca1e4f567ac0ae0e7896fb9df9795d854451))

## [3.4.0](https://github.com/AdmiralDS/react-ui/compare/v3.3.0...v3.4.0) (2022-11-18)

### Features

- **FileItem:** add formatFileSizeInfo prop for custom file size view ([d385e20](https://github.com/AdmiralDS/react-ui/commit/d385e20321cda94bdf1caef49a7bf75c7e221f0d))
- **FileItem:** show file size in Kb if file is less than 1Mb ([3d73e40](https://github.com/AdmiralDS/react-ui/commit/3d73e40fa53646b801f2a4cdd6b5e887f83c5bc5))
- **IconPlacement:** add new component ([2a63e7e](https://github.com/AdmiralDS/react-ui/commit/2a63e7e1c1305116cf9fd400512ec06782c50502))
- **MultiButton:** enable customize DropMenu options ([f32bf7d](https://github.com/AdmiralDS/react-ui/commit/f32bf7d37ec2521ff49e4ca01e91652a173015a2))
- **PhoneNumberInput:** change Chevron icon and its margin ([b14fdbd](https://github.com/AdmiralDS/react-ui/commit/b14fdbdb922b376ed9d9b9c404c54e22c20eb4c4))
- **Select:** duplicate input value on cmd+a ([6f9e933](https://github.com/AdmiralDS/react-ui/commit/6f9e933cd6196ada0d5c9514e644c3205a9f5b8b))
- **Select:** remove highlight from select ([7951f16](https://github.com/AdmiralDS/react-ui/commit/7951f1626025f646a2ecefbe55480a63b9ac87b3))
- **SliderRange:** add controlled mode, fix bug with animation for Range component ([ce8a88c](https://github.com/AdmiralDS/react-ui/commit/ce8a88c7987724f9d0d8bbdd3dadf7eb07b0aa74))
- **Table:** add opportunity to use empty rows group ([8c86213](https://github.com/AdmiralDS/react-ui/commit/8c8621301145a4bb39058eb85da175fe765bfc09))
- **Table:** add opportunity to use grey zebra rows ([25e6470](https://github.com/AdmiralDS/react-ui/commit/25e647099a7a19ba380a30cb9eca425917970d1a))
- **TagMenu:** enable customize DropMenu options ([21d7f13](https://github.com/AdmiralDS/react-ui/commit/21d7f136c7c6633c983265360251142ad8f9e13a))

### Bug Fixes

- **ContentSwitcher:** fix story with icons only ([a235cee](https://github.com/AdmiralDS/react-ui/commit/a235cee6dc2625c304ce3a202655de0926c426e7))
- **TimeInput:** fix problem with 20-24 hours ([9bcee8b](https://github.com/AdmiralDS/react-ui/commit/9bcee8b4585d9411716a9808d79e14e27d1f5d72))

## [3.3.0](https://github.com/AdmiralDS/react-ui/compare/v3.2.0...v3.3.0) (2022-11-09)

### Features

- **Select:** add controlled open state ([df03b2d](https://github.com/AdmiralDS/react-ui/commit/df03b2dbed1a76fb490c3e7e39dd8f1975062cb8))

### Bug Fixes

- deploy-storybook workaround for https://github.com/storybookjs/storybook/issues/19692 ([89aa572](https://github.com/AdmiralDS/react-ui/commit/89aa57239e27467c857a50e81042bba0205e6c8f))
- **Modal:** fix bug with overflow on left side of ModalContent ([946dee9](https://github.com/AdmiralDS/react-ui/commit/946dee98b8b86570e1983ccd1681f035a8f5505d))
- **Storybook:** disable "Show code" in Docs tab ([16bbbe2](https://github.com/AdmiralDS/react-ui/commit/16bbbe27c5e7112a3443d306289ac4884e842ec8))
- **Storybook:** move options for a radio/check/select controls up to the argType level ([5af266e](https://github.com/AdmiralDS/react-ui/commit/5af266ed06d64901aa5f6f2b5b8639dd59fdabb9))
- **Storybook:** set values for args at the component level ([516f4b2](https://github.com/AdmiralDS/react-ui/commit/516f4b2b4403310ec08b8131b14491ac9907ecb9))

## [3.2.0](https://github.com/AdmiralDS/react-ui/compare/v3.1.0...v3.2.0) (2022-11-03)

### Features

- **Pill:** add new component Pill ([1000e36](https://github.com/AdmiralDS/react-ui/commit/1000e363e18b07834893922ddb2e61a076b438d8))
- **Select:** change internal dropdown to standard menu ([10a1d9e](https://github.com/AdmiralDS/react-ui/commit/10a1d9eefc5dc7f06144dc771cd4670047d7b148))
- **SliderInput:** add opportunity to use controlled mode ([f670d29](https://github.com/AdmiralDS/react-ui/commit/f670d295afd76f91954d08ba42d1cea9c4bbc7ca))

### Bug Fixes

- **DropMenu:** add Menu visibility to props ([d016bbe](https://github.com/AdmiralDS/react-ui/commit/d016bbe84faa9e3e601f68afeadb67aab59bcda8))
- **DropMenu:** use onSelectItem instead of onChange, pass active and onActivateItem to Menu ([cfe3bc7](https://github.com/AdmiralDS/react-ui/commit/cfe3bc78d614eea10740c40438819c1fc7262e24))
- **Menu, DropMenu:** add disableSelectedOptionHighlight prop instead of multiSelection ([533b79b](https://github.com/AdmiralDS/react-ui/commit/533b79b0467a6c428b9155d14ddbffd6aba87e00))
- **MenuButton:** use correct props for DropMenu ([42e77f9](https://github.com/AdmiralDS/react-ui/commit/42e77f9a3816c78e9e45ff498cb2a30afa3bf4fd))
- **MultiButton:** add prop onMainButtonClick ([a902f01](https://github.com/AdmiralDS/react-ui/commit/a902f01a16aa2a1243d5a377b4dec6899c80a893))
- **MultiButton:** use correct props for DropMenu ([ce8f03a](https://github.com/AdmiralDS/react-ui/commit/ce8f03a2af375b27125d3247adf52f26cf18a155))
- **OverflowMenu:** use correct props for DropMenu ([730a2c4](https://github.com/AdmiralDS/react-ui/commit/730a2c423da91ca607f0a50f69254c556de37ea2))
- **PaginationOne:** use correct props for DropMenu ([7d9aed8](https://github.com/AdmiralDS/react-ui/commit/7d9aed8b247a6d67144d8f422c1d8c84b19252ae))
- **Table:** use correct props for OverflowMenu ([56b7a05](https://github.com/AdmiralDS/react-ui/commit/56b7a051e6dc781c87dd739af495e0c3062ee95d))
- **Table:** use tooltip in title only if title is not custom ([48c9a36](https://github.com/AdmiralDS/react-ui/commit/48c9a3665b1265c421f5b79d74e2a8761df83ea2))
- **TagMenu:** use correct props for DropMenu ([01177fe](https://github.com/AdmiralDS/react-ui/commit/01177fe32239ea52d6e1fc4832d034ef452d8732))
- **TextButtonMenu:** use correct props for DropMenu ([48f9570](https://github.com/AdmiralDS/react-ui/commit/48f9570cd2d1b33a1506992d9cf5ce868ec9b906))
- workaround for https://github.com/storybookjs/storybook/issues/19692 ([fe0d8fd](https://github.com/AdmiralDS/react-ui/commit/fe0d8fdf4c1ab6ae4bbe876b6381eba92b4d576b))

## [3.1.0](https://github.com/AdmiralDS/react-ui/compare/v3.0.1...v3.1.0) (2022-10-21)

### Features

- **Menu,DropMenu:** add multiSelection prop ([321aeed](https://github.com/AdmiralDS/react-ui/commit/321aeed61df158e7d77cb1659714122387cc3e43))
- **Menu:** add example with CheckboxGroup ([1793930](https://github.com/AdmiralDS/react-ui/commit/1793930562c757e45ab292604411a8f777da97d0))
- **MenuItemWithCheckbox:** add component ([acde02a](https://github.com/AdmiralDS/react-ui/commit/acde02a5d9c6ebdfbe89b8c9ce9e38d7fbc4fbb1))

### Bug Fixes

- fix TagMenu export ([9f06f8c](https://github.com/AdmiralDS/react-ui/commit/9f06f8cffe7ee86e206241493603e9de9d6d04f3))
- **DateInput, InputExtended, TimeInput:** fix reopening drop container on icon click ([44aaba9](https://github.com/AdmiralDS/react-ui/commit/44aaba9c7ee5fa1c59be3941e3420c1fa93aa337))
- **DateInput:** set focus to input when calendar is open ([b627722](https://github.com/AdmiralDS/react-ui/commit/b627722a8db9755f3b841067125c2a81c3faf139))
- fix Range export ([1917e53](https://github.com/AdmiralDS/react-ui/commit/1917e53c91e20712f7155d03295b5a40a8bdbca4))
- fix tsconfig (need npm upgrade after merge to local brunch) ([40df47d](https://github.com/AdmiralDS/react-ui/commit/40df47df164b44451fee4539ffa17b335494186c))
- **Slider:** fix problems with animation, add type 'any' for step prop ([9e7cf2c](https://github.com/AdmiralDS/react-ui/commit/9e7cf2c52e6de172e01b55495435f4c70c1a6281))
- **Storybook:** pass loading and disabled in DropMenu stories examples ([3ffe082](https://github.com/AdmiralDS/react-ui/commit/3ffe0824dc6f75acba542f2a222cb81db30052de))
- **Table:** update CheckboxCell and ExpandCell dimensions ([3edccec](https://github.com/AdmiralDS/react-ui/commit/3edccecaaac4ee7b2da4abcd4307bc56714140c2))
- **TagMenu:** pass id to Menu's selected prop ([d5f277e](https://github.com/AdmiralDS/react-ui/commit/d5f277e74d2e40cc52aa3dda615ffcf6d058e611))
- **Tree,MenuItemWithCheckbox:** fix parent checkbox status ([729d870](https://github.com/AdmiralDS/react-ui/commit/729d87069fd22dba1e01c3131827559947453f3e))

### [3.0.1](https://github.com/AdmiralDS/react-ui/compare/v3.0.0...v3.0.1) (2022-10-13)

## [3.0.0](https://github.com/AdmiralDS/react-ui/compare/v2.5.0...v3.0.0) (2022-10-12)

### ⚠ BREAKING CHANGES

- **Tooltip, TooltipHoc:** change api for Tooltip and TooltipHoc

### Features

- **FileInput:** add FileInput instead of FileUploader ([d927c41](https://github.com/AdmiralDS/react-ui/commit/d927c416b3e878f6eb470dd4c30c441afaa5cbb0))
- **FileInput:** add status and extraText props ([f1a1079](https://github.com/AdmiralDS/react-ui/commit/f1a107940cdb4e399ef613b30fdda7034b6641ff))
- **Menu:** update initial hover position ([df34fd5](https://github.com/AdmiralDS/react-ui/commit/df34fd592b97e6f0b3ef7bbe53c70d50c8fe51ef))

### Bug Fixes

- **FileInput:** add synchronization with native input file list ([91626a9](https://github.com/AdmiralDS/react-ui/commit/91626a9ab96e9dea212bb0091055b3c16932d6b0))
- **FileInput:** fix outline focus ([f325893](https://github.com/AdmiralDS/react-ui/commit/f325893d8a77312469b88a052aff89f73894acde))
- **Locale:** remove deprecated props instead which locale prop should be used ([3e603a1](https://github.com/AdmiralDS/react-ui/commit/3e603a18b5c058cfb7763f9ad5278a597272444b))

- **Tooltip, TooltipHoc:** change api, add opportunity to use controlled and uncontrolled components ([e216a6d](https://github.com/AdmiralDS/react-ui/commit/e216a6d473421aeb7812f1fe4eabfcb4260786f2))

## [2.5.0](https://github.com/AdmiralDS/react-ui/compare/v2.4.0...v2.5.0) (2022-10-04)

### Features

- **Components:** add dropContainerCssMixin prop for components with drop down ([4de4e05](https://github.com/AdmiralDS/react-ui/commit/4de4e05e02f7d46c752638f1d8d070470302fc19))

### Bug Fixes

- **Menu:** fix styles ([3518783](https://github.com/AdmiralDS/react-ui/commit/35187835ff15833673f9aa8a288d2d46a4784d4c))
- **SuggestInput:** fix double scroll ([d004158](https://github.com/AdmiralDS/react-ui/commit/d0041584e8b88020d10b844e25eedc0854853454))
- wrong entry name mappings and CRA5 workaround ([335f496](https://github.com/AdmiralDS/react-ui/commit/335f496f03b95f8f60b436b37345c05b2873eded))

## [2.4.0](https://github.com/AdmiralDS/react-ui/compare/v2.3.0...v2.4.0) (2022-09-29)

### Features

- **SuggestInput:** add storybook example with filtering results ([5d5c643](https://github.com/AdmiralDS/react-ui/commit/5d5c643f561505ae4c84d258b895605cf1f38d1d))
- **SuggestInput:** add storybook example with no matches ([2d3cf54](https://github.com/AdmiralDS/react-ui/commit/2d3cf543f56a61c7271d656a7edbb8d4a4916a44))
- **Toast:** add return id to addToast method, add removeById method ([0c17ede](https://github.com/AdmiralDS/react-ui/commit/0c17ede86289469ab9852d98efeeb6f52debb3b4))

### Bug Fixes

- **Breadcrumbs:** fix bug with items update and incorrect menu ([cac4305](https://github.com/AdmiralDS/react-ui/commit/cac43055d425b333287eae5f8aac02a8f09b0da6))
- **Table:** fix column.title interface ([eb70d79](https://github.com/AdmiralDS/react-ui/commit/eb70d7997caa8c1a78b7a6005c9cf295ef168ae6))
- **Toast:** fix default width ([ecdf664](https://github.com/AdmiralDS/react-ui/commit/ecdf66445cf8958240b2d504efb4f07e106a466d))
- **Tree:** leave line selected after toggle expand and checkbox ([e383421](https://github.com/AdmiralDS/react-ui/commit/e3834213612e308b2459c1432500c903d6fc5ca2))
- **Tree:** set cursor to default when TreeNode is disabled ([4caad24](https://github.com/AdmiralDS/react-ui/commit/4caad241e2149f191aa06a7c437391069bb262a9))

## [2.3.0](https://github.com/AdmiralDS/react-ui/compare/v2.2.2...v2.3.0) (2022-09-23)

### Features

- **DateInput:** use DropdownContainer instead of deprecated Dropdown ([e9da26d](https://github.com/AdmiralDS/react-ui/commit/e9da26da202d0837c1879341de31e03bd360b8e8))
- **Menu:** add renderTopPanel and renderBottomPanel props ([e6352e7](https://github.com/AdmiralDS/react-ui/commit/e6352e7d02a690d19714141e8554ef5f12f1a92e))
- **NumberInput, SliderInput, SliderRange:** disable opportunity to enter minus char if minValue >= 0 ([4474f43](https://github.com/AdmiralDS/react-ui/commit/4474f4378aa3033c254f1f3734f8abdb400f129f))
- **SuggestInput:** add highlightFormat prop ([6ce4c63](https://github.com/AdmiralDS/react-ui/commit/6ce4c63259318032df914a3b6a5c222588e5792c))
- **SuggestInput:** use Menu instead of deprecated DropDown ([346820f](https://github.com/AdmiralDS/react-ui/commit/346820fbdf6ad5fff400aaea8f4f51d337bb330a))
- **Table:** add prop disableResize for column ([d3a741d](https://github.com/AdmiralDS/react-ui/commit/d3a741d10fd2407a2178df0777e4f926c49da306))
- **Table:** use DropdownContainer instead of deprecated DropDown in Filter ([3fcd4f4](https://github.com/AdmiralDS/react-ui/commit/3fcd4f4012e79f0bd1906754cc16b8e1e2bde9fc))
- **TimeInput:** use Menu instead of deprecated DropDown ([22e7783](https://github.com/AdmiralDS/react-ui/commit/22e778378d9982d9442a83355dbdf0a740499a95))

### Bug Fixes

- **Hint:** add utils to position hint according to page scroll ([08dc1f1](https://github.com/AdmiralDS/react-ui/commit/08dc1f1fde7e768b7879b183bedfb3d6e2e51cf5))
- **SuggestInput:** MessagePanel styles ([e50c7b5](https://github.com/AdmiralDS/react-ui/commit/e50c7b5a3901af4c9ebc2e9df9c7331e62eae86d))
- **Table:** disable header checkbox when rowList is empty ([efd9cbb](https://github.com/AdmiralDS/react-ui/commit/efd9cbbf8192300145901643fe1c2b1b398269fc))
- **Table:** fix action and overflowMenu position on horizontal scroll ([1637dc7](https://github.com/AdmiralDS/react-ui/commit/1637dc76063afd10243f07bdf5875e61a67c471e))
- **Table:** fix bug with columnList and resize ([90ac571](https://github.com/AdmiralDS/react-ui/commit/90ac5714e4e89093fdb1e1782cef16985d935045))
- **Table:** fix bug with row action, row overflowMenu and scroll ([eb74ab6](https://github.com/AdmiralDS/react-ui/commit/eb74ab628fd7a3932e398dab9babd6fd6900c414))
- **Table:** fix bug with virtual scroll and small number of rows ([3b99f57](https://github.com/AdmiralDS/react-ui/commit/3b99f57c2aae6bc201f73b9aabd8c6b37e0149cb))
- **Table:** fix problem with checkboxes and columns widths ([cc2b5e4](https://github.com/AdmiralDS/react-ui/commit/cc2b5e4262dc56cb3c1c07a98204fb582fa55591))
- **TextInput:** fix icon padding ([238a177](https://github.com/AdmiralDS/react-ui/commit/238a177b9bd3b4e7c64d5d20557da935d77ecbdf))

### [2.2.2](https://github.com/AdmiralDS/react-ui/compare/v2.2.1...v2.2.2) (2022-09-15)

### Bug Fixes

- **InputEx:** wrong typing cause storybook error ([686d63a](https://github.com/AdmiralDS/react-ui/commit/686d63ae650093906a477149a25993fa636824db))

### [2.2.1](https://github.com/AdmiralDS/react-ui/compare/v2.2.0...v2.2.1) (2022-09-15)

### Bug Fixes

- **Breadcrumbs:** fix bug with hidden menu breadcrumbs and router link ([19789da](https://github.com/AdmiralDS/react-ui/commit/19789dafc6d51cf601d7614c48b6c199a603b4f7))
- readonly and disabled component behavior ([64e33f3](https://github.com/AdmiralDS/react-ui/commit/64e33f3be0d7ac2a66ef9140d384e23f30a4899e))
- **Table:** fix horizontal scroll when emptyMessage displays ([ff266e3](https://github.com/AdmiralDS/react-ui/commit/ff266e344dce251a8c6e0fb69f8c844676826787))

## [2.2.0](https://github.com/AdmiralDS/react-ui/compare/v2.1.0...v2.2.0) (2022-09-12)

### Features

- **Table:** add forwardRef for RowAction ([2c45788](https://github.com/AdmiralDS/react-ui/commit/2c457883961efe0fdfd056497fafeac4dd8a0dca))
- **TimeInput:** add uncontrolled mode ([577b009](https://github.com/AdmiralDS/react-ui/commit/577b009e460fb8badd25588a583df0b436914542))

### Bug Fixes

- **AvatarGroup:** set className to wrapper ([531f977](https://github.com/AdmiralDS/react-ui/commit/531f9775c763061f0494b71a877cfa2d3d682a40))
- **Badge:** add ref passing ([dc0c860](https://github.com/AdmiralDS/react-ui/commit/dc0c8607dbe332b704820c8274d28e01a07b4731))
- **DateInput:** change default input handler ([8136839](https://github.com/AdmiralDS/react-ui/commit/8136839a7505ac071501ed538b25718d67b2bd7b))
- **GroupActionsPane:** add property for disable table settings buttons ([b04ef8f](https://github.com/AdmiralDS/react-ui/commit/b04ef8f2f90b413b6011850373309e7460afcb85))
- **InputEx:** fix close option on select, fix focus stealing on open click ([d2897a4](https://github.com/AdmiralDS/react-ui/commit/d2897a475e92b5fae097a7d49cc76104a1b92ab4))
- **InputEx:** fix suffix option highlight ([ec09d39](https://github.com/AdmiralDS/react-ui/commit/ec09d392caa750e89ac4c51f480e12a7c56463ab))
- **InputEx:** text wrap on resize ([dca4127](https://github.com/AdmiralDS/react-ui/commit/dca4127711f765d4e71160dd80c2dcf29ff0e95e))
- **MultiButton:** set className to wrapper ([3345bf3](https://github.com/AdmiralDS/react-ui/commit/3345bf32e07678bbc219b069539c8a33f0734a41))
- **SliderInputField, SliderRangeField:** fix problem with field overflow ([88857d7](https://github.com/AdmiralDS/react-ui/commit/88857d7bfe7bc17bcfa6d1167c891ddf2dbab308))
- **Table:** update column percent width on table resize ([2045712](https://github.com/AdmiralDS/react-ui/commit/2045712393301d4f1b21888bb54eec7029292cd7))
- **TimeInput:** fix problem with invalid numbers enter ([3d268aa](https://github.com/AdmiralDS/react-ui/commit/3d268aa5179ab2d8df6ad0817b388992b259e522))
- **Tree:** add TreeNode to export ([be3101e](https://github.com/AdmiralDS/react-ui/commit/be3101ed1ea6cec38fd3112a5bee668caef81409))

## [2.1.0](https://github.com/AdmiralDS/react-ui/compare/v2.0.0...v2.1.0) (2022-08-31)

### Features

- **EditMode:** add dimension XXL ([e5c390c](https://github.com/AdmiralDS/react-ui/commit/e5c390c1f5486f5ec3387aff29765cc5ca385734))
- **Stepper:** add mobile prop, make step width adaptive ([ae32953](https://github.com/AdmiralDS/react-ui/commit/ae32953375cd53bd58f1175975f93fcdb1b0f97f))
- **Table:** add row group ([5595afe](https://github.com/AdmiralDS/react-ui/commit/5595afe147eedf82233b09a5e64c61e750e85bca))
- **Table:** add Tooltip example for icons ([e67765e](https://github.com/AdmiralDS/react-ui/commit/e67765efa0da4dd48727f234698cceef7a649c13))
- **Table:** add Tooltip example for icons ([57ea7c8](https://github.com/AdmiralDS/react-ui/commit/57ea7c8d79d690c98ed9aacc0593ec4533b00501))
- **Table:** add TooltipHoc example for icons ([a86f248](https://github.com/AdmiralDS/react-ui/commit/a86f2483298ea2da4faa5ef98d146d50f78d5dac))
- **Theme:** add localization params to theme, define ru, en, en-US locales, move all text constants from components to theme locale ([5284ab5](https://github.com/AdmiralDS/react-ui/commit/5284ab50421dcb6c2d30f109ce7d956f1b1b1dc8))
- **Typography:** add new text style 'Caption/Caption 2' ([cae23e2](https://github.com/AdmiralDS/react-ui/commit/cae23e262960c301e3a4a87334ff7e1215712bad))

### Bug Fixes

- [#348](https://github.com/AdmiralDS/react-ui/issues/348) [#346](https://github.com/AdmiralDS/react-ui/issues/346) ([0449bc5](https://github.com/AdmiralDS/react-ui/commit/0449bc56b10135d41ea70c3ed5a60ce55ba4be08))
- **OverflowMenu:** fix component size ([c0ba3cb](https://github.com/AdmiralDS/react-ui/commit/c0ba3cb701270e509460366ada000fbf6f7155d2))
- **PaginationOne:** fix setting className to container ([0ad2bf8](https://github.com/AdmiralDS/react-ui/commit/0ad2bf8dbc9b510c9aa205936869231eea4c0ad7))
- **Storybook:** update icon components ([d05bd10](https://github.com/AdmiralDS/react-ui/commit/d05bd10b998d15e8a76d107864c876ac0b3c2bef))

## [2.0.0](https://github.com/AdmiralDS/react-ui/compare/v1.10.0...v2.0.0) (2022-08-23)

### ⚠ BREAKING CHANGES

- **TooltipHoc:** refactor Tooltip, change api

### Features

- **FormFields, Components with DropMenu:** pass data-attributes to field container and dropdown container ([7adb55b](https://github.com/AdmiralDS/react-ui/commit/7adb55bf1d92bdbf6a7a52969048a3a41a60c826))
- **Select, Input:** add loading indicator to Select & Input, remove property loadingMessage ([6244198](https://github.com/AdmiralDS/react-ui/commit/624419840535aaa7da97bf18bf4f42b8eec85c8b))
- **themes:** update color tokens ([d444635](https://github.com/AdmiralDS/react-ui/commit/d4446351bf7c34ac2db2114db8fda0474ebaaa1e))
- **TooltipHoc:** add component TooltipHoc ([9acb570](https://github.com/AdmiralDS/react-ui/commit/9acb5701290474f8a3247749304a6aed48931db4))

### Bug Fixes

- **Chips:** fix non clickable closeIcon ([5f14da4](https://github.com/AdmiralDS/react-ui/commit/5f14da43f6f4170f70e82ed77a9460e6e201bd20))
- **Field:** flex layout must not overflow ([49c276e](https://github.com/AdmiralDS/react-ui/commit/49c276e37b74e3079e2224103911ff1e8dc4c0ed))
- **PhoneInputField:** add click on flag icon to open flag list container ([7f7c9ee](https://github.com/AdmiralDS/react-ui/commit/7f7c9ee7500be18363f60104e9c39694dfae6068))

## [1.10.0](https://github.com/AdmiralDS/react-ui/compare/v1.9.0...v1.10.0) (2022-08-17)

### Features

- **ContentSwitcher:** add OnlyIcon example ([5c729db](https://github.com/AdmiralDS/react-ui/commit/5c729db6927680fa0eca776955c8b5b52a05bad4))
- **Menu, DropMenu:** add example with Checkboxes and Radiobuttons ([7ab46b9](https://github.com/AdmiralDS/react-ui/commit/7ab46b9195b58b844c57441f712753b3cc29d97e))
- **Menu, DropMenu:** add example with Tooltip ([7873739](https://github.com/AdmiralDS/react-ui/commit/7873739e9c327d176b2782ca7c3c8886299d4c2c))
- **TextArea:** update hover and focus styles with success/error status ([de2337a](https://github.com/AdmiralDS/react-ui/commit/de2337ad409e9a151b78cc56835959158fc6f009))
- **TextInput:** update hover and focus styles with success/error status ([48c82db](https://github.com/AdmiralDS/react-ui/commit/48c82db58ad663ceb785f7c40d750fd051314781))

### Bug Fixes

- **Checkbox:** hide hover in disabled state ([e9b37f8](https://github.com/AdmiralDS/react-ui/commit/e9b37f896da3cd1dc0989056928836fed56f1053))
- **Checkbox:** hide hover in disabled state ([eb0e325](https://github.com/AdmiralDS/react-ui/commit/eb0e32566d6d869481fb23e3087bcaf5a4191a49))
- **Chips:** fix background color in outlined appearance ([875369b](https://github.com/AdmiralDS/react-ui/commit/875369bfeeb9df2939bc77d51abb8bb3fcfb307d))
- **Chips:** fix closeIcon color ([d3ce00d](https://github.com/AdmiralDS/react-ui/commit/d3ce00decdb2dc981973f247699d9e08b5c47b37))
- **Chips:** fix style ([80de973](https://github.com/AdmiralDS/react-ui/commit/80de973f42ce172f6888f07075e51d35b52de882))
- **EditMode:** fix read only state ([0bbeb21](https://github.com/AdmiralDS/react-ui/commit/0bbeb21b034742e36dadc91238c35774487b92e1))
- **NumberInput:** fix readOnly background color ([66f72af](https://github.com/AdmiralDS/react-ui/commit/66f72afd2828028ef49ee7264b484b7d16e35603))
- **PhoneNumberInput:** fix Chevron transform in disabled state ([56182a4](https://github.com/AdmiralDS/react-ui/commit/56182a440abf485ccb29ab62862209c4b5b8e356))
- **SuggestInput:** add status prop ([ab49fef](https://github.com/AdmiralDS/react-ui/commit/ab49fefafb3c205455b8f7f0d09a45682a39b6ab))
- **Tag:** remove Tooltip Wrapper from Tag and fix some styles so that Tag can be correctly embeded in other components ([a4de402](https://github.com/AdmiralDS/react-ui/commit/a4de402f9393fdbb79774b2332ec0bd61d7d2302))
- **TextArea:** fix changing colors after switching theme ([efe3a52](https://github.com/AdmiralDS/react-ui/commit/efe3a524b169a4ea2956465fbbc93ea071b8fcfb))
- **TextArea:** fix text color in disabled state ([c5a6a8a](https://github.com/AdmiralDS/react-ui/commit/c5a6a8acfcfd96740249a524a83eccd41bb4f216))
- **TextInput:** fix changing colors after switching theme ([7da4e06](https://github.com/AdmiralDS/react-ui/commit/7da4e0647372ca61e4445a458f7d8ce244964c77))

## [1.9.0](https://github.com/AdmiralDS/react-ui/compare/v1.8.0...v1.9.0) (2022-08-09)

### Features

- **FieldSet:** add example with required mark for Checkboxes ([cb3a63f](https://github.com/AdmiralDS/react-ui/commit/cb3a63f934240e0f7078d5b8cd4766bb8955aba9))
- **MenuButton:** add example with icons ([c900e70](https://github.com/AdmiralDS/react-ui/commit/c900e7079870ed2ed0df2a9701679127afd777b5))
- **Table:** add multi level sort ([4b622f4](https://github.com/AdmiralDS/react-ui/commit/4b622f4a2e53a9b0df9af9b8ed8e630bb76206eb))
- **TagMenu:** add TagMenu component ([5c11698](https://github.com/AdmiralDS/react-ui/commit/5c116984f1218a9fad73db535ab0b27c27508eed))
- **themes:** add new color Special/Dark Static Neutral 70 ([ab64a2d](https://github.com/AdmiralDS/react-ui/commit/ab64a2d0ea51d97477ae1d9df5d818ec9b0abb89))
- **themes:** change Modal opacity level to 60% in Dark theme ([7d432ac](https://github.com/AdmiralDS/react-ui/commit/7d432ac6b1ef4baeed293727b1def2cb19beb904))

### Bug Fixes

- **Badge:** display badge with value 0 ([9603b77](https://github.com/AdmiralDS/react-ui/commit/9603b77157d999db349f33bbdb65a75ae5f3b01b))
- **Checkbox:** add stories examples ([c762835](https://github.com/AdmiralDS/react-ui/commit/c762835d5a8ae6683a6e7d36bd9047352553b3e9))
- **Field:** label text-align ([4130b77](https://github.com/AdmiralDS/react-ui/commit/4130b7791692c429b142b914b32e120bfc2436f0))
- **FieldSet:** place '\*' after legend when required ([5a69ca4](https://github.com/AdmiralDS/react-ui/commit/5a69ca41be39bd1d998eb65fb9ef455aacc208a9))
- **FieldSet:** set legend font color with error status ([19f788f](https://github.com/AdmiralDS/react-ui/commit/19f788f7bc98def6ed662fbaacb64323cd05a30d))
- **NumberInput:** fix bug with input size and placeholder ([2820458](https://github.com/AdmiralDS/react-ui/commit/2820458fcc9bb336a5be00a31b81b34f433ee279))
- **Select:** enable pointer events on disabled control ([b61b3a2](https://github.com/AdmiralDS/react-ui/commit/b61b3a22a9162b32c84b00caff217187d9a016bd))
- **Table:** add tooltip for column title if text is overflow ([d0fa896](https://github.com/AdmiralDS/react-ui/commit/d0fa896ed7cdc687411d6c9a03ec521220f591f8))

## [1.8.0](https://github.com/AdmiralDS/react-ui/compare/v1.7.0...v1.8.0) (2022-07-28)

### Features

- **Chips:** add badge ([f62619f](https://github.com/AdmiralDS/react-ui/commit/f62619f28a0260f96c714ca368979bc0d58b4750))
- **EditMode:** remove displayStatusIcon prop ([571d8e3](https://github.com/AdmiralDS/react-ui/commit/571d8e3b385089b4d8f8a37f1f341fb14e6e5459))
- **Hint:** add props visible and onVisibilityChange to use component as controlled ([f112f15](https://github.com/AdmiralDS/react-ui/commit/f112f15622c77ac7c7fb77ba8b63fcfbad407e9b))
- **NumberInput:** refactor icons and remove displayClearIcon prop ([13addbe](https://github.com/AdmiralDS/react-ui/commit/13addbe75d23cf13e18bd64ac1ea2d9c9192afbe))
- **PaginationOne:** use DropMenu instead of DropDown ([6d582ee](https://github.com/AdmiralDS/react-ui/commit/6d582ee6f3526e3f283f82797860450f23be182e))
- **PhoneNumberInput:** remove displayStatusIcon prop, fix readOnly style ([228aa6a](https://github.com/AdmiralDS/react-ui/commit/228aa6a6a724a59576c1be53ea4ba70269fd8e4d))
- **Select:** remove displayStatusIcon prop ([5ee25ba](https://github.com/AdmiralDS/react-ui/commit/5ee25ba696b20f8e08cc496e66f2b8c3963e7d06))
- **SliderRange:** add readOnly prop to component, fix readOnly state in input components ([af8fb22](https://github.com/AdmiralDS/react-ui/commit/af8fb224cd28fe54ef2033fc7c6575dd106f28e0))
- **SuggestInput, TextArea, TimeInput:** remove displayStatusIcon prop, refactor icons with InputIconButton component ([c95e40b](https://github.com/AdmiralDS/react-ui/commit/c95e40b68d034fa40bf276be828f5b466257696b))
- **TextInput:** refactor icons and remove displayStatusIcon prop ([127b7cc](https://github.com/AdmiralDS/react-ui/commit/127b7cc5fac3ad2652374afa4aeae081e2e83a24))
- **Toggle:** set new color in active disabled state ([850cf27](https://github.com/AdmiralDS/react-ui/commit/850cf2790c6a1b0853e191da9745f494c05f54a6))

### Bug Fixes

- **PaginationOne:** fix button text color ([95cb30a](https://github.com/AdmiralDS/react-ui/commit/95cb30a5f6f6cb058d4dbe7a47e4cbffadc62680))

## [1.7.0](https://github.com/AdmiralDS/react-ui/compare/v1.6.0...v1.7.0) (2022-07-19)

### Features

- **Table:** add emptyMessage prop to show that there are no matches after filtration ([9664b5f](https://github.com/AdmiralDS/react-ui/commit/9664b5f84a75e7ad013e04172741c368457f918e))
- **Table:** add id prop in onRowSelectionChange callback ([d847f47](https://github.com/AdmiralDS/react-ui/commit/d847f475743e11c73b923d172e04a3a5dd593ffc))
- **Table:** add single row action as alternative to overflowMenu ([ecd90e9](https://github.com/AdmiralDS/react-ui/commit/ecd90e95d3dd5e582e305a7655764070dece6992))

### Bug Fixes

- **GroupActionPane:** change usage api ([fa24a2b](https://github.com/AdmiralDS/react-ui/commit/fa24a2b4fbb87480af3b5bcb64b4b0384ef7472e))
- **OverflowMenu:** fix focus style and fix OverflowMenu dimension in Breadcrumbs component ([ae4ceaa](https://github.com/AdmiralDS/react-ui/commit/ae4ceaaeeeca11b8b634c8403f163a0650bd83cb))
- **Select:** adjust height and label font ([5c2d75b](https://github.com/AdmiralDS/react-ui/commit/5c2d75b4d4cf1c949bfd99f1be02998c646e51d1))

## [1.6.0](https://github.com/AdmiralDS/react-ui/compare/v1.5.2...v1.6.0) (2022-07-12)

### Features

- **Calendar:** calendar has fixed height ([41a3d43](https://github.com/AdmiralDS/react-ui/commit/41a3d43dcfdbba902fd6cffad5ba537ae197b627))
- **DropdownProvider:** add DropdownProvider component to handle with multiple dropdowns clickoutside ([df69f80](https://github.com/AdmiralDS/react-ui/commit/df69f80f3ac8aeb1c2a322d139ff53ee45ffb08d))

### Bug Fixes

- **Select:** add props for custom messages on loading and empty ([4b27139](https://github.com/AdmiralDS/react-ui/commit/4b27139094420038c37a2e7df766148cd2f22e66))
- **Select:** when select component is out of visible aria drop option container must settle with its position ([93d663e](https://github.com/AdmiralDS/react-ui/commit/93d663e09a99ad147fd28565815b9a2066046022))
- **Table:** reduce some unneccesary data attributes ([b3c9245](https://github.com/AdmiralDS/react-ui/commit/b3c9245eb4765594673980e5a680d6e80200d421))

### [1.5.2](https://github.com/AdmiralDS/react-ui/compare/v1.5.1...v1.5.2) (2022-07-06)

### Bug Fixes

- **DateField:** id must be populated on label when set on component ([83d4153](https://github.com/AdmiralDS/react-ui/commit/83d41537195d106880bd94baf84c331e1f8a6fdd))
- **NumberInput:** add recalculation on fonts loading ([eb871e5](https://github.com/AdmiralDS/react-ui/commit/eb871e59622fb1ff8717c597c27b9ae9b0dc8052))

### [1.5.1](https://github.com/AdmiralDS/react-ui/compare/v1.5.0...v1.5.1) (2022-07-04)

### Bug Fixes

- chrome 84, inset css rule is not supported ([7d7a21f](https://github.com/AdmiralDS/react-ui/commit/7d7a21fac63213a4250fd23cfd3abd6d753d56cd))
- **TabMenu:** fix active button tab color ([8e4617b](https://github.com/AdmiralDS/react-ui/commit/8e4617bebcbcb4fe242baae4ec777e7275efbc8b))

## [1.5.0](https://github.com/AdmiralDS/react-ui/compare/v1.4.2...v1.5.0) (2022-06-29)

### Features

- **DropMenu:** add width prop ([6a3571f](https://github.com/AdmiralDS/react-ui/commit/6a3571fb4244845237d4f96ee95fcf531049fc1d))
- **MultiButton:** use new DropMenu instead of Dropdown ([94e9784](https://github.com/AdmiralDS/react-ui/commit/94e9784d93ae676f3ef20093347847bc46277b4f))
- **SliderInput:** add opportunity to customize labels for slider marks ([9c726ee](https://github.com/AdmiralDS/react-ui/commit/9c726eeb1c619b18d5ae9d1390535b5a03eae67a))

### Bug Fixes

- **Breadcrumbs:** fix bug with dimension ([e19e12b](https://github.com/AdmiralDS/react-ui/commit/e19e12b630ba67751727b4a7f5dc645487dc26f3))
- **MenuButton:** add menuWidth and menuMaxHeight ([34646db](https://github.com/AdmiralDS/react-ui/commit/34646dbe1773c0cddf0946a482f6274006917ec6))
- **NumberInput:** fix bug with copied value and precision 0 ([1c78d10](https://github.com/AdmiralDS/react-ui/commit/1c78d1034aca6268eaf3c51297f2062b4a344d70))

### [1.4.2](https://github.com/AdmiralDS/react-ui/compare/v1.4.1...v1.4.2) (2022-06-28)

### [1.4.1](https://github.com/AdmiralDS/react-ui/compare/v1.4.0...v1.4.1) (2022-06-28)

### Bug Fixes

- **FileUploader:** fix [#189](https://github.com/AdmiralDS/react-ui/issues/189) ([e9789a8](https://github.com/AdmiralDS/react-ui/commit/e9789a8a53aa7f7d8b1189dc01caf022058f8121))

## [1.4.0](https://github.com/AdmiralDS/react-ui/compare/v1.3.1...v1.4.0) (2022-06-27)

### Features

- **Avatar:** add opportunity to customize Avatar icon color and status color, add opportunity to use different avatars in AvatarGroup ([c9ebfb5](https://github.com/AdmiralDS/react-ui/commit/c9ebfb516ed3615f9e6df6e01c324581dcdc2a71))
- **Breadcrumbs:** remove ReactDOM.render method, refactor component ([d3512ec](https://github.com/AdmiralDS/react-ui/commit/d3512ecd70ffdcf8ce2ebe7e4f6415c6434f99a4))
- **Table:** add opportunity to disable row checkbox ([d91e447](https://github.com/AdmiralDS/react-ui/commit/d91e4476e958dd0f8f9dfca9f3c91d3f37ee072a))

### Bug Fixes

- **OverflowMenu:** fix active style ([d4d24aa](https://github.com/AdmiralDS/react-ui/commit/d4d24aa4545d31d9d70916e47ad675cd2da07e73))

### [1.3.1](https://github.com/AdmiralDS/react-ui/compare/v1.3.0...v1.3.1) (2022-06-20)

### Bug Fixes

- **Button:** should rerender only when props changed ([9bddc96](https://github.com/AdmiralDS/react-ui/commit/9bddc9662d4adccd7d5d1f12ca8611343a4ce036))

## [1.3.0](https://github.com/AdmiralDS/react-ui/compare/v1.2.1...v1.3.0) (2022-06-16)

### Features

- **Select:** add styles for multiple select in readOnly state ([de37f71](https://github.com/AdmiralDS/react-ui/commit/de37f71adda899fdea8b332375351189cad46376))

### Bug Fixes

- **Select:** fix drop button position for custom content in select ([92f1e47](https://github.com/AdmiralDS/react-ui/commit/92f1e47d5827be4c6f44fe09d9441a937e86a1e6))
- **SuggestInput:** fix event for handling option selection ([36a6489](https://github.com/AdmiralDS/react-ui/commit/36a64897e507e984165ac5fe9c5188708ae59e21))

### [1.2.1](https://github.com/AdmiralDS/react-ui/compare/v1.2.0...v1.2.1) (2022-06-14)

### Bug Fixes

- **MenuButton:** fix tests ([a583fd5](https://github.com/AdmiralDS/react-ui/commit/a583fd53093652f113cbc20c5d42292a34af4ab4))

## [1.2.0](https://github.com/AdmiralDS/react-ui/compare/v1.1.0...v1.2.0) (2022-06-10)

### Features

- **Breadcrumbs:** update use of OverflowMenu ([e844c3f](https://github.com/AdmiralDS/react-ui/commit/e844c3fe3978edf311fa56f0ef81b031d2e2d0ba))
- **Modal:** add opportunity to hide CloseIcon ([fb6ef56](https://github.com/AdmiralDS/react-ui/commit/fb6ef56d70040cc418d0de3dead0c8177a446106))
- **Select:** add styles for readOnly state ([d2098ac](https://github.com/AdmiralDS/react-ui/commit/d2098ac29779685859f7a0e006d850c97116f5ee))
- **Table:** update use of OverflowMenu ([2d79ec1](https://github.com/AdmiralDS/react-ui/commit/2d79ec145c1bb58570a029a9f552a05adbaabcd2))
- **TabMenu:** use OverflowMenu component ([f658620](https://github.com/AdmiralDS/react-ui/commit/f658620339ef87221d778e5a9f9249ac03208342))
- **TextButtonMenu:** add TextButtonMenu ([1437a6e](https://github.com/AdmiralDS/react-ui/commit/1437a6e7e37eb0157a962d6a14a59ce6a5361980))

### Bug Fixes

- **DateInput:** add icon prop for alternative icon ([e95f665](https://github.com/AdmiralDS/react-ui/commit/e95f6658c6ccaaac621523400e017a0e77cfca75))
- **IconButton:** fix icon size ([27553e3](https://github.com/AdmiralDS/react-ui/commit/27553e33e48aa18ba8e0f776da1e514c2fdab5a3))
- **Modal:** remove overlay blur ([96e5162](https://github.com/AdmiralDS/react-ui/commit/96e51624477ea67f2538fbfcbbddefa858e61418))
- **OverflowMenu:** fix DropdownContainer position ([c903f3e](https://github.com/AdmiralDS/react-ui/commit/c903f3e2e8c28ad5bd0dc64801c7f4664e4b705e))
- **OverflowMenu:** use new DropDown ([55a86cd](https://github.com/AdmiralDS/react-ui/commit/55a86cd0dae516ab3a4f3cc664138447c51ee7b9))
- **Select:** input aria should be small when not in focus ([18982ad](https://github.com/AdmiralDS/react-ui/commit/18982ad384c5d5de2cc0d2fe6abaafe5569da656))
- **Select:** fix bug with placeholder color ([48a5b5d](https://github.com/AdmiralDS/react-ui/commit/48a5b5d4275c826c1d3c770cc603d38446b03ba7))
- **Select:** fix problem with label click and dropdown opening ([3e3be1b](https://github.com/AdmiralDS/react-ui/commit/3e3be1b01f8c5aa95be6fbef47b8f6ff18c0d869))
- **Select:** in readonly mode should not display drop icon ([83f7f4e](https://github.com/AdmiralDS/react-ui/commit/83f7f4edb7e1be2f76661f0201f8fd8afeaa8ce8))
- **SuggestInput:** fix timeout blur effect ([6d09233](https://github.com/AdmiralDS/react-ui/commit/6d092339655be4f2d5194f2cc684aa625a9bf04a))
- **SuggestInput:** in readonly mode should not display icon ([58af65f](https://github.com/AdmiralDS/react-ui/commit/58af65f1394a0315849c0d822e564367095e75fc))
- **TabMenu:** copy fix underline from Admiral 2.0 ([638480d](https://github.com/AdmiralDS/react-ui/commit/638480dbc43a5fe94bc75748a820954600631808))
- **TabMenu:** fix underline in mobile view ([52ffc72](https://github.com/AdmiralDS/react-ui/commit/52ffc722cc838dc0e3d827d807b2a991aa1dbc7b))
- **TextButton:** fix disabled and loading pointer events ([0349b03](https://github.com/AdmiralDS/react-ui/commit/0349b034d55537c0bf689cb7a861aac43a78a19b))

## [1.1.0](https://github.com/AdmiralDS/react-ui/compare/v1.0.0...v1.1.0) (2022-05-20)

### Features

- **Table:** replace column defaultSort with controlled sort parameter ([d6c2228](https://github.com/AdmiralDS/react-ui/commit/d6c2228e090b0356463f47e20fe7e4a968509c59))

### Bug Fixes

- **NumberInput:** fix bug with onBlur and precision 0 ([e87e489](https://github.com/AdmiralDS/react-ui/commit/e87e489317cb4e17967326b6614e09bbb769c313))
- **Table:** fix problem with hook in renderHeaderCell ([707b553](https://github.com/AdmiralDS/react-ui/commit/707b553ad54ece30c63616016a71a546b472b930))

### [1.0.0](https://github.com/AdmiralDS/react-ui/compare/v0.9.1...v1.0.0) (2022-05-18)

### Features

- **Menu:** add new components - Menu & DropDownContainer ([726aed0](https://github.com/AdmiralDS/react-ui/commit/726aed0f292af1029ed5d82fdd912c0910a03596))
- **Menu:** add new components - Menu & DropDownContainer ([739d8db](https://github.com/AdmiralDS/react-ui/commit/739d8dbfe01c938b5b43e23020d00cc5afbf63de))
- **Table:** add opportunity to use extraText in header ([22521bc](https://github.com/AdmiralDS/react-ui/commit/22521bce0324ab07b24056e556d83904b3c0ad99))
- **Table:** add opportunity to use OverflowMenu in table row ([cb1756c](https://github.com/AdmiralDS/react-ui/commit/cb1756c89c5b8125d3c54a215cb98c29b7db1d4e))
- **Table:** add virtual scroll for fixed row height ([638402f](https://github.com/AdmiralDS/react-ui/commit/638402f156d151df380adf5b3e0e6af859548501))

### Bug Fixes

- **Checkbox:** add disabled background color ([5035b14](https://github.com/AdmiralDS/react-ui/commit/5035b149df5e5dddae5944898f9c959fcdafe121))
- **FileUploader:** backport select file logic ([0ac8aef](https://github.com/AdmiralDS/react-ui/commit/0ac8aef1166634234678f86d20beae52f04e2295))
- **MenuButton:** add vertical paddings to Dropdown ([dd12039](https://github.com/AdmiralDS/react-ui/commit/dd120392d77f64cbad107fc7cbdc7c41ed72db56))
- **NumberInput:** fix formatting logic on onBlur or slider onChange ([ded4713](https://github.com/AdmiralDS/react-ui/commit/ded47135dfd6427cc5ffebc102dcde3c33198e76))
- **OverflowMenu:** fix hover ([cbe45a2](https://github.com/AdmiralDS/react-ui/commit/cbe45a21f482d80fede6ca5d03c49e01b4d25966))
- **OverflowMenu:** fix opened Button appearance ([5c94c14](https://github.com/AdmiralDS/react-ui/commit/5c94c143ecc8ef88e5184b42cd64f0a40716bcb2))
- **PhoneNumberInput:** fix delete "+" ([917ba0a](https://github.com/AdmiralDS/react-ui/commit/917ba0aebff7745d9a93d678e6f94d3378d8b4b5))
- **RadioButton:** add disabled background color ([d8d9c55](https://github.com/AdmiralDS/react-ui/commit/d8d9c5579adc2d1d934a1d21135cb727cfaf8371))
- **Select:** fix bug with Safari and several select components ([f5e4f24](https://github.com/AdmiralDS/react-ui/commit/f5e4f24e3440e60d309f7eb297b4cb98e23088e1))
- **Select:** fix problem with dropdown toggle behaviour ([2c3ac78](https://github.com/AdmiralDS/react-ui/commit/2c3ac78a81db00e234fe1f81765e5b375a2087c4))
- **SelectTree:** fix checkbox behaviour ([ff0d514](https://github.com/AdmiralDS/react-ui/commit/ff0d5143eab4ee2e750bf9156fa297a97330feab))
- **SelectTree:** fix next level offset ([da298a8](https://github.com/AdmiralDS/react-ui/commit/da298a8f478764c685e156dc834713e9cb71ed20))
- **SelectTree:** fix vertical line paddings ([8ee640e](https://github.com/AdmiralDS/react-ui/commit/8ee640e0c6bd8bd67b1bb84f776cf5e71ea02008))
- **Slider:** fix numeric points formatting ([063864f](https://github.com/AdmiralDS/react-ui/commit/063864f1b261c370f774e7147107ed145bb161af))
- **Table:** fix bug with vertical scroll compensator ([219157b](https://github.com/AdmiralDS/react-ui/commit/219157b2f8f0e23d95f2cceae05903d6967ee48f))
- **Table:** fix problem with header background when displayRowSelectionColumn is true ([7490711](https://github.com/AdmiralDS/react-ui/commit/7490711b93361fbb16a7220356484ae57710e18b))
- **Table:** fix problem with useRef hook ([01e1d86](https://github.com/AdmiralDS/react-ui/commit/01e1d862d65cadfdf0124007c99895a5583a0d9a))
- **TabOverflowMenu:** fix hover ([a17f427](https://github.com/AdmiralDS/react-ui/commit/a17f42714e05a4a11074877dc0d73652f591a394))
- **Toggle:** fix hover style ([49c5e34](https://github.com/AdmiralDS/react-ui/commit/49c5e34cff60b5378ff39db4279dc9b0445878ee))

### [0.9.1](https://github.com/AdmiralDS/react-ui/compare/v0.0.2...v0.9.1) (2022-04-20)

### Bug Fixes

- **Avatar:** use standard Tooltip ([ac474dc](https://github.com/AdmiralDS/react-ui/commit/ac474dc76cf265b86530fa35db720eec4c64587c))
- **Chips:** use standard Tooltip ([442fdba](https://github.com/AdmiralDS/react-ui/commit/442fdba81e1619f31881756150ae75122a2f1619))
- **FileUploader:** use standard Tooltip ([e94c80d](https://github.com/AdmiralDS/react-ui/commit/e94c80d8021aa5a41e1b3e6284f6265da8e85854))
- **NumberInput:** add event argument in onChange callback ([3a300ab](https://github.com/AdmiralDS/react-ui/commit/3a300ab34d3c7823d9c39946608cc889489eea2c))
- **Stepper:** use standard Tooltip ([45711a4](https://github.com/AdmiralDS/react-ui/commit/45711a4c0e65047fa85f8aacea1b47e31f74eb05))
- **Table:** fix icon styles for expanded row ([4d80668](https://github.com/AdmiralDS/react-ui/commit/4d80668e4dc5f75169e73047b1277c8447f40f5a))
- **Table:** fix sticky columns horizontal scroll ([7d250cb](https://github.com/AdmiralDS/react-ui/commit/7d250cb99c7cd34f704db45d9f32b5833754d69e))
- **TabOverflowMenu:** use standard Tooltip ([1699edb](https://github.com/AdmiralDS/react-ui/commit/1699edb8bc4a06a3bdf64d3536d45ddf8611cd9a))
- **Tag:** use standard Tooltip ([1b35c54](https://github.com/AdmiralDS/react-ui/commit/1b35c54bfdc71e4e583f022fa2efeee4e800140a))
