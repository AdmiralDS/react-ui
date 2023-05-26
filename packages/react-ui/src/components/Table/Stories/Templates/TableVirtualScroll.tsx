import * as React from 'react';
import { Table } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';

type RowData = TableRow & {
  transfer_number: number;
  transfer_date: string;
};

const virtualRowList: RowData[] = [...Array(1000).keys()].map((_item, index) => ({
  id: String(index),
  transfer_number: index,
  transfer_date: new Date('2020-08-06').toLocaleDateString(),
}));

const virtualColumnList: Column[] = [
  {
    name: 'transfer_number',
    title: 'Номер сделки',
    width: '40%',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: '40%',
  },
];

export const VirtualScrollTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(virtualColumnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <Table
      {...props}
      columnList={cols}
      rowList={virtualRowList}
      virtualScroll={{ fixedRowHeight: 40 }}
      style={{ height: '500px' }}
      onColumnResize={handleResize}
    />
  );
};
