import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled='true'] {
    & > * {
      color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color['Cyan/Cyan 10']};
  padding: 16px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-left: 16px;
  background: ${({ theme }) => theme.color['Special/Elevated BG']};
  & > div {
    margin-bottom: 8px;
  }
`;

const expandedRowRender = (row: RowData) => {
  return (
    <Wrapper>
      <Content>
        <div>Тип сделки: {row.transfer_type}</div>
        <div>Дата сделки: {row.transfer_date}</div>
        <div>Валюта: {row.currency}</div>
        <div>Ставка: {row.rate}</div>
      </Content>
    </Wrapper>
  );
};

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
    expanded: true,
    expandedRowRender: expandedRowRender,
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
    expandedRowRender: expandedRowRender,
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
    expandedRowRender: expandedRowRender,
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
    expandedRowRender: expandedRowRender,
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

export const ExpandTemplate = (props: TableProps) => {
  const [rows, setRows] = React.useState(rowList);
  const [cols, setCols] = React.useState(columnList);

  const handleExpansionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows(updRows);
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <Table
      {...props}
      rowList={rows}
      columnList={cols}
      displayRowExpansionColumn
      onRowExpansionChange={handleExpansionChange}
      onColumnResize={handleResize}
    />
  );
};
