import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { Table } from '#src/components/Table';
import {
  rowList,
  columnList,
  columnListWithWidth,
  columnListOrientation,
  columnListSort,
  rowListSort,
  columnListLineClamp,
  rowListLineClamp,
  columnListSticky,
  rowListRowState,
  rowListExpanded,
} from '#src/components/Table/data';
import { ReactComponent as AcceptSolid } from '@admiral-ds/icons/build/category/AcceptSolid.svg';

import { FieldSet, RadioButton, Button, DateInput } from '../../index';

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
  title: 'Example/Table',
  decorators: [withDesign],
  component: Table,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A90544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A90707',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A90947',
      },
    ],
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    displayRowSelectionColumn: {
      control: { type: 'boolean' },
    },
    greyHeader: {
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
    disableColumnResize: {
      control: { type: 'boolean' },
    },
    showLastRowUnderline: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />;
};

const StrToTime = (str: string) => {
  const res = str.split('.').reverse().join('-');
  return new Date(res).getTime();
};

const Template2: ComponentStory<typeof Table> = ({ rowList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);
  const handleSort = ({ name, sort }: { name: string; sort: 'asc' | 'desc' | 'initial' }) => {
    if (sort === 'initial') {
      setRows([...rowList]);
    } else {
      const newRows = [...rows].sort((a: any, b: any) => {
        if (sort === 'asc') {
          switch (name) {
            case 'transfer_date':
              return StrToTime(a[name]) - StrToTime(b[name]);
            case 'transfer_amount':
              return Number(a[name].replace(/\D/g, '')) - Number(b[name].replace(/\D/g, ''));
            case 'rate':
            default:
              return a[name] - b[name];
          }
        } else {
          switch (name) {
            case 'transfer_date':
              return StrToTime(b[name]) - StrToTime(a[name]);
            case 'transfer_amount':
              return Number(b[name].replace(/\D/g, '')) - Number(a[name].replace(/\D/g, ''));
            case 'rate':
            default:
              return b[name] - a[name];
          }
        }
      });
      setRows(newRows);
    }
  };
  return <Table {...args} rowList={rows} onSortChange={handleSort} />;
};

const Template3: ComponentStory<typeof Table> = ({ rowList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);

  const handleSelectionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  return <Table {...args} rowList={rows} onRowSelectionChange={handleSelectionChange} />;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

const Template4: ComponentStory<typeof Table> = (args) => {
  const [selected, setSelected] = React.useState<string>('');
  const [rows, setRows] = React.useState([...args.rowList]);
  const calendarRef = React.useRef<HTMLDivElement>(null);

  const renderSomeFilter = ({ closeMenu, setFilterActive }: any) => (
    <Wrapper>
      <FieldSet
        legend="Варианты фильтрации:"
        onChange={(e) => {
          setSelected((e.target as HTMLInputElement).value);
        }}
      >
        <RadioButton value="1" name="test" checked={'1' === selected} readOnly>
          Сумма превышает миллиард
        </RadioButton>
        <RadioButton value="2" name="test" checked={'2' === selected} readOnly>
          Сумма меньше миллиарда
        </RadioButton>
      </FieldSet>
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setFilterActive(true);
            if (selected === '1') {
              const newRows = args.rowList.filter(
                (row) => Number((row['transfer_amount'] as string).replace(/\D/g, '')) > 1000000000,
              );
              setRows(newRows);
            } else {
              const newRows = args.rowList.filter(
                (row) => Number((row['transfer_amount'] as string).replace(/\D/g, '')) < 1000000000,
              );
              setRows(newRows);
            }
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setFilterActive(false);
            setRows([...args.rowList]);
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );

  const onFilterMenuClickOutside = ({ closeMenu }: any, event: Event) => {
    // если кликнули по календарю, то фильтр должен оставаться открытым
    if (event.target && calendarRef.current?.contains(event.target as Node)) {
      return;
    }
    closeMenu();
  };

  const cols = columnList.map((col, index) => {
    if (index === 0) {
      return {
        ...col,
        renderFilter: () => <Wrapper>Пример кастомизации иконки фильтра с помощью функции renderFilterIcon</Wrapper>,
        renderFilterIcon: () => <AcceptSolid />,
        onFilterMenuClickOutside: ({ closeMenu }: any) => closeMenu(),
      };
    }
    if (index === 1) {
      return {
        ...col,
        renderFilter: () => (
          <Wrapper>
            Пример использования колбека onFilterMenuClickOutside в сочетании с DateInput
            <DateInput calendarRef={calendarRef} style={{ marginTop: '20px' }} />
          </Wrapper>
        ),
        onFilterMenuClickOutside,
      };
    }
    if (index === 2) {
      return {
        ...col,
        renderFilter: renderSomeFilter,
        onFilterMenuClose: () => console.log('filter menu close'),
        onFilterMenuOpen: () => console.log('filter menu open'),
        onFilterMenuClickOutside: ({ closeMenu }: any) => closeMenu(),
      };
    } else if (index === 4) {
      return {
        ...col,
        cellAlign: 'right' as any,
        renderFilter: () => <Wrapper>Пример отображения фильтра в колонке с выравниванием по правому краю</Wrapper>,
        onFilterMenuClickOutside: ({ closeMenu }: any) => closeMenu(),
      };
    } else return col;
  });
  return <Table columnList={cols} rowList={rows} />;
};

const CellTextContent = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  margin: 2px 0;
  overflow: hidden;
`;

const Template5: ComponentStory<typeof Table> = (args) => {
  const renderCell = (row: any, columnName: string) => {
    return (
      <CellTextContent>
        {columnName === 'transfer_date' ? new Date(row[columnName]).toLocaleDateString() : row[columnName]}
      </CellTextContent>
    );
  };
  return <Table headerLineClamp={2} displayRowSelectionColumn renderCell={renderCell} {...args} />;
};

const Template6: ComponentStory<typeof Table> = ({ rowList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);

  const handleExpansionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows(updRows);
  };

  return <Table {...args} rowList={rows} onRowExpansionChange={handleExpansionChange} />;
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
      story: `По умолчанию ширина столбца составляет 100 пикселей (не менее). Чтобы изменить этот 
      параметр в массиве columnList для столбца, чью ширину нужно изменить, следует задать параметр width.
      Также ширину столбца можно регулировать с помощью ручного ресайза, для этого нужно 
      потянуть разделитель между столбцами в нужном направлении. С помощью колбека onColumnResize можно получать сведения
      о том, как изменилась ширина столбца в результате ручного ресайза.`,
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
      с помощью колбека onHeaderSelectionChange отслеживать нажатие на данный чекбокс.`,
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
      Если сортировка включена, то ее значок-стрелка остается видимым при снятии фокуса с заголовка и окрашивается в синий цвет.  
      При повторном нажатии происходит сортировка в обратном порядке (стрелка меняет направление). 
      При третьем нажатии сортировка отменяется.\n\nПо умолчанию сортировка столбцов отключена.
      Чтобы включить сортировку столбца, необходимо задать ему параметр sortable: true. При изменении сортировки столбца будет срабатывать
      колбек onSortChange, который будет возвращать два аргумента: name - уникальное имя столбца, к которому была применена сортировка, и
      sort - тип сортировки ('asc' - возрастающая, 'desc' - убывающая и 'initial' - отмена сортировки, возврат к первоначальному состоянию.
      Отменя сортировки происходит при третьем нажатии на заголовок.)\n\nСортировка массива строк происходит на стороне пользователя
      при срабатывании колбека onSortChange.\n\nДля столбца можно задать сортировку по умолчанию с помощью параметра defaultSort?: 'asc' | 'desc'.`,
    },
  },
};

export const Filter = Template4.bind({});
Filter.args = {
  rowList: rowListSort,
  columnList: columnList,
};
Filter.storyName = 'Table. Фильтрация.';
Filter.parameters = {
  docs: {
    description: {
      story: `Опционально в заголовках можно включать фильтрацию столбцов. 
      При этом у заголовка будет появляться иконка фильтрации, по нажатию на которую будет 
      открываться меню фильтрации.\n\nДля того чтобы задать фильтр для столбца достаточно 
      задать для него параметр renderFilter - функцию, которая будет отрисовывать содержимое 
      меню фильтра. Данная функция имеет в качетсве входного параметра объект с двумя 
      свойствами:\n\n 1) closeMenu - колбек, при вызове которого происходит закрытие меню 
      фильтра;\n\n2) setFilterActive - колбек, который устанавливает фильтр в активное/неактивное 
      состояние. В неактивном состоянии иконка фильтра окрашена в серый цвет, 
      при активном (включенном фильтре) иконка фильтра окрашивается в синий цвет.\n\nМеню 
      фильтра является произвольным и полностью контролируется пользователем. Закрытие меню и
      установка фильтра в активное/неактивное состояние производится пользователем внутри функции 
      renderFilter с помощью вышеописанных колбеков.\n\nИконка фильтрации может быть любой 
      (шестеренка, фильтр и т.д.). По умолчанию в качестве иконки фильтра
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

export const Multiline = Template5.bind({});
Multiline.args = {
  rowList: rowListLineClamp,
  columnList: columnListLineClamp,
};
Multiline.storyName = 'Table. Многострочность.';
Multiline.parameters = {
  docs: {
    description: {
      story: `Заголовки таблицы по умолчанию выводятся в одну строку и при нехватке места сокращаются с помощью троеточия. Увеличить высоту 
      заголовка можно с помощью параметра headerLineClamp, который определяет максимальное количество строк, которое может занимать заголовок таблицы. 
      В примере ниже используется headerLineClamp равный 2. \n\nСтроки таблицы не ограничены по высоте. 
      В ячейке строки можно отрисовать любой ReactNode, передав его в rowList. Также для отрисовка контента строки 
      можно применить функцию renderCell. `,
    },
  },
};

export const Sticky = Template.bind({});
Sticky.args = {
  rowList,
  columnList: columnListSticky,
  style: { maxHeight: '300px' },
};
Sticky.storyName = 'Table. Фиксированные столбцы.';
Sticky.parameters = {
  docs: {
    description: {
      story: `При необходимости можно “закреплять” столбцы таблицы. Фиксированные столбцы располагаются по левому краю таблицы и идут друг за другом.
      Столбец с чекбоксами является фиксированным по умолчанию.\n\nЧтобы сделать столбец фиксированным, необходимо задать для него параметр sticky равный true.`,
    },
  },
};

export const RowState = Template.bind({});
RowState.args = {
  rowList: rowListRowState,
  columnList,
  displayRowSelectionColumn: true,
};
RowState.storyName = 'Table. Стили строк (selected, disabled, error, success).';
RowState.parameters = {
  docs: {
    description: {
      story: `Для каждой строки помимо содержимого ячеек и id, можно задать следующие состояния строки: selected, disabled, error, success.`,
    },
  },
};

export const Expand = Template6.bind({});
Expand.args = {
  rowList: rowListExpanded,
  columnList,
  displayRowExpansionColumn: true,
};
Expand.storyName = 'Table. Пример c детализацией строки.';
Expand.parameters = {
  docs: {
    description: {
      story: `Отображение столбца детализации (столбец со стрелками) регулируется параметром displayRowExpansionColumn. 
      Стрелка позволяет развернуть строку и посмотреть более детализированную информацию о строке. 
      По нажатию на любую из стрелок срабатывает колбек onRowExpansionChange. Развернутое/свернутое состояние строки 
      задается параметром expanded. А с помощью функции expandedRowRender происходит рендер развернутой части строки (рендер детализированной информации).`,
    },
  },
};
