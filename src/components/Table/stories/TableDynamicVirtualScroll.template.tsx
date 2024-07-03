import * as React from 'react';
import { Table } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';

type RowData = TableRow & {
  column1: React.ReactNode;
  column2: string;
};

const base = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Magna fringilla 
urna porttitor rhoncus dolor purus non enim. Mattis rhoncus urna neque viverra. Tortor posuere ac ut consequat semper. 
Integer quis auctor elit sed vulputate mi sit. In hac habitasse platea dictumst quisque sagittis purus sit. Enim 
blandit volutpat maecenas volutpat. Lacus laoreet non curabitur gravida arcu.`;

function randomIntFromInterval(min: number = 10, max: number = base.length) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomText(index: number) {
  const int = index % 5 ? randomIntFromInterval(1, 4) : randomIntFromInterval();
  return base.slice(0, int);
}

const rowList: RowData[] = [...Array(1000).keys()].map((_item, index) => ({
  id: String(index),
  column1: getRandomText(index),
  column2: String(index),
}));

const columnList: Column[] = [
  {
    name: 'column1',
    title: 'Random text',
    width: '60%',
  },
  {
    name: 'column2',
    title: 'Row index',
  },
];

export const TableDynamicVirtualScrollTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <Table
      {...props}
      columnList={cols}
      rowList={rowList}
      virtualScroll={{
        estimatedRowHeight: (index: number) => {
          /** Примерную высоту строки необязательно высчитывать с
           * помощью index, вы можете указать единую для всех строк примерную высоту.
           *
           * В данном примере только каждая 5я строка имеет динамическую высоту,
           * которая оценена примерна в 150px, остальные строки имеют стандартную высоту в 40px
           */
          return index % 5 ? 40 : 150;
        },
      }}
      style={{ height: '500px', width: '500px' }}
      onColumnResize={handleResize}
    />
  );
};
