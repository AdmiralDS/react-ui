import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

const numberFormatter = new Intl.NumberFormat('ru-RU');

type RowData = TableRow & {
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  currency: string;
  rate: string;
};

const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(500000),
    currency: 'RUB',
    rate: numberFormatter.format(2),
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString(),
    transfer_amount: numberFormatter.format(32500000000),
    currency: 'RUB',
    rate: numberFormatter.format(5),
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-11-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(189000000),
    currency: 'RUB',
    rate: numberFormatter.format(6),
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2010-12-09').toLocaleDateString(),
    transfer_amount: numberFormatter.format(350000000),
    currency: 'RUB',
    rate: numberFormatter.format(1),
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-08-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(60000),
    currency: 'RUB',
    rate: numberFormatter.format(4),
  },
  {
    id: '0006',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString(),
    transfer_amount: numberFormatter.format(700000),
    currency: 'RUB',
    rate: numberFormatter.format(1),
  },
  {
    id: '0007',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-12-01').toLocaleDateString(),
    transfer_amount: numberFormatter.format(500000),
    currency: 'RUB',
    rate: numberFormatter.format(8),
  },
];

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: 150,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
    sortable: true,
    type: 'date',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
    sortable: true,
    type: 'number',
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
    sortable: true,
    type: 'number',
  },
];

const StrToTime = (str: string) => {
  const res = str.split('.').reverse().join('-');
  return new Date(res).getTime();
};

const MAX_SORT_LEVEL = 2;

type SortColumn = { [key: string]: { sort: 'asc' | 'desc'; type?: string } };

export const TableSortTemplate = (props: TableProps) => {
  const [rows, setRows] = React.useState([...rowList]);
  const [cols, setCols] = React.useState([...columnList]);
  const [sortLevel, setSortLevel] = React.useState<number>(0);

  const calcSortOrder = (columns: Array<Column>): Array<Column> => {
    const newCols = [...columns];

    const sortColumns = [...newCols]
      .filter((column) => !!column.sort)
      .sort((a, b) => {
        return (a.sortOrder || 0) - (b.sortOrder || 0);
      });

    sortColumns.forEach((col, index) => {
      if (index < MAX_SORT_LEVEL) {
        col.sortOrder = index + 1;
      } else {
        col.sortOrder = undefined;
        col.sort = undefined;
      }
    });
    setSortLevel(sortColumns.length);

    return newCols;
  };

  const getOrderedSortColumns = (columns: Array<Column>): SortColumn => {
    const sortColumns = columns
      .filter((column) => !!column.sort)
      .sort((a, b) => {
        return (a.sortOrder || 0) - (b.sortOrder || 0);
      });

    return sortColumns.reduce((acc: SortColumn, { name, sort, type }: Column) => {
      if (sort) acc[name] = { sort, type };
      return acc;
    }, {});
  };

  const handleSort = ({ name, sort }: { name: string; sort: 'asc' | 'desc' | 'initial' }) => {
    if (sort === 'initial') {
      const newCols = [...cols].map((col) =>
        col.name === name ? { ...col, sort: undefined, sortOrder: undefined } : { ...col },
      );
      setCols(calcSortOrder(newCols));
    } else {
      if (sort === 'asc') {
        if (sortLevel === MAX_SORT_LEVEL) {
          const firstOrderCol = cols.find((col) => col.sortOrder === 1);
          if (firstOrderCol) {
            if (firstOrderCol.sort) firstOrderCol.sort = undefined;
            if (firstOrderCol.sortOrder) firstOrderCol.sortOrder = undefined;
          }
        }

        const newCols = [...cols].map((col) => {
          const newCol = { ...col };

          if (col.name === name) {
            newCol.sort = 'asc';
            newCol.sortOrder = sortLevel + 1;
          }

          return newCol;
        });
        setCols(calcSortOrder(newCols));
      } else {
        setCols([...cols].map((col) => (col.name === name ? { ...col, sort: 'desc' } : { ...col })));
      }
    }
  };

  const compare = (a: any, b: any, colName: string, sort: 'asc' | 'desc', colType?: string) => {
    if (sort === 'asc') {
      switch (colType) {
        case 'date':
          return StrToTime(a[colName]) - StrToTime(b[colName]);
        case 'number':
        default:
          return Number(a[colName].replace(/\D/g, '')) - Number(b[colName].replace(/\D/g, ''));
      }
    } else {
      switch (colType) {
        case 'date':
          return StrToTime(b[colName]) - StrToTime(a[colName]);
        case 'number':
        default:
          return Number(b[colName].replace(/\D/g, '')) - Number(a[colName].replace(/\D/g, ''));
      }
    }
  };

  React.useEffect(() => {
    const sortColumns = getOrderedSortColumns(cols);

    if (Object.keys(sortColumns).length === 0) {
      setRows([...rowList]);
    } else {
      const names = Object.keys(sortColumns);
      const newRows = [...rows].sort((a: any, b: any) => {
        const result = compare(a, b, names[0], sortColumns[names[0]].sort, sortColumns[names[0]].type);

        if (!result && names.length > 1) {
          return compare(a, b, names[1], sortColumns[names[1]].sort, sortColumns[names[1]].type);
        } else {
          return result;
        }
      });

      setRows(newRows);
    }
  }, [cols]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        По умолчанию возможность сортировки столбца отключена. Чтобы сделать столбец сортируемым, необходимо задать ему
        параметр <code>sortable:true</code>. Сортировка - это контролируемый пользователем параметр. Чтобы включить для
        столбца сортировку по возрастанию/убыванию, пользователь должен задать для столбца параметр{' '}
        <code>sort:'asc'|'desc'</code>. Если для столбца задан только параметр <code>sortable:true</code>, а параметр{' '}
        <code>sort</code> не задан, это говорит о том, что столбец сортируемый (при наведении на его заголовок будет
        видна стрелка сортировки), но в данный момент к нему никакая сортировка не применена.
        <Separator />
        Если к сортируемому столбцу пока не применена сортировка, то значок-стрелка виден только при наведении на
        область заголовка и окрашивается в серый цвет. Если сортировка включена (первое нажатие - сортировка по
        возрастанию), то ее значок-стрелка остается видимым при снятии фокуса с заголовка и окрашивается в синий цвет.
        При повторном нажатии происходит сортировка в обратном порядке (стрелка меняет направление, по убыванию). При
        третьем нажатии сортировка отменяется.
        <Separator />
        При изменении сортировки столбца будет срабатывать колбек <code>onSortChange</code>, который будет возвращать
        объект со свойствами: <code>name</code> - уникальное имя столбца, к которому была применена сортировка,{' '}
        <code>sort</code> - тип сортировки ('asc' - возрастающая, 'desc' - убывающая и 'initial' - отмена сортировки,
        возврат к первоначальному состоянию). Сортировка массива строк происходит на стороне пользователя при
        срабатывании колбека <code>onSortChange</code>. Для столбца таблицы можно задать параметр <code>type</code>, на
        основе которого для столбцов одинакового типа можно задать единые функции сортировки.
        <Separator />
        Дизайн-системой предусматривается многоуровневая сортировка. Рекомендуется использовать не более ДВУХ уровней.
        Логика сортировки (взаимосвязи) выстраивается пользователем. При этом у иконок сортировки появляются цифры,
        обозначающие порядок (приоритет) сортировки.
      </T>
      <Separator $height={24} />
      <Table {...props} columnList={cols} rowList={rows} onSortChange={handleSort} onColumnResize={handleResize} />
    </>
  );
};
