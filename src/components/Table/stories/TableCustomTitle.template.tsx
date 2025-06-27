import * as React from 'react';
import { Table, T, Badge } from '@admiral-ds/react-ui';
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
const Separator = styled.div`
  height: 24px;
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
];

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: (
      <>
        Тип сделки <Badge>5</Badge>
      </>
    ),
    width: '20%',
  },
  {
    name: 'transfer_date',
    title: <b>Дата сделки</b>,
    width: '250px',
  },
  {
    name: 'transfer_amount',
    title: <span style={{ color: 'red', fontWeight: 'bold' }}>Сумма</span>,
    width: 200,
  },
  {
    name: 'currency',
    title: <i>Валюта</i>,
    extraText: <b>доллары</b>,
  },
  {
    name: 'rate',
    title: 'Ставка',
  },
];

export const TableCustomTitleTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Пользователь может кастомизировать часть заголовка столбца, а именно область с текстом заголовка (параметр{' '}
        <code>title</code>) и область с дополнительным текстом заголовка (параметр <code>extraText</code>). Параметры{' '}
        <code>title</code> и <code>extraText</code> позволяют задать в них любой <code>ReactNode</code>.
      </T>
      <Separator />
      <Table {...props} rowList={rowList} columnList={cols} onColumnResize={handleResize} />
    </>
  );
};
