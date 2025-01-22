import * as React from 'react';
import { Table, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
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
const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

const numberFormatter = new Intl.NumberFormat();

type RowData = TableRow & {
  transfer_type?: string;
  transfer_date?: string;
  transfer_amount?: React.ReactNode;
  currency?: string;
  rate?: number;
};

const rowList: RowData[] = [
  {
    id: '0001',
    expanded: false,
    groupTitle: 'First group name',
    groupRows: ['0002', '0003'],
  },
  {
    id: '0002',
    transfer_type: 'GR1',
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
    transfer_type: 'GR1',
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
    expanded: true,
    groupTitle: 'Second group name',
    groupRows: ['0005', '0006'],
  },
  {
    id: '0005',
    transfer_type: 'GR2',
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
    transfer_type: 'GR2',
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
    expanded: true,
    groupTitle: 'Third group name',
    groupRows: ['0008'],
  },
  {
    id: '0008',
    transfer_type: 'GR3',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
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

export const TableGroupTemplate = (props: TableProps) => {
  const [rows, setRows] = React.useState(rowList);
  const [cols, setCols] = React.useState(columnList);

  const handleExpansionChange = (ids: Record<string, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, expanded: ids[row.id] }));
    setRows(updRows);
  };

  const handleSelectionChange = (ids: Record<string, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Строки в таблице можно группировать под общим заголовком. При группировке допускается только один уровень
        вложенности строк. Не допускается использование строк вне групп, то есть все строки в таблице должны входить в
        какую-то группу.
        <Separator />
        Для того чтобы задать группу строк, нужно в массиве <code>rowList</code> создать объект строки, которая будет
        являться заголовком группы. Для такой строки необходимо задать два параметра:
        <Separator />
        <UnorderedList dimension="s">
          <ListItem>
            <code>groupTitle</code> - название группы
          </ListItem>
          <ListItem>
            <code>groupRows</code> - массив с <code>id</code> строк, входящих в данную группу. Сами строки, относящиеся
            к группе, должны быть просто перечислены в массиве <code>rowList</code>.
          </ListItem>
        </UnorderedList>
      </T>
      <Separator $height={24} />
      <Table
        {...props}
        rowList={rows}
        columnList={cols}
        displayRowExpansionColumn
        onRowExpansionChange={handleExpansionChange}
        onRowSelectionChange={handleSelectionChange}
        onColumnResize={handleResize}
      />
    </>
  );
};
