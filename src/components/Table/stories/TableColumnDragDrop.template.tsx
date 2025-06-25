import * as React from 'react';
import { Table, T, OrderedList, ListItem } from '@admiral-ds/react-ui';
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

const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
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
    transfer_type: 'МНО',
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
    transfer_type: 'МНО',
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
    id: '0004',
    transfer_type: 'МНО',
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
    id: '0005',
    transfer_type: 'МНО',
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
    id: '0006',
    transfer_type: 'МНО',
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
    id: '0007',
    transfer_type: 'МНО',
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
    id: '0008',
    transfer_type: 'МНО',
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
    id: '0009',
    transfer_type: 'МНО',
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
    id: '0010',
    transfer_type: 'МНО',
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
    id: '0011',
    transfer_type: 'МНО',
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
    id: '0012',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];
const columnList1: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    draggable: true,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
    draggable: true,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
    draggable: true,
  },
  {
    name: 'currency',
    title: 'Валюта',
    draggable: true,
  },
  {
    name: 'rate',
    title: 'Ставка',
    draggable: true,
  },
];

const columnList2: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    draggable: true,
    sticky: true,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    draggable: true,
    sticky: true,
    width: 150,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    draggable: true,
    width: 170,
  },
  {
    name: 'currency',
    title: 'Валюта',
    draggable: true,
  },
  {
    name: 'rate',
    title: 'Ставка',
    draggable: true,
  },
];

export const TableColumnDragDropTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList1);
  const [cols2, setCols2] = React.useState(columnList2);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const handleResize2 = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols2.map((col) => (col.name === name ? { ...col, width } : col));
    setCols2(newCols);
  };

  const handleColumnDrag = (columnName: string, nextColumnName: string | null) => {
    const columns = [...cols];
    const movedIndex = columns.findIndex((col) => col.name === columnName);
    const movedColumn = columns.splice(movedIndex, 1)[0];
    const beforeIndex = nextColumnName ? columns.findIndex((col) => col.name === nextColumnName) : columns.length;
    columns.splice(beforeIndex, 0, movedColumn);

    setCols(columns);
  };

  const handleColumnDragEnd = (columnName: string) => {
    const newIndex = cols.findIndex((col) => col.name === columnName);
    // eslint-disable-next-line no-console
    console.log('After drag&drop column with name ' + columnName + ' has index ' + newIndex + ' in columnList');
  };

  const handleColumnDrag2 = (columnName: string, nextColumnName: string | null) => {
    const columns = [...cols2];
    const movedIndex = columns.findIndex((col) => col.name === columnName);
    const movedColumn = columns.splice(movedIndex, 1)[0];
    const beforeIndex = nextColumnName ? columns.findIndex((col) => col.name === nextColumnName) : columns.length;
    columns.splice(beforeIndex, 0, movedColumn);

    setCols2(columns);
  };

  return (
    <>
      <T font="Body/Body 1 Long">
        Функция изменения порядка (перемещения) столбцов является опциональной. По умолчанию столбцы таблицы не подлежат
        перемещению. Для того чтобы столбец можно было перемещать, необходимо задать данному столбцу параметр{' '}
        <code>draggable</code> равный <code>true</code>.
        <Separator $height={8} />
        Для перемещения столбца следует “зажать” левую кнопку мыши на нем, после чего над столбцом появится миниатюра
        заголовка, содержащая текст заголовка. Передвигая данную миниатюру по горизонтали в пределах области заголовков
        таблицы, можно изменить местоположение интересующего столбца. Если перемещаемая миниатюра выходит за границы
        области заголовков таблицы наполовину своей высоты, то перемещение становится невозможным, курсор принимает
        соответствующий вид. Миниатюры заголовка можно дополнительно стилизовать с помощью параметра
        draggedColumnCssMixin.
        <Separator $height={8} />
        Если в таблице есть фиксированные столбцы, то перемещение фиксированных столбцов происходит только между собой.
        Соответственно, то же самое применимо к обычным столбцам. Менять между собой местами фиксированные и
        нефиксированные столбцы нельзя. Поэтому, если пользователь будет перемещать обычный столбец и зайдет курсором на
        область с фиксированными столбцами, то перемещение столбца станет невозможным и курсор изменит свой вид.
        <Separator $height={8} />
        Процесс перемещения столбцов контролируется пользователем. Поэтому для таблицы должен быть задан колбек{' '}
        <code>onColumnDrag</code>, который срабатывает при каждой попытке изменить местоположение столбца таблицы.
        Данный колбек имеет два параметра: <code>columnName</code> - <code>name</code> столбца, который сейчас
        перемещается, <code>nextColumnName</code> - <code>name</code> столбца, перед которым пытается встать
        передвигаемый столбец. Параметр <code>nextColumnName</code> может быть также равен <code>null</code>, если
        столбец пытается встать в самый конец таблицы. При срабатывании колбека <code>onColumnDrag</code>, пользователь
        должен будет соответственно обновить список столбцов (<code>columnList</code>) для таблицы.
        <Separator $height={8} />
        Миниатюра заголовка, возникающая при перемещении колонки, отрисовывается по умолчанию через портал в{' '}
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
            - это реф на <code>dom</code>-элемент, внутри которого отрендерится миниатюра заголовка.
          </ListItem>
        </OrderedList>
      </T>
      <Separator />
      <T font="Body/Body 2 Long">Пример перемещения обычных столбцов в таблице</T>
      <Separator />
      <Table
        {...props}
        columnList={cols}
        rowList={rowList}
        onColumnResize={handleResize}
        onColumnDrag={handleColumnDrag}
        onColumnDragEnd={handleColumnDragEnd}
      />
      <Separator style={{ height: '40px' }} />
      <T font="Body/Body 2 Long">
        Пример перемещения как обычных, так и фиксированных столбцов в таблице. В данном случае фиксированными являются
        первые два столбца.
      </T>
      <Separator />
      <Table
        {...props}
        columnList={cols2}
        rowList={rowList}
        onColumnResize={handleResize2}
        onColumnDrag={handleColumnDrag2}
      />
    </>
  );
};
