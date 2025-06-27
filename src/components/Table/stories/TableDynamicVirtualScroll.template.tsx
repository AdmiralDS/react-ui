import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

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
    <>
      <T font="Body/Body 1 Long" as="div">
        В случае если в таблице необходимо отобразить большое количество строк, возможно использовать функцию
        виртуального скролла. Библиотека предоставляет два вида виртуального скролла: виртуальный скролл для строк с
        фиксированной высотой и виртуальный скролл для строк с динамической высотой. Ниже приведен пример таблицы, в
        которой строки имеют ДИНАМИЧЕСКУЮ ВЫСОТУ, и в которой активирован виртуальный скролл.
        <Separator />
        Для того чтобы активировать виртуальный скролл для строк с динамической высотой, необходимо задать параметр{' '}
        <code>virtualScroll</code>. Значением <code>virtualScroll</code> должен являться объект, в котором в свойстве{' '}
        <code>estimatedRowHeight</code> необходимо задать функцию, вычисляющую примерную высоту строки. Функция{' '}
        <code>estimatedRowHeight</code> будет использована для оценки высоты строки до момента, когда строка будет
        отрисована и измерена. В качестве входного параметра <code>estimatedRowHeight</code> получает индекс строки,
        который может быть использован для определения примерной высоты строки. Также функция{' '}
        <code>estimatedRowHeight</code> влияет на подсчет высоты всех строк в таблице, а значит и на размер
        вертикального скролла. Поэтому важно, чтобы функция возвращала максимально близкие к реальности значения.
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
    </>
  );
};
