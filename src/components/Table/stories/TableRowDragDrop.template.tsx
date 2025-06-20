import * as React from 'react';
import { Table, T, OrderedList, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled='true'] {
    & > * {
      color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

const numberFormatter = new Intl.NumberFormat();

type RowData = TableRow & {
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  currency: string;
  rate: number;
};

type RowData2 = TableRow & {
  transfer_type?: string;
  transfer_date?: string;
  transfer_amount?: React.ReactNode;
  transfer_status?: string;
};

const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО1',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО2',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО3',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(12_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    transfer_type: 'МНО4',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(55_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0005',
    transfer_type: 'МНО5',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(180_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    transfer_type: 'МНО6',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    transfer_type: 'МНО7',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(189_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0008',
    transfer_type: 'МНО8',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(6_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0009',
    transfer_type: 'МНО9',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(10_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];

const rowList2: RowData2[] = [
  {
    id: '0001',
    expanded: false,
    groupTitle: 'First group name',
    groupRows: ['0002', '0003'],
  },
  {
    id: '0002',
    transfer_type: 'МНО2',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    id: '0003',
    transfer_type: 'МНО3',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'Выполнено',
  },
  {
    id: '0004',
    expanded: true,
    groupTitle: 'Second group name',
    groupRows: ['0005', '0006'],
  },
  {
    id: '0005',
    transfer_type: 'МНО5',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  {
    id: '0006',
    transfer_type: 'МНО6',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    transfer_status: 'В ожиданиии',
  },
  {
    id: '0007',
    expanded: true,
    groupTitle: 'Third group name',
    groupRows: ['0008', '0009'],
  },
  {
    id: '0008',
    transfer_type: 'МНО8',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
      </AmountCell>
    ),
    transfer_status: 'Отклонено',
  },
  {
    id: '0009',
    transfer_type: 'МНО9',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
      </AmountCell>
    ),
    transfer_status: 'Отклонено',
  },
];

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
  },
];

const columnList2: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
  },
  {
    name: 'transfer_status',
    title: 'Статус',
    width: 170,
  },
];

function updateRowStatus(groupId: string | null) {
  switch (groupId) {
    case '0001':
      return 'Выполнено';
    case '0004':
      return 'В ожидании';
    default:
      return 'Отклонено';
  }
}

export const TableRowDragDropTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);
  const [cols2, setCols2] = React.useState(columnList2);
  const [rows, setRows] = React.useState(rowList);
  const [rows2, setRows2] = React.useState(rowList2);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const handleResize2 = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols2.map((col) => (col.name === name ? { ...col, width } : col));
    setCols2(newCols);
  };

  const handleExpansionChange = (ids: Record<string, boolean>): void => {
    const updRows = rows2.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows2(updRows);
  };

  const handleRowDrag = (rowId: string, nextRowId: string | null) => {
    // меняем строки местами
    const tableRows = [...rows];
    const movedIndex = tableRows.findIndex((row) => row.id === rowId);
    const movedRow = tableRows.splice(movedIndex, 1)[0];
    const beforeIndex = nextRowId ? tableRows.findIndex((row) => row.id === nextRowId) : tableRows.length;
    tableRows.splice(beforeIndex, 0, movedRow);

    setRows(tableRows);
  };

  const handleRowDragEnd = (rowId: string) => {
    const newIndex = rows.findIndex((row) => row.id === rowId);
    // eslint-disable-next-line no-console
    console.log('After drag&drop row with id ' + rowId + ' has index ' + newIndex + ' in rowList');
  };

  const handleRowDrag2 = (rowId: string, nextRowId: string | null, groupRowId: string | null) => {
    // меняем строки местами
    const tableRows = [...rows2];
    const movedIndex = tableRows.findIndex((row) => row.id === rowId);
    const movedRow = tableRows.splice(movedIndex, 1)[0];
    movedRow['transfer_status'] = updateRowStatus(groupRowId);
    const beforeIndex = nextRowId ? tableRows.findIndex((row) => row.id === nextRowId) : tableRows.length;
    tableRows.splice(beforeIndex, 0, movedRow);

    // обновляем значения параметров row.groupRows
    const groupRows = tableRows.filter((row) => row?.groupTitle);
    groupRows.forEach((row) => {
      if (row.id === groupRowId) {
        const newGroup = row?.groupRows?.filter((id) => id !== rowId) || [];
        let beforeIndex = nextRowId ? newGroup.findIndex((id) => id === nextRowId) : newGroup.length;
        beforeIndex = beforeIndex == -1 ? newGroup.length : beforeIndex;
        newGroup.splice(beforeIndex, 0, rowId);
        row.groupRows = newGroup;
      } else if (row.groupRows) {
        const newGroup = row.groupRows.filter((id) => id !== rowId);
        row.groupRows = newGroup;
      }
      row.expanded = row.groupRows?.length ? row.expanded : false;
    });

    setRows2(tableRows);
  };

  return (
    <>
      <T font="Body/Body 1 Long">
        Функция изменения порядка строк является опциональной. По умолчанию строки таблицы не подлежат перемещению. Для
        того чтобы строки можно было перемещать, необходимо в таблицу передать параметр <code>rowsDraggable</code>{' '}
        равный <code>true</code>. При установленном параметре <code>rowsDraggable</code> у каждой строки (кроме строк с
        заголовками групп) слева появится иконка с 6ю точками, так называемая <code>Drag</code> зона.
        <Separator $height={8} />
        Для перемещения строки следует мышью навестись на <code>Drag</code> зону и “зажать” левую кнопку мыши над ней,
        после чего над строкой появится миниатюра строки, в которой отображается содержание первой ячейки строки.
        Передвигая данную миниатюру по вертикали в пределах тела таблицы, можно изменить местоположение интересующей
        строки. При этом, отменяется сортировка строк, если она была произведена ранее. Если перемещаемая миниатюра
        выходит за границы тела таблицы наполовину своей высоты, то перемещение становится невозможным, курсор принимает
        соответствующий вид. Миниатюры строки можно дополнительно стилизовать с помощью параметра draggedRowCssMixin.
        <Separator $height={8} />
        Процесс перемещения строк контролируется пользователем. Поэтому для таблицы должен быть задан колбек{' '}
        <code>onRowDrag</code>, который срабатывает при каждой попытке изменить местоположение строки таблицы. Данный
        колбек имеет три параметра:
        <Separator $height={8} />
        <UnorderedList>
          <ListItem>
            <code>rowId - id</code> строки, которая сейчас перемещается;
          </ListItem>
          <ListItem>
            <code>nextRowId - id</code> строки, перед которой пытается встать перемещаемая строка. Параметр{' '}
            <code>nextRowId</code> может быть также равен <code>null</code>, если строка пытается встать в самый конец
            таблицы;
          </ListItem>
          <ListItem>
            <code>groupRowId - id</code> групповой строки (строки с заголовком группы), по данному <code>id</code> можно
            определить к какой группе будет относиться перемещаемая строка. Параметр <code>groupRowId</code> может быть
            также равен <code>null</code>, это значит, что перемещаемая строка не будет относиться ни к какой группе.
          </ListItem>
        </UnorderedList>
        <Separator $height={8} />
        При срабатывании колбека <code>onRowDrag</code>, пользователь должен будет соответственно обновить список строк
        (<code>rowList</code>) для таблицы.
        <Separator $height={8} />
        Миниатюра строки, возникающая при перемещении строки, отрисовывается по умолчанию через портал в{' '}
        <code>document.body</code>. Если пользователь хочет изменить <code>document.body</code> на свой элемент, то
        пользователю следует:
        <Separator $height={8} />
        <OrderedList>
          <ListItem>
            убедиться, что компоненты библиотеки <code>@admiral-ds/react-ui</code> (включая таблицу) обернуты
            компонентом <code>DropdownProvider</code>;
          </ListItem>
          <ListItem>
            задать для компонента <code>DropdownProvider</code> параметр <code>rootRef</code>, где <code>rootRef</code>{' '}
            - это реф на <code>dom</code>-элемент, внутри которого отрендерится миниатюра строки.
          </ListItem>
        </OrderedList>
      </T>
      <Separator />
      <T font="Body/Body 2 Long">Пример с обычными строками</T>
      <Separator />
      <Table
        {...props}
        rowList={rows}
        columnList={cols}
        onColumnResize={handleResize}
        rowsDraggable
        onRowDrag={handleRowDrag}
        onRowDragEnd={handleRowDragEnd}
      />
      <Separator />
      <T font="Body/Body 2 Long">Пример с группами строк</T>
      <Separator />
      <Table
        {...props}
        rowList={rows2}
        columnList={cols2}
        displayRowExpansionColumn
        onRowExpansionChange={handleExpansionChange}
        onColumnResize={handleResize2}
        rowsDraggable
        onRowDrag={handleRowDrag2}
      />
    </>
  );
};
