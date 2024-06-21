import * as React from 'react';
import { Table } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';

type RowData = TableRow & {
  transfer_number: React.ReactNode;
  transfer_date: string;
};

const rowList: RowData[] = [...Array(1000).keys()].map((_item, index) => ({
  id: String(index),
  transfer_number: <div style={{ minHeight: '30px' }}>{index}</div>,
  transfer_date: new Date('2020-08-06').toLocaleDateString(),
}));

const base = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Magna fringilla urna porttitor rhoncus dolor purus non enim. Mattis rhoncus urna neque viverra. Tortor posuere ac ut consequat semper. Integer quis auctor elit sed vulputate mi sit. In hac habitasse platea dictumst quisque sagittis purus sit. Enim blandit volutpat maecenas volutpat. Lacus laoreet non curabitur gravida arcu. Volutpat sed cras ornare arcu dui vivamus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.

Malesuada fames ac turpis egestas. Fermentum iaculis eu non diam phasellus vestibulum. Orci nulla pellentesque dignissim enim sit. Consectetur adipiscing elit duis tristique. Aliquam purus sit amet luctus venenatis lectus magna. Ut pharetra sit amet aliquam id diam. Ultricies mi eget mauris pharetra. Vulputate sapien nec sagittis aliquam malesuada bibendum. Cursus turpis massa tincidunt dui ut ornare lectus. Dictumst vestibulum rhoncus est pellentesque. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Dignissim diam quis enim lobortis scelerisque fermentum. Id faucibus nisl tincidunt eget nullam non nisi est sit. Euismod lacinia at quis risus sed vulputate odio ut enim. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem.

Etiam sit amet nisl purus in mollis nunc sed. Commodo nulla facilisi nullam vehicula ipsum. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Libero enim sed faucibus turpis. Amet justo donec enim diam vulputate ut pharetra sit. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Quam pellentesque nec nam aliquam sem. Facilisi cras fermentum odio eu. Id donec ultrices tincidunt arcu non sodales neque. Quis viverra nibh cras pulvinar mattis. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Egestas pretium aenean pharetra magna.`;
const minVal = 0,
  maxVal = 2025;

function randomIntFromInterval(min: number = minVal, max: number = maxVal) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomText() {
  const int1 = randomIntFromInterval(1, 50);
  if (int1 !== 4) {
    return base.slice(1, int1);
  } else {
    const int2 = randomIntFromInterval();
    const int3 = randomIntFromInterval();
    return base.slice(int2, int3);
  }
}

const rowList2: RowData[] = [...Array(1000).keys()].map((_item, index) => ({
  id: String(index),
  transfer_number: getRandomText(),
  transfer_date: new Date('2020-08-06').toLocaleDateString(),
}));

const columnList: Column[] = [
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

const columnList2: Column[] = [
  {
    name: 'transfer_number',
    title: 'Random text',
    width: '40%',
  },
  {
    name: 'transfer_date',
    title: 'Date',
    width: '40%',
  },
];

export const TableVirtualScrollTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <Table
      {...props}
      columnList={cols}
      rowList={rowList2}
      virtualScroll={{ fixedRowHeight: 40 }}
      style={{ height: '500px', width: '500px' }}
      onColumnResize={handleResize}
    />
  );
};
