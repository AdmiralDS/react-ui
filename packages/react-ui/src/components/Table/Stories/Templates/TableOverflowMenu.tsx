import * as React from 'react';
import { Table, RowAction, TooltipHoc, OverflowMenu, MenuItem } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';

const StrToDate = (str: string) => {
  const res = str.split('.').reverse().join('-');
  return new Date(res);
};
const numberFormatter = new Intl.NumberFormat();
const TooltipedRowAction = TooltipHoc(RowAction);

const items = [
  {
    id: '1',
    display: 'Вывести дату сделки в локали ru',
  },
  {
    id: '2',
    display: 'Вывести дату сделки в локали en-US',
  },
  {
    id: '3',
    display: 'Вывести дату сделки в локали de-AT',
  },
];

const Menu = ({ row, onVisibilityChange }: { row: RowData; onVisibilityChange?: (isVisible: boolean) => void }) => {
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id} role="option">
          {item.display}
        </MenuItem>
      ),
    }));
  }, []);

  return (
    <OverflowMenu
      onSelectItem={(id) => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        if (id === '1') alert(StrToDate(row['transfer_date']).toLocaleString('ru', options));
        if (id === '2') alert(StrToDate(row['transfer_date']).toLocaleString('en-US', options));
        if (id === '3') alert(StrToDate(row['transfer_date']).toLocaleString('de-AT', options));
      }}
      onVisibilityChange={onVisibilityChange}
      aria-label="Overflow Menu component"
      dimension="m"
      isVertical
      items={model}
    />
  );
};

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
    transfer_date: new Date('2020-08-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(500_000),
    currency: 'RUB',
    rate: 2.5,
    overflowMenuRender: (row: RowData, onVisibilityChange?: (isVisible: boolean) => void) => (
      <Menu row={row} onVisibilityChange={onVisibilityChange} />
    ),
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(32_500_000_000),
    currency: 'RUB',
    rate: 5.5,
    overflowMenuRender: (row: RowData, onVisibilityChange?: (isVisible: boolean) => void) => (
      <Menu row={row} onVisibilityChange={onVisibilityChange} />
    ),
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-11-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(189_000_000),
    currency: 'RUB',
    rate: 6,
    actionRender: () => (
      <TooltipedRowAction renderContent={() => `Delete`} onClick={() => console.log('row action happens')}>
        <DeleteOutline />
      </TooltipedRowAction>
    ),
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2010-12-09').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(350_000_000),
    currency: 'RUB',
    rate: 1,
    actionRender: () => (
      <TooltipedRowAction renderContent={() => `Delete`} onClick={() => console.log('row action happens')}>
        <DeleteOutline />
      </TooltipedRowAction>
    ),
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-08-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(60_000),
    currency: 'RUB',
    rate: 4,
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

export const OverflowMenuTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return <Table {...props} dimension="m" rowList={rowList} columnList={cols} onColumnResize={handleResize} 
  showOverflowMenuIcon={true}
  />;
};
