import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

type RowData = TableRow & {
  transfer_number: number;
  transfer_date: string;
};

const rowList: RowData[] = [...Array(1000).keys()].map((_item, index) => ({
  id: String(index),
  transfer_number: index,
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

export const TableFixedVirtualScrollTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        В случае если в таблице необходимо отобразить большое количество строк, возможно использовать функцию
        виртуального скролла. Библиотека предоставляет два вида виртуального скролла: виртуальный скролл для строк с
        фиксированной высотой и виртуальный скролл для строк с динамической высотой. Ниже приведен пример таблицы, в
        которой все строки имеют единую ФИКСИРОВАННУЮ ВЫСОТУ, и в которой активирован виртуальный скролл.
        <Separator />
        Для того чтобы активировать виртуальный скролл для строк с фиксированной высотой, необходимо задать параметр{' '}
        <code>virtualScroll</code>. Значением <code>virtualScroll</code> должен являться объект, в котором в свойстве{' '}
        <code>fixedRowHeight</code> необходимо задать фиксированную высоту строки. Например, для размера таблицы{' '}
        <code>m</code> высота строки по умолчанию составляет <code>40px</code> (если содержимое ячеек занимает одну
        строку в высоту и для ячеек не было задано каких-то кастомных стилей), для размеров <code>s-32px</code>,{' '}
        <code>l-48px</code>, <code>xl-56px</code>.
        <Separator />
        Примечание: таблица обязательно должна иметь четко заданную высоту (<code>height</code>, <code>minHeight</code>
        ). Это нужно для того, чтобы тело таблицы, которое является <code>flex</code>-элементом, могло растянуться на
        всю высоту таблицы, в противном случае высота тела таблицы будет равна 0.
      </T>
      <Separator $height={24} />
      <Table
        {...props}
        columnList={cols}
        rowList={rowList}
        virtualScroll={{ fixedRowHeight: 40 }}
        style={{ height: '500px' }}
        onColumnResize={handleResize}
      />
    </>
  );
};
