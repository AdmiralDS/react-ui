import * as React from 'react';
import { Table, RowAction, TooltipHoc, OverflowMenu, MenuItem, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

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
      // eslint-disable-next-line no-console
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
      // eslint-disable-next-line no-console
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

export const TableOverflowMenuTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState([...columnList]);
  const [cols2, setCols2] = React.useState([...columnList]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };
  const handleResize2 = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols2.map((col) => (col.name === name ? { ...col, width } : col));
    setCols2(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Опционально со строками можно производить набор действий через <code>OverflowMenu</code>, которое по умолчанию
        появляется при ховере над строкой. При этом, чтобы не накладываться на возможный текст, под иконкой меню
        добавляется квадратная подложка белого цвета. В примере ниже <code>OverflowMenu</code> задано для первых двух
        строк в таблицах.
        <Separator $height={8} />
        Для того чтобы задать для строки <code>OverflowMenu</code> необходимо для строки прописать функцию{' '}
        <code>overflowMenuRender</code>. Входные параметры функции: сама строка и колбек <code>onVisibilityChange</code>
        . Колбек необходимо вызывать при открытии/закрытии меню для того, чтобы таблица могла управлять видимостью{' '}
        <code>OverflowMenu</code>. В качестве результата функция должна возвращать компонент <code>OverflowMenu</code>.
        Размер <code>OverflowMenu</code> следует задавать согласно правилу:
        <Separator $height={8} />
        <UnorderedList dimension="s">
          <ListItem>
            Для таблицы с <code>dimension="s"</code> или <code>dimension="m"</code> используется{' '}
            <code>OverflowMenu</code> c <code>dimension="m"</code>
          </ListItem>
          <ListItem>
            Для таблицы с <code>dimension="l"</code> или <code>dimension="xl"</code> используется{' '}
            <code>OverflowMenu</code> c <code>dimension="l"</code>
          </ListItem>
        </UnorderedList>
        <Separator $height={8} />
        Если подразумевается только одно действие над строкой, то вместо <code>overflowMenuRender</code> следует
        использовать функцию <code>actionRender</code> (в примере используется для 3-4 строк). На вход функция получает
        саму строку, а возвращает компонент <code>RowAction</code> (экспортируется из библиотеки), внутрь которого
        необходимо передать иконку для обозначения действия над строкой.
        <Separator $height={8} />
        Опционально допускается, чтобы <code>OverflowMenu</code> и иконки одиночных действий были видны постоянно, а не
        только по ховеру. Данное поведение можно задать с помощью параметра <code>showRowsActions</code>. Если{' '}
        <code>showRowsActions=true</code>, то все иконки меню и иконки одиночных действий во всех строках таблицы
        отображаются постоянно. При этом в строки, для которых не заданы действия, добавляется подложка, для того чтобы
        визуально был выделен столбец с действиями над строками. Начиная с версии 8.45.0, при{' '}
        <code>showRowsActions=true</code> <code>OverflowMenu</code> и иконки одиночных действий рендерятся в виде
        отдельного столбца, на который отведена часть ширины таблицы.
      </T>
      <Separator />
      <T font="Body/Body 2 Long">Пример с иконками действий над строками, которые видны только по ховеру</T>
      <Separator />
      <Table {...props} dimension="m" rowList={rowList} columnList={cols} onColumnResize={handleResize} />
      <Separator style={{ height: '40px' }} />
      <T font="Body/Body 2 Long">Пример с постоянно видимыми иконками действий над строками</T>
      <Separator />
      <Table
        {...props}
        dimension="m"
        rowList={rowList}
        columnList={cols2}
        onColumnResize={handleResize2}
        showRowsActions
      />
    </>
  );
};
