import * as React from 'react';
import type { ComponentStory } from '@storybook/react';
import { Table } from '#src/components/TableRefactor';
import type { Column } from '#src/components/TableRefactor';
import { rowListSort } from '#src/components/TableRefactor/data';
import { TableRow } from '#src/components/TableRow';

type SortColumn = { [key: string]: 'asc' | 'desc' };

const StrToTime = (str: string) => {
  const res = str.split('.').reverse().join('-');
  return new Date(res).getTime();
};
const MAX_SORT_LEVEL = 2;

export const Template_Sort: ComponentStory<typeof Table> = ({ columnList, ...args }) => {
  const [rows, setRows] = React.useState([...rowListSort]);
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

    return sortColumns.reduce((acc: SortColumn, currentValue: Column) => {
      if (currentValue.sort) acc[currentValue.name] = currentValue.sort;
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

  const compare = (a: any, b: any, colName: string, sort: 'asc' | 'desc') => {
    if (sort === 'asc') {
      switch (colName) {
        case 'transfer_date':
          return StrToTime(a[colName]) - StrToTime(b[colName]);
        case 'transfer_amount':
          return Number(a[colName].replace(/\D/g, '')) - Number(b[colName].replace(/\D/g, ''));
        case 'rate':
        default:
          return a[colName] - b[colName];
      }
    } else {
      switch (colName) {
        case 'transfer_date':
          return StrToTime(b[colName]) - StrToTime(a[colName]);
        case 'transfer_amount':
          return Number(b[colName].replace(/\D/g, '')) - Number(a[colName].replace(/\D/g, ''));
        case 'rate':
        default:
          return b[colName] - a[colName];
      }
    }
  };

  React.useEffect(() => {
    const sortColumns = getOrderedSortColumns(cols);

    if (Object.keys(sortColumns).length === 0) {
      setRows([...rowListSort]);
    } else {
      const names = Object.keys(sortColumns);
      const newRows = [...rows].sort((a: any, b: any) => {
        const result = compare(a, b, names[0], sortColumns[names[0]]);

        if (!result && names.length > 1) {
          return compare(a, b, names[1], sortColumns[names[1]]);
        } else {
          return result;
        }
      });

      setRows(newRows);
    }
  }, [cols]);

  const renderRow = React.useCallback(
    (index: number) => {
      const rowData = rows[index];
      return <TableRow row={rowData} key={`row_${rowData.id}`} />;
    },
    [rows],
  );

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <Table
        {...args}
        columnList={cols}
        rowCount={rows.length}
        renderRow={renderRow}
        onSortChange={handleSort}
        onColumnResize={handleResize}
      />
    </>
  );
};
