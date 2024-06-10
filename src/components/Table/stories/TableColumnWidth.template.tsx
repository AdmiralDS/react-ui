import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

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
  'transfer.type': string;
  'transfer.date': string;
  'transfer.amount': React.ReactNode;
  currency: string;
  rate: number;
};

const rowList: RowData[] = [
  {
    id: '0001',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0005',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0008',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0009',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0010',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0011',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0012',
    'transfer.type': 'МНО',
    'transfer.date': new Date('2020-08-06').toLocaleDateString(),
    'transfer.amount': (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];

const columnList: Column[] = [
  {
    name: 'transfer.type',
    title: 'Тип сделки',
    width: 'calc(20% - 40px)',
  },
  {
    name: 'transfer.date',
    title: 'Дата сделки',
    width: '250px',
  },
  {
    name: 'transfer.amount',
    title: 'Сумма',
    width: 200,
  },
  {
    name: 'currency',
    title: 'Валюта',
    width: '20%',
  },
  {
    name: 'rate',
    title: 'Ставка',
  },
];

export const TableColumnWidthTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return <Table {...props} rowList={rowList} columnList={cols} onColumnResize={handleResize} />;
};
