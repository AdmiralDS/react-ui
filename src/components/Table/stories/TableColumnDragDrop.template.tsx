import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 20px;
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
      <T font="Body/Body 2 Long">Пример перемещения обычных столбцов в таблице</T>
      <Separator />
      <Table
        {...props}
        columnList={cols}
        rowList={rowList}
        onColumnResize={handleResize}
        onColumnDrag={handleColumnDrag}
        displayRowSelectionColumn
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
