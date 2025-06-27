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
import { TanstackTemplate } from './Tanstack.template';
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
import TanstackRaw from './Tanstack.template?raw';

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
    },
  },
  name: 'Table. Базовый HTML table',
};

const TanstackStory: StoryFn<typeof TanstackTemplate> = (props) => <TanstackTemplate />;
export const TanstackExample = {
  render: TanstackStory,
  parameters: {
    docs: {
      source: {
        code: TanstackRaw,
      },
    },
  },
  name: 'Table. TanStack example',
};
