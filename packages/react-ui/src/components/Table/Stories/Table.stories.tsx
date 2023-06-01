import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import type { Column } from '@admiral-ds/react-ui';
import { Table, DefaultFontColorName } from '@admiral-ds/react-ui';

// Массивы с данными столбцов и строк вынесены в отдельный файл в связи с большим объемом информации
import {
  columnList,
  columnListOrientation,
  columnListSort,
  columnListWithCustomTitle,
  columnListWithWidth,
  rowList,
  rowListSort,
  columnListWithCustomRender,
  rowListWithCustomRenderGroup,
} from './data';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

import {
  VirtualScrollTemplate,
  OverflowMenuTemplate,
  GroupTemplate,
  ExtraTextTemplate,
  ExpandTemplate,
  ZebraTemplate,
  ColumnDragDropTemplate,
  RowStateTemplate,
  StickyTemplate,
  MultilineTemplate,
  FilterTemplate,
} from './Templates';
// Imports of text sources
import VirtualScrollRaw from '!!raw-loader!./Templates/TableVirtualScroll';
import OverflowMenuRaw from '!!raw-loader!./Templates/TableOverflowMenu';
import GroupRaw from '!!raw-loader!./Templates/TableGroup';
import ExtraTextRaw from '!!raw-loader!./Templates/TableExtraText';
import ExpandRaw from '!!raw-loader!./Templates/TableExpand';
import ZebraRaw from '!!raw-loader!./Templates/TableZebra';
import ColumnDragDropRaw from '!!raw-loader!./Templates/TableColumnDragDrop';
import RowStateRaw from '!!raw-loader!./Templates/TableRowState';
import StickyRaw from '!!raw-loader!./Templates/TableSticky';
import MultilineRaw from '!!raw-loader!./Templates/TableMultiline';
import FilterRaw from '!!raw-loader!./Templates/TableFilter';

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
  decorators: [withDesign],
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
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = ({ columnList, ...args }) => {
  const [cols, setCols] = React.useState([...columnList]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return <Table {...args} columnList={cols} onColumnResize={handleResize} />;
};

const StrToTime = (str: string) => {
  const res = str.split('.').reverse().join('-');
  return new Date(res).getTime();
};

const MAX_SORT_LEVEL = 2;

type SortColumn = { [key: string]: 'asc' | 'desc' };

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color[DefaultFontColorName]};
`;

const Template2: ComponentStory<typeof Table> = ({ rowList, columnList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);
  const [cols, setCols] = React.useState([...columnList]);
  const [sortLevel, setSortLevel] = React.useState<number>(0);

  const calcSortOrder = (columns: Array<Column>): Array<Column> => {
    const newCols = [...columns];

    const sortColumns = [...newCols]
      .filter((column) => !!column.sort)
      .sort((a, b) => {
        return (a.sortOrder || 0) - (b.sortOrder || 0);
      });

    sortColumns.forEach((col, index) => {
      if (index < MAX_SORT_LEVEL) {
        col.sortOrder = index + 1;
      } else {
        col.sortOrder = undefined;
        col.sort = undefined;
      }
    });
    setSortLevel(sortColumns.length);

    return newCols;
  };

  const getOrderedSortColumns = (columns: Array<Column>): SortColumn => {
    const sortColumns = columns
      .filter((column) => !!column.sort)
      .sort((a, b) => {
        return (a.sortOrder || 0) - (b.sortOrder || 0);
      });

    return sortColumns.reduce((acc: SortColumn, currentValue: Column) => {
      if (currentValue.sort) acc[currentValue.name] = currentValue.sort;
      return acc;
    }, {});
  };

  const handleSort = ({ name, sort }: { name: string; sort: 'asc' | 'desc' | 'initial' }) => {
    if (sort === 'initial') {
      const newCols = [...cols].map((col) =>
        col.name === name ? { ...col, sort: undefined, sortOrder: undefined } : { ...col },
      );
      setCols(calcSortOrder(newCols));
    } else {
      if (sort === 'asc') {
        if (sortLevel === MAX_SORT_LEVEL) {
          const firstOrderCol = cols.find((col) => col.sortOrder === 1);
          if (firstOrderCol) {
            if (firstOrderCol.sort) firstOrderCol.sort = undefined;
            if (firstOrderCol.sortOrder) firstOrderCol.sortOrder = undefined;
          }
        }

        const newCols = [...cols].map((col) => {
          const newCol = { ...col };

          if (col.name === name) {
            newCol.sort = 'asc';
            newCol.sortOrder = sortLevel + 1;
          }

          return newCol;
        });
        setCols(calcSortOrder(newCols));
      } else {
        setCols([...cols].map((col) => (col.name === name ? { ...col, sort: 'desc' } : { ...col })));
      }
    }
  };

  const compare = (a: any, b: any, colName: string, sort: 'asc' | 'desc') => {
    if (sort === 'asc') {
      switch (colName) {
        case 'transfer_date':
          return StrToTime(a[colName]) - StrToTime(b[colName]);
        case 'transfer_amount':
          return Number(a[colName].replace(/\D/g, '')) - Number(b[colName].replace(/\D/g, ''));
        case 'rate':
        default:
          return a[colName] - b[colName];
      }
    } else {
      switch (colName) {
        case 'transfer_date':
          return StrToTime(b[colName]) - StrToTime(a[colName]);
        case 'transfer_amount':
          return Number(b[colName].replace(/\D/g, '')) - Number(a[colName].replace(/\D/g, ''));
        case 'rate':
        default:
          return b[colName] - a[colName];
      }
    }
  };

  React.useEffect(() => {
    const sortColumns = getOrderedSortColumns(cols);

    if (Object.keys(sortColumns).length === 0) {
      setRows([...rowList]);
    } else {
      const names = Object.keys(sortColumns);
      const newRows = [...rows].sort((a: any, b: any) => {
        const result = compare(a, b, names[0], sortColumns[names[0]]);

        if (!result && names.length > 1) {
          return compare(a, b, names[1], sortColumns[names[1]]);
        } else {
          return result;
        }
      });

      setRows(newRows);
    }
  }, [cols]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <Text>
        Дизайн-системой предусматривается многоуровневая сортировка. Рекомендуется использовать не более ДВУХ уровней.
        <br />
        Логика сортировки (взаимосвязи) выстраивается пользователем. При этом, у иконок сортировки появляются цифры
        обозначающие порядок (приоритет) сортировки.
      </Text>
      <Table {...args} columnList={cols} rowList={rows} onSortChange={handleSort} onColumnResize={handleResize} />
    </>
  );
};

const Template3: ComponentStory<typeof Table> = ({ rowList, columnList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);
  const [cols, setCols] = React.useState([...columnList]);

  const handleSelectionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <Table
        {...args}
        rowList={rows}
        columnList={cols}
        onRowSelectionChange={handleSelectionChange}
        onColumnResize={handleResize}
      />
    </>
  );
};

const Template8: ComponentStory<typeof Table> = ({ rowList, columnList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);
  const [cols, setCols] = React.useState([...columnList]);

  const handleExpansionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows(updRows);
  };

  const handleSelectionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <Table
        {...args}
        rowList={rows}
        columnList={cols}
        onRowExpansionChange={handleExpansionChange}
        onRowSelectionChange={handleSelectionChange}
        onColumnResize={handleResize}
      />
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  rowList,
  columnList,
};

export const ColumnWidth = Template.bind({});
ColumnWidth.args = {
  rowList,
  columnList: columnListWithWidth,
};
ColumnWidth.storyName = 'Table. Пример изменения ширины столбцов.';
ColumnWidth.parameters = {
  docs: {
    description: {
      story: `По умолчанию ширина столбца составляет 100 пикселей. Чтобы изменить этот 
      параметр в массиве columnList для столбца, чью ширину нужно изменить, следует задать параметр width. 
      В качестве значения width может выступать любое валидное css значение (пиксели, проценты, функция calc и т.д.).\n\nТакже
      ширину столбца можно регулировать с помощью ручного ресайза, для этого нужно 
      потянуть разделитель между столбцами в нужном направлении. При этом обязательно должен быть задан колбек onColumnResize.
      При срабатывании колбек сообщает пользователю о попытке ресайзинга столбца, после чего пользователь должен 
      обновить ширину соответствующего столбца в массиве columnList. 
      Таким образом контроль за ресайзингом происходит на стороне пользователя.\n\nПо умолчанию
      в таблице всегда включена возможность ручного ресайза столбцов, однако с помощью параметра disableColumnResize 
      можно отменить эту возможность для всей таблицы, 
      либо с помощью параметра disableResize отключить ресайз для отдельного столбца. 
      Также в таблице по умолчанию не отображается разделитель для последнего столбца, данное поведение можно 
      изменить с помощью параметра showDividerForLastColumn.`,
    },
  },
};

export const Checkbox = Template3.bind({});
Checkbox.args = {
  rowList,
  columnList: columnList,
  displayRowSelectionColumn: true,
};
Checkbox.storyName = 'Table. Пример c чекбоксами.';
Checkbox.parameters = {
  docs: {
    description: {
      story: `Отображение столбца с чекбоксами регулируется параметром displayRowSelectionColumn. 
      Чекбокс в шапке таблицы позволяет выбрать все строки (если не выбрано ни одной строки), 
      либо отменить выбранные до этого строки. По нажатию на любой из чекбоксов срабатывает колбек onRowSelectionChange.\n\nТакже
      с помощью параметров headerCheckboxChecked, headerCheckboxIndeterminate можно контролировать состояние чекбокса в шапке таблицы. А
      с помощью колбека onHeaderSelectionChange отслеживать нажатие на данный чекбокс.\n\nЕсли необходимо задизейблить чекбокс отдельной строки,
      для данной строки нужно задать параметр checkboxDisabled.`,
    },
  },
};

export const Style = Template.bind({});
Style.args = {
  rowList,
  columnList,
  greyHeader: true,
  spacingBetweenItems: '20px',
  style: {
    maxHeight: '400px',
  },
};
Style.storyName = 'Table. Пример стилизации.';
Style.parameters = {
  docs: {
    description: {
      story: `Шапку таблицы можно окрашивать в серый цвет с помощью параметра greyHeader. 
      Также изменять стили таблицы можно посредством атрибута style. Кроме того, к контейнеру таблицы можно применить все стандартные
      html-атрибуты divа.\n\nШирина заголовка зависит от параметра spacingBetweenItems, подробнее о нем можно прочитать в макетах. 
      По умолчанию минимальное значение 12, для таблиц S и M, и 16 для таблиц L и XL.\n\nС помощью параметра  showLastRowUnderline 
      можно управлять отображением серой полоски подчеркивания для последеней строки таблицы. Кроме того, можно включать/отключать 
      отображение вертикальной полосы разделителя для последнего столбца таблицы с помощью параметра showDividerForLastColumn.`,
    },
  },
};

export const Orientation = Template.bind({});
Orientation.args = {
  rowList,
  columnList: columnListOrientation,
};
Orientation.storyName = 'Table. Пример с настройкой выравнивания контента столбца.';
Orientation.parameters = {
  docs: {
    description: {
      story: `По умолчанию контент столбца выравнивается по левому краю. Если необходимо выравнивание по правому краю, 
      то следует задать параметр cellAlign: 'right' для столбца.`,
    },
  },
};

export const Sort = Template2.bind({});
Sort.args = {
  rowList: rowListSort,
  columnList: columnListSort,
};
Sort.storyName = 'Table. Сортировка.';
Sort.parameters = {
  docs: {
    description: {
      story: `Если сортировка выключена, то значок виден только при наведении на область заголовка и окрашивается в серый цвет.
      Если сортировка включена (первое нажатие - сортировка по возрастанию), то ее значок-стрелка остается видимым при снятии фокуса 
      с заголовка и окрашивается в синий цвет. При повторном нажатии происходит сортировка в обратном порядке (стрелка меняет направление, 
      по убыванию). При третьем нажатии сортировка отменяется.\n\nПо умолчанию возможность сортировки столбца отключена.
      Чтобы сделать столбец сортируемым, необходимо задать ему параметр sortable: true. Сортировка - это контролируемый пользователем параметр. 
      Чтобы включить для столбца сортировку по возрастанию/убыванию, пользователь должен задать для столбца параметр sort: 'asc' | 'desc'.
      Если для столбца задан только параметр sortable: true, а параметр sort не задан, это говорит о том, что столбец сортируемый 
      (при наведении на его заголовок будет видна стрелка сортировки), но в данный момент к нему никакая сортировка не применена.\n\nПри 
      изменении сортировки столбца будет срабатывать колбек onSortChange, который будет возвращать два аргумента: 
      name - уникальное имя столбца, к которому была применена сортировка, и sort - тип сортировки ('asc' - возрастающая, 
      'desc' - убывающая и 'initial' - отмена сортировки, возврат к первоначальному состоянию). Сортировка массива строк 
      происходит на стороне пользователя при срабатывании колбека onSortChange.`,
    },
  },
};

//<editor-fold desc="Пример фильтрации">
const FilterStory: ComponentStory<typeof Table> = (props) => (
  <FilterTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const FilterExample = FilterStory.bind({});
FilterExample.parameters = {
  docs: {
    source: {
      code: FilterRaw,
    },
    description: {
      story: `Опционально в заголовках можно включать фильтрацию столбцов. 
      При этом у заголовка будет появляться иконка фильтрации, по нажатию на которую будет 
      открываться меню фильтрации.\n\nДля того чтобы задать фильтр для столбца достаточно 
      задать для него параметр renderFilter - функцию, которая будет отрисовывать содержимое 
      меню фильтра. Данная функция имеет в качестве входных параметров объект столбца и объект с двумя 
      свойствами:\n\n 1) closeMenu - колбек, при вызове которого происходит закрытие меню 
      фильтра;\n\n2) setFilterActive - колбек, который устанавливает фильтр в активное/неактивное 
      состояние. Колбек setFilterActive - это устаревшее api, вместо него рекомендуется 
      использовать параметр столбца isFilterActive, который также устанавливает фильтр в активное/неактивное 
      состояние.В неактивном состоянии иконка фильтра окрашена в серый цвет, 
      при активном (включенном фильтре) иконка фильтра окрашивается в синий цвет.\n\nМеню 
      фильтра является произвольным и полностью контролируется пользователем. Закрытие меню и
      установка фильтра в активное/неактивное состояние производится пользователем внутри функции 
      renderFilter с помощью вышеописанных колбеков. С помощью параметров filterMenuAlignSelf, 
      filterMenuClassName, filterMenuCssMixin и filterMenuStyle пользователь также может управлять 
      выравниваем фильтра, добавлять className и изменять его стили.\n\nИконка фильтрации может быть 
      любой (шестеренка, фильтр и т.д.). По умолчанию в качестве иконки фильтра
      используется иконка MoreHorizontalOutline. Дефолтную иконку можно заменить 
      с помощью параметра renderFilterIcon.\n\nКроме того для столбца можно задать колбеки 
      onFilterMenuOpen и onFilterMenuClose, которые будут срабатывать 
      соответственно при открытии и закрытии меню фильтра. А также для столбца можно задать колбек 
      onFilterMenuClickOutside, который будет срабатывать при клике вне меню фильтра. Данный колбек имеет 
      в качестве входных параметров объект с двумя 
      свойствами (closeMenu, setFilterActive) и параметр event.`,
    },
  },
};
FilterExample.storyName = 'Table. Фильтрация.';
//</editor-fold>

//<editor-fold desc="Пример c многострочностью заголовков">
const MultilineStory: ComponentStory<typeof Table> = (props) => (
  <MultilineTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const MultilineExample = MultilineStory.bind({});
MultilineExample.parameters = {
  docs: {
    source: {
      code: MultilineRaw,
    },
    description: {
      story: `Заголовки таблицы по умолчанию выводятся в одну строку и при нехватке места сокращаются с помощью троеточия. Увеличить высоту 
      заголовка можно с помощью параметра headerLineClamp, который определяет максимальное количество строк, которое может занимать заголовок таблицы. 
      В примере ниже используется headerLineClamp равный 2. \n\nСтроки таблицы не ограничены по высоте. 
      В ячейке строки можно отрисовать любой ReactNode, передав его в rowList. Также с помощью функции renderCell можно
      переопределить стандартный вид ячеек, относящихся к определенному столбцу таблицы (смотрите "Пример кастомизации компонента ячейки").`,
    },
  },
};
MultilineExample.storyName = 'Table. Многострочность.';
//</editor-fold>

//<editor-fold desc="Пример c фиксированными столбцами">
const StickyStory: ComponentStory<typeof Table> = (props) => (
  <StickyTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const StickyExample = StickyStory.bind({});
StickyExample.parameters = {
  docs: {
    source: {
      code: StickyRaw,
    },
    description: {
      story: `При необходимости можно “закреплять” столбцы таблицы. Фиксированные столбцы располагаются по левому краю таблицы и идут друг за другом.
      Столбец с чекбоксами является фиксированным по умолчанию.\n\nЧтобы сделать столбец фиксированным, необходимо задать для него параметр sticky равный true.`,
    },
  },
};
StickyExample.storyName = 'Table. Фиксированные столбцы.';
//</editor-fold>

//<editor-fold desc="Пример c различными состояниями строк">
const RowStateStory: ComponentStory<typeof Table> = (props) => (
  <RowStateTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const RowStateExample = RowStateStory.bind({});
RowStateExample.parameters = {
  docs: {
    source: {
      code: RowStateRaw,
    },
    description: {
      story: `Для каждой строки помимо содержимого ячеек и id, можно задать следующие состояния строки: selected, 
      disabled, error, success, hover. Нужно учесть, что окраска строки по hover должна использоваться для 
      тех случаев, когда строка кликабельна и ведет к каким-либо действиям.`,
    },
  },
};
RowStateExample.storyName = 'Table. Стили строк (selected, disabled, error, success, hover).';
//</editor-fold>

//<editor-fold desc="Пример c окрашиванием строк через одну">
const ZebraStory: ComponentStory<typeof Table> = (props) => (
  <ZebraTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const ZebraExample = ZebraStory.bind({});
ZebraExample.parameters = {
  docs: {
    source: {
      code: ZebraRaw,
    },
    description: {
      story: `Опционально, для лучшей визуальной сепарации строк, их можно окрашивать через одну в цвет вторичного фона (Neutral 05). Используйте для этого параметр greyZebraRows.
      Окраска начинается со второй строки, считая от заголовка таблицы или группы. При группировке строк, строка с названием группы не окрашивается. При перетаскивании строк, поиске или сортировке, 
      они окрашиваются в соответствии с описанным выше алгоритмом.\n\nДля консистентности рекомендуется заголовок таблицы тоже окрашивать в серый цвет (параметр greyHeader).`,
    },
  },
};
ZebraExample.storyName = 'Table. Зебра (окрашивание строк через одну).';
//</editor-fold>

//<editor-fold desc="Пример c детализацией строки">
const ExpandStory: ComponentStory<typeof Table> = (props) => (
  <ExpandTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const ExpandExample = ExpandStory.bind({});
ExpandExample.parameters = {
  docs: {
    source: {
      code: ExpandRaw,
    },
    description: {
      story: `Отображение столбца детализации (столбец со стрелками) регулируется параметром displayRowExpansionColumn. 
      Стрелка позволяет развернуть строку и посмотреть более детализированную информацию о строке. 
      По нажатию на любую из стрелок срабатывает колбек onRowExpansionChange. Развернутое/свернутое состояние строки 
      задается параметром expanded. А с помощью функции expandedRowRender происходит рендер развернутой части строки (рендер детализированной информации).`,
    },
  },
};
ExpandExample.storyName = 'Table. Пример c детализацией строки.';
//</editor-fold>

//<editor-fold desc="Пример c дополнительным текстом в заголовке">
const ExtraTextStory: ComponentStory<typeof Table> = (props) => (
  <ExtraTextTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const ExtraTextExample = ExtraTextStory.bind({});
ExtraTextExample.parameters = {
  docs: {
    source: {
      code: ExtraTextRaw,
    },
    description: {
      story: `При необходимости в заголовке таблицы можно включать дополнительный текст с помощью параметра extraText. 
      Дополнительный текст по умолчанию выводится в одну строку и при нехватке места сокращается с помощью троеточия. Увеличить высоту 
      дополнительного текста можно с помощью параметра headerExtraLineClamp, который определяет максимальное количество строк, 
      которое может занимать дополнительный текст. В примере ниже используется headerExtraLineClamp равный 2.`,
    },
  },
};
ExtraTextExample.storyName = 'Table. Пример c дополнительным текстом в заголовке.';
//</editor-fold>

//<editor-fold desc="Пример с оверфлоу меню и одиночными действиями над строкой">
const OverflowMenuStory: ComponentStory<typeof Table> = (props) => (
  <OverflowMenuTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const OverflowMenuExample = OverflowMenuStory.bind({});
OverflowMenuExample.parameters = {
  docs: {
    source: {
      code: OverflowMenuRaw,
    },
    description: {
      story: `Опционально со строками можно производить набор действий через Overflow Menu, 
      которое появляется при ховере над строкой. При этом, чтобы не накладываться на возможный текст, 
      под иконкой меню добавляется квадратная подложка белого цвета. В примере ниже Overflow Menu 
      задано для первых двух строк.\n\nДля того чтобы задать для строки OverflowMenu необходимо 
      для строки прописать функцию overflowMenuRender. Входные параметры функции: сама 
      строка и колбек onVisibilityChange. Колбек необходимо вызывать 
      при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью OverflowMenu.
      В качестве результата функция должна возвращать компонент OverflowMenu. Размер OverflowMenu 
      следует задавать согласно правилу:\n\n* Для таблицы с dimension="s" или dimension="m" используется 
      OverflowMenu c dimension="m"\n\n* Для таблицы с dimension="l" или dimension="xl" используется OverflowMenu
      c dimension="l"\n\nЕсли подразумевается только одно действие над строкой, то вместо overflowMenuRender следует
      использовать функцию actionRender (в примере используется для 3-4 строк). 
      На вход функция получает саму строку, а возвращает компонент RowAction (экспортируется из библиотеки),
      внутрь которого необходимо передать иконку для обозначения действия над строкой.`,
    },
  },
};
OverflowMenuExample.storyName = 'Table. Пример строк с OverflowMenu и иконками для одиночного действия.';
//</editor-fold>

//<editor-fold desc="Пример с виртуальным скроллом">
const VirtualScrollStory: ComponentStory<typeof Table> = (props) => (
  <VirtualScrollTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const VirtualScrollExample = VirtualScrollStory.bind({});
VirtualScrollExample.parameters = {
  docs: {
    source: {
      code: VirtualScrollRaw,
    },
    description: {
      story: `В случае если в таблице необходимо отобразить большое количество строк, возможно использовать функцию виртуального скролла.
      На данный момент функция виртуального скролла реализована только для случая, когда все строки в таблице единой фиксированной высоты. 
      Например, для размера таблицы m высота строки по умолчанию составляет 40px (если содержимое ячеек занимает одну 
      строку в высоту и для ячеек не было задано каких-то кастомных стилей), для размеров s - 32px, l - 48px, xl - 56px.\n\nДля того 
      чтобы активировать виртуальный скролл, необходимо задать параметр virtualScroll. Значением virtualScroll должен являться объект, в котором 
      в свойстве fixedRowHeight необходимо задать фиксированную высоту строки.\n\nПримечание: таблица обязательно должна иметь четко 
      заданную высоту (height, minHeight). Это нужно для того, чтобы тело таблицы, которое
      является flex-элементом, могло растянуться на всю высоту таблицы, в противном случае высота тела таблицы будет равна 0.`,
    },
  },
};
VirtualScrollExample.storyName = 'Table. Виртуальный скролл.';
//</editor-fold>

//<editor-fold desc="Пример с группировкой строк">
const GroupStory: ComponentStory<typeof Table> = (props) => (
  <GroupTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const GroupExample = GroupStory.bind({});
GroupExample.parameters = {
  docs: {
    source: {
      code: GroupRaw,
    },
    description: {
      story: `Строки в таблице можно группировать под общим заголовком. При группировке допускается только один уровень 
      вложенности строк. Для того чтобы задать группу строк, нужно в массиве rowList создать объект строки, которая будет являться 
      заголовком группы. Для такой строки необходимо задать два параметра:\n\n* groupTitle - название группы\n\n* groupRows - массив с 
      id строк, входящих в данную группу. Сами строки, относящиеся к группе, должны быть просто перечислены в массиве rowList.`,
    },
  },
};
GroupExample.storyName = 'Table. Пример c группировкой строк.';
//</editor-fold>

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  rowList,
  columnList: columnListWithCustomTitle,
};
CustomTitle.storyName = 'Table. Пример кастомизации заголовков столбцов.';

export const CustomRenderCell = Template.bind({});
CustomRenderCell.args = {
  rowList,
  columnList: columnListWithCustomRender,
};
CustomRenderCell.storyName = 'Table. Пример кастомизации компонента ячейки.';

export const CustomRenderGroupTitle = Template8.bind({});
CustomRenderGroupTitle.args = {
  rowList: rowListWithCustomRenderGroup,
  columnList,
  displayRowExpansionColumn: true,
};
CustomRenderGroupTitle.storyName = 'Table. Пример кастомизации заголовка группы';

//<editor-fold desc="Пример с drag and drop столбцов">
const ColumnDragDropStory: ComponentStory<typeof Table> = (props) => (
  <ColumnDragDropTemplate columnList={[]} rowList={[]} {...cleanUpProps(props)} />
);
export const DraggableColumnsExample = ColumnDragDropStory.bind({});
DraggableColumnsExample.parameters = {
  docs: {
    source: {
      code: ColumnDragDropRaw,
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
      на свой элемент, то пользователю следует\n\n1)убедиться, что компоненты библиотеки @admiral-ds/react-ui (включая таблицу) 
      обернуты компонентом DropdownProvider\n\n2) задать для компонента DropdownProvider параметр rootRef, где rootRef - это реф 
      на dom-элемент, внутри которого отрендерится миниатюра заголовка.`,
    },
  },
};
DraggableColumnsExample.storyName = 'Table. Drag and Drop столбцов';
//</editor-fold>
