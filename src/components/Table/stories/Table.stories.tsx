import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { Table } from '@admiral-ds/react-ui';

import { TablePlaygroundTemplate } from './TablePlayground.template';
import { TableColumnWidthTemplate } from './TableColumnWidth.template';
import { TableCheckboxTemplate } from './TableCheckbox.template';
import { TableStyleTemplate } from './TableStyle.template';
import { TableOrientationTemplate } from './TableOrientation.template';
import { TableSortTemplate } from './TableSort.template';
import { TableFilterTemplate } from './TableFilter.template';
import { TableMultilineTemplate } from './TableMultiline.template';
import { TableStickyTemplate } from './TableSticky.template';
import { TableRowStateTemplate } from './TableRowState.template';
import { TableZebraTemplate } from './TableZebra.template';
import { TableExpandTemplate } from './TableExpand.template';
import { TableExtraTextTemplate } from './TableExtraText.template';
import { TableOverflowMenuTemplate } from './TableOverflowMenu.template';
import { TableFixedVirtualScrollTemplate } from './TableFixedVirtualScroll.template';
import { TableDynamicVirtualScrollTemplate } from './TableDynamicVirtualScroll.template';
import { TableLoadOnScrollTemplate } from './TableLoadOnScroll.template';
import { TableGroupTemplate } from './TableGroup.template';
import { TableCustomTitleTemplate } from './TableCustomTitle.template';
import { TableRenderCellTemplate } from './TableRenderCell.template';
import { TableRenderGroupTitleTemplate } from './TableRenderGroupTitle.template';
import { TableColumnDragDropTemplate } from './TableColumnDragDrop.template';
import { TableRowDragDropTemplate } from './TableRowDragDrop.template';
import { TableBaseHtmlTemplate } from './TableBaseHtml.template';
// Imports of text sources
import TablePlaygroundRaw from './TablePlayground.template?raw';
import TableColumnWidthRaw from './TableColumnWidth.template?raw';
import TableCheckboxRaw from './TableCheckbox.template?raw';
import TableStyleRaw from './TableStyle.template?raw';
import TableOrientationRaw from './TableOrientation.template?raw';
import TableSortRaw from './TableSort.template?raw';
import TableFilterRaw from './TableFilter.template?raw';
import TableMultilineRaw from './TableMultiline.template?raw';
import TableStickyRaw from './TableSticky.template?raw';
import TableRowStateRaw from './TableRowState.template?raw';
import TableZebraRaw from './TableZebra.template?raw';
import TableExpandRaw from './TableExpand.template?raw';
import TableExtraTextRaw from './TableExtraText.template?raw';
import TableOverflowMenuRaw from './TableOverflowMenu.template?raw';
import TableFixedVirtualScrollRaw from './TableFixedVirtualScroll.template?raw';
import TableDynamicVirtualScrollRaw from './TableDynamicVirtualScroll.template?raw';
import TableLoadScrollRaw from './TableLoadOnScroll.template?raw';
import TableGroupRaw from './TableGroup.template?raw';
import TableCustomTitleRaw from './TableCustomTitle.template?raw';
import TableRenderCellRaw from './TableRenderCell.template?raw';
import TableRenderGroupTitleRaw from './TableRenderGroupTitle.template?raw';
import TableColumnDragDropRaw from './TableColumnDragDrop.template?raw';
import TableRowDragDropRaw from './TableRowDragDrop.template?raw';
import TableBaseHtmlRaw from './TableBaseHtml.template?raw';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Таблицы представляют собой набор данных, представленных в виде строк и колонок. Состоят из двух основных компонентов
    - шапки таблицы и строки данных.
    <Separator />В дизайн-системе таблицы представлены в четырех размерах с высотой строк в S 32, M 40, L 48, XL 56 px.
    Выбор размера осуществляется исходя из плотности разрабатываемого интерфейса и личных предпочтений дизайнера.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Data Table/Table',
  component: Table,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A90544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A90707',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A90947',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=109602%3A61149',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A91211',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A91521',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    displayRowSelectionColumn: {
      control: { type: 'boolean' },
    },
    headerCheckboxChecked: {
      control: { type: 'boolean' },
    },
    headerCheckboxIndeterminate: {
      control: { type: 'boolean' },
    },
    headerCheckboxDisabled: {
      control: { type: 'boolean' },
    },
    displayRowExpansionColumn: {
      control: { type: 'boolean' },
    },
    greyHeader: {
      control: { type: 'boolean' },
    },
    greyZebraRows: {
      control: { type: 'boolean' },
    },
    showDividerForLastColumn: {
      control: { type: 'boolean' },
    },
    spacingBetweenItems: {
      control: { type: 'text' },
    },
    headerLineClamp: {
      control: { type: 'number' },
    },
    headerExtraLineClamp: {
      control: { type: 'number' },
    },
    disableColumnResize: {
      control: { type: 'boolean' },
    },
    showLastRowUnderline: {
      control: { type: 'boolean' },
    },
    columnList: {
      control: false,
    },
    rowList: {
      control: false,
    },
    virtualScroll: {
      control: false,
    },
    locale: {
      control: false,
    },
  },
} as Meta<typeof Table>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Table> = (props) => <TablePlaygroundTemplate {...props} />;
export const Playground = {
  render: PlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: TablePlaygroundRaw,
      },
    },
  },
};
//</editor-fold>

//<editor-fold desc="Пример с шириной столбцов">
const ColumnWidthStory: StoryFn<typeof Table> = (props) => <TableColumnWidthTemplate {...props} />;
export const ColumnWidthExample = {
  render: ColumnWidthStory,
  parameters: {
    docs: {
      source: {
        code: TableColumnWidthRaw,
      },
    },
  },
  name: 'Table. Пример изменения ширины столбцов.',
};
//</editor-fold>

//<editor-fold desc="Пример с чекбоксами">
const CheckboxStory: StoryFn<typeof Table> = (props) => <TableCheckboxTemplate {...props} />;
export const CheckboxExample = {
  render: CheckboxStory,
  parameters: {
    docs: {
      source: {
        code: TableCheckboxRaw,
      },
    },
  },
  name: 'Table. Пример c чекбоксами.',
};
//</editor-fold>

//<editor-fold desc="Пример стилизации">
const StyleStory: StoryFn<typeof Table> = (props) => <TableStyleTemplate {...props} />;
export const StyleExample = {
  render: StyleStory,
  parameters: {
    docs: {
      source: {
        code: TableStyleRaw,
      },
    },
  },
  name: 'Table. Пример стилизации (classNames, data-attrs, props).',
};
//</editor-fold>

//<editor-fold desc="Пример с выравниванием контента">
const OrientationStory: StoryFn<typeof Table> = (props) => <TableOrientationTemplate {...props} />;
export const OrientationExample = {
  render: OrientationStory,
  parameters: {
    docs: {
      source: {
        code: TableOrientationRaw,
      },
    },
  },
  name: 'Table. Пример с настройкой выравнивания контента столбца.',
};
//</editor-fold>

//<editor-fold desc="Пример сортировки">
const SortStory: StoryFn<typeof Table> = (props) => <TableSortTemplate {...props} />;
export const SortExample = {
  render: SortStory,
  parameters: {
    docs: {
      source: {
        code: TableSortRaw,
      },
    },
  },
  name: 'Table. Сортировка.',
};
//</editor-fold>

//<editor-fold desc="Пример фильтрации">
const FilterStory: StoryFn<typeof Table> = (props) => <TableFilterTemplate {...props} />;
export const FilterExample = {
  render: FilterStory,
  parameters: {
    docs: {
      source: {
        code: TableFilterRaw,
      },
    },
  },
  name: 'Table. Фильтрация.',
};
//</editor-fold>

//<editor-fold desc="Пример c многострочностью заголовков">
const MultilineStory: StoryFn<typeof Table> = (props) => <TableMultilineTemplate {...props} />;
export const MultilineExample = {
  render: MultilineStory,
  parameters: {
    docs: {
      source: {
        code: TableMultilineRaw,
      },
    },
  },
  name: 'Table. Многострочность.',
};
//</editor-fold>

//<editor-fold desc="Пример c фиксированными столбцами">
const StickyStory: StoryFn<typeof Table> = (props) => <TableStickyTemplate {...props} />;
export const StickyExample = {
  render: StickyStory,
  parameters: {
    docs: {
      source: {
        code: TableStickyRaw,
      },
    },
  },
  name: 'Table. Фиксированные столбцы.',
};
//</editor-fold>

//<editor-fold desc="Пример c различными состояниями строк">
const RowStateStory: StoryFn<typeof Table> = (props) => <TableRowStateTemplate {...props} />;
export const RowStateExample = {
  render: RowStateStory,
  parameters: {
    docs: {
      source: {
        code: TableRowStateRaw,
      },
      description: {
        story: `Для каждой строки помимо содержимого ячеек, id и className, можно задать следующие 
      состояния строки: \n\n* selected - строка выбрана, чекбокс в строке 
      проставлен; \n\n* disabled - строка задизейблена; \n\n* hover - строка окрашивается 
      при ховере. Данная окраска должна применяться, если строка кликабельна и ведет к каким-либо 
      действиям.\n\nТакже строке можно задать определенный статус, в соответствии с которым она будет окрашена.
      Чтобы задать статус для строки необходимо использовать параметр status, 
      где в качестве значения указывается строка с названием статуса (например, status='error' или status='success').
      По умолчанию таблица предоставляет два статуса: error и success.\n\nПользователь также имеет возможность задать для строки свои кастомные статусы.
      Для того чтобы задать кастомный статус необходимо:\n\n* придумать строковое название статуса (например, 'attention') и определить,
      какой цвет строки будет ему соответствовать (например, Attention/Attention 20). 
      Рекомендуется использовать цвета из палитры библиотеки с индексом контрастности 10 или 20.\n\n* В параметре таблицы rowBackgroundColorByStatusMap
      необходимо задать соответствие кастомного статуса строки и её цвета. Для этого в качестве значения rowBackgroundColorByStatusMap нужно указать
      объект, где ключом объекта должно быть название статуса, а значением свойства объекта должен быть цвет строки, соответствующий данному статусу.
      Цвет можно задать либо в виде строки со значением цвета, либо в виде функции,
      которая на вход получает объект color (равный theme.color, данный объект стоит использовать, если цвет строки будет взят из темы) 
      и возвращает строку со значением цвета. Также с помощью параметра rowBackgroundColorByStatusMap  можно перезадать 
      дефолтные цвета строк для статусов error и success.\n\n* В параметре строки status задать название кастомного статуса.`,
      },
    },
  },
  name: 'Table. Состояния (selected, disabled, hover) и статусы (error, success, кастомные статусы) строк.',
};
//</editor-fold>

//<editor-fold desc="Пример c окрашиванием строк через одну">
const ZebraStory: StoryFn<typeof Table> = (props) => <TableZebraTemplate {...props} />;
export const ZebraExample = {
  render: ZebraStory,
  parameters: {
    docs: {
      source: {
        code: TableZebraRaw,
      },
      description: {
        story: `Опционально, для лучшей визуальной сепарации строк, их можно окрашивать через одну в цвет вторичного фона (Neutral 05). Используйте для этого параметр greyZebraRows.
      Окраска начинается со второй строки, считая от заголовка таблицы или группы. При группировке строк, строка с названием группы не окрашивается. При перетаскивании строк, поиске или сортировке, 
      они окрашиваются в соответствии с описанным выше алгоритмом.\n\nДля консистентности рекомендуется заголовок таблицы тоже окрашивать в серый цвет (параметр greyHeader).`,
      },
    },
  },
  name: 'Table. Зебра (окрашивание строк через одну).',
};
//</editor-fold>

//<editor-fold desc="Пример c детализацией строки">
const ExpandStory: StoryFn<typeof Table> = (props) => <TableExpandTemplate {...props} />;
export const ExpandExample = {
  render: ExpandStory,
  parameters: {
    docs: {
      source: {
        code: TableExpandRaw,
      },
      description: {
        story: `Отображение столбца детализации (столбец со стрелками) регулируется параметром displayRowExpansionColumn. 
      Стрелка позволяет развернуть строку и посмотреть более детализированную информацию о строке. 
      По нажатию на любую из стрелок срабатывает колбек onRowExpansionChange. Развернутое/свернутое состояние строки 
      задается параметром expanded. А с помощью функции expandedRowRender происходит рендер развернутой части строки (рендер детализированной информации).`,
      },
    },
  },
  name: 'Table. Пример c детализацией строки.',
};
//</editor-fold>

//<editor-fold desc="Пример c дополнительным текстом в заголовке">
const ExtraTextStory: StoryFn<typeof Table> = (props) => <TableExtraTextTemplate {...props} />;
export const ExtraTextExample = {
  render: ExtraTextStory,
  parameters: {
    docs: {
      source: {
        code: TableExtraTextRaw,
      },
      description: {
        story: `При необходимости в заголовке таблицы можно включать дополнительный текст с помощью параметра extraText. 
      Дополнительный текст по умолчанию выводится в одну строку и при нехватке места сокращается с помощью троеточия. Увеличить высоту 
      дополнительного текста можно с помощью параметра headerExtraLineClamp, который определяет максимальное количество строк, 
      которое может занимать дополнительный текст. В примере ниже используется headerExtraLineClamp равный 2.`,
      },
    },
  },
  name: 'Table. Пример c дополнительным текстом в заголовке.',
};
//</editor-fold>

//<editor-fold desc="Пример с оверфлоу меню и одиночными действиями над строкой">
const OverflowMenuStory: StoryFn<typeof Table> = (props) => <TableOverflowMenuTemplate {...props} />;
export const OverflowMenuExample = {
  render: OverflowMenuStory,
  parameters: {
    docs: {
      source: {
        code: TableOverflowMenuRaw,
      },
      description: {
        story: `Опционально со строками можно производить набор действий через Overflow Menu, 
      которое по умолчанию появляется при ховере над строкой. При этом, чтобы не накладываться на возможный текст, 
      под иконкой меню добавляется квадратная подложка белого цвета. В примере ниже Overflow Menu 
      задано для первых двух строк в таблицах.\n\nДля того чтобы задать для строки OverflowMenu необходимо 
      для строки прописать функцию overflowMenuRender. Входные параметры функции: сама 
      строка и колбек onVisibilityChange. Колбек необходимо вызывать 
      при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu.
      В качестве результата функция должна возвращать компонент OverflowMenu. Размер OverflowMenu 
      следует задавать согласно правилу:\n\n* Для таблицы с dimension="s" или dimension="m" используется 
      OverflowMenu c dimension="m"\n\n* Для таблицы с dimension="l" или dimension="xl" используется OverflowMenu
      c dimension="l"\n\nЕсли подразумевается только одно действие над строкой, то вместо overflowMenuRender следует
      использовать функцию actionRender (в примере используется для 3-4 строк). 
      На вход функция получает саму строку, а возвращает компонент RowAction (экспортируется из библиотеки),
      внутрь которого необходимо передать иконку для обозначения действия над строкой.\n\nОпционально допускается, чтобы 
      Overflow Menu и иконки одиночных действий были видны постоянно, а не только по ховеру. Данное поведение можно задать
      с помощью параметра showRowsActions. Если showRowsActions равен true, то все иконки меню и иконки одиночных действий во всех 
      строках таблицы отображаются постоянно. При этом в область заголовков и в строки, для которых не заданы действия, 
      добавляется подложка, для того чтобы визуально был выделен столбец с действиями над строками.`,
      },
    },
  },
  name: 'Table. Пример строк с OverflowMenu и иконками для одиночного действия.',
};
//</editor-fold>

//<editor-fold desc="Пример с виртуальным скроллом с фиксированной высотой строки">
const FixedVirtualScrollStory: StoryFn<typeof Table> = (props) => <TableFixedVirtualScrollTemplate {...props} />;
export const FixedVirtualScrollExample = {
  render: FixedVirtualScrollStory,
  parameters: {
    docs: {
      source: {
        code: TableFixedVirtualScrollRaw,
      },
      description: {
        story: `В случае если в таблице необходимо отобразить большое количество строк, возможно использовать функцию виртуального скролла.
      Библиотека предоставляет два вида виртуального скролла: виртуальный скролл для строк с фиксированной высотой
      и виртуальный скролл для строк с динамической высотой. Ниже приведен пример таблицы, в которой все строки имеют единую ФИКСИРОВАННУЮ 
      ВЫСОТУ, и в которой активирован виртуальный скролл. \n\nДля того чтобы активировать виртуальный скролл для строк с фиксированной высотой,
      необходимо задать параметр virtualScroll. Значением virtualScroll должен являться объект, в котором в свойстве fixedRowHeight необходимо 
      задать фиксированную высоту строки. Например, для размера таблицы m высота строки по умолчанию составляет 40px 
      (если содержимое ячеек занимает одну строку в высоту и для ячеек не было задано каких-то кастомных стилей), 
      для размеров s - 32px, l - 48px, xl - 56px.\n\nПримечание: таблица обязательно должна иметь четко 
      заданную высоту (height, minHeight). Это нужно для того, чтобы тело таблицы, которое
      является flex-элементом, могло растянуться на всю высоту таблицы, в противном случае высота тела таблицы будет равна 0.`,
      },
    },
  },
  name: 'Table. Виртуальный скролл с фиксированной высотой строки.',
};
//</editor-fold>

//<editor-fold desc="Пример с виртуальным скроллом с динамической высотой строки">
const DynamicVirtualScrollStory: StoryFn<typeof Table> = (props) => <TableDynamicVirtualScrollTemplate {...props} />;
export const DynamicVirtualScrollExample = {
  render: DynamicVirtualScrollStory,
  parameters: {
    docs: {
      source: {
        code: TableDynamicVirtualScrollRaw,
      },
      description: {
        story: `В случае если в таблице необходимо отобразить большое количество строк, возможно использовать функцию виртуального скролла.
        Библиотека предоставляет два вида виртуального скролла: виртуальный скролл для строк с фиксированной высотой
        и виртуальный скролл для строк с динамической высотой. Ниже приведен пример таблицы, в которой строки имеют ДИНАМИЧЕСКУЮ ВЫСОТУ,
        и в которой активирован виртуальный скролл. \n\nДля того чтобы активировать виртуальный скролл для строк с динамической высотой, необходимо задать 
        параметр virtualScroll. Значением virtualScroll должен являться объект, в котором в свойстве estimatedRowHeight необходимо 
        задать функцию, вычисляющую примерную высоту строки. Функция estimatedRowHeight будет использована для оценки высоты строки 
        до момента, когда строка будет отрисована и измерена. В качестве входного параметра estimatedRowHeight получает индекс 
        строки, который может быть использован для определения примерной высоты строки. Также функция estimatedRowHeight влияет на подсчет
        высоты всех строк в таблице, а значит и на размер вертикального скролла. Поэтому важно, чтобы функция возвращала максимально близкие
        к реальности значения.\n\nПримечание: таблица обязательно должна иметь четко 
        заданную высоту (height, minHeight). Это нужно для того, чтобы тело таблицы, которое
        является flex-элементом, могло растянуться на всю высоту таблицы, в противном случае высота тела таблицы будет равна 0.`,
      },
    },
  },
  name: 'Table. Виртуальный скролл с динамической высотой строки.',
};
//</editor-fold>

//<editor-fold desc="Table. Подгрузка данных при скролле.">
const LoadScrollStory: StoryFn<typeof Table> = (props) => <TableLoadOnScrollTemplate {...props} />;
export const LoadScrollExample = {
  render: LoadScrollStory,
  parameters: {
    docs: {
      source: {
        code: TableLoadScrollRaw,
      },
      description: {
        story: `Пользователь может реализовать подгрузку новых строк по мере скролла тела таблицы, например, следующим образом. С
      помощью функции renderRowWrapper можно создать элемент-обёртку над последней строкой в таблице, 
      и через IntersectionObserver отслеживать момент, когда элемент-обёртка станет видим в пределах тела таблицы (т.е. момент доскролла до последней строки). 
      Это событие будет являться триггером для загрузки новой порции строк.`,
      },
    },
  },
  name: 'Table. Подгрузка данных при скролле.',
};
//</editor-fold>

//<editor-fold desc="Пример с группировкой строк">
const GroupStory: StoryFn<typeof Table> = (props) => <TableGroupTemplate {...props} />;
export const GroupExample = {
  render: GroupStory,
  parameters: {
    docs: {
      source: {
        code: TableGroupRaw,
      },
      description: {
        story: `Строки в таблице можно группировать под общим заголовком. При группировке допускается только один уровень 
      вложенности строк. Не допускается использование строк вне групп, то есть все строки в таблице должны входить в какую-то группу.
      Для того чтобы задать группу строк, нужно в массиве rowList создать объект строки, которая будет являться 
      заголовком группы. Для такой строки необходимо задать два параметра:\n\n* groupTitle - название группы\n\n* groupRows - массив с 
      id строк, входящих в данную группу. Сами строки, относящиеся к группе, должны быть просто перечислены в массиве rowList.`,
      },
    },
  },
  name: 'Table. Пример c группировкой строк.',
};
//</editor-fold>

//<editor-fold desc="Пример с кастомными заголовками">
const CustomTitleStory: StoryFn<typeof Table> = (props) => <TableCustomTitleTemplate {...props} />;
export const CustomTitleExample = {
  render: CustomTitleStory,
  parameters: {
    docs: {
      source: {
        code: TableCustomTitleRaw,
      },
      description: {
        story: `Пользователь может кастомизировать часть заголовка столбца, а именно область с текстом заголовка (параметр title) и 
      область с дополнительным текстом заголовка (параметр extraText). Параметры title и extraText позволяют задать в них любой ReactNode.`,
      },
    },
  },
  name: 'Table. Пример кастомизации заголовков столбцов.',
};
//</editor-fold>

//<editor-fold desc="Пример кастомизации ячейки">
const RenderCellStory: StoryFn<typeof Table> = (props) => <TableRenderCellTemplate {...props} />;
export const RenderCellExample = {
  render: RenderCellStory,
  parameters: {
    docs: {
      source: {
        code: TableRenderCellRaw,
      },
      description: {
        story: `Для формирования контента ячейки пользователь может использовать рендер-колбек renderCell. 
      Функция renderCell задается для каждого столбца в отдельности и представляет собой метод для переопределения стандартного вида ячейки.
      На вход функция renderCell получает 3 параметра: data - контент ячейки, row - объект строки и rowIdx - индекс строки.`,
      },
    },
  },
  name: 'Пример кастомизации компонента ячейки (renderCell).',
};
//</editor-fold>

//<editor-fold desc="Пример кастомизации заголовка группы">
const RenderGroupTitleStory: StoryFn<typeof Table> = (props) => <TableRenderGroupTitleTemplate {...props} />;
export const RenderGroupTitleExample = {
  render: RenderGroupTitleStory,
  parameters: {
    docs: {
      source: {
        code: TableRenderGroupTitleRaw,
      },
      description: {
        story: `Пользователь может кастомизировать заголовок группы строк с помощью рендер-колбека renderGroupTitle.
      Функция renderGroupTitle задается для каждой строки в отдельности и представляет собой метод 
      для переопределения стандартного вида заголовка группы строк. 
      На вход функция renderGroupTitle получает 1 параметр: row - объект строки.`,
      },
    },
  },
  name: 'Table. Пример кастомизации заголовка группы (renderGroupTitle).',
};
//</editor-fold>

//<editor-fold desc="Пример с drag and drop столбцов">
const ColumnDragDropStory: StoryFn<typeof Table> = (props) => <TableColumnDragDropTemplate {...props} />;
export const DraggableColumnsExample = {
  render: ColumnDragDropStory,
  parameters: {
    docs: {
      source: {
        code: TableColumnDragDropRaw,
      },
      description: {
        story: `Функция изменения порядка (перемещения) столбцов является опциональной. По умолчанию столбцы таблицы не подлежат перемещению.
      Для того чтобы столбец можно было перемещать, необходимо задать данному столбцу параметр draggable равный true.\n\nДля перемещения 
      столбца следует “зажать” левую кнопку мыши на нем, после чего над столбцом появится миниатюра заголовка, содержащая текст заголовка.
      Передвигая данную миниатюру по горизонтали в пределах области заголовков таблицы, можно изменить местоположение интересующего столбца.
      Если перемещаемая миниатюра выходит за границы области заголовков таблицы наполовину своей высоты, то перемещение становится невозможным, 
      курсор принимает соответствующий вид. Если в таблице есть фиксированные столбцы, то перемещение фиксированных столбцов происходит только между собой. 
      Соответственно, то же самое применимо к обычным столбцам. Менять между собой местами фиксированные и нефиксированные столбцы нельзя. 
      Поэтому, если пользователь будет перемещать обычный столбец и зайдет курсором на область с фиксированными столбцами, 
      то перемещение столбца станет невозможным и курсор изменит свой вид.\n\nПроцесс перемещения столбцов контролируется пользователем. 
      Поэтому для таблицы должен быть задан колбек onColumnDrag, который срабатывает при каждой попытке изменить местоположение столбца таблицы.
      Данный колбек имеет два параметра: columnName - name столбца, который сейчас перемещается, nextColumnName - name столбца, 
      перед которым пытается встать передвигаемый столбец. Параметр nextColumnName может быть также равен null, если столбец пытается встать в самый конец таблицы.
      При срабатывании колбека onColumnDrag, пользователь должен будет соответственно обновить список столбцов (columnList) для таблицы.\n\nМиниатюра заголовка, 
      возникающая при перемещении колонки, отрисовывается по умолчанию через портал в document.body. Если пользователь хочет изменить document.body
      на свой элемент, то пользователю следует:\n\n1) убедиться, что компоненты библиотеки @admiral-ds/react-ui (включая таблицу) 
      обернуты компонентом DropdownProvider;\n\n2) задать для компонента DropdownProvider параметр rootRef, где rootRef - это реф 
      на dom-элемент, внутри которого отрендерится миниатюра заголовка.`,
      },
    },
  },
  name: 'Table. Drag and Drop столбцов',
};
//</editor-fold>

//<editor-fold desc="Пример с drag and drop строк">
const RowDragDropStory: StoryFn<typeof Table> = (props) => <TableRowDragDropTemplate {...props} />;
export const DraggableRowsExample = {
  render: RowDragDropStory,
  parameters: {
    docs: {
      source: {
        code: TableRowDragDropRaw,
      },
      description: {
        story: `Функция изменения порядка строк является опциональной. По умолчанию строки таблицы не подлежат перемещению.
      Для того чтобы строки можно было перемещать, необходимо в таблицу передать параметр rowsDraggable равный true. 
      При установленном параметре rowsDraggable у каждой строки (кроме строк с заголовками групп) слева появится иконка 
      с 6ю точками, так называемая Drag зона.\n\nДля перемещения строки следует мышью навестись на Drag зону и “зажать” левую кнопку мыши над ней, 
      после чего над строкой появится миниатюра строки, в которой отображается содержание первой ячейки строки.
      Передвигая данную миниатюру по вертикали в пределах тела таблицы, можно изменить местоположение интересующей строки. При этом,
      отменяется сортировка строк, если она была произведена ранее. Если перемещаемая миниатюра выходит за границы тела таблицы 
      наполовину своей высоты, то перемещение становится невозможным, курсор принимает соответствующий вид.\n\nПроцесс перемещения строк 
      контролируется пользователем. Поэтому для таблицы должен быть задан колбек onRowDrag, который срабатывает при каждой попытке 
      изменить местоположение строки таблицы. Данный колбек имеет три параметра:\n\n* rowId - id строки, которая сейчас перемещается;\n\n* nextRowId - 
      id строки, перед которой пытается встать перемещаемая строка. Параметр nextRowId может быть также равен null, 
      если строка пытается встать в самый конец таблицы;\n\n* groupRowId - id групповой строки (строки с заголовком группы), по данному id можно
      определить к какой группе будет относиться перемещаемая строка. Параметр groupRowId может быть также равен null,
      это значит, что перемещаемая строка не будет относиться ни к какой группе.\n\nПри срабатывании колбека onRowDrag, 
      пользователь должен будет соответственно обновить список строк (rowList) для таблицы.\n\nМиниатюра строки, 
      возникающая при перемещении строки, отрисовывается по умолчанию через портал в document.body. Если пользователь хочет изменить document.body
      на свой элемент, то пользователю следует:\n\n1) убедиться, что компоненты библиотеки @admiral-ds/react-ui (включая таблицу) 
      обернуты компонентом DropdownProvider;\n\n2) задать для компонента DropdownProvider параметр rootRef, где rootRef - это реф 
      на dom-элемент, внутри которого отрендерится миниатюра строки.`,
      },
    },
  },
  name: 'Table. Drag and Drop строк',
};
//</editor-fold>

const BaseHtmlStory: StoryFn<typeof TableBaseHtmlTemplate> = (props) => <TableBaseHtmlTemplate {...props} />;
export const BaseHtmlExample = {
  render: BaseHtmlStory,
  parameters: {
    docs: {
      source: {
        code: TableBaseHtmlRaw,
      },
      description: {
        story: `Пример минимальной стилизации html table с фиксированной шапкой при вертикальном скроле.`,
      },
    },
  },
  name: 'Table. Базовый HTML table',
};
